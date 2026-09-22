const express = require('express');
const session = require('express-session');
const bcrypt = require('bcryptjs');
const path = require('path');
const QUESTIONS = require('./questions');

const PORT = process.env.PORT || 3000;
const ADMIN_USER = process.env.ADMIN_USER || 'aline01';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'aline01';

const app = express();
app.set('trust proxy', 1);
app.use(express.json({ limit: '1mb' }));
app.use(session({
  secret: process.env.SESSION_SECRET || 'troque-esta-chave-em-producao',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 12 * 60 * 60 * 1000 }
}));
app.use(express.static(path.join(__dirname, 'public')));

// ---------- Banco de dados ----------
// Local: SQLite (survey.db) | Produção: Postgres/Supabase via DATABASE_URL
const db = require('./db');

const QUESTIONS_DDL = db.isPostgres
  ? `CREATE TABLE IF NOT EXISTS questions (
      id SERIAL PRIMARY KEY,
      text TEXT NOT NULL,
      options TEXT NOT NULL,
      correct INTEGER NULL
    )`
  : `CREATE TABLE IF NOT EXISTS questions (
      id INTEGER PRIMARY KEY,
      text TEXT NOT NULL,
      options TEXT NOT NULL,
      correct INTEGER NULL
    )`;

const RESPONSES_DDL = db.isPostgres
  ? `CREATE TABLE IF NOT EXISTS responses (
      id SERIAL PRIMARY KEY,
      created_at TIMESTAMP NOT NULL DEFAULT NOW()
    )`
  : `CREATE TABLE IF NOT EXISTS responses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      created_at TEXT NOT NULL DEFAULT (datetime('now', 'localtime'))
    )`;

async function initDb() {
  await db.batch([
    QUESTIONS_DDL,
    RESPONSES_DDL,
    `CREATE TABLE IF NOT EXISTS answers (
      response_id INTEGER NOT NULL REFERENCES responses(id) ON DELETE CASCADE,
      question_id INTEGER NOT NULL,
      option_index INTEGER NOT NULL
    )`,
    `CREATE TABLE IF NOT EXISTS users (
      username TEXT PRIMARY KEY,
      password_hash TEXT NOT NULL
    )`
  ]);

  // Seed das perguntas (só na primeira vez)
  const qCount = Number((await db.execute('SELECT COUNT(*) AS c FROM questions')).rows[0].c);
  if (qCount === 0) {
    await db.batch(QUESTIONS.map(q => ({
      sql: 'INSERT INTO questions (text, options, correct) VALUES (?, ?, ?)',
      args: [q.text, JSON.stringify(q.options), q.correct]
    })));
    console.log(`Seed: ${QUESTIONS.length} perguntas inseridas.`);
  }

  // Seed do admin (só na primeira vez)
  const adminExists = (await db.execute({ sql: 'SELECT 1 FROM users WHERE username = ?', args: [ADMIN_USER] })).rows[0];
  if (!adminExists) {
    const hash = bcrypt.hashSync(ADMIN_PASSWORD, 10);
    await db.execute({ sql: 'INSERT INTO users (username, password_hash) VALUES (?, ?)', args: [ADMIN_USER, hash] });
    console.log(`Seed: usuário admin criado (login: ${ADMIN_USER})`);
  }
}

async function getQuestions() {
  const rs = await db.execute('SELECT id, text, options, correct FROM questions ORDER BY id');
  return rs.rows.map(r => ({ id: r.id, text: r.text, options: JSON.parse(r.options), correct: r.correct }));
}

// ---------- Rotas públicas ----------
app.get('/api/health', (req, res) => res.json({ ok: true }));

app.get('/api/questions', async (req, res) => {
  const list = (await getQuestions()).map(({ correct, ...rest }) => rest); // esconde o gabarito
  res.json(list);
});

app.post('/api/submit', async (req, res) => {
  const { answers } = req.body || {};
  const questions = await getQuestions();

  if (!Array.isArray(answers) || answers.length !== questions.length) {
    return res.status(400).json({ error: 'Responda todas as 20 perguntas.' });
  }
  const seen = new Set();
  for (const a of answers) {
    const q = questions.find(x => x.id === a.questionId);
    if (!q || !Number.isInteger(a.optionIndex) || a.optionIndex < 0 || a.optionIndex > 3) {
      return res.status(400).json({ error: 'Resposta inválida.' });
    }
    if (seen.has(a.questionId)) return res.status(400).json({ error: 'Resposta duplicada.' });
    seen.add(a.questionId);
  }

  const r = await db.execute('INSERT INTO responses DEFAULT VALUES RETURNING id');
  const responseId = Number(r.rows[0].id);
  await db.batch(answers.map(a => ({
    sql: 'INSERT INTO answers (response_id, question_id, option_index) VALUES (?, ?, ?)',
    args: [responseId, a.questionId, a.optionIndex]
  })));
  res.json({ ok: true });
});

// ---------- Auth admin ----------
function requireAuth(req, res, next) {
  if (req.session && req.session.admin) return next();
  res.status(401).json({ error: 'Não autenticado.' });
}

app.get('/api/admin/me', (req, res) => {
  res.json({ loggedIn: !!(req.session && req.session.admin), username: req.session.admin || null });
});

