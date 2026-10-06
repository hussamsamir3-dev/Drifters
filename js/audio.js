// Audio. Engines are the bundled sample loops (five alternative engine identities, each a steady 3000 rpm loop),
// pitched by the simulated engine speed. Tyres, wind, impacts and UI are synthesised noise and tones.
// One AudioContext. Each engine voice is ONE looping source that is never restarted for throttle, rpm or gear changes.
import { getAsset } from './assets.js';

const REF_RPM = 3000;
// Loader is layered on purpose: an engine is a list of loops with the rpm they were made at. Today each has one loop;
// real idle / mid / high-rpm or on-load / off-load recordings can be added here later without touching the mixer.
const one = n => ({ label: n.slice(3).replace(/_/g, ' '), trim: 1, loops: [{ file: n + '_Loop.wav', rpm: REF_RPM }] });
const four = (n, trim) => ({ label: n.slice(3).replace(/_/g, ' ') + ' (4 rpm layers)', trim, loops: [1200, 2400, 4200, 6400].map(rpm => ({ file: n + '_' + rpm + '.wav', rpm })) });
// Held-rpm banks (Controllable Race Engine Pack): five rpm anchors, each recorded on-load and off-load. The game's rpm sets the pitch of every layer, the two anchors nearest the rpm
// are cross-faded linearly, and the throttle blends on-load against off-load. Only the two profiles that match cars in this game are shipped.
const ANCH = [900, 1800, 3000, 4800, 7200], bank = (n, label) => ({ label, bank: true, trim: 1, loops: ANCH.flatMap(rpm => ['off', 'on'].map(ld => ({ file: n + '_' + String(rpm).padStart(4, '0') + '_' + ld + '.wav', rpm, ld }))) });
export const ENGINE_SETS = { '01_Turbo_Inline4': one('01_Turbo_Inline4'), '01_Compact_Turbo': bank('01_Compact_Turbo', 'Compact turbo four'), '02_Boxer_Style': bank('02_Boxer_Style', 'Boxer'), '07_TwinTurbo_V6': four('07_TwinTurbo_V6', 1.45), '09_Rally_Inline5': four('09_Rally_Inline5', 1.5) };
const TYRES = { sqLow: 'tyre_squeal_low.wav', sqMid: 'tyre_squeal_mid.wav', sqHigh: 'tyre_squeal_high.wav', whine: 'gear_whine.wav', limiter: 'rev_limiter.wav', spool: 'turbo_spool.wav', scrub: 'tyre_scrub.wav', grass: 'surface_grass.wav', gravel: 'surface_gravel.wav', kerb: 'kerb_rumble.wav' };
const SHOTS = { pop: '06_Shift_Exhaust_SinglePop.wav', crackle: '07_Shift_Exhaust_CrackleBurst.wav', bang1: 'exhaust_bang_1.wav', bang2: 'exhaust_bang_2.wav', bang3: 'exhaust_bang_3.wav', bov1: 'turbo_blowoff_1.wav', bov2: 'turbo_blowoff_2.wav', popB: 'Shift_Short_Pop.wav', crackleB: 'Shift_Crackle_Burst.wav' };
const clamp = (v, a, b) => v < a ? a : v > b ? b : v;

