// Audio. Engines are the bundled sample loops (five alternative engine identities, each a steady 3000 rpm loop),
// pitched by the simulated engine speed. Tyres, wind, impacts and UI are synthesised noise and tones.
// One AudioContext. Each engine voice is ONE looping source that is never restarted for throttle, rpm or gear changes.
import { getAsset } from './assets.js';

const REF_RPM = 3000;
// Loader is layered on purpose: an engine is a list of loops with the rpm they were made at. Today each has one loop;
// real idle / mid / high-rpm or on-load / off-load recordings can be added here later without touching the mixer.
export const ENGINE_SETS = Object.fromEntries(['01_Turbo_Inline4', '02_Boxer_Flat4', '03_Race_Inline6', '04_Crossplane_V8', '05_Race_V10'].map(n => [n, { label: n.slice(3).replace(/_/g, ' '), trim: 1, loops: [{ file: n + '_Loop.wav', rpm: REF_RPM }] }]));
const SHOTS = { pop: '06_Shift_Exhaust_SinglePop.wav', crackle: '07_Shift_Exhaust_CrackleBurst.wav' };
const clamp = (v, a, b) => v < a ? a : v > b ? b : v;

class EngineVoice {                       // looping source -> its own fade gain -> voice level -> low-pass -> engine bus
  constructor(au) { this.au = au; const c = au.ctx; this.level = c.createGain(); this.level.gain.value = 0; this.lp = c.createBiquadFilter(); this.lp.type = 'lowpass'; this.lp.frequency.value = 1500; this.lp.Q.value = .5; this.level.connect(this.lp); this.lp.connect(au.engBus); this.cur = null; this.name = ''; }
  start(name, rate = .4) {                // crossfades from whatever was playing over ~200 ms
    const au = this.au, c = au.ctx, buf = au.buf[ENGINE_SETS[name].loops[0].file]; if (!buf) return false; this.fadeOut(.2);
    const src = c.createBufferSource(), g = c.createGain(), t = c.currentTime; src.buffer = buf; src.loop = true; src.loopStart = 0; src.loopEnd = buf.duration; src.playbackRate.value = rate;
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(ENGINE_SETS[name].trim, t + .2); src.connect(g); g.connect(this.level); src.start(t, Math.random() * buf.duration);
    this.cur = { src, g }; this.name = name; au.stats.starts++; au.stats.live++; return true;
  }
  fadeOut(sec = .25) { const k = this.cur; if (!k) return; const t = this.au.ctx.currentTime; k.g.gain.cancelScheduledValues(t); k.g.gain.setValueAtTime(k.g.gain.value, t); k.g.gain.linearRampToValueAtTime(0, t + sec); k.src.stop(t + sec + .05); k.src.onended = () => { k.src.disconnect(); k.g.disconnect(); this.au.stats.live--; }; this.cur = null; this.name = ''; }
  // rpm sets pitch only; load sets loudness and brightness only
  set(rpm, load, vol) { if (!this.cur) return; const t = this.au.ctx.currentTime, rate = clamp(rpm / REF_RPM, .25, 3.4); this.cur.src.playbackRate.setTargetAtTime(rate, t, .035); this.level.gain.setTargetAtTime(vol * (.16 + .39 * load), t, .06); this.lp.frequency.setTargetAtTime(1200 + load * 3800 + Math.min(rate, 2.5) * 400, t, .07); }
}

