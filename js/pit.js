// Pit crews. Every box has a full team standing ready: four wheel men, front and rear jack men, a fueller on a real rig and hose, a lollipop man,
// a windscreen/bodywork man and a marshal with an extinguisher. When a car stops they run to it, jack it up (the car really rises), swap every wheel
// (gun, old wheel off, new wheel on, gun again), fuel through a hose, work on repairs, then drop the car and signal go.
import * as THREE from 'three';

const clamp = (v, a, b) => Math.max(a, Math.min(b, v)), ease = x => { x = clamp(x, 0, 1); return x * x * (3 - 2 * x); };
let K = null;
function kit() {
  if (K) return K;
  const limb = (len, r) => new THREE.CapsuleGeometry(r, Math.max(.01, len - 2 * r), 3, 7).translate(0, -len / 2, 0);
  K = {
    torso: new THREE.CapsuleGeometry(.17, .34, 3, 8).translate(0, .3, 0), head: new THREE.SphereGeometry(.15, 10, 8).translate(0, .8, 0), helm: new THREE.SphereGeometry(.165, 10, 6, 0, Math.PI * 2, 0, 1.55).translate(0, .82, 0),
    visor: new THREE.BoxGeometry(.2, .06, .1).translate(0, .8, .1), upper: limb(.3, .055), fore: limb(.3, .048), hand: new THREE.SphereGeometry(.06, 7, 6), leg: limb(.86, .085), shoe: new THREE.BoxGeometry(.13, .08, .26).translate(0, -.86, .05),
    tyre: new THREE.TorusGeometry(.3, .13, 8, 16), rimD: new THREE.CylinderGeometry(.22, .22, .1, 14).rotateX(Math.PI / 2), cyl: new THREE.CylinderGeometry(1, 1, 1, 10), box: new THREE.BoxGeometry(1, 1, 1), disc: new THREE.CylinderGeometry(.34, .34, .05, 20).rotateX(Math.PI / 2),
    sphere: new THREE.SphereGeometry(1, 10, 8),
  };
  const m = (c, r = .6, mt = 0) => new THREE.MeshStandardMaterial({ color: c, roughness: r, metalness: mt });
  K.m = { dark: m(0x17181c), helm: m(0xf3f4f6, .35), glove: m(0x222428, .7), tyre: m(0x0c0c0d, .9), rim: m(0xb8bcc4, .3, .8), steel: m(0x8e949e, .35, .8), red: m(0xe3262e, .45, .3), black: m(0x15161a, .5, .3), yellow: m(0xffc21a, .5), skin: m(0xc99a78, .8),
    stop: new THREE.MeshBasicMaterial({ color: 0xe3262e }), go: new THREE.MeshBasicMaterial({ color: 0x2fe05a }), gauge: new THREE.MeshBasicMaterial({ color: 0x22d3ee }), hose: m(0x232427, .6) };
  return K;
}
function fig(suitMat) {
  const k = kit(), M = k.m, g = new THREE.Group(), hip = new THREE.Group(); hip.position.y = .9; g.add(hip);
  const torso = new THREE.Group(); hip.add(torso); torso.add(new THREE.Mesh(k.torso, suitMat), new THREE.Mesh(k.head, M.skin), new THREE.Mesh(k.helm, M.helm), new THREE.Mesh(k.visor, M.dark));
  const arm = sx => { const sh = new THREE.Group(); sh.position.set(sx * .23, .55, 0); sh.add(new THREE.Mesh(k.upper, suitMat)); const el = new THREE.Group(); el.position.y = -.3; el.add(new THREE.Mesh(k.fore, suitMat)); const hd = new THREE.Mesh(k.hand, M.glove); hd.position.y = -.32; el.add(hd); const hold = new THREE.Group(); hold.position.y = -.34; el.add(hold); sh.add(el); torso.add(sh); return { sh, el, hold }; };
  const leg = sx => { const l = new THREE.Group(); l.position.set(sx * .1, 0, 0); l.add(new THREE.Mesh(k.leg, M.dark), new THREE.Mesh(k.shoe, M.black)); hip.add(l); return l; };
  const f = { g, hip, torso, aL: arm(1), aR: arm(-1), lL: leg(1), lR: leg(-1) }; g.scale.setScalar(1.4); return f;
}
const ptm = (a, b, ph) => a + (b - a) * ph;

