# KARVA | كارڤا — Build 120

Extract the complete ZIP into a folder and open **index.html**. All cars, sound, fonts, graphics libraries and game code are included. Keep the folders together. A local HTTP server is also supported: run `python3 -m http.server 8080` in this folder and open `http://localhost:8080`.

## Build 120

**Qualifying shows the order the grid will use.** In qualifying every car is a ghost, and the HUD position used to be the order on the road, so you could drive through the field, see P1, and then start the race from the place your lap times gave. Now, all through qualifying, the HUD position, the timing order and the qualifying chip ("Lap 2/2 · P3 · 1:03.214") show the real qualifying order: cars with a valid lap by their best valid lap time, then cars still without a time. When the session ends, the results table and the race grid use exactly that order, so you start the race where you qualified. Only valid laps count (a lap with a circuit shortcut or a missed checkpoint does not), as in real qualifying, and there is no "Overtake" in qualifying any more.

**Online: back to the race from the pause menu.** An online race cannot stop for one driver, so the pause menu is now a menu over the running race: Resume (or Esc / the pause button again) closes it and you are straight back in. It used to re-open itself and keep the engine and sounds muted.

**Online between two machines.**
- *Your Supabase keys no longer disappear with updates.* They lived only in index.html, which every update replaces, so after an update the game quietly fell back to "this browser only" rooms, which can never reach another machine. Keys are now also read from **karva-config.js** (next to index.html; updates never include it; copy karva-config.example.js to start), kept on each device once seen, and can be pasted in the game.
- *An "Online server" panel in the Online tab* says which rooms you get ("Internet rooms: server connected", or "This browser only"), tests the connection, and lets you paste the Project URL and anon key. If the server does not answer it shows the reason (for example CHANNEL_ERROR: wrong URL or key, or Realtime public access switched off in the Supabase project).
- *Fewer messages.* Supabase's free plan allows about 100 Realtime messages a second for the whole project, counting each delivery as well as each send. A duel used to send 24 car updates a second each, which already went over it, and Supabase then drops messages and links. Now 12 a second in a duel, fewer with more drivers (8, 6, 4, 3), AI updates 6 a second; the remote cars are interpolated, so they still move smoothly.
- *The start reaches everyone.* The host repeats the race start until every driver has loaded (a lost start message used to leave that driver in the lobby), waits up to 60 s (was 30) for every circuit to load, and never gives the car of a driver who is still loading to the AI for the first 3 minutes (a slow phone used to arrive in a race already taken over: "Your connection dropped: the AI drove your car").
- *One start, one grid.* While the host's circuit was still loading, the lobby thought the room was idle: a driver still marked ready could set off a second countdown, and the host then sent a second start with a different grid in the middle of the first (the two machines ended up in different races). A start that is loading now counts as racing. Quick match also waits 2.5 s (was 1.2) for open rooms to answer over the internet.
- *The room's creator stays host.* The host was the driver with the earliest join time, written by each machine from its own clock; a guest whose clock ran behind became host on joining. A new arrival now always counts as later than everyone already in the room.

All new numbers are original starting values.

## Build 119

**Race music.** The attached track (*Smooth Racing Grooves*) now plays quietly under every race: it fades in at the countdown, sits well under the engines and the tyres, and fades out when the race ends (it never plays in the menus or the attract mode). It follows the **Music** volume. The pause menu now has the four volume sliders (Music, Engine, Effects, Radio), kept in step with Settings. The file was re-encoded from 8.5 MB to 5.5 MB (VBR MP3, about 122 kbps, 48 kHz): same length (5 min 59.5 s), same stereo, no audible change.

**Original names.** No real circuit or car brand is used any more.

| Circuit (was) | Now |
|---|---|
| Monza Park | Lombardia Speed Park |
| Spa Ardennes | Ardenne Forest Ring |
| Silverstone Airfield | Northfield Airfield |
| Laguna Seca Raceway | Sierra Canyon Raceway |
| Brands Hatch GP | Kentwood Bowl |
| Imola Autodromo | Santerno Autodromo |
| Red Bull Ring | Alpine Valley Ring |
| Monaco Streets | Riviera Harbour Streets |
| Interlagos Hills | Paulista Hills |
| Marina Bay Night | Harbour Lights Night |

The Egyptian circuits keep their names (they are places, not brands). Every circuit also has an Arabic name.

| Car (id) | Now |
|---|---|
| Mini | Mino Sprinter S |
| Escort | Fjord Escapade RS18 |
| Fulvia | Lancera Fulvio HF |
| Fiat131 | Fiato 313 Abarto |
| Alpine | Alpen A101 |
| P911 | Porsa 912 SR |
| Stratos | Lancera Stratus HF |
| E30 | Bavaria MX3 E3 |
| R5 | Renaud 5 Turbo |
| Celica | Toyoka Celeste GT-4 |
| Delta | Lancera Delto Integra |
| Impreza | Subara Imprezo 777 |
| Lancer | Mitsubo Lancet Evo |
| EscortCos | Fjord Escapade Cosmo |
| P205 | Poujeau 502 T16 |
| RS200 | Fjord RX200 |
| Quattro | Audo Sport Quadro S1 |
| S4 | Lancera Delto S4 |

The 3D car models themselves are the same CC BY 4.0 pack as before (credited in the menu footer). Their internal ids, and so saves, garages and upgrades, are unchanged.

**Twistier circuits.** Every long straight away from the start/finish straight and the pit lane became a flowing run of bends (esses, kinks and wiggles), each one checked against the rest of the circuit and the monuments so nothing comes too close (tools/twist119.mjs). Share of each lap spent in corners, before -> after: Nile 72 -> 75 %, Lombardia 38 -> 61 %, Ardenne 49 -> 74 %, Northfield 54 -> 71 %, Sierra Canyon 54 -> 65 %, Kentwood 59 -> 65 %, Santerno 38 -> 60 %, Alpine Valley 44 -> 70 %, Riviera 55 -> 64 %, Paulista 61 -> 69 %, Harbour Lights 59 -> 66 %, Giza Sand Ring 63 -> 74 %, Alex Corniche 68 -> 72 %, Cairo Midnight 87 % (already), Luxor 28 -> 60 %, Aswan 74 -> 77 %, Hurghada 73 -> 78 %, Pyramids 35 -> 54 % (the monuments leave less room). All 18 circuits were built and driven by the AI with no car stuck. Because the layouts changed, lap records start again (new record table), the AI's learned lines are reset and the old saved replay is cleared; your cars, credits and progress are kept.

**A simpler menu.** Five tabs instead of nine: Home, Events, Garage, Online, Settings. Set-up is a sub-tab of Garage (Look & parts / Set-up); Trophies and Rivals are sub-tabs of Events. The home screen keeps the next race, the big Race button, three modes (Grand Prix, Time attack, Drift), Replays and one featured card; the login streak, daily challenges and the season live in Events (the Events tab shows a badge when something is ready). On phones the home screen is only the race, the car and the modes.

**Circuits that look like real places.**
- Tarmac: neutral grey (it was brown) with fine stone chips, dark binder and a soft, world-space change of tone, so it never reads as one repeated tile. The rubber laid down by the cars follows the real racing line all the way round, darkest where cars brake and turn.
- Edge lines are worn road paint; the shoulder beyond them is dusty grey (it was a bright orange band); kerbs have chipped blocks, rubber smeared along the road side and dust on the outside.
- Grass: calmer, nearer real turf, with 6 m mown stripes (fainter at night); the repeated orange specks are gone.
- Pit lane concrete: straight tyre scuffs along the lane (the curved strokes read as wood grain).
- Buildings, stands, walls and props: paint calmed a little, with world-space grime, faint rain streaks and darker feet where they meet the ground (not on Low graphics).
- Crowds wear what real crowds wear: mostly neutrals and denim, some team colours.
- Night circuits: less blue, nearer the white light of a floodlit track.
- Long strips (tarmac, kerbs, walls, rails, shoulders) and the ground keep their texture coordinates small, which avoids the blotchy square blocks some graphics chips showed on big surfaces.
Frame cost on a phone-sized screen was measured the same as Build 118 (same draw calls, one more for the rubber line).

All new strengths, colours, widths and counts are original starting values.

## Build 118

- **A dynamic skid.** Every layer of the skid (roar, rubber grind, tyre scream, hum) now changes live with what the car and its tyres are doing (js/skid.js, `update(..., env)`):
  - **Speed:** a slow slide mostly moans and scrubs, quieter and lower. A fast one screams higher and fuller, and its grind runs quicker and its roar brighter.
  - **Tyre wear:** fresh tyres scream crisp and clean. Worn tyres scream less, lower and greasier, waver more, and grind coarser and louder.
  - **Tyre temperature:** cold tyres chirp higher and squeal more. Overheated tyres go smoother, lower and greasier.
  - **Compound:** soft rubber screams fuller and lower, hard rubber thinner and higher.
  - **Car:** each car's voice (weight, grip, power, drivetrain, era) from build 113 still applies on top.
  - **Ground:**
    - **Tarmac:** the full skid.
    - **Kerbs:** a brighter, thinner scream with more grind.
    - **Wet:** no scream (water kills it); the slide becomes a brighter hissing swish.
    - **Grass:** a dull, low rush with no scream.
    - **Sand and gravel (desert circuits):** a gritty crunch with no scream.
    
    The skid now also follows a slide off the track, where it used to go silent.
  - **Measured on one car (Escapade RS18), main scream tone:** slow 594 Hz → fast 701 Hz; worn tyres 598 Hz; cold tyres 676 Hz; hot soft tyres 572 Hz; kerb 704 Hz. Wet, grass and sand have no scream tone.

## Build 117

