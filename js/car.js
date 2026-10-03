// Cars: models, tyre-model physics, wheel animation, effects, AI driver, network ghost.
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { GRASS, KERB, ROAD, WALL, PIT } from './tracks.js';
import { getAsset } from './assets.js';

// top = top speed (m/s), acc = launch acceleration (m/s²), grip = tyre μ, rear = rear-axle grip bias
// (below 1 = tail-happy), loose = how much throttle steals rear grip, off = grip multiplier on grass/sand
import { CARS, TUNE } from './config.js';
export { CARS };
export const RIMS = [0, 0xf3f4f6, 0x111214, 0xb87333, 0xf2c200, 0xe3262e, 0x19a7ce], TINTS = [0, 0x030304, 0x0b2f52, 0x5a4410, 0x4a0d14], GLOWS = [0, 0x19a7ce, 0xff2bd0, 0x7dff9b, 0xffc21a, 0xe3262e, 0xffffff];
// garage set-up -> the multipliers the physics uses
export function tuneOf(spec, t) {
  t = Object.assign({ gear: 0, aero: 0, brake: 0, susp: 0, tyre: 'medium' }, t || {}); const S = TUNE.setup, c = S.compound[t.tyre] || S.compound.medium;
  return { acc: 1 + S.gearAcc * t.gear, top: (1 - S.gearTop * t.gear) * (1 - S.aeroTop * t.aero), aero: Math.max(.1, 1 + S.aeroDown * t.aero), bias: .7 + S.biasStep * t.brake, rollF: spec.rollF + S.rollStep * t.susp, grip: c[0], wear: c[1] };
}
export const PAINTS = [0x0f5c4a, 0x8a1c2b, 0x2b2f8a, 0xff9d2e, 0xd81e2c, 0xff6a13, 0xf2c200, 0x2fb457, 0x19a7ce, 0x1f6feb, 0x7b3fe4, 0xff4fa3, 0xf2f2f2, 0x1c1f26];

const clamp = (v, a, b) => v < a ? a : v > b ? b : v;
const wrap = a => { while (a > Math.PI) a -= 2 * Math.PI; while (a < -Math.PI) a += 2 * Math.PI; return a; };
const WK = ['FL', 'FR', 'RL', 'RR'];
const DUST = [new THREE.Color(0x5a4630), new THREE.Color(0xc9a66b)];
let protos = null;

export async function loadCars() {
  const gltf = await new GLTFLoader().parseAsync(await getAsset('cars.glb'), '');
  protos = {}; for (const c of gltf.scene.children) protos[c.name] = c;
}

const shared = {};
function mats(color) {
  if (!shared.tire) {
    shared.tire = new THREE.MeshStandardMaterial({ color: 0x0c0c0d, roughness: .92 });
    shared.rim = new THREE.MeshStandardMaterial({ color: 0xc9ccd2, metalness: .95, roughness: .28 });
    shared.rimDark = new THREE.MeshStandardMaterial({ color: 0x2a2c30, metalness: .8, roughness: .4 });
    shared.body = new THREE.MeshStandardMaterial({ color: 0x0e0f11, roughness: .6, metalness: .2 });
    shared.trim = new THREE.MeshStandardMaterial({ color: 0x15161a, roughness: .45, metalness: .5 });
    shared.window = new THREE.MeshPhysicalMaterial({ color: 0x0a1016, roughness: .06, metalness: .9, clearcoat: 1 });
    shared.front = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xfff3d0, emissiveIntensity: 1.1 });
  }
  return {
    ...shared,
    paint: new THREE.MeshPhysicalMaterial({ color, metalness: .55, roughness: .32, clearcoat: 1, clearcoatRoughness: .06 }),
    rear: new THREE.MeshStandardMaterial({ color: 0x8a0a0a, emissive: 0xff1a1a, emissiveIntensity: .5 }),
  };
}

export class Car {
  constructor(spec, color = spec.color, name = 'Driver', up, look, tune) {
    this.spec = spec; this.name = name; this.color = color; this.up = up || { eng: 0, tyre: 0, nitro: 0, armor: 0 };
    this.fuel = 1; this.burn = 1; this.noNitro = false; this.assistK = 0; this.inPit = false; this.pitZone = false; this.aF = 0; this.useF = 0; this.useR = 0;
    this.dirt = 0; this.dirtShown = 0; this.wetTyres = false; this.baseColor = new THREE.Color(color);
    const proto = protos[spec.id], root = this.root = new THREE.Group(); root.rotation.order = 'YXZ';
    const chassis = this.chassis = new THREE.Group(); root.add(chassis);
    this.m = mats(color); this.wheels = {}; this.bodyMeshes = [];
    this.dmg = { front: 0, rear: 0, left: 0, right: 0 }; this.tyre = 1; this.dmgScale = 1; this.wear = 1;
    for (const child of proto.children) {
      const c = child.clone(true);
      c.traverse(o => {
        if (!o.isMesh) return; o.castShadow = true;
        const n = o.userData.kind = o.material.name;
        o.material = n === 'paint' ? this.m.paint : n === 'tire' ? this.m.tire : n === 'rim7' ? this.m.rim : n === 'rim6' ? this.m.rimDark : this.m[n] || this.m.body;
      });
      if (c.name.startsWith('body')) { chassis.add(c); c.traverse(o => { if (o.isMesh) { o.geometry = o.geometry.clone(); o.userData.orig = o.geometry.attributes.position.array.slice(); this.bodyMeshes.push(o); } }); }
      else { const pivot = new THREE.Group(); pivot.position.copy(c.position); c.position.set(0, 0, 0); pivot.add(c); root.add(pivot); this.wheels[c.name.slice(6, 8)] = { pivot, mesh: c, x: pivot.position.x, y: pivot.position.y, z: pivot.position.z }; }
    }
    const w = this.wheels; this.a = w.FL.z; this.b = -w.RL.z; this.tw = w.FL.x; this.R = w.RL.y;
    { const T = TUNE.toy; chassis.scale.set(T.w, T.h, T.l); for (const k in w) { const q = w[k]; q.mesh.scale.setScalar(T.wheel); q.y *= T.wheel; q.pivot.position.set(q.x * T.w, q.y, q.z * T.l); } this.rideY = this.R * (T.wheel - 1); this.R *= T.wheel; }
    const box = new THREE.Box3().setFromObject(chassis);
    this.tn = tuneOf(spec, tune); this.wear = this.tn.wear; this.dress(look);
    this.hw = (box.max.x - box.min.x) / 2 - .05; this.zf = box.max.z - .1; this.zr = -box.min.z - .1; this.top = box.max.y;
    this.I = spec.mass * this.a * this.b * spec.yawK; this.h = .3;
    this.wsurf = [ROAD, ROAD, ROAD, ROAD]; this.lastSk = [null, null]; this.spin = [0, 0];
    this.reset(0, 0, 0);
  }
  reset(x, z, th) {
    this.x = this.px = x; this.z = this.pz = z; this.th = this.pth = th; this.vx = this.vz = this.r = 0; this.steer = 0; this.axS = this.ayS = 0;
    this.slipR = 0; this.wspin = 0; this.locked = false; this.grass = 0; this.nitro = 1; this.nitroOn = false; this.braking = false;
    this.rollD = this.pitchD = 0; this.draft = 0; this.oil = 0; this.lockF = false; this.y = 0; this.pitch = this.roll = 0; this.stuck = 0; this.lastSk = [null, null]; this.emitAcc = 0; this.rpm = 0; this.gear = 1;
  }
  get speed() { return Math.hypot(this.vx, this.vz); }
  get vf() { return this.vx * Math.sin(this.th) + this.vz * Math.cos(this.th); }
  get beta() { const sn = Math.sin(this.th), cs = Math.cos(this.th); return Math.atan2(this.vx * cs - this.vz * sn, Math.abs(this.vx * sn + this.vz * cs)); }

