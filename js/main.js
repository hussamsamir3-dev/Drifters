// Tafheet ~ تفحيط — game loop, race rules, camera, HUD, menus and online lobby.
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { TRACKS, THEMES, loadTrack, makeSky, resampleClosed, GRASS } from './tracks.js';
import { CLASSES, balance, TUNE } from './config.js';
import { buildCrew } from './pit.js';
import { Marshals } from './people.js';
import { CARS, PAINTS, RIMS, TINTS, LIVC, Car, loadCars, aiDrive, tuneOf, RIM_STYLES, TYRE_STYLES, CAL_COLS, setCarEnv } from './car.js';
import { AR } from './lang.js';
import { MenuBg } from './menubg.js';
import { Particles, Skids, Ambient, Debris, Props, LIGHTS, Sparks } from './fx.js';
import { GLOWS } from './car.js';
import { Post } from './post.js';
import { GameAudio, ENGINE_SETS } from './audio.js';
import { Room, hasSupabase, submitLap, topLaps } from './net.js';
import { CHAPTERS, EVENTS, goalText, starsFor, levelOf, xpFor, dailyFor } from './career.js';

const $ = id => document.getElementById(id);
const clamp = (v, a, b) => v < a ? a : v > b ? b : v;
const wrap = a => { while (a > Math.PI) a -= 2 * Math.PI; while (a < -Math.PI) a += 2 * Math.PI; return a; };
const fmt = ms => { if (ms == null || !isFinite(ms)) return '—'; const s = ms / 1000, m = Math.floor(s / 60); return m + ':' + (s - m * 60).toFixed(2).padStart(5, '0'); };
const hex = c => '#' + c.toString(16).padStart(6, '0');
const ORD = ['1st', '2nd', '3rd', '4th', '5th', '6th'];

// ---------------- save game ----------------
const KEY = 'tafheet.v1';
const save = { trace: {}, evol: .7, dev: false, devGod: false, devScale: 1, boxDay: '', v9: 0, tc: true, abs: true, sens: 1, v7: 0, lang: 'en', zoom: 2.25, units: 'kmh', mvol: .5, svol: .7, look: {}, tune: {}, gp: null, v5: 0, assist: 'full', rules: 'circuit', sectors: {}, up: {}, stats: {}, trophies: {}, gfx: 'auto', autoGas: false, story: {}, xp: 0, daily: '', streak: 0, credits: 0, owned: ['Mini', 'Escort'], car: 'Mini', paint: {}, name: '', best: {}, bestDrift: {}, muted: false };
try { Object.assign(save, JSON.parse(localStorage.getItem(KEY) || '{}')); } catch (e) {}
if (!save.name) save.name = 'Driver' + (100 + Math.random() * 900 | 0);
{ const q = new URLSearchParams(location.search).get('gfx'); if (['auto', 'high', 'medium', 'low'].includes(q)) save.gfx = q; }   // e.g. index.html?gfx=low
if (!save.v5) { save.autoGas = false; save.v5 = 1; }
if (!save.v7) { save.zoom = 2.25; save.v7 = 1; }
if (!save.v8) { save.assist = 'medium'; save.v8 = 1; }
if (!save.v9) { save.zoom = 1.5; save.v9 = 1; }
{ const ids = CARS.map(c => c.id); save.owned = (save.owned || []).filter(id => ids.includes(id)); for (const id of ['Mini', 'Escort']) if (!save.owned.includes(id)) save.owned.push(id); if (!ids.includes(save.car)) { save.car = 'Mini'; if (!save.v19) save.credits = (save.credits || 0) + 4000; } save.v19 = 1; }   // the car list changed: keep what still exists, hand back credits for what does not   // automatic gas is now off unless switched on in the menu
const persist = () => { try { localStorage.setItem(KEY, JSON.stringify(save)); } catch (e) {} };
const tx = s => save.lang === 'ar' && AR[s] != null ? AR[s] : s;
const lookOf = id => { const l = save.look[id] || (save.look[id] = { wing: 0, split: 0, rim: 0, tint: 0, glow: 0 }); if (l.rimS === undefined) { l.rimS = (CARS.find(c => c.id === id) || {}).rimS ?? 1; l.tyreS = 0; l.cal = 0; } return l; };
const tuneSet = id => save.tune[id] || (save.tune[id] = { gear: 0, aero: 0, brake: 0, susp: 0, split: 0, diff: 0, tyre: 'medium' });
const racing = () => !!R && !R.attract;
const paintOf = id => save.paint[id] ?? CARS.find(c => c.id === id).color;

// ---------------- renderer + scene ----------------
const renderer = new THREE.WebGLRenderer({ canvas: $('gl'), antialias: true, powerPreference: 'high-performance' });
const isTouch = matchMedia('(pointer: coarse)').matches || navigator.maxTouchPoints > 0;
if (isTouch) document.body.classList.add('touch');
// graphics tiers: high = post-processing + shadows, medium = shadows only, low = neither at 1x resolution
let gfx = save.gfx === 'auto' ? (isTouch ? 'medium' : 'high') : save.gfx; window.__wheelSeg = gfx === 'high' ? 72 : gfx === 'medium' ? 52 : 36;      // wheel detail follows the graphics setting
let pixelRatio = gfx === 'low' ? 1 : Math.min(devicePixelRatio || 1, 1.5);
renderer.setPixelRatio(pixelRatio); renderer.outputColorSpace = THREE.SRGBColorSpace; renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFShadowMap;
const scene = new THREE.Scene(), camera = new THREE.PerspectiveCamera(55, 1, .3, 9000);
scene.environment = new THREE.PMREMGenerator(renderer).fromScene(new RoomEnvironment(), .04).texture; setCarEnv(scene.environment);
const hemi = new THREE.HemisphereLight(0xffffff, 0x444444, 1), sun = new THREE.DirectionalLight(0xffffff, 2.5);
sun.castShadow = true; sun.shadow.mapSize.set(2048, 2048); sun.shadow.bias = -.0005; sun.shadow.normalBias = .04;
function fitShadow() { const h = 30 * (save.zoom || 1.5) + 18, c = sun.shadow.camera; Object.assign(c, { left: -h, right: h, top: h, bottom: -h, near: 1, far: 360 }); c.updateProjectionMatrix(); const sz = 2048; if (sun.shadow.mapSize.x !== sz) { sun.shadow.mapSize.set(sz, sz); if (sun.shadow.map) { sun.shadow.map.dispose(); sun.shadow.map = null; } } }   // shadows cover what the camera shows, no more
fitShadow();
scene.add(hemi, sun, sun.target);
let post = null;
function resize() { const w = innerWidth, h = innerHeight; renderer.setPixelRatio(pixelRatio); renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix(); if (post) post.setSize(w, h, pixelRatio); }
function setGfx(g) {
  gfx = g; pixelRatio = g === 'low' ? 1 : Math.min(devicePixelRatio || 1, 1.5);
  renderer.shadowMap.enabled = sun.castShadow = g !== 'low';
  if (g === 'high' && !post) { try { post = new Post(renderer, scene, camera); } catch (e) { console.warn(e); gfx = 'medium'; } }
  resize();
}
const perf = { avg: .016, lvl: 0, cool: 6 };
function perfGuard(dt) {      // if frames stay slow, the quality steps down by itself, so a weak phone is never driven into a freeze or a crash
  if (dt > .3 || document.hidden) return; perf.avg += (dt - perf.avg) * .05; perf.cool -= dt; if (perf.cool > 0 || perf.avg < .052) return; perf.cool = 4; perf.lvl++;
  if (perf.lvl === 1) { pixelRatio = Math.min(pixelRatio, 1); resize(); toast('Performance mode: lower resolution'); }
  else if (perf.lvl === 2) { if (gfx === 'high') gfx = 'medium'; toast('Performance mode: effects reduced'); }
  else if (perf.lvl === 3) { pixelRatio = Math.min(pixelRatio, .75); resize(); sun.castShadow = false; toast('Performance mode: shadows off'); }
}
let frameN = 0;
function draw(dt) { perfGuard(dt); frameN++; if (gfx !== 'high') { renderer.shadowMap.autoUpdate = false; if (frameN & 1) renderer.shadowMap.needsUpdate = true; } else renderer.shadowMap.autoUpdate = true;   // Medium refreshes shadows every other frame
  updateMotes(dt); if (gfx === 'high' && post) post.render(dt); else renderer.render(scene, camera); }
addEventListener('resize', resize); setGfx(gfx);

let sky = null, sunDisc = null, baseFog = 0, baseSun = 1, baseHemi = 1;
// ---------------- time of day ----------------
// A preset only describes the sky, the sun, the fog and the ambient light; the track keeps its own geometry. Dusk and night are built as night tracks (lit windows, lamps, floodlights).
const TOD = {
  dawn:   { skyTop: 0x5a7fc0, skyBot: 0xffb08a, fog: 0xf3c6b0, fogK: 1.7, sun: 0xffa868, sunK: .6, sunDir: [.9, .2, .25], hemiS: 0xffc9a0, hemiG: 0x55603f, hemiK: .8, exposure: 1.02 },
  noon:   { skyTop: 0x2e7be0, skyBot: 0xd6ebfb, fog: 0xdfeaf2, fogK: .9, sun: 0xfff4e0, sunK: 1.15, sunDir: [.08, 1, .12], hemiS: 0xc8e0ff, hemiG: 0x6b7a4a, hemiK: 1.1, exposure: 1 },
  golden: { skyTop: 0x4f78c8, skyBot: 0xffc58a, fog: 0xf5c898, fogK: 1.2, sun: 0xffb25e, sunK: .95, sunDir: [-.85, .28, .35], hemiS: 0xffd2a8, hemiG: 0x6a6a3c, hemiK: .9, exposure: 1.02 },
  dusk:   { skyTop: 0x262a63, skyBot: 0xff7a4a, fog: 0x7c4b5c, fogK: 1.6, sun: 0xff6a35, sunK: .4, sunDir: [-.9, .1, .25], hemiS: 0x8a78c8, hemiG: 0x2e2a3a, hemiK: .75, exposure: 1.08, night: true },
};
const todFull = (base, id) => { if (id === 'night') return THEMES.night; const p = TOD[id]; return Object.assign({}, base, { skyTop: p.skyTop, skyBot: p.skyBot, fog: p.fog, fogD: base.fogD * p.fogK, sun: p.sun, sunI: base.sunI * p.sunK, sunDir: p.sunDir, hemiS: p.hemiS, hemiG: p.hemiG, hemiI: base.hemiI * p.hemiK, exposure: p.exposure, night: !!p.night }); };
window.__todTheme = id => { const base = THEMES[id], t = save.tod || 'default'; if (t === 'default') return base; if (t === 'cycle') return base.night ? base : todFull(base, 'noon'); return todFull(base, t); };
const DYN_LEN = 420, DYN = ['noon', 'golden', 'dusk', 'night'];      // dynamic: noon -> golden hour -> dusk -> night over seven minutes of racing
function dynTheme(base, u) { const k = clamp(u, 0, 2.999), i = Math.floor(k), f = k - i, A = todFull(base, DYN[i]), B = todFull(base, DYN[i + 1]), lc = (x, y) => new THREE.Color(x).lerp(new THREE.Color(y), f), ln = (x, y) => x + (y - x) * f; return { skyTop: lc(A.skyTop, B.skyTop), skyBot: lc(A.skyBot, B.skyBot), fog: lc(A.fog, B.fog), fogD: ln(A.fogD, B.fogD), sun: lc(A.sun, B.sun), sunI: ln(A.sunI, B.sunI), sunDir: [0, 1, 2].map(j => ln(A.sunDir[j], B.sunDir[j])), hemiS: lc(A.hemiS, B.hemiS), hemiG: lc(A.hemiG, B.hemiG), hemiI: ln(A.hemiI, B.hemiI), exposure: ln(A.exposure, B.exposure) }; }
function stepDynamicTime(dt) {
  if (save.tod !== 'cycle' || !R || R.track.def.theme === 'night' || !sky) return; R.dynT = (R.dynT || 0) + dt; const u = clamp(R.dynT / DYN_LEN * 3, 0, 3), th = dynTheme(THEMES[R.track.def.theme], u);
  sky.material.uniforms.top.value.copy(th.skyTop); sky.material.uniforms.bot.value.copy(th.skyBot); scene.fog.color.copy(th.fog); baseFog = th.fogD; baseSun = th.sunI; baseHemi = th.hemiI; sun.color.copy(th.sun); hemi.color.copy(th.hemiS); hemi.groundColor.copy(th.hemiG); renderer.toneMappingExposure = th.exposure; R.sunDir = th.sunDir;
  if (R.flood) R.flood.k = clamp((u - 1.6) / .9, 0, 1); if (!R.lit && u > 1.9) { R.lit = true; for (const c of R.cars) c.setLights(true); }
  if (sunDisc) sunDisc.visible = u < 2.2; if (post) post.bloom.strength = .26 + .34 * clamp(u - 1.5, 0, 1);
}
// Floodlight towers around the circuit: every tower has a lit head and a faint cone of light; only the four nearest ones carry real spotlights, handed over smoothly as you drive.
function buildFloodlights(tr, G) {
  const towers = [], n = tr.n, step = Math.max(8, Math.round(115 / tr.spacing)), hw = tr.def.width * .6, B = hw + tr.def.runoff;
  const poleM = new THREE.MeshStandardMaterial({ color: 0x4a4f58, metalness: .7, roughness: .45 }), headM = new THREE.MeshBasicMaterial({ color: 0xfff3d6 }), coneM = new THREE.MeshBasicMaterial({ color: 0xfff0cc, transparent: true, opacity: .06, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, fog: false });
  for (let i = 25; i < n - 25; i += step) { const q = tr.path[i], side = towers.length % 2 ? 1 : -1, off = B + 3.6, x = q.x + q.tz * side * off, z = q.z - q.tx * side * off, y0 = tr.height(x, z), g = new THREE.Group();
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(.16, .26, 15, 8), poleM); pole.position.y = 7.5; const bar = new THREE.Mesh(new THREE.BoxGeometry(3, .35, .5), poleM); bar.position.y = 15.1;
    g.add(pole, bar); for (let k = -1; k <= 1; k += 1) { const lamp = new THREE.Mesh(new THREE.BoxGeometry(.8, .3, .6), headM); lamp.position.set(k * 1.0, 14.85, 0); g.add(lamp); }
    g.position.set(x, y0, z); g.lookAt(q.x, y0, q.z); g.rotation.x = 0; G.add(g);      // (no visible light cone: its base showed as a ring on the ground)
    towers.push({ x, y: y0 + 15, z, tx: q.x - side * q.tz * 2, tz: q.z + side * q.tx * 2 }); }
  const lights = [0, 1, 2, 3].map(() => { const L = new THREE.SpotLight(0xfff0d8, 0, 80, .9, .65, 1.25); scene.add(L, L.target); L.userData.tw = -1; return L; });
  R.flood = { towers, lights, k: tr.theme.night ? 1 : 0, t: 0 };
}
function stepFloodlights(dt, me) {
  const F = R && R.flood; if (!F) return; F.t -= dt; const want = F.k * 260;
  if (F.t <= 0) { F.t = .25; const order = F.towers.map((t, i) => [(t.x - me.x) ** 2 + (t.z - me.z) ** 2, i]).sort((a, b) => a[0] - b[0]).slice(0, 4).map(o => o[1]); F.near = order;
    for (const L of F.lights) if (!order.includes(L.userData.tw)) { const free = order.find(i => !F.lights.some(Q => Q.userData.tw === i)); if (free !== undefined) { const t = F.towers[free]; L.userData.tw = free; L.position.set(t.x, t.y, t.z); L.target.position.set(t.tx, 0, t.tz); L.intensity = 0; } } }
  for (const L of F.lights) L.intensity += ((L.userData.tw >= 0 ? want : 0) - L.intensity) * Math.min(1, dt * 4);
}
// ---------------- little particles in the air: pollen and dust by day, embers by night, sand in the desert; also drifting through the menu ----------------
let motes = null;
function updateMotes(dt) {
  if (!motes) { const N = 260, g = new THREE.BufferGeometry(), P = new Float32Array(N * 3), V = new Float32Array(N * 3); for (let i = 0; i < N; i++) { P[i * 3] = (Math.random() - .5) * 90; P[i * 3 + 1] = Math.random() * 26; P[i * 3 + 2] = (Math.random() - .5) * 90; V[i * 3] = (Math.random() - .5) * .7; V[i * 3 + 1] = (Math.random() - .3) * .5; V[i * 3 + 2] = (Math.random() - .5) * .7; }
    g.setAttribute('position', new THREE.BufferAttribute(P, 3)); const cv = document.createElement('canvas'); cv.width = cv.height = 32; const k = cv.getContext('2d'), gr = k.createRadialGradient(16, 16, 0, 16, 16, 16); gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(.35, 'rgba(255,255,255,.45)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); k.fillStyle = gr; k.fillRect(0, 0, 32, 32);
    motes = new THREE.Points(g, new THREE.PointsMaterial({ map: new THREE.CanvasTexture(cv), size: .3, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: .4, color: 0xfff4d6, fog: false })); motes.frustumCulled = false; motes.userData.v = V; scene.add(motes); }
  const night = R && R.track ? !!R.track.theme.night : !!arena.on, desert = !!(R && R.track && R.track.def.theme === 'desert'), wet = R ? R.wet || 0 : 0, mat = motes.material;
  mat.color.setHex(night ? 0xffb868 : desert ? 0xe8c98a : 0xfff4d6); mat.size = night ? .45 : .3; mat.opacity = (night ? .85 : .42) * (1 - wet * .9);
  const P = motes.geometry.attributes.position.array, V = motes.userData.v, cx = camera.position.x, cz = camera.position.z, t = performance.now() / 1000;
  for (let i = 0; i < 260; i++) { const a = i * 3; P[a] += (V[a] + Math.sin(t * .7 + i) * .25 + (desert ? 3 : 0)) * dt; P[a + 1] += (V[a + 1] + (night ? .35 : 0)) * dt; P[a + 2] += (V[a + 2] + Math.cos(t * .6 + i * 1.3) * .25) * dt;
    const dx = P[a] - cx; if (dx > 45) P[a] -= 90; else if (dx < -45) P[a] += 90; const dz = P[a + 2] - cz; if (dz > 45) P[a + 2] -= 90; else if (dz < -45) P[a + 2] += 90; if (P[a + 1] > 26) P[a + 1] -= 26; else if (P[a + 1] < 0) P[a + 1] += 26; }
  motes.geometry.attributes.position.needsUpdate = true;
}
// ---------------- wet-road reflections: when it rains, every light on the road (lamps, headlights, brake lights) throws a long soft streak toward the camera ----------------
function makeReflections(tr) {
  const cv = document.createElement('canvas'); cv.width = 32; cv.height = 128; const k = cv.getContext('2d'), g = k.createLinearGradient(0, 0, 0, 128); g.addColorStop(0, 'rgba(255,255,255,.95)'); g.addColorStop(.12, 'rgba(255,255,255,.5)'); g.addColorStop(1, 'rgba(255,255,255,0)'); k.fillStyle = g; k.fillRect(0, 0, 32, 128);
  const gx = k.createLinearGradient(0, 0, 32, 0); k.globalCompositeOperation = 'destination-in'; gx.addColorStop(0, 'rgba(0,0,0,0)'); gx.addColorStop(.5, 'rgba(0,0,0,1)'); gx.addColorStop(1, 'rgba(0,0,0,0)'); k.fillStyle = gx; k.fillRect(0, 0, 32, 128);
  const tex = new THREE.CanvasTexture(cv), geo = new THREE.PlaneGeometry(1.5, 9).translate(0, -4.5, 0).rotateX(-Math.PI / 2), mk = col => new THREE.InstancedMesh(geo, new THREE.MeshBasicMaterial({ map: tex, color: col, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, fog: false, polygonOffset: true, polygonOffsetFactor: -5, polygonOffsetUnits: -5 }), 500);
  const warm = mk(0xffe6b8), red = mk(0xff3a22); for (const mm of [warm, red]) { mm.count = 0; mm.frustumCulled = false; mm.renderOrder = 4; scene.add(mm); }
  const d = new THREE.Object3D(), lamps = tr.lampSpots || []; d.rotation.set(0, (tr.def.camYaw ?? .65) + Math.PI, 0);
  R.refl = { warm, red, d, lamps, yaw: (tr.def.camYaw ?? .65) + Math.PI, tr };
}
function updateRefl() {
  const F = R && R.refl; if (!F) return; const w = R.wet || 0; F.warm.visible = F.red.visible = w > .08; if (w <= .08) return; const d = F.d, tr = F.tr; d.rotation.set(0, (cam.yaw ?? F.yaw - Math.PI) + Math.PI, 0); let nw = 0, nr = 0; const put = (mesh, n, x, z, s) => { d.position.set(x, tr.height(x, z) + .05, z); d.scale.set(s, 1, s * 1.2); d.updateMatrix(); mesh.setMatrixAt(n, d.matrix); };
  const px = R.player.x, pz = R.player.z; for (const q of F.lamps) { if ((q.x - px) ** 2 + (q.z - pz) ** 2 < 6400 && nw < 240) put(F.warm, nw++, q.x, q.z, 1.1); }
  for (const c of R.cars) { if ((c.x - px) ** 2 + (c.z - pz) ** 2 > 6400 || !(R.lit || c.braking)) continue; const s = Math.sin(c.th), co = Math.cos(c.th);
    if (R.lit) for (const sx of [-.7, .7]) if (nw < 480) put(F.warm, nw++, c.x + s * 2.6 + co * sx, c.z + co * 2.6 - s * sx, .8);
    for (const sx of [-.75, .75]) if (nr < 400) put(F.red, nr++, c.x - s * 2.6 + co * sx, c.z - co * 2.6 - s * sx, c.braking ? 1.1 : .55); }
  F.warm.count = nw; F.red.count = nr; F.warm.instanceMatrix.needsUpdate = true; F.red.instanceMatrix.needsUpdate = true; F.warm.material.opacity = Math.min(.75, w * .8); F.red.material.opacity = Math.min(.75, w * .85);
  for (const [mm, r0, m0] of R.roadMats || []) mm.envMapIntensity = 1 + 1.8 * w;      // the road also mirrors the sky and the glow of the city
}
function applyTheme(th) {
  if (sky) { scene.remove(sky); sky.geometry.dispose(); sky.material.dispose(); sky = null; }
  if (sunDisc) { scene.remove(sunDisc); sunDisc.geometry.dispose(); sunDisc.material.dispose(); sunDisc = null; }
  if (post) { post.bloom.strength = th && th.night ? .6 : .26; post.u.sunVis.value = 0; post.u.speed.value = 0; post.u.wet.value = 0; }
  if (!th) { scene.background = new THREE.Color(0x17181c); scene.fog = null; hemi.color.set(0xdfe8ff); hemi.groundColor.set(0x30323a); hemi.intensity = .7; sun.color.set(0xffffff); sun.intensity = 2.2; scene.environmentIntensity = .9; renderer.toneMappingExposure = 1; return; }
  sky = makeSky(th); scene.add(sky); scene.background = null; scene.fog = new THREE.FogExp2(th.fog, th.fogD);
  hemi.color.set(th.hemiS); hemi.groundColor.set(th.hemiG); hemi.intensity = th.hemiI; sun.color.set(th.sun); sun.intensity = th.sunI;
  scene.environmentIntensity = th.night ? .25 : .5; renderer.toneMappingExposure = th.exposure;
  baseFog = th.fogD; baseSun = th.sunI; baseHemi = th.hemiI;
  if (!th.night) { sunDisc = new THREE.Mesh(new THREE.CircleGeometry(120, 24), new THREE.MeshBasicMaterial({ color: new THREE.Color(th.sun).multiplyScalar(16), fog: false })); sunDisc.frustumCulled = false; scene.add(sunDisc); }
}

// ---------------- garage (menu backdrop) ----------------
const garage = new THREE.Group(); scene.add(garage);
{
  const floor = new THREE.Mesh(new THREE.CylinderGeometry(4.6, 4.8, .25, 48), new THREE.MeshStandardMaterial({ color: 0x23252b, metalness: .5, roughness: .6 }));
  floor.position.y = -.125; floor.receiveShadow = true; garage.add(floor);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(4.75, .06, 8, 64), new THREE.MeshBasicMaterial({ color: 0xffc21a })); ring.rotation.x = Math.PI / 2; ring.position.y = .01; garage.add(ring);
  const ground = new THREE.Mesh(new THREE.CircleGeometry(60, 32), new THREE.MeshStandardMaterial({ color: 0x17181c, roughness: .9 })); ground.rotation.x = -Math.PI / 2; ground.position.y = -.25; ground.receiveShadow = true; garage.add(ground);
}
let garageCar = null;
function showGarageCar() {
  if (garageCar) { garage.remove(garageCar.root); garageCar.dispose(); }
  const spec = CARS[sel.car]; garageCar = new Car(spec, paintOf(spec.id), '', upOf(spec.id), lookOf(spec.id), tuneSet(spec.id), true); garageCar.root.rotation.y = garageSpin; garageCar.root.scale.setScalar(1 / TUNE.toy.w); garage.add(garageCar.root); carThumb();
}
let garageSpin = .6, tuneFocus = ''; const gDrag = { on: false, x: 0, v: 0, hold: 0 };
addEventListener('pointerdown', e => { if (!garageCar || R || arena.on || e.target.closest('button, input, select, label, a, textarea, .card, #lookRows, #tuneRows, #nav, #startBtn')) return; gDrag.on = true; gDrag.x = e.clientX; gDrag.v = 0; });      // drag the car round with a finger or the mouse
addEventListener('pointermove', e => { if (!gDrag.on) return; const dx = e.clientX - gDrag.x; gDrag.x = e.clientX; garageSpin += dx * .012; gDrag.v = dx * .012; });
addEventListener('pointerup', () => { if (gDrag.on) { gDrag.on = false; gDrag.hold = 2.5; } }); addEventListener('pointercancel', () => { gDrag.on = false; });
// What a set-up does, in numbers. Each figure is worked out from the car's real data (power, mass, drag, tyre grip, downforce)
// for the stock set-up and for the current one, so every click shows what it buys and what it costs.
const COMP_LETTER = { soft: 'S', medium: 'M', hard: 'H', rain: 'W', gravel: 'G' }, COMP_ORDER = ['auto', 'soft', 'medium', 'hard', 'rain', 'gravel'];
// Fit a compound: new tyres come off the blankets already warm. 'rain' makes the car a wet-tyre car.
function fitTyres(car, comp) { car.tn = tuneOf(car.spec, Object.assign({}, car.tuneBase, { tyre: comp })); car.wear = car.tn.wear; car.wetTyres = comp === 'rain'; car.tT = 58; }
function nextCompFor(car) { const w = R.wet > .4 || R.rainAt - R.t < 20; if (R.nextComp && R.nextComp !== 'auto') return R.nextComp; return w ? 'rain' : car.tn.comp === 'rain' ? 'medium' : car.tn.comp; }
function cycleComp() { if (!R || !R.player || R.attract) return; R.nextComp = COMP_ORDER[(COMP_ORDER.indexOf(R.nextComp || 'auto') + 1) % COMP_ORDER.length]; radio(R.nextComp === 'auto' ? 'Tyres for the next stop: the crew will choose for the weather.' : 'Next stop: ' + R.nextComp + ' tyres.'); }
let _dbk = null; function debrisKit() { return _dbk || (_dbk = [
  { g: new THREE.BoxGeometry(.16, .02, .12), m: new THREE.MeshStandardMaterial({ color: 0xa6d6ff, roughness: .1, metalness: .3, transparent: true, opacity: .8 }) },        // glass
  { g: new THREE.BoxGeometry(.26, .09, .18), m: new THREE.MeshStandardMaterial({ color: 0x141416, roughness: .9 }) },                                                         // rubber
  { g: new THREE.BoxGeometry(.4, .05, .07), m: new THREE.MeshStandardMaterial({ color: 0x2a2d33, roughness: .5, metalness: .5 }) },                                           // trim
  { g: new THREE.BoxGeometry(.22, .14, .07), m: new THREE.MeshStandardMaterial({ color: 0xb8bcc4, roughness: .3, metalness: .8 }) } ]); }                                    // a mirror
// ---------------- AI cars: modifications by difficulty ----------------
// One number for how fast a car is round a lap: top speed, cornering, launch and braking, from the same figures the Tuning screen shows.
function perfScore(spec, up, tn) { const f = tuneFigures(spec, tn, up); return .3 * f[0][1] / 220 + .38 * f[2][1] / 1.6 + .2 * 4.5 / Math.max(2, f[1][1]) + .12 * 32 / Math.max(15, f[3][1]); }
// Easy: random modifications. Normal: the build whose performance matches the player's car. Hard: the best build, up to a little above the player's performance (fully modified when the player is).
function aiLoadout(spec, diff, fixed) {
  const comps = ['soft', 'medium', 'hard'], rnd = a => a[Math.random() * a.length | 0], noUp = { eng: 0, tyre: 0, nitro: 0, armor: 0 };
  if (fixed) return { up: undefined, tune: {}, wing: 0, split: 0, score: 0 };
  if (diff === 0) { const up = { eng: Math.random() * 3 | 0, tyre: Math.random() * 3 | 0, nitro: 0, armor: 0 }, tune = { gear: rnd([-1, 0, 1]), aero: rnd([-1, 0, 1]), brake: 0, susp: 0, split: 0, diff: 0, tyre: rnd(comps) }; return { up, tune, wing: Math.random() * 4 | 0, split: Math.random() * 2 | 0, score: perfScore(spec, up, tune) }; }
  const pl = CARS.find(c => c.id === save.car), pscore = perfScore(pl, upOf(pl.id), tuneSet(pl.id)), target = diff === 1 ? pscore * (.97 + Math.random() * .06) : pscore * 1.1;
  let best = null; for (let e = 0; e <= 3; e++) for (let t = 0; t <= 3; t++) for (let a = -2; a <= 2; a++) for (let g = -2; g <= 2; g++) for (const c of comps) { const up = { eng: e, tyre: t, nitro: 0, armor: 0 }, tune = { gear: g, aero: a, brake: 0, susp: 0, split: 0, diff: 0, tyre: c }, s = perfScore(spec, up, tune), err = Math.abs(s - target) + (diff === 2 ? -.004 * (e + t) : .0015 * (e + t)); if (!best || err < best.err) best = { err, up, tune, score: s }; }
  return { bop: diff === 2 ? Math.min(1.18, Math.max(1, target / best.score)) : 1, up: best.up, tune: best.tune, wing: best.up.eng >= 2 || best.tune.aero >= 1 ? 2 + (Math.random() * 2 | 0) : 0, split: best.up.tyre >= 2 ? 1 : 0, score: best.score, target };
}
function tuneFigures(spec, tn, up) {
  const t = tuneOf(spec, tn), m = spec.mass, g = 9.81, P = spec.pw * (1 + .06 * (up.eng || 0)), mu = spec.grip * t.grip * (1 + .04 * (up.tyre || 0)), df = spec.aero * t.aero, drag = .6 * spec.cda * (1 + .09 * (tn.aero || 0));
  let v = 60; for (let i = 0; i < 40; i++) v = Math.cbrt(Math.max(1, P - m * (.12 + .006 * v) * v) / drag); const top = Math.min(v, spec.top * t.top * 1.02);
  const share = spec.drive === 'awd' ? 1 : spec.drive === 'rwd' ? 1 - spec.fw + .12 : spec.fw - .08, a0 = Math.min(spec.acc * t.acc, mu * g * share), v1 = P / (m * a0), sprint = v1 < 27.8 ? v1 / a0 + m * (27.8 ** 2 - v1 ** 2) / (2 * P) : 27.8 / a0;
  const cg = mu * (1 + df * 41.7 ** 2 / (m * g)), dec = Math.min(spec.brake * g, mu * g * (1 + df * 27.8 ** 2 * .5 / (m * g)));
  return [['Top speed', top * 3.6, 'km/h', 1, 0], ['0–100 km/h', sprint, 's', -1, 2], ['Cornering at 150 km/h', cg, 'g', 1, 2], ['Braking 100–0', 27.8 ** 2 / (2 * dec), 'm', -1, 1], ['Downforce at 200 km/h', df * 55.6 ** 2 / g, 'kg', 1, 0], ['Tyre life', 100 / t.wear, '%', 1, 0], ['Brake balance, front', t.bias * 100, '%', 0, 0], ['Roll stiffness, front', t.rollF * 100, '%', 0, 0], ['Exit traction', (1 - (1 - t.diff) * .2) * 100, '%', 1, 0], ['Nose push on power', t.diff * 10, '%', -1, 1], ['Front torque share', (spec.drive === 'awd' ? t.split : spec.drive === 'fwd' ? 1 : 0) * 100, '%', 0, 0]];
}
function tuneTable(spec, tn, up) {
  const now = tuneFigures(spec, tn, up), base = tuneFigures(spec, { gear: 0, aero: 0, brake: 0, susp: 0, tyre: 'medium' }, up), hot = { gear: [0, 1], aero: [0, 2, 4], brake: [3, 6], susp: [7], tyre: [2, 3, 5], diff: [8, 9, 2], split: [10, 9, 2] }[tuneFocus] || [];
  return '<h3>' + tx('Effect of this set-up') + '</h3><table class="figs"><tr><th></th><th>' + tx('Stock') + '</th><th>' + tx('Now') + '</th><th></th></tr>' + now.map(([n, v, u, dir, dp], i) => { const d = v - base[i][1], show = Math.abs(d) > (dp ? .005 : .5), good = dir === 0 ? '' : d * dir > 0 ? 'up' : 'down';
    return '<tr class="' + (hot.includes(i) ? 'hot' : '') + '"><td>' + tx(n) + '</td><td>' + base[i][1].toFixed(dp) + '</td><td><b>' + v.toFixed(dp) + '</b> ' + u + '</td><td class="' + (show ? good : '') + '">' + (show ? (d > 0 ? '+' : '−') + Math.abs(d).toFixed(dp) : '·') + '</td></tr>'; }).join('') + '</table>';
}

