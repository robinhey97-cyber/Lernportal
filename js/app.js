(() => {
'use strict';

const SUBJECTS = window.CONTENT || [];
const ACCOUNTS = window.ACCOUNTS || [];
const app = document.getElementById('app');
const $ = (s, el = document) => el.querySelector(s);

/* ---------- Hilfsfunktionen ---------- */
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const fmt = (n, d = 2) => Number(n).toLocaleString('de-DE', { minimumFractionDigits: d, maximumFractionDigits: d });
const shuffle = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const dayKey = (d = new Date()) => d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
const mmss = s => String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');
function parseNum(v) {
  v = String(v).replace(/[\s€%]/g, '');
  if (!v) return NaN;
  if (v.includes(',')) v = v.replace(/\./g, '').replace(',', '.');
  else if (/^\d{1,3}(\.\d{3})+$/.test(v)) v = v.replace(/\./g, '');
  return /^-?\d*\.?\d+$/.test(v) ? parseFloat(v) : NaN;
}
function note(p) {
  if (p >= 92) return ['1', 'sehr gut'];
  if (p >= 81) return ['2', 'gut'];
  if (p >= 67) return ['3', 'befriedigend'];
  if (p >= 50) return ['4', 'ausreichend'];
  if (p >= 30) return ['5', 'mangelhaft'];
  return ['6', 'ungenügend'];
}

/* ---------- Inhalte indexieren ---------- */
const TOPICS = {}, EX = {}, SUBJ = {};
SUBJECTS.forEach(s => {
  SUBJ[s.id] = s;
  s.topics.forEach((t, ti) => {
    t.subject = s; t.index = ti + 1; TOPICS[t.id] = t;
    t.exercises.forEach((e, i) => { e.id = t.id + '-' + (i + 1); e.topic = t; e.subject = s; EX[e.id] = e; });
  });
});
const allExercises = () => Object.values(EX);

/* ---------- Fortschritt ---------- */
const KEY = 'lernportal-v1';
const DEFAULTS = () => ({ done: {}, lessons: {}, tests: {}, exams: [], xp: 0, days: {}, focus: null });
let P = load();
function load() {
  try { return Object.assign(DEFAULTS(), JSON.parse(localStorage.getItem(KEY) || '{}')); } catch (e) { return DEFAULTS(); }
}
function save() { try { localStorage.setItem(KEY, JSON.stringify(P)); } catch (e) { /* ohne Speicher weiterlaufen */ } }
function record(id, ok) {
  const prev = P.done[id];
  P.done[id] = { ok, n: (prev ? prev.n : 0) + 1, t: Date.now() };
  if (ok) P.xp += prev && prev.ok ? 2 : 10;
  const k = dayKey();
  P.days[k] = (P.days[k] || 0) + 1;
  save();
  updateBadge();
}
const wrongList = () => allExercises().filter(e => P.done[e.id] && !P.done[e.id].ok);
function streak() {
  let n = 0; const d = new Date();
  if (!P.days[dayKey(d)]) d.setDate(d.getDate() - 1);
  while (P.days[dayKey(d)]) { n++; d.setDate(d.getDate() - 1); }
  return n;
}
function topicStats(t) {
  const ok = t.exercises.filter(e => P.done[e.id] && P.done[e.id].ok).length;
  return { ok, total: t.exercises.length, pct: Math.round(100 * ok / t.exercises.length) };
}
function subjStats(s) {
  let ok = 0, total = 0;
  s.topics.forEach(t => { const x = topicStats(t); ok += x.ok; total += x.total; });
  return { ok, total, pct: total ? Math.round(100 * ok / total) : 0 };
}
function updateBadge() {
  const b = $('#wrongBadge'), n = wrongList().length;
  b.hidden = !n; b.textContent = n;
}

/* ---------- Übungskomponenten ---------- */
const mount = {};

mount.mc = (box, ex, reveal, done) => {
  const multi = Array.isArray(ex.correct);
  const corr = new Set(multi ? ex.correct : [ex.correct]);
  const order = shuffle(ex.options.map((_, i) => i));
  box.innerHTML = `<div class="q">${ex.q}</div>${multi ? `<p class="hint">Mehrere Antworten sind richtig (${corr.size}).</p>` : ''}
    <div class="opts">${order.map(i => `<label class="opt"><input type="${multi ? 'checkbox' : 'radio'}" name="o" value="${i}"><span>${ex.options[i]}</span></label>`).join('')}</div>
    <button class="btn primary" data-chk disabled>Prüfen</button>`;
  const inputs = [...box.querySelectorAll('input')], btn = $('[data-chk]', box);
  inputs.forEach(i => i.addEventListener('change', () => { btn.disabled = !inputs.some(x => x.checked); }));
  btn.onclick = () => {
    const sel = new Set(inputs.filter(x => x.checked).map(x => +x.value));
    const ok = sel.size === corr.size && [...sel].every(v => corr.has(v));
    inputs.forEach(x => {
      x.disabled = true;
      if (reveal) {
        if (corr.has(+x.value)) x.parentElement.classList.add('right');
        else if (x.checked) x.parentElement.classList.add('wrong');
      }
    });
    btn.remove();
    done({ ok, answer: [...sel].map(i => ex.options[i]).join('; '), correct: [...corr].map(i => ex.options[i]).join('; ') });
  };
};

mount.calc = (box, ex, reveal, done) => {
  const unit = ex.unit || '', dec = ex.dec ?? 2;
  box.innerHTML = `<div class="q">${ex.q}</div>${ex.hint ? `<details class="tip"><summary>Tipp</summary>${ex.hint}</details>` : ''}
    <div class="calc"><input inputmode="decimal" autocomplete="off" placeholder="Dein Ergebnis"><span>${esc(unit)}</span></div>
    <button class="btn primary" data-chk>Prüfen</button>`;
  const inp = $('input', box), btn = $('[data-chk]', box);
  const go = () => {
    const v = parseNum(inp.value);
    if (isNaN(v)) { inp.classList.add('shake'); setTimeout(() => inp.classList.remove('shake'), 400); return; }
    const ok = Math.abs(v - ex.answer) <= (ex.tol ?? 0.01);
    inp.disabled = true;
    if (reveal) inp.classList.add(ok ? 'right' : 'wrong');
    btn.remove();
    done({ ok, answer: `${fmt(v, dec)} ${unit}`, correct: `${fmt(ex.answer, dec)} ${unit}` });
  };
  btn.onclick = go;
  inp.addEventListener('keydown', e => { if (e.key === 'Enter') go(); });
};

const acct = id => ACCOUNTS.find(a => a.id === id) || { id, name: id };
const acctLabel = a => (a.nr ? a.nr + ' ' : '') + a.name;
function bookingText(ans) {
  const side = rows => rows.map(([id, amt]) => `${esc(acctLabel(acct(id)))} ${fmt(amt)} €`).join(' <b>und</b> ');
  return `${side(ans.soll)} <b>an</b> ${side(ans.haben)}`;
}
mount.booking = (box, ex, reveal, done) => {
  const list = ex.accounts ? ex.accounts.map(acct) : ACCOUNTS;
  const groups = {};
  list.forEach(a => { (groups[a.grp || 'Konten'] = groups[a.grp || 'Konten'] || []).push(a); });
  const opts = '<option value="">– Konto wählen –</option>' + Object.keys(groups).map(g =>
    `<optgroup label="${esc(g)}">${groups[g].map(a => `<option value="${a.id}">${esc(acctLabel(a))}</option>`).join('')}</optgroup>`).join('');
  const rows = side => Array.from({ length: 3 }, () => `<div class="brow"><select data-side="${side}">${opts}</select><input data-side="${side}" inputmode="decimal" placeholder="Betrag in €"></div>`).join('');
  box.innerHTML = `<div class="q">${ex.q}</div>
    <p class="hint">Leere Zeilen einfach leer lassen.</p>
    <div class="bk"><div><h4>Soll</h4>${rows('s')}</div><div class="an">an</div><div><h4>Haben</h4>${rows('h')}</div></div>
    <button class="btn primary" data-chk>Prüfen</button>`;
  const btn = $('[data-chk]', box);
  const read = side => [...box.querySelectorAll(`select[data-side="${side}"]`)].map((sel, i) => {
    const amtEl = box.querySelectorAll(`input[data-side="${side}"]`)[i];
    return [sel.value, parseNum(amtEl.value)];
  }).filter(([id, amt]) => id || !isNaN(amt));
  const key = rows => rows.map(([id, amt]) => id + ':' + (isNaN(amt) ? 'x' : amt.toFixed(2))).sort().join('|');
  btn.onclick = () => {
    const s = read('s'), h = read('h');
    if (!s.length || !h.length) { btn.classList.add('shake'); setTimeout(() => btn.classList.remove('shake'), 400); return; }
    const ok = key(s) === key(ex.answer.soll) && key(h) === key(ex.answer.haben);
    box.querySelectorAll('select,input').forEach(x => { x.disabled = true; });
    btn.remove();
    done({
      ok, answer: s.length && h.length ? bookingText({ soll: s.map(([i, a]) => [i, isNaN(a) ? 0 : a]), haben: h.map(([i, a]) => [i, isNaN(a) ? 0 : a]) }) : '–',
      correct: bookingText(ex.answer)
    });
  };
};

mount.order = (box, ex, reveal, done) => {
  let items = shuffle(ex.items.map((t, i) => ({ t, i })));
  box.innerHTML = `<div class="q">${ex.q}</div><p class="hint">Bringe die Schritte mit ▲ ▼ in die richtige Reihenfolge.</p>
    <ol class="ord"></ol><button class="btn primary" data-chk>Prüfen</button>`;
  const ol = $('.ord', box), btn = $('[data-chk]', box);
  let locked = false;
  const draw = () => {
    ol.innerHTML = items.map((it, k) => `<li><span class="n">${k + 1}</span><span class="t">${it.t}</span>
      <span class="mv"><button data-up="${k}" ${k === 0 ? 'disabled' : ''}>▲</button> <button data-dn="${k}" ${k === items.length - 1 ? 'disabled' : ''}>▼</button></span></li>`).join('');
  };
  ol.addEventListener('click', e => {
    if (locked) return;
    const b = e.target.closest('button'); if (!b) return;
    const k = +(b.dataset.up ?? b.dataset.dn), j = b.dataset.up !== undefined ? k - 1 : k + 1;
    [items[k], items[j]] = [items[j], items[k]]; draw();
  });
  draw();
  btn.onclick = () => {
    locked = true; btn.remove(); ol.querySelectorAll('button').forEach(b => { b.disabled = true; });
    const ok = items.every((it, k) => it.i === k);
    done({ ok, answer: '<ol>' + items.map(i => `<li>${i.t}</li>`).join('') + '</ol>', correct: '<ol>' + ex.items.map(i => `<li>${i}</li>`).join('') + '</ol>' });
  };
};

mount.scenario = (box, ex, reveal, done) => {
  let k = 0, mistakes = 0, stepWrong = false;
  const show = () => {
    const st = ex.steps[k];
    const order = shuffle(st.options.map((_, i) => i));
    stepWrong = false;
    box.innerHTML = `<div class="scen"><b>🏢 Situation:</b> ${ex.intro}</div>
      <p class="hint">Entscheidung ${k + 1} von ${ex.steps.length}</p>
      <div class="q">${st.q}</div>
      <div class="opts">${order.map(i => `<button class="opt" data-i="${i}">${st.options[i].t}</button>`).join('')}</div>
      <div data-fb></div>`;
    box.querySelectorAll('button.opt').forEach(b => b.onclick = () => {
      const o = st.options[+b.dataset.i];
      const fb = $('[data-fb]', box);
      if (!o.ok) {
        if (!stepWrong) { mistakes++; stepWrong = true; }
        b.classList.add('wrong'); b.disabled = true;
        fb.innerHTML = `<div class="scen-fb bad">✗ ${o.fb || 'Das passt hier nicht. Versuch es noch einmal.'}</div>`;
        return;
      }
      box.querySelectorAll('button.opt').forEach(x => { x.disabled = true; });
      b.classList.add('right');
      const last = k === ex.steps.length - 1;
      fb.innerHTML = `<div class="scen-fb ok">✓ ${o.fb || 'Richtig!'}</div><button class="btn primary" data-sn>${last ? 'Szenario abschließen' : 'Weiter →'}</button>`;
      $('[data-sn]', fb).onclick = () => {
        if (!last) { k++; show(); return; }
        done({ ok: mistakes === 0, summary: `Du hast ${ex.steps.length} Entscheidungen getroffen, dabei ${mistakes === 0 ? 'keinen Fehlversuch' : mistakes + ' Fehlversuch(e)'}.`, answer: '–', correct: null });
      };
    });
  };
  show();
};

/* ---------- Session-Runner ---------- */
let S = null;
function stopTimer() { if (S && S.timer) { clearInterval(S.timer); S.timer = null; } }

function runner(cfg) {
  stopTimer();
  S = Object.assign({ i: 0, res: [], mode: 'practice' }, cfg);
  if (S.time) { S.deadline = Date.now() + S.time * 1000; S.timer = setInterval(tick, 1000); }
  step();
}
function tick() {
  const left = Math.max(0, Math.round((S.deadline - Date.now()) / 1000));
  const t = $('#timer'); if (t) t.textContent = mmss(left);
  if (left <= 0) finish();
}
function step() {
  if (S.i >= S.list.length) return finish();
  const ex = S.list[S.i];
  const pct = Math.round(100 * S.i / S.list.length);
  app.innerHTML = `<section>
    <div class="runner-head"><a href="${S.back || '#/'}">← Beenden</a><span>${esc(S.title)} · ${S.i + 1}/${S.list.length}</span>
      ${S.time ? '<span class="timer">⏱ <span id="timer"></span></span>' : '<span></span>'}</div>
    <div class="bar" style="--c:${ex.subject.color}"><i style="width:${pct}%"></i></div>
    <article class="card ex" style="--c:${ex.subject.color}">
      <span class="tag">${ex.subject.icon} ${esc(ex.subject.name)} · ${esc(ex.topic.title)}</span>
      <div id="exbox"></div><div id="fb"></div>
    </article></section>`;
  if (S.time) tick();
  const reveal = S.mode === 'practice';
  mount[ex.type]($('#exbox'), ex, reveal, res => {
    S.res.push({ ex, res });
    record(ex.id, res.ok);
    if (!reveal) { S.i++; step(); return; }
    $('#fb').innerHTML = `<div class="fb ${res.ok ? 'ok' : 'bad'}">
      <strong>${res.ok ? '✓ Richtig!' : '✗ Leider nicht richtig.'}</strong>
      ${res.summary ? `<p>${res.summary}</p>` : ''}
      ${!res.ok && res.correct ? `<p><b>Richtig wäre:</b> ${res.correct}</p>` : ''}
      ${ex.explain ? `<p>${ex.explain}</p>` : ''}
      <p class="small"><a href="#/thema/${ex.topic.id}/lektion">Lektion nachlesen</a></p>
      <button class="btn primary" id="next">${S.i + 1 >= S.list.length ? 'Ergebnis anzeigen' : 'Weiter →'}</button></div>`;
    $('#next').onclick = () => { S.i++; step(); };
    $('#next').scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  });
}
function finish() {
  stopTimer();
  const total = S.list.length;
  const okN = S.res.filter(r => r.res.ok).length;
  const pct = Math.round(100 * okN / total);
  if (S.onEnd) S.onEnd({ pct, okN, total });
  const answered = new Set(S.res.map(r => r.ex.id));
  const missed = S.list.filter(e => !answered.has(e.id));
  const [g, gname] = note(pct);
  const detailed = S.mode === 'test';
  const items = S.res.filter(r => detailed || !r.res.ok).map(({ ex, res }) => `
    <div class="item ${res.ok ? 'ok' : 'bad'}"><span class="st">${res.ok ? '✓' : '✗'}</span> <span class="small muted">${esc(ex.topic.title)}</span>
      <div class="q" style="font-size:1rem">${ex.q}</div>
      ${res.answer && res.answer !== '–' ? `<div><b>Deine Antwort:</b> ${res.answer}</div>` : ''}
      ${!res.ok && res.correct ? `<div><b>Richtig:</b> ${res.correct}</div>` : ''}
      ${ex.explain ? `<div class="small muted">${ex.explain}</div>` : ''}</div>`).join('');
  app.innerHTML = `<section class="card result">
    <h1>${esc(S.title)} – geschafft!</h1>
    <div class="score">${okN} / ${total}</div>
    <div class="muted">${pct} % richtig</div>
    ${S.grade ? `<div class="note">IHK-Note ${g} – ${gname}</div>` : ''}
    ${missed.length ? `<p class="muted">${missed.length} Aufgabe(n) wurden nicht mehr beantwortet.</p>` : ''}
    <p>${pct >= 80 ? '🎉 Stark! Das sitzt schon richtig gut.' : pct >= 50 ? '👍 Gute Basis – schau Dir die Fehler unten an und wiederhole sie.' : '💪 Kein Problem, genau dafür übst Du. Lies die Lektion nochmal und versuche es erneut.'}</p>
    <div class="chips" style="justify-content:center">
      <a class="btn primary" href="${S.again || '#/'}" onclick="if(location.hash==='${S.again}')location.reload()">Nochmal</a>
      <a class="btn" href="${S.back || '#/'}">Zurück</a>
      <a class="btn" href="#/wiederholen">Fehler wiederholen</a></div>
    ${items ? `<div class="review"><h2>${detailed ? 'Auswertung' : 'Das solltest Du wiederholen'}</h2>${items}</div>` : ''}
  </section>`;
  window.scrollTo(0, 0);
}

/* ---------- Mix-Generator ---------- */
function buildMix(n, onlySubject) {
  const subs = SUBJECTS.filter(s => !onlySubject || s.id === onlySubject);
  const eligible = t => P.lessons[t.id] || t.exercises.some(e => P.done[e.id]);
  const queues = subs.map(s => {
    const all = s.topics.flatMap(t => t.exercises);
    const wrong = shuffle(all.filter(e => P.done[e.id] && !P.done[e.id].ok));
    const unseen = all.filter(e => !P.done[e.id] && eligible(e.topic));
    const old = all.filter(e => P.done[e.id] && P.done[e.id].ok).sort((a, b) => P.done[a.id].t - P.done[b.id].t);
    return { id: s.id, q: [...wrong, ...unseen, ...old] };
  });
  let total = queues.reduce((a, q) => a + q.q.length, 0);
  if (total < 4) { // noch nichts gelesen -> trotzdem Aufgaben anbieten
    queues.forEach(qq => { qq.q = SUBJ[qq.id].topics.flatMap(t => t.exercises).filter(e => !P.done[e.id]); });
  }
  const focus = P.focus && P.focus.date === dayKey() ? P.focus.subj : null;
  const order = [];
  queues.forEach(q => { order.push(q.id); if (q.id === focus) order.push(q.id); });
  const out = []; let scen = 0, guard = 0;
  while (out.length < n && guard++ < 500) {
    let progressed = false;
    for (const id of order) {
      if (out.length >= n) break;
      const q = queues.find(x => x.id === id).q;
      while (q.length) {
        const e = q.shift();
        if (e.type === 'scenario' && scen >= 1) continue;
        if (e.type === 'scenario') scen++;
        out.push(e); progressed = true; break;
      }
    }
    if (!progressed) break;
  }
  return shuffle(out);
}

/* ---------- Seiten ---------- */
function setNav(n) { document.querySelectorAll('#nav a').forEach(a => a.classList.toggle('on', a.dataset.n === n)); }

function home() {
  setNav('home');
  const today = P.days[dayKey()] || 0, goal = 10;
  const lvl = Math.floor(P.xp / 100) + 1;
  const focus = P.focus && P.focus.date === dayKey() ? P.focus.subj : null;
  const wr = wrongList().length;
  let next = null;
  const fs = focus ? [SUBJ[focus]] : SUBJECTS;
  for (const s of fs) { const t = s.topics.find(t => !P.lessons[t.id]); if (t) { next = t; break; } }
  app.innerHTML = `
  <section class="hero">
    <h1>Willkommen zurück 👋</h1>
    <p>Lernen durch Anwenden: Jeden Tag ein bunter Mix aus allen Fächern – genau wie in der Schule.</p>
    <div class="chips" id="focus"><span class="small" style="align-self:center;opacity:.9">Heute in der Schule:</span>
      ${SUBJECTS.map(s => `<button class="chip ${focus === s.id ? 'on' : ''}" data-f="${s.id}">${s.icon} ${esc(s.name)}</button>`).join('')}
      <button class="chip ${!focus ? 'on' : ''}" data-f="">Alles gemischt</button></div>
    <a class="btn primary big" href="#/mix">▶ Tagesmix starten</a>
    <div class="goal"><div class="small">Tagesziel: ${Math.min(today, goal)} / ${goal} Aufgaben</div><div class="bar"><i style="width:${Math.min(100, today / goal * 100)}%"></i></div></div>
    <div class="stats">
      <div class="stat"><b>🔥 ${streak()}</b><span>Tage am Stück</span></div>
      <div class="stat"><b>⭐ Level ${lvl}</b><span>${P.xp} XP</span></div>
      <div class="stat"><b>✓ ${Object.values(P.done).filter(d => d.ok).length}</b><span>gemeisterte Aufgaben</span></div>
    </div>
  </section>
  ${next ? `<a class="card topic" style="margin-top:16px;--c:${next.subject.color}" href="#/thema/${next.id}/lektion"><div class="num">${next.subject.icon}</div><div class="body"><div class="small muted">Nächste Lektion ${focus ? '(' + esc(next.subject.name) + ')' : ''}</div><h3>${esc(next.title)}</h3></div><span class="btn">Lesen →</span></a>` : ''}
  <h2>Fächer</h2>
  <div class="grid">${SUBJECTS.map(s => { const st = subjStats(s); return `
    <a class="card subj" style="--c:${s.color}" href="#/fach/${s.id}"><div class="ic">${s.icon}</div><h3>${esc(s.name)}</h3><p>${esc(s.full)}</p>
      <div class="bar"><i style="width:${st.pct}%"></i></div><div class="small muted" style="margin-top:6px">${st.ok}/${st.total} Aufgaben gemeistert · ${s.topics.length} Themen</div></a>`; }).join('')}</div>
  <h2>Training</h2>
  <div class="grid">
    <a class="card subj" style="--c:#dc2626" href="#/wiederholen"><div class="ic">🔁</div><h3>Fehler wiederholen</h3><p>${wr ? wr + ' Aufgabe(n), die Du noch nicht sicher kannst.' : 'Noch keine Fehler – sobald Du welche machst, landen sie hier.'}</p></a>
    <a class="card subj" style="--c:#0ea5e9" href="#/pruefung"><div class="ic">📝</div><h3>Prüfungssimulation</h3><p>Fragen unter Zeitdruck, bewertet mit dem IHK-Notenschlüssel.${P.exams.length ? ' Letztes Ergebnis: ' + P.exams[P.exams.length - 1].pct + ' %.' : ''}</p></a>
  </div>`;
  $('#focus').addEventListener('click', e => {
    const b = e.target.closest('[data-f]'); if (!b) return;
    P.focus = b.dataset.f ? { date: dayKey(), subj: b.dataset.f } : null; save(); home();
  });
}

function subject(id) {
  const s = SUBJ[id]; if (!s) return home();
  setNav('home');
  const mixBtn = `<a class="btn" href="#/mix/${s.id}">Nur ${esc(s.name)} üben</a>`;
  app.innerHTML = `<div class="crumbs"><a href="#/">Start</a> › ${esc(s.name)}</div>
    <h1>${s.icon} ${esc(s.name)} <span class="muted" style="font-size:1rem;font-weight:500">${esc(s.full)}</span></h1>
    <p class="muted">${s.desc}</p>${mixBtn}
    <h2>Themen</h2>
    ${s.topics.map(t => { const st = topicStats(t), test = P.tests[t.id]; return `
      <a class="card topic" style="--c:${s.color}" href="#/thema/${t.id}/lektion"><div class="num">${t.index}</div>
        <div class="body"><h3>${esc(t.title)}</h3><div class="muted small">${esc(t.summary || '')}</div>
          <div class="bar" style="margin-top:8px;--c:${s.color}"><i style="width:${st.pct}%"></i></div>
          <div class="tags"><span class="tag ${P.lessons[t.id] ? 'ok' : ''}">${P.lessons[t.id] ? '✓ Lektion gelesen' : 'Lektion offen'}</span>
            <span class="tag">${st.ok}/${st.total} Aufgaben</span>${test ? `<span class="tag ok">Test: ${test.pct} %</span>` : ''}<span class="tag">~${t.minutes || 15} Min.</span></div></div></a>`; }).join('')}`;
}

function topic(id, tab) {
  const t = TOPICS[id]; if (!t) return home();
  setNav('home');
  const head = `<div class="crumbs"><a href="#/">Start</a> › <a href="#/fach/${t.subject.id}">${esc(t.subject.name)}</a> › ${esc(t.title)}</div>
    <h1>${esc(t.title)}</h1>
    ${(t.modul || []).length ? `<div class="tags" style="margin:-4px 0 8px">${t.modul.map(c => `<span class="tag">${c}</span>`).join('')}</div>` : ''}
    <div class="tabs"><a href="#/thema/${id}/lektion" class="${tab === 'lektion' ? 'on' : ''}">📖 Lektion</a>
      <a href="#/thema/${id}/ueben" class="${tab === 'ueben' ? 'on' : ''}">✍️ Üben</a>
      <a href="#/thema/${id}/test" class="${tab === 'test' ? 'on' : ''}">🎯 Test</a></div>`;
  if (tab === 'lektion') {
    app.innerHTML = head + `<article class="card lesson" style="border-top:5px solid ${t.subject.color}">${t.lesson}</article>
      <div class="cta"><div><b>Jetzt anwenden!</b><div class="muted small">${t.exercises.length} Aufgaben warten – erst durch Üben bleibt das Wissen hängen.</div></div>
      <a class="btn primary" href="#/thema/${id}/ueben" id="toPractice">Zu den Aufgaben →</a></div>`;
    if (!P.lessons[id]) { P.lessons[id] = true; save(); }
    return;
  }
  if (tab === 'ueben') {
    runner({ title: t.title, list: t.exercises, mode: 'practice', back: `#/fach/${t.subject.id}`, again: `#/thema/${id}/ueben` });
    return;
  }
  const pool = t.exercises.filter(e => e.type !== 'scenario');
  const n = Math.min(8, pool.length), prev = P.tests[id];
  app.innerHTML = head + `<div class="card empty"><div style="font-size:2.5rem">🎯</div><h2 style="margin-top:0">Themen-Test</h2>
    <p>${n} Fragen aus diesem Thema – ohne Hilfe, Auswertung am Ende wie in der Prüfung.</p>
    ${prev ? `<p class="muted">Bisher bester Wert: <b>${prev.pct} %</b></p>` : ''}
    <button class="btn primary big" id="startTest">Test starten</button></div>`;
  $('#startTest').onclick = () => runner({
    title: 'Test: ' + t.title, list: shuffle(pool).slice(0, n), mode: 'test', grade: true,
    back: `#/thema/${id}/lektion`, again: `#/thema/${id}/test`,
    onEnd: r => { if (!prev || r.pct > prev.pct) { P.tests[id] = { pct: r.pct, t: Date.now() }; save(); } }
  });
}

function startMix(sid) {
  setNav('mix');
  const list = buildMix(10, sid);
  if (!list.length) { app.innerHTML = `<div class="card empty"><h2>Alles erledigt 🎉</h2><p>Keine Aufgaben übrig.</p><a class="btn primary" href="#/">Zur Startseite</a></div>`; return; }
  runner({ title: sid ? 'Mix: ' + SUBJ[sid].name : 'Tagesmix', list, mode: 'practice', back: '#/', again: sid ? '#/mix/' + sid : '#/mix' });
}
function startReview() {
  setNav('wiederholen');
  const list = shuffle(wrongList()).slice(0, 15);
  if (!list.length) { app.innerHTML = `<div class="card empty"><div style="font-size:2.5rem">✅</div><h2>Keine offenen Fehler</h2><p>Wenn Du Aufgaben falsch beantwortest, kommen sie hierher – bis Du sie sicher kannst.</p><a class="btn primary" href="#/mix">Tagesmix starten</a></div>`; return; }
  runner({ title: 'Fehler wiederholen', list, mode: 'practice', back: '#/', again: '#/wiederholen' });
}
function examSetup() {
  setNav('pruefung');
  app.innerHTML = `<h1>📝 Prüfungssimulation</h1>
    <p class="muted">Beantworte Fragen unter Zeitdruck – ohne Rückmeldung während der Prüfung. Danach bekommst Du eine Auswertung mit IHK-Note (100–92 % = 1, unter 92–81 % = 2, unter 81–67 % = 3, unter 67–50 % = 4, unter 50–30 % = 5, darunter 6).</p>
    <div class="card"><div class="form">
      <div><label>Fach</label><select id="exS"><option value="">Alle Fächer</option>${SUBJECTS.map(s => `<option value="${s.id}">${esc(s.name)}</option>`).join('')}</select></div>
      <div><label>Fragen</label><select id="exN"><option>10</option><option selected>20</option><option>30</option></select></div>
      <button class="btn primary big" id="exGo">Prüfung starten</button></div>
      ${P.exams.length ? `<p class="small muted" style="margin-bottom:0">Bisherige Versuche: ${P.exams.slice(-5).map(e => e.pct + ' %').join(', ')}</p>` : ''}</div>`;
  $('#exGo').onclick = () => {
    const sid = $('#exS').value, n = +$('#exN').value;
    const pool = allExercises().filter(e => e.type !== 'scenario' && (!sid || e.subject.id === sid));
    const list = shuffle(pool).slice(0, n);
    runner({ title: 'Prüfung', list, mode: 'test', grade: true, time: list.length * 90, back: '#/pruefung', again: '#/pruefung',
      onEnd: r => { P.exams.push({ pct: r.pct, t: Date.now() }); save(); } });
  };
}

function modules() {
  setNav('module');
  const by = {};
  allTopics().forEach(t => (t.modul || []).forEach(c => { (by[c] = by[c] || []).push(t); }));
  const total = (window.MODULES || []).reduce((n, b) => n + b.items.length, 0);
  const have = Object.keys(by).length;
  app.innerHTML = `<h1>📚 Module</h1>
    <p class="muted">Deine Lernmatrix: Hier siehst Du, zu welchen Modulen es schon Lernstoff gibt (${have} von ${total}). Die Reihenfolge ist egal – wähle das Modul, das in der Schule dran war.</p>
    ${(window.MODULES || []).map(b => `<h2>${esc(b.block)}</h2><div class="card" style="padding:6px 16px">${b.items.map(([c, n]) => {
      const ts = by[c] || [];
      return `<div class="mod"><span class="code">${c.replace('KBM.', '')}</span><span class="mn">${esc(n)}</span>${ts.length
        ? ts.map(t => `<a class="tag ok" href="#/thema/${t.id}/lektion">${t.subject.icon} ${esc(t.title)}</a>`).join('')
        : '<span class="tag">noch nicht gebaut</span>'}</div>`;
    }).join('')}</div>`).join('')}`;
}
function allTopics() { return Object.values(TOPICS); }

/* ---------- Router ---------- */
function route() {
  stopTimer();
  const [a, b, c] = location.hash.replace(/^#\/?/, '').split('/');
  window.scrollTo(0, 0);
  if (a === 'fach') return subject(b);
  if (a === 'thema') return topic(b, c || 'lektion');
  if (a === 'mix') return startMix(b);
  if (a === 'wiederholen') return startReview();
  if (a === 'pruefung') return examSetup();
  if (a === 'module') return modules();
  home();
}
window.addEventListener('hashchange', route);

/* ---------- Sichern / Laden / Zurücksetzen ---------- */
$('#exportBtn').onclick = e => {
  e.preventDefault();
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([JSON.stringify(P)], { type: 'application/json' }));
  a.download = 'lernportal-fortschritt.json'; a.click();
};
$('#importBtn').onclick = e => { e.preventDefault(); $('#importFile').click(); };
$('#importFile').onchange = ev => {
  const f = ev.target.files[0]; if (!f) return;
  f.text().then(txt => { P = Object.assign(DEFAULTS(), JSON.parse(txt)); save(); updateBadge(); route(); })
    .catch(() => alert('Die Datei konnte nicht gelesen werden.'));
};
$('#resetBtn').onclick = e => {
  e.preventDefault();
  if (confirm('Wirklich den gesamten Lernfortschritt löschen?')) { P = DEFAULTS(); save(); updateBadge(); route(); }
};

updateBadge();
route();
})();