- **The tyre scream is back in the drift, kept pleasant.** Builds 114–116 had only a muffled hum where the squeal used to be, so a drift had no rubber scream. Now the real recorded squeal comes in on a committed slide, on top of the roar and the rubber grind:
  - **Layers:** the mid band (two copies, so it's smooth and never shows its loop), the low band under it for a gentle slide, and a faint touch of the high band only in a big one.
  - **Tone:** clearly a screaming tyre, but with the glare above 3 kHz pulled down and a 4.2 kHz low-pass. Its main tone sits around 550–680 Hz.
  - **Feel:** it swells in and fades out smoothly.
  - **Per car:** heavier, grippier cars scream lower (e.g. Quadro ~550 Hz, Mino ~680 Hz), and the pitch rises with the slide and the speed.
- **Settings → Audio → Skid sound** now has four styles: Soft roar, Roar and scream (default), Warm hum, and the new Screaming tyres (the most scream). Every style includes the scream.

## Build 116

- **More tyre slide sound.**
  - **Louder:** the skid (roar, hum and rubber grind) plays about 5 dB louder (level 0.06 → 0.11), and the scrub just before a slide comes up too (0.08 → 0.10).
  - **Starts sooner:** it comes in with smaller slides (from about 5° of slip instead of 7.5°) and reaches full strength sooner.
  - **Lingers:** it fades out a little more slowly after the slide, so drifts carry their sound.
  - **Still soft:** the character from builds 114–115 is unchanged.

## Build 115

- **Rubber grind in the skid.** A sliding tyre doesn't slide smoothly: the tread grabs and tears free from the tarmac dozens of times a second. The skid now has that gritty, granular "grrrr" of rubber being ground, low and warm, under the roar and hum. It's made from the game's real rubber-on-asphalt (scuff) and scrub recordings, gated by an irregular train of grains: a short snap and a quick decay, at uneven gaps of about 35–60 per second. The grind:
  - speeds up with the car and the slide;
  - is slower and chunkier on heavy cars;
  - is strongest on front-drive cars and grippy tyres;
  - grows a little in a held drift;
  - stays soft, with only about 4% of its energy above 2 kHz.
  
  All three Skid sound styles include it: Soft roar a little more, Warm hum a little less.

## Build 114

- **A soft skid.** A recorded tyre squeal is sharp by nature, so the skid is no longer built around it (js/skid.js):
  - **Roar:** the main sound is now a soft, deep rubber roar, the "whooosh" of tyres sliding sideways. It's made of slowed, smooth noise and the recorded scrub of rubber, through a low band and two low-passes so nothing sharp gets through.
  - **Hum:** underneath, a gentle, muffled hum from the low squeal recording, as if heard from inside the car.
  - **No chirp:** breaking loose gives a soft low "whoomp" of weight instead of a chirp.
  - **Gentle:** it swells in and fades out slowly, and a held drift grows a little fuller and deeper.
  - **Measured:** the sound's brightness centre is now about 730–840 Hz, with only 2–3% of its energy above 2 kHz.
  - **Each car still has its own voice:** weight sets the depth, tyre grip the fullness, power how much a held drift grows, drivetrain the balance of roar and hum, era the warmth.
  - **Softer elsewhere too:** lock-ups and wheelspin are now muffled low tones, the scrub before a slide is softer, and rival cars' slides use the same muffled low tone, quieter.
- **New: Settings → Audio → Skid sound:** Soft roar / Roar and hum (default) / Warm hum.

## Build 113

- **A calmer skid, and a different one on every car** (js/skid.js).
  - **Calmer:** the squeal now lives in the low and mid recorded bands (the high band only as a faint edge on a very big slide). The glare above 2 kHz is pulled well down, each car has its own warm low-pass, saturation is lighter, the pitch moves in a narrower range, it swells in and fades out more gently, and the chirp is softer. Its brightness centre dropped from about 1.9 kHz to about 0.85–1.05 kHz, and it plays at about 70% of build 112's level.
  - **Each car's own tyre voice, from its real figures:**
    - **Weight:** heavier cars groan lower with more rubber scrub under them; light cars hum higher and lighter.
    - **Tyre grip:** grippier tyres hold a fuller, steadier howl; older, narrower tyres a thinner one that wavers more.
    - **Power:** powerful cars build more in a held drift.
    - **Drivetrain:** rear-drive cars howl and chirp the most, four-wheel-drive cars scrub more and squeal less, and front-drive cars mostly scrub.
    - **Era:** classics are softer and warmer, Group A cleaner, Group B fuller and rougher.
  - **Rivals too:** rival cars' squeal is voiced by their own car the same way, a little quieter and with its glare taken down.

## Build 112

- **A real skid instead of the whistle.** Build 111's "singing tyre" was a synthesised tone and whistled, so it's gone. Your car's skid is now built from the game's own tyre recordings (js/skid.js):
  - **Howl:** the three recorded squeal bands, two copies each slightly apart, so the squeal is thick and never shows its loop. A light slide moans low, a committed drift howls, a big fast slide screams, cross-faded smoothly, with pitch following the slide and the speed. A body boost around 800 Hz, the glare around 3 kHz removed, and gentle saturation make it full instead of piercing.
  - **Tear:** the recorded scrub of rubber dragged sideways sits low under the howl: the weight of the car sliding.
  - **Chirp:** a short sharp yelp when the tyres break loose and when you flick the car from one side to the other mid-slide.
  - **Builds when held:** over about 2.5 seconds of drifting, the howl climbs into the fuller band, the tear deepens and the skid comes up a little, so a long clean drift sounds bigger.
  - **Release:** the skid falls away over a quarter of a second as its pitch dips, like a tyre gripping again.

## Build 111

- **Far fewer leaves.** 6 / 9 / 12 on Low / Medium / High (was 45 / 70 / 90), and none over the middle of the view.
- **A better camera filter.**
  - **Contact shading:** the filter now reads the depth of the scene. Where a pixel sits in a crease (the road right beside a car, the ground at the foot of a barrier, the step of a kerb), it gets a little darker, so cars sit on the track instead of floating on it.
  - **Glow:** a softer, wider glow around lamps and bright highlights (two rings of samples instead of one).
  - **Sharpening:** a tighter limit, so edges sharpen without bright halos.
  - **Same on High:** the composer's picture now carries its depth too, so High gets the same contact shading.
- **A new slide sound for your car** (replaced in build 112). The recorded squeal was replaced by a "singing tyre" voice:
  - **Tone:** a warm tone with a soft fifth and octave, through a gentle band, so it sings instead of shrieking. Its pitch follows the slide (low hum for a small slide, climbing for a big fast one) and glides without steps.
  - **Life:** vibrato that deepens with the slide, a slight random wander, and a little stick-slip chatter as the tyre breaks loose, which smooths out once the drift settles.
  - **Rubber:** a soft breath of rubber hiss underneath.
  - **Reward:** hold a drift and a shimmering upper chord swells in over about two seconds.
  - **Release:** when the slide ends, the tone dips as it fades instead of cutting off.
  - Lock-ups, wheelspin, grass and the scrub before a slide keep their own sounds. Rival cars' squeal is a little quieter (0.07 → 0.04).

## Build 110

- **All the air particles are gone.** Build 109 only removed the wind particles over the circuit. This build also removes the dust motes that drifted through the menu and the desert haze, the dust in the showroom's light beams, the blowing desert dust along the track, and the smoke puffs drifting from the food stalls, vents and chimneys. The only particles left in the air are the camera leaves. (The tiny camera flashes in the grandstands and the cars' own tyre smoke, sparks and exhaust stay.)
- **Leaves around the camera.** The glowing motes of build 109 are now small leaves drifting slowly through the air between the camera and the track. A gentle breeze carries them across the view while they sway, spin and tumble edge-on and back, catching the light as they turn. By day they're mostly green with some yellow, orange and brown; in the desert they're dry tan and brown; at night they're dimmed and cooled. Rain darkens them and thins them out. They thin out toward the middle of the screen so your car stays clear. 45 / 70 / 90 leaves on Low / Medium / High, in one small draw call.
- **New: realistic camera filter** (Settings → Display → Camera filter: Realistic / Off; on by default except on Low). It is inspired by the look of the "Enhancing Photorealism Enhancement" research (Richter, AlHaija and Koltun, 2021). That research uses a trained neural network that can't run in a phone browser at race speed, and this filter does not reproduce it. It's an original, hand-written filter that goes after the same impression in one full-screen pass:
  - **Natural colour:** toy-bright greens become olive and darker, very saturated colours are calmed a little, and light gets a daylight balance (warm highlights, cool shadows; moonlight blue at night).
  - **Local contrast:** edges, tyre marks, tarmac and grass texture come out like a sharp camera image.
  - **Halation:** lamps and sun glints bleed a soft warm glow.
  - **Filmic tone curve (AgX-style):** highlights roll off like a camera sensor, followed by a light contrast curve.
  - **Lens:** slight colour fringing toward the corners, natural lens fall-off, and fine sensor grain.
  - **Cost:** one extra full-screen pass (eleven texture reads per pixel). On High it's built into the existing post-processing pass. If a phone can't keep up, the automatic quality guard turns the filter off together with the post-processing.

## Build 109

- **Magic motes around the camera.** The wind particles that filled the whole circuit (leaves, fluff, dust streaks, sea mist, up to 1,500 sprites) are gone. In their place, a light scatter of tiny glowing motes and soft four-point sparkles drifts in the air between the race camera and the track. They float in slow loops and twinkle, and slide past with a gentle parallax as the camera moves. They gather around the edges of the view and fade out toward the middle, so your car always stays clear. By day they are gold, white, ice blue and violet; at night amber and gold, and brighter; in the desert sand gold; fainter in the rain. The whole effect is one small draw call: 110 / 190 / 260 motes on Low / Medium / High, animated on the graphics card.
- **Fewer tyre particles.** The tyres now make about half the smoke and dust puffs, fewer flung clods and rubber flecks, and a lighter burnout. Rival cars smoke only within 80 m of you (was 126 m), at 30% of your car's rate (was 45%). The particle pools shrank from 4,200 + 1,200 to 1,500 + 700 on Medium, so the game also checks far fewer slots every frame. In a test race on Kentwood Bowl, the number of live particles went from 266 on average (576 at peak) to about 110–130 (about 245 at peak).

## Build 108