// ---------------- input ----------------
const keys = {}, touch = {};
const audio = new GameAudio(); audio.on = !save.muted;
// calming interface sounds: a soft tick on hover, a warm pop on press, rising notes to confirm, falling notes to go back
document.addEventListener('mouseover', e => { const b = e.target.closest && e.target.closest('button, .tile, .card, [data-tab]'); if (b && !b.disabled && b !== window.__lastHover) { window.__lastHover = b; audio.ui('hover'); } }, true);
document.addEventListener('click', e => { const b = e.target.closest && e.target.closest('button, .tile, .card, [data-tab]'); if (!b) return; audio.ui(b.id === 'startBtn' || b.classList.contains('primary') ? 'confirm' : /back|close|cancel|done|resume/i.test(b.id + ' ' + b.textContent) ? 'back' : b.dataset.tab ? 'tab' : 'click'); }, true);
addEventListener('keydown', e => {
  if (e.target.tagName === 'INPUT') return;
  keys[e.code] = true; audio.init();
  if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(e.code)) e.preventDefault();
  if (!racing()) return;
  if (e.code === 'Escape' || e.code === 'KeyP') togglePause();
  if (e.code === 'KeyR') respawn(R.player, true);
  if (e.code === 'KeyM') setMuted(!save.muted);
  if (e.code === 'KeyH') audio.horn();
  if (['Digit1', 'Digit2', 'Digit3'].includes(e.code)) setPace(+e.code.slice(5) - 1);
  if (save.dev) { const me = R.player;      // developer keys
    if (e.code === 'F2') { me.repair(); me.fuel = 1; toast('DEV: repaired and refuelled'); }
    if (e.code === 'F3') { R.rainAt = R.wet > 0 ? Infinity : 0; if (R.wet > 0) { R.wet = 0; R.track.wet = 0; } toast('DEV: rain toggled'); }
    if (e.code === 'F4') { me.hitL = [.6, me.zf]; me.hitN = [-Math.sin(me.th), -Math.cos(me.th)]; me.hitX = me.x; me.hitZ = me.z; impact(me, 18); toast('DEV: front impact'); }
    if (e.code === 'F6') { me.fuel = .04; toast('DEV: fuel nearly empty'); }
    if (e.code === 'F7') { me.prog += R.track.n - 30; toast('DEV: skipped to the end of the lap'); }
    if (e.code.startsWith('F')) e.preventDefault(); }
  if (e.code === 'KeyT') $('tele').hidden = !$('tele').hidden;
  if (e.code === 'KeyC') cycleComp();
});
addEventListener('keyup', e => { keys[e.code] = false; });
addEventListener('blur', () => { for (const k in keys) keys[k] = false; });
const inp = { steer: 0, throttle: 0, brake: 0, hand: false, nitro: false };
function readInput() {
  let left = keys.ArrowLeft || keys.KeyA || touch.left, right = keys.ArrowRight || keys.KeyD || touch.right;
  inp.steer = ((left || touch.left) ? 1 : 0) - ((right || touch.right) ? 1 : 0);      // touch: two big buttons, full lock while held (the car's own steering speed smooths it)
  inp.throttle = keys.ArrowUp || keys.KeyW || touch.gas ? 1 : 0; inp.brake = keys.ArrowDown || keys.KeyS || touch.brake ? 1 : 0;
  inp.hand = !!(keys.Space || touch.hand); inp.nitro = !!(keys.ShiftLeft || keys.ShiftRight || keys.KeyN || touch.nitro);
  const gp = navigator.getGamepads ? [...navigator.getGamepads()].find(g => g) : null;
  if (gp) {
    if (Math.abs(gp.axes[0]) > .12) inp.steer = -gp.axes[0];
    inp.throttle = Math.max(inp.throttle, gp.buttons[7]?.value || 0); inp.brake = Math.max(inp.brake, gp.buttons[6]?.value || 0);
    inp.hand = inp.hand || !!gp.buttons[0]?.pressed; inp.nitro = inp.nitro || !!gp.buttons[2]?.pressed || !!gp.buttons[5]?.pressed;
  }
  if (isTouch && save.autoGas && !gp && !inp.brake) inp.throttle = 1;      // phones: the car drives itself forward, you steer and brake
  return inp;
}
if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
  $('touch').hidden = false;
  for (const b of document.querySelectorAll('#touch .t')) {
    const set = v => e => { e.preventDefault(); touch[b.dataset.k] = v; b.classList.toggle('on', v); audio.init(); if (v && navigator.vibrate) navigator.vibrate(7); };
    b.addEventListener('pointerdown', e => { try { b.setPointerCapture(e.pointerId); } catch (x) {} set(true)(e); });      // captured: a thumb that drifts off the pedal keeps it pressed
    for (const ev of ['pointerup', 'pointercancel', 'lostpointercapture']) b.addEventListener(ev, set(false));
  }
}
addEventListener('contextmenu', e => { if (isTouch) e.preventDefault(); });
function setMuted(m) { save.muted = m; persist(); audio.setMuted(m); $('muteBtn').textContent = m ? 'Sound off' : 'Sound on'; }

// ---------------- small UI helpers ----------------
let toastT = 0;
function toast(t) { const el = $('toast'); el.textContent = tx(t); el.classList.add('show'); clearTimeout(toastT); toastT = setTimeout(() => el.classList.remove('show'), 2200); }
let msgT = 0;
function flash(t, warn = false, hold = 1500) { if (R && R.attract) return; const el = $('msg'); el.textContent = tx(t); el.className = 'show' + (warn ? ' warn' : ''); clearTimeout(msgT); if (hold) msgT = setTimeout(() => el.className = '', hold); }
const show = (id, on) => { $(id).hidden = !on; };

// ---------------- race state ----------------
let R = null, paused = false, camMode = 0, shake = 0, acc = 0;
const CAMS = [{ name: 'Circuit', fixed: true, d: 48, h: 40, fov: 38 }];   // one camera: the far, fixed-heading race view
let hitPulse = 0, fovPunch = 0; const ambAt = { position: new THREE.Vector3() };
const cam = { yaw: 0, pos: new THREE.Vector3(), look: new THREE.Vector3(), fov: 55 };
const H = 1 / 120;
const NAMES = ['Omar', 'Youssef', 'Karim', 'Nour', 'Laila', 'Tarek', 'Mona', 'Ziad', 'Hana', 'Sherif', 'Salma', 'Hassan', 'Farida', 'Adel'];
let raceToken = 0;
const TIPS = ['Tap the handbrake (Space) on corner entry to kick the tail out.', 'Drifting refills your nitro much faster than driving straight.', 'Lift off early — the kerbs are fine, the grass is not.', 'Longer drifts multiply your score. Touch a wall and the combo is gone.', 'Press C to change camera, R to get back on track.'];

function placeOnGrid(car, k) { const s = R.track.gridSlot(k); car.reset(s.x, s.z, s.th); car.idx = s.idx; car.prog = s.idx - R.track.n; car.lap = -1; car.lapStart = 0; car.laps = []; car.finished = false; car.finishTime = null; car.wrong = 0; }
function respawn(car, manual) {
  if (R && manual && car.stranded && R.state === 'go') return tow(car);
  if (!R || (manual && (R.state !== 'go' || R.t - (car.lastReset || -9) < 1.5))) return;
  const p = R.track.path[car.idx], n = car.nitro; car.reset(p.x, p.z, Math.atan2(p.tx, p.tz)); car.nitro = n; car.lastReset = R.t; car.holdT = R.t + TUNE.reset.penalty; if (car === R.player && manual) flash('Reset  +' + TUNE.reset.penalty + 's', true, 1300);
  if (car === R.player) { cam.yaw = car.th; R.D.combo = 0; }
}

async function startRace(o) {
  menuBg.stop(); arenaStop(); if (R) endRace(); const token = ++raceToken; window.__crowdK = gfx === 'high' ? .6 : gfx === 'medium' ? .4 : .22;
  if (!o.attract) { audio.init(); show('menu', false); show('results', false); show('pause', false); show('loading', true); }
  const def = TRACKS.find(t => t.id === o.track);
  $('loadName').textContent = def.name; $('loadBar').style.width = '4%'; $('loadTip').textContent = TIPS[Math.random() * TIPS.length | 0];
  garage.visible = false; peerLoaded = false;
  let track;
  try { track = await loadTrack(o.track, f => { $('loadBar').style.width = Math.round(4 + f * 92) + '%'; }); }
  catch (e) { console.error(e); show('loading', false); toMenu(); toast('Could not load that track'); return; }
  if (token !== raceToken) { track.dispose(); return; }
  if (gfx === 'low' && track.fancyLights) for (const l of track.fancyLights) l.visible = false;
  scene.add(track.group); applyTheme(track.theme);
  R = { ...o, track, cars: [], ais: new Map(), t: 0, state: 'wait', countT: 3.6, drift: 0, D: { combo: 0, time: 0, mult: 1, grace: 0 }, fx: null, sendT: 0, waitT: 0, bestThisRace: null };
  R.rules = o.rules || 'circuit'; R.arc = R.rules === 'arcade' || o.mode === 'drift';
  R.fx = { smoke: new Particles(scene, 2600), glow: new Particles(scene, 900, true), skids: new Skids(scene), sparks: new Sparks(scene) }; applyDmg(); R.ambient = new Ambient(scene); R.debris = new Debris(scene); R.props = new Props(scene); R.people = new Marshals(scene, track, {}); for (const q of track.propSpots || []) if (q.type === 'bale') R.props.add(q.type, q.x, q.z, track.height(q.x, q.z) + (q.lift || 0), q.r || 0, q.stack || 0);
  const spec = CARS.find(c => c.id === save.car), up = upOf(spec.id), me = R.player = new Car(spec, paintOf(spec.id), save.name, up, lookOf(spec.id), tuneSet(spec.id)); me.assistK = TUNE.assist[save.assist] ?? .7; me.driftMode = o.mode === 'drift'; if (me.driftMode) me.assistK = .22;      // drift: a counter-steer aid stays on, so the car holds a big angle instead of spinning me.tc = save.tc; me.abs = save.abs; me.steerK = save.sens; me.isPlayer = true; me.driftable = true; me.dmgScale = 1 - .18 * up.armor;
  const lane = Math.max(1.5, (def.width ? def.width / 2 : 6.2) - 2.6);
  const lineMax = Math.max(lane, (def.width ? def.width * .6 : 7.4) - 2.9), mkAI = (skill) => ({ skill, wide: lane * .7, lane: (Math.random() - .5) * lane, max: lineMax, care: o.rules === 'arcade' ? .7 : 1.3, off: 0, inp: { steer: 0, throttle: 0, brake: 0, hand: false, nitro: false }, boost: 1 });
  R.ais.set(me, mkAI(.95));     // used when the player's car goes on autopilot after the flag
  if (o.mode === 'race') {
    const base = [.80, .90, 1.0][o.diff], pool = (o.rules !== 'arcade' ? CARS.filter(c => c.klass === spec.klass) : CARS.filter(c => c.id !== spec.id)).sort(() => Math.random() - .5), names = [...NAMES].sort(() => Math.random() - .5);
    const riv = o.rivals, count = riv ? riv.length : (o.nRivals || 5), livUsed = new Set([save.car]);      // each car keeps its own real livery unless another on the grid already wears it
    for (let i = 0; i < count; i++) {
      const s = riv ? CARS.find(c => c.id === riv[i].car) : pool[i % pool.length], dupe = !riv && livUsed.has(s.id), LO = aiLoadout(s, o.diff, !!riv), car = new Car(s, riv && riv[i].paint != null ? riv[i].paint : dupe ? PAINTS[(i * 2 + 1 + (Math.random() * 2 | 0)) % PAINTS.length] : s.color, riv ? riv[i].name : names[i], LO.up, { wing: s.wing ? 0 : LO.wing, split: LO.split, rim: 0, ai: 1 }, Object.assign(LO.tune.tyre ? LO.tune : { tyre: ['soft', 'medium', 'medium', 'medium', 'hard'][Math.random() * 5 | 0] }, o.weather === 'rain' ? { tyre: 'rain' } : {})); livUsed.add(s.id);
      car.loadout = LO; if (LO.bop > 1.005) { car.bopG = (car.bopG || 1) * Math.min(1.12, LO.bop); car.tn.acc *= Math.min(1.2, LO.bop); }      // Hard: a car that cannot reach the player's level with upgrades alone gets a balance-of-performance boost, so the field is always a real challenge
      R.ais.set(car, mkAI(riv ? riv[i].skill : base + (4 - i) * .012 + Math.random() * .015)); car.assistK = .7; R.cars.push(car); placeOnGrid(car, i);
    }
    R.cars.push(me); placeOnGrid(me, count);
  } else if (o.mode === 'online') {
    R.cars.push(me); placeOnGrid(me, isHost ? 0 : 1);
    if (peer) { const ps = CARS.find(c => c.id === peer.car) || CARS[0], rc = R.remote = new Car(ps, peer.paint ?? ps.color, peer.name || 'Rival', peer.up, peer.look); rc.isRemote = true; rc.look = lookKey(peer); R.cars.push(rc); placeOnGrid(rc, isHost ? 1 : 0); }
    room.send({ k: 'me', i: myInfo() });
  } else { R.cars.push(me); placeOnGrid(me, 0); }
  for (const c of R.cars) { scene.add(c.root); c.y = track.height(c.x, c.z); c.render(.016, track); }
  setupExtras(); if (!o.attract) audio.music(false); hudCache.cond = '';
  cam.yaw = me.th; cam.pos.set(me.x - Math.sin(me.th) * 30, me.y + 22, me.z - Math.cos(me.th) * 30); cam.look.set(me.x, me.y, me.z);
  buildMini(); $('hPosOf').textContent = '/' + R.cars.length; $('hLapOf').textContent = '/' + R.laps; $('order').innerHTML = ''; R.orderKey = '';
  if ($('paceBars')) { $('paceBars').innerHTML = ''; $('paceBars').hidden = true; } $('hBest').textContent = save.best[def.id] ? fmt(save.best[def.id]) : '—'; $('hSec').textContent = ''; $('hSec').className = ''; $('hDelta').textContent = '';
  const solo = R.cars.length < 2; $('order').hidden = solo; $('hPosBox').style.visibility = solo ? 'hidden' : 'visible';
  show('hPingRow', o.mode === 'online'); show('hArc', R.arc); document.querySelector('#touch .n').hidden = R.rules !== 'arcade'; for (const k in hudCache) delete hudCache[k];
  show('loading', false); show('hud', !o.attract); paused = false; acc = 0; last = performance.now(); audio.quiet = !!o.attract; audio.setCar(spec);
  if (o.attract) { R.attract = true; R.demo = true; R.state = 'go'; return; }
  if (o.mode === 'online') { room.send({ k: 'loaded' }); flash('Waiting for rival…', false, 0); if (!peer) beginCountdown(); else checkGo(); }
  else beginCountdown();
}
function beginCountdown() { if (!R || R.state !== 'wait') return; R.state = 'count'; R.countT = 3.6; R.lightN = 0; $('msg').className = ''; $('lights').classList.add('show'); for (const l of $('lights').children) l.className = ''; }
function checkGo() { if (R && R.mode === 'online' && isHost && R.state === 'wait' && peerLoaded) { room.send({ k: 'go' }); beginCountdown(); } }

function endRace() {
  if (R && R.people) { R.people.dispose(); R.people = null; }
  if (R && R.refl) { scene.remove(R.refl.warm, R.refl.red); R.refl = null; }
  if (R && R.fx && R.fx.sparks) scene.remove(R.fx.sparks.mesh);
  if (R && R.flood) { for (const L of R.flood.lights) { scene.remove(L, L.target); L.dispose && L.dispose(); } R.flood = null; }
  if (!R) return;
  for (const c of R.cars) { scene.remove(c.root); c.dispose(); }
  for (const p of [R.fx.smoke, R.fx.glow]) { scene.remove(p.points); p.geo.dispose(); p.mat.dispose(); }
  for (const L of [...(R.spots || []), ...(R.glows || [])]) { scene.remove(L); if (L.target) scene.remove(L.target); L.dispose(); }
  scene.remove(R.fx.skids.mesh); R.fx.skids.geo.dispose(); R.ambient.dispose(); R.debris.dispose(); R.props.dispose(); if (R.sc) { scene.remove(R.sc.car.root); R.sc.car.dispose(); R.sc = null; }
  scene.remove(R.track.group); R.track.dispose(); R = null; audio.silence();
  show('hud', false); show('pause', false); show('results', false); $('lights').classList.remove('show'); $('msg').className = '';
}
function toMenu() { endRace(); menuView = ''; if (sel.tab === 'career') { sel.ev = firstOpen(); sel.ch = EVENTS[sel.ev].ci; } applyTheme(null); garage.visible = true; show('menu', true); refreshMenu(); audio.music(true); }
function togglePause() { if (!R || R.state === 'over') return; paused = !paused; show('pause', paused); $('zoomVal').textContent = Math.round(save.zoom / 1.5 * 100) + '%'; if (paused) audio.silence(); else last = performance.now(); if (R.mode === 'online') paused = false; }

// ---------------- per-frame race update ----------------
function progress(car) {
  if (car.out) return;
  const tr = R.track, n = tr.n, ni = tr.nearest(car.x, car.z, car.idx); let d = ni - car.idx; if (d > n / 2) d -= n; if (d < -n / 2) d += n;
  car.idx = ni; car.prog += d;
  if (car === R.player && R.state === 'go' && car.lap >= 0) {          // live gap to your best lap, sampled at 40 points round the circuit
    const b = Math.min(39, Math.floor((((car.prog % n) + n) % n) / n * 40)), lt = R.t - car.lapStart, ref = save.trace[tr.def.id]; if (!car.trace) car.trace = [];
    if (b !== car.tb) { car.tb = b; car.trace[b] = lt; if (ref && ref[b] != null) { const dlt = lt - ref[b], el = $('hDelta'); el.textContent = (dlt < 0 ? '−' : '+') + Math.abs(dlt).toFixed(2); el.className = dlt < 0 ? 'good' : 'slow'; } }
  }
  if (car === R.player && R.state === 'go' && car.lap >= 0) {          // three timed sectors per lap
    const sec = Math.min(2, Math.floor((((car.prog % n) + n) % n) / (n / 3)));
    if (sec !== car.sec) { if (car.sec != null && d > 0 && sec === (car.sec + 1) % 3) sectorDone(car, car.sec); car.sec = sec; car.secStart = R.t; }
  }
  const done = Math.floor(car.prog / n);
  if (done > car.lap && R.state !== 'count' && R.state !== 'wait') {
    const first = car.lap < 0; car.lap = done;
    if (!first) { const lt = (R.t - car.lapStart) * 1000; car.laps.push(lt); if (car === R.player) onPlayerLap(lt); if (R.elim && R.state === 'go' && rank().filter(c => !c.out)[0] === car) knockout(); }
    if (car.fuelLap != null && car.fuelLap > car.fuel) car.fpl = car.fuelLap - car.fuel; car.fuelLap = car.fuel;      // fuel used per lap, for strategy
    car.lapStart = R.t;
    if (car.lap >= R.laps && !car.finished) { car.finished = true; car.finishTime = R.t * 1000; if (car === R.player) finishPlayer(); }
  }
}
// Safety car (Professional races). A heavy crash or a car being towed brings it out: it joins ahead of the leader, everyone is held
// to its speed and closes up behind it, then it pulls off and the race goes green again.
function safetyCar(why) {
  if (!R || R.sc || !R.pro || R.mode !== 'race' || R.state !== 'go' || R.elim || R.cars.length < 4 || (R.scN || 0) >= 2 || R.t - (R.scT || -99) < 50) return;
  const lead = rank()[0]; if (lead.lap >= R.laps - 1 || !R.ais.size) return; const tr = R.track, i = (lead.idx + Math.round(60 / tr.spacing)) % tr.n, p = tr.path[i], th = Math.atan2(p.tx, p.tz);
  const car = new Car(CARS.find(c => c.id === 'E30'), 0xf3f4f6, 'Safety car', undefined, { wing: 0 }); car.reset(p.x, p.z, th); car.vx = Math.sin(th) * 18; car.vz = Math.cos(th) * 18; car.idx = i; car.fuelK = 0; car.wear = 0; car.dmgScale = 0; car.partK = 0; car.setLights(true); scene.add(car.root);
  const bar = new THREE.Mesh(new THREE.BoxGeometry(1.5, .12, .3), new THREE.MeshBasicMaterial({ color: 0xffa200 })); bar.position.y = car.top + .1; car.root.add(bar);
  const ai = Object.assign({}, R.ais.values().next().value, { brain: null, pitT: 0, lane: 0, off: 0, skill: .8, care: 1.5, inp: { steer: 0, throttle: 0, brake: 0, hand: false, nitro: false } });
  R.sc = { car, ai, bar, t: 0, dur: 24 }; R.scN = (R.scN || 0) + 1; for (const c of R.cars) c.capV = 21; flash('Safety car', true, 2600); radio('Safety car is out' + (why ? ' for ' + why : '') + '. Hold position, no overtaking.', true); audio.beep(440, .5);
}
function safetyTick(dt) {
  const S = R.sc, tr = R.track, me = R.player, c = S.car; S.t += dt; c.idx = tr.nearest(c.x, c.z, c.idx); aiDrive(c, tr, S.ai, R.cars, dt);
  const going = S.t < S.dur; if (going && c.speed > 17.5) S.ai.inp.throttle = 0; let n = Math.min(6, Math.max(1, Math.round(dt / H))); while (n--) { c.step(H, S.ai.inp, tr, true, going ? 1 : 1.3); for (const o of R.cars) if (!o.out && !o.isRemote) c.bump(o, false); }
  c.render(dt, tr, 1); c.effects(dt, R.fx, tr, 1); S.bar.material.color.setHex(Math.floor(S.t * 5) % 2 ? 0xffa200 : 0x553300);
  const gap = ((c.idx - me.idx + tr.n) % tr.n) * tr.spacing; me.capV = going ? (gap > tr.len / 2 ? 9 : 21) : 0;                      // if you pass it you are held back until it is ahead again
  if (going) setTxt('hEvent', tx('Safety car') + ' · ' + tx('no overtaking'));
  else if (!S.green) { S.green = true; setFlag('green', 3); for (const o of R.cars) o.capV = 0; flash('Green flag', false, 1800); radio('Safety car in this lap. Green, green, green!'); setTxt('hEvent', ''); audio.beep(880, .5); }
  if (S.t > S.dur + 5) { scene.remove(c.root); c.dispose(); R.sc = null; R.scT = R.t; }
}
// ---------------- race rules (Professional) ----------------
// Track limits: all four wheels off the track is a strike; two warnings, then 5 seconds each time. Causing a collision by running
// into the car ahead: one warning, then 5 seconds. Overtaking under the safety car: 5 seconds. Blue flags: a lapped car must let
// the leaders through. Penalties are added to race time, so they can cost places at the flag.
{ const _bump = Car.prototype.bump; Car.prototype.bump = function (o, kin) { const v = _bump.call(this, o, kin); if (v > 0) { this.bumpV = v; this.bumpO = o; o.bumpV = v; o.bumpO = this; } return v; }; }
function setFlag(kind, sec = 3) { R.flag = kind; R.flagT = sec; }
function penalise(car, sec, why) { car.pen = (car.pen || 0) + sec; if (car === R.player) { flash('+' + sec + 's ' + tx('penalty'), true, 1900); radio(why + ' ' + sec + '-second penalty.', true); setFlag('pen', 4); audio.beep(300, .5); } }
function warnCar(car, why) { if (car === R.player) { radio(why, true); setFlag('warn', 4); audio.beep(520, .25); } }
function rulesTick(dt) {
  const me = R.player, tr = R.track;
  for (const c of R.cars) { if (c.out || c.isRemote || c.finished) continue;
    const off = c.speed > 12 && !c.inPit && c.wsurf.every(q => q === 0); c.offT = off ? (c.offT || 0) + dt : 0;
    if (c.offT > .45 && R.t - (c.tlT || -9) > 5) { c.tlT = R.t; c.tl = (c.tl || 0) + 1; if (c.tl >= 3) penalise(c, 5, 'Track limits again.'); else warnCar(c, 'Track limits, warning ' + c.tl + ' of 2. Keep a wheel on the track.'); }
    if (c.bumpV > 9 && c.bumpO && !c.bumpO.isPace && R.t - (c.ctT || -9) > 4) { const o = c.bumpO, f = (o.x - c.x) * Math.sin(c.th) + (o.z - c.z) * Math.cos(c.th); if (f > 2 && c.speed > o.speed) { c.ctT = R.t; c.ct = (c.ct || 0) + 1; if (c.ct >= 2) penalise(c, 5, 'Causing a collision.'); else warnCar(c, 'Contact with the car ahead. Next one is a penalty.'); } } c.bumpV = 0;
    c.blue = false; for (const o of R.cars) if (o !== c && !o.out && o.prog - c.prog > tr.n * .9) { const d = ((o.idx - c.idx + tr.n) % tr.n); if (d > tr.n - 22) { c.blue = true; break; } }        // a car a lap ahead is right behind
    if (c.blue && c !== me) { const ai = R.ais.get(c); if (ai) ai.inp.throttle = Math.min(ai.inp.throttle, .55); } }
  if (me.blue && !(R.flagT > 0)) { setFlag('blue', 1); if (R.t - (R.blueT || -99) > 12) { R.blueT = R.t; radio('Blue flag. Let the leader through.', true); } }
  if (R.sc && !R.sc.green) setFlag('yellow', .5);
  R.flagT = Math.max(0, (R.flagT || 0) - dt); const k = R.flagT > 0 ? R.flag : '', el = $('hFlag'); if (hudCache.flag !== k + (me.pen || 0)) { hudCache.flag = k + (me.pen || 0); el.className = k; el.textContent = me.pen ? '+' + me.pen + 's' : ''; }
}
function setPace(p) { if (!R) return; const me = R.player; me.pace = p; const P = TUNE.pace[p]; flash(tx('Pace') + ': ' + tx(P.name), false, 900); hudCache.pace = -1; }
function sectorDone(car, i) {
  const id = R.track.def.id, t = (R.t - car.secStart) * 1000, pb = (save.sectors[id] || (save.sectors[id] = []))[i], el = $('hSec');
  el.textContent = 'S' + (i + 1) + '  ' + (t / 1000).toFixed(2) + (pb ? '  ' + (t < pb ? '−' : '+') + (Math.abs(t - pb) / 1000).toFixed(2) : ''); el.className = !pb || t < pb ? 'good' : 'slow';
  if (!pb || t < pb) { save.sectors[id][i] = Math.round(t); persist(); }
}
function paceBars(lt) {      // each lap against the one before: green and to the right when you were quicker, red and to the left when you were slower
  const H = R.lapHist || (R.lapHist = []), prev = H.length ? H[H.length - 1] : null; H.push(lt); const el = $('paceBars'); if (!el) return; if (prev == null) return;
  const d = lt - prev, w = Math.min(100, Math.abs(d) / 3 * 100), row = '<div class="pb"><span>L' + H.length + '</span><div class="bar"><i class="' + (d <= 0 ? 'g' : 'r') + '" style="width:' + w.toFixed(0) + '%"></i></div><b class="' + (d <= 0 ? 'good' : 'slow') + '">' + (d <= 0 ? '−' : '+') + Math.abs(d).toFixed(2) + '</b></div>';
  el.insertAdjacentHTML('beforeend', row); while (el.children.length > 6) el.removeChild(el.firstChild); el.hidden = false;
}
function onPlayerLap(lt) {
  paceBars(lt); { const H = R.lapHist || []; if (H.length >= 2 && R.state === 'go') { const d = lt - H[H.length - 2]; engineer(d <= 0 ? ENG.lapFast(fmt(lt), Math.abs(d).toFixed(2)) : ENG.lapSlow(fmt(lt), d.toFixed(2)), true); } }
  const id = R.track.def.id, pb = save.best[id];
  if (R.bestThisRace == null || lt < R.bestThisRace) R.bestThisRace = lt;
  if ((!pb || lt < pb) && R.player.trace && R.player.trace.length > 30) save.trace[id] = R.player.trace.map(v => +v.toFixed(2)); R.player.trace = []; R.player.tb = -1;
  if (!pb || lt < pb) { save.best[id] = lt; persist(); $('hBest').textContent = fmt(lt); flash('Best lap ' + fmt(lt)); R.newBest = true; submitLap(id, save.name, CARS.find(c => c.id === save.car).name, lt); audio.beep(880, .25); }
  else if (R.player.lap === R.laps - 1) flash('Final lap'); else flash(fmt(lt));
}
function finishPlayer() {
  if (R.pro && (R.mode === 'race' || R.mode === 'online')) { const me = R.player; let k = 0;            // classification on race time plus penalties
    for (const c of R.cars) if (c.finished && c !== me && c.pen && !c.penDone) { c.finishTime += c.pen * 1000; c.penDone = true; }
    me.finishTime = (me.finishTime ?? R.t * 1000) + (me.pen || 0) * 1000;
    for (const c of R.cars) if (c !== me && !c.finished && !c.out && !c.isRemote) { const gap = (me.prog - c.prog) * R.track.spacing / Math.max(c.speed, 22); if (gap + (c.pen || 0) < (me.pen || 0)) { c.finished = true; c.finishTime = me.finishTime - 10 - (k++); } }
    setFlag('chequered', 9); }
  R.state = 'done'; R.doneT = 0; bankDrift(); audio.beep(1040, .5); flash('Finish', false, 1400);
  if (R.mode === 'online') room.send({ k: 'fin', t: R.t * 1000 + (R.pro ? (R.player.pen || 0) * 1000 : 0) });
}
function bankDrift() { const D = R.D; if (D.combo > 0) { R.drift += Math.round(D.combo); D.combo = 0; D.time = 0; } }
function rank() { return [...R.cars].sort((a, b) => (a.out || b.out) ? (a.out && b.out ? b.out - a.out : a.out ? 1 : -1) : (a.finished && b.finished) ? a.finishTime - b.finishTime : a.finished ? -1 : b.finished ? 1 : b.prog - a.prog); }
function knockout() {      // Knockout: each time the leader completes a lap, the last car still running is out
  const act = rank().filter(c => !c.out); if (act.length < 2) return; const last = act[act.length - 1], me = R.player; last.out = (R.outN = (R.outN || 0) + 1);
  if (last !== me) { scene.remove(last.root); last.x = last.z = 1e5; flash(last.name + ' ' + tx('is out'), true, 1400); }
  if (last === me) { me.finished = true; me.finishTime = R.t * 1000; flash('Knocked out', true, 1600); finishPlayer(); }
  else if (act.length === 2 && act[0] === me) { me.finished = true; me.finishTime = R.t * 1000; finishPlayer(); }
}
// every contact goes through here: light touches scrape, real hits dent the car, shake the camera and cost the combo
const feelState = { t: 0, sh: 0 };
function rumble(ms, strong = .3, weak = .3) { if (save.haptics === false) return; try { if (isTouch && navigator.vibrate) navigator.vibrate(ms); const gp = navigator.getGamepads ? [...navigator.getGamepads()].find(g => g && g.vibrationActuator) : null; if (gp) gp.vibrationActuator.playEffect('dual-rumble', { duration: ms, strongMagnitude: strong, weakMagnitude: weak }); } catch (e) {} }
function feel(me, dt) {      // the car talks to your hands: kerbs, sliding tyres, locked wheels, the limiter, gear changes and runoff each have their own pulse
  const F = feelState; F.t -= dt; const sh = me.shiftEvt > 0; if (sh && !F.sh) rumble(10, .4, .1); F.sh = sh ? 1 : 0; if (F.t > 0 || me.speed < 6) return;
  if (me.wsurf.includes(1) && me.speed > 8) { rumble(16, .25, .6); F.t = .11; } else if (me.locked || me.lockF) { rumble(14, .5, .3); F.t = .09; } else if (me.grass > .5) { rumble(14, .2, .7); F.t = .08; }
  else if (me.slipR > .24 && me.speed > 12) { rumble(14, .15, .45); F.t = .14; } else if (me.limiter) { rumble(10, .3, .2); F.t = .07; } }