  // ---- one physics sub-step. inp: {steer (+left), throttle, brake, hand, nitro}
  step(dt, inp, track, live, boost = 1) {
    const s = this.spec, m = s.mass + TUNE.fuel.tankKg * this.fuel, a = this.a, b = this.b, L = a + b, g = 9.81, U = this.up, x0 = this.x, z0 = this.z, TY = TUNE.tyre, TN = this.tn;
    this.px = x0; this.pz = z0; this.pth = this.th;
    const sn = Math.sin(this.th), cs = Math.cos(this.th);
    const vf = this.vx * sn + this.vz * cs, vl = this.vx * cs - this.vz * sn, speed = Math.hypot(vf, vl), sg = vf >= 0 ? 1 : -1;

    const wet = track.wet || 0, D = this.dmg, gripK = s.grip * TN.grip * (1 + .035 * U.tyre) * (.72 + .28 * this.tyre) * (this.oil > 0 ? .42 : 1) * TUNE.gripScale;
    const rainLoss = this.wetTyres ? .07 * wet + .07 * (1 - wet) : .27 * wet;      // wets: a little slower in the dry, far better in the rain
    this.oil = Math.max(0, this.oil - dt);
    // what is under each wheel
    let muF = 0, muR = 0, gr = 0, pitN = 0;
    for (let i = 0; i < 4; i++) {
      const w = this.wheels[WK[i]], sf = track.surf(this.x + sn * w.z + cs * w.x, this.z + cs * w.z - sn * w.x);
      this.wsurf[i] = sf; if (sf === PIT) pitN++; const mu = sf === ROAD || sf === PIT ? 1 - rainLoss : sf === KERB ? .95 - rainLoss * 1.2 : s.off * (1 - .15 * wet); if (sf === GRASS || sf === WALL) gr += .25;
      if (i < 2) muF += mu / 2; else muR += mu / 2;
    }
    this.grass = gr; this.inPit = pitN >= 2 || this.pitZone;

    // steering: lock shrinks with speed; a little automatic counter-steer keeps slides catchable
    const beta = speed > 4 && vf > 0 ? Math.atan2(vl, vf) : 0;
    let target = inp.steer * TUNE.steer.lock / (1 + speed * TUNE.steer.speedK);
    const ab = Math.abs(beta);
    const K = this.assistK;
    if (K > 0 && vf > 5) { target = target * (1 - K * clamp((ab - .3) * 1.6, 0, .8)) + K * clamp(beta * .75, -.5, .5); }
    if (speed > 3) target += (D.left - D.right) * .05 + D.front * .02 * Math.sin(this.x * .7 + this.z * .9);   // bent suspension pulls and shimmies
    target = clamp(target, -.62, .62);
    const sr = (inp.steer === 0 ? TUNE.steer.returnRate : TUNE.steer.rate / (1 + speed * TUNE.steer.rateSpeedK)) * dt;
    this.steer += clamp(target - this.steer, -sr, sr);

    // axle loads with longitudinal weight transfer + downforce
    const dW = m * this.axS * this.h / L, down = s.aero * TN.aero * speed * speed;
    // lateral load transfer: the outside tyres take the load and the pair grips a little less. rollF sets which axle gives up first.
    const lt = Math.min(1, Math.abs(this.ayS) * this.h / (g * this.tw)), ltF = 1 - TY.loadSens * (lt * TN.rollF * 2) ** 2, ltR = 1 - TY.loadSens * (lt * (1 - TN.rollF) * 2) ** 2;
    const Nf = Math.max(m * g * b / L - dW, m * g * .15) + down * .45, Nr = Math.max(m * g * a / L + dW, m * g * .15) + down * .55;

    // engine, brakes, reverse
    let thr = live ? inp.throttle : 0, brk = live ? inp.brake : 1;
    if (this.fuel <= 0) thr = 0;
    if (this.inPit) { const lim = TUNE.pit.limit; if (vf > lim + .5) { thr = 0; brk = Math.max(brk, .55); } else if (vf > lim - 1.2) thr = Math.min(thr, .12); }   // pit-lane speed limiter
    const rev = live && brk > 0 && thr === 0 && vf < 1.2;
    const nit = this.nitroOn = !!(inp.nitro && !this.noNitro && this.nitro > 0 && thr > 0 && live && vf > 3);
    if (nit) this.nitro = Math.max(0, this.nitro - dt / (3.2 * (1 + .25 * U.nitro)));
    const vmax = s.top * TN.top * (1 + .04 * U.eng) * (nit ? 1.16 : 1) * (gr > .5 ? .55 : 1) * (1 - .1 * (D.front + D.rear));
    if (K > 0 && ab > .42) thr *= 1 - K * (1 - clamp(1 - (ab - .42) / .3, .2, 1));     // drift-angle hold: ease the power before a slide becomes a spin
    let Fdrive = rev ? -brk * s.acc * m * .5 * clamp(1 + vf / 12, 0, 1) : thr * s.acc * TN.acc * (1 + .06 * U.eng) * (1 + .12 * this.draft) * m * boost * (1 - .4 * D.front) * (nit ? 1.5 : 1) * Math.min(1, 16 / Math.max(vf, 1)) * clamp(1 - (vf / vmax) ** 2, 0, 1);   // traction-limited low down, power-limited above ~58 km/h
    const bf = rev ? 0 : Math.min(brk * s.brake * m * g, m * Math.abs(vf) / dt);
    this.braking = brk > .1 && !rev;
    const dF = s.drive === 'fwd' ? 1 : s.drive === 'awd' ? .42 : 0;
    const capF = muF * gripK * Nf * ltF, capR = muR * gripK * s.rear * TUNE.rearBias * Nr * ltR;
    let FxF = clamp(Fdrive * dF - sg * bf * TN.bias, -capF, capF), FxR = Fdrive * (1 - dF) - sg * bf * (1 - TN.bias);

    const vden = Math.max(Math.abs(vf), 3), vlr = vl - b * this.r;
    const aF = Math.atan2(vl + a * this.r, vden) - this.steer * sg;
    const FyF = -Math.sqrt(Math.max(capF * capF - (FxF > 0 ? FxF * TY.driveShare : FxF * TY.brakeShare) ** 2, capF * capF * .15)) * Math.sin(TY.frontC * Math.atan(TY.frontB * aF));
    let FyR; this.wspin = 0; this.locked = false;
    if (inp.hand && live && speed > 1) {          // handbrake: locked rears slide with kinetic friction
      const vm = Math.hypot(vf, vlr) || 1, fk = capR * .7;
      FxR = -fk * vf / vm; FyR = -fk * vlr / vm; this.locked = true; this.slipR = 1;
    } else {
      if (Math.abs(FxR) > capR) { this.wspin = (Math.abs(FxR) - capR) / capR; FxR = Math.sign(FxR) * capR; }
      const aR = Math.atan2(vlr, vden);
      FyR = -Math.sqrt(Math.max(capR * capR - FxR * FxR * s.loose * TUNE.powerSlide, capR * capR * .12)) * Math.sin(TY.rearC * Math.atan(TY.rearB * aR));
      this.slipR = Math.abs(aR);
    }
    this.aF = aF; this.useF = Math.hypot(FxF, FyF) / (capF || 1); this.useR = Math.hypot(FxR, FyR) / (capR || 1);
    const cd = Math.cos(this.steer), sd = Math.sin(this.steer);
    const ax = (FxR + FxF * cd - FyF * sd - .25 * (1 - .45 * this.draft) * vf * Math.abs(vf) - m * (.03 + gr * TUNE.surface.grassDrag) * vf - (thr === 0 && !rev ? m * .45 * Math.sign(vf) * Math.min(1, Math.abs(vf)) : 0)) / m;   // last term: engine braking when off the throttle
    const ay = (FyF * cd + FxF * sd + FyR) / m;
    this.vx += (ax * sn + ay * cs) * dt; this.vz += (ax * cs - ay * sn) * dt;
    if (K > 0 && speed > 3 && !inp.hand) { const vl2 = this.vx * cs - this.vz * sn, q = Math.min(1, TUNE.slideAid * K * dt); this.vx -= cs * vl2 * q; this.vz += sn * vl2 * q; }   // grip aid: bleeds off sideways slip so the car goes where it points (handbrake switches it off)
    this.r += (a * (FyF * cd + FxF * sd) - b * FyR) / this.I * dt; this.r -= this.r * (TUNE.yawDamp + speed * TUNE.yawDampSpeed + K * TUNE.assistYawDamp) * dt;
    if (thr === 0 && (brk === 0 || !live) && speed < .5) { this.vx *= .9; this.vz *= .9; this.r *= .85; }
    if (!live) { this.vx = this.vz = this.r = 0; }
    this.th += this.r * dt; this.x += this.vx * dt; this.z += this.vz * dt;
    this.axS += (ax - this.axS) * Math.min(1, dt * 8); this.ayS += (ay - this.ayS) * Math.min(1, dt * 8);
    if (live) this.fuel = Math.max(0, this.fuel - dt * this.burn * (TUNE.fuel.idle + thr * (.35 + .65 * this.rpm)) / TUNE.fuel.fullThrottleSeconds);
    if (live) this.tyre = Math.max(0, this.tyre - dt * this.wear * (TY.wear.base * Math.min(1, speed / 25) + Math.min(this.slipR, .8) * .011 + this.wspin * .008 + (this.locked ? .03 : 0) + gr * .002));
    if (!nit && live) this.nitro = Math.min(1, this.nitro + dt * (.018 + (this.drifting ? .09 : 0)));
    this.drifting = Math.abs(this.beta) > .22 && speed > 9 && vf > 0 && gr < .6;

    // fake gearbox for the rev counter + engine note
    const sp = Math.abs(vf), gears = [0, .22, .4, .58, .78, 1.02].map(k => k * s.top);
    let gi = 1; while (gi < 5 && sp > gears[gi]) gi++;
    this.gear = rev && vf < -.5 ? 0 : gi;
    const base = (sp - gears[gi - 1]) / (gears[gi] - gears[gi - 1]);
    const want = live ? clamp(.25 + base * .7 + this.wspin * .3, .12, 1) : .15 + inp.throttle * .7;
    this.rpm += (want - this.rpm) * Math.min(1, dt * 10);
    this.dirt = clamp(this.dirt + dt * (gr * Math.min(1, speed / 15) * .07 - wet * .03), 0, 1);
    this.lockF = this.braking && brk > .9 && speed > 17 && gr < .5;
    let hit = this.collideWalls(track);
    if (track.surf(this.x, this.z) === WALL) { this.x = x0; this.z = z0; this.vx *= .15; this.vz *= .15; this.r *= .3; hit = Math.max(hit, speed * .5); this.hitX = x0; this.hitZ = z0; this.hitL = [0, this.zf]; this.hitN = [-sn, -cs]; }   // never end a step inside a barrier
    return hit;
  }

