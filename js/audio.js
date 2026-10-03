// All sound is synthesised with WebAudio (no sample files). The engine is built from a harmonic-rich
// periodic wave pushed through soft saturation and a throttle-controlled low-pass, layered with
// wind, road roll and tyre scrub noise, so it reads as a car rather than a beeper.
export class GameAudio {
  constructor() { this.on = true; this.ctx = null; this.vol = .7; }
  init() {
    if (this.ctx) { if (this.ctx.state !== 'running') this.ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return;
    const c = this.ctx = new AC();
    const comp = c.createDynamicsCompressor(); comp.threshold.value = -14; comp.ratio.value = 4; comp.attack.value = .01; comp.release.value = .25; comp.connect(c.destination);
    this.master = c.createGain(); this.master.gain.value = this.on ? this.vol : 0; this.master.connect(comp);

    // ---- engine
    const N = 24, re = new Float32Array(N), im = new Float32Array(N);
    for (let n = 1; n < N; n++) im[n] = (n % 2 ? .55 : 1) / Math.pow(n, 1.15) * (n === 2 || n === 4 ? 1.5 : 1);
    const wave = c.createPeriodicWave(re, im);
    const shaper = c.createWaveShaper(), curve = new Float32Array(512); for (let i = 0; i < 512; i++) { const x = i / 256 - 1; curve[i] = Math.tanh(x * 2.2); } shaper.curve = curve;
    this.engLP = c.createBiquadFilter(); this.engLP.type = 'lowpass'; this.engLP.frequency.value = 300; this.engLP.Q.value = .8;
    this.engGain = c.createGain(); this.engGain.gain.value = 0;
    this.osc = [1, .5, 1.006].map((mult, i) => { const o = c.createOscillator(); o.setPeriodicWave(wave); o.frequency.value = 40 * mult; const g = c.createGain(); g.gain.value = [.5, .6, .3][i]; o.connect(g); g.connect(shaper); o.start(); o.mult = mult; return o; });
    shaper.connect(this.engLP); this.engLP.connect(this.engGain); this.engGain.connect(this.master);

    // ---- noise beds
    const buf = c.createBuffer(1, c.sampleRate * 3, c.sampleRate), d = buf.getChannelData(0); let last = 0;
    for (let i = 0; i < d.length; i++) { const w = Math.random() * 2 - 1; last = (last + .04 * w) / 1.04; d[i] = w * .5 + last * 6; }   // white + brown mix
    this.noiseBuf = buf;
    const bed = (type, f, q) => { const s = c.createBufferSource(); s.buffer = buf; s.loop = true; s.playbackRate.value = .8 + Math.random() * .4; const fl = c.createBiquadFilter(); fl.type = type; fl.frequency.value = f; fl.Q.value = q; const g = c.createGain(); g.gain.value = 0; s.connect(fl); fl.connect(g); g.connect(this.master); s.start(); return { g, fl }; };
    this.wind = bed('lowpass', 500, .5); this.roll = bed('lowpass', 260, .7); this.skid = bed('bandpass', 850, 1.6); this.skidHi = bed('bandpass', 2100, 3);
    this.dirt = bed('lowpass', 420, .8); this.nitro = bed('bandpass', 1600, .7); this.brake = bed('bandpass', 3100, 5); this.rain = bed('highpass', 2600, .4); this.intake = bed('bandpass', 380, 1.2);
    this.whine = c.createOscillator(); this.whine.type = 'sine'; this.whineG = c.createGain(); this.whineG.gain.value = 0; this.whine.connect(this.whineG); this.whineG.connect(this.master); this.whine.start();
    // ---- calm menu pad
    this.pad = c.createGain(); this.pad.gain.value = 0; const pl = c.createBiquadFilter(); pl.type = 'lowpass'; pl.frequency.value = 900; this.pad.connect(pl); pl.connect(this.master);
    for (const f of [110, 164.81, 220, 246.94, 329.63]) for (const det of [-4, 5]) { const o = c.createOscillator(); o.type = 'sine'; o.frequency.value = f; o.detune.value = det; const g = c.createGain(); g.gain.value = .05; const l = c.createOscillator(); l.frequency.value = .05 + Math.random() * .12; const lg = c.createGain(); lg.gain.value = .035; l.connect(lg); lg.connect(g.gain); o.connect(g); g.connect(this.pad); o.start(); l.start(); }
  }
  setMuted(m) { this.on = !m; if (this.master) this.master.gain.setTargetAtTime(this.on ? this.vol : 0, this.ctx.currentTime, .05); }
  music(on) { if (this.ctx) this.pad.gain.setTargetAtTime(on ? .5 : 0, this.ctx.currentTime, on ? 1.5 : .4); }

  // s: { rpm 0..1, throttle 0..1, speed m/s, skid 0..1, dirt 0..1, nitro bool, brake 0..1, rain 0..1 }
  drive(s) {
    if (!this.ctx) return; const t = this.ctx.currentTime, f = 36 + s.rpm * 118, k = Math.min(1, s.speed / 60);
    for (const o of this.osc) o.frequency.setTargetAtTime(f * o.mult, t, .035);
    this.engLP.frequency.setTargetAtTime(180 + s.rpm * 700 + s.throttle * 1100, t, .06);
    this.engGain.gain.setTargetAtTime(.09 + s.throttle * .12 + s.rpm * .04, t, .07);
    this.intake.g.gain.setTargetAtTime(s.throttle * s.rpm * .05, t, .08); this.intake.fl.frequency.setTargetAtTime(250 + s.rpm * 500, t, .08);
    this.wind.g.gain.setTargetAtTime(k * k * .22, t, .2); this.wind.fl.frequency.setTargetAtTime(300 + k * 900, t, .2);
    this.roll.g.gain.setTargetAtTime(Math.min(.16, k * .3) * (1 - s.dirt), t, .15);
    this.skid.g.gain.setTargetAtTime(s.skid * .2, t, .09); this.skid.fl.frequency.setTargetAtTime(700 + s.skid * 350, t, .15); this.skidHi.g.gain.setTargetAtTime(s.skid * s.skid * .05, t, .12);
    this.dirt.g.gain.setTargetAtTime(s.dirt * .35, t, .1);
    this.brake.g.gain.setTargetAtTime(s.brake * Math.min(1, s.speed / 25) * .018, t, .05);
    this.nitro.g.gain.setTargetAtTime(s.nitro ? .16 : 0, t, .1); this.whine.frequency.setTargetAtTime(900 + s.rpm * 1400, t, .1); this.whineG.gain.setTargetAtTime(s.nitro ? .025 : s.throttle * s.rpm * .006, t, .1);
    this.rain.g.gain.setTargetAtTime((s.rain || 0) * .1, t, .5);
  }
  silence() { if (!this.ctx) return; const t = this.ctx.currentTime; for (const g of [this.engGain, this.wind.g, this.roll.g, this.skid.g, this.skidHi.g, this.dirt.g, this.nitro.g, this.brake.g, this.rain.g, this.intake.g, this.whineG]) g.gain.setTargetAtTime(0, t, .12); }

  tone(freq, dur = .2, vol = .2, type = 'sine', slide = 1) {
    if (!this.ctx) return; const c = this.ctx, o = c.createOscillator(), g = c.createGain(), t = c.currentTime; o.type = type; o.frequency.setValueAtTime(freq, t); if (slide !== 1) o.frequency.exponentialRampToValueAtTime(freq * slide, t + dur);
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(vol, t + .012); g.gain.exponentialRampToValueAtTime(.001, t + dur); o.connect(g); g.connect(this.master); o.start(); o.stop(t + dur + .02);
  }
  beep(freq = 440, dur = .18, vol = .16) { this.tone(freq, dur, vol); this.tone(freq * 2, dur * .7, vol * .25); }
  burst(type, f, q, dur, vol, rate = 1) {
    if (!this.ctx) return; const c = this.ctx, s = c.createBufferSource(), fl = c.createBiquadFilter(), g = c.createGain(), t = c.currentTime;
    s.buffer = this.noiseBuf; s.playbackRate.value = rate; fl.type = type; fl.frequency.value = f; fl.Q.value = q; g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(.001, t + dur);
    s.connect(fl); fl.connect(g); g.connect(this.master); s.start(t, Math.random() * 2); s.stop(t + dur + .02);
  }
  // power ≈ impact speed in m/s. A low body thud, a crunch, and for hard hits a metallic ring.
  crash(power) {
    const v = Math.min(1, power / 22);
    this.tone(85, .28, .25 + v * .45, 'sine', .45); this.burst('lowpass', 500 + v * 900, .7, .22 + v * .2, .25 + v * .5);
    if (v > .3) { this.burst('bandpass', 2400, 2.5, .16, v * .28, 1.4); this.tone(310 + Math.random() * 120, .35, v * .06, 'triangle', .9); }
  }
  scrape(v) { this.burst('bandpass', 1500, 1.2, .12, Math.min(.2, v * .02)); }
  pickup(nitro) { if (nitro) { this.tone(520, .12, .12); this.tone(780, .2, .1); } else { this.tone(1320, .09, .08); this.tone(1760, .16, .07); } }
  wrench() { for (let i = 0; i < 5; i++) setTimeout(() => this.burst('bandpass', 3200, 6, .05, .12, 2), i * 55); }
  shift() { this.burst('lowpass', 300, 1, .06, .12); }
}
