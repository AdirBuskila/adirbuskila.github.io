/* ==========================================================================
   TOOLS CONFIG — the only thing you ever need to edit.

   Live tools fill the bento deck; status: 'soon' entries (subject, nameHe,
   year, accent only) render as compact tiles in the "In the lab" section.

   To launch a lab course: flip it to status: 'live' and fill in tag, blurb,
   glyph (add one to the glyphs map), url and repo. It then moves into the
   deck automatically and the header counter updates. NOTE: the deck's bento
   grid rules in styles.css (.deck > .tile:nth-child) are tuned for exactly
   8 tiles, so a 9th+ live tile means re-tuning them.
   ========================================================================== */

const tools = [
  {
    subject: 'Data Science',
    tag: 'QUIZ ENGINE',
    blurb: 'Exam-style question drills for the data science course — instant feedback, topic breakdowns, zero setup.',
    status: 'live',
    url: 'https://adirbuskila.github.io/data-science-quiz/',
    repo: 'https://github.com/AdirBuskila/data-science-quiz',
    accent: '#22d3ee',
    glyph: 'plot',
  },
  {
    subject: 'Algorithms',
    tag: 'VISUAL TRAINER',
    blurb: 'Watch graphs, max-flow and shortest-path algorithms run step by step — then train on them yourself.',
    status: 'live',
    url: 'https://algorithms-theta.vercel.app/',
    repo: 'https://github.com/AdirBuskila/algorithms',
    accent: '#a78bfa',
    glyph: 'graph',
  },
  {
    subject: 'Operating Systems',
    tag: 'EXAM SIMULATOR',
    blurb: 'An exam trainer distilled from 14 years of past exams — drill by topic and find your weak spots.',
    status: 'live',
    url: 'https://adirbuskila.github.io/os-exam-trainer/#home',
    repo: 'https://github.com/AdirBuskila/os-exam-trainer',
    accent: '#fbbf24',
    glyph: 'rings',
  },
  {
    subject: 'Software Engineering',
    tag: 'PRACTICE KIT',
    blurb: 'Design patterns, UML and testing drills — the theory half of SWE, made practicable.',
    status: 'live',
    url: 'https://adirbuskila.github.io/software-engineering-quiz/',
    repo: 'https://github.com/AdirBuskila/software-engineering-quiz',
    accent: '#34d399',
    glyph: 'brackets',
  },
  {
    subject: 'Machine Learning',
    tag: 'QUIZ + THEORY',
    blurb: 'Exam-style drills plus a study mode with the core formulas — 13 topics of the ML course, instant feedback.',
    status: 'live',
    url: 'https://adirbuskila.github.io/machine-learning-quiz/',
    repo: 'https://github.com/AdirBuskila/machine-learning-quiz',
    accent: '#fb7185',
    glyph: 'net',
  },
  {
    subject: 'Databases',
    tag: 'QUERY GYM',
    blurb: 'SQL, ERD, relational algebra and normalization — 206 questions pulled straight from past exams.',
    status: 'live',
    url: 'https://adirbuskila.github.io/databases-quiz/',
    repo: 'https://github.com/AdirBuskila/databases-quiz',
    accent: '#60a5fa',
    glyph: 'stack',
  },
  {
    subject: 'Automata',
    tag: 'LANGUAGE LAB',
    blurb: 'DFA, NFA, PDA, Nerode and the pumping lemma — 349 past-exam questions with the original diagrams, plus an 11-chapter study mode.',
    status: 'live',
    url: 'https://adirbuskila.github.io/automata-quiz/',
    repo: 'https://github.com/AdirBuskila/automata-quiz',
    accent: '#a3e635',
    glyph: 'automaton',
  },
  {
    subject: 'Computability',
    tag: 'REDUCTION LAB',
    blurb: 'R, RE, coRE, mapping and poly-time reductions, NP-completeness — 592 past-exam questions with worked proofs, plus a 13-chapter study mode.',
    status: 'live',
    url: 'https://adirbuskila.github.io/computability-quiz/',
    repo: 'https://github.com/AdirBuskila/computability-quiz',
    accent: '#fb923c',
    glyph: 'sigma',
  },

  // --- In the lab: courses being built (year 1, then year 2) ---
  { subject: 'Linear Algebra', glyph: 'matrix', nameHe: 'אלגברה ליניארית', year: 1, status: 'soon', accent: '#818cf8' },
  { subject: 'Discrete Math 1', glyph: 'venn', nameHe: 'בדידה 1', year: 1, status: 'soon', accent: '#f472b6' },
  { subject: 'Intro to CS', glyph: 'prompt', nameHe: 'מבוא למדעי המחשב', year: 1, status: 'soon', accent: '#4ade80' },
  { subject: 'Intro to Computer Systems', glyph: 'chip', nameHe: 'מבוא למערכות מחשב', year: 1, status: 'soon', accent: '#94a3b8' },
  { subject: 'Calculus 1', glyph: 'integral', nameHe: 'אינפי 1', year: 1, status: 'soon', accent: '#f87171' },
  { subject: 'Discrete Math 2', glyph: 'tree', nameHe: 'בדידה 2', year: 1, status: 'soon', accent: '#e879f9' },
  { subject: 'Data Structures', glyph: 'heap', nameHe: 'מבני נתונים', year: 1, status: 'soon', accent: '#2dd4bf' },
  { subject: 'Advanced Programming Workshop', glyph: 'pointer', nameHe: 'סדנה מתקדמת בתכנות', year: 1, status: 'soon', accent: '#facc15' },
  { subject: 'Object-Oriented Programming', glyph: 'classes', nameHe: 'תכנות מונחה עצמים', year: 1, status: 'soon', accent: '#38bdf8' },
  { subject: 'Calculus 2', glyph: 'surface', nameHe: 'אינפי 2', year: 2, status: 'soon', accent: '#fca5a5' },
  { subject: 'Algorithms 1', glyph: 'sort', nameHe: 'אלגוריתמים 1', year: 2, status: 'soon', accent: '#c4b5fd' },
  { subject: 'Computer Networks', glyph: 'globe', nameHe: 'רשתות תקשורת מחשבים', year: 2, status: 'soon', accent: '#67e8f9' },
  { subject: 'Probability', glyph: 'dice', nameHe: 'הסתברות', year: 2, status: 'soon', accent: '#fdba74' },
  { subject: 'Algebra 2', glyph: 'group', nameHe: 'אלגברה 2', year: 2, status: 'soon', accent: '#f0abfc' },
];