  // Barrier contact. The wall normal is averaged from the open space around the contact point, so the car
  // slides along a barrier instead of ricocheting off the stair-steps of the collision map. Almost no bounce,
  // friction scrubs speed along the wall, and only part of the impulse is allowed to spin the car.
  collideWalls(track) {
    const sn = Math.sin(this.th), cs = Math.cos(this.th), m = this.spec.mass, hw = this.hw, W = TUNE.wall;
    const pts = [[hw, this.zf], [-hw, this.zf], [hw, -this.zr], [-hw, -this.zr], [hw, 0], [-hw, 0]];
    let hit = 0, touched = false;
    for (const [lx, lz] of pts) {
      const rx = sn * lz + cs * lx, rz = cs * lz - sn * lx, px = this.x + rx, pz = this.z + rz;
      if (track.surf(px, pz) !== WALL) continue;
      let nx = 0, nz = 0;
      for (let a = 0; a < 16; a++) { const dx = Math.cos(a * .3927), dz = Math.sin(a * .3927); for (const r of [.8, 1.6, 2.6]) if (track.surf(px + dx * r, pz + dz * r) !== WALL) { nx += dx; nz += dz; } }
      let nl = Math.hypot(nx, nz);
      if (nl < .01) { const e = track.escape(px, pz); if (!e) continue; nx = e.nx; nz = e.nz; nl = 1; }
      nx /= nl; nz /= nl;
      let d = 0; while (d < 4 && track.surf(px + nx * d, pz + nz * d) === WALL) d += .06;
      this.x += nx * d; this.z += nz * d; touched = true;
      const vn = (this.vx + this.r * rz) * nx + (this.vz - this.r * rx) * nz;
      if (vn >= 0) continue;
      const c = rz * nx - rx * nz, j = -(1 + W.bounce) * vn / (1 / m + c * c / this.I);
      this.vx += j * nx / m; this.vz += j * nz / m; this.r += j * c / this.I * W.spin;
      const tx = -nz, tz = nx, vt = this.vx * tx + this.vz * tz, dv = Math.sign(vt) * Math.min(Math.abs(vt), W.friction * j / m); this.vx -= tx * dv; this.vz -= tz * dv;
      if (-vn > hit) { hit = -vn; this.hitX = px; this.hitZ = pz; this.hitL = [lx, lz]; this.hitN = [nx, nz]; }
    }
    if (touched) this.r = clamp(this.r * W.yawKeep, -2.2, 2.2);
    return hit;
  }

