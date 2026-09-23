async function initSurvey(slug) {
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  const form = document.getElementById('survey');
  const loading = document.getElementById('loading');
  const done = document.getElementById('done');
  const already = document.getElementById('already');
  const FLAG = 'pesquisa_respondida_' + slug;
  const EPKEY = 'pesquisa_epoch_' + slug;
  let questions = [];
  let currentEpoch = null;

  function showAlready() {
    loading.style.display = 'none';
    form.style.display = 'none';
    done.style.display = 'none';
    already.style.display = 'block';
  }

  async function load() {
    let meta;
    try {
      const r = await fetch('/api/surveys/' + slug + '/questions');
      if (!r.ok) throw 0;
      meta = await r.json();
    } catch (e) {
      loading.textContent = 'Não foi possível carregar. Verifique sua conexão e recarregue a página.';
      return;
    }
    document.title = meta.survey.title + ' – Escola Estadual Professor Manoel Rufino';
    document.getElementById('surveyTitle').textContent = meta.survey.title;
    document.getElementById('surveyDesc').textContent = meta.survey.description;
    questions = meta.questions;
    try {
      const er = await fetch('/api/surveys/' + slug + '/epoch');
      currentEpoch = (await er.json()).epoch;
      if (localStorage.getItem(EPKEY) !== currentEpoch) {
        localStorage.removeItem(FLAG);
        localStorage.setItem(EPKEY, currentEpoch);
      }
    } catch (e) { /* sem rede: segue o jogo */ }
    if (localStorage.getItem(FLAG) === '1') { showAlready(); return; }
    loading.style.display = 'none';
    form.style.display = 'block';
    questions.forEach((q, i) => {
      const div = document.createElement('div');
      div.className = 'card';
      let body = '';
      if (q.qtype === 'single') {
        body = q.options.map((opt, j) =>
          `<label class="opt"><input type="radio" name="q${q.id}" value="${j}"${q.required ? ' required' : ''}> <b>${letters[j]}</b>) ${opt}</label>`
        ).join('');
      } else if (q.qtype === 'multiple') {
        body = `<p class="muted" style="margin:0 0 8px">Marque todas as que se aplicam</p>` + q.options.map((opt, j) =>
          `<label class="opt"><input type="checkbox" name="q${q.id}" value="${j}"> <b>${letters[j]}</b>) ${opt}</label>`
        ).join('');
      } else {
        body = `<textarea name="q${q.id}" rows="4" placeholder="Digite sua resposta..."${q.required ? ' required' : ''}></textarea>`;
      }
      div.innerHTML = `<p class="q-title"><span class="num">${i + 1}</span>${q.text}${q.required ? '' : ' <small class="muted">(opcional)</small>'}</p>` + body;
      form.appendChild(div);
    });
    const btn = document.createElement('button');
    btn.type = 'submit';
    btn.textContent = 'Enviar respostas';
    const wrap = document.createElement('div');
    wrap.className = 'center';
    wrap.appendChild(btn);
    form.appendChild(wrap);
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    if (btn.disabled) return;
    btn.disabled = true;
    const originalText = btn.textContent;
    btn.textContent = 'Enviando...';
    const fail = (msg) => { alert(msg); btn.disabled = false; btn.textContent = originalText; };
    const answers = [];
    for (let idx = 0; idx < questions.length; idx++) {
      const q = questions[idx];
      if (q.qtype === 'single') {
        const checked = form.querySelector(`input[name="q${q.id}"]:checked`);
        if (!checked) {
          if (q.required) { fail(`Responda a pergunta ${idx + 1}.`); return; }
          answers.push({ questionId: q.id, optionIndex: null });
        } else {
          answers.push({ questionId: q.id, optionIndex: Number(checked.value) });
        }
      } else if (q.qtype === 'multiple') {
        const vals = [...form.querySelectorAll(`input[name="q${q.id}"]:checked`)].map(el => Number(el.value));
        if (q.required && !vals.length) { fail(`Marque ao menos uma opção na pergunta ${idx + 1}.`); return; }
        answers.push({ questionId: q.id, optionIndexes: vals });
      } else {
        const ta = form.querySelector(`textarea[name="q${q.id}"]`);
        const t = (ta.value || '').trim();
        if (q.required && !t) { fail(`Responda a pergunta ${idx + 1}.`); ta.focus(); return; }
        answers.push({ questionId: q.id, text: t });
      }
    }
    let res;
    try {
      res = await fetch('/api/surveys/' + slug + '/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers })
      });
    } catch (err) {
      fail('Sem conexão. Tente novamente.');
      return;
    }
    if (res.ok) {
      localStorage.setItem(FLAG, '1');
      if (currentEpoch) localStorage.setItem(EPKEY, currentEpoch);
      form.style.display = 'none';
      done.style.display = 'block';
      window.scrollTo(0, 0);
    } else if (res.status === 403) {
      localStorage.setItem(FLAG, '1');
      if (currentEpoch) localStorage.setItem(EPKEY, currentEpoch);
      showAlready();
      window.scrollTo(0, 0);
    } else {
      const data = await res.json().catch(() => ({}));
      fail(data.error || 'Erro ao enviar. Tente novamente.');
    }
  });

  load();
}
