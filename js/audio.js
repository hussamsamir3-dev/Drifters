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
const ANCH = [900, 1800, 3000, 4800, 7200], bank = (n, label) => ({ label, bank: true, trim: 2.3, loops: ANCH.flatMap(rpm => ['off', 'on'].map(ld => ({ file: n + '_' + String(rpm).padStart(4, '0') + '_' + ld + '.wav', rpm, ld }))) });      // trim: the pack's files are about 6 dB below the game's loops, so they are brought up to match
export const ENGINE_SETS = { '01_Turbo_Inline4': one('01_Turbo_Inline4'), '01_Compact_Turbo': bank('01_Compact_Turbo', 'Compact turbo four'), '02_Boxer_Style': bank('02_Boxer_Style', 'Boxer'), '07_TwinTurbo_V6': four('07_TwinTurbo_V6', 1.45), '09_Rally_Inline5': four('09_Rally_Inline5', 1.5) };
const TYRES = { sqLow: 'tyre_squeal_low.wav', sqMid: 'tyre_squeal_mid.wav', sqHigh: 'tyre_squeal_high.wav', whine: 'gear_whine.wav', limiter: 'rev_limiter.wav', spool: 'turbo_spool.wav', scrub: 'tyre_scrub.wav', grass: 'surface_grass.wav', gravel: 'surface_gravel.wav', kerb: 'kerb_rumble.wav' };
const SHOTS = { pop: '06_Shift_Exhaust_SinglePop.wav', crackle: '07_Shift_Exhaust_CrackleBurst.wav', bang1: 'exhaust_bang_1.wav', bang2: 'exhaust_bang_2.wav', bang3: 'exhaust_bang_3.wav', bov1: 'turbo_blowoff_1.wav', bov2: 'turbo_blowoff_2.wav', popB: 'Shift_Short_Pop.wav', crackleB: 'Shift_Crackle_Burst.wav' };
const clamp = (v, a, b) => v < a ? a : v > b ? b : v;
const COARSE = typeof matchMedia === 'function' && matchMedia('(pointer: coarse)').matches;
const setPos = (p, x, y, z) => { if (p.positionX) { p.positionX.value = x; p.positionY.value = y; p.positionZ.value = z; } else p.setPosition(x, y, z); };

