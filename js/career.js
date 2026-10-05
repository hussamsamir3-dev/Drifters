// Story mode: "The Pharaoh's Cup". Four chapters, three events each. Every event has a briefing,
// a goal with three star thresholds, and a line for winning or losing.
const duel = (name, car, skill) => [{ name, car, skill }];
export const CHAPTERS = [
  { name: 'Shubra Nights', text: 'Uncle Hamdi left you two things: a garage in Shubra with a leaking roof, and an unpaid entry to the Pharaoh\u2019s Cup. Amm Saber, his old mechanic, thinks you should sell the first and forget the second.',
    events: [
      { id: 's1', title: 'First laps', mode: 'trial', track: 'lider', laps: 3, goal: { type: 'lap', v: [82, 72, 64] },
        intro: [['Amm Saber', 'Your uncle drove this circuit every Thursday for twenty years. Show me one clean lap and I\u2019ll stop telling you to sell the place.'], ['Amm Saber', 'Brake before the corner, not in it. And stay off the grass \u2014 I only have one set of tyres.']],
        win: 'Amm Saber wipes his hands and says nothing. He is already ordering parts.', lose: 'Amm Saber: \u201cThe stopwatch doesn\u2019t lie. Again.\u201d' },
      { id: 's2', title: 'Club night', mode: 'race', track: 'lider', laps: 3, diff: 0, goal: { type: 'pos', v: [3, 2, 1] },
        intro: [['Amm Saber', 'Club night. Five locals who all knew Hamdi. Finish on the podium and people will start saying your name instead of his.'], ['Zizo', 'New kid in the old man\u2019s car? Cute. Try not to hold us up.']],
        win: 'Three people you have never met shake your hand. One of them asks if the garage is open tomorrow.', lose: 'Zizo waves from the podium. It is not a friendly wave.' },
      { id: 's3', title: 'Zizo\u2019s dare', mode: 'race', track: 'lider', laps: 3, diff: 1, rivals: duel('Zizo', 'E30', .93), goal: { type: 'pos', v: [1, 1, 1] },
        intro: [['Zizo', 'One on one. You win, I put your name on the Cup list myself. I win, the garage sign comes down.'], ['Amm Saber', 'He\u2019s fast on the straights and sloppy everywhere else. That big saloon eats its rear tyres. Be patient.']],
        win: 'Zizo: \u201cFine. You\u2019re on the list. Don\u2019t make me regret it.\u201d', lose: 'Zizo: \u201cLeave the sign up one more week. I want a rematch crowd.\u201d' } ] },
  { name: 'Sand and Stone', text: 'The Cup\u2019s second round runs in the shadow of the pyramids. The sand gets everywhere, and the regulars here slide their cars on purpose.',
    events: [
      { id: 'g1', title: 'Sideways school', mode: 'drift', track: 'giza', laps: 2, goal: { type: 'drift', v: [500, 1400, 3000] },
        intro: [['Captain Nadia', 'You drive like a taxi meter \u2014 straight and nervous. Out here the fast line is the sideways one.'], ['Captain Nadia', 'Tap the handbrake going in, then hold the slide with the throttle. Show me you can keep it off the walls.']],
        win: 'Captain Nadia: \u201cUgly. But sideways. We can work with ugly.\u201d', lose: 'Captain Nadia: \u201cThat was parking, not drifting.\u201d' },
      { id: 'g2', title: 'Dust devils', mode: 'race', track: 'giza', laps: 3, diff: 1, goal: { type: 'pos', v: [3, 2, 1] },
        intro: [['Amm Saber', 'Full grid today. The sand runoff will take your speed and your tyres. If the car gets hurt, the blue pit box is just past the start line.']],
        win: 'Sand in your teeth, a trophy in the boot.', lose: 'Amm Saber is already under the car, muttering about sand in the brakes.' },
      { id: 'g3', title: 'Captain Nadia', mode: 'race', track: 'giza', laps: 3, diff: 1, rivals: duel('Capt. Nadia', 'Lancer', .97), goal: { type: 'pos', v: [1, 1, 1] },
        intro: [['Captain Nadia', 'Lesson\u2019s over. Now beat the teacher.'], ['Amm Saber', 'She doesn\u2019t make mistakes. So don\u2019t wait for one \u2014 out-brake her into the hairpin.']],
        win: 'Captain Nadia hands you her spare helmet. \u201cFor the Corniche. It rains there.\u201d', lose: 'Captain Nadia: \u201cCloser than I expected. Come back.\u201d' } ] },
  { name: 'Sea Breeze', text: 'Alexandria. A long seafront straight, a knot of hairpins, and weather that changes its mind halfway through a lap.',
    events: [
      { id: 'c1', title: 'Storm front', mode: 'race', track: 'corniche', laps: 3, diff: 1, weather: 'rain', goal: { type: 'pos', v: [3, 2, 1] },
        intro: [['Amm Saber', 'Rain is coming in off the sea. When the road shines, you have a quarter less grip. Brake early, squeeze the throttle.']],
        win: 'You are soaked, the car is filthy, and the points table has your name in the top three.', lose: 'The sea wall has a new scuff the same colour as your car.' },
      { id: 'c2', title: 'Golden hour', mode: 'trial', track: 'corniche', laps: 3, goal: { type: 'lap', v: [64, 55, 49] },
        intro: [['Zizo', 'The lap record here is El Basha\u2019s. Nobody gets near it. I just want to see how far off you are.']],
        win: 'Zizo looks at the timing screen for a long moment. \u201c\u2026He\u2019s going to hear about this.\u201d', lose: 'Zizo: \u201cTold you.\u201d' },
      { id: 'c3', title: 'The twins', mode: 'race', track: 'corniche', laps: 3, diff: 2, rivals: [{ name: 'Hassan', car: 'Delta', skill: .97 }, { name: 'Hussein', car: 'Delta', skill: .96 }], goal: { type: 'pos', v: [1, 1, 1] },
        intro: [['Hassan', 'We race as a pair.'], ['Hussein', 'One of us blocks. One of us wins. You can guess which is which.'], ['Amm Saber', 'Don\u2019t get stuck between them. Pass them one at a time.']],
        win: 'For the first time all season the twins disagree \u2014 about whose fault it was.', lose: 'Hassan and Hussein cross the line side by side. Of course they do.' } ] },
  { name: 'Midnight Crown', text: 'The final is a street circuit through Cairo after dark. El Basha has won it six years running, and he has noticed you.',
    events: [
      { id: 'm1', title: 'Neon drift', mode: 'drift', track: 'midnight', laps: 3, goal: { type: 'drift', v: [800, 2000, 4000] },
        intro: [['Captain Nadia', 'The crowd here votes with its phones. Give them smoke under the lights and the organisers give you a front-row start.']],
        win: 'The clip is everywhere by morning.', lose: 'The crowd films the car behind you instead.' },
      { id: 'm2', title: 'Qualifier', mode: 'race', track: 'midnight', laps: 4, diff: 2, goal: { type: 'pos', v: [3, 2, 1] },
        intro: [['Amm Saber', 'Top three go to the final. The walls here are concrete, not tyres. Every touch costs you \u2014 pit if you must.']],
        win: 'You are in the final. Amm Saber pretends he has something in his eye.', lose: 'Fourth is the loneliest place on a results sheet.' },
      { id: 'm3', title: 'El Basha', mode: 'race', track: 'midnight', laps: 4, diff: 2, weather: 'rain', rivals: duel('El Basha', 'S4', 1.0), goal: { type: 'pos', v: [1, 1, 1] }, final: true,
        intro: [['El Basha', 'I raced your uncle for years. He never beat me. He never stopped trying either.'], ['El Basha', 'Let us see which half of that you inherited.'], ['Amm Saber', 'Hamdi\u2019s notes say El Basha lifts in the rain. It\u2019s going to rain.']],
        win: 'El Basha takes off his gloves and offers his hand. The Pharaoh\u2019s Cup goes on the shelf in a garage in Shubra, under a roof that no longer leaks.', lose: 'El Basha: \u201cSame as your uncle. Come back next year.\u201d' } ] },
];
export const EVENTS = CHAPTERS.flatMap((c, ci) => c.events.map(e => Object.assign(e, { ci })));
export function goalText(g) { return g.type === 'pos' ? (g.v[0] === 1 ? 'Win the race' : 'Finish in the top ' + g.v[0]) : g.type === 'lap' ? 'Set a lap under ' + g.v[0] + ' s' : 'Score ' + g.v[0].toLocaleString() + ' drift points'; }
// result: { pos, bestLap (ms), drift }
export function starsFor(g, r) {
  let s = 0;
  for (const t of g.v) { if (g.type === 'pos' ? r.pos <= t : g.type === 'lap' ? (r.bestLap != null && r.bestLap <= t * 1000) : r.drift >= t) s++; }
  return g.type === 'pos' && g.v[0] === 1 ? (r.pos === 1 ? 3 : 0) : s;
}
export const levelOf = xp => Math.floor(Math.sqrt(xp / 250)) + 1;
export const xpFor = lvl => (lvl - 1) ** 2 * 250;
export function dailyFor(tracks) {
  const d = new Date(), key = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate(); let h = 7; for (const ch of key) h = (h * 31 + ch.charCodeAt(0)) % 9973;
  const mode = ['race', 'drift', 'trial'][h % 3], track = tracks[(h >> 2) % tracks.length];
  return { key, mode, track: track.id, trackName: track.name, weather: h % 4 === 0 ? 'rain' : 'clear', label: { race: 'Podium finish', drift: 'Drift attack', trial: 'Time trial' }[mode] };
}
