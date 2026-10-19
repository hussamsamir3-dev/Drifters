# Tafheet Circuit Series — Build 104

Extract the complete ZIP into a folder and open **index.html**. All cars, sound, fonts, graphics libraries and game code are included. Keep the folders together. A local HTTP server is also supported: run `python3 -m http.server 8080` in this folder and open `http://localhost:8080`.

## Build 104

**See-through ghosts, no flashing.** In qualifying and in the pit lane, a ghost car no longer strobes. When it comes within 3 cm of another car, it fades to 30% opacity in about a tenth of a second, so you see straight through it, and it fades back to solid over a quarter of a second once the cars are apart. Each car uses its own see-through copy of its materials. Those shaders are compiled behind the loading screen, so the first ghost never stalls a frame.

**Pit crews wait in the garage.** Between stops, each crew stands back in its garage in loose groups facing each other, clear of the pit lane. When its car comes into the pit lane (yours, an online rival's, or an AI car heading for that box), the crew walks briskly out to its places at the box edge and stands ready. After the stop, it walks back in.

**A realistic crowd.** The spectators were rebuilt with adult proportions:
- **Bodies.** A head about an eighth of their height, shoulders about three times the head's width, and a shaped torso with a shirt hem over the trousers. Arms and legs each have two jointed segments, with elbows, knees, hands and shoes.
- **Variety.** Men and women (narrower shoulders, wider hips, long hair), caps, sunglasses, backpacks, scarves, phones and flags. Team shirts, some with stripes, short or long sleeves, and jeans, black, khaki, grey or olive trousers or shorts. Five skin tones.
- **Following the race.** Every head follows the nearest car going past, and the shoulders turn with it.
- **Cheering.** Near a car, fans jump and punch the air with pumping elbows, others clap or point, and phone holders raise their phones and film.
- **Idle.** People breathe, shift their weight from foot to foot, fold their arms, put their hands in their pockets or talk with their hands.
- **Walking.** Walkers swing their arms against their legs, with a knee bend.

All of this runs on the graphics card, as before, and the far figures still use the cheap low-detail model.

## Build 103

**One speed ceiling.** Every car in a race, yours and the AI's, is now limited to 185 km/h (it was 180 km/h for drivers and 185 km/h for the AI). Time trials still have no ceiling. Cars whose own top speed is lower, such as the Mini at 159 km/h, still top out at their own speed. The value is an original starting value in `TUNE.cap`.

**Launch control removed.** The rev gauge under the start lights and the start grades (perfect, good, wheelspin, slow) are gone, for you and for the AI. Every car now gets away on its own engine and grip alone. The perfect-start points in the skill chain went with it.

**Bigger exhaust pops.** All values are original starting values.
- **More often.** Lifting off now pops from half the rev range (was 60%) and from 32 km/h. Crackle cars pop on every lift and pop cars on 80% of them (was 90% and 50%). The pause between runs is 1.4–3 s (was 2.4–5 s).
- **Longer runs.** Crackle cars fire 6–12 pops per run (was 4–9) and pop cars 2–5 (was 1–3). The first pop is a big bang three times in four.
- **Bigger flames.** Each pop shoots a larger, longer blue-white and orange flame from the tailpipe, with a bright flash. Big bangs are 45% bigger and throw sparks.
- **Louder, with body.** Pops are 23% louder, and each one has a short low thump underneath, so you feel it as well as hear it.
- **Rivals are heard.** A rival popping within about 45 m of the camera is heard too, quieter with distance. The pops stop the moment a driver is back on the throttle.

## Build 102

**The AI learns from your best lap.** On every circuit, the rivals now study your fastest clean lap, not just an average of all your laps. Qualifying laps count too. Your lap is recorded every 5 m, and the rivals take four things from it:
- **Corner speed.** Your speed is compared with what the AI's own physics plan says your car could do at the very same points. Where you carried more speed through a corner, the rivals' target speed rises there, by up to +10% for Hard, +7.5% for Medium and +5% for Easy. This now also applies through the fast kinks and left-right changes where the plan used to play safe. A lesson only ever adds speed; it never slows a rival down.
- **Braking.** Where you were on the brake pedal, the deceleration you actually reached is compared with what the plan counts on. Where you braked harder, the rivals brake later (up to 12% more braking in the plan).
- **Gas point.** Where you were already back on full throttle in a corner or on its exit, the rivals go to full throttle there too, as long as their own car is not sliding past its planned angle.
- **Racing line.** Through the corners where you were faster than the plan, the rivals move up to 80% of the way towards your line. Elsewhere they keep their own line, unchanged.

**It keeps improving.** Every new best lap is studied the moment you set it, in the middle of a race too, and every rival replans straight away. A message says "Rivals are studying your best lap". A new best replaces 70% of the lesson, and a lap within 1.5% of your best confirms it (15%). The more best laps the coach has seen, the more the rivals trust it: 45% after the first best lap, rising to full trust. The rivals still drive exactly the same physics as you, so they can only copy what the car can actually do. Their own track sense still takes speed away wherever they cannot make a corner stick. Lessons are saved per circuit.

**Check it in the AI monitor.** The developer AI monitor (F8) has a new **Lesson** row for each rival: the best lap it is learning from, how many best laps it has studied, and how much it trusts them.

**Measured.** Three solo flying laps per run, before and after a lesson from a driver lapping at Hard pace. No wall hits or off-track moments in any run:
- **Nile, Quattro, Hard:** 50.5 s → 49.3 s, quicker than the lap it learned from (50.3 s).
- **Interlagos, Celica, Hard:** 55.0 s → 54.7 s.
- **Medium, both circuits:** no change, within ±0.2 s.
- **A lesson 4% faster through the corners:** Hard at Interlagos gains about 0.4 s.

A driver who is genuinely faster than the AI will teach it more. All weights and limits are original starting values.

## Build 101

**Ghost cars you can see through.** In qualifying and in the pit lane, cars still pass through each other, but they now look and behave like normal cars until they are about to touch. The see-through effect only starts when two car bodies come within 3 cm of each other. The ghost car then strobes at the screen's frame rate: it is shown on one frame in three (one in two below about 80 fps), so it reads as a transparent car rather than a blinking one. As soon as the cars separate, it is solid again.

**Qualifying lap count.** During qualifying the lap counter (HUD and minimap) counts the qualifying laps, for example 1/2 and 2/2. When the race grid forms, it resets to the race distance, for example 1/3.

**Skipping qualifying.** If you skip qualifying, you start the race from the back of the grid, even if you had already set a lap. The results card says so.

**A calmer engine.** The engine note was tiring to listen to for two reasons: at the race speed ceiling the engine sat at the red line along every straight, and the sound was strongest in the 2.5–4 kHz band, where the ear is most sensitive and a high-revving engine turns into a whine. The changes below are original starting values:
- **Gearing.** With a speed ceiling, the gears are now spread up to 1.2 times the ceiling (was 1.01). At 180 km/h a fast car cruises at about 80% of its rev range instead of at the limiter, and slower cars sit a little lower than before. Engine power and top speed are unchanged.
- **Tone.** A broad cut of 5 dB around 3.1 kHz and a gentle 2.5 dB lift below 170 Hz give a warmer, deeper note.
- **Top end.** The engine's top-end filter now closes near 3.7 kHz at full load and high revs (was about 4.8 kHz).
- **Firing note.** The firing-frequency resonance is broader and softer (a hum rather than a buzz).
- **Volume.** The engine gets up to 18% quieter in the top 2,500 rpm.

## Build 100

- **Qualifying before every circuit race.** Your grid slot is earned, so the starting-grid choice is gone from the menu.
  - **The session:** every car runs two laps and the best one counts. All cars are ghosts, flashing and passing through each other, so nobody can be hit.
  - **Ending it:** the session ends when you complete your second lap, or press **Skip ▸** on the qualifying chip. Skipping without a lap starts you from the back.
  - **The race start:** a qualifying table shows times and gaps to pole. The field is then lined up in that order with fresh cars, full tanks and new tyres, and the lights start the race.
  - **What's off during qualifying:** penalties, the safety car, AI pit stops and the skill chain.
  - **Exceptions:** knockout races and online duels have no qualifying.
- **Pit lane ghosting.** A car in the pit lane is a ghost: it flashes, passes through other cars, and the AI does not treat it as traffic. A car leaving the pits stays a ghost for a second, and until it is clear of everyone, so it never turns solid inside another car.
- **Lapped cars let you through.** A car about to be lapped (a leader within about 70 m behind) keeps racing at its own pace but moves to the side away from the leader, chosen once and kept. It never defends against the leader and lifts while the leader is close behind or alongside. An AI leader takes the open side at once. In a scripted test, a car a lap down let an equally fast leader through cleanly in about 10 s, with no contact, then raced on. The old blanket throttle cut is gone.
- **Engine smoke.** A car in poor condition smokes from the engine bay: grey when hurt, darker as it gets worse, fire when the engine is wrecked. A big hit gives a puff of smoke straight away. Rear- and mid-engined cars smoke from the back.
- **Pit crews at speed.** An idle pit crew is now drawn as its merged static copy unless it is one of the two nearest to your car while you are below ~90 km/h, close enough to see the mechanics fidget. Before, passing the pits meant animating up to twelve full crews every frame. CPU profiling of the race loop at the Monza start showed their per-frame posing at about 10% of the frame's script time; working crews always animate.
- **Markers in the car's real colours.** Each car's signature colour is read from what is actually painted on it (the livery texture, and your paint where the livery uses the base colour), weighted by visible area. A car that is mostly white, silver or black gets that colour.
  - **Your marker** uses it and now floats just above your car on screen, at the car's own depth. It follows the car exactly and never covers it.
  - **Rivals' name tags** carry it on the position chip, and are placed around each car's real on-screen outline, never on it.

### Build 100: loading and performance

Measured in headless Chromium with a software GPU (SwiftShader) on a 2-core build machine, Medium graphics, 8-car race, over http. Absolute seconds are far longer than on a real graphics card (every shader is compiled on the CPU) and vary by ±30% from run to run, so the before and after runs were made back to back in the same way; the number of shader programs compiled is exact.

**Where the race loading time went.** Almost all of it was shader programs. A race compiled them three times over, one by one on the main thread:
- `setupExtras` drew the whole scene once with the pit crews' tools shown, and again with rain and headlights on, each time with a blocking compile, *before* the lights, the floodlights and the lamp pool were set up. Every lit material was therefore compiled for a light count the race never uses, and then again for the real one (Monza: 152 programs compiled for 111 in use).
- Leaving a race disposed the circuit and the cars, which made three.js free every program. The next race, even on the same circuit, compiled them all again (Monza a second time: 208 programs).
- The 15 s wait for the engine sounds came before the shader warm-up instead of beside it.

**What changed** (nothing looks, sounds or plays differently):
- **One parallel warm-up.** The crews' tools, the rain and the headlights stay revealed through the race's own warm-up (`compileAsync`, which uses `KHR_parallel_shader_compile`, then `warmRace`), with the final lights in place, and are put back afterwards (`warmDone`). Programs are compiled once, for the light setup the race really uses.
- **Programs are kept for the session** (`keepPrograms`, batching.js). Each program is held once more, so a later race reuses every program it shares with earlier ones (cars, scenery, crowd, track). Materials whose `onBeforeCompile` had no cache key of their own are first given one made from the shader code they really produce (`stableKeys`), so day and night variants, or two different animations, never share a program.
- **Engine sounds load beside the shader warm-up.** The race waits at most a further 2.5 s for them at the end; a car whose engine is not in yet plays the basic loop and switches over by itself when it arrives (this fallback already existed).
- **No resolution changes while loading.** The dynamic resolution counted the loading screen's long frames: it shrank the picture and resized the canvas (a full stall of the graphics card) during loading, and the race then started with a frame-time average that kept lowering the resolution through the first seconds at the start line. It now pauses while a race loads and starts from a clean average when the lights come on.
- **Road and grass textures are painted once per session** (by day, night, desert) instead of for every race; they are random tarmac and grass either way.

**Race load (Start → lights), seconds; programs compiled in brackets:**

| | Before | After |
|---|---|---|
| Monza, first race of the session | 109.5 (152) | 69.5 (89) |
| Marina Bay (night), second race | 116.2 (122) | 72.0 (81) |
| Brands Hatch, third race | 83.1 (104) | 12.2 (7) |
| Monza again, fourth race | 93.3 (208) | 17.4 (6) |

The "Loading the engine sounds" step fell from 62–76 s (it also covered the blocking compiles) to under 2 s. Boot (page open → menu) is unchanged at 33–41 s here; its time is the graphics context start-up (about 12 s on this machine) and the menu's shaders, which are now kept for the races.

**Start area.** The resolution fix above is the change that reaches the start line: the race no longer begins by resizing the canvas and lowering the resolution while the lights are on. A frame-by-frame lap profile (`perf100tools/lapframe2.mjs`: update and render time per frame, draw calls, triangles, shadow casters, lights, allocations, for the start area against the rest of the lap) was written, but on this software GPU one lap takes longer than 15 minutes, so no per-frame before/after figures are given here and no other start-area change was made in this build.

**Checked.** Same-seed start-grid screenshots at Monza before and after: road, grass, kerbs, stands and scenery are identical. The only pixels that differ are the pit crews' idle animation, which runs on the clock (as in Build 96), and the edges of the idling cars. Monza, Marina Bay and Brands Hatch load and reach the lights with no console errors over http, and Brands Hatch also from `file://`. The 2.5 s sound wait is an original starting value.

## Build 99

Tuned from the first AI-monitor notes (Nile Park, Hard).
- **"AI slows down in turns it could take without slowing."** The cause: on its racing line a Hard driver still let a safety-net rule (the throttle-angle target, meant for a car off its line or pointing away from it) take up to 10% off its planned corner speed. On the line it now trusts its corner plan (`AI_CS.angleFloorHard` 1). Off the line the safety net works as before.
  - Solo laps at Nile Park: Quattro 50.7 → 49.8 s, Escort Cosworth unchanged.
  - An 8-car Hard race with a mistake-making leader: no contacts, no walls.
- **"Run over the kerbs for maximum pace."** Tested and not adopted. Riding the whole kerb (and closer to the white line) was 1–2% slower and put wheels on the grass, because in this handling model a kerb strike kicks the car and scrubs speed. Three-quarters of the kerb was also slower. The line keeps using half of each kerb.
- **"Oversteer sometimes."** The bigger committed drift from Build 98 is part of what makes Hard fast here. A smaller maximum drift angle was 1–2% slower, so the drift stays. Monitor notes that say where a slide costs time will show where to calm it locally.

## Build 98

**AI monitor (developer mode only).** After entering the developer password, press **F8** in a race or choose **AI monitor** on the pause screen.
- **Autopilot:** your car drives itself.
- **Camera:** it follows any car on the grid. **[** and **]**, or the arrows in the panel, step through them.
- **The panel** shows what the followed driver is doing and why:
  - its speed against its target and its planned corner speed, and the rule that set the target (plan, traffic, edge, angle…);
  - throttle, brake and steering, and its slide angle;
  - its gaps ahead and behind, and its last and best laps;
  - its strength, aggression and attack;
  - tyres, condition, contacts and wall hits;
  - live flags: passing, defending, squeezed, jam, the contact it predicts, emergency braking, the edge guard and the pits.
- **Pinning notes:** type a comment and press Enter (or **N** to jump to the box). This pins a note with a full snapshot of that moment: track, lap, track position, the car's state and all of the figures above.
- **Exporting notes:** they are kept in the save. **Copy** or **Download** gives a JSON file to send back for tuning. **F8** closes the monitor and hands the car back.

**Hard drives harder.** Solo laps showed that in this handling model a bigger committed drift and planning closer to the measured grip limit are faster. Hard drivers now:
- accept a larger drift angle (0.92 rad mid-corner, up to 0.67 rad set up on purpose);
- drift more through S-bends;
- count on more of their brakes;
- plan their corners 6% closer to the limit.

The gain on solo laps at Interlagos: Quattro 53.8 → 52.3 s, Celica 55.7 → 54.7 s, with no walls or runoff. The same physics applies to everyone; this is only how hard the drivers push. The extras scale with attack squared, so Medium gets about a quarter and Easy none (`AI_CS.hardDriftOk`, `hardDriftMax`, `hardReserve`; original starting values).

## Build 97

**Phone layout (landscape), built around the iPhone Dynamic Island, notch and home indicator.** Every edge distance now starts from the screen's safe area, so nothing sits under the island, the rounded corners or the home indicator. One layout serves every phone held sideways (`tools/css-src/mobile97.css`); tablets and desktops are unchanged.
- **Thumbs.** Steering sits in the bottom-left corner, brake and gas in the bottom-right, and drift above brake (nitro above gas in drift mode). All are sized from the screen height so they stay big on small phones. A layout dragged in the touch-controls editor still wins over these defaults.
- **Reading at a glance:**
  - Position and the running order are top-left, and lap and timing top-right. Both are compact, with larger text.
  - Speed, gear and the three gauges sit bottom-centre between the thumbs.
  - The minimap is above the gas pedal; in drift mode it sits under the drift score on the left so it never covers the car.
  - The skill chain sits under the position block.
  - Pause is at the top centre, with brief messages under it, and the radio sits above the gauges.
- **Start.** The lights and the launch rev gauge sit side by side above the car.
- **Before this build,** the gauges overlapped the right-steer button, the minimap overlapped the brake, the chain overlapped the timing panel and the drift button, and the radio covered the pause button.
- **Tested** on an iPhone 15 Pro (852×393, 59 px island insets), an iPhone 15 Pro Max (932×430) in drift mode, and an iPhone SE (667×375, no insets), with no overlaps.

## Build 96

**Stripes, done properly.** Racing stripes and side stripes are now painted into the body's own clear-coated paint by the car shader, in the car's own coordinates, instead of being separate stuck-on shapes. Every value is an original starting value.
- **Where the stripes go.** The racing stripes (Twin, Wide, Triple, Bonnet band) run only on the top skin: bonnet, roof and boot. A small height map of each body (the highest surface over every point of its plan) keeps them off bumper lips, splitters and sills that also face upwards. They end square at the bonnet's front edge and the boot's rear edge, like real vinyl.
- **Side stripes.** The Beltline and Double stripes sit on the door skin a hand's width under the measured bottom edge of the side glass. The Lower band sits just above the sill (higher with side skirts). The door number plates are kept clear.
- **Pinstripe.** Each stripe has a fine contrasting pinstripe edge, anti-aliased in the shader, so it stays crisp at every distance.
- **Auto colour.** The game reads the livery and paint under each stripe's actual path and picks the shade that stands out over the largest area. Light and dark are compared by contrast ratio, and a near tie goes to black. A red Mini with a white roof now gets black stripes instead of white ones that vanished on the roof. Any colour from the palette can still be chosen.
- **Testing.** Checked on all 18 cars from the front, rear, side and top, and live in the garage.

**Speed ceilings.** The race ceiling is 180 km/h for drivers and 185 km/h for the AI. Time trials have no ceiling. The ceiling is a limiter, not a target:
- each engine still pulls with its own power curve towards its own top speed (natural, upgraded and damaged);
- a 196 km/h Escort therefore takes far longer to reach the ceiling than a 244 km/h S4;
- the Mini (159 km/h) and other slower cars never see it.

The limiter eases the throttle over the last 1.5 km/h. Values are in `TUNE.cap`.

**Damage costs performance.** The car-condition figure (the Body gauge) now drives the car directly, for the player and the AI alike. At 0% condition a car loses 32% of its engine power, 14% of its top speed, 12% of its cornering grip and 12% of its braking, falling linearly from 100% (`TUNE.dmgPerf`). These losses come on top of the existing part damage (engine, gearbox, wheels) and bent-suspension pull. The AI plans its corners and top speed with the same factors. When damage is costing power, the gauge turns amber and shows, for example, "−9% POWER".

**Launch control.** While the lights are on, a rev gauge beside them shows the engine speed and a green launch band. When the lights go out:
- **Perfect start:** revs in the band. A short burst of extra drive (+22%, fading over 1.5 s).
- **Good start:** revs near the band (+8%).
- **Wheelspin:** sitting on the limiter costs drive for a moment.
- **Slow start:** too few revs bogs the engine.

Keyboard players can feather the throttle to hold the needle in the green. The AI launches by exactly the same rules, with its grade drawn from its driver skill, so a Hard field gets away cleanly more often.

**Skill chain and Style score.** Committed, clean driving is scored as it happens. Scoring never touches the physics.
- **Events:** overtakes (more for a pass made out of the slipstream), near misses side by side, held drifts, time in the slipstream, a perfect start and clean laps.
- **Chain:** every third event raises the multiplier, up to ×5. After 4.5 s without a new event, the chain is banked into the race's Style score.
- **Losing it:** contact, a wall or the runoff loses the open chain.
- **Payout:** the Style score is paid with the race reward and shown on the results line.

The chain panel sits on the right edge of the HUD, with a feed of the latest events.

**Photo mode.** Open it from the pause screen. The race freezes and a free camera orbits your car:
- drag (or use the arrow keys) to turn around it;
- the mouse wheel, pinch, or + and − move in and out;
- sliders set the lens (shown in mm), a tilt and the exposure.

The HUD, name tags and marker are hidden, and the panel can be hidden too. **Capture** (or Enter) saves a PNG at the full render resolution. Esc returns to the pause screen with the race camera exactly as it was.

**Developer figures.** The physics overlay (H) and the telemetry (T) are developer tools now. They only open after the developer password is entered. The settings screen's developer mode uses the same password.

**AI: smarter in close quarters.**
- **Contact predictor.** Every AI car now runs a contact predictor every frame, as a last line of defence under the lane and gap logic. Both cars' real footprints (oriented boxes) are moved along their real velocities and spin over the next 0.85 s.
- **Reacting to a predicted overlap.** The car moves away from where the other car will be, more urgently the sooner the overlap would come.
  - If the other car is ahead, it brakes.
  - If it is drifting sideways into a car alongside, it lifts. In this handling model, lifting tightens the line.
  - A car that is sliding or spinning is given extra room, because where it goes next is uncertain.
- **Squeezed with no lane left.** A car that is not ahead now drops in behind the car alongside instead of holding on at the edge. That was where most opening-lap contacts came from: a car pushed out wide slid back into the one inside it.
- **Test results** (same harness, same seeds, Hard AI; values in `AI_CS.hit*`, original starting values):
  - **Opening laps on 12 circuits:** car-to-car contacts fell from 8 incidents to 3.
  - **Race with a mistake-making player on pole:** 4 circuits × 150 s with sudden spins and brake checks. AI-to-AI incidents fell from 5 to 3, AI contacts with the player from 7 to 3 and wall hits from 7 to 3. Overtakes and lap pace were unchanged.
  - **Close-quarters scenarios:** a car parked across the line, two cars stopped nose to tail or leaning into each other, a three-car pile and a squeeze. Every one cleared in 3.5–7 s.

### Build 96: performance, start-area lag and draw distance

The slowdown when driving past the start/finish area was measured frame by frame (Chromium with a software GPU: draw calls, triangles, real lights, shader programs and the time of each step) and had three causes. All three are fixed without changing what you see; a new **Draw distance** setting adds an optional saving on top.

- **The hitch exactly at the line was the save file.** Crossing the line wrote the whole save to the browser's storage two or three times in the same frame (sector records, the AI's lesson from your lap, a new best lap). A played-in save (lap traces, the AI's lessons, time-trial ghosts) is 0.2–1.1 MB of text, so every lap froze the game at the line: with a 1.1 MB save the step that crosses the line took **35–68 ms instead of 2–8 ms** on a desktop CPU, several times longer on a phone. Now nothing is written while a race is live: changes are kept and written once when you pause, at the results, when you leave the race or when the game is hidden or closed.
- **Crowd drawn off screen.** Spectators are drawn in 60 m blocks, and a block was drawn whole as soon as any part of it was in view, so at the start grandstand (about 500 people in one or two blocks) most of the people drawn were off screen. Each figure is now checked against the view every frame and only those that can be seen are drawn (same people, same colours, same animation; the instance buffers are only re-sent when the visible set changes). Monza, Medium, 8 cars, sampled every 80 m round the lap: **271k → 206k triangles a frame** (start area 308k → 250k), and the start-area screenshots are identical.
- **Night lamps.** Night circuits carried ten real spotlights all race long (four coloured stage lights over the start, two on the start gantry, four floodlight towers), and three.js works out every real light for every lit pixel on screen, wherever the light is. The lamps now share one fixed pool of eight real lights: each frame the lamps that were lit before (stage, gantry, the four towers nearest your car) and whose pool of light or lamp head is within 14 m of the visible ground borrow them, nearest first, so a lamp is lit before it reaches the edge of the screen. The number of lights never changes during a race, so no shader is ever rebuilt. Marina Bay and Cairo Midnight on Medium: **14 → 12 lights** in every lit shader (10 lamp spotlights → 8). Cairo Midnight never needed more than seven and Marina Bay eight in the test laps; if more lamps are ever near the view at once, the one farthest from the car (at the edge of the view or just off it) waits for a free light.
- **Draw distance** (Settings → Display, and a button in the pause menu): *Auto*, *Near* (170 m), *Medium* (260 m), *Far* (420 m) or *Max* (no limit), measured around your car. Scenery blocks, spectators and lamps beyond it are not drawn, and the fog fades everything into the sky colour before that distance, so nothing pops; the camera's far plane follows, and the sky and the sun are drawn at the same angles. It applies at once, also in a paused race. *Auto* is *Far* on Low and *Max* on Medium and High, so the default picture is unchanged (the race camera shows about 80 m around the car at the normal zoom); *Near* and *Medium* trim the top of a zoomed-out view, the start showcase and replays.
- Shaders were already compiled behind the loading screen (Build 91); the new fog keeps the theme's haze formula exactly and uses one program for every draw distance.
- Checked: Monza, Marina Bay and Cairo Midnight (night), Brands Hatch and Giza Sand Ring (time trial on Low, the desert "stage"; the game has no separate rally stages) race without errors from both `file://` and `http://`; start-area screenshots before and after (Monza by day, Marina Bay at night, same random seed) are identical except for the pit crews' idle animation, which runs on the clock. The shader program count stays the same all round each lap.

All new numbers (pool size 8, margin 14 m, the draw distances, the 30% fog band) are original starting values chosen by measurement in this game.

### Build 96: packaging & data protection

- **Fewer, smaller files.** The playable game is now 9 files and 18.8 MB instead of 17 files and 40.5 MB (zipped: 15.8 MB instead of 29.4 MB). Nothing looks, sounds or plays differently.
  - **One copy of each pack.** Every pack is a single `assets/*.pak.js`. From disk it is run as a script; over http it is fetched as text, which keeps the loading bar moving. The binary `.pak` and `cars.glb` twins are gone.
  - **Denser packing.** Packs store 7 bits per character instead of base64's 6. The text is about 20% larger than the raw bytes, against 33% for base64.
  - **Car models:** `cars.glb` is now inside `cars.pak.js` (4.0 MB → 2.5 MB). Its data is deflated, byte-for-byte lossless; the textures are not touched.
  - **Sound effects and engine loops** are stored as lossless FLAC. Every file was decoded in Chromium and matches its WAV sample for sample, so the engine loops stay seamless. Names stay `x.wav`. Radio calls and music are untouched MP3s; only their ID3 tags (title, cover picture) were dropped.
  - **Code and stylesheet:**
    - `config.js` moved into `index.html` (`window.GAME_CONFIG`).
    - `supabase.js` is packed into `game.bundle.js`.
    - `game.css` is minified into `index.html`. Every element's computed style was compared before and after across all menu tabs; the only differences are gradient stops written in a shorter but equivalent form.
    - The game code is shipped deflated: 1.8 MB of code → 0.67 MB.
  - **Loading:**
    - **Boot packs** (cars, effects): read during boot, as before.
    - **Second packs** (other engines, more radio calls): read in a quiet moment about 8 s after boot, both from disk and over http. They used to be read clip by clip with range requests over http. Each pack is downloaded once and then cached.
    - **Extra boot cost:** unpacking adds about 80 ms of processing (measured in headless Chromium on the build machine). This is small next to the rest of the boot.
  - `lib/` (three.js and supabase-js) and `js/` are only needed for `?dev` and for building. The importmap in `index.html` serves `?dev` only.
- **Save game sealed.** `localStorage['tafheet.v1']` is now encrypted (ChaCha20) and signed (HMAC-SHA256). This covers money, cars, parts, records, settings and the developer flag.
  - **Changed or damaged save:** it is refused. The game falls back to the backup (`tafheet.v1.bak`, the last save that checked out when a session started), and then to a fresh save. It never crashes.
  - **Old plain saves** are read once and written back sealed. After that, a plain save typed into storage is refused.
  - **Not covered:** replays (`tafheet.replay70`) stay plain; they hold no figures. There are no cloud saves to protect: Supabase is used only for duel rooms and the lap leaderboard.
- **Code sealed.**
  - **Unreadable file:** `game.bundle.js` is deflated, scrambled with a key split between it and the `index.html` loader, and checked against a hash before it runs. A changed file shows "game files are damaged or have been modified".
  - **Self-check:** the bundle also checks its own text against a hash written into it at build time. Re-packing an edited bundle and fixing the loader's hash is still refused.
  - **Debug handle:** `window.__game` (with the save, CARS, TUNE) is handed out only to automated tests, to `?dev` runs, and after the developer password. Before, anyone could change credits from the console.
  - **Read-only tables:** part prices, tiers and part effects are frozen. CARS and TUNE are not, because the game and the developer tuning sliders write to them.
- **Developer password:** both the pause-menu tools and Settings → Developer mode take `egyseal` (any case, spaces ignored). Only a salted SHA-256 is kept in the code. The old second password is gone.
- **Build:** `bash tools/build.sh` rebuilds everything:
  - the packs, from `tools/assets-src` with `tools/pack-assets.mjs`. It needs ffmpeg for FLAC; without ffmpeg the WAVs are packed as they are.
  - the bundle, with esbuild.
  - the seal and the stylesheet in `index.html`, with `tools/build.mjs`.

  `SKIP_ASSETS=1` rebuilds only the code. Sources moved to `tools/assets-src/cars/cars.glb`, `tools/assets-src/_loose/menu.mp3` and `lib/supabase.js`.
- **What this does not guarantee.** The game runs entirely in the player's browser, so nothing in it can be made impossible to change. The keys and the unpacking code have to ship with the game, and anyone who can read the sources (this repository) can follow them.

  What the protection does:
  - It stops casual tampering: editing the save in the storage panel, changing a price in `game.bundle.js` with a text editor, typing `__game.save.credits = …` into the console.
  - It makes such edits useless: they are refused, not half-applied.

  What it cannot stop:
  - A determined person can still step through the code in the browser's debugger, or start the browser in automation mode to get the debug handle.
  - Anyone who clears all of the site's storage can start again from a hand-written plain save.
  - Online lap times are posted by the client. Trusted leaderboards would need a server-side check (for example a Supabase Edge Function that validates laps).

## Build 95

- **Speed cap 160 km/h** in every race except time trials. The five gears are now spread up to the cap, so fifth gear tops out at 160 instead of the engine hitting a wall in fourth.
- **Player marker attached to the car:** it rides just above the middle of the roof with no lag, moving exactly with the car (only its bob and the drop-in at the start move it).
- **AI stuck together in a turn:** a car stopped behind another stopped car now starts going round it after 1.1 s (was 2.2 s), and treats the other car as parked after 0.7 s (was 1.5 s).
- **Harder Hard:** Hard rivals now run three tiers more than you on every performance part (was two tiers on five parts), on soft tyres.
- **Stripes still hidden:** Racing stripes and Side stripe stay hidden until they are rebuilt.

## Build 94

- **Speed cap:** every car is held to 140 km/h in all races except time trials; the AI's speed plan knows the cap.
- **Parked wheels on the track:** fixed. A car taken out of the race (Knockout) was removed from the scene, but its batched wheels kept being drawn where it stopped. Removed objects are no longer drawn.
- **Softer car-to-car contact:** less bounce (restitution .2 → .05), less scrape grip (.4 → .22), 45% less spin from a hit, and car-to-car damage reduced by about a third.
- **Track limits:** running wide off the track no longer invalidates the lap; only shortcuts and missed checkpoints do.
- **Rally lamps light up:** fitted lamp pods now throw a long beam down the road and glow on each lamp, softly in daylight and at full strength with the headlights on.
- **Stripes hidden for now:** the Racing stripes, Stripe colour and Side stripe options are hidden (they were misplaced) until they are rebuilt.
- **Marker:** a breathing glow behind the arrow in your car's colour and a light sweep across its bevels.

## Build 93

- **Smaller, sleeker player marker:** the arrow is now about a third of a car's size on screen (13–20 px tall instead of 22–36) and shrinks a little more while you race. It is slimmer and sharper, with brighter faces, a tighter halo and a smaller burst ring, and it sits closer to the roof.

## Build 92

- **AI no longer swipes across each other onto the racing line.** Every car alongside (from just behind to a little ahead) is now a hard boundary: the target stays at least a car's width plus a margin on our side of where that car will be in 0.35 s, and the line is only rejoined once the car has cleared. When squeezed from both sides, the car holds its lane. In Hard 8-car races (200 s): Imola 0 contacts (was 2 per race), Brands Hatch 3 touches and no first-corner pile-up (was 2–5 including one).
- **New 3D player marker.**
  - **Shape:** a bevelled, notched arrowhead in your car's colour with a metallic finish and bright edges, a thin outline (dark on day maps, light at night) and a soft halo ring pulsing from its tip.
  - **Animation:** it drops in with a spin and a bounce at the start and after a reset, bobs and sways gently, and leans with your car's rotation. It flips with a golden flash and burst ring when you gain a place, and gives a small shiver when you lose one.
  - **Placement:** it stays the same size on screen and sits just above the roof line. It shrinks and fades a little while you race, and fades when a car passes under it.

## Build 91

- **AI: much faster through corners and corner sequences, and bolder in traffic.**
  - **Racing line:** a new minimum-curvature line over the whole lap (worked coarse to fine, 40 m down to 2 m) gives proper out-in-out lines, linked S-bends and later apexes. It uses half of each kerb, inside at the apex and outside at the exit. The car's corridor now follows the line out to the kerbs instead of pulling it back.
  - **Speed plan:** it respects the drift cap in S-bends and how quickly the line changes direction, so the extra speed stays under control.
  - **Traffic (Hard; Medium gets about a quarter of it):**
    - follows closer in the slipstream
    - dives for the inside of the next corner
    - backs off less alongside and after a touch
    - passes from close behind

    Fixed: a car in your wake no longer blocks every pass, and passing lanes follow the racing line.
  - **Track learning:** the AI's lesson for each part of the circuit is gentler and gives speed back faster on clean laps.
  - **Hard flying laps** (Celica): Brands Hatch 58.2 → 51.6 s, Monaco 64.8 → 60.3 s, Laguna Seca 57.1 → 51.6 s, Imola 52.5 → 48.0 s, Interlagos 61.5 → 54.7 s, Monza 48.4 → 44.6 s, all with 0 wall hits.
  - **Other difficulties:** Medium gains about 6%; Easy is unchanged.
  - **Pit approach:** a heading-for-the-pits car now keeps the racing line until the last 120 m (it used to hold the centreline for the whole lap).
- **Tyre and kerb sound, rebuilt.**
  - **Kerbs:** a soft, deep "thup" for every kerb block, timed to your speed. It runs from a slow thup-thup to a warm buzz and is split left and right by the wheels on each side. A gentle bump plays on entry. The old kerb sound clipped above full scale and clicked.
  - **Tyres:**
    - a rolling roar that follows speed and surface
    - a light sandpaper scrub near the limit
    - a squeal only in a real slide, which swells slowly and blends three bands
    - its own tone for a lock-up and a howl for wheelspin
    - a soft rustle on grass
  - **Mix and placement:** high frequencies are cut back and a gentle compressor keeps it calm. The two nearest rivals have their own tyre and kerb sound at their car.
- **Windows:** the model's own glass is back exactly as modelled: no smoothing, tint, windscreen banner or crack overlay. The Glass and Windscreen-banner options are gone.
- **HUD:** the Oversteer and Understeer notices are gone.
- **Start/finish area lag, fixed.**
  - **Cause:** the stutter passing the stands was shaders compiling mid-race. Sponsor boards, the gantry sign and the fan-village props drew through the post-processing and shadow passes for the first time there.
  - **Fix:** everything is now prepared behind the loading screen, so no shader compiles during a lap. The pit crews, grid marks and pit boxes share materials and draw together, so the start area uses about a third fewer draw calls (Monza: 263 → 176 on average).
  - **Less per-frame work:** scenery that never moves is no longer re-positioned every frame, and idle crews off screen update 5 times a second.

## Build 90

- **Performance parts replace the old upgrades.** Engine, Tyres, Nitro and Armour are gone. There are now twelve parts in five groups, each with five tiers (Stock, Street, Sport, Race, Elite):
  - **Engine:** intake and exhaust, ECU and camshafts, radiator and oil cooler.
  - **Drivetrain:** close-ratio gearbox, clutch and flywheel, limited-slip differential.
  - **Chassis:** coilovers and anti-roll bars, brake kit, weight reduction.
  - **Tyres:** compound, width.
  - **Body:** roll cage.

  How they work:
  - Every part changes something the physics really uses: engine force, top speed, grip, traction out of slow corners, braking force and fade, gear-change time, kerb stability, weight, drag, tyre wear, engine heat or damage. The old Tyres upgrade did nothing in the circuit handling model; grip now works through the handling model itself, so the AI's speed plan knows what its parts are worth.
  - Each car has a Performance Rating (PR, 100–999) and a class (D, C, B, A, S), worked out from the same lap figures the set-up screen shows. A stock Mini is about 260 (D), a stock Audi S4 about 645 (A), and a fully built Group A or Group B car reaches S.
  - A tier is bought once and stays in your parts bin, so any tier you own can be refitted for free. **Stock** and **Best** refit the whole car in one tap.
  - Each part card shows what it does, its tiers, the price of the next tier and how much it adds to your PR. The car's lap figures are shown stock against now.

  Measured with the AI driving: a fully built Celica laps Monza in 44.3 s (stock 48.4 s) and Brands Hatch in 52.1 s (58.2 s).

  Old saves convert automatically: Engine becomes the engine parts, Tyres the tyre and suspension parts, and Armour the roll cage. Whatever you spent on Nitro is refunded, because Nitro no longer exists in circuit racing. On Hard, rivals now carry two tiers more than you on the engine, tyres, suspension and brakes.
- **Main menu, redesigned.** The home page has three areas:
  - **Left:** "Next race", with a live track map and a big RACE button that starts straight away.
  - **Middle:** your car on stage with its PR badge.
  - **Right:** a rotating featured-events carousel with countdowns, the login calendar, today's missions and the season track.

  Around them:
  - **Top bar:** a level ring with an XP bar, a streak flame, and a credit counter that rolls up.
  - **Events tab:** shows a badge when rewards are waiting.
  - **Live ticker:** your results, records, trophies and countdowns.
  - **Polish:** pages slide in, and stats count up. It is built for desktop, tablet and phone, in English and Arabic.
- **Things to come back for every day:**
  - **Daily login calendar:** a 7-day calendar with a day-7 crate. Rewards grow 10% each completed week, up to +50%, and a streak shield saves one missed day.
  - **Daily missions:** three a day, from 15 kinds, all measured from your real races: overtakes, clean races, podiums, lap targets, drift points, places gained, wins on Hard, rain races and more. You get one free swap and a bonus for clearing all three.
  - **Event of the week:** one of eight special rule sets, for example Monsoon GP, Reverse grid, Mini Cup, Knockout, Drift king, Pro series, Endurance and Midnight run. Each has bronze, silver and gold rewards and a countdown.
  - **Seasons:** each lasts 4 weeks and has 30 tiers of rewards (credits, XP, free parts, exclusive paints and cars).
  - **Trophies and rewards:** trophies show progress cards, and rewards come with a celebration pop-up.
- **Player marker:** a small 3D faceted gem in your car's colour, with a dark base on day maps and a pearl base at night. It stays the same size on screen at any camera distance, always sits just clear of the car, fades when another car passes under it, and shrinks once the race is under way.
- **Driver name tags:** each rival gets a small pill with its position, name and team colour. Tags keep clear of each other and of your marker, fade with distance, and hide during the intro, replays and results. Turn them on or off in Settings → Gameplay (on by default).
- **3D engine sound:** every car's engine now comes from the car itself, heard from the camera.
  - It pans left, right and behind as cars move on screen and gets louder as rivals come close.
  - Fast passes get a slight pitch rise and fall (Doppler).
  - Your own engine stays as loud as before at the default camera.
  - On computers, your car and the two nearest rivals use HRTF; phones use the lighter equal-power panning.
- **AI cars stuck together at a corner:** found and fixed. A recovery that wanted to reverse was being cancelled. Cars counted any car within 12 m as blocking, so they never moved. A car waiting behind a stopped car never became "stuck". Cars on the grass waited for cars that were already driving away.
  - Stopped groups now sort themselves out: the car furthest along goes first, the others go round it slowly on the clearer side, and nobody waits forever.
  - Test: 96 cars parked at Monaco's and Brands Hatch's hairpins in 8 layouts. Before, 4 never got going; now all of them do.
- **Race engineer silent after the first race:** fixed. If one radio clip never finished loading or playing (a stalled download, or the audio interrupted on a phone), the radio stayed "busy" for the rest of the session. Now every race clears it, a clip gives up after a few seconds, a watchdog ends a clip that never reports it finished, and the audio is resumed if the system paused it.
- **Smoother cars:** body panels now have smooth shading, with one pass of curved subdivision where a curve showed facets. Panel lines and sharp folds stay crisp. The average race car gained only about 5% triangles.
- **Visual parts and stickers, all checked on every car:**
  - **Fixed:**
    - Exhaust tips, headlight covers and tow hooks were placed before the car's lamps were known.
    - Roof rack, lamp bar, antennas and roof number overlapped each other.
    - Bonnet louvres, pins and roundel overlapped each other.
    - The snorkel crossed the windscreen.
    - The Alpine's wing sat on its glass.
    - Stripes ran over wings and down the tail.
    - The side stripe crossed the door number.
    - The diffuser hit the exhausts.
    - Mud flaps hid inside bumpers.
    - Canards floated off the body.
  - **Improved:**
    - Your chosen race number now replaces the "2" printed on every livery's doors.
    - "Body colour" parts take the livery's own colour.
    - The paint has a clear-coat finish.
- **Fewer files:** the playable game is now 20 files instead of about 285 (360 including sources). Sounds are in 4 packs (2 audio and 2 radio), each with a twin for opening from disk, and the stylesheets are one file.
  - Over http, packs still load only the clips that are needed, using range requests.
  - From disk, each pack is read once.
  - The JavaScript sources, `lib/` and the original sound files are in the separate source zip; `tools/pack-assets.mjs` rebuilds the packs and `tools/build.sh` rebuilds the bundle and the stylesheet.
  - One bug was fixed along the way: the "win" radio call was truncated and never played from disk.

## Build 89

- **Hard AI pace.** The rivals now use far more of the track. The racing line runs out to about a wheel's width from the white line on entry and exit and clips the inside kerb at the apex; it used to stop 2.8 m short of each edge and then use only 90% of what was left. The car's corridor also reaches the kerbs. On Hard, the drift the speed plan accepts mid-corner and the lateral budget both go up; Medium and Easy are unchanged. Measured flying laps for the AI driving a Celica on Hard, all with 0 wall hits and 0 seconds off track:
  - Monza 48.5 s (Build 88: about 53 s)
  - Brands Hatch 58.1 s (about 60 s)
  - Monaco 64.3 s (about 68 s)
  - Interlagos 61.0 s

  For scale, the same car at Brands Hatch runs 67.5 s on Medium and 82.8 s on Easy.
- **Chicanes and S-bends.** When the line turns one way and then the other within the next 35 m (or 1.4 s of travel), and both turns need at least 7 m/s² at the present speed, the AI sets up a smaller drift (at most 0.32 rad, about 18°) and never skips the brakes mid-corner, because a big slide one way has to be unwound before the next turn. This removes the pendulum that threw cars into the wall at Monaco's swimming-pool section: Hard 8-car Monaco races went from 10 wall hits and 15 contacts in 5 minutes to 0–1 wall hits and 0–3 contacts. The final Hard 8-car checks (5 minutes each at Monaco, Laguna Seca, Silverstone and Interlagos) had 0 wall hits and 0 seconds off track on all four. There were 4 car contacts in total, all at Silverstone: two on the opening lap and two later.
- **No more weaving.** The AI used to fishtail down the straights, steering from lock to lock. Its preview of the road was shorter than the time the car takes to answer the wheel (the slide's alignment lag plus the heading loop), so it kept chasing its own lag. Two fixes:
  - On open road the lookahead is now at least 1.2 times that response time (up to 42 m). It fades back to the old preview where the line ahead bends tightly, so it never cuts an inside wall.
  - The yaw-rate damping is stronger (0.6 to 1.0).

  Full-lock steering reversals above 90 km/h over 3 laps dropped from 62–89 to 18–30, and lap times improved. Separately, the AI's departure from the racing line for traffic, a pass or the track edge now changes at most 3.2 m/s (5.5 m/s when a car is alongside or the edge is close), while the racing line itself is followed at full rate.
- **The AI learns a bad corner faster.** When the same spot catches cars out again in a race, each new incident there counts for more (up to 2.5x), so the track-sense correction settles in a few laps instead of many.
- **No more standing still.** Two deadlocks are fixed. First, a car stopped beside another car that was behind it, because any overlapping car behind made it give way; now only a faster car coming through alongside does. Second, a boxed-in car slowed towards a standstill; now it tucks in at just under the speed of the slower neighbour. Together these left queues standing at hairpins such as La Source and the Monaco pool exit.
- **Race-start showcase, redesigned.** It is still 11 s on the wall clock and still skippable, but it is now five long, continuous moves instead of a quick cut per car:
  1. a drone flies in high and descends towards the front row, with the circuit name and a laps · cars line;
  2. a low tracking shot runs down the side of the grid against the direction of travel, so the noses come towards the lens, and the caption follows the car in the middle of the frame;
  3. a low hero arc round the pole-sitter's nose;
  4. the same for your car;
  5. a rise into the race camera.

  Short dips cover the cuts. Every move is still collision-checked at 12–16 points, and the grid run takes the side that keeps the lens furthest from the cars.
- **Player marker follows the light.** On day, desert and coast maps it is a near-black chevron with a thin white rim and a strip of your car's colour. On night maps (Marina Bay, Cairo Midnight) it is a pearl-white chevron with a dark rim.

All values above are original starting values tuned by measurement in this game's own model; they are not taken from any other game's settings. The approach follows published ideas:
- speed targets from the vehicle's own limits with a backward braking pass ([US patent 7785178](https://patents.justia.com/patent/7785178));
- using the full width of the track and the kerbs ([Track Titan: use the track](https://www.tracktitan.io/study-plans/471c607b-2c8c-4ed3-86b0-08212eebbf78-racing-line-use-the-track); [GPFans: kerb riding](https://www.gpfans.com/en/f1-news/1021751/f1-kerb-riding));
- racing in traffic without contact ([Sony AI, GT Sophy](https://ai.sony/blog/how-to-train-your-race-car)).

## Build 88

- **Results screen.** It now comes up 1.2 s after you take the flag (it used to wait for every car when you had a penalty, up to 45 s), and the table is live: cars still racing show their lap and gap with a pulsing marker and drop into their finishing place as they cross the line. The race clock keeps running after your finish, so their times are real.
- **Fuel** consumption 20% lower than Build 87.
- **Pause button:** the telemetry (+) button is gone; the pause button is a single glass disc with a clean two-bar icon, a soft shadow and a gold glow on hover.
- **Player marker:** a slim chevron in your car's own colour with a white rim, soft shadow and glow, drawn as a high-resolution sprite; it floats well above the roof, breathes gently, and shrinks and fades back once the race is under way so it never covers the car.
- **AI in traffic:** it now goes for a pass whenever the car ahead is slower than it could go itself (not only when it is already faster at that moment), from further back, and through gentler bends; a car alongside only backs off if it is behind and about to touch. Position changes in a 3-minute Monza race: 2–5 (was 0).
- **AI in corners:** mid-corner it lifts and lets the drift scrub the speed instead of braking, unless it is far too fast or about to run wide; straight-line braking before the corner is unchanged. Hard 8-car races, 4 minutes: Brands and Laguna 0 wall hits and 0 contacts, Monaco and Silverstone one low-speed wall touch each.
- **AI stuck in the pit lane:** a car that ends up in the lane without meaning to (run wide at the entry, or a stop given up) now knows where it is: it drives the lane at the limit to the exit and merges, instead of steering at the pit wall.
- **Pit lane borders:** a solid concrete garage wall (1.05 m, white coping, red crash-pad band) now runs behind the crews and closes back to the outer barrier at both ends; it is a collision barrier like every other border, so no car can get behind the mechanics.
- **Pit crews:** every mechanic in every crew now has his own clock — gesture timing, sway, step rhythm, the way he looks around — so no two crews (or two men) move in unison; when a car rolls past, the idle crew step back towards the wall and turn to watch it.

## Build 87

- **Hard is hard now.** Measured on solo flying laps, the AI was using far less of the car than the handling allows: its corner speeds were capped by an old tyre-grip estimate (about 1 g) while the arcade model, and a human driving it, can corner much harder. The cap and the planned drift angle now rise with difficulty (Easy unchanged at 1×, Medium about 1.8×, Hard 2.6× the old cap, Hard also plans a slightly larger drift), and Hard rivals race with at least 70% aggression. Flying laps, Celica: Monza Hard 59.3 → 53.0 s (Medium now 59 s, Easy 70 s), Brands Hatch Hard 67.3 → 60.3 s, Monaco 75 → 68–69 s. 8-car Hard fields: best laps 7–14% faster on Brands, Laguna, Monaco, Silverstone, Spa and Hurghada, the field within 3–6% of the leader; no wall hits or spins on track, one start-line touch at Brands, a few >40° slides at Laguna (14 in 5 minutes) and Brands (3); everything else clean.
- **Fuel** consumption +50% again (×1.5).
- **Engine sound, calmer:** a softer top end (the engine's filter now tops out near 5 kHz instead of 9), much less saturation (a round note instead of a rasp), no harsh presence lift, less loudness swing with the throttle, slower and smoother pitch and level changes, quieter induction, a quieter rev limiter, and exhaust pops and bangs 40% quieter with a softer attack.
- **Tyre sound, realistic:** a new seamless "scuff" loop — abrasive, sandpaper-like texture made of tiny tread-block bursts — starts as a faint whisper as the car approaches the grip limit and grows into a rough scrub as the slip angle rises; the tonal squeal only joins in a real slide and swells and rises in pitch with the slip; locking or spinning a wheel feeds the same layers. All of it is smoothed, kept under the engine and fades as the car slows.
- **Pause buttons:** the round **+** (telemetry) and **Ⅱ** (pause) buttons sit side by side with a clear gap on desktop and touch screens (they could overlap).

## Build 86

- **Realistic, much faster pit stops.** The crew works in parallel, as a real one does: four wheels in 3 s (+0.6 s per damaged corner), fuel at the rig's flow rate (a full tank in 9 s, so a splash is quicker), bodywork up to 6 s, engine up to 8 s, gearbox up to 7 s, plus 0.8 s on the jack. The stop lasts as long as the longest job. Before, the jobs ran one after another and a fuel-and-tyres stop took 35–45 s; a typical stop is now 4–10 s (measured on AI stops at Monza: about 9 s for an almost empty tank and new tyres). The pit gauges fill together and the board shows the jobs still running.
- **The race-start showcase lasts 11 s** by the wall clock, even on a slow machine: a 2.4 s opening, the grid shared out over 7 s (a short shot plays the middle of its camera move at normal speed instead of rushing it), and 1.6 s into the race camera. The intro music fades out between 7 and 10 s, as before.

## Build 85 — the AI, rebuilt for clean, winning racing

Measured first, on the game's own physics (Chromium, software GPU, 8-car fields of rivals, Hard): on track the field was already mostly clean, but it slid a lot (13–27 slides past 40° per race on Laguna, Brands and Monaco, where Monaco also had wall hits), drove off the racing line for up to 10 s behind cars 40–90 m ahead, could not overtake (no slipstream in the current ruleset), and **the pit lane was where most of the crashing happened**: 7–11 wall hits and 8–14 car-to-car contacts per 5½-minute race, from cars steering the pit approach with a crude controller at racing speed, parking across the fast lane and leaving their box into the car in the next one. What changed:

- **Track sense — the AI learns the circuit from its own driving** (`js/ailearn.js`). Every rival watches itself all the time and the whole field shares what it learns, per 8 m of track: a slide well past the angle it planned, running wide past its corridor, a wheel on the grass or a touch of a wall makes that stretch — above all the braking zone and turn-in before it — a little slower in the plan (by how bad it was); a clean pass at the limit gives a very small step back. Corrections are quick, giving speed back is slow, like a driver building a lap. What it learns is saved per circuit and per handling set, so every race starts from what the previous ones taught it (and a change to the handling starts a fresh lesson).
- **Controlled drift line.** The AI sets up at most ~26° of slide on purpose (was ~31°) and plans corners for it, so it drifts through the corner on a smooth, repeatable line instead of hanging the tail out everywhere.
- **Edge guard.** It looks 0.6 s ahead (sideways speed included); if the car would leave its corridor it aims back in and gives up a little speed now, instead of finding the grass or the wall at the exit.
- **Racecraft.** It only goes for a pass when it is close and actually faster (or in the slipstream), the passing lane follows the rival instead of a spot chosen seconds ago, it drops the attempt if the gap opens, and otherwise stays on the racing line. The slipstream now works in every race, so equal cars can pass on the straights.
- **Pit stops.** On the track the racing driver keeps the wheel and just moves over to the pit side for the entry; the pit-lane driver takes over only in the lane. A car leaving its box crosses to the fast lane slowly before it accelerates, and cars in the lane give room to a car swinging into or out of its box.
- **The player's lesson is now a hint** (at most +5% where you were faster); the AI's own track sense has the last word.
- **Measured after:** 8-car races of 3–5½ minutes (with pit stops) on Brands Hatch, Laguna Seca, Monaco, Spa, Silverstone, Marina and Hurghada: **0 wall hits, 0 car contacts, 0 seconds off track, 0 slides past 40°, 0 spins** — on the track and in the pit lane — with tyre wear, fuel and stops running as normal. Position changes in a 200 s Monza race: 8 (was 0–3).
- **Opening lap:** more room to the car ahead for the first 30 s, and a side guard that keeps ~1 m of air to a car alongside (the car level or behind concedes). Opening 60–75 s of 8-car races on 10 circuits: no contact on six, one touch on three (Red Bull Ring, Corniche, Nile), and Monaco had three in one run and none in a repeat.
- *Not tested:* a human driver in the field (the tests run all-AI fields); how it feels to race them.

## Build 84

- **Your new numbers are the defaults:** turn rate 115°/s, yaw responsiveness 0.79, turn rate holds to 42.5 m/s with fall-off 74, alignment fall-off at speed 88, speed kept through a slide 0.55, slide scrub 0.015, settle 0.38 s, kerb kick 0.26; rubbered-in line amount 1.6, smoothness 3.05, spread 3.15, track darkness 0.14, band width 3 m, band darkness 0.08. All AI values as sent. Old slider settings saved in a browser are cleared once.
- **One ruleset.** The Simulation/Arcade (Professional/Arcade) choice and its preset button are gone from the menu; every race uses the circuit rules.
- **Why the AI slowed down as the race went on, and the fix.** Long-race telemetry (Monza, 6 cars, 7 minutes) showed two causes. (1) The AI planned its corners with the old four-tyre model's grip, which fell with tyre wear, tyre temperature and contact-patch terms far more than the arcade handling it actually drives with (its lateral budget dropped 16% while the car itself had lost almost nothing), so it braked earlier and earlier every lap. (2) Below 35% tyre life it switched to the *Save* pace, which cuts engine power by 12%. Now the handling itself has a realistic tyre model (below) and the AI plans with exactly the same factor; worn tyres are nursed at race pace and only a real fuel shortage makes a driver lift and coast; a driver racing to win runs *Push*. Measured: lap times stay flat as the tyres wear (60.6 → 60.8 → 60.9 s with tyres going from 95% to 50%), where they used to drift away until the stop.
- **Tyre wear, realistic.** Tyres last 60% longer (every wear rate ÷ 1.6). Grip fades gently over most of the tyre's life (about 4% down at half worn, 7% at 80% worn) and then falls off a cliff in the last 30% (32% down on a bald tyre); cold or overheated tyres lose a little more. In the handling: the nose bites less (lower turn rate), the car slides longer before it hooks up, it spins up more out of slow corners, and it brakes less hard — the same for the player and the AI.
- **Fuel** consumption is 150% higher (×2.5).
- **Dry by default.** Quick races start on *Dry*, Grand Prix rounds and daily challenges are dry, and online races no longer roll a 30% chance of rain. (You can still pick *Changeable* or *Rain*; the story events that are written around a storm keep their rain.)
- **Race-intro music** plays at full volume to 7 s and fades out completely by 10 s (it still stops at once on a skip).
- **Tyre squeal.** The squeal recordings were being cut at 1.5–2.6 kHz, which made them dull; they now play up to 6–8.5 kHz with a clean low cut and a presence lift, a little louder, and the loops were re-cut to be seamless (they clicked every 3 s).
- **Pit lane.** The entry and exit are now one constant-width road: the lane leaves the track at a shallow angle at its full 12 m width (its first metres lie on the track itself, so it emerges from the track edge like a real junction) and swings out to the pit wall; there is no wedge-shaped funnel any more. The pit-side Armco always runs outside the lane and its service apron (it used to cut diagonally across the lane through the taper), stays clear of the track's own barrier line, and eases back to it over 40 m beyond each end with no kinks; scenery keeps clear of that widened run-off.

## Build 83b (fixes)

- **AI cars stopping and vanishing.** Rivals could not steer through the pit lane with the new handling: the pit-lane driver still asked for a wheel angle, while the stick now commands a rate of turn. Cars heading for the pits slowed, stalled at the entry, gave up after 4 s and stopped on the track (where others ran into them) and, when the fuel finally ran dry, were towed to the pits — the "disappearing" car. The pit driver now steers through the same yaw-rate model (measured: 5 of 5 cars forced to pit all complete the stop and rejoin; before, most gave up). Parking stays in the fast lane until 15 m before the box and arrives slower, and leaving the box no longer swings into the lane wall.
- **Safety net.** If any car's physics state ever becomes invalid it is put straight back on the road (and logged), instead of vanishing and taking a car that touches it with it; the AI also never passes an invalid input to the physics.
- **AI control.** Calmer drift angles (the AI sets up at most ~31° of slide on purpose, down from ~51°), so it looks in control while losing little time. 8-car all-AI races of 4+ minutes on Monza, Spa and Silverstone: 0–2 spins, no stopped cars on the track.
- **Showcase camera.** Slower, near-constant-speed moves with a damped follow inside each shot (no corners, no jitter), lighter handheld drift, gentler orbits, crane rises and tracking moves, and slightly longer shots.
- **Car models.** The race-time body simplification is removed (it could leave gaps and faceted panels): every car shows its full bodywork again. Race wheels keep the full rounded tyre profile and more segments, so tyres are round.
- **Smoke and tyre trails.** Tyre smoke is a thin, short trail close to the tyre (shorter life, smaller, carried less by the car), and the live tyre marks are narrower and fade in 1.6 s.

## Build 83

- **Your handling numbers are the defaults.** The values tuned in the slider panel are baked into `HANDLING_DEFAULTS` (`js/handling.js`), the rubber-line settings into `RUBBER` (`js/main.js`), the AI values into `AI_CS` (`js/ai.js`) and `TUNE.cs.aiReserve` = 0.995. The per-car character table is emptied so every car drives with exactly this feel. The preset list starts with *Tafheet tuned* (exactly these numbers); the other presets are now small changes on top of it. Old slider settings saved in a browser are cleared once so everyone starts from the new defaults.
- **Handling menu hidden.** The tuning sliders are no longer in the pause menu. Press the small **⋯** button in the pause menu, type the developer password **`egyseal`** and press OK: the *Tuning sliders* button appears for that session. (Change it in `DEV_PASS`, `js/main.js`.)
- **Race-start showcase.** Before the countdown a cinematic introduces the grid: an opening crane over the field, then one shot per car from pole to the back of the grid with your car last (dolly-ins, orbits, crane moves, tracking and overhead shots with slow handheld drift and lens breathing), a lower-third caption in each team's colour, and a drone rise that lands exactly on the race camera. Every camera path is checked before it is used (never inside a wall, a car or the ground; clear line of sight to the car); a shot that fails falls back to a safe crane. **Skip** with any key or a click/tap anywhere on the screen (a quick dip to black, straight into the countdown). It plays its own music (*Silent Lap*, `assets/audio/showcase_silent_lap.mp3`, at the Music volume): the music stops when the track ends, when you skip, or when the showcase hands over to the race.
- **Performance.** Race-detail models: race rims use a lighter geometry (spokes without bevels, no wheel nuts), spectators and pit crews use far lighter shapes, distant spectators switch to six-box figures sooner. Static track objects stop recomputing their matrices after the start. Medium, Monza, 10 cars: ~791k → ~455k triangles a frame; simulation CPU 4.6 → 3.2 ms a frame. Dynamic resolution reacts sooner, anti-aliasing is off on Low, the pixel ratio is capped on High, and the quality guard steps in earlier. The game now always runs the minified single-file build (`game.bundle.js`), also from a web server — one download instead of ~40 modules (add `?dev` to the address to run the source modules).
- **Engine sound.** The lag/freeze at some points of a lap came from thousands of redundant audio-parameter automation events piling up each second; they are now de-duplicated, rival cars keep stable voice slots (no more voices being torn down and rebuilt as cars pass), and panning uses a cheap equal-power panner. Tyre slip and engine load feeding the sound are smoothed, so engine and tyre notes glide instead of stepping.
- **Kerbs.** Louder and crisper: a 2.6 kHz presence lift and a low shelf on the rumble loop, a quicker attack, and a click-and-thump strike when a wheel hits the kerb.
- **Tyre smoke and dust.** Particles fade in and out smoothly (no popping), smoke intensity follows the slide gradually, tyre marks fade over 3 s.
- **Look.** A warm, vibrant cinematic grade: golden highlights, a faint cool lift in the shadows, extra vibrance on muted colours, a soft S-curve, a gentle vignette, and a touch of field-of-view widening with speed.
- **Smarter AI that races to win.**
  - *Drift-aware driving.* The AI now steers through the handling model itself: to make its path turn at the rate the line needs, it points the nose ahead of its direction of travel by the drift angle your tuned catch-up time needs (atan of turn rate × catch-up time) and asks for the yaw rate that holds it. It sets up the drift instead of reacting to it, so it is smoother and much faster with your slow-yaw, long-drift numbers. Its corner speeds are planned from the same model (the turn rate that keeps the drift at a racing angle), it does not brake hard while sliding (in this model braking in a slide turns the car sideways), and its steering output is low-pass filtered.
  - *Racing to win.* Each driver knows its position. Anyone not leading pushes: a little more corner speed, closer following for the slipstream, quicker to try a pass and nitro to complete it; the leader pushes when someone is within ~45 m behind, and everybody pushes on the last lap.
  - *Measured* (Chromium, software GPU, 6-car grid from pole, first lap from a standing start): Monza/Mini 84 → 75–76 s, Silverstone/911 no lap within 95 s → 85–88 s, Luxor/Celica 48 → 47–49 s (the spread is first-lap traffic); first-corner traffic at Spa no longer spins cars (max slide 54° against 88° before); 8-car fields on all 17 circuits: nothing off, nothing stuck.
- **The AI learns from you** (`js/learn.js`). While you race, every frame of your driving is recorded per 5 m of track: your speed compared with what the AI's own physical plan says *your* car can do there (so the lesson works whatever car you drove), your line, how closely you follow, the places you gain and your contacts. Each clean, valid lap is folded into a profile saved per circuit (the newest lap counts for almost half). In later races on that circuit the rivals carry more speed where you proved a corner goes faster (up to +12%), lean towards your line there, and race with your level of aggression — Easy rivals take half of it, Medium three quarters, Hard all of it. The physics stay identical: they can only copy what their car can physically do.
- **Clean-up.** Removed the retired dirt-arena menu scene (never started any more), fourteen unused building templates, and a handful of unused helpers and constants.

## Earlier (Builds 79–82)

- **Performance.** Draw distance now follows the screen: the ground footprint of the camera view is measured every frame and only scenery inside it (plus a 30 m margin) is drawn or shadowed, so nothing off-screen costs GPU time and nothing can appear late. Barriers are built in ~100 m lengths instead of one ring. Physics is capped at six sub-steps a frame so a slow frame can no longer snowball. Dynamic resolution runs on every tier (not only Auto), the desktop pixel-ratio cap is 1.25, and Auto reads the graphics card: integrated and mobile chips start on Medium. Draw calls in the sampled Monza frame fell from 262 to 156 and shaded triangles from ~1.0 M to ~0.26 M.
- **Camera.** Every camera quantity (aim, zoom, framing) is a critically damped spring with its own velocity. The aim leads into the car's direction of travel and the road ahead; the hard edge-of-frame pin is replaced by a sprung framing offset. No stepping, no jerks at any frame rate.
- **HUD (revision 4).** The three gauges sit on their own translucent discs with no panel behind them, 15% larger, with a small speed/gear line above; the camera is steeper (about 64° down) and framed closer, with the car low in the picture and the view leading into the direction of travel, as in the reference.
- **Pit stops (revision 4).** The service readout floats above the car as three gauges whose arcs fill as the crew works. Every crew close enough to be seen is fully animated: waiting mechanics shift their weight, put a hand on a hip, fold their arms, scratch a helmet, turn to talk to a neighbour and take the odd step.
- **Crowd (revision 4).** Chunkier, larger toy-scale spectators that match the cars, bright kit colours, and about a third more of them.
- **HUD.** A larger instrument cluster (condition, fuel, tyres with compound) with a live speed and gear readout, on a glass panel. The minimap is centred on you, turns with the car, zooms with speed (tight at low speed, wide at full speed), shows the road, kerbs, pit lane and start line, every car as an arrow, and a whole-circuit inset with the field's positions.
- **Pit entry.** The lane is full width almost from the moment it leaves the track, like a real pit entry: a wide funnel beside the circuit behind the painted entry line, peeling away over a longer taper; the track-side edge never crosses onto the circuit. Minimum lane lengths are longer.
- **Handling replaced: ROTATION-FIRST ARCADE DRIFT (Build 82, `js/handling.js`).** One authoritative controller for every car on a circuit, player and AI. The car has two independent directions — the heading (where the nose points) and the velocity (where it travels). Steering commands the heading's rate of turn directly (300°/s at full input at medium speed, a quarter of that at rest, easing off above 22 m/s; the rate is reached with a 40 ms time constant and decays with a 90 ms one on release). The velocity keeps its old direction and is pulled onto the heading by a progressive lateral grip — an exponential alignment with a 180 ms time constant (longer off the throttle, under braking, on grass and in rain; shorter at speed and once the stick is centred; doubled beyond 80° so a spun car grips again). The redirected speed is kept (a turn never creates speed; a long slide bleeds it slowly). ROTATE → SLIDE → GRIP → GO. The old four-wheel force model, its turn-rate governor and drift controller are gone, not layered under. Engine, brakes, aero drag, fuel, wear, damage, collisions, tyre marks, smoke, cameras, UI and race logic are unchanged and all read the same vehicle state.
  - *Presets* (`HANDLING_PRESETS`, chosen in Pause → Tuning sliders → Preset, saved): Arcade balanced, Drift king, Grip racer, Rally loose, Precision, Heavy muscle, Kart. The per-drivetrain and per-car tables (`HANDLING` in `config.js`: yaw responsiveness, drift duration, lift-off slide, pick-up) apply on top of the preset; the sliders on top of both.
  - *Mandatory tests (Chromium, software GPU, scripted keys, Celica, Arcade balanced):* **T1** sudden left at 100 km/h: heading 25° / travel 6° at 0.2 s, 49°/16° at 0.3 s, 76°/27° at 0.4 s — the nose leads, the travel catches up. **T2** holding left 1.5 s at 60 km/h: 411° of rotation, still 49 km/h. **T3** release after a 0.5 s turn: rotation dies in 0.2 s (the heading settles 25° past the release point), the drift goes from 64° to 1° in 0.6 s and the car travels along the heading it reached. **T4** left then right at 90 km/h: the rotation reverses in 0.13 s, no pendulum. **T5** 0.8 s left at 150 km/h on throttle: 30° slide, exits at 154 km/h. **T6** hairpin at 50 km/h: 170° of heading in 0.68 s while the travel still lags 150° behind, then grips and exits at 59 km/h with 0° drift. **T7** 170 km/h, no input, 3 s: 0.0° wander. **T8** the same script at 30/60/120 fps: heading within 0.1°, position within 0.3 m. **T9** AI on the same model with drift management: Luxor 44 s (old physical model 46), Monza/Mini 70 s (74), Silverstone/911 80 s (82), a scripted human 55.9 s; all 17 circuits with 8-car fields: no errors, nothing off, nothing stuck. Stop, reverse (gentle, 30% turn rate) and pull-away clean.
  - *Not tested:* real hands on a keyboard, pad or touch screen — the feel itself.
- **Handling: a four-wheel force model for every car (Build 81, `js/handling.js`).** Player and AI cars on a circuit run the same vehicle physics: a planar rigid body with its position, world velocity, heading and yaw rate as independent states, four wheel contact points with their own wheel angular velocities, stepped at the fixed 120 Hz rate (accumulator, catch-up capped at six sub-steps, render interpolation, no per-car allocation in the loop). The structure is a JavaScript translation of the wheel-force architecture described in the analysis of Circuit Superstars' managed assembly that was supplied with the request. Nothing snaps the velocity to the heading and nothing delays the position: the body rotates first because the steering is a force couple, and the trajectory follows because the tyres' lateral friction then redirects the momentum.
  - *Build 81 revision 4 — read against the reference assemblies:* the user supplied the reference game's managed assemblies; the logic (not the code) of its vehicle controller and AI was read from the IL and this implementation was corrected to it where it differed: the wheel's rolling target follows the ground speed (the full ground speed when the wheel travels sideways); the ground couples the wheel to it with at most the remaining forward grip, the residual drive/brake torque and a damping term add on top, a braking wheel stops at zero when moving forward, and the spin is bounded — so wheel spin needs far more drive than grip, as in the reference; the player's steer input is the raw axis in the reference (any ramp lives in its input assets), and an optional screen-space mode steers towards where the stick points (sign·√|sin(angle)|) — our speed fade stays as a labelled adaptation because the reference's steering strength per car is not in the assemblies. The AI control layer was rebuilt in the reference's structure (see `AI_CS` in `js/ai.js`): steering is a PD on a target angle that blends the direction to the lookahead point with the line's tangent there, measured against both the car's heading and its direction of travel (blended by speed) and corrected by how sideways the car is; the target speed falls with the angle to a farther lookahead (|sin|^sensitivity between top speed and a low speed) and is scaled by difficulty; the throttle is a PD on the speed error (negative = brake); overtake and side radars shift the target sideways; a car facing away from its target backs up with opposite lock until the error is small; lower difficulties add slow noise to steering and throttle, fading in after the start. Our racing line, lanes, passing and defending, the curvature speed plan (kept as a ceiling so braking points stay physical), stuck recovery and pit logic remain. Not adopted: the reference's per-car force multiplier for AI cars (every car here keeps the same physics), its raycast suspension and 3D rigidbody.
  - *Build 81 revision 5 — controllable drift, rubbered-in line, smarter AI:* the tyres are softer (`sideFriction` 6.5) with a much stiffer rear (`balanceGainR`) and a softer front, so steering rotates the body ahead of its path into a real, proportional drift (about 6–8° of body slip at full lock, 16° on the throttle with traction control off) that cannot become a spin: a slide cap (`maxSlip` ≈ 24°, `slipDamp`) damps rotation past it, an auto counter-steer (`autoCounter`) feeds the slide back into the couple as the stick returns to centre so the car straightens on its own in about 0.3 s, and a scrub-recovery term (`scrubRecover`) gives back most of the speed a drift would cost (full lock on throttle at 100 km/h now gains speed; a 0.5 s tap at 170 km/h loses nothing). The throttle/side-grip coupling is weaker (`fsInfluence` 1.0) so turning no longer chokes acceleration. Grass keeps more steering and side grip (`SURFACES`) so an excursion stays controllable, but slows the car hard. Reversing is steered kinematically with a lower speed limit (the slip-angle model is trailer-unstable backwards). A rubbered-in racing line is laid on every corner (`addRubberLine`, `js/main.js`): a soft dark band and two tyre tracks along the best line, tapering out onto the straights, so the grip the field leaves behind shows the line through the turns. The AI's steering gains and the angle-to-speed sensitivity were tuned on the new tyres (`AI_CS`) and its corner-speed margin raised (`aiReserve` .96): it laps Luxor in 49 s against a scripted human's 55 s, Monza/Mini 76 s, Silverstone/911 88 s, no off-track, and 8-car fields on all 17 circuits run clean.
  - *Build 81 revision 6 — turn-rate governor and tuning sliders:* the car's rate of turn at full steering is now a stated design parameter (`turnRateOn` 30°/s with the throttle down, `turnRateOff` 50°/s lifted, easing off with speed via `turnRateV0`/`turnRateRef`; below ~36 km/h the throttle no longer reduces it so a hairpin can be powered out of). The couple is scaled against the car's own measured full-input yaw at the current speed, so the numbers hold for every car (measured: 28/54°/s at 40 km/h, 25/45 at 80, 20/29 at 140). The AI plans on the lifted rate and lifts the throttle where a corner asks for more than the throttle-on rate; its lap times are a little longer than before on the tight circuits because the throttle-on rate is deliberately low (Luxor 51 s, Monza/Mini 80 s). **Temporary:** Pause → *Tuning sliders* opens every handling and AI parameter as a numbered slider (56 of them) with a plain-language title, what it does and what lower/higher feels like; moves apply live to all cars and are saved with the game (they come back after closing and reopening; *Reset all* clears them). *Copy numbers* produces the changed and full sets as text to send back so the chosen values can be baked in and the panel removed.
  - *Build 81 revision 8 — drift controller, fading tyre marks, rubber-line sliders:* a drift controller (`driftAngle`, `driftFollow`, `driftGrip`, `driftMinSpeed`, `driftSpeedRef`, `driftRateK`) lets the steering input set the drift angle directly: the yaw rate is eased onto the rate that holds the asked angle and back to zero when the stick is centred, so a slide builds, holds and unwinds smoothly and cannot overshoot into oversteer; it may exceed the turn-rate setting only by `driftRateK` while the drift builds. Softer tyres (`sideFriction` 3.8) so a 10° drift pulls about 1 g and fits the 30/50°/s turn rates (measured: 8–9° drift at full lock on throttle, 12–13° lifted, still accelerating through the corner, no spin). The live tyre marks the cars lay now fade out over 3 s (shader age attribute in `Skids`); the rubbered-in racing line drawn on the corners stays and has its own sliders (amount of the lap marked, end smoothness, number of tyre tracks, their width, spread and darkness, soft band width and darkness) that rebuild the line live. 69 sliders in all, saved with the game.
  - *Recovered algorithms (structure from the report):* steering distributed as +u·S/N to the front wheels and −u·S/N to the rear wheels, each turned into a sideways force by the wheel load × clamp(wheel angular velocity × radius / steerVelocitySmoothing, −1, 1) × surface modifier; contact velocity = body velocity + yaw × wheel offset; slip angle = atan(vSide / max(|vForward|, 1)); lateral force = lerp(static branch −vSide·L, slip-angle branch −slip·C·(1+balanceGain)·(1+gain·|vForward|)·L·surface, t) with t = clamp01(groundSpeed·falloff − offset); low-speed forward static friction with its blend on wheel spin + ground speed; the forward/sideways coupling (forward capacity A = L·μ shrunk by the sideways force, forward force clamped to A, the residual reducing the sideways force and spinning the wheel); braking scaled by the velocity direction and the wheel's spin; wheel inertia 0.5·wheelMass·r²; rolling resistance −vForward·rr·L/k; local/shared wheel-load blending; a torqueScale separate from the translational force; the steering force kept in its own accumulator, not clamped by the coupling; no handbrake (the inspected controller writes zero to it).
  - *Adaptations (marked `[adapt]` in the code):* no raycast suspension — the local wheel load is the game's existing four-corner load model (static split, fore/aft and lateral transfer) scaled so the four loads always sum to the car's weight, blended with the car's average (sharedWheelLoadStrength), and "L/springStiffness" is L / (static load / springCompression); the brake's sign comes from the wheel's spin direction so braking also works in reverse, its magnitude from |velocityDot|; the per-wheel grip the game already tracks (compound, temperature, pressure, camber, damaged wheel, mud, oil, rain) scales the forward coefficient, while the surface descriptor table (`SURFACES`: grass, kerb, road, wall, pit — side grip, speed gain, steering grip, balance, forward grip, coupling, rolling, degradation) and the wear interpolation (`WEAR`, each modifier lerped to 1 by tyre health) follow the recovered structure; a driven wheel's spin is bounded (`spinBound`) and a locking wheel stops at zero; forward static friction is released while a pedal is pressed; an input-layer fade of the steering input with speed (`steerFadeV0`/`steerFadeRef`, off = 0) because a force couple turns harder the faster the car goes; a small optional yaw damping; a parking aid below 4 m/s (the couple needs rolling wheels); an optional lateral cap (off by default). The engine, gearbox, forward aero drag, fuel, tyre temperature, damage and collisions stay in `car.js`; the model's mean slip × surface degradation feeds the game's tyre wear.
  - *Not recovered:* the vehicle prefab settings, torque curves, surface tables, masses and inertias. **Every number in `HANDLING_DEFAULTS` and the per-car table is an original starting value for this game, not a value extracted from Circuit Superstars**, and the result does not claim exact equivalence with that game's handling.
  - *Old routines replaced:* the physical four-tyre lateral integration for circuit cars (it still runs for tyre wear and temperatures only); the Build 80 dynamic bicycle model; the Build 79 heading-first driver layer (yaw governor, slide aid that bled off lateral velocity, digital-steer blend, speed scrub on turning) and the heading-first `TUNE.cs` model (only `aiReserve` remains); the AI's separate grip model and its wheel-angle steering — the AI now measures the model's own cornering limit per speed (`measureLatLimits`, run once per car at race start) to plan corner speeds and steers with a yaw-rate controller on the shared physics (no extra grip, no path following). Drift mode and the menu showcase keep the physical model.
  - *Tuning controls* (`HANDLING_DEFAULTS` in `js/handling.js`, every value commented; per-drivetrain and per-car overrides in `HANDLING.byDrive` / `HANDLING.byCar` in `js/config.js`): `steerStrength` (how hard the couple turns the car; 9 ≈ 1.1 g at 40 km/h), `rearSteerShare`, `steerVelSmoothing` (how quickly steering comes in with wheel speed), `steerFadeV0`/`steerFadeRef` (steering authority at speed), `sideFriction` (cornering stiffness: lower = more slip for the same force), `balanceGainR` (rear stiffness over front: higher = more stable and less high-speed cornering), `sideFrictionGain` (stiffness growth with speed), `forwardFriction`/`fsInfluence`/`residInfluence` (how throttle and brakes eat into side grip and how a spinning or locking wheel loses it: the slides), `tcMargin`/`absMargin`, `sharedLoad`, `wheelMass`/`angularDrag` (wheel spin-up), `inertiaK`/`torqueScale` (yaw response), `yawDamp`, `lowSpeedAid`, `grassSide`/`grassFwd`/`grassSteer`, `kerbKick`/`kerbScrub`. AI corner-speed margin: `TUNE.cs.aiReserve`.
  - *Physics overlay:* press **H** in a race (or Settings → Developer → Physics overlay): heading (red) and velocity (cyan) arrows, steering input and displayed wheel angle, front/rear slip angles, body slip, yaw rate and yaw moment, sideways/forward force totals and lateral g, the four wheel loads, the four wheels' spin, grip usage bars.
  - *Tested (Chromium, software GPU, scripted keys, Celica unless noted; revision 3 tuning — couple 20, tyre stiffness 18, softer front / stiffer rear, stronger speed fade):* straight-line stability at 182 km/h (zero yaw, zero slip); 0–92 km/h in 2.5 s (unchanged); steering-force signs (front +10 kN, rear −7.9 kN for one input) and turn direction identical to the physical model; 0.5 s steering taps at 168 km/h: 2.3° body slip, no speed loss, settles on release; full lock from 92 km/h on throttle: 2.7° slip, speed still rising (109 → 129 km/h over the next second); brake + full lock from 182 km/h and power + full lock: 2.4° slip, no spin; counter-steer and release settle the car; a step input at 160 km/h (offline) peaks the yaw rate at 0.2 s before the lateral acceleration settles by 0.3 s (heading leads trajectory) and loses 3 km/h over 1.2 s of 2.1 g cornering with no throttle; full-lock cornering on throttle gains 29 km/h over 3 s at 2.2 g with 2.4° body slip; throttle/grip coupling (E30, full throttle + full lock from 60 km/h): TC off 3.3° slide with wheel spin, TC on 2.7° and no spin; launch wheel spin (E30, TC off: rear wheels 54 km/h over the ground; TC on: none); worn tyres (health 15%): 2.0 g against 2.4 g new; grass: 11° slip and heavy drag, kerb: 2.1 g; a wall hit at 33 km/h ends finite with the car stopped and front damage; braking to a stop, reversing with full lock and pulling away are clean; the same key script at 30, 60 and 144 fps ends with identical heading and position within ~4 m over 7 s (input sampling). Steady-state full-input cornering measured by the model (front-heavy split): 1.65 g at 40 km/h, 2.3 g at 70, 2.5 g at 100, 2.4 g at 140, 2.2 g at 180 (yaw rate 1.46 / 1.17 / 0.88 / 0.61 / 0.44 rad/s). AI on the shared model: Luxor 48 s (old physical model 46 s), Monza/Mini 76 s (74 s), Silverstone/911 86 s (83 s), Spa/E30 no off-track; a scripted pure-pursuit human laps Luxor in 55.4 s (54.9 s). 8-car fields ran 45 s on all 17 circuits with no script errors, no cars off, none stuck.
  - *Not tested:* real hands on a keyboard, pad or touch screen (the feel itself); wet and gravel surfaces beyond the per-wheel grip they feed in; long races with heavy tyre wear; collisions between cars beyond what the field sweep exercised; online sessions. The native Burst path and the running Circuit Superstars game were never compared with this code.
- **Camera (revision 5).** Framed closer (the car is about twice as large on screen, the track about a third of the width, as in the recording) with a stronger lead into the direction of travel.
- **Audio.** Directional sound: the microphone sits on the camera and faces the way it faces, and everything the player's car makes (engine, exhaust pops, turbo, tyres, surfaces, brakes) is placed in the world at the car, so it is heard from where the car is on screen; rivals and impacts are placed the same way. The engine note passes through an exhaust stage: load-driven valve-style saturation (growl under power), a resonance that tracks the firing frequency, a presence shelf that opens with load, and an induction roar for the player's car. Gear changes are clearer: a deeper drive cut, a gearbox thump and clack, exhaust pops on hard upshifts (bangs and crackles on tuned cars), blips on downshifts. Pops and bangs keep their crack (brighter tailpipe filter, sharper attack).
- **Crowd.** New spectator figures: shoulders and waist, hands, a proper head and neck, hair or cap, sunglasses, backpacks, scarves, small flags, and some filming on their phones; smooth mid-detail figures replace the box people at distance on Low.
- **Loading.** Shaders now compile in parallel on the GPU process (`compileAsync`) instead of one by one on the main thread, and only the chosen car's engine loop is downloaded at boot; the other engines are fetched per race, behind the race loading screen. Nothing is simulated or drawn while a race is still being built.
- **Automatic quality guard.** If frames keep taking longer than ~26 ms, the game steps down one notch at a time (smaller shadow map and lower resolution floor, then no post-processing, then no shadows) and says so once. Choosing a Graphics setting manually resets it.
- **Minimap modes.** Settings → Display → Minimap (also in the pause menu): *Radar* (rotating, zooms with speed) or *Simple* (fixed whole-circuit map with every car plus a lap-progress strip with numbered positions). Both use the same panel size. The radar map's left/right now matches the race camera.
- Removed the unused engine-loop manifest. Everything else from Build 78 is retained.

## Validation

Browser regression samples checked all **17 racing circuits** and **2,040 crew waiting positions**. Every waiting position was on the service surface, with at least 4.94 m of clearance from the nearest collision barrier; no circuit centerline was classified as a wall or pit surface.

In same-frame comparisons of sampled 12-car Medium sessions, rendering calls fell from 818 to 633 at Nile, 602 to 477 at Marina and 727 to 539 at Monza when batching was enabled: approximately **21–26% fewer calls** with the same camera, scene and lighting. Image comparisons also passed after damage, wheel/body modifications, repairs and resizing; the maximum mean channel difference was 0.0013 on a 0–255 scale. All sampled draws had zero GPU errors. Desktop Medium/High, pit service and portrait/landscape touch views were exercised. High's effects chain uses two passes rather than three.

Checks use Chromium with software graphics. Real GPU performance varies with device, browser, grid size and quality. Online matchmaking and remote synchronization were not exercised.

## Driving and strategy

Arcade and Simulation use separate handling profiles. Both retain finite grip, low-speed steering lock, fuel, tyre wear, damage and pit strategy. Simulation includes combined tyre slip, load transfer, four-corner suspension, pressure/temperature behavior and physical setup effects. Driving assists, steering sensitivity, difficulty and AI pace/aggression remain adjustable.

Ride height, rake, camber, toe, wheels and applicable body hardware change the visible car. Springs, dampers, anti-roll bars, aero, brake bias, differential and final drive affect their existing performance models. The garage camera focuses on the selected adjustment. Internal settings are represented through driving behavior rather than an invented exterior animation.

Hard AI retains physical upgrades, its own driving assistance, braking/corner previews, passing and rejoining checks, stationary-obstacle avoidance and single-move defense. Opponents obey the shared car physics; there is no teleportation.

The compact HUD leaves the center open. Delta/pace live in the top-right: green gains time and red loses time against a valid distance-matched lap trace. Click DELTA to change the reference. The + button opens optional detailed telemetry and radar. Invalid or unavailable references are identified instead of showing invented timing.

Race, time trial, drift, career, Grand Prix, endurance, knockout, customization, setup, ghosts, replays, touch and gamepad support remain. Saves and progression stay in the current browser.

## Controls

| Action | Keyboard | Gamepad |
|---|---|---|
| Steering | A/D or Left/Right | Left stick |
| Accelerate | W or Up | RT |
| Brake | S or Down | LT |
| Reverse | Hold brake after stopping, or hold V | Hold LT after stopping, or Y |
| Handbrake | Space | A |
| Nitro (Drift only) | Shift or N | X/RB |
| Next pit tyre compound | B or tyre display | Tyre display |
| Conserve / race / attack | 1 / 2 / 3 or Pace display | Pace display |
| Reset / tow (invalidates lap) | R | — |
| Telemetry (developer mode) | T | — |
| Physics overlay (developer mode) | H | — |
| AI monitor (developer mode) | F8 or Pause → AI monitor; [ ] switch car, N comment | — |
| Photo mode | Pause → Photo mode; drag/arrows orbit, wheel/+/− zoom, Enter captures, Esc returns | — |
| Headlights | L | — |
| Pause | Esc/P or pause button | Pause button |
| Mute | M | — |

Touch controls appear on phones and tablets and can be adjusted in settings. Landscape provides more road visibility.

## Editing

Source modules are in **js/**. The sealed **game.bundle.js** also supports opening the game directly from disk. After editing, rebuild everything (asset packs, bundle, stylesheet) with one command, `bash tools/build.sh`, or:

```sh
npm install
npm run build
```

The optional Supabase rooms/leaderboard integration uses the public URL and anonymous key in **index.html** (`window.GAME_CONFIG`, near the end; it was config.js before Build 96). Serve over HTTP/HTTPS for online play. **supabase.sql** contains the optional leaderboard schema. Keep private service-role keys out of client code.

## Reference and fidelity

The supplied Circuit Superstars images guide the lower camera, warm lighting and compact presentation. Circuit Superstars and Assetto Corsa Competizione are references for the requested handling and race discipline. This remains an independently implemented browser game with authored procedural circuits, automatic gears and simplified physical models, not their proprietary engines, art or a telemetry-calibrated professional simulator. Circuit names indicate layout inspirations rather than surveyed replicas.

## Credits

- Original game: **Tafheet / EGYSeal by Hossam Hegazi**.
- Car models: **1965–2002 Rally Cars** by **supercarmodels**, CC BY 4.0. Existing models support split body/wheels and recoloring. https://sketchfab.com/3d-models/1965-2002-rally-cars-2146acc1e3de409baf46d03a070d0526 — https://sketchfab.com/supercarmodels — https://creativecommons.org/licenses/by/4.0/
- three.js and supabase-js: bundled libraries and existing notices retained.
- Supplied per-car engine pack and Expressive Race Engineer clips: retained with existing attribution. The engine files are the supplied audio and have not been independently certified as recordings of the named vehicles.

