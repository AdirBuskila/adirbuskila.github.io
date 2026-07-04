/* ==========================================================================
   TOOLS CONFIG — the only thing you ever need to edit.

   To launch a pending tool: change  status: 'soon'  →  status: 'live'
   and paste its url. That's it — layout, chips, links and the header
   counter all update themselves.
   ========================================================================== */

const tools = [
  {
    subject: 'Data Science',
    tag: 'QUIZ ENGINE',
    blurb: 'Exam-style question drills for the data science course — instant feedback, topic breakdowns, zero setup.',
    status: 'live',
    url: 'https://adirbuskila.github.io/data-science-quiz/',
    accent: '#22d3ee',
    glyph: 'plot',
  },
  {
    subject: 'Algorithms',
    tag: 'VISUAL TRAINER',
    blurb: 'Watch graphs, max-flow and shortest-path algorithms run step by step — then train on them yourself.',
    status: 'live',
    url: 'https://algorithms-theta.vercel.app/',
    accent: '#a78bfa',
    glyph: 'graph',
  },
  {
    subject: 'Operating Systems',
    tag: 'EXAM SIMULATOR',
    blurb: 'An exam trainer distilled from 14 years of past exams — drill by topic and find your weak spots.',
    status: 'live',
    url: 'https://adirbuskila.github.io/os-exam-trainer/#home',
    accent: '#fbbf24',
    glyph: 'rings',
  },
  {
    subject: 'Software Engineering',
    tag: 'PRACTICE KIT',
    blurb: 'Design patterns, UML and testing drills — the theory half of SWE, made practicable.',
    status: 'soon',
    url: '',
    accent: '#34d399',
    glyph: 'brackets',
  },
  {
    subject: 'Machine Learning',
    tag: 'INTUITION LAB',
    blurb: 'From gradient descent to backprop — interactive intuition builders for the ML course.',
    status: 'soon',
    url: '',
    accent: '#fb7185',
    glyph: 'net',
  },
  {
    subject: 'Databases',
    tag: 'QUERY GYM',
    blurb: 'SQL, normalization and relational-algebra practice with instant checking.',
    status: 'soon',
    url: '',
    accent: '#60a5fa',
    glyph: 'stack',
  },
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

tools.forEach((tool, i) => {
  const live = tool.status === 'live';
  const el = document.createElement(live ? 'a' : 'article');
  el.className = 'tile ' + (live ? 'is-live' : 'is-soon');

  const [r, g, b] = hexToRgb(tool.accent);
  el.style.setProperty('--accent', tool.accent);
  el.style.setProperty('--accent-dim', `rgba(${r},${g},${b},.45)`);
  el.style.setProperty('--accent-faint', `rgba(${r},${g},${b},.13)`);
  el.style.animationDelay = `${140 + i * 80}ms`;

  if (live) {
    el.href = tool.url;
    el.setAttribute('aria-label', `${tool.subject} — ${tool.tag.toLowerCase()}, open the tool`);
  } else {
    el.setAttribute('aria-label', `${tool.subject} — in development, coming soon`);
  }

  el.innerHTML = `
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

const liveCount = tools.filter((t) => t.status === 'live').length;
document.getElementById('deck-count').textContent =
  `${liveCount} LIVE · ${tools.length - liveCount} IN THE LAB`;