/* ==========================================================================
   Glyphs — one small geometric SVG per subject (stroke inherits the accent)
   ========================================================================== */

const SVG_OPEN =
  '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" ' +
  'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">';

const glyphs = {
  // Data Science — scatter plot with rising trend
  plot: SVG_OPEN + '<title>Scatter plot</title>' +
    '<path d="M3.5 3.5v17h17"/>' +
    '<path d="M6.5 16.5 19 5.5" stroke-dasharray="2 2.4" opacity=".55"/>' +
    '<circle cx="8" cy="14.5" r="1.5" fill="currentColor" stroke="none"/>' +
    '<circle cx="11.5" cy="10.5" r="1.5" fill="currentColor" stroke="none"/>' +
    '<circle cx="15" cy="12" r="1.5" fill="currentColor" stroke="none"/>' +
    '<circle cx="18.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>',

  // Algorithms — graph: hollow nodes + edges
  graph: SVG_OPEN + '<title>Graph with nodes and edges</title>' +
    '<circle cx="5" cy="5.5" r="2.2"/><circle cx="18.5" cy="7" r="2.2"/>' +
    '<circle cx="8" cy="18.5" r="2.2"/><circle cx="16.5" cy="16.5" r="2.2"/>' +
    '<path d="M7.2 5.75 16.3 6.76M5.5 7.6l2 8.8M18.05 9.15l-1.1 5.2M10.15 18l4.3-1"/></svg>',

  // Operating Systems — kernel protection rings
  rings: SVG_OPEN + '<title>Kernel rings</title>' +
    '<rect x="3" y="3" width="18" height="18" rx="3.5"/>' +
    '<rect x="7.5" y="7.5" width="9" height="9" rx="2"/>' +
    '<circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none"/></svg>',

  // Software Engineering — code brackets
  brackets: SVG_OPEN + '<title>Code brackets</title>' +
    '<path d="M8.5 7 4 12l4.5 5"/><path d="M15.5 7 20 12l-4.5 5"/>' +
    '<path d="M13.4 5.5 10.6 18.5" opacity=".6"/></svg>',

  // Machine Learning — small neural network
  net: SVG_OPEN + '<title>Neural network</title>' +
    '<path d="M4.5 8 12 5M4.5 8l7.5 4M4.5 16l7.5-4M4.5 16 12 19M12 5l7.5 7M12 12h7.5M12 19l7.5-7" stroke-width="1.2" opacity=".6"/>' +
    '<circle cx="4.5" cy="8" r="1.7" fill="currentColor" stroke="none"/>' +
    '<circle cx="4.5" cy="16" r="1.7" fill="currentColor" stroke="none"/>' +
    '<circle cx="12" cy="5" r="1.7" fill="currentColor" stroke="none"/>' +
    '<circle cx="12" cy="12" r="1.7" fill="currentColor" stroke="none"/>' +
    '<circle cx="12" cy="19" r="1.7" fill="currentColor" stroke="none"/>' +
    '<circle cx="19.5" cy="12" r="1.7" fill="currentColor" stroke="none"/></svg>',

  // Databases — cylinder
  stack: SVG_OPEN + '<title>Database cylinder</title>' +
    '<ellipse cx="12" cy="5.5" rx="8" ry="2.7"/>' +
    '<path d="M4 5.5v13c0 1.5 3.6 2.7 8 2.7s8-1.2 8-2.7v-13"/>' +
    '<path d="M4 12c0 1.5 3.6 2.7 8 2.7s8-1.2 8-2.7"/></svg>',

  // Automata — start arrow, a state with a self-loop, a transition into an accepting state
  // Computability — Sigma-star: the set of all strings, home of every language
  sigma: SVG_OPEN + '<title>Sigma star</title>' +
    '<path d="M15.5 5H5l5.8 7L5 19h10.5"/>' +
    '<path d="M19.5 2.2v4"/><path d="m17.8 3.2 3.4 2"/><path d="m17.8 5.2 3.4-2"/></svg>',

  automaton: SVG_OPEN + '<title>Finite automaton</title>' +
    '<path d="M1.5 14h2.3"/><path d="m2.9 12.8 1.2 1.2-1.2 1.2"/>' +
    '<circle cx="7.5" cy="14" r="3.2"/>' +
    '<path d="M5.6 11.4c-.9-3.6 4.7-3.6 3.8 0" opacity=".75"/><path d="m8.6 10.5.8.9.9-.7" opacity=".75"/>' +
    '<path d="M10.9 14h4.6"/><path d="m14.2 12.7 1.3 1.3-1.3 1.3"/>' +
    '<circle cx="19" cy="14" r="3.2"/><circle cx="19" cy="14" r="1.7"/></svg>',

  // --- In the lab glyphs (course tiles; reused when the course launches) ---
  matrix: SVG_OPEN + '<title>Matrix</title>' +
    '<path d="M8 4H4.5v16H8"/><path d="M16 4h3.5v16H16"/><circle cx="9.6" cy="9" r="1.4" fill="currentColor" stroke="none"/><circle cx="14.4" cy="9" r="1.4" fill="currentColor" stroke="none"/><circle cx="9.6" cy="15" r="1.4" fill="currentColor" stroke="none"/><circle cx="14.4" cy="15" r="1.4" fill="currentColor" stroke="none"/></svg>',

  venn: SVG_OPEN + '<title>Overlapping sets</title>' +
    '<circle cx="8.8" cy="12" r="5.8"/><circle cx="15.2" cy="12" r="5.8"/><path d="M12 7.2A5.8 5.8 0 0 1 12 16.8 5.8 5.8 0 0 1 12 7.2Z" fill="currentColor" stroke="none" opacity=".5"/></svg>',

  prompt: SVG_OPEN + '<title>Terminal prompt</title>' +
    '<rect x="2.5" y="4.5" width="19" height="15" rx="3"/><path d="m7 9.5 3 2.5-3 2.5"/><path d="M12.5 15h4.5"/></svg>',

  chip: SVG_OPEN + '<title>CPU chip</title>' +
    '<rect x="6.5" y="6.5" width="11" height="11" rx="2"/><rect x="10" y="10" width="4" height="4" rx=".6" fill="currentColor" stroke="none"/><path d="M9.7 3v3.5M14.3 3v3.5M9.7 17.5V21M14.3 17.5V21M3 9.7h3.5M3 14.3h3.5M17.5 9.7H21M17.5 14.3H21"/></svg>',

  integral: SVG_OPEN + '<title>Integral under a curve</title>' +
    '<path d="M12.6 3.6c-1.9 0-2.3 1.3-2.5 3.2l-.7 10.4c-.2 1.9-.7 3.2-2.7 3.2"/><path d="M13.6 17.4c2.2-.3 3.2-5 7-5" opacity=".6"/><path d="M13.6 20.4H21" opacity=".6"/></svg>',

  tree: SVG_OPEN + '<title>Pascal triangle</title>' +
    '<path d="M12 4.5 3.8 19.5h16.4Z" opacity=".5" stroke-width="1.2"/><circle cx="12" cy="4.5" r="1.5" fill="currentColor" stroke="none"/><circle cx="9.25" cy="9.5" r="1.5" fill="currentColor" stroke="none"/><circle cx="14.75" cy="9.5" r="1.5" fill="currentColor" stroke="none"/><circle cx="6.5" cy="14.5" r="1.5" fill="currentColor" stroke="none"/><circle cx="12" cy="14.5" r="1.5" fill="currentColor" stroke="none"/><circle cx="17.5" cy="14.5" r="1.5" fill="currentColor" stroke="none"/><circle cx="3.75" cy="19.5" r="1.5" fill="currentColor" stroke="none"/><circle cx="9.25" cy="19.5" r="1.5" fill="currentColor" stroke="none"/><circle cx="14.75" cy="19.5" r="1.5" fill="currentColor" stroke="none"/><circle cx="20.25" cy="19.5" r="1.5" fill="currentColor" stroke="none"/></svg>',

  heap: SVG_OPEN + '<title>Binary heap</title>' +
    '<path d="M12 5.2 6.5 12.5M12 5.2l5.5 7.3M6.5 12.5 3.8 19.5M6.5 12.5l5.2 7M17.5 12.5l0 7" stroke-width="1.3" opacity=".7"/><rect x="9.7" y="2.9000000000000004" width="4.6" height="4.6" rx="1.1" fill="currentColor" stroke="none"/><rect x="4.2" y="10.2" width="4.6" height="4.6" rx="1.1" fill="currentColor" stroke="none"/><rect x="15.2" y="10.2" width="4.6" height="4.6" rx="1.1" fill="currentColor" stroke="none"/><rect x="1.5" y="17.2" width="4.6" height="4.6" rx="1.1" fill="currentColor" stroke="none"/><rect x="9.399999999999999" y="17.2" width="4.6" height="4.6" rx="1.1" fill="currentColor" stroke="none"/><rect x="15.2" y="17.2" width="4.6" height="4.6" rx="1.1" fill="currentColor" stroke="none"/></svg>',

  pointer: SVG_OPEN + '<title>Pointer into memory</title>' +
    '<rect x="2.5" y="14.5" width="19" height="6" rx="1.6"/><path d="M8.83 14.5v6M15.17 14.5v6"/><rect x="9.7" y="15.4" width="4.6" height="4.2" rx=".6" fill="currentColor" stroke="none" opacity=".6"/><circle cx="5" cy="5" r="1.7" fill="currentColor" stroke="none"/><path d="M6.4 6.6C9 8.6 11 9.8 12 12.6"/><path d="m9.7 11.6 2.3 1.4 1.1-2.5"/></svg>',

  classes: SVG_OPEN + '<title>Class inheritance</title>' +
    '<rect x="6.5" y="2.5" width="11" height="6" rx="1.4"/><path d="M6.5 5.5h11" opacity=".6"/><path d="M12 9.2 9.8 12.6h4.4Z"/><path d="M12 12.6v1.9M6.2 16v-1.5h11.6V16" opacity=".8"/><rect x="2.5" y="16" width="7.5" height="5.5" rx="1.4"/><rect x="14" y="16" width="7.5" height="5.5" rx="1.4"/></svg>',

  surface: SVG_OPEN + '<title>Surface</title>' +
    '<path d="M3 7.5c3-3.2 6-3.2 9 0s6 3.2 9 0"/><path d="M3 12.5c3-3.2 6-3.2 9 0s6 3.2 9 0" opacity=".7"/><path d="M3 17.5c3-3.2 6-3.2 9 0s6 3.2 9 0" opacity=".4"/></svg>',

  sort: SVG_OPEN + '<title>Sorting bars</title>' +
    '<path d="M5 21v-9M9.7 21V8.5M14.3 21v-6M19 21v-3" stroke-width="3"/><path d="M4 4h16m-2.6-2.2L20 4l-2.6 2.2" opacity=".6"/></svg>',

  globe: SVG_OPEN + '<title>Globe</title>' +
    '<circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9" opacity=".65"/><path d="M3 12h18" opacity=".5" stroke-width="1.2"/><circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"/></svg>',

  dice: SVG_OPEN + '<title>Die</title>' +
    '<rect x="3.5" y="3.5" width="17" height="17" rx="4"/><circle cx="8.4" cy="8.4" r="1.4" fill="currentColor" stroke="none"/><circle cx="15.6" cy="8.4" r="1.4" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none"/><circle cx="8.4" cy="15.6" r="1.4" fill="currentColor" stroke="none"/><circle cx="15.6" cy="15.6" r="1.4" fill="currentColor" stroke="none"/></svg>',

  group: SVG_OPEN + '<title>Rotation symmetry</title>' +
    '<path d="M12 3.5 19.4 16.3H4.6Z" opacity=".55" stroke-width="1.3"/><circle cx="12" cy="3.5" r="1.7" fill="currentColor" stroke="none"/><circle cx="19.4" cy="16.3" r="1.7" fill="currentColor" stroke="none"/><circle cx="4.6" cy="16.3" r="1.7" fill="currentColor" stroke="none"/><path d="M14.5 10.8A3 3 0 1 1 12 9.2"/><path d="M10.9 8 12.2 9.2 10.9 10.4"/></svg>',
};