export function buildCrew(G, box, suitHex, label, opts = {}) {
  const k = kit(), M = k.m, th0 = box.th, group = new THREE.Group(); G.add(group);
  const suit = new THREE.MeshStandardMaterial({ color: new THREE.Color(suitHex), roughness: .7 });
  const F0 = new THREE.Vector3(Math.sin(th0), 0, Math.cos(th0)), L0 = new THREE.Vector3(Math.cos(th0), 0, -Math.sin(th0));
  const at = (l, f, y = 0, o = box) => new THREE.Vector3(o.x + L0.x * l + F0.x * f, y, o.z + L0.z * l + F0.z * f);
  // ---- box furniture: the yellow pad (yours), the team board and its posts
  let pad = null;
  if (opts.mine) { const c = document.createElement('canvas'); c.width = 128; c.height = 256; const q = c.getContext('2d'); q.fillStyle = '#ffc21a'; q.fillRect(0, 0, 128, 256); q.strokeStyle = '#17181c'; q.lineWidth = 12; for (let y = -128; y < 256; y += 36) { q.beginPath(); q.moveTo(0, y + 128); q.lineTo(128, y); q.stroke(); } q.clearRect(14, 14, 100, 228); q.fillStyle = 'rgba(255,194,26,.35)'; q.fillRect(14, 14, 100, 228);
    const pt = new THREE.CanvasTexture(c); pt.colorSpace = THREE.SRGBColorSpace; pad = new THREE.Mesh(new THREE.PlaneGeometry(5, 9.8), new THREE.MeshBasicMaterial({ map: pt, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -6, polygonOffsetUnits: -6 })); pad.rotation.set(-Math.PI / 2, 0, Math.PI - th0); pad.position.set(box.x, .08, box.z); G.add(pad); }
  const sc = document.createElement('canvas'); sc.width = 256; sc.height = 64; const sk = sc.getContext('2d'); sk.fillStyle = opts.mine ? '#e3262e' : '#' + new THREE.Color(suitHex).getHexString(); sk.fillRect(0, 0, 256, 64); sk.fillStyle = '#fff'; sk.font = '900 38px Rubik, Arial Black, sans-serif'; sk.textAlign = 'center'; sk.textBaseline = 'middle'; sk.fillText((label || '').toUpperCase().slice(0, 9), 128, 34);
  const st = new THREE.CanvasTexture(sc); st.colorSpace = THREE.SRGBColorSpace; const sign = new THREE.Mesh(new THREE.BoxGeometry(3.6, .9, .12), new THREE.MeshBasicMaterial({ map: st })); sign.position.copy(at(6.4, 0, 2.1)); sign.scale.set(.85, .85, 1); sign.rotation.y = th0 + Math.PI / 2; group.add(sign);
  for (const o of [-1.7, 1.7]) { const post = new THREE.Mesh(k.box, new THREE.MeshStandardMaterial({ color: 0x2b2f36 })); post.scale.set(.1, 2, .1); post.position.copy(at(6.4, o, 1.0)); group.add(post); }
  // ---- equipment
  const stacks = []; for (let i = 0; i < 4; i++) { const s = new THREE.Group(); for (let q = 0; q < 3; q++) { const t = new THREE.Mesh(k.tyre, M.tyre); t.rotation.x = Math.PI / 2; t.position.y = .14 + q * .26; s.add(t); } s.position.copy(at(4.6 + (i % 2) * .8, -4.6 + Math.floor(i / 2) * 1.0, 0)); s.scale.setScalar(1.2); group.add(s); stacks.push(s); }
  const tbox = new THREE.Mesh(k.box, M.red); tbox.scale.set(1.1, .6, .6); tbox.position.copy(at(4.8, 4.2, .3)); tbox.rotation.y = th0; group.add(tbox);
  const rigP = at(3.9, -2.4, 0), rig = new THREE.Group(); rig.position.copy(rigP); const tank = new THREE.Mesh(k.cyl, M.red); tank.scale.set(.38, .7, .38); tank.position.y = .72; const band = new THREE.Mesh(k.cyl, new THREE.MeshStandardMaterial({ color: 0xffffff })); band.scale.set(.385, .1, .385); band.position.y = .9;
  const gaugeBar = new THREE.Mesh(k.box, M.gauge); gaugeBar.scale.set(.05, .5, .05); gaugeBar.position.set(.37, .7, 0); const cap = new THREE.Mesh(k.cyl, M.steel); cap.scale.set(.1, .12, .1); cap.position.y = 1.5; rig.add(tank, band, gaugeBar, cap); group.add(rig);
  const hoseA = new THREE.Mesh(k.cyl, M.hose), hoseB = new THREE.Mesh(k.cyl, M.hose); hoseA.scale.set(.035, 1, .035); hoseB.scale.set(.035, 1, .035); group.add(hoseA, hoseB);
  const nozzle = new THREE.Mesh(k.cyl, M.steel); nozzle.scale.set(.05, .3, .05); nozzle.rotation.x = Math.PI / 2;
  const jackMk = () => { const j = new THREE.Group(), base = new THREE.Mesh(k.box, M.yellow); base.scale.set(.9, .12, .5); base.position.y = .06; const pis = new THREE.Mesh(k.cyl, M.steel); pis.scale.set(.07, 1, .07); const head = new THREE.Mesh(k.box, M.black); head.scale.set(.5, .06, .16); const handle = new THREE.Mesh(k.cyl, M.yellow); handle.scale.set(.03, 1.1, .03); handle.position.set(.5, .6, 0); handle.rotation.z = -.5; j.add(base, pis, head, handle); j.userData = { pis, head }; group.add(j); return j; };
  const jackF = jackMk(), jackR = jackMk();
  const pole = new THREE.Mesh(k.cyl, M.steel); pole.scale.set(.025, 1.6, .025); pole.position.y = .8; const discMat = new THREE.Mesh(k.disc, M.stop); discMat.position.y = 1.7; const lolly = new THREE.Group(); lolly.add(pole, discMat); group.add(lolly);
  const sq = new THREE.Mesh(k.cyl, M.steel); sq.scale.set(.02, .9, .02); sq.rotation.z = Math.PI / 2; const sqb = new THREE.Mesh(k.box, M.yellow); sqb.scale.set(.4, .05, .08); const squeegee = new THREE.Group(); squeegee.add(sq, sqb);
  const ext = new THREE.Mesh(k.cyl, M.red); ext.scale.set(.09, .38, .09);
  const heldWheel = () => { const w = new THREE.Group(); const t = new THREE.Mesh(k.tyre, M.tyre), r = new THREE.Mesh(k.rimD, M.rim); w.add(t, r); w.visible = false; return w; };
  const gun = () => { const g = new THREE.Group(), b = new THREE.Mesh(k.cyl, M.black); b.scale.set(.05, .3, .05); b.rotation.x = Math.PI / 2; const n = new THREE.Mesh(k.cyl, M.steel); n.scale.set(.06, .06, .06); n.position.z = .17; n.rotation.x = Math.PI / 2; g.add(b, n); g.userData.n = n; return g; };
  // ---- people. roles: 0-3 wheel men (FL, FR, RL, RR), 4 front jack, 5 rear jack, 6 fueller, 7 lollipop, 8 windscreen / bodywork, 9 marshal
  const ROLE = ['tyre', 'tyre', 'tyre', 'tyre', 'jackF', 'jackR', 'fuel', 'lolly', 'clean', 'marshal'], WK = ['FL', 'FR', 'RL', 'RR'];
  const homes = [[3.6, -3.6], [3.6, -2.2], [3.6, -.8], [3.6, .6], [3.6, 2.0], [3.6, 3.4], [3.6, -5.0], [4.8, 1.6], [4.8, .2], [4.8, -1.2]].map(([l, f]) => at(l, f));
  const people = ROLE.map((role, i) => { const p = fig(suit); p.role = role; p.home = homes[i].clone(); p.g.position.copy(p.home); p.g.rotation.y = th0 - Math.PI / 2; p.wi = i; p.ph = i * 1.37; group.add(p.g);
    if (role === 'tyre') { p.gun = gun(); p.aR.hold.add(p.gun); p.gun.rotation.x = -.3; p.held = heldWheel(); p.torso.add(p.held); p.held.position.set(0, .25, .36); p.held.rotation.x = Math.PI / 2 - .2; p.held.scale.setScalar(.9); }
    if (role === 'fuel') { p.aR.hold.add(nozzle); nozzle.position.z = .1; }
    if (role === 'lolly') { p.aR.hold.add(lolly); lolly.position.set(0, 0, 0); }
    if (role === 'clean') p.aR.hold.add(squeegee);
    if (role === 'marshal') { p.aL.hold.add(ext); ext.position.set(0, -.1, .08); }
    return p; });
  const wp = new THREE.Vector3(), tmp = new THREE.Vector3(), seg = (m, a, b, sag) => { const d = tmp.copy(b).sub(a), len = d.length(); m.position.copy(a).addScaledVector(d, .5); m.position.y -= sag; m.scale.y = len; m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize()); };
  let lastCar = null, wasBusy = false, blend = 0;
  const gone = () => { if (lastCar) { lastCar.lift = 0; for (const kk in lastCar.wheels) lastCar.wheels[kk].pivot.visible = true; lastCar = null; } };

  function update(dt, svc) {
    if (!group.visible) return;
    const T = performance.now() / 1000, car = svc ? svc.car : null, busy = !!svc && !!car; if (car) lastCar = car;
    // which job is running, and how far through it
    let job = '', u = 0; if (busy) { let a = 0; for (const j of svc.jobs) { if (svc.t >= a && svc.t < a + j[1]) { job = j[0]; u = (svc.t - a) / j[1]; } a += j[1]; } if (!job) { job = svc.jobs[svc.jobs.length - 1][0]; u = 1; } }
    const tyres = busy && job === 'Tyres', fuel = busy && job === 'Fuel', fix = busy && !tyres && !fuel, done = busy && svc.t >= svc.jobs.reduce((s, j) => s + j[1], 0) - .35;
    blend += ((busy ? 1 : 0) - blend) * Math.min(1, dt * 3);
    // the car's frame
    const th = car ? car.th : th0, F = tmp.set(Math.sin(th), 0, Math.cos(th)).clone(), L = new THREE.Vector3(Math.cos(th), 0, -Math.sin(th)), cx = car ? car.x : box.x, cz = car ? car.z : box.z;
    const P = (l, f, y = 0) => new THREE.Vector3(cx + L.x * l + F.x * f, y, cz + L.z * l + F.z * f);
    const W = {}; if (car) for (const kk of WK) { car.wheels[kk].pivot.getWorldPosition(wp); W[kk] = wp.clone(); }
    const fa = car ? W.FL.clone().add(W.FR).multiplyScalar(.5) : P(0, 1.5), ra = car ? W.RL.clone().add(W.RR).multiplyScalar(.5) : P(0, -1.5);
    // the car rises on the jacks while tyres or repairs are done
    const lift = tyres ? .36 * ease(u / .13) * (1 - ease((u - .86) / .12)) : fix ? .22 * ease(u / .2) * (1 - ease((u - .85) / .15)) : 0;
    if (car) { car.lift = lift; if (!tyres) for (const kk of WK) car.wheels[kk].pivot.visible = true; } else if (wasBusy) gone();
    wasBusy = busy; if (!busy && lastCar) gone();
    // jacks
    for (const [j, a, f] of [[jackF, fa, 1.0], [jackR, ra, -1.0]]) { const home = j === jackF ? at(3.6, 2.0) : at(3.6, 3.4); const under = a.clone().addScaledVector(F, f * (j === jackF ? .9 : .5)); const on = (tyres || fix) && lift > .01; j.position.lerp(on || busy && (tyres || fix) ? under : home, Math.min(1, dt * 6)); j.rotation.y = th; const pl = Math.max(.12, lift * 1.9 + .12); j.userData.pis.scale.y = pl; j.userData.pis.position.y = .12 + pl / 2; j.userData.head.position.y = .12 + pl; j.visible = true; }
    // fuel gauge on the rig and the hose
    gaugeBar.scale.y = .5 * (fuel ? 1 - u * .8 : .5 + .05 * Math.sin(T)); gaugeBar.position.y = .7 - (.5 - gaugeBar.scale.y) / 2;
    // people
    for (const p of people) {
      let tg = p.home.clone(), face = th0 - Math.PI / 2, speed = 7.5, mode = 'ready', via = null;
      if (busy && !done) {
        if (p.role === 'tyre') { const kk = WK[p.wi], w = W[kk], side = kk[1] === 'L' ? 1 : -1; const s = .24 + p.wi * .02, q = clamp((u - s) / .5, 0, 1), out = tyres ? (q > .18 && q < .62 ? 1 : 0) : 0; tg = w.clone().addScaledVector(L, side * (1.15 + out * .55)); tg.y = 0; face = Math.atan2(-side * L.x, -side * L.z);
          mode = tyres ? (q < .18 ? 'gun' : q < .62 ? 'wheel' : q < .86 ? 'gun' : 'cheer') : 'crouch'; p.q = q; if (side < 0) via = P(0, fa.clone().sub(P(0, 0)).dot(F) + 3.8); }
        else if (p.role === 'jackF') { tg = P(0, fa.clone().sub(P(0, 0)).dot(F) + 2.5); face = Math.atan2(-F.x, -F.z); mode = tyres || fix ? 'pump' : 'ready'; if (p.g.position.distanceTo(p.home) < 2) via = null; }
        else if (p.role === 'jackR') { tg = P(0, ra.clone().sub(P(0, 0)).dot(F) - 2.5); face = Math.atan2(F.x, F.z); mode = tyres || fix ? 'pump' : 'ready'; }
        else if (p.role === 'fuel') { tg = P(1.9, ra.clone().sub(P(0, 0)).dot(F) - .6); face = Math.atan2(-L.x, -L.z); mode = fuel ? 'fuel' : 'ready'; }
        else if (p.role === 'lolly') { tg = P(0, fa.clone().sub(P(0, 0)).dot(F) + 5.2); face = Math.atan2(-F.x, -F.z); mode = 'sign'; }
        else if (p.role === 'clean') { tg = P(.7, fa.clone().sub(P(0, 0)).dot(F) + 2.0); face = Math.atan2(-F.x, -F.z); mode = fix ? 'hammer' : 'wipe'; via = null; }
      } else if (busy && done) { if (p.role === 'lolly') mode = 'sign'; else mode = 'cheer'; if (p.role === 'lolly') { tg = P(0, fa.clone().sub(P(0, 0)).dot(F) + 5.2); face = Math.atan2(-F.x, -F.z); } else tg = p.g.position.clone(); }
      // walk (round the nose if the job is on the far side)
      let goal = tg; if (via && p.g.position.clone().sub(P(0, 0)).dot(L) > 1.2) goal = via;
      const dx = goal.x - p.g.position.x, dz = goal.z - p.g.position.z, d = Math.hypot(dx, dz), moving = d > .12;
      if (moving) { const stp = Math.min(d, speed * dt); p.g.position.x += dx / d * stp; p.g.position.z += dz / d * stp; face = Math.atan2(dx, dz); }
      let fy = p.g.rotation.y; let dyaw = face - fy; dyaw = Math.atan2(Math.sin(dyaw), Math.cos(dyaw)); p.g.rotation.y = fy + dyaw * Math.min(1, dt * 12);
      // pose
      const w = T * 14 + p.ph; let bend = 0, hipY = .9, aLs = 0, aLe = 0, aRs = 0, aRe = 0, lL = 0, lR = 0, twist = 0, hy = 0;
      if (moving) { lL = Math.sin(w) * .8; lR = -lL; aLs = -lR * .8; aRs = -lL * .8; aLe = -.6; aRe = -.6; bend = .22; hy = Math.abs(Math.sin(w)) * .06; }
      else if (mode === 'ready') { aLs = -.15; aRs = -.15; aLe = -.5; aRe = -.5; bend = Math.sin(T * 1.6 + p.ph) * .02; if (p.role === 'tyre') { aLs = -1.1; aRs = -1.1; aLe = -.6; aRe = -.6; } }
      else if (mode === 'gun') { hipY = .52; bend = .5; lL = -1.25; lR = -.5; aRs = -1.3; aRe = -.2; aLs = -1.1; aLe = -.3; twist = Math.sin(T * 38) * .05; }
      else if (mode === 'wheel') { hipY = .8; bend = .35; aLs = aRs = -1.15; aLe = aRe = -.5; lL = .2; lR = -.2; }
      else if (mode === 'pump') { hipY = .72; bend = .5; aLs = aRs = -1.1; aLe = aRe = -.4; hy = 0; lL = -.4; lR = -.2; bend += Math.sin(T * 9 + p.ph) * .18; aLs += Math.sin(T * 9 + p.ph) * .4; aRs += Math.sin(T * 9 + p.ph) * .4; }
      else if (mode === 'fuel') { hipY = .8; bend = .3; aLs = -1.2; aRs = -1.4; aLe = -.3; aRe = -.2; twist = .1; }
      else if (mode === 'sign') { aRs = -2.7; aRe = -.1; aLs = -.2; aLe = -.4; bend = -.05; }
      else if (mode === 'wipe') { aRs = -1.7 + Math.sin(T * 7) * .35; aRe = -.4; aLs = -.3; aLe = -.4; twist = Math.sin(T * 7) * .25; bend = .1; }
      else if (mode === 'hammer') { hipY = .75; bend = .35; aRs = -1.7 + Math.sin(T * 12) * .7; aRe = -.9; aLs = -1.0; aLe = -.4; }
      else if (mode === 'crouch') { hipY = .6; bend = .4; aLs = aRs = -1.0; aLe = aRe = -.4; lL = -1.0; lR = -.4; }
      else if (mode === 'cheer') { aLs = aRs = -2.8 + Math.sin(T * 6 + p.ph) * .2; aLe = aRe = -.1; }
      p.hip.position.y = hipY + hy; p.torso.rotation.x = bend; p.torso.rotation.y = twist; p.lL.rotation.x = lL; p.lR.rotation.x = lR;
      const kneel = hipY < .85 ? (.9 - hipY) / .38 : 0; p.lL.rotation.x += kneel * .1; p.aL.sh.rotation.x = aLs; p.aL.el.rotation.x = aLe; p.aR.sh.rotation.x = aRs; p.aR.el.rotation.x = aRe;
      if (p.gun) { p.gun.userData.n.rotation.z = T * 40; p.gun.visible = mode === 'gun' || mode === 'ready' || moving; p.held.visible = (mode === 'wheel') || (mode === 'ready' && !busy) || (busy && !tyres && mode !== 'gun' && mode !== 'cheer' && false) || (tyres && p.q > .62 && false); }
      if (p.role === 'tyre' && tyres) { const q = p.q, kk = WK[p.wi]; car.wheels[kk].pivot.visible = !(q > .2 && q < .6); }
      if (p.role === 'tyre' && !tyres && car) car.wheels[WK[p.wi]].pivot.visible = true;
    }
    // lollipop: red while the car is being worked on, green when it is released
    discMat.material = busy && !done ? M.stop : M.go; lolly.visible = true;
    // hose: from the rig to the nozzle in the fueller's hand (sagging), nozzle flat on the car while fuelling
    const fh = people[6]; fh.aR.hold.getWorldPosition(wp); const rt = rigP.clone(); rt.y = 1.4; const mid = rt.clone().lerp(wp, .5); seg(hoseA, rt, mid, .35); seg(hoseB, mid, wp.clone(), .25);
    nozzle.rotation.x = Math.PI / 2 - (fuel ? .5 : .2);
  }
  const dispose = () => { gone(); G.remove(group); };
  return { update, group, pad, dispose, box };
}