const applyDmg = () => { TUNE.dmgK = ({ off: 0, low: .3, medium: .7, high: 1.4 })[save.dmg || 'medium']; };
function impact(car, power, wall) {
  if (R && car === R.player && power > 5 && R.eng && R.t - (R.eng.last.dmg ?? -999) > 12) { R.eng.last.dmg = R.t; engineer(ENG.damage(), true); }
  { const ai0 = R && R.ais && R.ais.get(car); if (ai0 && power > 1.2) ai0.contactT = 1.2 + Math.min(1.2, power * .05); }      // a driver who has touched something yields

  if (power < 2) return;
  const me = R.player, near = (car.x - me.x) ** 2 + (car.z - me.z) ** 2 < 3600;
  if (power < 4) { if (car === me && Math.random() < .2) { audio.scrape(power); car.impactFX(R.fx, R.track, power * .4); } return; }
  const amt = car.damage(power, !wall); if (power > 15 && !car.isPace) safetyCar('a crash');
  if (car.glass) { car.glass = false; if (near) for (let i = 0; i < 18; i++) R.fx.glow.emit(car.hitX, car.y + .6, car.hitZ, car.vx * .5 + (Math.random() - .5) * 8, 1 + Math.random() * 4, car.vz * .5 + (Math.random() - .5) * 8, .5 + Math.random() * .4, .09, 0, .85, .95, 1, 1, 14); }   // headlight glass
  if (car === me) { if (power > 8) R.crashes++; if (amt > 0 && R.mode === 'online' && room) room.send({ k: 'd', l: me.hitL, n: me.hitN, p: +power.toFixed(1) }); }
  if (near) car.impactFX(R.fx, R.track, power); if (power > 6 && R.track.hit) R.track.hit(car.hitX, car.hitZ);
  if (car.lost.length || amt > .06) {
    const P = new THREE.Vector3(), Q = new THREE.Quaternion(), S = new THREE.Vector3(), n = car.hitN || [0, 0];
    for (const c of car.lost) { c.updateWorldMatrix(true, false); c.matrixWorld.decompose(P, Q, S); R.debris.spawn(c.geometry, c.material, P.clone(), Q.clone(), S.clone(), new THREE.Vector3(car.vx * .7 + n[0] * 3, 3 + Math.random() * 3, car.vz * .7 + n[1] * 3)); c.visible = false; }
    car.lost.length = 0;
    if (near && amt > .1) { const DB = debrisKit(), n2 = Math.min(5, 1 + amt * 10 | 0); for (let i = 0; i < n2; i++) { const k = DB[(Math.random() * DB.length) | 0]; R.debris.spawn(k.g, k.m, new THREE.Vector3(car.hitX + (Math.random() - .5), car.y + .4, car.hitZ + (Math.random() - .5)), null, null, new THREE.Vector3(car.vx * .5 + (n[0] || 0) * (2 + Math.random() * 5) + (Math.random() - .5) * 5, 2 + Math.random() * 5, car.vz * .5 + (n[1] || 0) * (2 + Math.random() * 5) + (Math.random() - .5) * 5)); } }      // glass, rubber, trim and a mirror: they stay on the road
    if (near && amt > .06) for (let i = 0; i < Math.min(3, 1 + amt * 8 | 0); i++) R.debris.spawn(new THREE.BoxGeometry(.5 + Math.random() * .7, .04, .25 + Math.random() * .3), car.texCar ? Object.values(car.tex)[0] : car.m.paint, new THREE.Vector3(car.hitX, car.y + .5, car.hitZ), null, null, new THREE.Vector3(car.vx * .6 + n[0] * (2 + Math.random() * 4) + (Math.random() - .5) * 4, 3 + Math.random() * 4, car.vz * .6 + n[1] * (2 + Math.random() * 4) + (Math.random() - .5) * 4));   // torn body panels in the car's own colour
  }
  if (car !== me) { if (near) audio.crash(power * .35); return; }
  if (isTouch && navigator.vibrate) navigator.vibrate(Math.min(90, power * 5));
  audio.crash(power); rumble(Math.min(220, 40 + power * 9), .9, .7); shake = Math.min(1.2, shake + power / 13); hitPulse = Math.min(1, power / 14); fovPunch = Math.min(6, power * .35);
  if (R.D.combo > 30) flash('Combo lost', true, 900); R.D.combo = 0; R.D.time = 0;
  if (amt > .02 && !R.attract && (me.health < .55 || me.dmg.front > .6) && !R.warned) { R.warned = true; toast('Car damaged — stop in the blue pit box to repair'); }
}

function physics(h, live) {
  const tr = R.track, me = R.player, auto = R.state === 'done' || R.state === 'over' || R.demo;
  const hold = (R.pit && R.pit.busy) || R.t < (me.holdT || 0);
  let pin = auto ? R.ais.get(me).inp : hold ? PIT_INP : readInput();
  if (R.demo === 'keys') { const a = R.ais.get(me).inp; pin = { steer: Math.abs(a.steer) > .15 ? Math.sign(a.steer) : 0, throttle: a.throttle > .3 ? 1 : 0, brake: a.brake > .2 ? 1 : 0, hand: false, nitro: false }; }   // test driver limited to on/off keyboard inputs
  impact(me, me.step(h, pin, tr, live), true);
  if (hold) { me.vx = me.vz = me.r = 0; }
  for (const c of R.cars) if (c !== me && !c.isRemote && !c.out) { const ai = R.ais.get(c); impact(c, c.step(h, R.t < (c.holdT || 0) ? PIT_INP : ai.inp, tr, live, ai.boost || 1), true); }
  for (const c of R.cars) if (c.landEvt > 0) { const v = c.landEvt; c.landEvt = 0; if (c === me && v > 2.5) { audio.crash(Math.min(16, v * 1.5)); rumble(Math.min(180, 30 + v * 14), .8, .6); shake = Math.min(1.2, shake + v / 18); } if (v > 5.5) c.damage(v * .8, false); }      // landing after a jump
  for (let i = 0; i < R.cars.length; i++) for (let j = i + 1; j < R.cars.length; j++) {
    const a = R.cars[i], b = R.cars[j];
    if (a.out || b.out || Math.abs(a.x - b.x) > 9 || Math.abs(a.z - b.z) > 9) continue;
    if (b.isRemote || a.isRemote) { const mine = b.isRemote ? a : b, v = mine.bump(b.isRemote ? b : a, true); impact(mine, v); if (v > 1.5 && room && R.t - (R.hitSent || -9) > .15) { R.hitSent = R.t; mine.lastHitT = R.t; room.send({ k: 'hit', n: mine.hitN, v: +v.toFixed(1) }); } }   // tell the other player they were hit, so both cars react
    else { const v = a.bump(b, false); if (v > 0) { impact(a, v * .8); impact(b, v * .8); } }
  }
}
const PIT_INP = { steer: 0, throttle: 0, brake: 1, hand: true, nitro: false };

// ---------------- upgrades, trophies, team radio ----------------
const UPS = [['eng', 'Engine'], ['tyre', 'Tyres'], ['nitro', 'Nitro'], ['armor', 'Armour']];
const upOf = id => save.up[id] || (save.up[id] = { eng: 0, tyre: 0, nitro: 0, armor: 0 });
const upCost = (spec, lvl) => Math.round([500, 1300, 2800][Math.min(lvl, 2)] * (1 + spec.price / 6000) / 50) * 50;
const S = k => save.stats[k] || 0;
const TROPHIES = [
  { id: 'win1', name: 'First blood', desc: 'Win a race', need: 1, get: () => S('wins') },
  { id: 'pod10', name: 'Podium regular', desc: 'Finish on the podium 10 times', need: 10, get: () => S('podiums') },
  { id: 'clean', name: 'Clean hands', desc: 'Win a race without a single hard hit', need: 1, get: () => S('clean') },
  { id: 'dr3', name: 'Sideways', desc: 'Score 3,000 drift points in one run', need: 3000, get: () => S('driftBest') },
  { id: 'dr8', name: 'Smoke machine', desc: 'Score 8,000 drift points in one run', need: 8000, get: () => S('driftBest') },
  { id: 'ot50', name: 'Overtaker', desc: 'Make 50 overtakes', need: 50, get: () => S('overtakes') },
  { id: 'pit10', name: 'Pit crew favourite', desc: 'Complete 10 pit stops', need: 10, get: () => S('pits') },
  { id: 'coin', name: 'Coin collector', desc: 'Collect 2,000 credits on track', need: 2000, get: () => S('coins') },
  { id: 'km100', name: 'Road trip', desc: 'Drive 100 km', need: 100, get: () => S('km') },
  { id: 'day5', name: 'Daily habit', desc: 'Reach a 5-day challenge streak', need: 5, get: () => save.streak || 0 },
  { id: 'gar', name: 'Full garage', desc: 'Own all 14 cars', need: 14, get: () => save.owned.length },
  { id: 'gp', name: 'Grand Prix champion', desc: 'Win a Grand Prix', need: 1, get: () => S('gpWins') },
];
function checkTrophies() { let n = 0; for (const t of TROPHIES) if (!save.trophies[t.id] && t.get() >= t.need) { save.trophies[t.id] = 1; save.credits += 300; n++; toast('Trophy: ' + t.name + ' — +300 credits'); } if (n) { persist(); if (!R || R.state === 'over') $('credits').textContent = save.credits.toLocaleString(); } }
let radioT = 0, radioLast = -9;
// ---------------- the race engineer: live calls in English and Arabic, shown as subtitles and spoken by the device's voice ----------------
const ENG = {
  lapFast: (t, d) => ({ en: `Lap ${t}. ${d} seconds quicker than the last one. Keep it up.`, ar: `لفة ${t}. أسرع من اللفة السابقة بـ ${d} ثانية. كمّل كده.` }), lapSlow: (t, d) => ({ en: `Lap ${t}. ${d} slower than last lap. Find the time in the corners.`, ar: `لفة ${t}. أبطأ من اللفة السابقة بـ ${d} ثانية. دوّر على الوقت في المنعطفات.` }),
  gapAhead: g => ({ en: `Car ahead is ${g} seconds up the road.`, ar: `العربية اللي قدامك على بعد ${g} ثانية.` }), gapBehind: g => ({ en: `Car behind is ${g} seconds back. Keep your line.`, ar: `اللي وراك على بعد ${g} ثانية. حافظ على خطك.` }),
  tyreCold: () => ({ en: 'Tyres are cold. Build the temperature gently.', ar: 'الإطارات باردة. سخّنها بالتدريج.' }), tyreHot: () => ({ en: 'Tyres are overheating. Ease the slides.', ar: 'الإطارات سخنت زيادة. خفف الانزلاق.' }), tyreWorn: () => ({ en: 'Tyres are nearly gone. Box this lap if you can.', ar: 'الإطارات خلصت تقريباً. ادخل البيت لو تقدر.' }),
  fuel: () => ({ en: 'Fuel is low. Plan a stop.', ar: 'البنزين قليل. خطط للتوقف.' }), engineHot: () => ({ en: 'Engine temperature critical. Lift off and let it cool.', ar: 'حرارة المحرك عالية جداً. ارفع رجلك وسيبه يبرد.' }),
  damage: () => ({ en: 'Contact! Checking the damage.', ar: 'احتكاك! بنراجع الأضرار.' }), hurt: () => ({ en: 'The car is hurt. Bring it home carefully.', ar: 'العربية متضررة. رجّعها بحذر.' }),
  posUp: p => ({ en: `Good move. P${p}.`, ar: `حركة حلوة. المركز ${p}.` }), posDown: p => ({ en: `You lost a place. P${p}. Get it back.`, ar: `خسرت مركز. أنت دلوقتي ${p}. استرجعه.` }), final: () => ({ en: 'Final lap. Everything you have got.', ar: 'آخر لفة. ادّي كل اللي عندك.' }), start: () => ({ en: 'Radio check. Clean start, we are with you.', ar: 'اختبار الراديو. بداية نظيفة، إحنا معاك.' }),
};
const voiceScore = v => { const n = v.name.toLowerCase(); let s = 0; if (/natural|neural|online/.test(n)) s += 50; if (/google/.test(n)) s += 20; if (/ryan|guy|davis|thomas|daniel|james|alex|oliver|arthur|hamed|naayf|maged|shakir|tarik|salma/.test(n)) s += 15; if (/en-gb|en_gb/.test(v.lang.toLowerCase()) || /ar-eg/.test(v.lang.toLowerCase())) s += 8; if (/compact|espeak|robot/.test(n)) s -= 40; if (!v.localService) s += 5; return s; };
function engineer(msg, urgent) {
  const lang = save.lang === 'ar' ? 'ar' : 'en', text = msg[lang]; (window.__engLog || (window.__engLog = [])).push(lang + ': ' + text); radio(text, true);
  const timed = () => { audio.radio('open'); setTimeout(() => audio.radio('close'), 600 + text.length * 62); };
  if (save.engVoice === false || !window.speechSynthesis) { if (save.engVoice !== false) timed(); return; }
  try { const u = new SpeechSynthesisUtterance(text.replace(/\. /g, '. , ')), vs = voicesFor(), v = vs.find(x => x.name === save.engVoiceName) || vs[0]; u.lang = lang === 'ar' ? 'ar-EG' : 'en-GB'; if (v) { u.voice = v; u.lang = v.lang; } u.rate = lang === 'ar' ? .98 : 1.02; u.pitch = /female|zira|salma|hazel|susan|samantha/i.test((v && v.name) || '') ? 1 : .86; u.volume = .9;
    u.onstart = () => audio.radio('open'); u.onend = u.onerror = () => audio.radio('close'); if (urgent) speechSynthesis.cancel(); speechSynthesis.speak(u); if (!v) setTimeout(() => { if (!speechSynthesis.speaking) audio.radio('close'); }, 400); } catch (e) { timed(); }
}
function engineerTick(me, dt) {
  const E = R.eng || (R.eng = { cd: 6, last: {}, pos: null, hot: 0, cold: 0 }); E.cd -= dt; if (R.state !== 'go' || E.cd > 0) return; const said = (k, gap) => { E.last[k] = R.t; E.cd = 7; return true; }, ok = (k, gap) => R.t - (E.last[k] ?? -999) > gap;
  const tr = R.track, pr = me.prog || 0, others = R.cars.filter(c => c !== me), ahead = others.filter(c => (c.prog || 0) > pr).sort((a, b) => a.prog - b.prog)[0], behind = others.filter(c => (c.prog || 0) <= pr).sort((a, b) => b.prog - a.prog)[0], v = Math.max(12, me.speed);
  const order = [...R.cars].sort((a, b) => (b.prog || 0) - (a.prog || 0)), pos = order.indexOf(me) + 1;
  if (me.eT > .9 && ok('eng', 25)) { engineer(ENG.engineHot(), true); said('eng'); return; }
  if (me.health < .55 && ok('hurt', 45)) { engineer(ENG.hurt()); said('hurt'); return; }
  if (me.fuel < .18 && ok('fuel', 70)) { engineer(ENG.fuel()); said('fuel'); return; }
  if (me.tyre < .3 && ok('worn', 60)) { engineer(ENG.tyreWorn()); said('worn'); return; }
  E.hot = me.tT > me.tn.tOpt + me.tn.tSpan + 8 ? E.hot + dt : 0; E.cold = me.tT < me.tn.tOpt - me.tn.tSpan - 10 && me.speed > 15 && R.t > 15 ? E.cold + dt : 0;
  if (E.hot > 6 && ok('hot', 50)) { engineer(ENG.tyreHot()); said('hot'); return; } if (E.cold > 10 && ok('cold', 60)) { engineer(ENG.tyreCold()); said('cold'); return; }
  if (E.pos != null && pos !== E.pos && ok('pos', 10)) { engineer(pos < E.pos ? ENG.posUp(pos) : ENG.posDown(pos)); E.pos = pos; said('pos'); return; } if (E.pos == null) E.pos = pos;
  if (me.lap === R.laps - 1 && ok('final', 999)) { engineer(ENG.final(), true); said('final'); return; }
  if (ahead && ok('gapA', 40)) { const g = (ahead.prog - pr) * tr.spacing / v; if (g < 4) { engineer(ENG.gapAhead(g.toFixed(1))); said('gapA'); return; } }
  if (behind && ok('gapB', 45)) { const g = (pr - behind.prog) * tr.spacing / v; if (g < 2.5) { engineer(ENG.gapBehind(g.toFixed(1))); said('gapB'); return; } }
}
function radio(text, force) {
  if (!R || R.attract || (!force && R.t - radioLast < 6)) return; radioLast = R.t;
  const el = $('radio'); el.lastElementChild.textContent = tx(text); el.classList.add('show'); clearTimeout(radioT); radioT = setTimeout(() => el.classList.remove('show'), 4000); audio.tone(1250, .05, .05); audio.tone(950, .07, .04);
}
// AI drivers pit too when the car is hurt or the tyres are gone
const pitJobs = car => { const P = car.parts, wh = P.wheels.filter(w => w > .15).length; return [['Tyres', car.tyre < .92 || wh ? TUNE.pit.tyres + wh * .6 : 0], ['Fuel', car.fuelK > 0 ? (1 - car.fuel) * TUNE.pit.fuelFull : 0], ['Engine', P.engine * 4], ['Gearbox', P.gearbox * 3.5], ['Bodywork', (car.dmg.front + car.dmg.rear + car.dmg.left + car.dmg.right) / 4 * TUNE.pit.repairFull]].filter(j => j[1] > .15); };
// a car that cannot drive (dead engine, two wheels gone) is towed to its pit box and rebuilt, at a heavy time cost
function tow(car) {
  safetyCar('a recovery');
  const ai = R.ais.get(car), b = (car === R.player ? R.pit : ai && ai.box) || R.pit, th = b.th ?? Math.atan2(R.track.path[0].tx, R.track.path[0].tz);
  car.reset(b.x, b.z, th); car.repair(); car.fuel = 1; car.idx = R.track.nearest(b.x, b.z); car.holdT = R.t + TUNE.parts.towSeconds; if (ai) ai.pitT = 0;
  if (car === R.player) { cam.yaw = car.th; flash('Towed to the pits  +' + TUNE.parts.towSeconds + 's', true, 2500); radio('Recovery truck has you. Rebuild will cost about ' + TUNE.parts.towSeconds + ' seconds.', true); } else flash(car.name + ' ' + tx('is towed in'), false, 1200);
}
// The AI's pit stop. A car that has crashed, worn its tyres out or run low on fuel brakes for the pit entry, drives the lane at the limiter
// to its OWN numbered box, stops, is serviced, and rejoins. Boxes are never shared: a car whose box is taken uses the nearest free one.
const PIT_LIMIT = 20;
function aiNeedsPit(car) {
  const P = car.parts, left = R.laps - Math.max(0, car.lap), lowFuel = car.fuelK > 0 && car.fuel < Math.max(.07, (car.fpl || .15) * 1.15);
  const wrecked = car.health < .55 || P.engine > .35 || P.gearbox > .5 || P.wheels.some(w => w > .45) || car.dmg.front > .6 || car.dmg.rear > .6 || car.dmg.left > .6 || car.dmg.right > .6;      // a crash
  const critical = car.health < .35 || P.engine > .6 || P.gearbox > .75 || P.wheels.some(w => w > .7);
  if (left <= 1 && !critical) return false;                                    // last lap: only stop if the car is truly broken
  return wrecked || car.tyre < .3 || lowFuel;
}
function aiPit(car, ai, dt) {
  const tr = R.track, n = tr.n;
  if (!tr.pitBoxes) {                                                          // a track without a pit lane keeps one shared service box
    const P = car.parts; if (!(car.health < .4 || P.engine > .6 || P.gearbox > .7 || P.wheels.some(w => w > .7) || car.tyre < .28 || ai.pitT > 0)) return;
    const box = R.pit, dx = box.x - car.x, dz = box.z - car.z, d = Math.hypot(dx, dz), f = dx * Math.sin(car.th) + dz * Math.cos(car.th); if (d > 60 || (f < -1 && !ai.pitT)) return;
    const vw = d < 3 ? 0 : Math.min(28, Math.sqrt(12 * (d - 2))); ai.inp.steer = d > 2.5 ? clamp(wrap(Math.atan2(dx, dz) - car.th) * 2.5, -1, 1) : 0; ai.inp.throttle = car.speed < vw ? .7 : 0; ai.inp.brake = car.speed > vw + 1 && car.vf > 2 ? 1 : 0; ai.inp.nitro = false;
    if (d < 3.4 && car.speed < 4) { car.vx *= .8; car.vz *= .8; ai.inp.throttle = 0; if (!ai.pitT) ai.pitNeed = pitJobs(car).reduce((a, j) => a + j[1], 0); ai.pitT = (ai.pitT || 0) + dt; if (ai.pitT > ai.pitNeed) { car.repair(); car.fuel = 1; car.wetTyres = R.wet > .4; ai.pitT = 0; R.aiPits = (R.aiPits || 0) + 1; } }
    return;
  }
  const p = tr.path, sp = car.speed, hw = tr.pitHw, inZone = i => i >= tr.pitIn || i <= tr.pitOut;
  const idxAhead = (a, b) => ((b - a) % n + n) % n;                            // nodes from a forward to b
  if (!ai.pitState) {
    if (R.t < 10 || car.stranded || (ai.pitCool || 0) > R.t || !aiNeedsPit(car)) return;
    // choose a box: the car's own, or the nearest free one that is not the player's or the rival's
    const taken = new Set(); for (const [c2, a2] of R.ais) if (c2 !== car && a2.pitState && a2.pitBox) taken.add(a2.pitBox);
    const off = new Set([R.myBox, R.rivBox]); let b = ai.box; const ok = q => !taken.has(q) && !off.has(tr.pitBoxes.indexOf(q));
    if (!ok(b)) { b = tr.pitBoxes.filter(ok).sort((x, y) => idxAhead(car.idx, x.idx) - idxAhead(car.idx, y.idx))[0]; if (!b) return; }
    ai.pitBox = b; ai.pitState = 'in'; ai.pitNeed = pitJobs(car).reduce((a, j) => a + j[1], 0); ai.pitOff = null; ai.svcT = 0; R.aiPitCalls = (R.aiPitCalls || 0) + 1;
  }
  const b = ai.pitBox, inp = ai.inp, pi = car.idx, laneOff = hw + 2.3;
  ai.pitT = ai.pitT || .001;                                                   // tells the stuck-car logic this car is busy
  const lat = i => { const q = p[i]; return (car.x - q.x) * q.tz - (car.z - q.z) * q.tx; };
  const cap = vt => { if (sp > vt + .8) { inp.throttle = 0; inp.brake = clamp((sp - vt) / 5, .25, 1); } else if (sp > vt - .5) { inp.throttle = Math.min(inp.throttle, .25); inp.brake = 0; } };
  const steerTo = (x, z, k = 2.4) => { inp.steer = clamp(wrap(Math.atan2(x - car.x, z - car.z) - car.th) * k, -1, 1); };
  const laneDrive = (target, vmax) => {                                       // follow the lane, ease sideways, keep a gap to the car in front
    if (ai.pitOff == null) ai.pitOff = lat(pi); ai.pitOff += (target - ai.pitOff) * Math.min(1, dt * 1.4);
    const L = Math.round((6 + sp * .28) / tr.spacing), q = p[(pi + L) % n]; steerTo(q.x + q.tz * ai.pitOff, q.z - q.tx * ai.pitOff);
    let v = vmax; const sn = Math.sin(car.th), cs = Math.cos(car.th); for (const o of R.cars) { if (o === car || o.out) continue; const dx = o.x - car.x, dz = o.z - car.z, f = dx * sn + dz * cs, l = dx * cs - dz * sn; if (f > 0 && f < 14 && Math.abs(l) < 2.2) v = Math.min(v, Math.max(0, o.speed + (f - 7) * .5)); }
    inp.throttle = sp < v ? (sp < v - 3 ? .8 : .45) : 0; inp.brake = 0; cap(v); inp.nitro = false; inp.hand = false;
  };
  if (ai.pitState === 'in') {                                                  // racing on: brake so as to arrive at the lane at the limit, then turn in
    const dIn = idxAhead(pi, tr.pitIn) * tr.spacing;
    if (inZone(pi) && dIn > n * tr.spacing * .5) ai.pitState = 'lane';
    else { if (dIn < 320) cap(Math.sqrt(PIT_LIMIT * PIT_LIMIT + 2 * 10.5 * Math.max(0, dIn - 6))); if (dIn < 50) { const u = Math.max(0, Math.min(1, 1 - dIn / 50)), L = Math.round((7 + sp * .3) / tr.spacing), q = p[(pi + L) % n], o2 = u * u * (3 - 2 * u) * laneOff; steerTo(q.x + q.tz * o2, q.z - q.tx * o2); } else { const L = Math.round((9 + sp * .3) / tr.spacing), q = p[(pi + L) % n]; if (ai.pitOff == null) ai.pitOff = lat(pi); steerTo(q.x + q.tz * ai.pitOff * 0, q.z - q.tx * 0); } return; }      // slow down early enough to arrive at the lane at the limit, then ease in over 50 m instead of swerving
  }
  if (ai.pitState === 'lane') {
    const dBox = idxAhead(pi, b.idx) * tr.spacing; if (dBox > n * tr.spacing * .5 || dBox < 3) { ai.pitState = 'park'; }
    else { laneDrive(laneOff, PIT_LIMIT); return; }
  }
  if (ai.pitState === 'park') {                                                // from the lane into the box, stopping on the mark
    const dx = b.x - car.x, dz = b.z - car.z, d = Math.hypot(dx, dz), vt = d < 1.3 ? 0 : Math.min(9, Math.max(1.6, d * .9));
    steerTo(b.x, b.z, 2.8); inp.throttle = sp < vt ? .5 : 0; inp.brake = sp > vt + .5 ? clamp((sp - vt) / 3, .3, 1) : 0; inp.nitro = false;
    if (d < 2.6 && sp < 2.2) { ai.pitState = 'service'; ai.svcT = 0; } else if (d > 40) { ai.pitState = 'out'; }
    if (ai.pitState === 'park') return;
  }
  if (ai.pitState === 'service') { b.svc = { t: ai.svcT, jobs: ai.pitJobsL || (ai.pitJobsL = pitJobs(car)), car };                                             // wheels off, engine seen to, tyres and fuel: the same jobs and times as the player's stop
    car.vx *= .7; car.vz *= .7; inp.throttle = 0; inp.brake = 1; inp.steer = 0; ai.svcT += dt;
    if (ai.svcT >= ai.pitNeed) { car.repair(); car.fuel = 1; fitTyres(car, R.wet > .4 ? 'rain' : R.laps - Math.max(0, car.lap) > 4 ? 'hard' : (car.tn.comp === 'rain' ? 'medium' : 'soft')); R.aiPits = (R.aiPits || 0) + 1; ai.pitState = 'out'; ai.pitOff = null; b.svc = null; ai.pitJobsL = null; car.lift = 0; }
    return;
  }
  if (ai.pitState === 'out') {                                                 // back along the lane at the limiter, then merge onto the track
    const dOut = idxAhead(pi, tr.pitOut) * tr.spacing, left = inZone(pi) && dOut < n * tr.spacing * .5;
    if (!left) { ai.off = lat(pi); ai.merge = 6.5; ai.pitState = null; ai.pitT = 0; if (ai.pitBox) ai.pitBox.svc = null; ai.pitBox = null; ai.pitOff = null; ai.pitCool = R.t + 50; return; }
    // Careful exit: at the end of the lane it waits until nothing is closing on the exit from behind, then leaves gently and merges over a long distance.
    let clear = true; if (dOut < 30) for (const o of R.cars) { if (o === car || o.out || o.inPit || o.isRemote) continue; const dd = idxAhead(o.idx ?? 0, tr.pitOut) * tr.spacing; if (dd > 0 && dd < 40 + o.speed * 1.6) { clear = false; break; } }
    ai.exitHold = !clear && dOut < 14;
    laneDrive(dOut < 26 ? laneOff * Math.max(0, dOut / 26) * .6 : laneOff, ai.exitHold ? 0 : dOut < 18 ? 13 : PIT_LIMIT);
  }
}
// ---------------- live race events: slipstream, overtakes, oil, bounties, speed traps, haze ----------------
function endEvent(msg) { const E = R.ev, c = E.cur; if (!c) return; if (c.pick && c.pick.t !== Infinity) { c.pick.t = Infinity; } if (c.pick) c.pick.m.visible = false; E.cur = null; E.next = R.t + 20 + Math.random() * 16; setTxt('hEvent', ''); if (msg) flash(msg, /missed/.test(msg), 1300); }
function startEvent() {
  const tr = R.track, me = R.player, n = tr.n, E = R.ev, opts = ['oil', 'rush', 'gold', 'haze', 'trap'].concat(R.mode === 'race' && R.cars.length > 1 ? ['bounty', 'bounty'] : []).filter(t => t !== E.last);
  const type = opts[Math.random() * opts.length | 0], c = E.cur = { type, t: 0 }; E.last = type; let label = '';
  const ahead = (m, lat) => { const q = tr.path[(me.idx + Math.round(m / tr.spacing)) % n], x = q.x + q.tz * lat, z = q.z - q.tx * lat; return { x, z, y: tr.height(x, z) }; };
  if (type === 'oil') { c.t = 6; label = 'Oil on track'; for (const m of [140, 260]) { const p = ahead(m, (Math.random() - .5) * 5), mesh = new THREE.Mesh(new THREE.CircleGeometry(2.7, 22), new THREE.MeshStandardMaterial({ color: 0x040405, roughness: .04, metalness: .95, transparent: true, opacity: .88, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -7, polygonOffsetUnits: -7 })); mesh.rotation.x = -Math.PI / 2; mesh.position.set(p.x, p.y + .06, p.z); tr.group.add(mesh); R.slicks.push({ x: p.x, z: p.z, m: mesh, until: R.t + 45 }); } radio('Oil on the track ahead. Dark patches — stay off them.', true); }
  else if (type === 'rush') { c.t = 12; label = 'Nitro rush'; radio('Nitro rush! Tanks are refilling, use it.'); }
  else if (type === 'gold') { c.t = 26; label = 'Golden coin'; const p = ahead(170, (Math.random() - .5) * 4), m = new THREE.Mesh(R.coinG, R.coinM); m.scale.setScalar(2); m.position.set(p.x, p.y + 1.4, p.z); tr.group.add(m); c.pick = { x: p.x, z: p.z, y: p.y + 1.4, m, nitro: false, gold: true, t: 0 }; R.picks.push(c.pick); radio('Golden coin on the racing line. Worth 200.'); }
  else if (type === 'haze') { c.t = 16; label = tr.def.theme === 'desert' ? 'Sandstorm' : 'Fog bank'; radio(label + ' rolling in. Trust the lines.', true); }
  else if (type === 'trap') { c.kmh = Math.round(me.spec.top * 3.6 * .78 / 10) * 10; c.t = 20; label = 'Speed trap ' + c.kmh + ' km/h'; radio('Speed trap is live. Hit ' + c.kmh + ' for a bonus.'); }
  else { c.t = 24; label = 'Bounty: overtake'; radio('Bounty on the car ahead. Take the place, take the money.'); }
  c.label = label; flash(label, type === 'oil' || type === 'haze', 1500); audio.beep(520, .2);
}
function liveEvents(dt) {
  const tr = R.track, me = R.player, E = R.ev;
  if (R.state !== 'go') return;
  for (const c of R.cars) {                                   // slipstream: tuck in behind a car to cut drag
    if (c.isRemote) continue; let d = 0;
    if (R.rules === 'arcade' && c.speed > 20) { const sn = Math.sin(c.th), cs = Math.cos(c.th); for (const o of R.cars) { if (o === c) continue; const dx = o.x - c.x, dz = o.z - c.z, f = dx * sn + dz * cs, l = dx * cs - dz * sn; if (f > 4 && f < 24 && Math.abs(l) < 1.7) d = Math.max(d, 1 - (f - 4) / 20); } }
    c.draft += (d - c.draft) * Math.min(1, dt * 3);
  }
  setTxt('hTow', tx(me.burn ? 'Burnout' : me.wspin > .25 || me.wspinF > .25 ? 'Wheelspin' : Math.abs(me.beta) > .16 && me.speed > 9 ? 'Oversteer' : me.useF > 1.03 && me.useR < .9 && me.speed > 10 && Math.abs(me.steer) > .08 ? 'Understeer' : me.draft > .25 ? 'Slipstream' : ''));
  if (me.draft > .25 && Math.random() < .5) { const a = Math.random() * 6.28; R.fx.smoke.emit(me.x + Math.cos(a) * 2.5 + Math.sin(me.th) * 6, me.y + .5 + Math.random() * 1.5, me.z + Math.sin(a) * 2.5 + Math.cos(me.th) * 6, -me.vx * .6, 0, -me.vz * .6, .25, .12, 0, 1, 1, 1, .25); }
  if (me.draft > .4 && !R.towSaid) { R.towSaid = true; radio('You\u2019re in the tow. Stay tucked in, pull out late.'); }
  const pos = rank().indexOf(me) + 1;
  if (R.lastPos && R.t > 6 && R.cars.length > 1 && !me.finished) {
    if (pos < R.lastPos) { if (R.pro && R.sc && !R.sc.green) penalise(me, 5, 'Overtaking under the safety car.'); R.coins += 40; R.overtakes++; flash('+40 overtake', false, 700); radio(pos === 1 ? 'P1! You lead. Keep it clean.' : 'P' + pos + '. Next one is just ahead.'); if (E.cur && E.cur.type === 'bounty') { R.coins += 150; endEvent('Bounty paid: +150'); } }
    else if (pos > R.lastPos) radio('Lost a place. P' + pos + '. Stay calm, take it back.');
  }
  R.lastPos = pos;
  if (me.tyre < .3 && !R.saidTyre) { R.saidTyre = true; radio('Tyres are nearly gone. Box at the blue pit.', true); }
  if (me.lap === R.laps - 1 && !R.saidLast && R.laps > 1) { R.saidLast = true; radio('Last lap. Everything you have.', true); }
  if (R.attract) return;
  if (R.t > 1 && !R.saidGo) { R.saidGo = true; radio(R.story ? 'Radio check. Clean first corner, then push.' : 'Lights out. Clean first corner.', true); }
  R.slicks = R.slicks.filter(s => s.until > R.t || (tr.group.remove(s.m), false));
  for (const s of R.slicks) for (const c of R.cars) if (!c.isRemote && c.oil <= 0 && (c.x - s.x) ** 2 + (c.z - s.z) ** 2 < 7.5) { c.oil = c === me ? 1.1 : .4; if (c === me) radio('Oil! Easy on the wheel.', true); }
  if (me.fuel < .15 && !R.saidFuel) { R.saidFuel = true; radio('Fuel is low. Box this lap or you will not make it.', true); }
  if (me.fuel <= 0 && !R.saidDry) { R.saidDry = true; radio('We are out of fuel. Coast it to the pit lane.', true); }
  if (R.mode === 'online' || R.rules !== 'arcade') return;   // pickups-and-events are the Arcade ruleset; Circuit rules and duels are pure racing
  const c = E.cur;
  if (c) {
    c.t -= dt; setTxt('hEvent', c.label + (c.type === 'oil' ? '' : '  ' + Math.ceil(c.t) + 's'));
    if (c.type === 'rush') for (const k of R.cars) k.nitro = Math.min(1, k.nitro + dt * .22);
    if (c.type === 'trap' && Math.abs(me.vf) * 3.6 >= c.kmh) { R.coins += 120; endEvent('Speed trap beaten: +120'); }
    else if (c.t <= 0) endEvent(c.type === 'bounty' || c.type === 'trap' || c.type === 'gold' ? 'Challenge missed' : null);
  } else if (R.t > E.next && !me.finished) startEvent();
}

