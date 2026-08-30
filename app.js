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
  el.style.setProperty('--i', i);
  el.dataset.accent = tool.accent;

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
