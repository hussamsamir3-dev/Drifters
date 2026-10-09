// The race engineer: watches the real simulation and decides what to say, and when. Every call is one of the supplied voice clips (radio.js);
// nothing here invents a rule the game does not have. Each detector reads the actual state of the cars, the track and the race control, keeps its
// own cooldown and hysteresis, and drops a call that is no longer true by the time it would be spoken.
import { RaceRadio } from './radio.js';

const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
const wrap = a => { while (a > Math.PI) a -= 2 * Math.PI; while (a < -Math.PI) a += 2 * Math.PI; return a; };

// the calls that must be ready the moment they are needed: loaded as soon as a race is set up
const WARM = ['radio_check', 'radio_confirmed', 'grid_ready', 'start_go', 'car_left', 'car_right', 'both_sides', 'three_wide', 'clear_left', 'clear_right', 'all_clear', 'still_left', 'still_right',
  'stopped_ahead', 'crash_ahead', 'wrong_way', 'closing_fast', 'slippery', 'contact_light', 'contact_heavy', 'safety_car', 'restart_go', 'blue', 
  'pit_limiter', 'pit_stop', 'pit_release', 'fuel_critical', 'engine_hot', 'car_unsafe'];

export function makeEngineer(env) {
  const { audio, save } = env, getR = env.R;
  const radio = new RaceRadio(audio, { speaking: (on, cue) => { audio.duck(on); if (on) env.sub(cue); else env.subOff(); } });
  const E = { radio, st: null, log: [] };
  const say = (id, o) => { const ok = radio.say(id, o); if (ok) E.log.push(id); return ok; };
  E.say = say;

  const fresh = () => ({ t: 0, startCued: false, go: false, goT: 0, p0: 0, launch: null, praiseT: -99, lastPass: -99, side: { L: 0, R: 0, cL: 0, cR: 0, tL: 0, tR: 0, sL: -99, sR: -99, last: '' },
    rel: new Map(), pos0: 0, haz: { stop: -99, crash: -99, slip: -99, wrong: 0, wrongSaid: -99, rej: false, rejT: -99, pitx: -99, spin: -99, hit: -99, pitEntry: -99 },
    car: { fuelLeft: 99, use: 0, lapMark: null, hot: 0, cold: 0, coldSaid: false, brake: 0, said: {} }, gaps: [], gapBack: [], defT: 0, atkT: 0, wasPit: false, wasBusy: false, svcTotal: 0,
    wet: { said: false, heavy: false, tyres: false }, boost: { used: false, empty: false }, lapped: -99, closingT: -99, attackT: -99, finishSaid: false, nitroPrev: 1, gapSampleT: 0 });

  E.begin = () => {      // a new race: nothing from the last one survives
    const R = getR(); radio.reset(); radio.setLevel(save.radioLevel || 'balanced'); radio.enabled = save.engVoice !== false;
    E.st = fresh(); E.on = !!R && !R.attract && R.mode !== 'drift'; E.log = [];
    return E.on ? radio.load().then(() => radio.warm(WARM)) : Promise.resolve();      // the small manifest is waited for, so the first start can include the radio check
  };
  /* The very first start of a session opens with the radio check and its answer. They need about 5.4 s, so that one countdown is 2.1 s longer (the lights simply start later);
     every other start has the normal 3.6 s. Online races keep the shared countdown. */
  E.preRoll = () => { const R = getR(); return E.on && !E.sessionChecked && R.mode !== 'online' && radio.ready && radio.enabled && radio.level >= 1 && audio.ctx && audio.ctx.state === 'running' ? 2.1 : 0; };
  E.stop = () => { radio.stop(); audio.duck(false); env.subOff(); };
  E.pause = () => { radio.stop(); audio.duck(false); env.subOff(); };
  E.setEnabled = on => { radio.enabled = on; if (!on) E.stop(); };
  E.setLevel = l => radio.setLevel(l);

  // ---------------------------------------------------------------- called by the game at real events
  E.lights = () => {      // the countdown has started: the car is on the grid and the lights are coming
    const R = getR(), S = E.st; if (!E.on || !S) return; S.p0 = env.rank().indexOf(R.player) + 1;
    if (R.countT > 3.7 && !E.sessionChecked) { E.sessionChecked = true; say('radio_check', { ttl: 6, lv: 1, cooldown: 0 }); say('radio_confirmed', { ttl: 9, lv: 1, cooldown: 0 }); }      /* the check, then his answer */
    else { E.sessionChecked = true; say('grid_ready', { ttl: 3, lv: 1, cooldown: 0 }); }
  };
  E.go = () => {
    const R = getR(), S = E.st; if (!E.on || !S) return; S.go = true; S.goT = R.t;
    radio.cancelTag('startup'); say('start_go', { interrupt: true, ttl: 2, lv: 0, priority: 95, cooldown: 0 });
    if (R.laps >= 3) say('lap_one', { ttl: 7, lv: 2 });
  };
  // the pack's 'track_limits_warning' and 'five_second_penalty' files are empty (0 bytes) in the supplied zip, so these two stay silent: the screen flash and the beep carry them
  E.penalty = (sec, why) => { if (E.on) radio.cancelBelow(90); };
  E.trackLimits = n => {};
  E.contactWarn = () => { if (E.on) say('avoid_contact', { lv: 0, ttl: 6, priority: 91 }); };
  E.blue = () => { if (E.on) say('blue', { lv: 0, ttl: 8, interrupt: true, priority: 91 }); };
  E.safety = kind => {
    if (!E.on) return;
    if (kind === 'out') { radio.cancelTag('racecraft'); radio.cancelTag('laps'); radio.cancelTag('pit'); say('safety_car', { lv: 0, ttl: 10, interrupt: true, priority: 96 }); }
    else if (kind === 'soon') say('safety_car_in', { lv: 0, ttl: 6 });
    else if (kind === 'green') say('restart_go', { lv: 0, ttl: 6, interrupt: true, priority: 96 });
  };
  E.haze = () => { if (E.on) say('low_visibility', { lv: 1, ttl: 8 }); };
  E.disconnect = () => { if (E.on) say('disconnect', { lv: 0, ttl: 8, interrupt: true }); };
  E.impact = (car, power, wall) => {
    const R = getR(), S = E.st; if (!E.on || !S || R.state !== 'go') return; const me = R.player;
    if (car === me) {
      if (power > 7.5 && R.t - (S.haz.hit ?? -99) > 6) { S.haz.hit = R.t; say('contact_heavy', { lv: 0, ttl: 5, interrupt: true, priority: 90 }); }
      else if (power > 2.6 && R.t - (S.haz.hit ?? -99) > 8) { S.haz.hit = R.t; say('contact_light', { lv: 1, ttl: 6 }); }
    } else if (power > 7 && R.t - S.haz.crash > 8) {        // a big crash up the road
      const sn = Math.sin(me.th), cs = Math.cos(me.th), dx = car.x - me.x, dz = car.z - me.z, f = dx * sn + dz * cs, l = dx * cs - dz * sn;
      if (f > 20 && f < 150 && Math.abs(l) < 16 && me.speed > 12) { S.haz.crash = R.t; say('crash_ahead', { lv: 0, ttl: 3, interrupt: true, priority: 100 }); }
    }
  };
  E.lap = (lt, info) => {      // the player has completed a lap (me.lap is already the new one)
    const R = getR(), S = E.st; if (!E.on || !S || R.state !== 'go') return; const me = R.player, rem = R.laps - me.lap;
    if (info.fastest) say('fastest_lap', { lv: 1, ttl: 8 });
    else if (info.pb) say('personal_best', { lv: 1, ttl: 8 });
    else if (info.better > .35 && R.t - S.praiseT > 25) { S.praiseT = R.t; say('pace_good', { lv: 2, ttl: 8 }); }
    else if (info.better < -1.2) say('pace_slow', { lv: 2, ttl: 8 });
    // laps to go: only the thresholds this race actually crosses, announced at the line
    const cue = { 10: 'ten_laps', 5: 'five_laps', 3: 'three_laps', 2: 'two_laps', 1: 'final_lap' }[rem];
    if (cue && rem < R.laps) say(cue, { lv: 1, ttl: 9, tag: 'laps', priority: cue === 'final_lap' ? 62 : 55 });
    else if (R.laps >= 4 && R.laps % 2 === 0 && me.lap === R.laps / 2) say('halfway', { lv: 2, ttl: 9, tag: 'laps' });
  };
  E.sector = () => { const R = getR(), S = E.st; if (E.on && S && R.t - S.praiseT > 25) { S.praiseT = R.t; say('sector_good', { lv: 2, ttl: 6 }); } };
  E.finish = (pos, n, o = {}) => {      // the final classification
    const S = E.st; if (!E.on || !S || S.finishSaid) return; S.finishSaid = true; radio.cancelBelow(95);
    let id; if (o.retired) id = 'retire'; else if (pos === 1) id = 'win'; else if (pos === 2) id = 'second'; else if (pos === 3) id = 'third';
    else id = pos <= Math.ceil(n * .6) ? 'finish_good' : 'finish_tough';
    say(id, { lv: 0, ttl: 40, interrupt: true, priority: 99, cooldown: 0 }); if (pos <= 3 && !o.retired) say('thank_you', { lv: 2, ttl: 40, priority: 98 });
  };

  // ---------------------------------------------------------------- called every frame
  E.tick = dt => {
    const R = getR(), S = E.st; if (!E.on || !S || !R || R.attract) return; S.t += dt; const me = R.player; if (!me) return;
    if (R.state === 'count' || R.state === 'wait') {
      return;
    }
    if (R.state !== 'go') return;
    const tr = R.track, n = tr.n, sn = Math.sin(me.th), cs = Math.cos(me.th), others = R.cars.filter(c => c !== me && !c.out), live = !me.finished;
    const rel = c => { const dx = c.x - me.x, dz = c.z - me.z; return [dx * sn + dz * cs, dx * cs - dz * sn]; };      // f: metres ahead of my nose, l: metres to my LEFT
    if (!live) return;

    // ---- launch assessment: judged from what the car actually did in the first seconds
    if (S.go && !S.launch && R.t - S.goT > 5.5) { const now = env.rank().indexOf(me) + 1; S.launch = 1; if (now <= S.p0 - 1 && R.t - S.goT < 8) say('good_start', { lv: 1, ttl: 7 }); else if (now >= S.p0 + 2) say('poor_start', { lv: 1, ttl: 7 }); }

    // ---- the spotter: cars alongside, in the car's own frame (nose to tail, left to right)
    { const D = S.side; let nl = 0, nr = 0;
      if (me.speed > 8 && !me.inPit) for (const c of others) { const [f, l] = rel(c), a = Math.abs(l), was = D.in && D.in.has(c); const hit = was ? Math.abs(f) < 6.4 && a < 7.2 && a > .7 : Math.abs(f) < 4.7 && a > 1.25 && a < 5.4; if (hit) { if (l > 0) nl++; else nr++; (D.next || (D.next = new Set())).add(c); } }
      D.in = D.next || new Set(); D.next = null;
      // an increase is believed after a moment, a decrease only after 250 ms of clear road (so a car edging out and in does not flicker)
      const hold = (raw, conf, tK) => { if (raw === conf) { D[tK] = 0; return conf; } D[tK] = (D[tK] || 0) + dt; return D[tK] > (raw > conf ? .06 : .25) ? raw : conf; };
      const nL = hold(nl, D.cL, 'tL'), nR = hold(nr, D.cR, 'tR'), key = nL + ',' + nR;
      if (key !== D.last) {
        radio.cancelTag('side');
        const wasL = D.cL, wasR = D.cR; D.cL = nL; D.cR = nR; D.last = key; const o = { tag: 'side', lv: 0, ttl: 1.5, check: () => key === D.last };
        if (nL + nR > wasL + wasR || (nL > wasL && nR > 0) || (nR > wasR && nL > 0)) {            // somebody arrived
          if (nL >= 1 && nR >= 1) say('both_sides', { ...o, cooldown: 4 }); else if (nL >= 2 || nR >= 2) say('three_wide', { ...o, cooldown: 4 }); else if (nL) say('car_left', { ...o, cooldown: 2 }); else say('car_right', { ...o, cooldown: 2 });
          D.sL = D.sR = R.t; }
        else {                                                                                    // somebody went
          if (nL + nR === 0) { if ((wasL >= 1 && wasR >= 1) || wasL >= 2 || wasR >= 2) say('all_clear', { ...o, cooldown: 3 }); else say(wasL ? 'clear_left' : 'clear_right', { ...o, cooldown: 2 }); }
          else if (nL === 0 && wasL) say('clear_left', { ...o, cooldown: 2 }); else if (nR === 0 && wasR) say('clear_right', { ...o, cooldown: 2 }); }
      } else if (D.cL + D.cR === 1 && R.t - Math.max(D.cL ? D.sL : D.sR, 0) > 4) {                  // still there after a long time alongside: at most every 4 s
        const sd = D.cL ? 'L' : 'R'; if (R.t - D['s' + sd] > 4) { D['s' + sd] = R.t; const k2 = D.last; say(sd === 'L' ? 'still_left' : 'still_right', { tag: 'side', lv: 0, ttl: 1.5, cooldown: 4, check: () => k2 === D.last }); } }
    }

    // ---- hazards on the road ahead, scaled to speed
    { const H = S.haz, v = Math.max(me.vf || 0, 0);
      for (const c of others) { if (c.inPit || c.held || c.finished || c.speed > 2.5 || R.t < 6) continue; const [f, l] = rel(c); if (v > 12 && f > 8 && f < 45 + v * 2.2 && Math.abs(l) < 4.6 && f / v < 4.8 && R.t - H.stop > 6) { H.stop = R.t; say('stopped_ahead', { lv: 0, ttl: 2.5, interrupt: true, priority: 100, check: () => c.speed < 3.5 }); break; } }
      for (const s of R.slicks || []) { const dx = s.x - me.x, dz = s.z - me.z, f = dx * sn + dz * cs, l = dx * cs - dz * sn; if (v > 10 && f > 10 && f < 40 + v * 1.6 && Math.abs(l) < 7 && R.t - H.slip > 20) { H.slip = R.t; say('slippery', { lv: 0, ttl: 4, priority: 98 }); break; } }
      // facing the wrong way on the track: believed only after a moment, so a spin that is already coming round does not trigger it
      { const p = tr.path[me.idx % n], dot = sn * p.tx + cs * p.tz; H.wrong = dot < -.35 && !me.inPit ? H.wrong + dt : 0;
        if (H.wrong > 1.8 && R.t - H.wrongSaid > 12 && me.speed < 12) { H.wrongSaid = R.t; say('wrong_way', { lv: 0, ttl: 4, interrupt: true, priority: 100, check: () => H.wrong > 0 }); }
        // after a spin or an off: traffic coming means wait, an open road means rejoin
        const slow = me.speed < 8 && (me.grass > .3 || H.wrong > 0 || R.t - H.spin < 14) && !me.inPit; let coming = false;
        if (slow) for (const c of others) { if (c.inPit || c.speed < 12) continue; const d = (((me.idx - c.idx) % n) + n) % n * tr.spacing; if (d > 6 && d < 40 + c.speed * 3) { coming = true; break; } }
        if (slow && coming && !H.rej && R.t - H.rejT > 8) { H.rej = true; H.rejT = R.t; say('rejoin_wait', { lv: 0, ttl: 3, interrupt: true, priority: 100, check: () => H.rej }); }
        else if (H.rej && slow && !coming) { H.rej = false; H.rejT = R.t; say('rejoin_clear', { lv: 0, ttl: 4, priority: 98 }); }
        else if (H.rej && !slow) H.rej = false;
        if (Math.abs(me.beta || 0) > 1.15 && me.speed > 5 && R.t - H.spin > 15) { H.spin = R.t; say('spin_recover', { lv: 1, ttl: 6, priority: 70 }); S.spinWas = R.t; }
        if (S.spinWas && R.t - S.spinWas > 6 && me.speed > 28) { S.spinWas = 0; say('reset_focus', { lv: 2, ttl: 8 }); } }
      // the pit exit: traffic coming up behind as the car leaves the lane
      if (me.inPit && tr.pit && tr.pitOut != null && R.t - H.pitx > 30) { const dOut = (((tr.pitOut - me.idx) % n) + n) % n * tr.spacing; if (dOut < 80) for (const c of others) { if (c.inPit || c.speed < 18) continue; const d = (((tr.pitOut - c.idx) % n) + n) % n * tr.spacing; if (d > 0 && d < 120 + c.speed) { H.pitx = R.t; say('pit_exit_traffic', { lv: 0, ttl: 4, priority: 82 }); break; } } }
    }

    // ---- racecraft: who is ahead of whom, believed only when it has been stable for a moment and is not a pit-stop shuffle
    { const neutral = !!R.sc || R.t < 5; const D = S.rel; let ahead = null, behind = null, aheadG = 1e9, behindG = 1e9;
      for (const c of others) { const diff = (c.prog || 0) - (me.prog || 0), a = diff > 0 ? 1 : -1; if (Math.abs(diff) > n * .5) continue; const gap = Math.abs(diff) * tr.spacing / Math.max(14, me.speed);
        if (diff > 0 && gap < aheadG) { aheadG = gap; ahead = c; } if (diff <= 0 && gap < behindG) { behindG = gap; behind = c; }
        let r = D.get(c); if (!r) { r = { s: a, c: a, t: 0 }; D.set(c, r); }
        if (a === r.s) r.t = 0; else { r.c = a; r.t += dt; if (r.t > 1.6) { r.s = a; r.t = 0; const pitShuffle = c.inPit || me.inPit || (R.ais.get(c) && R.ais.get(c).pitState) || c.finished;
          if (!neutral && !pitShuffle) { const order = env.rank(), pos = order.indexOf(me) + 1;
            if (a < 0) {      // I am ahead now: I passed him
              const quick = R.t - S.lastPass < 12; S.lastPass = R.t;
              if (pos === 1) say('lead_taken', { lv: 1, ttl: 8 }); else if (R.t - S.praiseT > 20) { S.praiseT = R.t; say(quick ? 'overtake_good' : 'overtake_clean', { lv: 2, ttl: 7 }); } else say('overtake_clean', { lv: 2, ttl: 7 }); }
            else say('position_lost', { lv: 1, ttl: 8, cooldown: 25 }); } } } }
      // gaps: two stable samples a few seconds apart, never a single noisy frame
      S.gapSampleT += dt; if (S.gapSampleT >= .75) { S.gapSampleT = 0; S.gaps.push(ahead ? aheadG : null); S.gapBack.push(behind ? behindG : null); if (S.gaps.length > 8) S.gaps.shift(); if (S.gapBack.length > 8) S.gapBack.shift(); }
      const solid = a => a.length >= 8 && a.every(v => v != null), tr3 = a => (a[0] + a[1] + a[2]) / 3 - (a[5] + a[6] + a[7]) / 3;      // positive: closing
      if (!neutral && !me.inPit) {
        if (solid(S.gaps)) { const cl = tr3(S.gaps), g = S.gaps[7];
          if (g < .75 && cl > .06 && R.t - S.attackT > 40 && !R.sc) { S.attackT = R.t; say('attack_now', { lv: 2, ttl: 6 }); }
          else if (cl > .35 && g < 4 && R.t - (S.gcT || -99) > 45) { S.gcT = R.t; say('gap_closing', { lv: 2, ttl: 8 }); }
          else if (cl < -.45 && g < 3.2 && R.t - (S.glT || -99) > 45) { S.glT = R.t; say('gap_losing', { lv: 2, ttl: 8 }); } }
        if (solid(S.gapBack)) { const cl = tr3(S.gapBack), g = S.gapBack[7]; if (g < .55 && cl > .03 && R.t - S.defT > 40 && !R.sc) { S.defT = R.t; say('defend', { lv: 1, ttl: 6 }); }
          else if (cl < -.4 && g < 4 && R.t - (S.goT2 || -99) > 60) { S.goT2 = R.t; say('gap_opening', { lv: 2, ttl: 8 }); } } }
      // a car coming up from behind, and from which side
      if (behind && !neutral && me.speed > 18) { const [f, l] = rel(behind), cl = Math.hypot(behind.vx - me.vx, behind.vz - me.vz), closing = (behind.vx * sn + behind.vz * cs) - (me.vf || 0);
        if (f < -8 && f > -34 && Math.abs(l) < 6 && closing > 9 && R.t - S.closingT > 20) { S.closingT = R.t; say('closing_fast', { lv: 0, ttl: 2, cooldown: 20 }); }
        else if (f < -3 && f > -16 && Math.abs(l) > 1.2 && Math.abs(l) < 5 && closing > 1.5 && R.t - (S.atT || -99) > 14) {
          let k = 0; for (let i = 6; i <= 26; i += 4) { const kk = tr.path[(me.idx + i) % n].k || 0; if (Math.abs(kk) > Math.abs(k)) k = kk; }
          if (Math.abs(k) > .006) { S.atT = R.t; say(Math.sign(k) === Math.sign(l) ? 'inside_attack' : 'outside_attack', { lv: 1, ttl: 2.5, tag: 'side' }); } } }
      // lapped cars ahead
      if (R.t - S.lapped > 90 && me.lap >= 1) for (const c of others) { if ((me.prog || 0) - (c.prog || 0) < n * .85) continue; const d = (((c.idx - me.idx) % n) + n) % n * tr.spacing; if (d > 30 && d < 160 && me.speed > c.speed + 4) { S.lapped = R.t; say('lapping_traffic', { lv: 1, ttl: 8 }); break; } }
    }

    // ---- the car: wear, heat, fuel and damage, each with its own threshold, a cooldown, and a harder call when it gets worse
    { const C = S.car, said = (k, gap) => { const ok = R.t - (C.said[k] ?? -999) > gap; if (ok) C.said[k] = R.t; return ok; }, P = me.parts, D = me.dmg, hp = me.health;
      if (C.lapMark == null) C.lapMark = { lap: me.lap, fuel: me.fuel }; else if (me.lap !== C.lapMark.lap) { const u = C.lapMark.fuel - me.fuel; if (u > .004) C.use = C.use ? C.use * .5 + u * .5 : u; C.lapMark = { lap: me.lap, fuel: me.fuel }; }
      const use = C.use || .11, left = me.fuel / use, remLaps = R.laps - me.lap, pit = !!tr.pitBoxes && !me.inPit;
      if (me.fuelK > 0) {
        if ((left < 1 || me.fuel < .06) && left < remLaps && said('fuel_c', 90)) say('fuel_critical', { lv: 0, ttl: 8, priority: 86 });
        else if (left < 2.4 && left < remLaps && said('fuel_l', 120)) say('fuel_low', { lv: 1, ttl: 8 });
        else if (C.use && me.lap >= 1 && left > remLaps * 1.2 + .5 && said('fuel_g', 99999)) say('fuel_good', { lv: 2, ttl: 8 });
        if (pit && left < 1.1 && left < remLaps && remLaps > 1 && said('box_f', 60)) say('box_now', { lv: 0, ttl: 8, tag: 'pit' }); }
      if (me.tyre < .35 && said('tw', 180)) say('tyres_worn', { lv: 1, ttl: 8 });
      if (pit && me.tyre < .16 && remLaps > 1 && said('box_t', 60)) say('box_now', { lv: 0, ttl: 8, tag: 'pit' });
      const lim = me.tn.tOpt + me.tn.tSpan + 8, fT = (me.tTw[0] + me.tTw[1]) / 2, rT = (me.tTw[2] + me.tTw[3]) / 2;
      C.hot = fT > lim || rT > lim ? C.hot + dt : 0; C.cold = me.tT < me.tn.tOpt - me.tn.tSpan - 10 && me.speed > 15 && R.t > 15 ? C.cold + dt : 0;
      if (C.hot > 12 && said('th', 150)) say('tyres_hot', { lv: 1, ttl: 8 });
      if (C.cold > 8 && said('tc', 150)) { say('tyres_cold', { lv: 1, ttl: 8 }); C.coldSaid = true; }
      else if (C.coldSaid && me.tT > me.tn.tOpt - me.tn.tSpan + 2 && said('tr', 150)) { C.coldSaid = false; say('tyres_ready', { lv: 2, ttl: 6 }); }
      C.brake = me.bT > .82 ? C.brake + dt : 0; if (C.brake > 2.5 && said('bh', 150)) say('brakes_hot', { lv: 1, ttl: 8 });
      if (me.eT > .9 && said('eh', 60)) say('engine_hot', { lv: 0, ttl: 8, priority: 86 });
      if (P.engine > .45 && said('ep', 150)) say('engine_problem', { lv: 0, ttl: 8, priority: 86 });
      else if (P.gearbox > .45 && said('gp', 150)) say('gearbox_problem', { lv: 0, ttl: 8, priority: 86 });
      else if ((P.wheels[0] > .5 || P.wheels[1] > .5 || P.wheels[2] > .5 || P.wheels[3] > .5) && said('sd', 150)) say('suspension_damage', { lv: 0, ttl: 8, priority: 86 });
      else if (Math.abs((D.left || 0) - (D.right || 0)) > .45 && said('st', 150)) say('steering_damage', { lv: 0, ttl: 8, priority: 86 });
      if (hp < .3 && said('cu', 120)) say('car_unsafe', { lv: 0, ttl: 8, priority: 90 });
      else if (hp < .55 && pit && remLaps > 1 && (P.engine > .3 || P.gearbox > .3 || hp < .45) && said('rp', 90)) say('repair_pit', { lv: 0, ttl: 8, tag: 'pit' });
      else if (hp < .78 && said('bd', 240)) say('body_damage', { lv: 1, ttl: 8 });
      // the weather the game really produces
      const W = S.wet; if (R.wet > .06 && !W.said) { W.said = true; say('rain_started', { lv: 1, ttl: 8 }); }
      if (R.wet > .7 && !W.heavy) { W.heavy = true; say('rain_heavy', { lv: 1, ttl: 8 }); }
      if (R.wet > .5 && !me.wetTyres && pit && remLaps > 2 && !W.tyres && R.t - (C.said.rain ?? R.t) > 4) { W.tyres = true; say('wet_tyres', { lv: 1, ttl: 8, tag: 'pit' }); }
      if (R.wet > .06 && C.said.rain == null) C.said.rain = R.t;
      // the boost (nitro) in the arcade rules
      if (R.arc && R.rules === 'arcade') { const B = S.boost; if (me.nitroOn) B.used = true; if (B.used && me.nitro >= .98 && S.nitroPrev < .98) { B.used = false; say('boost_ready', { lv: 2, ttl: 5 }); } if (B.used && me.nitro <= .01 && S.nitroPrev > .01) say('boost_empty', { lv: 2, ttl: 5 }); S.nitroPrev = me.nitro; }
    }

    // ---- the pit lane, from the player's own movements
    { const p = R.pit; if (tr.pitBoxes && p) {
        if (!me.inPit && !S.wasPit && me.speed > 12) { const dIn = (((tr.pitIn - me.idx) % n) + n) % n * tr.spacing, q = tr.path[me.idx % n], lat = (me.x - q.x) * q.tz - (me.z - q.z) * q.tx;      // the car has crossed to the pit side of the track a short way before the entry: it means to come in
          if (dIn > 15 && dIn < 170 && tr.pit.side * lat > tr.pitHw - 4.5 && R.t - S.haz.pitEntry > 40) { S.haz.pitEntry = R.t; say('pit_entry', { lv: 0, ttl: 6, tag: 'pit' }); } }
        if (p.busy && !S.wasBusy) { S.svcTotal = p.total || 0; radio.cancelTag('pit'); say('pit_stop', { lv: 0, ttl: 5, tag: 'pit', interrupt: true, priority: 82 }); }
        if (!p.busy && S.wasBusy) say('pit_release', { lv: 0, ttl: 4, tag: 'pit', interrupt: true, priority: 82 });
        if (!me.inPit && S.wasPit && S.svcTotal) { const t = S.svcTotal; S.svcTotal = 0; if (t > 11) say('pit_slow', { lv: 1, ttl: 8, tag: 'pit' }); else if (t <= 7) say('pit_good', { lv: 1, ttl: 8, tag: 'pit' }); }
        S.wasBusy = !!p.busy; }
      if (me.inPit && !S.wasPit) { radio.cancelTag('pit'); say('pit_limiter', { lv: 0, ttl: 6, interrupt: true, priority: 80 }); }
      S.wasPit = !!me.inPit; }
  };
  return E;
}