// ---------------- car lighting ----------------
// Real lights are expensive, so a small pool of them is handed to the cars nearest the action every frame: headlights are
// true spot lights that fall on the road, barriers, people and other cars ahead (the player's also casts shadows on High),
// and underglow is a coloured point light under the floor. Cars further away keep the cheaper painted beams.
function setupLights() {
  R.spots = []; R.glows = []; R.madeSpots = R.madeGlows = false; for (let i = 0; i < 4; i++) LIGHTS.c[i].set(0, 0, 0, 0);
}
function makeLights(spots) {      // created on first need (night, rain, or a car with underglow), never before
  const n = spots ? (gfx === 'high' ? 2 : gfx === 'medium' ? 1 : 0) : (gfx === 'low' ? 0 : 1); if (spots) R.madeSpots = true; else R.madeGlows = true; if (spots) R.spots = []; else R.glows = [];
  const nS = spots ? n : 0, nG = spots ? 0 : n;
  for (let i = 0; i < nS; i++) { const L = new THREE.SpotLight(0xfff0d2, 0, 62, .44, .7, 1.25); if (i === 0 && save.gfx === 'high') { L.castShadow = true; L.shadow.mapSize.set(1024, 1024); L.shadow.camera.near = .6; L.shadow.camera.far = 62; L.shadow.bias = -.0015; L.shadow.normalBias = .05; } scene.add(L, L.target); R.spots.push(L); }
  for (let i = 0; i < nG; i++) { const L = new THREE.PointLight(0xffffff, 0, 9, 1.5); scene.add(L); R.glows.push(L); }
  for (let i = 0; i < 4; i++) LIGHTS.c[i].set(0, 0, 0, 0);
}
function updateLights(dt) {
  if (R.lit && !R.madeSpots) makeLights(true); if (!R.madeGlows && R.cars.some(c => c.glowPool)) makeLights(false);
  const me = R.player, ref = R.attract ? R.cars[(Math.floor(Math.max(0, R.t) / 7) * 3) % R.cars.length] : me, dark = R.track.theme.night ? 1 : R.track.def.theme === 'coast' ? .75 : .45 + .3 * R.wet;
  const near = R.cars.filter(c => !c.out).sort((a, b) => (a === ref ? -1 : b === ref ? 1 : 0) || ((a.x - ref.x) ** 2 + (a.z - ref.z) ** 2) - ((b.x - ref.x) ** 2 + (b.z - ref.z) ** 2));
  const lit = near.filter(c => c.lightsOn && c.lamps.some(l => l.ok)), k = Math.min(1, dt * 10);
  R.spots.forEach((L, i) => { const c = lit[i];
    if (!c) { L.intensity += (0 - L.intensity) * k; LIGHTS.c[i].w = 0; return; }
    const th = c.root.rotation.y, sn = Math.sin(th), cs = Math.cos(th), okL = c.lamps[0].ok, okR = c.lamps[1].ok, side = okL && okR ? 0 : okL ? .5 : -.5, x = c.root.position.x + sn * (c.zf + .1) + cs * side, z = c.root.position.z + cs * (c.zf + .1) - sn * side;   // one lamp out: the beam moves to the side that still works
    L.position.set(x, c.y + .62, z); L.target.position.set(x + sn * 22, c.y - .9, z + cs * 22); L.intensity += ((okL && okR ? 150 : 80) * dark - L.intensity) * k;
    LIGHTS.p[i].copy(L.position); LIGHTS.d[i].set(sn, -.07, cs).normalize(); LIGHTS.c[i].set(1, .93, .78, (okL && okR ? 1 : .55) * dark); });
  const glo = near.filter(c => c.look && c.look.glow && c.glowPool);
  R.glows.forEach((L, i) => { const c = glo[i]; if (!c) { L.intensity += (0 - L.intensity) * k; return; } L.color.setHex(GLOWS[c.look.glow]); L.position.set(c.root.position.x, c.y + .28, c.root.position.z); L.intensity += ((R.track.theme.night ? 9 : R.track.def.theme === 'coast' ? 3 : .8) - L.intensity) * k; });
  const pulse = .68 + .1 * Math.sin(performance.now() / 420); for (const c of R.cars) if (c.glowPool) c.glowPool.material.opacity = pulse * (R.track.theme.night ? 1 : R.track.def.theme === 'coast' ? .6 : .12 + .3 * R.wet);      // underglow is a night effect: barely there in daylight
}

// ---------------- pit box, pickups, weather ----------------
// A pit box: marked pad (yours only), a name board, a fuel rig and six mechanics in the car's colours.
function setupExtras() {
  const tr = R.track, n = tr.n, G = tr.group, def = tr.def, me = R.player;
  let hw = 6;
  if (tr.pitBoxes) {                                           // real pit lane: every car owns a numbered box
    const nb2 = tr.pitBoxes.length; R.myBox = R.mode === 'online' ? (isHost ? 0 : 1) : R.cars.indexOf(me) % nb2; R.rivBox = isHost ? 1 : 0;      // online: host takes box 1, guest box 2, on both screens
    R.cars.forEach((c, i) => { const ai = R.ais.get(c), b = tr.pitBoxes[c === me ? R.myBox : c.isRemote ? R.rivBox : i % nb2]; if (c === me) R.pit = { x: b.x, z: b.z, t: 0, busy: false, tick: 0 }; else if (ai) ai.box = b; });
    hw = def.width / 2;
  } else {                                                     // scanned circuit without a lane: one shared service box at the road edge
    const pi = Math.round(34 / tr.spacing), p = tr.path[pi]; hw = 0; while (hw < 12 && tr.surf(p.x - p.tz * (hw + .5), p.z + p.tx * (hw + .5)) === 2) hw += .5;
    const off = Math.max(2, hw - 2.1), px = p.x - p.tz * off, pz = p.z + p.tx * off, py = tr.height(px, pz);
    const c = document.createElement('canvas'); c.width = 128; c.height = 256; const k = c.getContext('2d');
    k.fillStyle = 'rgba(25,167,206,.55)'; k.fillRect(0, 0, 128, 256); k.strokeStyle = '#fff'; k.lineWidth = 10; k.strokeRect(5, 5, 118, 246); k.fillStyle = '#fff'; k.font = '900 54px Rubik, Arial Black, sans-serif'; k.textAlign = 'center'; k.fillText('PIT', 64, 146);
    const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace;
    const box = new THREE.Mesh(new THREE.PlaneGeometry(3.6, 7.2), new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -5, polygonOffsetUnits: -5 }));
    box.rotation.set(-Math.PI / 2, 0, Math.PI - Math.atan2(p.tx, p.tz)); box.position.set(px, py + .07, pz); G.add(box);
    R.pit = { x: px, z: pz, t: 0, busy: false, tick: 0, zone: true };
    if (def.dev) { box.visible = false; R.pit.x = R.pit.z = 1e6; }
  }
  R.crews = [];
  if (tr.pitBoxes) { const pal = [0xe3262e, 0x19a7ce, 0xffc21a, 0x2fb457, 0xff7ab0, 0xf3f4f6];
    tr.pitBoxes.forEach((b, j) => { const owner = j === R.myBox ? me : j === R.rivBox && R.remote ? R.remote : R.cars[j]; R.crews[j] = buildCrew(tr.group, b, owner ? (owner.color ?? pal[j % 6]) : pal[j % 6], owner ? owner.name : '', { mine: j === R.myBox }); });
    for (const cr of R.crews) if (cr) cr.group.traverse(o => { if (o.isMesh) o.castShadow = false; });
    { const saved = []; for (const cr of R.crews) if (cr) { cr.group.traverse(o => { saved.push([o, o.visible]); o.visible = true; }); } try { renderer.compile(scene, camera); } catch (e) {} for (const [o, v] of saved) o.visible = v; for (const cr of R.crews) if (cr) cr.group.visible = false; }      // everything in the crews (jacks, guns, held wheels, hidden until the stop) is revealed for one compile      // the crews' shaders are compiled behind the loading screen, not the first time you drive past
    R.pit.pad = R.crews[R.myBox].pad; R.pit.th = tr.pitBoxes[R.myBox].th; if (R.remote) { const b2 = tr.pitBoxes[R.rivBox]; R.pit2 = { x: b2.x, z: b2.z, th: b2.th }; } }
  const beacon = new THREE.Mesh(new THREE.CylinderGeometry(.08, .08, 4, 8), new THREE.MeshBasicMaterial({ color: new THREE.Color(0x19a7ce).multiplyScalar(2.2) })); beacon.position.set(R.pit.x, tr.height(R.pit.x, R.pit.z) + 5, R.pit.z); G.add(beacon);
  // marker above the player's car
  const mk = new THREE.Group(); { const sh = new THREE.Shape(); sh.moveTo(0, -.52); sh.lineTo(.5, .12); sh.lineTo(.34, .28); sh.lineTo(0, -.14); sh.lineTo(-.34, .28); sh.lineTo(-.5, .12); sh.closePath();
    const g = new THREE.ExtrudeGeometry(sh, { depth: .06, bevelEnabled: true, bevelThickness: .02, bevelSize: .02, bevelSegments: 2 }); g.translate(0, 0, -.03);
    const chev = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ color: 0x39ff88, transparent: true, opacity: .8, fog: false, depthWrite: false })), edge = new THREE.LineSegments(new THREE.EdgesGeometry(g, 40), new THREE.LineBasicMaterial({ color: 0xeafff3, transparent: true, opacity: .9, fog: false })),
      stem = new THREE.Mesh(new THREE.CylinderGeometry(.012, .012, 1.1, 6), new THREE.MeshBasicMaterial({ color: 0x39ff88, transparent: true, opacity: .3, fog: false, depthWrite: false })); stem.position.y = -.8; mk.add(chev, edge, stem); mk.traverse(o => { o.renderOrder = 8; });
    mk.position.y = me.top + 2.3; me.root.add(mk); R.marker = mk; }      // a slim chevron floating well above the roof, translucent, so it never hides the car      // a plain 3D map pin: a ball on a point, standing on the roof
  R.pro = R.rules !== 'arcade';
  if (R.pro && (R.mode === 'race' || R.mode === 'online')) { const field = R.cars.map(c => c.spec); for (const c of R.cars) { const b = balance(c.spec, field); c.bopP = b.p; c.bopG = b.g; } }   // balance of performance
  { const lapT = tr.len / 36, lapsPerTank = Math.max(2.6, R.laps * .62), proBurn = R.mode === 'race' && R.laps >= 3 ? clamp(TUNE.fuel.fullThrottleSeconds * .8 / (lapsPerTank * lapT), 1, 6) : 1;
    for (const c of R.cars) { c.noNitro = R.pro;
      if (R.pro) { c.fuelK = R.endu ? proBurn * 1.3 : proBurn; if (R.endu) c.wear *= 1.7; }          // Professional: a tank lasts about 60% of the race, so everyone must stop
      else { c.fuelK = 0; c.partK = .3; c.dmgScale *= .55; c.wear *= .3; } }                         // Arcade: no fuel, light damage, slow tyre wear
    if (save.dev && save.devGod) { me.dmgScale = 0; me.partK = 0; } }
  // Arcade ruleset only: nitro canisters and coins strung along the racing line
  R.picks = []; R.coins = 0;
  const coinG = new THREE.CylinderGeometry(.5, .5, .1, 18); coinG.rotateX(Math.PI / 2); const coinM = new THREE.MeshStandardMaterial({ color: 0xffc21a, emissive: 0xffa800, emissiveIntensity: 1.1, metalness: .9, roughness: .25 });
  if (R.rules === 'arcade') {
    const nitroG = new THREE.OctahedronGeometry(.6), nitroM = new THREE.MeshStandardMaterial({ color: 0x19a7ce, emissive: 0x19a7ce, emissiveIntensity: 2.2, metalness: .6, roughness: .25 });
    const lane = Math.max(1.2, Math.min(hw, 7) - 2.5);
    const add = (i, lat, nitro) => { const q = tr.path[((i % n) + n) % n], x = q.x + q.tz * lat, z = q.z - q.tx * lat, m = new THREE.Mesh(nitro ? nitroG : coinG, nitro ? nitroM : coinM); m.position.set(x, tr.height(x, z) + 1, z); m.castShadow = true; G.add(m); R.picks.push({ x, z, y: m.position.y, m, nitro, t: 0 }); };
    [.14, .33, .52, .7, .88].forEach((f, j) => add(Math.round(f * n), (j % 2 ? 1 : -1) * lane * .6, true));
    [.07, .24, .42, .61, .79].forEach((f, j) => { const lat = (j % 2 ? -1 : 1) * lane * .5; for (let q = 0; q < 4; q++) add(Math.round(f * n) + q * 4, lat, false); });
  }
  // repair kits: drive through the green cross to straighten the bodywork (tyres and fuel still need the pit lane)
  if (R.rules === 'arcade') { const gm = new THREE.MeshStandardMaterial({ color: 0x2fb457, emissive: 0x2fb457, emissiveIntensity: 1.6, roughness: .4 }), lane2 = Math.max(1.2, Math.min(hw, 7) - 2.5);
    [.2, .5, .82].forEach((f, j) => { const q = tr.path[Math.round(f * n) % n], lat = (j % 2 ? 1 : -1) * lane2 * .35, x = q.x + q.tz * lat, z = q.z - q.tx * lat, m = new THREE.Group(); m.add(new THREE.Mesh(new THREE.BoxGeometry(1.2, .36, .36), gm), new THREE.Mesh(new THREE.BoxGeometry(.36, 1.2, .36), gm)); m.position.set(x, tr.height(x, z) + 1.1, z); G.add(m); R.picks.push({ x, z, y: m.position.y, m, fix: true, t: 0 }); }); }
  // weather
  const w = R.weather || 'random'; R.wet = 0; tr.wet = 0;
  R.coinG = coinG; R.coinM = coinM; R.slicks = []; R.ev = { cur: null, next: 20 + Math.random() * 12, last: '' }; R.haze = 0; R.pits = 0; R.overtakes = 0; R.crashes = 0; R.lastPos = 0; radioLast = -9;
  if (tr.theme.night) for (const sx of [-1, 1]) { const p0 = tr.path[0], gl = new THREE.SpotLight(0xcfe0ff, 220, 70, .75, .6, 1.4); gl.position.set(p0.x + p0.tz * sx * 5, tr.height(p0.x, p0.z) + 9, p0.z - p0.tx * sx * 5); gl.target.position.set(p0.x - p0.tx * 22 + p0.tz * sx * 3, 0, p0.z - p0.tz * 22 - p0.tx * sx * 3); G.add(gl, gl.target); }
  R.rainAt = R.rainAt != null ? R.rainAt : w === 'rain' ? 6 : w === 'storm' ? 0 : (w === 'random' && def.theme !== 'desert' && !def.dev && Math.random() < .3) ? 18 + Math.random() * 30 : Infinity;
  R.roadMats = []; G.traverse(o => { if (o.isMesh && o.material && /racetrack|conc_plates/.test(o.material.name || '')) R.roadMats.push([o.material, o.material.roughness, o.material.metalness]); });
  setupLights();
  if (tr.theme.night || save.tod === 'cycle') buildFloodlights(tr, G);
  makeReflections(tr);
  R.lit = !!tr.theme.night || def.theme === 'coast'; for (const c of R.cars) c.setLights(R.lit);
  { const was = R.lit; if (R.ambient) R.ambient.rain.visible = true; for (const c of R.cars) c.setLights(true); try { renderer.compile(scene, camera); } catch (e) {} if (R.ambient) R.ambient.rain.visible = false; for (const c of R.cars) c.setLights(was); }      // warm-up behind the loading screen: the rain and headlight shaders are compiled now
}
function raceExtras(dt) {
  const tr = R.track, me = R.player, pit = R.pit;
  liveEvents(dt);
  // --- pit lane: limiter on entry, stop in your box, the crew does tyres, fuel and repairs; each job costs time
  if (R.state === 'go') {
    const d2 = (me.x - pit.x) ** 2 + (me.z - pit.z) ** 2, jobs = pitJobs(me), est = jobs.reduce((a, j) => a + j[1], 0);
    me.pitZone = !!pit.zone && d2 < 300;
    if (me.inPit && !R.wasPit && !pit.busy) radio(est > .3 ? 'Limiter on. Stop in your box — about ' + est.toFixed(1) + ' seconds for ' + jobs.map(j => j[0].toLowerCase()).join(', ') + '.' : 'Limiter on. Nothing to do — drive through.', true);
    R.wasPit = me.inPit;
    if (pit.busy || (d2 < 10 && me.speed < 2 && est > .3)) {
      if (!pit.busy) { pit.busy = true; pit.t = 0; pit.jobs = jobs; pit.total = est; }
      pit.t += dt; pit.tick -= dt; if (pit.tick <= 0) { pit.tick = .55; audio.wrench(); }
      let acc2 = 0, cur = pit.jobs[0][0]; for (const j of pit.jobs) { if (pit.t >= acc2) cur = j[0]; acc2 += j[1]; }
      pit.fl = (pit.fl || 0) - dt; if (pit.fl <= 0) { pit.fl = .2; flash(cur + '  ' + Math.max(0, pit.total - pit.t).toFixed(1) + 's', false, 320); }
      if (pit.t >= pit.total) { me.repair(); me.fuel = 1; me.nitro = 1; fitTyres(me, nextCompFor(me)); pit.busy = false; pit.t = 0; R.warned = R.saidTyre = R.saidFuel = R.saidDry = false; R.pits++; flash('Go', false, 800); audio.beep(660, .4); radio((me.wetTyres ? 'Wet tyres on' : 'Fresh tyres') + ', full tank. Mind the limiter to the pit exit.', true); if (R.mode === 'online' && room) room.send({ k: 'fix', w: me.wetTyres }); }
    }
  }
  if (R.sc) safetyTick(dt);
  if (R.pro && R.state === 'go' && (R.mode === 'race' || R.mode === 'online')) rulesTick(dt);
  // --- pit crews: yours, and in an online duel your rival's, working at their own box on both screens
  me.pitBusy = !!pit.busy;
  { const busy = pit.busy, T = performance.now() / 1000;
    for (let j = 0; j < (R.crews || []).length; j++) { const cr = R.crews[j]; if (!cr) continue; const b = cr.box, dme = Math.hypot(me.x - b.x, me.z - b.z), near = j === R.myBox ? dme < 110 : dme < 75 && (!!b.svc || R.cars.some(c => !c.isRemote && Math.hypot(c.x - b.x, c.z - b.z) < 28));      // only the crews that are in use are drawn: a dozen idle crews cost thousands of draw calls cr.group.visible = near; if (!near) continue;
      let svc = null;
      if (j === R.myBox) { if (busy) svc = { t: pit.t, jobs: pit.jobs, car: me }; }
      else if (R.remote && j === R.rivBox) { const rb = !!R.remote.pitBusy; R.p2t = rb ? (R.p2t || 0) + dt : 0; if (rb) svc = { t: R.p2t % 9, jobs: [['Tyres', 3], ['Fuel', 3], ['Bodywork', 3]], car: R.remote }; }
      else if (b.svc) svc = b.svc;
      cr.update(dt, svc); }
    if (pit.pad) pit.pad.material.opacity = me.inPit && !busy ? .65 + Math.sin(T * 6) * .35 : .8;
    if (me.inPit && !busy && R.state === 'go') { const d = Math.hypot(pit.x - me.x, pit.z - me.z), ahead = (pit.x - me.x) * Math.sin(me.th) + (pit.z - me.z) * Math.cos(me.th) > 0; setTxt('hEvent', ahead ? tx('Your pit box') + '  ' + Math.round(d) + ' m' : ''); R.pitHint = true; } else if (R.pitHint) { R.pitHint = false; setTxt('hEvent', ''); } }
  // --- pickups
  const now = R.t;
  for (const k of R.picks) {
    if (k.t > now) { k.m.visible = false; if (k.t !== Infinity) continue; else continue; }
    if (k.t === Infinity) continue;
    k.m.visible = true; k.m.rotation.y += dt * 2.5; k.m.position.y = k.y + Math.sin(now * 3 + k.x) * .18;
    if ((me.x - k.x) ** 2 + (me.z - k.z) ** 2 < 5.5 && R.state === 'go') {
      k.t = now + (k.nitro ? 14 : 25); audio.pickup(k.nitro);
      if (k.fix) { k.t = now + 40; const ty = me.tyre, fu = me.fuel; me.repair(); me.tyre = ty; me.fuel = fu; audio.wrench(); flash('Repaired', false, 900); for (let i = 0; i < 16; i++) R.fx.glow.emit(k.x, k.y, k.z, (Math.random() - .5) * 7, Math.random() * 6, (Math.random() - .5) * 7, .45, .22, 0, .3, 1, .45, 1, 7); }
      else if (k.nitro) { me.nitro = Math.min(1, me.nitro + .5); for (let i = 0; i < 14; i++) R.fx.glow.emit(k.x, k.y, k.z, (Math.random() - .5) * 8, Math.random() * 6, (Math.random() - .5) * 8, .4, .25, 0, .3, .7, 1, 1, 6); }
      else { R.coins += k.gold ? 200 : 25; if (k.gold) { k.t = Infinity; endEvent('Golden coin: +200'); } for (let i = 0; i < 6; i++) R.fx.glow.emit(k.x, k.y, k.z, (Math.random() - .5) * 5, 2 + Math.random() * 4, (Math.random() - .5) * 5, .35, .18, 0, 1, .8, .2, 1, 9); }
    }
  }
  // --- rain rolls in: less grip, wet shine on the road, darker sky
  if (R.t > R.rainAt && R.wet < 1) { if (R.wet === 0) { flash('Rain', true, 1600); radio('Rain. Brake earlier — box for wet tyres if it gets heavy.', true); } R.wet = Math.min(1, R.wet + dt / 9); tr.wet = R.wet;
    for (const [m, r0, m0] of R.roadMats) { m.roughness = r0 - (r0 - .28) * R.wet; m.metalness = m0 + (.35 - m0) * R.wet; }
    scene.fog.density = baseFog * (1 + .5 * R.wet); sun.intensity = baseSun * (1 - .35 * R.wet); hemi.intensity = baseHemi * (1 - .2 * R.wet); }
  R.haze += ((R.ev.cur && R.ev.cur.type === 'haze' ? 1 : 0) - R.haze) * Math.min(1, dt * .8); scene.fog.density = baseFog * (1 + .5 * R.wet) * (1 + 4.5 * R.haze);
  const sc = renderer.domElement.height / (2 * Math.tan(camera.fov * Math.PI / 360));
  ambAt.position.set(R.attract ? camera.position.x : cam.look.x, (R.attract ? camera.position.y : cam.look.y + 7), R.attract ? camera.position.z : cam.look.z); R.ambient.update(dt, ambAt, R.wet, sc);   // dust and rain live around the cars, where the beams are
  // --- sun disc + post-processing drivers
  const d = R.sunDir || tr.theme.sunDir, l = Math.hypot(d[0], d[1], d[2]);
  if (sunDisc) { sunDisc.position.set(camera.position.x + d[0] / l * 3400, camera.position.y + d[1] / l * 3400, camera.position.z + d[2] / l * 3400); sunDisc.lookAt(camera.position); sunDisc.visible = R.wet < .5; }
  if (!R.lit && R.wet > .3) { R.lit = true; for (const c of R.cars) c.setLights(true); }      // lights come on in the rain
  updateLights(dt);
  if (tr.cullables.length && frameN % 3 === 0) { const D = (gfx === 'high' ? 280 : gfx === 'medium' ? 210 : 160), cx = R.attract ? camera.position.x : cam.look.x, cz = R.attract ? camera.position.z : cam.look.z; for (const c of tr.cullables) { const d2 = (c.x - cx) ** 2 + (c.z - cz) ** 2, m = c.m; m.visible = d2 < D * D; const lod = m.userData.lod; if (lod && m.visible) { const w = d2 < 8100 ? 0 : 1; if (m.userData.cur !== w) { m.userData.cur = w; m.geometry = lod[w]; } } } }   // draw distance, and simpler figures beyond 90 m
  hitPulse *= Math.exp(-dt * 5); fovPunch *= Math.exp(-dt * 6);
  if (post) {
    const u = post.u; u.tilt.value = R.attract ? .7 : CAMS[camMode].fixed ? .3 : 0; u.time.value = R.t; u.hit.value = hitPulse; u.wet.value = R.wet; u.speed.value += ((me.nitroOn ? .9 : clamp((me.speed - 40) / 40, 0, .4)) - u.speed.value) * Math.min(1, dt * 5);
    if (sunDisc && sunDisc.visible) { const v = sunDisc.position.clone().project(camera); const on = v.z < 1 ? clamp(1.5 - Math.max(Math.abs(v.x), Math.abs(v.y)), 0, 1) : 0; u.sunPos.value.set(v.x * .5 + .5, v.y * .5 + .5); u.sunVis.value += (on - u.sunVis.value) * Math.min(1, dt * 4); } else u.sunVis.value = 0;
  }
}

