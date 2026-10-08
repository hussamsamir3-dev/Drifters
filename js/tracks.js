// Track loading + procedural track generation.
// Every track ends up with the same interface: a 3D group, a centre-line path,
// and a grid that tells the physics what is under each wheel (road / kerb / grass / wall).
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { buildCity } from './city.js';

export const GRASS = 0, KERB = 1, ROAD = 2, WALL = 3, PIT = 4;

export const THEMES = {
  day:    { skyTop: 0x3f86d8, skyBot: 0xcfe6f5, fog: 0xd8e4dc, fogD: 0.0012, sun: 0xffe6c0, sunI: 2.9, hemiS: 0xbfd9ff, hemiG: 0x6b7a4a, hemiI: 1.1, sunDir: [-0.6, 0.6, 0.4], ground: 0x4f8a3c, exposure: 1.0 },
  desert: { skyTop: 0x2f7fd0, skyBot: 0xf3ddb0, fog: 0xecd9b0, fogD: 0.0019, sun: 0xffe9c4, sunI: 3.0, hemiS: 0xffe8c0, hemiG: 0xb58a4c, hemiI: 1.0, sunDir: [0.6, 0.55, 0.3], ground: 0xd9b36c, exposure: 1.0 },
  coast:  { skyTop: 0xf28a5b, skyBot: 0xffd9a0, fog: 0xf7c9a0, fogD: 0.0017, sun: 0xffc48a, sunI: 2.5, hemiS: 0xffc9a8, hemiG: 0x5b6f52, hemiI: 1.0, sunDir: [-0.2, 0.24, -0.85], ground: 0x5d9148, exposure: 1.0 },
  night:  { skyTop: 0x05060f, skyBot: 0x2a1a4a, fog: 0x1a1330, fogD: 0.0035, sun: 0x8fa6ff, sunI: 0.7, hemiS: 0x4a4a90, hemiG: 0x20202c, hemiI: 1.0, sunDir: [0.3, 1, 0.2], ground: 0x23262b, exposure: 1.15, night: true },
};