  // circle-vs-circle bump between two cars. `kin` = the other car is network-driven and does not react here
  bump(o, kin) {
    let hit = 0;
    for (const za of [1.15, -1.15]) for (const zb of [1.15, -1.15]) {
      const ax = this.x + Math.sin(this.th) * za, az = this.z + Math.cos(this.th) * za, bx = o.x + Math.sin(o.th) * zb, bz = o.z + Math.cos(o.th) * zb;
      const dx = ax - bx, dz = az - bz, d = Math.hypot(dx, dz), min = 2.05;
      if (d >= min || d < 1e-4) continue;
      const nx = dx / d, nz = dz / d, pen = min - d, ma = this.spec.mass, mb = kin ? 1e9 : o.spec.mass, ia = 1 / ma, ib = 1 / mb;
      this.x += nx * pen * ib / (ia + ib) * (kin ? 0 : 1) + (kin ? nx * pen : 0); this.z += nz * pen * ib / (ia + ib) * (kin ? 0 : 1) + (kin ? nz * pen : 0);
      if (!kin) { o.x -= nx * pen * ia / (ia + ib); o.z -= nz * pen * ia / (ia + ib); }
      const vn = (this.vx - o.vx) * nx + (this.vz - o.vz) * nz; if (vn >= 0) continue;
      const j = -1.08 * vn / (ia + ib);
      this.vx += j * nx * ia; this.vz += j * nz * ia; this.r += (Math.cos(this.th) * za * nx - Math.sin(this.th) * za * nz) * j * .35 / this.I;
      if (!kin) { o.vx -= j * nx * ib; o.vz -= j * nz * ib; o.r -= (Math.cos(o.th) * zb * nx - Math.sin(o.th) * zb * nz) * j * .35 / o.I; }
      if (-vn > hit) { hit = -vn; this.hitX = (ax + bx) / 2; this.hitZ = (az + bz) / 2; this.hitL = this.toLocal(this.hitX, this.hitZ); this.hitN = [nx, nz]; o.hitX = this.hitX; o.hitZ = this.hitZ; o.hitL = o.toLocal(this.hitX, this.hitZ); o.hitN = [-nx, -nz]; }
    }
    return hit;
  }