function updateRace(dt) {
  const tr = R.track, me = R.player;
  if (R.state === 'wait') { R.waitT += dt; if (R.waitT > 1) { R.waitT = 0; room && room.send({ k: 'loaded' }); checkGo(); } }
  if (R.state === 'count') {
    R.countT -= dt; const n = Math.min(5, Math.floor((3.6 - R.countT) / .6)), L = $('lights').children;
    if (n > R.lightN && R.countT > 0) { R.lightN = n; for (let i = 0; i < 5; i++) L[i].className = i < n ? 'red' : ''; audio.beep(330, .12); }
    if (R.countT <= 0) { R.state = 'go'; for (const l of L) l.className = 'go'; audio.beep(660, .5); flash('Go', false, 800); setTimeout(() => $('lights').classList.remove('show'), 900); }
  }
  const live = R.state !== 'count' && R.state !== 'wait';
  if (live && R.state !== 'over') R.t += dt;

  // AI decisions once per frame (also the player's autopilot after the flag)
  { const tn2 = me.tn, nx = R.nextComp && R.nextComp !== 'auto' ? ' › ' + COMP_LETTER[R.nextComp] : '', lo = tn2.tOpt - tn2.tSpan, hi = tn2.tOpt + tn2.tSpan;
    setTxt('hTyreLbl', (COMP_LETTER[tn2.comp] || '?') + ' ' + Math.round(me.tT) + '°' + nx);
    const col = me.tT < lo - 12 ? '#38bdf8' : me.tT < lo ? '#7dd3fc' : me.tT <= hi ? '' : me.tT < hi + 14 ? '#f59e0b' : '#ef4444';      // blue: cold, normal colour: in the window, orange/red: overheating
    if (hudCache.tyreCol !== col) { hudCache.tyreCol = col; if (col) $('gTyre').style.setProperty('--c', col); else $('gTyre').style.removeProperty('--c'); } }
  for (const [car, ai] of R.ais) {
    if (car.out || (car === me && R.state !== 'done' && R.state !== 'over' && !R.demo)) continue;
    if (car !== me && live) { const left = R.laps - Math.max(0, car.lap), short = car.fuelK > 0 && car.fpl && car.fuel < car.fpl * Math.min(left, 3) * 1.05 && left > 1, ahead = R.cars.some(o => o !== car && !o.out && o.prog > car.prog && (o.prog - car.prog) * tr.spacing < Math.max(18, car.speed * 1.2)); car.pace = short || car.tyre < .35 ? 0 : ahead && car.tyre > .5 ? 2 : 1; }   // AI manages its pace like a driver: saves when fuel or tyres are short, pushes when a car is within reach
    car.held = !live || R.t < (car.holdT || 0); ai.rt = R.t; aiDrive(car, tr, ai, R.sc ? R.cars.concat([R.sc.car]) : R.cars, dt);      // the safety car is a car like any other: the field slows behind it
    if (car !== me) ai.boost = R.rules === 'arcade' ? ((me.prog - car.prog) * tr.spacing > 50 ? 1.08 : (me.prog - car.prog) * tr.spacing < -70 ? .93 : 1) : 1;   // Arcade keeps the pack together; Professional never touches the cars
    if (car !== me && live) aiPit(car, ai, dt);
    if (car.finished) { ai.inp.throttle *= .5; }
    if (live && !ai.pitT) { car.stuck = car.speed < 1.5 ? car.stuck + dt : 0; if (car.stuck > 2.5 && car.stranded) { tow(car); car.stuck = 0; } else if (car.stuck > 2.5) { (R.respLog = R.respLog || []).push(car.name + ' t' + (R.t | 0) + ' idx' + car.idx + ' hp' + car.health.toFixed(2) + ' f' + car.dmg.front.toFixed(2) + ' ty' + car.tyre.toFixed(2) + ' oil' + R.slicks.length + ' pitd' + Math.hypot(car.x - R.pit.x, car.z - R.pit.z).toFixed(0)); respawn(car); car.stuck = 0; R.respawns = (R.respawns || 0) + 1; } }
  }
  acc += dt; let steps = 0; while (acc >= H && steps++ < 8) { acc -= H; physics(H, live); }
  if (R.remote) R.remote.netStep(dt, tr, performance.now());
  for (const c of R.cars) progress(c);

  // drift scoring
  const D = R.D;
  if (R.state === 'go') {
    if (me.drifting) { D.time += dt; D.mult = 1 + Math.min(4, Math.floor(D.time / 1.5)); D.combo += Math.abs(me.beta) * me.speed * dt * 6 * D.mult; D.grace = .9; }
    else if (D.combo > 0) { D.grace -= dt; if (D.grace <= 0) { if (D.combo > 150) flash('+' + Math.round(D.combo), false, 900); bankDrift(); } }
    // wrong way
    const p = tr.path[me.idx]; me.wrong = (me.vx * p.tx + me.vz * p.tz < -4) ? me.wrong + dt : 0;
    if (me.wrong > 1.2) flash('Wrong way', true, 400);
  }
  if (R.state === 'done') { R.doneT += dt; if (R.doneT > 2.2) showResults(); }

  // network
  if (R.mode === 'online' && room) { R.sendT += dt; if (R.sendT >= 1 / TUNE.net.hz) { R.sendT = 0; room.send({ k: 's', p: me.netPack() }); }
    R.pingT = (R.pingT || 0) + dt; if (R.pingT > 2) { R.pingT = 0; room.send({ k: 'ping', t: performance.now() }); }
    R.stT = (R.stT || 0) + dt; if (R.stT > 1) { R.stT = 0; const D = me.dmg; room.send({ k: 'st', d: [D.front, D.rear, D.left, D.right].map(v => +v.toFixed(2)), ty: +me.tyre.toFixed(2), w: me.wetTyres ? 1 : 0, lm: me.lamps.map(l => l.ok ? 1 : 0), lo: me.lightsOn ? 1 : 0, pt: [me.parts.engine, me.parts.gearbox, ...me.parts.wheels].map(v => +v.toFixed(2)) }); }   // condition, tyres and lights, re-sent every second so both screens agree
    const nb = R.remote && R.remote.nb; setTxt('hPing', (R.ping != null ? Math.round(R.ping) + ' ms' : '…') + (nb ? ' · buffer ' + Math.round(nb.delay) + ' ms' : '')); }

  raceExtras(dt);
  // visuals
  const detail = pixelRatio < 1.2 ? .6 : 1;
  if (tr2Tick(tr), !$('tele').hidden) telemetry(me, dt);
  for (const c of R.cars) { c.render(dt, tr, c.isRemote ? 1 : clamp(acc / H, 0, 1)); c.effects(dt, R.fx, tr, c === me ? detail : detail * .6); }
  R.fx.smoke.update(dt); R.fx.glow.update(dt); R.fx.sparks.update(dt); R.fx.skids.flush(); R.debris.update(dt, tr, R.cars); if (R.people) R.people.update(dt, R.cars, tr); R.props.update(dt, R.cars, tr, (car, power, x, z) => { if (car === me) { audio.crash(power * .7); hitPulse = Math.max(hitPulse, Math.min(.6, power / 22)); if (isTouch && navigator.vibrate) navigator.vibrate(20); } for (let i = 0; i < 6; i++) R.fx.smoke.emit(x, car.y + .3, z, (Math.random() - .5) * 4, 1 + Math.random() * 2, (Math.random() - .5) * 4, .6, .5, 2.5, .7, .66, .6, .25); });
  updateCamera(dt);
  const sc = renderer.domElement.height / (2 * Math.tan(camera.fov * Math.PI / 360)); R.fx.smoke.mat.uniforms.uScale.value = R.fx.glow.mat.uniforms.uScale.value = sc;
  updateHUD(dt);
  const skid = (me.slipR > .16 && me.speed > 6) || me.wspin > .12 || (me.locked && me.speed > 3);
  if (me.shiftEvt) { audio.shift(me.shiftEvt, Math.min(1, me.load * (me.shiftT > 0 ? 5 : 1)), me.rpm, me.spec.pops); me.shiftEvt = 0; }                      // one event per completed gear change
  { const near = R.cars.filter(c => c !== me && !c.out).map(c => ({ c, d: Math.hypot(c.x - me.x, c.z - me.z) })).sort((a, b) => a.d - b.d).slice(0, 3);
    { const rt = new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld, 0); near.forEach(o => { const dx = o.c.x - me.x, dz = o.c.z - me.z, dd = Math.hypot(dx, dz) || 1; o.pan = clamp((dx * rt.x + dz * rt.z) / 26, -1, 1); o.dop = clamp(-(((o.c.vx - me.vx) * dx + (o.c.vz - me.vz) * dz) / dd) / 343 * 1.5, -.05, .05); }); }
    audio.rivals(near.map(({ c, d, pan, dop }) => ({ pan, dop, snd: c.spec.snd, dist: d, rpm: c.isRemote ? c.spec.idle + Math.min(1, c.speed / c.spec.top) * (c.spec.red - c.spec.idle) * .8 : c.rpmR, load: c.isRemote ? .5 : c.load || 0 }))); }
  audio.ambient(dt, { on: !R.attract, day: !tr.theme.night, rain: R.wet > .3 }); if (!R.attract) { feel(me, dt); engineerTick(me, dt); }
  stepDynamicTime(dt); stepFloodlights(dt, me); updateRefl();
  { const cnt = k => me.wsurf.filter(v => v === k).length, tr0 = R.track; const surfK = me.grass > .5 ? 'grass' : R.wet > .5 ? 'wet' : 'road'; R.audioSurf = surfK;
    let zw = 0, zk = 'stand'; for (const z of tr0.audioZones || []) { const d = Math.hypot(me.x - z.x, me.z - z.z), q = clamp(1 - d / z.r, 0, 1) * z.w; if (q > zw) { zw = q; zk = z.kind; } } audio.zone(zw, zk); }
  audio.drive({ surf: R.audioSurf, tmpK: me.tmpK, soft: me.tn.comp === 'soft' ? 1.15 : me.tn.comp === 'hard' ? .85 : 1, rpm: me.rpmR, rpmN: me.rpm, load: R.state === 'done' ? .3 : me.load, limiter: me.limiter, turbo: Math.max(me.spec.turbo, me.up.eng > 0 ? 1 : 0) * (1 + me.up.eng * .25), running: true, sand: tr.def.theme === 'desert', kerb: me.speed > 2 && me.wsurf.includes(1) ? 1 : 0, speed: me.speed, skid: skid && me.grass < .5 ? clamp(me.slipR * 1.6 + me.wspin * .7, .25, 1) : 0, grip: me.grass < .5 ? Math.max(me.useF, me.useR) : 0, lock: me.lockF ? 1 : 0, spin: Math.min(1, me.wspin + me.wspinF), wet: R.wet, dirt: me.grass * clamp(me.speed / 20, 0, 1), nitro: me.nitroOn, brake: me.braking ? 1 : 0, rain: R.wet });
  adaptQuality(dt);
}

const _v1 = new THREE.Vector3(), _v2 = new THREE.Vector3();
// Critically damped spring: the value eases toward its target with continuous velocity, so the picture never jerks when the target jumps or turns.
function smoothDamp(cur, target, vel, smoothTime, dt) { const om = 2 / Math.max(.0001, smoothTime), x = om * dt, ex = 1 / (1 + x + .48 * x * x + .235 * x * x * x), ch = cur - target, tmp = (vel.v + om * ch) * dt; vel.v = (vel.v - om * tmp) * ex; return target + (ch + tmp) * ex; }
const zsm = (dt, sp) => cam.zs = (cam.zs ?? 1) + ((1 + .28 * clamp(sp / 40, 0, 1)) - (cam.zs ?? 1)) * (1 - Math.exp(-dt * .9));      // the speed pull-back is slow and smooth
function updateCamera(dt) {
  if (camera.view && camera.view.enabled && (R.attract || !CAMS[camMode].fixed)) camera.clearViewOffset();
  const me0 = R.player, pitWant = R.pit && (R.pit.busy || (me0.inPit && Math.hypot(me0.x - R.pit.x, me0.z - R.pit.z) < 18)) ? 1 / 1.5 : 1; R.pitZ = (R.pitZ ?? 1) + (pitWant - (R.pitZ ?? 1)) * (1 - Math.exp(-dt * 2.5)); const pz = R.pitZ;      // pit stop: the camera moves in 50% closer
  const me = R.player, m = CAMS[camMode], sp = me.speed, tr = R.track, X = me.rx ?? me.x, Z = me.rz ?? me.z;
  const d = R.sunDir || tr.theme.sunDir; sun.position.set(X + d[0] * 130, me.y + d[1] * 130, Z + d[2] * 130); sun.target.position.set(X, me.y, Z);
  if (sky) sky.position.set(X, 0, Z);
  if (R.marker) { R.marker.position.y = me.top + 2.3 + Math.sin(R.t * 2.6) * .07; R.marker.rotation.y = R.t * 1.1; R.marker.visible = !!m.fixed || !!m.follow; }
  if (R.attract) return attractCam(dt);
  if (m.fixed) {       // Circuit camera: fixed heading, smooth pan, a little look-ahead in the direction of travel, no shake
    const yaw = (tr.def.camYaw ?? .65) + (R.state === 'count' ? clamp(R.countT / 3.6, 0, 1) ** 2 * 1.5 : R.state === 'wait' ? 1.5 : 0), zk = (save.zoom || 1.5) * (camera.aspect < 1 ? 1.35 : 1) / 1.5, la = clamp(sp * .14, 0, 5) * zk * (R.state === 'go' || R.state === 'done' ? 1 : .3), lx = X + (sp > 1 ? me.vx / sp : 0) * la, lz = Z + (sp > 1 ? me.vz / sp : 0) * la, k = 1 - Math.exp(-dt * 3), intro = R.state === 'count' ? clamp(R.countT / 3.6, 0, 1) ** 2 : R.state === 'wait' ? 1 : 0, z = (camera.aspect < 1 ? 1.35 : 1) * (save.zoom || 1.5) * (1 - .62 * intro) * pz * zsm(dt, sp) / 1.3;      // pulls back a little with speed to show more road; the whole follow camera is 30% closer than before
    { cam.vx = cam.vx || { v: 0 }; cam.vz = cam.vz || { v: 0 }; const far = Math.hypot(lx - cam.look.x, lz - cam.look.z) > 45, st = far ? .15 : .5; cam.look.x = smoothDamp(cam.look.x, lx, cam.vx, st, dt); cam.look.z = smoothDamp(cam.look.z, lz, cam.vz, st, dt); cam.look.y += (me.y - cam.look.y) * k; }
    camera.position.set(cam.look.x - Math.sin(yaw) * m.d * z, cam.look.y + m.h * z * (1 - .45 * intro), cam.look.z - Math.cos(yaw) * m.d * z); if (hitPulse > .02) { const a = isTouch ? 0 : hitPulse * .3; camera.position.x += (Math.random() - .5) * a; camera.position.y += (Math.random() - .5) * a; camera.position.z += (Math.random() - .5) * a; }   // a short, small jolt when your car hits something
    camera.lookAt(cam.look); cam.pos.copy(camera.position); cam.yaw = yaw;
    {   // Comfortable look-ahead, the way a good top-down racer does it: the frame leans toward the road AHEAD OF THE CAR ON THE TRACK, not toward wherever the nose
      // happens to point, so slides and spins don't swing the picture. The direction, the amount and the position are all spring-smoothed over about a second,
      // the car stays inside a small band of the screen, and on a phone that band sits above the thumbs.
      const Wd = renderer.domElement.width, Hd = renderer.domElement.height; camera.clearViewOffset(); camera.updateMatrixWorld(true);
      cam.spd = (cam.spd ?? 0) + (sp - (cam.spd ?? 0)) * (1 - Math.exp(-dt * 1.1));
      const ahead = Math.round((22 + cam.spd * .9) / tr.spacing), pa = tr.path[(me.idx + ahead) % tr.n], pb = tr.path[(me.idx + Math.round(ahead * .5)) % tr.n];
      let dx = (pa.tx + pb.tx) * .5 * .85 + (sp > 3 ? me.vx / sp : pa.tx) * .15, dz = (pa.tz + pb.tz) * .5 * .85 + (sp > 3 ? me.vz / sp : pa.tz) * .15; const dl = Math.hypot(dx, dz) || 1; dx /= dl; dz /= dl;
      const a = _v1.set(X, me.y, Z).project(camera), b = _v2.set(X + dx * 20, me.y, Z + dz * 20).project(camera); let sx = (b.x - a.x) * camera.aspect, sy = b.y - a.y; const sl = Math.hypot(sx, sy) || 1; sx /= sl; sy /= sl;
      cam.dvx = cam.dvx || { v: 0 }; cam.dvy = cam.dvy || { v: 0 }; cam.dX = smoothDamp(cam.dX ?? 0, sx, cam.dvx, 1.0, dt); cam.dY = smoothDamp(cam.dY ?? 1, sy, cam.dvy, 1.0, dt);
      const dn = Math.hypot(cam.dX, cam.dY) || 1, f = (.25 + .75 * clamp(cam.spd / 22, 0, 1)) * (1 - intro);
      let tgx = -cam.dX / Math.max(1, dn) * .44 * f, tgy = -cam.dY / Math.max(1, dn) * .42 * f;
      if (isTouch) { tgy = clamp(tgy * .8 + .2, -.12, .56); tgx = clamp(tgx, -.46, .46); }       // phone: keep the car above the thumb controls
      cam.svx = cam.svx || { v: 0 }; cam.svy = cam.svy || { v: 0 }; cam.sx = smoothDamp(cam.sx ?? 0, tgx - a.x, cam.svx, .85, dt); cam.sy = smoothDamp(cam.sy ?? 0, tgy - a.y, cam.svy, .85, dt);
      camera.setViewOffset(Wd, Hd, -cam.sx * Wd / 2, cam.sy * Hd / 2, Wd, Hd); }
    if (Math.abs(camera.fov - m.fov) > .05) { camera.fov = cam.fov = m.fov; camera.updateProjectionMatrix(); }
    shake = 0; return;
  }
  let want = me.th, rate = 4.2;
  if (R.state === 'over' || R.state === 'done') { want = me.th + 2.4; rate = 1.2; }
  else if (m.follow) { const p = tr.path[(me.idx + Math.round(14 / tr.spacing)) % tr.n]; want = Math.atan2(p.tx, p.tz); rate = 1.5; }
  else if (sp > 6 && me.vf > 0) want = me.th + wrap(Math.atan2(me.vx, me.vz) - me.th) * .55;
  cam.yaw += wrap(want - cam.yaw) * (1 - Math.exp(-dt * rate));
  const portrait = camera.aspect < 1 ? 1.25 : 1, dist = m.d * portrait * pz * (m.follow ? 1 + clamp(sp / 60, 0, 1) * .18 : 1);
  const tx = X - Math.sin(cam.yaw) * dist, tz = Z - Math.cos(cam.yaw) * dist;
  let ty = me.y + m.h * portrait; ty = Math.max(ty, tr.height(tx, tz) + 1.2);
  const k = 1 - Math.exp(-dt * (m.follow ? 4.5 : 7));
  cam.pos.x += (tx - cam.pos.x) * k; cam.pos.y += (ty - cam.pos.y) * (1 - Math.exp(-dt * 4)); cam.pos.z += (tz - cam.pos.z) * k;
  const lead = m.look + (m.follow ? clamp(sp * .12, 0, 5) : 0), lx = X + Math.sin(me.th) * lead, lz = Z + Math.cos(me.th) * lead, kl = 1 - Math.exp(-dt * (m.follow ? 6 : 10));
  cam.look.x += (lx - cam.look.x) * kl; cam.look.y += (me.y + .8 - cam.look.y) * kl; cam.look.z += (lz - cam.look.z) * kl;
  shake *= Math.exp(-dt * 6);
  const rough = (me.grass * clamp(sp / 30, 0, 1) * .04 + shake * .25);
  camera.position.set(cam.pos.x + (Math.random() - .5) * rough, cam.pos.y + (Math.random() - .5) * rough, cam.pos.z + (Math.random() - .5) * rough);
  camera.lookAt(cam.look);
  const fov = m.fov + clamp(sp * (m.follow ? .08 : .22), 0, 14) + (me.nitroOn ? (m.follow ? 4 : 9) : 0) - fovPunch; cam.fov += (fov - cam.fov) * (1 - Math.exp(-dt * 5));
  if (Math.abs(camera.fov - cam.fov) > .05) { camera.fov = cam.fov; camera.updateProjectionMatrix(); }
}
// Menu showcase: a live AI race filmed by a director that cuts between an orbit, a crane, a low chase and a flyover.
const tr2Tick = t => { if (!t.tick) return; const a = R.attract ? R.cars[(Math.floor(R.t / 7) * 3) % R.cars.length] : R.player, b = rank()[0]; t.tick(performance.now() / 1000, a.x, a.z, b.x, b.z); };
let shotId = -1;
function attractCam(dt) {
  const T = R.t, n = Math.floor(T / 7), k = n % 4, u = (T % 7) / 7, c = R.cars[(n * 3) % R.cars.length], X = c.rx ?? c.x, Z = c.rz ?? c.z, sn = Math.sin(c.th), cs = Math.cos(c.th);
  let px, py, pz, lx = X, ly = c.y + .8, lz = Z, fov = 40;
  if (k === 0) { const a = T * .22; px = X + Math.cos(a) * 13; pz = Z + Math.sin(a) * 13; py = c.y + 3.2 + Math.sin(T * .4) * 1.2; }
  else if (k === 1) { px = X - 22 + u * 8; pz = Z - 20; py = c.y + 40 - u * 16; fov = 34; }
  else if (k === 2) { px = X - sn * 7.5 + cs * 1.6; pz = Z - cs * 7.5 - sn * 1.6; py = c.y + 2; lx = X + sn * 8; lz = Z + cs * 8; fov = 62; }
  else { px = X - sn * 6 + Math.cos(T * .3) * 6; pz = Z - cs * 6 + Math.sin(T * .3) * 6; py = c.y + 52 - u * 10; lx = X + sn * 10; lz = Z + cs * 10; fov = 30; }
  py = Math.max(py, R.track.height(px, pz) + 1.2);
  if (shotId !== n) { shotId = n; cam.pos.set(px, py, pz); cam.look.set(lx, ly, lz); }
  const q = 1 - Math.exp(-dt * 4); cam.pos.x += (px - cam.pos.x) * q; cam.pos.y += (py - cam.pos.y) * q; cam.pos.z += (pz - cam.pos.z) * q; cam.look.x += (lx - cam.look.x) * q; cam.look.y += (ly - cam.look.y) * q; cam.look.z += (lz - cam.look.z) * q;
  camera.position.copy(cam.pos); camera.lookAt(cam.look); if (Math.abs(camera.fov - fov) > .05) { camera.fov = cam.fov = fov; camera.updateProjectionMatrix(); }
  if (R.marker) R.marker.visible = false;
}
// developer telemetry (T): what the tyres are actually doing
let teleFps = 60;
function telemetry(me, dt) {
  const deg = r => (r * 57.3).toFixed(1).padStart(6), pc = v => String(Math.round(Math.min(v, 1.5) * 100)).padStart(4) + '%'; teleFps += (1 / Math.max(dt, .001) - teleFps) * .05;
  $('tele').textContent = `speed      ${(me.speed * 3.6).toFixed(0).padStart(5)} km/h   gear ${me.gear}\nsteer      ${deg(me.steer)}°\nslip front ${deg(me.aF)}°   rear ${deg(me.slipR)}°\nbody slip  ${deg(me.beta)}°   yaw ${me.r.toFixed(2).padStart(6)} rad/s\ngrip used  F${pc(me.useF)}  R${pc(me.useR)}\naccel      lat ${(me.ayS / 9.81).toFixed(2).padStart(5)} g  long ${(me.axS / 9.81).toFixed(2).padStart(5)} g\nsurface    ${me.wsurf.map(v => 'GKRWP'[v]).join(' ')}   (FL FR RL RR)\nfuel ${pc(me.fuel)}  tyres ${pc(me.tyre)}  body ${pc(me.health)}\ndamage     F${pc(me.dmg.front)} R${pc(me.dmg.rear)} L${pc(me.dmg.left)} R${pc(me.dmg.right)}\nassist ${save.assist} · ${me.spec.drive} · physics ${TUNE.hz} Hz · render ${teleFps.toFixed(0)} fps`;
}

// ---------------- HUD ----------------
let mini = null;
function buildMini() {
  const b = R.track.box, s = 156 / Math.max(b.maxx - b.minx, b.maxz - b.minz), ox = 90 - (b.minx + b.maxx) / 2 * s, oz = 90 - (b.minz + b.maxz) / 2 * s;
  const bg = document.createElement('canvas'); bg.width = bg.height = 180; const c = bg.getContext('2d');
  c.lineJoin = 'round'; c.beginPath(); R.track.path.forEach((p, i) => i ? c.lineTo(p.x * s + ox, p.z * s + oz) : c.moveTo(p.x * s + ox, p.z * s + oz)); c.closePath();
  c.strokeStyle = 'rgba(23,24,28,.85)'; c.lineWidth = 9; c.stroke(); c.strokeStyle = '#f3f4f6'; c.lineWidth = 3.5; c.stroke();
  const p0 = R.track.path[0]; c.fillStyle = '#e3262e'; c.fillRect(p0.x * s + ox - 3, p0.z * s + oz - 3, 6, 6);
  mini = { bg, s, ox, oz, ctx: $('mini').getContext('2d') };
}
const hudCache = {};
const setTxt = (id, v) => { if (hudCache[id] !== v) { hudCache[id] = v; $(id).textContent = v; } };
function updateHUD(dt) {
  const me = R.player, order = rank(), pos = order.indexOf(me) + 1;
  setTxt('hPos', String(pos)); setTxt('hLapN', String(clamp(me.lap + 1, 1, R.laps)));
  setTxt('hTime', fmt(me.lap < 0 ? 0 : Math.max(0, R.t - me.lapStart) * 1000));
  setTxt('hSpeed', String(Math.round(Math.abs(me.vf) * (save.units === 'mph' ? 2.237 : 3.6)))); setTxt('hGear', me.gear === 0 ? 'R' : String(me.gear));
  const ring = (id, txt, v) => { const k = Math.round(v * 100); if (hudCache[id] !== k) { hudCache[id] = k; const el = $(id); el.style.setProperty('--v', k); el.classList.toggle('bad', k < 30); $(txt).textContent = k; } };
  ring('gBody', 'hBody', me.health); ring('gFuel', 'hFuel', me.fuel); ring('gTyre', 'hTyre', me.tyre);
  { const P = me.parts, v = [P.engine, P.gearbox, ...P.wheels], key = v.map(x => x > .66 ? 2 : x > .25 ? 1 : 0).join('') + (me.fpl ? (me.fuel / me.fpl).toFixed(1) : '');
    if (hudCache.parts !== key) { hudCache.parts = key; ['pE', 'pG', 'pW0', 'pW1', 'pW2', 'pW3'].forEach((id, i) => { $(id).className = v[i] > .66 ? 'bad' : v[i] > .25 ? 'warn' : ''; }); $('hFuelL').textContent = me.fuelK > 0 && me.fpl ? (me.fuel / me.fpl).toFixed(1) + ' ' + tx('laps of fuel') : ''; } }
  if (R.arc) { $('hNitro').style.width = (me.nitro * 100).toFixed(0) + '%'; setTxt('hDriftPts', String(R.drift)); setTxt('hCombo', R.D.combo > 5 ? '+' + Math.round(R.D.combo) + '  ×' + R.D.mult : ''); }
  // leader plus the cars either side of the player
  const rows = [...new Set([0, pos - 2, pos - 1, pos].filter(i => i >= 0 && i < order.length))], key = rows.map(i => i + order[i].name).join();
  const gapOf = c => c === me || c.out || c.finished ? '' : ((c.prog - me.prog) > 0 ? '−' : '+') + Math.min(99, Math.abs(c.prog - me.prog) * R.track.spacing / Math.max(12, (me.speed + c.speed) / 2)).toFixed(1), gk = Math.floor(R.t * 2);
  if ((key !== R.orderKey || gk !== R.gapK) && R.cars.length > 1) { R.orderKey = key; R.gapK = gk; $('order').innerHTML = rows.map((i, q) => { const c = order[i]; return `<li class="${c === me ? 'me' : ''}${q && rows[q - 1] !== i - 1 ? ' gap' : ''}" style="border-left-color:${hex(c.color)}"><span>${i + 1}</span>${c.name}<em>${gapOf(c)}</em></li>`; }).join(''); }
  if (hudCache.pace !== me.pace) { hudCache.pace = me.pace; const el = $('hPace'); el.textContent = tx(TUNE.pace[me.pace].name); el.className = 'p' + me.pace; }
  if (frameN & 1) return;                 // the map redraws every other frame
  const c = mini.ctx; c.clearRect(0, 0, 180, 180); c.drawImage(mini.bg, 0, 0);
  c.fillStyle = '#19a7ce'; c.fillRect(R.pit.x * mini.s + mini.ox - 3.5, R.pit.z * mini.s + mini.oz - 3.5, 7, 7);
  for (const car of R.cars) { if (car === me) continue; c.fillStyle = hex(car.color); c.strokeStyle = '#17181c'; c.lineWidth = 1.5; c.beginPath(); c.arc(car.x * mini.s + mini.ox, car.z * mini.s + mini.oz, 4.5, 0, 7); c.fill(); c.stroke(); }
  { const mx = me.x * mini.s + mini.ox, mz = me.z * mini.s + mini.oz; c.fillStyle = 'rgba(45,255,114,.28)'; c.beginPath(); c.arc(mx, mz, 11, 0, 7); c.fill(); c.fillStyle = '#2dff72'; c.strokeStyle = '#ffffff'; c.lineWidth = 2.4; c.beginPath(); c.arc(mx, mz, 6.5, 0, 7); c.fill(); c.stroke(); c.fillStyle = '#ffffff'; c.beginPath(); c.moveTo(mx + Math.sin(me.th) * 11, mz + Math.cos(me.th) * 11); c.lineTo(mx + Math.sin(me.th + 2.5) * 6.5, mz + Math.cos(me.th + 2.5) * 6.5); c.lineTo(mx + Math.sin(me.th - 2.5) * 6.5, mz + Math.cos(me.th - 2.5) * 6.5); c.closePath(); c.fill(); }      // the player: electric green with a heading arrow, unlike any car colour
}

