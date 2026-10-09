// A calm race-day crowd, synthesised with WebAudio (no samples): a murmur of voices (filtered noise bands with a syllable-rate wobble), now and then a swell of distant cheering, a ripple of
// applause, a whistle, a wordless public-address mumble, and, away from the stands, birdsong, wind and the far-off hum of engines.
//
//   const cs = createCrowdSound(audioContext, destinationNode);   // e.g. audio.sfx or audio.master
//   cs.set({ volume: .8, day: true, rain: false, announcer: true });
//   cs.update(dt, nearCrowd01, raceIntensity01);                    // every frame: 0..1 closeness to a grandstand, 0..1 how hot the race is
//   cs.cheer(.7); cs.applause(); cs.whistle();                      // optional one-shots (a car passes the stands, a lap is finished ...)
//   cs.stop();                                                      // fades out and disconnects everything
//
// Everything is built from a few looped noise buffers and a handful of always-running nodes; events create short-lived nodes that disconnect themselves when they end.
export function createCrowdSound(ctx, dest) {
  const sr = ctx.sampleRate, out = ctx.createGain(); out.gain.value = 0; out.connect(dest);
  const P = { volume: 1, day: true, rain: false, announcer: true, birds: 1, wind: 1, engines: 1, muted: false };
  const S = { near: 0, race: 0, nearS: 0, raceS: 0, t: 0, nextCheer: 4 + Math.random() * 8, nextClap: 15 + Math.random() * 25, nextWhistle: 10 + Math.random() * 20, nextBird: 1 + Math.random() * 3, nextPA: 20 + Math.random() * 30, nextEngine: 6 + Math.random() * 10, stopped: false, swell: 0 };
  const live = new Set(), srcs = [];
  const rnd = (a, b) => a + Math.random() * (b - a);

  // ---- noise buffers: soft pink-ish noise, 5 s, looped (two different ones so layers do not line up)
  const mkNoise = (secs, seed) => { const len = Math.floor(sr * secs), b = ctx.createBuffer(1, len, sr), d = b.getChannelData(0); let b0 = 0, b1 = 0, b2 = 0, s = seed; for (let i = 0; i < len; i++) { s = (s * 16807) % 2147483647; const w = s / 1073741823.5 - 1; b0 = .99765 * b0 + w * .099046; b1 = .963 * b1 + w * .2965164; b2 = .57 * b2 + w * 1.0526913; d[i] = (b0 + b1 + b2 + w * .1848) * .22; }
    const f = Math.min(len >> 1, Math.floor(sr * .05)); for (let i = 0; i < f; i++) { const k = i / f; d[i] = d[i] * k + d[len - f + i] * (1 - k) * (1 - k); } return b; };      // short cross-fade so the loop point does not click
  const nA = mkNoise(5, 12345), nB = mkNoise(6.3, 987654);
  const noise = (buf, rate = 1) => { const s = ctx.createBufferSource(); s.buffer = buf; s.loop = true; s.playbackRate.value = rate; s.start(0, Math.random() * buf.duration); srcs.push(s); return s; };
  const lfo = (f, depth, target, type = 'sine', ph) => { const o = ctx.createOscillator(), g = ctx.createGain(); o.type = type; o.frequency.value = f; g.gain.value = depth; o.connect(g); g.connect(target); o.start(ctx.currentTime + (ph || 0)); srcs.push(o); return o; };

  // ---- the murmur: four voice bands, each a bandpass of noise whose level wobbles at syllable rate and drifts slowly; plus a low "room" rumble
  const bus = ctx.createGain(); bus.gain.value = 0; const hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 140; const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 3600; lp.Q.value = .5; bus.connect(hp); hp.connect(lp); lp.connect(out);
  const bands = [[260, .8, .55, 4.1], [520, .9, .8, 5.3], [980, 1.0, .7, 6.4], [1800, 1.2, .38, 5.8], [3100, 1.4, .14, 7.1]].map(([f, q, g, w], i) => {
    const s = noise(i % 2 ? nA : nB, .85 + i * .06), bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = f; bp.Q.value = q; const vg = ctx.createGain(); vg.gain.value = g * .6; const wob = ctx.createGain(); wob.gain.value = 0; s.connect(bp); bp.connect(vg); vg.connect(bus);
    const o = lfo(w, g * .26, vg.gain, 'sine', Math.random()); void o; const o2 = lfo(w * .37, g * .16, vg.gain, 'triangle', Math.random()); void o2; lfo(.07 + i * .031, f * .06, bp.frequency, 'sine', Math.random()); return { vg, bp }; });
  const room = ctx.createGain(); room.gain.value = .5; { const s = noise(nB, .5), f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 220; s.connect(f); f.connect(room); room.connect(bus); lfo(.09, .15, room.gain, 'sine', 0); }
  // swell bus for cheers: its own filter and level, driven by events
  const cheerG = ctx.createGain(); cheerG.gain.value = 0; const cheerF = ctx.createBiquadFilter(); cheerF.type = 'bandpass'; cheerF.frequency.value = 1100; cheerF.Q.value = .55; { const s = noise(nA, 1.1), s2 = noise(nB, 1.3), g2 = ctx.createGain(); g2.gain.value = .6; s.connect(cheerF); s2.connect(g2); g2.connect(cheerF); cheerF.connect(cheerG); lfo(5.4, .25, cheerG.gain, 'sine', 0); const lp2 = ctx.createBiquadFilter(); lp2.type = 'lowpass'; lp2.frequency.value = 3200; cheerG.connect(lp2); lp2.connect(out); S.cheerLP = lp2; }

  // ---- ambience away from the crowd: wind (always a little), birds (events), far engines (events)
  const windG = ctx.createGain(); windG.gain.value = 0; { const s = noise(nB, .6), f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 420; f.Q.value = .5; s.connect(f); f.connect(windG); windG.connect(out); lfo(.13, 130, f.frequency, 'sine', 0); lfo(.05, .5, windG.gain, 'sine', 1); }
  const engBus = ctx.createGain(); engBus.gain.value = 0; { const lp3 = ctx.createBiquadFilter(); lp3.type = 'lowpass'; lp3.frequency.value = 380; engBus.connect(lp3); lp3.connect(out); }
  // PA mumble goes through a short slap-back delay so it sounds like it comes from loudspeakers
  const paIn = ctx.createGain(); paIn.gain.value = 0; { const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 1500; bp.Q.value = .6; const dl = ctx.createDelay(.5); dl.delayTime.value = .21; const fb = ctx.createGain(); fb.gain.value = .22; const mix = ctx.createGain(); mix.gain.value = .5; paIn.connect(bp); bp.connect(out); bp.connect(dl); dl.connect(fb); fb.connect(dl); dl.connect(mix); mix.connect(out); }

  const track = (nodes, ends) => { const o = { nodes, dead: false }; live.add(o); const done = () => { if (o.dead) return; o.dead = true; live.delete(o); for (const n of nodes) { try { n.disconnect(); } catch (e) { /* already gone */ } } }; ends.onended = done; return o; };
  const now = () => ctx.currentTime;
  const env = (g, t0, a, hold, d, peak) => { g.gain.cancelScheduledValues(t0); g.gain.setValueAtTime(g.gain.value, t0); g.gain.linearRampToValueAtTime(peak, t0 + a); g.gain.setValueAtTime(peak, t0 + a + hold); g.gain.exponentialRampToValueAtTime(.0008, t0 + a + hold + d); };

  // ---- events
  function cheer(k = .6) {       // a swell of voices: rises in a second or so, falls away over two or three
    if (S.stopped) return; const t = now(), peak = .05 + .14 * k, a = .5 + (1 - k) * .6, hold = .4 + k * 1.4, d = 1.6 + k * 2;
    cheerF.frequency.cancelScheduledValues(t); cheerF.frequency.setValueAtTime(cheerF.frequency.value, t); cheerF.frequency.linearRampToValueAtTime(900 + 700 * k, t + a); cheerF.frequency.linearRampToValueAtTime(700, t + a + hold + d);
    cheerG.gain.cancelScheduledValues(t); cheerG.gain.setValueAtTime(cheerG.gain.value, t); cheerG.gain.linearRampToValueAtTime(peak, t + a); cheerG.gain.setValueAtTime(peak, t + a + hold); cheerG.gain.exponentialRampToValueAtTime(.0008, t + a + hold + d); S.swell = k;
  }
  function applause(secs = 2.4, k = .6) {       // many tiny noise bursts at random times, thickest in the middle
    if (S.stopped) return; const t = now(), cnt = Math.floor(secs * (40 + 40 * k)); const g = ctx.createGain(); g.gain.value = .06 + .08 * k; const hpf = ctx.createBiquadFilter(); hpf.type = 'highpass'; hpf.frequency.value = 1400; g.connect(hpf); hpf.connect(out); let last = null;
    for (let i = 0; i < cnt; i++) { const u = (Math.random() + Math.random()) / 2, at = t + u * secs, s = ctx.createBufferSource(); s.buffer = nB; s.playbackRate.value = rnd(.8, 1.6); const e = ctx.createGain(); e.gain.setValueAtTime(0, at); e.gain.linearRampToValueAtTime(rnd(.4, 1) * (1 - Math.abs(u - .5) * 1.1), at + .004); e.gain.exponentialRampToValueAtTime(.001, at + rnd(.03, .07)); s.connect(e); e.connect(g); s.start(at, Math.random() * 3, .1); s.stop(at + .1); last = s; }
    if (last) track([g, hpf], last);
  }
  function whistle() {          // a spectator's two-note whistle with a little vibrato
    if (S.stopped) return; const t = now(), o = ctx.createOscillator(), g = ctx.createGain(), v = ctx.createOscillator(), vg = ctx.createGain(), pan = ctx.createStereoPanner ? ctx.createStereoPanner() : null; o.type = 'sine'; const f0 = rnd(2300, 3200); o.frequency.setValueAtTime(f0, t); o.frequency.linearRampToValueAtTime(f0 * 1.12, t + .18); o.frequency.setValueAtTime(f0 * 1.12, t + .26); o.frequency.exponentialRampToValueAtTime(f0 * .96, t + .5);
    v.frequency.value = 38; vg.gain.value = 28; v.connect(vg); vg.connect(o.frequency); g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(.022, t + .03); g.gain.setValueAtTime(.022, t + .42); g.gain.exponentialRampToValueAtTime(.0005, t + .6); o.connect(g); let nodes = [o, g, v, vg];
    if (pan) { pan.pan.value = rnd(-.8, .8); g.connect(pan); pan.connect(out); nodes.push(pan); } else g.connect(out); o.start(t); v.start(t); o.stop(t + .65); v.stop(t + .65); track(nodes, o);
  }
  function chirp(base, n) {       // a short bird motif: n quick falling or rising tweets
    if (S.stopped) return; const t0 = now(), g = ctx.createGain(), pan = ctx.createStereoPanner ? ctx.createStereoPanner() : null; g.gain.value = 1; if (pan) { pan.pan.value = rnd(-.9, .9); g.connect(pan); pan.connect(out); } else g.connect(out); let last = null; const nodes = [g]; if (pan) nodes.push(pan);
    for (let i = 0; i < n; i++) { const at = t0 + i * rnd(.07, .13), o = ctx.createOscillator(), e = ctx.createGain(), up = Math.random() < .5; o.type = 'sine'; o.frequency.setValueAtTime(base * (up ? .8 : 1.2), at); o.frequency.exponentialRampToValueAtTime(base * (up ? 1.25 : .8), at + .06); e.gain.setValueAtTime(0, at); e.gain.linearRampToValueAtTime(.012 * P.birds, at + .012); e.gain.exponentialRampToValueAtTime(.0004, at + .07); o.connect(e); e.connect(g); o.start(at); o.stop(at + .09); nodes.push(e); last = o; }
    if (last) track(nodes, last);
  }
  function engineHum() {        // a car passing far away: two detuned saws, a slow swell and a small pitch bend
    if (S.stopped) return; const t = now(), len = rnd(4, 7), f = rnd(70, 110), g = ctx.createGain(), nodes = [g]; let last = null;
    for (const m of [1, 1.503, 2.01]) { const o = ctx.createOscillator(); o.type = 'sawtooth'; o.frequency.setValueAtTime(f * m * 1.08, t); o.frequency.linearRampToValueAtTime(f * m * 1.08, t + len * .4); o.frequency.exponentialRampToValueAtTime(f * m * .86, t + len); const og = ctx.createGain(); og.gain.value = m === 1 ? .5 : .22; o.connect(og); og.connect(g); o.start(t); o.stop(t + len + .1); nodes.push(og, o); last = o; }
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(1, t + len * .4); g.gain.linearRampToValueAtTime(0, t + len); g.connect(engBus); track(nodes, last);
  }
  function mumble() {           // a wordless PA announcement: a voice-like buzz through moving formants, chopped at syllable rate with pauses
    if (S.stopped) return; const t = now(), len = rnd(4, 8), o = ctx.createOscillator(), o2 = ctx.createOscillator(), g = ctx.createGain(), f1 = ctx.createBiquadFilter(), f2 = ctx.createBiquadFilter(), mixg = ctx.createGain(); o.type = o2.type = 'sawtooth'; const f0 = rnd(105, 150); o.frequency.value = f0; o2.frequency.value = f0 * 1.007; mixg.gain.value = .5; o.connect(mixg); o2.connect(mixg); f1.type = f2.type = 'bandpass'; f1.Q.value = 5; f2.Q.value = 7; mixg.connect(f1); mixg.connect(f2); const fg1 = ctx.createGain(), fg2 = ctx.createGain(); fg1.gain.value = 1; fg2.gain.value = .55; f1.connect(fg1); f2.connect(fg2); fg1.connect(g); fg2.connect(g);
    let u = 0; g.gain.setValueAtTime(0, t); while (u < len) { const syl = rnd(.12, .26), at = t + u, F1 = rnd(380, 760), F2 = rnd(1000, 2200); f1.frequency.setValueAtTime(F1, at); f2.frequency.setValueAtTime(F2, at); o.frequency.setValueAtTime(f0 * rnd(.92, 1.1), at); o2.frequency.setValueAtTime(f0 * 1.007 * rnd(.92, 1.1), at); g.gain.linearRampToValueAtTime(rnd(.5, 1), at + .03); g.gain.linearRampToValueAtTime(.12, at + syl * .9); u += syl + (Math.random() < .18 ? rnd(.25, .6) : .02); }
    g.gain.linearRampToValueAtTime(0, t + len + .05); g.connect(paIn); const pg = paIn.gain; pg.cancelScheduledValues(t); pg.setValueAtTime(0, t); pg.linearRampToValueAtTime(.07, t + .2); pg.setValueAtTime(.07, t + len); pg.linearRampToValueAtTime(0, t + len + .3); o.start(t); o2.start(t); o.stop(t + len + .4); o2.stop(t + len + .4); track([o, o2, g, f1, f2, mixg, fg1, fg2], o);
  }

  // ---- control
  function apply(dtSmooth = .5) {
    const t = now(), vol = P.muted ? 0 : P.volume, near = S.nearS, race = S.raceS;
    out.gain.setTargetAtTime(.8 * vol, t, .3);
    // the murmur: always a little (the grounds are full of people), a lot beside the stands; a hot race lifts it
    bus.gain.setTargetAtTime((.05 + .30 * near) * (.75 + .5 * race) * (P.rain ? .8 : 1), t, dtSmooth);
    lp.frequency.setTargetAtTime(2200 + 2200 * near, t, .6);
    windG.gain.setTargetAtTime(P.wind * (.012 + .03 * (1 - near * .6)) * (P.rain ? 1.8 : 1), t, 1.2);
    engBus.gain.setTargetAtTime(P.engines * (.05 + .07 * (1 - near * .5)) * (.5 + race), t, .5);
    S.cheerLP.frequency.setTargetAtTime(1800 + 2400 * near, t, .4);
  }
  return {
    set(p = {}) { Object.assign(P, p); apply(.2); },
    update(dt, near = 0, race = 0) {
      if (S.stopped) return; dt = Math.min(dt, .1); S.t += dt; const k = 1 - Math.exp(-dt * 1.4); S.nearS += (Math.max(0, Math.min(1, near)) - S.nearS) * k; S.raceS += (Math.max(0, Math.min(1, race)) - S.raceS) * k; if ((S.t * 10 | 0) !== ((S.t - dt) * 10 | 0)) apply();
      const nearK = .25 + .75 * S.nearS, calm = P.rain ? .3 : 1;
      S.nextCheer -= dt * (.4 + S.raceS) * nearK; if (S.nextCheer <= 0) { cheer(.25 + .45 * S.raceS + Math.random() * .2); S.nextCheer = rnd(9, 24); if (Math.random() < .35) S.nextClap = Math.min(S.nextClap, 1.5); }
      S.nextClap -= dt * nearK; if (S.nextClap <= 0) { applause(rnd(1.6, 3.2), .35 + .4 * S.raceS); S.nextClap = rnd(30, 70); }
      S.nextWhistle -= dt * nearK; if (S.nextWhistle <= 0) { whistle(); if (Math.random() < .3) setTimeout(() => !S.stopped && whistle(), rnd(500, 1500)); S.nextWhistle = rnd(14, 40); }
      if (P.day && P.birds > 0) { S.nextBird -= dt * calm * (1.1 - S.nearS * .7); if (S.nextBird <= 0) { chirp(rnd(2600, 4600), 2 + Math.floor(Math.random() * 4)); S.nextBird = rnd(1.5, 6); } }
      S.nextEngine -= dt * (.6 + S.raceS); if (S.nextEngine <= 0) { if (P.engines > 0) engineHum(); S.nextEngine = rnd(8, 22); }
      if (P.announcer) { S.nextPA -= dt * nearK; if (S.nextPA <= 0) { mumble(); S.nextPA = rnd(45, 110); } }
    },
    cheer, applause, whistle, chirp: () => chirp(rnd(2600, 4600), 3), mumble, engine: engineHum,
    stop() { if (S.stopped) return; S.stopped = true; const t = now(); out.gain.cancelScheduledValues(t); out.gain.setTargetAtTime(0, t, .15); setTimeout(() => { for (const s of srcs) { try { s.stop(); } catch (e) { /* not started */ } } for (const o of [...live]) for (const n of o.nodes) { try { n.disconnect(); } catch (e) { /* gone */ } } try { out.disconnect(); } catch (e) { /* gone */ } }, 700); },
    get node() { return out; }, state: S,
  };
}