  // Bodywork options. Every part is positioned from the car's own geometry (rear deck height, nose height, body width),
  // so a wing sits on the boot lid and a splitter sits under the bumper whatever the model.
  dress(look) {
    const L = this.look = Object.assign({ wing: 0, split: 0, rim: 0, tint: 0, glow: 0 }, look || {}), ch = this.chassis;
    if (this.addons) ch.remove(this.addons); const A = this.addons = new THREE.Group(); ch.add(A);
    let minZ = 1e9, maxZ = -1e9, maxX = 0; const V = [];
    for (const m of this.bodyMeshes) { const o = m.userData.orig; for (let i = 0; i < o.length; i += 3) { V.push(o[i], o[i + 1], o[i + 2]); if (o[i + 2] < minZ) minZ = o[i + 2]; if (o[i + 2] > maxZ) maxZ = o[i + 2]; if (o[i] > maxX) maxX = o[i]; } }
    const top = (z0, z1, xr) => { let y = 0; for (let i = 0; i < V.length; i += 3) if (V[i + 2] >= z0 && V[i + 2] <= z1 && Math.abs(V[i]) < xr && V[i + 1] > y) y = V[i + 1]; return y; };
    const low = (z0, z1) => { let y = 9; for (let i = 0; i < V.length; i += 3) if (V[i + 2] >= z0 && V[i + 2] <= z1 && V[i + 1] < y) y = V[i + 1]; return y; };
    const dark = new THREE.MeshStandardMaterial({ color: 0x0e0f11, roughness: .45, metalness: .5 }), W = maxX * 2;
    const add = (w, h, d, mat, x, y, z) => { const me = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat); me.position.set(x, y, z); me.castShadow = true; A.add(me); return me; };
    if (L.wing) {
      const deck = top(minZ + .08, minZ + .5, maxX * .75), z = minZ + .26;
      if (L.wing === 1) add(W * .8, .06, .2, this.m.paint, 0, deck + .02, minZ + .14).rotation.x = .25;                  // ducktail lip on the boot edge
      else { const hi = L.wing === 2 ? .27 : .4, dep = L.wing === 2 ? .3 : .42, wd = W * (L.wing === 2 ? .86 : .97);
        add(wd, .035, dep, L.wing === 2 ? this.m.paint : dark, 0, deck + hi, z).rotation.x = .13;
        for (const sx of [-.27, .27]) add(.04, hi, .11, dark, sx * W, deck + hi / 2, z + .03);
        for (const sx of [-.5, .5]) add(.025, L.wing === 2 ? .15 : .24, dep + .06, dark, sx * wd, deck + hi + .02, z); }
    }
    if (L.split) { const y = low(maxZ - .3, maxZ); add(W * .88, .03, .34, dark, 0, y + .015, maxZ - .1); for (const sx of [-.46, .46]) add(.03, .09, .2, dark, sx * W * .88, y + .05, maxZ - .14); }
    if (L.glow) { const g = new THREE.Mesh(new THREE.PlaneGeometry(W * .92, (maxZ - minZ) * .82), new THREE.MeshBasicMaterial({ color: new THREE.Color(GLOWS[L.glow]).multiplyScalar(1.8), transparent: true, opacity: .6, depthWrite: false, side: THREE.DoubleSide })); g.rotation.x = -Math.PI / 2; g.position.set(0, low(minZ, maxZ) + .03, (minZ + maxZ) / 2); A.add(g); }
    const rimM = L.rim ? new THREE.MeshStandardMaterial({ color: RIMS[L.rim], metalness: .9, roughness: .26 }) : null;
    for (const k in this.wheels) this.wheels[k].mesh.traverse(o => { if (o.isMesh && o.userData.kind && o.userData.kind.startsWith('rim')) o.material = rimM || (o.userData.kind === 'rim6' ? this.m.rimDark : this.m.rim); });
    const winM = L.tint ? new THREE.MeshPhysicalMaterial({ color: TINTS[L.tint], roughness: .08, metalness: .9, clearcoat: 1 }) : this.m.window;
    for (const m of this.bodyMeshes) if (m.userData.kind === 'window') m.material = winM;
  }

  toLocal(wx, wz) { const dx = wx - this.x, dz = wz - this.z, sn = Math.sin(this.th), cs = Math.cos(this.th); return [dx * cs - dz * sn, dx * sn + dz * cs]; }

  // ---- damage: zone health + real dents in the bodywork around the point of impact
  damage(power) {
    const amt = Math.max(0, power - 3.5) / 34 * this.dmgScale; if (amt <= 0 || !this.hitL) return 0;
    const [lx, lz] = this.hitL, D = this.dmg, zone = lz > this.zf * .55 ? 'front' : lz < -this.zr * .55 ? 'rear' : lx > 0 ? 'left' : 'right';
    D[zone] = Math.min(1, D[zone] + amt);
    const sn = Math.sin(this.th), cs = Math.cos(this.th), n = this.hitN, dx = n[0] * cs - n[1] * sn, dz = n[0] * sn + n[1] * cs, R = 1.25, depth = Math.min(.3, amt * 2.4);
    for (const mesh of this.bodyMeshes) {
      const a = mesh.geometry.attributes.position, p = a.array, o = mesh.userData.orig; let touched = false;
      for (let i = 0; i < p.length; i += 3) {
        const d = Math.hypot(o[i] - lx, (o[i + 1] - .55) * .6, o[i + 2] - lz); if (d > R) continue;
        const w = (1 - d / R) ** 2 * depth, jit = Math.sin(o[i] * 37.1 + o[i + 1] * 91.7 + o[i + 2] * 53.3) * .35;
        p[i] += dx * w * (1 + jit); p[i + 1] -= w * .25 * (1 + jit); p[i + 2] += dz * w * (1 + jit);
        const ex = p[i] - o[i], ey = p[i + 1] - o[i + 1], ez = p[i + 2] - o[i + 2], el = Math.hypot(ex, ey, ez);
        if (el > .36) { const k = .36 / el; p[i] = o[i] + ex * k; p[i + 1] = o[i + 1] + ey * k; p[i + 2] = o[i + 2] + ez * k; }
        touched = true;
      }
      if (touched) { a.needsUpdate = true; mesh.geometry.computeVertexNormals(); }
    }
    return amt;
  }
  get health() { const D = this.dmg; return 1 - (D.front + D.rear + D.left + D.right) / 4; }
  repair() {
    this.dmg = { front: 0, rear: 0, left: 0, right: 0 }; this.tyre = 1; this.dirt = 0;
    for (const mesh of this.bodyMeshes) { mesh.geometry.attributes.position.array.set(mesh.userData.orig); mesh.geometry.attributes.position.needsUpdate = true; mesh.geometry.computeVertexNormals(); }
  }

  // ---- visuals: ride height from the track, body roll, wheel spin + steer
  render(dt, track, al = 1) {
    const X = this.rx = this.px + (this.x - this.px) * al, Z = this.rz = this.pz + (this.z - this.pz) * al, TH = this.pth + wrap(this.th - this.pth) * al;
    const sn = Math.sin(TH), cs = Math.cos(TH), h = [];
    for (let i = 0; i < 4; i++) { const w = this.wheels[WK[i]]; h.push(track.height(X + sn * w.z + cs * w.x, Z + cs * w.z - sn * w.x)); }
    const k = Math.min(1, dt * 14);
    this.y += ((h[0] + h[1] + h[2] + h[3]) / 4 - this.y) * Math.min(1, dt * 25);
    this.pitch += (Math.atan2((h[2] + h[3] - h[0] - h[1]) / 2, this.a + this.b) - this.pitch) * k;
    this.roll += (Math.atan2((h[0] + h[2] - h[1] - h[3]) / 2, this.tw * 2) - this.roll) * k;
    this.root.position.set(X, this.y, Z); this.root.rotation.set(this.pitch, TH, this.roll);
    this.rollD += (clamp(this.ayS * .011, -.085, .085) - this.rollD) * Math.min(1, dt * 7);
    this.pitchD += (clamp(-this.axS * .0055, -.05, .05) - this.pitchD) * Math.min(1, dt * 7);
    const rough = this.speed > 2 ? (this.grass * .035 + (this.wsurf.includes(KERB) ? .02 : 0)) : 0;
    this.chassis.rotation.set(this.pitchD + (Math.random() - .5) * rough * .5 + this.dmg.front * .02, 0, this.rollD + (Math.random() - .5) * rough + (this.dmg.left - this.dmg.right) * .035);
    this.chassis.position.y = this.rideY + (Math.random() - .5) * rough + (this.rpm > .2 ? Math.sin(performance.now() * .05) * .003 : 0);
    const vf = this.vf, d = vf / this.R * dt;
    this.spin[0] += d; this.spin[1] += this.locked ? 0 : d * (1 + this.wspin * 3) + (this.wspin > 0 ? (30 + this.wspin * 40) * dt : 0);
    for (let i = 0; i < 4; i++) {
      const w = this.wheels[WK[i]]; w.mesh.rotation.x = this.spin[i < 2 ? 0 : 1];
      if (i < 2) w.pivot.rotation.y = this.steer;
      w.pivot.position.y = w.y + (this.wsurf[i] === GRASS && this.speed > 2 ? (Math.random() - .5) * .04 : 0);
    }
    this.m.rear.emissiveIntensity = this.braking ? 2.4 : .5;
    if (Math.abs(this.dirt - this.dirtShown) > .03) { this.dirtShown = this.dirt; this.m.paint.color.copy(this.baseColor).lerp(DUST[track.def.theme === 'desert' ? 1 : 0], this.dirt * .6); this.m.paint.roughness = .32 + this.dirt * .5; this.m.paint.clearcoat = 1 - this.dirt * .8; }
  }

  // ---- smoke, dirt, skid marks, nitro flame
  effects(dt, fx, track, detail = 1) {
    const sn = Math.sin(this.th), cs = Math.cos(this.th), sp = this.speed, dust = track.def.theme === 'desert' ? [.78, .64, .42] : [.36, .28, .17];
    const skid = (this.slipR > .16 && sp > 6) || (this.wspin > .12) || (this.locked && sp > 3);
    this.emitAcc += dt * 60 * detail; const n = Math.floor(this.emitAcc); this.emitAcc -= n;
    for (let i = 2; i < 4; i++) {
      const w = this.wheels[WK[i]], wx = this.x + sn * w.z + cs * w.x, wz = this.z + cs * w.z - sn * w.x, sf = this.wsurf[i], y = track.height(wx, wz);
      const onRoad = sf === ROAD || sf === KERB;
      if (skid && onRoad) {
        const inten = clamp(this.slipR * 1.6 + this.wspin + (this.locked ? .6 : 0), .3, 1);
        for (let k = 0; k < n; k++) if (Math.random() < inten) fx.smoke.emit(wx + (Math.random() - .5) * .3, y + .15, wz + (Math.random() - .5) * .3, this.vx * .25 + (Math.random() - .5) * 1.5, .7 + Math.random() * 1.2, this.vz * .25 + (Math.random() - .5) * 1.5, .9 + Math.random() * .9, .9, 3.2, .93, .93, .95, .34 * inten);
        const l = [wx + cs * .15, y + .06, wz - sn * .15], r = [wx - cs * .15, y + .06, wz + sn * .15], last = this.lastSk[i - 2];
        if (last && (last[0][0] - l[0]) ** 2 + (last[0][2] - l[2]) ** 2 < 9) fx.skids.quad(last[0], last[1], l, r);
        this.lastSk[i - 2] = [l, r];
      } else this.lastSk[i - 2] = null;
    }
    if (sp > 3) for (let i = 0; i < 4; i++) {     // dirt from any wheel that is off the tarmac
      if (this.wsurf[i] !== GRASS) continue;
      const w = this.wheels[WK[i]], wx = this.x + sn * w.z + cs * w.x, wz = this.z + cs * w.z - sn * w.x, y = track.height(wx, wz), q = clamp(sp / 25, .2, 1);
      for (let k = 0; k < n; k++) if (Math.random() < q * .7) {
        fx.smoke.emit(wx, y + .1, wz, this.vx * .3 + (Math.random() - .5) * 2, 1 + Math.random() * 2, this.vz * .3 + (Math.random() - .5) * 2, .7 + Math.random() * .6, .7, 3.5, dust[0], dust[1], dust[2], .42);
        if (Math.random() < .5) fx.smoke.emit(wx, y + .1, wz, -this.vx * .1 + (Math.random() - .5) * 4, 2 + Math.random() * 3, -this.vz * .1 + (Math.random() - .5) * 4, .5, .16, 0, dust[0] * .6, dust[1] * .6, dust[2] * .6, 1, 12);   // clods
      }
    }
    if (this.lockF) for (let i = 0; i < 2; i++) {                          // hard braking: the fronts chirp and smoke a little
      const w = this.wheels[WK[i]], wx = this.x + sn * w.z + cs * w.x, wz = this.z + cs * w.z - sn * w.x;
      if (Math.random() < .35 * n) fx.smoke.emit(wx, this.y + .15, wz, this.vx * .3, .6 + Math.random(), this.vz * .3, .6, .6, 2.6, .93, .93, .95, .16);
    }
    const wet = track.wet || 0;
    if (wet > .15 && sp > 8) for (let i = 2; i < 4; i++) {                 // spray off wet tarmac
      const w = this.wheels[WK[i]], wx = this.x + sn * w.z + cs * w.x, wz = this.z + cs * w.z - sn * w.x;
      for (let k = 0; k < n; k++) if (Math.random() < wet * .8) fx.smoke.emit(wx, this.y + .2, wz, this.vx * .45 + (Math.random() - .5) * 2, 1.2 + Math.random() * 1.5, this.vz * .45 + (Math.random() - .5) * 2, .6 + Math.random() * .4, .7, 4, .8, .86, .93, .16 * wet);
    }
    if (this.dmg.front > .4) {                                              // a hurt engine smokes, then burns
      const q = this.dmg.front, ex = this.x + sn * this.zf * .6, ez = this.z + cs * this.zf * .6, g = .5 - q * .42;
      for (let k = 0; k < n; k++) if (Math.random() < q * .5) fx.smoke.emit(ex + (Math.random() - .5) * .6, this.y + this.top * .75, ez + (Math.random() - .5) * .6, this.vx * .5, 1.5 + Math.random() * 1.5, this.vz * .5, 1.2 + Math.random() * .8, .6, 2.4, g, g, g, .4);
      if (q > .85 && Math.random() < .5) fx.glow.emit(ex, this.y + this.top * .7, ez, this.vx, 1.5 + Math.random() * 2, this.vz, .25, .5, -1, 1, .5, .1, .8);
    }
    if (this.nitroOn) for (const sx of [-.35, .35]) for (let k = 0; k < Math.max(1, n); k++) {
      const ex = this.x - sn * (this.zr + .1) + cs * sx, ez = this.z - cs * (this.zr + .1) - sn * sx;
      fx.glow.emit(ex, this.y + .42, ez, this.vx - sn * (6 + Math.random() * 5), (Math.random() - .5), this.vz - cs * (6 + Math.random() * 5), .12 + Math.random() * .1, .55, -2, .35, .65, 1, .9);
    }
  }
  // sparks fly along the surface we scraped, panel fragments tumble away, dust lifts from the contact point
  impactFX(fx, track, power) {
    const y = track.height(this.hitX, this.hitZ) + .45, n = this.hitN || [0, 0], tx = -n[1], tz = n[0], along = Math.sign(this.vx * tx + this.vz * tz) || 1, v = Math.min(1, power / 20);
    for (let i = 0; i < 5 + v * 26; i++) { const s = (4 + Math.random() * 10) * along * (.4 + v); fx.glow.emit(this.hitX, y + Math.random() * .3, this.hitZ, tx * s + n[0] * (1 + Math.random() * 4) + this.vx * .3, .5 + Math.random() * 4.5, tz * s + n[1] * (1 + Math.random() * 4) + this.vz * .3, .2 + Math.random() * .4, .13, 0, 1, .72, .28, 1, 15); }
    if (power > 6) {
      const c = new THREE.Color(this.color);
      for (let i = 0; i < 3 + v * 10; i++) fx.smoke.emit(this.hitX, y, this.hitZ, n[0] * (2 + Math.random() * 5) + (Math.random() - .5) * 5 + this.vx * .4, 2 + Math.random() * 5, n[1] * (2 + Math.random() * 5) + (Math.random() - .5) * 5 + this.vz * .4, .7 + Math.random() * .5, .16 + Math.random() * .12, 0, i % 2 ? c.r : .08, i % 2 ? c.g : .08, i % 2 ? c.b : .09, 1, 13);
      for (let i = 0; i < 6; i++) fx.smoke.emit(this.hitX, y - .2, this.hitZ, (Math.random() - .5) * 3, .6 + Math.random(), (Math.random() - .5) * 3, .8, .8, 3, .6, .58, .55, .22);
    }
  }

  // ---- network ghost: dead-reckon from the last packet and ease towards it
  // Snapshot interpolation. Every packet carries the sender's clock; the rival is drawn a short, self-adjusting
  // delay in the past, between two real snapshots, so late or bunched packets are absorbed instead of shown as jumps.
  netApply(p, now) {
    const N = this.nb || (this.nb = { buf: [], off: Infinity, iv: 1000 / TUNE.net.hz, jit: 4, last: 0, delay: 70 }), t = p[8];
    if (N.buf.length && t <= N.buf[N.buf.length - 1].t) return;               // stale or out of order
    N.buf.push({ t, x: p[0], z: p[1], th: p[2], vx: p[3], vz: p[4], r: p[5] }); if (N.buf.length > 40) N.buf.shift();
    N.off = Math.min(N.off + .05, now - t);                                   // clock offset + fastest trip seen (relaxes slowly)
    if (N.last) { const d = now - N.last; N.iv += (d - N.iv) * .1; N.jit += (Math.abs(d - N.iv) - N.jit) * .1; } N.last = now;
    this.steer = p[6]; this.braking = !!(p[7] & 1); this.nitroOn = !!(p[7] & 2); this.locked = !!(p[7] & 4); this.slipR = p[7] & 8 ? .4 : 0; this.wspin = 0;
  }
  netStep(dt, track, now) {
    const N = this.nb; if (!N || !N.buf.length) return;
    { const want = clamp(N.iv * TUNE.net.intervalK + N.jit * TUNE.net.jitterK, TUNE.net.minBuffer, TUNE.net.maxBuffer); N.delay += (want - N.delay) * Math.min(1, dt * (want > N.delay ? 2.5 : .5)); }   // grows quickly when the link gets rough, shrinks back slowly     // buffer just enough for the current jitter
    const T = now - N.off - N.delay, B = N.buf; let k = B.length - 1; while (k > 0 && B[k].t > T) k--;
    const a = B[k], b = B[k + 1]; let x, z, th, vx, vz, r;
    if (b && T >= a.t) {                                                      // between two snapshots: cubic (Hermite) blend using their velocities
      const h = (b.t - a.t) / 1000, u = (T - a.t) / (b.t - a.t), u2 = u * u, u3 = u2 * u, h00 = 2 * u3 - 3 * u2 + 1, h10 = u3 - 2 * u2 + u, h01 = -2 * u3 + 3 * u2, h11 = u3 - u2;
      x = h00 * a.x + h10 * h * a.vx + h01 * b.x + h11 * h * b.vx; z = h00 * a.z + h10 * h * a.vz + h01 * b.z + h11 * h * b.vz;
      th = a.th + wrap(b.th - a.th) * u; vx = a.vx + (b.vx - a.vx) * u; vz = a.vz + (b.vz - a.vz) * u; r = a.r + (b.r - a.r) * u;
    } else {                                                                  // ran out of data: coast on the last velocity for up to a quarter second, then hold
      const e = clamp((T - a.t) / 1000, 0, .25), f = T - a.t > 250 ? Math.exp(-(T - a.t - 250) / 200) : 1;
      x = a.x + a.vx * e; z = a.z + a.vz * e; th = a.th + a.r * e; vx = a.vx * f; vz = a.vz * f; r = a.r * f;
    }
    const q = Math.min(1, dt * 25); this.x += (x - this.x) * q; this.z += (z - this.z) * q; this.th += wrap(th - this.th) * q; this.vx = vx; this.vz = vz; this.r = r;
    for (let i = 0; i < 4; i++) { const w = this.wheels[WK[i]]; this.wsurf[i] = track.surf(this.x + Math.sin(this.th) * w.z + Math.cos(this.th) * w.x, this.z + Math.cos(this.th) * w.z - Math.sin(this.th) * w.x); }
    this.grass = this.wsurf.filter(s => s === GRASS).length / 4; this.px = this.x; this.pz = this.z; this.pth = this.th;
  }
  netPack() { return [+this.x.toFixed(2), +this.z.toFixed(2), +this.th.toFixed(3), +this.vx.toFixed(2), +this.vz.toFixed(2), +this.r.toFixed(2), +this.steer.toFixed(2), (this.braking ? 1 : 0) | (this.nitroOn ? 2 : 0) | (this.locked ? 4 : 0) | (this.slipR > .16 ? 8 : 0), Math.round(performance.now())]; }

  dispose() { this.m.paint.dispose(); this.m.rear.dispose(); }
}

