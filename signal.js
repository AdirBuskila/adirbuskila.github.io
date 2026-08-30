/* ==========================================================================
   Signal — the live background.

   A ribbon field of light resolved through a 7px LED dot matrix, ported to
   dependency-free WebGL from ThreeUI's "Ribbon Field" (MIT, MengTo/threeui)
   and extended with two page hooks:

     Signal.setAccent(hex, fx, fy)  tint the ribbons toward a subject accent
                                    and bloom a light behind (fx, fy) in
                                    viewport 0..1 (y up)
     Signal.clearAccent()           ease back to the resting palette

   Pointer drift comes from window pointermove, so it works with the canvas
   sitting behind everything. Falls back to the CSS backdrop when WebGL is
   unavailable; renders a single frame under prefers-reduced-motion.
   ========================================================================== */

(function () {
  'use strict';

  const canvas = document.getElementById('signal');
  if (!canvas) return;

  const root = document.documentElement;
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const coarse = matchMedia('(pointer: coarse)').matches;

  const gl = canvas.getContext('webgl', {
    alpha: false, antialias: false, depth: false, stencil: false,
    preserveDrawingBuffer: false, powerPreference: 'low-power',
  });
  if (!gl) { root.classList.add('no-signal'); return; }

  const VERT = 'attribute vec2 position;void main(){gl_Position=vec4(position,0.,1.);}';

  const FRAG = `
    precision highp float;
    uniform vec2  resolution;
    uniform float time;
    uniform vec2  pointer;
    uniform float cell;        /* dot-matrix pitch in device px */
    uniform vec3  accent;      /* hovered subject colour */
    uniform float accentMix;   /* 0 = resting palette, 1 = fully tinted */
    uniform vec2  focus;       /* bloom behind the hovered tile, uv */
    uniform float focusMix;

    float hash(vec2 p) {
      p = fract(p * vec2(123.34, 456.21));
      p += dot(p, p + 45.32);
      return fract(p.x * p.y);
    }

    float ribbon(vec2 uv, float offset, float width, float phase) {
      float y = 0.55 + 0.20 * sin((uv.x * 2.15) + phase) + 0.045 * sin((uv.x * 7.0) - phase * 0.7);
      float d = abs(uv.y - y - offset);
      return exp(-(d * d) / width);
    }

    void main() {
      vec2 uv = gl_FragCoord.xy / resolution.xy;

      float t = time * 0.22;
      float drift = (pointer.x - 0.5) * 0.06;
      float lift  = (pointer.y - 0.5) * 0.03;

      /* quiet zone top-left where the wordmark sits; full signal elsewhere */
      vec2 quv = vec2(uv.x * resolution.x / resolution.y, uv.y);
      float quiet = 1.0 - 0.78 * (1.0 - smoothstep(0.12, 0.95, distance(quv, vec2(0.10, 0.90))));
      float edge  = smoothstep(0.0, 0.10, uv.x) * smoothstep(1.0, 0.90, uv.x);

      float r1 = ribbon(vec2(uv.x + drift,       uv.y - lift), 0.03, 0.0065, t + 0.9);
      float r2 = ribbon(vec2(uv.x - drift * 0.7, uv.y - lift), -0.23, 0.0085, t + 3.25);
      float r3 = ribbon(vec2(uv.x + drift * 0.4, uv.y - lift), 0.25, 0.014, t + 1.85);

      float glow = r1 * 1.14 + r2 * 1.05 + r3 * 0.48;

      vec3 teal   = vec3(0.17, 0.83, 0.75);
      vec3 cyan   = vec3(0.22, 0.82, 0.96);
      vec3 indigo = vec3(0.39, 0.38, 0.92);
      vec3 purple = vec3(0.66, 0.33, 0.98);
      vec3 blue   = vec3(0.23, 0.51, 0.96);

      vec3 col = vec3(0.0);
      col += cyan   * r1 * 0.92;
      col += teal   * r1 * 0.62;
      col += indigo * r3 * 0.42;
      col += blue   * r2 * 0.66;
      col += purple * (r2 + r3) * 0.30;

      /* subject tint: keep the ribbon structure, swap the colour of the light */
      float lum = dot(col, vec3(0.299, 0.587, 0.114));
      vec3 tinted = accent * lum * 1.7 + vec3(1.0) * lum * 0.12;
      col = mix(col, tinted, accentMix);

      float bloom = exp(-pow(distance(uv, vec2(0.76, 0.40 + 0.035 * sin(t))), 2.0) / 0.050);
      bloom += exp(-pow(distance(uv, vec2(0.71, 0.75 + 0.025 * cos(t))), 2.0) / 0.030);
      vec3 bloomCol = mix(vec3(0.42, 0.85, 1.0), accent, accentMix);
      col += bloomCol * bloom * 0.34;

      /* light source behind the hovered tile */
      vec2 fuv = vec2(uv.x * resolution.x / resolution.y, uv.y);
      vec2 fpt = vec2(focus.x * resolution.x / resolution.y, focus.y);
      float fb = exp(-pow(distance(fuv, fpt), 2.0) / 0.05) * focusMix;
      col += accent * fb * 0.55;
      glow += fb * 0.75;
      bloom += fb * 0.25;

      /* LED dot matrix */
      vec2 grid = fract(gl_FragCoord.xy / cell) - 0.5;
      float dotShape = smoothstep(0.29, 0.11, length(grid));
      float noise = hash(floor(gl_FragCoord.xy / cell));
      float scan = 0.72 + 0.28 * sin((uv.x + uv.y) * 38.0 + time * 1.3);
      float dots = dotShape * (0.48 + 0.52 * noise) * scan;

      float micro = hash(gl_FragCoord.xy + time) * 0.03;
      float alpha = clamp((glow * 1.55 + bloom * 0.50) * dots, 0.0, 1.0) * quiet * edge;

      vec3 base = vec3(0.039, 0.043, 0.055);   /* == --bg */
      vec3 finalColor = mix(base, col, clamp(alpha * 1.55, 0.0, 1.0));
      finalColor += micro * 0.6;

      gl_FragColor = vec4(finalColor, 1.0);
    }
  `;

  function compile(type, src) {
    const s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
      console.error('[signal]', gl.getShaderInfoLog(s));
      return null;
    }
    return s;
  }

  const vs = compile(gl.VERTEX_SHADER, VERT);
  const fs = compile(gl.FRAGMENT_SHADER, FRAG);
  if (!vs || !fs) { root.classList.add('no-signal'); return; }

  const program = gl.createProgram();
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error('[signal]', gl.getProgramInfoLog(program));
    root.classList.add('no-signal');
    return;
  }
  gl.useProgram(program);

  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);
  const position = gl.getAttribLocation(program, 'position');
  gl.enableVertexAttribArray(position);
  gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

  const u = {};
  ['resolution', 'time', 'pointer', 'cell', 'accent', 'accentMix', 'focus', 'focusMix']
    .forEach((n) => { u[n] = gl.getUniformLocation(program, n); });

  root.classList.add('has-signal');

  /* ---- state ------------------------------------------------------------- */

  const REST = [0.22, 0.82, 0.96];            /* resting = deck cyan */
  const pointer = { x: 0.62, y: 0.45, tx: 0.62, ty: 0.45 };
  const accent  = { c: REST.slice(), tc: REST.slice(), mix: 0, tmix: 0 };
  const focus   = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5, mix: 0, tmix: 0 };

  let dpr = 1;
  let frame = 0;
  let running = false;
  const startedAt = performance.now();

  function hexToRgb01(hex) {
    const n = parseInt(hex.slice(1), 16);
    return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
  }

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, coarse ? 1 : 1.5);
    const w = Math.max(1, Math.floor(window.innerWidth * dpr));
    const h = Math.max(1, Math.floor(window.innerHeight * dpr));
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }
    gl.viewport(0, 0, w, h);
    gl.uniform2f(u.resolution, w, h);
    gl.uniform1f(u.cell, 7 * dpr);
    if (!running) draw(performance.now());
  }

  function lerp(a, b, k) { return a + (b - a) * k; }

  function draw(now) {
    const k = 0.05;
    pointer.x = lerp(pointer.x, pointer.tx, 0.035);
    pointer.y = lerp(pointer.y, pointer.ty, 0.035);
    accent.mix = lerp(accent.mix, accent.tmix, k);
    for (let i = 0; i < 3; i++) accent.c[i] = lerp(accent.c[i], accent.tc[i], k);
    focus.x = lerp(focus.x, focus.tx, 0.08);
    focus.y = lerp(focus.y, focus.ty, 0.08);
    focus.mix = lerp(focus.mix, focus.tmix, k);

    gl.uniform1f(u.time, (now - startedAt) * 0.001);
    gl.uniform2f(u.pointer, pointer.x, pointer.y);
    gl.uniform3f(u.accent, accent.c[0], accent.c[1], accent.c[2]);
    gl.uniform1f(u.accentMix, accent.mix);
    gl.uniform2f(u.focus, focus.x, focus.y);
    gl.uniform1f(u.focusMix, focus.mix);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
  }

  function loop(now) {
    draw(now);
    frame = running ? requestAnimationFrame(loop) : 0;
  }

  function start() {
    if (running || reduceMotion) return;
    running = true;
    frame = requestAnimationFrame(loop);
  }

  function stop() {
    running = false;
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
  }

  /* ---- wiring -------------------------------------------------------------- */

  window.addEventListener('resize', resize, { passive: true });
  window.addEventListener('pointermove', (e) => {
    pointer.tx = e.clientX / Math.max(1, window.innerWidth);
    pointer.ty = 1 - e.clientY / Math.max(1, window.innerHeight);
  }, { passive: true });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stop(); else start();
  });

  resize();
  if (reduceMotion) {
    /* one settled frame, a little way into the animation */
    draw(startedAt + 6000);
  } else {
    start();
  }

  window.Signal = {
    setAccent(hex, fx, fy) {
      accent.tc = hexToRgb01(hex);
      accent.tmix = 1;
      if (typeof fx === 'number') { focus.tx = fx; focus.ty = fy; focus.tmix = 1; }
      if (reduceMotion) draw(performance.now());
    },
    clearAccent() {
      accent.tc = REST.slice();
      accent.tmix = 0;
      focus.tmix = 0;
      if (reduceMotion) draw(performance.now());
    },
  };
})();