export const TRACKS = [
  { id: 'nile', name: 'Nile Park Circuit', ar: 'حلبة النيل', type: 'proc', theme: 'day', laps: 3, width: 15, runoff: 6, pit: [90, 90], camYaw: .7,
    blurb: 'The home circuit. A full pit lane, a fast first sector, a chicane and two hairpins.',
    pts: [[40,0],[150,0],[210,20],[230,70],[200,115],[140,110],[110,80],[70,95],[60,140],[100,180],[80,225],[20,235],[-40,205],[-50,150],[-20,110],[-60,70],[-110,90],[-150,60],[-140,10],[-80,-5]] },
  { id: 'monza', name: 'Monza Park', ar: 'حديقة مونزا', type: 'proc', theme: 'day', laps: 3, width: 16, runoff: 9, pit: [90, 100], camYaw: .35,
    blurb: 'The temple of speed. Two huge straights, flat-out sweepers and chicanes where races are won on the brakes. Layout inspired by Monza.',
    pts: [[-109,-133],[-93,-133],[-77,-133],[-61,-133],[-45,-133],[-29,-133],[-13,-133],[3,-133],[19,-133],[35,-133],[51,-133],[67,-133],[83,-131],[99,-127],[111,-118],[123,-107],[139,-103],[154,-107],[166,-118],[179,-128],[192,-136],[208,-141],[224,-139],[239,-135],[254,-129],[267,-120],[279,-109],[289,-97],[297,-83],[302,-68],[307,-52],[309,-36],[310,-20],[310,-4],[316,11],[325,23],[335,36],[340,51],[337,67],[327,79],[315,91],[304,102],[291,111],[277,119],[263,127],[248,133],[233,139],[218,144],[202,148],[186,151],[170,151],[155,149],[139,144],[124,139],[108,135],[93,132],[77,132],[63,139],[47,142],[32,136],[16,134],[1,139],[-15,140],[-29,132],[-41,122],[-57,119],[-73,118],[-89,118],[-105,117],[-121,117],[-137,117],[-153,117],[-169,118],[-185,118],[-201,117],[-217,117],[-233,116],[-249,114],[-265,110],[-280,103],[-294,96],[-307,87],[-319,76],[-329,63],[-337,49],[-341,34],[-343,18],[-344,2],[-344,-14],[-344,-30],[-342,-46],[-338,-62],[-332,-76],[-322,-89],[-311,-101],[-298,-110],[-284,-118],[-269,-124],[-254,-128],[-238,-131],[-222,-132],[-206,-133],[-190,-133],[-174,-133],[-158,-133],[-142,-133],[-126,-133]] },
  { id: 'spa', name: 'Spa Ardennes', ar: 'سبا أردين', type: 'proc', theme: 'day', laps: 3, width: 15, runoff: 7, pit: [80, 100], camYaw: .6,
    blurb: 'A long diagonal blast through the forest, a hairpin at each end and a fast, flowing return. Layout inspired by Spa-Francorchamps.',
    pts: [[-179,134],[-195,133],[-211,133],[-227,133],[-243,132],[-259,131],[-275,130],[-290,126],[-305,120],[-318,111],[-328,99],[-335,84],[-336,68],[-331,54],[-321,41],[-307,32],[-292,27],[-277,25],[-261,27],[-245,29],[-229,29],[-214,24],[-199,17],[-187,8],[-173,-1],[-158,-6],[-145,-15],[-131,-23],[-118,-32],[-104,-40],[-91,-48],[-77,-57],[-63,-65],[-50,-74],[-36,-82],[-23,-91],[-9,-99],[4,-108],[18,-116],[31,-124],[45,-133],[58,-141],[72,-149],[86,-157],[100,-165],[114,-173],[128,-180],[142,-187],[157,-192],[173,-196],[189,-197],[205,-196],[220,-192],[234,-184],[246,-173],[254,-160],[258,-144],[266,-131],[277,-120],[286,-107],[293,-92],[297,-77],[299,-61],[299,-45],[296,-29],[291,-14],[283,0],[272,11],[259,20],[244,26],[228,25],[213,21],[198,17],[182,13],[166,11],[150,10],[135,12],[119,16],[104,22],[91,30],[78,40],[68,52],[60,66],[55,81],[55,97],[57,113],[51,127],[38,136],[24,143],[8,147],[-7,147],[-22,140],[-37,137],[-53,139],[-68,135],[-84,131],[-100,132],[-115,133],[-131,133],[-147,134],[-163,134]] },
  { id: 'silverstone', name: 'Silverstone Airfield', ar: 'مطار سيلفرستون', type: 'proc', theme: 'day', laps: 3, width: 16, runoff: 10, pit: [90, 110], camYaw: .3,
    blurb: 'Fast and open: sweeping esses, the Hangar straight, a long run back down Wellington and the tight Luffield hairpin. Layout inspired by Silverstone.',
    pts: [[-328,59],[-328,43],[-328,27],[-328,11],[-328,-5],[-328,-21],[-328,-37],[-328,-53],[-328,-69],[-328,-85],[-329,-101],[-328,-117],[-327,-133],[-325,-149],[-321,-165],[-314,-179],[-304,-192],[-292,-203],[-278,-211],[-263,-216],[-248,-219],[-232,-222],[-216,-225],[-200,-228],[-184,-229],[-169,-227],[-154,-219],[-139,-216],[-124,-221],[-110,-228],[-94,-228],[-80,-220],[-65,-216],[-50,-221],[-36,-230],[-20,-232],[-5,-228],[11,-227],[27,-228],[43,-229],[59,-231],[75,-232],[91,-233],[107,-234],[123,-234],[139,-235],[155,-236],[171,-236],[187,-237],[203,-238],[219,-238],[235,-239],[251,-240],[267,-241],[283,-241],[299,-241],[315,-238],[330,-232],[343,-223],[355,-212],[363,-199],[368,-183],[372,-168],[374,-152],[374,-136],[374,-120],[373,-104],[375,-88],[381,-73],[387,-59],[386,-43],[381,-28],[378,-12],[379,4],[380,20],[377,36],[374,52],[370,67],[366,83],[355,94],[341,101],[325,105],[309,105],[293,105],[277,106],[262,110],[248,119],[238,131],[234,146],[236,162],[235,178],[229,193],[219,205],[204,211],[188,212],[172,212],[156,212],[140,212],[124,211],[108,211],[92,211],[76,211],[60,211],[44,211],[28,211],[12,211],[-4,211],[-20,211],[-36,211],[-52,211],[-68,211],[-84,211],[-100,211],[-116,211],[-133,211],[-149,211],[-165,211],[-181,211],[-197,211],[-213,211],[-229,211],[-243,219],[-251,232],[-252,248],[-255,264],[-264,277],[-279,284],[-295,284],[-309,279],[-320,267],[-324,251],[-325,235],[-325,219],[-326,203],[-327,187],[-327,171],[-328,155],[-328,139],[-328,123],[-328,107],[-328,91],[-328,75]] },
  { id: 'laguna', name: 'Laguna Seca Raceway', ar: 'حلبة لاغونا سيكا', type: 'proc', theme: 'desert', laps: 3, width: 14, runoff: 7, pit: [80, 100], camYaw: 0.5,
    blurb: 'A rollercoaster in the Californian hills: the blind uphill Andretti hairpin, then the Corkscrew, a left-right plunge that drops like a staircase. Layout inspired by Laguna Seca.',
    pts: [[424,-59],[418,-44],[411,-29],[404,-13],[398,2],[390,16],[381,30],[371,43],[360,55],[349,67],[336,78],[323,87],[309,97],[296,107],[283,118],[271,131],[261,145],[249,159],[239,172],[227,183],[214,193],[200,201],[185,208],[169,213],[153,216],[137,217],[120,216],[104,214],[88,212],[73,209],[57,207],[41,205],[25,203],[9,200],[-7,198],[-23,196],[-39,194],[-55,192],[-71,189],[-87,187],[-103,185],[-119,183],[-135,181],[-151,178],[-167,176],[-183,174],[-199,172],[-215,169],[-231,167],[-247,165],[-263,163],[-279,161],[-295,158],[-311,156],[-326,154],[-342,152],[-358,149],[-374,147],[-390,145],[-406,143],[-422,141],[-438,138],[-454,133],[-467,124],[-478,112],[-486,98],[-490,82],[-490,66],[-486,50],[-478,36],[-467,24],[-454,15],[-439,9],[-424,2],[-409,-4],[-394,-10],[-379,-16],[-364,-22],[-349,-28],[-334,-34],[-319,-40],[-304,-48],[-290,-56],[-277,-66],[-265,-77],[-254,-89],[-242,-100],[-229,-110],[-216,-119],[-202,-127],[-188,-134],[-173,-140],[-158,-145],[-142,-149],[-126,-151],[-110,-153],[-94,-155],[-78,-157],[-61,-159],[-45,-161],[-29,-163],[-13,-165],[3,-167],[20,-169],[36,-171],[52,-173],[68,-175],[85,-177],[102,-176],[118,-174],[134,-171],[150,-171],[166,-174],[181,-180],[194,-189],[206,-200],[216,-213],[224,-227],[235,-239],[249,-248],[264,-255],[281,-258],[297,-257],[313,-253],[329,-247],[344,-240],[359,-233],[373,-225],[386,-215],[398,-203],[408,-190],[417,-177],[424,-162],[429,-146],[432,-130],[434,-114],[434,-97],[431,-80],[426,-63]] },
  { id: 'brands', name: 'Brands Hatch GP', ar: 'براندز هاتش', type: 'proc', theme: 'day', laps: 3, width: 14, runoff: 7, pit: [80, 100], camYaw: 0.35,
    blurb: 'Natural amphitheatre racing: the plunge of Paddock Hill Bend, the Druids hairpin, then flowing sweeps through the Kent woods. Layout inspired by Brands Hatch.',
    pts: [[386,42],[371,48],[356,54],[341,60],[326,66],[311,72],[296,77],[281,83],[266,89],[251,95],[236,101],[221,107],[206,112],[191,118],[176,124],[161,130],[146,136],[131,142],[116,147],[101,153],[86,159],[71,165],[56,171],[41,177],[26,182],[11,188],[-4,194],[-19,200],[-34,206],[-49,211],[-64,217],[-79,223],[-94,229],[-109,235],[-124,241],[-139,246],[-154,252],[-169,258],[-184,264],[-199,270],[-215,273],[-231,275],[-248,274],[-263,270],[-279,265],[-293,257],[-306,248],[-318,236],[-328,223],[-336,210],[-344,196],[-353,182],[-361,169],[-369,155],[-378,141],[-386,127],[-394,114],[-403,100],[-411,86],[-419,72],[-428,59],[-436,45],[-444,31],[-453,17],[-461,4],[-469,-10],[-477,-24],[-482,-40],[-482,-56],[-478,-71],[-470,-85],[-459,-97],[-446,-105],[-430,-110],[-414,-110],[-399,-106],[-384,-99],[-370,-91],[-356,-83],[-341,-76],[-325,-71],[-309,-68],[-293,-67],[-276,-68],[-260,-72],[-245,-77],[-230,-84],[-216,-92],[-202,-101],[-188,-109],[-174,-117],[-160,-123],[-144,-128],[-129,-131],[-113,-132],[-95,-133],[-78,-133],[-62,-134],[-46,-137],[-31,-142],[-16,-148],[-2,-156],[12,-163],[27,-169],[43,-174],[59,-176],[75,-178],[91,-177],[107,-175],[124,-172],[140,-170],[157,-167],[173,-165],[190,-162],[206,-161],[222,-161],[238,-163],[254,-167],[270,-173],[284,-180],[298,-189],[312,-199],[327,-210],[341,-218],[356,-223],[372,-226],[388,-226],[404,-223],[419,-219],[434,-212],[447,-203],[459,-193],[470,-181],[479,-167],[487,-153],[492,-138],[495,-122],[496,-106],[495,-90],[492,-74],[487,-59],[480,-44],[472,-29],[463,-16],[453,-3],[441,8],[429,19],[415,28],[401,36]] },
  { id: 'imola', name: 'Imola Autodromo', ar: 'أوتودروم إيمولا', type: 'proc', theme: 'day', laps: 3, width: 15, runoff: 8, pit: [80, 100], camYaw: 0.6,
    blurb: 'Old-school Italian fast and flowing: the Tamburello sweep, the Tosa hairpin, Piratella and the climb through Acque Minerali. Layout inspired by Imola.',
    pts: [[402,19],[387,12],[372,5],[357,-2],[343,-8],[328,-15],[313,-22],[298,-30],[284,-39],[271,-49],[258,-60],[246,-71],[233,-82],[220,-93],[207,-103],[193,-112],[178,-120],[163,-127],[149,-134],[134,-140],[119,-147],[104,-154],[89,-161],[75,-167],[60,-174],[45,-181],[30,-188],[15,-194],[1,-201],[-14,-208],[-30,-214],[-46,-218],[-62,-222],[-78,-224],[-95,-225],[-111,-225],[-128,-224],[-144,-223],[-161,-224],[-177,-226],[-193,-228],[-209,-233],[-225,-238],[-240,-244],[-255,-251],[-270,-258],[-285,-265],[-300,-271],[-315,-278],[-330,-285],[-345,-292],[-360,-299],[-374,-305],[-390,-310],[-406,-312],[-422,-309],[-437,-302],[-451,-293],[-461,-280],[-468,-265],[-471,-249],[-471,-233],[-467,-217],[-460,-203],[-453,-188],[-446,-173],[-439,-159],[-432,-144],[-425,-130],[-418,-115],[-411,-100],[-404,-86],[-398,-71],[-391,-57],[-384,-42],[-377,-27],[-370,-13],[-363,2],[-356,16],[-347,30],[-337,43],[-326,55],[-313,66],[-300,75],[-285,82],[-270,89],[-255,96],[-240,103],[-225,110],[-210,117],[-196,123],[-181,130],[-166,138],[-152,147],[-138,157],[-127,169],[-116,182],[-106,195],[-94,206],[-80,216],[-66,223],[-50,229],[-34,232],[-18,234],[-2,235],[14,236],[30,238],[46,239],[62,240],[78,242],[94,243],[110,244],[126,245],[142,247],[158,248],[174,249],[190,251],[206,252],[222,253],[238,254],[254,256],[270,257],[286,258],[302,260],[318,261],[334,262],[350,263],[366,265],[382,265],[399,263],[415,260],[431,254],[446,246],[460,237],[472,227],[482,214],[490,200],[496,185],[500,170],[501,154],[500,138],[497,122],[491,107],[483,92],[474,78],[464,65],[453,53],[440,43],[427,33],[413,24]] },
  { id: 'redbull', name: 'Red Bull Ring', ar: 'ريد بول رينغ', type: 'proc', theme: 'day', laps: 3, width: 15, runoff: 8, pit: [80, 100], camYaw: 0.5,
    blurb: 'Short, steep and brutal: three long power straights in the Styrian Alps joined by heavy braking zones. Layout inspired by the Red Bull Ring.',
    pts: [[-2,320],[-8,305],[-13,290],[-18,275],[-24,259],[-29,244],[-34,229],[-40,214],[-45,199],[-51,184],[-56,169],[-61,154],[-67,138],[-72,123],[-77,108],[-83,93],[-88,78],[-94,63],[-99,48],[-104,32],[-110,17],[-115,2],[-121,-13],[-126,-28],[-131,-43],[-137,-58],[-142,-74],[-147,-89],[-153,-104],[-158,-119],[-164,-134],[-169,-149],[-174,-164],[-180,-179],[-185,-195],[-190,-210],[-196,-225],[-201,-240],[-205,-256],[-205,-272],[-201,-288],[-192,-302],[-179,-313],[-164,-320],[-148,-323],[-132,-324],[-116,-325],[-100,-326],[-84,-328],[-68,-329],[-52,-330],[-36,-331],[-20,-333],[-4,-334],[12,-335],[28,-336],[45,-335],[61,-330],[74,-321],[86,-309],[95,-295],[100,-279],[102,-263],[103,-246],[104,-230],[105,-213],[107,-197],[109,-181],[113,-166],[118,-150],[124,-135],[129,-120],[133,-104],[134,-87],[132,-71],[129,-55],[123,-39],[117,-25],[110,-10],[103,4],[96,19],[89,33],[82,48],[75,62],[68,77],[62,91],[56,106],[54,122],[55,139],[59,154],[67,169],[77,181],[88,193],[100,205],[112,217],[124,229],[135,241],[147,253],[155,267],[161,282],[162,299],[160,315],[155,330],[146,344],[135,356],[122,366],[107,372],[91,376],[75,377],[59,375],[44,370],[29,362],[17,351],[7,338],[-1,324]] },
  { id: 'monaco', name: 'Monaco Streets', ar: 'شوارع موناكو', type: 'proc', theme: 'coast', laps: 3, width: 11, runoff: 3, pit: [80, 100], camYaw: 0.5,
    blurb: 'The ultimate test: a street circuit with no room for error. Sainte Devote, the climb to Casino, the Grand Hotel hairpin, the tunnel and the harbour chicane. Layout inspired by Monaco.',
    pts: [[-366,-197],[-358,-212],[-351,-226],[-344,-241],[-337,-256],[-330,-270],[-322,-285],[-315,-299],[-303,-311],[-288,-318],[-272,-320],[-256,-317],[-241,-312],[-226,-306],[-211,-301],[-195,-295],[-180,-290],[-165,-284],[-150,-278],[-134,-273],[-119,-267],[-104,-262],[-90,-254],[-76,-245],[-64,-234],[-54,-222],[-45,-208],[-38,-194],[-30,-178],[-19,-165],[-7,-153],[5,-142],[16,-131],[28,-121],[40,-110],[52,-99],[64,-88],[75,-77],[87,-67],[99,-56],[111,-45],[123,-34],[135,-23],[146,-12],[158,-2],[170,9],[182,20],[194,31],[205,42],[217,52],[229,63],[241,74],[253,85],[265,96],[276,107],[288,117],[300,128],[312,139],[324,150],[335,161],[347,171],[359,182],[371,193],[383,204],[394,216],[403,230],[407,247],[407,264],[400,278],[387,288],[372,291],[355,290],[339,289],[323,288],[306,287],[290,286],[273,280],[259,270],[247,260],[234,250],[221,240],[209,230],[196,219],[183,209],[171,199],[158,189],[145,179],[133,169],[120,158],[107,149],[93,140],[79,133],[64,126],[49,121],[33,117],[17,114],[1,110],[-15,106],[-31,99],[-46,92],[-60,84],[-74,76],[-89,68],[-103,60],[-117,52],[-132,44],[-147,39],[-163,39],[-179,44],[-195,46],[-211,44],[-226,37],[-239,28],[-253,19],[-266,10],[-280,1],[-293,-7],[-306,-16],[-320,-25],[-333,-34],[-346,-43],[-359,-53],[-368,-66],[-375,-81],[-378,-96],[-377,-112],[-375,-129],[-374,-146],[-372,-162],[-370,-179]] },
  { id: 'interlagos', name: 'Interlagos Hills', ar: 'تلال إنترلاغوس', type: 'proc', theme: 'coast', laps: 3, width: 15, runoff: 7, pit: [80, 100], camYaw: .5,
    blurb: 'Anti-clockwise and relentless: a flat-out back straight, a downhill sweep into the infield and the hairpin back out. Layout inspired by Interlagos.',
    pts: [[25,132],[41,132],[57,132],[73,132],[89,132],[105,132],[121,132],[137,132],[153,132],[169,131],[185,131],[201,130],[216,125],[230,117],[240,104],[243,89],[241,73],[245,58],[255,46],[268,35],[282,29],[296,22],[310,13],[322,2],[330,-11],[334,-27],[334,-43],[332,-59],[326,-74],[318,-87],[308,-100],[297,-111],[283,-120],[268,-126],[253,-130],[237,-134],[222,-136],[206,-138],[190,-139],[174,-140],[158,-141],[142,-142],[126,-143],[110,-144],[94,-145],[78,-146],[62,-147],[46,-147],[30,-148],[14,-148],[-2,-149],[-18,-149],[-34,-149],[-50,-149],[-66,-149],[-82,-148],[-98,-148],[-114,-147],[-130,-147],[-146,-146],[-162,-145],[-178,-143],[-194,-141],[-210,-139],[-226,-135],[-241,-130],[-255,-122],[-268,-113],[-279,-101],[-286,-87],[-289,-72],[-289,-56],[-288,-40],[-284,-24],[-275,-11],[-262,-2],[-247,4],[-231,7],[-215,7],[-199,6],[-183,6],[-167,5],[-151,5],[-135,4],[-119,3],[-103,2],[-88,-1],[-72,-3],[-56,-5],[-40,-5],[-24,-4],[-8,-1],[7,2],[23,7],[37,15],[48,26],[53,41],[50,56],[40,69],[25,74],[9,76],[-7,77],[-23,76],[-39,76],[-55,76],[-71,75],[-87,74],[-103,73],[-119,73],[-135,73],[-151,74],[-167,75],[-183,79],[-197,86],[-208,98],[-212,113],[-208,128],[-198,140],[-183,145],[-167,145],[-151,144],[-135,143],[-119,143],[-103,142],[-87,141],[-71,139],[-55,138],[-39,137],[-23,135],[-7,134],[9,133]] },
  { id: 'marina', name: 'Marina Bay Night', ar: 'مارينا باي ليلاً', type: 'proc', theme: 'night', laps: 4, width: 14, runoff: 4, pit: [70, 90], camYaw: .25,
    blurb: 'A street circuit under floodlights: ninety-degree corners, walls on both sides and chicanes to punish any mistake. Layout inspired by Marina Bay.',
    pts: [[-31,150],[-15,150],[1,150],[17,150],[33,150],[49,150],[65,150],[81,150],[97,150],[113,150],[129,150],[144,145],[156,134],[170,126],[186,126],[199,134],[210,146],[224,153],[240,155],[256,151],[269,143],[278,130],[280,114],[281,98],[281,82],[282,66],[281,50],[273,36],[264,23],[259,8],[260,-8],[265,-22],[275,-35],[282,-49],[283,-65],[281,-81],[281,-97],[279,-113],[273,-128],[262,-139],[247,-145],[231,-144],[215,-145],[199,-145],[183,-144],[167,-144],[151,-144],[135,-144],[119,-144],[103,-144],[87,-144],[71,-146],[57,-154],[44,-163],[29,-167],[13,-165],[0,-157],[-13,-147],[-28,-143],[-44,-143],[-60,-144],[-76,-144],[-92,-144],[-108,-144],[-124,-144],[-140,-144],[-156,-145],[-172,-146],[-188,-146],[-204,-146],[-220,-146],[-236,-146],[-252,-145],[-268,-143],[-281,-135],[-289,-121],[-291,-105],[-291,-89],[-291,-73],[-292,-57],[-286,-42],[-276,-30],[-269,-16],[-268,0],[-273,16],[-283,28],[-291,42],[-292,57],[-290,73],[-287,89],[-282,104],[-275,119],[-265,131],[-253,142],[-238,148],[-223,151],[-207,151],[-191,151],[-175,150],[-159,150],[-143,150],[-127,150],[-111,150],[-95,150],[-79,150],[-63,150],[-47,150]] },
  { id: 'giza', name: 'Giza Sand Ring', ar: 'حلبة الجيزة', type: 'proc', theme: 'desert', laps: 3, width: 16, runoff: 9,
    blurb: 'Fast sweepers under the pyramids. Sand runoff eats your speed.',
    pts: [[60,-6],[120,-10],[200,30],[230,110],[180,170],[100,150],[60,200],[-20,230],[-110,200],[-140,120],[-80,70],[-120,0],[-60,-40],[0,0]] },
  { id: 'corniche', name: 'Alex Corniche', ar: 'كورنيش إسكندرية', type: 'proc', theme: 'coast', laps: 3, width: 15, runoff: 7,
    blurb: 'A long seafront blast into a knot of hairpins at sunset.',
    pts: [[130,0],[260,0],[320,40],[300,100],[220,110],[180,70],[120,90],[130,160],[60,190],[-20,150],[-10,90],[-80,60],[-90,10],[0,0]] },
  { id: 'midnight', name: 'Cairo Midnight', ar: 'منتصف الليل', type: 'proc', theme: 'night', laps: 4, width: 14, runoff: 5,
    blurb: 'Street circuit after dark. Square corners, neon walls, no mercy.',
    pts: [[75,0],[150,0],[180,30],[180,120],[150,150],[90,150],[60,120],[60,80],[20,60],[-40,80],[-40,160],[-80,200],[-140,180],[-150,100],[-120,20],[-60,-10],[0,0]] },
  { id: 'luxor', name: 'Luxor Speedway', ar: 'حلبة الأقصر', type: 'proc', theme: 'desert', laps: 4, width: 17, runoff: 9, pit: [70, 70], camYaw: .5,
    blurb: 'A fast desert oval with one kink. Flat out, slipstreams and late braking.',
    pts: [[0,0],[140,0],[230,25],[270,90],[230,155],[140,180],[0,180],[-90,155],[-130,90],[-90,25]] },
  { id: 'aswan', name: 'Aswan Lakeside', ar: 'بحيرة أسوان', type: 'proc', theme: 'day', laps: 3, width: 15, runoff: 6, pit: [60, 70], camYaw: .8,
    blurb: 'Long and technical: an esses section, three hairpins and a quick back stretch.',
    pts: [[30,0],[130,0],[190,-30],[250,0],[260,70],[200,110],[130,90],[80,130],[100,200],[40,240],[-40,210],[-30,140],[-90,110],[-150,150],[-200,100],[-160,30],[-80,20]] },
  { id: 'hurghada', name: 'Hurghada Marina', ar: 'مارينا الغردقة', type: 'proc', theme: 'coast', laps: 3, width: 15, runoff: 7, pit: [70, 70], camYaw: .6,
    blurb: 'Seafront straight, then a tight harbour section where the walls are close.',
    pts: [[60,0],[200,0],[270,30],[290,100],[240,150],[160,130],[110,170],[130,240],[60,270],[-20,240],[-40,170],[10,120],[-30,70],[-110,90],[-150,40],[-100,-5]] },
  { id: 'pad', name: 'Test pad', ar: 'ساحة الاختبار', type: 'proc', theme: 'day', laps: 1, width: 84, runoff: 14, pit: null, dev: true,
    blurb: 'Tuning ground: a wide asphalt oval for braking, constant-radius, slalom and surface tests. Press T for telemetry.',
    pts: [[0,0],[110,0],[220,0],[285,65],[220,130],[110,130],[0,130],[-65,65]] },
];