// One voice = every rpm layer of one engine, all looping together from the moment the engine starts. Engine speed moves the
// playback rate of each layer and cross-fades between the two layers nearest the current rpm, so no layer is ever stretched far
// from the speed it was made at. Nothing is restarted for throttle, rpm or gear changes.
class EngineVoice {
  constructor(au, spatial) { this.au = au; const c = au.ctx; this.spatial = !!spatial; this.level = c.createGain(); this.level.gain.value = 0; this.lp = c.createBiquadFilter(); this.lp.type = 'lowpass'; this.lp.frequency.value = 1500; this.lp.Q.value = .5; this.level.connect(this.lp);
    if (spatial) { const p = this.pan = c.createPanner(); p.panningModel = COARSE ? 'equalpower' : 'HRTF'; p.distanceModel = 'inverse'; p.refDistance = 9; p.rolloffFactor = 1.15; p.maxDistance = 400; setPos(p, 0, -999, 0); } else this.pan = c.createStereoPanner();
    this.lp.connect(this.pan); this.pan.connect(au.engBus); this.cur = null; this.name = ''; }
  /* build 62: what the sampled engine cannot give: a sub-bass pulse at the firing rate, an intake roar and a kick when the throttle is stabbed, so the car feels powerful */
  auxSet(rpm, load, vol, cyl, acc) {
    const au = this.au, c = au.ctx, t = c.currentTime; if (!this.aux) { const o = c.createOscillator(), o2 = c.createOscillator(), g = c.createGain(), sh = c.createWaveShaper(), lp = c.createBiquadFilter(), ng = c.createGain(), nf = c.createBiquadFilter(), ns = c.createBufferSource(); o.type = 'sine'; o2.type = 'triangle'; const cv = new Float32Array(512); for (let i = 0; i < 512; i++) { const x = i / 256 - 1; cv[i] = Math.tanh(1.8 * x); } sh.curve = cv; lp.type = 'lowpass'; lp.frequency.value = 260; lp.Q.value = .7; g.gain.value = 0; o.connect(sh); o2.connect(sh); sh.connect(lp); lp.connect(g); g.connect(this.pan); ns.buffer = au.noiseBuf; ns.loop = true; nf.type = 'bandpass'; nf.Q.value = .9; nf.frequency.value = 700; ng.gain.value = 0; ns.connect(nf); nf.connect(ng); ng.connect(this.pan); o.start(); o2.start(); ns.start(); this.aux = { o, o2, g, lp, ng, nf, ns }; }
    const X = this.aux; let f = rpm / 60 * (cyl || 4) / 2; while (f > 95) f /= 2; while (f < 28 && f > 0) f *= 2; X.o.frequency.setTargetAtTime(f, t, .05); X.o2.frequency.setTargetAtTime(f * 2, t, .05);
    const rn = clamp(rpm / 7000, 0, 1.2), pw = vol * (.05 + .2 * load + .06 * clamp(acc / 6, 0, 1)) * (.5 + rn * .6); X.g.gain.setTargetAtTime(pw, t, .06); X.lp.frequency.setTargetAtTime(150 + load * 240, t, .1);
    X.ng.gain.setTargetAtTime(vol * load * load * (.025 + .06 * rn), t, .08); X.nf.frequency.setTargetAtTime(380 + rpm * .2 + load * 600, t, .1);
  }
  auxOff() { if (!this.aux) return; const t = this.au.ctx.currentTime; this.aux.g.gain.setTargetAtTime(0, t, .1); this.aux.ng.gain.setTargetAtTime(0, t, .1); }
  start(name, rate = .4) {
    const au = this.au, c = au.ctx, set = ENGINE_SETS[name]; if (!set || !set.loops.every(l => au.buf[l.file])) return false; this.fadeOut(.2);
    const fade = c.createGain(), t = c.currentTime; fade.gain.setValueAtTime(0, t); fade.gain.linearRampToValueAtTime(set.trim, t + .2); fade.connect(this.level);
    const layers = set.loops.map((l, i) => { const buf = au.buf[l.file], src = c.createBufferSource(), g = c.createGain(); src.buffer = buf; src.loop = true; src.loopStart = 0; src.loopEnd = buf.duration; g.gain.value = set.bank || i ? 0 : 1; src.connect(g); g.connect(fade); src.start(t, Math.random() * buf.duration); au.stats.live++; return { src, g, rpm: l.rpm, ld: l.ld }; });
    this.cur = { layers, fade, bank: !!set.bank }; this.ld = undefined; this.name = name; au.stats.starts++; return true;
  }
  fadeOut(sec = .25) { this.auxOff(); const k = this.cur; if (!k) return; const t = this.au.ctx.currentTime; k.fade.gain.cancelScheduledValues(t); k.fade.gain.setValueAtTime(k.fade.gain.value, t); k.fade.gain.linearRampToValueAtTime(0, t + sec); for (const l of k.layers) { l.src.stop(t + sec + .05); l.src.onended = () => { l.src.disconnect(); l.g.disconnect(); this.au.stats.live--; }; } setTimeout(() => k.fade.disconnect(), (sec + .2) * 1000); this.cur = null; this.name = ''; }
  set(rpm, load, vol) {      // rpm sets pitch (and which layers are heard); load sets loudness and brightness only
    if (!this.cur) return; if (!(rpm >= 0)) rpm = 900; this.rs = Number.isFinite(this.rs) ? this.rs + (rpm - this.rs) * .22 : rpm; rpm = this.rs;      /* the engine note follows the revs through a gentle smoothing, so it glides instead of jittering */ load = clamp(+load || 0, 0, 1); vol = +vol || 0;      // one bad frame (a NaN before the first physics step) must never reach, or stick in, the audio graph
    const t = this.au.ctx.currentTime, L = this.cur.layers, n = L.length;
    if (this.cur.bank) {       // held-rpm bank: linear cross-fade between neighbouring anchors, on/off-load blended by the smoothed throttle
      let b = 0; while (b < ANCH.length - 2 && rpm > ANCH[b + 1]) b++; const u = clamp((rpm - ANCH[b]) / (ANCH[b + 1] - ANCH[b]), 0, 1), lt = clamp(load, 0, 1); if (!Number.isFinite(this.ld)) this.ld = lt; this.ld += (lt - this.ld) * .3;
      for (const l of L) { const ai = ANCH.indexOf(l.rpm), aw = ai === b ? 1 - u : ai === b + 1 ? u : 0, lw = l.ld === 'on' ? this.ld : 1 - this.ld; l.src.playbackRate.setTargetAtTime(clamp(rpm / l.rpm, .55, 1.9), t, .07); l.g.gain.setTargetAtTime(aw * lw, t, .03); }
      this.level.gain.setTargetAtTime(vol * (.3 + .42 * load), t, .1); this.lp.frequency.setTargetAtTime(1100 + load * 2600 + clamp(rpm / 3000, 0, 2.5) * 260, t, .1); return;      /* calm: a darker tone, and loudness that hardly swells with the throttle */
    }
    let a = 0; while (a < n - 2 && rpm > L[a + 1].rpm) a++;
    const u = n > 1 ? clamp(Math.log(rpm / L[a].rpm) / Math.log(L[a + 1].rpm / L[a].rpm), 0, 1) : 0;
    L.forEach((l, i) => { l.src.playbackRate.setTargetAtTime(clamp(rpm / l.rpm, n > 1 ? .45 : .25, n > 1 ? 2.4 : 3.4), t, .07); l.g.gain.setTargetAtTime(n === 1 ? 1 : i === a ? Math.cos(u * 1.5708) : i === a + 1 ? Math.sin(u * 1.5708) : 0, t, .06); });
    this.level.gain.setTargetAtTime(vol * (.24 + .42 * load), t, .1); this.lp.frequency.setTargetAtTime(900 + load * 2600 + clamp(rpm / 3000, 0, 2.5) * 280, t, .1);
  }
}

