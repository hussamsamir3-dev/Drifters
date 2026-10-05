# Tafheet ~ تفحيط

A browser racing / drift game. Plain HTML + JavaScript (three.js), no build step.

## Run it locally

Double-click `index.html`. That is enough.

Opened this way the browser uses `game.bundle.js` (a pre-built single-file copy of the code) and the `assets/*.js`
copies of the models. On a web server or GitHub Pages it uses the normal files in `js/` and `assets/` instead.

If you edit anything in `js/`, the change shows up straight away on a server or GitHub Pages. For the double-click
version to pick it up too, rebuild the bundle (needs Node.js):

    npx esbuild js/main.js --bundle --format=iife --minify --alias:three=./lib/three/build/three.module.js --alias:three/addons=./lib/three/examples/jsm --outfile=game.bundle.js

If the game ever fails to start, a red box at the top of the page says why.

## Put it on GitHub Pages

1. Create a repository and upload everything in this folder (keep the folder structure).
2. Repository → Settings → Pages → Source: "Deploy from a branch", branch `main`, folder `/ (root)`.
3. After a minute the game is live at `https://<your-user>.github.io/<repo>/`.

The largest file is `assets/lider.glb.js` (about 16 MB), well under GitHub's 100 MB limit.

## Switch on online play (Supabase)

1. supabase.com -> New project. Pick the region closest to both players (this matters most for lag).
2. Project Settings -> API. Copy the Project URL and the public key (labelled "anon public" or "publishable").
3. Paste both into `config.js`, save, and upload the changed file to GitHub.
4. Open the game from its GitHub Pages address (not by double-click), go to Online, press Create room,
   then "copy invite link" and send it. The other player opens the link and lands in your room.
5. The host picks track and laps and presses Start duel.

No database tables are needed for racing. `supabase.sql` is only for the optional lap leaderboard.

How the sync works: each browser simulates its own car and sends its state 20 times a second with a timestamp.
The rival is drawn slightly in the past (80-320 ms, adjusting itself to the connection) and blended between
real snapshots, so late or lost packets are absorbed instead of showing as jumps. The HUD shows ping and the
current buffer during a duel. The free Supabase plan allows 100 messages a second; a duel uses about 40.

## Engine audio

- Samples live in `assets/audio/` (five engine loops made at 3000 rpm, two exhaust one-shots, and `audio_manifest.json`).
  They are synthesised, not recordings of real cars.
- Each car is assigned ONE engine identity in `js/config.js` (`snd`), with its own `idle` and `red` line, `turbo` and `pops`.
- Pitch = simulated engine rpm / 3000. The rpm comes from the drivetrain in `js/car.js` (driven-wheel speed through the
  selected gear, clutch slip from rest, free revs in the countdown, wheelspin, a torque cut on each shift).
- Throttle/load only changes loudness and brightness. One looping source per engine; it is never restarted for rpm,
  throttle or gear changes. Car changes crossfade over 200 ms.
- `ENGINE_SETS` in `js/audio.js` is a list of loops per engine, so real idle/mid/high-rpm layers can be added later.
- Settings has separate Engine, Sound effects and Music volumes. Developer mode has an audition panel
  (engine, rpm, load, shift and pop triggers, output meter).

## Controls

| Action | Keyboard | Gamepad |
|---|---|---|
| Steer | Left / Right or A / D | Left stick |
| Accelerate | Up or W | RT |
| Brake / reverse | Down or S | LT |
| Handbrake (drift) | Space | A |
| Nitro | Shift or N | X / RB |
| Reset to track | R | |
| Camera | C | |
| Pause | Esc or P | |
| Mute | M | |

Touch buttons appear automatically on phones and tablets.

## Files

    index.html, style.css     menus and HUD
    config.js                 Supabase keys
    js/main.js                game loop, race rules, camera, HUD, menu, lobby
    js/car.js                 car list and stats, physics, wheels, effects, AI
    js/tracks.js              track list, GLB track loader, procedural track builder
    js/config.js              ALL handling and race tuning values, and the car list
    js/career.js              story chapters, goals, levels, daily challenge
    js/post.js                bloom, sun shafts, speed blur, vignette
    js/fx.js                  particles, skid marks, dust motes, rain
    js/audio.js               synthesised sound
    js/net.js                 Supabase rooms and leaderboard
    assets/cars.glb           the 7 cars, wheels separated
    assets/lider.glb          the Lider circuit, compressed
    assets/lider.bin/.json    Lider physics map (road / kerb / grass / wall + height) and racing line
    lib/                      three.js and supabase-js, bundled so nothing loads from a CDN except the font

## Adding a track

The quick way is a procedural track. Add an entry to `TRACKS` in `js/tracks.js`:

    { id: 'mytrack', name: 'My Track', ar: 'حلبتي', type: 'proc', theme: 'day', laps: 3,
      width: 15, runoff: 7, blurb: 'One line for the menu.',
      pts: [[0,0],[150,0],[200,60],[120,140],[0,120],[-60,60]] },

`pts` are corner points in metres, in driving order, forming a closed loop; the first point is the start line, so
put it on a straight. Keep corners at least ~30 m apart and do not let the loop cross itself.
Themes: `day`, `desert`, `coast`, `night`.

A scanned 3D track like Lider needs a baking step (surface map, height map and racing line are extracted from the
mesh), so it cannot just be dropped in. Send the model and it can be baked the same way.

## Tuning the cars

`CARS` at the top of `js/car.js`: `top` (top speed, m/s), `acc` (launch acceleration), `grip`, `rear`
(below 1 = tail-happy), `loose` (how much throttle breaks rear grip), `off` (grip on grass), `price`.

## Credits and licences

- Track: "Karting Club Lider | Outdoor Race Track" by Nikita Teploukhov (sketchfab.com/skril4ek), CC BY-NC 4.0.
  Non-commercial only. Remove or replace this track before selling the game or adding ads.
- three.js (MIT), supabase-js (MIT).



- All vehicles are generated in code by `js/carmodel.js` (smooth lofted bodies, wheel wells, glass cabins, wheels, lamps, wings). No external car models are used.


- All vehicles are generated in code by `js/carmodel.js`, one builder per racing class (rally hatch, GT3 coupe, prototype, stock car, muscle car, roadster, trophy truck, modern and vintage open-wheel). No external car models are used.

## Credits
- Cars: This work is based on "1965-2002 Rally Cars" (https://sketchfab.com/3d-models/1965-2002-rally-cars-2146acc1e3de409baf46d03a070d0526) by supercarmodels (https://sketchfab.com/supercarmodels), licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/). The models were split into bodies and wheels and given paint recolouring for this game.
- Track "Karting Club Lider" by Nikita Teploukhov (CC BY-NC 4.0, non-commercial use only).