// ---------- helpers ----------
function catmull(p0, p1, p2, p3, t) {
  const t2 = t * t, t3 = t2 * t;
  return 0.5 * ((2 * p1) + (-p0 + p2) * t + (2 * p0 - 5 * p1 + 4 * p2 - p3) * t2 + (-p0 + 3 * p1 - 3 * p2 + p3) * t3);
}
// closed Catmull-Rom through pts, resampled at even spacing
export function resampleClosed(pts, spacing) {
  const n = pts.length, dense = [];
  for (let i = 0; i < n; i++) {
    const a = pts[(i + n - 1) % n], b = pts[i], c = pts[(i + 1) % n], d = pts[(i + 2) % n];
    for (let k = 0; k < 24; k++) { const t = k / 24; dense.push([catmull(a[0], b[0], c[0], d[0], t), catmull(a[1], b[1], c[1], d[1], t)]); }
  }
  const cum = [0];
  for (let i = 1; i <= dense.length; i++) { const p = dense[i - 1], q = dense[i % dense.length]; cum.push(cum[i - 1] + Math.hypot(q[0] - p[0], q[1] - p[1])); }
  const total = cum[dense.length], count = Math.round(total / spacing), out = [];
  let j = 0;
  for (let i = 0; i < count; i++) {
    const s = i * total / count;
    while (cum[j + 1] < s) j++;
    const f = (s - cum[j]) / (cum[j + 1] - cum[j] || 1), p = dense[j], q = dense[(j + 1) % dense.length];
    out.push({ x: p[0] + (q[0] - p[0]) * f, z: p[1] + (q[1] - p[1]) * f });
  }
  return out;
}
function canvasTex(w, h, draw, rx = 1, ry = 1) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(rx, ry);
  t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t;
}
function noise(ctx, w, h, base, spread, count) {
  ctx.fillStyle = base; ctx.fillRect(0, 0, w, h);
  for (let i = 0; i < count; i++) {
    const v = Math.random(); ctx.fillStyle = `rgba(${v > .5 ? 255 : 0},${v > .5 ? 255 : 0},${v > .5 ? 255 : 0},${Math.random() * spread})`;
    ctx.fillRect(Math.random() * w, Math.random() * h, 1 + Math.random() * 2, 1 + Math.random() * 2);
  }
}
let seed = 1; const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };

// ---------- Track ----------
export class Track {
  constructor(def) { this.def = def; this.theme = window.__todTheme ? window.__todTheme(def.theme) : THEMES[def.theme]; this.group = new THREE.Group(); this.grid = null; this.path = []; this.lights = []; }

  finishPath(pts) {
    const n = pts.length; this.path = pts; this.n = n;
    let len = 0;
    for (let i = 0; i < n; i++) {
      const p = pts[i], q = pts[(i + 1) % n], a = pts[(i + n - 1) % n];
      const tx = q.x - a.x, tz = q.z - a.z, l = Math.hypot(tx, tz) || 1;
      p.tx = tx / l; p.tz = tz / l; len += Math.hypot(q.x - p.x, q.z - p.z);
    }
    this.len = len; this.spacing = len / n;
    // signed curvature (1/m), smoothed
    const raw = pts.map((p, i) => {
      const a = pts[(i + n - 3) % n], b = pts[(i + 3) % n];
      let d = Math.atan2(b.tx, b.tz) - Math.atan2(a.tx, a.tz); while (d > Math.PI) d -= 2 * Math.PI; while (d < -Math.PI) d += 2 * Math.PI;
      return d / (6 * this.spacing);
    });
    for (let i = 0; i < n; i++) pts[i].k = (raw[(i + n - 1) % n] + 2 * raw[i] + raw[(i + 1) % n]) / 4;
  }
  surf(x, z) {
    const g = this.grid, gx = Math.floor((x - g.x0) / g.cell), gz = Math.floor((z - g.z0) / g.cell);
    if (gx < 0 || gz < 0 || gx >= g.w || gz >= g.h) return WALL;
    return g.surf[gz * g.w + gx];
  }
  height(x, z) {
    const g = this.grid; if (!g.hgt) return 0;
    let fx = (x - g.x0) / g.cell - 0.5, fz = (z - g.z0) / g.cell - 0.5;
    fx = Math.max(0, Math.min(g.w - 1.001, fx)); fz = Math.max(0, Math.min(g.h - 1.001, fz));
    const ix = fx | 0, iz = fz | 0, u = fx - ix, v = fz - iz, i = iz * g.w + ix, h = g.hgt;
    return (h[i] * (1 - u) + h[i + 1] * u) * (1 - v) + (h[i + g.w] * (1 - u) + h[i + g.w + 1] * u) * v;
  }
  nearest(x, z, hint = -1, win = 18) {
    const p = this.path, n = this.n; let best = 0, bd = Infinity;
    if (hint < 0) { for (let i = 0; i < n; i++) { const d = (p[i].x - x) ** 2 + (p[i].z - z) ** 2; if (d < bd) { bd = d; best = i; } } return best; }
    for (let k = -win; k <= win; k++) { const i = ((hint + k) % n + n) % n, d = (p[i].x - x) ** 2 + (p[i].z - z) ** 2; if (d < bd) { bd = d; best = i; } }
    return best;
  }
  // direction + distance to the nearest non-wall cell (used to push cars out of barriers)
  escape(x, z) {
    for (let r = 0.35; r < 6; r += 0.35) for (let a = 0; a < 16; a++) {
      const nx = Math.cos(a * Math.PI / 8), nz = Math.sin(a * Math.PI / 8);
      if (this.surf(x + nx * r, z + nz * r) !== WALL) return { nx, nz, d: r };
    }
    return null;
  }
  gridSlot(k) {   // starting grid: two columns behind the line
    const i = ((this.n - 3 - Math.ceil((k + 1) * 7.5 / this.spacing)) % this.n + this.n) % this.n, p = this.path[i], side = (k % 2 ? -1 : 1) * 2.6;
    return { x: p.x + p.tz * side, z: p.z - p.tx * side, th: Math.atan2(p.tx, p.tz), idx: i };
  }
  dispose() { this.group.traverse(o => { if (o.geometry) o.geometry.dispose(); if (o.material) [].concat(o.material).forEach(m => { for (const k in m) if (m[k] && m[k].isTexture) m[k].dispose(); m.dispose(); }); }); }
}

// ---------- shared dressing: start line + gantry ----------
function addStart(track) {
  const p = track.path[0], th = Math.atan2(p.tx, p.tz), y = track.height(p.x, p.z);
  let hw = 0; while (hw < 14 && track.surf(p.x + p.tz * hw, p.z - p.tx * hw) !== WALL && track.surf(p.x + p.tz * hw, p.z - p.tx * hw) !== GRASS) hw += 0.5;
  hw = Math.max(5, hw);
  const g = new THREE.Group(); g.position.set(p.x, y, p.z); g.rotation.y = th;
  const chk = canvasTex(128, 32, (c) => { for (let i = 0; i < 16; i++) for (let j = 0; j < 4; j++) { c.fillStyle = (i + j) % 2 ? '#111' : '#f5f5f5'; c.fillRect(i * 8, j * 8, 8, 8); } });
  const line = new THREE.Mesh(new THREE.PlaneGeometry(hw * 2, 2.2), new THREE.MeshStandardMaterial({ map: chk, roughness: .8, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4 }));
  line.rotation.x = -Math.PI / 2; line.position.y = 0.05; line.receiveShadow = true; g.add(line);
  const steel = new THREE.MeshStandardMaterial({ color: 0x2b2f36, metalness: .7, roughness: .4 });
  for (const s of [-1, 1]) { const pole = new THREE.Mesh(new THREE.BoxGeometry(.5, 7.5, .5), steel); pole.position.set(s * (hw + 1.2), 3.75, 0); pole.castShadow = true; g.add(pole); }
  const sign = canvasTex(1024, 128, (c, w, h) => {
    c.fillStyle = '#e3262e'; c.fillRect(0, 0, w, h); c.fillStyle = '#fff'; c.font = 'italic 900 92px Rubik, Arial Black, sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle';
    c.fillText('TAFHEET  ·  تفحيط  ·  START', w / 2, h / 2 + 6);
  });
  const beam = new THREE.Mesh(new THREE.BoxGeometry(hw * 2 + 3, 1.3, .5), [steel, steel, steel, steel, new THREE.MeshStandardMaterial({ map: sign, emissive: 0xffffff, emissiveMap: sign, emissiveIntensity: track.theme.night ? .9 : .15 }), new THREE.MeshStandardMaterial({ map: sign })]);
  beam.position.y = 7.3; beam.castShadow = true; g.add(beam);
  // painted grid boxes for the first twelve starting slots
  const gm = new THREE.MeshBasicMaterial({ color: 0xf2f2f2, transparent: true, opacity: .8, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4 });
  for (let k = 0; k < 12; k++) { const sl = track.gridSlot(k), fx = Math.sin(sl.th), fz = Math.cos(sl.th), yy = track.height(sl.x, sl.z) + .05; for (const [w, d, ox, oz] of [[2.5, .16, 0, 2.7], [.16, 1.1, 1.17, 2.2], [.16, 1.1, -1.17, 2.2]]) { const m = new THREE.Mesh(new THREE.PlaneGeometry(w, d), gm); m.rotation.set(-Math.PI / 2, 0, -sl.th); m.position.set(sl.x + fx * oz + fz * ox, yy, sl.z + fz * oz - fx * ox); track.group.add(m); } }
  track.group.add(g);
}