// ---------------- results + rewards ----------------
function showResults() {
  R.state = 'over'; const me = R.player, order = rank(), pos = order.indexOf(me) + 1, id = R.track.def.id; let reward = 0, title, sub = '';
  const best = me.laps.length ? Math.min(...me.laps) : null;
  if (R.mode === 'race') { reward = Math.round(([600, 420, 300, 220, 160, 120][pos - 1] || 90) * [.8, 1, 1.3][R.diff]) + Math.round(R.drift / 40); title = R.elim ? (pos === 1 ? 'Last car standing' : 'Knocked out · P' + pos) : pos === 1 ? 'Winner' : (ORD[pos - 1] || 'P' + pos) + (ORD[pos - 1] ? ' place' : ''); sub = 'Best lap ' + fmt(best); if (R.endu) reward = Math.round(reward * 1.8); if (pos === 1) for (let i = 0; i < 260; i++) { const h = Math.random(); R.fx.glow.emit(me.x + (Math.random() - .5) * 26, me.y + 10 + Math.random() * 14, me.z + (Math.random() - .5) * 26, (Math.random() - .5) * 4, -2 - Math.random() * 3, (Math.random() - .5) * 4, 3 + Math.random() * 2, .3, 0, h < .33 ? 1 : .2, h > .33 && h < .66 ? 1 : .5, h > .66 ? 1 : .25, 1, 2); } }
  else if (R.mode === 'online') { reward = (pos === 1 ? 500 : 220) + Math.round(R.drift / 40); title = pos === 1 ? 'You win' : 'You lose'; sub = 'Best lap ' + fmt(best); }
  else if (R.mode === 'trial') { reward = 150 + (R.newBest ? 300 : 0); title = fmt(best); sub = R.newBest ? 'New personal best' : 'Personal best ' + fmt(save.best[id]); }
  else { const prev = save.bestDrift[id] || 0, rec = R.drift > prev; if (rec) save.bestDrift[id] = R.drift; reward = Math.round(R.drift / 15) + (rec ? 200 : 0); title = R.drift.toLocaleString() + ' pts'; sub = rec ? 'New drift record' : 'Record ' + prev.toLocaleString(); }
  const st = save.stats, add = (k, v) => { st[k] = (st[k] || 0) + v; };
  add('races', 1); add('coins', R.coins || 0); add('pits', R.pits); add('overtakes', R.overtakes); add('km', Math.max(0, me.prog) * R.track.spacing / 1000);
  if (R.cars.length > 1) { if (pos === 1) add('wins', 1); if (pos <= 3) add('podiums', 1); if (pos === 1 && R.crashes === 0) add('clean', 1); }
  st.driftBest = Math.max(st.driftBest || 0, R.drift);
  let stars = -1; lastPassed = true;
  if (R.story) {
    const ev = R.story, prev = save.story[ev.id] || 0; stars = starsFor(ev.goal, { pos, bestLap: best, drift: R.drift }); lastPassed = stars > 0;
    reward = stars * 250 + (stars > 0 && !prev ? 400 : 0) + Math.round(R.drift / 40) + (ev.final && stars > 0 && !prev ? 5000 : 0);
    if (stars > prev) save.story[ev.id] = stars;
    title = stars > 0 ? (ev.final ? 'Champion' : 'Event cleared') : 'Not this time'; sub = (stars > 0 ? ev.win : ev.lose) + (stars > 0 && stars < 3 ? '  Next star: ' + goalText({ type: ev.goal.type, v: [ev.goal.v[stars]] }).toLowerCase() + '.' : '');
    $('resTitle').textContent = title; $('resSub').textContent = sub;
  }
  if (R.gp && save.gp) {
    const g = save.gp; order.forEach((c, i) => { g.pts[c.name] = (g.pts[c.name] || 0) + GP_PTS[i]; }); g.round++; const table = Object.entries(g.pts).sort((a, b) => b[1] - a[1]);
    title = tx('Round') + ' ' + g.round + '/' + GP_TRACKS.length + ' · ' + (pos === 1 ? tx('Winner') : 'P' + pos);
    if (g.round >= GP_TRACKS.length) { g.done = true; const champ = table[0][0] === me.name; if (champ) { reward += 3000; add('gpWins', 1); } title = champ ? tx('Grand Prix champion') : tx('Grand Prix finished') + ' · P' + (table.findIndex(e => e[0] === me.name) + 1); }
    sub = tx('Standings') + ':  ' + table.slice(0, 6).map((e, i) => (i + 1) + '. ' + e[0] + ' ' + e[1]).join('   ');
    $('resTitle').textContent = title; $('resSub').textContent = sub;
  }
  $('resStars').textContent = stars < 0 ? '' : '★'.repeat(stars) + '☆'.repeat(3 - stars);
  if (R.daily && save.daily !== R.daily.key && (R.mode !== 'race' || pos <= 3)) {
    const y = new Date(Date.now() - 864e5), yk = y.getFullYear() + '-' + (y.getMonth() + 1) + '-' + y.getDate();
    save.streak = save.daily === yk ? save.streak + 1 : 1; save.daily = R.daily.key; const bonus = 400 + Math.min(save.streak, 7) * 100; reward += bonus; toast('Daily challenge done: +' + bonus + ' · streak ' + save.streak);
  }
  const l0 = levelOf(save.xp); save.xp += 60 + Math.round(reward / 4); const l1 = levelOf(save.xp);
  if (l1 > l0) { reward += l1 * 200; setTimeout(() => toast('Level ' + l1 + ' — bonus ' + l1 * 200 + ' credits'), 2400); }
  reward += R.coins || 0; save.credits += reward; persist(); setTimeout(checkTrophies, 1200);
  $('resTitle').textContent = title; $('resSub').textContent = sub; $('resReward').textContent = '+' + reward + ' credits';
  const lead = order[0].finishTime;
  $('resTable').innerHTML = R.cars.length > 1
    ? order.map((c, i) => `<tr class="${c === me ? 'me' : ''}"><td>${i + 1}</td><td>${c.name}</td><td>${c.spec.name}</td><td>${c.finished ? (i ? '+' + ((c.finishTime - lead) / 1000).toFixed(2) : fmt(c.finishTime)) : 'still racing'}</td></tr>`).join('')
    : me.laps.map((l, i) => `<tr class="${l === best ? 'me' : ''}"><td>Lap ${i + 1}</td><td>${fmt(l)}</td></tr>`).join('') + `<tr><td>Drift score</td><td>${R.drift.toLocaleString()}</td></tr>`;
  $('againBtn').textContent = R.mode === 'online' ? 'Back to lobby' : R.gp ? tx(save.gp && save.gp.done ? 'Finish' : 'Next round') : R.story ? (lastPassed ? 'Continue' : 'Try again') : tx('Race again');
  show('results', true);
}

// ---------------- adaptive quality: protect the frame rate on weak devices ----------------
let fpsT = 0, fpsN = 0;
function adaptQuality(dt) {
  fpsT += dt; fpsN++;
  if (fpsT < 2) return; const fps = fpsN / fpsT; fpsT = fpsN = 0;
  if (save.gfx !== 'auto' || fps > 42 || R.attract) return;
  if (gfx === 'high') { setGfx('medium'); toast('Graphics lowered to keep the frame rate smooth'); }
  else if (pixelRatio > 1) { pixelRatio = Math.max(1, pixelRatio - .35); resize(); }
  else if (gfx === 'medium' && fps < 27) setGfx('low');
}

// ---------------- menu ----------------
const firstOpen = () => { const i = EVENTS.findIndex(e => !save.story[e.id]); return i < 0 ? EVENTS.length - 1 : i; };
const GP_TRACKS = ['nile', 'luxor', 'hurghada', 'aswan', 'midnight'], GP_PTS = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1, 0, 0];
function newGP() { const pool = CARS.filter(c => c.id !== save.car).sort(() => Math.random() - .5), names = [...NAMES].sort(() => Math.random() - .5), base = [.80, .89, .97][sel.diff]; save.gp = { round: 0, pts: {}, done: false, rivals: pool.slice(0, 7).map((c, i) => ({ name: names[i], car: c.id, skill: base + (6 - i) * .01, paint: PAINTS[(i * 3 + 2) % PAINTS.length] })) }; persist(); }
const gpOpts = () => ({ mode: 'race', gp: true, track: GP_TRACKS[save.gp.round], laps: 3, diff: sel.diff, rivals: save.gp.rivals, rules: save.rules, weather: save.gp.round === 2 ? 'rain' : 'clear', nRivals: 7 });
let menuView = '';
const menuBg = new MenuBg($('menuBg'));
// ---------------- menu showcase: the real cars, real physics and real lights on a small dirt arena ----------------
// Three game cars drift circles on loose dirt, driven through the same tyre model as a race. There is no circuit, no crowd and
// no scenery to draw, so it costs a fraction of a race. On Low graphics the 2D backdrop is used instead.
const arena = { on: false, g: null, cars: [], fx: null, t: 0, acc: 0, track: { def: { theme: 'night', id: 'arena' }, theme: THEMES.night, wet: .55, surf: () => 2, height: () => 0, escape: () => null }, spots: [] };   // a wet tarmac surface for the tyre model
function buildArena() {
  // Ground: a wet tarmac yard at night. Three layers: tiled asphalt (stone chips in dark binder) with a relief map, a one-off
  // map of where water is standing (those areas are mirror-smooth, so lamps and headlights glint in them), and painted markings.
  const g = arena.g = new THREE.Group(), cv = (w, h) => { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; };
  const ca = cv(512, 512), ka = ca.getContext('2d'), ia = ka.createImageData(512, 512), cb = cv(256, 256), kb = cb.getContext('2d'), ib = kb.createImageData(256, 256);
  // one tile is about 9 m of road at 1.8 cm a pixel: dark bitumen with thousands of stone chips of different greys and sizes showing through
  ka.fillStyle = '#1d1e22'; ka.fillRect(0, 0, 512, 512); kb.fillStyle = '#5a5a5a'; kb.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 26; i++) { const x = Math.random() * 512, y = Math.random() * 512, r = 60 + Math.random() * 120, gr = ka.createRadialGradient(x, y, 0, x, y, r), d = Math.random() < .5; gr.addColorStop(0, d ? 'rgba(0,0,0,.16)' : 'rgba(120,120,128,.07)'); gr.addColorStop(1, 'rgba(0,0,0,0)'); ka.fillStyle = gr; for (const ox of [-512, 0, 512]) for (const oy of [-512, 0, 512]) { ka.save(); ka.translate(ox, oy); ka.fillRect(x - r, y - r, r * 2, r * 2); ka.restore(); } }
  for (let i = 0; i < 15000; i++) { const x = Math.random() * 512, y = Math.random() * 512, big = Math.random() < .12, r = big ? 1.4 + Math.random() * 1.6 : .5 + Math.random() * .9, v = 46 + Math.random() * (big ? 96 : 60) | 0, warm = Math.random() < .15 ? 10 : 0;
    ka.fillStyle = `rgba(${v + warm},${v + warm * .5 | 0},${v + 2},${.55 + Math.random() * .4})`; ka.beginPath(); ka.ellipse(x, y, r, r * (.6 + Math.random() * .4), Math.random() * 3, 0, 7); ka.fill();
    if (big || Math.random() < .3) { kb.fillStyle = `rgba(255,255,255,${.25 + Math.random() * .5})`; kb.beginPath(); kb.arc(x / 2, y / 2, r / 2 + .4, 0, 7); kb.fill(); } }
  const tex = new THREE.CanvasTexture(ca); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 8; tex.wrapS = tex.wrapT = THREE.RepeatWrapping; tex.repeat.set(16, 16);
  const bump = new THREE.CanvasTexture(cb); bump.wrapS = bump.wrapT = THREE.RepeatWrapping; bump.repeat.set(16, 16);
  const SZ = 150, PX = 1024, toPx = m => (m / SZ + .5) * PX, pud = []; for (let i = 0; i < 16; i++) { const a = Math.random() * 6.28, r = 4 + Math.random() * 30; pud.push([Math.cos(a) * r, Math.sin(a) * r, 1.6 + Math.random() * 4.2, .5 + Math.random() * .7, Math.random() * 3]); }
  const cr = cv(PX, PX), kr = cr.getContext('2d'); kr.fillStyle = 'rgb(0,150,0)'; kr.fillRect(0, 0, PX, PX);                                   // green channel = roughness: damp tarmac everywhere...
  for (const [x, z, r, e, a] of pud) for (let q = 0; q < 5; q++) { const ox = toPx(x + (Math.random() - .5) * r), oy = toPx(z + (Math.random() - .5) * r * e), rr = r * (.5 + Math.random() * .5) / SZ * PX, gr = kr.createRadialGradient(ox, oy, rr * .55, ox, oy, rr); gr.addColorStop(0, 'rgba(0,10,0,1)'); gr.addColorStop(1, 'rgba(0,10,0,0)'); kr.fillStyle = gr; kr.beginPath(); kr.arc(ox, oy, rr, 0, 7); kr.fill(); }   // ...and glassy where water stands
  const rough = new THREE.CanvasTexture(cr);
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(SZ, SZ), new THREE.MeshStandardMaterial({ map: tex, bumpMap: bump, bumpScale: .6, roughnessMap: rough, roughness: 1, metalness: 0, envMapIntensity: 1.6 })); ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true; g.add(ground);
  // painted markings and the darker look of wet patches, as one transparent layer
  const cm = cv(2048, 2048), km = cm.getContext('2d'), P2 = m => (m / SZ + .5) * 2048, S2 = m => m / SZ * 2048;
  for (const [x, z, r, e, a] of pud) { const gr = km.createRadialGradient(P2(x), P2(z), S2(r) * .3, P2(x), P2(z), S2(r) * 1.1); gr.addColorStop(0, 'rgba(4,6,10,.5)'); gr.addColorStop(1, 'rgba(4,6,10,0)'); km.fillStyle = gr; km.beginPath(); km.ellipse(P2(x), P2(z), S2(r) * 1.1, S2(r * e) * 1.1, a, 0, 7); km.fill(); }
  // the life of a real surface: resurfaced strips, tar-sealed cracks, oil where cars have stood, a manhole and a drain
  for (const [x, z, w, h, d] of [[-12, -18, 9, 4.2, 1], [14, 6, 3.4, 11, 0], [-21, 13, 6, 3, 1], [5, -9, 14, 2.2, 0], [20, -22, 5, 5, 1]]) { km.fillStyle = d ? 'rgba(6,6,8,.3)' : 'rgba(120,120,126,.1)'; km.fillRect(P2(x), P2(z), S2(w), S2(h)); km.strokeStyle = 'rgba(4,4,5,.6)'; km.lineWidth = S2(.07); km.strokeRect(P2(x), P2(z), S2(w), S2(h)); }
  km.strokeStyle = 'rgba(3,3,4,.75)'; km.lineCap = 'round'; for (let i = 0; i < 14; i++) { let x = (Math.random() - .5) * 64, z = (Math.random() - .5) * 64, a = Math.random() * 6.28; km.lineWidth = S2(.04 + Math.random() * .05); km.beginPath(); km.moveTo(P2(x), P2(z)); for (let q = 0; q < 14; q++) { a += (Math.random() - .5) * .9; x += Math.cos(a) * 1.1; z += Math.sin(a) * 1.1; km.lineTo(P2(x), P2(z)); } km.stroke(); }
  for (let i = 0; i < 26; i++) { const sx = Math.random() < .5 ? -1 : 1, x = sx * (27.6 + Math.random() * 4), z = (Math.round((Math.random() - .5) * 17) + .5) * 2.7, r = .25 + Math.random() * .5, gr = km.createRadialGradient(P2(x), P2(z), 0, P2(x), P2(z), S2(r)); gr.addColorStop(0, 'rgba(2,2,3,.6)'); gr.addColorStop(1, 'rgba(2,2,3,0)'); km.fillStyle = gr; km.fillRect(P2(x - r), P2(z - r), S2(r * 2), S2(r * 2)); }
  for (const [x, z] of [[9, 17], [-17, -6]]) { km.fillStyle = 'rgba(38,36,34,.95)'; km.beginPath(); km.arc(P2(x), P2(z), S2(.42), 0, 7); km.fill(); km.strokeStyle = 'rgba(90,86,80,.9)'; km.lineWidth = S2(.03); km.stroke(); for (let q = -3; q <= 3; q++) { km.beginPath(); km.moveTo(P2(x - .3), P2(z + q * .09)); km.lineTo(P2(x + .3), P2(z + q * .09)); km.stroke(); } }
  km.fillStyle = 'rgba(20,20,20,.95)'; km.fillRect(P2(-24.6), P2(3), S2(.5), S2(.8)); km.strokeStyle = 'rgba(80,80,80,.9)'; for (let q = 0; q < 5; q++) { km.beginPath(); km.moveTo(P2(-24.55), P2(3.1 + q * .15)); km.lineTo(P2(-24.15), P2(3.1 + q * .15)); km.stroke(); }
  km.lineCap = 'butt'; km.strokeStyle = 'rgba(232,232,226,.82)'; km.fillStyle = 'rgba(232,232,226,.82)'; km.lineWidth = S2(.14);
  for (const sx of [-1, 1]) for (let i = -9; i <= 9; i++) { km.beginPath(); km.moveTo(P2(sx * 27), P2(i * 2.7)); km.lineTo(P2(sx * 32.2), P2(i * 2.7)); km.stroke(); }   // parking bays down two sides
  for (const sx of [-1, 1]) { km.beginPath(); km.moveTo(P2(sx * 27), P2(-24.3)); km.lineTo(P2(sx * 27), P2(24.3)); km.stroke(); }
  km.setLineDash([S2(3), S2(4.5)]); km.lineWidth = S2(.16); for (const z of [-30, 30]) { km.beginPath(); km.moveTo(P2(-40), P2(z)); km.lineTo(P2(40), P2(z)); km.stroke(); } km.setLineDash([]);   // lane lines of the access roads
  km.strokeStyle = 'rgba(250,196,26,.8)'; km.lineWidth = S2(.18); for (const z of [-26.5, 26.5]) { km.beginPath(); km.moveTo(P2(-40), P2(z)); km.lineTo(P2(40), P2(z)); km.stroke(); }
  for (let i = -5; i <= 5; i++) km.fillRect(P2(i * 1.1) - S2(.28), P2(27.4), S2(.56), S2(3.6));                                                                                  // a zebra crossing
  km.save(); km.translate(P2(0), P2(-31.8)); km.beginPath(); km.moveTo(0, -S2(1.6)); km.lineTo(S2(.9), 0); km.lineTo(S2(.3), 0); km.lineTo(S2(.3), S2(1.8)); km.lineTo(-S2(.3), S2(1.8)); km.lineTo(-S2(.3), 0); km.lineTo(-S2(.9), 0); km.fill(); km.restore();
  km.globalCompositeOperation = 'destination-out'; for (let i = 0; i < 2600; i++) { km.fillStyle = `rgba(0,0,0,${Math.random() * .5})`; km.fillRect(Math.random() * 2048, Math.random() * 2048, 2 + Math.random() * 9, 2 + Math.random() * 9); } km.globalCompositeOperation = 'source-over';   // worn paint
  const mt = new THREE.CanvasTexture(cm); mt.colorSpace = THREE.SRGBColorSpace; mt.anisotropy = 8; const marks = new THREE.Mesh(new THREE.PlaneGeometry(SZ, SZ), new THREE.MeshLambertMaterial({ map: mt, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 })); marks.rotation.x = -Math.PI / 2; marks.position.y = .01; marks.receiveShadow = true; g.add(marks);
  // street furniture round the edge: shipping containers, concrete barriers, pallets
  const std = (c2, r = .8, m = 0) => new THREE.MeshStandardMaterial({ color: c2, roughness: r, metalness: m }), boxAt = (w, h, d, mat, x, y, z, ry = 0) => { const me = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat); me.position.set(x, y, z); me.rotation.y = ry; me.castShadow = me.receiveShadow = true; g.add(me); return me; };
  [[0x9b2a22, -37, -12, 0], [0x1f4f8a, -37, -5.2, 0], [0x2b6b45, -37.3, -8.4, 2.62, 1], [0xc98a1b, 37, 9, 0], [0x7a7f88, 37, 15.6, 0], [0x1f4f8a, 12, -38, 1.57], [0x9b2a22, -14, 38.5, 1.57]].forEach(([col, x, z, ry, up]) => { boxAt(2.44, 2.6, 6.06, std(col, .55, .5), x, 1.3 + (up ? 2.6 : 0), z, ry); for (let q = -2; q <= 2; q++) boxAt(2.5, 2.45, .06, std(new THREE.Color(col).multiplyScalar(.8).getHex(), .6, .5), x + Math.sin(ry) * q * 1.1, 1.3 + (up ? 2.6 : 0), z + Math.cos(ry) * q * 1.1, ry); });
  const conc = std(0xa9a9a4, .9); for (let i = -6; i <= 6; i++) { if (Math.abs(i) < 2) continue; for (const z of [-34.5, 34.5]) { const b2 = boxAt(2.9, .8, .55, conc, i * 3.05, .4, z); b2.geometry = b2.geometry.clone(); const p = b2.geometry.attributes.position; for (let q = 0; q < p.count; q++) if (p.getY(q) > 0) p.setZ(q, p.getZ(q) * .38); p.needsUpdate = true; b2.geometry.computeVertexNormals(); } }   // New Jersey barriers
  const wood = std(0x8a6a44, .9); for (const [x, z] of [[-33.5, 8], [-33.8, 10.4], [33.5, -14], [34, 1]]) for (let q = 0; q < 3; q++) boxAt(1.2, .14, 1, wood, x, .07 + q * .15, z, q * .12);
  // four floodlight towers with visible coloured beams; two of them are real lights that fall on the cars and the dust
  [[0xffb060, 1, 1], [0x4aa8ff, -1, 1], [0xff3fa8, -1, -1], [0xffe2b0, 1, -1]].forEach(([col, sx, sz], i) => {
    const x = sx * 34, z = sz * 34, mast = new THREE.Mesh(new THREE.CylinderGeometry(.25, .35, 16, 8), new THREE.MeshStandardMaterial({ color: 0x1b1c20, metalness: .7, roughness: .4 })); mast.position.set(x, 8, z); g.add(mast);
    const lamp = new THREE.Mesh(new THREE.BoxGeometry(2.2, 1, .5), new THREE.MeshBasicMaterial({ color: new THREE.Color(col).multiplyScalar(2.5) })); lamp.position.set(x, 16.3, z); lamp.lookAt(0, 0, 0); g.add(lamp);
    const beam = new THREE.Mesh(new THREE.ConeGeometry(7, 46, 20, 1, true).translate(0, -23, 0), new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: .028, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, fog: false })); beam.position.set(x, 16.3, z); beam.visible = false; g.add(beam);       // from above the tower beams read as flat coloured shapes, so only their light on the ground is kept
    let L = null; if (i < 2) { L = new THREE.SpotLight(col, 2600, 90, .5, .7, 1.5); L.position.set(x, 16.3, z); g.add(L, L.target); }
    arena.spots.push({ beam, L, x, z, ph: i * 1.7 }); });
}
function arenaStart() {
  if (arena.on) return; arena.on = true; if (!arena.g) buildArena(); scene.add(arena.g); garage.visible = false; arena.t = 0; arena.acc = 0;
  if (sky) { scene.remove(sky); sky = null; } scene.background = new THREE.Color(0x05070b); scene.fog = new THREE.FogExp2(0x0a0e15, .009); hemi.color.set(0x7f93c8); hemi.groundColor.set(0x1b1f28); hemi.intensity = .55; sun.color.set(0xbfd0ff); sun.intensity = 1.1; scene.environmentIntensity = .45; renderer.toneMappingExposure = 1.1;
  if (post) { post.u.sunVis.value = 0; post.u.speed.value = 0; post.u.wet.value = 0; post.u.hit.value = 0; post.u.tilt.value = .55; }
  arena.fx = { smoke: new Particles(scene, 1500), glow: new Particles(scene, 900, true), skids: new Skids(scene, 2200) }; arena.amb = new Ambient(scene);
  arena.props = new Props(scene); arena.props.add('tyre', 0, 0, 0, 0, 1).add('tyre', 0, 0, .26, 0, 1).add('tyre', 0, 0, .52, 0, 1); for (let i = 0; i < 8; i++) arena.props.add('cone', Math.cos(i * .785) * 2.6, Math.sin(i * .785) * 2.6, 0);
  for (let i = -4; i <= 4; i++) for (const sx of [-1, 1]) arena.props.add('cone', sx * 26.2, i * 5.4, 0); for (const [x, z] of [[-31, -20], [31, 21], [-30.5, 19]]) { arena.props.add('bale', x, z, 0, .3); arena.props.add('bale', x + 1.4, z + .5, 0, .1); }
  const mine = CARS.find(c => c.id === save.car), others = CARS.filter(c => c.id !== save.car && c.drive !== 'fwd').sort(() => Math.random() - .5);
  arena.cars = [[mine, 16.5, 1, 0], [others[0], 25, 1, 2.4], [others[1], 8.5, -1, 1]].map(([spec, R0, dir, a0], i) => {
    const car = new Car(spec, i ? PAINTS[(Math.random() * PAINTS.length) | 0] : paintOf(spec.id), '', i ? undefined : upOf(spec.id), i ? { wing: 2, split: 1, rim: 4, glow: [0, 2, 1][i] } : lookOf(spec.id));
    car.reset(Math.sin(a0) * R0, Math.cos(a0) * R0, a0 + dir * Math.PI / 2); car.vx = Math.sin(car.th) * 9; car.vz = Math.cos(car.th) * 9; car.assistK = .8; car.tc = false; car.forceDrift = true; car.driftCut = .56; car.fuelK = 0; car.wear = 0; car.setLights(true); car.R0 = R0; car.dir = dir; car.inp = { steer: 0, throttle: 1, brake: 0, hand: false, nitro: false }; car.ruts = [null, null];
    if (gfx === 'high') { car.spot = new THREE.SpotLight(0xfff0d2, 190, 46, .46, .85, 1.35); scene.add(car.spot, car.spot.target); }   // real headlight beams on High; the painted throw is used otherwise
    scene.add(car.root); return car; });
}
function arenaSwap() {      // the player picked another car: change that one car where it is, the scene carries on
  if (!arena.on) return; const old = arena.cars[0], spec = CARS.find(c => c.id === save.car), car = new Car(spec, paintOf(spec.id), '', upOf(spec.id), lookOf(spec.id));
  for (const k of ['x', 'z', 'th', 'px', 'pz', 'pth', 'vx', 'vz', 'r', 'R0', 'dir', 'inp', 'ruts']) car[k] = old[k];
  car.assistK = .8; car.tc = false; car.forceDrift = true; car.driftCut = .56; car.fuelK = 0; car.wear = 0; car.setLights(true); car.spot = old.spot; scene.remove(old.root); old.dispose(); scene.add(car.root); arena.cars[0] = car;
}
// a picture of the selected car for the picker: the 3D model rendered once, off-screen, whenever the car or its look changes
const thumb = {};
function carThumb() {
  if (!garageCar) return; const W = 800, Hh = 450;
  if (!thumb.rt) { thumb.rt = new THREE.WebGLRenderTarget(W, Hh); thumb.rt.texture.colorSpace = THREE.SRGBColorSpace; thumb.scene = new THREE.Scene(); thumb.scene.environment = scene.environment; thumb.scene.add(new THREE.HemisphereLight(0xffffff, 0x30323a, 1.2)); const dl = new THREE.DirectionalLight(0xffffff, 2.6); dl.position.set(4, 7, 5); thumb.scene.add(dl);
    thumb.cam = new THREE.PerspectiveCamera(28, W / Hh, .1, 60); thumb.cam.position.set(6.2, 2.9, 7); thumb.cam.lookAt(0, .5, 0); thumb.buf = new Uint8Array(W * Hh * 4); thumb.col = new THREE.Color(); }
  if (window.__thumbCam) { const tc = window.__thumbCam; thumb.cam.position.set(...tc.pos); thumb.cam.fov = tc.fov || 28; thumb.cam.updateProjectionMatrix(); thumb.cam.lookAt(...tc.look); thumb.custom = 1; } else if (thumb.custom) { thumb.custom = 0; thumb.cam.fov = 28; thumb.cam.updateProjectionMatrix(); thumb.cam.position.set(6.2, 2.9, 7); thumb.cam.lookAt(0, .5, 0); }      // developer hook: place the preview camera anywhere
  const root = garageCar.root, par = root.parent, ry = root.rotation.y, vis = root.visible, a0 = renderer.getClearAlpha(); renderer.getClearColor(thumb.col);
  root.rotation.y = thumb.ang || 0; root.visible = true; thumb.scene.add(root); const hid = []; root.traverse(o => { if (o.userData.part === 'glow' && o.visible) { o.visible = false; hid.push(o); } });   /* ground glow has no ground to fall on in the picture */ const prev = renderer.getRenderTarget();
  renderer.setRenderTarget(thumb.rt); renderer.setClearColor(0x000000, 0); renderer.clear(); renderer.render(thumb.scene, thumb.cam); renderer.readRenderTargetPixels(thumb.rt, 0, 0, W, Hh, thumb.buf); renderer.setRenderTarget(prev); renderer.setClearColor(thumb.col, a0);
  for (const o of hid) o.visible = true; if (par) par.add(root); root.rotation.y = ry; root.visible = vis;
  const cv = $('carPic'), k = cv.getContext('2d'), img = k.createImageData(W, Hh); for (let y = 0; y < Hh; y++) img.data.set(thumb.buf.subarray((Hh - 1 - y) * W * 4, (Hh - y) * W * 4), y * W * 4); k.putImageData(img, 0, 0);
}
function arenaStop() {
  if (!arena.on) return; arena.on = false; scene.remove(arena.g); for (const c of arena.cars) { scene.remove(c.root); c.dispose(); if (c.spot) { scene.remove(c.spot, c.spot.target); c.spot.dispose(); } } arena.cars = [];
  for (const p of [arena.fx.smoke, arena.fx.glow]) { scene.remove(p.points); p.geo.dispose(); p.mat.dispose(); } scene.remove(arena.fx.skids.mesh); arena.fx.skids.geo.dispose(); arena.fx = null; arena.amb.dispose(); arena.props.dispose(); for (let i = 0; i < 4; i++) LIGHTS.c[i].set(0, 0, 0, 0);
}