const RADIO_TRIM = .7;      /* build 66: the radio is 30% quieter at every slider position */
export const audioFiles = () => [...Object.values(ENGINE_SETS).flatMap(s => s.loops.map(l => l.file)), ...Object.values(SHOTS), ...Object.values(TYRES)].map(f => 'audio/' + f);
export class GameAudio {
  constructor() { this.on = true; this.ctx = null; this.vol = .7; this.evol = .7; this.mvol = .5; this.rvol = .9; this.dk = 1; this.buf = {}; this.state = 'idle'; this.stats = { starts: 0, live: 0, shots: 0, liveShots: 0 }; this.lastLoad = 0; this.spec = null; this.riv = []; }
  init() {
    try { if (navigator.audioSession) navigator.audioSession.type = 'playback'; } catch (e) {}      /* iOS: play even with the ringer switch on silent, and as game audio */
    if (this.ctx) { if (this.ctx.state !== 'running' && !document.hidden) { try { this.ctx.resume(); } catch (e) {} } return; }
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
    this.airLP = c.createBiquadFilter(); this.airLP.type = 'lowpass'; this.airLP.frequency.value = 1700; this.airLP.Q.value = .3; this.airLP.connect(this.engBus);                                    // turbo air: brighter, but still through the car
    this.sfx = c.createGain(); this.sfx.gain.value = this.vol; this.sfx.connect(this.master);
    this.radioBus = c.createGain(); this.radioBus.gain.value = this.rvol * RADIO_TRIM; this.radioBus.connect(this.master);      /* the race engineer's clips: their own volume, and the engine, effects and music are lowered a little while he speaks */
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
    c.onstatechange = () => { this.lastState = c.state; if (c.state !== 'running') this.needUnlock = true; else this.needUnlock = false; };
    if (this.el) this.hookMusic();
    this.voice = new EngineVoice(this); this.rivV = [0, 1, 2, 3].map(() => new EngineVoice(this, true)); this.audV = new EngineVoice(this);
    document.addEventListener('visibilitychange', () => { if (!this.ctx) return; if (document.hidden) this.ctx.suspend(); else { try { this.ctx.resume(); } catch (e) {} this.lastLoad = 0; } });
    for (const ev of ['pageshow', 'focus']) addEventListener(ev, () => { if (this.ctx && this.ctx.state !== 'running' && !document.hidden) { try { this.ctx.resume(); } catch (e) {} } });   // on return the next frame simply sets current rpm and load; nothing missed is replayed
    this.load();
  }
  async load() {
    this.state = 'loading';
    try { const files = [...Object.values(ENGINE_SETS).flatMap(s => s.loops.map(l => l.file)), ...Object.values(SHOTS), ...Object.values(TYRES)];
      this.bad = {}; await Promise.all(files.map(async f => { try { this.buf[f] = await this.ctx.decodeAudioData(await getAsset('audio/' + f)); } catch (err) { this.bad[f] = 1; console.warn('audio file failed:', f, err && err.message); } })); this.state = 'ready';
      // tyre and surface loops: always running, silent until the tyres or the surface give them something to do
      this.ty = {}; for (const k in TYRES) { const src = this.ctx.createBufferSource(), g = this.ctx.createGain(); src.buffer = this.buf[TYRES[k]]; src.loop = true; g.gain.value = 0; src.connect(g); { const LPF = { scrub: 850, sqLow: 1500, sqMid: 2100, sqHigh: 2600, grass: 2500, gravel: 3000 }[k]; if (LPF) { const lp = this.ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = LPF; lp.Q.value = .5; g.connect(lp); lp.connect(this.sfx); } else g.connect(k === 'spool' ? this.airLP : k === 'limiter' || k === 'whine' ? this.engBus : this.sfx); }      /* the tyre loops are rounded off: the hiss and screech in the recordings are what made it harsh */ src.start(0, Math.random()); this.ty[k] = { src, g }; } }
    catch (e) { console.warn('engine audio failed to load', e); this.state = 'error'; }
  }
  setMuted(m) { this.on = !m; if (this.el) this.music(this.musicOn); if (this.master) this.master.gain.setTargetAtTime(this.on ? .8 : 0, this.ctx.currentTime, .05); }
  setVolumes() { if (!this.ctx) return; const t = this.ctx.currentTime; this.engBus.gain.setTargetAtTime(this.evol * this.dk, t, .05); this.sfx.gain.setTargetAtTime(this.vol * this.dk, t, .05); if (this.radioBus) this.radioBus.gain.setTargetAtTime(this.rvol * RADIO_TRIM, t, .05); }
  /* the radio ducks the engine, effects and music by about 6 dB: down over ~70 ms, back over ~250 ms; nothing is ever muted */
  duck(on) { if (!this.ctx) return; const t = this.ctx.currentTime, k = on ? .5 : 1; this.dk = k; const tc = on ? .025 : .08; this.engBus.gain.setTargetAtTime(this.evol * k, t, tc); this.sfx.gain.setTargetAtTime(this.vol * k, t, tc); if (this.mg && this.musicOn && this.on) this.mg.gain.setTargetAtTime(this.mvol * k, t, tc); }
  /* build 62: the menu music goes through the audio graph (a phone's media element ignores .volume, so a fade never finished and the track never stopped), and it is paused outright when a race starts */
  hookMusic() { if (!this.ctx || !this.el || this.mg || location.protocol === 'file:') return; try { const c = this.ctx; this.mg = c.createGain(); this.mg.gain.value = this.musicOn && this.on ? this.mvol : 0; c.createMediaElementSource(this.el).connect(this.mg); this.mg.connect(c.destination); this.el.volume = 1; } catch (e) { this.mg = null; } }
  music(on, hard) {
    if (!this.el) { this.el = new Audio('assets/menu.mp3'); this.el.loop = true; this.el.volume = 0; this.el.preload = 'auto'; this.el.setAttribute('playsinline', ''); }
    this.musicOn = on; const el = this.el; this.hookMusic(); const tok = this.mtok = (this.mtok || 0) + 1, want = on && this.on;
    if (this.mg) { const t = this.ctx.currentTime; this.mg.gain.cancelScheduledValues(t); this.mg.gain.setValueAtTime(this.mg.gain.value, t); if (want) { el.play().catch(() => {}); this.mg.gain.linearRampToValueAtTime(this.mvol, t + .8); } else this.mg.gain.linearRampToValueAtTime(0, t + (hard ? .05 : .5)); }
    else { clearInterval(this.fade); if (want) { el.play().catch(() => {}); el.volume = this.mvol; } else { el.volume = 0; el.pause(); } }
    if (!want) setTimeout(() => { if (this.mtok === tok) el.pause(); }, hard ? 120 : 700);
  }
  musicGuard(racing) { const el = this.el; if (racing && el && !el.paused) { this.musicOn = false; if (this.mg) this.mg.gain.value = 0; el.pause(); } }
  setCar(spec) { this.spec = spec; }
  ui(kind) {      // soft, warm interface sounds: sine and triangle tones with slow attacks through a gentle low-pass, quiet by design
    if (!this.ctx || this.state !== 'ready' || this.ctx.state !== 'running') return; const c = this.ctx, t = c.currentTime, now = performance.now(); if (now - (this._uiT || 0) < (kind === 'hover' ? 70 : 30)) return; this._uiT = now;
    const S = { hover: [[880, 0, .05, .014]], click: [[392, 0, .11, .05], [587, .015, .09, .025]], tab: [[523, 0, .12, .04], [659, .05, .14, .03]], confirm: [[523, 0, .16, .05], [659, .08, .16, .045], [784, .16, .3, .04]], back: [[494, 0, .13, .04], [370, .07, .18, .035]] }[kind] || [[440, 0, .1, .03]];
    const lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 2600; lp.connect(this.sfx || this.master);
    for (const [f, d, len, vol] of S) { const o = c.createOscillator(), g = c.createGain(); o.type = kind === 'hover' ? 'sine' : 'triangle'; o.frequency.setValueAtTime(f, t + d); o.frequency.exponentialRampToValueAtTime(f * (kind === 'back' ? .92 : 1.03), t + d + len);
      g.gain.setValueAtTime(0, t + d); g.gain.linearRampToValueAtTime(vol, t + d + .012); g.gain.exponentialRampToValueAtTime(.0008, t + d + len); o.connect(g); g.connect(lp); o.start(t + d); o.stop(t + d + len + .02); }
  }
  snd(name) { const set = ENGINE_SETS[name]; return set && set.loops.every(l => this.buf[l.file]) ? name : '01_Turbo_Inline4'; }      // an engine whose files did not load falls back to the basic four-cylinder loop, so the car is never silent
  zone(w, kind) { if (!this.bigG) return; const t = this.ctx.currentTime; this.bigG.gain.setTargetAtTime(w * (kind === 'bridge' ? .9 : .42), t, .25); this.bigLP.frequency.setTargetAtTime(kind === 'bridge' ? 2300 : 4200, t, .3); }

