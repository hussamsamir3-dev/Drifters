// The loading screens: one look for the first start (everything the game needs is fetched and warmed behind it) and for each race (circuit drawn as it loads).
// Everything that animates is a transform or an opacity, so it keeps moving even while the page is busy building a track.
const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
export class Loader {
  constructor(root) {
    const q = s => root.querySelector(s); this.root = root;
    this.bar = q('.l-bar i'); this.pct = q('.l-pct b'); this.stat = q('.l-stat'); this.tip = q('.l-tip'); this.needle = q('.l-needle'); this.arc = q('.l-arc'); this.car = q('.l-car'); this.name = q('.l-name'); this.cv = q('.l-cv'); this.go = q('.l-go');
    this.shown = 0; this.target = 0; this.raf = 0; this.pts = null; this.drawn = -1; this.apply(0);
  }
  set(f, stat) { this.target = clamp(f, 0, 1); if (stat != null) this.stat.textContent = stat; if (!this.raf) this.raf = requestAnimationFrame(() => this.step()); }
  reset() { this.shown = this.target = 0; this.drawn = -1; this.apply(0); }
  step() {
    this.raf = 0; const d = this.target - this.shown; this.shown += Math.abs(d) < .002 ? d : d * .16; this.apply(this.shown);
    if (Math.abs(this.target - this.shown) > .0005) this.raf = requestAnimationFrame(() => this.step());
  }
  apply(f) {
    this.bar.style.transform = 'scaleX(' + f.toFixed(4) + ')'; this.car.style.left = (f * 100).toFixed(2) + '%'; this.pct.textContent = Math.round(f * 100);
    this.needle.style.transform = 'rotate(' + (45 + 270 * f).toFixed(2) + 'deg)'; this.arc.style.strokeDasharray = (f * 75).toFixed(2) + ' 100';
    if (this.pts && Math.abs(f - this.drawn) > .004) this.drawCircuit(f);
  }
  // the circuit outline: faint all round, lit up to the current progress, with a glowing marker at the head
  circuit(pts) {
    const cv = this.cv; if (!cv || !pts || pts.length < 8) { this.pts = null; return; }
    let a = 1e9, b = -1e9, c = 1e9, d = -1e9; for (const p of pts) { a = Math.min(a, p.x); b = Math.max(b, p.x); c = Math.min(c, p.z); d = Math.max(d, p.z); }
    const W = cv.width, H = cv.height, pad = 26, s = Math.min((W - pad * 2) / (b - a || 1), (H - pad * 2) / (d - c || 1)), ox = (W - (b - a) * s) / 2, oy = (H - (d - c) * s) / 2;
    this.pts = pts.map(p => [ox + (p.x - a) * s, oy + (p.z - c) * s]); this.drawn = -1; this.drawCircuit(this.shown);
  }
  drawCircuit(f) {
    const k = this.cv.getContext('2d'), P = this.pts, n = P.length, W = this.cv.width, H = this.cv.height; this.drawn = f; k.clearRect(0, 0, W, H); k.lineJoin = k.lineCap = 'round';
    const path = (from, to) => { k.beginPath(); for (let i = from; i <= to; i++) { const p = P[i % n]; i === from ? k.moveTo(p[0], p[1]) : k.lineTo(p[0], p[1]); } };
    k.strokeStyle = 'rgba(255,255,255,.16)'; k.lineWidth = 9; path(0, n); k.stroke(); k.strokeStyle = 'rgba(10,11,14,.9)'; k.lineWidth = 5; path(0, n); k.stroke();
    const e = Math.max(1, Math.round(f * n)); k.save(); k.shadowColor = 'rgba(255,194,26,.9)'; k.shadowBlur = 14; k.strokeStyle = '#ffc21a'; k.lineWidth = 5; path(0, e); k.stroke(); k.restore();
    k.strokeStyle = '#fff'; k.lineWidth = 2; path(0, e); k.stroke();
    const h = P[e % n]; k.fillStyle = '#e3262e'; k.beginPath(); k.arc(h[0], h[1], 8, 0, 7); k.fill(); k.fillStyle = '#fff'; k.beginPath(); k.arc(h[0], h[1], 3.4, 0, 7); k.fill();
    const s0 = P[0], s1 = P[1], an = Math.atan2(s1[1] - s0[1], s1[0] - s0[0]) + Math.PI / 2; k.strokeStyle = '#fff'; k.lineWidth = 3; k.beginPath(); k.moveTo(s0[0] - Math.cos(an) * 10, s0[1] - Math.sin(an) * 10); k.lineTo(s0[0] + Math.cos(an) * 10, s0[1] + Math.sin(an) * 10); k.stroke();
  }
  // wait for a tap, a click or a key (this is also the gesture that lets a phone play sound)
  waitStart(label) {
    return new Promise(res => {
      const go = this.go; if (label) go.querySelector('span').textContent = label; go.hidden = false; this.root.classList.add('ready');
      const done = e => { if (e && e.type === 'keydown' && ['Shift', 'Control', 'Alt', 'Meta', 'Tab'].includes(e.key)) return; removeEventListener('keydown', done, true); go.removeEventListener('click', done); go.removeEventListener('touchend', done); res(); };
      go.addEventListener('click', done); go.addEventListener('touchend', done); addEventListener('keydown', done, true);
    });
  }
  show() { clearTimeout(this.ht); this.root.classList.remove('out', 'ready'); this.root.hidden = false; }
  hide(now) { const r = this.root; clearTimeout(this.ht); if (now) { r.hidden = true; r.classList.remove('out', 'ready'); return; } r.classList.add('out'); this.ht = setTimeout(() => { r.hidden = true; r.classList.remove('out', 'ready'); }, 420); }
}