// ---- the menu's events: every so often the cars pull into tight donuts around the tyre stack, and fireworks go up over the arena
function arenaEvents(dt) {
  const A = arena; A.evT = (A.evT ?? 9) - dt;
  if (A.evT <= 0 && !A.donut) { A.donut = 4.4; A.evT = 18; A.cars.forEach((c, i) => { c.R0b = c.R0b ?? c.R0; c.R0 = [6.8, 9.6, 12.8][i] ?? 8; }); }
  if (A.donut) { A.donut -= dt; if (A.donut <= 0) { A.donut = 0; for (const c of A.cars) c.R0 = c.R0b; } }
  A.fwT = (A.fwT ?? 3) - dt; A.fw = A.fw || [];
  if (A.fwT <= 0) { A.fwT = 4.5 + Math.random() * 4; const a = Math.random() * 6.28, r = 34 + Math.random() * 10; A.fw.push({ x: Math.sin(a) * r, z: Math.cos(a) * r, y: .5, vy: 25 + Math.random() * 8, col: [[1, .35, .3], [.35, .8, 1], [1, .85, .3], [.5, 1, .5], [1, .5, 1]][Math.random() * 5 | 0] }); }
  for (const f of A.fw) { f.vy -= 13 * dt; f.y += f.vy * dt; A.fx.glow.emit(f.x, f.y, f.z, (Math.random() - .5) * .8, -2.5, (Math.random() - .5) * .8, .55, .55, 0, 1, .82, .45, .9);
    if (f.vy <= 0) { f.done = true; for (let i = 0; i < 80; i++) { const th = Math.random() * 6.283, ph = Math.acos(2 * Math.random() - 1), sp = 6 + Math.random() * 7; A.fx.glow.emit(f.x, f.y, f.z, Math.sin(ph) * Math.cos(th) * sp, Math.cos(ph) * sp, Math.sin(ph) * Math.sin(th) * sp, 1.6, .6, 0, f.col[0], f.col[1], f.col[2], 1, 5); } } }
  A.fw = A.fw.filter(f => !f.done);
}
// ---- the camera director: seven wide, long-lens shots. The camera always stays far from the action (at least 24 m from any car, at least 9 m up),
// moves slowly and smoothly, never shakes, and cross-dissolves its way between shots, like a drone filming a motorsport event.
function arenaDirector(dt, T) {
  if (camera.view && camera.view.enabled) camera.clearViewOffset();
  const A = arena, cars = A.cars, nar = innerWidth < 820, ease = x => x * x * (3 - 2 * x), lerp = (a, b, t) => a + (b - a) * t;
  const D = A.dir || (A.dir = { n: -1, t0: -99, dur: 0, seq: 0, car: cars[0], from: null, blend: 1, look: new THREE.Vector3(), fov: 34 });
  if (T - D.t0 > D.dur) { D.from = { pos: camera.position.clone(), look: D.look.clone(), fov: camera.fov }; D.blend = D.n < 0 ? 1 : 0; D.seq++; D.n = (D.n + 1) % 7; D.t0 = T; D.dur = [8.5, 7.5, 8.5, 9, 8.5, 7.5, 8][D.n]; D.car = cars[[0, 0, 1, 0, 2, 0, 1][D.seq % 7] % cars.length]; D.side = D.seq % 2 ? 1 : -1; D.a0 = Math.atan2(D.car.x, D.car.z); }
  { const c0 = D.car; if (D.lx !== undefined && Math.hypot(c0.x - D.lx, c0.z - D.lz) > 12 && D.n >= 0) D.t0 = T - D.dur - 1; D.lx = c0.x; D.lz = c0.z; }      // the car being filmed was reset across the arena: cut to the next shot instead of whipping the camera over
  const c = D.car, u = Math.min(1, (T - D.t0) / D.dur), e = ease(u), X = Number.isFinite(c.x) ? clamp(c.x, -70, 70) : 0, Z = Number.isFinite(c.z) ? clamp(c.z, -70, 70) : 0, ang = Math.atan2(X, Z);
  let px = 0, py = 20, pz = 50, tx = 0, ty = 0, tz = 0, fov = 34;
  const mix = k => { tx = lerp(0, X, k); tz = lerp(0, Z, k); };         // aim: 0 = the middle of the arena, 1 = the car
  switch (D.n) {
    case 0: { const a = D.a0 + Math.PI * .9 + u * .55 * D.side, r = 54; px = Math.sin(a) * r; pz = Math.cos(a) * r; py = 17 + 9 * e; mix(.55); ty = .6; fov = 34; break; }                       // wide orbit around the whole scene
    case 1: { const a = ang + .95 * D.side; px = Math.sin(a) * 52; pz = Math.cos(a) * 52; py = 11 + 3 * e; tx = X; tz = Z; ty = .7; fov = 21; break; }                                        // long-lens tracking: the camera follows the car round the rim
    case 2: { const a = D.a0 + Math.PI * .75; px = Math.sin(a) * lerp(56, 40, e); pz = Math.cos(a) * lerp(56, 40, e); py = lerp(12, 46, e * e); mix(.35); ty = 0; fov = lerp(30, 40, e); break; }  // crane up and away
    case 3: { const a = T * .2; px = Math.sin(a) * lerp(24, 14, e); pz = Math.cos(a) * lerp(24, 14, e); py = lerp(64, 48, e); tx = 0; ty = 0; tz = 0; fov = 36; break; }                      // overhead spiral over the whole arena
    case 4: { px = 60 * D.side; pz = -30; py = 20; const o = cars[(cars.indexOf(c) + 1) % cars.length], k = e; tx = lerp(c.x, o.x, k); tz = lerp(c.z, o.z, k); ty = .5; fov = 26; break; }           // fixed high camera, the lens panning from one car to the next
    case 5: { px = lerp(-70, 70, e) * D.side; pz = -48; py = lerp(16, 24, e); mix(.4); ty = 0; fov = 30; break; }                                                                           // drone fly-by past the arena
    default: { const a = ang + Math.PI * (.55 + .3 * u) * D.side; px = Math.sin(a) * 38; pz = Math.cos(a) * 38; py = 12; tx = X; tz = Z; ty = .6; fov = lerp(26, 22, e); }                       // slow-motion hero shot, still at a distance
  }
  if (nar) fov *= 1.28;
  const want = new THREE.Vector3(px, Math.max(py, 9), pz), look = new THREE.Vector3(tx, ty, tz);
  for (const q of cars) { const ddx = want.x - q.x, ddz = want.z - q.z, dd = Math.hypot(ddx, ddz); if (dd < 24 && dd > .01) { want.x = q.x + ddx / dd * 24; want.z = q.z + ddz / dd * 24; } }      // never close to a car
  if (D.blend < 1) { D.blend = Math.min(1, D.blend + dt / 1.5); const b = ease(D.blend); want.lerpVectors(D.from.pos, want, b); look.lerpVectors(D.from.look, look, b); fov = D.from.fov + (fov - D.from.fov) * b; }
  if (![want.x, want.y, want.z, look.x, look.y, look.z].every(Number.isFinite)) { want.set(0, 20, 50); look.set(0, 0, 0); D.sl = D.sp = null; D.from = null; D.blend = 1; }      // never aim the camera at garbage
  { const kL = 1 - Math.exp(-Math.min(dt, .1) * 4.5), kP = 1 - Math.exp(-Math.min(dt, .1) * 3); D.sl = D.sl ? D.sl.lerp(look, kL) : look.clone(); D.sp = D.sp ? D.sp.lerp(want, kP) : want.clone(); look.copy(D.sl); want.copy(D.sp); }      // the aim and the position glide, so the camera never snaps
  D.look.copy(look); D.fov = fov;
  camera.position.copy(want); camera.lookAt(look);
  if (Math.abs(camera.fov - fov) > .02) { camera.fov = fov; camera.updateProjectionMatrix(); }
  const tsT = D.n === 6 && u > .1 && u < .85 ? .5 : 1; A.ts += (tsT - A.ts) * (1 - Math.exp(-dt * 4));
  if (post) { post.u.speed.value += (0 - post.u.speed.value) * Math.min(1, dt * 3); post.u.tilt.value = D.n === 3 ? .5 : .35; }
}
function arenaTick(dt) {
  const A = arena, tr = A.track; A.t += dt; A.ts = A.ts ?? 1; A.acc += dt * A.ts; let n = 0;      // ts: slow motion on the big moments
  while (A.acc >= H && n++ < 6) { A.acc -= H;
    for (const c of A.cars) {          // a simple driver: aim along the circle, turn in if running wide, keep the power on so the tail hangs out
      const dist = Math.hypot(c.x, c.z), ang = Math.atan2(c.x, c.z), err = wrap(ang + c.dir * (Math.PI / 2 + clamp((dist - c.R0) * .3, -1.2, 1.2)) - c.th);
      c.inp.steer = clamp(err * 1.7, -1, 1); { const vT = c.R0 > 20 ? 14 : c.R0 > 12 ? 11.6 : 8.4; c.inp.throttle = c.speed < vT ? 1 : c.speed < vT + 1.2 ? .45 : 0; c.inp.brake = c.speed > vT + 3 ? .5 : 0; } c.step(H, c.inp, tr, true);
      if (!(dist <= c.R0 + 16) || !Number.isFinite(c.vx + c.vz + c.r + c.th + c.x + c.z) || (c.speed < 1 && A.t > 3)) { const a = Math.random() * 6.28; c.reset(Math.sin(a) * c.R0, Math.cos(a) * c.R0, a + c.dir * Math.PI / 2); c.vx = Math.sin(c.th) * 9; c.vz = Math.cos(c.th) * 9; c.ruts = [null, null]; } }
    for (let i = 0; i < A.cars.length; i++) for (let j = i + 1; j < A.cars.length; j++) A.cars[i].bump(A.cars[j], false); }
  A.cars.forEach((c, i) => { c.render(dt, tr, clamp(A.acc / H, 0, 1)); c.effects(dt, A.fx, tr, A.donut ? .38 : .8);
    const sn = Math.sin(c.th), cs = Math.cos(c.th);
    if (c.spot) { c.spot.position.set(c.x + sn * (c.zf + .1), .7, c.z + cs * (c.zf + .1)); c.spot.target.position.set(c.x + sn * 20, -1.2, c.z + cs * 20); }
    LIGHTS.p[i].set(c.x + sn * c.zf, .62, c.z + cs * c.zf); LIGHTS.d[i].set(sn, -.07, cs).normalize(); LIGHTS.c[i].set(1, .93, .78, 1); });
  const nar = innerWidth < 820, T = A.t; arenaEvents(dt); arenaDirector(dt, T);
  sun.position.set(30, 60, 18); sun.target.position.set(0, 0, 0);
  for (const s of A.spots) { const tx = Math.sin(T * .35 + s.ph) * 16, tz = Math.cos(T * .27 + s.ph) * 16; s.beam.lookAt(tx, -30, tz); s.beam.rotateX(-Math.PI / 2); if (s.L) s.L.target.position.set(tx, 0, tz); }
  const sc = renderer.domElement.height / (2 * Math.tan(camera.fov * Math.PI / 360)); A.fx.smoke.mat.uniforms.uScale.value = A.fx.glow.mat.uniforms.uScale.value = sc; A.fx.smoke.update(dt); A.fx.glow.update(dt); A.fx.skids.flush(); A.props.update(dt, A.cars, tr); ambAt.position.set(0, 7, 0); A.amb.update(dt, ambAt, .5, sc);     // light rain, and loose cones and tyres that react if a car clips them
  if (post) post.u.time.value = T;
}
// The menu shows a light 2D scene. The 3D engine is only woken for the garage and tuning tabs, where the car has to be seen.
function setMenuView() {
  if (racing() || $('menu').hidden || box.on) return; const want = sel.tab === 'garage' || sel.tab === 'tune' ? 'garage' : 'show';
  if (R) { raceToken++; endRace(); }
  if (want === 'garage') { menuBg.stop(); arenaStop(); if (menuView !== 'garage') { applyTheme(null); garage.visible = true; } menuView = 'garage'; }
  else { menuView = 'show'; if (gfx === 'low') { arenaStop(); menuBg.start(); } else { menuBg.stop(); arenaStart(); } }
}
const sel = { rivals: 5, wx: 'random', tab: 'quick', ev: 0, ch: 0, mode: 'race', track: 0, laps: 3, diff: 1, car: Math.max(0, CARS.findIndex(c => c.id === save.car)) };
const menuPaths = {};
async function menuPath(def) {
  if (menuPaths[def.id]) return menuPaths[def.id];
  const pts = resampleClosed(def.pts, 5);
  let len = 0; pts.forEach((p, i) => { const q = pts[(i + 1) % pts.length]; len += Math.hypot(q.x - p.x, q.z - p.z); });
  return menuPaths[def.id] = { pts, len };
}
async function refreshMenu() {
  const def = TRACKS[sel.track], spec = CARS[sel.car], owned = save.owned.includes(spec.id), online = sel.mode === 'online';
  $('credits').textContent = save.credits.toLocaleString(); $('name').value = save.name;
  const career = sel.tab === 'career';
  for (const b of document.querySelectorAll('#tabs button')) b.classList.toggle('on', b.dataset.tab === sel.tab);
  for (const b of document.querySelectorAll('#modeSeg button')) b.classList.toggle('on', b.dataset.mode === sel.mode);
  const playTab = sel.tab === 'quick' || sel.tab === 'online', gpMode = sel.mode === 'gp' && sel.tab === 'quick';
  show('tabCareer', false); show('tabQuick', sel.tab === 'quick'); show('tabGarage', sel.tab === 'garage'); show('tabTune', sel.tab === 'tune'); show('tabSettings', sel.tab === 'settings');
  document.querySelector('.card.track').hidden = !playTab || gpMode; show('optsRow', playTab && !gpMode); show('startBtn', playTab); show('gpBox', gpMode); show('rulesSeg', sel.tab === 'quick'); show('daily', sel.tab === 'quick');
  document.querySelector('.garage').hidden = sel.tab === 'settings' || sel.tab === 'trophies';
  $('rivals').textContent = sel.rivals; for (const b of document.querySelectorAll('#wxSeg button')) b.classList.toggle('on', b.dataset.w === sel.wx);
  for (const b of document.querySelectorAll('#langSeg button')) b.classList.toggle('on', b.dataset.l === save.lang); for (const b of document.querySelectorAll('#zoomSeg button')) b.classList.toggle('on', +b.dataset.z === save.zoom); for (const b of document.querySelectorAll('#unitSeg button')) b.classList.toggle('on', b.dataset.u === save.units);
  $('musicVol').value = save.mvol * 100; $('sfxVol').value = save.svol * 100; $('engVol').value = save.evol * 100; setTxt('hUnit', save.units === 'mph' ? 'mph' : 'km/h');
  if (gpMode) { const g = save.gp && !save.gp.done ? save.gp : null; $('gpBox').innerHTML = '<h2>' + tx('Grand Prix') + '</h2><p>' + tx('Four rounds, eight drivers, points for every finish. The third round is wet.') + '</p><ol>' + GP_TRACKS.map((id, i) => { const t = TRACKS.find(x => x.id === id); return '<li class="' + (g && i < g.round ? 'done' : g && i === g.round ? 'on' : '') + '">' + (save.lang === 'ar' ? t.ar : t.name) + '</li>'; }).join('') + '</ol>' + (g ? '<p class="meta">' + Object.entries(g.pts).sort((a, b) => b[1] - a[1]).slice(0, 4).map((e, i) => (i + 1) + '. ' + e[0] + ' ' + e[1]).join(' · ') + '</p>' : ''); }
  { const sp2 = CARS[sel.car], L = lookOf(sp2.id), sw = (k, arr) => arr.map((c, i) => '<button data-k="' + k + '" data-v="' + i + '" class="' + (L[k] === i ? 'on' : '') + '" style="background:' + (c ? hex(c) : 'transparent') + '">' + (c ? '' : '×') + '</button>').join(''), sg = (k, labels) => labels.map((l, i) => '<button data-k="' + k + '" data-v="' + i + '" class="' + (L[k] === i ? 'on' : '') + '">' + tx(l) + '</button>').join('');
    $('lookRows').innerHTML = '<h3>' + tx('Rear wing') + '</h3>' + (garageCar && garageCar.hasWing ? '<p class="note">' + tx('This car has its own wing.') + '</p>' : '<div class="seg wide four">' + sg('wing', ['None', 'Lip', 'GT wing', 'Race wing']) + '</div>') + '<h3>' + tx('Front splitter') + '</h3><div class="seg wide two">' + sg('split', ['Off', 'On']) + '</div><h3>' + tx('Extras') + '</h3><div class="seg wide">' + ['skirt', 'scoop', 'pipe'].map((k, i) => '<button data-k="' + k + '" data-v="' + (L[k] ? 0 : 1) + '" class="' + (L[k] ? 'on' : '') + '">' + tx(['Side skirts', 'Roof scoop', 'Exhaust tips'][i]) + '</button>').join('') + '</div><h3>' + tx('Wheels') + '</h3><div class="paints">' + sw('rim', RIMS) + '</div><h3>' + tx('Rim design') + '</h3><div class="seg wide four">' + sg('rimS', RIM_STYLES) + '</div><h3>' + tx('Tyre sidewall') + '</h3><div class="seg wide four">' + sg('tyreS', TYRE_STYLES) + '</div><h3>' + tx('Brake calipers') + '</h3><div class="paints">' + sw('cal', CAL_COLS) + '</div><h3>' + tx('Glass') + '</h3><div class="paints">' + sw('tint', TINTS) + '</div><h3>' + tx('Underglow') + '</h3><div class="paints">' + sw('glow', GLOWS) + '</div>';
    const tn = tuneSet(sp2.id), TR = [['gear', 'Gearing', 'Top speed', 'Acceleration'], ['aero', 'Downforce', 'Less drag', 'More grip'], ['brake', 'Brake bias', 'Rearward', 'Forward'], ['susp', 'Balance', 'Agile', 'Stable'], ...(sp2.drive === 'awd' ? [['split', 'Torque split', 'Rear-biased', 'Front-biased']] : []), ['diff', 'Differential', 'Open', 'Locked']];
    $('tuneRows').innerHTML = TR.map(([k, n1, lo, hi]) => '<div class="trow2"><b>' + tx(n1) + '</b><span>' + tx(lo) + '</span><button data-k="' + k + '" data-d="-1">−</button><i>' + [-2, -1, 0, 1, 2].map(v => '<u class="' + (v === tn[k] ? 'on' : '') + '"></u>').join('') + '</i><button data-k="' + k + '" data-d="1">+</button><span>' + tx(hi) + '</span></div>').join('') + '<h3>' + tx('Tyre compound') + '</h3><div class="seg wide">' + ['soft', 'medium', 'hard', 'rain', 'gravel'].map(c => '<button data-c="' + c + '" class="' + (tn.tyre === c ? 'on' : '') + '">' + tx(c[0].toUpperCase() + c.slice(1)) + '</button>').join('') + '</div><p class="note">' + tx('Soft tyres grip more and wear faster; hard tyres last longer and need more heat. Rain tyres for wet roads, gravel tyres for loose ground. Watch the tyre temperature: too cold or too hot and the grip falls away. Settings apply to this car only.') + '</p>' + tuneTable(sp2, tn, upOf(sp2.id)); }


  const lv = levelOf(save.xp); $('lvl').textContent = lv; $('xpBar').style.width = clamp((save.xp - xpFor(lv)) / (xpFor(lv + 1) - xpFor(lv)), 0, 1) * 100 + '%';
  $('assistBtn').textContent = 'Assist: ' + save.assist[0].toUpperCase() + save.assist.slice(1); for (const b of document.querySelectorAll('#rulesSeg button')) b.classList.toggle('on', b.dataset.r === save.rules); show('devBox', !!save.dev); $('devBtn').textContent = save.dev ? 'Developer: on' : 'Developer'; if (save.dev) { $('devGod').textContent = 'No damage: ' + (save.devGod ? 'on' : 'off'); $('devScale').textContent = 'Game speed: ' + (save.devScale || 1) + '×'; }
  { const ready = save.boxDay !== today(); $('boxBtn').classList.toggle('done', !ready); $('boxInfo').textContent = tx(ready ? 'Open now' : 'Come back tomorrow'); }
  $('tcBtn').textContent = tx('Traction control') + ': ' + tx(save.tc ? 'On' : 'Off'); $('absBtn').textContent = 'ABS: ' + tx(save.abs ? 'On' : 'Off'); $('sensBtn').textContent = tx('Steering') + ': ' + tx(save.sens < .9 ? 'Calm' : save.sens > 1.1 ? 'Sharp' : 'Normal');
  $('gfxBtn').textContent = 'Graphics: ' + save.gfx[0].toUpperCase() + save.gfx.slice(1); $('gasBtn').hidden = !isTouch; $('gasBtn').textContent = 'Auto gas ' + (save.autoGas ? 'on' : 'off');
  const dl = dailyFor(TRACKS); $('dailyName').textContent = dl.label + ' · ' + dl.trackName + (dl.weather === 'rain' ? ' · rain' : ''); $('dailyInfo').textContent = save.daily === dl.key ? 'Done · streak ' + save.streak : '+' + (400 + Math.min((save.streak || 0) + 1, 7) * 100); $('daily').classList.toggle('done', save.daily === dl.key);
  if (career) {
    const ch = CHAPTERS[sel.ch]; $('chNum').textContent = 'Chapter ' + (sel.ch + 1) + ' of ' + CHAPTERS.length; $('chName').textContent = ch.name; $('chText').textContent = ch.text;
    $('events').innerHTML = ch.events.map(e => { const gi = EVENTS.indexOf(e), open = gi === 0 || save.story[EVENTS[gi - 1].id] > 0, st = save.story[e.id] || 0;
      return `<li data-i="${gi}" class="${gi === sel.ev ? 'on' : ''} ${open ? '' : 'locked'}"><span>${gi + 1}</span><div><b>${e.title}</b><small>${TRACKS.find(t => t.id === e.track).name} · ${goalText(e.goal)}${e.weather === 'rain' ? ' · rain' : ''}</small></div><em>${open ? '★'.repeat(st) + '☆'.repeat(3 - st) : 'Locked'}</em></li>`; }).join('');
  }
  for (const b of document.querySelectorAll('#diff button')) b.classList.toggle('on', +b.dataset.d === sel.diff);
  $('diff').style.visibility = ['race', 'gp', 'elim', 'endu'].includes(sel.mode) ? 'visible' : 'hidden';
  $('trkName').textContent = save.lang === 'ar' ? def.ar : def.name; $('trkBlurb').textContent = tx(def.blurb); $('laps').textContent = sel.laps;
  $('trkBest').textContent = sel.mode === 'drift' ? (save.bestDrift[def.id] ? 'Record ' + save.bestDrift[def.id].toLocaleString() + ' pts' : '') : (save.best[def.id] ? 'Best ' + fmt(save.best[def.id]) : 'No lap set');
  $('carName').textContent = save.lang === 'ar' ? spec.ar : spec.name; $('carBlurb').textContent = spec.cls + (save.lang === 'ar' ? '' : '. ' + spec.blurb); $('carPic').style.display = sel.tab === 'garage' || sel.tab === 'tune' ? 'none' : ''; $('carSpec').textContent = tx(spec.klass) + ' ' + tx('class') + ' · ' + spec.hp + ' hp · ' + spec.mass.toLocaleString() + ' kg · ' + spec.engine + ' · 0–100 ' + (spec.sprint || '–') + ' s · ' + (save.units === 'mph' ? Math.round((spec.kmh || spec.top * 3.6) / 1.609) + ' mph' : (spec.kmh || Math.round(spec.top * 3.6)) + ' km/h');
  $('stSpeed').style.width = (spec.top - 40) / 30 * 100 + '%'; $('stAcc').style.width = (spec.acc - 6) / 7 * 100 + '%';
  $('stGrip').style.width = (spec.grip - .9) / .55 * 100 + '%'; $('stDrift').style.width = clamp((1.06 - spec.rear) * 4 + spec.loose * .6, .1, 1) * 100 + '%';
  $('paints').innerHTML = [spec.color, ...PAINTS].map(p => `<button style="background:${hex(p)}" data-p="${p}" class="${paintOf(spec.id) === p ? 'on' : ''}" aria-label="Paint ${hex(p)}"></button>`).join('');
  const up = upOf(spec.id);
  $('ups').innerHTML = owned ? UPS.map(([k, label]) => { const l = up[k], cost = upCost(spec, l); return `<button data-k="${k}" ${l >= 3 || save.credits < cost ? 'disabled' : ''}><b>${label}</b><i>${'●'.repeat(l)}${'○'.repeat(3 - l)}</i><small>${l >= 3 ? 'Max' : cost.toLocaleString()}</small></button>`; }).join('') : '';
  show('tabTrophies', sel.tab === 'trophies');
  if (sel.tab === 'trophies') $('trophies').innerHTML = TROPHIES.map(t => { const v = t.get(), done = v >= t.need; return `<li class="${done ? 'done' : ''}"><b>${t.name}</b><small>${t.desc}</small><em>${done ? '✓' : Math.floor(v) + ' / ' + t.need}</em></li>`; }).join('');
  $('buyBtn').hidden = owned; $('buyBtn').textContent = tx('Unlock for') + ' ' + spec.price.toLocaleString(); $('buyBtn').disabled = save.credits < spec.price;
  show('onlineBox', online); show('lobby', !!room); show('onlineJoin', !room);
  const s = $('startBtn');
  if (!owned) { s.disabled = true; s.textContent = tx('Car locked'); }
  else if (online) { s.disabled = !(room && peer && isHost); s.textContent = tx(!room ? 'Join a room first' : !peer ? 'Waiting for rival' : isHost ? 'Start duel' : 'Host starts the race'); }
  else if (career) { const gi = sel.ev, open = gi === 0 || save.story[EVENTS[gi - 1].id] > 0; s.disabled = !open; s.textContent = open ? 'Start event' : 'Event locked'; }
  else { s.disabled = false; s.textContent = sel.mode === 'gp' ? (save.gp && !save.gp.done ? tx('Continue') + ' · ' + tx('Round') + ' ' + (save.gp.round + 1) + '/' + GP_TRACKS.length : tx('Start Grand Prix')) : tx({ race: 'Start race', trial: 'Start time trial', drift: 'Start drift attack', elim: 'Start knockout', endu: 'Start endurance' }[sel.mode]); }
  if (!room) $('onlineMsg').textContent = hasSupabase ? 'Create a room and send the 5-letter code to a friend.' : 'Supabase keys are not set in config.js yet, so rooms only connect between tabs of this browser (handy for testing).';
  renderLobby(); applyLang(); setMenuView();
  const mp = await menuPath(def); if (TRACKS[sel.track] !== def) return;
  $('trkLen').textContent = (mp.len / 1000).toFixed(2) + ' km';
  const c = $('trkMap').getContext('2d'); c.clearRect(0, 0, 120, 90);
  let a = 1e9, b = -1e9, e = 1e9, f = -1e9; for (const p of mp.pts) { a = Math.min(a, p.x); b = Math.max(b, p.x); e = Math.min(e, p.z); f = Math.max(f, p.z); }
  const sc = Math.min(104 / (b - a), 74 / (f - e)); c.beginPath(); mp.pts.forEach((p, i) => { const X = 60 + (p.x - (a + b) / 2) * sc, Y = 45 + (p.z - (e + f) / 2) * sc; i ? c.lineTo(X, Y) : c.moveTo(X, Y); }); c.closePath();
  c.lineJoin = 'round'; c.strokeStyle = '#f3f4f6'; c.lineWidth = 3; c.stroke();
  const bd = $('board'); bd.hidden = true;
  if (hasSupabase && sel.mode !== 'drift') topLaps(def.id).then(rows => { if (TRACKS[sel.track] !== def || !rows || !rows.length) return; bd.innerHTML = rows.map((r, i) => `<li><span>${i + 1}. ${r.name.replace(/[<>&]/g, '')}</span><b>${fmt(r.ms)}</b></li>`).join(''); bd.hidden = false; });
}
const pick = (key, n, d) => { sel[key] = (sel[key] + d + n) % n; };
$('trkPrev').onclick = () => { pick('track', TRACKS.length, -1); sel.laps = TRACKS[sel.track].laps; refreshMenu(); };
$('trkNext').onclick = () => { pick('track', TRACKS.length, 1); sel.laps = TRACKS[sel.track].laps; refreshMenu(); };
const carChanged = () => { const s = CARS[sel.car]; if (save.owned.includes(s.id)) { save.car = s.id; persist(); tellPeer(); arenaSwap(); } showGarageCar(); refreshMenu(); };   // the arena restarts with the newly chosen car
$('carPrev').onclick = () => { pick('car', CARS.length, -1); carChanged(); };
$('carNext').onclick = () => { pick('car', CARS.length, 1); carChanged(); };
$('lapMinus').onclick = () => { sel.laps = Math.max(1, sel.laps - 1); refreshMenu(); };
$('lapPlus').onclick = () => { sel.laps = Math.min(15, sel.laps + 1); refreshMenu(); };
$('tabs').onclick = e => { const b = e.target.closest('button'); if (!b) return; sel.tab = b.dataset.tab; sel.mode = sel.tab === 'online' ? 'online' : sel.mode === 'online' ? 'race' : sel.mode; if (sel.tab === 'garage' || sel.tab === 'tune') showGarageCar(); refreshMenu(); };
$('modeSeg').onclick = e => { const b = e.target.closest('button'); if (b) { sel.mode = b.dataset.mode; refreshMenu(); } };
$('chPrev').onclick = () => { sel.ch = (sel.ch + CHAPTERS.length - 1) % CHAPTERS.length; sel.ev = EVENTS.indexOf(CHAPTERS[sel.ch].events[0]); refreshMenu(); };
$('chNext').onclick = () => { sel.ch = (sel.ch + 1) % CHAPTERS.length; sel.ev = EVENTS.indexOf(CHAPTERS[sel.ch].events[0]); refreshMenu(); };
$('events').onclick = e => { const li = e.target.closest('li'); if (li && !li.classList.contains('locked')) { sel.ev = +li.dataset.i; refreshMenu(); } };
$('gfxBtn').onclick = () => { const o = ['auto', 'high', 'medium', 'low']; save.gfx = o[(o.indexOf(save.gfx) + 1) % 4]; persist(); setGfx(save.gfx === 'auto' ? (isTouch ? 'medium' : 'high') : save.gfx); refreshMenu(); };
$('ups').onclick = e => { const b = e.target.closest('button'); if (!b || b.disabled) return; const spec = CARS[sel.car], up = upOf(spec.id), cost = upCost(spec, up[b.dataset.k]); if (save.credits < cost) return; save.credits -= cost; up[b.dataset.k]++; persist(); tellPeer(); if (b.dataset.k === 'eng') { audio.quiet = false; audio.turboDemo(); } audio.init(); audio.wrench(); showGarageCar(); refreshMenu(); };
const ASSIST_HELP = { medium: 'Assist medium: the car helps catch slides, but it will oversteer and understeer if you overdrive it.', off: 'Assist off: no automatic counter-steer, no throttle cut. Slides are yours to catch.', low: 'Assist low: half-strength counter-steer in a slide and a gentle throttle cut past 24° of slip.', full: 'Assist full: the car counter-steers for you in a slide and eases the throttle before it becomes a spin.' };
function applyLang() { document.documentElement.lang = save.lang; for (const id of ['menu', 'results', 'pause']) $(id).dir = save.lang === 'ar' ? 'rtl' : 'ltr'; for (const el of document.querySelectorAll('[data-t]')) { if (!el.dataset.t) el.dataset.t = el.textContent.trim(); el.textContent = tx(el.dataset.t); } }
const carLook = () => { persist(); tellPeer(); showGarageCar(); refreshMenu(); };
$('lookRows').onclick = e => { const b = e.target.closest('button'); if (!b) return; lookOf(CARS[sel.car].id)[b.dataset.k] = +b.dataset.v; carLook(); };
$('gTyre').onclick = cycleComp;
$('tuneRows').onclick = e => { const b = e.target.closest('button'); if (!b) return; tuneFocus = b.dataset.c ? 'tyre' : b.dataset.k; const tn = tuneSet(CARS[sel.car].id); if (b.dataset.c) tn.tyre = b.dataset.c; else tn[b.dataset.k] = clamp((tn[b.dataset.k] || 0) + +b.dataset.d, -2, 2); persist(); refreshMenu(); };
$('langSeg').onclick = e => { const b = e.target.closest('button'); if (b) { save.lang = b.dataset.l; persist(); refreshMenu(); } };
$('zoomSeg').onclick = e => { const b = e.target.closest('button'); if (b) { save.zoom = +b.dataset.z; persist(); fitShadow(); refreshMenu(); } };
const zoomBy = d => { save.zoom = clamp(Math.round((save.zoom + d) * 100) / 100, .7, 3.4); persist(); fitShadow(); $('zoomVal').textContent = Math.round(save.zoom / 1.5 * 100) + '%'; if (R) { updateCamera(0); draw(0); } };
$('zoomOut').onclick = () => zoomBy(.15); $('zoomIn').onclick = () => zoomBy(-.15);
$('unitSeg').onclick = e => { const b = e.target.closest('button'); if (b) { save.units = b.dataset.u; persist(); refreshMenu(); } };
$('wxSeg').onclick = e => { const b = e.target.closest('button'); if (b) { sel.wx = b.dataset.w; refreshMenu(); } };
$('rivMinus').onclick = () => { sel.rivals = Math.max(1, sel.rivals - 2); refreshMenu(); }; $('rivPlus').onclick = () => { sel.rivals = Math.min(11, sel.rivals + 2); refreshMenu(); };
$('musicVol').oninput = e => { save.mvol = audio.mvol = e.target.value / 100; persist(); audio.init(); audio.music(!racing()); };
$('sfxVol').oninput = e => { save.svol = audio.vol = e.target.value / 100; persist(); audio.setVolumes(); };
$('engVol').oninput = e => { save.evol = audio.evol = e.target.value / 100; persist(); audio.setVolumes(); };
// developer audition: any engine at any rpm and load, with shift and exhaust triggers and an output meter
$('auEng').innerHTML = '<option value="">Engine audition: off</option>' + Object.entries(ENGINE_SETS).map(([k, v]) => '<option value="' + k + '">' + v.label + '</option>').join('');
let auOn = false; const auTick = () => { const n = $('auEng').value; auOn = !!n; audio.init(); if (n) audio.music(false); audio.audition(n, +$('auRpm').value, $('auLoad').value / 100); const m = audio.meter(); $('auMeter').textContent = audio.state + ' · ' + $('auRpm').value + ' rpm · rate ' + ($('auRpm').value / 3000).toFixed(2) + '× · ' + (m.rms ? m.rms.toFixed(0) + ' dB rms, peak ' + m.peak.toFixed(0) + ' dB' : '') + ' · loop starts ' + audio.stats.starts + ', pops ' + audio.stats.shots; };
for (const id of ['auEng', 'auRpm', 'auLoad']) $(id).oninput = auTick;
$('auUp').onclick = () => { audio.dipUntil = audio.ctx.currentTime + .13; audio.shot('pop', .55); }; $('auPop').onclick = () => audio.shot('bang' + (1 + (Math.random() * 3 | 0)), .7, true); $('auCrk').onclick = () => audio.shot('crackle', .5);
$('resetBtn').onclick = () => { if (confirm(tx('Erase all progress, cars and settings?'))) { try { localStorage.removeItem(KEY); } catch (e) {} location.reload(); } };
$('tcBtn').onclick = () => { save.tc = !save.tc; persist(); toast(save.tc ? 'Traction control on: power is trimmed to what the tyres can take.' : 'Traction control off: full throttle will spin the wheels and step the tail out.'); refreshMenu(); };
$('absBtn').onclick = () => { save.abs = !save.abs; persist(); toast(save.abs ? 'ABS on: you can brake and steer together.' : 'ABS off: full braking locks the fronts and the car ploughs straight on.'); refreshMenu(); };
$('sensBtn').onclick = () => { save.sens = save.sens < .9 ? 1 : save.sens > 1.1 ? .75 : 1.3; persist(); refreshMenu(); };
// ---------------- developer mode ----------------
$('devBtn').onclick = () => { if (!save.dev) { if (prompt('Developer password') !== 'Monalisa') return toast('Wrong password'); save.dev = true; persist(); toast('Developer mode on'); } refreshMenu(); };
$('devBox').onclick = e => { const b = e.target.closest('button'); if (!b) return; const a = b.dataset.a;
  if (a === 'cars') { save.owned = CARS.map(c => c.id); toast('All cars unlocked'); }
  if (a === 'cash') { save.credits += 50000; toast('+50,000 credits'); }
  if (a === 'ups') { for (const c of CARS) save.up[c.id] = { eng: 3, tyre: 3, nitro: 3, armor: 3 }; toast('All upgrades maxed'); }
  if (a === 'box') { save.boxDay = ''; toast('Daily box is ready again'); }
  if (a === 'god') save.devGod = !save.devGod;
  if (a === 'scale') save.devScale = save.devScale === 1 ? .5 : save.devScale === .5 ? 2 : 1;
  if (a === 'tele') { $('tele').hidden = !$('tele').hidden; }
  if (a === 'off') { save.dev = false; save.devGod = false; save.devScale = 1; }
  persist(); showGarageCar(); refreshMenu(); };