// ---------- procedural tracks ----------
// Corners and their apexes. A corner is a run of the track that keeps turning one way; its apex is the point on the inside where a driver clips the kerb: about half way round for a
// medium corner, later for a sharp one (a late apex lets the car straighten up and get on the power early, as in the diagrams of a basic and a late-apex line).
// `side` is +1 when the inside of the corner is the positive-offset side of the track (x + tz*o, z - tx*o), -1 otherwise.
function referenceLine(path, hw) {      // the shortest smooth line round the circuit that stays inside the road (a driver's ideal line): found by relaxation
  const n = path.length, o = new Float64Array(n), qx = new Float64Array(n), qz = new Float64Array(n), lim = hw - 1.0, w = 1.88;
  for (let i = 0; i < n; i++) { qx[i] = path[i].x; qz[i] = path[i].z; }
  for (let it = 0; it < 1100; it++) for (let i = 0; i < n; i++) { const a = i ? i - 1 : n - 1, b = i + 1 < n ? i + 1 : 0, p = path[i], mx = (qx[a] + qx[b]) * .5, mz = (qz[a] + qz[b]) * .5, tt = (mx - p.x) * p.tz - (mz - p.z) * p.tx; let v = o[i] + w * (tt - o[i]); v = v > lim ? lim : v < -lim ? -lim : v; o[i] = v; qx[i] = p.x + p.tz * v; qz[i] = p.z - p.tx * v; }
  return o;
}
// Corners and their apexes. A corner is a run of the track that keeps turning one way. Its apex is where the ideal line comes closest to the inside edge; on a sharp corner it is moved
// later (a late apex lets the car straighten up and get on the power early, as in the diagrams of a basic and a late-apex line). `side` is +1 when the inside of the corner is the
// positive-offset side of the track (x + tz*o, z - tx*o), -1 otherwise. kb / ka say how far the kerb runs before and after the apex, trimmed to where the line really uses the edge.
function findApexes(path, n, hw) {
  const sp = Math.hypot(path[1].x - path[0].x, path[1].z - path[0].z) || 2, at = i => ((i % n) + n) % n, ref = referenceLine(path, hw);
  const dot = path.map((p, i) => { const a = path[at(i - 1)], b = path[at(i + 1)]; return (b.x - 2 * p.x + a.x) * p.tz - (b.z - 2 * p.z + a.z) * p.tx; });      // + : the centre of the bend is on the positive-offset side
  const ks = path.map(p => p.k || 0), ksm = ks.map((_, i) => { let s = 0; for (let q = -4; q <= 4; q++) s += Math.abs(ks[at(i + q)]); return s / 9; }), thr = 1 / 160;
  let start = ksm.findIndex(v => v < thr * .6); if (start < 0) start = 0; const runs = []; let cur = null;
  for (let q = 1; q <= n; q++) { const v = ksm[(start + q) % n], d = dot[(start + q) % n], sgn = v > thr ? Math.sign(d) || 1 : 0;
    if (sgn) { if (cur && cur.sgn === sgn) cur.end = q; else { if (cur) runs.push(cur); cur = { sgn, s: q, end: q }; } } else if (cur && q - cur.end > 8) { runs.push(cur); cur = null; } }
  if (cur) runs.push(cur);
  const out = [];
  for (const r of runs) { let ang = 0; for (let q = r.s; q <= r.end; q++) ang += ksm[(start + q) % n] * sp; const len = r.end - r.s + 1; if (ang < .45 || len * sp < 20) continue;      // under about 26 degrees is a bend, not a corner
    let bq = r.s, bv = -1e9; for (let q = r.s - 6; q <= r.end + 6; q++) { const v = r.sgn * ref[at(start + q)]; if (v > bv + 1e-6) { bv = v; bq = q; } }      // closest approach of the ideal line to the inside edge
    const shift = ang > 1.2 ? .14 : ang > .7 ? .07 : 0, aq = Math.max(r.s + 1, Math.min(r.end - 2, bq + Math.round(shift * len))), ai = at(start + aq);
    let kb = Math.max(7, Math.min(22, Math.round(len * .3))), ka = Math.max(5, Math.min(14, Math.round(len * .22)));
    while (kb > 6 && r.sgn * ref[at(ai - kb)] < hw - 3.4) kb--; while (ka > 4 && r.sgn * ref[at(ai + ka)] < hw - 3.4) ka--;      // not where the line is nowhere near the edge
    out.push({ i: ai, side: r.sgn, len, ang, a: at(start + r.s), b: at(start + r.end), kb, ka });
    /* corner-exit kerb: on the OUTSIDE of the road, where the line unwinds and runs out to the edge (as on every real circuit's medium and fast corners) */
    if (ang > .7) { let qs = -1, qe = -1; for (let q = 2; q <= ka + 30; q++) { const near = -r.sgn * ref[at(ai + q)] > hw - 3.0; if (near) { if (qs < 0) qs = q; qe = q; } else if (qs >= 0 && q - qe > 2) break; }
      if (qs >= 0 && qe - qs >= 6) out.push({ exit: true, i: ai, i0: at(ai + qs), cnt: Math.min(26, qe - qs + 1), side: -r.sgn, len, ang }); } }
  for (let x = out.length - 1; x >= 0; x--) { const e = out[x]; if (!e.exit) continue;      /* an exit kerb that would sit on another corner's inside kerb (chicanes) is not drawn twice */
    if (out.some(o => !o.exit && o.side === e.side && Math.min(at(e.i0 - (o.i - o.kb)), at(o.i + o.ka - e.i0)) >= -2 && at(e.i0 - (o.i - o.kb)) < o.kb + o.ka + e.cnt + 3)) out.splice(x, 1); }
  out.ref = ref; return out;
}
function ribbon(path, offL, offR, y, vScale, closed = true, mask = null) {
  const pos = [], uv = [], idx = [], n = path.length; let d = 0, vi = 0, prev = false;
  for (let i = 0; i <= n; i++) {
    const p = path[i % n], on = !mask || mask[i % n];
    if (on) {
      pos.push(p.x + p.tz * offL, y, p.z - p.tx * offL, p.x + p.tz * offR, y, p.z - p.tx * offR);
      uv.push(0, d * vScale, 1, d * vScale);
      if (prev) idx.push(vi - 2, vi - 1, vi, vi - 1, vi + 1, vi);
      vi += 2;
    }
    prev = on; d += Math.hypot(path[(i + 1) % n].x - p.x, path[(i + 1) % n].z - p.z);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g.setIndex(idx); g.computeVertexNormals();
  return g;
}
function wallStrip(path, offIn, h, vScale) {
  const offF = typeof offIn === 'function' ? offIn : () => offIn;
  const pos = [], uv = [], idx = [], n = path.length; let d = 0;
  for (let i = 0; i <= n; i++) {
    const p = path[i % n], off = offF(i % n), x = p.x + p.tz * off, z = p.z - p.tx * off;
    pos.push(x, 0, z, x, h, z); uv.push(d * vScale, 0, d * vScale, 1);
    if (i < n) idx.push(i * 2, i * 2 + 1, i * 2 + 2, i * 2 + 1, i * 2 + 3, i * 2 + 2);
    d += Math.hypot(path[(i + 1) % n].x - p.x, path[(i + 1) % n].z - p.z);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g.setIndex(idx); g.computeVertexNormals();
  return g;
}
// Scenery is split into ~80 m cells. Each cell is its own batch, so the graphics card skips whatever is off-screen
// and the game hides whatever is beyond the draw distance.
let CULL = [];
function instanced(geo, mat, list, shadow = true) {
  if (list.length > 50) { const cells = new Map(); for (const t of list) { const k = Math.floor(t.x / 80) + ',' + Math.floor(t.z / 80); if (!cells.has(k)) cells.set(k, []); cells.get(k).push(t); }
    if (cells.size > 1) { const g = new THREE.Group(); for (const sub of cells.values()) g.add(instanced1(geo, mat, sub, shadow)); return g; } }
  return instanced1(geo, mat, list, shadow);
}
function instanced1(geo, mat, list, shadow = true) {
  const m = new THREE.InstancedMesh(geo, mat, list.length), d = new THREE.Object3D();
  list.forEach((t, i) => { d.position.set(t.x, t.y || 0, t.z); d.rotation.set(0, t.r || 0, 0); d.scale.set(t.sx || t.s || 1, t.sy || t.s || 1, t.sz || t.s || 1); d.updateMatrix(); m.setMatrixAt(i, d.matrix); if (t.c) m.setColorAt(i, t.c); });
  m.castShadow = shadow; m.receiveShadow = true;
  if (list.length && !list.some(t => (t.sx || 1) > 8)) { let x = 0, z = 0; for (const t of list) { x += t.x; z += t.z; } CULL.push({ m, x: x / list.length, z: z / list.length }); }
  return m;
}


function buildProc(track) {
  const def = track.def, th = track.theme, hw = (def.width * 1.2) / 2, B = hw + def.runoff, G = track.group;
  CULL = []; seed = def.id.length * 7919 + 13;
  // things that move: spectators bounce, flags wave, balloons drift, light beams sweep. main calls track.tick(time) each frame.
  const uT = track.uTime = { value: 0 }, movers = []; track.fancyLights = [];
  const anim = (mat, code) => { mat.onBeforeCompile = sh => { sh.uniforms.uTime = uT; sh.vertexShader = 'uniform float uTime;\n' + sh.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\n' + code); }; return mat; };
  // ---- people: jointed figures (legs, arms, head) animated on the graphics card. Behaviours: 0 = standing and chatting,
  // 1 = fan (arms up, jumping, wilder as a car comes past), 2 = walking a beat back and forth. Everyone cheers when a car is close.
  const uHit = { value: new THREE.Vector4(1e6, 0, -99, 0) }; track.hit = (x, z) => { uHit.value.set(x, z, uT.value, 1); };      // a crash near the fence makes the people there recoil
  const CK = window.__crowdK || 1, uCar = { value: new THREE.Vector3(1e6, 0, 0) }, uCar2 = { value: new THREE.Vector3(1e6, 0, 0) };
  track.tick = (t, x, z, x2, z2) => { uT.value = t; if (x != null) { uCar.value.set(x, 0, z); uCar2.value.set(x2 ?? x, 0, z2 ?? z); } for (const f of movers) f(t); };
  const personGeo = (() => {      // a figure with rounded limbs: shirt, bare forearms, trousers, shoes, neck, head, hair or a cap
    const tag = (g, part, limb) => { const n = g.attributes.position.count; g.setAttribute('aPart', new THREE.BufferAttribute(new Float32Array(n).fill(part), 1)); g.setAttribute('aLimb', new THREE.BufferAttribute(new Float32Array(n).fill(limb), 1)); return g; };
    const cap = (r, len, x, y, z, part, limb) => tag(new THREE.CapsuleGeometry(r, len, 2, 7).translate(x, y, z), part, limb);
    const parts = [tag(new THREE.CapsuleGeometry(.165, .3, 3, 9).scale(1.18, 1, .74).translate(0, 1.1, 0), 0, 0), tag(new THREE.SphereGeometry(.17, 9, 5).scale(1.12, .7, .82).translate(0, .84, 0), 2, 0),
      tag(new THREE.CylinderGeometry(.05, .06, .09, 7).translate(0, 1.4, 0), 1, 0), tag(new THREE.SphereGeometry(.138, 10, 8).scale(1, 1.13, 1.03).translate(0, 1.54, 0), 1, 5),
      tag(new THREE.SphereGeometry(.15, 10, 5, 0, 6.2832, 0, 1.5).translate(0, 1.565, -.014), 3, 5), tag(new THREE.BoxGeometry(.2, .022, .15).translate(0, 1.6, .16), 5, 5)];
    for (const [sx, la, ll] of [[1, 1, 3], [-1, 2, 4]]) parts.push(cap(.074, .58, sx * .09, .43, 0, 2, ll), tag(new THREE.BoxGeometry(.1, .07, .23).translate(sx * .09, .035, .04), 4, ll), cap(.056, .2, sx * .25, 1.2, 0, 0, la), cap(.046, .24, sx * .25, .94, 0, 1, la));
    parts.push(tag(new THREE.BoxGeometry(.3, .2, .012).translate(-.25, .63, .1), 6, 2), tag(new THREE.BoxGeometry(.014, .34, .014).translate(-.25, .7, 0), 3, 2));
    return mergeGeometries(parts);
  })();
  const personMat = new THREE.MeshStandardMaterial({ roughness: .85 });
  personMat.onBeforeCompile = sh => { sh.uniforms.uTime = uT; sh.uniforms.uCar = uCar; sh.uniforms.uCar2 = uCar2; sh.uniforms.uHit = uHit;
    sh.vertexShader = 'uniform float uTime; uniform vec3 uCar, uCar2; uniform vec4 uHit; attribute float aPart, aLimb, aBeh, aPh, aWalk; attribute vec3 aSkin;\n' + sh.vertexShader
      .replace('#include <color_vertex>', `#include <color_vertex>
        #ifdef USE_INSTANCING_COLOR
          float capW = step(.7, fract(aPh * 13.));
          vColor.rgb = aPart < .5 ? instanceColor.rgb : aPart < 1.5 ? aSkin : aPart < 2.5 ? vec3(.10, .12, .2) + fract(aPh * 7.) * vec3(.22, .2, .14) : aPart < 3.5 ? mix(vec3(.07, .05, .04) + fract(aPh * 3.) * .32, instanceColor.rgb * .8, capW) : aPart < 4.5 ? vec3(.06) + fract(aPh * 5.) * .5 : aPart < 5.5 ? instanceColor.rgb * .8 : mix(vec3(.9, .1, .12), vec3(1., .78, .1), step(.5, fract(aPh * 29.)));
        #endif`)
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        if (aPart > 4.5 && aPart < 5.5) transformed = mix(vec3(0., 1.6, 0.), transformed, step(.7, fract(aPh * 13.)));
        if (aPart > 5.5) transformed = mix(vec3(-.25, .8, 0.), transformed, step(.62, fract(aPh * 17.)) * step(.5, aBeh) * step(aBeh, 1.5));   // some fans hold a small flag   // only cap wearers get a brim
        vec2 ip = vec2(instanceMatrix[3][0], instanceMatrix[3][2]);
        float near = max(smoothstep(46., 10., distance(ip, uCar.xz)), smoothstep(46., 10., distance(ip, uCar2.xz)));
        float ph = aPh * 6.2832, T = uTime, walk = aBeh > 1.5 ? 1. : 0.;
        float flinch = smoothstep(20., 5., distance(ip, uHit.xy)) * clamp(1. - (uTime - uHit.z) / 1.4, 0., 1.) * step(uHit.z, uTime);
        float cheer = max(flinch, aBeh > .5 && aBeh < 1.5 ? .25 + .75 * near : aBeh < .5 ? near * near * .85 : 0.);
        float side = (aLimb == 1. || aLimb == 3.) ? 1. : -1.;
        if (aLimb > .5 && aLimb < 2.5) {                       // arms pivot at the shoulder: thrown up to cheer, swung to walk, small gestures while talking
          vec3 q = transformed - vec3(side * .26, 1.3, 0.);
          float up = cheer * (2.3 + sin(T * 9. + ph + side) * .45) * side;
          float sw = walk * sin(T * 6. + ph) * .6 * side + (1. - cheer) * (1. - walk) * sin(T * 2.3 + ph * 3. + side * 1.3) * .4 * step(.45, fract(aPh * 5.));
          float cz = cos(up), sz = sin(up); q.xy = vec2(cz * q.x - sz * q.y, sz * q.x + cz * q.y);
          float cx = cos(sw), sx = sin(sw); q.yz = vec2(cx * q.y - sx * q.z, sx * q.y + cx * q.z);
          transformed = q + vec3(side * .26, 1.3, 0.);
        }
        if (aLimb > 2.5 && aLimb < 4.5) { vec3 q = transformed - vec3(0., .8, 0.); float a = walk * sin(T * 6. + ph) * .6 * side; float cx = cos(a), sx = sin(a); q.yz = vec2(cx * q.y - sx * q.z, sx * q.y + cx * q.z); transformed = q + vec3(0., .8, 0.); }
        if (aLimb > 4.5) { float a = (1. - walk) * (1. - cheer) * sin(T * 1.3 + ph * 2.) * .55; vec3 q = transformed - vec3(0., 1.5, 0.); float c2 = cos(a), s2 = sin(a); q.xz = vec2(c2 * q.x + s2 * q.z, -s2 * q.x + c2 * q.z); transformed = q + vec3(0., 1.5, 0.); }   // heads turn to a neighbour
        transformed.y += abs(sin(T * 5.5 + ph)) * .2 * cheer * (1. - flinch); transformed.z -= flinch * .5 * transformed.y; transformed.y *= 1. - flinch * .16;   // recoil: lean back and duck
        transformed.x += sin(T * 1.1 + ph) * .03 * (1. - walk);
        if (walk > .5) { float u = fract(T * .6 / max(aWalk, 1.) + aPh), tri = abs(u * 2. - 1.); transformed.xz *= (u < .5 ? -1. : 1.); transformed.z += (tri - .5) * aWalk; }`); };
  const SKIN = [0xf1c9a5, 0xd9a577, 0xa8703f, 0x7a4a2b].map(c => new THREE.Color(c));
  const personLow = (() => {      // the same figure in six boxes, for crowds that are far from the camera
    const tag = (g, part, limb) => { const n = g.attributes.position.count; g.setAttribute('aPart', new THREE.BufferAttribute(new Float32Array(n).fill(part), 1)); g.setAttribute('aLimb', new THREE.BufferAttribute(new Float32Array(n).fill(limb), 1)); return g; };
    const box = (w, h, d, x, y, z, part, limb) => tag(new THREE.BoxGeometry(w, h, d).translate(x, y, z), part, limb);
    return mergeGeometries([box(.4, .58, .25, 0, 1.1, 0, 0, 0), box(.27, .3, .27, 0, 1.55, 0, 1, 5), box(.14, .82, .17, .09, .41, 0, 2, 3), box(.14, .82, .17, -.09, .41, 0, 2, 4), box(.1, .5, .11, .26, 1.06, 0, 0, 1), box(.1, .5, .11, -.26, 1.06, 0, 0, 2)]);
  })();
  const people = all => {
    return;      /* build 54: no figures at the roadside or in the stands (the stands keep their painted crowd) */
    const cells = new Map(); for (const q of all) { const k = Math.floor(q.x / 60) + ',' + Math.floor(q.z / 60); if (!cells.has(k)) cells.set(k, []); cells.get(k).push(q); }
    for (const list of cells.values()) {
      const g = personGeo.clone(), N = list.length, beh = new Float32Array(N), ph = new Float32Array(N), sk = new Float32Array(N * 3), wk = new Float32Array(N);
      list.forEach((q, i) => { beh[i] = q.beh || 0; ph[i] = rnd(); const k = q.k || SKIN[rnd() * 4 | 0]; sk[i * 3] = k.r; sk[i * 3 + 1] = k.g; sk[i * 3 + 2] = k.b; wk[i] = q.walk || 0; if (!q.c) q.c = new THREE.Color(0xf3f4f6); const b = (q.s || 1) * 1.4; q.sx = b * (.9 + rnd() * .22); q.sz = q.sx; q.sy = b * (.94 + rnd() * .14); });   // different heights and builds
      g.setAttribute('aBeh', new THREE.InstancedBufferAttribute(beh, 1)); g.setAttribute('aPh', new THREE.InstancedBufferAttribute(ph, 1)); g.setAttribute('aSkin', new THREE.InstancedBufferAttribute(sk, 3)); g.setAttribute('aWalk', new THREE.InstancedBufferAttribute(wk, 1));
      const lo = personLow.clone(); for (const k of ['aBeh', 'aPh', 'aSkin', 'aWalk']) lo.setAttribute(k, g.getAttribute(k));
      const m = instanced1(g, personMat, list, false); m.computeBoundingSphere(); m.boundingSphere.radius += 9; m.userData.lod = [g, lo]; m.userData.cur = 0; G.add(m);
    }
  };
  const BOB = 'transformed.y += abs(sin(uTime * 3.4 + instanceMatrix[3][0] * 1.7 + instanceMatrix[3][2] * 2.3)) * .14;';
  const path = resampleClosed(def.pts, 2); track.finishPath(path);
  const n = path.length;
  let minx = 1e9, maxx = -1e9, minz = 1e9, maxz = -1e9;
  for (const p of path) { minx = Math.min(minx, p.x); maxx = Math.max(maxx, p.x); minz = Math.min(minz, p.z); maxz = Math.max(maxz, p.z); }
  const cx = (minx + maxx) / 2, cz = (minz + maxz) / 2;
  // kerbs only where a driver uses them: on the inside of each corner, around its apex (never along the outside or down the straights)
  const apexes = findApexes(path, n, hw), kerbRuns = []; track.apexes = apexes; track.kerbRuns = kerbRuns; track.refLine = apexes.ref;
  for (const a of apexes) { const nodes = [], wd = [];
    if (a.exit) { const W = 1.0; for (let q = 0; q < a.cnt; q++) { const u = Math.min(q, a.cnt - 1 - q) / 5, s = u >= 1 ? 1 : u * u * (3 - 2 * u); nodes.push((a.i0 + q) % n); wd.push(W * s); } kerbRuns.push({ side: a.side, nodes, w: wd, exit: true }); continue; }
    const W = 1.15 + .5 * Math.min(1, a.ang / 1.8);      /* sharper corners get a wider kerb */
    for (let q = -a.kb; q <= a.ka; q++) { const u = Math.min(q + a.kb, a.ka - q) / 6, s = u >= 1 ? 1 : u * u * (3 - 2 * u); nodes.push(((a.i + q) % n + n) % n); wd.push(W * s); } kerbRuns.push({ side: a.side, nodes, w: wd }); }      // each kerb tapers to nothing at both ends

  // -- physics grid, rasterised with a 2D canvas: R = road, G = inside the barriers, B = kerb band
  const cell = 0.5, pad = Math.max(30, B + 8), x0 = minx - pad, z0 = minz - pad, w = Math.ceil((maxx - minx + pad * 2) / cell), h = Math.ceil((maxz - minz + pad * 2) / cell);
  const cv = document.createElement('canvas'); cv.width = w; cv.height = h; const c = cv.getContext('2d', { willReadFrequently: true });
  c.fillStyle = '#000'; c.fillRect(0, 0, w, h); c.globalCompositeOperation = 'lighter'; c.lineJoin = c.lineCap = 'round';
  const trace = (mask) => { c.beginPath(); let pen = false; for (let i = 0; i <= n; i++) { const p = path[i % n], X = (p.x - x0) / cell, Z = (p.z - z0) / cell; if (mask && !mask[i % n]) { pen = false; continue; } if (pen) c.lineTo(X, Z); else c.moveTo(X, Z); pen = true; } c.stroke(); };
  c.strokeStyle = '#00ff00'; c.lineWidth = B * 2 / cell; trace();
  c.strokeStyle = '#ff0000'; c.lineWidth = hw * 2 / cell; trace();
  { c.fillStyle = '#0000ff'; for (const kr of kerbRuns) { c.beginPath(); kr.nodes.forEach((j, q) => { const p = path[j], o = kr.side * hw; q ? c.lineTo((p.x + p.tz * o - x0) / cell, (p.z - p.tx * o - z0) / cell) : c.moveTo((p.x + p.tz * o - x0) / cell, (p.z - p.tx * o - z0) / cell); });
      for (let q = kr.nodes.length - 1; q >= 0; q--) { const p = path[kr.nodes[q]], o = kr.side * (hw + kr.w[q]); c.lineTo((p.x + p.tz * o - x0) / cell, (p.z - p.tx * o - z0) / cell); } c.closePath(); c.fill(); } }      // the kerbs in the physics grid, same shape as the ones drawn
  // pit lane: a second strip of tarmac on the left of the start straight, inside its own wall
  const pb = def.pit === null ? null : [Math.max(60, (def.pit || [])[0] || 0), Math.max(90, (def.pit || [])[1] || 0)], nb = pb ? Math.round(pb[0] / 2) : 0, na = pb ? Math.round(pb[1] / 2) : 0;
  const inPit = i => !!pb && (i >= n - nb || i <= na), pitIdx = []; for (let i = n - nb; i <= n + na; i++) pitIdx.push(i % n);
  const offLine = (k, o) => { k.beginPath(); pitIdx.forEach((i, q) => { const p = path[i], X = (p.x + p.tz * o - x0) / cell, Z = (p.z - p.tx * o - z0) / cell; q ? k.lineTo(X, Z) : k.moveTo(X, Z); }); k.stroke(); };
  let pitPx = null; const pitWall = Math.max(B + .2, hw + 8.6);
  if (pb) {
    c.lineCap = 'butt'; c.strokeStyle = '#00ff00'; c.lineWidth = 9.2 / cell; offLine(c, hw + 4);
    const c2 = document.createElement('canvas'); c2.width = w; c2.height = h; const k2 = c2.getContext('2d', { willReadFrequently: true });
    k2.lineJoin = 'round'; k2.strokeStyle = '#fff'; k2.lineWidth = 7.6 / cell; offLine(k2, hw + 3.7); pitPx = k2.getImageData(0, 0, w, h).data;
  }
  const px = c.getImageData(0, 0, w, h).data, surf = new Uint8Array(w * h);
  for (let i = 0; i < w * h; i++) { const r = px[i * 4], g = px[i * 4 + 1], b = px[i * 4 + 2]; surf[i] = g < 128 ? WALL : r > 128 ? ROAD : pitPx && pitPx[i * 4] > 128 ? PIT : b > 128 ? KERB : GRASS; }
  track.grid = { w, h, x0, z0, cell, surf, hgt: null };
  track.audioZones = [];
  {
    // -- places where the crowd is: the start straight stands and the outside of the tightest corners. Near them the sound gets the big, bright reverb of a grandstand.
    const zone = (i, side, r, wv, kind) => { const q = path[((i % n) + n) % n]; track.audioZones.push({ x: q.x + q.tz * side, z: q.z - q.tx * side, r, w: wv, kind }); };
    zone(0, hw + 14, 70, .45, 'stand'); zone(n - 40, hw + 14, 50, .35, 'stand');
    { const picks = []; for (let i = 120; i < n - 140; i++) { const kk = Math.abs(path[i].k); if (kk > 1 / 70 && picks.every(q => Math.abs(q.i - i) > 140)) picks.push({ i, kk }); } picks.sort((a, b) => b.kk - a.kk).slice(0, 3).forEach(q => zone(q.i, -Math.sign(path[q.i].k) * (hw + 16), 44, .3, 'stand')); }
    // -- the Marina Bay footbridge: a steel truss over the longest straight, lit in neon. It is open between the beams, so the camera still sees the cars under it.
    if (def.id === 'marina') {
      let best = null, run = 0, st = 0; for (let i = 90; i < n - 130; i++) { if (Math.abs(path[i].k) < .006) { if (!run) st = i; run++; if (!best || run > best.len) best = { st, len: run }; } else run = 0; }
      if (best && best.len > 26) {
        const mi = best.st + (best.len >> 1), q = path[mi], yaw = Math.atan2(q.tx, q.tz), br = new THREE.Group(), steel = new THREE.MeshStandardMaterial({ color: 0x59606c, metalness: .7, roughness: .38 }), neon = new THREE.MeshBasicMaterial({ color: 0x31e8ff }), pink = new THREE.MeshBasicMaterial({ color: 0xff3fae }), bw = hw + 3.4, L = 26;
        const box = (w, h, d, x, y, z, mt) => { const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mt); b.position.set(x, y, z); br.add(b); return b; };
        for (const sx of [-1, 1]) { box(.7, 9, .7, sx * bw, 4.5, -L / 2, steel); box(.7, 9, .7, sx * bw, 4.5, L / 2, steel); box(.5, .55, L + .7, sx * bw, 9, 0, steel); box(.14, .14, L, sx * (bw - .3), 8.6, 0, sx > 0 ? neon : pink); }
        for (let z = -L / 2; z <= L / 2; z += 3.25) { box(bw * 2, .4, .45, 0, 9, z, steel); box(.14, .5, .14, -bw + .3, 8.55, z, neon); box(.14, .5, .14, bw - .3, 8.55, z, pink); }
        for (const sx of [-1, 1]) for (let z = -L / 2 + 1.6; z < L / 2; z += 3.25) { const d = new THREE.Mesh(new THREE.BoxGeometry(.2, .2, 4.1), steel); d.position.set(sx * bw, 6.6, z); d.rotation.x = z % 6.5 > 3 ? .62 : -.62; d.scale.y = 1; br.add(d); }
        br.position.set(q.x, 0, q.z); br.rotation.y = yaw; G.add(br); track.bridge = { x: q.x, z: q.z };
        for (const d of [-8, 0, 8]) { const qq = path[mi + d]; track.audioZones.push({ x: qq.x, z: qq.z, r: 22, w: 1, kind: 'bridge' }); }
      }
    }
  }
  track.bounds = Math.max(maxx - minx, maxz - minz) / 2 + 60;

  // -- ground
  const night = th.night, desert = def.theme === 'desert', day = def.theme === 'day';
  // Grass that reads as grass: a 1024 px texture (about 1 cm per pixel) with big soft patches, thousands of blade strokes, clover and bare soil, and a mowing pattern, plus a bump map of the blades.
  const GR = (k, W, H, bump) => { const rnd = (a, b) => a + Math.random() * (b - a), base = desert ? [206, 172, 104] : night ? [34, 40, 44] : day ? [60, 116, 42] : [62, 106, 48];
    const col = (d, a = 1) => 'rgba(' + [0, 1, 2].map(q => Math.max(0, Math.min(255, base[q] + d * (q === 1 ? 1 : q === 0 ? .8 : .5)))).map(Math.round).join(',') + ',' + a + ')';
    k.fillStyle = bump ? '#808080' : col(0); k.fillRect(0, 0, W, H);
    if (!bump) for (let q = 0; q < 70; q++) { const x = rnd(0, W), y = rnd(0, H), r = rnd(50, 200), g = k.createRadialGradient(x, y, 0, x, y, r), d = rnd(-26, 24); g.addColorStop(0, col(d, .5)); g.addColorStop(1, col(d, 0)); k.fillStyle = g; k.fillRect(x - r, y - r, r * 2, r * 2); }
    const blades = desert ? 6000 : 26000; k.lineCap = 'round';
    for (let q = 0; q < blades; q++) { const x = rnd(0, W), y = rnd(0, H), a = -Math.PI / 2 + rnd(-.9, .9), l = desert ? rnd(2, 5) : rnd(5, 12), v = rnd(-34, 30); k.strokeStyle = bump ? 'rgba(' + (v > 0 ? 255 : 0) + ',' + (v > 0 ? 255 : 0) + ',' + (v > 0 ? 255 : 0) + ',.14)' : col(v, .55); k.lineWidth = rnd(.7, 1.8); k.beginPath(); k.moveTo(x, y); k.lineTo(x + Math.cos(a) * l, y + Math.sin(a) * l); k.stroke(); }
    if (!bump && !night && !desert) { for (let q = 0; q < 260; q++) { const x = rnd(0, W), y = rnd(0, H); k.fillStyle = Math.random() < .4 ? 'rgba(236,236,210,.75)' : col(-18, .6); k.beginPath(); k.arc(x, y, rnd(1.2, 2.8), 0, 7); k.fill(); }       // clover and the odd daisy
      for (let q = 0; q < 8; q++) { const x = rnd(0, W), y = rnd(0, H), r = rnd(14, 40), g = k.createRadialGradient(x, y, 0, x, y, r); g.addColorStop(0, 'rgba(112,86,52,.55)'); g.addColorStop(1, 'rgba(112,86,52,0)'); k.fillStyle = g; k.fillRect(x - r, y - r, r * 2, r * 2); } }      // bare soil
    if (desert) for (let q = 0; q < 380; q++) { const x = rnd(0, W), y = rnd(0, H); k.fillStyle = bump ? 'rgba(255,255,255,.35)' : 'rgba(120,96,58,.5)'; k.beginPath(); k.ellipse(x, y, rnd(1, 4), rnd(.8, 2.5), rnd(0, 3), 0, 7); k.fill(); }
    if (!bump && day) { k.fillStyle = 'rgba(255,255,255,.045)'; for (let s = 0; s < 8; s += 2) k.fillRect(0, s * H / 8, W, H / 8); }      // mowing bands
  };
  const gtex = canvasTex(1024, 1024, (k, W, H) => GR(k, W, H, false), 220, 220); gtex.anisotropy = 8; const gbump = canvasTex(512, 512, (k, W, H) => GR(k, W, H, true), 220, 220); gbump.colorSpace = THREE.NoColorSpace;
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(2600, 2600), new THREE.MeshStandardMaterial({ map: gtex, bumpMap: gbump, bumpScale: 1.4, roughness: 1 }));
  ground.rotation.x = -Math.PI / 2; ground.position.set(cx, -0.02, cz); ground.receiveShadow = true; G.add(ground);

  // -- road, lines, kerbs
  // Realistic tarmac, drawn once: neutral dark grey with big tonal patches, a rubbered-in racing line with loose grit off it, stone chips in a dark binder, repair patches
  // with sealed seams, branching tar cracks and oil drips. The bump map carries the stones so they catch the light at a low angle.
  const atex = canvasTex(1024, 1024, (k, W, H) => {
    const rnd = (a, b) => a + Math.random() * (b - a); k.fillStyle = night ? '#232428' : '#4b4b4e'; k.fillRect(0, 0, W, H);
    for (let i = 0; i < 60; i++) { const x = rnd(0, W), y = rnd(0, H), r = rnd(60, 220), g = k.createRadialGradient(x, y, 0, x, y, r), dark = Math.random() < .55; g.addColorStop(0, dark ? 'rgba(0,0,0,.09)' : 'rgba(255,255,255,.05)'); g.addColorStop(1, 'rgba(0,0,0,0)'); k.fillStyle = g; k.fillRect(x - r, y - r, r * 2, r * 2); }
    for (const cx of [.3, .7]) { const g = k.createLinearGradient(W * (cx - .11), 0, W * (cx + .11), 0); g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(.5, 'rgba(0,0,0,.2)'); g.addColorStop(1, 'rgba(0,0,0,0)'); k.fillStyle = g; k.fillRect(W * (cx - .11), 0, W * .22, H); }      // the two rubbered-in grooves
    { const g = k.createLinearGradient(0, 0, W, 0); g.addColorStop(0, 'rgba(255,255,255,.07)'); g.addColorStop(.12, 'rgba(255,255,255,0)'); g.addColorStop(.88, 'rgba(255,255,255,0)'); g.addColorStop(1, 'rgba(255,255,255,.07)'); k.fillStyle = g; k.fillRect(0, 0, W, H); }      // sun-bleached, gritty edges
    for (let i = 0; i < 9000; i++) { const x = Math.random() < .5 ? rnd(0, W * .13) : rnd(W * .87, W), y = rnd(0, H), s = rnd(.6, 1.8); k.fillStyle = 'rgba(' + (150 + rnd(0, 60) | 0) + ',' + (150 + rnd(0, 55) | 0) + ',' + (150 + rnd(0, 50) | 0) + ',' + rnd(.2, .55) + ')'; k.fillRect(x, y, s, s); }      // loose grit off the line
    if (night) { k.fillStyle = 'rgba(255,255,255,.75)'; k.fillRect(W / 2 - 3, 0, 6, H * .45); }
    const im = k.getImageData(0, 0, W, H), d = im.data; for (let i = 0; i < d.length; i += 4) { const r = Math.random(), s = r < .07 ? 22 + Math.random() * 38 : r < .2 ? -18 - Math.random() * 22 : (Math.random() - .5) * 15; d[i] = Math.max(0, Math.min(255, d[i] + s)); d[i + 1] = Math.max(0, Math.min(255, d[i + 1] + s)); d[i + 2] = Math.max(0, Math.min(255, d[i + 2] + s * 1.02)); } k.putImageData(im, 0, 0);
    for (let i = 0; i < 4; i++) { const x = rnd(W * .05, W * .7), y = rnd(0, H), w = rnd(90, 320), h = rnd(120, 420); k.fillStyle = Math.random() < .6 ? 'rgba(10,10,12,.14)' : 'rgba(255,255,255,.04)'; k.fillRect(x, y, w, h); k.strokeStyle = 'rgba(8,8,10,.5)'; k.lineWidth = 2; k.strokeRect(x, y, w, h); }      // repair patches with sealed seams
    k.lineCap = 'round'; for (let i = 0; i < 14; i++) { let x = rnd(0, W), y = rnd(0, H); const wid = rnd(1, 2.4), br = [[x, y]]; k.strokeStyle = 'rgba(9,9,11,.62)'; k.lineWidth = wid; k.beginPath(); k.moveTo(x, y);
      for (let q = 0; q < 14; q++) { x += rnd(-30, 30); y += rnd(10, 42); k.lineTo(x, y); if (Math.random() < .25) br.push([x, y]); } k.stroke(); for (const [bx, by] of br.slice(1)) { let x2 = bx, y2 = by; k.lineWidth = wid * .6; k.beginPath(); k.moveTo(x2, y2); for (let q = 0; q < 6; q++) { x2 += rnd(10, 40) * (Math.random() < .5 ? -1 : 1); y2 += rnd(-10, 26); k.lineTo(x2, y2); } k.stroke(); } }      // tar cracks, with branches
    for (let i = 0; i < 14; i++) { const x = rnd(W * .2, W * .8), y = rnd(0, H), r = rnd(5, 16), g = k.createRadialGradient(x, y, 0, x, y, r); g.addColorStop(0, 'rgba(6,6,8,.4)'); g.addColorStop(1, 'rgba(6,6,8,0)'); k.fillStyle = g; k.fillRect(x - r, y - r, r * 2, r * 2); }      // oil drips
  }, 1, 1); atex.anisotropy = 8;
  const abump = canvasTex(512, 512, (k, W, H) => { k.fillStyle = '#6a6a6a'; k.fillRect(0, 0, W, H); const im = k.getImageData(0, 0, W, H), d = im.data; for (let i = 0; i < d.length; i += 4) { const v = 96 + Math.random() * 46; d[i] = d[i + 1] = d[i + 2] = v; d[i + 3] = 255; } k.putImageData(im, 0, 0);
    for (let i = 0; i < 14000; i++) { const x = Math.random() * W, y = Math.random() * H, r = .8 + Math.random() * 2.6, v = 150 + Math.random() * 100 | 0; const g = k.createRadialGradient(x, y, 0, x, y, r); g.addColorStop(0, 'rgba(' + v + ',' + v + ',' + v + ',.9)'); g.addColorStop(1, 'rgba(' + v + ',' + v + ',' + v + ',0)'); k.fillStyle = g; k.fillRect(x - r, y - r, r * 2, r * 2); } }, 1, 1); abump.colorSpace = THREE.NoColorSpace; abump.anisotropy = 8;
  const road = new THREE.Mesh(ribbon(path, hw, -hw, 0.02, 1 / 9), new THREE.MeshStandardMaterial({ map: atex, bumpMap: abump, bumpScale: .9, roughness: .84 })); road.receiveShadow = true; road.material.name = 'racetrack'; G.add(road);
  const white = new THREE.MeshStandardMaterial({ color: 0xf2f2f2, roughness: .7 });
  for (const s of [1, -1]) { const l = new THREE.Mesh(ribbon(path, s * hw - .35 + (s > 0 ? 0 : .7), s * hw - .65 + (s > 0 ? 0 : .7), 0.035, 1), white); l.receiveShadow = true; G.add(l); }
  /* Kerbs, as built on real circuits: alternating red and white blocks of equal length, a raised profile that rises from the road on a ramp, a flat top, and a steep outer face. */
  const ktex = canvasTex(64, 128, (k) => { k.fillStyle = '#c70f18'; k.fillRect(0, 0, 64, 64); k.fillStyle = '#f6f6f4'; k.fillRect(0, 64, 64, 64); k.fillStyle = 'rgba(0,0,0,.10)'; for (let i = 0; i < 160; i++) k.fillRect(Math.random() * 64, Math.random() * 128, 2, 2); }, 1, 1);
  const kmat = new THREE.MeshStandardMaterial({ map: ktex, roughness: .62, side: THREE.DoubleSide, emissive: night ? 0x331010 : 0, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });
  { const pos = [], uv = [], idx = []; let base = 0; const KH = .085, STRIPE = 1.25;
    for (const kr of kerbRuns) { let d = 0; kr.nodes.forEach((j, q) => { const p = path[j]; if (q) { const pp = path[kr.nodes[q - 1]]; d += Math.hypot(p.x - pp.x, p.z - pp.z); }
        const W = kr.w[q], hh = KH * (.3 + .7 * Math.min(1, W / .9)), v = d / (STRIPE * 2), ox = [hw - .03, hw + Math.min(.3, W * .28), hw + Math.max(W * .72, W - .12), hw + W], oy = [.03, .03 + hh, .03 + hh, .03];
        for (let c2 = 0; c2 < 4; c2++) { const o = kr.side * ox[c2]; pos.push(p.x + p.tz * o, oy[c2], p.z - p.tx * o); uv.push(c2 / 3, v); }
        if (q) { const a = base + (q - 1) * 4; for (let c2 = 0; c2 < 3; c2++) idx.push(a + c2, a + c2 + 1, a + c2 + 4, a + c2 + 1, a + c2 + 5, a + c2 + 4); } }); base += kr.nodes.length * 4; }
    if (pos.length) { const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g.setIndex(idx); g.computeVertexNormals(); const km = new THREE.Mesh(g, kmat); km.receiveShadow = true; km.castShadow = true; G.add(km); } }

  // -- barriers
  // Barriers: painted steel crash rail with a corrugated profile, bolted to posts every few metres, scuffed, streaked with rust and dirty at the foot. The bump map carries the corrugation.
  const BAR = (k, W, H, bump) => { const rnd = (a, b) => a + Math.random() * (b - a), paint = night ? '#15161c' : day ? '#2d63c4' : desert ? '#2a86c6' : '#d9d9dc', hi = night ? '#2a2c36' : day ? '#5a8de6' : desert ? '#6ab8ee' : '#ffffff', lo = night ? '#0c0d11' : day ? '#16408c' : desert ? '#14577f' : '#9a9aa0';
    k.fillStyle = bump ? '#808080' : paint; k.fillRect(0, 0, W, H);
    for (let b = 0; b < 2; b++) { const y0 = H * (.12 + b * .42), h = H * .36, g = k.createLinearGradient(0, y0, 0, y0 + h); if (bump) { g.addColorStop(0, '#303030'); g.addColorStop(.25, '#e0e0e0'); g.addColorStop(.5, '#303030'); g.addColorStop(.75, '#e0e0e0'); g.addColorStop(1, '#303030'); } else { g.addColorStop(0, lo); g.addColorStop(.25, hi); g.addColorStop(.5, paint); g.addColorStop(.75, hi); g.addColorStop(1, lo); } k.fillStyle = g; k.fillRect(0, y0, W, h); }
    if (night) { if (!bump) { k.fillStyle = '#19d3ff'; k.fillRect(0, H * .62, W, H * .05); k.fillStyle = '#ff2bd0'; k.fillRect(0, H * .2, W, H * .03); } }
    for (let p = 0; p < 2; p++) { const x = p * W / 2; k.fillStyle = bump ? '#202020' : '#1d1b1a'; k.fillRect(x, 0, W * .035, H); k.fillStyle = bump ? '#f0f0f0' : '#9a9a9a'; for (const yy of [.28, .72]) { k.beginPath(); k.arc(x + W * .017, H * yy, H * .035, 0, 7); k.fill(); } }      // posts and bolts
    if (!bump) { for (let q = 0; q < 90; q++) { const x = rnd(0, W), y = rnd(0, H); k.strokeStyle = 'rgba(255,255,255,' + rnd(.05, .16) + ')'; k.lineWidth = rnd(.6, 1.6); k.beginPath(); k.moveTo(x, y); k.lineTo(x + rnd(8, 40), y + rnd(-6, 6)); k.stroke(); }
      for (let q = 0; q < 40; q++) { const x = rnd(0, W), y = rnd(0, H); k.strokeStyle = 'rgba(0,0,0,' + rnd(.08, .2) + ')'; k.lineWidth = rnd(1, 3); k.beginPath(); k.moveTo(x, y); k.lineTo(x + rnd(10, 60), y + rnd(-4, 4)); k.stroke(); }
      for (let p = 0; p < 2; p++) { const g = k.createLinearGradient(0, 0, 0, H * .7); g.addColorStop(0, 'rgba(150,80,30,.22)'); g.addColorStop(1, 'rgba(150,80,30,0)'); k.fillStyle = g; k.fillRect(p * W / 2 + W * .035, 0, W * .02, H * .7); }
      const dg = k.createLinearGradient(0, H * .6, 0, H); dg.addColorStop(0, 'rgba(40,30,20,0)'); dg.addColorStop(1, 'rgba(40,30,20,.4)'); k.fillStyle = dg; k.fillRect(0, H * .6, W, H * .4); }
  };
  const wtex = canvasTex(512, 128, (k, W, H) => BAR(k, W, H, false)), wbump = canvasTex(512, 128, (k, W, H) => BAR(k, W, H, true)); wbump.colorSpace = THREE.NoColorSpace; wtex.anisotropy = 8;
  const wmat = new THREE.MeshStandardMaterial({ map: wtex, bumpMap: wbump, bumpScale: 2.2, side: THREE.DoubleSide, roughness: .42, metalness: .35, emissive: night ? 0xffffff : 0, emissiveMap: night ? wtex : null, emissiveIntensity: night ? 1.2 : 0 });
  for (const s of [1, -1]) { const wm = new THREE.Mesh(wallStrip(path, s > 0 ? i => inPit(i) ? pitWall : B + .2 : -(B + .2), 1.15, 1 / 6), wmat); wm.castShadow = !night; G.add(wm); }

  // -- scenery: scatter props just outside the barriers
  const isFree = (x, z, r) => { for (let a = 0; a < 8; a++) if (track.surf(x + Math.cos(a * .785) * r, z + Math.sin(a * .785) * r) !== WALL) return false; return true; };
  const spots = [];
  for (let i = 0; i < n; i += 4) for (const s of [1, -1]) {
    const p = path[i], off = s * (B + 5 + rnd() * 38), x = p.x + p.tz * off, z = p.z - p.tx * off;
    if (isFree(x, z, 5)) spots.push({ x, z, r: rnd() * 6.28, s: .8 + rnd() * .7, i });
  }
  if (night) {
    buildCity(path, n, B, isFree, rnd, G);      // the night city: real buildings with real window grids (see city.js)
    const lamp = new THREE.CylinderGeometry(.12, .16, 7, 6); lamp.translate(0, 3.5, 0);
    const bulb = new THREE.SphereGeometry(.45, 8, 6); bulb.translate(0, 7.1, 0);
    const lp = []; for (let i = 0; i < n; i += 14) { const p = path[i], off = (i % 28 ? 1 : -1) * (B + 1.2); lp.push({ x: p.x + p.tz * off, z: p.z - p.tx * off }); }
    track.lampSpots = lp;
    G.add(instanced(lamp, new THREE.MeshStandardMaterial({ color: 0x30323a }), lp, false));
    G.add(instanced(bulb, new THREE.MeshBasicMaterial({ color: new THREE.Color(0xffe2a8).multiplyScalar(3) }), lp, false));
    const cone = new THREE.ConeGeometry(3.4, 7, 14, 1, true); cone.translate(0, 3.5, 0);     // soft light pools under each lamp
    const cm = instanced(cone, new THREE.MeshBasicMaterial({ color: 0xffd9a0, transparent: true, opacity: .07, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide }), lp, false); cm.visible = false; G.add(cm);   // flat light cones looked like cut-outs from above; the lamps' glow stays
  } else {
    // Trees with real volume: an oak is a cluster of displaced foliage blobs, light on top and dark underneath, on a flared, barked trunk; a palm has a curved ringed trunk and a crown of drooping fronds.
    const tcol = (g, c) => { const n = g.attributes.position.count, a = new Float32Array(n * 3); for (let q = 0; q < n; q++) { a[q * 3] = c[0]; a[q * 3 + 1] = c[1]; a[q * 3 + 2] = c[2]; } g.setAttribute('color', new THREE.BufferAttribute(a, 3)); return g; };
    const mg = gs => mergeGeometries(gs.map(g => g.index ? g.toNonIndexed() : g), false), palm = desert || def.theme === 'coast';
    const blob = (r, x, y, z, sy, lo, hi) => { const g = new THREE.IcosahedronGeometry(r, 2), P = g.attributes.position, C = new Float32Array(P.count * 3); for (let q = 0; q < P.count; q++) { const px = P.getX(q), py = P.getY(q), pz = P.getZ(q), nz = 1 + .2 * Math.sin(px * 3.1 + pz * 2.3) * Math.cos(py * 2.7 + px * 1.3) + .08 * Math.sin(py * 7 + pz * 5); P.setXYZ(q, px * nz, py * nz * sy, pz * nz); const k = Math.max(0, Math.min(1, (py / r + 1) / 2)) * .85 + Math.random() * .1; C[q * 3] = lo[0] + (hi[0] - lo[0]) * k; C[q * 3 + 1] = lo[1] + (hi[1] - lo[1]) * k; C[q * 3 + 2] = lo[2] + (hi[2] - lo[2]) * k; } g.setAttribute('color', new THREE.BufferAttribute(C, 3)); g.translate(x, y, z); return g; };
    let trunk, crown;
    if (palm) {
      const segs = []; for (let s = 0; s < 8; s++) { const g = new THREE.CylinderGeometry(.2 - s * .008, .24 - s * .008, .78, 8); g.translate(s * .06 + (s * s) * .008, s * .76 + .39, 0); segs.push(tcol(g, s % 2 ? [.43, .32, .2] : [.52, .4, .26])); } trunk = mg(segs);
      const fr = []; for (let f = 0; f < 11; f++) { const a = f / 11 * Math.PI * 2, g = new THREE.PlaneGeometry(.7, 3.6, 1, 8), P = g.attributes.position, C = new Float32Array(P.count * 3); for (let q = 0; q < P.count; q++) { const u = (P.getY(q) + 1.8) / 3.6; P.setZ(q, -Math.pow(u, 2) * 1.5 + (Math.abs(P.getX(q)) * .25) * -1); P.setY(q, u * 3.4); P.setX(q, P.getX(q) * (1 - u * .7)); C[q * 3] = .12 + .12 * u; C[q * 3 + 1] = .34 + .22 * u; C[q * 3 + 2] = .1 + .05 * u; } g.setAttribute('color', new THREE.BufferAttribute(C, 3)); g.rotateX(-Math.PI / 2 + .35 + (f % 2) * .18); g.rotateY(a); g.translate(.6, 6.35, 0); fr.push(g); } crown = mg(fr);
    } else {
      const bk = []; const tr = new THREE.CylinderGeometry(.2, .36, 2.8, 9); tr.translate(0, 1.4, 0); bk.push(tcol(tr, [.34, .24, .15])); const fl = new THREE.ConeGeometry(.55, .5, 9, 1, true); fl.translate(0, .25, 0); bk.push(tcol(fl, [.3, .21, .13])); for (const [bx, bz, ry] of [[.5, 0, 0], [-.4, .3, 2]]) { const b = new THREE.CylinderGeometry(.07, .12, 1.6, 6); b.rotateZ(.9); b.rotateY(ry); b.translate(bx, 2.7, bz); bk.push(tcol(b, [.3, .21, .13])); } trunk = mg(bk);
      const lo = day ? [.05, .16, .04] : [.05, .14, .06], hi = day ? [.2, .44, .12] : [.1, .26, .1];
      crown = mg([blob(2.2, 0, 4.2, 0, .85, lo, hi), blob(1.55, 1.4, 3.6, .5, .85, lo, hi), blob(1.5, -1.3, 3.8, .7, .85, lo, hi), blob(1.4, .3, 5.4, -.6, .85, lo, hi), blob(1.3, -.6, 3.5, -1.3, .85, lo, hi), blob(1.2, 1.0, 4.9, 1.1, .85, lo, hi)]);
    }
    const trees = spots.filter((_, i) => desert ? i % 3 === 0 : day ? i % 11 !== 5 && i % 11 !== 8 : true);
    G.add(instanced(trunk, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1 }), trees));
    G.add(instanced(crown, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: .92, side: THREE.DoubleSide }), trees));
    if (desert) {
      const pyr = new THREE.ConeGeometry(1, 1, 4); pyr.rotateY(Math.PI / 4); pyr.translate(0, .5, 0);
      const pm = new THREE.MeshStandardMaterial({ color: 0xd2a45c, roughness: 1, flatShading: true });
      G.add(instanced(pyr, pm, [{ x: cx + 420, z: cz - 380, sx: 330, sy: 210, sz: 330 }, { x: cx + 40, z: cz - 520, sx: 280, sy: 180, sz: 280 }, { x: cx - 330, z: cz - 430, sx: 190, sy: 120, sz: 190 }], false));
      const rock = new THREE.DodecahedronGeometry(1.4, 0);
      G.add(instanced(rock, new THREE.MeshStandardMaterial({ color: 0xb08a55, roughness: 1, flatShading: true }), spots.filter((_, i) => i % 3 === 1).map(s => ({ ...s, y: .3, s: s.s * 1.4 }))));
    }
    if (def.theme === 'coast') {
      const sea = new THREE.Mesh(new THREE.PlaneGeometry(3000, 1200), new THREE.MeshStandardMaterial({ color: 0x1c6f9c, roughness: .15, metalness: .5 }));
      sea.rotation.x = -Math.PI / 2; sea.position.set(cx, 0.03, minz - B - 22 - 600); G.add(sea);
      const sand = new THREE.Mesh(new THREE.PlaneGeometry(3000, 22), new THREE.MeshStandardMaterial({ color: 0xe6cf9a, roughness: 1 }));
      sand.rotation.x = -Math.PI / 2; sand.position.set(cx, 0.01, minz - B - 11); sand.receiveShadow = true; G.add(sand);
      const bg = new THREE.BoxGeometry(1, 1, 1); bg.translate(0, .5, 0);
      const cols = [0xf1e3c8, 0xe9c9a0, 0xd9e6ec, 0xf0d2c0].map(c => new THREE.Color(c));
      const bl = []; for (let x = minx - 120; x < maxx + 120; x += 26) bl.push({ x, z: maxz + B + 40 + rnd() * 20, sx: 20, sy: 16 + rnd() * 34, sz: 18, c: cols[rnd() * 4 | 0] });
      G.add(instanced(bg, new THREE.MeshStandardMaterial({ roughness: .9 }), bl));
    }
  }
  // -- verge strip between tarmac and grass
  if (!night) { const vm = new THREE.MeshStandardMaterial({ color: desert ? 0xc49a5c : 0xa85f38, roughness: 1 }); for (const s of [1, -1]) { const v = new THREE.Mesh(ribbon(path, s > 0 ? hw + 2.2 : -hw, s > 0 ? hw : -hw - 2.2, 0.012, 1), vm); v.receiveShadow = true; G.add(v); } }
  // -- pit lane surface, boxes, crew and garage
  if (pb) {
    const mask = path.map((_, i) => inPit(i));
    const lane = new THREE.Mesh(ribbon(path, hw + 7.6, hw, .02, 1 / 12, true, mask), new THREE.MeshStandardMaterial({ color: night ? 0x34353d : 0x5c5c60, roughness: .9, name: 'racetrack' })); lane.receiveShadow = true; G.add(lane);
    const ln = new THREE.Mesh(ribbon(path, hw + .25, hw - .05, .05, 1, true, mask), new THREE.MeshStandardMaterial({ color: 0xf2c230, roughness: .7 })); G.add(ln);
    track.pitBoxes = []; const crew = [], crewCols = [0xe3262e, 0x19a7ce, 0xffc21a, 0x2fb457, 0xff7ab0, 0xf3f4f6].map(c => new THREE.Color(c));
    track.pitIn = n - nb; track.pitOut = na; track.pitHw = hw;      // where the pit lane starts and ends, and the track's half width
    for (let j = 0; j < 12; j++) {          // twelve boxes: every car on the grid has its own
      const i = ((n - Math.round(nb * .6) + j * 4) % n + n) % n, p = path[i], x = p.x + p.tz * (hw + 5), z = p.z - p.tx * (hw + 5), thb = Math.atan2(p.tx, p.tz);
      const bt = canvasTex(128, 256, (k) => { k.clearRect(0, 0, 128, 256); k.strokeStyle = '#fff'; k.lineWidth = 8; k.strokeRect(6, 6, 116, 244); k.fillStyle = 'rgba(255,255,255,.9)'; k.font = '900 70px Rubik, Arial Black, sans-serif'; k.textAlign = 'center'; k.fillText(String(j + 1), 64, 150); });
      const bm = new THREE.Mesh(new THREE.PlaneGeometry(3.4, 6.8), new THREE.MeshBasicMaterial({ map: bt, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -5, polygonOffsetUnits: -5 }));
      bm.rotation.set(-Math.PI / 2, 0, Math.PI - thb); bm.position.set(x, .06, z); G.add(bm);
      track.pitBoxes.push({ x, z, th: thb, idx: i });
      for (let q = 0; q < 3; q++) crew.push({ x: p.x + p.tz * (hw + 7.6) + p.tx * (q - 1) * 1.3, z: p.z - p.tx * (hw + 7.6) + p.tz * (q - 1) * 1.3, c: crewCols[j % 6] });
    }
    const cb = new THREE.CapsuleGeometry(.3, .75, 3, 8); cb.translate(0, .68, 0); const chd = new THREE.SphereGeometry(.27, 8, 6); chd.translate(0, 1.52, 0);
    crew.length = 0;
    crew.forEach((q, n2) => { q.beh = 0; q.r = Math.atan2(path[0].tx, path[0].tz) - Math.PI / 2 + (n2 % 3 - 1) * .5; }); people(crew);
    const p0 = path[0], gar = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.15, (nb + na) * 1.5), new THREE.MeshStandardMaterial({ color: night ? 0x2a2c33 : 0xe9e2d4, roughness: .9 }));
    gar.position.set(p0.x + p0.tz * (pitWall + 1.4), .58, p0.z - p0.tx * (pitWall + 1.4));   // a low pit wall: nothing tall here, so the fixed camera always sees the boxes gar.rotation.y = Math.atan2(p0.tx, p0.tz); gar.castShadow = gar.receiveShadow = true; G.add(gar);
    const roof = new THREE.Mesh(new THREE.BoxGeometry(9.4, .5, (nb + na) * 1.5 + 1), new THREE.MeshStandardMaterial({ color: 0x3f7a5a, roughness: .8 })); roof.position.copy(gar.position); roof.position.y = 4.85; roof.rotation.y = gar.rotation.y; roof.visible = false; G.add(roof);
  }
  // -- trackside life: spectators, sponsor boards, hay bales, support vans
  if (!def.dev) {
    const ppl = [], shirt = [0xe3262e, 0x19a7ce, 0xffc21a, 0xf3f4f6, 0x2fb457, 0xff7ab0, 0x7b3fe4].map(c => new THREE.Color(c)), skin = [0xf1c9a5, 0xd9a577, 0xa8703f, 0x7a4a2b].map(c => new THREE.Color(c));
    for (let i = 0; i < n; i++) { if (i % 64 > 46) continue; for (const s of [1, -1]) { if (s > 0 && inPit(i)) continue; for (let r = 0; r < 6; r++) { if (rnd() > .82 * CK) continue;
      const p = path[i], off = s * (B + 1.7 + r * 1.05 + rnd() * .3), x = p.x + p.tz * off + (rnd() - .5) * .8, z = p.z - p.tx * off + (rnd() - .5) * .8; if (isFree(x, z, .9)) ppl.push({ x, z, s: .92 + rnd() * .2, c: shirt[rnd() * 7 | 0], k: skin[rnd() * 4 | 0], i, sd: s, row: r }); } } }
    const body = new THREE.CapsuleGeometry(.28, .7, 3, 8); body.translate(0, .63, 0); const head = new THREE.SphereGeometry(.24, 8, 6); head.translate(0, 1.42, 0);
    // marshals in orange at every corner, flags along the fences
    const marsh = [], flags = [], fcol = [0xe3262e, 0xffc21a, 0xf3f4f6, 0x19a7ce, 0x2fb457, 0x111214].map(c => new THREE.Color(c));
    for (let i = 6; i < n; i += 9) { const p = path[i], side = p.k > 0 ? -1 : 1; if (side > 0 && inPit(i)) continue; const off = side * (B + .9), x = p.x + p.tz * off, z = p.z - p.tx * off; if (!isFree(x, z, .5)) continue;
      flags.push({ x, z, y: 0, r: Math.atan2(p.tx, p.tz) + (side > 0 ? 0 : Math.PI), c: fcol[rnd() * 6 | 0] }); if (Math.abs(p.k) > 1 / 80) marsh.push({ x: x + p.tx * 1.2, z: z + p.tz * 1.2, c: new THREE.Color(0xff7a1a) }); }
    const pole = new THREE.CylinderGeometry(.05, .05, 4.4, 5); pole.translate(0, 2.2, 0); G.add(instanced(pole, new THREE.MeshStandardMaterial({ color: 0xd8d8d8 }), flags.map(f => ({ x: f.x, z: f.z })), false));
    const fg = new THREE.PlaneGeometry(1.7, 1, 8, 1); fg.translate(.85, 3.8, 0);
    const fm = instanced(fg, anim(new THREE.MeshStandardMaterial({ side: THREE.DoubleSide, roughness: .8 }), 'transformed.z += sin(position.x * 3.5 - uTime * 6. + instanceMatrix[3][0]) * .16 * position.x; transformed.y += sin(position.x * 2. - uTime * 4.) * .04 * position.x;'), flags, false); G.add(fm);
    ppl.push(...marsh.map(m => ({ ...m, s: 1.05, k: skin[1] })));
    // who does what: the front rows are fans, further back people stand in twos and threes talking, and some stroll behind the crowd
    ppl.forEach((q, n2) => { if (q.i == null) { q.beh = 0; return; } const p = path[q.i], face = Math.atan2(p.x - q.x, p.z - q.z);
      if (q.row < 2) { q.beh = rnd() < .7 ? 1 : 0; q.r = face + (rnd() - .5) * .5; }
      else if (rnd() < .22) { q.beh = 2; q.walk = 5 + rnd() * 9; q.r = Math.atan2(p.tx, p.tz); }
      else { q.beh = rnd() < .25 ? 1 : 0; q.r = face + (n2 % 2 ? 1.25 : -1.25) * (q.beh ? .2 : 1); } });
    people(ppl);
    const brands = [['TAFHEET', '#e3262e', '#fff'], ['EGYSeal', '#f3f4f6', '#1c4ea8'], ['NILE COLA', '#1c4ea8', '#fff'], ['AMM SABER', '#ffc21a', '#17181c'], ['SCARAB OIL', '#f3f4f6', '#e3262e'], ['RA ROSSO', '#e3262e', '#ffc21a'], ['HORUS TYRES', '#17181c', '#ffc21a']];
    const wood = new THREE.MeshStandardMaterial({ color: 0x7a4326, roughness: 1 });
    brands.forEach(([txt, bg, fg], b) => {
      const i = Math.round((b + .45) * n / brands.length) % n, p = path[i], side = (p.k > 0 ? -1 : 1), off = side * ((side > 0 && inPit(i) ? pitWall + 16 : B) + 5.5), x = p.x + p.tz * off, z = p.z - p.tx * off; if (!isFree(x, z, 2.5)) return;
      const tex = canvasTex(512, 200, (k) => { k.fillStyle = bg; k.fillRect(0, 0, 512, 200); k.strokeStyle = fg; k.lineWidth = 10; k.strokeRect(14, 14, 484, 172); k.fillStyle = fg; k.font = 'italic 900 84px Rubik, Arial Black, sans-serif'; k.textAlign = 'center'; k.textBaseline = 'middle'; k.fillText(txt, 256, 106, 440); });
      const g = new THREE.Group(), board = new THREE.Mesh(new THREE.BoxGeometry(10, 3.9, .3), [wood, wood, wood, wood, new THREE.MeshStandardMaterial({ map: tex, roughness: .8 }), wood]); board.position.y = 4.4; board.castShadow = true; g.add(board);
      for (const sx of [-4, 4]) { const post = new THREE.Mesh(new THREE.BoxGeometry(.35, 2.6, .35), wood); post.position.set(sx, 1.3, -.1); post.castShadow = true; g.add(post); }
      g.position.set(x, 0, z); g.rotation.y = Math.atan2(p.x - x, p.z - z); G.add(g);
    });
    const bales = []; for (let i = 0; i < n; i += 5) { const p = path[i]; if (Math.abs(p.k) < 1 / 70) continue; const side = p.k > 0 ? -1 : 1; if (side > 0 && inPit(i)) continue; const off = side * (B + 1.3), x = p.x + p.tz * off, z = p.z - p.tx * off, r = Math.atan2(p.tx, p.tz); if (!isFree(x, z, .8)) continue; bales.push({ x, z, y: .55, r }, { x: x + p.tx * 1.6, z: z + p.tz * 1.6, y: .55, r }, { x: x + p.tx * .8, z: z + p.tz * .8, y: 1.6, r }); }
    const bale = new THREE.BoxGeometry(1.1, 1.05, 1.5, 2, 2, 2); G.add(instanced(bale, new THREE.MeshStandardMaterial({ color: 0xd8a441, roughness: 1, flatShading: true }), bales));
    if (day) { const vans = spots.filter((_, i) => i % 11 === 5).map(s => ({ x: s.x, z: s.z, y: 0, r: s.r, c: shirt[rnd() * 7 | 0] })); const vg = new THREE.BoxGeometry(2.3, 2.2, 5); vg.translate(0, 1.4, 0); G.add(instanced(vg, new THREE.MeshStandardMaterial({ roughness: .6 }), vans));
      const tents = spots.filter((_, i) => i % 11 === 8).map(s => ({ x: s.x, z: s.z, r: s.r })); const tg = new THREE.ConeGeometry(2.6, 2.6, 4); tg.translate(0, 1.3, 0); G.add(instanced(tg, new THREE.MeshStandardMaterial({ color: 0xf3efe6, roughness: 1, flatShading: true }), tents)); }
  }
  if (def.dev) { const cones = []; for (let q = 0; q < 12; q++) cones.push({ x: 20 + q * 18, z: 24 }); for (let a = 0; a < 24; a++) cones.push({ x: 110 + Math.cos(a / 24 * 6.283) * 30, z: 65 + Math.sin(a / 24 * 6.283) * 30 });
    const cg = new THREE.ConeGeometry(.35, .9, 8); cg.translate(0, .45, 0); G.add(instanced(cg, new THREE.MeshStandardMaterial({ color: 0xff6a13, roughness: .7 }), cones)); }
  // -- loose objects: braking boards before each corner, a tyre stack and cones at the apex, hay bales at the exit
  track.propSpots = [];
  if (!def.dev) { let inC = false, e = 0, best = 0, bi = 0, stack = 0;
    for (let i = 0; i < n + 30; i++) { const p = path[i % n], ak = Math.abs(p.k);
      if (!inC && ak > 1 / 70) { inC = true; e = i; best = 0; } if (inC && ak > best) { best = ak; bi = i; }
      if (inC && ak < 1 / 95) { inC = false; if (i - e < 6 || inPit(bi % n)) continue; const a = path[bi % n], ins = a.k > 0 ? 1 : -1, th = Math.atan2(a.tx, a.tz);
        for (const m of [50, 100]) { const q = path[((e - Math.round(m / 2)) % n + n) % n], o = -ins * (hw + 2.3); if (!inPit(((e - Math.round(m / 2)) % n + n) % n)) track.propSpots.push({ type: 'board', x: q.x + q.tz * o, z: q.z - q.tx * o, r: Math.atan2(q.tx, q.tz) + Math.PI }); }
        const ox = a.x + a.tz * ins * (hw + 2.6), oz = a.z - a.tx * ins * (hw + 2.6); stack++; for (let t = 0; t < 3; t++) track.propSpots.push({ type: 'tyre', x: ox, z: oz, lift: t * .26, stack });
        for (const d2 of [-3, 3]) track.propSpots.push({ type: 'cone', x: ox + a.tx * d2, z: oz + a.tz * d2, r: th });
        const x2 = path[i % n], oo = -ins * (B - 1.3); if (!inPit(i % n)) for (const d2 of [0, 1.8]) track.propSpots.push({ type: 'bale', x: x2.x + x2.tz * oo + x2.tx * d2, z: x2.z - x2.tx * oo + x2.tz * d2, r: Math.atan2(x2.tx, x2.tz) }); } } }
  // -- grandstand beside the start straight
  const p0 = path[0], crowd = canvasTex(256, 64, (k) => { k.fillStyle = '#3a3d45'; k.fillRect(0, 0, 256, 64); for (let i = 0; i < 900; i++) { k.fillStyle = `hsl(${Math.random() * 360},70%,${45 + Math.random() * 30}%)`; k.fillRect(Math.random() * 256, Math.random() * 64, 3, 4); } }, 3, 1);
  const stand = new THREE.Group(); stand.position.set(p0.x - p0.tz * (B + 3), 0, p0.z + p0.tx * (B + 3)); stand.rotation.y = Math.atan2(p0.tx, p0.tz);
  for (let i = 0; i < 5; i++) { const st = new THREE.Mesh(new THREE.BoxGeometry(2.2, 1.1 * (i + 1), 60), new THREE.MeshStandardMaterial({ map: crowd, emissive: night ? 0x555555 : 0, emissiveMap: night ? crowd : null })); st.position.set(-i * 2.2, .55 * (i + 1), 10); st.castShadow = true; stand.add(st); }
  G.add(stand);
  { // a full grandstand: people on every step, bouncing
    const sp = [], ry = stand.rotation.y, cs = Math.cos(ry), sn = Math.sin(ry), cols = [0xe3262e, 0x19a7ce, 0xffc21a, 0xf3f4f6, 0x2fb457, 0xff7ab0, 0x7b3fe4].map(c => new THREE.Color(c));
    for (let i = 0; i < 5; i++) for (let lz = -19; lz < 40; lz += .8) { if (rnd() > .88 * CK) continue; const lx = -i * 2.2 + (rnd() - .5) * .9; sp.push({ x: stand.position.x + lx * cs + lz * sn, z: stand.position.z - lx * sn + lz * cs, y: 1.1 * (i + 1), s: .9 + rnd() * .2, c: cols[rnd() * 7 | 0] }); }
    const b2 = new THREE.CapsuleGeometry(.28, .6, 3, 6); b2.translate(0, .55, 0); const h2 = new THREE.SphereGeometry(.23, 7, 5); h2.translate(0, 1.28, 0);
    sp.forEach(q => { q.beh = rnd() < .75 ? 1 : 0; q.r = ry + Math.PI / 2 + (rnd() - .5) * .4; }); people(sp);
    // hot-air balloons drifting beyond the circuit
    const bc = [[0xe3262e, 0xffc21a], [0x19a7ce, 0xf3f4f6], [0x7b3fe4, 0xff7ab0], [0x2fb457, 0xffc21a]];
    if (!night) bc.forEach(([c1, c2], i) => { const g = new THREE.Group(), env = new THREE.Mesh(new THREE.SphereGeometry(9, 12, 10), new THREE.MeshStandardMaterial({ color: c1, roughness: .7, flatShading: true })); env.scale.y = 1.2; const band = new THREE.Mesh(new THREE.CylinderGeometry(8.9, 8.9, 3, 12, 1, true), new THREE.MeshStandardMaterial({ color: c2, roughness: .7 })); const bas = new THREE.Mesh(new THREE.BoxGeometry(2.4, 2, 2.4), new THREE.MeshStandardMaterial({ color: 0x7a4326 })); bas.position.y = -14;
      g.add(env, band, bas); const a = i * 1.7 + .6, R0 = track.bounds + 70 + i * 25, bx = cx + Math.cos(a) * R0, bz = cz + Math.sin(a) * R0, by = 34 + i * 9; g.position.set(bx, by, bz); G.add(g); movers.push(t => { g.position.y = by + Math.sin(t * .25 + i) * 3; g.position.x = bx + Math.sin(t * .05 + i * 2) * 14; }); });
    // night: coloured stage lights sweep the start straight, with visible beams over the stand
    if (night) [0xff2bd0, 0x19d3ff, 0xffc21a, 0x7dff9b].forEach((col, i) => {
      const ox = stand.position.x + (-9) * cs + (i * 16 - 14) * sn, oz = stand.position.z - (-9) * sn + (i * 16 - 14) * cs;
      const L = new THREE.SpotLight(col, 420, 95, .32, .6, 1.3); L.position.set(ox, 13, oz); G.add(L, L.target); track.fancyLights.push(L);
      const beam = new THREE.Mesh(new THREE.ConeGeometry(5, 46, 12, 1, true), new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: .09, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide })); beam.geometry.translate(0, -23, 0); beam.geometry.rotateX(Math.PI); beam.position.set(ox, 13, oz); beam.visible = false; G.add(beam);
      movers.push(t => { const s = Math.sin(t * .5 + i * 1.6), q = path[((Math.round((s * .5 + .5) * 40) - 20) % n + n) % n]; L.target.position.set(q.x + p0.tz * Math.sin(t * .9 + i) * 5, 0, q.z - p0.tx * Math.sin(t * .9 + i) * 5); beam.rotation.set(Math.sin(t * .7 + i) * .5, 0, Math.cos(t * .45 + i * 2) * .5); });
    });
  }
}

export async function loadTrack(id, onProgress) {
  const def = TRACKS.find(t => t.id === id), track = new Track(def);
  buildProc(track);
  track.cullables = CULL;
  addStart(track);
  // minimap bounds
  let a = 1e9, b = -1e9, c = 1e9, d = -1e9; for (const p of track.path) { a = Math.min(a, p.x); b = Math.max(b, p.x); c = Math.min(c, p.z); d = Math.max(d, p.z); }
  track.box = { minx: a, maxx: b, minz: c, maxz: d };
  return track;
}

export function makeSky(theme) {
  const geo = new THREE.SphereGeometry(4000, 24, 12);
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: { top: { value: new THREE.Color(theme.skyTop) }, bot: { value: new THREE.Color(theme.skyBot) } },
    vertexShader: 'varying vec3 p; void main(){ p=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }',
    fragmentShader: 'varying vec3 p; uniform vec3 top; uniform vec3 bot; void main(){ float h=clamp(normalize(p).y*2.2,0.,1.); gl_FragColor=vec4(mix(bot,top,pow(h,.6)),1.);\n#include <tonemapping_fragment>\n#include <colorspace_fragment>\n }',
  });
  const m = new THREE.Mesh(geo, mat); m.renderOrder = -10; m.frustumCulled = false; return m;
}
