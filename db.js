// Camada de banco: SQLite local (libsql) ou Postgres (Supabase) em produção.
// Troca automática: se DATABASE_URL começar com "postgres", usa pg.
const path = require('path');

const usePostgres = (process.env.DATABASE_URL || '').startsWith('postgres');

let pgPool = null;
let libsqlDb = null;

if (usePostgres) {
  const { Pool } = require('pg');
  pgPool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  });
} else {
  const { createClient } = require('@libsql/client');
  libsqlDb = createClient({
    url: process.env.DATABASE_URL || ('file:' + path.join(__dirname, 'survey.db')),
    authToken: process.env.DATABASE_AUTH_TOKEN
  });
}

function toPg(sql) {
  let i = 0;
  return sql.replace(/\?/g, () => '$' + (++i));
}

async function executePg(sqlOrObj) {
  const sql = typeof sqlOrObj === 'string' ? sqlOrObj : sqlOrObj.sql;
  const args = typeof sqlOrObj === 'string' ? [] : (sqlOrObj.args || []);
  const res = await pgPool.query(toPg(sql), args);
  return { rows: res.rows };
}

module.exports = {
  isPostgres: usePostgres,
  execute(s) {
    return usePostgres ? executePg(s) : libsqlDb.execute(s);
  },
  async batch(stmts) {
    if (!usePostgres) return libsqlDb.batch(stmts);
    const out = [];
    for (const st of stmts) out.push(await executePg(st));
    return out;
  }
};