app.post('/api/admin/login', async (req, res) => {
  const { username, password } = req.body || {};
  const rs = username
    ? await db.execute({ sql: 'SELECT * FROM users WHERE username = ?', args: [username] })
    : { rows: [] };
  const user = rs.rows[0];
  if (!user || !bcrypt.compareSync(password || '', user.password_hash)) {
    return res.status(401).json({ error: 'Usuário ou senha inválidos.' });
  }
  req.session.admin = user.username;
  res.json({ ok: true });
});

app.post('/api/admin/logout', (req, res) => {
  req.session.destroy(() => res.json({ ok: true }));
});

app.post('/api/admin/change-password', requireAuth, async (req, res) => {
  const { currentPassword, newPassword } = req.body || {};
  if (!newPassword || newPassword.length < 4) {
    return res.status(400).json({ error: 'A nova senha deve ter ao menos 4 caracteres.' });
  }
  const rs = await db.execute({ sql: 'SELECT * FROM users WHERE username = ?', args: [req.session.admin] });
  const user = rs.rows[0];
  if (!bcrypt.compareSync(currentPassword || '', user.password_hash)) {
    return res.status(401).json({ error: 'Senha atual incorreta.' });
  }
  await db.execute({
    sql: 'UPDATE users SET password_hash = ? WHERE username = ?',
    args: [bcrypt.hashSync(newPassword, 10), req.session.admin]
  });
  res.json({ ok: true });
});

// ---------- Resultados ----------
async function buildResults() {
  const questions = await getQuestions();
  const totalResponses = Number((await db.execute('SELECT COUNT(*) AS c FROM responses')).rows[0].c);
  const data = [];
  for (const q of questions) {
    const votes = [0, 0, 0, 0];
    const rows = (await db.execute({
      sql: 'SELECT option_index AS o, COUNT(*) AS c FROM answers WHERE question_id = ? GROUP BY option_index',
      args: [q.id]
    })).rows;
    for (const row of rows) votes[Number(row.o)] = Number(row.c);
    const total = votes.reduce((a, b) => a + b, 0);
    const percentages = votes.map(v => (total ? Math.round((v / total) * 1000) / 10 : 0));
    const correctRate = q.correct === null || total === 0
      ? null
      : Math.round((votes[q.correct] / total) * 1000) / 10;
    data.push({ id: q.id, text: q.text, options: q.options, correct: q.correct, votes, total, percentages, correctRate });
  }
  return { totalResponses, questions: data };
}

app.get('/api/admin/results', requireAuth, async (req, res) => {
  res.json(await buildResults());
});

app.post('/api/admin/reset', requireAuth, async (req, res) => {
  await db.batch(['DELETE FROM answers', 'DELETE FROM responses']);
  res.json({ ok: true });
});

// Sincroniza as perguntas do banco com o arquivo questions.js (sem recriar o site)
// Lê o arquivo fresco do disco: basta editar questions.js e clicar em sincronizar.
app.post('/api/admin/sync-questions', requireAuth, async (req, res) => {
  delete require.cache[require.resolve('./questions')];
  const FILE_QUESTIONS = require('./questions');
  const current = await getQuestions();
  const same = current.length === FILE_QUESTIONS.length && current.every((q, i) =>
    q.text === FILE_QUESTIONS[i].text &&
    JSON.stringify(q.options) === JSON.stringify(FILE_QUESTIONS[i].options) &&
    (q.correct === FILE_QUESTIONS[i].correct || (q.correct == null && FILE_QUESTIONS[i].correct == null))
  );
  if (same) return res.json({ ok: true, changed: false, message: 'As perguntas já estão atualizadas.' });
  const total = Number((await db.execute('SELECT COUNT(*) AS c FROM responses')).rows[0].c);
  if (total > 0) {
    return res.status(400).json({ error: `Há ${total} resposta(s) registrada(s). Apague as respostas antes de trocar as perguntas.` });
  }
  await db.batch(['DELETE FROM answers', 'DELETE FROM responses']);
  if (db.isPostgres) {
    await db.execute('TRUNCATE questions RESTART IDENTITY');
  } else {
    await db.execute('DELETE FROM questions');
    await db.execute("DELETE FROM sqlite_sequence WHERE name='questions'");
  }
  await db.batch(FILE_QUESTIONS.map(q => ({
    sql: 'INSERT INTO questions (text, options, correct) VALUES (?, ?, ?)',
    args: [q.text, JSON.stringify(q.options), q.correct]
  })));
  res.json({ ok: true, changed: true, message: 'Perguntas atualizadas com sucesso!' });
});

app.get('/api/admin/export', requireAuth, async (req, res) => {
  const { totalResponses, questions } = await buildResults();
  const lines = ['pergunta;alternativa;votos;porcentagem'];
  for (const q of questions) {
    q.options.forEach((opt, i) => {
      lines.push(`"${q.text.replace(/"/g, '""')}";"${opt.replace(/"/g, '""')}";${q.votes[i]};${q.percentages[i]}`);
    });
  }
  res.setHeader('Content-Type', 'text/csv; charset=utf-8');
  res.setHeader('Content-Disposition', 'attachment; filename="pesquisa-consciencia-negra.csv"');
  res.send('\uFEFF' + `Total de respostas: ${totalResponses}\n` + lines.join('\n'));
});

async function main() {
  await initDb();
  app.listen(PORT, () => {
    console.log(`Servidor no ar: http://localhost:${PORT}`);
    console.log(`Pesquisa: http://localhost:${PORT}/`);
    console.log(`Painel admin: http://localhost:${PORT}/admin.html`);
  });
}
main().catch(err => { console.error(err); process.exit(1); });
