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

## Build 68 notes

- AI: the speed plan is built backwards from the end of the driver's view with a friction-circle budget (braking is limited by how much cornering a point already asks for); hairpins are taken a few percent under their static limit.
- Showroom and garage: the car is always dead centre of the picture.
- L toggles the headlights (the automatic night and rain lights no longer override your choice).
- Feel: the picture breathes with power and braking, edges fringe with speed and slides, the horizon leans with g-force, wind buffets, the brake sound is back, a calm crowd ambience plays near the stands.
- Scenery: new buildings, parked cars, trees with wind sway, flags, fans, smoke, birds, balloons and a denser crowd (see js/scenery.js).
- Cars: six tabs of cosmetic upgrades (Aero, Body, Rally, Wheels, Livery, Finishes) fitted to each body. Cars that already carry a wing (see STOCK_WING in js/config.js) are not offered a wing.

## Build 67 notes

- Engine sound: a physical model, not recordings. `js/enginedsp.js` runs in an AudioWorklet: every cylinder fires at its own crank angle (the real firing order of the engine), a pressure pulse measured in crank degrees goes down that cylinder's own header into the collector and then a real two-way exhaust pipe with an open end (the resonances you hear as boom and drone at particular revs), through a silencer. Beside it: the intake (noise gated by each intake valve), the block ringing at its own frequencies, combustion rasp, valve-gear ticks, an air-cooling fan (911), a turbo's whistle, a supercharger's whine (Delta S4). `js/enginecfg.js` holds what each of the 18 cars physically has (cylinders and firing order, header lengths, exhaust length and silencer, induction). The firing frequency is always rpm / 60 x cylinders / 2. If an AudioWorklet is not available the old recorded engines play, and Settings > Audio has an "Engine sound" switch between the two.
- Menu: the 2D scene is gone. The menu shows the selected car in a 3D showroom (`js/studio.js`): dark curved studio, lit turntable with a running ring of light, light panels sweeping the walls, beams and dust, a slow camera. The garage uses the same stage.
- AI: cars no longer run wide at corners. The speed plan now looks as far ahead as the braking distance (it used to see only 140 m, less than a hairpin at 220 km/h needs), the braking it counts on is the braking the car has shown, and a car whose front tyres are past their grip eases the steering and the brake, comes off the power and trusts that speed a little less. The racing line keeps a wider margin from the road edge. Hard has a little more pace and a stronger catch-up.

## Build 66 notes

- Straights: control points are whole metres, which made straights wobble. `cleanPts` in `js/tracks.js` snaps runs of points that lie on one line onto their best-fit line and relaxes the gentle bends, so straights are dead straight (kerbs, barriers, pit lane and pit boxes follow).
- Kerbs: constant-width strips with a short angled cut at each end, a little longer on long corners.
- Pit boxes: the painted box and the yellow pad were rotated mirror-wise (right only on axis-aligned lanes); they now follow the lane exactly. The pit wall turns see-through while you are in the lane so the crew is never hidden.
- AI: Hard is quicker (grip, power, top speed), makes far fewer mistakes, reacts faster and is pulled back into the fight harder when you lead.
- Radio: 30% quieter at every slider position.
- Headlights: the light pool exists from the start, so switching lights on no longer makes three.js rebuild every shader.
- Menu: no backdrop blur, the light 2D scene on every graphics level, the garage drawn at 30 fps, at most 1x resolution, without post-processing.
- Loading: `js/loader.js`. The first start prefetches the model, engine sounds and radio clips, warms the graphics and waits for one tap (which also unlocks sound); each race shows its circuit being drawn as it loads.

## Race radio (build 65)

