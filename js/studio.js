// The showroom: the stage the selected car stands on in the menu and the garage.
// A dark curved studio, a lit turntable with a chasing ring of light, light panels that sweep round the walls (their glow slides across the paint),
// soft beams from above, a few specks of dust in the light. It is a handful of simple, unlit or one-material objects, so it costs next to nothing next to the car.
import * as THREE from 'three';

const canvas = (w, h, draw) => { const c = document.createElement('canvas'); c.width = w; c.height = h; draw(c.getContext('2d'), w, h); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return t; };

export function buildStudio(fancy = true) {
  const g = new THREE.Group(), S = { g, t: 0 };
  // the walls: a tall cylinder seen from inside, dark blue-black with a low warm glow where the floor meets it
  const wall = canvas(8, 512, (k, w, h) => { const gr = k.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, '#020306'); gr.addColorStop(.38, '#0a0e16'); gr.addColorStop(.62, '#121a2a'); gr.addColorStop(.74, '#2a2218'); gr.addColorStop(.8, '#0d0f14'); gr.addColorStop(1, '#050608'); k.fillStyle = gr; k.fillRect(0, 0, w, h); });
  const wm = new THREE.Mesh(new THREE.CylinderGeometry(30, 30, 40, 40, 1, true), new THREE.MeshBasicMaterial({ map: wall, side: THREE.BackSide, fog: false, depthWrite: false })); wm.position.y = 12; wm.renderOrder = -5; g.add(wm);
  // the floor: dark glossy, with a faint ring and radial lines, brighter in the middle where the lights fall
  const fl = canvas(1024, 1024, (k, w, h) => { const c = w / 2; let gr = k.createRadialGradient(c, c, 20, c, c, c); gr.addColorStop(0, '#4a5262'); gr.addColorStop(.3, '#232833'); gr.addColorStop(.62, '#0d0f15'); gr.addColorStop(1, '#040507'); k.fillStyle = gr; k.fillRect(0, 0, w, h);
    k.strokeStyle = 'rgba(255,194,26,.16)'; k.lineWidth = 2; for (const r of [.2, .34, .5, .7, .9]) { k.beginPath(); k.arc(c, c, r * c, 0, 7); k.stroke(); }
    k.strokeStyle = 'rgba(255,255,255,.045)'; k.lineWidth = 1; for (let i = 0; i < 48; i++) { const a = i / 48 * 6.2832; k.beginPath(); k.moveTo(c + Math.cos(a) * .2 * c, c + Math.sin(a) * .2 * c); k.lineTo(c + Math.cos(a) * c, c + Math.sin(a) * c); k.stroke(); } });
  fl.anisotropy = 8; const floor = new THREE.Mesh(new THREE.CircleGeometry(30, 64), new THREE.MeshBasicMaterial({ map: fl, fog: false })); floor.rotation.x = -Math.PI / 2; floor.position.y = -.25; floor.receiveShadow = true; g.add(floor);
  // the turntable: a low disc, a thin lit edge, and a ring of light that runs round it
  const disc = new THREE.Mesh(new THREE.CylinderGeometry(4.6, 4.8, .25, 64), new THREE.MeshBasicMaterial({ color: 0x15171c })); disc.position.y = -.125; g.add(disc);
  const edge = new THREE.Mesh(new THREE.TorusGeometry(4.78, .045, 8, 96), new THREE.MeshBasicMaterial({ color: 0xffc21a })); edge.rotation.x = Math.PI / 2; edge.position.y = .0; g.add(edge);
  const chase = canvas(512, 8, (k, w, h) => { for (let i = 0; i < 6; i++) { const x = i * w / 6, gr = k.createLinearGradient(x, 0, x + w / 6, 0); gr.addColorStop(0, 'rgba(255,255,255,0)'); gr.addColorStop(.5, 'rgba(255,255,255,.95)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); k.fillStyle = gr; k.fillRect(x, 0, w / 6 * .9, h); } });
  chase.wrapS = THREE.RepeatWrapping; chase.repeat.set(3, 1); const run = new THREE.Mesh(new THREE.TorusGeometry(4.2, .035, 6, 96), new THREE.MeshBasicMaterial({ map: chase, color: 0x6fb4ff, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false })); run.rotation.x = Math.PI / 2; run.position.y = .012; g.add(run); S.run = run; S.chase = chase;
  // the soft shadow the car casts on the stage (the real shadow map is not drawn in the menu)
  const sh = canvas(256, 128, (k, w, h) => { const gr = k.createRadialGradient(w / 2, h / 2, 6, w / 2, h / 2, w / 2); gr.addColorStop(0, 'rgba(0,0,0,.85)'); gr.addColorStop(.55, 'rgba(0,0,0,.45)'); gr.addColorStop(1, 'rgba(0,0,0,0)'); k.fillStyle = gr; k.save(); k.scale(1, h / w); k.translate(0, (w - h) / 2 * w / h); k.fillRect(0, 0, w, w); k.restore(); });
  const shadow = new THREE.Mesh(new THREE.PlaneGeometry(6.4, 3.4), new THREE.MeshBasicMaterial({ map: sh, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 })); shadow.rotation.x = -Math.PI / 2; shadow.position.y = .015; shadow.renderOrder = 1; g.add(shadow); S.shadow = shadow;
  // light panels round the walls, each one slowly swelling and fading, one after another
  const pan = canvas(64, 256, (k, w, h) => { const gr = k.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, 'rgba(255,255,255,0)'); gr.addColorStop(.25, 'rgba(255,255,255,.9)'); gr.addColorStop(.75, 'rgba(255,255,255,.9)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); k.fillStyle = gr; k.fillRect(0, 0, w, h); const gx = k.createLinearGradient(0, 0, w, 0); gx.addColorStop(0, 'rgba(0,0,0,1)'); gx.addColorStop(.3, 'rgba(0,0,0,0)'); gx.addColorStop(.7, 'rgba(0,0,0,0)'); gx.addColorStop(1, 'rgba(0,0,0,1)'); k.globalCompositeOperation = 'destination-out'; k.fillStyle = gx; k.fillRect(0, 0, w, h); });
  S.panels = []; const cols = [0xffc21a, 0x6fb4ff, 0xffffff, 0xff5a3c, 0x6fb4ff, 0xffc21a, 0xffffff, 0x9fd0ff];
  for (let i = 0; i < 8; i++) { const a = i / 8 * Math.PI * 2 + .3, m = new THREE.MeshBasicMaterial({ map: pan, color: cols[i], transparent: true, opacity: .5, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, fog: false });
    const p = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 15), m); p.position.set(Math.sin(a) * 25, 7.5, Math.cos(a) * 25); p.lookAt(0, 7.5, 0); g.add(p); S.panels.push({ m, ph: i * .9 }); }
  if (fancy) {
    // beams from above, and dust in them
    S.beams = []; const bm = (c, o) => new THREE.Mesh(new THREE.ConeGeometry(5.2, 22, 24, 1, true).translate(0, -11, 0), new THREE.MeshBasicMaterial({ color: c, transparent: true, opacity: o, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, fog: false }));
    for (let i = 0; i < 3; i++) { const b = bm([0xfff1cf, 0x9fc8ff, 0xffd27a][i], .045); b.position.set(Math.sin(i * 2.1) * 9, 19, Math.cos(i * 2.1) * 9); g.add(b); S.beams.push({ b, ph: i * 2.1 }); }
    const n = 150, pos = new Float32Array(n * 3), seed = []; for (let i = 0; i < n; i++) { const a = Math.random() * 6.283, r = 2 + Math.random() * 12; pos[i * 3] = Math.cos(a) * r; pos[i * 3 + 1] = Math.random() * 10; pos[i * 3 + 2] = Math.sin(a) * r; seed.push(Math.random() * 6.283); }
    const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.BufferAttribute(pos, 3)); const dot = canvas(32, 32, (k, w) => { const gr = k.createRadialGradient(16, 16, 0, 16, 16, 16); gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); k.fillStyle = gr; k.fillRect(0, 0, w, w); });
    S.dust = new THREE.Points(geo, new THREE.PointsMaterial({ map: dot, size: .16, transparent: true, opacity: .55, depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true, fog: false })); S.dust.frustumCulled = false; g.add(S.dust); S.seed = seed;
  }
  S.update = (dt, spin) => {
    S.t += dt; const t = S.t;
    S.chase.offset.x -= dt * .14; S.shadow.rotation.z = spin + Math.PI / 2;
    for (const p of S.panels) p.m.opacity = .1 + .6 * Math.pow(.5 + .5 * Math.sin(t * .5 + p.ph), 2.2);
    if (S.beams) for (const q of S.beams) { q.b.rotation.z = Math.sin(t * .22 + q.ph) * .16; q.b.rotation.x = Math.cos(t * .17 + q.ph) * .12; q.b.material.opacity = .03 + .03 * (.5 + .5 * Math.sin(t * .4 + q.ph)); }
    if (S.dust) { const a = S.dust.geometry.attributes.position, d = a.array; for (let i = 0; i < d.length; i += 3) { d[i + 1] += dt * (.08 + .05 * Math.sin(S.seed[i / 3] + t * .5)); if (d[i + 1] > 11) d[i + 1] = 0; d[i] += Math.sin(t * .2 + S.seed[i / 3]) * dt * .05; } a.needsUpdate = true; }
  };
  S.dispose = () => { g.traverse(o => { if (o.geometry) o.geometry.dispose(); if (o.material) { if (o.material.map) o.material.map.dispose(); o.material.dispose(); } }); };
  return S;
}