/* ==========================================================================
   Render
   ========================================================================== */

function hexToRgb(hex) {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function prettyUrl(url) {
  return url.replace(/^https?:\/\//, '').replace(/#.*$/, '').replace(/\/+$/, '');
}

const deck = document.getElementById('deck');
const frag = document.createDocumentFragment();

function setAccent(el, accent) {
  const [r, g, b] = hexToRgb(accent);
  el.style.setProperty('--accent', accent);
  el.style.setProperty('--accent-dim', `rgba(${r},${g},${b},.45)`);
  el.style.setProperty('--accent-faint', `rgba(${r},${g},${b},.13)`);
  el.dataset.accent = accent;
}

tools.filter((t) => t.status === 'live').forEach((tool, i) => {
  const live = true;
  const el = document.createElement(live ? 'a' : 'article');
  el.className = 'tile ' + (live ? 'is-live' : 'is-soon');

  setAccent(el, tool.accent);
  el.style.setProperty('--i', i);

  if (live) {
    el.href = tool.url;
    el.setAttribute('aria-label', `${tool.subject} — ${tool.tag.toLowerCase()}, open the tool`);
  } else {
    el.setAttribute('aria-label', `${tool.subject} — in development, coming soon`);
  }

  el.innerHTML = `
    <span class="mark" aria-hidden="true">${glyphs[tool.glyph]}</span>
    <div class="tile-top">
      <span class="glyph">${glyphs[tool.glyph]}</span>
      ${live
        ? '<span class="chip chip-live"><span class="dot"></span>LIVE</span>'
        : '<span class="chip chip-soon">BUILDING</span>'}
    </div>
    <p class="tag">${tool.tag}</p>
    <h2 class="subject">${tool.subject}</h2>
    <p class="blurb">${tool.blurb}</p>
    <div class="tile-meta">
      ${live
        ? `<span class="url">${prettyUrl(tool.url)}</span><span class="arrow" aria-hidden="true">↗</span>`
        : '<span class="url">url — reserved</span>'}
    </div>`;

  frag.appendChild(el);
});

deck.appendChild(frag);

/* ---- The lab: compact tiles for every 'soon' tool, grouped by year ---- */

const soonTools = tools.filter((t) => t.status !== 'live');
const lab = document.getElementById('lab');
if (lab && soonTools.length) {
  lab.innerHTML = `
    <div class="lab-head">
      <span class="lab-title">IN THE LAB</span>
      <span class="lab-count">${soonTools.length} COURSES BUILDING</span>
    </div>
    <p class="lab-sub">Every year-1 and year-2 course is on the way. Each lights up here when it goes live.</p>`;

  [...new Set(soonTools.map((t) => t.year))].sort().forEach((year) => {
    const group = document.createElement('div');
    group.className = 'lab-group';
    group.innerHTML = `<p class="lab-year">YEAR ${year}</p><div class="lab-grid"></div>`;
    const grid = group.querySelector('.lab-grid');
    soonTools.filter((t) => t.year === year).forEach((tool, j) => {
      const el = document.createElement('article');
      el.className = 'tile is-soon tile-mini';
      setAccent(el, tool.accent);
      el.style.setProperty('--i', j);
      el.setAttribute('aria-label', `${tool.subject} — in development`);
      el.innerHTML = `
        <span class="mini-glyph" aria-hidden="true">${glyphs[tool.glyph]}</span>
        <span class="mini-text">
          <span class="mini-subject"></span>
          <span class="mini-he" lang="he" dir="rtl"></span>
        </span>
        <span class="chip chip-soon">BUILDING</span>`;
      el.querySelector('.mini-subject').textContent = tool.subject;
      el.querySelector('.mini-he').textContent = tool.nameHe;
      grid.appendChild(el);
    });
    lab.appendChild(group);
  });
}

const liveCount = tools.filter((t) => t.status === 'live').length;
const soonCount = tools.length - liveCount;
document.getElementById('deck-count').textContent =
  soonCount > 0 ? `${liveCount} LIVE · ${soonCount} IN THE LAB` : `${liveCount} LIVE`;

/* ==========================================================================
   Star the source — repo links, built from the same config.
   Every tool that has a `repo` shows up, plus the deck itself. No network
   calls: GitHub has no star-via-URL, so each row just links to the repo page.
   ========================================================================== */

const starRepos = [
  ...tools.filter((t) => t.repo).map((t) => ({ label: t.subject, repo: t.repo, accent: t.accent })),
  { label: 'This deck', repo: 'https://github.com/AdirBuskila/adirbuskila.github.io', accent: '#22d3ee' },
];

const STAR_ICON =
  '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true" focusable="false">' +
  '<path d="M12 2.4l2.9 6.06 6.66.83-4.9 4.55 1.28 6.58L12 17.9l-5.94 3.12 1.28-6.58-4.9-4.55 6.66-.83z"/></svg>';

function repoName(url) {
  return url.replace(/^https?:\/\/github\.com\//, '').replace(/\/+$/, '');
}

const starline = document.getElementById('starline');
if (starline) {
  starline.innerHTML = `
    <div class="starline-head">
      <span class="starline-title">${STAR_ICON} ENJOYING THESE?</span>
    </div>
    <p class="starline-sub">Every tool here is open-source. If one saved you before an exam,
      a ⭐ on its repo helps the next student find it.</p>
    <div class="star-grid"></div>`;

  const grid = starline.querySelector('.star-grid');
  const starFrag = document.createDocumentFragment();

  starRepos.forEach((r) => {
    const a = document.createElement('a');
    a.className = 'star-item';
    a.href = r.repo;
    a.target = '_blank';
    a.rel = 'noopener';
    a.setAttribute('aria-label', `Star ${repoName(r.repo)} on GitHub`);

    const [rr, gg, bb] = hexToRgb(r.accent);
    a.style.setProperty('--accent', r.accent);
    a.style.setProperty('--accent-dim', `rgba(${rr},${gg},${bb},.45)`);
    a.style.setProperty('--accent-faint', `rgba(${rr},${gg},${bb},.13)`);
    a.dataset.accent = r.accent;

    a.innerHTML = `
      <span class="star-ic">${STAR_ICON}</span>
      <span class="star-txt">
        <span class="star-subject">${r.label}</span>
        <span class="star-repo">${repoName(r.repo)}</span>
      </span>
      <span class="star-cta">STAR<span class="star-arrow" aria-hidden="true">↗</span></span>`;

    starFrag.appendChild(a);
  });

  grid.appendChild(starFrag);
}

/* ==========================================================================
   Interaction — spotlight borders, tilt, and the Signal accent hook.
   Every panel (.tile, .star-item) gets --mx/--my (pointer, local px) and
   --spot (0..1 by distance), so borders light up near the cursor across
   the whole grid. Hovering a panel also asks signal.js to re-tint the
   ribbon field toward that subject's accent and bloom behind the panel.
   ========================================================================== */

(function () {
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const panels = Array.from(document.querySelectorAll('.tile, .star-item'));
  if (!panels.length) return;

  /* -- spotlight: one rAF per pointer move, reads before writes -- */
  let pending = null;

  function paint() {
    const e = pending;
    pending = null;
    const rects = panels.map((el) => el.getBoundingClientRect());
    panels.forEach((el, i) => {
      const r = rects[i];
      const dx = Math.max(r.left - e.x, 0, e.x - r.right);
      const dy = Math.max(r.top - e.y, 0, e.y - r.bottom);
      const spot = Math.max(0, 1 - Math.hypot(dx, dy) / 240);
      el.style.setProperty('--mx', (e.x - r.left) + 'px');
      el.style.setProperty('--my', (e.y - r.top) + 'px');
      el.style.setProperty('--spot', spot.toFixed(3));
    });
  }

  if (fine) {
    window.addEventListener('pointermove', (e) => {
      const first = !pending;
      pending = { x: e.clientX, y: e.clientY };
      if (first) requestAnimationFrame(paint);
    }, { passive: true });
  }

  /* -- accent hook + tilt -- */
  function focusOn(el) {
    if (!window.Signal || !el.dataset.accent) return;
    const r = el.getBoundingClientRect();
    window.Signal.setAccent(
      el.dataset.accent,
      (r.left + r.width / 2) / Math.max(1, window.innerWidth),
      1 - (r.top + r.height / 2) / Math.max(1, window.innerHeight)
    );
  }

  function focusOff() {
    if (window.Signal) window.Signal.clearAccent();
  }

  panels.forEach((el) => {
    const tilts = fine && !reduce && el.classList.contains('tile') && el.tagName === 'A';

    el.addEventListener('pointerenter', () => {
      focusOn(el);
      if (tilts) el.classList.add('is-tilting');
    });

    el.addEventListener('focusin', () => focusOn(el));
    el.addEventListener('focusout', focusOff);

    if (tilts) {
      el.addEventListener('pointermove', (e) => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        el.style.setProperty('--ry', (px * 6).toFixed(2) + 'deg');
        el.style.setProperty('--rx', (-py * 6).toFixed(2) + 'deg');
        el.style.setProperty('--tx', (px * -14).toFixed(1) + 'px');
        el.style.setProperty('--ty', (py * -14).toFixed(1) + 'px');
      }, { passive: true });
    }

    el.addEventListener('pointerleave', () => {
      focusOff();
      if (tilts) {
        el.classList.remove('is-tilting');
        el.style.setProperty('--rx', '0deg');
        el.style.setProperty('--ry', '0deg');
        el.style.setProperty('--tx', '0px');
        el.style.setProperty('--ty', '0px');
      }
    });
  });
})();