export class GameAudio {
  constructor() { this.on = true; this.ctx = null; this.vol = .7; this.evol = .7; this.mvol = .5; this.buf = {}; this.state = 'idle'; this.stats = { starts: 0, live: 0, shots: 0, liveShots: 0 }; this.lastLoad = 0; this.spec = null; this.riv = []; }
  init() {
    if (this.ctx) { if (this.ctx.state !== 'running' && !document.hidden) this.ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext; if (!AC) { this.state = 'unsupported'; return; }
    const c = this.ctx = new AC();
    const comp = c.createDynamicsCompressor(); comp.threshold.value = -10; comp.knee.value = 12; comp.ratio.value = 3; comp.attack.value = .01; comp.release.value = .25; comp.connect(c.destination);
    this.master = c.createGain(); this.master.gain.value = this.on ? .8 : 0; this.master.connect(comp);
    this.engBus = c.createGain(); this.engBus.gain.value = this.evol; this.engBus.connect(this.master); this.sfx = c.createGain(); this.sfx.gain.value = this.vol; this.sfx.connect(this.master);
    this.meterNode = c.createAnalyser(); this.meterNode.fftSize = 1024; this.master.connect(this.meterNode);
    const nb = c.createBuffer(1, c.sampleRate * 3, c.sampleRate), d = nb.getChannelData(0); let last = 0; for (let i = 0; i < d.length; i++) { const w = Math.random() * 2 - 1; last = (last + .04 * w) / 1.04; d[i] = w * .5 + last * 6; } this.noiseBuf = nb;
    const bed = (type, f, q, out = this.sfx) => { const s = c.createBufferSource(); s.buffer = nb; s.loop = true; s.playbackRate.value = .8 + Math.random() * .4; const fl = c.createBiquadFilter(); fl.type = type; fl.frequency.value = f; fl.Q.value = q; const g = c.createGain(); g.gain.value = 0; s.connect(fl); fl.connect(g); g.connect(out); s.start(); return { g, fl }; };
    this.wind = bed('lowpass', 500, .5); this.roll = bed('lowpass', 260, .7); this.skid = bed('bandpass', 850, 1.6); this.skidHi = bed('bandpass', 2100, 3); this.dirt = bed('lowpass', 420, .8); this.nitro = bed('bandpass', 1600, .7); this.brake = bed('bandpass', 3100, 5); this.rain = bed('highpass', 2600, .4); this.crowd = bed('bandpass', 950, .5);
    this.spool = bed('bandpass', 2600, 2.2, this.engBus);                     // turbo: filtered air noise, never a pure tone
    this.voice = new EngineVoice(this); this.rivV = [0, 1, 2].map(() => new EngineVoice(this)); this.audV = new EngineVoice(this);
    document.addEventListener('visibilitychange', () => { if (!this.ctx) return; if (document.hidden) this.ctx.suspend(); else { this.ctx.resume(); this.lastLoad = 0; } });   // on return the next frame simply sets current rpm and load; nothing missed is replayed
    this.load();
  }
  async load() {
    this.state = 'loading';
    try { const files = [...Object.values(ENGINE_SETS).flatMap(s => s.loops.map(l => l.file)), ...Object.values(SHOTS)];
      await Promise.all(files.map(async f => { this.buf[f] = await this.ctx.decodeAudioData(await getAsset('audio/' + f)); })); this.state = 'ready'; }
    catch (e) { console.warn('engine audio failed to load', e); this.state = 'error'; }
  }
  setMuted(m) { this.on = !m; if (this.el) this.music(this.musicOn); if (this.master) this.master.gain.setTargetAtTime(this.on ? .8 : 0, this.ctx.currentTime, .05); }
  setVolumes() { if (!this.ctx) return; const t = this.ctx.currentTime; this.engBus.gain.setTargetAtTime(this.evol, t, .05); this.sfx.gain.setTargetAtTime(this.vol, t, .05); }
  music(on) {
    if (!this.el) { this.el = new Audio('assets/menu.mp3'); this.el.loop = true; this.el.volume = 0; }
    this.musicOn = on; const el = this.el; if (on && this.on) el.play().catch(() => {});
    clearInterval(this.fade); this.fade = setInterval(() => { const tgt = on && this.on ? this.mvol : 0, d = tgt - el.volume; if (Math.abs(d) < .05) { el.volume = tgt; clearInterval(this.fade); if (!tgt) el.pause(); } else el.volume = Math.max(0, Math.min(1, el.volume + Math.sign(d) * .04)); }, 60);
  }
  setCar(spec) { this.spec = spec; }

  // Called every frame from the physics state. s: { rpm (real rpm), rpmN 0..1, load 0..1, speed, skid, dirt, nitro, brake, rain, limiter, turbo, running }
  drive(s) {
    if (!this.ctx) return; if (this.quiet) return this.silence();
    const t = this.ctx.currentTime, k = Math.min(1, s.speed / 60), sp = this.spec;
    if (this.state === 'ready' && sp) {
      if (s.running === false) { if (this.voice.cur) this.voice.fadeOut(.5); }
      else { if (this.voice.name !== sp.snd) this.voice.start(sp.snd, s.rpm / REF_RPM);
        let vol = 1; if (t < (this.dipUntil || 0)) vol = .42;                                              // gear change: drive is cut, the note drops back, then returns
        if (s.limiter) vol *= .7 + .3 * (Math.floor(t * 22) % 2);                                           // rev limiter: a soft stutter while the cut is active
        this.voice.set(s.rpm, s.load, vol);
        const tb = s.turbo || 0; this.spool.g.gain.setTargetAtTime(tb * s.load * s.rpmN * .035, t, .15); this.spool.fl.frequency.setTargetAtTime(1800 + s.rpmN * 3600, t, .2);
        if (this.lastLoad > .6 && s.load < .15 && s.rpmN > .5 && t - (this.liftT || 0) > 1.3) { this.liftT = t;
          if (tb) this.burst('highpass', 3000, .5, .28, .035 + tb * .012, 1.3, this.engBus);                // turbo: air release hiss
          else if (sp.pops === 'crackle' && Math.random() < .6) this.shot('crackle', .5); }                  // lively exhaust: crackle on the overrun
        this.lastLoad += (s.load - this.lastLoad) * .5; }
    }
    this.wind.g.gain.setTargetAtTime(k * k * .22, t, .2); this.wind.fl.frequency.setTargetAtTime(300 + k * 900, t, .2);
    this.roll.g.gain.setTargetAtTime(Math.min(.16, k * .3) * (1 - s.dirt), t, .15);
    this.skid.g.gain.setTargetAtTime(s.skid * .2, t, .09); this.skid.fl.frequency.setTargetAtTime(700 + s.skid * 350, t, .15); this.skidHi.g.gain.setTargetAtTime(s.skid * s.skid * .05, t, .12);
    this.dirt.g.gain.setTargetAtTime(s.dirt * .35, t, .1); this.brake.g.gain.setTargetAtTime(s.brake * Math.min(1, s.speed / 25) * .018, t, .05);
    this.nitro.g.gain.setTargetAtTime(s.nitro ? .16 : 0, t, .1); this.rain.g.gain.setTargetAtTime((s.rain || 0) * .1, t, .5);
  }
  // The single entry point for a completed gear change. dir +1 up, -1 down.
  shift(dir, load, rpmN, pops) {
    if (!this.ctx || this.quiet) return; const t = this.ctx.currentTime; this.dipUntil = t + (dir > 0 ? .13 : .09);
    if (dir > 0 && load > .6 && rpmN > .5 && pops) this.shot(pops === 'crackle' && Math.random() < .4 ? 'crackle' : 'pop', .55);   // only on a hard, high-rpm upshift
  }
  shot(kind, vol = .5) {                   // one-shot exhaust pop: fresh source each time, cooldown, voice cap, small pitch and level variation
    const c = this.ctx, buf = this.buf[SHOTS[kind]], t = c.currentTime; if (!buf || t - (this.shotT || 0) < .22 || this.stats.liveShots >= 3) return; this.shotT = t;
    const s = c.createBufferSource(), g = c.createGain(); s.buffer = buf; s.playbackRate.value = 1 + (Math.random() - .5) * .08; const v = vol * (1 + (Math.random() - .5) * .2);
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(v, t + .006); g.gain.setValueAtTime(v, t + buf.duration * .7); g.gain.linearRampToValueAtTime(0, t + buf.duration); s.connect(g); g.connect(this.engBus);
    this.stats.shots++; this.stats.liveShots++; s.onended = () => { s.disconnect(); g.disconnect(); this.stats.liveShots--; }; s.start(t);
  }
  // other cars: up to three voices, louder as they come closer, started and released gradually
  rivals(list) {
    if (!this.ctx || this.quiet || this.state !== 'ready') return;
    this.rivV.forEach((v, i) => { const r = list[i]; if (!r || r.dist > 60) { if (v.cur) v.fadeOut(.4); return; } if (v.name !== r.snd) v.start(r.snd, r.rpm / REF_RPM); const a = clamp(1 - r.dist / 60, 0, 1); v.set(r.rpm, r.load, a * a * .5); });
  }
  silence() { if (!this.ctx) return; const t = this.ctx.currentTime; for (const b of [this.wind, this.roll, this.skid, this.skidHi, this.dirt, this.nitro, this.brake, this.rain, this.crowd, this.spool]) b.g.gain.setTargetAtTime(0, t, .12); if (this.voice.cur) this.voice.fadeOut(.3); for (const v of this.rivV) if (v.cur) v.fadeOut(.3); }
  ambient(dt, o) { if (this.ctx) this.crowd.g.gain.setTargetAtTime(o.on ? .028 : 0, this.ctx.currentTime, .6); }

  // ---- developer audition: hear any engine at any rpm and load, fire shifts and pops, read the output level
  audition(name, rpm, load) { if (!this.ctx || this.state !== 'ready') return; if (!name) { if (this.audV.cur) this.audV.fadeOut(.25); return; } if (this.audV.name !== name) this.audV.start(name, rpm / REF_RPM); this.audV.set(rpm, load, t0(this) < (this.dipUntil || 0) ? .42 : 1); }
  meter() { if (!this.meterNode) return -99; const a = new Float32Array(this.meterNode.fftSize); this.meterNode.getFloatTimeDomainData(a); let s = 0, p = 0; for (const v of a) { s += v * v; p = Math.max(p, Math.abs(v)); } return { rms: 20 * Math.log10(Math.sqrt(s / a.length) + 1e-6), peak: 20 * Math.log10(p + 1e-6) }; }

  // ---- synthesised effects
  tone(freq, dur = .2, vol = .2, type = 'sine', slide = 1) {
    if (!this.ctx || this.quiet) return; const c = this.ctx, o = c.createOscillator(), g = c.createGain(), t = c.currentTime; o.type = type; o.frequency.setValueAtTime(freq, t); if (slide !== 1) o.frequency.exponentialRampToValueAtTime(freq * slide, t + dur);
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(vol, t + .012); g.gain.exponentialRampToValueAtTime(.001, t + dur); o.connect(g); g.connect(this.sfx); o.onended = () => { o.disconnect(); g.disconnect(); }; o.start(); o.stop(t + dur + .02);
  }
  beep(freq = 440, dur = .18, vol = .16) { this.tone(freq, dur, vol); this.tone(freq * 2, dur * .7, vol * .25); }
  burst(type, f, q, dur, vol, rate = 1, out) {
    if (!this.ctx || this.quiet) return; const c = this.ctx, s = c.createBufferSource(), fl = c.createBiquadFilter(), g = c.createGain(), t = c.currentTime;
    s.buffer = this.noiseBuf; s.playbackRate.value = rate; fl.type = type; fl.frequency.value = f; fl.Q.value = q; g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(.001, t + dur);
    s.connect(fl); fl.connect(g); g.connect(out || this.sfx); s.onended = () => { s.disconnect(); fl.disconnect(); g.disconnect(); }; s.start(t, Math.random() * 2); s.stop(t + dur + .02);
  }
  crash(power) { const v = Math.min(1, power / 22); this.tone(85, .28, .25 + v * .45, 'sine', .45); this.burst('lowpass', 500 + v * 900, .7, .22 + v * .2, .25 + v * .5); if (v > .3) this.burst('bandpass', 2400, 2.5, .16, v * .28, 1.4); }
  scrape(v) { this.burst('bandpass', 1500, 1.2, .12, Math.min(.2, v * .02)); }
  pickup(nitro) { if (nitro) { this.tone(520, .12, .12); this.tone(780, .2, .1); } else { this.tone(1320, .09, .08); this.tone(1760, .16, .07); } }
  wrench() { for (let i = 0; i < 5; i++) setTimeout(() => this.burst('bandpass', 3200, 6, .05, .12, 2), i * 55); }
  horn() { this.tone(392, .4, .1, 'square'); this.tone(494, .4, .08, 'square'); }
  turboDemo() { this.burst('bandpass', 2400, 2, .8, .08, 1.2); setTimeout(() => this.burst('highpass', 3000, .5, .3, .07, 1.3), 760); }
}
const t0 = au => au.ctx.currentTime;