  // Called every frame from the physics state. s: { rpm (real rpm), rpmN 0..1, load 0..1, speed, skid, dirt, nitro, brake, rain, limiter, turbo, running }
  drive(s) {
    if (!this.ctx) return; if (this.quiet) return this.silence();
    for (const key of ['rpm', 'rpmN', 'load', 'speed', 'skid', 'grip', 'dirt', 'wet', 'brake', 'rain']) if (!Number.isFinite(s[key])) s[key] = key === 'rpm' ? 900 : 0;      // never let a NaN (the very first frame of a race) into the audio graph
    const t = this.ctx.currentTime, k = Math.min(1, s.speed / 60), sp = this.spec; this.lastRpmN = s.rpmN;
    if (this.state === 'ready' && sp) {
      if (s.running === false) { if (this.voice.cur) this.voice.fadeOut(.5); }
      else { if (this.voice.name !== this.snd(sp.snd)) this.voice.start(this.snd(sp.snd), s.rpm / REF_RPM);
        let vol = 1; if (t < (this.dipUntil || 0)) vol = .72;                                              // gear change: drive is cut, the note drops back, then returns
        if (s.limiter) vol *= .8;                                           // rev limiter: a soft stutter while the cut is active
        this.voice.set(s.rpm, s.load, vol); this.voice.auxSet(s.rpm, s.load, vol, s.cyl, s.acc || 0);
        if (s.load - (this.prevLoad ?? s.load) > .22 && t - (this.kickT || 0) > .25 && s.speed > 1) { this.kickT = t; const kv = clamp(s.load - this.prevLoad, 0, .8); this.burst('lowpass', 220 + s.rpmN * 400, .8, .16, .1 + kv * .28, .9, this.engBus); this.tone(52 + s.rpmN * 30, .17, .1 + kv * .22, 'sine', .7); }      /* the throttle is stabbed: the exhaust barks and the car thumps */
        this.prevLoad = s.load;
        // Turbo. Boost builds with load and revs and lags behind the throttle like a real compressor. The spool is a whistle whose pitch
        // follows boost; lifting off while on boost dumps it through the blow-off valve (with flutter if you lift at high revs).
        const tb = s.turbo || 0, want = tb ? Math.min(1, s.load * (.25 + s.rpmN * 1.1)) : 0; this.boost = (this.boost || 0) + (want - (this.boost || 0)) * (want > (this.boost || 0) ? .028 : .07);
        if (this.ty) { this.ty.spool.g.gain.setTargetAtTime(Math.min(1, tb) * this.boost * this.boost * .03, t, .28); this.ty.spool.src.playbackRate.setTargetAtTime(.5 + this.boost * .45 + s.rpmN * .1, t, .3);      /* turbo: a soft, low whoosh far under the engine, rising and falling slowly */ }
        this.spool.g.gain.setTargetAtTime(0, t, .1);
        if (this.lastLoad > .6 && s.load < .15 && t - (this.liftT || 0) > .9) { this.liftT = t;
          if (tb && this.boost > .35) { const bst = this.boost; this.shot(s.rpmN > .62 ? 'bov2' : 'bov1', .1 + bst * .08, true); this.boost *= .2; const nf = bst > .5 && s.rpmN > .4 ? (sp.flut || 0) : 0; for (let i = 1; i <= nf; i++) setTimeout(() => this.shot('bov1', (.08 + bst * .06) * (1 - i * .14), true, .95 + Math.random() * .12), 85 * i); }      // compressor surge: a rapid run of flutters on big-turbo cars
          }     // lifting off at high revs: the exhaust pops (the flame is drawn by the car)
        this.lastLoad += (s.load - this.lastLoad) * .5; }
      this.lastLoadNow = s.load;
    }
    this.wind.g.gain.setTargetAtTime(k * k * .17, t, .3); this.wind.fl.frequency.setTargetAtTime(240 + k * 560, t, .3);
    this.roll.g.gain.setTargetAtTime(Math.min(.16, k * .3) * (1 - s.dirt), t, .15);
    // Tyres and surfaces (sample loops). Scrub rises as the tyres are loaded, before they let go. Squeal comes in when they slide:
    // higher with speed and a locked wheel, lower with wheelspin, mostly hiss in the wet. Grass, sand/gravel and kerbs have their own sounds.
    const g = Math.max(0, Math.min(1, ((s.grip || 0) - .5) / .5)), dry = 1 - (s.wet || 0) * .85, sl = s.skid || 0, sp2 = Math.min(1, s.speed / 30), T = this.ty, road = 1 - s.dirt;
    const set = (v, gain, rate, tc = .08) => { v.g.gain.setTargetAtTime(gain, t, tc); if (rate) v.src.playbackRate.setTargetAtTime(rate, t, .1); };
    if (T) {
      { const gs = Math.max(0, Math.min(1, (g - .5) / .45)); set(T.scrub, (gs * gs * (3 - 2 * gs) * .45 + sl * .15) * sp2 * road * .38, .55 + k * .35 + g * .1, .22); }      /* road noise: only a low, soft rush when the tyres are working hard in a corner or under braking, never a constant hiss on the straight */
      // squeal follows the speed of the slide: a low juddering howl when slow, a clean howl in the middle, a high screech when fast. Pitch climbs with speed inside each band.
      /* Tyre squeal, as it really is: nothing until the tyre is truly sliding (a light slip is only the soft rush of the scrub), then one steady howl that swells with the slip and bends a little with speed.
         It comes in gently and leaves gently, never a sudden screech; the loud high band is kept well back, and the pitch sits lower than before. */
      { const v = s.speed, sqK = s.surf === 'road' || !s.surf ? 1 : s.surf === 'wet' ? .45 : 0, sIn = Math.max(sl, (s.lock || 0) * .75), sE = Math.min(1, Math.max(0, (sIn - .32) / .55)), sA = sE * sE * (3 - 2 * sE),
          amt = sA * (.3 + .7 * sp2) * dry * road * .15 * sqK * (s.soft || 1) * (1 + (1 - (s.tmpK ?? 1)) * 1.2), w0 = 1 - Math.min(1, Math.max(0, (v - 9) / 11)), w2 = Math.min(1, Math.max(0, (v - 24) / 16)), w1 = Math.max(0, 1 - w0 - w2), bend = (s.lock || 0) * .08 - (s.spin || 0) * .08, tc = sA > (this.sqPrev || 0) ? .16 : .28;
        this.sqPrev = sA; set(T.sqLow, amt * w0, .7 + v / 30 * .25 + bend, tc); set(T.sqMid, amt * w1, .72 + v / 45 * .28 + bend, tc); set(T.sqHigh, amt * w2 * .55, .68 + v / 70 * .3 + bend, tc); }
      { const wk = sp.whine ?? .4; set(T.whine, k * Math.sqrt(k) * .05 * (.3 + wk * 1.6), (.35 + s.speed / 42) * (sp.drive === 'awd' ? .88 : 1) * (1 + (wk > .7 ? .12 : 0)), .15); }      // straight-cut dog boxes whine loudly and high; helical road gears are quiet; four-wheel-drive adds a lower driveline note                                       // gear whine: pitch is road speed, the sound of going fast
      set(T.limiter, s.limiter ? .16 : 0, 1, s.limiter ? .03 : .08);                                       // rev limiter: the ignition-cut stutter, for as long as it is cutting
      set(T.grass, (s.sand ? 0 : s.dirt * (.25 + .75 * sp2) * 1.1) + (s.surf === 'mud' ? (.45 + sl * .4) * sp2 * 1.2 : 0), (.8 + k * .9) * (s.surf === 'mud' ? .62 : 1)); set(T.gravel, ((s.sand ? s.dirt : s.dirt * .25) * (.25 + .75 * sp2) * 1.6) + (s.surf === 'gravel' ? (.4 + sl * .6) * sp2 * 1.5 : 0), .8 + k * .8);
      set(T.kerb, (s.kerb || 0) * Math.min(1, s.speed / 12) * 1.6, Math.max(.4, s.speed / 13));
      this.skid.g.gain.setTargetAtTime(0, t, .1); this.dirt.g.gain.setTargetAtTime(0, t, .1); this.sq.g.gain.setTargetAtTime(0, t, .1);
    } else { this.skid.g.gain.setTargetAtTime((g * .1 + sl * .12) * sp2 * road, t, .08); this.dirt.g.gain.setTargetAtTime(s.dirt * .35, t, .1); this.sq.g.gain.setTargetAtTime(sl * dry * road * .4, t, .08); }   // until the samples have loaded
    this.skidHi.g.gain.setTargetAtTime(Math.max(sl, g * .5) * Math.max(s.wet || 0, s.surf === 'wet' ? .8 : 0) * sp2 * .09 + (s.surf === 'wet' ? .03 * sp2 : 0), t, .12);      // spray in the wet and over puddles this.brake.g.gain.setTargetAtTime((s.brake || 0) * Math.min(1, s.speed / 25) * .018, t, .05);
    this.nitro.g.gain.setTargetAtTime(s.nitro ? .16 : 0, t, .1); this.rain.g.gain.setTargetAtTime((s.rain || 0) * .1, t, .5);
  }
  // The single entry point for a completed gear change. dir +1 up, -1 down.
  /* Overrun burble. When the throttle closes at high revs, unburnt fuel reaches the hot exhaust and fires in a loose run of pops: sharp at first, then slower, softer and more
     irregular as the revs fall, over a second or so. Each pop picks its own size and pitch, some are missed, and the run stops as soon as the driver is back on the power. */
  overrun(sched, crackle) {      /* the schedule comes from the car, so the flames at the tailpipe and the sound are the same pops */
    for (const e of sched) setTimeout(() => { if (!this.ctx || this.quiet || (this.lastLoadNow || 0) > .35) return; this.shot(e.big && crackle ? 'bang' + (1 + (Math.random() * 3 | 0)) : Math.random() < .5 ? 'pop' : (crackle ? 'crackle' : 'pop'), (e.big ? .5 : .3) * e.a, true, (e.big ? .92 : 1.0) + (Math.random() - .5) * .22); }, e.t);
  }
  shift(dir, load, rpmN, pops) {
    if (!this.ctx || this.quiet) return; const t = this.ctx.currentTime; this.dipUntil = t + (dir > 0 ? .13 : .09);
    if (dir > 0 && load > .6 && rpmN > .78 && pops === 'crackle' && Math.random() < .35) { this.shot('bang' + (1 + (Math.random() * 3 | 0)), .42 + rpmN * .1); }      /* only the hottest tunes bang on an upshift, and not every time */   // a hard, high-rev upshift lights the exhaust: a bang, and on lively cars a crackle after it   // only on a hard, high-rpm upshift
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
  rivals(list) {      /* up to four other engines, each made at the place of its car, with the Doppler shift of its own speed and the air taking the top off it with distance */
    if (!this.ctx || this.quiet || this.state !== 'ready') return; const t = this.ctx.currentTime;
    this.rivV.forEach((v, i) => { const r = list[i]; if (!r || r.dist > 110) { if (v.cur) v.fadeOut(.4); return; } if (v.name !== this.snd(r.snd)) v.start(this.snd(r.snd), r.rpm / REF_RPM);
      setPos(v.pan, r.x, r.y ?? .6, r.z); const near = clamp(1 - r.dist / 110, 0, 1); v.set(r.rpm * (1 + (r.dop || 0)), r.load, .75 * (.25 + .75 * near));
      v.lp.frequency.setTargetAtTime(clamp(900 + 3400 * Math.exp(-r.dist / 38) + r.load * 900, 700, 5200), t, .08); });
  }
  silence() { if (!this.ctx) return; const t = this.ctx.currentTime; if (this.sq) this.sq.g.gain.setTargetAtTime(0, t, .1); if (this.ty) for (const k in this.ty) this.ty[k].g.gain.setTargetAtTime(0, t, .1); for (const b of [this.wind, this.roll, this.skid, this.skidHi, this.dirt, this.nitro, this.brake, this.rain, this.crowd, this.spool]) b.g.gain.setTargetAtTime(0, t, .12); if (this.voice.cur) this.voice.fadeOut(.3); for (const v of this.rivV) if (v.cur) v.fadeOut(.3); }
  ambient(dt, o) { if (this.ctx) this.crowd.g.gain.setTargetAtTime(o.on ? .028 : 0, this.ctx.currentTime, .6); }

  // ---- developer audition: hear any engine at any rpm and load, fire shifts and pops, read the output level
  audition(name, rpm, load) { if (!this.ctx || this.state !== 'ready') return; if (!name) { if (this.audV.cur) this.audV.fadeOut(.25); return; } if (this.audV.name !== name) this.audV.start(name, rpm / REF_RPM); this.audV.set(rpm, load, t0(this) < (this.dipUntil || 0) ? .42 : 1); }
  meter() { if (!this.meterNode) return -99; const a = new Float32Array(this.meterNode.fftSize); this.meterNode.getFloatTimeDomainData(a); let s = 0, p = 0; for (const v of a) { s += v * v; p = Math.max(p, Math.abs(v)); } return { rms: 20 * Math.log10(Math.sqrt(s / a.length) + 1e-6), peak: 20 * Math.log10(p + 1e-6) }; }

  // ---- synthesised effects
  tone(freq, dur = .2, vol = .2, type = 'sine', slide = 1, out) {
    if (!this.ctx || this.quiet) return; const c = this.ctx, o = c.createOscillator(), g = c.createGain(), t = c.currentTime; o.type = type; o.frequency.setValueAtTime(freq, t); if (slide !== 1) o.frequency.exponentialRampToValueAtTime(freq * slide, t + dur);
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(vol, t + .012); g.gain.exponentialRampToValueAtTime(.001, t + dur); o.connect(g); g.connect(out || this.sfx); o.onended = () => { o.disconnect(); g.disconnect(); if (out && out.isTmp) out.disconnect(); }; o.start(); o.stop(t + dur + .02);
  }
  beep(freq = 440, dur = .18, vol = .16) { this.tone(freq, dur, vol); this.tone(freq * 2, dur * .7, vol * .25); }
  burst(type, f, q, dur, vol, rate = 1, out) {
    if (!this.ctx || this.quiet) return; const c = this.ctx, s = c.createBufferSource(), fl = c.createBiquadFilter(), g = c.createGain(), t = c.currentTime;
    s.buffer = this.noiseBuf; s.playbackRate.value = rate; fl.type = type; fl.frequency.value = f; fl.Q.value = q; g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(.001, t + dur);
    s.connect(fl); fl.connect(g); g.connect(out || this.sfx); s.onended = () => { s.disconnect(); fl.disconnect(); g.disconnect(); if (out && out.isTmp) out.disconnect(); }; s.start(t, Math.random() * 2); s.stop(t + dur + .02);
  }
  /* build 62: the sound field. The listener is you (at your car, facing the way the picture faces); anything that happens elsewhere is made at its own place, so a crash behind you is behind you */
  listen(x, y, z, fx, fz) {
    const L = this.ctx && this.ctx.listener; if (!L) return; const n = Math.hypot(fx, fz) || 1; fx /= n; fz /= n;
    if (L.positionX) { L.positionX.value = x; L.positionY.value = y; L.positionZ.value = z; L.forwardX.value = fx; L.forwardY.value = 0; L.forwardZ.value = fz; L.upX.value = 0; L.upY.value = 1; L.upZ.value = 0; } else { L.setPosition(x, y, z); L.setOrientation(fx, 0, fz, 0, 1, 0); }
    this.lis = { x, y, z };
  }
  at(p, ref = 7, out) { const c = this.ctx, n = c.createPanner(); n.panningModel = COARSE ? 'equalpower' : 'HRTF'; n.distanceModel = 'inverse'; n.refDistance = ref; n.rolloffFactor = 1.25; n.maxDistance = 500; setPos(n, p.x, p.y ?? 1, p.z); n.connect(out || this.sfx); n.isTmp = true; return n; }
  crash(power, p) { const v = Math.min(1, power / 22), o = p ? this.at(p, 6) : undefined; this.tone(85, .28, .25 + v * .45, 'sine', .45, o); this.burst('lowpass', 500 + v * 900, .7, .22 + v * .2, .25 + v * .5, 1, o); if (v > .3) this.burst('bandpass', 2400, 2.5, .16, v * .28, 1.4, o); if (v > .55) { this.tone(46, .5, v * .5, 'sine', .6, o); setTimeout(() => this.burst('bandpass', 900, 1.1, .35, v * .12, .8, p ? this.at(p, 6) : undefined), 90); } }      /* a heavy hit adds a deep boom and the rattle of parts landing */
  scrape(v, p) { this.burst('bandpass', 1500, 1.2, .12, Math.min(.2, v * .02), 1, p ? this.at(p, 6) : undefined); }
  pickup(nitro) { if (nitro) { this.tone(520, .12, .12); this.tone(780, .2, .1); } else { this.tone(1320, .09, .08); this.tone(1760, .16, .07); } }
  wrench(p) { for (let i = 0; i < 5; i++) setTimeout(() => this.burst('bandpass', 3200, 6, .05, .12, 2, p ? this.at(p, 5) : undefined), i * 55); }
  horn() { this.tone(392, .4, .1, 'square'); this.tone(494, .4, .08, 'square'); }
  /* build 57: more effects, all synthesised: a car passing you, the grandstand, a lap chime, kerb and bump thuds, an ABS chatter, a flag tick */
  whoosh(vol = .3, p) {      /* the pressure wave of a car passing close: a rush that drops in pitch as it goes by, made at the other car */
    if (!this.ctx || this.quiet) return; const c = this.ctx, s = c.createBufferSource(), fl = c.createBiquadFilter(), g = c.createGain(), t = c.currentTime, pn = p ? this.at(p, 4) : null;
    s.buffer = this.noiseBuf; s.playbackRate.value = .8; fl.type = 'bandpass'; fl.Q.value = .9; fl.frequency.setValueAtTime(1100, t); fl.frequency.exponentialRampToValueAtTime(240, t + .8);
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(vol, t + .14); g.gain.exponentialRampToValueAtTime(.001, t + .85); s.connect(fl); fl.connect(g); g.connect(pn || this.sfx);
    s.onended = () => { s.disconnect(); fl.disconnect(); g.disconnect(); if (pn) pn.disconnect(); }; s.start(t, Math.random() * 2); s.stop(t + .9);
  }
  cheer(vol = .12, dur = 2.4, p) {
    if (!this.ctx || this.quiet) return; const c = this.ctx, t = c.currentTime, pn = p ? this.at(p, 22) : null;
    for (const [f, q] of [[1100, .8], [2300, 1.2]]) { const s = c.createBufferSource(), fl = c.createBiquadFilter(), g = c.createGain(); s.buffer = this.noiseBuf; s.playbackRate.value = .7; fl.type = 'bandpass'; fl.frequency.value = f; fl.Q.value = q;
      g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(vol * (f > 2000 ? .5 : 1), t + .5); g.gain.setTargetAtTime(0, t + dur * .55, dur * .22); s.connect(fl); fl.connect(g); g.connect(pn || this.sfx); s.onended = () => { s.disconnect(); fl.disconnect(); g.disconnect(); }; s.start(t, Math.random() * 2); s.stop(t + dur + 1); }
    if (pn) setTimeout(() => pn.disconnect(), (dur + 1.2) * 1000);
  }
  chime(best) { if (best) { this.tone(880, .22, .09); setTimeout(() => this.tone(1175, .22, .09), 110); setTimeout(() => this.tone(1568, .4, .09), 220); } else { this.tone(784, .16, .06); setTimeout(() => this.tone(1047, .3, .06), 100); } }
  thud(vol = .2, p) { this.tone(70, .16, vol, 'sine', .6, p ? this.at(p, 4) : undefined); this.burst('lowpass', 260, .7, .12, vol * .8, 1, p ? this.at(p, 4) : undefined); }
  chatter(vol = .06) { this.burst('bandpass', 1800, 3, .035, vol, 2); }
  flagTick() { this.tone(1500, .05, .06); setTimeout(() => this.tone(1500, .05, .06), 90); }
  turboDemo() { if (this.ty) { const t = this.ctx.currentTime, v = this.ty.spool; v.g.gain.setTargetAtTime(.2, t, .2); v.src.playbackRate.setTargetAtTime(1.2, t, .3); v.g.gain.setTargetAtTime(0, t + .8, .05); } setTimeout(() => this.shot('bov2', .6, true), 820); }
}
const t0 = au => au.ctx.currentTime;