// ---- AI driver: pure-pursuit steering + brake-point speed planning along the centre line
export function aiDrive(car, track, ai, cars, dt) {
  const n = track.n, sp = car.speed, p = track.path;
  const look = Math.round((7 + sp * .42) / track.spacing), tgt = p[(car.idx + look) % n];
  // drift the racing line towards the inside of the coming corner, and around slower cars
  let want = clamp(tgt.k * 260, -1, 1) * ai.wide + ai.lane;
  for (const o of cars) {
    if (o === car) continue; const dx = o.x - car.x, dz = o.z - car.z, f = dx * Math.sin(car.th) + dz * Math.cos(car.th), l = dx * Math.cos(car.th) - dz * Math.sin(car.th);
    if (f > 0 && f < 14 && Math.abs(l) < 2.6 && o.speed < sp + 2) want += l > 0 ? -2.6 : 2.6;
  }
  ai.off += (clamp(want, -ai.max, ai.max) - ai.off) * Math.min(1, dt * 1.5);
  const tx = tgt.x + tgt.tz * ai.off, tz = tgt.z - tgt.tx * ai.off;
  const err = wrap(Math.atan2(tx - car.x, tz - car.z) - car.th);
  // fastest speed that still lets us slow down for every corner in sight
  let v = car.spec.top; const mu = car.spec.grip * (.72 + .28 * car.tyre) * ai.skill * ai.skill * .78 * TUNE.gripScale * 9.81, dec = 7.5 * ai.skill;
  for (let i = 0; i < 70; i++) {
    const q = p[(car.idx + i) % n], vc = Math.sqrt(mu / Math.max(Math.abs(q.k), .0015)) * 1.02, lim = Math.sqrt(vc * vc + 2 * dec * i * track.spacing);
    if (lim < v) v = lim;
  }
  if (car.grass > .4) v = Math.min(v, 16);
  const inp = ai.inp; inp.steer = clamp(err * 2.4, -1, 1);
  inp.throttle = sp < v ? (Math.abs(err) > .5 ? .5 : 1) : 0; inp.brake = sp > v + 1.5 ? clamp((sp - v) / 6, .2, 1) : 0;
  if (sp > 8 && Math.abs(car.beta) > .1) inp.throttle *= Math.abs(car.beta) > .25 ? .15 : .5;   // feather the throttle when the tail steps out
  inp.hand = false; inp.nitro = ai.skill > .9 && Math.abs(tgt.k) < .004 && Math.abs(err) < .08 && car.nitro > .5;
  if (inp.brake && car.vf < 2) inp.brake = 0;      // never let the AI select reverse by accident
  return inp;
}
