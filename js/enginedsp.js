// The engine model, as the source text of an AudioWorklet module (a string, so it also loads when the page is opened from a file).
export default String.raw`// Physical engine model. Runs inside an AudioWorklet (and unchanged in node for the offline tests).
// Nothing here is a recording: every sound comes from what an engine does.
//   crank angle -> each cylinder fires at its own angle (the firing order) -> a pressure pulse whose length is set in CRANK DEGREES
//   (so it gets shorter, and the note brighter, as the revs rise) -> the cylinder's own header pipe (a short echo, tuned by its length)
//   -> the collector -> the main exhaust, a real two-way pipe with an open end (its resonances are the boom and the drone you hear
//   at particular revs) -> a silencer -> out of the tailpipe.
//   Beside the exhaust: the intake (noise that opens and shuts with every intake valve), the block ringing at its own frequencies,
//   the sharp rasp of combustion, valve-gear ticks, the turbocharger's whistle, a supercharger's whine, an air-cooling fan.
// The firing frequency is always rpm / 60 * cylinders / 2, whatever the engine: a four sounds like a four, a six like a six.
var TAU = 6.283185307179586;
function EngineCore(sr) {
  this.sr = sr; this.rpm = 900; this.load = 0; this.boost = 0; this.rpmT = 900; this.loadT = 0; this.boostT = 0; this.lim = 0; this.shift = 0;
  this.cr = 0; this.t = 0; this.seed = 22222; this.gl = 0; this.cfg = null; this.n = 0;
}
EngineCore.prototype.rnd = function () { this.seed ^= this.seed << 13; this.seed ^= this.seed >>> 17; this.seed ^= this.seed << 5; return ((this.seed >>> 0) / 4294967296) * 2 - 1; };
EngineCore.prototype.configure = function (c) {
  var sr = this.sr, n = c.fire.length, i; this.cfg = c; this.n = n;
  this.fire = c.fire.slice(); this.cg = []; for (i = 0; i < n; i++) this.cg.push(1 + (c.spread || 0.04) * ((i * 7919 % 13) / 6.5 - 1));       // every cylinder is a little different
  this.pulse = new Float64Array(n); this.pa = new Float64Array(n); this.hz = new Float64Array(n); this.hl = new Float64Array(n);
  this.HN = 2048; this.hbuf = []; for (i = 0; i < n; i++) this.hbuf.push(new Float32Array(this.HN)); this.hw = 0;
  this.MN = 8192; this.F = new Float32Array(this.MN); this.B = new Float32Array(this.MN); this.mw = 0; this.fl = 0; this.bl = 0; this.bk = 0;
  this.hdrD = []; for (i = 0; i < n; i++) this.hdrD.push(c.hdr[i % c.hdr.length] * 2 / c.cs * sr);
  this.mainD = c.exLen * 2 / c.cs * sr / 2;              // one way
  this.s = new Float64Array(64);                        // state of the filters
  this.tk = 0; this.kn = 0; this.itx = 0; this.dc1 = 0; this.dc2 = 0; this.ph1 = 0; this.ph2 = 0; this.phS = 0; this.mp = 0; this.lq = 0; this.hp = 0;
  this.cutN = 0;
};
EngineCore.prototype.set = function (p) {
  if (p.rpm >= 0) this.rpmT = p.rpm; if (p.load >= 0) this.loadT = p.load; if (p.boost >= 0) this.boostT = p.boost; this.lim = p.lim ? 1 : 0; this.shift = p.shift ? 1 : 0;
};
// state-variable filter, one step. s: state array, o: offset. returns band-pass (lp and hp left in this.fLP / this.fHP)
EngineCore.prototype.svf = function (o, x, f, q) {
  var s = this.s; s[o] += f * s[o + 1]; var hp = x - s[o] - q * s[o + 1]; s[o + 1] += f * hp; this.fLP = s[o]; this.fHP = hp; return s[o + 1];
};
EngineCore.prototype.render = function (out, N) {
  var c = this.cfg, i, k, sr = this.sr, dt = 1 / sr;
  if (!c) { for (k = 0; k < N; k++) out[k] = 0; return; }
  var n = this.n, fire = this.fire, pulse = this.pulse, pa = this.pa, HN = this.HN, MN = this.MN, hbuf = this.hbuf, F = this.F, B = this.B, s = this.s;
  var kr = 1 - Math.exp(-dt / 0.02), kl = 1 - Math.exp(-dt / (this.loadT > this.load ? 0.045 : 0.09)), kb = 1 - Math.exp(-dt / 0.35);
  var ka = 1 - Math.exp(-TAU * 4200 * dt), kLPt = 1 - Math.exp(-TAU * c.exLP * dt), kHdr = 1 - Math.exp(-TAU * 2600 * dt), kDC = 1 - Math.exp(-TAU * 28 * dt);
  var fM = 2 * Math.sin(Math.PI * c.mufF / sr), nb = c.block.length, fb = [], gb = [], qb = [];
  for (i = 0; i < nb; i++) { fb.push(2 * Math.sin(Math.PI * c.block[i][0] / sr)); qb.push(1 / c.block[i][1]); gb.push(c.block[i][2]); }
  for (k = 0; k < N; k++) {
    this.rpm += (this.rpmT - this.rpm) * kr; this.load += (this.loadT - this.load) * kl; this.boost += (this.boostT - this.boost) * kb; this.t += dt;
    var ld = this.load, lo = this.shift ? Math.min(ld, 0.12) : ld;
    var wob = this.rpm < 1600 ? 1 + 0.006 * Math.sin(this.t * 8.1) + 0.004 * Math.sin(this.t * 13.7 + 1.3) : 1;      // the idle governor hunting about its target
    var rp = this.rpm * wob, rev = rp * 6, cr0 = this.cr, cr1 = cr0 + rev * dt, wrapped = false; if (cr1 >= 720) { cr1 -= 720; wrapped = true; } this.cr = cr1;
    var rn = rp / 7000;
    // pulse length in crank degrees, so the exhaust note brightens with the revs
    var tauD = Math.min(0.009, Math.max(0.00035, c.pulseW / Math.max(rev, 300))), dec = Math.exp(-dt / tauD);
    var floor0 = c.idleAmp * (1 - 0.4 * Math.min(1, Math.max(0, (rp - 1500) / 4000))), load01 = floor0 + (1 - floor0) * lo;      // closing the throttle at high revs leaves engine braking, much quieter than idle-and-power
    for (i = 0; i < n; i++) {
      var a = fire[i], hit = wrapped ? (a >= cr0 || a < cr1) : (a >= cr0 && a < cr1);
      if (hit) {
        if (this.lim && this.rnd() > -0.1) { this.cutN++; }       // rev limiter: the spark is cut on most cylinders
        else {
          var amp = load01 * this.cg[i] * (1 + 0.045 * this.rnd()) * (1 + c.lump * 0.5 * Math.sin(this.t * 1.9 + i));
          pulse[i] += amp; this.kn += amp * lo; this.tk += c.mech * (0.5 + 0.5 * Math.abs(this.rnd()));
        }
      }
      pulse[i] *= dec;
    }
    // ---- exhaust: cylinder -> its header -> collector
    var coll = 0, wpos = this.hw, bsum = 0;
    for (i = 0; i < n; i++) {
      pa[i] += (pulse[i] - pa[i]) * ka; bsum += pa[i];
      var D = this.hdrD[i] * (1 - 0.07 * lo), ri = wpos - D; if (ri < 0) ri += HN; var i0 = ri | 0, fr = ri - i0, i1 = i0 + 1 >= HN ? 0 : i0 + 1, d = hbuf[i][i0] * (1 - fr) + hbuf[i][i1] * fr;
      this.hl[i] += (d - this.hl[i]) * kHdr; var z = pa[i] + c.hdrR * this.hl[i]; hbuf[i][wpos] = z; coll += z;
    }
    this.hw = wpos + 1 >= HN ? 0 : wpos + 1;
    // main pipe: a forward and a backward wave, open end at the tail
    var mp = this.mw, Dm = this.mainD * (1 - 0.06 * lo), rj = mp - Dm; if (rj < 0) rj += MN; var j0 = rj | 0, fj = rj - j0, j1 = j0 + 1 >= MN ? 0 : j0 + 1;
    var fo = F[j0] * (1 - fj) + F[j1] * fj, bo = B[j0] * (1 - fj) + B[j1] * fj;
    this.fl += (fo - this.fl) * kLPt;                                   // the tailpipe lets the highs out and reflects the lows
    var tail = this.fl, rad = tail * (1 + c.tailR);
    F[mp] = coll * c.collG + c.engR * bo; B[mp] = -c.tailR * tail * 0.985;
    this.mw = mp + 1 >= MN ? 0 : mp + 1;
    // silencer: a Helmholtz-style resonance adds body at its own frequency
    var mb = this.svf(0, rad, fM, 0.55); var ex = rad + c.mufG * mb;
    this.dc1 += (ex - this.dc1) * kDC; ex -= this.dc1;
    // ---- the block rings at its own frequencies whenever a cylinder fires
    var bl = 0, bx = bsum;
    for (i = 0; i < nb; i++) bl += gb[i] * this.svf(2 + i * 2, bx, fb[i], qb[i]);
    // ---- combustion rasp: a sharp crack at each firing, high-passed noise
    var kn = this.kn; this.kn *= Math.exp(-dt / 0.0016); var cn = this.rnd() * kn; var cnb = this.svf(12, cn, 0.2, 0.7); var rasp = cnb * 1.2;
    // ---- intake: noise gated by each cylinder's intake valve
    var wsum = 0, th;
    for (i = 0; i < n; i++) { th = cr1 - fire[i] - 360; th -= Math.floor(th / 720) * 720; if (th < c.intakeW) { var q = Math.sin(Math.PI * th / c.intakeW); wsum += q * q; } }
    var icut = Math.min(0.45, (c.intakeF * 0.6 + rp * 0.05 + lo * 120) * 2 * Math.PI / sr); this.svf(14, this.rnd() * wsum, icut, c.intakeD); var inz = this.fLP;
    var inl = Math.pow(lo, 1.35) * (0.35 + rn) * c.intake;
    this.itx += (wsum - this.itx) * 0.02; var ipulse = (wsum - this.itx) * (0.2 + lo) * c.intakeP;
    // ---- valve gear ticks and the fan of an air-cooled engine
    this.tk *= Math.exp(-dt / 0.0004); var tick = this.rnd() * this.tk; tick = this.svf(16, tick, 0.9, 1.1); tick = this.fHP;
    var fan = 0; if (c.fan > 0) { fan = this.svf(18, this.rnd(), Math.min(0.5, 2 * Math.sin(Math.PI * (700 + rp * 0.35) / sr)), 0.5) * c.fan * (0.3 + rn); }
    // ---- forced induction
    var tb = 0; if (c.turbo > 0 && this.boost > 0.02) { var bz = this.boost; this.ph1 += TAU * (1500 + 4200 * bz + 700 * rn) * dt; if (this.ph1 > TAU) this.ph1 -= TAU; tb = (Math.sin(this.ph1) * 0.7 + Math.sin(this.ph1 * 2.003 + 0.7) * 0.25 + this.rnd() * 0.12) * bz * bz * c.turbo * 0.05; }
    var sc = 0; if (c.super > 0) { this.ph2 += TAU * (rp / 60 * 11.2) * dt; if (this.ph2 > TAU) this.ph2 -= TAU; sc = (Math.sin(this.ph2) + 0.5 * Math.sin(this.ph2 * 2) + 0.25 * Math.sin(this.ph2 * 3)) * c.super * 0.012 * (0.35 + 0.65 * lo) * Math.min(1, rn * 2); }
    // ---- mix and saturate
    var mix = ex * c.gEx + bl * c.gBlock * (0.35 + 0.65 * load01) + rasp * c.gRasp * load01 + inz * inl * 2.4 + ipulse + tick * 0.7 + fan + tb + sc;
    var drive = c.drive * (0.7 + 0.8 * lo), y = Math.tanh(mix * drive) / Math.tanh(drive);
    this.hp += (y - this.hp) * 0.0006; y -= this.hp;
    if (!(y === y) || y > 4 || y < -4) { y = 0; this.reset(); }
    out[k] = y * c.master;
  }
};
EngineCore.prototype.reset = function () { var i; for (i = 0; i < this.s.length; i++) this.s[i] = 0; this.F.fill(0); this.B.fill(0); for (i = 0; i < this.n; i++) { this.hbuf[i].fill(0); this.pulse[i] = 0; this.pa[i] = 0; this.hl[i] = 0; } this.fl = 0; this.dc1 = 0; this.hp = 0; this.kn = 0; this.tk = 0; this.itx = 0; };

// the AudioWorklet wrapper (absent in node)
if (typeof AudioWorkletProcessor !== 'undefined') {
  registerProcessor('tafheet-engine', class extends AudioWorkletProcessor {
    constructor() { super(); this.core = new EngineCore(sampleRate); this.on = false; this.mute = 0; this.port.onmessage = e => { var m = e.data; if (m.cfg) { this.core.configure(m.cfg); this.on = true; } if (m.p && this.core.cfg) this.core.set(m.p); if (m.off) this.on = false; if (m.on) this.on = !!this.core.cfg; }; }
    process(inputs, outputs) { var o = outputs[0][0]; if (!this.on) { o.fill(0); return true; } this.core.render(o, o.length); return true; }
  });
}
`;