// One voice = every rpm layer of one engine, all looping together from the moment the engine starts. Engine speed moves the
// playback rate of each layer and cross-fades between the two layers nearest the current rpm, so no layer is ever stretched far
// from the speed it was made at. Nothing is restarted for throttle, rpm or gear changes.
class EngineVoice {
  constructor(au) { this.au = au; const c = au.ctx; this.level = c.createGain(); this.level.gain.value = 0; this.lp = c.createBiquadFilter(); this.lp.type = 'lowpass'; this.lp.frequency.value = 1500; this.lp.Q.value = .5; this.level.connect(this.lp); this.pan = c.createStereoPanner(); this.lp.connect(this.pan); this.pan.connect(au.engBus); this.cur = null; this.name = ''; }
  start(name, rate = .4) {
    const au = this.au, c = au.ctx, set = ENGINE_SETS[name]; if (!set || !set.loops.every(l => au.buf[l.file])) return false; this.fadeOut(.2);
    const fade = c.createGain(), t = c.currentTime; fade.gain.setValueAtTime(0, t); fade.gain.linearRampToValueAtTime(set.trim, t + .2); fade.connect(this.level);
    const layers = set.loops.map((l, i) => { const buf = au.buf[l.file], src = c.createBufferSource(), g = c.createGain(); src.buffer = buf; src.loop = true; src.loopStart = 0; src.loopEnd = buf.duration; g.gain.value = set.bank || i ? 0 : 1; src.connect(g); g.connect(fade); src.start(t, Math.random() * buf.duration); au.stats.live++; return { src, g, rpm: l.rpm, ld: l.ld }; });
    this.cur = { layers, fade, bank: !!set.bank }; this.ld = undefined; this.name = name; au.stats.starts++; return true;
  }
  fadeOut(sec = .25) { const k = this.cur; if (!k) return; const t = this.au.ctx.currentTime; k.fade.gain.cancelScheduledValues(t); k.fade.gain.setValueAtTime(k.fade.gain.value, t); k.fade.gain.linearRampToValueAtTime(0, t + sec); for (const l of k.layers) { l.src.stop(t + sec + .05); l.src.onended = () => { l.src.disconnect(); l.g.disconnect(); this.au.stats.live--; }; } setTimeout(() => k.fade.disconnect(), (sec + .2) * 1000); this.cur = null; this.name = ''; }
  set(rpm, load, vol) {      // rpm sets pitch (and which layers are heard); load sets loudness and brightness only
    if (!this.cur) return; const t = this.au.ctx.currentTime, L = this.cur.layers, n = L.length;
    if (this.cur.bank) {       // held-rpm bank: linear cross-fade between neighbouring anchors, on/off-load blended by the smoothed throttle
      let b = 0; while (b < ANCH.length - 2 && rpm > ANCH[b + 1]) b++; const u = clamp((rpm - ANCH[b]) / (ANCH[b + 1] - ANCH[b]), 0, 1), lt = clamp(load, 0, 1); this.ld = (this.ld ?? lt) + (lt - (this.ld ?? lt)) * .3;
      for (const l of L) { const ai = ANCH.indexOf(l.rpm), aw = ai === b ? 1 - u : ai === b + 1 ? u : 0, lw = l.ld === 'on' ? this.ld : 1 - this.ld; l.src.playbackRate.setTargetAtTime(clamp(rpm / l.rpm, .55, 1.9), t, .035); l.g.gain.setTargetAtTime(aw * lw, t, .03); }
      this.level.gain.setTargetAtTime(vol * (.3 + .32 * load), t, .06); this.lp.frequency.setTargetAtTime(2400 + load * 4600 + clamp(rpm / 3000, 0, 2.5) * 400, t, .07); return;
    }
    let a = 0; while (a < n - 2 && rpm > L[a + 1].rpm) a++;
    const u = n > 1 ? clamp(Math.log(rpm / L[a].rpm) / Math.log(L[a + 1].rpm / L[a].rpm), 0, 1) : 0;
    L.forEach((l, i) => { l.src.playbackRate.setTargetAtTime(clamp(rpm / l.rpm, n > 1 ? .45 : .25, n > 1 ? 2.4 : 3.4), t, .035); l.g.gain.setTargetAtTime(n === 1 ? 1 : i === a ? Math.cos(u * 1.5708) : i === a + 1 ? Math.sin(u * 1.5708) : 0, t, .03); });
    this.level.gain.setTargetAtTime(vol * (.16 + .39 * load), t, .06); this.lp.frequency.setTargetAtTime(1300 + load * 4200 + clamp(rpm / 3000, 0, 2.5) * 500, t, .07);
  }
}