**Smoother frame rate, especially on phones.** I profiled a full 8-car race and fixed what was costing frames:
- **No more forced re-layout every frame.** The arrow above your car and the rival name tags read the screen size in the middle of every frame, which made the browser recalculate the whole HUD's layout each frame. The size is now read once per resize. This removed one forced layout per frame and cut the game-logic time per frame by about a quarter (≈10 ms → ≈7 ms for 8 cars on the test machine).
- **No resolution hitch every second.** The automatic resolution scaler could resize the picture once a second when the game ran near its limit, and each resize drops a frame. It now steps down only after 2 seconds of slow frames, steps up only after 6 seconds of easy ones, waits 3 seconds between changes, and stops going back up in a race once a step up had to be undone.
- **Lighter rival cars.** Tyres were more than half of each car's triangles. Wheels now follow the graphics setting (yours: 32 / 24 / 18 segments on High / Medium / Low; rivals: 24 / 18 / 14). Below High, rival tyres leave the shadow to the car body. The 8-car grid went from about 270k to about 235k triangles on Medium. This changes looks only, not physics.
- **Cheaper HUD on phones.** In a race, the pause button no longer blurs the moving picture behind it, and the minimap and gauge icons drop their drop-shadow filters. Each of those had to be recomputed by the phone's GPU every frame.
- **A phone steps quality down a little sooner** when it can't hold about 48 fps.
- **New: FPS counter** (Settings → Display → FPS counter). It shows frames per second, the slowest frame in the last half second, and the graphics level with the render scale. In a race it sits beside the pause button.

## Build 107

**KARVA now fits phones held sideways, checked on the iPhone 16 Pro Max.** Tested at full screen (932 × 430, with the Dynamic Island and home-bar gaps) and in Safari with its toolbars (932 × 370). Also tested on a small iPhone (667 × 375).
- **Safe areas.** Every menu screen, dialog, Pause and the results page now starts inside the safe areas. No button sits under the Dynamic Island, the rounded corners or the home bar. The race HUD already worked this way.
- **Menus.**
  - Smaller top bar: all nine tabs fit beside the level and credits, and on very small phones the tabs scroll.
  - Home keeps Race, the four modes and the tools on screen without scrolling.
  - Long columns (the home side panel, Events, Garage, Tuning, Settings) scroll inside their own panel instead of running off the bottom.
  - The news ticker is hidden on phones to give its space back to the panels.
- **Pause.** One compact card: the options, then Resume, then Photo mode, Restart and Back to menu side by side.
- **Results.** The table is compact, and Race again and Menu stay pinned at the bottom while the rest scrolls. The highlights offer moved to the top-right corner, so it no longer covers the table.
- **Dialogs.** Welcome back, Rivals and qualifying results stay inside the screen and scroll if needed.
- **Rotation.** The 3D view now measures its real size on screen and measures again after a rotation and whenever Safari's toolbars slide in or out. iPhones report a stale size for a moment after turning, which could leave the picture the wrong shape.
- **Portrait.** The "Rotate your phone" card shows the KARVA logo and now covers everything, including the Welcome back window (before, that window could sit on top of it).
- **Full screen on iPhone.** In a Safari tab, the title screen shows how to get the whole screen: tap Share, then Add to Home Screen. Opened from the Home Screen, KARVA runs full screen in landscape.
- **Fix.** A car's live gap on the results table can no longer read "+-".

## Build 106