// ---------------- daily box ----------------
const today = () => { const d = new Date(); return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate(); };
const box = { on: false, t: 0, g: null, lid: null, beams: [], fx: null, reward: null };
function buildBox() {
  const g = new THREE.Group(), wood = new THREE.MeshStandardMaterial({ color: 0x7a4a26, roughness: .8 }), gold = new THREE.MeshStandardMaterial({ color: 0xffc21a, metalness: 1, roughness: .25, emissive: 0x6a4a00, emissiveIntensity: .5 }), navy = new THREE.MeshStandardMaterial({ color: 0x14306b, roughness: .5, metalness: .3 });
  const m = (geo, mat, x, y, z, par = g) => { const o = new THREE.Mesh(geo, mat); o.position.set(x, y, z); o.castShadow = true; par.add(o); return o; };
  m(new THREE.BoxGeometry(2.4, 1.3, 1.7), navy, 0, .65, 0); for (const sx of [-1.1, 0, 1.1]) m(new THREE.BoxGeometry(.16, 1.36, 1.76), gold, sx, .66, 0); for (const sz of [-.8, .8]) m(new THREE.BoxGeometry(2.46, .14, .14), gold, 0, .1, sz);
  for (const sx of [-1.25, 1.25]) m(new THREE.TorusGeometry(.2, .05, 8, 16), gold, sx, .75, 0).rotation.y = Math.PI / 2;
  const lid = new THREE.Group(); lid.position.set(0, 1.3, -.85); g.add(lid); m(new THREE.BoxGeometry(2.5, .34, 1.8), navy, 0, .17, .85, lid); for (const sx of [-1.1, 0, 1.1]) m(new THREE.BoxGeometry(.17, .38, 1.84), gold, sx, .17, .85, lid);
  m(new THREE.CylinderGeometry(.3, .3, .08, 20), gold, 0, .72, .87).rotation.x = Math.PI / 2; m(new THREE.BoxGeometry(.12, .28, .1), navy, 0, .7, .92);
  const beams = []; for (let i = 0; i < 7; i++) { const b = new THREE.Mesh(new THREE.ConeGeometry(.9, 9, 10, 1, true).translate(0, 4.5, 0), new THREE.MeshBasicMaterial({ color: i % 2 ? 0xffe9a8 : 0xffc21a, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide })); b.position.y = 1.2; b.rotation.set((Math.random() - .5) * 1.1, 0, (Math.random() - .5) * 1.1); g.add(b); beams.push(b); }
  g.visible = false; garage.add(g); Object.assign(box, { g, lid, beams, fx: new Particles(scene, 500, true) });
}
function rollBox() {
  const locked = CARS.filter(c => !save.owned.includes(c.id)), r = Math.random();
  if (r < .1 && locked.length) { const c = locked[Math.random() * Math.min(3, locked.length) | 0]; save.owned.push(c.id); return ['New car', c.name]; }
  if (r < .28) { const id = save.owned[Math.random() * save.owned.length | 0], up = upOf(id), keys = UPS.map(u => u[0]).filter(k => up[k] < 3); if (keys.length) { const k = keys[Math.random() * keys.length | 0]; up[k]++; return ['Free upgrade', CARS.find(c => c.id === id).name + ' · ' + UPS.find(u => u[0] === k)[1] + ' ' + up[k]]; } }
  if (r < .45) { const xp = 150 + (Math.random() * 6 | 0) * 50; save.xp += xp; return ['Driver XP', '+' + xp + ' XP']; }
  const cr = [300, 400, 500, 750, 1000, 1500, 2500][Math.min(6, Math.floor(Math.pow(Math.random(), 1.8) * 7))]; save.credits += cr; return ['Credits', '+' + cr.toLocaleString()];
}
function openBox() {
  if (save.boxDay === today() || box.on) return; audio.init(); if (!box.g) buildBox(); menuBg.stop(); arenaStop(); raceToken++; if (R) endRace(); applyTheme(null); garage.visible = true; menuView = 'garage';
  if (garageCar) garageCar.root.visible = false; box.g.visible = true; box.on = true; box.t = 0; box.lid.rotation.x = 0; box.reward = null; show('menu', false); for (const b of box.beams) b.material.opacity = 0;
}
function boxTick(dt) {
  const t = (box.t += dt), g = box.g; camera.fov = 36; camera.updateProjectionMatrix(); const a = t * .5; camera.position.set(Math.sin(a) * 7.5, 3.2 - Math.min(t, 2) * .4, Math.cos(a) * 7.5); camera.lookAt(0, 1 + Math.min(1, Math.max(0, t - 2.2)) * .8, 0); sun.position.set(6, 12, 8); sun.target.position.set(0, 0, 0);
  if (t < 2.2) { const k = t / 2.2; g.rotation.z = Math.sin(t * 34) * .05 * k; g.rotation.x = Math.cos(t * 29) * .04 * k; g.position.y = Math.abs(Math.sin(t * 9)) * .12 * k; if (Math.random() < .2) audio.tone(200 + k * 400, .05, .03, 'square'); }
  else { g.rotation.set(0, 0, 0); g.position.y = 0; const u = Math.min(1, (t - 2.2) / .5); box.lid.rotation.x = -u * u * 2.1; for (const b of box.beams) { b.material.opacity = Math.min(.13, (t - 2.2) * .4) * (.6 + .4 * Math.sin(t * 5 + b.rotation.x * 9)); b.rotation.y += dt * .6; }
    if (!box.reward) { box.reward = rollBox(); save.boxDay = today(); persist(); audio.beep(660, .25); setTimeout(() => audio.beep(990, .5), 180); $('boxKind').textContent = tx(box.reward[0]); $('boxWhat').textContent = box.reward[1]; }
    if (t < 4.5 && Math.random() < .9) for (let i = 0; i < 4; i++) { const h = Math.random(); box.fx.emit((Math.random() - .5) * 1.6, 1.4, (Math.random() - .5) * 1, (Math.random() - .5) * 5, 5 + Math.random() * 6, (Math.random() - .5) * 5, 1.6 + Math.random(), .22, 0, 1, h < .5 ? .85 : .5, h < .5 ? .3 : .9, 1, 7); }
    if (t > 3 && $('boxWin').hidden) show('boxWin', true); }
  box.fx.mat.uniforms.uScale.value = renderer.domElement.height / (2 * Math.tan(camera.fov * Math.PI / 360)); box.fx.update(dt);
}
$('boxBtn').onclick = openBox;
$('boxTake').onclick = () => { show('boxWin', false); box.on = false; box.g.visible = false; box.fx.clear(); box.fx.update(0); if (garageCar) garageCar.root.visible = true; menuView = ''; show('menu', true); showGarageCar(); refreshMenu(); checkTrophies(); };
$('assistBtn').onclick = () => { const o = ['full', 'medium', 'low', 'off']; save.assist = o[(o.indexOf(save.assist) + 1) % 4]; persist(); toast(ASSIST_HELP[save.assist]); refreshMenu(); };
$('rulesSeg').onclick = e => { const b = e.target.closest('button'); if (b) { save.rules = b.dataset.r; persist(); toast(save.rules === 'circuit' ? 'Professional: one class, balanced cars. Track limits, contact and safety-car rules with time penalties. Fuel, tyres, damage, pit stops.' : 'Arcade: no fuel, light damage, nitro, repair kits, coins, slipstream, random events, pushier AI.'); refreshMenu(); } };
$('copyLink').onclick = () => { const url = location.origin + location.pathname + '?room=' + room.code; (navigator.clipboard ? navigator.clipboard.writeText(url) : Promise.reject()).then(() => toast('Invite link copied'), () => prompt('Copy this invite link', url)); };
// ---------------- touch layout editor: every button can be dragged anywhere; size, opacity and a left-handed mirror are saved ----------------
const TKEYS = ['left', 'right', 'gas', 'brake', 'hand', 'nitro'], tUI = () => save.touchUI || (save.touchUI = { scale: 1, op: .2, lefty: false, pos: null });
const tEl = k => k === 'pause' ? $('pauseBtn') : $('touch').querySelector('[data-k=' + k + ']'), tKey = el => el.id === 'pauseBtn' ? 'pause' : el.dataset.k;
function applyTouchUI() {
  const U = tUI(), root = $('touch'); root.style.setProperty('--ui', U.scale); root.style.setProperty('--ta', U.op);
  for (const k of [...TKEYS, 'pause']) { const el = tEl(k), p = U.pos && U.pos[k]; if (!el) continue; if (p) { el.style.left = p[0] * 100 + '%'; el.style.top = p[1] * 100 + '%'; el.style.right = 'auto'; el.style.bottom = 'auto'; el.style.translate = '-50% -50%'; } else for (const s of ['left', 'top', 'right', 'bottom', 'translate']) el.style[s] = ''; }
}
function captureTouchDefaults() { const U = tUI(); if (U.pos) return; U.pos = {}; for (const k of [...TKEYS, 'pause']) { const el = tEl(k); if (!el) continue; const r = el.getBoundingClientRect(); U.pos[k] = [(r.left + r.width / 2) / innerWidth, (r.top + r.height / 2) / innerHeight]; } }
let tDrag = null, tWasHud = false, tWasTouch = false;
function enterTouchEdit() {
  document.body.classList.add('touch', 'editTouch'); const hud = $('hud'); tWasHud = hud.hidden; tWasTouch = $('touch').hidden; hud.hidden = false; $('touch').hidden = false; $('touchEdit').hidden = false;
  const U = tUI(); $('teSize').value = Math.round(U.scale * 100); $('teOp').value = Math.round(U.op * 100); $('teLefty').classList.toggle('on', !!U.lefty); applyTouchUI(); requestAnimationFrame(() => { captureTouchDefaults(); applyTouchUI(); persist(); });
}
function exitTouchEdit() { document.body.classList.remove('editTouch'); if (!isTouch) document.body.classList.remove('touch'); $('touchEdit').hidden = true; $('hud').hidden = tWasHud; $('touch').hidden = tWasTouch; tDrag = null; persist(); }
$('touch').addEventListener('pointerdown', e => { if (!document.body.classList.contains('editTouch')) return; e.stopPropagation(); e.preventDefault(); const el = e.target.closest('.t'); if (!el) return; tDrag = el; try { el.setPointerCapture(e.pointerId); } catch (_) {} }, true);
$('pauseBtn').addEventListener('pointerdown', e => { if (!document.body.classList.contains('editTouch')) return; e.stopPropagation(); e.preventDefault(); tDrag = $('pauseBtn'); try { $('pauseBtn').setPointerCapture(e.pointerId); } catch (_) {} }, true);
$('pauseBtn').addEventListener('click', e => { if (document.body.classList.contains('editTouch')) { e.stopPropagation(); e.preventDefault(); } }, true);
addEventListener('pointermove', e => { if (!tDrag) return; captureTouchDefaults(); tUI().pos[tKey(tDrag)] = [clamp(e.clientX / innerWidth, .05, .95), clamp(e.clientY / innerHeight, .08, .94)]; applyTouchUI(); });
addEventListener('pointerup', () => { if (tDrag) { tDrag = null; persist(); } });
$('touchEditBtn').onclick = enterTouchEdit; $('todSeg').onclick = e => { const b = e.target.closest('button'); if (!b) return; save.tod = b.dataset.d; persist(); for (const x of $('todSeg').children) x.classList.toggle('on', x.dataset.d === (save.tod || 'default')); }; for (const x of $('todSeg').children) x.classList.toggle('on', x.dataset.d === (save.tod || 'default'));
const markDmg = () => { for (const b of document.querySelectorAll('#dmgSeg button')) b.classList.toggle('on', b.dataset.k === (save.dmg || 'medium')); }; markDmg();
$('dmgSeg').onclick = e => { const b = e.target.closest('button'); if (!b) return; save.dmg = b.dataset.k; persist(); applyDmg(); markDmg(); };
const voicesFor = () => { const L = save.lang === 'ar' ? 'ar' : 'en', vs = (window.speechSynthesis ? speechSynthesis.getVoices() : []).filter(v => v.lang.toLowerCase().startsWith(L)); return vs.sort((a, b) => voiceScore(b) - voiceScore(a)); };
const labelVoice = () => { const v = voicesFor().find(x => x.name === save.engVoiceName) || voicesFor()[0]; $('voiceBtn').textContent = tx('Voice') + ': ' + (v ? v.name.replace(/Microsoft |Google |Online \(Natural\) - |\(Natural\)/g, '').slice(0, 22) : 'default'); };
$('voiceBtn').onclick = () => { const vs = voicesFor(); if (!vs.length) return; const i = vs.findIndex(x => x.name === save.engVoiceName); save.engVoiceName = vs[(i + 1) % vs.length].name; persist(); labelVoice(); engineer(ENG.start(), true); }; if (window.speechSynthesis) speechSynthesis.addEventListener('voiceschanged', labelVoice); labelVoice();
$('radioBtn').onclick = () => { save.engVoice = save.engVoice === false; persist(); $('radioBtn').textContent = tx('Race engineer voice') + ': ' + tx(save.engVoice === false ? 'Off' : 'On'); if (save.engVoice !== false) engineer(ENG.start(), true); }; $('radioBtn').textContent = tx('Race engineer voice') + ': ' + tx(save.engVoice === false ? 'Off' : 'On');
$('hapBtn').onclick = () => { save.haptics = save.haptics === false; persist(); $('hapBtn').textContent = tx('Haptics') + ': ' + tx(save.haptics === false ? 'Off' : 'On'); if (save.haptics !== false) rumble(40, .5, .5); }; $('hapBtn').textContent = tx('Haptics') + ': ' + tx(save.haptics === false ? 'Off' : 'On'); $('teDone').onclick = exitTouchEdit;
$('teSize').oninput = e => { tUI().scale = +e.target.value / 100; applyTouchUI(); persist(); };
$('teOp').oninput = e => { tUI().op = +e.target.value / 100; applyTouchUI(); persist(); };
$('teLefty').onclick = () => { const U = tUI(); captureTouchDefaults(); U.lefty = !U.lefty; for (const k in U.pos) U.pos[k] = [1 - U.pos[k][0], U.pos[k][1]]; $('teLefty').classList.toggle('on', U.lefty); applyTouchUI(); persist(); };
$('teReset').onclick = () => { save.touchUI = { scale: 1, op: .2, lefty: false, pos: null }; $('teSize').value = 100; $('teOp').value = 20; $('teLefty').classList.remove('on'); applyTouchUI(); requestAnimationFrame(() => { captureTouchDefaults(); applyTouchUI(); }); persist(); };
applyTouchUI();
$('gasBtn').onclick = () => { save.autoGas = !save.autoGas; persist(); refreshMenu(); };
$('daily').onclick = () => { const d = dailyFor(TRACKS); audio.init(); lastOpts = { mode: d.mode, track: d.track, laps: 3, diff: 1, weather: d.weather, daily: d }; startRace(lastOpts); };
// story briefing: characters talk, then the event starts
const FACES = { 'Amm Saber': '#ffc21a', 'Zizo': '#e3262e', 'Captain Nadia': '#19a7ce', 'El Basha': '#f3f4f6', 'Hassan': '#2fb457', 'Hussein': '#2fb457' };
let brief = null;
function briefing(ev) { brief = { ev, i: 0 }; show('story', true); showLine(); }
function showLine() { const [who, text] = brief.ev.intro[brief.i]; $('stWho').textContent = who; $('stText').textContent = text; $('stEvent').textContent = brief.ev.title + ' · ' + goalText(brief.ev.goal); $('stFace').textContent = who[0]; $('stFace').style.background = FACES[who] || '#a5a9b4'; $('stNext').textContent = brief.i === brief.ev.intro.length - 1 ? 'Start' : 'Next'; }
function launchEvent() { const ev = brief.ev; brief = null; show('story', false); lastOpts = { mode: ev.mode, track: ev.track, laps: ev.laps, diff: ev.diff ?? 1, weather: ev.weather || 'clear', rivals: ev.rivals, story: ev }; startRace(lastOpts); }
$('stNext').onclick = () => { audio.init(); if (++brief.i >= brief.ev.intro.length) launchEvent(); else showLine(); };
$('stSkip').onclick = launchEvent;
$('diff').onclick = e => { const b = e.target.closest('button'); if (b) { sel.diff = +b.dataset.d; refreshMenu(); } };
$('paints').onclick = e => { const b = e.target.closest('button'); if (b) { save.paint[CARS[sel.car].id] = +b.dataset.p; persist(); carChanged(); } };
$('buyBtn').onclick = () => { const s = CARS[sel.car]; if (save.credits >= s.price && !save.owned.includes(s.id)) { save.credits -= s.price; save.owned.push(s.id); audio.init(); audio.beep(880, .3); toast(s.name + ' unlocked'); carChanged(); } };
$('name').onchange = e => { save.name = (e.target.value.trim() || save.name).slice(0, 16); persist(); tellPeer(); refreshMenu(); };
$('muteBtn').onclick = () => { audio.init(); setMuted(!save.muted); audio.music(!racing()); };
addEventListener('pointerdown', () => { if (!audio.ctx) { audio.init(); audio.music(!racing()); } }, { once: false });
$('startBtn').onclick = () => {
  if (sel.tab === 'career') { audio.init(); return briefing(EVENTS[sel.ev]); }
  if ((sel.mode === 'elim' || sel.mode === 'endu') && sel.tab === 'quick') { const e = sel.mode === 'elim'; lastOpts = { mode: 'race', elim: e, endu: !e, track: TRACKS[sel.track].id, laps: e ? sel.rivals : Math.max(10, sel.laps * 4), diff: sel.diff, rules: save.rules, nRivals: sel.rivals, weather: sel.wx }; return startRace(lastOpts); }
  if (sel.mode === 'gp' && sel.tab === 'quick') { audio.init(); if (!save.gp || save.gp.done) newGP(); lastOpts = gpOpts(); return startRace(lastOpts); }
  const o = { mode: sel.mode, track: TRACKS[sel.track].id, laps: sel.laps, diff: sel.diff, rules: sel.mode === 'online' ? 'circuit' : save.rules, nRivals: sel.rivals, weather: sel.mode === 'online' ? undefined : sel.wx };
  if (sel.mode === 'online') { if (!(room && peer && isHost)) return; o.rainAt = Math.random() < .3 ? 18 + Math.random() * 30 : 1e9; room.send({ k: 'start', track: o.track, laps: o.laps, rainAt: o.rainAt }); }
  if (isTouch) { try { document.documentElement.requestFullscreen?.().then(() => screen.orientation?.lock?.('landscape').catch(() => {})).catch(() => {}); } catch (e) {} }
  lastOpts = o; startRace(o);
};
let lastOpts = null, lastPassed = true;
$('hPace').onclick = () => { if (R) setPace((R.player.pace + 1) % 3); };
$('pauseBtn').onclick = togglePause; $('resumeBtn').onclick = togglePause;
$('restartBtn').onclick = () => { const o = lastOpts; endRace(); startRace(o); };
$('quitBtn').onclick = toMenu; $('menuBtn').onclick = toMenu;
$('againBtn').onclick = () => { if (lastOpts.gp) { if (!save.gp || save.gp.done) return toMenu(); lastOpts = gpOpts(); return startRace(lastOpts); } if (lastOpts.mode === 'online' || (lastOpts.story && lastPassed)) return toMenu(); const o = lastOpts; endRace(); startRace(o); };

// ---------------- online lobby ----------------
let room = null, peer = null, isHost = false, peerLoaded = false;
async function joinRoom(code) {
  if (!/^[A-Z0-9]{5}$/.test(code)) { $('onlineMsg').textContent = 'Room codes are 5 letters or digits.'; return; }
  audio.init(); $('onlineMsg').textContent = 'Connecting…';
  const r = new Room(); r.onPeers = onPeers; r.onMessage = onNet;
  try { await r.join(code, myInfo()); } catch (e) { $('onlineMsg').textContent = e.message; return; }
  room = r; isHost = true; peer = null; $('lobbyCode').textContent = code; $('onlineMsg').textContent = 'Share the code. The race starts when the host presses start.'; refreshMenu(); onPeers(room.peers);
}
function leaveRoom(why) { if (room) room.leave(); room = null; peer = null; if (R && R.mode === 'online') toMenu(); refreshMenu(); if (why) $('onlineMsg').textContent = why; }
function onPeers(peers) {
  if (!room) return;
  const all = [room.meta, ...Object.values(peers)].sort((a, b) => a.t - b.t || (a.id < b.id ? -1 : 1));
  if (all.indexOf(room.meta) > 1) return leaveRoom('That room already has two drivers.');
  const had = peer; peer = all.find(m => m.id !== room.id) || null; isHost = all[0] === room.meta;
  if (had && !peer && R && R.mode === 'online') toast('Your rival left the race');
  if (!had && peer && !racing()) toast(peer.name + ' joined');
  if (!racing()) refreshMenu();
}
// what the other player needs to draw my car exactly as I see it: model, paint and upgrade levels
const myInfo = () => ({ name: save.name, car: save.car, paint: paintOf(save.car), up: { ...upOf(save.car) }, look: { ...lookOf(save.car) } });
const lookKey = m => m.car + '|' + m.paint + '|' + JSON.stringify(m.up || {}) + JSON.stringify(m.look || {});
function tellPeer() { if (!room) return; const i = myInfo(); room.setMeta(i); room.send({ k: 'me', i }); }
function rebuildRemote() {
  const old = R.remote, ps = CARS.find(c => c.id === peer.car) || CARS[0], rc = new Car(ps, peer.paint ?? ps.color, peer.name || 'Rival', peer.up, peer.look);
  for (const k of ['x', 'z', 'th', 'px', 'pz', 'pth', 'vx', 'vz', 'r', 'y', 'nb', 'idx', 'prog', 'lap', 'laps', 'lapStart', 'finished', 'finishTime', 'wrong']) rc[k] = old[k];
  rc.isRemote = true; rc.look = lookKey(peer); rc.noNitro = old.noNitro; R.cars[R.cars.indexOf(old)] = rc; R.remote = rc; scene.remove(old.root); old.dispose(); scene.add(rc.root); R.orderKey = '';
}
function renderLobby() {
  if (!room) return;
  const row = (m, me) => `<li><i style="background:${hex(m.paint ?? 0x888888)}"></i>${m.name}${me ? ' (you)' : ''} — ${(CARS.find(c => c.id === m.car) || CARS[0]).name}${m.up && Object.values(m.up).some(v => v) ? ' <small>(' + UPS.filter(([k]) => m.up[k]).map(([k, l]) => l + ' ' + m.up[k]).join(', ') + ')</small>' : ''}${(me ? isHost : !isHost) ? ' · host' : ''}</li>`;
  $('lobbyList').innerHTML = row(room.meta, true) + (peer ? row(peer, false) : '<li>Waiting for a second driver…</li>');
}
function onNet(m) {
  if (m.k === 'start' && !racing()) { const o = { mode: 'online', track: m.track, laps: m.laps, diff: 1, rainAt: m.rainAt }; lastOpts = o; startRace(o); }
  else if (m.k === 'loaded') { peerLoaded = true; checkGo(); }
  else if (m.k === 'go') beginCountdown();
  else if (m.k === 's' && R && R.remote) R.remote.netApply(m.p, performance.now());
  else if (m.k === 'me' && peer) { Object.assign(peer, m.i); if (R && R.remote && R.remote.look !== lookKey(peer)) rebuildRemote(); else if (!racing()) renderLobby(); }
  else if (m.k === 'ping') room.send({ k: 'pong', t: m.t });
  else if (m.k === 'pong' && R) R.ping = R.ping == null ? performance.now() - m.t : R.ping + (performance.now() - m.t - R.ping) * .3;
  else if (m.k === 'd' && R && R.remote) { const rc = R.remote; rc.hitL = m.l; rc.hitN = m.n; rc.hitX = rc.x; rc.hitZ = rc.z; impact(rc, m.p, true); }
  else if (m.k === 'hit' && R && R.remote && R.state === 'go') { const me = R.player; if (R.t - (me.lastHitT || -9) > .25) { me.lastHitT = R.t; const nx = -m.n[0], nz = -m.n[1], v = m.v; me.vx += nx * v * .5; me.vz += nz * v * .5; const l = me.toLocal(R.remote.x, R.remote.z); me.r += clamp(-l[0] * Math.sign(l[1] || 1) * v * .06, -1.2, 1.2); me.hitN = [nx, nz]; me.hitX = (me.x + R.remote.x) / 2; me.hitZ = (me.z + R.remote.z) / 2; me.hitL = me.toLocal(me.hitX, me.hitZ); impact(me, v * .8); } }
  else if (m.k === 'st' && R && R.remote) { const rc = R.remote, z = ['front', 'rear', 'left', 'right']; z.forEach((k, i) => { rc.dmg[k] = m.d[i]; }); rc.tyre = m.ty; rc.wetTyres = !!m.w; m.lm.forEach((ok, i) => { rc.lamps[i].ok = !!ok; }); rc.setLights(!!m.lo); if (m.pt) { rc.parts.engine = m.pt[0]; rc.parts.gearbox = m.pt[1]; rc.parts.wheels = m.pt.slice(2); } }
  else if (m.k === 'fix' && R && R.remote) { R.remote.repair(); R.remote.wetTyres = !!m.w; }
  else if (m.k === 'fin' && R && R.remote) { R.remote.finished = true; R.remote.finishTime = m.t; if (!R.player.finished) flash(R.remote.name + ' finished', true, 1500); }
}
$('createRoom').onclick = () => joinRoom(Room.makeCode());
$('joinRoom').onclick = () => joinRoom($('roomCode').value.trim().toUpperCase());
$('leaveRoom').onclick = () => leaveRoom('');

// ---------------- main loop ----------------
let last = performance.now(), ftAvg = 1 / 60, drsT = 0;
function frame(now) {
  requestAnimationFrame(frame);
  // dynamic resolution: if frames are taking too long the picture is rendered slightly smaller, and it sharpens again when there is headroom
  { const raw = Math.min(.1, Math.max(0, (now - last) / 1000)); ftAvg += (raw - ftAvg) * .04; drsT += raw;
    if (drsT > 1.2 && gfx !== 'low') { drsT = 0; const cap = Math.min(devicePixelRatio || 1, 1.5), lo = Math.max(.6, cap * .55); if (ftAvg > 1 / 50 && pixelRatio > lo) { pixelRatio = Math.max(lo, pixelRatio - .12); resize(); } else if (ftAvg < 1 / 58 && pixelRatio < cap) { pixelRatio = Math.min(cap, pixelRatio + .06); resize(); } } }
  const dt = Math.max(0, Math.min(.05, (now - last) / 1000)) * (save.dev ? save.devScale || 1 : 1); last = now;
  if (auOn && !racing()) auTick();
  if (R) { if (!paused) { try { updateRace(dt); } catch (e) { if (!window.__errOnce) { window.__errOnce = 1; console.error('RACE ERROR ' + e.message + ' cars=' + R.cars.length + ' t=' + R.t + ' state=' + R.state + ' mode=' + R.mode + ' attract=' + R.attract + ' keys=' + Object.keys(R).slice(0, 12)); } } } }
  else if (box.on) boxTick(dt);
  else if (arena.on) arenaTick(dt);
  else if (garageCar) {
    // In the tuning tab the car stops turning and the camera moves in on the part you are adjusting: wing, tail, front brake, suspension, tyre.
    const F = sel.tab === 'tune' ? { aero: [2.55, 3.3, 6.6, 1.0, 30], gear: [3.05, 1.0, 5.6, .45, 30], brake: [-.95, 1.2, 5.2, .45, 26], susp: [-1.57, .8, 6.6, .45, 28], tyre: [-1.15, .75, 4.6, .4, 24] }[tuneFocus] : null; if (sel.tab !== 'tune') tuneFocus = '';
    if (F) garageSpin += wrap(F[0] - garageSpin) * Math.min(1, dt * 4); else if (!gDrag.on) { garageSpin += gDrag.v; gDrag.v *= .93; gDrag.hold -= dt; if (gDrag.hold <= 0) garageSpin += dt * .35; } garageCar.root.rotation.y = garageSpin;
    const narrow = innerWidth < 820, rs = save.lang === 'ar' ? -1 : 1, gc = arena.gc || (arena.gc = { y: 3, d: 11.5, ly: -.4, f: 38 }), tg = F ? { y: F[1], d: F[2], ly: F[3], f: F[4] } : { y: 3, d: narrow ? 13 : 11.5, ly: narrow ? 1.8 : -.4, f: 38 }, kk = Math.min(1, dt * 4); for (const q in tg) gc[q] += (tg[q] - gc[q]) * kk;
    camera.fov = gc.f; camera.updateProjectionMatrix(); camera.position.set(narrow ? 0 : -1.6 * rs * gc.d / 11.5, gc.y, gc.d); camera.lookAt(narrow ? 0 : -2.9 * rs * gc.d / 11.5, gc.ly, 0);
    sun.position.set(6, 12, 8); sun.target.position.set(0, 0, 0);
  }
  if (menuBg.on) menuBg.tick(now); else draw(dt);      // while the 2D menu scene is up, nothing is rendered in 3D
}
(async function boot() {
  applyTheme(null); audio.mvol = save.mvol; audio.vol = save.svol; audio.evol = save.evol; setMuted(save.muted);
  sel.ev = firstOpen(); sel.ch = EVENTS[sel.ev].ci;
  await loadCars(); showGarageCar(); refreshMenu(); requestAnimationFrame(frame); window.__booted = true;
  const rc = new URLSearchParams(location.search).get('room'); if (rc) { sel.tab = 'online'; sel.mode = 'online'; refreshMenu(); joinRoom(rc.toUpperCase()); }   // invite link
  window.__game = { get garageCar() { return garageCar; }, get TUNE() { return TUNE; }, garageRot: () => garageCar ? +garageCar.root.rotation.y.toFixed(3) : null, get people() { return R && R.people; }, perfScore, get audio() { return audio; }, get camState() { return cam; }, get arena() { return arena; }, get camera() { return camera; }, get R() { return R; }, impact, Car, carThumb, carThumbAt: a => { thumb.ang = a; carThumb(); thumb.ang = 0; }, get garageCar() { return garageCar; }, arena, arenaTick, cam3: () => camera.position, paused: () => paused, boxTick, box, touch, readInput, TUNE, physics, get acc() { return acc; }, audio, startEvent, checkTrophies, setGfx, get gfx() { return gfx; }, sim(sec, fdt = 1 / 60) { for (let i = 0; i < Math.round(sec / fdt) && R; i++) updateRace(fdt); }, CARS, renderer, sun, keys, save, startRace, sel, TRACKS };
})();