export class GameAudio {
  constructor() { this.on = true; this.ctx = null; this.vol = .7; this.evol = .7; this.mvol = .5; this.buf = {}; this.state = 'idle'; this.stats = { starts: 0, live: 0, shots: 0, liveShots: 0 }; this.lastLoad = 0; this.spec = null; this.riv = []; }
  init() {
    if (this.ctx) { if (this.ctx.state !== 'running' && !document.hidden) this.ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext; if (!AC) { this.state = 'unsupported'; return; }
    const c = this.ctx = new AC();
    const comp = c.createDynamicsCompressor(); comp.threshold.value = -10; comp.knee.value = 12; comp.ratio.value = 3; comp.attack.value = .01; comp.release.value = .25; comp.connect(c.destination);
    this.master = c.createGain(); this.master.gain.value = this.on ? .8 : 0; this.master.connect(comp);
    this.engBus = c.createGain(); this.engBus.gain.value = this.evol; this.engBus.connect(this.master);
    // Everything the car makes (engine, exhaust bangs, turbo) goes through this one bus, and the bus has a little outdoor "air" on it:
    // a very short, dark tail, as if heard from the trackside. That shared space is what makes a bang belong to the car.
    { const len = Math.floor(c.sampleRate * .32), ir = c.createBuffer(1, len, c.sampleRate), d = ir.getChannelData(0); for (let i = 0; i < len; i++) { const tt = i / c.sampleRate; d[i] = (Math.random() * 2 - 1) * Math.exp(-tt / .07) * (tt < .004 ? 0 : 1); } for (const ms of [11, 23, 37, 58]) d[Math.floor(ms / 1000 * c.sampleRate)] += .5;
      const cv = c.createConvolver(); cv.buffer = ir; const wl = c.createBiquadFilter(); wl.type = 'lowpass'; wl.frequency.value = 2600; const wg = c.createGain(); wg.gain.value = .22; this.engBus.connect(cv); cv.connect(wl); wl.connect(wg); wg.connect(this.master); }
    this.shotLP = c.createBiquadFilter(); this.shotLP.type = 'lowpass'; this.shotLP.frequency.value = 5200; this.shotLP.Q.value = .4; this.shotLP.connect(this.engBus);     // bangs come from the tailpipe, behind and below: slightly muffled
    this.airLP = c.createBiquadFilter(); this.airLP.type = 'lowpass'; this.airLP.frequency.value = 5200; this.airLP.connect(this.engBus);                                    // turbo air: brighter, but still through the car
    this.sfx = c.createGain(); this.sfx.gain.value = this.vol; this.sfx.connect(this.master);
    { const blen = Math.floor(c.sampleRate * 2), bir = c.createBuffer(2, blen, c.sampleRate); for (let ch = 0; ch < 2; ch++) { const d = bir.getChannelData(ch); for (let i = 0; i < blen; i++) { const tt = i / c.sampleRate; d[i] = (Math.random() * 2 - 1) * Math.exp(-tt / .5) * Math.min(1, tt / .014); } }
      this.bigIn = c.createGain(); this.engBus.connect(this.bigIn); this.sfx.connect(this.bigIn); const bcv = c.createConvolver(); bcv.buffer = bir; this.bigLP = c.createBiquadFilter(); this.bigLP.type = 'lowpass'; this.bigLP.frequency.value = 4000; this.bigG = c.createGain(); this.bigG.gain.value = 0; this.bigIn.connect(bcv); bcv.connect(this.bigLP); this.bigLP.connect(this.bigG); this.bigG.connect(this.master); }      // a big, long room that only opens near grandstands and under the footbridge
    this.meterNode = c.createAnalyser(); this.meterNode.fftSize = 1024; this.master.connect(this.meterNode);
    const nb = c.createBuffer(1, c.sampleRate * 3, c.sampleRate), d = nb.getChannelData(0); let last = 0; for (let i = 0; i < d.length; i++) { const w = Math.random() * 2 - 1; last = (last + .04 * w) / 1.04; d[i] = w * .5 + last * 6; } this.noiseBuf = nb;
    const bed = (type, f, q, out = this.sfx) => { const s = c.createBufferSource(); s.buffer = nb; s.loop = true; s.playbackRate.value = .8 + Math.random() * .4; const fl = c.createBiquadFilter(); fl.type = type; fl.frequency.value = f; fl.Q.value = q; const g = c.createGain(); g.gain.value = 0; s.connect(fl); fl.connect(g); g.connect(out); s.start(); return { g, fl }; };
    this.wind = bed('lowpass', 500, .5); this.roll = bed('lowpass', 260, .7); this.skid = bed('bandpass', 520, .9); this.skidHi = bed('highpass', 3200, .5);            // tyre scrub (rubber working) and wet hiss
    // tyre squeal: noise through three narrow resonances that wander slightly, so it howls like rubber instead of hissing
    { const src = c.createBufferSource(); src.buffer = nb; src.loop = true; const out = c.createGain(); out.gain.value = 0; out.connect(this.sfx); const lfo = c.createOscillator(); lfo.frequency.value = 4.3; const lg = c.createGain(); lg.gain.value = 45; lfo.connect(lg); lfo.start();
      this.sq = { g: out, f: [1, 1.52, 2.31].map((m, i) => { const f = c.createBiquadFilter(); f.type = 'bandpass'; f.Q.value = 18 - i * 3; f.frequency.value = 700 * m; const g = c.createGain(); g.gain.value = [1, .55, .3][i]; src.connect(f); f.connect(g); g.connect(out); lg.connect(f.detune); f.mult = m; return f; }) }; src.start(); } this.dirt = bed('lowpass', 420, .8); this.nitro = bed('bandpass', 1600, .7); this.brake = bed('bandpass', 3100, 5); this.rain = bed('highpass', 2600, .4); this.crowd = bed('bandpass', 950, .5);
    this.spool = bed('bandpass', 2600, 2.2, this.engBus);                     // turbo: filtered air noise, never a pure tone
    this.voice = new EngineVoice(this); this.rivV = [0, 1, 2].map(() => new EngineVoice(this)); this.audV = new EngineVoice(this);
    document.addEventListener('visibilitychange', () => { if (!this.ctx) return; if (document.hidden) this.ctx.suspend(); else { this.ctx.resume(); this.lastLoad = 0; } });   // on return the next frame simply sets current rpm and load; nothing missed is replayed
    this.load();
  }
  async load() {
    this.state = 'loading';
    try { const files = [...Object.values(ENGINE_SETS).flatMap(s => s.loops.map(l => l.file)), ...Object.values(SHOTS), ...Object.values(TYRES)];
      await Promise.all(files.map(async f => { this.buf[f] = await this.ctx.decodeAudioData(await getAsset('audio/' + f)); })); this.state = 'ready';
      // tyre and surface loops: always running, silent until the tyres or the surface give them something to do
      this.ty = {}; for (const k in TYRES) { const src = this.ctx.createBufferSource(), g = this.ctx.createGain(); src.buffer = this.buf[TYRES[k]]; src.loop = true; g.gain.value = 0; src.connect(g); g.connect(k === 'spool' ? this.airLP : k === 'limiter' || k === 'whine' ? this.engBus : this.sfx); src.start(0, Math.random()); this.ty[k] = { src, g }; } }
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
  zone(w, kind) { if (!this.bigG) return; const t = this.ctx.currentTime; this.bigG.gain.setTargetAtTime(w * (kind === 'bridge' ? .9 : .42), t, .25); this.bigLP.frequency.setTargetAtTime(kind === 'bridge' ? 2300 : 4200, t, .3); }

  // Called every frame from the physics state. s: { rpm (real rpm), rpmN 0..1, load 0..1, speed, skid, dirt, nitro, brake, rain, limiter, turbo, running }
  drive(s) {
    if (!this.ctx) return; if (this.quiet) return this.silence();
    const t = this.ctx.currentTime, k = Math.min(1, s.speed / 60), sp = this.spec; this.lastRpmN = s.rpmN;
    if (this.state === 'ready' && sp) {
      if (s.running === false) { if (this.voice.cur) this.voice.fadeOut(.5); }
      else { if (this.voice.name !== sp.snd) this.voice.start(sp.snd, s.rpm / REF_RPM);
        let vol = 1; if (t < (this.dipUntil || 0)) vol = .42;                                              // gear change: drive is cut, the note drops back, then returns
        if (s.limiter) vol *= .5;                                           // rev limiter: a soft stutter while the cut is active
        this.voice.set(s.rpm, s.load, vol);
        // Turbo. Boost builds with load and revs and lags behind the throttle like a real compressor. The spool is a whistle whose pitch
        // follows boost; lifting off while on boost dumps it through the blow-off valve (with flutter if you lift at high revs).
        const tb = s.turbo || 0, want = tb ? Math.min(1, s.load * (.25 + s.rpmN * 1.1)) : 0; this.boost = (this.boost || 0) + (want - (this.boost || 0)) * (want > (this.boost || 0) ? .045 : .12);
        if (this.ty) { this.ty.spool.g.gain.setTargetAtTime(Math.min(1, tb) * this.boost * this.boost * .12, t, .1); this.ty.spool.src.playbackRate.setTargetAtTime(.45 + this.boost * .75 + s.rpmN * .2, t, .1); }
        this.spool.g.gain.setTargetAtTime(0, t, .1);
        if (this.lastLoad > .6 && s.load < .15 && t - (this.liftT || 0) > .9) { this.liftT = t;
          if (tb && this.boost > .35) { const bst = this.boost; this.shot(s.rpmN > .62 ? 'bov2' : 'bov1', .36 + bst * .24, true); this.boost *= .2; const nf = bst > .5 && s.rpmN > .4 ? (sp.flut || 0) : 0; for (let i = 1; i <= nf; i++) setTimeout(() => this.shot('bov1', (.3 + bst * .2) * (1 - i * .14), true, 1.18 + Math.random() * .25), 85 * i); }      // compressor surge: a rapid run of flutters on big-turbo cars
          if (s.rpmN > .5) { if (sp.pops === 'crackle' && Math.random() < .55) this.shot('crackle', .42, true); else this.shot('pop', .34 + s.rpmN * .2, true); } }     // lifting off at high revs: the exhaust pops (the flame is drawn by the car)
        this.lastLoad += (s.load - this.lastLoad) * .5; }
    }
    this.wind.g.gain.setTargetAtTime(k * k * .3, t, .2); this.wind.fl.frequency.setTargetAtTime(300 + k * 900, t, .2);
    this.roll.g.gain.setTargetAtTime(Math.min(.16, k * .3) * (1 - s.dirt), t, .15);
    // Tyres and surfaces (sample loops). Scrub rises as the tyres are loaded, before they let go. Squeal comes in when they slide:
    // higher with speed and a locked wheel, lower with wheelspin, mostly hiss in the wet. Grass, sand/gravel and kerbs have their own sounds.
    const g = Math.max(0, Math.min(1, ((s.grip || 0) - .5) / .5)), dry = 1 - (s.wet || 0) * .85, sl = s.skid || 0, sp2 = Math.min(1, s.speed / 30), T = this.ty, road = 1 - s.dirt;
    const set = (v, gain, rate, tc = .08) => { v.g.gain.setTargetAtTime(gain, t, tc); if (rate) v.src.playbackRate.setTargetAtTime(rate, t, .1); };
    if (T) {
      set(T.scrub, (g * .5 + sl * .35 + k * .12) * sp2 * road, .75 + k * .7 + g * .15);
      // squeal follows the speed of the slide: a low juddering howl when slow, a clean howl in the middle, a high screech when fast. Pitch climbs with speed inside each band.
      { const v = s.speed, sqK = s.surf === 'road' || !s.surf ? 1 : s.surf === 'wet' ? .45 : 0, amt = Math.max(sl, (s.lock || 0) * .6) * (.4 + .6 * sp2) * dry * road * .36 * sqK * (s.soft || 1) * (1 + (1 - (s.tmpK ?? 1)) * 1.5), w0 = 1 - Math.min(1, Math.max(0, (v - 9) / 11)), w2 = Math.min(1, Math.max(0, (v - 24) / 16)), w1 = Math.max(0, 1 - w0 - w2), bend = (s.lock || 0) * .14 - (s.spin || 0) * .12, tc = sl > .05 ? .05 : .16;
        set(T.sqLow, amt * w0, .8 + v / 30 * .35 + bend, tc); set(T.sqMid, amt * w1, .78 + v / 45 * .4 + bend, tc); set(T.sqHigh, amt * w2 * 1.1, .75 + v / 70 * .45 + bend, tc); }
      { const wk = sp.whine ?? .4; set(T.whine, k * Math.sqrt(k) * .05 * (.3 + wk * 1.6), (.35 + s.speed / 42) * (sp.drive === 'awd' ? .88 : 1) * (1 + (wk > .7 ? .12 : 0)), .15); }      // straight-cut dog boxes whine loudly and high; helical road gears are quiet; four-wheel-drive adds a lower driveline note                                       // gear whine: pitch is road speed, the sound of going fast
      set(T.limiter, s.limiter ? .45 : 0, 1, s.limiter ? .01 : .04);                                       // rev limiter: the ignition-cut stutter, for as long as it is cutting
      set(T.grass, (s.sand ? 0 : s.dirt * (.25 + .75 * sp2) * 1.1) + (s.surf === 'mud' ? (.45 + sl * .4) * sp2 * 1.2 : 0), (.8 + k * .9) * (s.surf === 'mud' ? .62 : 1)); set(T.gravel, ((s.sand ? s.dirt : s.dirt * .25) * (.25 + .75 * sp2) * 1.6) + (s.surf === 'gravel' ? (.4 + sl * .6) * sp2 * 1.5 : 0), .8 + k * .8);
      set(T.kerb, (s.kerb || 0) * Math.min(1, s.speed / 12) * 1.6, Math.max(.4, s.speed / 13));
      this.skid.g.gain.setTargetAtTime(0, t, .1); this.dirt.g.gain.setTargetAtTime(0, t, .1); this.sq.g.gain.setTargetAtTime(0, t, .1);
    } else { this.skid.g.gain.setTargetAtTime((g * .1 + sl * .12) * sp2 * road, t, .08); this.dirt.g.gain.setTargetAtTime(s.dirt * .35, t, .1); this.sq.g.gain.setTargetAtTime(sl * dry * road * .4, t, .08); }   // until the samples have loaded
    this.skidHi.g.gain.setTargetAtTime(Math.max(sl, g * .5) * Math.max(s.wet || 0, s.surf === 'wet' ? .8 : 0) * sp2 * .09 + (s.surf === 'wet' ? .03 * sp2 : 0), t, .12);      // spray in the wet and over puddles this.brake.g.gain.setTargetAtTime((s.brake || 0) * Math.min(1, s.speed / 25) * .018, t, .05);
    this.nitro.g.gain.setTargetAtTime(s.nitro ? .16 : 0, t, .1); this.rain.g.gain.setTargetAtTime((s.rain || 0) * .1, t, .5);
  }
  // The single entry point for a completed gear change. dir +1 up, -1 down.
  shift(dir, load, rpmN, pops) {
    if (!this.ctx || this.quiet) return; const t = this.ctx.currentTime; this.dipUntil = t + (dir > 0 ? .13 : .09);
    if (dir > 0 && load > .6 && rpmN > .5 && pops) { this.shot('bang' + (pops === 'crackle' ? 1 + (Math.random() * 3 | 0) : 1 + (Math.random() * 2 | 0)), .85 + rpmN * .25); if (pops === 'crackle' && Math.random() < .5) setTimeout(() => this.shot('crackle', .28, true), 120); }   // a hard, high-rev upshift lights the exhaust: a bang, and on lively cars a crackle after it   // only on a hard, high-rpm upshift
  }
  shot(kind, vol = .5, force = false, rate = 1) {
    if ((kind === 'pop' || kind === 'crackle') && this.buf[SHOTS[kind + 'B']] && Math.random() < .5) kind += 'B';      // two pops from the pack and two from the game, mixed                   // one-shot exhaust pop: fresh source each time, cooldown, voice cap, small pitch and level variation
    const c = this.ctx, buf = this.buf[SHOTS[kind]], t = c.currentTime; if (!buf || (!force && t - (this.shotT || 0) < .22) || this.stats.liveShots >= 6) return; if (!force) this.shotT = t;
    const s = c.createBufferSource(), g = c.createGain(); s.buffer = buf; s.playbackRate.value = (1 + (Math.random() - .5) * .08) * rate; const v = vol * (1 + (Math.random() - .5) * .2);
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(v, t + .006); g.gain.setValueAtTime(v, t + buf.duration * .7); g.gain.linearRampToValueAtTime(0, t + buf.duration); s.connect(g); g.connect(kind.startsWith('bov') ? this.airLP : this.shotLP);
    if (kind.startsWith('bang')) { s.playbackRate.value *= .9 + (this.lastRpmN || .5) * .25; this.dipUntil = Math.max(this.dipUntil || 0, t + .07); }   // higher revs, tighter bang; the engine note ducks under it for an instant
    this.stats.shots++; this.stats.liveShots++; s.onended = () => { s.disconnect(); g.disconnect(); this.stats.liveShots--; }; s.start(t);
  }
  // other cars: up to three voices, louder as they come closer, started and released gradually
  rivals(list) {
    if (!this.ctx || this.quiet || this.state !== 'ready') return;
    this.rivV.forEach((v, i) => { const r = list[i]; if (!r || r.dist > 60) { if (v.cur) v.fadeOut(.4); return; } if (v.name !== r.snd) v.start(r.snd, r.rpm / REF_RPM); const a = clamp(1 - r.dist / 60, 0, 1); v.set(r.rpm * (1 + (r.dop || 0)), r.load, a * a * .5); v.pan.pan.setTargetAtTime(clamp(r.pan || 0, -1, 1), this.ctx.currentTime, .08); });
  }
  silence() { if (!this.ctx) return; const t = this.ctx.currentTime; if (this.sq) this.sq.g.gain.setTargetAtTime(0, t, .1); if (this.ty) for (const k in this.ty) this.ty[k].g.gain.setTargetAtTime(0, t, .1); for (const b of [this.wind, this.roll, this.skid, this.skidHi, this.dirt, this.nitro, this.brake, this.rain, this.crowd, this.spool]) b.g.gain.setTargetAtTime(0, t, .12); if (this.voice.cur) this.voice.fadeOut(.3); for (const v of this.rivV) if (v.cur) v.fadeOut(.3); }
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
  turboDemo() { if (this.ty) { const t = this.ctx.currentTime, v = this.ty.spool; v.g.gain.setTargetAtTime(.2, t, .2); v.src.playbackRate.setTargetAtTime(1.2, t, .3); v.g.gain.setTargetAtTime(0, t + .8, .05); } setTimeout(() => this.shot('bov2', .6, true), 820); }
}
const t0 = au => au.ctx.currentTime;