- The race engineer is the supplied Expressive Race Engineer voice pack, trimmed to the 93 clips this game can truthfully say (`assets/radio/<category>/<id>.mp3`, about 4 MB, plus `manifest.json` with Arabic subtitles). The old synthesised engineer voice (eSpeak) is gone.
- `js/radio.js` plays one clip at a time with a priority queue, per-call expiry, cooldowns, interruption for critical calls and a re-check just before speaking. `js/engineer.js` watches the real simulation (cars alongside, flags, pit stops, tyres, fuel, damage, laps, finish) and decides what to say.
- Settings: Radio chatter (Essential / Balanced / Full), Race engineer voice on/off, Radio volume. While he speaks the music, engine and effects duck slightly.
- The pack's `track_limits_warning` and `five_second_penalty` files are empty (0 bytes), so those two events show on screen and beep but are not spoken.

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
| Headlights on / off | L | |

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
    js/radio.js               race radio: clip player and queue
    js/loader.js              loading screens
    js/enginedsp.js           engine model (AudioWorklet source)
    js/enginecfg.js           what each car's engine is
    js/studio.js              the menu / garage showroom
    js/carparts.js            the cosmetic upgrade parts (fitted to each body by a height-map scan)
    js/scenery.js, scn_geo.js, scn_tpl.js, scn_live.js   trackside buildings, parked cars, trees, props and their animation
    js/crowdsound.js          calm race-day crowd ambience (WebAudio)
    js/engineer.js            race engineer: what to say and when
    js/net.js                 Supabase rooms and leaderboard
    assets/cars.glb           the 7 cars, wheels separated
    lib/                      three.js and supabase-js, bundled so nothing loads from a CDN except the font

## Adding a track

The quick way is a procedural track. Add an entry to `TRACKS` in `js/tracks.js`:

    { id: 'mytrack', name: 'My Track', ar: 'حلبتي', type: 'proc', theme: 'day', laps: 3,
      width: 15, runoff: 7, blurb: 'One line for the menu.',
      pts: [[0,0],[150,0],[200,60],[120,140],[0,120],[-60,60]] },

`pts` are corner points in metres, in driving order, forming a closed loop; the first point is the start line, so
put it on a straight. Keep corners at least ~30 m apart and do not let the loop cross itself.
Themes: `day`, `desert`, `coast`, `night`.

mesh), so it cannot just be dropped in. Send the model and it can be baked the same way.

## Tuning the cars

`CARS` at the top of `js/car.js`: `top` (top speed, m/s), `acc` (launch acceleration), `grip`, `rear`
(below 1 = tail-happy), `loose` (how much throttle breaks rear grip), `off` (grip on grass), `price`.

## Credits and licences

  Non-commercial only. Remove or replace this track before selling the game or adding ads.
- three.js (MIT), supabase-js (MIT).



- All vehicles are generated in code by `js/carmodel.js` (smooth lofted bodies, wheel wells, glass cabins, wheels, lamps, wings). No external car models are used.


- All vehicles are generated in code by `js/carmodel.js`, one builder per racing class (rally hatch, GT3 coupe, prototype, stock car, muscle car, roadster, trophy truck, modern and vintage open-wheel). No external car models are used.

## Credits
- Cars: This work is based on "1965-2002 Rally Cars" (https://sketchfab.com/3d-models/1965-2002-rally-cars-2146acc1e3de409baf46d03a070d0526) by supercarmodels (https://sketchfab.com/supercarmodels), licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/). The models were split into bodies and wheels and given paint recolouring for this game.
- Tracks: all circuits are generated in code. Monza Park, Spa Ardennes, Silverstone Airfield, Interlagos Hills and Marina Bay Night are original layouts inspired by the shapes of the real circuits; they are not surveyed copies.

## Build 62 notes
- Phones and tablets: the game asks for full screen on the first touch and locks landscape; browser zoom, double-tap zoom and pinch are disabled; several fingers work at once (steer and brake together). On iPhone Safari, full screen only works from "Add to Home Screen" (the included web manifest makes it open full screen).
- Audio: menu music is stopped hard when a race starts (iOS ignores element volume), and the audio engine resumes itself after interruptions.
- Sound is positional: other cars, crashes, whooshes and the grandstand come from where they are, with Doppler on passing cars.
- The safety car and yellow flag only come out for hard crashes.