**The game is now KARVA | كارڤا — Own the Curve. (امتلك المنعطف)**, an arcade motorsport game.
- **Title screen.** The game opens on the KARVA key art. A single tail-light curve draws itself across it, then "Press any key" (on phones, "Tap to start"). That tap is also what starts the sound.
- **Menu backdrop.** Behind the showroom is the key art's dusk coast, without the lettering: the sky, the mountains and the city lights over the sea, on top of the wet road with its light trails and kerb. It always fills the screen, cropped evenly, never stretched. The showroom has no walls any more. The car stands on a glossy asphalt stage that fades into the coast, and the turntable has a red edge, a chrome rim and red running lights. Behind it, two light trails sweep like the logo's swoosh, a tail-light red one and a chrome one, each with a glint running along it.
- **Look.**
  - **Logo:** the chrome KARVA | كارڤا logo sits in the top bar and on the loading screens.
  - **Panels:** wet-asphalt glass with a chrome top edge and one cut corner.
  - **Colour:** red marks what you press and what is active; amber is kept for rewards.
  - **Buttons:** the RACE button is a tail-light blade with a chrome play badge, and secondary buttons are chrome.
  - **Text:** two new typefaces, embedded so the game still works offline: **Chakra Petch** for display text (cut and slanted like the logo's letters) and **Cairo** for everything you read and for all Arabic. Both use the SIL Open Font License.
- **Name everywhere.** The window title, the home-screen app name, start gantries, trackside boards, the blimp, tyre lettering, the podium backdrop, replay wipes, photo and video file names and the AI monitor export all say KARVA now. Your saves, records and online rooms keep working: their internal keys are unchanged.
- **New files.** assets/karva-hero.jpg, assets/karva-bg.jpg and assets/karva-logo.png (the key art, the backdrop and the logo), and manifest.webmanifest.

Also in this build:
- **Online:** AI cars in online races now drive with exactly your assists, like everywhere else.
- **Online rejoin:** reloading during an online race now waits for the next race instead of trying to load one you are not in.
- **Rivals:** rivals make small mistakes under pressure a little more often on Easy and Medium.

## Build 105

A big update: six new features and a round of fixes. Every tuning number introduced here is an original starting value.

### New
**Daily challenges and a login streak.** Every day brings three new challenges, the same for the whole day, generated from the date: finish at a given circuit, slipstream passes, a clean top-five finish, overtakes, Style score, a lap-time target, drift score and more. Progress shows live in the race, with a toast when one is complete. Claim the rewards (credits, XP, season points, parts) from the home column or the Events page; clearing all three adds a bonus crate. The login streak runs on a 7-day calendar with a crate on day 7. One streak freeze keeps your streak through a single missed day, and it recharges each time you reach day 7.

**Named AI rivals with grudges.** The field is a fixed roster of drivers, each with a name in Arabic and English, a nickname, a flag, a helmet colour and a personality: Aggressor, Defender, Gentleman, Veteran, Showman or Rookie. The personality decides how a rival races (attacking, defending, how eagerly it passes, how it makes small mistakes under pressure), never how fast its car is. Every rival remembers you across races: contact you cause, pushing them wide, rough passes and blocking build a grudge; clean racing builds respect. A rival with a grudge races you harder, defends harder against you and lets you know on the radio; the grudge shows on its name tag and in the order list, and it fades with clean races. Your nemesis is introduced before the race. The new Rivals screen shows each rival's grudge, respect and head-to-head record.

**TV-style replays and a highlight reel.** The replay now has a TV director: cameras on towers outside the corners, low kerb cameras at the apexes, pan cameras on the straights, a helicopter, chase, onboard and finish-line cameras. It cuts to battles, overtakes, contacts and the finish, with a position tower, a lower-third caption on each cut, a REPLAY bug, wipes and slow motion. You can pause, change speed, scrub (event markers on the bar), jump between events, change the camera mode and hide the UI. After a race, **Highlights** plays a 30-45 s reel of the best moments with captions ("Last-lap battle: Omar Farouk fights Salma Trabelsi for P2") and a closing title card. **Save video** records it, with sound, as a .webm file.

**Podium ceremony.** When the top three are home, a 10-15 s ceremony plays before the results: the podium with sponsor boards, the three drivers on the steps with their trophies, champagne spray, confetti (fireworks at night), the crowd, and a moving camera. Your own position is shown, and you can skip it.

**Pyramids of Giza circuit (أهرامات الجيزة).** A new track across the Giza plateau, laid out at 0.65 of the real distances. It passes the three pyramids in their true proportions and arrangement: Khufu, Khafre with its remaining smooth casing at the top, and Menkaure with its red granite lower courses. Also there: the queens' pyramids, the Great Sphinx facing east, the causeway, the temples, mastaba fields, dunes, Bedouin camps, a camel caravan and the Cairo skyline in the haze. The Giza Sand Ring now has the pyramids on its horizon too.

**8-driver online races.** Online rooms now take up to eight drivers, and AI cars can fill the empty grid slots.
- **Lobby:** join by room code, invite link or quick match. You see everyone's car and ready state, and chat or send quick messages. The race counts down automatically once everyone is ready.
- **Host controls:** the host picks the track, laps, weather and AI fill/difficulty, and can remove a player.
- **Race:** the host runs race control and the AI cars, and every screen shows the same official classification and times.
- **Disconnects:** a driver who leaves is taken over by the AI. If the host leaves, another player becomes host. Late joiners wait for the next race.

### Fixed and improved
**The AI drives exactly the same car as you.** A full audit of the AI and player cars, now identical:
- **Upgrades:** on Hard, rival cars carried three upgrade tiers more than yours on every part; they now carry exactly your parts.
- **Handling and assists:** stability control, the yaw governor, lift-off grip, rear braking grip, ABS and traction control now follow one rule for every car.
- **Fuel and oil:** AI fuel use had a random "driver style" factor, and its slide on oil lasted 0.4 s; both now work as they do for you.
- **Slipstream and speed ceiling:** one rule and one value for every car.
- **Difficulty** now comes only from how well the AI drives.

**Slipstream.** In another car's wake your drag drops, so your top speed rises by up to 4%, including above the 185 km/h race ceiling. How much depends on how close you are and how well centred in the wake. The same rule applies to the AI, which plans with it. You see streaks of air from the car ahead, speed lines and a slightly wider view, a SLIPSTREAM meter on the HUD, and you hear a rising rush of wind.

**Realistic particles.** Smoke, dust, spray and flames are now soft, textured clouds that turn, grow and fade, lit by the sun and sky, and they fade gently where they meet the ground. Tyre smoke billows and hangs, runoff throws up dust plumes, wet tyres throw droplets, and sparks streak.

**Rally lights are real lights.** Lamp pods and light bars fitted in the garage light the road ahead from where they are mounted, in their own colour. They switch on and off with your headlights, on every car.

**Pit crews ready at the box.** While their car comes down the pit lane, the crew stands at its working spots around where the car will stop:
- the wheel men crouched at their wheels;
- the jacks waiting ahead of the car and beside it, clear of its path;
- the fueller at the filler and the lollipop man in front.

The stop starts the moment the car halts. Between stops they wait in the garage.

**Exit AI test.** The developer AI monitor has an "Exit AI test" button that hands the car back to you mid-race.

**A living environment.** Every circuit now has one wind, with gusts:
- **Plants and flags:** trees, palms, bushes and grass sway in it, and flags, banners and bunting flutter.
- **Air:** fine, soft particles drift through the air: sand on the desert tracks, leaves and pollen on the green ones, mist by the sea.
- **Sky:** clouds drift across the sky and flocks of birds circle.
- **Trees and plants:** trees are full, leafy crowns shaded from the inside out, palms have arching fronds, dead fronds and dates, and desert shrubs are proper tufts.
- **Desert ground and rocks:** the desert ground is rippled sand, and rocks show their strata.

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

**One speed ceiling.** Every car in a race, yours and the AI's, is now limited to 185 km/h (it was 180 km/h for drivers and 185 km/h for the AI). Time trials still have no ceiling. Cars whose own top speed is lower, such as the Mino at 159 km/h, still top out at their own speed. The value is an original starting value in `TUNE.cap`.

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
- **Nile, Quadro, Hard:** 50.5 s → 49.3 s, quicker than the lap it learned from (50.3 s).
- **Paulista Hills, Celeste, Hard:** 55.0 s → 54.7 s.
- **Medium, both circuits:** no change, within ±0.2 s.
- **A lesson 4% faster through the corners:** Hard at Paulista Hills gains about 0.4 s.

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
- **Pit crews at speed.** An idle pit crew is now drawn as its merged static copy unless it is one of the two nearest to your car while you are below ~90 km/h, close enough to see the mechanics fidget. Before, passing the pits meant animating up to twelve full crews every frame. CPU profiling of the race loop at the Lombardia start showed their per-frame posing at about 10% of the frame's script time; working crews always animate.
- **Markers in the car's real colours.** Each car's signature colour is read from what is actually painted on it (the livery texture, and your paint where the livery uses the base colour), weighted by visible area. A car that is mostly white, silver or black gets that colour.
  - **Your marker** uses it and now floats just above your car on screen, at the car's own depth. It follows the car exactly and never covers it.
  - **Rivals' name tags** carry it on the position chip, and are placed around each car's real on-screen outline, never on it.

### Build 100: loading and performance

Measured in headless Chromium with a software GPU (SwiftShader) on a 2-core build machine, Medium graphics, 8-car race, over http. Absolute seconds are far longer than on a real graphics card (every shader is compiled on the CPU) and vary by ±30% from run to run, so the before and after runs were made back to back in the same way; the number of shader programs compiled is exact.

**Where the race loading time went.** Almost all of it was shader programs. A race compiled them three times over, one by one on the main thread:
- `setupExtras` drew the whole scene once with the pit crews' tools shown, and again with rain and headlights on, each time with a blocking compile, *before* the lights, the floodlights and the lamp pool were set up. Every lit material was therefore compiled for a light count the race never uses, and then again for the real one (Lombardia: 152 programs compiled for 111 in use).
- Leaving a race disposed the circuit and the cars, which made three.js free every program. The next race, even on the same circuit, compiled them all again (Lombardia a second time: 208 programs).
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
| Lombardia, first race of the session | 109.5 (152) | 69.5 (89) |
| Harbour Lights (night), second race | 116.2 (122) | 72.0 (81) |
| Kentwood Bowl, third race | 83.1 (104) | 12.2 (7) |
| Lombardia again, fourth race | 93.3 (208) | 17.4 (6) |

The "Loading the engine sounds" step fell from 62–76 s (it also covered the blocking compiles) to under 2 s. Boot (page open → menu) is unchanged at 33–41 s here; its time is the graphics context start-up (about 12 s on this machine) and the menu's shaders, which are now kept for the races.

**Start area.** The resolution fix above is the change that reaches the start line: the race no longer begins by resizing the canvas and lowering the resolution while the lights are on. A frame-by-frame lap profile (`perf100tools/lapframe2.mjs`: update and render time per frame, draw calls, triangles, shadow casters, lights, allocations, for the start area against the rest of the lap) was written, but on this software GPU one lap takes longer than 15 minutes, so no per-frame before/after figures are given here and no other start-area change was made in this build.

**Checked.** Same-seed start-grid screenshots at Lombardia before and after: road, grass, kerbs, stands and scenery are identical. The only pixels that differ are the pit crews' idle animation, which runs on the clock (as in Build 96), and the edges of the idling cars. Lombardia, Harbour Lights and Kentwood Bowl load and reach the lights with no console errors over http, and Kentwood Bowl also from `file://`. The 2.5 s sound wait is an original starting value.

## Build 99

Tuned from the first AI-monitor notes (Nile Park, Hard).
- **"AI slows down in turns it could take without slowing."** The cause: on its racing line a Hard driver still let a safety-net rule (the throttle-angle target, meant for a car off its line or pointing away from it) take up to 10% off its planned corner speed. On the line it now trusts its corner plan (`AI_CS.angleFloorHard` 1). Off the line the safety net works as before.
  - Solo laps at Nile Park: Quadro 50.7 → 49.8 s, Escapade Cosworth unchanged.
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

The gain on solo laps at Paulista Hills: Quadro 53.8 → 52.3 s, Celeste 55.7 → 54.7 s, with no walls or runoff. The same physics applies to everyone; this is only how hard the drivers push. The extras scale with attack squared, so Medium gets about a quarter and Easy none (`AI_CS.hardDriftOk`, `hardDriftMax`, `hardReserve`; original starting values).

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
- **Auto colour.** The game reads the livery and paint under each stripe's actual path and picks the shade that stands out over the largest area. Light and dark are compared by contrast ratio, and a near tie goes to black. A red Mino with a white roof now gets black stripes instead of white ones that vanished on the roof. Any colour from the palette can still be chosen.
- **Testing.** Checked on all 18 cars from the front, rear, side and top, and live in the garage.

**Speed ceilings.** The race ceiling is 180 km/h for drivers and 185 km/h for the AI. Time trials have no ceiling. The ceiling is a limiter, not a target:
- each engine still pulls with its own power curve towards its own top speed (natural, upgraded and damaged);
- a 196 km/h Escapade therefore takes far longer to reach the ceiling than a 244 km/h S4;
- the Mino (159 km/h) and other slower cars never see it.

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
- **Crowd drawn off screen.** Spectators are drawn in 60 m blocks, and a block was drawn whole as soon as any part of it was in view, so at the start grandstand (about 500 people in one or two blocks) most of the people drawn were off screen. Each figure is now checked against the view every frame and only those that can be seen are drawn (same people, same colours, same animation; the instance buffers are only re-sent when the visible set changes). Lombardia, Medium, 8 cars, sampled every 80 m round the lap: **271k → 206k triangles a frame** (start area 308k → 250k), and the start-area screenshots are identical.
- **Night lamps.** Night circuits carried ten real spotlights all race long (four coloured stage lights over the start, two on the start gantry, four floodlight towers), and three.js works out every real light for every lit pixel on screen, wherever the light is. The lamps now share one fixed pool of eight real lights: each frame the lamps that were lit before (stage, gantry, the four towers nearest your car) and whose pool of light or lamp head is within 14 m of the visible ground borrow them, nearest first, so a lamp is lit before it reaches the edge of the screen. The number of lights never changes during a race, so no shader is ever rebuilt. Harbour Lights and Cairo Midnight on Medium: **14 → 12 lights** in every lit shader (10 lamp spotlights → 8). Cairo Midnight never needed more than seven and Harbour Lights eight in the test laps; if more lamps are ever near the view at once, the one farthest from the car (at the edge of the view or just off it) waits for a free light.
- **Draw distance** (Settings → Display, and a button in the pause menu): *Auto*, *Near* (170 m), *Medium* (260 m), *Far* (420 m) or *Max* (no limit), measured around your car. Scenery blocks, spectators and lamps beyond it are not drawn, and the fog fades everything into the sky colour before that distance, so nothing pops; the camera's far plane follows, and the sky and the sun are drawn at the same angles. It applies at once, also in a paused race. *Auto* is *Far* on Low and *Max* on Medium and High, so the default picture is unchanged (the race camera shows about 80 m around the car at the normal zoom); *Near* and *Medium* trim the top of a zoomed-out view, the start showcase and replays.
- Shaders were already compiled behind the loading screen (Build 91); the new fog keeps the theme's haze formula exactly and uses one program for every draw distance.
- Checked: Lombardia, Harbour Lights and Cairo Midnight (night), Kentwood Bowl and Giza Sand Ring (time trial on Low, the desert "stage"; the game has no separate rally stages) race without errors from both `file://` and `http://`; start-area screenshots before and after (Lombardia by day, Harbour Lights at night, same random seed) are identical except for the pit crews' idle animation, which runs on the clock. The shader program count stays the same all round each lap.

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

- **AI no longer swipes across each other onto the racing line.** Every car alongside (from just behind to a little ahead) is now a hard boundary: the target stays at least a car's width plus a margin on our side of where that car will be in 0.35 s, and the line is only rejoined once the car has cleared. When squeezed from both sides, the car holds its lane. In Hard 8-car races (200 s): Santerno 0 contacts (was 2 per race), Kentwood Bowl 3 touches and no first-corner pile-up (was 2–5 including one).
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
  - **Hard flying laps** (Celeste): Kentwood Bowl 58.2 → 51.6 s, Riviera Harbour 64.8 → 60.3 s, Sierra Canyon 57.1 → 51.6 s, Santerno 52.5 → 48.0 s, Paulista Hills 61.5 → 54.7 s, Lombardia 48.4 → 44.6 s, all with 0 wall hits.
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
  - **Fix:** everything is now prepared behind the loading screen, so no shader compiles during a lap. The pit crews, grid marks and pit boxes share materials and draw together, so the start area uses about a third fewer draw calls (Lombardia: 263 → 176 on average).
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
  - Each car has a Performance Rating (PR, 100–999) and a class (D, C, B, A, S), worked out from the same lap figures the set-up screen shows. A stock Mino is about 260 (D), a stock Audi S4 about 645 (A), and a fully built Group A or Group B car reaches S.
  - A tier is bought once and stays in your parts bin, so any tier you own can be refitted for free. **Stock** and **Best** refit the whole car in one tap.
  - Each part card shows what it does, its tiers, the price of the next tier and how much it adds to your PR. The car's lap figures are shown stock against now.

  Measured with the AI driving: a fully built Celeste laps Lombardia in 44.3 s (stock 48.4 s) and Kentwood Bowl in 52.1 s (58.2 s).

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
  - **Event of the week:** one of eight special rule sets, for example Monsoon GP, Reverse grid, Mino Cup, Knockout, Drift king, Pro series, Endurance and Midnight run. Each has bronze, silver and gold rewards and a countdown.
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
  - Test: 96 cars parked at Riviera Harbour's and Kentwood Bowl's hairpins in 8 layouts. Before, 4 never got going; now all of them do.
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

- **Hard AI pace.** The rivals now use far more of the track. The racing line runs out to about a wheel's width from the white line on entry and exit and clips the inside kerb at the apex; it used to stop 2.8 m short of each edge and then use only 90% of what was left. The car's corridor also reaches the kerbs. On Hard, the drift the speed plan accepts mid-corner and the lateral budget both go up; Medium and Easy are unchanged. Measured flying laps for the AI driving a Celeste on Hard, all with 0 wall hits and 0 seconds off track:
  - Lombardia 48.5 s (Build 88: about 53 s)
  - Kentwood Bowl 58.1 s (about 60 s)
  - Riviera Harbour 64.3 s (about 68 s)
  - Paulista Hills 61.0 s

  For scale, the same car at Kentwood Bowl runs 67.5 s on Medium and 82.8 s on Easy.
- **Chicanes and S-bends.** When the line turns one way and then the other within the next 35 m (or 1.4 s of travel), and both turns need at least 7 m/s² at the present speed, the AI sets up a smaller drift (at most 0.32 rad, about 18°) and never skips the brakes mid-corner, because a big slide one way has to be unwound before the next turn. This removes the pendulum that threw cars into the wall at Riviera Harbour's swimming-pool section: Hard 8-car Riviera Harbour races went from 10 wall hits and 15 contacts in 5 minutes to 0–1 wall hits and 0–3 contacts. The final Hard 8-car checks (5 minutes each at Riviera Harbour, Sierra Canyon, Northfield and Paulista Hills) had 0 wall hits and 0 seconds off track on all four. There were 4 car contacts in total, all at Northfield: two on the opening lap and two later.
- **No more weaving.** The AI used to fishtail down the straights, steering from lock to lock. Its preview of the road was shorter than the time the car takes to answer the wheel (the slide's alignment lag plus the heading loop), so it kept chasing its own lag. Two fixes:
  - On open road the lookahead is now at least 1.2 times that response time (up to 42 m). It fades back to the old preview where the line ahead bends tightly, so it never cuts an inside wall.
  - The yaw-rate damping is stronger (0.6 to 1.0).

  Full-lock steering reversals above 90 km/h over 3 laps dropped from 62–89 to 18–30, and lap times improved. Separately, the AI's departure from the racing line for traffic, a pass or the track edge now changes at most 3.2 m/s (5.5 m/s when a car is alongside or the edge is close), while the racing line itself is followed at full rate.
- **The AI learns a bad corner faster.** When the same spot catches cars out again in a race, each new incident there counts for more (up to 2.5x), so the track-sense correction settles in a few laps instead of many.
- **No more standing still.** Two deadlocks are fixed. First, a car stopped beside another car that was behind it, because any overlapping car behind made it give way; now only a faster car coming through alongside does. Second, a boxed-in car slowed towards a standstill; now it tucks in at just under the speed of the slower neighbour. Together these left queues standing at hairpins such as La Source and the Riviera Harbour pool exit.
- **Race-start showcase, redesigned.** It is still 11 s on the wall clock and still skippable, but it is now five long, continuous moves instead of a quick cut per car:
  1. a drone flies in high and descends towards the front row, with the circuit name and a laps · cars line;
  2. a low tracking shot runs down the side of the grid against the direction of travel, so the noses come towards the lens, and the caption follows the car in the middle of the frame;
  3. a low hero arc round the pole-sitter's nose;
  4. the same for your car;
  5. a rise into the race camera.

  Short dips cover the cuts. Every move is still collision-checked at 12–16 points, and the grid run takes the side that keeps the lens furthest from the cars.
- **Player marker follows the light.** On day, desert and coast maps it is a near-black chevron with a thin white rim and a strip of your car's colour. On night maps (Harbour Lights, Cairo Midnight) it is a pearl-white chevron with a dark rim.

All values above are original starting values tuned by measurement in this game's own model; they are not taken from any other game's settings. The approach follows published ideas:
- speed targets from the vehicle's own limits with a backward braking pass ([US patent 7785178](https://patents.justia.com/patent/7785178));
- using the full width of the track and the kerbs ([Track Titan: use the track](https://www.tracktitan.io/study-plans/471c607b-2c8c-4ed3-86b0-08212eebbf78-racing-line-use-the-track); [GPFans: kerb riding](https://www.gpfans.com/en/f1-news/1021751/f1-kerb-riding));
- racing in traffic without contact ([Sony AI, GT Sophy](https://ai.sony/blog/how-to-train-your-race-car)).

## Build 88

- **Results screen.** It now comes up 1.2 s after you take the flag (it used to wait for every car when you had a penalty, up to 45 s), and the table is live: cars still racing show their lap and gap with a pulsing marker and drop into their finishing place as they cross the line. The race clock keeps running after your finish, so their times are real.
- **Fuel** consumption 20% lower than Build 87.
- **Pause button:** the telemetry (+) button is gone; the pause button is a single glass disc with a clean two-bar icon, a soft shadow and a gold glow on hover.
- **Player marker:** a slim chevron in your car's own colour with a white rim, soft shadow and glow, drawn as a high-resolution sprite; it floats well above the roof, breathes gently, and shrinks and fades back once the race is under way so it never covers the car.
- **AI in traffic:** it now goes for a pass whenever the car ahead is slower than it could go itself (not only when it is already faster at that moment), from further back, and through gentler bends; a car alongside only backs off if it is behind and about to touch. Position changes in a 3-minute Lombardia race: 2–5 (was 0).
- **AI in corners:** mid-corner it lifts and lets the drift scrub the speed instead of braking, unless it is far too fast or about to run wide; straight-line braking before the corner is unchanged. Hard 8-car races, 4 minutes: Brands and Laguna 0 wall hits and 0 contacts, Riviera Harbour and Northfield one low-speed wall touch each.
- **AI stuck in the pit lane:** a car that ends up in the lane without meaning to (run wide at the entry, or a stop given up) now knows where it is: it drives the lane at the limit to the exit and merges, instead of steering at the pit wall.
- **Pit lane borders:** a solid concrete garage wall (1.05 m, white coping, red crash-pad band) now runs behind the crews and closes back to the outer barrier at both ends; it is a collision barrier like every other border, so no car can get behind the mechanics.
- **Pit crews:** every mechanic in every crew now has his own clock — gesture timing, sway, step rhythm, the way he looks around — so no two crews (or two men) move in unison; when a car rolls past, the idle crew step back towards the wall and turn to watch it.

## Build 87

- **Hard is hard now.** Measured on solo flying laps, the AI was using far less of the car than the handling allows: its corner speeds were capped by an old tyre-grip estimate (about 1 g) while the arcade model, and a human driving it, can corner much harder. The cap and the planned drift angle now rise with difficulty (Easy unchanged at 1×, Medium about 1.8×, Hard 2.6× the old cap, Hard also plans a slightly larger drift), and Hard rivals race with at least 70% aggression. Flying laps, Celeste: Lombardia Hard 59.3 → 53.0 s (Medium now 59 s, Easy 70 s), Kentwood Bowl Hard 67.3 → 60.3 s, Riviera Harbour 75 → 68–69 s. 8-car Hard fields: best laps 7–14% faster on Brands, Laguna, Riviera Harbour, Northfield, Spa and Hurghada, the field within 3–6% of the leader; no wall hits or spins on track, one start-line touch at Brands, a few >40° slides at Laguna (14 in 5 minutes) and Brands (3); everything else clean.
- **Fuel** consumption +50% again (×1.5).
- **Engine sound, calmer:** a softer top end (the engine's filter now tops out near 5 kHz instead of 9), much less saturation (a round note instead of a rasp), no harsh presence lift, less loudness swing with the throttle, slower and smoother pitch and level changes, quieter induction, a quieter rev limiter, and exhaust pops and bangs 40% quieter with a softer attack.
- **Tyre sound, realistic:** a new seamless "scuff" loop — abrasive, sandpaper-like texture made of tiny tread-block bursts — starts as a faint whisper as the car approaches the grip limit and grows into a rough scrub as the slip angle rises; the tonal squeal only joins in a real slide and swells and rises in pitch with the slip; locking or spinning a wheel feeds the same layers. All of it is smoothed, kept under the engine and fades as the car slows.
- **Pause buttons:** the round **+** (telemetry) and **Ⅱ** (pause) buttons sit side by side with a clear gap on desktop and touch screens (they could overlap).

## Build 86

- **Realistic, much faster pit stops.** The crew works in parallel, as a real one does: four wheels in 3 s (+0.6 s per damaged corner), fuel at the rig's flow rate (a full tank in 9 s, so a splash is quicker), bodywork up to 6 s, engine up to 8 s, gearbox up to 7 s, plus 0.8 s on the jack. The stop lasts as long as the longest job. Before, the jobs ran one after another and a fuel-and-tyres stop took 35–45 s; a typical stop is now 4–10 s (measured on AI stops at Lombardia: about 9 s for an almost empty tank and new tyres). The pit gauges fill together and the board shows the jobs still running.
- **The race-start showcase lasts 11 s** by the wall clock, even on a slow machine: a 2.4 s opening, the grid shared out over 7 s (a short shot plays the middle of its camera move at normal speed instead of rushing it), and 1.6 s into the race camera. The intro music fades out between 7 and 10 s, as before.

## Build 85 — the AI, rebuilt for clean, winning racing

Measured first, on the game's own physics (Chromium, software GPU, 8-car fields of rivals, Hard): on track the field was already mostly clean, but it slid a lot (13–27 slides past 40° per race on Laguna, Brands and Riviera Harbour, where Riviera Harbour also had wall hits), drove off the racing line for up to 10 s behind cars 40–90 m ahead, could not overtake (no slipstream in the current ruleset), and **the pit lane was where most of the crashing happened**: 7–11 wall hits and 8–14 car-to-car contacts per 5½-minute race, from cars steering the pit approach with a crude controller at racing speed, parking across the fast lane and leaving their box into the car in the next one. What changed:

- **Track sense — the AI learns the circuit from its own driving** (`js/ailearn.js`). Every rival watches itself all the time and the whole field shares what it learns, per 8 m of track: a slide well past the angle it planned, running wide past its corridor, a wheel on the grass or a touch of a wall makes that stretch — above all the braking zone and turn-in before it — a little slower in the plan (by how bad it was); a clean pass at the limit gives a very small step back. Corrections are quick, giving speed back is slow, like a driver building a lap. What it learns is saved per circuit and per handling set, so every race starts from what the previous ones taught it (and a change to the handling starts a fresh lesson).
- **Controlled drift line.** The AI sets up at most ~26° of slide on purpose (was ~31°) and plans corners for it, so it drifts through the corner on a smooth, repeatable line instead of hanging the tail out everywhere.
- **Edge guard.** It looks 0.6 s ahead (sideways speed included); if the car would leave its corridor it aims back in and gives up a little speed now, instead of finding the grass or the wall at the exit.
- **Racecraft.** It only goes for a pass when it is close and actually faster (or in the slipstream), the passing lane follows the rival instead of a spot chosen seconds ago, it drops the attempt if the gap opens, and otherwise stays on the racing line. The slipstream now works in every race, so equal cars can pass on the straights.
- **Pit stops.** On the track the racing driver keeps the wheel and just moves over to the pit side for the entry; the pit-lane driver takes over only in the lane. A car leaving its box crosses to the fast lane slowly before it accelerates, and cars in the lane give room to a car swinging into or out of its box.
- **The player's lesson is now a hint** (at most +5% where you were faster); the AI's own track sense has the last word.
- **Measured after:** 8-car races of 3–5½ minutes (with pit stops) on Kentwood Bowl, Sierra Canyon, Riviera Harbour, Spa, Northfield, Marina and Hurghada: **0 wall hits, 0 car contacts, 0 seconds off track, 0 slides past 40°, 0 spins** — on the track and in the pit lane — with tyre wear, fuel and stops running as normal. Position changes in a 200 s Lombardia race: 8 (was 0–3).
- **Opening lap:** more room to the car ahead for the first 30 s, and a side guard that keeps ~1 m of air to a car alongside (the car level or behind concedes). Opening 60–75 s of 8-car races on 10 circuits: no contact on six, one touch on three (Alpine Valley Ring, Corniche, Nile), and Riviera Harbour had three in one run and none in a repeat.
- *Not tested:* a human driver in the field (the tests run all-AI fields); how it feels to race them.

## Build 84

- **Your new numbers are the defaults:** turn rate 115°/s, yaw responsiveness 0.79, turn rate holds to 42.5 m/s with fall-off 74, alignment fall-off at speed 88, speed kept through a slide 0.55, slide scrub 0.015, settle 0.38 s, kerb kick 0.26; rubbered-in line amount 1.6, smoothness 3.05, spread 3.15, track darkness 0.14, band width 3 m, band darkness 0.08. All AI values as sent. Old slider settings saved in a browser are cleared once.
- **One ruleset.** The Simulation/Arcade (Professional/Arcade) choice and its preset button are gone from the menu; every race uses the circuit rules.
- **Why the AI slowed down as the race went on, and the fix.** Long-race telemetry (Lombardia, 6 cars, 7 minutes) showed two causes. (1) The AI planned its corners with the old four-tyre model's grip, which fell with tyre wear, tyre temperature and contact-patch terms far more than the arcade handling it actually drives with (its lateral budget dropped 16% while the car itself had lost almost nothing), so it braked earlier and earlier every lap. (2) Below 35% tyre life it switched to the *Save* pace, which cuts engine power by 12%. Now the handling itself has a realistic tyre model (below) and the AI plans with exactly the same factor; worn tyres are nursed at race pace and only a real fuel shortage makes a driver lift and coast; a driver racing to win runs *Push*. Measured: lap times stay flat as the tyres wear (60.6 → 60.8 → 60.9 s with tyres going from 95% to 50%), where they used to drift away until the stop.
- **Tyre wear, realistic.** Tyres last 60% longer (every wear rate ÷ 1.6). Grip fades gently over most of the tyre's life (about 4% down at half worn, 7% at 80% worn) and then falls off a cliff in the last 30% (32% down on a bald tyre); cold or overheated tyres lose a little more. In the handling: the nose bites less (lower turn rate), the car slides longer before it hooks up, it spins up more out of slow corners, and it brakes less hard — the same for the player and the AI.
- **Fuel** consumption is 150% higher (×2.5).
- **Dry by default.** Quick races start on *Dry*, Grand Prix rounds and daily challenges are dry, and online races no longer roll a 30% chance of rain. (You can still pick *Changeable* or *Rain*; the story events that are written around a storm keep their rain.)
- **Race-intro music** plays at full volume to 7 s and fades out completely by 10 s (it still stops at once on a skip).
- **Tyre squeal.** The squeal recordings were being cut at 1.5–2.6 kHz, which made them dull; they now play up to 6–8.5 kHz with a clean low cut and a presence lift, a little louder, and the loops were re-cut to be seamless (they clicked every 3 s).
- **Pit lane.** The entry and exit are now one constant-width road: the lane leaves the track at a shallow angle at its full 12 m width (its first metres lie on the track itself, so it emerges from the track edge like a real junction) and swings out to the pit wall; there is no wedge-shaped funnel any more. The pit-side Armco always runs outside the lane and its service apron (it used to cut diagonally across the lane through the taper), stays clear of the track's own barrier line, and eases back to it over 40 m beyond each end with no kinks; scenery keeps clear of that widened run-off.

## Build 83b (fixes)

- **AI cars stopping and vanishing.** Rivals could not steer through the pit lane with the new handling: the pit-lane driver still asked for a wheel angle, while the stick now commands a rate of turn. Cars heading for the pits slowed, stalled at the entry, gave up after 4 s and stopped on the track (where others ran into them) and, when the fuel finally ran dry, were towed to the pits — the "disappearing" car. The pit driver now steers through the same yaw-rate model (measured: 5 of 5 cars forced to pit all complete the stop and rejoin; before, most gave up). Parking stays in the fast lane until 15 m before the box and arrives slower, and leaving the box no longer swings into the lane wall.
- **Safety net.** If any car's physics state ever becomes invalid it is put straight back on the road (and logged), instead of vanishing and taking a car that touches it with it; the AI also never passes an invalid input to the physics.
- **AI control.** Calmer drift angles (the AI sets up at most ~31° of slide on purpose, down from ~51°), so it looks in control while losing little time. 8-car all-AI races of 4+ minutes on Lombardia, Spa and Northfield: 0–2 spins, no stopped cars on the track.
- **Showcase camera.** Slower, near-constant-speed moves with a damped follow inside each shot (no corners, no jitter), lighter handheld drift, gentler orbits, crane rises and tracking moves, and slightly longer shots.
- **Car models.** The race-time body simplification is removed (it could leave gaps and faceted panels): every car shows its full bodywork again. Race wheels keep the full rounded tyre profile and more segments, so tyres are round.
- **Smoke and tyre trails.** Tyre smoke is a thin, short trail close to the tyre (shorter life, smaller, carried less by the car), and the live tyre marks are narrower and fade in 1.6 s.

## Build 83

- **Your handling numbers are the defaults.** The values tuned in the slider panel are baked into `HANDLING_DEFAULTS` (`js/handling.js`), the rubber-line settings into `RUBBER` (`js/main.js`), the AI values into `AI_CS` (`js/ai.js`) and `TUNE.cs.aiReserve` = 0.995. The per-car character table is emptied so every car drives with exactly this feel. The preset list starts with *Tafheet tuned* (exactly these numbers); the other presets are now small changes on top of it. Old slider settings saved in a browser are cleared once so everyone starts from the new defaults.
- **Handling menu hidden.** The tuning sliders are no longer in the pause menu. Press the small **⋯** button in the pause menu, type the developer password **`egyseal`** and press OK: the *Tuning sliders* button appears for that session. (Change it in `DEV_PASS`, `js/main.js`.)
- **Race-start showcase.** Before the countdown a cinematic introduces the grid: an opening crane over the field, then one shot per car from pole to the back of the grid with your car last (dolly-ins, orbits, crane moves, tracking and overhead shots with slow handheld drift and lens breathing), a lower-third caption in each team's colour, and a drone rise that lands exactly on the race camera. Every camera path is checked before it is used (never inside a wall, a car or the ground; clear line of sight to the car); a shot that fails falls back to a safe crane. **Skip** with any key or a click/tap anywhere on the screen (a quick dip to black, straight into the countdown). It plays its own music (*Silent Lap*, `assets/audio/showcase_silent_lap.mp3`, at the Music volume): the music stops when the track ends, when you skip, or when the showcase hands over to the race.
- **Performance.** Race-detail models: race rims use a lighter geometry (spokes without bevels, no wheel nuts), spectators and pit crews use far lighter shapes, distant spectators switch to six-box figures sooner. Static track objects stop recomputing their matrices after the start. Medium, Lombardia, 10 cars: ~791k → ~455k triangles a frame; simulation CPU 4.6 → 3.2 ms a frame. Dynamic resolution reacts sooner, anti-aliasing is off on Low, the pixel ratio is capped on High, and the quality guard steps in earlier. The game now always runs the minified single-file build (`game.bundle.js`), also from a web server — one download instead of ~40 modules (add `?dev` to the address to run the source modules).
- **Engine sound.** The lag/freeze at some points of a lap came from thousands of redundant audio-parameter automation events piling up each second; they are now de-duplicated, rival cars keep stable voice slots (no more voices being torn down and rebuilt as cars pass), and panning uses a cheap equal-power panner. Tyre slip and engine load feeding the sound are smoothed, so engine and tyre notes glide instead of stepping.
- **Kerbs.** Louder and crisper: a 2.6 kHz presence lift and a low shelf on the rumble loop, a quicker attack, and a click-and-thump strike when a wheel hits the kerb.
- **Tyre smoke and dust.** Particles fade in and out smoothly (no popping), smoke intensity follows the slide gradually, tyre marks fade over 3 s.
- **Look.** A warm, vibrant cinematic grade: golden highlights, a faint cool lift in the shadows, extra vibrance on muted colours, a soft S-curve, a gentle vignette, and a touch of field-of-view widening with speed.
- **Smarter AI that races to win.**
  - *Drift-aware driving.* The AI now steers through the handling model itself: to make its path turn at the rate the line needs, it points the nose ahead of its direction of travel by the drift angle your tuned catch-up time needs (atan of turn rate × catch-up time) and asks for the yaw rate that holds it. It sets up the drift instead of reacting to it, so it is smoother and much faster with your slow-yaw, long-drift numbers. Its corner speeds are planned from the same model (the turn rate that keeps the drift at a racing angle), it does not brake hard while sliding (in this model braking in a slide turns the car sideways), and its steering output is low-pass filtered.
  - *Racing to win.* Each driver knows its position. Anyone not leading pushes: a little more corner speed, closer following for the slipstream, quicker to try a pass and nitro to complete it; the leader pushes when someone is within ~45 m behind, and everybody pushes on the last lap.
  - *Measured* (Chromium, software GPU, 6-car grid from pole, first lap from a standing start): Lombardia/Mino 84 → 75–76 s, Northfield/911 no lap within 95 s → 85–88 s, Luxor/Celeste 48 → 47–49 s (the spread is first-lap traffic); first-corner traffic at Spa no longer spins cars (max slide 54° against 88° before); 8-car fields on all 17 circuits: nothing off, nothing stuck.
- **The AI learns from you** (`js/learn.js`). While you race, every frame of your driving is recorded per 5 m of track: your speed compared with what the AI's own physical plan says *your* car can do there (so the lesson works whatever car you drove), your line, how closely you follow, the places you gain and your contacts. Each clean, valid lap is folded into a profile saved per circuit (the newest lap counts for almost half). In later races on that circuit the rivals carry more speed where you proved a corner goes faster (up to +12%), lean towards your line there, and race with your level of aggression — Easy rivals take half of it, Medium three quarters, Hard all of it. The physics stay identical: they can only copy what their car can physically do.
- **Clean-up.** Removed the retired dirt-arena menu scene (never started any more), fourteen unused building templates, and a handful of unused helpers and constants.

## Earlier (Builds 79–82)

- **Performance.** Draw distance now follows the screen: the ground footprint of the camera view is measured every frame and only scenery inside it (plus a 30 m margin) is drawn or shadowed, so nothing off-screen costs GPU time and nothing can appear late. Barriers are built in ~100 m lengths instead of one ring. Physics is capped at six sub-steps a frame so a slow frame can no longer snowball. Dynamic resolution runs on every tier (not only Auto), the desktop pixel-ratio cap is 1.25, and Auto reads the graphics card: integrated and mobile chips start on Medium. Draw calls in the sampled Lombardia frame fell from 262 to 156 and shaded triangles from ~1.0 M to ~0.26 M.
- **Camera.** Every camera quantity (aim, zoom, framing) is a critically damped spring with its own velocity. The aim leads into the car's direction of travel and the road ahead; the hard edge-of-frame pin is replaced by a sprung framing offset. No stepping, no jerks at any frame rate.
- **HUD (revision 4).** The three gauges sit on their own translucent discs with no panel behind them, 15% larger, with a small speed/gear line above; the camera is steeper (about 64° down) and framed closer, with the car low in the picture and the view leading into the direction of travel, as in the reference.
- **Pit stops (revision 4).** The service readout floats above the car as three gauges whose arcs fill as the crew works. Every crew close enough to be seen is fully animated: waiting mechanics shift their weight, put a hand on a hip, fold their arms, scratch a helmet, turn to talk to a neighbour and take the odd step.
- **Crowd (revision 4).** Chunkier, larger toy-scale spectators that match the cars, bright kit colours, and about a third more of them.
- **HUD.** A larger instrument cluster (condition, fuel, tyres with compound) with a live speed and gear readout, on a glass panel. The minimap is centred on you, turns with the car, zooms with speed (tight at low speed, wide at full speed), shows the road, kerbs, pit lane and start line, every car as an arrow, and a whole-circuit inset with the field's positions.
- **Pit entry.** The lane is full width almost from the moment it leaves the track, like a real pit entry: a wide funnel beside the circuit behind the painted entry line, peeling away over a longer taper; the track-side edge never crosses onto the circuit. Minimum lane lengths are longer.
- **Handling replaced: ROTATION-FIRST ARCADE DRIFT (Build 82, `js/handling.js`).** One authoritative controller for every car on a circuit, player and AI. The car has two independent directions — the heading (where the nose points) and the velocity (where it travels). Steering commands the heading's rate of turn directly (300°/s at full input at medium speed, a quarter of that at rest, easing off above 22 m/s; the rate is reached with a 40 ms time constant and decays with a 90 ms one on release). The velocity keeps its old direction and is pulled onto the heading by a progressive lateral grip — an exponential alignment with a 180 ms time constant (longer off the throttle, under braking, on grass and in rain; shorter at speed and once the stick is centred; doubled beyond 80° so a spun car grips again). The redirected speed is kept (a turn never creates speed; a long slide bleeds it slowly). ROTATE → SLIDE → GRIP → GO. The old four-wheel force model, its turn-rate governor and drift controller are gone, not layered under. Engine, brakes, aero drag, fuel, wear, damage, collisions, tyre marks, smoke, cameras, UI and race logic are unchanged and all read the same vehicle state.
  - *Presets* (`HANDLING_PRESETS`, chosen in Pause → Tuning sliders → Preset, saved): Arcade balanced, Drift king, Grip racer, Rally loose, Precision, Heavy muscle, Kart. The per-drivetrain and per-car tables (`HANDLING` in `config.js`: yaw responsiveness, drift duration, lift-off slide, pick-up) apply on top of the preset; the sliders on top of both.
  - *Mandatory tests (Chromium, software GPU, scripted keys, Celeste, Arcade balanced):* **T1** sudden left at 100 km/h: heading 25° / travel 6° at 0.2 s, 49°/16° at 0.3 s, 76°/27° at 0.4 s — the nose leads, the travel catches up. **T2** holding left 1.5 s at 60 km/h: 411° of rotation, still 49 km/h. **T3** release after a 0.5 s turn: rotation dies in 0.2 s (the heading settles 25° past the release point), the drift goes from 64° to 1° in 0.6 s and the car travels along the heading it reached. **T4** left then right at 90 km/h: the rotation reverses in 0.13 s, no pendulum. **T5** 0.8 s left at 150 km/h on throttle: 30° slide, exits at 154 km/h. **T6** hairpin at 50 km/h: 170° of heading in 0.68 s while the travel still lags 150° behind, then grips and exits at 59 km/h with 0° drift. **T7** 170 km/h, no input, 3 s: 0.0° wander. **T8** the same script at 30/60/120 fps: heading within 0.1°, position within 0.3 m. **T9** AI on the same model with drift management: Luxor 44 s (old physical model 46), Lombardia/Mino 70 s (74), Northfield/911 80 s (82), a scripted human 55.9 s; all 17 circuits with 8-car fields: no errors, nothing off, nothing stuck. Stop, reverse (gentle, 30% turn rate) and pull-away clean.
  - *Not tested:* real hands on a keyboard, pad or touch screen — the feel itself.
- **Handling: a four-wheel force model for every car (Build 81, `js/handling.js`).** Player and AI cars on a circuit run the same vehicle physics: a planar rigid body with its position, world velocity, heading and yaw rate as independent states, four wheel contact points with their own wheel angular velocities, stepped at the fixed 120 Hz rate (accumulator, catch-up capped at six sub-steps, render interpolation, no per-car allocation in the loop). The structure is a JavaScript translation of the wheel-force architecture described in the analysis of Circuit Superstars' managed assembly that was supplied with the request. Nothing snaps the velocity to the heading and nothing delays the position: the body rotates first because the steering is a force couple, and the trajectory follows because the tyres' lateral friction then redirects the momentum.
  - *Build 81 revision 4 — read against the reference assemblies:* the user supplied the reference game's managed assemblies; the logic (not the code) of its vehicle controller and AI was read from the IL and this implementation was corrected to it where it differed: the wheel's rolling target follows the ground speed (the full ground speed when the wheel travels sideways); the ground couples the wheel to it with at most the remaining forward grip, the residual drive/brake torque and a damping term add on top, a braking wheel stops at zero when moving forward, and the spin is bounded — so wheel spin needs far more drive than grip, as in the reference; the player's steer input is the raw axis in the reference (any ramp lives in its input assets), and an optional screen-space mode steers towards where the stick points (sign·√|sin(angle)|) — our speed fade stays as a labelled adaptation because the reference's steering strength per car is not in the assemblies. The AI control layer was rebuilt in the reference's structure (see `AI_CS` in `js/ai.js`): steering is a PD on a target angle that blends the direction to the lookahead point with the line's tangent there, measured against both the car's heading and its direction of travel (blended by speed) and corrected by how sideways the car is; the target speed falls with the angle to a farther lookahead (|sin|^sensitivity between top speed and a low speed) and is scaled by difficulty; the throttle is a PD on the speed error (negative = brake); overtake and side radars shift the target sideways; a car facing away from its target backs up with opposite lock until the error is small; lower difficulties add slow noise to steering and throttle, fading in after the start. Our racing line, lanes, passing and defending, the curvature speed plan (kept as a ceiling so braking points stay physical), stuck recovery and pit logic remain. Not adopted: the reference's per-car force multiplier for AI cars (every car here keeps the same physics), its raycast suspension and 3D rigidbody.
  - *Build 81 revision 5 — controllable drift, rubbered-in line, smarter AI:* the tyres are softer (`sideFriction` 6.5) with a much stiffer rear (`balanceGainR`) and a softer front, so steering rotates the body ahead of its path into a real, proportional drift (about 6–8° of body slip at full lock, 16° on the throttle with traction control off) that cannot become a spin: a slide cap (`maxSlip` ≈ 24°, `slipDamp`) damps rotation past it, an auto counter-steer (`autoCounter`) feeds the slide back into the couple as the stick returns to centre so the car straightens on its own in about 0.3 s, and a scrub-recovery term (`scrubRecover`) gives back most of the speed a drift would cost (full lock on throttle at 100 km/h now gains speed; a 0.5 s tap at 170 km/h loses nothing). The throttle/side-grip coupling is weaker (`fsInfluence` 1.0) so turning no longer chokes acceleration. Grass keeps more steering and side grip (`SURFACES`) so an excursion stays controllable, but slows the car hard. Reversing is steered kinematically with a lower speed limit (the slip-angle model is trailer-unstable backwards). A rubbered-in racing line is laid on every corner (`addRubberLine`, `js/main.js`): a soft dark band and two tyre tracks along the best line, tapering out onto the straights, so the grip the field leaves behind shows the line through the turns. The AI's steering gains and the angle-to-speed sensitivity were tuned on the new tyres (`AI_CS`) and its corner-speed margin raised (`aiReserve` .96): it laps Luxor in 49 s against a scripted human's 55 s, Lombardia/Mino 76 s, Northfield/911 88 s, no off-track, and 8-car fields on all 17 circuits run clean.
  - *Build 81 revision 6 — turn-rate governor and tuning sliders:* the car's rate of turn at full steering is now a stated design parameter (`turnRateOn` 30°/s with the throttle down, `turnRateOff` 50°/s lifted, easing off with speed via `turnRateV0`/`turnRateRef`; below ~36 km/h the throttle no longer reduces it so a hairpin can be powered out of). The couple is scaled against the car's own measured full-input yaw at the current speed, so the numbers hold for every car (measured: 28/54°/s at 40 km/h, 25/45 at 80, 20/29 at 140). The AI plans on the lifted rate and lifts the throttle where a corner asks for more than the throttle-on rate; its lap times are a little longer than before on the tight circuits because the throttle-on rate is deliberately low (Luxor 51 s, Lombardia/Mino 80 s). **Temporary:** Pause → *Tuning sliders* opens every handling and AI parameter as a numbered slider (56 of them) with a plain-language title, what it does and what lower/higher feels like; moves apply live to all cars and are saved with the game (they come back after closing and reopening; *Reset all* clears them). *Copy numbers* produces the changed and full sets as text to send back so the chosen values can be baked in and the panel removed.
  - *Build 81 revision 8 — drift controller, fading tyre marks, rubber-line sliders:* a drift controller (`driftAngle`, `driftFollow`, `driftGrip`, `driftMinSpeed`, `driftSpeedRef`, `driftRateK`) lets the steering input set the drift angle directly: the yaw rate is eased onto the rate that holds the asked angle and back to zero when the stick is centred, so a slide builds, holds and unwinds smoothly and cannot overshoot into oversteer; it may exceed the turn-rate setting only by `driftRateK` while the drift builds. Softer tyres (`sideFriction` 3.8) so a 10° drift pulls about 1 g and fits the 30/50°/s turn rates (measured: 8–9° drift at full lock on throttle, 12–13° lifted, still accelerating through the corner, no spin). The live tyre marks the cars lay now fade out over 3 s (shader age attribute in `Skids`); the rubbered-in racing line drawn on the corners stays and has its own sliders (amount of the lap marked, end smoothness, number of tyre tracks, their width, spread and darkness, soft band width and darkness) that rebuild the line live. 69 sliders in all, saved with the game.
  - *Recovered algorithms (structure from the report):* steering distributed as +u·S/N to the front wheels and −u·S/N to the rear wheels, each turned into a sideways force by the wheel load × clamp(wheel angular velocity × radius / steerVelocitySmoothing, −1, 1) × surface modifier; contact velocity = body velocity + yaw × wheel offset; slip angle = atan(vSide / max(|vForward|, 1)); lateral force = lerp(static branch −vSide·L, slip-angle branch −slip·C·(1+balanceGain)·(1+gain·|vForward|)·L·surface, t) with t = clamp01(groundSpeed·falloff − offset); low-speed forward static friction with its blend on wheel spin + ground speed; the forward/sideways coupling (forward capacity A = L·μ shrunk by the sideways force, forward force clamped to A, the residual reducing the sideways force and spinning the wheel); braking scaled by the velocity direction and the wheel's spin; wheel inertia 0.5·wheelMass·r²; rolling resistance −vForward·rr·L/k; local/shared wheel-load blending; a torqueScale separate from the translational force; the steering force kept in its own accumulator, not clamped by the coupling; no handbrake (the inspected controller writes zero to it).
  - *Adaptations (marked `[adapt]` in the code):* no raycast suspension — the local wheel load is the game's existing four-corner load model (static split, fore/aft and lateral transfer) scaled so the four loads always sum to the car's weight, blended with the car's average (sharedWheelLoadStrength), and "L/springStiffness" is L / (static load / springCompression); the brake's sign comes from the wheel's spin direction so braking also works in reverse, its magnitude from |velocityDot|; the per-wheel grip the game already tracks (compound, temperature, pressure, camber, damaged wheel, mud, oil, rain) scales the forward coefficient, while the surface descriptor table (`SURFACES`: grass, kerb, road, wall, pit — side grip, speed gain, steering grip, balance, forward grip, coupling, rolling, degradation) and the wear interpolation (`WEAR`, each modifier lerped to 1 by tyre health) follow the recovered structure; a driven wheel's spin is bounded (`spinBound`) and a locking wheel stops at zero; forward static friction is released while a pedal is pressed; an input-layer fade of the steering input with speed (`steerFadeV0`/`steerFadeRef`, off = 0) because a force couple turns harder the faster the car goes; a small optional yaw damping; a parking aid below 4 m/s (the couple needs rolling wheels); an optional lateral cap (off by default). The engine, gearbox, forward aero drag, fuel, tyre temperature, damage and collisions stay in `car.js`; the model's mean slip × surface degradation feeds the game's tyre wear.
  - *Not recovered:* the vehicle prefab settings, torque curves, surface tables, masses and inertias. **Every number in `HANDLING_DEFAULTS` and the per-car table is an original starting value for this game, not a value extracted from Circuit Superstars**, and the result does not claim exact equivalence with that game's handling.
  - *Old routines replaced:* the physical four-tyre lateral integration for circuit cars (it still runs for tyre wear and temperatures only); the Build 80 dynamic bicycle model; the Build 79 heading-first driver layer (yaw governor, slide aid that bled off lateral velocity, digital-steer blend, speed scrub on turning) and the heading-first `TUNE.cs` model (only `aiReserve` remains); the AI's separate grip model and its wheel-angle steering — the AI now measures the model's own cornering limit per speed (`measureLatLimits`, run once per car at race start) to plan corner speeds and steers with a yaw-rate controller on the shared physics (no extra grip, no path following). Drift mode and the menu showcase keep the physical model.
  - *Tuning controls* (`HANDLING_DEFAULTS` in `js/handling.js`, every value commented; per-drivetrain and per-car overrides in `HANDLING.byDrive` / `HANDLING.byCar` in `js/config.js`): `steerStrength` (how hard the couple turns the car; 9 ≈ 1.1 g at 40 km/h), `rearSteerShare`, `steerVelSmoothing` (how quickly steering comes in with wheel speed), `steerFadeV0`/`steerFadeRef` (steering authority at speed), `sideFriction` (cornering stiffness: lower = more slip for the same force), `balanceGainR` (rear stiffness over front: higher = more stable and less high-speed cornering), `sideFrictionGain` (stiffness growth with speed), `forwardFriction`/`fsInfluence`/`residInfluence` (how throttle and brakes eat into side grip and how a spinning or locking wheel loses it: the slides), `tcMargin`/`absMargin`, `sharedLoad`, `wheelMass`/`angularDrag` (wheel spin-up), `inertiaK`/`torqueScale` (yaw response), `yawDamp`, `lowSpeedAid`, `grassSide`/`grassFwd`/`grassSteer`, `kerbKick`/`kerbScrub`. AI corner-speed margin: `TUNE.cs.aiReserve`.
  - *Physics overlay:* press **H** in a race (or Settings → Developer → Physics overlay): heading (red) and velocity (cyan) arrows, steering input and displayed wheel angle, front/rear slip angles, body slip, yaw rate and yaw moment, sideways/forward force totals and lateral g, the four wheel loads, the four wheels' spin, grip usage bars.
  - *Tested (Chromium, software GPU, scripted keys, Celeste unless noted; revision 3 tuning — couple 20, tyre stiffness 18, softer front / stiffer rear, stronger speed fade):* straight-line stability at 182 km/h (zero yaw, zero slip); 0–92 km/h in 2.5 s (unchanged); steering-force signs (front +10 kN, rear −7.9 kN for one input) and turn direction identical to the physical model; 0.5 s steering taps at 168 km/h: 2.3° body slip, no speed loss, settles on release; full lock from 92 km/h on throttle: 2.7° slip, speed still rising (109 → 129 km/h over the next second); brake + full lock from 182 km/h and power + full lock: 2.4° slip, no spin; counter-steer and release settle the car; a step input at 160 km/h (offline) peaks the yaw rate at 0.2 s before the lateral acceleration settles by 0.3 s (heading leads trajectory) and loses 3 km/h over 1.2 s of 2.1 g cornering with no throttle; full-lock cornering on throttle gains 29 km/h over 3 s at 2.2 g with 2.4° body slip; throttle/grip coupling (E30, full throttle + full lock from 60 km/h): TC off 3.3° slide with wheel spin, TC on 2.7° and no spin; launch wheel spin (E30, TC off: rear wheels 54 km/h over the ground; TC on: none); worn tyres (health 15%): 2.0 g against 2.4 g new; grass: 11° slip and heavy drag, kerb: 2.1 g; a wall hit at 33 km/h ends finite with the car stopped and front damage; braking to a stop, reversing with full lock and pulling away are clean; the same key script at 30, 60 and 144 fps ends with identical heading and position within ~4 m over 7 s (input sampling). Steady-state full-input cornering measured by the model (front-heavy split): 1.65 g at 40 km/h, 2.3 g at 70, 2.5 g at 100, 2.4 g at 140, 2.2 g at 180 (yaw rate 1.46 / 1.17 / 0.88 / 0.61 / 0.44 rad/s). AI on the shared model: Luxor 48 s (old physical model 46 s), Lombardia/Mino 76 s (74 s), Northfield/911 86 s (83 s), Spa/E30 no off-track; a scripted pure-pursuit human laps Luxor in 55.4 s (54.9 s). 8-car fields ran 45 s on all 17 circuits with no script errors, no cars off, none stuck.
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

In same-frame comparisons of sampled 12-car Medium sessions, rendering calls fell from 818 to 633 at Nile, 602 to 477 at Marina and 727 to 539 at Lombardia when batching was enabled: approximately **21–26% fewer calls** with the same camera, scene and lighting. Image comparisons also passed after damage, wheel/body modifications, repairs and resizing; the maximum mean channel difference was 0.0013 on a 0–255 scale. All sampled draws had zero GPU errors. Desktop Medium/High, pit service and portrait/landscape touch views were exercised. High's effects chain uses two passes rather than three.

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

