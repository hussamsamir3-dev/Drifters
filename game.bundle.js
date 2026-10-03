(()=>{var vf=0,zh=1,yf=2;var Ks=1,Mf=2,zr=3,Ei=0,nn=1,Vt=2,Yn=0,gs=1,ai=2,Gh=3,Hh=4,Sf=5;var Ys=100,wf=101,Tf=102,Ef=103,Af=104,Rf=200,Cf=201,Pf=202,If=203,Vh=204,Wh=205,Lf=206,Df=207,Ff=208,Nf=209,Uf=210,Of=211,kf=212,Bf=213,zf=214,Qo=0,el=1,tl=2,yr=3,nl=4,il=5,sl=6,rl=7,Sl=0,Gf=1,Hf=2,oi=0,Wa=1,qa=2,Xa=3,Js=4,ja=5,Ka=6,Ya=7,Rh="attached",Vf="detached",qh=300,bs=301,Zs=302,wl=303,Tl=304,Ja=306,gi=1e3,jn=1001,Mr=1002,Xt=1003,El=1004;var $s=1005;var jt=1006,Gr=1007;var li=1008;var Dn=1009,Xh=1010,jh=1011,Hr=1012,Al=1013,ci=1014,kn=1015,sn=1016,Rl=1017,Cl=1018,Vr=1020,Kh=35902,Yh=35899,Jh=1021,Zh=1022,Bn=1023,bi=1026,xs=1027,Pl=1028,Il=1029,_s=1030,Ll=1031;var Dl=1033,Za=33776,$a=33777,Qa=33778,eo=33779,Fl=35840,Nl=35841,Ul=35842,Ol=35843,kl=36196,Bl=37492,zl=37496,Gl=37488,Hl=37489,to=37490,Vl=37491,Wl=37808,ql=37809,Xl=37810,jl=37811,Kl=37812,Yl=37813,Jl=37814,Zl=37815,$l=37816,Ql=37817,ec=37818,tc=37819,nc=37820,ic=37821,sc=36492,rc=36494,ac=36495,oc=36283,lc=36284,no=36285,cc=36286;var Ns=2300,Us=2301,Jo=2302,Ch=2303,Ph=2400,Ih=2401,Lh=2402,Wf=2500;var $h=0,io=1,Wr=2,qf=3200;var so=0,Xf=1,Ji="",Gt="srgb",wn="srgb-linear",ya="linear",bt="srgb";var Zo=7680;var jf=519,Kf=512,Yf=513,Jf=514,hc=515,Zf=516,$f=517,uc=518,Qf=519,Qh=35044;var eu="300 es",si=2e3,Sr=2001;function Nm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Um(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function wr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ep(){let i=wr("canvas");return i.style.display="block",i}var Ud={},Tr=null;function Ma(...i){let e="THREE."+i.shift();Tr?Tr("log",e,...i):console.log(e,...i)}function tp(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ze(...i){i=tp(i);let e="THREE."+i.shift();if(Tr)Tr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Xe(...i){i=tp(i);let e="THREE."+i.shift();if(Tr)Tr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Fs(...i){let e=i.join(" ");e in Ud||(Ud[e]=!0,ze(...i))}function np(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var ip={[Qo]:el,[tl]:sl,[nl]:rl,[yr]:il,[el]:Qo,[sl]:tl,[rl]:nl,[il]:yr},xi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Od=1234567,_a=Math.PI/180,Os=180/Math.PI;function ri(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mn[i&255]+mn[i>>8&255]+mn[i>>16&255]+mn[i>>24&255]+"-"+mn[e&255]+mn[e>>8&255]+"-"+mn[e>>16&15|64]+mn[e>>24&255]+"-"+mn[t&63|128]+mn[t>>8&255]+"-"+mn[t>>16&255]+mn[t>>24&255]+mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]).toLowerCase()}function ut(i,e,t){return Math.max(e,Math.min(t,i))}function tu(i,e){return(i%e+e)%e}function Om(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function km(i,e,t){return i!==e?(t-i)/(e-i):0}function va(i,e,t){return(1-t)*i+t*e}function Bm(i,e,t,n){return va(i,e,1-Math.exp(-t*n))}function zm(i,e=1){return e-Math.abs(tu(i,e*2)-e)}function Gm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Hm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Vm(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Wm(i,e){return i+Math.random()*(e-i)}function qm(i){return i*(.5-Math.random())}function Xm(i){i!==void 0&&(Od=i);let e=Od+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function jm(i){return i*_a}function Km(i){return i*Os}function Ym(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Jm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Zm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function $m(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),p=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*h,o*c);break;default:ze("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ii(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function St(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var nu={DEG2RAD:_a,RAD2DEG:Os,generateUUID:ri,clamp:ut,euclideanModulo:tu,mapLinear:Om,inverseLerp:km,lerp:va,damp:Bm,pingpong:zm,smoothstep:Gm,smootherstep:Hm,randInt:Vm,randFloat:Wm,randFloatSpread:qm,seededRandom:Xm,degToRad:jm,radToDeg:Km,isPowerOfTwo:Ym,ceilPowerOfTwo:Jm,floorPowerOfTwo:Zm,setQuaternionFromProperEuler:$m,normalize:St,denormalize:ii},Ue=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Pn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],p=r[a+1],g=r[a+2],b=r[a+3];if(u!==b||l!==d||c!==p||h!==g){let m=l*d+c*p+h*g+u*b;m<0&&(d=-d,p=-p,g=-g,b=-b,m=-m);let f=1-o;if(m<.9995){let v=Math.acos(m),_=Math.sin(v);f=Math.sin(f*v)/_,o=Math.sin(o*v)/_,l=l*f+d*o,c=c*f+p*o,h=h*f+g*o,u=u*f+b*o}else{l=l*f+d*o,c=c*f+p*o,h=h*f+g*o,u=u*f+b*o;let v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*p-c*d,e[t+1]=l*g+h*d+c*u-o*p,e[t+2]=c*g+h*p+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:ze("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return sh.copy(this).projectOnVector(e),this.sub(sh)}reflect(e){return this.sub(sh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},sh=new U,kd=new Pn,$e=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],b=s[0],m=s[3],f=s[6],v=s[1],_=s[4],x=s[7],w=s[2],T=s[5],R=s[8];return r[0]=a*b+o*v+l*w,r[3]=a*m+o*_+l*T,r[6]=a*f+o*x+l*R,r[1]=c*b+h*v+u*w,r[4]=c*m+h*_+u*T,r[7]=c*f+h*x+u*R,r[2]=d*b+p*v+g*w,r[5]=d*m+p*_+g*T,r[8]=d*f+p*x+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,g=t*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/g;return e[0]=u*b,e[1]=(s*c-h*n)*b,e[2]=(o*n-s*a)*b,e[3]=d*b,e[4]=(h*t-s*l)*b,e[5]=(s*r-o*t)*b,e[6]=p*b,e[7]=(n*l-c*t)*b,e[8]=(a*t-n*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Fs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(rh.makeScale(e,t)),this}rotate(e){return Fs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(rh.makeRotation(-e)),this}translate(e,t){return Fs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(rh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},rh=new $e,Bd=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zd=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qm(){let i={enabled:!0,workingColorSpace:wn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===bt&&(s.r=Hi(s.r),s.g=Hi(s.g),s.b=Hi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===bt&&(s.r=vr(s.r),s.g=vr(s.g),s.b=vr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ji?ya:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Fs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Fs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[wn]:{primaries:e,whitePoint:n,transfer:ya,toXYZ:Bd,fromXYZ:zd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Gt},outputColorSpaceConfig:{drawingBufferColorSpace:Gt}},[Gt]:{primaries:e,whitePoint:n,transfer:bt,toXYZ:Bd,fromXYZ:zd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Gt}}}),i}var nt=Qm();function Hi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function vr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ar,al=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ar===void 0&&(ar=wr("canvas")),ar.width=e.width,ar.height=e.height;let s=ar.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ar}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=wr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Hi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Hi(t[n]/255)*255):t[n]=Hi(t[n]);return{data:t,width:e.width,height:e.height}}else return ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},eg=0,Er=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:eg++}),this.uuid=ri(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ah(s[a].image)):r.push(ah(s[a]))}else r=ah(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function ah(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?al.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ze("Texture: Unable to serialize Texture."),{})}var tg=0,oh=new U,tn=class i extends xi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=jn,s=jn,r=jt,a=li,o=Bn,l=Dn,c=i.DEFAULT_ANISOTROPY,h=Ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tg++}),this.uuid=ri(),this.name="",this.source=new Er(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(oh).x}get height(){return this.source.getSize(oh).y}get depth(){return this.source.getSize(oh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ze(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gi:e.x=e.x-Math.floor(e.x);break;case jn:e.x=e.x<0?0:1;break;case Mr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gi:e.y=e.y-Math.floor(e.y);break;case jn:e.y=e.y<0?0:1;break;case Mr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=qh;tn.DEFAULT_ANISOTROPY=1;var wt=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],b=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-b)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+b)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,x=(p+1)/2,w=(f+1)/2,T=(h+d)/4,R=(u+b)/4,M=(g+m)/4;return _>x&&_>w?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=T/n,r=R/n):x>w?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=T/s,r=M/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=R/r,s=M/r),this.set(n,s,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(u-b)*(u-b)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-b)/v,this.z=(d-h)/v,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ol=class extends xi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new tn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Er(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ht=class extends ol{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Sa=class extends tn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ll=class extends tn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var tt=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,l,c,h,u,d,p,g,b,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,d,p,g,b,m)}set(e,t,n,s,r,a,o,l,c,h,u,d,p,g,b,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=b,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/or.setFromMatrixColumn(e,0).length(),r=1/or.setFromMatrixColumn(e,1).length(),a=1/or.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,p=a*u,g=o*h,b=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=d-b*c,t[9]=-o*l,t[2]=b-d*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,g=c*h,b=c*u;t[0]=d+b*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=b+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,g=c*h,b=c*u;t[0]=d-b*o,t[4]=-a*u,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=b-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,p=a*u,g=o*h,b=o*u;t[0]=l*h,t[4]=g*c-p,t[8]=d*c+b,t[1]=l*u,t[5]=b*c+d,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*c,g=o*l,b=o*c;t[0]=l*h,t[4]=b-d*u,t[8]=g*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+g,t[10]=d-b*u}else if(e.order==="XZY"){let d=a*l,p=a*c,g=o*l,b=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+b,t[5]=a*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=o*h,t[10]=b*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ng,e,ig)}lookAt(e,t,n){let s=this.elements;return Nn.subVectors(e,t),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),os.crossVectors(n,Nn),os.lengthSq()===0&&(Math.abs(n.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),os.crossVectors(n,Nn)),os.normalize(),To.crossVectors(Nn,os),s[0]=os.x,s[4]=To.x,s[8]=Nn.x,s[1]=os.y,s[5]=To.y,s[9]=Nn.y,s[2]=os.z,s[6]=To.z,s[10]=Nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],b=n[6],m=n[10],f=n[14],v=n[3],_=n[7],x=n[11],w=n[15],T=s[0],R=s[4],M=s[8],A=s[12],C=s[1],I=s[5],F=s[9],z=s[13],N=s[2],H=s[6],$=s[10],ee=s[14],oe=s[3],Q=s[7],se=s[11],le=s[15];return r[0]=a*T+o*C+l*N+c*oe,r[4]=a*R+o*I+l*H+c*Q,r[8]=a*M+o*F+l*$+c*se,r[12]=a*A+o*z+l*ee+c*le,r[1]=h*T+u*C+d*N+p*oe,r[5]=h*R+u*I+d*H+p*Q,r[9]=h*M+u*F+d*$+p*se,r[13]=h*A+u*z+d*ee+p*le,r[2]=g*T+b*C+m*N+f*oe,r[6]=g*R+b*I+m*H+f*Q,r[10]=g*M+b*F+m*$+f*se,r[14]=g*A+b*z+m*ee+f*le,r[3]=v*T+_*C+x*N+w*oe,r[7]=v*R+_*I+x*H+w*Q,r[11]=v*M+_*F+x*$+w*se,r[15]=v*A+_*z+x*ee+w*le,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],b=e[7],m=e[11],f=e[15],v=l*p-c*d,_=o*p-c*u,x=o*d-l*u,w=a*p-c*h,T=a*d-l*h,R=a*u-o*h;return t*(b*v-m*_+f*x)-n*(g*v-m*w+f*T)+s*(g*_-b*w+f*R)-r*(g*x-b*T+m*R)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],b=e[13],m=e[14],f=e[15],v=t*o-n*a,_=t*l-s*a,x=t*c-r*a,w=n*l-s*o,T=n*c-r*o,R=s*c-r*l,M=h*b-u*g,A=h*m-d*g,C=h*f-p*g,I=u*m-d*b,F=u*f-p*b,z=d*f-p*m,N=v*z-_*F+x*I+w*C-T*A+R*M;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/N;return e[0]=(o*z-l*F+c*I)*H,e[1]=(s*F-n*z-r*I)*H,e[2]=(b*R-m*T+f*w)*H,e[3]=(d*T-u*R-p*w)*H,e[4]=(l*C-a*z-c*A)*H,e[5]=(t*z-s*C+r*A)*H,e[6]=(m*x-g*R-f*_)*H,e[7]=(h*R-d*x+p*_)*H,e[8]=(a*F-o*C+c*M)*H,e[9]=(n*C-t*F-r*M)*H,e[10]=(g*T-b*x+f*v)*H,e[11]=(u*x-h*T-p*v)*H,e[12]=(o*A-a*I-l*M)*H,e[13]=(t*I-n*A+s*M)*H,e[14]=(b*_-g*w-m*v)*H,e[15]=(h*w-u*_+d*v)*H,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,g=r*u,b=a*h,m=a*u,f=o*u,v=l*c,_=l*h,x=l*u,w=n.x,T=n.y,R=n.z;return s[0]=(1-(b+f))*w,s[1]=(p+x)*w,s[2]=(g-_)*w,s[3]=0,s[4]=(p-x)*T,s[5]=(1-(d+f))*T,s[6]=(m+v)*T,s[7]=0,s[8]=(g+_)*R,s[9]=(m-v)*R,s[10]=(1-(d+b))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=or.set(s[0],s[1],s[2]).length(),o=or.set(s[4],s[5],s[6]).length(),l=or.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Qn.copy(this);let c=1/a,h=1/o,u=1/l;return Qn.elements[0]*=c,Qn.elements[1]*=c,Qn.elements[2]*=c,Qn.elements[4]*=h,Qn.elements[5]*=h,Qn.elements[6]*=h,Qn.elements[8]*=u,Qn.elements[9]*=u,Qn.elements[10]*=u,t.setFromRotationMatrix(Qn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=si,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),p=(n+s)/(n-s),g,b;if(l)g=r/(a-r),b=a*r/(a-r);else if(o===si)g=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(o===Sr)g=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=si,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),p=-(n+s)/(n-s),g,b;if(l)g=1/(a-r),b=a/(a-r);else if(o===si)g=-2/(a-r),b=-(a+r)/(a-r);else if(o===Sr)g=-1/(a-r),b=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},or=new U,Qn=new tt,ng=new U(0,0,0),ig=new U(1,1,1),os=new U,To=new U,Nn=new U,Gd=new tt,Hd=new Pn,_i=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ut(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Gd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hd.setFromEuler(this),this.setFromQuaternion(Hd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};_i.DEFAULT_ORDER="XYZ";var wa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},sg=0,Vd=new U,lr=new Pn,Ui=new tt,Eo=new U,ua=new U,rg=new U,ag=new Pn,Wd=new U(1,0,0),qd=new U(0,1,0),Xd=new U(0,0,1),jd={type:"added"},og={type:"removed"},cr={type:"childadded",child:null},lh={type:"childremoved",child:null},Rt=class i extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sg++}),this.uuid=ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new U,t=new _i,n=new Pn,s=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new tt},normalMatrix:{value:new $e}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return lr.setFromAxisAngle(e,t),this.quaternion.multiply(lr),this}rotateOnWorldAxis(e,t){return lr.setFromAxisAngle(e,t),this.quaternion.premultiply(lr),this}rotateX(e){return this.rotateOnAxis(Wd,e)}rotateY(e){return this.rotateOnAxis(qd,e)}rotateZ(e){return this.rotateOnAxis(Xd,e)}translateOnAxis(e,t){return Vd.copy(e).applyQuaternion(this.quaternion),this.position.add(Vd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wd,e)}translateY(e){return this.translateOnAxis(qd,e)}translateZ(e){return this.translateOnAxis(Xd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Eo.copy(e):Eo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ua.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(ua,Eo,this.up):Ui.lookAt(Eo,ua,this.up),this.quaternion.setFromRotationMatrix(Ui),s&&(Ui.extractRotation(s.matrixWorld),lr.setFromRotationMatrix(Ui),this.quaternion.premultiply(lr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Xe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jd),cr.child=e,this.dispatchEvent(cr),cr.child=null):Xe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(og),lh.child=e,this.dispatchEvent(lh),lh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jd),cr.child=e,this.dispatchEvent(cr),cr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,e,rg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,ag,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Rt.DEFAULT_UP=new U(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Bt=class extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}},lg={type:"move"},Ar=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let b of e.hand.values()){let m=t.getJointPose(b,n),f=this._getHandJoint(c,b);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(lg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Bt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},sp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ls={h:0,s:0,l:0},Ao={h:0,s:0,l:0};function ch(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var xe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=nt.workingColorSpace){if(e=tu(e,1),t=ut(t,0,1),n=ut(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ch(a,r,e+1/3),this.g=ch(a,r,e),this.b=ch(a,r,e-1/3)}return nt.colorSpaceToWorking(this,s),this}setStyle(e,t=Gt){function n(r){r!==void 0&&parseFloat(r)<1&&ze("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ze("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){let n=sp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}copyLinearToSRGB(e){return this.r=vr(e.r),this.g=vr(e.g),this.b=vr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return nt.workingToColorSpace(gn.copy(this),e),Math.round(ut(gn.r*255,0,255))*65536+Math.round(ut(gn.g*255,0,255))*256+Math.round(ut(gn.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(gn.copy(this),t);let n=gn.r,s=gn.g,r=gn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(gn.copy(this),t),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=Gt){nt.workingToColorSpace(gn.copy(this),e);let t=gn.r,n=gn.g,s=gn.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ls),this.setHSL(ls.h+e,ls.s+t,ls.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ls),e.getHSL(Ao);let n=va(ls.h,Ao.h,t),s=va(ls.s,Ao.s,t),r=va(ls.l,Ao.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},gn=new xe;xe.NAMES=sp;var Ta=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new xe(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ks=class extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _i,this.environmentIntensity=1,this.environmentRotation=new _i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ei=new U,Oi=new U,hh=new U,ki=new U,hr=new U,ur=new U,Kd=new U,uh=new U,dh=new U,fh=new U,ph=new wt,mh=new wt,gh=new wt,fs=class i{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ei.subVectors(e,t),s.cross(ei);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ei.subVectors(s,t),Oi.subVectors(n,t),hh.subVectors(e,t);let a=ei.dot(ei),o=ei.dot(Oi),l=ei.dot(hh),c=Oi.dot(Oi),h=Oi.dot(hh),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ki.x),l.addScaledVector(a,ki.y),l.addScaledVector(o,ki.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return ph.setScalar(0),mh.setScalar(0),gh.setScalar(0),ph.fromBufferAttribute(e,t),mh.fromBufferAttribute(e,n),gh.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ph,r.x),a.addScaledVector(mh,r.y),a.addScaledVector(gh,r.z),a}static isFrontFacing(e,t,n,s){return ei.subVectors(n,t),Oi.subVectors(e,t),ei.cross(Oi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ei.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),ei.cross(Oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;hr.subVectors(s,n),ur.subVectors(r,n),uh.subVectors(e,n);let l=hr.dot(uh),c=ur.dot(uh);if(l<=0&&c<=0)return t.copy(n);dh.subVectors(e,s);let h=hr.dot(dh),u=ur.dot(dh);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(hr,a);fh.subVectors(e,r);let p=hr.dot(fh),g=ur.dot(fh);if(g>=0&&p<=g)return t.copy(r);let b=p*c-l*g;if(b<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(ur,o);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Kd.subVectors(r,s),o=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector(Kd,o);let f=1/(m+b+d);return a=b*f,o=d*f,t.copy(n).addScaledVector(hr,a).addScaledVector(ur,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Tn=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ti.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ti.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ti):ti.fromBufferAttribute(r,a),ti.applyMatrix4(e.matrixWorld),this.expandByPoint(ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ro.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ro.copy(n.boundingBox)),Ro.applyMatrix4(e.matrixWorld),this.union(Ro)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ti),ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(da),Co.subVectors(this.max,da),dr.subVectors(e.a,da),fr.subVectors(e.b,da),pr.subVectors(e.c,da),cs.subVectors(fr,dr),hs.subVectors(pr,fr),Ps.subVectors(dr,pr);let t=[0,-cs.z,cs.y,0,-hs.z,hs.y,0,-Ps.z,Ps.y,cs.z,0,-cs.x,hs.z,0,-hs.x,Ps.z,0,-Ps.x,-cs.y,cs.x,0,-hs.y,hs.x,0,-Ps.y,Ps.x,0];return!bh(t,dr,fr,pr,Co)||(t=[1,0,0,0,1,0,0,0,1],!bh(t,dr,fr,pr,Co))?!1:(Po.crossVectors(cs,hs),t=[Po.x,Po.y,Po.z],bh(t,dr,fr,pr,Co))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Bi=[new U,new U,new U,new U,new U,new U,new U,new U],ti=new U,Ro=new Tn,dr=new U,fr=new U,pr=new U,cs=new U,hs=new U,Ps=new U,da=new U,Co=new U,Po=new U,Is=new U;function bh(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Is.fromArray(i,r);let o=s.x*Math.abs(Is.x)+s.y*Math.abs(Is.y)+s.z*Math.abs(Is.z),l=e.dot(Is),c=t.dot(Is),h=n.dot(Is);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Qt=new U,Io=new Ue,cg=0,Ut=class extends xi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Qh,this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Io.fromBufferAttribute(this,t),Io.applyMatrix3(e),this.setXY(t,Io.x,Io.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ii(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=St(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ii(t,this.array)),t}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ii(t,this.array)),t}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ii(t,this.array)),t}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ii(t,this.array)),t}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),s=St(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),s=St(s,this.array),r=St(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Ea=class extends Ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Aa=class extends Ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var it=class extends Ut{constructor(e,t,n){super(new Float32Array(e),t,n)}},hg=new Tn,fa=new U,xh=new U,In=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):hg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fa.subVectors(e,this.center);let t=fa.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(fa,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fa.copy(e.center).add(xh)),this.expandByPoint(fa.copy(e.center).sub(xh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ug=0,Xn=new tt,_h=new Rt,mr=new U,Un=new Tn,pa=new Tn,ln=new U,xt=class i extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ug++}),this.uuid=ri(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Nm(e)?Aa:Ea)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $e().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Xn.makeRotationFromQuaternion(e),this.applyMatrix4(Xn),this}rotateX(e){return Xn.makeRotationX(e),this.applyMatrix4(Xn),this}rotateY(e){return Xn.makeRotationY(e),this.applyMatrix4(Xn),this}rotateZ(e){return Xn.makeRotationZ(e),this.applyMatrix4(Xn),this}translate(e,t,n){return Xn.makeTranslation(e,t,n),this.applyMatrix4(Xn),this}scale(e,t,n){return Xn.makeScale(e,t,n),this.applyMatrix4(Xn),this}lookAt(e){return _h.lookAt(e),_h.updateMatrix(),this.applyMatrix4(_h.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mr).negate(),this.translate(mr.x,mr.y,mr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new it(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Un.setFromBufferAttribute(r),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new In);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let n=this.boundingSphere.center;if(Un.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];pa.setFromBufferAttribute(o),this.morphTargetsRelative?(ln.addVectors(Un.min,pa.min),Un.expandByPoint(ln),ln.addVectors(Un.max,pa.max),Un.expandByPoint(ln)):(Un.expandByPoint(pa.min),Un.expandByPoint(pa.max))}Un.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)ln.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(ln));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ln.fromBufferAttribute(o,c),l&&(mr.fromBufferAttribute(e,c),ln.add(mr)),s=Math.max(s,n.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ut(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let M=0;M<n.count;M++)o[M]=new U,l[M]=new U;let c=new U,h=new U,u=new U,d=new Ue,p=new Ue,g=new Ue,b=new U,m=new U;function f(M,A,C){c.fromBufferAttribute(n,M),h.fromBufferAttribute(n,A),u.fromBufferAttribute(n,C),d.fromBufferAttribute(r,M),p.fromBufferAttribute(r,A),g.fromBufferAttribute(r,C),h.sub(c),u.sub(c),p.sub(d),g.sub(d);let I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(b.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(I),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(I),o[M].add(b),o[A].add(b),o[C].add(b),l[M].add(m),l[A].add(m),l[C].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let M=0,A=v.length;M<A;++M){let C=v[M],I=C.start,F=C.count;for(let z=I,N=I+F;z<N;z+=3)f(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let _=new U,x=new U,w=new U,T=new U;function R(M){w.fromBufferAttribute(s,M),T.copy(w);let A=o[M];_.copy(A),_.sub(w.multiplyScalar(w.dot(A))).normalize(),x.crossVectors(T,A);let I=x.dot(l[M])<0?-1:1;a.setXYZW(M,_.x,_.y,_.z,I)}for(let M=0,A=v.length;M<A;++M){let C=v[M],I=C.start,F=C.count;for(let z=I,N=I+F;z<N;z+=3)R(e.getX(z+0)),R(e.getX(z+1)),R(e.getX(z+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new U,r=new U,a=new U,o=new U,l=new U,c=new U,h=new U,u=new U;if(e)for(let d=0,p=e.count;d<p;d+=3){let g=e.getX(d+0),b=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,g=0;for(let b=0,m=l.length;b<m;b++){o.isInterleavedBufferAttribute?p=l[b]*o.data.stride+o.offset:p=l[b]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new Ut(d,h,u)}if(this.index===null)return ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=e(d,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Qh,this.updateRanges=[],this.version=0,this.uuid=ri()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Sn=new U,Cr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.applyMatrix4(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.applyNormalMatrix(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.transformDirection(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ii(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=St(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ii(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ii(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ii(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ii(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array),s=St(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array),s=St(s,this.array),r=St(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ma("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ut(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ma("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},vh=new U,dg=new U,fg=new $e,ni=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=vh.subVectors(n,t).cross(dg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(vh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||fg.getNormalMatrix(e),s=this.coplanarPoint(vh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},pg=0,En=class extends xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pg++}),this.uuid=ri(),this.name="",this.type="Material",this.blending=gs,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vh,this.blendDst=Wh,this.blendEquation=Ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zo,this.stencilZFail=Zo,this.stencilZPass=Zo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ze(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new xe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new ni().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ue().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ue().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var zi=new U,yh=new U,Lo=new U,Do=new U,Bs=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zi.copy(this.origin).addScaledVector(this.direction,t),zi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){yh.copy(e).add(t).multiplyScalar(.5),Lo.copy(t).sub(e).normalize(),Do.copy(this.origin).sub(yh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Lo),o=Do.dot(this.direction),l=-Do.dot(Lo),c=Do.lengthSq(),h=Math.abs(1-a*a),u,d,p,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let b=1/h;u*=b,d*=b,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(yh).addScaledVector(Lo,d),p}intersectSphere(e,t){if(e.radius<0)return null;zi.subVectors(e.center,this.origin);let n=zi.dot(this.direction),s=zi.dot(zi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,zi)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,p=e.z-a.z,g=t.x-a.x,b=t.y-a.y,m=t.z-a.z,f=n.x-a.x,v=n.y-a.y,_=n.z-a.z,x=Math.abs(l),w=Math.abs(c),T=Math.abs(h),R,M,A,C,I,F,z,N,H,$,ee,oe;if(x>=w&&x>=T?(A=l,F=u,H=g,oe=f,l>=0?(R=c,M=h,C=d,I=p,z=b,N=m,$=v,ee=_):(R=h,M=c,C=p,I=d,z=m,N=b,$=_,ee=v)):w>=T?(A=c,F=d,H=b,oe=v,c>=0?(R=h,M=l,C=p,I=u,z=m,N=g,$=_,ee=f):(R=l,M=h,C=u,I=p,z=g,N=m,$=f,ee=_)):(A=h,F=p,H=m,oe=_,h>=0?(R=l,M=c,C=u,I=d,z=g,N=b,$=f,ee=v):(R=c,M=l,C=d,I=u,z=b,N=g,$=v,ee=f)),A===0)return null;let Q=R/A,se=M/A,le=1/A,Se=C-Q*F,Ce=I-se*F,ft=z-Q*H,at=N-se*H,ot=$-Q*oe,Z=ee-se*oe,ne=ot*at-Z*ft,Te=Se*Z-Ce*ot,We=ft*Ce-at*Se;if(s){if(ne<0||Te<0||We<0)return null}else if((ne<0||Te<0||We<0)&&(ne>0||Te>0||We>0))return null;let Ee=ne+Te+We;if(Ee===0)return null;let Qe=le*(ne*F+Te*H+We*oe);return(Ee>0?Qe<0:Qe>0)?null:this.at(Qe/Ee,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ct=class extends En{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=Sl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Yd=new tt,Ls=new Bs,Fo=new In,Jd=new U,No=new U,Uo=new U,Oo=new U,Mh=new U,ko=new U,Zd=new U,Bo=new U,Ae=class extends Rt{constructor(e=new xt,t=new Ct){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ko.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Mh.fromBufferAttribute(u,e),a?ko.addScaledVector(Mh,h):ko.addScaledVector(Mh.sub(t),h))}t.add(ko)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fo.copy(n.boundingSphere),Fo.applyMatrix4(r),Ls.copy(e.ray).recast(e.near),!(Fo.containsPoint(Ls.origin)===!1&&(Ls.intersectSphere(Fo,Jd)===null||Ls.origin.distanceToSquared(Jd)>(e.far-e.near)**2))&&(Yd.copy(r).invert(),Ls.copy(e.ray).applyMatrix4(Yd),!(n.boundingBox!==null&&Ls.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ls)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,b=d.length;g<b;g++){let m=d[g],f=a[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,w=_;x<w;x+=3){let T=o.getX(x),R=o.getX(x+1),M=o.getX(x+2);s=zo(this,f,e,n,c,h,u,T,R,M),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),b=Math.min(o.count,p.start+p.count);for(let m=g,f=b;m<f;m+=3){let v=o.getX(m),_=o.getX(m+1),x=o.getX(m+2);s=zo(this,a,e,n,c,h,u,v,_,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,b=d.length;g<b;g++){let m=d[g],f=a[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,w=_;x<w;x+=3){let T=x,R=x+1,M=x+2;s=zo(this,f,e,n,c,h,u,T,R,M),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),b=Math.min(l.count,p.start+p.count);for(let m=g,f=b;m<f;m+=3){let v=m,_=m+1,x=m+2;s=zo(this,a,e,n,c,h,u,v,_,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function mg(i,e,t,n,s,r,a,o){let l;if(e.side===nn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Ei,o),l===null)return null;Bo.copy(o),Bo.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Bo);return c<t.near||c>t.far?null:{distance:c,point:Bo.clone(),object:i}}function zo(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,No),i.getVertexPosition(l,Uo),i.getVertexPosition(c,Oo);let h=mg(i,e,t,n,No,Uo,Oo,Zd);if(h){let u=new U;fs.getBarycoord(Zd,No,Uo,Oo,u),s&&(h.uv=fs.getInterpolatedAttribute(s,o,l,c,u,new Ue)),r&&(h.uv1=fs.getInterpolatedAttribute(r,o,l,c,u,new Ue)),a&&(h.normal=fs.getInterpolatedAttribute(a,o,l,c,u,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new U,materialIndex:0};fs.getNormal(No,Uo,Oo,d.normal),h.face=d,h.barycoord=u}return h}var ma=new wt,$d=new wt,Qd=new wt,gg=new wt,ef=new tt,Go=new U,Sh=new In,tf=new tt,wh=new Bs,Ra=class extends Ae{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Rh,this.bindMatrix=new tt,this.bindMatrixInverse=new tt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Tn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Go),this.boundingBox.expandByPoint(Go)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new In),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Go),this.boundingSphere.expandByPoint(Go)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Sh.copy(this.boundingSphere),Sh.applyMatrix4(s),e.ray.intersectsSphere(Sh)!==!1&&(tf.copy(s).invert(),wh.copy(e.ray).applyMatrix4(tf),!(this.boundingBox!==null&&wh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,wh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new wt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Rh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Vf?this.bindMatrixInverse.copy(this.bindMatrix).invert():ze("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;$d.fromBufferAttribute(s.attributes.skinIndex,e),Qd.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(ma.copy(t),t.set(0,0,0,0)):(ma.set(...t,1),t.set(0,0,0)),ma.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=Qd.getComponent(r);if(a!==0){let o=$d.getComponent(r);ef.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(gg.copy(ma).applyMatrix4(ef),a)}}return t.isVector4&&(t.w=ma.w),t.applyMatrix4(this.bindMatrixInverse)}},Pr=class extends Rt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ir=class extends tn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Xt,h=Xt,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},nf=new tt,bg=new tt,Ca=class i{constructor(e=[],t=[]){this.uuid=ri(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){ze("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new tt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new tt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:bg;nf.multiplyMatrices(o,t[r]),nf.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Ir(t,e,e,Bn,kn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(ze("Skeleton: No bone found with UUID:",r),a=new Pr),this.bones.push(a),this.boneInverses.push(new tt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},Vi=class extends Ut{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},gr=new tt,sf=new tt,Ho=[],rf=new Tn,xg=new tt,ga=new Ae,ba=new In,Wi=class extends Ae{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Vi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,xg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Tn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gr),rf.copy(e.boundingBox).applyMatrix4(gr),this.boundingBox.union(rf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new In),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gr),ba.copy(e.boundingSphere).applyMatrix4(gr),this.boundingSphere.union(ba)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(ga.geometry=this.geometry,ga.material=this.material,ga.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ba.copy(this.boundingSphere),ba.applyMatrix4(n),e.ray.intersectsSphere(ba)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,gr),sf.multiplyMatrices(n,gr),ga.matrixWorld=sf,ga.raycast(e,Ho);for(let a=0,o=Ho.length;a<o;a++){let l=Ho[a];l.instanceId=r,l.object=this,t.push(l)}Ho.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Vi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ir(new Float32Array(s*this.count),s,this.count,Pl,kn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ds=new In,_g=new Ue(.5,.5),Vo=new U,Lr=class{constructor(e=new ni,t=new ni,n=new ni,s=new ni,r=new ni,a=new ni){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=si,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],p=r[7],g=r[8],b=r[9],m=r[10],f=r[11],v=r[12],_=r[13],x=r[14],w=r[15];if(s[0].setComponents(c-a,p-h,f-g,w-v).normalize(),s[1].setComponents(c+a,p+h,f+g,w+v).normalize(),s[2].setComponents(c+o,p+u,f+b,w+_).normalize(),s[3].setComponents(c-o,p-u,f-b,w-_).normalize(),n)s[4].setComponents(l,d,m,x).normalize(),s[5].setComponents(c-l,p-d,f-m,w-x).normalize();else if(s[4].setComponents(c-l,p-d,f-m,w-x).normalize(),t===si)s[5].setComponents(c+l,p+d,f+m,w+x).normalize();else if(t===Sr)s[5].setComponents(l,d,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ds.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ds)}intersectsSprite(e){Ds.center.set(0,0,0);let t=_g.distanceTo(e.center);return Ds.radius=.7071067811865476+t,Ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ds)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Vo.x=s.normal.x>0?e.max.x:e.min.x,Vo.y=s.normal.y>0?e.max.y:e.min.y,Vo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Vo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Dr=class extends En{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},cl=new U,hl=new U,af=new tt,xa=new Bs,Wo=new In,Th=new U,of=new U,zs=class extends Rt{constructor(e=new xt,t=new Dr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)cl.fromBufferAttribute(t,s-1),hl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=cl.distanceTo(hl);e.setAttribute("lineDistance",new it(n,1))}else ze("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wo.copy(n.boundingSphere),Wo.applyMatrix4(s),Wo.radius+=r,e.ray.intersectsSphere(Wo)===!1)return;af.copy(s).invert(),xa.copy(e.ray).applyMatrix4(af);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let b=p,m=g-1;b<m;b+=c){let f=h.getX(b),v=h.getX(b+1),_=qo(this,e,xa,l,f,v,b);_&&t.push(_)}if(this.isLineLoop){let b=h.getX(g-1),m=h.getX(p),f=qo(this,e,xa,l,b,m,g-1);f&&t.push(f)}}else{let p=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let b=p,m=g-1;b<m;b+=c){let f=qo(this,e,xa,l,b,b+1,b);f&&t.push(f)}if(this.isLineLoop){let b=qo(this,e,xa,l,g-1,p,g-1);b&&t.push(b)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function qo(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(cl.fromBufferAttribute(o,s),hl.fromBufferAttribute(o,r),t.distanceSqToSegment(cl,hl,Th,of)>n)return;Th.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Th);if(!(c<e.near||c>e.far))return{distance:c,point:of.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var lf=new U,cf=new U,Gs=class extends zs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)lf.fromBufferAttribute(t,s),cf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+lf.distanceTo(cf);e.setAttribute("lineDistance",new it(n,1))}else ze("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Pa=class extends zs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Fr=class extends En{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},hf=new tt,Dh=new Bs,Xo=new In,jo=new U,ps=class extends Rt{constructor(e=new xt,t=new Fr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xo.copy(n.boundingSphere),Xo.applyMatrix4(s),Xo.radius+=r,e.ray.intersectsSphere(Xo)===!1)return;hf.copy(s).invert(),Dh.copy(e.ray).applyMatrix4(hf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=d,b=p;g<b;g++){let m=c.getX(g);jo.fromBufferAttribute(u,m),uf(jo,m,l,s,e,t,this)}}else{let d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=d,b=p;g<b;g++)jo.fromBufferAttribute(u,g),uf(jo,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function uf(i,e,t,n,s,r,a){let o=Dh.distanceSqToPoint(i);if(o<t){let l=new U;Dh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Ia=class extends tn{constructor(e=[],t=bs,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Hs=class extends tn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ms=class extends tn{constructor(e,t,n=ci,s,r,a,o=Xt,l=Xt,c,h=bi,u=1){if(h!==bi&&h!==xs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Er(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ul=class extends ms{constructor(e,t=ci,n=bs,s,r,a=Xt,o=Xt,l,c=bi){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},La=class extends tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ot=class i extends xt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new it(c,3)),this.setAttribute("normal",new it(h,3)),this.setAttribute("uv",new it(u,2));function g(b,m,f,v,_,x,w,T,R,M,A){let C=x/R,I=w/M,F=x/2,z=w/2,N=T/2,H=R+1,$=M+1,ee=0,oe=0,Q=new U;for(let se=0;se<$;se++){let le=se*I-z;for(let Se=0;Se<H;Se++){let Ce=Se*C-F;Q[b]=Ce*v,Q[m]=le*_,Q[f]=N,c.push(Q.x,Q.y,Q.z),Q[b]=0,Q[m]=0,Q[f]=T>0?1:-1,h.push(Q.x,Q.y,Q.z),u.push(Se/R),u.push(1-se/M),ee+=1}}for(let se=0;se<M;se++)for(let le=0;le<R;le++){let Se=d+le+H*se,Ce=d+le+H*(se+1),ft=d+(le+1)+H*(se+1),at=d+(le+1)+H*se;l.push(Se,Ce,at),l.push(Ce,ft,at),oe+=6}o.addGroup(p,oe,A),p+=oe,d+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Vs=class i extends xt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=t/2,u=Math.PI/2*e,d=t,p=2*u+d,g=n*2+r,b=s+1,m=new U,f=new U;for(let v=0;v<=g;v++){let _=0,x=0,w=0,T=0;if(v<=n){let A=v/n,C=A*Math.PI/2;x=-h-e*Math.cos(C),w=e*Math.sin(C),T=-e*Math.cos(C),_=A*u}else if(v<=n+r){let A=(v-n)/r;x=-h+A*t,w=e,T=0,_=u+A*d}else{let A=(v-n-r)/n,C=A*Math.PI/2;x=h+e*Math.sin(C),w=e*Math.cos(C),T=e*Math.sin(C),_=u+d+A*u}let R=Math.max(0,Math.min(1,_/p)),M=0;v===0?M=.5/s:v===g&&(M=-.5/s);for(let A=0;A<=s;A++){let C=A/s,I=C*Math.PI*2,F=Math.sin(I),z=Math.cos(I);f.x=-w*z,f.y=x,f.z=w*F,o.push(f.x,f.y,f.z),m.set(-w*z,T,w*F),m.normalize(),l.push(m.x,m.y,m.z),c.push(C+M,R)}if(v>0){let A=(v-1)*b;for(let C=0;C<s;C++){let I=A+C,F=A+C+1,z=v*b+C,N=v*b+C+1;a.push(I,F,z),a.push(F,N,z)}}}this.setIndex(a),this.setAttribute("position",new it(o,3)),this.setAttribute("normal",new it(l,3)),this.setAttribute("uv",new it(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Ws=class i extends xt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new U,h=new Ue;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=n+u/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new it(a,3)),this.setAttribute("normal",new it(o,3)),this.setAttribute("uv",new it(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},On=class i extends xt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],g=0,b=[],m=n/2,f=0;v(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new it(u,3)),this.setAttribute("normal",new it(d,3)),this.setAttribute("uv",new it(p,2));function v(){let x=new U,w=new U,T=0,R=(t-e)/n;for(let M=0;M<=r;M++){let A=[],C=M/r,I=C*(t-e)+e;for(let F=0;F<=s;F++){let z=F/s,N=z*l+o,H=Math.sin(N),$=Math.cos(N);w.x=I*H,w.y=-C*n+m,w.z=I*$,u.push(w.x,w.y,w.z),x.set(H,R,$).normalize(),d.push(x.x,x.y,x.z),p.push(z,1-C),A.push(g++)}b.push(A)}for(let M=0;M<s;M++)for(let A=0;A<r;A++){let C=b[A][M],I=b[A+1][M],F=b[A+1][M+1],z=b[A][M+1];(e>0||A!==0)&&(h.push(C,I,z),T+=3),(t>0||A!==r-1)&&(h.push(I,F,z),T+=3)}c.addGroup(f,T,0),f+=T}function _(x){let w=g,T=new Ue,R=new U,M=0,A=x===!0?e:t,C=x===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,m*C,0),d.push(0,C,0),p.push(.5,.5),g++;let I=g;for(let F=0;F<=s;F++){let N=F/s*l+o,H=Math.cos(N),$=Math.sin(N);R.x=A*$,R.y=m*C,R.z=A*H,u.push(R.x,R.y,R.z),d.push(0,C,0),T.x=H*.5+.5,T.y=$*.5*C+.5,p.push(T.x,T.y),g++}for(let F=0;F<s;F++){let z=w+F,N=I+F;x===!0?h.push(N,N+1,z):h.push(N+1,N,z),M+=3}c.addGroup(f,M,x===!0?1:2),f+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Kn=class i extends On{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Nr=class i extends xt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new it(r,3)),this.setAttribute("normal",new it(r.slice(),3)),this.setAttribute("uv",new it(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let _=new U,x=new U,w=new U;for(let T=0;T<t.length;T+=3)p(t[T+0],_),p(t[T+1],x),p(t[T+2],w),l(_,x,w,v)}function l(v,_,x,w){let T=w+1,R=[];for(let M=0;M<=T;M++){R[M]=[];let A=v.clone().lerp(x,M/T),C=_.clone().lerp(x,M/T),I=T-M;for(let F=0;F<=I;F++)F===0&&M===T?R[M][F]=A:R[M][F]=A.clone().lerp(C,F/I)}for(let M=0;M<T;M++)for(let A=0;A<2*(T-M)-1;A++){let C=Math.floor(A/2);A%2===0?(d(R[M][C+1]),d(R[M+1][C]),d(R[M][C])):(d(R[M][C+1]),d(R[M+1][C+1]),d(R[M+1][C]))}}function c(v){let _=new U;for(let x=0;x<r.length;x+=3)_.x=r[x+0],_.y=r[x+1],_.z=r[x+2],_.normalize().multiplyScalar(v),r[x+0]=_.x,r[x+1]=_.y,r[x+2]=_.z}function h(){let v=new U;for(let _=0;_<r.length;_+=3){v.x=r[_+0],v.y=r[_+1],v.z=r[_+2];let x=m(v)/2/Math.PI+.5,w=f(v)/Math.PI+.5;a.push(x,1-w)}g(),u()}function u(){for(let v=0;v<a.length;v+=6){let _=a[v+0],x=a[v+2],w=a[v+4],T=Math.max(_,x,w),R=Math.min(_,x,w);T>.9&&R<.1&&(_<.2&&(a[v+0]+=1),x<.2&&(a[v+2]+=1),w<.2&&(a[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function p(v,_){let x=v*3;_.x=e[x+0],_.y=e[x+1],_.z=e[x+2]}function g(){let v=new U,_=new U,x=new U,w=new U,T=new Ue,R=new Ue,M=new Ue;for(let A=0,C=0;A<r.length;A+=9,C+=6){v.set(r[A+0],r[A+1],r[A+2]),_.set(r[A+3],r[A+4],r[A+5]),x.set(r[A+6],r[A+7],r[A+8]),T.set(a[C+0],a[C+1]),R.set(a[C+2],a[C+3]),M.set(a[C+4],a[C+5]),w.copy(v).add(_).add(x).divideScalar(3);let I=m(w);b(T,C+0,v,I),b(R,C+2,_,I),b(M,C+4,x,I)}}function b(v,_,x,w){w<0&&v.x===1&&(a[_]=v.x-1),x.x===0&&x.z===0&&(a[_]=w/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function f(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}},Da=class i extends Nr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Fa=class i extends Nr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Na=class i extends Nr{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},bn=class i extends xt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,p=[],g=[],b=[],m=[];for(let f=0;f<h;f++){let v=f*d-a;for(let _=0;_<c;_++){let x=_*u-r;g.push(x,-v,0),b.push(0,0,1),m.push(_/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<o;v++){let _=v+c*f,x=v+c*(f+1),w=v+1+c*(f+1),T=v+1+c*f;p.push(_,x,T),p.push(x,w,T)}this.setIndex(p),this.setAttribute("position",new it(g,3)),this.setAttribute("normal",new it(b,3)),this.setAttribute("uv",new it(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var vi=class i extends xt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new U,d=new U,p=[],g=[],b=[],m=[];for(let f=0;f<=n;f++){let v=[],_=f/n,x=a+_*o,w=e*Math.cos(x),T=Math.sqrt(e*e-w*w),R=0;f===0&&a===0?R=.5/t:f===n&&l===Math.PI&&(R=-.5/t);for(let M=0;M<=t;M++){let A=M/t,C=s+A*r;u.x=-T*Math.cos(C),u.y=w,u.z=T*Math.sin(C),g.push(u.x,u.y,u.z),d.copy(u).normalize(),b.push(d.x,d.y,d.z),m.push(A+R,1-_),v.push(c++)}h.push(v)}for(let f=0;f<n;f++)for(let v=0;v<t;v++){let _=h[f][v+1],x=h[f][v],w=h[f+1][v],T=h[f+1][v+1];(f!==0||a>0)&&p.push(_,x,T),(f!==n-1||l<Math.PI)&&p.push(x,w,T)}this.setIndex(p),this.setAttribute("position",new it(g,3)),this.setAttribute("normal",new it(b,3)),this.setAttribute("uv",new it(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ua=class i extends xt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],u=[],d=new U,p=new U,g=new U;for(let b=0;b<=n;b++){let m=a+b/n*o;for(let f=0;f<=s;f++){let v=f/s*r;p.x=(e+t*Math.cos(m))*Math.cos(v),p.y=(e+t*Math.cos(m))*Math.sin(v),p.z=t*Math.sin(m),c.push(p.x,p.y,p.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),g.subVectors(p,d).normalize(),h.push(g.x,g.y,g.z),u.push(f/s),u.push(b/n)}}for(let b=1;b<=n;b++)for(let m=1;m<=s;m++){let f=(s+1)*b+m-1,v=(s+1)*(b-1)+m-1,_=(s+1)*(b-1)+m,x=(s+1)*b+m;l.push(f,v,x),l.push(v,_,x)}this.setIndex(l),this.setAttribute("position",new it(c,3)),this.setAttribute("normal",new it(h,3)),this.setAttribute("uv",new it(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Qs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(df(s))s.isRenderTargetTexture?(ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(df(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function xn(i){let e={};for(let t=0;t<i.length;t++){let n=Qs(i[t]);for(let s in n)e[s]=n[s]}return e}function df(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function vg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function iu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}var Zi={clone:Qs,merge:xn},yg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Lt=class extends En{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yg,this.fragmentShader=Mg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qs(e.uniforms),this.uniformsGroups=vg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new xe().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ue().fromArray(s.value);break;case"v3":this.uniforms[n].value=new U().fromArray(s.value);break;case"v4":this.uniforms[n].value=new wt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new $e().fromArray(s.value);break;case"m4":this.uniforms[n].value=new tt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ur=class extends Lt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Re=class extends En{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=so,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},cn=class extends Re{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Oa=class extends En{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=so,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=Sl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},dl=class extends En{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},fl=class extends En{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ds(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function $o(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function Sg(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function ff(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function wg(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var yi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},pl=class extends yi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ph,endingEnd:Ph}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ih:r=e,o=2*t-n;break;case Lh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ih:a=e,l=2*n-t;break;case Lh:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),b=g*g,m=b*g,f=-d*m+2*d*b-d*g,v=(1+d)*m+(-1.5-2*d)*b+(-.5+d)*g+1,_=(-1-p)*m+(1.5+p)*b+.5*g,x=p*m-p*b;for(let w=0;w!==o;++w)r[w]=f*a[h+w]+v*a[c+w]+_*a[l+w]+x*a[u+w];return r}},ml=class extends yi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},gl=class extends yi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},bl=class extends yi{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(n-t)/(s-t),b=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*b+a[l+m]*g;return r}let d=o*2,p=e-1;for(let g=0;g!==o;++g){let b=a[c+g],m=a[l+g],f=p*d+g*2,v=u[f],_=u[f+1],x=e*d+g*2,w=h[x],T=h[x+1],R=Eg(n,t,v,w,s);r[g]=rp(R,b,_,T,m)}return r}};function rp(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Tg(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Eg(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=rp(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Tg(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Ln=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ds(t,this.TimeBufferType),this.values=ds(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ds(e.times,Array),values:ds(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),$o(e.settings)&&(n.settings={inTangents:ds(e.settings.inTangents,Array),outTangents:ds(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new gl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ml(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new pl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new bl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ns:t=this.InterpolantFactoryMethodDiscrete;break;case Us:t=this.InterpolantFactoryMethodLinear;break;case Jo:t=this.InterpolantFactoryMethodSmooth;break;case Ch:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ze("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ns;case this.InterpolantFactoryMethodLinear:return Us;case this.InterpolantFactoryMethodSmooth:return Jo;case this.InterpolantFactoryMethodBezier:return Ch}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;$o(this.settings)&&(pf(this.settings.inTangents,e),pf(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Xe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Xe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Xe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Xe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Um(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Xe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Jo,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,d=u-n,p=u+n;for(let g=0;g!==n;++g){let b=t[u+g];if(b!==t[d+g]||b!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let p=0;p!==n;++p)t[d+p]=t[u+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,$o(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function pf(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Ln.prototype.ValueTypeName="";Ln.prototype.TimeBufferType=Float32Array;Ln.prototype.ValueBufferType=Float32Array;Ln.prototype.DefaultInterpolation=Us;var qi=class extends Ln{constructor(e,t,n){super(e,t,n)}};qi.prototype.ValueTypeName="bool";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=Ns;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;var ka=class extends Ln{constructor(e,t,n,s){super(e,t,n,s)}};ka.prototype.ValueTypeName="color";var Xi=class extends Ln{constructor(e,t,n,s){super(e,t,n,s)}};Xi.prototype.ValueTypeName="number";var xl=class extends yi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Pn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Mi=class extends Ln{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new xl(this.times,this.values,this.getValueSize(),e)}};Mi.prototype.ValueTypeName="quaternion";Mi.prototype.InterpolantFactoryMethodSmooth=void 0;var ji=class extends Ln{constructor(e,t,n){super(e,t,n)}};ji.prototype.ValueTypeName="string";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=Ns;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;var Ki=class extends Ln{constructor(e,t,n,s){super(e,t,n,s)}};Ki.prototype.ValueTypeName="vector";var Or=class{constructor(e="",t=-1,n=[],s=Wf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=ri(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Rg(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Ln.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=Sg(l);l=ff(l,1,h),c=ff(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Xi(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Ag(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Xi;case"vector":case"vector2":case"vector3":case"vector4":return Ki;case"color":return ka;case"quaternion":return Mi;case"bool":case"boolean":return qi;case"string":return ji}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Rg(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Ag(i.type);if(i.times===void 0){let n=[],s=[];wg(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),$o(i.settings)&&(t.settings={inTangents:ds(i.settings.inTangents,Float32Array),outTangents:ds(i.settings.outTangents,Float32Array)}),t}var mi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(mf(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!mf(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function mf(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var _l=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ap=new _l,Si=class{constructor(e){this.manager=e!==void 0?e:ap,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Si.DEFAULT_MATERIAL_NAME="__DEFAULT";var Gi={},Fh=class extends Error{constructor(e,t){super(e),this.response=t}},kr=class extends Si{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=mi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Gi[e]!==void 0){Gi[e].push({onLoad:t,onProgress:n,onError:s});return}Gi[e]=[],Gi[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&ze("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Gi[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0,b=0,m=new ReadableStream({start(f){v();function v(){u.read().then(({done:_,value:x})=>{if(_)f.close();else{b+=x.byteLength;let w=new ProgressEvent("progress",{lengthComputable:g,loaded:b,total:p});for(let T=0,R=h.length;T<R;T++){let M=h[T];M.onProgress&&M.onProgress(w)}f.enqueue(x),v()}},_=>{f.error(_)})}}});return new Response(m)}else throw new Fh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{mi.add(`file:${e}`,c);let h=Gi[e];delete Gi[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{let h=Gi[e];if(h===void 0)throw this.manager.itemError(e),c;delete Gi[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var br=new WeakMap,vl=class extends Si{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=mi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=br.get(a);u===void 0&&(u=[],br.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=wr("img");function l(){h(),t&&t(this);let u=br.get(this)||[];for(let d=0;d<u.length;d++){let p=u[d];p.onLoad&&p.onLoad(this)}br.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),mi.remove(`image:${e}`);let d=br.get(this)||[];for(let p=0;p<d.length;p++){let g=d[p];g.onError&&g.onError(u)}br.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),mi.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var Ba=class extends Si{constructor(e){super(e)}load(e,t,n,s){let r=new tn,a=new vl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},qs=class extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},za=class extends qs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Eh=new tt,gf=new U,bf=new U,Br=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.mapType=Dn,this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lr,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;gf.setFromMatrixPosition(e.matrixWorld),t.position.copy(gf),bf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(bf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Eh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Eh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Sr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Eh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ko=new U,Yo=new Pn,pi=new U,Ga=class extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ko,Yo,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ko,Yo,pi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ko,Yo,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ko,Yo,pi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},us=new U,xf=new Ue,_f=new Ue,en=class extends Ga{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Os*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(_a*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Os*2*Math.atan(Math.tan(_a*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){us.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(us.x,us.y).multiplyScalar(-e/us.z),us.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(us.x,us.y).multiplyScalar(-e/us.z)}getViewSize(e,t){return this.getViewBounds(e,xf,_f),t.subVectors(_f,xf)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(_a*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Nh=class extends Br{constructor(){super(new en(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Os*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},wi=class extends qs{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Nh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Uh=class extends Br{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0}},Xs=class extends qs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Uh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ti=class extends Ga{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Oh=class extends Br{constructor(){super(new Ti(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},js=class extends qs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new Oh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Yi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Ah=new WeakMap,Ha=class extends Si{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&ze("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&ze("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=mi.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{Ah.has(a)===!0?(s&&s(Ah.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return mi.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Ah.set(l,c),mi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});mi.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var xr=-90,_r=1,yl=class extends Rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new en(xr,_r,e,t);s.layers=this.layers,this.add(s);let r=new en(xr,_r,e,t);r.layers=this.layers,this.add(r);let a=new en(xr,_r,e,t);a.layers=this.layers,this.add(a);let o=new en(xr,_r,e,t);o.layers=this.layers,this.add(o);let l=new en(xr,_r,e,t);l.layers=this.layers,this.add(l);let c=new en(xr,_r,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===si)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Sr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ml=class extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Va=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Cg.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Cg(){this._document.hidden===!1&&this.reset()}var su="\\[\\]\\.:\\/",Pg=new RegExp("["+su+"]","g"),ru="[^"+su+"]",Ig="[^"+su.replace("\\.","")+"]",Lg=/((?:WC+[\/:])*)/.source.replace("WC",ru),Dg=/(WCOD+)?/.source.replace("WCOD",Ig),Fg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ru),Ng=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ru),Ug=new RegExp("^"+Lg+Dg+Fg+Ng+"$"),Og=["material","materials","bones","map"],kh=class{constructor(e,t,n){let s=n||It.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},It=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Pg,"")}static parseTrackName(e){let t=Ug.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Og.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ze("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Xe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Xe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Xe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Xe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Xe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Xe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};It.Composite=kh;It.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};It.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};It.prototype.GetterByBindingType=[It.prototype._getValue_direct,It.prototype._getValue_array,It.prototype._getValue_arrayElement,It.prototype._getValue_toArray];It.prototype.SetterByBindingTypeAndVersioning=[[It.prototype._setValue_direct,It.prototype._setValue_direct_setNeedsUpdate,It.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[It.prototype._setValue_array,It.prototype._setValue_array_setNeedsUpdate,It.prototype._setValue_array_setMatrixWorldNeedsUpdate],[It.prototype._setValue_arrayElement,It.prototype._setValue_arrayElement_setNeedsUpdate,It.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[It.prototype._setValue_fromArray,It.prototype._setValue_fromArray_setNeedsUpdate,It.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Cy=new Float32Array(1);var Bh=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function au(i,e,t,n){let s=kg(n);switch(t){case Jh:return i*e;case Pl:return i*e/s.components*s.byteLength;case Il:return i*e/s.components*s.byteLength;case _s:return i*e*2/s.components*s.byteLength;case Ll:return i*e*2/s.components*s.byteLength;case Zh:return i*e*3/s.components*s.byteLength;case Bn:return i*e*4/s.components*s.byteLength;case Dl:return i*e*4/s.components*s.byteLength;case Za:case $a:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Qa:case eo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Nl:case Ol:return Math.max(i,16)*Math.max(e,8)/4;case Fl:case Ul:return Math.max(i,8)*Math.max(e,8)/2;case kl:case Bl:case Gl:case Hl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case zl:case to:case Vl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Wl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ql:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Xl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case jl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Kl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Yl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Zl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case $l:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ql:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ec:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case tc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case nc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ic:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case sc:case rc:case ac:return Math.ceil(i/4)*Math.ceil(e/4)*16;case oc:case lc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case no:case cc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function kg(i){switch(i){case Dn:case Xh:return{byteLength:1,components:1};case Hr:case jh:case sn:return{byteLength:2,components:1};case Rl:case Cl:return{byteLength:2,components:4};case ci:case Al:case kn:return{byteLength:4,components:1};case Kh:case Yh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Rp(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Hg(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){let g=u[d],b=u[p];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++d,u[d]=b)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){let b=u[p];i.bufferSubData(c,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Vg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,qg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Jg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,$g=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,e0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,t0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,n0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,i0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,s0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,r0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,a0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,o0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,l0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,c0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,h0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,u0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,d0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,f0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,p0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,m0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,g0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,b0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,x0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_0="gl_FragColor = linearToOutputTexel( gl_FragColor );",v0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,y0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,M0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,S0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,w0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,T0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,E0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,A0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,R0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,C0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,P0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,I0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,L0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,D0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,F0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,N0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,U0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,O0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,k0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,B0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,z0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,G0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,H0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,V0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,W0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,q0=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,X0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,j0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,K0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,J0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Z0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Q0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ib=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ab=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ob=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,lb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ub=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,db=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,fb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,_b=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Eb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ab=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Rb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Cb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ib=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Db=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ub=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ob=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Bb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Hb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Vb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Jb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Zb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$b=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Qb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ex=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ix=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ax=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ox=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,lx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ux=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,px=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,xx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_x=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rt={alphahash_fragment:Vg,alphahash_pars_fragment:Wg,alphamap_fragment:qg,alphamap_pars_fragment:Xg,alphatest_fragment:jg,alphatest_pars_fragment:Kg,aomap_fragment:Yg,aomap_pars_fragment:Jg,batching_pars_vertex:Zg,batching_vertex:$g,begin_vertex:Qg,beginnormal_vertex:e0,bsdfs:t0,iridescence_fragment:n0,bumpmap_pars_fragment:i0,clipping_planes_fragment:s0,clipping_planes_pars_fragment:r0,clipping_planes_pars_vertex:a0,clipping_planes_vertex:o0,color_fragment:l0,color_pars_fragment:c0,color_pars_vertex:h0,color_vertex:u0,common:d0,cube_uv_reflection_fragment:f0,defaultnormal_vertex:p0,displacementmap_pars_vertex:m0,displacementmap_vertex:g0,emissivemap_fragment:b0,emissivemap_pars_fragment:x0,colorspace_fragment:_0,colorspace_pars_fragment:v0,envmap_fragment:y0,envmap_common_pars_fragment:M0,envmap_pars_fragment:S0,envmap_pars_vertex:w0,envmap_physical_pars_fragment:N0,envmap_vertex:T0,fog_vertex:E0,fog_pars_vertex:A0,fog_fragment:R0,fog_pars_fragment:C0,gradientmap_pars_fragment:P0,lightmap_pars_fragment:I0,lights_lambert_fragment:L0,lights_lambert_pars_fragment:D0,lights_pars_begin:F0,lights_toon_fragment:U0,lights_toon_pars_fragment:O0,lights_phong_fragment:k0,lights_phong_pars_fragment:B0,lights_physical_fragment:z0,lights_physical_pars_fragment:G0,lights_fragment_begin:H0,lights_fragment_maps:V0,lights_fragment_end:W0,lightprobes_pars_fragment:q0,logdepthbuf_fragment:X0,logdepthbuf_pars_fragment:j0,logdepthbuf_pars_vertex:K0,logdepthbuf_vertex:Y0,map_fragment:J0,map_pars_fragment:Z0,map_particle_fragment:$0,map_particle_pars_fragment:Q0,metalnessmap_fragment:eb,metalnessmap_pars_fragment:tb,morphinstance_vertex:nb,morphcolor_vertex:ib,morphnormal_vertex:sb,morphtarget_pars_vertex:rb,morphtarget_vertex:ab,normal_fragment_begin:ob,normal_fragment_maps:lb,normal_pars_fragment:cb,normal_pars_vertex:hb,normal_vertex:ub,normalmap_pars_fragment:db,clearcoat_normal_fragment_begin:fb,clearcoat_normal_fragment_maps:pb,clearcoat_pars_fragment:mb,iridescence_pars_fragment:gb,opaque_fragment:bb,packing:xb,premultiplied_alpha_fragment:_b,project_vertex:vb,dithering_fragment:yb,dithering_pars_fragment:Mb,roughnessmap_fragment:Sb,roughnessmap_pars_fragment:wb,shadowmap_pars_fragment:Tb,shadowmap_pars_vertex:Eb,shadowmap_vertex:Ab,shadowmask_pars_fragment:Rb,skinbase_vertex:Cb,skinning_pars_vertex:Pb,skinning_vertex:Ib,skinnormal_vertex:Lb,specularmap_fragment:Db,specularmap_pars_fragment:Fb,tonemapping_fragment:Nb,tonemapping_pars_fragment:Ub,transmission_fragment:Ob,transmission_pars_fragment:kb,uv_pars_fragment:Bb,uv_pars_vertex:zb,uv_vertex:Gb,worldpos_vertex:Hb,background_vert:Vb,background_frag:Wb,backgroundCube_vert:qb,backgroundCube_frag:Xb,cube_vert:jb,cube_frag:Kb,depth_vert:Yb,depth_frag:Jb,distance_vert:Zb,distance_frag:$b,equirect_vert:Qb,equirect_frag:ex,linedashed_vert:tx,linedashed_frag:nx,meshbasic_vert:ix,meshbasic_frag:sx,meshlambert_vert:rx,meshlambert_frag:ax,meshmatcap_vert:ox,meshmatcap_frag:lx,meshnormal_vert:cx,meshnormal_frag:hx,meshphong_vert:ux,meshphong_frag:dx,meshphysical_vert:fx,meshphysical_frag:px,meshtoon_vert:mx,meshtoon_frag:gx,points_vert:bx,points_frag:xx,shadow_vert:_x,shadow_frag:vx,sprite_vert:yx,sprite_frag:Mx},ye={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},Ri={basic:{uniforms:xn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:xn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new xe(0)},envMapIntensity:{value:1}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:xn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:xn([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:xn([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new xe(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:xn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:xn([ye.points,ye.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:xn([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:xn([ye.common,ye.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:xn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:xn([ye.sprite,ye.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distance:{uniforms:xn([ye.common,ye.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distance_vert,fragmentShader:rt.distance_frag},shadow:{uniforms:xn([ye.lights,ye.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};Ri.physical={uniforms:xn([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};var dc={r:0,b:0,g:0},Sx=new tt,Cp=new $e;Cp.set(-1,0,0,0,1,0,0,0,1);function wx(i,e,t,n,s,r){let a=new xe(0),o=s===!0?0:1,l,c,h=null,u=0,d=null;function p(v){let _=v.isScene===!0?v.background:null;if(_&&_.isTexture){let x=v.backgroundBlurriness>0;_=e.get(_,x)}return _}function g(v){let _=!1,x=p(v);x===null?m(a,o):x&&x.isColor&&(m(x,1),_=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||_)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(v,_){let x=p(_);x&&(x.isCubeTexture||x.mapping===Ja)?(c===void 0&&(c=new Ae(new Ot(1,1,1),new Lt({name:"BackgroundCubeMaterial",uniforms:Qs(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Sx.makeRotationFromEuler(_.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Cp),c.material.toneMapped=nt.getTransfer(x.colorSpace)!==bt,(h!==x||u!==x.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,u=x.version,d=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Ae(new bn(2,2),new Lt({name:"BackgroundMaterial",uniforms:Qs(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=nt.getTransfer(x.colorSpace)!==bt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||u!==x.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,u=x.version,d=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,_){v.getRGB(dc,iu(i)),t.buffers.color.setClear(dc.r,dc.g,dc.b,_,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,_=1){a.set(v),o=_,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(a,o)},render:g,addToRenderList:b,dispose:f}}function Tx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(I,F,z,N,H){let $=!1,ee=u(I,N,z,F);r!==ee&&(r=ee,c(r.object)),$=p(I,N,z,H),$&&g(I,N,z,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,x(I,F,z,N),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function h(I){return i.deleteVertexArray(I)}function u(I,F,z,N){let H=N.wireframe===!0,$=n[F.id];$===void 0&&($={},n[F.id]=$);let ee=I.isInstancedMesh===!0?I.id:0,oe=$[ee];oe===void 0&&(oe={},$[ee]=oe);let Q=oe[z.id];Q===void 0&&(Q={},oe[z.id]=Q);let se=Q[H];return se===void 0&&(se=d(l()),Q[H]=se),se}function d(I){let F=[],z=[],N=[];for(let H=0;H<t;H++)F[H]=0,z[H]=0,N[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:z,attributeDivisors:N,object:I,attributes:{},index:null}}function p(I,F,z,N){let H=r.attributes,$=F.attributes,ee=0,oe=z.getAttributes();for(let Q in oe)if(oe[Q].location>=0){let le=H[Q],Se=$[Q];if(Se===void 0&&(Q==="instanceMatrix"&&I.instanceMatrix&&(Se=I.instanceMatrix),Q==="instanceColor"&&I.instanceColor&&(Se=I.instanceColor)),le===void 0||le.attribute!==Se||Se&&le.data!==Se.data)return!0;ee++}return r.attributesNum!==ee||r.index!==N}function g(I,F,z,N){let H={},$=F.attributes,ee=0,oe=z.getAttributes();for(let Q in oe)if(oe[Q].location>=0){let le=$[Q];le===void 0&&(Q==="instanceMatrix"&&I.instanceMatrix&&(le=I.instanceMatrix),Q==="instanceColor"&&I.instanceColor&&(le=I.instanceColor));let Se={};Se.attribute=le,le&&le.data&&(Se.data=le.data),H[Q]=Se,ee++}r.attributes=H,r.attributesNum=ee,r.index=N}function b(){let I=r.newAttributes;for(let F=0,z=I.length;F<z;F++)I[F]=0}function m(I){f(I,0)}function f(I,F){let z=r.newAttributes,N=r.enabledAttributes,H=r.attributeDivisors;z[I]=1,N[I]===0&&(i.enableVertexAttribArray(I),N[I]=1),H[I]!==F&&(i.vertexAttribDivisor(I,F),H[I]=F)}function v(){let I=r.newAttributes,F=r.enabledAttributes;for(let z=0,N=F.length;z<N;z++)F[z]!==I[z]&&(i.disableVertexAttribArray(z),F[z]=0)}function _(I,F,z,N,H,$,ee){ee===!0?i.vertexAttribIPointer(I,F,z,H,$):i.vertexAttribPointer(I,F,z,N,H,$)}function x(I,F,z,N){b();let H=N.attributes,$=z.getAttributes(),ee=F.defaultAttributeValues;for(let oe in $){let Q=$[oe];if(Q.location>=0){let se=H[oe];if(se===void 0&&(oe==="instanceMatrix"&&I.instanceMatrix&&(se=I.instanceMatrix),oe==="instanceColor"&&I.instanceColor&&(se=I.instanceColor)),se!==void 0){let le=se.normalized,Se=se.itemSize,Ce=e.get(se);if(Ce===void 0)continue;let ft=Ce.buffer,at=Ce.type,ot=Ce.bytesPerElement,Z=at===i.INT||at===i.UNSIGNED_INT||se.gpuType===Al;if(se.isInterleavedBufferAttribute){let ne=se.data,Te=ne.stride,We=se.offset;if(ne.isInstancedInterleavedBuffer){for(let Ee=0;Ee<Q.locationSize;Ee++)f(Q.location+Ee,ne.meshPerAttribute);I.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Ee=0;Ee<Q.locationSize;Ee++)m(Q.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,ft);for(let Ee=0;Ee<Q.locationSize;Ee++)_(Q.location+Ee,Se/Q.locationSize,at,le,Te*ot,(We+Se/Q.locationSize*Ee)*ot,Z)}else{if(se.isInstancedBufferAttribute){for(let ne=0;ne<Q.locationSize;ne++)f(Q.location+ne,se.meshPerAttribute);I.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ne=0;ne<Q.locationSize;ne++)m(Q.location+ne);i.bindBuffer(i.ARRAY_BUFFER,ft);for(let ne=0;ne<Q.locationSize;ne++)_(Q.location+ne,Se/Q.locationSize,at,le,Se*ot,Se/Q.locationSize*ne*ot,Z)}}else if(ee!==void 0){let le=ee[oe];if(le!==void 0)switch(le.length){case 2:i.vertexAttrib2fv(Q.location,le);break;case 3:i.vertexAttrib3fv(Q.location,le);break;case 4:i.vertexAttrib4fv(Q.location,le);break;default:i.vertexAttrib1fv(Q.location,le)}}}}v()}function w(){A();for(let I in n){let F=n[I];for(let z in F){let N=F[z];for(let H in N){let $=N[H];for(let ee in $)h($[ee].object),delete $[ee];delete N[H]}}delete n[I]}}function T(I){if(n[I.id]===void 0)return;let F=n[I.id];for(let z in F){let N=F[z];for(let H in N){let $=N[H];for(let ee in $)h($[ee].object),delete $[ee];delete N[H]}}delete n[I.id]}function R(I){for(let F in n){let z=n[F];for(let N in z){let H=z[N];if(H[I.id]===void 0)continue;let $=H[I.id];for(let ee in $)h($[ee].object),delete $[ee];delete H[I.id]}}}function M(I){for(let F in n){let z=n[F],N=I.isInstancedMesh===!0?I.id:0,H=z[N];if(H!==void 0){for(let $ in H){let ee=H[$];for(let oe in ee)h(ee[oe].object),delete ee[oe];delete H[$]}delete z[N],Object.keys(z).length===0&&delete n[F]}}}function A(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:C,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:M,releaseStatesOfProgram:R,initAttributes:b,enableAttribute:m,disableUnusedAttributes:v}}function Ex(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let p=0;p<h;p++)d+=c[p];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Ax(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==Bn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let M=R===sn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Dn&&R!==kn&&!M&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(ze("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:x,maxSamples:w,samples:T}}function Rx(i){let e=this,t=null,n=0,s=!1,r=!1,a=new ni,o=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,b=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let v=r?0:n,_=v*4,x=f.clippingState||null;l.value=x,x=h(g,d,_,p);for(let w=0;w!==_;++w)x[w]=t[w];f.clippingState=x,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,g){let b=u!==null?u.length:0,m=null;if(b!==0){if(m=l.value,g!==!0||m===null){let f=p+b*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,x=p;_!==b;++_,x+=4)a.copy(u[_]).applyMatrix4(v,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}var Xr=4,Cx=6,Px=20,Ix=256,ro=new Ti,op=new xe,ou=null,lu=0,cu=0,hu=!1,Lx=new U,er=new U,Kr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Lx}=r;ou=this._renderer.getRenderTarget(),lu=this._renderer.getActiveCubeFace(),cu=this._renderer.getActiveMipmapLevel(),hu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ou,lu,cu),this._renderer.xr.enabled=hu,e.scissorTest=!1,qr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===bs||e.mapping===Zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ou=this._renderer.getRenderTarget(),lu=this._renderer.getActiveCubeFace(),cu=this._renderer.getActiveMipmapLevel(),hu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:sn,format:Bn,colorSpace:wn,depthBuffer:!1},s=lp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lp(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Dx(r)),this._blurMaterial=Nx(r,e,t),this._ggxMaterial=Fx(r,e,t)}return s}_compileMaterial(e){let t=new Ae(new xt,e);this._renderer.compile(t,ro)}_sceneToCubeUV(e,t,n,s,r){let l=new en(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(op),u.toneMapping=oi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ae(new Ot,new Ct({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,m=b.material,f=!1,v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,f=!0):(m.color.copy(op),f=!0);for(let _=0;_<6;_++){let x=_%3;x===0?(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[_],r.y,r.z)):x===1?(l.up.set(0,0,c[_]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[_],r.z)):(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[_]));let w=this._cubeSize;qr(s,x*w,_>2?w:0,w,w),u.setRenderTarget(s),f&&u.render(b,l),u.render(e,l)}u.toneMapping=p,u.autoClear=d,e.background=v}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===bs||e.mapping===Zs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=hp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cp());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;qr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,ro)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=c*1.25,p=u*d,{_lodMax:g}=this,b=this._sizeLods[n],m=3*b*(n>g-Xr?n-g+Xr:0),f=4*(this._cubeSize-b);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-t,qr(r,m,f,3*b,2*b),s.setRenderTarget(r),s.render(o,ro),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,qr(e,m,f,3*b,2*b),s.setRenderTarget(e),s.render(o,ro)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-Xr?s-this._lodMax+Xr:0),d=4*(this._cubeSize-h);qr(t,u,d,3*h,2*h),a.setRenderTarget(t),a.render(l,ro)}};function Dx(i){let e=[],t=[],n=i,s=i-Xr+1+Cx;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,d=6,p=3,g=new Float32Array(p*d*u),b=new Float32Array(p*d*u);for(let f=0;f<u;f++){let v=f%3*2/3-1,_=f>2?0:-1,x=[v,_,0,v+2/3,_,0,v+2/3,_+1,0,v,_,0,v+2/3,_+1,0,v,_+1,0];g.set(x,p*d*f);for(let w=0;w<d;w++){let T=h[w*2]*2-1,R=h[w*2+1]*2-1;f===0?er.set(1,R,T):f===1?er.set(-T,1,-R):f===2?er.set(-T,R,1):f===3?er.set(-1,R,-T):f===4?er.set(-T,-1,R):er.set(T,R,-1),er.toArray(b,(f*d+w)*p)}}let m=new xt;m.setAttribute("position",new Ut(g,p)),m.setAttribute("outputDirection",new Ut(b,p)),t.push(new Ae(m,null)),n>Xr&&n--}return{lodMeshes:t,sizeLods:e}}function lp(i,e,t){let n=new Ht(i,e,t);return n.texture.mapping=Ja,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Fx(i,e,t){return new Lt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ix,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:gc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Nx(i,e,t){return new Lt({name:"SphericalGaussianBlur",defines:{SAMPLES:Px,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:gc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function cp(){return new Lt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function hp(){return new Lt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function gc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var pc=class extends Ht{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ia(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ot(5,5,5),r=new Lt({name:"CubemapFromEquirect",uniforms:Qs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:Yn});r.uniforms.tEquirect.value=t;let a=new Ae(s,r),o=t.minFilter;return t.minFilter===li&&(t.minFilter=jt),new yl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function Ux(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,p=!1){return d==null?null:p?a(d):r(d)}function r(d){if(d&&d.isTexture){let p=d.mapping;if(p===wl||p===Tl)if(e.has(d)){let g=e.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let b=new pc(g.height);return b.fromEquirectangularTexture(i,d),e.set(d,b),d.addEventListener("dispose",c),o(b.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let p=d.mapping,g=p===wl||p===Tl,b=p===bs||p===Zs;if(g||b){let m=t.get(d),f=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==f)return n===null&&(n=new Kr(i)),m=g?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let v=d.image;return g&&v&&v.height>0||b&&v&&l(v)?(n===null&&(n=new Kr(i)),m=g?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,p){return p===wl?d.mapping=bs:p===Tl&&(d.mapping=Zs),d}function l(d){let p=0,g=6;for(let b=0;b<g;b++)d[b]!==void 0&&p++;return p===g}function c(d){let p=d.target;p.removeEventListener("dispose",c);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function h(d){let p=d.target;p.removeEventListener("dispose",h);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Ox(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Fs("WebGLRenderer: "+n+" extension not supported."),s}}}function kx(i,e,t,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];let p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let p in d)e.update(d[p],i.ARRAY_BUFFER)}function c(u){let d=[],p=u.index,g=u.attributes.position,b=0;if(g===void 0)return;if(p!==null){let v=p.array;b=p.version;for(let _=0,x=v.length;_<x;_+=3){let w=v[_+0],T=v[_+1],R=v[_+2];d.push(w,T,T,R,R,w)}}else{let v=g.array;b=g.version;for(let _=0,x=v.length/3-1;_<x;_+=3){let w=_+0,T=_+1,R=_+2;d.push(w,T,T,R,R,w)}}let m=new(g.count>=65535?Aa:Ea)(d,1);m.version=b;let f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Bx(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*a),t.update(d,n,1)}function c(u,d,p){p!==0&&(i.drawElementsInstanced(n,d,r,u*a,p),t.update(d,n,p))}function h(u,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,p);let b=0;for(let m=0;m<p;m++)b+=d[m];t.update(b,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function zx(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Xe("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Gx(i,e,t){let n=new WeakMap,s=new wt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let A=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",A)};d!==void 0&&d.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],_=0;p===!0&&(_=1),g===!0&&(_=2),b===!0&&(_=3);let x=o.attributes.position.count*_,w=1;x>e.maxTextureSize&&(w=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let T=new Float32Array(x*w*4*u),R=new Sa(T,x,w,u);R.type=kn,R.needsUpdate=!0;let M=_*4;for(let C=0;C<u;C++){let I=m[C],F=f[C],z=v[C],N=x*w*4*C;for(let H=0;H<I.count;H++){let $=H*M;p===!0&&(s.fromBufferAttribute(I,H),T[N+$+0]=s.x,T[N+$+1]=s.y,T[N+$+2]=s.z,T[N+$+3]=0),g===!0&&(s.fromBufferAttribute(F,H),T[N+$+4]=s.x,T[N+$+5]=s.y,T[N+$+6]=s.z,T[N+$+7]=0),b===!0&&(s.fromBufferAttribute(z,H),T[N+$+8]=s.x,T[N+$+9]=s.y,T[N+$+10]=s.z,T[N+$+11]=z.itemSize===4?s.w:1)}}d={count:u,texture:R,size:new Ue(x,w)},n.set(o,d),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let b=0;b<c.length;b++)p+=c[b];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Hx(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var Vx={[Wa]:"LINEAR_TONE_MAPPING",[qa]:"REINHARD_TONE_MAPPING",[Xa]:"CINEON_TONE_MAPPING",[Js]:"ACES_FILMIC_TONE_MAPPING",[Ka]:"AGX_TONE_MAPPING",[Ya]:"NEUTRAL_TONE_MAPPING",[ja]:"CUSTOM_TONE_MAPPING"};function Wx(i,e,t,n,s,r){let a=new Ht(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new xt;c.setAttribute("position",new it([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new it([0,2,0,0,2,0],2));let h=new Ur({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Ae(c,h),d=new Ti(-1,1,1,-1,0,1),p=null,g=null,b=!1,m,f=null,v=[],_=!1;this.setSize=function(x,w){a.setSize(x,w),o!==null&&o.setSize(x,w),l!==null&&l.setSize(x,w);for(let T=0;T<v.length;T++){let R=v[T];R.setSize&&R.setSize(x,w)}},this.setEffects=function(x){v=x,_=v.length>0&&v[0].isRenderPass===!0;let w=a.width,T=a.height;v.length>0&&o===null&&(o=new Ht(w,T,{type:sn,depthBuffer:!1,stencilBuffer:!1}),l=new Ht(w,T,{type:sn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<v.length;R++){let M=v[R];M.setSize&&M.setSize(w,T)}},this.begin=function(x,w){if(b||x.toneMapping===oi&&v.length===0)return!1;if(f=w,w!==null){let T=w.width,R=w.height;(a.width!==T||a.height!==R)&&this.setSize(T,R)}return _===!1&&x.setRenderTarget(a),m=x.toneMapping,x.toneMapping=oi,!0},this.hasRenderPass=function(){return _},this.end=function(x,w){x.toneMapping=m,b=!0;let T=a,R=o;for(let M=0;M<v.length;M++){let A=v[M];A.enabled!==!1&&(A.render(x,R,T,w),A.needsSwap!==!1&&(T=R,R=R===o?l:o))}if(p!==x.outputColorSpace||g!==x.toneMapping){p=x.outputColorSpace,g=x.toneMapping,h.defines={},nt.getTransfer(p)===bt&&(h.defines.SRGB_TRANSFER="");let M=Vx[g];M&&(h.defines[M]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,x.setRenderTarget(f),x.render(u,d),f=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Pp=new tn,fu=new ms(1,1),Ip=new Sa,Lp=new ll,Dp=new Ia,up=[],dp=[],fp=new Float32Array(16),pp=new Float32Array(9),mp=new Float32Array(4);function Yr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=up[s];if(r===void 0&&(r=new Float32Array(s),up[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function rn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function an(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function bc(i,e){let t=dp[e];t===void 0&&(t=new Int32Array(e),dp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function qx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Xx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;i.uniform2fv(this.addr,e),an(t,e)}}function jx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rn(t,e))return;i.uniform3fv(this.addr,e),an(t,e)}}function Kx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;i.uniform4fv(this.addr,e),an(t,e)}}function Yx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(rn(t,n))return;mp.set(n),i.uniformMatrix2fv(this.addr,!1,mp),an(t,n)}}function Jx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(rn(t,n))return;pp.set(n),i.uniformMatrix3fv(this.addr,!1,pp),an(t,n)}}function Zx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(rn(t,n))return;fp.set(n),i.uniformMatrix4fv(this.addr,!1,fp),an(t,n)}}function $x(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Qx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;i.uniform2iv(this.addr,e),an(t,e)}}function e_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;i.uniform3iv(this.addr,e),an(t,e)}}function t_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;i.uniform4iv(this.addr,e),an(t,e)}}function n_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function i_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;i.uniform2uiv(this.addr,e),an(t,e)}}function s_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;i.uniform3uiv(this.addr,e),an(t,e)}}function r_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;i.uniform4uiv(this.addr,e),an(t,e)}}function a_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(fu.compareFunction=t.isReversedDepthBuffer()?uc:hc,r=fu):r=Pp,t.setTexture2D(e||r,s)}function o_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Lp,s)}function l_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Dp,s)}function c_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Ip,s)}function h_(i){switch(i){case 5126:return qx;case 35664:return Xx;case 35665:return jx;case 35666:return Kx;case 35674:return Yx;case 35675:return Jx;case 35676:return Zx;case 5124:case 35670:return $x;case 35667:case 35671:return Qx;case 35668:case 35672:return e_;case 35669:case 35673:return t_;case 5125:return n_;case 36294:return i_;case 36295:return s_;case 36296:return r_;case 35678:case 36198:case 36298:case 36306:case 35682:return a_;case 35679:case 36299:case 36307:return o_;case 35680:case 36300:case 36308:case 36293:return l_;case 36289:case 36303:case 36311:case 36292:return c_}}function u_(i,e){i.uniform1fv(this.addr,e)}function d_(i,e){let t=Yr(e,this.size,2);i.uniform2fv(this.addr,t)}function f_(i,e){let t=Yr(e,this.size,3);i.uniform3fv(this.addr,t)}function p_(i,e){let t=Yr(e,this.size,4);i.uniform4fv(this.addr,t)}function m_(i,e){let t=Yr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function g_(i,e){let t=Yr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function b_(i,e){let t=Yr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function x_(i,e){i.uniform1iv(this.addr,e)}function __(i,e){i.uniform2iv(this.addr,e)}function v_(i,e){i.uniform3iv(this.addr,e)}function y_(i,e){i.uniform4iv(this.addr,e)}function M_(i,e){i.uniform1uiv(this.addr,e)}function S_(i,e){i.uniform2uiv(this.addr,e)}function w_(i,e){i.uniform3uiv(this.addr,e)}function T_(i,e){i.uniform4uiv(this.addr,e)}function E_(i,e,t){let n=this.cache,s=e.length,r=bc(t,s);rn(n,r)||(i.uniform1iv(this.addr,r),an(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=fu:a=Pp;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function A_(i,e,t){let n=this.cache,s=e.length,r=bc(t,s);rn(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Lp,r[a])}function R_(i,e,t){let n=this.cache,s=e.length,r=bc(t,s);rn(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Dp,r[a])}function C_(i,e,t){let n=this.cache,s=e.length,r=bc(t,s);rn(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Ip,r[a])}function P_(i){switch(i){case 5126:return u_;case 35664:return d_;case 35665:return f_;case 35666:return p_;case 35674:return m_;case 35675:return g_;case 35676:return b_;case 5124:case 35670:return x_;case 35667:case 35671:return __;case 35668:case 35672:return v_;case 35669:case 35673:return y_;case 5125:return M_;case 36294:return S_;case 36295:return w_;case 36296:return T_;case 35678:case 36198:case 36298:case 36306:case 35682:return E_;case 35679:case 36299:case 36307:return A_;case 35680:case 36300:case 36308:case 36293:return R_;case 36289:case 36303:case 36311:case 36292:return C_}}var pu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=h_(t.type)}},mu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=P_(t.type)}},gu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},uu=/(\w+)(\])?(\[|\.)?/g;function gp(i,e){i.seq.push(e),i.map[e.id]=e}function I_(i,e,t){let n=i.name,s=n.length;for(uu.lastIndex=0;;){let r=uu.exec(n),a=uu.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){gp(t,c===void 0?new pu(o,i,e):new mu(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new gu(o),gp(t,u)),t=u}}}var jr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);I_(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function bp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var L_=37297,D_=0;function F_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var xp=new $e;function N_(i){nt._getMatrix(xp,nt.workingColorSpace,i);let e=`mat3( ${xp.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(i)){case ya:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return ze("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function _p(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+F_(i.getShaderSource(e),o)}else return r}function U_(i,e){let t=N_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var O_={[Wa]:"Linear",[qa]:"Reinhard",[Xa]:"Cineon",[Js]:"ACESFilmic",[Ka]:"AgX",[Ya]:"Neutral",[ja]:"Custom"};function k_(i,e){let t=O_[e];return t===void 0?(ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var fc=new U;function B_(){nt.getLuminanceCoefficients(fc);let i=fc.x.toFixed(4),e=fc.y.toFixed(4),t=fc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function z_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oo).join(`
`)}function G_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function H_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function oo(i){return i!==""}function vp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var V_=/^[ \t]*#include +<([\w\d./]+)>/gm;function bu(i){return i.replace(V_,q_)}var W_=new Map;function q_(i,e){let t=rt[e];if(t===void 0){let n=W_.get(e);if(n!==void 0)t=rt[n],ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return bu(t)}var X_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mp(i){return i.replace(X_,j_)}function j_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Sp(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var K_={[Ks]:"SHADOWMAP_TYPE_PCF",[zr]:"SHADOWMAP_TYPE_VSM"};function Y_(i){return K_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var J_={[bs]:"ENVMAP_TYPE_CUBE",[Zs]:"ENVMAP_TYPE_CUBE",[Ja]:"ENVMAP_TYPE_CUBE_UV"};function Z_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":J_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var $_={[Zs]:"ENVMAP_MODE_REFRACTION"};function Q_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":$_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var ev={[Sl]:"ENVMAP_BLENDING_MULTIPLY",[Gf]:"ENVMAP_BLENDING_MIX",[Hf]:"ENVMAP_BLENDING_ADD"};function tv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":ev[i.combine]||"ENVMAP_BLENDING_NONE"}function nv(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function iv(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Y_(t),c=Z_(t),h=Q_(t),u=tv(t),d=nv(t),p=z_(t),g=G_(r),b=s.createProgram(),m,f,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(oo).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(oo).join(`
`),f.length>0&&(f+=`
`)):(m=[Sp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oo).join(`
`),f=[Sp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==oi?"#define TONE_MAPPING":"",t.toneMapping!==oi?rt.tonemapping_pars_fragment:"",t.toneMapping!==oi?k_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,U_("linearToOutputTexel",t.outputColorSpace),B_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(oo).join(`
`)),a=bu(a),a=vp(a,t),a=yp(a,t),o=bu(o),o=vp(o,t),o=yp(o,t),a=Mp(a),o=Mp(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===eu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===eu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let _=v+m+a,x=v+f+o,w=bp(s,s.VERTEX_SHADER,_),T=bp(s,s.FRAGMENT_SHADER,x);s.attachShader(b,w),s.attachShader(b,T),t.index0AttributeName!==void 0?s.bindAttribLocation(b,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function R(I){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(b)||"",z=s.getShaderInfoLog(w)||"",N=s.getShaderInfoLog(T)||"",H=F.trim(),$=z.trim(),ee=N.trim(),oe=!0,Q=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(oe=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,b,w,T);else{let se=_p(s,w,"vertex"),le=_p(s,T,"fragment");Xe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+H+`
`+se+`
`+le)}else H!==""?ze("WebGLProgram: Program Info Log:",H):($===""||ee==="")&&(Q=!1);Q&&(I.diagnostics={runnable:oe,programLog:H,vertexShader:{log:$,prefix:m},fragmentShader:{log:ee,prefix:f}})}s.deleteShader(w),s.deleteShader(T),M=new jr(s,b),A=H_(s,b)}let M;this.getUniforms=function(){return M===void 0&&R(this),M};let A;this.getAttributes=function(){return A===void 0&&R(this),A};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(b,L_)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=D_++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=w,this.fragmentShader=T,this}var sv=0,xu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new _u(e),t.set(e,n)),n}},_u=class{constructor(e){this.id=sv++,this.code=e,this.usedTimes=0}};function rv(i){return i===_s||i===to||i===no}function av(i,e,t,n,s,r){let a=new wa,o=new xu,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return l.add(M),M===0?"uv":`uv${M}`}function b(M,A,C,I,F,z){let N=I.fog,H=F.geometry,$=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?I.environment:null,ee=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,oe=e.get(M.envMap||$,ee),Q=oe&&oe.mapping===Ja?oe.image.height:null,se=p[M.type];M.precision!==null&&(d=n.getMaxPrecision(M.precision),d!==M.precision&&ze("WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));let le=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Se=le!==void 0?le.length:0,Ce=0;H.morphAttributes.position!==void 0&&(Ce=1),H.morphAttributes.normal!==void 0&&(Ce=2),H.morphAttributes.color!==void 0&&(Ce=3);let ft,at,ot,Z;if(se){let Ft=Ri[se];ft=Ft.vertexShader,at=Ft.fragmentShader}else{ft=M.vertexShader,at=M.fragmentShader;let Ft=o.getVertexShaderStage(M),yt=o.getFragmentShaderStage(M);o.update(M,Ft,yt),ot=Ft.id,Z=yt.id}let ne=i.getRenderTarget(),Te=i.state.buffers.depth.getReversed(),We=F.isInstancedMesh===!0,Ee=F.isBatchedMesh===!0,Qe=!!M.map,zt=!!M.matcap,Ye=!!oe,je=!!M.aoMap,Je=!!M.lightMap,Ke=!!M.bumpMap&&M.wireframe===!1,et=!!M.normalMap,J=!!M.displacementMap,fe=!!M.emissiveMap,me=!!M.metalnessMap,Le=!!M.roughnessMap,L=M.anisotropy>0,qe=M.clearcoat>0,He=M.dispersion>0,P=M.retroreflectivity>0,y=M.iridescence>0,D=M.sheen>0,B=M.transmission>0,X=L&&!!M.anisotropyMap,ae=qe&&!!M.clearcoatMap,de=qe&&!!M.clearcoatNormalMap,K=qe&&!!M.clearcoatRoughnessMap,G=y&&!!M.iridescenceMap,te=y&&!!M.iridescenceThicknessMap,pe=D&&!!M.sheenColorMap,ce=D&&!!M.sheenRoughnessMap,he=!!M.specularMap,ge=!!M.specularColorMap,Ne=!!M.specularIntensityMap,Ze=B&&!!M.transmissionMap,k=B&&!!M.thicknessMap,_e=!!M.gradientMap,ie=!!M.alphaMap,be=M.alphaTest>0,ve=!!M.alphaHash,re=!!M.extensions,Oe=oi;M.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Oe=i.toneMapping);let ke={shaderID:se,shaderType:M.type,shaderName:M.name,vertexShader:ft,fragmentShader:at,defines:M.defines,customVertexShaderID:ot,customFragmentShaderID:Z,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:Ee,batchingColor:Ee&&F._colorsTexture!==null,instancing:We,instancingColor:We&&F.instanceColor!==null,instancingMorph:We&&F.morphTexture!==null,outputColorSpace:ne===null?i.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:nt.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:Qe,matcap:zt,envMap:Ye,envMapMode:Ye&&oe.mapping,envMapCubeUVHeight:Q,aoMap:je,lightMap:Je,bumpMap:Ke,normalMap:et,displacementMap:J,emissiveMap:fe,normalMapObjectSpace:et&&M.normalMapType===Xf,normalMapTangentSpace:et&&M.normalMapType===so,packedNormalMap:et&&M.normalMapType===so&&rv(M.normalMap.format),metalnessMap:me,roughnessMap:Le,anisotropy:L,anisotropyMap:X,clearcoat:qe,clearcoatMap:ae,clearcoatNormalMap:de,clearcoatRoughnessMap:K,dispersion:He,retroreflection:P,iridescence:y,iridescenceMap:G,iridescenceThicknessMap:te,sheen:D,sheenColorMap:pe,sheenRoughnessMap:ce,specularMap:he,specularColorMap:ge,specularIntensityMap:Ne,transmission:B,transmissionMap:Ze,thicknessMap:k,gradientMap:_e,opaque:M.transparent===!1&&M.blending===gs&&M.alphaToCoverage===!1,alphaMap:ie,alphaTest:be,alphaHash:ve,combine:M.combine,mapUv:Qe&&g(M.map.channel),aoMapUv:je&&g(M.aoMap.channel),lightMapUv:Je&&g(M.lightMap.channel),bumpMapUv:Ke&&g(M.bumpMap.channel),normalMapUv:et&&g(M.normalMap.channel),displacementMapUv:J&&g(M.displacementMap.channel),emissiveMapUv:fe&&g(M.emissiveMap.channel),metalnessMapUv:me&&g(M.metalnessMap.channel),roughnessMapUv:Le&&g(M.roughnessMap.channel),anisotropyMapUv:X&&g(M.anisotropyMap.channel),clearcoatMapUv:ae&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:de&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:G&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:te&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:ce&&g(M.sheenRoughnessMap.channel),specularMapUv:he&&g(M.specularMap.channel),specularColorMapUv:ge&&g(M.specularColorMap.channel),specularIntensityMapUv:Ne&&g(M.specularIntensityMap.channel),transmissionMapUv:Ze&&g(M.transmissionMap.channel),thicknessMapUv:k&&g(M.thicknessMap.channel),alphaMapUv:ie&&g(M.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(et||L),vertexNormals:!!H.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!H.attributes.uv&&(Qe||ie),fog:!!N,useFog:M.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||H.attributes.normal===void 0&&et===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Te,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Ce,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Oe,decodeVideoTexture:Qe&&M.map.isVideoTexture===!0&&nt.getTransfer(M.map.colorSpace)===bt,decodeVideoTextureEmissive:fe&&M.emissiveMap.isVideoTexture===!0&&nt.getTransfer(M.emissiveMap.colorSpace)===bt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Vt,flipSided:M.side===nn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:re&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&M.extensions.multiDraw===!0||Ee)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ke.vertexUv1s=l.has(1),ke.vertexUv2s=l.has(2),ke.vertexUv3s=l.has(3),l.clear(),ke}function m(M){let A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(let C in M.defines)A.push(C),A.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(f(A,M),v(A,M),A.push(i.outputColorSpace)),A.push(M.customProgramCacheKey),A.join()}function f(M,A){M.push(A.precision),M.push(A.outputColorSpace),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.anisotropyMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numSunLights),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numSunLightShadows),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.numLightProbes),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function v(M,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),M.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),M.push(a.mask)}function _(M){let A=p[M.type],C;if(A){let I=Ri[A];C=Zi.clone(I.uniforms)}else C=M.uniforms;return C}function x(M,A){let C=h.get(A);return C!==void 0?++C.usedTimes:(C=new iv(i,A,M,s),c.push(C),h.set(A,C)),C}function w(M){if(--M.usedTimes===0){let A=c.indexOf(M);c[A]=c[c.length-1],c.pop(),h.delete(M.cacheKey),M.destroy()}}function T(M){o.remove(M)}function R(){o.dispose()}return{getParameters:b,getProgramCacheKey:m,getUniforms:_,acquireProgram:x,releaseProgram:w,releaseShaderCache:T,programs:c,dispose:R}}function ov(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function lv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function wp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Tp(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function o(d,p,g,b,m,f){let v=i[e];return v===void 0?(v={id:d.id,object:d,geometry:p,material:g,materialVariant:a(d),groupOrder:b,renderOrder:d.renderOrder,z:m,group:f},i[e]=v):(v.id=d.id,v.object=d,v.geometry=p,v.material=g,v.materialVariant=a(d),v.groupOrder=b,v.renderOrder=d.renderOrder,v.z=m,v.group=f),e++,v}function l(d,p,g,b,m,f,v){v.reversedDepth===!0&&(m=-m);let _=o(d,p,g,b,m,f);g.transmission>0?n.push(_):g.transparent===!0?s.push(_):t.push(_)}function c(d,p,g,b,m,f){let v=o(d,p,g,b,m,f);g.transmission>0?n.unshift(v):g.transparent===!0?s.unshift(v):t.unshift(v)}function h(d,p){t.length>1&&t.sort(d||lv),n.length>1&&n.sort(p||wp),s.length>1&&s.sort(p||wp)}function u(){for(let d=e,p=i.length;d<p;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function cv(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Tp,i.set(n,[a])):s>=r.length?(a=new Tp,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function hv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new U,color:new xe};break;case"SpotLight":t={position:new U,direction:new U,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":t={color:new xe,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function uv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var dv=0;function fv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function pv(i){let e=new hv,t=uv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);let s=new U,r=new tt,a=new tt;function o(c){let h=0,u=0,d=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let p=0,g=0,b=0,m=0,f=0,v=0,_=0,x=0,w=0,T=0,R=0,M=0,A=0,C=0;c.sort(fv);for(let F=0,z=c.length;F<z;F++){let N=c[F],H=N.color,$=N.intensity,ee=N.distance,oe=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===_s?oe=N.shadow.map.texture:oe=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=H.r*$,u+=H.g*$,d+=H.b*$;else if(N.isLightProbe){for(let Q=0;Q<9;Q++)n.probe[Q].addScaledVector(N.sh.coefficients[Q],$);C++}else if(N.isSunLight){let Q=e.get(N);if(Q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let se=N.shadow,le=t.get(N);le.shadowIntensity=se.intensity,le.shadowBias=se.bias,le.shadowNormalBias=se.normalBias,le.shadowRadius=se.radius,le.shadowMapSize.copy(se.mapSize).multiply(se.getFrameExtents()),n.sunShadow[g]=le,n.sunShadowMap[g]=oe;let Se=se.getViewportCount();for(let Ce=0;Ce<Se;Ce++)n.sunShadowMatrix[b+Ce]=se.getMatrix(Ce),n.sunShadowCascade[b+Ce]=se._cascadeData[Ce];b+=Se,g++}n.sun[p]=Q,p++}else if(N.isDirectionalLight){let Q=e.get(N);if(Q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let se=N.shadow,le=t.get(N);le.shadowIntensity=se.intensity,le.shadowBias=se.bias,le.shadowNormalBias=se.normalBias,le.shadowRadius=se.radius,le.shadowMapSize=se.mapSize,n.directionalShadow[m]=le,n.directionalShadowMap[m]=oe,n.directionalShadowMatrix[m]=N.shadow.matrix,w++}n.directional[m]=Q,m++}else if(N.isSpotLight){let Q=e.get(N);Q.position.setFromMatrixPosition(N.matrixWorld),Q.color.copy(H).multiplyScalar($),Q.distance=ee,Q.coneCos=Math.cos(N.angle),Q.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Q.decay=N.decay,n.spot[v]=Q;let se=N.shadow;if(N.map&&(n.spotLightMap[M]=N.map,M++,se.updateMatrices(N),N.castShadow&&A++),n.spotLightMatrix[v]=se.matrix,N.castShadow){let le=t.get(N);le.shadowIntensity=se.intensity,le.shadowBias=se.bias,le.shadowNormalBias=se.normalBias,le.shadowRadius=se.radius,le.shadowMapSize=se.mapSize,n.spotShadow[v]=le,n.spotShadowMap[v]=oe,R++}v++}else if(N.isRectAreaLight){let Q=e.get(N);Q.color.copy(H).multiplyScalar($),Q.halfWidth.set(N.width*.5,0,0),Q.halfHeight.set(0,N.height*.5,0),n.rectArea[_]=Q,_++}else if(N.isPointLight){let Q=e.get(N);if(Q.color.copy(N.color).multiplyScalar(N.intensity),Q.distance=N.distance,Q.decay=N.decay,N.castShadow){let se=N.shadow,le=t.get(N);le.shadowIntensity=se.intensity,le.shadowBias=se.bias,le.shadowNormalBias=se.normalBias,le.shadowRadius=se.radius,le.shadowMapSize=se.mapSize,le.shadowCameraNear=se.camera.near,le.shadowCameraFar=se.camera.far,n.pointShadow[f]=le,n.pointShadowMap[f]=oe,n.pointShadowMatrix[f]=N.shadow.matrix,T++}n.point[f]=Q,f++}else if(N.isHemisphereLight){let Q=e.get(N);Q.skyColor.copy(N.color).multiplyScalar($),Q.groundColor.copy(N.groundColor).multiplyScalar($),n.hemi[x]=Q,x++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let I=n.hash;(I.sunLength!==p||I.directionalLength!==m||I.pointLength!==f||I.spotLength!==v||I.rectAreaLength!==_||I.hemiLength!==x||I.numSunShadows!==g||I.numDirectionalShadows!==w||I.numPointShadows!==T||I.numSpotShadows!==R||I.numSpotMaps!==M||I.numLightProbes!==C)&&(n.sun.length=p,n.directional.length=m,n.spot.length=v,n.rectArea.length=_,n.point.length=f,n.hemi.length=x,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+M-A,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,I.sunLength=p,I.directionalLength=m,I.pointLength=f,I.spotLength=v,I.rectAreaLength=_,I.hemiLength=x,I.numSunShadows=g,I.numDirectionalShadows=w,I.numPointShadows=T,I.numSpotShadows=R,I.numSpotMaps=M,I.numLightProbes=C,n.version=dv++)}function l(c,h){let u=0,d=0,p=0,g=0,b=0,m=0,f=h.matrixWorldInverse;for(let v=0,_=c.length;v<_;v++){let x=c[v];if(x.isSunLight){let w=n.sun[u];w.direction.setFromMatrixPosition(x.matrixWorld),w.direction.transformDirection(f),u++}else if(x.isDirectionalLight){let w=n.directional[d];w.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(f),d++}else if(x.isSpotLight){let w=n.spot[g];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(f),w.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(f),g++}else if(x.isRectAreaLight){let w=n.rectArea[b];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(f),a.identity(),r.copy(x.matrixWorld),r.premultiply(f),a.extractRotation(r),w.halfWidth.set(x.width*.5,0,0),w.halfHeight.set(0,x.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),b++}else if(x.isPointLight){let w=n.point[p];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(f),p++}else if(x.isHemisphereLight){let w=n.hemi[m];w.direction.setFromMatrixPosition(x.matrixWorld),w.direction.transformDirection(f),m++}}}return{setup:o,setupView:l,state:n}}function Ep(i){let e=new pv(i),t=[],n=[],s=[];function r(d){u.camera=d,t.length=0,n.length=0,s.length=0}function a(d){t.push(d)}function o(d){n.push(d)}function l(d){s.push(d)}function c(){e.setup(t)}function h(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function mv(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Ep(i),e.set(s,[o])):r>=a.length?(o=new Ep(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var gv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,xv=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],_v=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Ap=new tt,ao=new U,du=new U;function vv(i,e,t){let n=new Lr,s=new Ue,r=new Ue,a=new wt,o=new dl,l=new fl,c={},h=t.maxTextureSize,u={[Ei]:nn,[nn]:Ei,[Vt]:Vt},d=new Lt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:gv,fragmentShader:bv}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new xt;g.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Ae(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ks;let f=this.type;this.render=function(T,R,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Mf&&(ze("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ks);let A=i.getRenderTarget(),C=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Yn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let z=f!==this.type;z&&R.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(H=>H.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,H=T.length;N<H;N++){let $=T[N],ee=$.shadow;if(ee===void 0){ze("WebGLShadowMap:",$,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;s.copy(ee.mapSize);let oe=ee.getFrameExtents();s.multiply(oe),r.copy(ee.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/oe.x),s.x=r.x*oe.x,ee.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/oe.y),s.y=r.y*oe.y,ee.mapSize.y=r.y));let Q=i.state.buffers.depth.getReversed();if(ee.camera._reversedDepth=Q,ee.map===null||z===!0){if(ee.map!==null&&(ee.map.depthTexture!==null&&(ee.map.depthTexture.dispose(),ee.map.depthTexture=null),ee.map.dispose()),this.type===zr){if($.isPointLight){ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ee.map=new Ht(s.x,s.y,{format:_s,type:sn,minFilter:jt,magFilter:jt,generateMipmaps:!1}),ee.map.texture.name=$.name+".shadowMap",ee.map.depthTexture=new ms(s.x,s.y,kn),ee.map.depthTexture.name=$.name+".shadowMapDepth",ee.map.depthTexture.format=bi,ee.map.depthTexture.compareFunction=null,ee.map.depthTexture.minFilter=Xt,ee.map.depthTexture.magFilter=Xt}else $.isPointLight?(ee.map=new pc(s.x),ee.map.depthTexture=new ul(s.x,ci)):(ee.map=new Ht(s.x,s.y),ee.map.depthTexture=new ms(s.x,s.y,ci)),ee.map.depthTexture.name=$.name+".shadowMap",ee.map.depthTexture.format=bi,this.type===Ks?(ee.map.depthTexture.compareFunction=Q?uc:hc,ee.map.depthTexture.minFilter=jt,ee.map.depthTexture.magFilter=jt):(ee.map.depthTexture.compareFunction=null,ee.map.depthTexture.minFilter=Xt,ee.map.depthTexture.magFilter=Xt);ee.camera.updateProjectionMatrix()}ee.map.isWebGLCubeRenderTarget!==!0&&(ee.map.width!==s.x||ee.map.height!==s.y)&&ee.map.setSize(s.x,s.y);let se=ee.map.isWebGLCubeRenderTarget?6:ee.getViewportCount();$.isPointLight!==!0&&ee.updateMatrices($,M);for(let le=0;le<se;le++){let Se=ee.getCamera(le);if($.isPointLight){let Ce=ee.camera,ft=ee.matrix,at=$.distance||Ce.far;at!==Ce.far&&(Ce.far=at,Ce.updateProjectionMatrix()),ao.setFromMatrixPosition($.matrixWorld),Ce.position.copy(ao),du.copy(Ce.position),du.add(xv[le]),Ce.up.copy(_v[le]),Ce.lookAt(du),Ce.updateMatrixWorld(),ft.makeTranslation(-ao.x,-ao.y,-ao.z),Ap.multiplyMatrices(Ce.projectionMatrix,Ce.matrixWorldInverse),ee._frustum.setFromProjectionMatrix(Ap,Ce.coordinateSystem,Ce.reversedDepth)}if(ee.map.isWebGLCubeRenderTarget)i.setRenderTarget(ee.map,le),i.clear();else{le===0&&(i.setRenderTarget(ee.map),i.clear());let Ce=ee.getViewport(le);a.set(r.x*Ce.x,r.y*Ce.y,r.x*Ce.z,r.y*Ce.w),F.viewport(a)}n=ee.getFrustum(le),x(R,M,Se,$,this.type)}ee.isPointLightShadow!==!0&&this.type===zr&&v(ee,M),ee.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(A,C,I)};function v(T,R){let M=e.update(b);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null?T.mapPass=new Ht(s.x,s.y,{format:_s,type:sn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(R,null,M,d,b,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value.set(T.map.width,T.map.height),p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(R,null,M,p,b,null)}function _(T,R,M,A){let C=null,I=M.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)C=I;else if(C=M.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let F=C.uuid,z=R.uuid,N=c[F];N===void 0&&(N={},c[F]=N);let H=N[z];H===void 0&&(H=C.clone(),N[z]=H,R.addEventListener("dispose",w)),C=H}if(C.visible=R.visible,C.wireframe=R.wireframe,A===zr?C.side=R.shadowSide!==null?R.shadowSide:R.side:C.side=R.shadowSide!==null?R.shadowSide:u[R.side],C.alphaMap=R.alphaMap,C.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,C.map=R.map,C.clipShadows=R.clipShadows,C.clippingPlanes=R.clippingPlanes,C.clipIntersection=R.clipIntersection,C.displacementMap=R.displacementMap,C.displacementScale=R.displacementScale,C.displacementBias=R.displacementBias,C.wireframeLinewidth=R.wireframeLinewidth,C.linewidth=R.linewidth,M.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let F=i.properties.get(C);F.light=M}return C}function x(T,R,M,A,C){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&C===zr)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,T.matrixWorld);let z=e.update(T),N=T.material;if(Array.isArray(N)){let H=z.groups;for(let $=0,ee=H.length;$<ee;$++){let oe=H[$],Q=N[oe.materialIndex];if(Q&&Q.visible){let se=_(T,Q,A,C);T.onBeforeShadow(i,T,R,M,z,se,oe),i.renderBufferDirect(M,null,z,se,T,oe),T.onAfterShadow(i,T,R,M,z,se,oe)}}}else if(N.visible){let H=_(T,N,A,C);T.onBeforeShadow(i,T,R,M,z,H,null),i.renderBufferDirect(M,null,z,H,T,null),T.onAfterShadow(i,T,R,M,z,H,null)}}let F=T.children;for(let z=0,N=F.length;z<N;z++)x(F[z],R,M,A,C)}function w(T){T.target.removeEventListener("dispose",w);for(let M in c){let A=c[M],C=T.target.uuid;C in A&&(A[C].dispose(),delete A[C])}}}function yv(i,e){function t(){let k=!1,_e=new wt,ie=null,be=new wt(0,0,0,0);return{setMask:function(ve){ie!==ve&&!k&&(i.colorMask(ve,ve,ve,ve),ie=ve)},setLocked:function(ve){k=ve},setClear:function(ve,re,Oe,ke,Ft){Ft===!0&&(ve*=ke,re*=ke,Oe*=ke),_e.set(ve,re,Oe,ke),be.equals(_e)===!1&&(i.clearColor(ve,re,Oe,ke),be.copy(_e))},reset:function(){k=!1,ie=null,be.set(-1,0,0,0)}}}function n(){let k=!1,_e=!1,ie=null,be=null,ve=null;return{setReversed:function(re){if(_e!==re){let Oe=e.get("EXT_clip_control");re?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),_e=re;let ke=ve;ve=null,this.setClear(ke)}},getReversed:function(){return _e},setTest:function(re){re?ne(i.DEPTH_TEST):Te(i.DEPTH_TEST)},setMask:function(re){ie!==re&&!k&&(i.depthMask(re),ie=re)},setFunc:function(re){if(_e&&(re=ip[re]),be!==re){switch(re){case Qo:i.depthFunc(i.NEVER);break;case el:i.depthFunc(i.ALWAYS);break;case tl:i.depthFunc(i.LESS);break;case yr:i.depthFunc(i.LEQUAL);break;case nl:i.depthFunc(i.EQUAL);break;case il:i.depthFunc(i.GEQUAL);break;case sl:i.depthFunc(i.GREATER);break;case rl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}be=re}},setLocked:function(re){k=re},setClear:function(re){ve!==re&&(ve=re,_e&&(re=1-re),i.clearDepth(re))},reset:function(){k=!1,ie=null,be=null,ve=null,_e=!1}}}function s(){let k=!1,_e=null,ie=null,be=null,ve=null,re=null,Oe=null,ke=null,Ft=null;return{setTest:function(yt){k||(yt?ne(i.STENCIL_TEST):Te(i.STENCIL_TEST))},setMask:function(yt){_e!==yt&&!k&&(i.stencilMask(yt),_e=yt)},setFunc:function(yt,$n,di){(ie!==yt||be!==$n||ve!==di)&&(i.stencilFunc(yt,$n,di),ie=yt,be=$n,ve=di)},setOp:function(yt,$n,di){(re!==yt||Oe!==$n||ke!==di)&&(i.stencilOp(yt,$n,di),re=yt,Oe=$n,ke=di)},setLocked:function(yt){k=yt},setClear:function(yt){Ft!==yt&&(i.clearStencil(yt),Ft=yt)},reset:function(){k=!1,_e=null,ie=null,be=null,ve=null,re=null,Oe=null,ke=null,Ft=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},d={},p=new WeakMap,g=[],b=null,m=!1,f=null,v=null,_=null,x=null,w=null,T=null,R=null,M=new xe(0,0,0),A=0,C=!1,I=null,F=null,z=null,N=null,H=null,$=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ee=!1,oe=0,Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(Q)[1]),ee=oe>=1):Q.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),ee=oe>=2);let se=null,le={},Se=i.getParameter(i.SCISSOR_BOX),Ce=i.getParameter(i.VIEWPORT),ft=new wt().fromArray(Se),at=new wt().fromArray(Ce);function ot(k,_e,ie,be){let ve=new Uint8Array(4),re=i.createTexture();i.bindTexture(k,re),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Oe=0;Oe<ie;Oe++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(_e,0,i.RGBA,1,1,be,0,i.RGBA,i.UNSIGNED_BYTE,ve):i.texImage2D(_e+Oe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ve);return re}let Z={};Z[i.TEXTURE_2D]=ot(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=ot(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=ot(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=ot(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(i.DEPTH_TEST),a.setFunc(yr),Ke(!1),et(zh),ne(i.CULL_FACE),je(Yn);function ne(k){h[k]!==!0&&(i.enable(k),h[k]=!0)}function Te(k){h[k]!==!1&&(i.disable(k),h[k]=!1)}function We(k,_e){return d[k]!==_e?(i.bindFramebuffer(k,_e),d[k]=_e,k===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=_e),k===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=_e),!0):!1}function Ee(k,_e){let ie=g,be=!1;if(k){ie=p.get(_e),ie===void 0&&(ie=[],p.set(_e,ie));let ve=k.textures;if(ie.length!==ve.length||ie[0]!==i.COLOR_ATTACHMENT0){for(let re=0,Oe=ve.length;re<Oe;re++)ie[re]=i.COLOR_ATTACHMENT0+re;ie.length=ve.length,be=!0}}else ie[0]!==i.BACK&&(ie[0]=i.BACK,be=!0);be&&i.drawBuffers(ie)}function Qe(k){return b!==k?(i.useProgram(k),b=k,!0):!1}let zt={[Ys]:i.FUNC_ADD,[wf]:i.FUNC_SUBTRACT,[Tf]:i.FUNC_REVERSE_SUBTRACT};zt[Ef]=i.MIN,zt[Af]=i.MAX;let Ye={[Rf]:i.ZERO,[Cf]:i.ONE,[Pf]:i.SRC_COLOR,[Vh]:i.SRC_ALPHA,[Uf]:i.SRC_ALPHA_SATURATE,[Ff]:i.DST_COLOR,[Lf]:i.DST_ALPHA,[If]:i.ONE_MINUS_SRC_COLOR,[Wh]:i.ONE_MINUS_SRC_ALPHA,[Nf]:i.ONE_MINUS_DST_COLOR,[Df]:i.ONE_MINUS_DST_ALPHA,[Of]:i.CONSTANT_COLOR,[kf]:i.ONE_MINUS_CONSTANT_COLOR,[Bf]:i.CONSTANT_ALPHA,[zf]:i.ONE_MINUS_CONSTANT_ALPHA};function je(k,_e,ie,be,ve,re,Oe,ke,Ft,yt){if(k===Yn){m===!0&&(Te(i.BLEND),m=!1);return}if(m===!1&&(ne(i.BLEND),m=!0),k!==Sf){if(k!==f||yt!==C){if((v!==Ys||w!==Ys)&&(i.blendEquation(i.FUNC_ADD),v=Ys,w=Ys),yt)switch(k){case gs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ai:i.blendFunc(i.ONE,i.ONE);break;case Gh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Hh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Xe("WebGLState: Invalid blending: ",k);break}else switch(k){case gs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ai:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Gh:Xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hh:Xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xe("WebGLState: Invalid blending: ",k);break}_=null,x=null,T=null,R=null,M.set(0,0,0),A=0,f=k,C=yt}return}ve=ve||_e,re=re||ie,Oe=Oe||be,(_e!==v||ve!==w)&&(i.blendEquationSeparate(zt[_e],zt[ve]),v=_e,w=ve),(ie!==_||be!==x||re!==T||Oe!==R)&&(i.blendFuncSeparate(Ye[ie],Ye[be],Ye[re],Ye[Oe]),_=ie,x=be,T=re,R=Oe),(ke.equals(M)===!1||Ft!==A)&&(i.blendColor(ke.r,ke.g,ke.b,Ft),M.copy(ke),A=Ft),f=k,C=!1}function Je(k,_e){k.side===Vt?Te(i.CULL_FACE):ne(i.CULL_FACE);let ie=k.side===nn;_e&&(ie=!ie),Ke(ie),k.blending===gs&&k.transparent===!1?je(Yn):je(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);let be=k.stencilWrite;o.setTest(be),be&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),fe(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ne(i.SAMPLE_ALPHA_TO_COVERAGE):Te(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(k){I!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),I=k)}function et(k){k!==vf?(ne(i.CULL_FACE),k!==F&&(k===zh?i.cullFace(i.BACK):k===yf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Te(i.CULL_FACE),F=k}function J(k){k!==z&&(ee&&i.lineWidth(k),z=k)}function fe(k,_e,ie){k?(ne(i.POLYGON_OFFSET_FILL),(N!==_e||H!==ie)&&(N=_e,H=ie,a.getReversed()&&(_e=-_e),i.polygonOffset(_e,ie))):Te(i.POLYGON_OFFSET_FILL)}function me(k){k?ne(i.SCISSOR_TEST):Te(i.SCISSOR_TEST)}function Le(k){k===void 0&&(k=i.TEXTURE0+$-1),se!==k&&(i.activeTexture(k),se=k)}function L(k,_e,ie){ie===void 0&&(se===null?ie=i.TEXTURE0+$-1:ie=se);let be=le[ie];be===void 0&&(be={type:void 0,texture:void 0},le[ie]=be),(be.type!==k||be.texture!==_e)&&(se!==ie&&(i.activeTexture(ie),se=ie),i.bindTexture(k,_e||Z[k]),be.type=k,be.texture=_e)}function qe(){let k=le[se];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function He(){try{i.compressedTexImage2D(...arguments)}catch(k){Xe("WebGLState:",k)}}function P(){try{i.compressedTexImage3D(...arguments)}catch(k){Xe("WebGLState:",k)}}function y(){try{i.texSubImage2D(...arguments)}catch(k){Xe("WebGLState:",k)}}function D(){try{i.texSubImage3D(...arguments)}catch(k){Xe("WebGLState:",k)}}function B(){try{i.compressedTexSubImage2D(...arguments)}catch(k){Xe("WebGLState:",k)}}function X(){try{i.compressedTexSubImage3D(...arguments)}catch(k){Xe("WebGLState:",k)}}function ae(){try{i.texStorage2D(...arguments)}catch(k){Xe("WebGLState:",k)}}function de(){try{i.texStorage3D(...arguments)}catch(k){Xe("WebGLState:",k)}}function K(){try{i.texImage2D(...arguments)}catch(k){Xe("WebGLState:",k)}}function G(){try{i.texImage3D(...arguments)}catch(k){Xe("WebGLState:",k)}}function te(k){return u[k]!==void 0?u[k]:i.getParameter(k)}function pe(k,_e){u[k]!==_e&&(i.pixelStorei(k,_e),u[k]=_e)}function ce(k){ft.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),ft.copy(k))}function he(k){at.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),at.copy(k))}function ge(k,_e){let ie=c.get(_e);ie===void 0&&(ie=new WeakMap,c.set(_e,ie));let be=ie.get(k);be===void 0&&(be=i.getUniformBlockIndex(_e,k.name),ie.set(k,be))}function Ne(k,_e){let be=c.get(_e).get(k);l.get(_e)!==be&&(i.uniformBlockBinding(_e,be,k.__bindingPointIndex),l.set(_e,be))}function Ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},se=null,le={},d={},p=new WeakMap,g=[],b=null,m=!1,f=null,v=null,_=null,x=null,w=null,T=null,R=null,M=new xe(0,0,0),A=0,C=!1,I=null,F=null,z=null,N=null,H=null,ft.set(0,0,i.canvas.width,i.canvas.height),at.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ne,disable:Te,bindFramebuffer:We,drawBuffers:Ee,useProgram:Qe,setBlending:je,setMaterial:Je,setFlipSided:Ke,setCullFace:et,setLineWidth:J,setPolygonOffset:fe,setScissorTest:me,activeTexture:Le,bindTexture:L,unbindTexture:qe,compressedTexImage2D:He,compressedTexImage3D:P,texImage2D:K,texImage3D:G,pixelStorei:pe,getParameter:te,updateUBOMapping:ge,uniformBlockBinding:Ne,texStorage2D:ae,texStorage3D:de,texSubImage2D:y,texSubImage3D:D,compressedTexSubImage2D:B,compressedTexSubImage3D:X,scissor:ce,viewport:he,reset:Ze}}function Mv(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ue,h=new WeakMap,u=new Set,d,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(P,y){return g?new OffscreenCanvas(P,y):wr("canvas")}function m(P,y,D){let B=1,X=He(P);if((X.width>D||X.height>D)&&(B=D/Math.max(X.width,X.height)),B<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let ae=Math.floor(B*X.width),de=Math.floor(B*X.height);d===void 0&&(d=b(ae,de));let K=y?b(ae,de):d;return K.width=ae,K.height=de,K.getContext("2d").drawImage(P,0,0,ae,de),ze("WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+ae+"x"+de+")."),K}else return"data"in P&&ze("WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),P;return P}function f(P){return P.generateMipmaps}function v(P){i.generateMipmap(P)}function _(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(P,y,D,B,X,ae=!1){if(P!==null){if(i[P]!==void 0)return i[P];ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let de;B&&(de=e.get("EXT_texture_norm16"),de||ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=y;if(y===i.RED&&(D===i.FLOAT&&(K=i.R32F),D===i.HALF_FLOAT&&(K=i.R16F),D===i.UNSIGNED_BYTE&&(K=i.R8),D===i.UNSIGNED_SHORT&&de&&(K=de.R16_EXT),D===i.SHORT&&de&&(K=de.R16_SNORM_EXT)),y===i.RED_INTEGER&&(D===i.UNSIGNED_BYTE&&(K=i.R8UI),D===i.UNSIGNED_SHORT&&(K=i.R16UI),D===i.UNSIGNED_INT&&(K=i.R32UI),D===i.BYTE&&(K=i.R8I),D===i.SHORT&&(K=i.R16I),D===i.INT&&(K=i.R32I)),y===i.RG&&(D===i.FLOAT&&(K=i.RG32F),D===i.HALF_FLOAT&&(K=i.RG16F),D===i.UNSIGNED_BYTE&&(K=i.RG8),D===i.UNSIGNED_SHORT&&de&&(K=de.RG16_EXT),D===i.SHORT&&de&&(K=de.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(D===i.UNSIGNED_BYTE&&(K=i.RG8UI),D===i.UNSIGNED_SHORT&&(K=i.RG16UI),D===i.UNSIGNED_INT&&(K=i.RG32UI),D===i.BYTE&&(K=i.RG8I),D===i.SHORT&&(K=i.RG16I),D===i.INT&&(K=i.RG32I)),y===i.RGB_INTEGER&&(D===i.UNSIGNED_BYTE&&(K=i.RGB8UI),D===i.UNSIGNED_SHORT&&(K=i.RGB16UI),D===i.UNSIGNED_INT&&(K=i.RGB32UI),D===i.BYTE&&(K=i.RGB8I),D===i.SHORT&&(K=i.RGB16I),D===i.INT&&(K=i.RGB32I)),y===i.RGBA_INTEGER&&(D===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),D===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),D===i.UNSIGNED_INT&&(K=i.RGBA32UI),D===i.BYTE&&(K=i.RGBA8I),D===i.SHORT&&(K=i.RGBA16I),D===i.INT&&(K=i.RGBA32I)),y===i.RGB&&(D===i.UNSIGNED_SHORT&&de&&(K=de.RGB16_EXT),D===i.SHORT&&de&&(K=de.RGB16_SNORM_EXT),D===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),D===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),y===i.RGBA){let G=ae?ya:nt.getTransfer(X);D===i.FLOAT&&(K=i.RGBA32F),D===i.HALF_FLOAT&&(K=i.RGBA16F),D===i.UNSIGNED_BYTE&&(K=G===bt?i.SRGB8_ALPHA8:i.RGBA8),D===i.UNSIGNED_SHORT&&de&&(K=de.RGBA16_EXT),D===i.SHORT&&de&&(K=de.RGBA16_SNORM_EXT),D===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),D===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function w(P,y){let D;return P?y===null||y===ci||y===Vr?D=i.DEPTH24_STENCIL8:y===kn?D=i.DEPTH32F_STENCIL8:y===Hr&&(D=i.DEPTH24_STENCIL8,ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ci||y===Vr?D=i.DEPTH_COMPONENT24:y===kn?D=i.DEPTH_COMPONENT32F:y===Hr&&(D=i.DEPTH_COMPONENT16),D}function T(P,y){return f(P)===!0||P.isFramebufferTexture&&P.minFilter!==Xt&&P.minFilter!==jt?Math.log2(Math.max(y.width,y.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?y.mipmaps.length:1}function R(P){let y=P.target;y.removeEventListener("dispose",R),A(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&u.delete(y)}function M(P){let y=P.target;y.removeEventListener("dispose",M),I(y)}function A(P){let y=n.get(P);if(y.__webglInit===void 0)return;let D=P.source,B=p.get(D);if(B){let X=B[y.__cacheKey];X.usedTimes--,X.usedTimes===0&&C(P),Object.keys(B).length===0&&p.delete(D)}n.remove(P)}function C(P){let y=n.get(P);i.deleteTexture(y.__webglTexture);let D=P.source,B=p.get(D);delete B[y.__cacheKey],a.memory.textures--}function I(P){let y=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let B=0;B<6;B++){if(Array.isArray(y.__webglFramebuffer[B]))for(let X=0;X<y.__webglFramebuffer[B].length;X++)i.deleteFramebuffer(y.__webglFramebuffer[B][X]);else i.deleteFramebuffer(y.__webglFramebuffer[B]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[B])}else{if(Array.isArray(y.__webglFramebuffer))for(let B=0;B<y.__webglFramebuffer.length;B++)i.deleteFramebuffer(y.__webglFramebuffer[B]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let B=0;B<y.__webglColorRenderbuffer.length;B++)y.__webglColorRenderbuffer[B]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[B]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let D=P.textures;for(let B=0,X=D.length;B<X;B++){let ae=n.get(D[B]);ae.__webglTexture&&(i.deleteTexture(ae.__webglTexture),a.memory.textures--),n.remove(D[B])}n.remove(P)}let F=0;function z(){F=0}function N(){return F}function H(P){F=P}function $(){let P=F;return P>=s.maxTextures&&ze("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,P}function ee(P){let y=[];return y.push(P.wrapS),y.push(P.wrapT),y.push(P.wrapR||0),y.push(P.magFilter),y.push(P.minFilter),y.push(P.anisotropy),y.push(P.internalFormat),y.push(P.format),y.push(P.type),y.push(P.generateMipmaps),y.push(P.premultiplyAlpha),y.push(P.flipY),y.push(P.unpackAlignment),y.push(P.colorSpace),y.join()}function oe(P,y){let D=n.get(P);if(P.isVideoTexture&&L(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&D.__version!==P.version){let B=P.image;if(B===null)ze("WebGLRenderer: Texture marked for update but no image data found.");else if(B.complete===!1)ze("WebGLRenderer: Texture marked for update but image is incomplete");else{Te(D,P,y);return}}else P.isExternalTexture&&(D.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,D.__webglTexture,i.TEXTURE0+y)}function Q(P,y){let D=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&D.__version!==P.version){Te(D,P,y);return}else P.isExternalTexture&&(D.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,D.__webglTexture,i.TEXTURE0+y)}function se(P,y){let D=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&D.__version!==P.version){Te(D,P,y);return}t.bindTexture(i.TEXTURE_3D,D.__webglTexture,i.TEXTURE0+y)}function le(P,y){let D=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&D.__version!==P.version){We(D,P,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+y)}let Se={[gi]:i.REPEAT,[jn]:i.CLAMP_TO_EDGE,[Mr]:i.MIRRORED_REPEAT},Ce={[Xt]:i.NEAREST,[El]:i.NEAREST_MIPMAP_NEAREST,[$s]:i.NEAREST_MIPMAP_LINEAR,[jt]:i.LINEAR,[Gr]:i.LINEAR_MIPMAP_NEAREST,[li]:i.LINEAR_MIPMAP_LINEAR},ft={[Kf]:i.NEVER,[Qf]:i.ALWAYS,[Yf]:i.LESS,[hc]:i.LEQUAL,[Jf]:i.EQUAL,[uc]:i.GEQUAL,[Zf]:i.GREATER,[$f]:i.NOTEQUAL};function at(P,y){if(y.type===kn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===jt||y.magFilter===Gr||y.magFilter===$s||y.magFilter===li||y.minFilter===jt||y.minFilter===Gr||y.minFilter===$s||y.minFilter===li)&&ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,Se[y.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,Se[y.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,Se[y.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,Ce[y.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,Ce[y.minFilter]),y.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,ft[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Xt||y.minFilter!==$s&&y.minFilter!==li||y.type===kn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let D=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function ot(P,y){let D=!1;P.__webglInit===void 0&&(P.__webglInit=!0,y.addEventListener("dispose",R));let B=y.source,X=p.get(B);X===void 0&&(X={},p.set(B,X));let ae=ee(y);if(ae!==P.__cacheKey){X[ae]===void 0&&(X[ae]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,D=!0),X[ae].usedTimes++;let de=X[P.__cacheKey];de!==void 0&&(X[P.__cacheKey].usedTimes--,de.usedTimes===0&&C(y)),P.__cacheKey=ae,P.__webglTexture=X[ae].texture}return D}function Z(P,y,D){return Math.floor(Math.floor(P/D)/y)}function ne(P,y,D,B){let ae=P.updateRanges;if(ae.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,D,B,y.data);else{ae.sort((pe,ce)=>pe.start-ce.start);let de=0;for(let pe=1;pe<ae.length;pe++){let ce=ae[de],he=ae[pe],ge=ce.start+ce.count,Ne=Z(he.start,y.width,4),Ze=Z(ce.start,y.width,4);he.start<=ge+1&&Ne===Ze&&Z(he.start+he.count-1,y.width,4)===Ne?ce.count=Math.max(ce.count,he.start+he.count-ce.start):(++de,ae[de]=he)}ae.length=de+1;let K=t.getParameter(i.UNPACK_ROW_LENGTH),G=t.getParameter(i.UNPACK_SKIP_PIXELS),te=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let pe=0,ce=ae.length;pe<ce;pe++){let he=ae[pe],ge=Math.floor(he.start/4),Ne=Math.ceil(he.count/4),Ze=ge%y.width,k=Math.floor(ge/y.width),_e=Ne,ie=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ze),t.pixelStorei(i.UNPACK_SKIP_ROWS,k),t.texSubImage2D(i.TEXTURE_2D,0,Ze,k,_e,ie,D,B,y.data)}P.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,K),t.pixelStorei(i.UNPACK_SKIP_PIXELS,G),t.pixelStorei(i.UNPACK_SKIP_ROWS,te)}}function Te(P,y,D){let B=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(B=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(B=i.TEXTURE_3D);let X=ot(P,y),ae=y.source;t.bindTexture(B,P.__webglTexture,i.TEXTURE0+D);let de=n.get(ae);if(ae.version!==de.__version||X===!0){if(t.activeTexture(i.TEXTURE0+D),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let ie=nt.getPrimaries(nt.workingColorSpace),be=y.colorSpace===Ji?null:nt.getPrimaries(y.colorSpace),ve=y.colorSpace===Ji||ie===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve)}t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let G=m(y.image,!1,s.maxTextureSize);G=qe(y,G);let te=r.convert(y.format,y.colorSpace),pe=r.convert(y.type),ce=x(y.internalFormat,te,pe,y.normalized,y.colorSpace,y.isVideoTexture);at(B,y);let he,ge=y.mipmaps,Ne=y.isVideoTexture!==!0,Ze=de.__version===void 0||X===!0,k=ae.dataReady,_e=T(y,G);if(y.isDepthTexture)ce=w(y.format===xs,y.type),Ze&&(Ne?t.texStorage2D(i.TEXTURE_2D,1,ce,G.width,G.height):t.texImage2D(i.TEXTURE_2D,0,ce,G.width,G.height,0,te,pe,null));else if(y.isDataTexture)if(ge.length>0){Ne&&Ze&&t.texStorage2D(i.TEXTURE_2D,_e,ce,ge[0].width,ge[0].height);for(let ie=0,be=ge.length;ie<be;ie++)he=ge[ie],Ne?k&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,he.width,he.height,te,pe,he.data):t.texImage2D(i.TEXTURE_2D,ie,ce,he.width,he.height,0,te,pe,he.data);y.generateMipmaps=!1}else Ne?(Ze&&t.texStorage2D(i.TEXTURE_2D,_e,ce,G.width,G.height),k&&ne(y,G,te,pe)):t.texImage2D(i.TEXTURE_2D,0,ce,G.width,G.height,0,te,pe,G.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ne&&Ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,ce,ge[0].width,ge[0].height,G.depth);for(let ie=0,be=ge.length;ie<be;ie++)if(he=ge[ie],y.format!==Bn)if(te!==null)if(Ne){if(k)if(y.layerUpdates.size>0){let ve=au(he.width,he.height,y.format,y.type);for(let re of y.layerUpdates){let Oe=he.data.subarray(re*ve/he.data.BYTES_PER_ELEMENT,(re+1)*ve/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,re,he.width,he.height,1,te,Oe)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,he.width,he.height,G.depth,te,he.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ie,ce,he.width,he.height,G.depth,0,he.data,0,0);else ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?k&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,he.width,he.height,G.depth,te,pe,he.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ie,ce,he.width,he.height,G.depth,0,te,pe,he.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Ne&&Ze&&t.texStorage2D(i.TEXTURE_2D,_e,ce,ge[0].width,ge[0].height);for(let ie=0,be=ge.length;ie<be;ie++)he=ge[ie],y.format!==Bn?te!==null?Ne?k&&t.compressedTexSubImage2D(i.TEXTURE_2D,ie,0,0,he.width,he.height,te,he.data):t.compressedTexImage2D(i.TEXTURE_2D,ie,ce,he.width,he.height,0,he.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?k&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,he.width,he.height,te,pe,he.data):t.texImage2D(i.TEXTURE_2D,ie,ce,he.width,he.height,0,te,pe,he.data)}else if(y.isDataArrayTexture)if(Ne){if(Ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,ce,G.width,G.height,G.depth),k)if(y.layerUpdates.size>0){let ie=au(G.width,G.height,y.format,y.type);for(let be of y.layerUpdates){let ve=G.data.subarray(be*ie/G.data.BYTES_PER_ELEMENT,(be+1)*ie/G.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,be,G.width,G.height,1,te,pe,ve)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,G.width,G.height,G.depth,te,pe,G.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ce,G.width,G.height,G.depth,0,te,pe,G.data);else if(y.isData3DTexture)Ne?(Ze&&t.texStorage3D(i.TEXTURE_3D,_e,ce,G.width,G.height,G.depth),k&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,G.width,G.height,G.depth,te,pe,G.data)):t.texImage3D(i.TEXTURE_3D,0,ce,G.width,G.height,G.depth,0,te,pe,G.data);else if(y.isFramebufferTexture){if(Ze)if(Ne)t.texStorage2D(i.TEXTURE_2D,_e,ce,G.width,G.height);else{let ie=G.width,be=G.height;for(let ve=0;ve<_e;ve++)t.texImage2D(i.TEXTURE_2D,ve,ce,ie,be,0,te,pe,null),ie>>=1,be>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){let ie=i.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),G.parentNode!==ie){ie.appendChild(G),u.add(y),ie.onpaint=be=>{let ve=be.changedElements;for(let re of u)ve.includes(re.image)&&(re.needsUpdate=!0)},ie.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,G);else{let ve=i.RGBA,re=i.RGBA,Oe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ve,re,Oe,G)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ge.length>0){if(Ne&&Ze){let ie=He(ge[0]);t.texStorage2D(i.TEXTURE_2D,_e,ce,ie.width,ie.height)}for(let ie=0,be=ge.length;ie<be;ie++)he=ge[ie],Ne?k&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,te,pe,he):t.texImage2D(i.TEXTURE_2D,ie,ce,te,pe,he);y.generateMipmaps=!1}else if(Ne){if(Ze){let ie=He(G);t.texStorage2D(i.TEXTURE_2D,_e,ce,ie.width,ie.height)}k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,te,pe,G)}else t.texImage2D(i.TEXTURE_2D,0,ce,te,pe,G);f(y)&&v(B),de.__version=ae.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function We(P,y,D){if(y.image.length!==6)return;let B=ot(P,y),X=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+D);let ae=n.get(X);if(X.version!==ae.__version||B===!0){t.activeTexture(i.TEXTURE0+D);let de=nt.getPrimaries(nt.workingColorSpace),K=y.colorSpace===Ji?null:nt.getPrimaries(y.colorSpace),G=y.colorSpace===Ji||de===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,G);let te=y.isCompressedTexture||y.image[0].isCompressedTexture,pe=y.image[0]&&y.image[0].isDataTexture,ce=[];for(let re=0;re<6;re++)!te&&!pe?ce[re]=m(y.image[re],!0,s.maxCubemapSize):ce[re]=pe?y.image[re].image:y.image[re],ce[re]=qe(y,ce[re]);let he=ce[0],ge=r.convert(y.format,y.colorSpace),Ne=r.convert(y.type),Ze=x(y.internalFormat,ge,Ne,y.normalized,y.colorSpace),k=y.isVideoTexture!==!0,_e=ae.__version===void 0||B===!0,ie=X.dataReady,be=T(y,he);at(i.TEXTURE_CUBE_MAP,y);let ve;if(te){k&&_e&&t.texStorage2D(i.TEXTURE_CUBE_MAP,be,Ze,he.width,he.height);for(let re=0;re<6;re++){ve=ce[re].mipmaps;for(let Oe=0;Oe<ve.length;Oe++){let ke=ve[Oe];y.format!==Bn?ge!==null?k?ie&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Oe,0,0,ke.width,ke.height,ge,ke.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Oe,Ze,ke.width,ke.height,0,ke.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Oe,0,0,ke.width,ke.height,ge,Ne,ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Oe,Ze,ke.width,ke.height,0,ge,Ne,ke.data)}}}else{if(ve=y.mipmaps,k&&_e){ve.length>0&&be++;let re=He(ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,be,Ze,re.width,re.height)}for(let re=0;re<6;re++)if(pe){k?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ce[re].width,ce[re].height,ge,Ne,ce[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ze,ce[re].width,ce[re].height,0,ge,Ne,ce[re].data);for(let Oe=0;Oe<ve.length;Oe++){let Ft=ve[Oe].image[re].image;k?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Oe+1,0,0,Ft.width,Ft.height,ge,Ne,Ft.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Oe+1,Ze,Ft.width,Ft.height,0,ge,Ne,Ft.data)}}else{k?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ge,Ne,ce[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ze,ge,Ne,ce[re]);for(let Oe=0;Oe<ve.length;Oe++){let ke=ve[Oe];k?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Oe+1,0,0,ge,Ne,ke.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Oe+1,Ze,ge,Ne,ke.image[re])}}}f(y)&&v(i.TEXTURE_CUBE_MAP),ae.__version=X.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function Ee(P,y,D,B,X,ae){let de=r.convert(D.format,D.colorSpace),K=r.convert(D.type),G=x(D.internalFormat,de,K,D.normalized,D.colorSpace),te=n.get(y),pe=n.get(D);if(pe.__renderTarget=y,!te.__hasExternalTextures){let ce=Math.max(1,y.width>>ae),he=Math.max(1,y.height>>ae);X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?t.texImage3D(X,ae,G,ce,he,y.depth,0,de,K,null):t.texImage2D(X,ae,G,ce,he,0,de,K,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),Le(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,B,X,pe.__webglTexture,0,me(y)):(X===i.TEXTURE_2D||X>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,B,X,pe.__webglTexture,ae),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Qe(P,y,D){if(i.bindRenderbuffer(i.RENDERBUFFER,P),y.depthBuffer){let B=y.depthTexture,X=B&&B.isDepthTexture?B.type:null,ae=w(y.stencilBuffer,X),de=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Le(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me(y),ae,y.width,y.height):D?i.renderbufferStorageMultisample(i.RENDERBUFFER,me(y),ae,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ae,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,de,i.RENDERBUFFER,P)}else{let B=y.textures;for(let X=0;X<B.length;X++){let ae=B[X],de=r.convert(ae.format,ae.colorSpace),K=r.convert(ae.type),G=x(ae.internalFormat,de,K,ae.normalized,ae.colorSpace);Le(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me(y),G,y.width,y.height):D?i.renderbufferStorageMultisample(i.RENDERBUFFER,me(y),G,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,G,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function zt(P,y,D){let B=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let X=n.get(y.depthTexture);if(X.__renderTarget=y,(!X.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),B){if(X.__webglInit===void 0&&(X.__webglInit=!0,y.depthTexture.addEventListener("dispose",R)),X.__webglTexture===void 0){X.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),at(i.TEXTURE_CUBE_MAP,y.depthTexture);let te=r.convert(y.depthTexture.format),pe=r.convert(y.depthTexture.type),ce;y.depthTexture.format===bi?ce=i.DEPTH_COMPONENT24:y.depthTexture.format===xs&&(ce=i.DEPTH24_STENCIL8);for(let he=0;he<6;he++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ce,y.width,y.height,0,te,pe,null)}}else oe(y.depthTexture,0);let ae=X.__webglTexture,de=me(y),K=B?i.TEXTURE_CUBE_MAP_POSITIVE_X+D:i.TEXTURE_2D,G=y.depthTexture.format===xs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===bi)Le(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,K,ae,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,G,K,ae,0);else if(y.depthTexture.format===xs)Le(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,K,ae,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,G,K,ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ye(P){let y=n.get(P),D=P.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==P.depthTexture){let B=P.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),B){let X=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,B.removeEventListener("dispose",X)};B.addEventListener("dispose",X),y.__depthDisposeCallback=X}y.__boundDepthTexture=B}if(P.depthTexture&&!y.__autoAllocateDepthBuffer)if(D)for(let B=0;B<6;B++)zt(y.__webglFramebuffer[B],P,B);else{let B=P.texture.mipmaps;B&&B.length>0?zt(y.__webglFramebuffer[0],P,0):zt(y.__webglFramebuffer,P,0)}else if(D){y.__webglDepthbuffer=[];for(let B=0;B<6;B++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[B]),y.__webglDepthbuffer[B]===void 0)y.__webglDepthbuffer[B]=i.createRenderbuffer(),Qe(y.__webglDepthbuffer[B],P,!1);else{let X=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=y.__webglDepthbuffer[B];i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,ae)}}else{let B=P.texture.mipmaps;if(B&&B.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),Qe(y.__webglDepthbuffer,P,!1);else{let X=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,ae)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function je(P,y,D){let B=n.get(P);y!==void 0&&Ee(B.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),D!==void 0&&Ye(P)}function Je(P){let y=P.texture,D=n.get(P),B=n.get(y);P.addEventListener("dispose",M);let X=P.textures,ae=P.isWebGLCubeRenderTarget===!0,de=X.length>1;if(de||(B.__webglTexture===void 0&&(B.__webglTexture=i.createTexture()),B.__version=y.version,a.memory.textures++),ae){D.__webglFramebuffer=[];for(let K=0;K<6;K++)if(y.mipmaps&&y.mipmaps.length>0){D.__webglFramebuffer[K]=[];for(let G=0;G<y.mipmaps.length;G++)D.__webglFramebuffer[K][G]=i.createFramebuffer()}else D.__webglFramebuffer[K]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){D.__webglFramebuffer=[];for(let K=0;K<y.mipmaps.length;K++)D.__webglFramebuffer[K]=i.createFramebuffer()}else D.__webglFramebuffer=i.createFramebuffer();if(de)for(let K=0,G=X.length;K<G;K++){let te=n.get(X[K]);te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&Le(P)===!1){D.__webglMultisampledFramebuffer=i.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let K=0;K<X.length;K++){let G=X[K];D.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,D.__webglColorRenderbuffer[K]);let te=r.convert(G.format,G.colorSpace),pe=r.convert(G.type),ce=x(G.internalFormat,te,pe,G.normalized,G.colorSpace,P.isXRRenderTarget===!0),he=me(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,he,ce,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,D.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(D.__webglDepthRenderbuffer=i.createRenderbuffer(),Qe(D.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ae){t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture),at(i.TEXTURE_CUBE_MAP,y);for(let K=0;K<6;K++)if(y.mipmaps&&y.mipmaps.length>0)for(let G=0;G<y.mipmaps.length;G++)Ee(D.__webglFramebuffer[K][G],P,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,G);else Ee(D.__webglFramebuffer[K],P,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);f(y)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let K=0,G=X.length;K<G;K++){let te=X[K],pe=n.get(te),ce=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ce=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,pe.__webglTexture),at(ce,te),Ee(D.__webglFramebuffer,P,te,i.COLOR_ATTACHMENT0+K,ce,0),f(te)&&v(ce)}t.unbindTexture()}else{let K=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(K=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(K,B.__webglTexture),at(K,y),y.mipmaps&&y.mipmaps.length>0)for(let G=0;G<y.mipmaps.length;G++)Ee(D.__webglFramebuffer[G],P,y,i.COLOR_ATTACHMENT0,K,G);else Ee(D.__webglFramebuffer,P,y,i.COLOR_ATTACHMENT0,K,0);f(y)&&v(K),t.unbindTexture()}P.depthBuffer&&Ye(P)}function Ke(P){let y=P.textures;for(let D=0,B=y.length;D<B;D++){let X=y[D];if(f(X)){let ae=_(P),de=n.get(X).__webglTexture;t.bindTexture(ae,de),v(ae),t.unbindTexture()}}}let et=[],J=[];function fe(P){if(P.samples>0){if(Le(P)===!1){let y=P.textures,D=P.width,B=P.height,X=i.COLOR_BUFFER_BIT,ae=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=n.get(P),K=y.length>1;if(K)for(let te=0;te<y.length;te++)t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+te,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+te,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer);let G=P.texture.mipmaps;G&&G.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let te=0;te<y.length;te++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(X|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(X|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,de.__webglColorRenderbuffer[te]);let pe=n.get(y[te]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,pe,0)}i.blitFramebuffer(0,0,D,B,0,0,D,B,X,i.NEAREST),l===!0&&(et.length=0,J.length=0,et.push(i.COLOR_ATTACHMENT0+te),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(et.push(ae),J.push(ae),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,J)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,et))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let te=0;te<y.length;te++){t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+te,i.RENDERBUFFER,de.__webglColorRenderbuffer[te]);let pe=n.get(y[te]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+te,i.TEXTURE_2D,pe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let y=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function me(P){return Math.min(s.maxSamples,P.samples)}function Le(P){let y=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function L(P){let y=a.render.frame;h.get(P)!==y&&(h.set(P,y),P.update())}function qe(P,y){let D=P.colorSpace,B=P.format,X=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||D!==wn&&D!==Ji&&(nt.getTransfer(D)===bt?(B!==Bn||X!==Dn)&&ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xe("WebGLTextures: Unsupported texture color space:",D)),y}function He(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=z,this.getTextureUnits=N,this.setTextureUnits=H,this.setTexture2D=oe,this.setTexture2DArray=Q,this.setTexture3D=se,this.setTextureCube=le,this.rebindTextures=je,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=fe,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=Le,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Sv(i,e){function t(n,s=Ji){let r,a=nt.getTransfer(s);if(n===Dn)return i.UNSIGNED_BYTE;if(n===Rl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Cl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Kh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Yh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Xh)return i.BYTE;if(n===jh)return i.SHORT;if(n===Hr)return i.UNSIGNED_SHORT;if(n===Al)return i.INT;if(n===ci)return i.UNSIGNED_INT;if(n===kn)return i.FLOAT;if(n===sn)return i.HALF_FLOAT;if(n===Jh)return i.ALPHA;if(n===Zh)return i.RGB;if(n===Bn)return i.RGBA;if(n===bi)return i.DEPTH_COMPONENT;if(n===xs)return i.DEPTH_STENCIL;if(n===Pl)return i.RED;if(n===Il)return i.RED_INTEGER;if(n===_s)return i.RG;if(n===Ll)return i.RG_INTEGER;if(n===Dl)return i.RGBA_INTEGER;if(n===Za||n===$a||n===Qa||n===eo)if(a===bt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Za)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Za)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$a)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===eo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fl||n===Nl||n===Ul||n===Ol)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Fl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Nl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ul)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ol)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===kl||n===Bl||n===zl||n===Gl||n===Hl||n===to||n===Vl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===kl||n===Bl)return a===bt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===zl)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Gl)return r.COMPRESSED_R11_EAC;if(n===Hl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===to)return r.COMPRESSED_RG11_EAC;if(n===Vl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Wl||n===ql||n===Xl||n===jl||n===Kl||n===Yl||n===Jl||n===Zl||n===$l||n===Ql||n===ec||n===tc||n===nc||n===ic)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Wl)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ql)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xl)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===jl)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Kl)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Yl)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Jl)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Zl)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$l)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ql)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ec)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===tc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===nc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ic)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===sc||n===rc||n===ac)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===sc)return a===bt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===rc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ac)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===oc||n===lc||n===no||n===cc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===oc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===lc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===no)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===cc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var wv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Tv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,vu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new La(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Lt({vertexShader:wv,fragmentShader:Tv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ae(new bn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},yu=class extends xi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null,b=typeof XRWebGLBinding<"u",m=new vu,f={},v=t.getContextAttributes(),_=null,x=null,w=[],T=[],R=new Ue,M=null,A=null,C=new en;C.viewport=new wt;let I=new en;I.viewport=new wt;let F=[C,I],z=new Ml,N=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ne=w[Z];return ne===void 0&&(ne=new Ar,w[Z]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Z){let ne=w[Z];return ne===void 0&&(ne=new Ar,w[Z]=ne),ne.getGripSpace()},this.getHand=function(Z){let ne=w[Z];return ne===void 0&&(ne=new Ar,w[Z]=ne),ne.getHandSpace()};function $(Z){let ne=T.indexOf(Z.inputSource);if(ne===-1)return;let Te=w[ne];Te!==void 0&&(Te.update(Z.inputSource,Z.frame,c||a),Te.dispatchEvent({type:Z.type,data:Z.inputSource}))}function ee(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",ee),s.removeEventListener("inputsourceschange",oe);for(let Z=0;Z<w.length;Z++){let ne=T[Z];ne!==null&&(T[Z]=null,w[Z].disconnect(ne))}N=null,H=null,m.reset();for(let Z in f)delete f[Z];if(e.setRenderTarget(_),p=null,d=null,u=null,s=null,x=null,ot.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(R.width,R.height,!1),A!==null){let Z=A.camera;Z.fov=A.fov,Z.zoom=A.zoom,Z.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&b&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(_=e.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",ee),s.addEventListener("inputsourceschange",oe),v.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(R),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,We=null,Ee=null;v.depth&&(Ee=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Te=v.stencil?xs:bi,We=v.stencil?Vr:ci);let Qe={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Qe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Ht(d.textureWidth,d.textureHeight,{format:Bn,type:Dn,depthTexture:new ms(d.textureWidth,d.textureHeight,We,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Te={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Te),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Ht(p.framebufferWidth,p.framebufferHeight,{format:Bn,type:Dn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ot.setContext(s),ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function oe(Z){for(let ne=0;ne<Z.removed.length;ne++){let Te=Z.removed[ne],We=T.indexOf(Te);We>=0&&(T[We]=null,w[We].disconnect(Te))}for(let ne=0;ne<Z.added.length;ne++){let Te=Z.added[ne],We=T.indexOf(Te);if(We===-1){for(let Qe=0;Qe<w.length;Qe++)if(Qe>=T.length){T.push(Te),We=Qe;break}else if(T[Qe]===null){T[Qe]=Te,We=Qe;break}if(We===-1)break}let Ee=w[We];Ee&&Ee.connect(Te)}}let Q=new U,se=new U;function le(Z,ne,Te){Q.setFromMatrixPosition(ne.matrixWorld),se.setFromMatrixPosition(Te.matrixWorld);let We=Q.distanceTo(se),Ee=ne.projectionMatrix.elements,Qe=Te.projectionMatrix.elements,zt=Ee[14]/(Ee[10]-1),Ye=Ee[14]/(Ee[10]+1),je=(Ee[9]+1)/Ee[5],Je=(Ee[9]-1)/Ee[5],Ke=(Ee[8]-1)/Ee[0],et=(Qe[8]+1)/Qe[0],J=zt*Ke,fe=zt*et,me=We/(-Ke+et),Le=me*-Ke;if(ne.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Le),Z.translateZ(me),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ee[10]===-1)Z.projectionMatrix.copy(ne.projectionMatrix),Z.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let L=zt+me,qe=Ye+me,He=J-Le,P=fe+(We-Le),y=je*Ye/qe*L,D=Je*Ye/qe*L;Z.projectionMatrix.makePerspective(He,P,y,D,L,qe),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Se(Z,ne){ne===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ne.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let ne=Z.near,Te=Z.far;m.texture!==null&&(m.depthNear>0&&(ne=m.depthNear),m.depthFar>0&&(Te=m.depthFar)),z.near=I.near=C.near=ne,z.far=I.far=C.far=Te,(N!==z.near||H!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),N=z.near,H=z.far),z.layers.mask=Z.layers.mask|6,C.layers.mask=z.layers.mask&-5,I.layers.mask=z.layers.mask&-3;let We=Z.parent,Ee=z.cameras;Se(z,We);for(let Qe=0;Qe<Ee.length;Qe++)Se(Ee[Qe],We);Ee.length===2?le(z,C,I):z.projectionMatrix.copy(C.projectionMatrix),A===null&&Z.isPerspectiveCamera&&(A={camera:Z,fov:Z.fov,zoom:Z.zoom}),Ce(Z,z,We)};function Ce(Z,ne,Te){Te===null?Z.matrix.copy(ne.matrixWorld):(Z.matrix.copy(Te.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ne.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ne.projectionMatrix),Z.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Os*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(Z){return f[Z]};let ft=null;function at(Z,ne){if(h=ne.getViewerPose(c||a),g=ne,h!==null){let Te=h.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let We=!1;Te.length!==z.cameras.length&&(z.cameras.length=0,We=!0);for(let Ye=0;Ye<Te.length;Ye++){let je=Te[Ye],Je=null;if(p!==null)Je=p.getViewport(je);else{let et=u.getViewSubImage(d,je);Je=et.viewport,Ye===0&&(e.setRenderTargetTextures(x,et.colorTexture,et.depthStencilTexture),e.setRenderTarget(x))}let Ke=F[Ye];Ke===void 0&&(Ke=new en,Ke.layers.enable(Ye),Ke.viewport=new wt,F[Ye]=Ke),Ke.matrix.fromArray(je.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(je.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(Je.x,Je.y,Je.width,Je.height),Ye===0&&(z.matrix.copy(Ke.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),We===!0&&z.cameras.push(Ke)}let Ee=s.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){u=n.getBinding();let Ye=u.getDepthInformation(Te[0]);Ye&&Ye.isValid&&Ye.texture&&m.init(Ye,s.renderState)}if(Ee&&Ee.includes("camera-access")&&b){e.state.unbindTexture(),u=n.getBinding();for(let Ye=0;Ye<Te.length;Ye++){let je=Te[Ye].camera;if(je){let Je=f[je];Je||(Je=new La,f[je]=Je);let Ke=u.getCameraImage(je);Je.sourceTexture=Ke}}}}for(let Te=0;Te<w.length;Te++){let We=T[Te],Ee=w[Te];We!==null&&Ee!==void 0&&Ee.update(We,ne,c||a)}ft&&ft(Z,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),g=null}let ot=new Rp;ot.setAnimationLoop(at),this.setAnimationLoop=function(Z){ft=Z},this.dispose=function(){}}},Ev=new tt,Fp=new $e;Fp.set(-1,0,0,0,1,0,0,0,1);function Av(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,iu(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,v,_,x){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),b(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,v,_):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===nn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===nn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let v=e.get(f),_=v.envMap,x=v.envMapRotation;_&&(m.envMap.value=_,m.envMapRotation.value.setFromMatrix4(Ev.makeRotationFromEuler(x)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Fp),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,v,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=_*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===nn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function b(m,f){let v=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Rv(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,w){let T=w.program;n.uniformBlockBinding(x,T)}function c(x,w){let T=s[x.id];T===void 0&&(m(x),T=h(x),s[x.id]=T,x.addEventListener("dispose",v));let R=w.program;n.updateUBOMapping(x,R);let M=e.render.frame;r[x.id]!==M&&(d(x),r[x.id]=M)}function h(x){let w=u();x.__bindingPointIndex=w;let T=i.createBuffer(),R=x.__size,M=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,R,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,T),T}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return Xe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){let w=s[x.id],T=x.uniforms,R=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let M=0,A=T.length;M<A;M++){let C=T[M];if(Array.isArray(C))for(let I=0,F=C.length;I<F;I++)p(C[I],M,I,R);else p(C,M,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(x,w,T,R){if(b(x,w,T,R)===!0){let M=x.__offset,A=x.value;if(Array.isArray(A)){let C=0;for(let I=0;I<A.length;I++){let F=A[I],z=f(F);g(F,x.__data,C),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(C+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(A,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,M,x.__data)}}function g(x,w,T){typeof x=="number"||typeof x=="boolean"?w[0]=x:x.isMatrix3?(w[0]=x.elements[0],w[1]=x.elements[1],w[2]=x.elements[2],w[3]=0,w[4]=x.elements[3],w[5]=x.elements[4],w[6]=x.elements[5],w[7]=0,w[8]=x.elements[6],w[9]=x.elements[7],w[10]=x.elements[8],w[11]=0):ArrayBuffer.isView(x)?w.set(new x.constructor(x.buffer,x.byteOffset,w.length)):x.toArray(w,T)}function b(x,w,T,R){let M=x.value,A=w+"_"+T;if(R[A]===void 0)return typeof M=="number"||typeof M=="boolean"?R[A]=M:ArrayBuffer.isView(M)?R[A]=M.slice():R[A]=M.clone(),!0;{let C=R[A];if(typeof M=="number"||typeof M=="boolean"){if(C!==M)return R[A]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(C.equals(M)===!1)return C.copy(M),!0}}return!1}function m(x){let w=x.uniforms,T=0,R=16;for(let A=0,C=w.length;A<C;A++){let I=Array.isArray(w[A])?w[A]:[w[A]];for(let F=0,z=I.length;F<z;F++){let N=I[F],H=Array.isArray(N.value)?N.value:[N.value];for(let $=0,ee=H.length;$<ee;$++){let oe=H[$],Q=f(oe),se=T%R,le=se%Q.boundary,Se=se+le;T+=le,Se!==0&&R-Se<Q.storage&&(T+=R-Se),N.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=T,T+=Q.storage}}}let M=T%R;return M>0&&(T+=R-M),x.__size=T,x.__cache={},this}function f(x){let w={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(w.boundary=4,w.storage=4):x.isVector2?(w.boundary=8,w.storage=8):x.isVector3||x.isColor?(w.boundary=16,w.storage=12):x.isVector4?(w.boundary=16,w.storage=16):x.isMatrix3?(w.boundary=48,w.storage=48):x.isMatrix4?(w.boundary=64,w.storage=64):x.isTexture?ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(w.boundary=16,w.storage=x.byteLength):ze("WebGLRenderer: Unsupported uniform value type.",x),w}function v(x){let w=x.target;w.removeEventListener("dispose",v);let T=a.indexOf(w.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function _(){for(let x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:_}}var Cv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ai=null;function Pv(){return Ai===null&&(Ai=new Ir(Cv,16,16,_s,sn),Ai.name="DFG_LUT",Ai.minFilter=jt,Ai.magFilter=jt,Ai.wrapS=jn,Ai.wrapT=jn,Ai.generateMipmaps=!1,Ai.needsUpdate=!0),Ai}var mc=class{constructor(e={}){let{canvas:t=ep(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:p=Dn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let b=p,m=new Set([Dl,Ll,Il]),f=new Set([Dn,ci,Hr,Vr,Rl,Cl]),v=new Uint32Array(4),_=new Int32Array(4),x=new U,w=null,T=null,R=[],M=[],A=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,I=!1,F=null,z=null,N=null,H=null;this._outputColorSpace=Gt;let $=0,ee=0,oe=null,Q=-1,se=null,le=new wt,Se=new wt,Ce=null,ft=new xe(0),at=0,ot=t.width,Z=t.height,ne=1,Te=null,We=null,Ee=new wt(0,0,ot,Z),Qe=new wt(0,0,ot,Z),zt=!1,Ye=new Lr,je=!1,Je=!1,Ke=new tt,et=new U,J=new wt,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},me=!1;function Le(){return oe===null?ne:1}let L=n;function qe(E,O){return t.getContext(E,O)}let He,P,y,D,B,X,ae,de,K,G,te,pe,ce,he,ge,Ne,Ze,k,_e,ie,be,ve,re;try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Ft,!1),t.addEventListener("webglcontextrestored",yt,!1),t.addEventListener("webglcontextcreationerror",$n,!1),L===null){let O="webgl2";if(L=qe(O,E),L===null)throw qe(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Oe()}catch(E){throw t.removeEventListener("webglcontextlost",Ft,!1),t.removeEventListener("webglcontextrestored",yt,!1),t.removeEventListener("webglcontextcreationerror",$n,!1),Xe("WebGLRenderer: "+E.message),E}function Oe(){He=new Ox(L),He.init(),be=new Sv(L,He),P=new Ax(L,He,e,be),y=new yv(L,He),P.reversedDepthBuffer&&d&&y.buffers.depth.setReversed(!0),z=L.createFramebuffer(),N=L.createFramebuffer(),H=L.createFramebuffer(),D=new zx(L),B=new ov,X=new Mv(L,He,y,B,P,be,D),ae=new Ux(C),de=new Hg(L),ve=new Tx(L,de),K=new kx(L,de,D,ve),G=new Hx(L,K,de,ve,D),k=new Gx(L,P,X),ge=new Rx(B),te=new av(C,ae,He,P,ve,ge),pe=new Av(C,B),ce=new cv,he=new mv(He),Ze=new wx(C,ae,y,G,g,l),Ne=new vv(C,G,P),re=new Rv(L,D,P,y),_e=new Ex(L,He,D),ie=new Bx(L,He,D),D.programs=te.programs,C.capabilities=P,C.extensions=He,C.properties=B,C.renderLists=ce,C.shadowMap=Ne,C.state=y,C.info=D}b!==Dn&&(A=new Wx(b,t.width,t.height,o,s,r));let ke=new yu(C,L);this.xr=ke,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let E=He.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=He.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(E){E!==void 0&&(ne=E,this.setSize(ot,Z,!1))},this.getSize=function(E){return E.set(ot,Z)},this.setSize=function(E,O,Y=!0){if(ke.isPresenting){ze("WebGLRenderer: Can't change size while VR device is presenting.");return}ot=E,Z=O,t.width=Math.floor(E*ne),t.height=Math.floor(O*ne),Y===!0&&(t.style.width=E+"px",t.style.height=O+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(ot*ne,Z*ne).floor()},this.setDrawingBufferSize=function(E,O,Y){ot=E,Z=O,ne=Y,t.width=Math.floor(E*Y),t.height=Math.floor(O*Y),this.setViewport(0,0,E,O)},this.setEffects=function(E){if(b===Dn){Xe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let O=0;O<E.length;O++)if(E[O].isOutputPass===!0){ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(le)},this.getViewport=function(E){return E.copy(Ee)},this.setViewport=function(E,O,Y,V){E.isVector4?Ee.set(E.x,E.y,E.z,E.w):Ee.set(E,O,Y,V),y.viewport(le.copy(Ee).multiplyScalar(ne).round())},this.getScissor=function(E){return E.copy(Qe)},this.setScissor=function(E,O,Y,V){E.isVector4?Qe.set(E.x,E.y,E.z,E.w):Qe.set(E,O,Y,V),y.scissor(Se.copy(Qe).multiplyScalar(ne).round())},this.getScissorTest=function(){return zt},this.setScissorTest=function(E){y.setScissorTest(zt=E)},this.setOpaqueSort=function(E){Te=E},this.setTransparentSort=function(E){We=E},this.getClearColor=function(E){return E.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(E=!0,O=!0,Y=!0){let V=0;if(E){let W=!1;if(oe!==null){let we=oe.texture.format;W=m.has(we)}if(W){let we=oe.texture.type,Ie=f.has(we),Me=Ze.getClearColor(),De=Ze.getClearAlpha(),Be=Me.r,st=Me.g,ht=Me.b;Ie?(v[0]=Be,v[1]=st,v[2]=ht,v[3]=De,L.clearBufferuiv(L.COLOR,0,v)):(_[0]=Be,_[1]=st,_[2]=ht,_[3]=De,L.clearBufferiv(L.COLOR,0,_))}else V|=L.COLOR_BUFFER_BIT}O&&(V|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(V|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&L.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),F=E},this.dispose=function(){t.removeEventListener("webglcontextlost",Ft,!1),t.removeEventListener("webglcontextrestored",yt,!1),t.removeEventListener("webglcontextcreationerror",$n,!1),Ze.dispose(),ce.dispose(),he.dispose(),B.dispose(),ae.dispose(),G.dispose(),ve.dispose(),re.dispose(),te.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",Ad),ke.removeEventListener("sessionend",Rd),Cs.stop()};function Ft(E){E.preventDefault(),Ma("WebGLRenderer: Context Lost."),I=!0}function yt(){Ma("WebGLRenderer: Context Restored."),I=!1;let E=D.autoReset,O=Ne.enabled,Y=Ne.autoUpdate,V=Ne.needsUpdate,W=Ne.type;Oe(),D.autoReset=E,Ne.enabled=O,Ne.autoUpdate=Y,Ne.needsUpdate=V,Ne.type=W}function $n(E){Xe("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function di(E){let O=E.target;O.removeEventListener("dispose",di),Rm(O)}function Rm(E){Cm(E),B.remove(E)}function Cm(E){let O=B.get(E).programs;O!==void 0&&(O.forEach(function(Y){te.releaseProgram(Y)}),E.isShaderMaterial&&te.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,Y,V,W,we){O===null&&(O=fe);let Ie=W.isMesh&&W.matrixWorld.determinantAffine()<0,Me=Lm(E,O,Y,V,W);y.setMaterial(V,Ie);let De=Y.index,Be=1;if(V.wireframe===!0){if(De=K.getWireframeAttribute(Y),De===void 0)return;Be=2}let st=Y.drawRange,ht=Y.attributes.position,Fe=st.start*Be,Mt=(st.start+st.count)*Be;we!==null&&(Fe=Math.max(Fe,we.start*Be),Mt=Math.min(Mt,(we.start+we.count)*Be)),De!==null?(Fe=Math.max(Fe,0),Mt=Math.min(Mt,De.count)):ht!=null&&(Fe=Math.max(Fe,0),Mt=Math.min(Mt,ht.count));let $t=Mt-Fe;if($t<0||$t===1/0)return;ve.setup(W,V,Me,Y,De);let kt,Pt=_e;if(De!==null&&(kt=de.get(De),Pt=ie,Pt.setIndex(kt)),W.isMesh)V.wireframe===!0?(y.setLineWidth(V.wireframeLinewidth*Le()),Pt.setMode(L.LINES)):Pt.setMode(L.TRIANGLES);else if(W.isLine){let pn=V.linewidth;pn===void 0&&(pn=1),y.setLineWidth(pn*Le()),W.isLineSegments?Pt.setMode(L.LINES):W.isLineLoop?Pt.setMode(L.LINE_LOOP):Pt.setMode(L.LINE_STRIP)}else W.isPoints?Pt.setMode(L.POINTS):W.isSprite&&Pt.setMode(L.TRIANGLES);if(W.isBatchedMesh)if(He.get("WEBGL_multi_draw"))Pt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let pn=W._multiDrawStarts,Pe=W._multiDrawCounts,Mn=W._multiDrawCount,gt=De?de.get(De).bytesPerElement:1,qn=B.get(V).currentProgram.getUniforms();for(let fi=0;fi<Mn;fi++)qn.setValue(L,"_gl_DrawID",fi),Pt.render(pn[fi]/gt,Pe[fi])}else if(W.isInstancedMesh)Pt.renderInstances(Fe,$t,W.count);else if(Y.isInstancedBufferGeometry){let pn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Pe=Math.min(Y.instanceCount,pn);Pt.renderInstances(Fe,$t,Pe)}else Pt.render(Fe,$t)};function Ed(E,O,Y,V){F!==null&&E.isNodeMaterial&&F.setObject(V,E),je===!0&&ge.setState(E,Y,!1),E.transparent===!0&&E.side===Vt&&E.forceSinglePass===!1?(E.side=nn,E.needsUpdate=!0,wo(E,O,V),E.side=Ei,E.needsUpdate=!0,wo(E,O,V),E.side=Vt):wo(E,O,V)}this.compile=function(E,O,Y=null){Y===null&&(Y=E),F!==null&&F.renderStart(E,O,Y),T=he.get(Y),T.init(O),M.push(T),Y.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),E!==Y&&E.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),T.setupLights(),F!==null&&F.updateLights(T.state.lightsArray),Je=this.localClippingEnabled,je=ge.init(this.clippingPlanes,Je),je===!0&&ge.setGlobalState(this.clippingPlanes,O),F!==null&&Ne.render(T.state.shadowsArray,Y,O);let V=new Set;return E.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let we=W.material;if(we)if(Array.isArray(we))for(let Ie=0;Ie<we.length;Ie++){let Me=we[Ie];Ed(Me,Y,O,W),V.add(Me)}else Ed(we,Y,O,W),V.add(we)}),T=M.pop(),F!==null&&F.renderEnd(),V},this.compileAsync=function(E,O,Y=null){let V=this.compile(E,O,Y);return new Promise(W=>{function we(){if(V.forEach(function(Ie){let De=B.get(Ie).currentProgram;(De===void 0||De.isReady())&&V.delete(Ie)}),V.size===0){W(E);return}setTimeout(we,10)}He.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let nh=null;function Pm(E){nh&&nh(E)}function Ad(){Cs.stop()}function Rd(){Cs.start()}let Cs=new Rp;Cs.setAnimationLoop(Pm),typeof self<"u"&&Cs.setContext(self),this.setAnimationLoop=function(E){nh=E,ke.setAnimationLoop(E),E===null?Cs.stop():Cs.start()},ke.addEventListener("sessionstart",Ad),ke.addEventListener("sessionend",Rd),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){Xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;F!==null&&F.renderStart(E,O);let Y=ke.enabled===!0&&ke.isPresenting===!0,V=A!==null&&(oe===null||Y)&&A.begin(C,oe);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(ke.cameraAutoUpdate===!0&&ke.updateCamera(O),O=ke.getCamera()),E.isScene===!0&&E.onBeforeRender(C,E,O,oe),T=he.get(E,M.length),T.init(O),T.state.textureUnits=X.getTextureUnits(),M.push(T),Ke.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Ye.setFromProjectionMatrix(Ke,si,O.reversedDepth),Je=this.localClippingEnabled,je=ge.init(this.clippingPlanes,Je),w=ce.get(E,R.length),w.init(),R.push(w),ke.enabled===!0&&ke.isPresenting===!0){let Ie=C.xr.getDepthSensingMesh();Ie!==null&&ih(Ie,O,-1/0,C.sortObjects)}ih(E,O,0,C.sortObjects),w.finish(),F!==null&&F.updateLights(T.state.lightsArray),C.sortObjects===!0&&w.sort(Te,We),me=ke.enabled===!1||ke.isPresenting===!1||ke.hasDepthSensing()===!1,me&&Ze.addToRenderList(w,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),je===!0&&ge.beginShadows();let W=T.state.shadowsArray;if(Ne.render(W,E,O),je===!0&&ge.endShadows(),(V&&A.hasRenderPass())===!1){let Ie=w.opaque,Me=w.transmissive;if(T.setupLights(),O.isArrayCamera){let De=O.cameras;if(Me.length>0)for(let Be=0,st=De.length;Be<st;Be++){let ht=De[Be];Pd(Ie,Me,E,ht)}me&&Ze.render(E);for(let Be=0,st=De.length;Be<st;Be++){let ht=De[Be];Cd(w,E,ht,ht.viewport)}}else Me.length>0&&Pd(Ie,Me,E,O),me&&Ze.render(E),Cd(w,E,O)}oe!==null&&ee===0&&(X.updateMultisampleRenderTarget(oe),X.updateRenderTargetMipmap(oe)),V&&A.end(C),E.isScene===!0&&E.onAfterRender(C,E,O),ve.resetDefaultState(),Q=-1,se=null,M.pop(),M.length>0?(T=M[M.length-1],X.setTextureUnits(T.state.textureUnits),je===!0&&ge.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,R.pop(),R.length>0?w=R[R.length-1]:w=null,F!==null&&F.renderEnd()};function ih(E,O,Y,V){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)Y=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLightProbeGrid)T.pushLightProbeGrid(E);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(Ye)){V&&J.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ke);let Ie=G.update(E),Me=E.material;Me.visible&&w.push(E,Ie,Me,Y,J.z,null,O)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(Ye))){let Ie=G.update(E),Me=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),J.copy(E.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),J.copy(Ie.boundingSphere.center)),J.applyMatrix4(E.matrixWorld).applyMatrix4(Ke)),Array.isArray(Me)){let De=Ie.groups;for(let Be=0,st=De.length;Be<st;Be++){let ht=De[Be],Fe=Me[ht.materialIndex];Fe&&Fe.visible&&w.push(E,Ie,Fe,Y,J.z,ht,O)}}else Me.visible&&w.push(E,Ie,Me,Y,J.z,null,O)}}let we=E.children;for(let Ie=0,Me=we.length;Ie<Me;Ie++)ih(we[Ie],O,Y,V)}function Cd(E,O,Y,V){let{opaque:W,transmissive:we,transparent:Ie}=E;T.setupLightsView(Y),je===!0&&ge.setGlobalState(C.clippingPlanes,Y),V&&y.viewport(le.copy(V)),W.length>0&&So(W,O,Y),we.length>0&&So(we,O,Y),Ie.length>0&&So(Ie,O,Y),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Pd(E,O,Y,V){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[V.id]===void 0){let Fe=He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[V.id]=new Ht(1,1,{generateMipmaps:!0,type:Fe?sn:Dn,minFilter:li,samples:Math.max(4,P.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:nt.workingColorSpace})}let we=T.state.transmissionRenderTarget[V.id],Ie=V.viewport||le;we.setSize(Ie.z*C.transmissionResolutionScale,Ie.w*C.transmissionResolutionScale);let Me=C.getRenderTarget(),De=C.getActiveCubeFace(),Be=C.getActiveMipmapLevel();C.setRenderTarget(we),C.getClearColor(ft),at=C.getClearAlpha(),at<1&&C.setClearColor(16777215,.5),C.clear(),me&&Ze.render(Y);let st=C.toneMapping;C.toneMapping=oi;let ht=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),T.setupLightsView(V),je===!0&&ge.setGlobalState(C.clippingPlanes,V),So(E,Y,V),X.updateMultisampleRenderTarget(we),X.updateRenderTargetMipmap(we),He.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let Mt=0,$t=O.length;Mt<$t;Mt++){let kt=O[Mt],{object:Pt,geometry:pn,material:Pe,group:Mn}=kt;if(Pe.side===Vt&&Pt.layers.test(V.layers)){let gt=Pe.side;Pe.side=nn,Pe.needsUpdate=!0,Id(Pt,Y,V,pn,Pe,Mn),Pe.side=gt,Pe.needsUpdate=!0,Fe=!0}}Fe===!0&&(X.updateMultisampleRenderTarget(we),X.updateRenderTargetMipmap(we))}C.setRenderTarget(Me,De,Be),C.setClearColor(ft,at),ht!==void 0&&(V.viewport=ht),C.toneMapping=st}function So(E,O,Y){let V=O.isScene===!0?O.overrideMaterial:null;for(let W=0,we=E.length;W<we;W++){let Ie=E[W],{object:Me,geometry:De,group:Be}=Ie,st=Ie.material;st.allowOverride===!0&&V!==null&&(st=V),Me.layers.test(Y.layers)&&Id(Me,O,Y,De,st,Be)}}function Id(E,O,Y,V,W,we){F!==null&&W.isNodeMaterial&&F.setObject(E,W),E.onBeforeRender(C,O,Y,V,W,we),E.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.onBeforeRender(C,O,Y,V,E,we),W.transparent===!0&&W.side===Vt&&W.forceSinglePass===!1?(W.side=nn,W.needsUpdate=!0,C.renderBufferDirect(Y,O,V,W,E,we),W.side=Ei,W.needsUpdate=!0,C.renderBufferDirect(Y,O,V,W,E,we),W.side=Vt):C.renderBufferDirect(Y,O,V,W,E,we),E.onAfterRender(C,O,Y,V,W,we)}function wo(E,O,Y){O.isScene!==!0&&(O=fe);let V=B.get(E),W=T.state.lights,we=T.state.shadowsArray,Ie=W.state.version,Me=te.getParameters(E,W.state,we,O,Y,T.state.lightProbeGridArray),De=te.getProgramCacheKey(Me),Be=V.programs;V.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?O.environment:null,V.fog=O.fog;let st=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;V.envMap=ae.get(E.envMap||V.environment,st),V.envMapRotation=V.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,Be===void 0&&(E.addEventListener("dispose",di),Be=new Map,V.programs=Be);let ht=Be.get(De);if(ht!==void 0){if(V.currentProgram===ht&&V.lightsStateVersion===Ie)return Dd(E,Me),ht}else Me.uniforms=te.getUniforms(E),F!==null&&E.isNodeMaterial&&F.build(E,Y,Me),E.onBeforeCompile(Me,C),ht=te.acquireProgram(Me,De),Be.set(De,ht),V.uniforms=Me.uniforms;let Fe=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Fe.clippingPlanes=ge.uniform),Dd(E,Me),V.needsLights=Fm(E),V.lightsStateVersion=Ie,V.needsLights&&(Fe.ambientLightColor.value=W.state.ambient,Fe.lightProbe.value=W.state.probe,Fe.sunLights.value=W.state.sun,Fe.sunLightShadows.value=W.state.sunShadow,Fe.directionalLights.value=W.state.directional,Fe.directionalLightShadows.value=W.state.directionalShadow,Fe.spotLights.value=W.state.spot,Fe.spotLightShadows.value=W.state.spotShadow,Fe.rectAreaLights.value=W.state.rectArea,Fe.ltc_1.value=W.state.rectAreaLTC1,Fe.ltc_2.value=W.state.rectAreaLTC2,Fe.pointLights.value=W.state.point,Fe.pointLightShadows.value=W.state.pointShadow,Fe.hemisphereLights.value=W.state.hemi,Fe.sunShadowMatrix.value=W.state.sunShadowMatrix,Fe.sunShadowCascade.value=W.state.sunShadowCascade,Fe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Fe.spotLightMatrix.value=W.state.spotLightMatrix,Fe.spotLightMap.value=W.state.spotLightMap,Fe.pointShadowMatrix.value=W.state.pointShadowMatrix),V.lightProbeGrid=T.state.lightProbeGridArray.length>0,V.currentProgram=ht,V.uniformsList=null,ht}function Ld(E){if(E.uniformsList===null){let O=E.currentProgram.getUniforms();E.uniformsList=jr.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function Dd(E,O){let Y=B.get(E);Y.outputColorSpace=O.outputColorSpace,Y.batching=O.batching,Y.batchingColor=O.batchingColor,Y.instancing=O.instancing,Y.instancingColor=O.instancingColor,Y.instancingMorph=O.instancingMorph,Y.skinning=O.skinning,Y.morphTargets=O.morphTargets,Y.morphNormals=O.morphNormals,Y.morphColors=O.morphColors,Y.morphTargetsCount=O.morphTargetsCount,Y.numClippingPlanes=O.numClippingPlanes,Y.numIntersection=O.numClipIntersection,Y.vertexAlphas=O.vertexAlphas,Y.vertexTangents=O.vertexTangents,Y.toneMapping=O.toneMapping}function Im(E,O){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;x.setFromMatrixPosition(O.matrixWorld);for(let Y=0,V=E.length;Y<V;Y++){let W=E[Y];if(W.texture!==null&&W.boundingBox.containsPoint(x))return W}return null}function Lm(E,O,Y,V,W){O.isScene!==!0&&(O=fe),X.resetTextureUnits();let we=O.fog,Ie=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?O.environment:null,Me=oe===null?C.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:nt.workingColorSpace,De=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Be=ae.get(V.envMap||Ie,De),st=V.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,ht=!!Y.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Fe=!!Y.morphAttributes.position,Mt=!!Y.morphAttributes.normal,$t=!!Y.morphAttributes.color,kt=oi;V.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(kt=C.toneMapping);let Pt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,pn=Pt!==void 0?Pt.length:0,Pe=B.get(V),Mn=T.state.lights;if(je===!0&&(Je===!0||E!==se)){let Nt=E===se&&V.id===Q;ge.setState(V,E,Nt)}let gt=!1;V.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==Mn.state.version||Pe.outputColorSpace!==Me||W.isBatchedMesh&&Pe.batching===!1||!W.isBatchedMesh&&Pe.batching===!0||W.isBatchedMesh&&Pe.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Pe.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Pe.instancing===!1||!W.isInstancedMesh&&Pe.instancing===!0||W.isSkinnedMesh&&Pe.skinning===!1||!W.isSkinnedMesh&&Pe.skinning===!0||W.isInstancedMesh&&Pe.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Pe.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Pe.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Pe.instancingMorph===!1&&W.morphTexture!==null||Pe.envMap!==Be||V.fog===!0&&Pe.fog!==we||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==ge.numPlanes||Pe.numIntersection!==ge.numIntersection)||Pe.vertexAlphas!==st||Pe.vertexTangents!==ht||Pe.morphTargets!==Fe||Pe.morphNormals!==Mt||Pe.morphColors!==$t||Pe.toneMapping!==kt||Pe.morphTargetsCount!==pn||!!Pe.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(gt=!0):(gt=!0,Pe.__version=V.version);let qn=Pe.currentProgram;gt===!0&&(qn=wo(V,O,W),F&&V.isNodeMaterial&&F.onUpdateProgram(V,qn,Pe));let fi=!1,ss=!1,sr=!1,At=qn.getUniforms(),qt=Pe.uniforms;if(y.useProgram(qn.program)&&(fi=!0,ss=!0,sr=!0),V.id!==Q&&(Q=V.id,ss=!0),Pe.needsLights){let Nt=Im(T.state.lightProbeGridArray,W);Pe.lightProbeGrid!==Nt&&(Pe.lightProbeGrid=Nt,ss=!0)}if(fi||se!==E){y.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),At.setValue(L,"projectionMatrix",E.projectionMatrix),At.setValue(L,"viewMatrix",E.matrixWorldInverse);let as=At.map.cameraPosition;as!==void 0&&as.setValue(L,et.setFromMatrixPosition(E.matrixWorld)),P.logarithmicDepthBuffer&&At.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&At.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),se!==E&&(se=E,ss=!0,sr=!0)}if(Pe.needsLights&&(Mn.state.sunShadowMap.length>0&&At.setValue(L,"sunShadowMap",Mn.state.sunShadowMap,X),Mn.state.directionalShadowMap.length>0&&At.setValue(L,"directionalShadowMap",Mn.state.directionalShadowMap,X),Mn.state.spotShadowMap.length>0&&At.setValue(L,"spotShadowMap",Mn.state.spotShadowMap,X),Mn.state.pointShadowMap.length>0&&At.setValue(L,"pointShadowMap",Mn.state.pointShadowMap,X)),W.isSkinnedMesh){At.setOptional(L,W,"bindMatrix"),At.setOptional(L,W,"bindMatrixInverse");let Nt=W.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),At.setValue(L,"boneTexture",Nt.boneTexture,X))}W.isBatchedMesh&&(At.setOptional(L,W,"batchingTexture"),At.setValue(L,"batchingTexture",W._matricesTexture,X),At.setOptional(L,W,"batchingIdTexture"),At.setValue(L,"batchingIdTexture",W._indirectTexture,X),At.setOptional(L,W,"batchingColorTexture"),W._colorsTexture!==null&&At.setValue(L,"batchingColorTexture",W._colorsTexture,X));let rs=Y.morphAttributes;if((rs.position!==void 0||rs.normal!==void 0||rs.color!==void 0)&&k.update(W,Y,qn),(ss||Pe.receiveShadow!==W.receiveShadow)&&(Pe.receiveShadow=W.receiveShadow,At.setValue(L,"receiveShadow",W.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&O.environment!==null&&(qt.envMapIntensity.value=O.environmentIntensity),qt.dfgLUT!==void 0&&(qt.dfgLUT.value=Pv()),ss){if(At.setValue(L,"toneMappingExposure",C.toneMappingExposure),Pe.needsLights&&Dm(qt,sr),we&&V.fog===!0&&pe.refreshFogUniforms(qt,we),pe.refreshMaterialUniforms(qt,V,ne,Z,T.state.transmissionRenderTarget[E.id]),Pe.needsLights&&Pe.lightProbeGrid){let Nt=Pe.lightProbeGrid;qt.probesSH.value=Nt.texture,qt.probesMin.value.copy(Nt.boundingBox.min),qt.probesMax.value.copy(Nt.boundingBox.max),qt.probesResolution.value.copy(Nt.resolution)}jr.upload(L,Ld(Pe),qt,X)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(jr.upload(L,Ld(Pe),qt,X),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&At.setValue(L,"center",W.center),At.setValue(L,"modelViewMatrix",W.modelViewMatrix),At.setValue(L,"normalMatrix",W.normalMatrix),At.setValue(L,"modelMatrix",W.matrixWorld),V.uniformsGroups!==void 0){let Nt=V.uniformsGroups;for(let as=0,rr=Nt.length;as<rr;as++){let Nd=Nt[as];re.update(Nd,qn),re.bind(Nd,qn)}}return qn}function Dm(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.sunLights.needsUpdate=O,E.sunLightShadows.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function Fm(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return oe},this.setRenderTargetTextures=function(E,O,Y){let V=B.get(E);V.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),B.get(E.texture).__webglTexture=O,B.get(E.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:Y,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,O){let Y=B.get(E);Y.__webglFramebuffer=O,Y.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,Y=0){oe=E,$=O,ee=Y;let V=null,W=!1,we=!1;if(E){let Me=B.get(E);if(Me.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(L.FRAMEBUFFER,Me.__webglFramebuffer),le.copy(E.viewport),Se.copy(E.scissor),Ce=E.scissorTest,y.viewport(le),y.scissor(Se),y.setScissorTest(Ce),Q=-1;return}else if(Me.__webglFramebuffer===void 0)X.setupRenderTarget(E);else if(Me.__hasExternalTextures)X.rebindTextures(E,B.get(E.texture).__webglTexture,B.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let st=E.depthTexture;if(Me.__boundDepthTexture!==st){if(st!==null&&B.has(st)&&(E.width!==st.image.width||E.height!==st.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(E)}}let De=E.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(we=!0);let Be=B.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Be[O])?V=Be[O][Y]:V=Be[O],W=!0):E.samples>0&&X.useMultisampledRTT(E)===!1?V=B.get(E).__webglMultisampledFramebuffer:Array.isArray(Be)?V=Be[Y]:V=Be,le.copy(E.viewport),Se.copy(E.scissor),Ce=E.scissorTest}else le.copy(Ee).multiplyScalar(ne).floor(),Se.copy(Qe).multiplyScalar(ne).floor(),Ce=zt;if(Y!==0&&(V=z),y.bindFramebuffer(L.FRAMEBUFFER,V)&&y.drawBuffers(E,V),y.viewport(le),y.scissor(Se),y.setScissorTest(Ce),W){let Me=B.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,Me.__webglTexture,Y)}else if(we){let Me=O;for(let De=0;De<E.textures.length;De++){let Be=B.get(E.textures[De]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+De,Be.__webglTexture,Y,Me)}}else if(E!==null&&Y!==0){let Me=B.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Me.__webglTexture,Y)}Q=-1};function Fd(E){let O=B.get(E);return(O.__readFormat!==E.format||O.__readType!==E.type)&&(O.__readFormat=E.format,O.__readType=E.type,O.__formatReadable=P.textureFormatReadable(E.format),O.__typeReadable=P.textureTypeReadable(E.type)),O}this.readRenderTargetPixels=function(E,O,Y,V,W,we,Ie,Me=0){if(!(E&&E.isWebGLRenderTarget)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=B.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ie!==void 0&&(De=De[Ie]),De){y.bindFramebuffer(L.FRAMEBUFFER,De);try{let Be=E.textures[Me],st=Be.format,ht=Be.type;E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Me);let Fe=Fd(Be);if(Fe.__formatReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Fe.__typeReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-V&&Y>=0&&Y<=E.height-W&&L.readPixels(O,Y,V,W,be.convert(st),be.convert(ht),we)}finally{let Be=oe!==null?B.get(oe).__webglFramebuffer:null;y.bindFramebuffer(L.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(E,O,Y,V,W,we,Ie,Me=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=B.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ie!==void 0&&(De=De[Ie]),De)if(O>=0&&O<=E.width-V&&Y>=0&&Y<=E.height-W){y.bindFramebuffer(L.FRAMEBUFFER,De);let Be=E.textures[Me],st=Be.format,ht=Be.type;E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Me);let Fe=Fd(Be);if(Fe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Fe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Mt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Mt),L.bufferData(L.PIXEL_PACK_BUFFER,we.byteLength,L.STREAM_READ),L.readPixels(O,Y,V,W,be.convert(st),be.convert(ht),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let $t=oe!==null?B.get(oe).__webglFramebuffer:null;y.bindFramebuffer(L.FRAMEBUFFER,$t);let kt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await np(L,kt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Mt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,we),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(Mt),L.deleteSync(kt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,O=null,Y=0){let V=Math.pow(2,-Y),W=Math.floor(E.image.width*V),we=Math.floor(E.image.height*V),Ie=O!==null?O.x:0,Me=O!==null?O.y:0;X.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,Y,0,0,Ie,Me,W,we),y.unbindTexture()},this.copyTextureToTexture=function(E,O,Y=null,V=null,W=0,we=0){let Ie,Me,De,Be,st,ht,Fe,Mt,$t,kt=E.isCompressedTexture?E.mipmaps[we]:E.image;if(Y!==null)Ie=Y.max.x-Y.min.x,Me=Y.max.y-Y.min.y,De=Y.isBox3?Y.max.z-Y.min.z:1,Be=Y.min.x,st=Y.min.y,ht=Y.isBox3?Y.min.z:0;else{let qt=Math.pow(2,-W);Ie=Math.floor(kt.width*qt),Me=Math.floor(kt.height*qt),E.isDataArrayTexture?De=kt.depth:E.isData3DTexture?De=Math.floor(kt.depth*qt):De=1,Be=0,st=0,ht=0}V!==null?(Fe=V.x,Mt=V.y,$t=V.z):(Fe=0,Mt=0,$t=0);let Pt=be.convert(O.format),pn=be.convert(O.type),Pe;O.isData3DTexture?(X.setTexture3D(O,0),Pe=L.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(X.setTexture2DArray(O,0),Pe=L.TEXTURE_2D_ARRAY):(X.setTexture2D(O,0),Pe=L.TEXTURE_2D),y.activeTexture(L.TEXTURE0),y.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),y.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),y.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);let Mn=y.getParameter(L.UNPACK_ROW_LENGTH),gt=y.getParameter(L.UNPACK_IMAGE_HEIGHT),qn=y.getParameter(L.UNPACK_SKIP_PIXELS),fi=y.getParameter(L.UNPACK_SKIP_ROWS),ss=y.getParameter(L.UNPACK_SKIP_IMAGES);y.pixelStorei(L.UNPACK_ROW_LENGTH,kt.width),y.pixelStorei(L.UNPACK_IMAGE_HEIGHT,kt.height),y.pixelStorei(L.UNPACK_SKIP_PIXELS,Be),y.pixelStorei(L.UNPACK_SKIP_ROWS,st),y.pixelStorei(L.UNPACK_SKIP_IMAGES,ht);let sr=E.isDataArrayTexture||E.isData3DTexture,At=O.isDataArrayTexture||O.isData3DTexture;if(E.isDepthTexture){let qt=B.get(E),rs=B.get(O),Nt=B.get(qt.__renderTarget),as=B.get(rs.__renderTarget);y.bindFramebuffer(L.READ_FRAMEBUFFER,Nt.__webglFramebuffer),y.bindFramebuffer(L.DRAW_FRAMEBUFFER,as.__webglFramebuffer);for(let rr=0;rr<De;rr++)sr&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,B.get(E).__webglTexture,W,ht+rr),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,B.get(O).__webglTexture,we,$t+rr)),L.blitFramebuffer(Be,st,Ie,Me,Fe,Mt,Ie,Me,L.DEPTH_BUFFER_BIT,L.NEAREST);y.bindFramebuffer(L.READ_FRAMEBUFFER,null),y.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(W!==0||E.isRenderTargetTexture||B.has(E)){let qt=B.get(E),rs=B.get(O);y.bindFramebuffer(L.READ_FRAMEBUFFER,N),y.bindFramebuffer(L.DRAW_FRAMEBUFFER,H);for(let Nt=0;Nt<De;Nt++)sr?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,qt.__webglTexture,W,ht+Nt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,qt.__webglTexture,W),At?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,rs.__webglTexture,we,$t+Nt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,rs.__webglTexture,we),W!==0?L.blitFramebuffer(Be,st,Ie,Me,Fe,Mt,Ie,Me,L.COLOR_BUFFER_BIT,L.NEAREST):At?L.copyTexSubImage3D(Pe,we,Fe,Mt,$t+Nt,Be,st,Ie,Me):L.copyTexSubImage2D(Pe,we,Fe,Mt,Be,st,Ie,Me);y.bindFramebuffer(L.READ_FRAMEBUFFER,null),y.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else At?E.isDataTexture||E.isData3DTexture?L.texSubImage3D(Pe,we,Fe,Mt,$t,Ie,Me,De,Pt,pn,kt.data):O.isCompressedArrayTexture?L.compressedTexSubImage3D(Pe,we,Fe,Mt,$t,Ie,Me,De,Pt,kt.data):L.texSubImage3D(Pe,we,Fe,Mt,$t,Ie,Me,De,Pt,pn,kt):E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,we,Fe,Mt,Ie,Me,Pt,pn,kt.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,we,Fe,Mt,kt.width,kt.height,Pt,kt.data):L.texSubImage2D(L.TEXTURE_2D,we,Fe,Mt,Ie,Me,Pt,pn,kt);y.pixelStorei(L.UNPACK_ROW_LENGTH,Mn),y.pixelStorei(L.UNPACK_IMAGE_HEIGHT,gt),y.pixelStorei(L.UNPACK_SKIP_PIXELS,qn),y.pixelStorei(L.UNPACK_SKIP_ROWS,fi),y.pixelStorei(L.UNPACK_SKIP_IMAGES,ss),we===0&&O.generateMipmaps&&L.generateMipmap(Pe),y.unbindTexture()},this.initRenderTarget=function(E){B.get(E).__webglFramebuffer===void 0&&X.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?X.setTextureCube(E,0):E.isData3DTexture?X.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?X.setTexture2DArray(E,0):X.setTexture2D(E,0),y.unbindTexture()},this.resetState=function(){$=0,ee=0,oe=null,y.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}};var xc=class extends ks{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Ot;e.deleteAttribute("uv");let t=new Re({side:nn}),n=new Re,s=new Xs(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Ae(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Wi(e,n,6),o=new Rt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Ae(e,Jr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Ae(e,Jr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Ae(e,Jr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new Ae(e,Jr(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new Ae(e,Jr(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let p=new Ae(e,Jr(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Jr(i){return new Oa({color:0,emissive:16777215,emissiveIntensity:i})}function Mu(i,e){if(e===$h)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Wr||e===io){let t=i.getIndex();if(t===null){let r=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Wr)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function Np(i){let e=new Map,t=new Map,n=i.clone();return Up(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Up(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Up(i.children[n],e.children[n],t)}var $r=class extends Si{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Cu(t)}),this.register(function(t){return new Pu(t)}),this.register(function(t){return new Bu(t)}),this.register(function(t){return new zu(t)}),this.register(function(t){return new Gu(t)}),this.register(function(t){return new Lu(t)}),this.register(function(t){return new Du(t)}),this.register(function(t){return new Fu(t)}),this.register(function(t){return new Nu(t)}),this.register(function(t){return new Ru(t)}),this.register(function(t){return new Uu(t)}),this.register(function(t){return new Iu(t)}),this.register(function(t){return new ku(t)}),this.register(function(t){return new Ou(t)}),this.register(function(t){return new Eu(t)}),this.register(function(t){return new _c(t,lt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new _c(t,lt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Hu(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=Yi.extractUrlBase(e);a=Yi.resolveURL(c,this.path)}else a=Yi.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new kr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Gp){try{a[lt.KHR_BINARY_GLTF]=new Vu(e)}catch(u){s&&s(u);return}r=JSON.parse(a[lt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Ju(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case lt.KHR_MATERIALS_UNLIT:a[u]=new Au;break;case lt.KHR_DRACO_MESH_COMPRESSION:a[u]=new Wu(r,this.dracoLoader);break;case lt.KHR_TEXTURE_TRANSFORM:a[u]=new qu;break;case lt.KHR_MESH_QUANTIZATION:a[u]=new Xu;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function Iv(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Kt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var lt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Eu=class{constructor(e){this.parser=e,this.name=lt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new xe(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],wn);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new js(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Xs(h),c.distance=u;break;case"spot":c=new wi(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Ci(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},Au=class{constructor(){this.name=lt.KHR_MATERIALS_UNLIT}getMaterialType(){return Ct}extendParams(e,t,n){let s=[];e.color=new xe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],wn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Gt))}return Promise.all(s)}},Ru=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Cu=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?cn:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ue(r,r)}return Promise.all(s)}},Pu=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?cn:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Iu=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?cn:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},Lu=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?cn:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new xe(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],wn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Gt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},Du=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?cn:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},Fu=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?cn:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new xe().setRGB(r[0],r[1],r[2],wn),Promise.all(s)}},Nu=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_IOR}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?cn:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Uu=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?cn:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new xe().setRGB(r[0],r[1],r[2],wn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Gt)),Promise.all(s)}},Ou=class{constructor(e){this.parser=e,this.name=lt.EXT_MATERIALS_BUMP}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?cn:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},ku=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?cn:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},Bu=class{constructor(e){this.parser=e,this.name=lt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},zu=class{constructor(e){this.parser=e,this.name=lt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},Gu=class{constructor(e){this.parser=e,this.name=lt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},_c=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(p){return p.buffer}):a.ready.then(function(){let p=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(p),h,u,d,s.mode,s.filter),p})})}else return null}},Hu=class{constructor(e){this.name=lt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==Jn.TRIANGLES&&c.mode!==Jn.TRIANGLE_STRIP&&c.mode!==Jn.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,p=[];for(let g of u){let b=new tt,m=new U,f=new Pn,v=new U(1,1,1),_=new Wi(g.geometry,g.material,d);for(let w=0;w<d;w++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,w),l.ROTATION&&f.fromBufferAttribute(l.ROTATION,w),l.SCALE&&v.fromBufferAttribute(l.SCALE,w),_.setMatrixAt(w,b.compose(m,f,v));let x=null;for(let w in l)if(w==="_COLOR_0"){let T=l[w];_.instanceColor=new Vi(T.array,T.itemSize,T.normalized)}else if(w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"){if(x===null){let R=_.geometry;x=new xt,x.name=R.name;for(let M in R.attributes)x.setAttribute(M,R.attributes[M]);for(let M in R.morphAttributes)x.morphAttributes[M]=R.morphAttributes[M];R.index!==null&&x.setIndex(R.index),x.morphTargetsRelative=R.morphTargetsRelative;for(let M of R.groups)x.addGroup(M.start,M.count,M.materialIndex);R.boundingBox!==null&&(x.boundingBox=R.boundingBox.clone()),R.boundingSphere!==null&&(x.boundingSphere=R.boundingSphere.clone()),x.drawRange.start=R.drawRange.start,x.drawRange.count=R.drawRange.count,x.userData=Object.assign({},R.userData),_.geometry=x}let T=l[w];x.setAttribute(w,new Vi(T.array,T.itemSize,T.normalized))}Rt.prototype.copy.call(_,g),this.parser.assignFinalMaterial(_),p.push(_)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}},Gp="glTF",co=12,Op={JSON:1313821514,BIN:5130562},Vu=class{constructor(e){this.name=lt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,co),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Gp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-co,r=new DataView(e,co),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===Op.JSON){let c=new Uint8Array(e,co+a,o);this.content=n.decode(c)}else if(l===Op.BIN){let c=co+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Wu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=lt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=Ku[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=Ku[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],p=Zr[d.componentType];c[u]=p.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(p){for(let g in p.attributes){let b=p.attributes[g],m=l[g];m!==void 0&&(b.normalized=m)}u(p)},o,c,wn,d)})})}},qu=class{constructor(){this.name=lt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Xu=class{constructor(){this.name=lt.KHR_MESH_QUANTIZATION}},vc=class extends yi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=s-t,u=(n-t)/h,d=u*u,p=d*u,g=e*c,b=g-c,m=-2*p+3*d,f=p-d,v=1-m,_=f-d+u;for(let x=0;x!==o;x++){let w=a[b+x+o],T=a[b+x+l]*h,R=a[g+x+o],M=a[g+x]*h;r[x]=v*w+_*T+m*R+f*M}return r}},Lv=new Pn,ju=class extends vc{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return Lv.fromArray(r).normalize().toArray(r),r}},Jn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Zr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},kp={9728:Xt,9729:jt,9984:El,9985:Gr,9986:$s,9987:li},Bp={33071:jn,33648:Mr,10497:gi},Su={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ku={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},vs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Dv={CUBICSPLINE:void 0,LINEAR:Us,STEP:Ns},wu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Fv(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Re({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ei})),i.DefaultMaterial}function tr(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ci(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Nv(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function Uv(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ov(i){let e,t=i.extensions&&i.extensions[lt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Tu(t.attributes):e=i.indices+":"+Tu(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Tu(i.targets[n]);return e}function Tu(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Yu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function kv(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Bv=new tt,Ju=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Iv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new Ba(this.options.manager):this.textureLoader=new Ha(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new kr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return tr(r,o,s),Ci(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[lt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(Yi.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=Su[s.type],o=Zr[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new Ut(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=Su[s.type],c=Zr[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,b,m;if(p&&p!==u){let f=Math.floor(d/p),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+f+":"+s.count,_=t.cache.get(v);_||(b=new c(o,f*p,s.count*p/h),_=new Rr(b,p/h),t.cache.add(v,_)),m=new Cr(_,l,d%p/h,g)}else o===null?b=new c(s.count*l):b=new c(o,d,s.count*l),m=new Ut(b,l,g);if(s.sparse!==void 0){let f=Su.SCALAR,v=Zr[s.sparse.indices.componentType],_=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,w=new v(a[1],_,s.sparse.count*f),T=new c(a[2],x,s.sparse.count*l);o!==null&&(m=new Ut(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,M=w.length;R<M;R++){let A=w[R];if(m.setX(A,T[R*l]),l>=2&&m.setY(A,T[R*l+1]),l>=3&&m.setZ(A,T[R*l+2]),l>=4&&m.setW(A,T[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=kp[d.magFilter]||jt,h.minFilter=kp[d.minFilter]||li,h.wrapS=Bp[d.wrapS]||gi,h.wrapT=Bp[d.wrapT]||gi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Xt&&h.minFilter!==jt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=s.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,p){let g=d;t.isImageBitmapLoader===!0&&(g=function(b){let m=new tn(b);m.needsUpdate=!0,d(m)}),t.load(Yi.resolveURL(u,r.path),g,void 0,p)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),Ci(u,a),u.userData.mimeType=a.mimeType||kv(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[lt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[lt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[lt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Fr,En.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Dr,En.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Re}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[lt.KHR_MATERIALS_UNLIT]){let u=s[lt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new xe(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],wn),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,Gt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Vt);let h=r.alphaMode||wu.OPAQUE;if(h===wu.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===wu.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Ct&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Ue(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Ct&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Ct){let u=r.emissiveFactor;o.emissive=new xe().setRGB(u[0],u[1],u[2],wn)}return r.emissiveTexture!==void 0&&a!==Ct&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Gt)),Promise.all(c).then(function(){let u=new a(o);return r.name&&(u.name=r.name),Ci(u,r),t.associations.set(u,{materials:e}),r.extensions&&tr(s,u,r),u})}createUniqueName(e){let t=It.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[lt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return zp(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=Ov(c),u=s[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[lt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=zp(new xt,c,t),c.mode===Jn.TRIANGLE_STRIP?d=d.then(p=>Mu(p,io)):c.mode===Jn.TRIANGLE_FAN&&(d=d.then(p=>Mu(p,Wr))),s[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?Fv(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let p=0,g=h.length;p<g;p++){let b=h[p],m=a[p],f,v=c[p];if(m.mode===Jn.TRIANGLES||m.mode===Jn.TRIANGLE_STRIP||m.mode===Jn.TRIANGLE_FAN||m.mode===void 0){let _=r.isSkinnedMesh===!0,x=b.hasAttribute("skinIndex")&&b.hasAttribute("skinWeight");_&&x===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),f=_&&x?new Ra(b,v):new Ae(b,v),f.isSkinnedMesh===!0&&f.normalizeSkinWeights()}else if(m.mode===Jn.LINES)f=new Gs(b,v);else if(m.mode===Jn.LINE_STRIP)f=new zs(b,v);else if(m.mode===Jn.LINE_LOOP)f=new Pa(b,v);else if(m.mode===Jn.POINTS)f=new ps(b,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&Uv(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),Ci(f,r),m.extensions&&tr(s,f,m),t.assignFinalMaterial(f),u.push(f)}for(let p=0,g=u.length;p<g;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return r.extensions&&tr(s,u[0],r),u[0];let d=new Bt;r.extensions&&tr(s,d,r),t.associations.set(d,{meshes:e});for(let p=0,g=u.length;p<g;p++)d.add(u[p]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new en(nu.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Ti(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ci(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let d=new tt;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ca(o,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let p=s.channels[u],g=s.samplers[p.sampler],b=p.target,m=b.node,f=s.parameters!==void 0?s.parameters[g.input]:g.input,v=s.parameters!==void 0?s.parameters[g.output]:g.output;b.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",f)),l.push(this.getDependency("accessor",v)),c.push(g),h.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],p=u[1],g=u[2],b=u[3],m=u[4],f=[];for(let _=0,x=d.length;_<x;_++){let w=d[_],T=p[_],R=g[_],M=b[_],A=m[_];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();let C=n._createAnimationTracks(w,T,R,M,A);if(C)for(let I=0;I<C.length;I++)f.push(C[I])}let v=new Or(r,void 0,f);return Ci(v,s),v})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,Bv)});for(let p=0,g=u.length;p<g;p++)h.add(u[p]);if(h.userData.pivot!==void 0&&u.length>0){let p=h.userData.pivot,g=u[0];h.pivot=new U().fromArray(p),h.position.x-=p[0],h.position.y-=p[1],h.position.z-=p[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new Pr:c.length>1?h=new Bt:c.length===1?h=c[0]:h=new Rt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Ci(h,r),r.extensions&&tr(n,h,r),r.matrix!==void 0){let u=new tt;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Bt;n.name&&(r.name=s.createUniqueName(n.name)),Ci(r,n),n.extensions&&tr(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++){let d=l[h];d.parent!==null?r.add(Np(d)):r.add(d)}let c=h=>{let u=new Map;for(let[d,p]of s.associations)(d instanceof En||d instanceof tn)&&u.set(d,p);return h.traverse(d=>{let p=s.associations.get(d);p!=null&&u.set(d,p)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,l=[];function c(p){p.morphTargetInfluences&&l.push(p.name?p.name:p.uuid)}vs[r.path]===vs.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(vs[r.path]){case vs.weights:h=Xi;break;case vs.rotation:h=Mi;break;case vs.translation:case vs.scale:h=Ki;break;default:n.itemSize===1?h=Xi:h=Ki;break}let u=s.interpolation!==void 0?Dv[s.interpolation]:Us,d=this._getArrayFromAccessor(n);for(let p=0,g=l.length;p<g;p++){let b=new h(l[p]+"."+vs[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(b),a.push(b)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Yu(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Mi?ju:vc;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function zv(i,e,t){let n=e.attributes,s=new Tn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new U(l[0],l[1],l[2]),new U(c[0],c[1],c[2])),o.normalized){let h=Yu(Zr[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new U,l=new U;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){let b=Yu(Zr[d.componentType]);l.multiplyScalar(b)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new In;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function zp(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(let a in n){let o=Ku[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return nt.workingColorSpace!==wn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${nt.workingColorSpace}" not supported.`),Ci(i,e),zv(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Nv(i,e.targets,t):i})}var Hp=(function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?o(e):o(i),r,a=WebAssembly.instantiate(s,{}).then(function(f){r=f.instance,r.exports.__wasm_call_ctors()});function o(f){for(var v=new Uint8Array(f.length),_=0;_<f.length;++_){var x=f.charCodeAt(_);v[_]=x>96?x-97:x>64?x-39:x+4}for(var w=0,_=0;_<f.length;++_)v[w++]=v[_]<60?n[v[_]]:(v[_]-60)*64+v[++_];return v.buffer.slice(0,w)}function l(f,v,_,x,w,T,R){var M=f.exports.sbrk,A=x+3&-4,C=M(A*w),I=M(T.length),F=new Uint8Array(f.exports.memory.buffer);F.set(T,I);var z=v(C,x,w,I,T.length);if(z==0&&R&&R(C,A,w),_.set(F.subarray(C,C+x*w)),M(C-M(0)),z!=0)throw new Error("Malformed buffer data: "+z)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function p(f){var v={object:new Worker(f),pending:0,requests:{}};return v.object.onmessage=function(_){var x=_.data;v.pending-=x.count,v.requests[x.id][x.action](x.value),delete v.requests[x.id]},v}function g(f){for(var v="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(s)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+m.name+";"+l.toString()+m.toString(),_=new Blob([v],{type:"text/javascript"}),x=URL.createObjectURL(_),w=u.length;w<f;++w)u[w]=p(x);for(var w=f;w<u.length;++w)u[w].object.postMessage({});u.length=f,URL.revokeObjectURL(x)}function b(f,v,_,x,w){for(var T=u[0],R=1;R<u.length;++R)u[R].pending<T.pending&&(T=u[R]);return new Promise(function(M,A){var C=new Uint8Array(_),I=++d;T.pending+=f,T.requests[I]={resolve:M,reject:A},T.object.postMessage({id:I,count:f,size:v,source:C,mode:x,filter:w},[C.buffer])})}function m(f){var v=f.data;self.ready.then(function(_){if(!v.id)return self.close();try{var x=new Uint8Array(v.count*v.size);l(_,_.exports[v.mode],x,v.count,v.size,v.source,_.exports[v.filter]),self.postMessage({id:v.id,count:v.count,action:"resolve",value:x},[x.buffer])}catch(w){self.postMessage({id:v.id,count:v.count,action:"reject",value:w})}})}return{ready:a,supported:!0,useWorkers:function(f){g(f)},decodeVertexBuffer:function(f,v,_,x,w){l(r,r.exports.meshopt_decodeVertexBuffer,f,v,_,x,r.exports[c[w]])},decodeIndexBuffer:function(f,v,_,x){l(r,r.exports.meshopt_decodeIndexBuffer,f,v,_,x)},decodeIndexSequence:function(f,v,_,x){l(r,r.exports.meshopt_decodeIndexSequence,f,v,_,x)},decodeGltfBuffer:function(f,v,_,x,w,T){l(r,r.exports[h[w]],f,v,_,x,r.exports[c[T]])},decodeGltfBufferAsync:function(f,v,_,x,w){return u.length>0?b(f,v,_,h[x],c[w]):a.then(function(){var T=new Uint8Array(f*v);return l(r,r.exports[h[x]],T,f,v,_,r.exports[c[w]]),T})}}})();var Gv=location.protocol==="file:";function Hv(i){return new Promise((e,t)=>{window.__ASSETS=window.__ASSETS||{};let n=()=>{let r=atob(window.__ASSETS[i]);delete window.__ASSETS[i];let a=new Uint8Array(r.length);for(let o=0;o<r.length;o++)a[o]=r.charCodeAt(o);e(a.buffer)},s=document.createElement("script");s.src="assets/"+i+".js",s.onload=n,s.onerror=()=>t(new Error("Missing assets/"+i+".js")),document.head.appendChild(s)})}async function Qr(i,e){if(Gv)return Hv(i);let t=await fetch("assets/"+i);if(!t.ok)throw new Error("Could not load assets/"+i+" ("+t.status+")");let n=+t.headers.get("content-length")||0;if(!e||!n||!t.body)return t.arrayBuffer();let s=t.body.getReader(),r=[],a=0;for(;;){let{done:c,value:h}=await s.read();if(c)break;r.push(h),a+=h.length,e(Math.min(1,a/n))}let o=new Uint8Array(a),l=0;for(let c of r)o.set(c,l),l+=c.length;return o.buffer}var yc=async i=>JSON.parse(new TextDecoder().decode(await Qr(i)));var Ms=0,ta=1,$i=2,Zn=3,Sc=4,wc={day:{skyTop:4163288,skyBot:13625077,fog:14214364,fogD:.0012,sun:16770752,sunI:2.9,hemiS:12573183,hemiG:7043658,hemiI:1.1,sunDir:[-.6,.6,.4],ground:5212732,exposure:1},desert:{skyTop:3112912,skyBot:15982e3,fog:15522224,fogD:.0019,sun:16771524,sunI:3,hemiS:16771264,hemiG:11897420,hemiI:1,sunDir:[.6,.55,.3],ground:14267244,exposure:1},coast:{skyTop:15895131,skyBot:16767392,fog:16239008,fogD:.0017,sun:16761994,sunI:2.5,hemiS:16763304,hemiG:5992274,hemiI:1,sunDir:[-.2,.24,-.85],ground:6132040,exposure:1},night:{skyTop:329231,skyBot:2759242,fog:1708848,fogD:.0035,sun:9414399,sunI:.7,hemiS:4868752,hemiG:2105388,hemiI:1,sunDir:[.3,1,.2],ground:2303531,exposure:1.15,night:!0}},_n=[{id:"nile",name:"Nile Park Circuit",ar:"\u062D\u0644\u0628\u0629 \u0627\u0644\u0646\u064A\u0644",type:"proc",theme:"day",laps:3,width:15,runoff:6,pit:[90,90],camYaw:.7,blurb:"The home circuit. A full pit lane, a fast first sector, a chicane and two hairpins.",pts:[[40,0],[150,0],[210,20],[230,70],[200,115],[140,110],[110,80],[70,95],[60,140],[100,180],[80,225],[20,235],[-40,205],[-50,150],[-20,110],[-60,70],[-110,90],[-150,60],[-140,10],[-80,-5]]},{id:"lider",name:"Lider Karting Club",ar:"\u0646\u0627\u062F\u064A \u0644\u064A\u062F\u0631",type:"glb",theme:"day",laps:3,blurb:"Your scanned kart circuit. Tight, technical, tyre walls everywhere."},{id:"giza",name:"Giza Sand Ring",ar:"\u062D\u0644\u0628\u0629 \u0627\u0644\u062C\u064A\u0632\u0629",type:"proc",theme:"desert",laps:3,width:16,runoff:9,blurb:"Fast sweepers under the pyramids. Sand runoff eats your speed.",pts:[[60,-6],[120,-10],[200,30],[230,110],[180,170],[100,150],[60,200],[-20,230],[-110,200],[-140,120],[-80,70],[-120,0],[-60,-40],[0,0]]},{id:"corniche",name:"Alex Corniche",ar:"\u0643\u0648\u0631\u0646\u064A\u0634 \u0625\u0633\u0643\u0646\u062F\u0631\u064A\u0629",type:"proc",theme:"coast",laps:3,width:15,runoff:7,blurb:"A long seafront blast into a knot of hairpins at sunset.",pts:[[130,0],[260,0],[320,40],[300,100],[220,110],[180,70],[120,90],[130,160],[60,190],[-20,150],[-10,90],[-80,60],[-90,10],[0,0]]},{id:"midnight",name:"Cairo Midnight",ar:"\u0645\u0646\u062A\u0635\u0641 \u0627\u0644\u0644\u064A\u0644",type:"proc",theme:"night",laps:4,width:14,runoff:5,blurb:"Street circuit after dark. Square corners, neon walls, no mercy.",pts:[[75,0],[150,0],[180,30],[180,120],[150,150],[90,150],[60,120],[60,80],[20,60],[-40,80],[-40,160],[-80,200],[-140,180],[-150,100],[-120,20],[-60,-10],[0,0]]},{id:"pad",name:"Test pad",ar:"\u0633\u0627\u062D\u0629 \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631",type:"proc",theme:"day",laps:1,width:84,runoff:14,pit:null,dev:!0,blurb:"Tuning ground: a wide asphalt oval for braking, constant-radius, slalom and surface tests. Press T for telemetry.",pts:[[0,0],[110,0],[220,0],[285,65],[220,130],[110,130],[0,130],[-65,65]]}];function Vp(i,e,t,n,s){let r=s*s,a=r*s;return .5*(2*e+(-i+t)*s+(2*i-5*e+4*t-n)*r+(-i+3*e-3*t+n)*a)}function Tc(i,e){let t=i.length,n=[];for(let c=0;c<t;c++){let h=i[(c+t-1)%t],u=i[c],d=i[(c+1)%t],p=i[(c+2)%t];for(let g=0;g<24;g++){let b=g/24;n.push([Vp(h[0],u[0],d[0],p[0],b),Vp(h[1],u[1],d[1],p[1],b)])}}let s=[0];for(let c=1;c<=n.length;c++){let h=n[c-1],u=n[c%n.length];s.push(s[c-1]+Math.hypot(u[0]-h[0],u[1]-h[1]))}let r=s[n.length],a=Math.round(r/e),o=[],l=0;for(let c=0;c<a;c++){let h=c*r/a;for(;s[l+1]<h;)l++;let u=(h-s[l])/(s[l+1]-s[l]||1),d=n[l],p=n[(l+1)%n.length];o.push({x:d[0]+(p[0]-d[0])*u,z:d[1]+(p[1]-d[1])*u})}return o}function Pi(i,e,t,n=1,s=1){let r=document.createElement("canvas");r.width=i,r.height=e,t(r.getContext("2d"),i,e);let a=new Hs(r);return a.wrapS=a.wrapT=gi,a.repeat.set(n,s),a.colorSpace=Gt,a.anisotropy=8,a}function Wp(i,e,t,n,s,r){i.fillStyle=n,i.fillRect(0,0,e,t);for(let a=0;a<r;a++){let o=Math.random();i.fillStyle=`rgba(${o>.5?255:0},${o>.5?255:0},${o>.5?255:0},${Math.random()*s})`,i.fillRect(Math.random()*e,Math.random()*t,1+Math.random()*2,1+Math.random()*2)}}var Mc=1,Wt=()=>(Mc=Mc*16807%2147483647,Mc/2147483647),Zu=class{constructor(e){this.def=e,this.theme=wc[e.theme],this.group=new Bt,this.grid=null,this.path=[],this.lights=[]}finishPath(e){let t=e.length;this.path=e,this.n=t;let n=0;for(let r=0;r<t;r++){let a=e[r],o=e[(r+1)%t],l=e[(r+t-1)%t],c=o.x-l.x,h=o.z-l.z,u=Math.hypot(c,h)||1;a.tx=c/u,a.tz=h/u,n+=Math.hypot(o.x-a.x,o.z-a.z)}this.len=n,this.spacing=n/t;let s=e.map((r,a)=>{let o=e[(a+t-3)%t],l=e[(a+3)%t],c=Math.atan2(l.tx,l.tz)-Math.atan2(o.tx,o.tz);for(;c>Math.PI;)c-=2*Math.PI;for(;c<-Math.PI;)c+=2*Math.PI;return c/(6*this.spacing)});for(let r=0;r<t;r++)e[r].k=(s[(r+t-1)%t]+2*s[r]+s[(r+1)%t])/4}surf(e,t){let n=this.grid,s=Math.floor((e-n.x0)/n.cell),r=Math.floor((t-n.z0)/n.cell);return s<0||r<0||s>=n.w||r>=n.h?Zn:n.surf[r*n.w+s]}height(e,t){let n=this.grid;if(!n.hgt)return 0;let s=(e-n.x0)/n.cell-.5,r=(t-n.z0)/n.cell-.5;s=Math.max(0,Math.min(n.w-1.001,s)),r=Math.max(0,Math.min(n.h-1.001,r));let a=s|0,o=r|0,l=s-a,c=r-o,h=o*n.w+a,u=n.hgt;return(u[h]*(1-l)+u[h+1]*l)*(1-c)+(u[h+n.w]*(1-l)+u[h+n.w+1]*l)*c}nearest(e,t,n=-1,s=18){let r=this.path,a=this.n,o=0,l=1/0;if(n<0){for(let c=0;c<a;c++){let h=(r[c].x-e)**2+(r[c].z-t)**2;h<l&&(l=h,o=c)}return o}for(let c=-s;c<=s;c++){let h=((n+c)%a+a)%a,u=(r[h].x-e)**2+(r[h].z-t)**2;u<l&&(l=u,o=h)}return o}escape(e,t){for(let n=.35;n<6;n+=.35)for(let s=0;s<16;s++){let r=Math.cos(s*Math.PI/8),a=Math.sin(s*Math.PI/8);if(this.surf(e+r*n,t+a*n)!==Zn)return{nx:r,nz:a,d:n}}return null}gridSlot(e){let t=((this.n-3-Math.ceil((e+1)*7.5/this.spacing))%this.n+this.n)%this.n,n=this.path[t],s=(e%2?-1:1)*2.6;return{x:n.x+n.tz*s,z:n.z-n.tx*s,th:Math.atan2(n.tx,n.tz),idx:t}}dispose(){this.group.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&[].concat(e.material).forEach(t=>{for(let n in t)t[n]&&t[n].isTexture&&t[n].dispose();t.dispose()})})}};function Vv(i){let e=i.path[0],t=Math.atan2(e.tx,e.tz),n=i.height(e.x,e.z),s=0;for(;s<14&&i.surf(e.x+e.tz*s,e.z-e.tx*s)!==Zn&&i.surf(e.x+e.tz*s,e.z-e.tx*s)!==Ms;)s+=.5;s=Math.max(5,s);let r=new Bt;r.position.set(e.x,n,e.z),r.rotation.y=t;let a=Pi(128,32,u=>{for(let d=0;d<16;d++)for(let p=0;p<4;p++)u.fillStyle=(d+p)%2?"#111":"#f5f5f5",u.fillRect(d*8,p*8,8,8)}),o=new Ae(new bn(s*2,2.2),new Re({map:a,roughness:.8,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}));o.rotation.x=-Math.PI/2,o.position.y=.05,o.receiveShadow=!0,r.add(o);let l=new Re({color:2830134,metalness:.7,roughness:.4});for(let u of[-1,1]){let d=new Ae(new Ot(.5,7.5,.5),l);d.position.set(u*(s+1.2),3.75,0),d.castShadow=!0,r.add(d)}let c=Pi(1024,128,(u,d,p)=>{u.fillStyle="#e3262e",u.fillRect(0,0,d,p),u.fillStyle="#fff",u.font="italic 900 92px Rubik, Arial Black, sans-serif",u.textAlign="center",u.textBaseline="middle",u.fillText("TAFHEET  \xB7  \u062A\u0641\u062D\u064A\u0637  \xB7  START",d/2,p/2+6)}),h=new Ae(new Ot(s*2+3,1.3,.5),[l,l,l,l,new Re({map:c,emissive:16777215,emissiveMap:c,emissiveIntensity:i.theme.night?.9:.15}),new Re({map:c})]);h.position.y=7.3,h.castShadow=!0,r.add(h),i.group.add(r)}var ys=2.2;async function Wv(i,e){let t=new $r;t.setMeshoptDecoder(Hp);let[n,s,r]=await Promise.all([Qr("lider.glb",e),yc("lider.json"),Qr("lider.bin")]),o=(await t.parseAsync(n,"")).scene;o.scale.setScalar(ys),o.traverse(b=>{if(!b.isMesh)return;b.receiveShadow=!0,b.frustumCulled=!b.isInstancedMesh;let m=b.material,f=m.name||"";if(f==="02_-_Default_0"){b.visible=!1;return}m.map&&(m.map.anisotropy=8),(m.transparent||m.alphaTest>0||/Trees|green|fence|wire/.test(f))&&(m.alphaTest=Math.max(m.alphaTest,.4),m.transparent=!1,m.depthWrite=!0,m.side=Vt),/racetrack|conc|kerb/.test(f)&&(m.roughness=Math.min(m.roughness,.92)),b.castShadow=b.isInstancedMesh?!0:!/racetrack|grass|green|conc|kerb|road_marking|bitumen|GROOVE|skids|dust|decal|Cracks/.test(f)}),i.group.add(o);let l=s.w*s.h,c=new Uint8Array(r,0,l),h=new Int16Array(r.slice(l,l+l*2)),u=new Uint8Array(l),d=new Float32Array(l);for(let b=0;b<l;b++){let m=c[b];u[b]=m===255?Zn:m===200?$i:m===100?ta:Ms,d[b]=h[b]/100*ys}i.grid={w:s.w,h:s.h,x0:s.x0*ys,z0:s.z0*ys,cell:ys/s.ppm,surf:u,hgt:d};let p=Tc(s.path.map(b=>[b[0]*ys,b[1]*ys]),2),g=Math.round(30*ys/2);p=p.slice(g).concat(p.slice(0,g)),i.finishPath(p),i.bounds=420}function ea(i,e,t,n,s,r=!0,a=null){let o=[],l=[],c=[],h=i.length,u=0,d=0,p=!1;for(let b=0;b<=h;b++){let m=i[b%h],f=!a||a[b%h];f&&(o.push(m.x+m.tz*e,n,m.z-m.tx*e,m.x+m.tz*t,n,m.z-m.tx*t),l.push(0,u*s,1,u*s),p&&c.push(d-2,d-1,d,d-1,d+1,d),d+=2),p=f,u+=Math.hypot(i[(b+1)%h].x-m.x,i[(b+1)%h].z-m.z)}let g=new xt;return g.setAttribute("position",new it(o,3)),g.setAttribute("uv",new it(l,2)),g.setIndex(c),g.computeVertexNormals(),g}function qv(i,e,t,n){let s=typeof e=="function"?e:()=>e,r=[],a=[],o=[],l=i.length,c=0;for(let u=0;u<=l;u++){let d=i[u%l],p=s(u%l),g=d.x+d.tz*p,b=d.z-d.tx*p;r.push(g,0,b,g,t,b),a.push(c*n,0,c*n,1),u<l&&o.push(u*2,u*2+1,u*2+2,u*2+1,u*2+3,u*2+2),c+=Math.hypot(i[(u+1)%l].x-d.x,i[(u+1)%l].z-d.z)}let h=new xt;return h.setAttribute("position",new it(r,3)),h.setAttribute("uv",new it(a,2)),h.setIndex(o),h.computeVertexNormals(),h}function Yt(i,e,t,n=!0){let s=new Wi(i,e,t.length),r=new Rt;return t.forEach((a,o)=>{r.position.set(a.x,a.y||0,a.z),r.rotation.set(0,a.r||0,0),r.scale.set(a.sx||a.s||1,a.sy||a.s||1,a.sz||a.s||1),r.updateMatrix(),s.setMatrixAt(o,r.matrix),a.c&&s.setColorAt(o,a.c)}),s.castShadow=n,s.receiveShadow=!0,s}function Xv(i){let e=i.def,t=i.theme,n=e.width/2,s=n+e.runoff,r=i.group;Mc=e.id.length*7919+13;let a=i.uTime={value:0},o=[];i.fancyLights=[],i.tick=J=>{a.value=J;for(let fe of o)fe(J)};let l=(J,fe)=>(J.onBeforeCompile=me=>{me.uniforms.uTime=a,me.vertexShader=`uniform float uTime;
`+me.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
`+fe)},J),c="transformed.y += abs(sin(uTime * 3.4 + instanceMatrix[3][0] * 1.7 + instanceMatrix[3][2] * 2.3)) * .14;",h=Tc(e.pts,2);i.finishPath(h);let u=h.length,d=1e9,p=-1e9,g=1e9,b=-1e9;for(let J of h)d=Math.min(d,J.x),p=Math.max(p,J.x),g=Math.min(g,J.z),b=Math.max(b,J.z);let m=(d+p)/2,f=(g+b)/2,v=h.map((J,fe)=>{for(let me=-6;me<=6;me++)if(Math.abs(h[((fe+me)%u+u)%u].k)>1/110)return!0;return!1}),_=.5,x=Math.max(30,s+8),w=d-x,T=g-x,R=Math.ceil((p-d+x*2)/_),M=Math.ceil((b-g+x*2)/_),A=document.createElement("canvas");A.width=R,A.height=M;let C=A.getContext("2d",{willReadFrequently:!0});C.fillStyle="#000",C.fillRect(0,0,R,M),C.globalCompositeOperation="lighter",C.lineJoin=C.lineCap="round";let I=J=>{C.beginPath();let fe=!1;for(let me=0;me<=u;me++){let Le=h[me%u],L=(Le.x-w)/_,qe=(Le.z-T)/_;if(J&&!J[me%u]){fe=!1;continue}fe?C.lineTo(L,qe):C.moveTo(L,qe),fe=!0}C.stroke()};C.strokeStyle="#00ff00",C.lineWidth=s*2/_,I(),C.strokeStyle="#ff0000",C.lineWidth=n*2/_,I(),C.strokeStyle="#0000ff",C.lineWidth=(n+1.5)*2/_,I(v);let F=e.pit===null?null:e.pit||[50,50],z=F?Math.round(F[0]/2):0,N=F?Math.round(F[1]/2):0,H=J=>!!F&&(J>=u-z||J<=N),$=[];for(let J=u-z;J<=u+N;J++)$.push(J%u);let ee=(J,fe)=>{J.beginPath(),$.forEach((me,Le)=>{let L=h[me],qe=(L.x+L.tz*fe-w)/_,He=(L.z-L.tx*fe-T)/_;Le?J.lineTo(qe,He):J.moveTo(qe,He)}),J.stroke()},oe=null,Q=Math.max(s+.2,n+8.6);if(F){C.lineCap="butt",C.strokeStyle="#00ff00",C.lineWidth=9.2/_,ee(C,n+4);let J=document.createElement("canvas");J.width=R,J.height=M;let fe=J.getContext("2d",{willReadFrequently:!0});fe.lineJoin="round",fe.strokeStyle="#fff",fe.lineWidth=7.6/_,ee(fe,n+3.7),oe=fe.getImageData(0,0,R,M).data}let se=C.getImageData(0,0,R,M).data,le=new Uint8Array(R*M);for(let J=0;J<R*M;J++){let fe=se[J*4],me=se[J*4+1],Le=se[J*4+2];le[J]=me<128?Zn:fe>128?$i:oe&&oe[J*4]>128?Sc:Le>128?ta:Ms}i.grid={w:R,h:M,x0:w,z0:T,cell:_,surf:le,hgt:null},i.bounds=Math.max(p-d,b-g)/2+60;let Se=t.night,Ce=e.theme==="desert",ft=e.theme==="day",at=Pi(256,256,(J,fe,me)=>Wp(J,fe,me,Ce?"#d8b26c":Se?"#2a2d31":ft?"#55a83a":"#4f8a3c",.1,5e3),220,220),ot=new Ae(new bn(2600,2600),new Re({map:at,roughness:1}));ot.rotation.x=-Math.PI/2,ot.position.set(m,-.02,f),ot.receiveShadow=!0,r.add(ot);let Z=Pi(256,256,(J,fe,me)=>{Wp(J,fe,me,Se?"#26272c":"#51475f",.1,9e3),Se&&(J.fillStyle="rgba(255,255,255,.75)",J.fillRect(fe/2-2,0,4,me*.45))},1,1),ne=new Ae(ea(h,n,-n,.02,1/12),new Re({map:Z,roughness:.85}));ne.receiveShadow=!0,ne.material.name="racetrack",r.add(ne);let Te=new Re({color:15921906,roughness:.7});for(let J of[1,-1]){let fe=new Ae(ea(h,J*n-.35+(J>0?0:.7),J*n-.65+(J>0?0:.7),.035,1),Te);fe.receiveShadow=!0,r.add(fe)}let We=Pi(64,64,J=>{J.fillStyle=ft?"#e8475a":"#e3262e",J.fillRect(0,0,64,32),J.fillStyle=ft?"#f2c230":"#f4f4f4",J.fillRect(0,32,64,32)}),Ee=new Re({map:We,roughness:.7});for(let J of[1,-1]){let fe=new Ae(ea(h,J>0?n+1.5:-n,J>0?n:-n-1.5,.045,.25,!0,v),Ee);fe.receiveShadow=!0,r.add(fe)}let Qe=Pi(128,32,J=>{Se?(J.fillStyle="#15161c",J.fillRect(0,0,128,32),J.fillStyle="#19d3ff",J.fillRect(0,20,128,5),J.fillStyle="#ff2bd0",J.fillRect(0,6,128,3)):ft?(J.fillStyle="#2d6bd1",J.fillRect(0,0,128,32),J.fillStyle="#1c4ea8",J.fillRect(0,8,128,3),J.fillRect(0,20,128,3),J.fillStyle="#7a4326",J.fillRect(0,0,7,32)):(J.fillStyle="#e9e9e9",J.fillRect(0,0,128,32),J.fillStyle=Ce?"#1e88c9":"#e3262e",J.fillRect(0,0,64,32),J.fillStyle="rgba(0,0,0,.25)",J.fillRect(0,0,128,3))}),zt=new Re({map:Qe,side:Vt,roughness:.6,emissive:Se?16777215:0,emissiveMap:Se?Qe:null,emissiveIntensity:Se?1.2:0});for(let J of[1,-1]){let fe=new Ae(qv(h,J>0?me=>H(me)?Q:s+.2:-(s+.2),1.15,.16666666666666666),zt);fe.castShadow=!Se,r.add(fe)}let Ye=(J,fe,me)=>{for(let Le=0;Le<8;Le++)if(i.surf(J+Math.cos(Le*.785)*me,fe+Math.sin(Le*.785)*me)!==Zn)return!1;return!0},je=[];for(let J=0;J<u;J+=4)for(let fe of[1,-1]){let me=h[J],Le=fe*(s+5+Wt()*38),L=me.x+me.tz*Le,qe=me.z-me.tx*Le;Ye(L,qe,5)&&je.push({x:L,z:qe,r:Wt()*6.28,s:.8+Wt()*.7,i:J})}if(Se){let J=Pi(64,128,y=>{y.fillStyle="#0d0e14",y.fillRect(0,0,64,128);for(let D=4;D<124;D+=10)for(let B=4;B<60;B+=9)Math.random()>.45&&(y.fillStyle=["#ffd27a","#8fd8ff","#ff9ad5"][Math.random()*3|0],y.fillRect(B,D,5,6))}),fe=new Re({map:J,emissive:16777215,emissiveMap:J,emissiveIntensity:1.1,roughness:.8}),me=new Ot(1,1,1);me.translate(0,.5,0),r.add(Yt(me,fe,je.filter((y,D)=>D%3===0).map(y=>({x:y.x,z:y.z,r:0,sx:14+Wt()*12,sy:18+Wt()*50,sz:14+Wt()*12})),!1));let Le=new On(.12,.16,7,6);Le.translate(0,3.5,0);let L=new vi(.45,8,6);L.translate(0,7.1,0);let qe=[];for(let y=0;y<u;y+=14){let D=h[y],B=(y%28?1:-1)*(s+1.2);qe.push({x:D.x+D.tz*B,z:D.z-D.tx*B})}r.add(Yt(Le,new Re({color:3158586}),qe,!1)),r.add(Yt(L,new Ct({color:new xe(16769704).multiplyScalar(3)}),qe,!1));let He=new Kn(3.4,7,14,1,!0);He.translate(0,3.5,0);let P=Yt(He,new Ct({color:16767392,transparent:!0,opacity:.07,depthWrite:!1,blending:ai,side:Vt}),qe,!1);P.receiveShadow=!1,r.add(P)}else{let J=new On(.22,.34,Ce||e.theme==="coast"?6:2.4,6);J.translate(0,Ce||e.theme==="coast"?3:1.2,0);let fe;Ce||e.theme==="coast"?(fe=new Kn(2.6,1.6,7),fe.scale(1,.7,1),fe.translate(0,6.2,0)):(fe=new Fa(2.7,1),fe.scale(1,.85,1),fe.translate(0,4.3,0));let me=je.filter((Le,L)=>Ce?L%3===0:ft?L%11!==5&&L%11!==8:!0);if(r.add(Yt(J,new Re({color:7031339,roughness:1}),me)),r.add(Yt(fe,new Re({color:Ce?5147194:ft?3970112:3107636,roughness:1,flatShading:!0}),me)),Ce){let Le=new Kn(1,1,4);Le.rotateY(Math.PI/4),Le.translate(0,.5,0);let L=new Re({color:13804636,roughness:1,flatShading:!0});r.add(Yt(Le,L,[{x:m+420,z:f-380,sx:330,sy:210,sz:330},{x:m+40,z:f-520,sx:280,sy:180,sz:280},{x:m-330,z:f-430,sx:190,sy:120,sz:190}],!1));let qe=new Da(1.4,0);r.add(Yt(qe,new Re({color:11569749,roughness:1,flatShading:!0}),je.filter((He,P)=>P%3===1).map(He=>({...He,y:.3,s:He.s*1.4}))))}if(e.theme==="coast"){let Le=new Ae(new bn(3e3,1200),new Re({color:1863580,roughness:.15,metalness:.5}));Le.rotation.x=-Math.PI/2,Le.position.set(m,.03,g-s-22-600),r.add(Le);let L=new Ae(new bn(3e3,22),new Re({color:15126426,roughness:1}));L.rotation.x=-Math.PI/2,L.position.set(m,.01,g-s-11),L.receiveShadow=!0,r.add(L);let qe=new Ot(1,1,1);qe.translate(0,.5,0);let He=[15852488,15321504,14280428,15782592].map(y=>new xe(y)),P=[];for(let y=d-120;y<p+120;y+=26)P.push({x:y,z:b+s+40+Wt()*20,sx:20,sy:16+Wt()*34,sz:18,c:He[Wt()*4|0]});r.add(Yt(qe,new Re({roughness:.9}),P))}}if(!Se){let J=new Re({color:Ce?12884572:11034424,roughness:1});for(let fe of[1,-1]){let me=new Ae(ea(h,fe>0?n+2.2:-n,fe>0?n:-n-2.2,.012,1),J);me.receiveShadow=!0,r.add(me)}}if(F){let J=h.map((B,X)=>H(X)),fe=new Ae(ea(h,n+7.6,n,.02,1/12,!0,J),new Re({color:Se?3421501:6708341,roughness:.9,name:"racetrack"}));fe.receiveShadow=!0,r.add(fe);let me=new Ae(ea(h,n+.25,n-.05,.05,1,!0,J),new Re({color:15909424,roughness:.7}));r.add(me),i.pitBoxes=[];let Le=[],L=[14886446,1681358,16761370,3126359,16743088,15987958].map(B=>new xe(B));for(let B=0;B<6;B++){let X=((u-Math.round(z*.6)+B*4)%u+u)%u,ae=h[X],de=ae.x+ae.tz*(n+5),K=ae.z-ae.tx*(n+5),G=Math.atan2(ae.tx,ae.tz),te=Pi(128,256,ce=>{ce.clearRect(0,0,128,256),ce.strokeStyle="#fff",ce.lineWidth=8,ce.strokeRect(6,6,116,244),ce.fillStyle="rgba(255,255,255,.9)",ce.font="900 70px Rubik, Arial Black, sans-serif",ce.textAlign="center",ce.fillText(String(B+1),64,150)}),pe=new Ae(new bn(3.4,6.8),new Ct({map:te,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-5,polygonOffsetUnits:-5}));pe.rotation.set(-Math.PI/2,0,Math.PI-G),pe.position.set(de,.06,K),r.add(pe),i.pitBoxes.push({x:de,z:K,th:G,idx:X});for(let ce=0;ce<3;ce++)Le.push({x:ae.x+ae.tz*(n+7.6)+ae.tx*(ce-1)*1.3,z:ae.z-ae.tx*(n+7.6)+ae.tz*(ce-1)*1.3,c:L[B]})}let qe=new Vs(.3,.75,3,8);qe.translate(0,.68,0);let He=new vi(.27,8,6);He.translate(0,1.52,0),r.add(Yt(qe,new Re({roughness:.8}),Le)),r.add(Yt(He,new Re({color:15987958,roughness:.5}),Le.map(B=>({x:B.x,z:B.z}))));let P=h[0],y=new Ae(new Ot(8,4.6,(z+N)*1.5),new Re({color:Se?2763827:15327956,roughness:.9}));y.position.set(P.x+P.tz*(Q+5.5),2.3,P.z-P.tx*(Q+5.5)),y.rotation.y=Math.atan2(P.tx,P.tz),y.castShadow=y.receiveShadow=!0,r.add(y);let D=new Ae(new Ot(9.4,.5,(z+N)*1.5+1),new Re({color:4160090,roughness:.8}));D.position.copy(y.position),D.position.y=4.85,D.rotation.y=y.rotation.y,D.castShadow=!0,r.add(D)}if(!e.dev){let J=[],fe=[14886446,1681358,16761370,15987958,3126359,16743088,8077284].map(G=>new xe(G)),me=[15845797,14263671,11038783,8014379].map(G=>new xe(G));for(let G=0;G<u;G++)if(!(G%64>46)){for(let te of[1,-1])if(!(te>0&&H(G)))for(let pe=0;pe<6;pe++){if(Wt()<.18)continue;let ce=h[G],he=te*(s+1.7+pe*1.05+Wt()*.3),ge=ce.x+ce.tz*he+(Wt()-.5)*.8,Ne=ce.z-ce.tx*he+(Wt()-.5)*.8;Ye(ge,Ne,.9)&&J.push({x:ge,z:Ne,s:.9+Wt()*.25,c:fe[Wt()*7|0],k:me[Wt()*4|0]})}}let Le=new Vs(.28,.7,3,8);Le.translate(0,.63,0);let L=new vi(.24,8,6);L.translate(0,1.42,0);let qe=[],He=[],P=[14886446,16761370,15987958,1681358,3126359,1118740].map(G=>new xe(G));for(let G=6;G<u;G+=9){let te=h[G],pe=te.k>0?-1:1;if(pe>0&&H(G))continue;let ce=pe*(s+.9),he=te.x+te.tz*ce,ge=te.z-te.tx*ce;Ye(he,ge,.5)&&(He.push({x:he,z:ge,y:0,r:Math.atan2(te.tx,te.tz)+(pe>0?0:Math.PI),c:P[Wt()*6|0]}),Math.abs(te.k)>1/80&&qe.push({x:he+te.tx*1.2,z:ge+te.tz*1.2,c:new xe(16742938)}))}let y=new On(.05,.05,4.4,5);y.translate(0,2.2,0),r.add(Yt(y,new Re({color:14211288}),He.map(G=>({x:G.x,z:G.z})),!1));let D=new bn(1.7,1,8,1);D.translate(.85,3.8,0);let B=Yt(D,l(new Re({side:Vt,roughness:.8}),"transformed.z += sin(position.x * 3.5 - uTime * 6. + instanceMatrix[3][0]) * .16 * position.x; transformed.y += sin(position.x * 2. - uTime * 4.) * .04 * position.x;"),He,!1);r.add(B),J.push(...qe.map(G=>({...G,s:1.05,k:me[1]}))),r.add(Yt(Le,l(new Re({roughness:.9}),c),J)),r.add(Yt(L,l(new Re({roughness:.8}),c),J.map(G=>({x:G.x,z:G.z,s:G.s,c:G.k}))));let X=[["TAFHEET","#e3262e","#fff"],["EGYSeal","#f3f4f6","#1c4ea8"],["NILE COLA","#1c4ea8","#fff"],["AMM SABER","#ffc21a","#17181c"],["SCARAB OIL","#f3f4f6","#e3262e"],["RA ROSSO","#e3262e","#ffc21a"],["HORUS TYRES","#17181c","#ffc21a"]],ae=new Re({color:8012582,roughness:1});X.forEach(([G,te,pe],ce)=>{let he=Math.round((ce+.45)*u/X.length)%u,ge=h[he],Ne=ge.k>0?-1:1,Ze=Ne*((Ne>0&&H(he)?Q+16:s)+5.5),k=ge.x+ge.tz*Ze,_e=ge.z-ge.tx*Ze;if(!Ye(k,_e,2.5))return;let ie=Pi(512,200,re=>{re.fillStyle=te,re.fillRect(0,0,512,200),re.strokeStyle=pe,re.lineWidth=10,re.strokeRect(14,14,484,172),re.fillStyle=pe,re.font="italic 900 84px Rubik, Arial Black, sans-serif",re.textAlign="center",re.textBaseline="middle",re.fillText(G,256,106,440)}),be=new Bt,ve=new Ae(new Ot(10,3.9,.3),[ae,ae,ae,ae,new Re({map:ie,roughness:.8}),ae]);ve.position.y=4.4,ve.castShadow=!0,be.add(ve);for(let re of[-4,4]){let Oe=new Ae(new Ot(.35,2.6,.35),ae);Oe.position.set(re,1.3,-.1),Oe.castShadow=!0,be.add(Oe)}be.position.set(k,0,_e),be.rotation.y=Math.atan2(ge.x-k,ge.z-_e),r.add(be)});let de=[];for(let G=0;G<u;G+=5){let te=h[G];if(Math.abs(te.k)<1/70)continue;let pe=te.k>0?-1:1;if(pe>0&&H(G))continue;let ce=pe*(s+1.3),he=te.x+te.tz*ce,ge=te.z-te.tx*ce,Ne=Math.atan2(te.tx,te.tz);Ye(he,ge,.8)&&de.push({x:he,z:ge,y:.55,r:Ne},{x:he+te.tx*1.6,z:ge+te.tz*1.6,y:.55,r:Ne},{x:he+te.tx*.8,z:ge+te.tz*.8,y:1.6,r:Ne})}let K=new Ot(1.1,1.05,1.5,2,2,2);if(r.add(Yt(K,new Re({color:14197825,roughness:1,flatShading:!0}),de)),ft){let G=je.filter((he,ge)=>ge%11===5).map(he=>({x:he.x,z:he.z,y:0,r:he.r,c:fe[Wt()*7|0]})),te=new Ot(2.3,2.2,5);te.translate(0,1.4,0),r.add(Yt(te,new Re({roughness:.6}),G));let pe=je.filter((he,ge)=>ge%11===8).map(he=>({x:he.x,z:he.z,r:he.r})),ce=new Kn(2.6,2.6,4);ce.translate(0,1.3,0),r.add(Yt(ce,new Re({color:15986662,roughness:1,flatShading:!0}),pe))}}if(e.dev){let J=[];for(let me=0;me<12;me++)J.push({x:20+me*18,z:24});for(let me=0;me<24;me++)J.push({x:110+Math.cos(me/24*6.283)*30,z:65+Math.sin(me/24*6.283)*30});let fe=new Kn(.35,.9,8);fe.translate(0,.45,0),r.add(Yt(fe,new Re({color:16738835,roughness:.7}),J))}let Je=h[0],Ke=Pi(256,64,J=>{J.fillStyle="#3a3d45",J.fillRect(0,0,256,64);for(let fe=0;fe<900;fe++)J.fillStyle=`hsl(${Math.random()*360},70%,${45+Math.random()*30}%)`,J.fillRect(Math.random()*256,Math.random()*64,3,4)},3,1),et=new Bt;et.position.set(Je.x-Je.tz*(s+3),0,Je.z+Je.tx*(s+3)),et.rotation.y=Math.atan2(Je.tx,Je.tz);for(let J=0;J<5;J++){let fe=new Ae(new Ot(2.2,1.1*(J+1),60),new Re({map:Ke,emissive:Se?5592405:0,emissiveMap:Se?Ke:null}));fe.position.set(-J*2.2,.55*(J+1),10),fe.castShadow=!0,et.add(fe)}r.add(et);{let J=[],fe=et.rotation.y,me=Math.cos(fe),Le=Math.sin(fe),L=[14886446,1681358,16761370,15987958,3126359,16743088,8077284].map(y=>new xe(y));for(let y=0;y<5;y++)for(let D=-19;D<40;D+=.8){if(Wt()<.12)continue;let B=-y*2.2+(Wt()-.5)*.9;J.push({x:et.position.x+B*me+D*Le,z:et.position.z-B*Le+D*me,y:1.1*(y+1),s:.9+Wt()*.2,c:L[Wt()*7|0]})}let qe=new Vs(.28,.6,3,6);qe.translate(0,.55,0);let He=new vi(.23,7,5);He.translate(0,1.28,0),r.add(Yt(qe,l(new Re({roughness:.9}),c),J,!1)),r.add(Yt(He,l(new Re({color:14263671,roughness:.8}),c),J.map(y=>({x:y.x,z:y.z,y:y.y,s:y.s})),!1)),Se||[[14886446,16761370],[1681358,15987958],[8077284,16743088],[3126359,16761370]].forEach(([y,D],B)=>{let X=new Bt,ae=new Ae(new vi(9,12,10),new Re({color:y,roughness:.7,flatShading:!0}));ae.scale.y=1.2;let de=new Ae(new On(8.9,8.9,3,12,1,!0),new Re({color:D,roughness:.7})),K=new Ae(new Ot(2.4,2,2.4),new Re({color:8012582}));K.position.y=-14,X.add(ae,de,K);let G=B*1.7+.6,te=i.bounds+70+B*25,pe=m+Math.cos(G)*te,ce=f+Math.sin(G)*te,he=34+B*9;X.position.set(pe,he,ce),r.add(X),o.push(ge=>{X.position.y=he+Math.sin(ge*.25+B)*3,X.position.x=pe+Math.sin(ge*.05+B*2)*14})}),Se&&[16722896,1692671,16761370,8257435].forEach((y,D)=>{let B=et.position.x+-9*me+(D*16-14)*Le,X=et.position.z- -9*Le+(D*16-14)*me,ae=new wi(y,420,95,.32,.6,1.3);ae.position.set(B,13,X),r.add(ae,ae.target),i.fancyLights.push(ae);let de=new Ae(new Kn(5,46,12,1,!0),new Ct({color:y,transparent:!0,opacity:.09,depthWrite:!1,blending:ai,side:Vt}));de.geometry.translate(0,-23,0),de.geometry.rotateX(Math.PI),de.position.set(B,13,X),r.add(de),o.push(K=>{let G=Math.sin(K*.5+D*1.6),te=h[((Math.round((G*.5+.5)*40)-20)%u+u)%u];ae.target.position.set(te.x+Je.tz*Math.sin(K*.9+D)*5,0,te.z-Je.tx*Math.sin(K*.9+D)*5),de.rotation.set(Math.sin(K*.7+D)*.5,0,Math.cos(K*.45+D*2)*.5)})})}}async function qp(i,e){let t=_n.find(l=>l.id===i),n=new Zu(t);t.type==="glb"?await Wv(n,e):Xv(n),Vv(n);let s=1e9,r=-1e9,a=1e9,o=-1e9;for(let l of n.path)s=Math.min(s,l.x),r=Math.max(r,l.x),a=Math.min(a,l.z),o=Math.max(o,l.z);return n.box={minx:s,maxx:r,minz:a,maxz:o},n}function Xp(i){let e=new vi(4e3,24,12),t=new Lt({side:nn,depthWrite:!1,fog:!1,uniforms:{top:{value:new xe(i.skyTop)},bot:{value:new xe(i.skyBot)}},vertexShader:"varying vec3 p; void main(){ p=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`varying vec3 p; uniform vec3 top; uniform vec3 bot; void main(){ float h=clamp(normalize(p).y*2.2,0.,1.); gl_FragColor=vec4(mix(bot,top,pow(h,.6)),1.);
#include <tonemapping_fragment>
#include <colorspace_fragment>
 }`}),n=new Ae(e,t);return n.renderOrder=-10,n.frustumCulled=!1,n}var ct={hz:120,tyre:{frontB:12,frontC:1.45,rearB:7.5,rearC:1.3,driveShare:.45,brakeShare:.6,loadSens:.5,wornGrip:.72,wear:{base:.0011,slip:.011,spin:.008,lock:.03,offroad:.002},wetLossSlick:.27,wetLossWet:.07,dryLossWet:.07},steer:{lock:.58,speedK:.055,rate:4.4,rateSpeedK:.025,returnRate:5,maxLock:.62},assist:{off:0,low:.5,full:1},surface:{kerbGrip:.95,grassDrag:.15,roadDrag:.03,airDrag:.25},fuel:{tankKg:45,fullThrottleSeconds:330,idle:.06},pit:{limit:16.7,tyres:2.6,fuelFull:4,repairFull:6},damage:{threshold:3.5,scale:34,enginePowerLoss:.4,steerPull:.05},gripScale:1.3,rearBias:1.16,powerSlide:.45,slideAid:.3,assistYawDamp:.35,wall:{bounce:.04,spin:.35,friction:.22,yawKeep:.97},yawDamp:.45,yawDampSpeed:.01,net:{hz:24,minBuffer:45,maxBuffer:300,intervalK:1.2,jitterK:2.6},reset:{penalty:2},setup:{gearAcc:.04,gearTop:.035,aeroDown:.35,aeroTop:.02,biasStep:.05,rollStep:.03,compound:{soft:[1.04,1.6],medium:[1,1],hard:[.97,.6]}},toy:{w:1.08,h:1.16,l:.88,wheel:1.12}},Dt=[{id:"Ford",cyl:4,name:"Scarab RS",ar:"\u0627\u0644\u062C\u0639\u0631\u0627\u0646",cls:"Compact \xB7 FWD",price:0,color:2060267,top:50,acc:8.6,grip:1.22,rear:1.04,loose:.3,off:.62,mass:1180,drive:"fwd",brake:1.25,aero:.5,rollF:.6,yawK:1.12,blurb:"Front-drive hot hatch. Safe understeer, lift to tuck the nose in. The beginner\u2019s car."},{id:"Sterrato",cyl:10,name:"Sandstorm",ar:"\u0627\u0644\u0639\u0627\u0635\u0641\u0629",cls:"Rally \xB7 AWD",price:0,color:15245852,top:53,acc:9.4,grip:1.18,rear:1,loose:.5,off:.8,mass:1350,drive:"awd",brake:1.25,aero:.7,rollF:.54,yawK:1.25,blurb:"All-wheel drive. Huge traction out of corners and barely notices the grass."},{id:"Mercedes",cyl:8,name:"Pharaoh",ar:"\u0627\u0644\u0641\u0631\u0639\u0648\u0646",cls:"Touring \xB7 RWD",price:1500,color:1842982,top:56,acc:9.8,grip:1.15,rear:.96,loose:.8,off:.55,mass:1650,drive:"rwd",brake:1.2,aero:.6,rollF:.5,yawK:1.4,blurb:"Heavy rear-drive saloon. Long braking, and the tail steps out under power."},{id:"LandRover",cyl:8,name:"Sphinx 4x4",ar:"\u0623\u0628\u0648 \u0627\u0644\u0647\u0648\u0644",cls:"Truck \xB7 AWD",price:2500,color:3112271,top:49,acc:9,grip:1.12,rear:1.03,loose:.4,off:.9,mass:2100,drive:"awd",brake:1.05,aero:.3,rollF:.57,yawK:1.6,blurb:"Two tonnes. Slow to turn, slow to stop, wins every shoving match."},{id:"Artura",cyl:6,name:"Cobra",ar:"\u0627\u0644\u0643\u0648\u0628\u0631\u0627",cls:"GT \xB7 RWD",price:4e3,color:16738835,top:60,acc:11,grip:1.32,rear:.99,loose:.6,off:.5,mass:1400,drive:"rwd",brake:1.4,aero:1.2,rollF:.52,yawK:1.1,blurb:"Mid-engine GT. Sharp turn-in, strong brakes, needs a smooth right foot."},{id:"Ferrari",cyl:8,name:"Ra Rosso",ar:"\u0631\u0639",cls:"GT \xB7 RWD",price:6500,color:14163500,top:64,acc:11.8,grip:1.36,rear:.97,loose:.7,off:.5,mass:1450,drive:"rwd",brake:1.45,aero:1.4,rollF:.5,yawK:1.1,blurb:"V8 GT. Faster everywhere than the Cobra and less forgiving about it."},{id:"Zenvo",cyl:8,name:"Horus GT",ar:"\u062D\u0648\u0631\u0633",cls:"Hyper \xB7 RWD",price:9500,color:1324712,top:69,acc:12.8,grip:1.42,rear:.98,loose:.75,off:.45,mass:1500,drive:"rwd",brake:1.5,aero:2.3,rollF:.5,yawK:1.05,blurb:"Downforce car: the faster you go, the harder it grips. Brutal on cold nerves."},{id:"Mustang",cyl:8,name:"Khamsin",ar:"\u0627\u0644\u062E\u0645\u0627\u0633\u064A\u0646",cls:"Muscle \xB7 RWD",price:2e3,color:15909376,top:58,acc:10.6,grip:1.14,rear:.94,loose:.9,off:.5,mass:1700,drive:"rwd",brake:1.15,aero:.5,rollF:.48,yawK:1.35,blurb:"Big V8 muscle. Loud, fast in a straight line, and happy to go sideways."},{id:"M8",cyl:8,name:"Anubis M",ar:"\u0623\u0646\u0648\u0628\u064A\u0633",cls:"Touring \xB7 RWD",price:3500,color:1006666,top:62,acc:11,grip:1.28,rear:.97,loose:.7,off:.5,mass:1750,drive:"rwd",brake:1.35,aero:.9,rollF:.52,yawK:1.3,blurb:"Grand tourer. Heavy but composed, with long legs on the straights."},{id:"Urus",cyl:8,name:"Bastet SUV",ar:"\u0628\u0627\u0633\u062A\u064A\u062A",cls:"Super SUV \xB7 AWD",price:4500,color:15987958,top:60,acc:11.2,grip:1.2,rear:1.02,loose:.45,off:.82,mass:2200,drive:"awd",brake:1.2,aero:.6,rollF:.56,yawK:1.55,blurb:"A fast SUV. Launches hard on four driven wheels, leans on its brakes."},{id:"Porsche",cyl:8,name:"Nefertiti S",ar:"\u0646\u0641\u0631\u062A\u064A\u062A\u064A",cls:"Sports saloon \xB7 AWD",price:5e3,color:8077284,top:61,acc:11.4,grip:1.3,rear:1,loose:.5,off:.6,mass:1900,drive:"awd",brake:1.35,aero:1,rollF:.53,yawK:1.35,blurb:"All-wheel-drive saloon. Stable, quick, and easy to trust in the rain."},{id:"AMG",cyl:8,name:"Osiris GT",ar:"\u0623\u0648\u0632\u064A\u0631\u064A\u0633",cls:"GT \xB7 RWD",price:6e3,color:3126359,top:63,acc:11.6,grip:1.33,rear:.97,loose:.7,off:.5,mass:1600,drive:"rwd",brake:1.4,aero:1.3,rollF:.5,yawK:1.15,blurb:"Front-engine GT with a long bonnet. Balanced, and rewards trail braking."},{id:"GTR",cyl:6,name:"Sobek R",ar:"\u0633\u0648\u0628\u0643",cls:"GT \xB7 AWD",price:7e3,color:1681358,top:64,acc:12.4,grip:1.34,rear:1,loose:.5,off:.6,mass:1750,drive:"awd",brake:1.4,aero:1.3,rollF:.54,yawK:1.25,blurb:"Twin-turbo all-wheel drive. Monstrous traction out of slow corners."},{id:"P1GTR",cyl:8,name:"Seth GTR",ar:"\u0633\u062A",cls:"Track hyper \xB7 RWD",price:12e3,color:16738835,top:70,acc:13.2,grip:1.48,rear:.99,loose:.7,off:.42,mass:1400,drive:"rwd",brake:1.55,aero:2.9,rollF:.5,yawK:1,blurb:"Track-only hypercar. Enormous downforce; the fastest car in the game."}];var Ac=[0,15987958,1118740,12088115,15909376,14886446,1681358],Qu=[0,197380,733010,5915664,4853012],ed=[0,1681358,16722896,8257435,16761370,14886446,16777215];function jv(i,e){e=Object.assign({gear:0,aero:0,brake:0,susp:0,tyre:"medium"},e||{});let t=ct.setup,n=t.compound[e.tyre]||t.compound.medium;return{acc:1+t.gearAcc*e.gear,top:(1-t.gearTop*e.gear)*(1-t.aeroTop*e.aero),aero:Math.max(.1,1+t.aeroDown*e.aero),bias:.7+t.biasStep*e.brake,rollF:i.rollF+t.rollStep*e.susp,grip:n[0],wear:n[1]}}var na=[1006666,9051179,2830218,16751918,14163500,16738835,15909376,3126359,1681358,2060267,8077284,16732067,15921906,1842982],Jt=(i,e,t)=>i<e?e:i>t?t:i,Ec=i=>{for(;i>Math.PI;)i-=2*Math.PI;for(;i<-Math.PI;)i+=2*Math.PI;return i},Ss=["FL","FR","RL","RR"],Kv=[new xe(5916208),new xe(13215339)],$u=null;async function jp(){let i=await new $r().parseAsync(await Qr("cars.glb"),"");$u={};for(let e of i.scene.children)$u[e.name]=e}var Qi={};function Yv(i){return Qi.tire||(Qi.tire=new Re({color:789517,roughness:.92}),Qi.rim=new Re({color:13225170,metalness:.95,roughness:.28}),Qi.rimDark=new Re({color:2763824,metalness:.8,roughness:.4}),Qi.body=new Re({color:921361,roughness:.6,metalness:.2}),Qi.trim=new Re({color:1381914,roughness:.45,metalness:.5}),Qi.window=new cn({color:659478,roughness:.06,metalness:.9,clearcoat:1}),Qi.front=new Re({color:16777215,emissive:16774096,emissiveIntensity:1.1})),{...Qi,paint:new cn({color:i,metalness:.55,roughness:.32,clearcoat:1,clearcoatRoughness:.06}),rear:new Re({color:9046538,emissive:16718362,emissiveIntensity:.5})}}var ws=class{constructor(e,t=e.color,n="Driver",s,r,a){this.spec=e,this.name=n,this.color=t,this.up=s||{eng:0,tyre:0,nitro:0,armor:0},this.fuel=1,this.burn=1,this.noNitro=!1,this.assistK=0,this.inPit=!1,this.pitZone=!1,this.aF=0,this.useF=0,this.useR=0,this.dirt=0,this.dirtShown=0,this.wetTyres=!1,this.baseColor=new xe(t);let o=$u[e.id],l=this.root=new Bt;l.rotation.order="YXZ";let c=this.chassis=new Bt;l.add(c),this.m=Yv(t),this.wheels={},this.bodyMeshes=[],this.dmg={front:0,rear:0,left:0,right:0},this.tyre=1,this.dmgScale=1,this.wear=1;for(let d of o.children){let p=d.clone(!0);if(p.traverse(g=>{if(!g.isMesh)return;g.castShadow=!0;let b=g.userData.kind=g.material.name;g.material=b==="paint"?this.m.paint:b==="tire"?this.m.tire:b==="rim7"?this.m.rim:b==="rim6"?this.m.rimDark:this.m[b]||this.m.body}),p.name.startsWith("body"))c.add(p),p.traverse(g=>{g.isMesh&&(g.geometry=g.geometry.clone(),g.userData.orig=g.geometry.attributes.position.array.slice(),this.bodyMeshes.push(g))});else{let g=new Bt;g.position.copy(p.position),p.position.set(0,0,0),g.add(p),l.add(g),this.wheels[p.name.slice(6,8)]={pivot:g,mesh:p,x:g.position.x,y:g.position.y,z:g.position.z}}}let h=this.wheels;this.a=h.FL.z,this.b=-h.RL.z,this.tw=h.FL.x,this.R=h.RL.y;{let d=ct.toy;c.scale.set(d.w,d.h,d.l);for(let p in h){let g=h[p];g.mesh.scale.setScalar(d.wheel),g.y*=d.wheel,g.pivot.position.set(g.x*d.w,g.y,g.z*d.l)}this.rideY=this.R*(d.wheel-1),this.R*=d.wheel}let u=new Tn().setFromObject(c);this.tn=jv(e,a),this.wear=this.tn.wear,this.dress(r),this.hw=(u.max.x-u.min.x)/2-.05,this.zf=u.max.z-.1,this.zr=-u.min.z-.1,this.top=u.max.y,this.I=e.mass*this.a*this.b*e.yawK,this.h=.3,this.wsurf=[$i,$i,$i,$i],this.lastSk=[null,null],this.spin=[0,0],this.reset(0,0,0)}reset(e,t,n){this.x=this.px=e,this.z=this.pz=t,this.th=this.pth=n,this.vx=this.vz=this.r=0,this.steer=0,this.axS=this.ayS=0,this.slipR=0,this.wspin=0,this.locked=!1,this.grass=0,this.nitro=1,this.nitroOn=!1,this.braking=!1,this.rollD=this.pitchD=0,this.draft=0,this.oil=0,this.lockF=!1,this.y=0,this.pitch=this.roll=0,this.stuck=0,this.lastSk=[null,null],this.emitAcc=0,this.rpm=0,this.gear=1}get speed(){return Math.hypot(this.vx,this.vz)}get vf(){return this.vx*Math.sin(this.th)+this.vz*Math.cos(this.th)}get beta(){let e=Math.sin(this.th),t=Math.cos(this.th);return Math.atan2(this.vx*t-this.vz*e,Math.abs(this.vx*e+this.vz*t))}step(e,t,n,s,r=1){let a=this.spec,o=a.mass+ct.fuel.tankKg*this.fuel,l=this.a,c=this.b,h=l+c,u=9.81,d=this.up,p=this.x,g=this.z,b=ct.tyre,m=this.tn;this.px=p,this.pz=g,this.pth=this.th;let f=Math.sin(this.th),v=Math.cos(this.th),_=this.vx*f+this.vz*v,x=this.vx*v-this.vz*f,w=Math.hypot(_,x),T=_>=0?1:-1,R=n.wet||0,M=this.dmg,A=a.grip*m.grip*(1+.035*d.tyre)*(.72+.28*this.tyre)*(this.oil>0?.42:1)*ct.gripScale,C=this.wetTyres?.07*R+.07*(1-R):.27*R;this.oil=Math.max(0,this.oil-e);let I=0,F=0,z=0,N=0;for(let G=0;G<4;G++){let te=this.wheels[Ss[G]],pe=n.surf(this.x+f*te.z+v*te.x,this.z+v*te.z-f*te.x);this.wsurf[G]=pe,pe===Sc&&N++;let ce=pe===$i||pe===Sc?1-C:pe===ta?.95-C*1.2:a.off*(1-.15*R);(pe===Ms||pe===Zn)&&(z+=.25),G<2?I+=ce/2:F+=ce/2}this.grass=z,this.inPit=N>=2||this.pitZone;let H=w>4&&_>0?Math.atan2(x,_):0,$=t.steer*ct.steer.lock/(1+w*ct.steer.speedK),ee=Math.abs(H),oe=this.assistK;oe>0&&_>5&&($=$*(1-oe*Jt((ee-.3)*1.6,0,.8))+oe*Jt(H*.75,-.5,.5)),w>3&&($+=(M.left-M.right)*.05+M.front*.02*Math.sin(this.x*.7+this.z*.9)),$=Jt($,-.62,.62);let Q=(t.steer===0?ct.steer.returnRate:ct.steer.rate/(1+w*ct.steer.rateSpeedK))*e;this.steer+=Jt($-this.steer,-Q,Q);let se=o*this.axS*this.h/h,le=a.aero*m.aero*w*w,Se=Math.min(1,Math.abs(this.ayS)*this.h/(u*this.tw)),Ce=1-b.loadSens*(Se*m.rollF*2)**2,ft=1-b.loadSens*(Se*(1-m.rollF)*2)**2,at=Math.max(o*u*c/h-se,o*u*.15)+le*.45,ot=Math.max(o*u*l/h+se,o*u*.15)+le*.55,Z=s?t.throttle:0,ne=s?t.brake:1;if(this.fuel<=0&&(Z=0),this.inPit){let G=ct.pit.limit;_>G+.5?(Z=0,ne=Math.max(ne,.55)):_>G-1.2&&(Z=Math.min(Z,.12))}let Te=s&&ne>0&&Z===0&&_<1.2,We=this.nitroOn=!!(t.nitro&&!this.noNitro&&this.nitro>0&&Z>0&&s&&_>3);We&&(this.nitro=Math.max(0,this.nitro-e/(3.2*(1+.25*d.nitro))));let Ee=a.top*m.top*(1+.04*d.eng)*(We?1.16:1)*(z>.5?.55:1)*(1-.1*(M.front+M.rear));oe>0&&ee>.42&&(Z*=1-oe*(1-Jt(1-(ee-.42)/.3,.2,1)));let Qe=Te?-ne*a.acc*o*.5*Jt(1+_/12,0,1):Z*a.acc*m.acc*(1+.06*d.eng)*(1+.12*this.draft)*o*r*(1-.4*M.front)*(We?1.5:1)*Math.min(1,16/Math.max(_,1))*Jt(1-(_/Ee)**2,0,1),zt=Te?0:Math.min(ne*a.brake*o*u,o*Math.abs(_)/e);this.braking=ne>.1&&!Te;let Ye=a.drive==="fwd"?1:a.drive==="awd"?.42:0,je=I*A*at*Ce,Je=F*A*a.rear*ct.rearBias*ot*ft,Ke=Jt(Qe*Ye-T*zt*m.bias,-je,je),et=Qe*(1-Ye)-T*zt*(1-m.bias),J=Math.max(Math.abs(_),3),fe=x-c*this.r,me=Math.atan2(x+l*this.r,J)-this.steer*T,Le=-Math.sqrt(Math.max(je*je-(Ke>0?Ke*b.driveShare:Ke*b.brakeShare)**2,je*je*.15))*Math.sin(b.frontC*Math.atan(b.frontB*me)),L;if(this.wspin=0,this.locked=!1,t.hand&&s&&w>1){let G=Math.hypot(_,fe)||1,te=Je*.7;et=-te*_/G,L=-te*fe/G,this.locked=!0,this.slipR=1}else{Math.abs(et)>Je&&(this.wspin=(Math.abs(et)-Je)/Je,et=Math.sign(et)*Je);let G=Math.atan2(fe,J);L=-Math.sqrt(Math.max(Je*Je-et*et*a.loose*ct.powerSlide,Je*Je*.12))*Math.sin(b.rearC*Math.atan(b.rearB*G)),this.slipR=Math.abs(G)}this.aF=me,this.useF=Math.hypot(Ke,Le)/(je||1),this.useR=Math.hypot(et,L)/(Je||1);let qe=Math.cos(this.steer),He=Math.sin(this.steer),P=(et+Ke*qe-Le*He-.25*(1-.45*this.draft)*_*Math.abs(_)-o*(.03+z*ct.surface.grassDrag)*_-(Z===0&&!Te?o*.45*Math.sign(_)*Math.min(1,Math.abs(_)):0))/o,y=(Le*qe+Ke*He+L)/o;if(this.vx+=(P*f+y*v)*e,this.vz+=(P*v-y*f)*e,oe>0&&w>3&&!t.hand){let G=this.vx*v-this.vz*f,te=Math.min(1,ct.slideAid*oe*e);this.vx-=v*G*te,this.vz+=f*G*te}this.r+=(l*(Le*qe+Ke*He)-c*L)/this.I*e,this.r-=this.r*(ct.yawDamp+w*ct.yawDampSpeed+oe*ct.assistYawDamp)*e,Z===0&&(ne===0||!s)&&w<.5&&(this.vx*=.9,this.vz*=.9,this.r*=.85),s||(this.vx=this.vz=this.r=0),this.th+=this.r*e,this.x+=this.vx*e,this.z+=this.vz*e,this.axS+=(P-this.axS)*Math.min(1,e*8),this.ayS+=(y-this.ayS)*Math.min(1,e*8),s&&(this.fuel=Math.max(0,this.fuel-e*this.burn*(ct.fuel.idle+Z*(.35+.65*this.rpm))/ct.fuel.fullThrottleSeconds)),s&&(this.tyre=Math.max(0,this.tyre-e*this.wear*(b.wear.base*Math.min(1,w/25)+Math.min(this.slipR,.8)*.011+this.wspin*.008+(this.locked?.03:0)+z*.002))),!We&&s&&(this.nitro=Math.min(1,this.nitro+e*(.018+(this.drifting?.09:0)))),this.drifting=Math.abs(this.beta)>.22&&w>9&&_>0&&z<.6;let D=Math.abs(_),B=[0,.22,.4,.58,.78,1.02].map(G=>G*a.top),X=1;for(;X<5&&D>B[X];)X++;this.gear=Te&&_<-.5?0:X;let ae=(D-B[X-1])/(B[X]-B[X-1]),de=s?Jt(.25+ae*.7+this.wspin*.3,.12,1):.15+t.throttle*.7;this.rpm+=(de-this.rpm)*Math.min(1,e*10),this.dirt=Jt(this.dirt+e*(z*Math.min(1,w/15)*.07-R*.03),0,1),this.lockF=this.braking&&ne>.9&&w>17&&z<.5;let K=this.collideWalls(n);return n.surf(this.x,this.z)===Zn&&(this.x=p,this.z=g,this.vx*=.15,this.vz*=.15,this.r*=.3,K=Math.max(K,w*.5),this.hitX=p,this.hitZ=g,this.hitL=[0,this.zf],this.hitN=[-f,-v]),K}collideWalls(e){let t=Math.sin(this.th),n=Math.cos(this.th),s=this.spec.mass,r=this.hw,a=ct.wall,o=[[r,this.zf],[-r,this.zf],[r,-this.zr],[-r,-this.zr],[r,0],[-r,0]],l=0,c=!1;for(let[h,u]of o){let d=t*u+n*h,p=n*u-t*h,g=this.x+d,b=this.z+p;if(e.surf(g,b)!==Zn)continue;let m=0,f=0;for(let I=0;I<16;I++){let F=Math.cos(I*.3927),z=Math.sin(I*.3927);for(let N of[.8,1.6,2.6])e.surf(g+F*N,b+z*N)!==Zn&&(m+=F,f+=z)}let v=Math.hypot(m,f);if(v<.01){let I=e.escape(g,b);if(!I)continue;m=I.nx,f=I.nz,v=1}m/=v,f/=v;let _=0;for(;_<4&&e.surf(g+m*_,b+f*_)===Zn;)_+=.06;this.x+=m*_,this.z+=f*_,c=!0;let x=(this.vx+this.r*p)*m+(this.vz-this.r*d)*f;if(x>=0)continue;let w=p*m-d*f,T=-(1+a.bounce)*x/(1/s+w*w/this.I);this.vx+=T*m/s,this.vz+=T*f/s,this.r+=T*w/this.I*a.spin;let R=-f,M=m,A=this.vx*R+this.vz*M,C=Math.sign(A)*Math.min(Math.abs(A),a.friction*T/s);this.vx-=R*C,this.vz-=M*C,-x>l&&(l=-x,this.hitX=g,this.hitZ=b,this.hitL=[h,u],this.hitN=[m,f])}return c&&(this.r=Jt(this.r*a.yawKeep,-2.2,2.2)),l}bump(e,t){let n=0;for(let s of[1.15,-1.15])for(let r of[1.15,-1.15]){let a=this.x+Math.sin(this.th)*s,o=this.z+Math.cos(this.th)*s,l=e.x+Math.sin(e.th)*r,c=e.z+Math.cos(e.th)*r,h=a-l,u=o-c,d=Math.hypot(h,u),p=2.05;if(d>=p||d<1e-4)continue;let g=h/d,b=u/d,m=p-d,f=this.spec.mass,v=t?1e9:e.spec.mass,_=1/f,x=1/v;this.x+=g*m*x/(_+x)*(t?0:1)+(t?g*m:0),this.z+=b*m*x/(_+x)*(t?0:1)+(t?b*m:0),t||(e.x-=g*m*_/(_+x),e.z-=b*m*_/(_+x));let w=(this.vx-e.vx)*g+(this.vz-e.vz)*b;if(w>=0)continue;let T=-1.08*w/(_+x);this.vx+=T*g*_,this.vz+=T*b*_,this.r+=(Math.cos(this.th)*s*g-Math.sin(this.th)*s*b)*T*.35/this.I,t||(e.vx-=T*g*x,e.vz-=T*b*x,e.r-=(Math.cos(e.th)*r*g-Math.sin(e.th)*r*b)*T*.35/e.I),-w>n&&(n=-w,this.hitX=(a+l)/2,this.hitZ=(o+c)/2,this.hitL=this.toLocal(this.hitX,this.hitZ),this.hitN=[g,b],e.hitX=this.hitX,e.hitZ=this.hitZ,e.hitL=e.toLocal(this.hitX,this.hitZ),e.hitN=[-g,-b])}return n}dress(e){let t=this.look=Object.assign({wing:0,split:0,rim:0,tint:0,glow:0},e||{}),n=this.chassis;this.addons&&n.remove(this.addons);let s=this.addons=new Bt;n.add(s);let r=1e9,a=-1e9,o=0,l=[];for(let m of this.bodyMeshes){let f=m.userData.orig;for(let v=0;v<f.length;v+=3)l.push(f[v],f[v+1],f[v+2]),f[v+2]<r&&(r=f[v+2]),f[v+2]>a&&(a=f[v+2]),f[v]>o&&(o=f[v])}let c=(m,f,v)=>{let _=0;for(let x=0;x<l.length;x+=3)l[x+2]>=m&&l[x+2]<=f&&Math.abs(l[x])<v&&l[x+1]>_&&(_=l[x+1]);return _},h=(m,f)=>{let v=9;for(let _=0;_<l.length;_+=3)l[_+2]>=m&&l[_+2]<=f&&l[_+1]<v&&(v=l[_+1]);return v},u=new Re({color:921361,roughness:.45,metalness:.5}),d=o*2,p=(m,f,v,_,x,w,T)=>{let R=new Ae(new Ot(m,f,v),_);return R.position.set(x,w,T),R.castShadow=!0,s.add(R),R};if(t.wing){let m=c(r+.08,r+.5,o*.75),f=r+.26;if(t.wing===1)p(d*.8,.06,.2,this.m.paint,0,m+.02,r+.14).rotation.x=.25;else{let v=t.wing===2?.27:.4,_=t.wing===2?.3:.42,x=d*(t.wing===2?.86:.97);p(x,.035,_,t.wing===2?this.m.paint:u,0,m+v,f).rotation.x=.13;for(let w of[-.27,.27])p(.04,v,.11,u,w*d,m+v/2,f+.03);for(let w of[-.5,.5])p(.025,t.wing===2?.15:.24,_+.06,u,w*x,m+v+.02,f)}}if(t.split){let m=h(a-.3,a);p(d*.88,.03,.34,u,0,m+.015,a-.1);for(let f of[-.46,.46])p(.03,.09,.2,u,f*d*.88,m+.05,a-.14)}if(t.glow){let m=new Ae(new bn(d*.92,(a-r)*.82),new Ct({color:new xe(ed[t.glow]).multiplyScalar(1.8),transparent:!0,opacity:.6,depthWrite:!1,side:Vt}));m.rotation.x=-Math.PI/2,m.position.set(0,h(r,a)+.03,(r+a)/2),s.add(m)}let g=t.rim?new Re({color:Ac[t.rim],metalness:.9,roughness:.26}):null;for(let m in this.wheels)this.wheels[m].mesh.traverse(f=>{f.isMesh&&f.userData.kind&&f.userData.kind.startsWith("rim")&&(f.material=g||(f.userData.kind==="rim6"?this.m.rimDark:this.m.rim))});let b=t.tint?new cn({color:Qu[t.tint],roughness:.08,metalness:.9,clearcoat:1}):this.m.window;for(let m of this.bodyMeshes)m.userData.kind==="window"&&(m.material=b)}toLocal(e,t){let n=e-this.x,s=t-this.z,r=Math.sin(this.th),a=Math.cos(this.th);return[n*a-s*r,n*r+s*a]}damage(e){let t=Math.max(0,e-3.5)/34*this.dmgScale;if(t<=0||!this.hitL)return 0;let[n,s]=this.hitL,r=this.dmg,a=s>this.zf*.55?"front":s<-this.zr*.55?"rear":n>0?"left":"right";r[a]=Math.min(1,r[a]+t);let o=Math.sin(this.th),l=Math.cos(this.th),c=this.hitN,h=c[0]*l-c[1]*o,u=c[0]*o+c[1]*l,d=1.25,p=Math.min(.3,t*2.4);for(let g of this.bodyMeshes){let b=g.geometry.attributes.position,m=b.array,f=g.userData.orig,v=!1;for(let _=0;_<m.length;_+=3){let x=Math.hypot(f[_]-n,(f[_+1]-.55)*.6,f[_+2]-s);if(x>d)continue;let w=(1-x/d)**2*p,T=Math.sin(f[_]*37.1+f[_+1]*91.7+f[_+2]*53.3)*.35;m[_]+=h*w*(1+T),m[_+1]-=w*.25*(1+T),m[_+2]+=u*w*(1+T);let R=m[_]-f[_],M=m[_+1]-f[_+1],A=m[_+2]-f[_+2],C=Math.hypot(R,M,A);if(C>.36){let I=.36/C;m[_]=f[_]+R*I,m[_+1]=f[_+1]+M*I,m[_+2]=f[_+2]+A*I}v=!0}v&&(b.needsUpdate=!0,g.geometry.computeVertexNormals())}return t}get health(){let e=this.dmg;return 1-(e.front+e.rear+e.left+e.right)/4}repair(){this.dmg={front:0,rear:0,left:0,right:0},this.tyre=1,this.dirt=0;for(let e of this.bodyMeshes)e.geometry.attributes.position.array.set(e.userData.orig),e.geometry.attributes.position.needsUpdate=!0,e.geometry.computeVertexNormals()}render(e,t,n=1){let s=this.rx=this.px+(this.x-this.px)*n,r=this.rz=this.pz+(this.z-this.pz)*n,a=this.pth+Ec(this.th-this.pth)*n,o=Math.sin(a),l=Math.cos(a),c=[];for(let g=0;g<4;g++){let b=this.wheels[Ss[g]];c.push(t.height(s+o*b.z+l*b.x,r+l*b.z-o*b.x))}let h=Math.min(1,e*14);this.y+=((c[0]+c[1]+c[2]+c[3])/4-this.y)*Math.min(1,e*25),this.pitch+=(Math.atan2((c[2]+c[3]-c[0]-c[1])/2,this.a+this.b)-this.pitch)*h,this.roll+=(Math.atan2((c[0]+c[2]-c[1]-c[3])/2,this.tw*2)-this.roll)*h,this.root.position.set(s,this.y,r),this.root.rotation.set(this.pitch,a,this.roll),this.rollD+=(Jt(this.ayS*.011,-.085,.085)-this.rollD)*Math.min(1,e*7),this.pitchD+=(Jt(-this.axS*.0055,-.05,.05)-this.pitchD)*Math.min(1,e*7);let u=this.speed>2?this.grass*.035+(this.wsurf.includes(ta)?.02:0):0;this.chassis.rotation.set(this.pitchD+(Math.random()-.5)*u*.5+this.dmg.front*.02,0,this.rollD+(Math.random()-.5)*u+(this.dmg.left-this.dmg.right)*.035),this.chassis.position.y=this.rideY+(Math.random()-.5)*u+(this.rpm>.2?Math.sin(performance.now()*.05)*.003:0);let d=this.vf,p=d/this.R*e;this.spin[0]+=p,this.spin[1]+=this.locked?0:p*(1+this.wspin*3)+(this.wspin>0?(30+this.wspin*40)*e:0);for(let g=0;g<4;g++){let b=this.wheels[Ss[g]];b.mesh.rotation.x=this.spin[g<2?0:1],g<2&&(b.pivot.rotation.y=this.steer),b.pivot.position.y=b.y+(this.wsurf[g]===Ms&&this.speed>2?(Math.random()-.5)*.04:0)}this.m.rear.emissiveIntensity=this.braking?2.4:.5,Math.abs(this.dirt-this.dirtShown)>.03&&(this.dirtShown=this.dirt,this.m.paint.color.copy(this.baseColor).lerp(Kv[t.def.theme==="desert"?1:0],this.dirt*.6),this.m.paint.roughness=.32+this.dirt*.5,this.m.paint.clearcoat=1-this.dirt*.8)}effects(e,t,n,s=1){let r=Math.sin(this.th),a=Math.cos(this.th),o=this.speed,l=n.def.theme==="desert"?[.78,.64,.42]:[.36,.28,.17],c=this.slipR>.16&&o>6||this.wspin>.12||this.locked&&o>3;this.emitAcc+=e*60*s;let h=Math.floor(this.emitAcc);this.emitAcc-=h;for(let d=2;d<4;d++){let p=this.wheels[Ss[d]],g=this.x+r*p.z+a*p.x,b=this.z+a*p.z-r*p.x,m=this.wsurf[d],f=n.height(g,b);if(c&&(m===$i||m===ta)){let _=Jt(this.slipR*1.6+this.wspin+(this.locked?.6:0),.3,1);for(let R=0;R<h;R++)Math.random()<_&&t.smoke.emit(g+(Math.random()-.5)*.3,f+.15,b+(Math.random()-.5)*.3,this.vx*.25+(Math.random()-.5)*1.5,.7+Math.random()*1.2,this.vz*.25+(Math.random()-.5)*1.5,.9+Math.random()*.9,.9,3.2,.93,.93,.95,.34*_);let x=[g+a*.15,f+.06,b-r*.15],w=[g-a*.15,f+.06,b+r*.15],T=this.lastSk[d-2];T&&(T[0][0]-x[0])**2+(T[0][2]-x[2])**2<9&&t.skids.quad(T[0],T[1],x,w),this.lastSk[d-2]=[x,w]}else this.lastSk[d-2]=null}if(o>3)for(let d=0;d<4;d++){if(this.wsurf[d]!==Ms)continue;let p=this.wheels[Ss[d]],g=this.x+r*p.z+a*p.x,b=this.z+a*p.z-r*p.x,m=n.height(g,b),f=Jt(o/25,.2,1);for(let v=0;v<h;v++)Math.random()<f*.7&&(t.smoke.emit(g,m+.1,b,this.vx*.3+(Math.random()-.5)*2,1+Math.random()*2,this.vz*.3+(Math.random()-.5)*2,.7+Math.random()*.6,.7,3.5,l[0],l[1],l[2],.42),Math.random()<.5&&t.smoke.emit(g,m+.1,b,-this.vx*.1+(Math.random()-.5)*4,2+Math.random()*3,-this.vz*.1+(Math.random()-.5)*4,.5,.16,0,l[0]*.6,l[1]*.6,l[2]*.6,1,12))}if(this.lockF)for(let d=0;d<2;d++){let p=this.wheels[Ss[d]],g=this.x+r*p.z+a*p.x,b=this.z+a*p.z-r*p.x;Math.random()<.35*h&&t.smoke.emit(g,this.y+.15,b,this.vx*.3,.6+Math.random(),this.vz*.3,.6,.6,2.6,.93,.93,.95,.16)}let u=n.wet||0;if(u>.15&&o>8)for(let d=2;d<4;d++){let p=this.wheels[Ss[d]],g=this.x+r*p.z+a*p.x,b=this.z+a*p.z-r*p.x;for(let m=0;m<h;m++)Math.random()<u*.8&&t.smoke.emit(g,this.y+.2,b,this.vx*.45+(Math.random()-.5)*2,1.2+Math.random()*1.5,this.vz*.45+(Math.random()-.5)*2,.6+Math.random()*.4,.7,4,.8,.86,.93,.16*u)}if(this.dmg.front>.4){let d=this.dmg.front,p=this.x+r*this.zf*.6,g=this.z+a*this.zf*.6,b=.5-d*.42;for(let m=0;m<h;m++)Math.random()<d*.5&&t.smoke.emit(p+(Math.random()-.5)*.6,this.y+this.top*.75,g+(Math.random()-.5)*.6,this.vx*.5,1.5+Math.random()*1.5,this.vz*.5,1.2+Math.random()*.8,.6,2.4,b,b,b,.4);d>.85&&Math.random()<.5&&t.glow.emit(p,this.y+this.top*.7,g,this.vx,1.5+Math.random()*2,this.vz,.25,.5,-1,1,.5,.1,.8)}if(this.nitroOn)for(let d of[-.35,.35])for(let p=0;p<Math.max(1,h);p++){let g=this.x-r*(this.zr+.1)+a*d,b=this.z-a*(this.zr+.1)-r*d;t.glow.emit(g,this.y+.42,b,this.vx-r*(6+Math.random()*5),Math.random()-.5,this.vz-a*(6+Math.random()*5),.12+Math.random()*.1,.55,-2,.35,.65,1,.9)}}impactFX(e,t,n){let s=t.height(this.hitX,this.hitZ)+.45,r=this.hitN||[0,0],a=-r[1],o=r[0],l=Math.sign(this.vx*a+this.vz*o)||1,c=Math.min(1,n/20);for(let h=0;h<5+c*26;h++){let u=(4+Math.random()*10)*l*(.4+c);e.glow.emit(this.hitX,s+Math.random()*.3,this.hitZ,a*u+r[0]*(1+Math.random()*4)+this.vx*.3,.5+Math.random()*4.5,o*u+r[1]*(1+Math.random()*4)+this.vz*.3,.2+Math.random()*.4,.13,0,1,.72,.28,1,15)}if(n>6){let h=new xe(this.color);for(let u=0;u<3+c*10;u++)e.smoke.emit(this.hitX,s,this.hitZ,r[0]*(2+Math.random()*5)+(Math.random()-.5)*5+this.vx*.4,2+Math.random()*5,r[1]*(2+Math.random()*5)+(Math.random()-.5)*5+this.vz*.4,.7+Math.random()*.5,.16+Math.random()*.12,0,u%2?h.r:.08,u%2?h.g:.08,u%2?h.b:.09,1,13);for(let u=0;u<6;u++)e.smoke.emit(this.hitX,s-.2,this.hitZ,(Math.random()-.5)*3,.6+Math.random(),(Math.random()-.5)*3,.8,.8,3,.6,.58,.55,.22)}}netApply(e,t){let n=this.nb||(this.nb={buf:[],off:1/0,iv:1e3/ct.net.hz,jit:4,last:0,delay:70}),s=e[8];if(!(n.buf.length&&s<=n.buf[n.buf.length-1].t)){if(n.buf.push({t:s,x:e[0],z:e[1],th:e[2],vx:e[3],vz:e[4],r:e[5]}),n.buf.length>40&&n.buf.shift(),n.off=Math.min(n.off+.05,t-s),n.last){let r=t-n.last;n.iv+=(r-n.iv)*.1,n.jit+=(Math.abs(r-n.iv)-n.jit)*.1}n.last=t,this.steer=e[6],this.braking=!!(e[7]&1),this.nitroOn=!!(e[7]&2),this.locked=!!(e[7]&4),this.slipR=e[7]&8?.4:0,this.wspin=0}}netStep(e,t,n){let s=this.nb;if(!s||!s.buf.length)return;{let f=Jt(s.iv*ct.net.intervalK+s.jit*ct.net.jitterK,ct.net.minBuffer,ct.net.maxBuffer);s.delay+=(f-s.delay)*Math.min(1,e*(f>s.delay?2.5:.5))}let r=n-s.off-s.delay,a=s.buf,o=a.length-1;for(;o>0&&a[o].t>r;)o--;let l=a[o],c=a[o+1],h,u,d,p,g,b;if(c&&r>=l.t){let f=(c.t-l.t)/1e3,v=(r-l.t)/(c.t-l.t),_=v*v,x=_*v,w=2*x-3*_+1,T=x-2*_+v,R=-2*x+3*_,M=x-_;h=w*l.x+T*f*l.vx+R*c.x+M*f*c.vx,u=w*l.z+T*f*l.vz+R*c.z+M*f*c.vz,d=l.th+Ec(c.th-l.th)*v,p=l.vx+(c.vx-l.vx)*v,g=l.vz+(c.vz-l.vz)*v,b=l.r+(c.r-l.r)*v}else{let f=Jt((r-l.t)/1e3,0,.25),v=r-l.t>250?Math.exp(-(r-l.t-250)/200):1;h=l.x+l.vx*f,u=l.z+l.vz*f,d=l.th+l.r*f,p=l.vx*v,g=l.vz*v,b=l.r*v}let m=Math.min(1,e*25);this.x+=(h-this.x)*m,this.z+=(u-this.z)*m,this.th+=Ec(d-this.th)*m,this.vx=p,this.vz=g,this.r=b;for(let f=0;f<4;f++){let v=this.wheels[Ss[f]];this.wsurf[f]=t.surf(this.x+Math.sin(this.th)*v.z+Math.cos(this.th)*v.x,this.z+Math.cos(this.th)*v.z-Math.sin(this.th)*v.x)}this.grass=this.wsurf.filter(f=>f===Ms).length/4,this.px=this.x,this.pz=this.z,this.pth=this.th}netPack(){return[+this.x.toFixed(2),+this.z.toFixed(2),+this.th.toFixed(3),+this.vx.toFixed(2),+this.vz.toFixed(2),+this.r.toFixed(2),+this.steer.toFixed(2),(this.braking?1:0)|(this.nitroOn?2:0)|(this.locked?4:0)|(this.slipR>.16?8:0),Math.round(performance.now())]}dispose(){this.m.paint.dispose(),this.m.rear.dispose()}};function Kp(i,e,t,n,s){let r=e.n,a=i.speed,o=e.path,l=Math.round((7+a*.42)/e.spacing),c=o[(i.idx+l)%r],h=Jt(c.k*260,-1,1)*t.wide+t.lane;for(let v of n){if(v===i)continue;let _=v.x-i.x,x=v.z-i.z,w=_*Math.sin(i.th)+x*Math.cos(i.th),T=_*Math.cos(i.th)-x*Math.sin(i.th);w>0&&w<14&&Math.abs(T)<2.6&&v.speed<a+2&&(h+=T>0?-2.6:2.6)}t.off+=(Jt(h,-t.max,t.max)-t.off)*Math.min(1,s*1.5);let u=c.x+c.tz*t.off,d=c.z-c.tx*t.off,p=Ec(Math.atan2(u-i.x,d-i.z)-i.th),g=i.spec.top,b=i.spec.grip*(.72+.28*i.tyre)*t.skill*t.skill*.78*ct.gripScale*9.81,m=7.5*t.skill;for(let v=0;v<70;v++){let _=o[(i.idx+v)%r],x=Math.sqrt(b/Math.max(Math.abs(_.k),.0015))*1.02,w=Math.sqrt(x*x+2*m*v*e.spacing);w<g&&(g=w)}i.grass>.4&&(g=Math.min(g,16));let f=t.inp;return f.steer=Jt(p*2.4,-1,1),f.throttle=a<g?Math.abs(p)>.5?.5:1:0,f.brake=a>g+1.5?Jt((a-g)/6,.2,1):0,a>8&&Math.abs(i.beta)>.1&&(f.throttle*=Math.abs(i.beta)>.25?.15:.5),f.hand=!1,f.nitro=t.skill>.9&&Math.abs(c.k)<.004&&Math.abs(p)<.08&&i.nitro>.5,f.brake&&i.vf<2&&(f.brake=0),f}var td={Play:"\u0627\u0644\u0639\u0628",Garage:"\u0627\u0644\u062C\u0631\u0627\u062C",Tuning:"\u0627\u0644\u0636\u0628\u0637",Online:"\u0623\u0648\u0646\u0644\u0627\u064A\u0646",Trophies:"\u0627\u0644\u0643\u0624\u0648\u0633",Settings:"\u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A",credits:"\u0631\u0635\u064A\u062F",Race:"\u0633\u0628\u0627\u0642","Grand Prix":"\u0627\u0644\u062C\u0627\u0626\u0632\u0629 \u0627\u0644\u0643\u0628\u0631\u0649","Time trial":"\u0636\u062F \u0627\u0644\u0632\u0645\u0646",Drift:"\u062A\u0641\u062D\u064A\u0637","Circuit rules":"\u0642\u0648\u0627\u0639\u062F \u0627\u0644\u062D\u0644\u0628\u0629","Arcade rules":"\u0642\u0648\u0627\u0639\u062F \u0627\u0644\u0623\u0631\u0643\u064A\u062F","Daily challenge":"\u062A\u062D\u062F\u064A \u0627\u0644\u064A\u0648\u0645",Laps:"\u0627\u0644\u0644\u0641\u0627\u062A",Rivals:"\u0627\u0644\u0645\u0646\u0627\u0641\u0633\u0648\u0646",Easy:"\u0633\u0647\u0644",Medium:"\u0645\u062A\u0648\u0633\u0637",Hard:"\u0635\u0639\u0628",Dry:"\u062C\u0627\u0641",Changeable:"\u0645\u062A\u0642\u0644\u0628",Rain:"\u0645\u0637\u0631","Start race":"\u0627\u0628\u062F\u0623 \u0627\u0644\u0633\u0628\u0627\u0642","Start time trial":"\u0627\u0628\u062F\u0623 \u0636\u062F \u0627\u0644\u0632\u0645\u0646","Start drift attack":"\u0627\u0628\u062F\u0623 \u0627\u0644\u062A\u0641\u062D\u064A\u0637","Start Grand Prix":"\u0627\u0628\u062F\u0623 \u0627\u0644\u062C\u0627\u0626\u0632\u0629 \u0627\u0644\u0643\u0628\u0631\u0649",Continue:"\u0623\u0643\u0645\u0644",Round:"\u0627\u0644\u062C\u0648\u0644\u0629","Car locked":"\u0627\u0644\u0633\u064A\u0627\u0631\u0629 \u0645\u0642\u0641\u0644\u0629","Unlock for":"\u0627\u0641\u062A\u062D \u0628\u0640","Join a room first":"\u0627\u062F\u062E\u0644 \u063A\u0631\u0641\u0629 \u0623\u0648\u0644\u0627\u064B","Waiting for rival":"\u0641\u064A \u0627\u0646\u062A\u0638\u0627\u0631 \u0627\u0644\u0645\u0646\u0627\u0641\u0633","Start duel":"\u0627\u0628\u062F\u0623 \u0627\u0644\u0645\u0628\u0627\u0631\u0632\u0629","Host starts the race":"\u0627\u0644\u0645\u0636\u064A\u0641 \u064A\u0628\u062F\u0623 \u0627\u0644\u0633\u0628\u0627\u0642",Paint:"\u0627\u0644\u0637\u0644\u0627\u0621",Upgrades:"\u0627\u0644\u062A\u0631\u0642\u064A\u0627\u062A","Rear wing":"\u0627\u0644\u062C\u0646\u0627\u062D \u0627\u0644\u062E\u0644\u0641\u064A",None:"\u0628\u062F\u0648\u0646",Lip:"\u062D\u0627\u0641\u0629","GT wing":"\u062C\u0646\u0627\u062D GT","Race wing":"\u062C\u0646\u0627\u062D \u0633\u0628\u0627\u0642","Front splitter":"\u0627\u0644\u0645\u0634\u062A\u062A \u0627\u0644\u0623\u0645\u0627\u0645\u064A",Off:"\u0625\u064A\u0642\u0627\u0641",On:"\u062A\u0634\u063A\u064A\u0644",Wheels:"\u0627\u0644\u062C\u0646\u0648\u0637",Glass:"\u0627\u0644\u0632\u062C\u0627\u062C",Underglow:"\u0625\u0636\u0627\u0621\u0629 \u0633\u0641\u0644\u064A\u0629",Engine:"\u0627\u0644\u0645\u062D\u0631\u0643",Tyres:"\u0627\u0644\u0625\u0637\u0627\u0631\u0627\u062A",Nitro:"\u0646\u064A\u062A\u0631\u0648",Armour:"\u0627\u0644\u062F\u0631\u0639","Car set-up":"\u0636\u0628\u0637 \u0627\u0644\u0633\u064A\u0627\u0631\u0629",Gearing:"\u0646\u0633\u0628 \u0627\u0644\u062A\u0631\u0648\u0633","Top speed":"\u0627\u0644\u0633\u0631\u0639\u0629 \u0627\u0644\u0642\u0635\u0648\u0649",Acceleration:"\u0627\u0644\u062A\u0633\u0627\u0631\u0639",Downforce:"\u0627\u0644\u0642\u0648\u0629 \u0627\u0644\u0633\u0641\u0644\u064A\u0629","Less drag":"\u0645\u0642\u0627\u0648\u0645\u0629 \u0623\u0642\u0644","More grip":"\u062A\u0645\u0627\u0633\u0643 \u0623\u0643\u062B\u0631","Brake bias":"\u062A\u0648\u0632\u064A\u0639 \u0627\u0644\u0641\u0631\u0627\u0645\u0644",Rearward:"\u0644\u0644\u062E\u0644\u0641",Forward:"\u0644\u0644\u0623\u0645\u0627\u0645",Balance:"\u0627\u0644\u062A\u0648\u0627\u0632\u0646",Agile:"\u0631\u0634\u064A\u0642\u0629",Stable:"\u062B\u0627\u0628\u062A\u0629","Tyre compound":"\u0646\u0648\u0639 \u0627\u0644\u0625\u0637\u0627\u0631",Soft:"\u0644\u064A\u0646","Hard ":"\u0642\u0627\u0633\u064D","Soft tyres grip more and wear faster. Hard tyres last longer. Settings apply to this car only.":"\u0627\u0644\u0625\u0637\u0627\u0631\u0627\u062A \u0627\u0644\u0644\u064A\u0646\u0629 \u062A\u062A\u0645\u0627\u0633\u0643 \u0623\u0643\u062B\u0631 \u0648\u062A\u062A\u0622\u0643\u0644 \u0623\u0633\u0631\u0639\u060C \u0648\u0627\u0644\u0642\u0627\u0633\u064A\u0629 \u062A\u062F\u0648\u0645 \u0623\u0637\u0648\u0644. \u0627\u0644\u0636\u0628\u0637 \u064A\u062E\u0635 \u0647\u0630\u0647 \u0627\u0644\u0633\u064A\u0627\u0631\u0629 \u0641\u0642\u0637.",Language:"\u0627\u0644\u0644\u063A\u0629","Driver name":"\u0627\u0633\u0645 \u0627\u0644\u0633\u0627\u0626\u0642","Camera distance":"\u0628\u064F\u0639\u062F \u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627",Close:"\u0642\u0631\u064A\u0628",Normal:"\u0639\u0627\u062F\u064A",Far:"\u0628\u0639\u064A\u062F","Very far":"\u0628\u0639\u064A\u062F \u062C\u062F\u0627\u064B","Speed units":"\u0648\u062D\u062F\u0629 \u0627\u0644\u0633\u0631\u0639\u0629",Music:"\u0627\u0644\u0645\u0648\u0633\u064A\u0642\u0649","Sound effects":"\u0627\u0644\u0645\u0624\u062B\u0631\u0627\u062A","Reset progress":"\u0645\u0633\u062D \u0627\u0644\u062A\u0642\u062F\u0645","Erase all progress, cars and settings?":"\u0645\u0633\u062D \u0643\u0644 \u0627\u0644\u062A\u0642\u062F\u0645 \u0648\u0627\u0644\u0633\u064A\u0627\u0631\u0627\u062A \u0648\u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A\u061F","Create room":"\u0623\u0646\u0634\u0626 \u063A\u0631\u0641\u0629",or:"\u0623\u0648",Join:"\u0627\u0646\u0636\u0645",Room:"\u0627\u0644\u063A\u0631\u0641\u0629","copy invite link":"\u0627\u0646\u0633\u062E \u0631\u0627\u0628\u0637 \u0627\u0644\u062F\u0639\u0648\u0629",leave:"\u062E\u0631\u0648\u062C",Speed:"\u0627\u0644\u0633\u0631\u0639\u0629",Launch:"\u0627\u0644\u0627\u0646\u0637\u0644\u0627\u0642",Grip:"\u0627\u0644\u062A\u0645\u0627\u0633\u0643",Pos:"\u0627\u0644\u0645\u0631\u0643\u0632",Lap:"\u0644\u0641\u0629",Best:"\u0627\u0644\u0623\u0641\u0636\u0644",Car:"\u0627\u0644\u0633\u064A\u0627\u0631\u0629",Fuel:"\u0627\u0644\u0648\u0642\u0648\u062F",Wets:"\u0645\u0637\u0631",Paused:"\u0625\u064A\u0642\u0627\u0641 \u0645\u0624\u0642\u062A",Resume:"\u0627\u0633\u062A\u0645\u0631",Restart:"\u0623\u0639\u062F","Back to menu":"\u0627\u0644\u0642\u0627\u0626\u0645\u0629",Menu:"\u0627\u0644\u0642\u0627\u0626\u0645\u0629","Race again":"\u0633\u0628\u0627\u0642 \u0622\u062E\u0631","Next round":"\u0627\u0644\u062C\u0648\u0644\u0629 \u0627\u0644\u062A\u0627\u0644\u064A\u0629",Finish:"\u0625\u0646\u0647\u0627\u0621",Winner:"\u0627\u0644\u0641\u0627\u0626\u0632",Standings:"\u0627\u0644\u062A\u0631\u062A\u064A\u0628","Grand Prix champion":"\u0628\u0637\u0644 \u0627\u0644\u062C\u0627\u0626\u0632\u0629 \u0627\u0644\u0643\u0628\u0631\u0649","Grand Prix finished":"\u0627\u0646\u062A\u0647\u062A \u0627\u0644\u062C\u0627\u0626\u0632\u0629 \u0627\u0644\u0643\u0628\u0631\u0649","Four rounds, eight drivers, points for every finish. The third round is wet.":"\u0623\u0631\u0628\u0639 \u062C\u0648\u0644\u0627\u062A \u0648\u062B\u0645\u0627\u0646\u064A\u0629 \u0633\u0627\u0626\u0642\u064A\u0646 \u0648\u0646\u0642\u0627\u0637 \u0644\u0643\u0644 \u0645\u0631\u0643\u0632. \u0627\u0644\u062C\u0648\u0644\u0629 \u0627\u0644\u062B\u0627\u0644\u062B\u0629 \u062A\u062D\u062A \u0627\u0644\u0645\u0637\u0631.",Go:"\u0627\u0646\u0637\u0644\u0642","Final lap":"\u0627\u0644\u0644\u0641\u0629 \u0627\u0644\u0623\u062E\u064A\u0631\u0629","Wrong way":"\u0627\u062A\u062C\u0627\u0647 \u062E\u0627\u0637\u0626",Repaired:"\u062A\u0645 \u0627\u0644\u0625\u0635\u0644\u0627\u062D","Combo lost":"\u0636\u0627\u0639\u062A \u0627\u0644\u0633\u0644\u0633\u0644\u0629","Lights out. Clean first corner.":"\u0627\u0646\u0637\u0641\u0623\u062A \u0627\u0644\u0623\u0636\u0648\u0627\u0621. \u062E\u064F\u0630 \u0627\u0644\u0645\u0646\u0639\u0637\u0641 \u0627\u0644\u0623\u0648\u0644 \u0628\u0647\u062F\u0648\u0621.","Last lap. Everything you have.":"\u0627\u0644\u0644\u0641\u0629 \u0627\u0644\u0623\u062E\u064A\u0631\u0629. \u0623\u0639\u0637\u0650 \u0643\u0644 \u0645\u0627 \u0639\u0646\u062F\u0643.","Tyres are nearly gone. Box at the blue pit.":"\u0627\u0644\u0625\u0637\u0627\u0631\u0627\u062A \u0627\u0646\u062A\u0647\u062A \u062A\u0642\u0631\u064A\u0628\u0627\u064B. \u0627\u062F\u062E\u0644 \u0627\u0644\u0635\u064A\u0627\u0646\u0629.","Fuel is low. Box this lap or you will not make it.":"\u0627\u0644\u0648\u0642\u0648\u062F \u0642\u0644\u064A\u0644. \u0627\u062F\u062E\u0644 \u0627\u0644\u0635\u064A\u0627\u0646\u0629 \u0647\u0630\u0647 \u0627\u0644\u0644\u0641\u0629.","We are out of fuel. Coast it to the pit lane.":"\u0627\u0646\u062A\u0647\u0649 \u0627\u0644\u0648\u0642\u0648\u062F. \u062A\u062F\u062D\u0631\u062C \u0625\u0644\u0649 \u0645\u0645\u0631 \u0627\u0644\u0635\u064A\u0627\u0646\u0629.","Rain. Brake earlier \u2014 box for wet tyres if it gets heavy.":"\u0645\u0637\u0631. \u0627\u0641\u0631\u0645\u0644 \u0645\u0628\u0643\u0631\u0627\u064B \u0648\u0627\u062F\u062E\u0644 \u0644\u0625\u0637\u0627\u0631\u0627\u062A \u0627\u0644\u0645\u0637\u0631 \u0625\u0646 \u0627\u0634\u062A\u062F.","Limiter on. Nothing to do \u2014 drive through.":"\u0645\u062D\u062F\u062F \u0627\u0644\u0633\u0631\u0639\u0629 \u064A\u0639\u0645\u0644. \u0644\u0627 \u0634\u064A\u0621 \u0645\u0637\u0644\u0648\u0628\u060C \u0623\u0643\u0645\u0644.","Invite link copied":"\u062A\u0645 \u0646\u0633\u062E \u0631\u0627\u0628\u0637 \u0627\u0644\u062F\u0639\u0648\u0629","The home circuit. A full pit lane, a fast first sector, a chicane and two hairpins.":"\u062D\u0644\u0628\u0629 \u0627\u0644\u062F\u0627\u0631. \u0645\u0645\u0631 \u0635\u064A\u0627\u0646\u0629 \u0643\u0627\u0645\u0644 \u0648\u0642\u0637\u0627\u0639 \u0623\u0648\u0644 \u0633\u0631\u064A\u0639 \u0648\u0634\u064A\u0643\u0627\u0646 \u0648\u0645\u0646\u0639\u0637\u0641\u0627\u0646 \u062D\u0627\u062F\u0627\u0646.","Your scanned kart circuit. Tight, technical, tyre walls everywhere.":"\u062D\u0644\u0628\u0629 \u0627\u0644\u0643\u0627\u0631\u062A\u064A\u0646\u062C \u0627\u0644\u0645\u0645\u0633\u0648\u062D\u0629. \u0636\u064A\u0642\u0629 \u0648\u062A\u0642\u0646\u064A\u0629 \u0648\u062D\u0648\u0627\u062C\u0632 \u0627\u0644\u0625\u0637\u0627\u0631\u0627\u062A \u0641\u064A \u0643\u0644 \u0645\u0643\u0627\u0646.","Fast sweepers under the pyramids. Sand runoff eats your speed.":"\u0645\u0646\u0639\u0637\u0641\u0627\u062A \u0633\u0631\u064A\u0639\u0629 \u062A\u062D\u062A \u0627\u0644\u0623\u0647\u0631\u0627\u0645\u0627\u062A\u060C \u0648\u0627\u0644\u0631\u0645\u0644 \u064A\u0633\u0631\u0642 \u0633\u0631\u0639\u062A\u0643.","A long seafront blast into a knot of hairpins at sunset.":"\u062E\u0637 \u0645\u0633\u062A\u0642\u064A\u0645 \u0637\u0648\u064A\u0644 \u0639\u0644\u0649 \u0627\u0644\u0628\u062D\u0631 \u062B\u0645 \u0639\u0642\u062F\u0629 \u0645\u0646\u0639\u0637\u0641\u0627\u062A \u0639\u0646\u062F \u0627\u0644\u063A\u0631\u0648\u0628.","Street circuit after dark. Square corners, neon walls, no mercy.":"\u062D\u0644\u0628\u0629 \u0634\u0648\u0627\u0631\u0639 \u0644\u064A\u0644\u064A\u0629. \u0632\u0648\u0627\u064A\u0627 \u062D\u0627\u062F\u0629 \u0648\u062C\u062F\u0631\u0627\u0646 \u0646\u064A\u0648\u0646 \u0628\u0644\u0627 \u0631\u062D\u0645\u0629."};var ho=class{constructor(e,t=1800,n=!1){this.max=t,this.cur=0,this.pos=new Float32Array(t*3),this.col=new Float32Array(t*4),this.size=new Float32Array(t),this.vel=new Float32Array(t*3),this.life=new Float32Array(t),this.maxLife=new Float32Array(t),this.grow=new Float32Array(t),this.alpha=new Float32Array(t),this.grav=new Float32Array(t);let s=new xt;s.setAttribute("position",new Ut(this.pos,3)),s.setAttribute("aColor",new Ut(this.col,4)),s.setAttribute("aSize",new Ut(this.size,1)),this.mat=new Lt({transparent:!0,depthWrite:!1,blending:n?ai:gs,uniforms:{uScale:{value:600}},vertexShader:"attribute vec4 aColor; attribute float aSize; varying vec4 vC; uniform float uScale; void main(){ vC=aColor; vec4 mv=modelViewMatrix*vec4(position,1.); gl_Position=projectionMatrix*mv; gl_PointSize=aSize*uScale/max(-mv.z,.1); }",fragmentShader:"varying vec4 vC; void main(){ float d=length(gl_PointCoord-.5); float a=smoothstep(.5,.12,d)*vC.a; if(a<.01) discard; gl_FragColor=vec4(vC.rgb,a); }"}),this.points=new ps(s,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=5,e.add(this.points),this.geo=s}emit(e,t,n,s,r,a,o,l,c,h,u,d,p,g=0){let b=this.cur;this.cur=(b+1)%this.max,this.pos[b*3]=e,this.pos[b*3+1]=t,this.pos[b*3+2]=n,this.vel[b*3]=s,this.vel[b*3+1]=r,this.vel[b*3+2]=a,this.life[b]=this.maxLife[b]=o,this.size[b]=l,this.grow[b]=c,this.alpha[b]=p,this.grav[b]=g,this.col[b*4]=h,this.col[b*4+1]=u,this.col[b*4+2]=d,this.col[b*4+3]=p}update(e){let{pos:t,vel:n,life:s,maxLife:r,size:a,grow:o,col:l,alpha:c,grav:h}=this;for(let d=0;d<this.max;d++){if(s[d]<=0)continue;if(s[d]-=e,s[d]<=0){a[d]=0,l[d*4+3]=0;continue}let p=d*3;n[p+1]-=h[d]*e,t[p]+=n[p]*e,t[p+1]+=n[p+1]*e,t[p+2]+=n[p+2]*e;let g=1-e*1.6;n[p]*=g,n[p+2]*=g,a[d]+=o[d]*e,l[d*4+3]=c[d]*(s[d]/r[d])}let u=this.geo.attributes;u.position.needsUpdate=u.aColor.needsUpdate=u.aSize.needsUpdate=!0}clear(){this.life.fill(0),this.size.fill(0)}},Rc=class{constructor(e,t=3500){this.max=t,this.cur=0,this.pos=new Float32Array(t*18);let n=new xt;n.setAttribute("position",new Ut(this.pos,3)),this.mesh=new Ae(n,new Ct({color:723724,transparent:!0,opacity:.5,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-6,side:Vt})),this.mesh.frustumCulled=!1,this.mesh.renderOrder=2,e.add(this.mesh),this.geo=n}quad(e,t,n,s){let r=this.pos,a=this.cur*18;this.cur=(this.cur+1)%this.max,r.set(e,a),r.set(t,a+3),r.set(n,a+6),r.set(t,a+9),r.set(s,a+12),r.set(n,a+15),this.dirty=!0}flush(){this.dirty&&(this.geo.attributes.position.needsUpdate=!0,this.dirty=!1)}clear(){this.pos.fill(0),this.dirty=!0}},Cc=class{constructor(e){let t=(s,r,a)=>{let o=new Float32Array(s*(a?6:3)),l=new Float32Array(s*(a?2:1));for(let h=0;h<s;h++){let u=Math.random()*r,d=Math.random()*r*.5,p=Math.random()*r;a?(o.set([u,d,p,u,d,p],h*6),l[h*2+1]=1):o.set([u,d,p],h*3)}let c=new xt;return c.setAttribute("position",new Ut(o,3)),c.setAttribute("tip",new Ut(l,1)),c},n="vec3 p=position+uVel*uTime; p=mod(p-uCam+vec3(B*.5,B*.25,B*.5), vec3(B,B*.5,B))-vec3(B*.5,B*.25,B*.5)+uCam;";this.dust=new ps(t(500,70),new Lt({transparent:!0,depthWrite:!1,blending:ai,uniforms:{uTime:{value:0},uCam:{value:new U},uVel:{value:new U(.5,.12,.3)},uCol:{value:new xe(1,.95,.8)},uA:{value:.5},uScale:{value:600}},vertexShader:`uniform float uTime,uScale; uniform vec3 uCam,uVel; attribute float tip; varying float vF; const float B=70.; void main(){ ${n} p.y+=sin(uTime*.6+position.x)*.4; vec4 mv=modelViewMatrix*vec4(p,1.); gl_Position=projectionMatrix*mv; gl_PointSize=.09*uScale/max(-mv.z,.5); vF=smoothstep(35.,22.,length(p-uCam))*smoothstep(1.,4.,-mv.z); }`,fragmentShader:"uniform vec3 uCol; uniform float uA; varying float vF; void main(){ float d=length(gl_PointCoord-.5); float a=smoothstep(.5,.0,d)*uA*vF; if(a<.01) discard; gl_FragColor=vec4(uCol,a); }"})),this.rain=new Gs(t(1600,50,!0),new Lt({transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uCam:{value:new U},uVel:{value:new U(2,-26,1)},uA:{value:0}},vertexShader:`uniform float uTime; uniform vec3 uCam,uVel; attribute float tip; varying float vT; const float B=50.; void main(){ ${n} p+=normalize(uVel)*tip*-.9; vT=tip; gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.); }`,fragmentShader:"uniform float uA; varying float vT; void main(){ gl_FragColor=vec4(.8,.86,.95,uA*(.15+vT*.5)); }"}));for(let s of[this.dust,this.rain])s.frustumCulled=!1,s.renderOrder=6,e.add(s);this.rain.visible=!1,this.scene=e}update(e,t,n,s){for(let r of[this.dust,this.rain])r.material.uniforms.uTime.value+=e,r.material.uniforms.uCam.value.copy(t.position);this.dust.material.uniforms.uScale.value=s,this.dust.material.uniforms.uA.value=.5*(1-n),this.rain.visible=n>.02,this.rain.material.uniforms.uA.value=n}dispose(){for(let e of[this.dust,this.rain])this.scene.remove(e),e.geometry.dispose(),e.material.dispose()}};var ia={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var zn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Jv=new Ti(-1,1,1,-1,0,1),nd=class extends xt{constructor(){super(),this.setAttribute("position",new it([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new it([0,2,0,0,2,0],2))}},Zv=new nd,Ts=class{constructor(e){this._mesh=new Ae(Zv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Jv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var sa=class extends zn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Lt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Zi.clone(e.uniforms),this.material=new Lt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ts(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var uo=class extends zn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Pc=class extends zn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Ic=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Ue);this._width=n.width,this._height=n.height,t=new Ht(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:sn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new sa(ia),this.copyPass.material.blending=Yn,this.timer=new Va}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}uo!==void 0&&(a instanceof uo?n=!0:a instanceof Pc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Ue);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Lc=class extends zn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new xe}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Yp={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new xe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var ra=class i extends zn{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Ue(e.x,e.y):new Ue(256,256),this.clearColor=new xe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ht(r,a,{type:sn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new Ht(r,a,{type:sn,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let d=new Ht(r,a,{type:sn,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=Yp;this.highPassUniforms=Zi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Lt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Ue(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Zi.clone(ia.uniforms),this.blendMaterial=new Lt({uniforms:this.copyUniforms,vertexShader:ia.vertexShader,fragmentShader:ia.fragmentShader,premultipliedAlpha:!0,blending:ai,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new xe,this._oldClearAlpha=1,this._basic=new Ct,this._fsQuad=new Ts(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Ue(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],l=a+1<e?t[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new Lt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Ue(.5,.5)},direction:{value:new Ue(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Lt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};ra.BlurDirectionX=new Ue(1,0);ra.BlurDirectionY=new Ue(0,1);var fo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Dc=class extends zn{constructor(){super(),this.isOutputPass=!0,this.uniforms=Zi.clone(fo.uniforms),this.material=new Ur({name:fo.name,uniforms:this.uniforms,vertexShader:fo.vertexShader,fragmentShader:fo.fragmentShader}),this._fsQuad=new Ts(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},nt.getTransfer(this._outputColorSpace)===bt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Wa?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===qa?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Xa?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Js?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ka?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ya?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===ja&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var $v={uniforms:{tDiffuse:{value:null},sunPos:{value:new Ue(.5,.5)},sunVis:{value:0},rays:{value:.085},speed:{value:0},hit:{value:0},vig:{value:.32},wet:{value:0},tilt:{value:0},grade:{value:1},time:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform vec2 sunPos; uniform float sunVis, rays, speed, hit, vig, wet, tilt, grade, time; varying vec2 vUv;
    void main(){
      vec2 uv=vUv;
      if(wet>.05){ vec2 g=uv*vec2(9.,5.5); float hc=fract(sin(floor(g.x)*91.7)*4375.5); g.y+=time*(.05+hc*.12); vec2 id=floor(g), f=fract(g)-.5; float h=fract(sin(dot(id,vec2(127.1,311.7)))*43758.5);
        if(h>.5){ vec2 o=(vec2(fract(h*17.),fract(h*31.))-.5)*.5; float d=length((f-o)*vec2(1.,.7)); uv+=(f-o)*smoothstep(.05+.1*h,0.,d)*wet*.35; } }   // rain drops on the lens bend the picture as they run down
      vec2 c=uv-.5; vec3 col;
      if(hit>.01){ vec2 o=c*hit*.014; col=vec3(texture2D(tDiffuse,uv+o).r, texture2D(tDiffuse,uv).g, texture2D(tDiffuse,uv-o).b); }
      else col=texture2D(tDiffuse,uv).rgb;
      if(speed>.01){ float m=smoothstep(.12,.62,length(c)); vec3 a=col; for(int i=1;i<8;i++) a+=texture2D(tDiffuse,uv-c*speed*.045*m*float(i)/8.).rgb; col=a/8.; }
      if(sunVis>.01){ vec2 d=(sunPos-uv)/22.; vec2 p=uv; float w=1.; vec3 g=vec3(0.); for(int i=0;i<22;i++){ p+=d; g+=max(texture2D(tDiffuse,p).rgb-vec3(1.15),0.)*w; w*=.93; } col+=min(g*rays*sunVis*.05, vec3(1.6)); }
      if(tilt>.01){ float b=tilt*smoothstep(.17,.5,abs(uv.y-.54)); if(b>.02){ vec2 p=vec2(.0034,.0058)*b; vec3 a=col*.2;
        a+=(texture2D(tDiffuse,uv+p).rgb+texture2D(tDiffuse,uv-p).rgb+texture2D(tDiffuse,uv+vec2(p.x,-p.y)).rgb+texture2D(tDiffuse,uv+vec2(-p.x,p.y)).rgb)*.12;
        a+=(texture2D(tDiffuse,uv+vec2(p.x*1.6,0.)).rgb+texture2D(tDiffuse,uv-vec2(p.x*1.6,0.)).rgb+texture2D(tDiffuse,uv+vec2(0.,p.y*1.6)).rgb+texture2D(tDiffuse,uv-vec2(0.,p.y*1.6)).rgb)*.08; col=a; } }   // tilt-shift: soft top and bottom for the miniature look
      col=mix(vec3(dot(col,vec3(.299,.587,.114))), col, 1.+.42*grade); col*=mix(vec3(1.), vec3(1.05,1.,.93), grade);
      col=mix(col, col*vec3(.86,.93,1.04), wet*.6);
      col*=1.-vig*smoothstep(.42,1.,length(c)*1.22);
      gl_FragColor=vec4(col,1.);
    }`},Fc=class{constructor(e,t,n){let s=e.getDrawingBufferSize(new Ue),r=new Ht(s.x,s.y,{type:sn,samples:4});this.composer=new Ic(e,r),this.composer.addPass(new Lc(t,n)),this.bloom=new ra(new Ue(s.x/2,s.y/2),.4,.6,1),this.composer.addPass(this.bloom),this.fx=new sa($v),this.composer.addPass(this.fx),this.composer.addPass(new Dc),this.u=this.fx.uniforms}setSize(e,t,n){this.composer.setPixelRatio(n),this.composer.setSize(e,t)}render(e){this.composer.render(e)}};var Nc=class{constructor(){this.on=!0,this.ctx=null,this.vol=.7,this.mvol=.5,this.pitchK=1,this.birdT=3,this.lastThr=0}init(){if(this.ctx){this.ctx.state!=="running"&&this.ctx.resume();return}let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=this.ctx=new e,n=t.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=4,n.attack.value=.01,n.release.value=.25,n.connect(t.destination),this.master=t.createGain(),this.master.gain.value=this.on?this.vol:0,this.master.connect(n);let s=24,r=new Float32Array(s),a=new Float32Array(s);for(let f=1;f<s;f++)a[f]=(f%2?.55:1)/Math.pow(f,1.15)*(f===2||f===4?1.5:1);let o=t.createPeriodicWave(r,a),l=t.createWaveShaper(),c=new Float32Array(512);for(let f=0;f<512;f++){let v=f/256-1;c[f]=Math.tanh(v*2.2)}l.curve=c,this.engLP=t.createBiquadFilter(),this.engLP.type="lowpass",this.engLP.frequency.value=300,this.engLP.Q.value=.8,this.engGain=t.createGain(),this.engGain.gain.value=0,this.osc=[1,.5,1.006].map((f,v)=>{let _=t.createOscillator();_.setPeriodicWave(o),_.frequency.value=40*f;let x=t.createGain();return x.gain.value=[.5,.6,.3][v],_.connect(x),x.connect(l),_.start(),_.mult=f,_}),l.connect(this.engLP),this.engLP.connect(this.engGain),this.engGain.connect(this.master);let h=t.createBuffer(1,t.sampleRate*3,t.sampleRate),u=h.getChannelData(0),d=0;for(let f=0;f<u.length;f++){let v=Math.random()*2-1;d=(d+.04*v)/1.04,u[f]=v*.5+d*6}this.noiseBuf=h;let p=(f,v,_)=>{let x=t.createBufferSource();x.buffer=h,x.loop=!0,x.playbackRate.value=.8+Math.random()*.4;let w=t.createBiquadFilter();w.type=f,w.frequency.value=v,w.Q.value=_;let T=t.createGain();return T.gain.value=0,x.connect(w),w.connect(T),T.connect(this.master),x.start(),{g:T,fl:w}};this.wind=p("lowpass",500,.5),this.roll=p("lowpass",260,.7),this.skid=p("bandpass",850,1.6),this.skidHi=p("bandpass",2100,3),this.dirt=p("lowpass",420,.8),this.nitro=p("bandpass",1600,.7),this.brake=p("bandpass",3100,5),this.rain=p("highpass",2600,.4),this.intake=p("bandpass",380,1.2);let g=p("bandpass",170,1.1);this.burbG=g.g,this.burbLfo=t.createOscillator(),this.burbLfo.type="square",this.burbLfo.frequency.value=20;let b=t.createGain();b.gain.value=.03,this.burbLfo.connect(b),b.connect(g.g.gain),this.burbLfo.start(),this.turboO=t.createOscillator(),this.turboO.type="sine",this.turboG=t.createGain(),this.turboG.gain.value=0,this.turboO.connect(this.turboG),this.turboG.connect(this.master),this.turboO.start(),this.crowd=p("bandpass",950,.5),this.wave=o,this.ctxN=s,this.whine=t.createOscillator(),this.whine.type="sine",this.whineG=t.createGain(),this.whineG.gain.value=0,this.whine.connect(this.whineG),this.whineG.connect(this.master),this.whine.start(),this.pad=t.createGain(),this.pad.gain.value=0;let m=t.createBiquadFilter();m.type="lowpass",m.frequency.value=900,this.pad.connect(m),m.connect(this.master);for(let f of[110,164.81,220,246.94,329.63])for(let v of[-4,5]){let _=t.createOscillator();_.type="sine",_.frequency.value=f,_.detune.value=v;let x=t.createGain();x.gain.value=.05;let w=t.createOscillator();w.frequency.value=.05+Math.random()*.12;let T=t.createGain();T.gain.value=.035,w.connect(T),T.connect(x.gain),_.connect(x),x.connect(this.pad),_.start(),w.start()}}setMuted(e){this.on=!e,this.el&&this.music(this.musicOn),this.master&&this.master.gain.setTargetAtTime(this.on?this.vol:0,this.ctx.currentTime,.05)}music(e){this.el||(this.el=new Audio("assets/menu.mp3"),this.el.loop=!0,this.el.volume=0),this.musicOn=e;let t=this.el;e&&this.on&&t.play().catch(()=>{}),clearInterval(this.fade),this.fade=setInterval(()=>{let n=e&&this.on?this.mvol:0,s=n-t.volume;Math.abs(s)<.05?(t.volume=n,clearInterval(this.fade),n||t.pause()):t.volume=Math.max(0,Math.min(1,t.volume+Math.sign(s)*.04))},60)}setCar(e){if(this.pitchK={4:1.16,6:1.04,8:.86,10:1.1,12:1.2}[e]||1,!this.ctx)return;let t=24,n=new Float32Array(t),s=new Float32Array(t),r=e/2;for(let o=1;o<t;o++)s[o]=(o%2?.55:1)/Math.pow(o,e>=10?1.3:1.1)*(o===r||o===r*2?1.9:o===1&&e===8?1.5:1);let a=this.ctx.createPeriodicWave(n,s);for(let o of this.osc)o.setPeriodicWave(a)}ambient(e,t){if(this.ctx&&(this.crowd.g.gain.setTargetAtTime(t.on?.028:0,this.ctx.currentTime,.6),this.birdT-=e,t.on&&t.day&&!t.rain&&this.birdT<0)){this.birdT=2+Math.random()*6;let n=2300+Math.random()*1600,s=2+(Math.random()*3|0);for(let r=0;r<s;r++)setTimeout(()=>this.tone(n*(1+r*.06),.08,.011,"sine",1.22),r*120)}}turboDemo(){this.tone(1800,.7,.05,"sine",3.2),setTimeout(()=>{this.burst("highpass",2600,.6,.35,.12,1.3),this.tone(2100,.25,.03,"sine",.4)},720)}drive(e){if(!this.ctx)return;if(this.quiet)return this.silence();let t=this.ctx.currentTime,n=(36+e.rpm*118)*this.pitchK,s=Math.min(1,e.speed/60);for(let a of this.osc)a.frequency.setTargetAtTime(n*a.mult,t,.035);this.engLP.frequency.setTargetAtTime(180+e.rpm*700+e.throttle*1100,t,.06),this.engGain.gain.setTargetAtTime(.09+e.throttle*.12+e.rpm*.04,t,.07),this.intake.g.gain.setTargetAtTime(e.throttle*e.rpm*.05,t,.08),this.intake.fl.frequency.setTargetAtTime(250+e.rpm*500,t,.08),this.wind.g.gain.setTargetAtTime(s*s*.22,t,.2),this.wind.fl.frequency.setTargetAtTime(300+s*900,t,.2),this.roll.g.gain.setTargetAtTime(Math.min(.16,s*.3)*(1-e.dirt),t,.15),this.skid.g.gain.setTargetAtTime(e.skid*.2,t,.09),this.skid.fl.frequency.setTargetAtTime(700+e.skid*350,t,.15),this.skidHi.g.gain.setTargetAtTime(e.skid*e.skid*.05,t,.12),this.dirt.g.gain.setTargetAtTime(e.dirt*.35,t,.1),this.brake.g.gain.setTargetAtTime(e.brake*Math.min(1,e.speed/25)*.018,t,.05),this.nitro.g.gain.setTargetAtTime(e.nitro?.16:0,t,.1),this.whine.frequency.setTargetAtTime(900+e.rpm*1400,t,.1),this.whineG.gain.setTargetAtTime(e.nitro?.025:e.throttle*e.rpm*.006,t,.1),this.rain.g.gain.setTargetAtTime((e.rain||0)*.1,t,.5),this.burbG.gain.setTargetAtTime((.018+e.throttle*.045)*(1-e.rpm*.45),t,.08),this.burbLfo.frequency.setTargetAtTime(n*.5,t,.04);let r=e.turbo||0;this.turboG.gain.setTargetAtTime(r*e.throttle*e.rpm*.011,t,.18),this.turboO.frequency.setTargetAtTime(2400+e.rpm*5200,t,.22),r&&this.lastThr>.6&&e.throttle<.2&&e.rpm>.45&&t-(this.bovT||0)>1.2&&(this.bovT=t,this.burst("highpass",2600,.6,.3,.05+r*.025,1.3),this.tone(1900,.2,.012+r*.006,"sine",.45)),this.lastThr=e.throttle}silence(){if(!this.ctx)return;let e=this.ctx.currentTime;for(let t of[this.engGain,this.wind.g,this.roll.g,this.skid.g,this.skidHi.g,this.dirt.g,this.nitro.g,this.brake.g,this.rain.g,this.intake.g,this.whineG,this.burbG,this.turboG,this.crowd.g])t.gain.setTargetAtTime(0,e,.12)}tone(e,t=.2,n=.2,s="sine",r=1){if(!this.ctx||this.quiet)return;let a=this.ctx,o=a.createOscillator(),l=a.createGain(),c=a.currentTime;o.type=s,o.frequency.setValueAtTime(e,c),r!==1&&o.frequency.exponentialRampToValueAtTime(e*r,c+t),l.gain.setValueAtTime(0,c),l.gain.linearRampToValueAtTime(n,c+.012),l.gain.exponentialRampToValueAtTime(.001,c+t),o.connect(l),l.connect(this.master),o.start(),o.stop(c+t+.02)}beep(e=440,t=.18,n=.16){this.tone(e,t,n),this.tone(e*2,t*.7,n*.25)}burst(e,t,n,s,r,a=1){if(!this.ctx||this.quiet)return;let o=this.ctx,l=o.createBufferSource(),c=o.createBiquadFilter(),h=o.createGain(),u=o.currentTime;l.buffer=this.noiseBuf,l.playbackRate.value=a,c.type=e,c.frequency.value=t,c.Q.value=n,h.gain.setValueAtTime(r,u),h.gain.exponentialRampToValueAtTime(.001,u+s),l.connect(c),c.connect(h),h.connect(this.master),l.start(u,Math.random()*2),l.stop(u+s+.02)}crash(e){let t=Math.min(1,e/22);this.tone(85,.28,.25+t*.45,"sine",.45),this.burst("lowpass",500+t*900,.7,.22+t*.2,.25+t*.5),t>.3&&(this.burst("bandpass",2400,2.5,.16,t*.28,1.4),this.tone(310+Math.random()*120,.35,t*.06,"triangle",.9))}scrape(e){this.burst("bandpass",1500,1.2,.12,Math.min(.2,e*.02))}pickup(e){e?(this.tone(520,.12,.12),this.tone(780,.2,.1)):(this.tone(1320,.09,.08),this.tone(1760,.16,.07))}wrench(){for(let e=0;e<5;e++)setTimeout(()=>this.burst("bandpass",3200,6,.05,.12,2),e*55)}shift(){this.burst("lowpass",300,1,.06,.12)}};var Uc=window.GAME_CONFIG||{},aa=!!(Uc.SUPABASE_URL&&Uc.SUPABASE_ANON_KEY&&window.supabase),Jp=null,Oc=()=>Jp||(Jp=window.supabase.createClient(Uc.SUPABASE_URL,Uc.SUPABASE_ANON_KEY,{realtime:{params:{eventsPerSecond:60}}})),Qv=Math.random().toString(36).slice(2,10),po=class{constructor(){this.id=Qv,this.peers={},this.onMessage=()=>{},this.onPeers=()=>{},this.meta={},this.code=null}static makeCode(){let e="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",t="";for(let n=0;n<5;n++)t+=e[Math.random()*e.length|0];return t}join(e,t){return this.code=e.toUpperCase(),this.meta={...t,id:this.id,t:Date.now()},new Promise((n,s)=>{if(aa){let r=this.ch=Oc().channel("tafheet:"+this.code,{config:{broadcast:{self:!1},presence:{key:this.id}}});r.on("broadcast",{event:"m"},({payload:a})=>this.onMessage(a)),r.on("presence",{event:"sync"},()=>{let a=r.presenceState();this.peers={};for(let o in a)o!==this.id&&a[o].length&&(this.peers[o]=a[o][a[o].length-1]);this.onPeers(this.peers)}),r.subscribe(async a=>{a==="SUBSCRIBED"?(await r.track(this.meta),n()):(a==="CHANNEL_ERROR"||a==="TIMED_OUT")&&s(new Error("Could not reach the room ("+a+")"))})}else{let r=this.bc=new BroadcastChannel("tafheet:"+this.code);r.onmessage=({data:a})=>{a._==="hi"||a._==="here"?(this.peers[a.meta.id]=a.meta,this.onPeers(this.peers),a._==="hi"&&r.postMessage({_:"here",meta:this.meta})):a._==="bye"?(delete this.peers[a.id],this.onPeers(this.peers)):this.onMessage(a)},r.postMessage({_:"hi",meta:this.meta}),this.unload=()=>r.postMessage({_:"bye",id:this.id}),addEventListener("beforeunload",this.unload),setTimeout(n,250)}})}setMeta(e){Object.assign(this.meta,e),this.ch?this.ch.track(this.meta):this.bc&&this.bc.postMessage({_:"here",meta:this.meta})}send(e){this.ch?this.ch.send({type:"broadcast",event:"m",payload:e}):this.bc&&this.bc.postMessage(e)}leave(){this.ch&&(this.ch.untrack(),Oc().removeChannel(this.ch),this.ch=null),this.bc&&(this.bc.postMessage({_:"bye",id:this.id}),this.bc.close(),this.bc=null,removeEventListener("beforeunload",this.unload)),this.peers={}}};async function Zp(i,e,t,n){if(aa)try{await Oc().from("lap_times").insert({track:i,name:e.slice(0,16),car:t,ms:Math.round(n)})}catch(s){console.warn("leaderboard",s)}}async function $p(i){if(!aa)return null;try{let{data:e,error:t}=await Oc().from("lap_times").select("name,car,ms").eq("track",i).order("ms",{ascending:!0}).limit(8);return t?null:e}catch{return null}}var id=(i,e,t)=>[{name:i,car:e,skill:t}],es=[{name:"Shubra Nights",text:"Uncle Hamdi left you two things: a garage in Shubra with a leaking roof, and an unpaid entry to the Pharaoh\u2019s Cup. Amm Saber, his old mechanic, thinks you should sell the first and forget the second.",events:[{id:"s1",title:"First laps",mode:"trial",track:"lider",laps:3,goal:{type:"lap",v:[82,72,64]},intro:[["Amm Saber","Your uncle drove this circuit every Thursday for twenty years. Show me one clean lap and I\u2019ll stop telling you to sell the place."],["Amm Saber","Brake before the corner, not in it. And stay off the grass \u2014 I only have one set of tyres."]],win:"Amm Saber wipes his hands and says nothing. He is already ordering parts.",lose:"Amm Saber: \u201CThe stopwatch doesn\u2019t lie. Again.\u201D"},{id:"s2",title:"Club night",mode:"race",track:"lider",laps:3,diff:0,goal:{type:"pos",v:[3,2,1]},intro:[["Amm Saber","Club night. Five locals who all knew Hamdi. Finish on the podium and people will start saying your name instead of his."],["Zizo","New kid in the old man\u2019s car? Cute. Try not to hold us up."]],win:"Three people you have never met shake your hand. One of them asks if the garage is open tomorrow.",lose:"Zizo waves from the podium. It is not a friendly wave."},{id:"s3",title:"Zizo\u2019s dare",mode:"race",track:"lider",laps:3,diff:1,rivals:id("Zizo","Mercedes",.93),goal:{type:"pos",v:[1,1,1]},intro:[["Zizo","One on one. You win, I put your name on the Cup list myself. I win, the garage sign comes down."],["Amm Saber","He\u2019s fast on the straights and sloppy everywhere else. That big saloon eats its rear tyres. Be patient."]],win:"Zizo: \u201CFine. You\u2019re on the list. Don\u2019t make me regret it.\u201D",lose:"Zizo: \u201CLeave the sign up one more week. I want a rematch crowd.\u201D"}]},{name:"Sand and Stone",text:"The Cup\u2019s second round runs in the shadow of the pyramids. The sand gets everywhere, and the regulars here slide their cars on purpose.",events:[{id:"g1",title:"Sideways school",mode:"drift",track:"giza",laps:2,goal:{type:"drift",v:[500,1400,3e3]},intro:[["Captain Nadia","You drive like a taxi meter \u2014 straight and nervous. Out here the fast line is the sideways one."],["Captain Nadia","Tap the handbrake going in, then hold the slide with the throttle. Show me you can keep it off the walls."]],win:"Captain Nadia: \u201CUgly. But sideways. We can work with ugly.\u201D",lose:"Captain Nadia: \u201CThat was parking, not drifting.\u201D"},{id:"g2",title:"Dust devils",mode:"race",track:"giza",laps:3,diff:1,goal:{type:"pos",v:[3,2,1]},intro:[["Amm Saber","Full grid today. The sand runoff will take your speed and your tyres. If the car gets hurt, the blue pit box is just past the start line."]],win:"Sand in your teeth, a trophy in the boot.",lose:"Amm Saber is already under the car, muttering about sand in the brakes."},{id:"g3",title:"Captain Nadia",mode:"race",track:"giza",laps:3,diff:1,rivals:id("Capt. Nadia","Artura",.97),goal:{type:"pos",v:[1,1,1]},intro:[["Captain Nadia","Lesson\u2019s over. Now beat the teacher."],["Amm Saber","She doesn\u2019t make mistakes. So don\u2019t wait for one \u2014 out-brake her into the hairpin."]],win:"Captain Nadia hands you her spare helmet. \u201CFor the Corniche. It rains there.\u201D",lose:"Captain Nadia: \u201CCloser than I expected. Come back.\u201D"}]},{name:"Sea Breeze",text:"Alexandria. A long seafront straight, a knot of hairpins, and weather that changes its mind halfway through a lap.",events:[{id:"c1",title:"Storm front",mode:"race",track:"corniche",laps:3,diff:1,weather:"rain",goal:{type:"pos",v:[3,2,1]},intro:[["Amm Saber","Rain is coming in off the sea. When the road shines, you have a quarter less grip. Brake early, squeeze the throttle."]],win:"You are soaked, the car is filthy, and the points table has your name in the top three.",lose:"The sea wall has a new scuff the same colour as your car."},{id:"c2",title:"Golden hour",mode:"trial",track:"corniche",laps:3,goal:{type:"lap",v:[64,55,49]},intro:[["Zizo","The lap record here is El Basha\u2019s. Nobody gets near it. I just want to see how far off you are."]],win:"Zizo looks at the timing screen for a long moment. \u201C\u2026He\u2019s going to hear about this.\u201D",lose:"Zizo: \u201CTold you.\u201D"},{id:"c3",title:"The twins",mode:"race",track:"corniche",laps:3,diff:2,rivals:[{name:"Hassan",car:"Ferrari",skill:.97},{name:"Hussein",car:"Ferrari",skill:.96}],goal:{type:"pos",v:[1,1,1]},intro:[["Hassan","We race as a pair."],["Hussein","One of us blocks. One of us wins. You can guess which is which."],["Amm Saber","Don\u2019t get stuck between them. Pass them one at a time."]],win:"For the first time all season the twins disagree \u2014 about whose fault it was.",lose:"Hassan and Hussein cross the line side by side. Of course they do."}]},{name:"Midnight Crown",text:"The final is a street circuit through Cairo after dark. El Basha has won it six years running, and he has noticed you.",events:[{id:"m1",title:"Neon drift",mode:"drift",track:"midnight",laps:3,goal:{type:"drift",v:[800,2e3,4e3]},intro:[["Captain Nadia","The crowd here votes with its phones. Give them smoke under the lights and the organisers give you a front-row start."]],win:"The clip is everywhere by morning.",lose:"The crowd films the car behind you instead."},{id:"m2",title:"Qualifier",mode:"race",track:"midnight",laps:4,diff:2,goal:{type:"pos",v:[3,2,1]},intro:[["Amm Saber","Top three go to the final. The walls here are concrete, not tyres. Every touch costs you \u2014 pit if you must."]],win:"You are in the final. Amm Saber pretends he has something in his eye.",lose:"Fourth is the loneliest place on a results sheet."},{id:"m3",title:"El Basha",mode:"race",track:"midnight",laps:4,diff:2,weather:"rain",rivals:id("El Basha","Zenvo",1),goal:{type:"pos",v:[1,1,1]},final:!0,intro:[["El Basha","I raced your uncle for years. He never beat me. He never stopped trying either."],["El Basha","Let us see which half of that you inherited."],["Amm Saber","Hamdi\u2019s notes say El Basha lifts in the rain. It\u2019s going to rain."]],win:"El Basha takes off his gloves and offers his hand. The Pharaoh\u2019s Cup goes on the shelf in a garage in Shubra, under a roof that no longer leaks.",lose:"El Basha: \u201CSame as your uncle. Come back next year.\u201D"}]}],hi=es.flatMap((i,e)=>i.events.map(t=>Object.assign(t,{ci:e})));function kc(i){return i.type==="pos"?i.v[0]===1?"Win the race":"Finish in the top "+i.v[0]:i.type==="lap"?"Set a lap under "+i.v[0]+" s":"Score "+i.v[0].toLocaleString()+" drift points"}function Qp(i,e){let t=0;for(let n of i.v)(i.type==="pos"?e.pos<=n:i.type==="lap"?e.bestLap!=null&&e.bestLap<=n*1e3:e.drift>=n)&&t++;return i.type==="pos"&&i.v[0]===1?e.pos===1?3:0:t}var Bc=i=>Math.floor(Math.sqrt(i/250))+1,zc=i=>(i-1)**2*250;function sd(i){let e=new Date,t=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate(),n=7;for(let a of t)n=(n*31+a.charCodeAt(0))%9973;let s=["race","drift","trial"][n%3],r=i[(n>>2)%i.length];return{key:t,mode:s,track:r.id,trackName:r.name,weather:n%4===0?"rain":"clear",label:{race:"Podium finish",drift:"Drift attack",trial:"Time trial"}[s]}}var j=i=>document.getElementById(i),vn=(i,e,t)=>i<e?e:i>t?t:i,cd=i=>{for(;i>Math.PI;)i-=2*Math.PI;for(;i<-Math.PI;)i+=2*Math.PI;return i},Hn=i=>{if(i==null||!isFinite(i))return"\u2014";let e=i/1e3,t=Math.floor(e/60);return t+":"+(e-t*60).toFixed(2).padStart(5,"0")},ca=i=>"#"+i.toString(16).padStart(6,"0"),ey=["1st","2nd","3rd","4th","5th","6th"],md="tafheet.v1",q={lang:"en",zoom:1.5,units:"kmh",mvol:.5,svol:.7,look:{},tune:{},gp:null,v5:0,assist:"full",rules:"circuit",sectors:{},up:{},stats:{},trophies:{},gfx:"auto",autoGas:!1,story:{},xp:0,daily:"",streak:0,credits:0,owned:["Ford","Sterrato"],car:"Ford",paint:{},name:"",best:{},bestDrift:{},muted:!1};try{Object.assign(q,JSON.parse(localStorage.getItem(md)||"{}"))}catch{}q.name||(q.name="Driver"+(100+Math.random()*900|0));{let i=new URLSearchParams(location.search).get("gfx");["auto","high","medium","low"].includes(i)&&(q.gfx=i)}q.v5||(q.autoGas=!1,q.v5=1);var Zt=()=>{try{localStorage.setItem(md,JSON.stringify(q))}catch{}},pt=i=>q.lang==="ar"&&td[i]!=null?td[i]:i,_o=i=>q.look[i]||(q.look[i]={wing:0,split:0,rim:0,tint:0,glow:0}),Jc=i=>q.tune[i]||(q.tune[i]={gear:0,aero:0,brake:0,susp:0,tyre:"medium"}),ns=()=>!!S&&!S.attract,Zc=i=>q.paint[i]??Dt.find(e=>e.id===i).color,yn=new mc({canvas:j("gl"),antialias:!0,powerPreference:"high-performance"}),Ni=matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>0;Ni&&document.body.classList.add("touch");var is=q.gfx==="auto"?Ni?"medium":"high":q.gfx,Rs=is==="low"?1:Math.min(devicePixelRatio||1,Ni?1.5:1.75);yn.setPixelRatio(Rs);yn.outputColorSpace=Gt;yn.toneMapping=Js;yn.shadowMap.enabled=!0;yn.shadowMap.type=Ks;var Tt=new ks,mt=new en(55,1,.3,9e3);Tt.environment=new Kr(yn).fromScene(new xc,.04).texture;var Es=new za(16777215,4473924,1),un=new js(16777215,2.5);un.castShadow=!0;un.shadow.mapSize.set(2048,2048);un.shadow.bias=-5e-4;un.shadow.normalBias=.04;Object.assign(un.shadow.camera,{left:-45,right:45,top:45,bottom:-45,near:1,far:320});Tt.add(Es,un,un.target);var Vn=null;function gd(){let i=innerWidth,e=innerHeight;yn.setPixelRatio(Rs),yn.setSize(i,e,!1),mt.aspect=i/e,mt.updateProjectionMatrix(),Vn&&Vn.setSize(i,e,Rs)}function xo(i){if(is=i,Rs=i==="low"?1:Math.min(devicePixelRatio||1,Ni?1.5:1.75),yn.shadowMap.enabled=un.castShadow=i!=="low",i==="high"&&!Vn)try{Vn=new Fc(yn,Tt,mt)}catch(e){console.warn(e),is="medium"}gd()}function ty(i){is==="high"&&Vn?Vn.render(i):yn.render(Tt,mt)}addEventListener("resize",gd);xo(is);var ts=null,Rn=null,hd=0,om=1,lm=1;function $c(i){if(ts&&(Tt.remove(ts),ts.geometry.dispose(),ts.material.dispose(),ts=null),Rn&&(Tt.remove(Rn),Rn.geometry.dispose(),Rn.material.dispose(),Rn=null),Vn&&(Vn.bloom.strength=i&&i.night?.6:.26,Vn.u.sunVis.value=0,Vn.u.speed.value=0,Vn.u.wet.value=0),!i){Tt.background=new xe(1513500),Tt.fog=null,Es.color.set(14674175),Es.groundColor.set(3158586),Es.intensity=.7,un.color.set(16777215),un.intensity=2.2,Tt.environmentIntensity=.9,yn.toneMappingExposure=1;return}ts=Xp(i),Tt.add(ts),Tt.background=null,Tt.fog=new Ta(i.fog,i.fogD),Es.color.set(i.hemiS),Es.groundColor.set(i.hemiG),Es.intensity=i.hemiI,un.color.set(i.sun),un.intensity=i.sunI,Tt.environmentIntensity=i.night?.25:.5,yn.toneMappingExposure=i.exposure,hd=i.fogD,om=i.sunI,lm=i.hemiI,i.night||(Rn=new Ae(new Ws(120,24),new Ct({color:new xe(i.sun).multiplyScalar(16),fog:!1})),Rn.frustumCulled=!1,Tt.add(Rn))}var Li=new Bt;Tt.add(Li);{let i=new Ae(new On(4.6,4.8,.25,48),new Re({color:2303275,metalness:.6,roughness:.35}));i.position.y=-.125,i.receiveShadow=!0,Li.add(i);let e=new Ae(new Ua(4.75,.06,8,64),new Ct({color:16761370}));e.rotation.x=Math.PI/2,e.position.y=.01,Li.add(e);let t=new Ae(new Ws(60,32),new Re({color:1513500,roughness:.9}));t.rotation.x=-Math.PI/2,t.position.y=-.25,t.receiveShadow=!0,Li.add(t)}var As=null;function vo(){As&&(Li.remove(As.root),As.dispose());let i=Dt[ue.car];As=new ws(i,Zc(i.id),"",Mo(i.id),_o(i.id),Jc(i.id)),As.root.rotation.y=ud,Li.add(As.root)}var ud=.6,fn={},Fn={},Ve=new Nc;Ve.on=!q.muted;addEventListener("keydown",i=>{i.target.tagName!=="INPUT"&&(fn[i.code]=!0,Ve.init(),["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(i.code)&&i.preventDefault(),ns()&&((i.code==="Escape"||i.code==="KeyP")&&vd(),i.code==="KeyC"&&(go=(go+1)%Xc.length,Wn(Xc[go].name+" camera")),i.code==="KeyR"&&um(S.player,!0),i.code==="KeyM"&&bd(!q.muted),i.code==="KeyT"&&(j("tele").hidden=!j("tele").hidden)))});addEventListener("keyup",i=>{fn[i.code]=!1});addEventListener("blur",()=>{for(let i in fn)fn[i]=!1});var on={steer:0,throttle:0,brake:0,hand:!1,nitro:!1};function cm(){let i=fn.ArrowLeft||fn.KeyA||Fn.left,e=fn.ArrowRight||fn.KeyD||Fn.right;on.steer=(i?1:0)-(e?1:0),Fn.steerOn&&(on.steer=Fn.steerVal),on.throttle=fn.ArrowUp||fn.KeyW||Fn.gas?1:0,on.brake=fn.ArrowDown||fn.KeyS||Fn.brake?1:0,on.hand=!!(fn.Space||Fn.hand),on.nitro=!!(fn.ShiftLeft||fn.ShiftRight||fn.KeyN||Fn.nitro);let t=navigator.getGamepads?[...navigator.getGamepads()].find(n=>n):null;return t&&(Math.abs(t.axes[0])>.12&&(on.steer=-t.axes[0]),on.throttle=Math.max(on.throttle,t.buttons[7]?.value||0),on.brake=Math.max(on.brake,t.buttons[6]?.value||0),on.hand=on.hand||!!t.buttons[0]?.pressed,on.nitro=on.nitro||!!t.buttons[2]?.pressed||!!t.buttons[5]?.pressed),Ni&&q.autoGas&&!t&&!on.brake&&(on.throttle=1),on}if("ontouchstart"in window||navigator.maxTouchPoints>0){j("touch").hidden=!1;for(let i of document.querySelectorAll("#touch .t")){let e=t=>n=>{n.preventDefault(),Fn[i.dataset.k]=t,i.classList.toggle("on",t),Ve.init()};i.addEventListener("pointerdown",t=>{try{i.setPointerCapture(t.pointerId)}catch{}e(!0)(t)});for(let t of["pointerup","pointercancel","lostpointercapture"])i.addEventListener(t,e(!1))}}{let i=j("steer"),e=i.querySelector("i"),t=null,n=r=>{let a=i.getBoundingClientRect(),o=vn((r.clientX-(a.left+a.width/2))/(a.width*.36),-1,1);e.style.transform=`translateX(${o*a.width*.33}px)`,o=Math.sign(o)*Math.pow(Math.abs(o),1.35),Fn.steerVal=-o,Fn.steerOn=!0},s=r=>{t!==null&&r.pointerId!==t||(t=null,Fn.steerOn=!1,Fn.steerVal=0,e.style.transform="",i.classList.remove("on"))};i.addEventListener("pointerdown",r=>{r.preventDefault(),t=r.pointerId;try{i.setPointerCapture(t)}catch{}i.classList.add("on"),n(r),Ve.init()}),i.addEventListener("pointermove",r=>{r.pointerId===t&&n(r)});for(let r of["pointerup","pointercancel","lostpointercapture"])i.addEventListener(r,s);addEventListener("contextmenu",r=>{Ni&&r.preventDefault()})}function bd(i){q.muted=i,Zt(),Ve.setMuted(i),j("muteBtn").textContent=i?"Sound off":"Sound on"}var em=0;function Wn(i){let e=j("toast");e.textContent=pt(i),e.classList.add("show"),clearTimeout(em),em=setTimeout(()=>e.classList.remove("show"),2200)}var tm=0;function dn(i,e=!1,t=1500){if(S&&S.attract)return;let n=j("msg");n.textContent=pt(i),n.className="show"+(e?" warn":""),clearTimeout(tm),t&&(tm=setTimeout(()=>n.className="",t))}var _t=(i,e)=>{j(i).hidden=!e},S=null,nr=!1,go=0,bo=0,la=0,Xc=[{name:"Circuit",fixed:!0,d:43,h:48,fov:30},{name:"Broadcast",d:32,h:27,look:1,fov:38,follow:!0},{name:"Chase",d:9.5,h:5.2,look:4,fov:55},{name:"Close",d:6.2,h:2.5,look:6,fov:58}],dd=0,xd=0,Ge={yaw:0,pos:new U,look:new U,fov:55},Gc=1/120,hm=["Omar","Youssef","Karim","Nour","Laila","Tarek","Mona","Ziad","Hana","Sherif","Salma","Hassan","Farida","Adel"],fd=0,nm=["Tap the handbrake (Space) on corner entry to kick the tail out.","Drifting refills your nitro much faster than driving straight.","Lift off early \u2014 the kerbs are fine, the grass is not.","Longer drifts multiply your score. Touch a wall and the combo is gone.","Press C to change camera, R to get back on track."];function mo(i,e){let t=S.track.gridSlot(e);i.reset(t.x,t.z,t.th),i.idx=t.idx,i.prog=t.idx-S.track.n,i.lap=-1,i.lapStart=0,i.laps=[],i.finished=!1,i.finishTime=null,i.wrong=0}function um(i,e){if(!S||e&&(S.state!=="go"||S.t-(i.lastReset||-9)<1.5))return;let t=S.track.path[i.idx],n=i.nitro;i.reset(t.x,t.z,Math.atan2(t.tx,t.tz)),i.nitro=n,i.lastReset=S.t,i.holdT=S.t+ct.reset.penalty,i===S.player&&e&&dn("Reset  +"+ct.reset.penalty+"s",!0,1300),i===S.player&&(Ge.yaw=i.th,S.D.combo=0)}async function Di(i){S&&yo();let e=++fd;i.attract||(Ve.init(),_t("menu",!1),_t("results",!1),_t("pause",!1),_t("loading",!0));let t=_n.find(h=>h.id===i.track);j("loadName").textContent=t.name,j("loadBar").style.width="4%",j("loadTip").textContent=nm[Math.random()*nm.length|0],Li.visible=!1,Md=!1;let n;try{n=await qp(i.track,h=>{j("loadBar").style.width=Math.round(4+h*92)+"%"})}catch(h){console.error(h),_t("loading",!1),ha(),Wn("Could not load that track");return}if(e!==fd){n.dispose();return}if(is==="low"&&n.fancyLights)for(let h of n.fancyLights)h.visible=!1;Tt.add(n.group),$c(n.theme),S={...i,track:n,cars:[],ais:new Map,t:0,state:"wait",countT:3.6,drift:0,D:{combo:0,time:0,mult:1,grace:0},fx:null,sendT:0,waitT:0,bestThisRace:null},S.rules=i.rules||"circuit",S.arc=S.rules==="arcade"||i.mode==="drift",S.fx={smoke:new ho(Tt,2600),glow:new ho(Tt,900,!0),skids:new Rc(Tt)},S.ambient=new Cc(Tt);let s=Dt.find(h=>h.id===q.car),r=Mo(s.id),a=S.player=new ws(s,Zc(s.id),q.name,r,_o(s.id),Jc(s.id));a.assistK=ct.assist[q.assist]??1,a.isPlayer=!0,a.dmgScale=1-.18*r.armor;let o=Math.max(1.5,(t.width?t.width/2:6.2)-2.6),l=h=>({skill:h,wide:o*.7,lane:(Math.random()-.5)*o,max:o,off:0,inp:{steer:0,throttle:0,brake:0,hand:!1,nitro:!1},boost:1});if(S.ais.set(a,l(.95)),i.mode==="race"){let h=[.8,.89,.97][i.diff],u=Dt.filter(b=>b.id!==s.id).sort(()=>Math.random()-.5),d=[...hm].sort(()=>Math.random()-.5),p=i.rivals,g=p?p.length:i.nRivals||5;for(let b=0;b<g;b++){let m=p?Dt.find(v=>v.id===p[b].car):u[b%u.length],f=new ws(m,p&&p[b].paint!=null?p[b].paint:na[(b*2+1+(Math.random()*2|0))%na.length],p?p[b].name:d[b],void 0,{wing:Math.random()*4|0,split:Math.random()*2|0,rim:Math.random()*Ac.length|0});S.ais.set(f,l(p?p[b].skill:h+(4-b)*.012+Math.random()*.015)),f.assistK=.7,S.cars.push(f),mo(f,b)}S.cars.push(a),mo(a,g)}else if(i.mode==="online"){if(S.cars.push(a),mo(a,Fi?0:1),Et){let h=Dt.find(d=>d.id===Et.car)||Dt[0],u=S.remote=new ws(h,Et.paint??h.color,Et.name||"Rival",Et.up,Et.look);u.isRemote=!0,u.look=Td(Et),S.cars.push(u),mo(u,Fi?1:0)}dt.send({k:"me",i:wd()})}else S.cars.push(a),mo(a,0);for(let h of S.cars)Tt.add(h.root),h.y=n.height(h.x,h.z),h.render(.016,n);ly(),i.attract||Ve.music(!1),ir.cond="",Ge.yaw=a.th,Ge.pos.set(a.x-Math.sin(a.th)*30,a.y+22,a.z-Math.cos(a.th)*30),Ge.look.set(a.x,a.y,a.z),py(),j("hPosOf").textContent="/"+S.cars.length,j("hLapOf").textContent="/"+S.laps,j("order").innerHTML="",S.orderKey="",j("hBest").textContent=q.best[t.id]?Hn(q.best[t.id]):"\u2014",j("hSec").textContent="",j("hSec").className="";let c=S.cars.length<2;j("order").hidden=c,j("hPosBox").style.visibility=c?"hidden":"visible",_t("hPingRow",i.mode==="online"),_t("hArc",S.arc),document.querySelector("#touch .n").hidden=S.rules!=="arcade";for(let h in ir)delete ir[h];if(_t("loading",!1),_t("hud",!i.attract),nr=!1,la=0,Yc=performance.now(),Ve.quiet=!!i.attract,Ve.setCar(s.cyl),i.attract){S.attract=!0,S.demo=!0,S.state="go";return}i.mode==="online"?(dt.send({k:"loaded"}),dn("Waiting for rival\u2026",!1,0),Et?_d():jc()):jc()}function jc(){if(!(!S||S.state!=="wait")){S.state="count",S.countT=3.6,S.lightN=0,j("msg").className="",j("lights").classList.add("show");for(let i of j("lights").children)i.className=""}}function _d(){S&&S.mode==="online"&&Fi&&S.state==="wait"&&Md&&(dt.send({k:"go"}),jc())}function yo(){if(S){for(let i of S.cars)Tt.remove(i.root),i.dispose();for(let i of[S.fx.smoke,S.fx.glow])Tt.remove(i.points),i.geo.dispose(),i.mat.dispose();Tt.remove(S.fx.skids.mesh),S.fx.skids.geo.dispose(),S.ambient.dispose(),Tt.remove(S.track.group),S.track.dispose(),S=null,Ve.silence(),_t("hud",!1),_t("pause",!1),_t("results",!1),j("lights").classList.remove("show"),j("msg").className=""}}function ha(){yo(),Wc="",ue.tab==="career"&&(ue.ev=ym(),ue.ch=hi[ue.ev].ci),$c(null),Li.visible=!0,_t("menu",!0),vt(),Ve.music(!0)}function vd(){!S||S.state==="over"||(nr=!nr,_t("pause",nr),nr?Ve.silence():Yc=performance.now(),S.mode==="online"&&(nr=!1))}function ny(i){let e=S.track,t=e.n,n=e.nearest(i.x,i.z,i.idx),s=n-i.idx;if(s>t/2&&(s-=t),s<-t/2&&(s+=t),i.idx=n,i.prog+=s,i===S.player&&S.state==="go"&&i.lap>=0){let a=Math.min(2,Math.floor((i.prog%t+t)%t/(t/3)));a!==i.sec&&(i.sec!=null&&s>0&&a===(i.sec+1)%3&&iy(i,i.sec),i.sec=a,i.secStart=S.t)}let r=Math.floor(i.prog/t);if(r>i.lap&&S.state!=="count"&&S.state!=="wait"){let a=i.lap<0;if(i.lap=r,!a){let o=(S.t-i.lapStart)*1e3;i.laps.push(o),i===S.player&&sy(o)}i.lapStart=S.t,i.lap>=S.laps&&!i.finished&&(i.finished=!0,i.finishTime=S.t*1e3,i===S.player&&ry())}}function iy(i,e){let t=S.track.def.id,n=(S.t-i.secStart)*1e3,s=(q.sectors[t]||(q.sectors[t]=[]))[e],r=j("hSec");r.textContent="S"+(e+1)+"  "+(n/1e3).toFixed(2)+(s?"  "+(n<s?"\u2212":"+")+(Math.abs(n-s)/1e3).toFixed(2):""),r.className=!s||n<s?"good":"slow",(!s||n<s)&&(q.sectors[t][e]=Math.round(n),Zt())}function sy(i){let e=S.track.def.id,t=q.best[e];(S.bestThisRace==null||i<S.bestThisRace)&&(S.bestThisRace=i),!t||i<t?(q.best[e]=i,Zt(),j("hBest").textContent=Hn(i),dn("Best lap "+Hn(i)),S.newBest=!0,Zp(e,q.name,Dt.find(n=>n.id===q.car).name,i),Ve.beep(880,.25)):S.player.lap===S.laps-1?dn("Final lap"):dn(Hn(i))}function ry(){S.state="done",S.doneT=0,dm(),Ve.beep(1040,.5),dn("Finish",!1,1400),S.mode==="online"&&dt.send({k:"fin",t:S.t*1e3})}function dm(){let i=S.D;i.combo>0&&(S.drift+=Math.round(i.combo),i.combo=0,i.time=0)}function yd(){return[...S.cars].sort((i,e)=>i.finished&&e.finished?i.finishTime-e.finishTime:i.finished?-1:e.finished?1:e.prog-i.prog)}function oa(i,e){if(e<2)return;let t=S.player,n=(i.x-t.x)**2+(i.z-t.z)**2<3600;if(e<4){i===t&&Math.random()<.2&&(Ve.scrape(e),i.impactFX(S.fx,S.track,e*.4));return}let s=i.damage(e);if(i===t&&(e>8&&S.crashes++,s>0&&S.mode==="online"&&dt&&dt.send({k:"d",l:t.hitL,n:t.hitN,p:+e.toFixed(1)})),n&&i.impactFX(S.fx,S.track,e),i!==t){n&&Ve.crash(e*.35);return}Ni&&navigator.vibrate&&navigator.vibrate(Math.min(90,e*5)),Ve.crash(e),bo=Math.min(1.2,bo+e/13),dd=Math.min(1,e/14),xd=Math.min(6,e*.35),S.D.combo>30&&dn("Combo lost",!0,900),S.D.combo=0,S.D.time=0,s>.02&&!S.attract&&(t.health<.55||t.dmg.front>.6)&&!S.warned&&(S.warned=!0,Wn("Car damaged \u2014 stop in the blue pit box to repair"))}function fm(i,e){let t=S.track,n=S.player,s=S.state==="done"||S.state==="over"||S.demo,r=S.pit&&S.pit.busy||S.t<(n.holdT||0),a=s?S.ais.get(n).inp:r?im:cm();if(S.demo==="keys"){let o=S.ais.get(n).inp;a={steer:Math.abs(o.steer)>.15?Math.sign(o.steer):0,throttle:o.throttle>.3?1:0,brake:o.brake>.2?1:0,hand:!1,nitro:!1}}oa(n,n.step(i,a,t,e)),r&&(n.vx=n.vz=n.r=0);for(let o of S.cars)if(o!==n&&!o.isRemote){let l=S.ais.get(o);oa(o,o.step(i,S.t<(o.holdT||0)?im:l.inp,t,e,1))}for(let o=0;o<S.cars.length;o++)for(let l=o+1;l<S.cars.length;l++){let c=S.cars[o],h=S.cars[l];if(!(Math.abs(c.x-h.x)>6||Math.abs(c.z-h.z)>6))if(h.isRemote)oa(c,c.bump(h,!0));else if(c.isRemote)oa(h,h.bump(c,!0));else{let u=c.bump(h,!1);u>0&&(oa(c,u*.8),oa(h,u*.8))}}}var im={steer:0,throttle:0,brake:1,hand:!0,nitro:!1},pm=[["eng","Engine"],["tyre","Tyres"],["nitro","Nitro"],["armor","Armour"]],Mo=i=>q.up[i]||(q.up[i]={eng:0,tyre:0,nitro:0,armor:0}),mm=(i,e)=>Math.round([500,1300,2800][Math.min(e,2)]*(1+i.price/6e3)/50)*50,Ii=i=>q.stats[i]||0,gm=[{id:"win1",name:"First blood",desc:"Win a race",need:1,get:()=>Ii("wins")},{id:"pod10",name:"Podium regular",desc:"Finish on the podium 10 times",need:10,get:()=>Ii("podiums")},{id:"clean",name:"Clean hands",desc:"Win a race without a single hard hit",need:1,get:()=>Ii("clean")},{id:"dr3",name:"Sideways",desc:"Score 3,000 drift points in one run",need:3e3,get:()=>Ii("driftBest")},{id:"dr8",name:"Smoke machine",desc:"Score 8,000 drift points in one run",need:8e3,get:()=>Ii("driftBest")},{id:"ot50",name:"Overtaker",desc:"Make 50 overtakes",need:50,get:()=>Ii("overtakes")},{id:"pit10",name:"Pit crew favourite",desc:"Complete 10 pit stops",need:10,get:()=>Ii("pits")},{id:"coin",name:"Coin collector",desc:"Collect 2,000 credits on track",need:2e3,get:()=>Ii("coins")},{id:"km100",name:"Road trip",desc:"Drive 100 km",need:100,get:()=>Ii("km")},{id:"day5",name:"Daily habit",desc:"Reach a 5-day challenge streak",need:5,get:()=>q.streak||0},{id:"gar",name:"Full garage",desc:"Own all 14 cars",need:14,get:()=>q.owned.length},{id:"gp",name:"Grand Prix champion",desc:"Win a Grand Prix",need:1,get:()=>Ii("gpWins")}];function bm(){let i=0;for(let e of gm)!q.trophies[e.id]&&e.get()>=e.need&&(q.trophies[e.id]=1,q.credits+=300,i++,Wn("Trophy: "+e.name+" \u2014 +300 credits"));i&&(Zt(),(!S||S.state==="over")&&(j("credits").textContent=q.credits.toLocaleString()))}var sm=0,pd=-9;function hn(i,e){if(!S||S.attract||!e&&S.t-pd<6)return;pd=S.t;let t=j("radio");t.lastElementChild.textContent=pt(i),t.classList.add("show"),clearTimeout(sm),sm=setTimeout(()=>t.classList.remove("show"),4e3),Ve.tone(1250,.05,.05),Ve.tone(950,.07,.04)}var xm=i=>[["Tyres",i.tyre<.92?ct.pit.tyres:0],["Fuel",(1-i.fuel)*ct.pit.fuelFull],["Repairs",(1-i.health)*ct.pit.repairFull]].filter(e=>e[1]>.15);function ay(i,e,t){if(!(i.health<.62||i.dmg.front>.5||i.tyre<.28||i.fuel<.1||e.pitT>0))return;let n=e.box||S.pit,s=n.x-i.x,r=n.z-i.z,a=Math.hypot(s,r),o=s*Math.sin(i.th)+r*Math.cos(i.th);if(a>60||o<-1&&!e.pitT)return;let l=a<3?0:Math.min(28,Math.sqrt(12*(a-2)));e.inp.steer=a>2.5?vn(cd(Math.atan2(s,r)-i.th)*2.5,-1,1):0,e.inp.throttle=i.speed<l?.7:0,e.inp.brake=i.speed>l+1&&i.vf>2?1:0,e.inp.nitro=!1,a<3.4&&i.speed<4&&(i.vx*=.8,i.vz*=.8,e.inp.throttle=0,e.pitT||(e.pitNeed=xm(i).reduce((c,h)=>c+h[1],0)),e.pitT=(e.pitT||0)+t,e.pitT>e.pitNeed&&(i.repair(),i.fuel=1,i.wetTyres=S.wet>.4,e.pitT=0,S.aiPits=(S.aiPits||0)+1))}function Vc(i){let e=S.ev,t=e.cur;t&&(t.pick&&t.pick.t!==1/0&&(t.pick.t=1/0),t.pick&&(t.pick.m.visible=!1),e.cur=null,e.next=S.t+20+Math.random()*16,Gn("hEvent",""),i&&dn(i,/missed/.test(i),1300))}function _m(){let i=S.track,e=S.player,t=i.n,n=S.ev,s=["oil","rush","gold","haze","trap"].concat(S.mode==="race"&&S.cars.length>1?["bounty","bounty"]:[]).filter(c=>c!==n.last),r=s[Math.random()*s.length|0],a=n.cur={type:r,t:0};n.last=r;let o="",l=(c,h)=>{let u=i.path[(e.idx+Math.round(c/i.spacing))%t],d=u.x+u.tz*h,p=u.z-u.tx*h;return{x:d,z:p,y:i.height(d,p)}};if(r==="oil"){a.t=6,o="Oil on track";for(let c of[140,260]){let h=l(c,(Math.random()-.5)*5),u=new Ae(new Ws(2.7,22),new Re({color:263173,roughness:.04,metalness:.95,transparent:!0,opacity:.88,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-7,polygonOffsetUnits:-7}));u.rotation.x=-Math.PI/2,u.position.set(h.x,h.y+.06,h.z),i.group.add(u),S.slicks.push({x:h.x,z:h.z,m:u,until:S.t+45})}hn("Oil on the track ahead. Dark patches \u2014 stay off them.",!0)}else if(r==="rush")a.t=12,o="Nitro rush",hn("Nitro rush! Tanks are refilling, use it.");else if(r==="gold"){a.t=26,o="Golden coin";let c=l(170,(Math.random()-.5)*4),h=new Ae(S.coinG,S.coinM);h.scale.setScalar(2),h.position.set(c.x,c.y+1.4,c.z),i.group.add(h),a.pick={x:c.x,z:c.z,y:c.y+1.4,m:h,nitro:!1,gold:!0,t:0},S.picks.push(a.pick),hn("Golden coin on the racing line. Worth 200.")}else r==="haze"?(a.t=16,o=i.def.theme==="desert"?"Sandstorm":"Fog bank",hn(o+" rolling in. Trust the lines.",!0)):r==="trap"?(a.kmh=Math.round(e.spec.top*3.6*.78/10)*10,a.t=20,o="Speed trap "+a.kmh+" km/h",hn("Speed trap is live. Hit "+a.kmh+" for a bonus.")):(a.t=24,o="Bounty: overtake",hn("Bounty on the car ahead. Take the place, take the money."));a.label=o,dn(o,r==="oil"||r==="haze",1500),Ve.beep(520,.2)}function oy(i){let e=S.track,t=S.player,n=S.ev;if(S.state!=="go")return;for(let a of S.cars){if(a.isRemote)continue;let o=0;if(S.rules==="arcade"&&a.speed>20){let l=Math.sin(a.th),c=Math.cos(a.th);for(let h of S.cars){if(h===a)continue;let u=h.x-a.x,d=h.z-a.z,p=u*l+d*c,g=u*c-d*l;p>4&&p<24&&Math.abs(g)<1.7&&(o=Math.max(o,1-(p-4)/20))}}a.draft+=(o-a.draft)*Math.min(1,i*3)}if(Gn("hTow",t.draft>.25?"Slipstream":""),t.draft>.25&&Math.random()<.5){let a=Math.random()*6.28;S.fx.smoke.emit(t.x+Math.cos(a)*2.5+Math.sin(t.th)*6,t.y+.5+Math.random()*1.5,t.z+Math.sin(a)*2.5+Math.cos(t.th)*6,-t.vx*.6,0,-t.vz*.6,.25,.12,0,1,1,1,.25)}t.draft>.4&&!S.towSaid&&(S.towSaid=!0,hn("You\u2019re in the tow. Stay tucked in, pull out late."));let s=yd().indexOf(t)+1;if(S.lastPos&&S.t>6&&S.cars.length>1&&!t.finished&&(s<S.lastPos?(S.coins+=40,S.overtakes++,dn("+40 overtake",!1,700),hn(s===1?"P1! You lead. Keep it clean.":"P"+s+". Next one is just ahead."),n.cur&&n.cur.type==="bounty"&&(S.coins+=150,Vc("Bounty paid: +150"))):s>S.lastPos&&hn("Lost a place. P"+s+". Stay calm, take it back.")),S.lastPos=s,t.tyre<.3&&!S.saidTyre&&(S.saidTyre=!0,hn("Tyres are nearly gone. Box at the blue pit.",!0)),t.lap===S.laps-1&&!S.saidLast&&S.laps>1&&(S.saidLast=!0,hn("Last lap. Everything you have.",!0)),S.attract)return;S.t>1&&!S.saidGo&&(S.saidGo=!0,hn(S.story?"Radio check. Clean first corner, then push.":"Lights out. Clean first corner.",!0)),S.slicks=S.slicks.filter(a=>a.until>S.t||(e.group.remove(a.m),!1));for(let a of S.slicks)for(let o of S.cars)!o.isRemote&&o.oil<=0&&(o.x-a.x)**2+(o.z-a.z)**2<7.5&&(o.oil=o===t?1.1:.4,o===t&&hn("Oil! Easy on the wheel.",!0));if(t.fuel<.15&&!S.saidFuel&&(S.saidFuel=!0,hn("Fuel is low. Box this lap or you will not make it.",!0)),t.fuel<=0&&!S.saidDry&&(S.saidDry=!0,hn("We are out of fuel. Coast it to the pit lane.",!0)),S.mode==="online"||S.rules!=="arcade")return;let r=n.cur;if(r){if(r.t-=i,Gn("hEvent",r.label+(r.type==="oil"?"":"  "+Math.ceil(r.t)+"s")),r.type==="rush")for(let a of S.cars)a.nitro=Math.min(1,a.nitro+i*.22);r.type==="trap"&&Math.abs(t.vf)*3.6>=r.kmh?(S.coins+=120,Vc("Speed trap beaten: +120")):r.t<=0&&Vc(r.type==="bounty"||r.type==="trap"||r.type==="gold"?"Challenge missed":null)}else S.t>n.next&&!t.finished&&_m()}function ly(){let i=S.track,e=i.n,t=i.group,n=i.def,s=S.player,r=6;if(i.pitBoxes)S.cars.forEach((u,d)=>{let p=S.ais.get(u),g=i.pitBoxes[d%i.pitBoxes.length];u===s?S.pit={x:g.x,z:g.z,t:0,busy:!1,tick:0}:p&&(p.box=g)}),r=n.width/2;else{let u=Math.round(34/i.spacing),d=i.path[u];for(r=0;r<12&&i.surf(d.x-d.tz*(r+.5),d.z+d.tx*(r+.5))===2;)r+=.5;let p=Math.max(2,r-2.1),g=d.x-d.tz*p,b=d.z+d.tx*p,m=i.height(g,b),f=document.createElement("canvas");f.width=128,f.height=256;let v=f.getContext("2d");v.fillStyle="rgba(25,167,206,.55)",v.fillRect(0,0,128,256),v.strokeStyle="#fff",v.lineWidth=10,v.strokeRect(5,5,118,246),v.fillStyle="#fff",v.font="900 54px Rubik, Arial Black, sans-serif",v.textAlign="center",v.fillText("PIT",64,146);let _=new Hs(f);_.colorSpace=Gt;let x=new Ae(new bn(3.6,7.2),new Ct({map:_,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-5,polygonOffsetUnits:-5}));x.rotation.set(-Math.PI/2,0,Math.PI-Math.atan2(d.tx,d.tz)),x.position.set(g,m+.07,b),t.add(x),S.pit={x:g,z:b,t:0,busy:!1,tick:0,zone:!0},n.dev&&(x.visible=!1,S.pit.x=S.pit.z=1e6)}let a=new Ae(new On(.08,.08,4,8),new Ct({color:new xe(1681358).multiplyScalar(2.2)}));a.position.set(S.pit.x,i.height(S.pit.x,S.pit.z)+5,S.pit.z),t.add(a);let o=new Ae(new Kn(.42,.7,4),new Ct({color:16777215,fog:!1}));o.rotation.x=Math.PI,o.position.y=s.top+1.5,s.root.add(o),S.marker=o;for(let u of S.cars)u.noNitro=S.rules!=="arcade";S.picks=[],S.coins=0;let l=new On(.5,.5,.1,18);l.rotateX(Math.PI/2);let c=new Re({color:16761370,emissive:16754688,emissiveIntensity:1.1,metalness:.9,roughness:.25});if(S.rules==="arcade"){let u=new Na(.6),d=new Re({color:1681358,emissive:1681358,emissiveIntensity:2.2,metalness:.6,roughness:.25}),p=Math.max(1.2,Math.min(r,7)-2.5),g=(b,m,f)=>{let v=i.path[(b%e+e)%e],_=v.x+v.tz*m,x=v.z-v.tx*m,w=new Ae(f?u:l,f?d:c);w.position.set(_,i.height(_,x)+1,x),w.castShadow=!0,t.add(w),S.picks.push({x:_,z:x,y:w.position.y,m:w,nitro:f,t:0})};[.14,.33,.52,.7,.88].forEach((b,m)=>g(Math.round(b*e),(m%2?1:-1)*p*.6,!0)),[.07,.24,.42,.61,.79].forEach((b,m)=>{let f=(m%2?-1:1)*p*.5;for(let v=0;v<4;v++)g(Math.round(b*e)+v*4,f,!1)})}{let u=new Re({color:3126359,emissive:3126359,emissiveIntensity:1.6,roughness:.4}),d=Math.max(1.2,Math.min(r,7)-2.5);[.2,.5,.82].forEach((p,g)=>{let b=i.path[Math.round(p*e)%e],m=(g%2?1:-1)*d*.35,f=b.x+b.tz*m,v=b.z-b.tx*m,_=new Bt;_.add(new Ae(new Ot(1.2,.36,.36),u),new Ae(new Ot(.36,1.2,.36),u)),_.position.set(f,i.height(f,v)+1.1,v),t.add(_),S.picks.push({x:f,z:v,y:_.position.y,m:_,fix:!0,t:0})})}let h=S.weather||"random";if(S.wet=0,i.wet=0,S.coinG=l,S.coinM=c,S.slicks=[],S.ev={cur:null,next:20+Math.random()*12,last:""},S.haze=0,S.pits=0,S.overtakes=0,S.crashes=0,S.lastPos=0,pd=-9,i.theme.night)for(let u of[-1,1]){let d=i.path[0],p=new wi(13623551,220,70,.75,.6,1.4);p.position.set(d.x+d.tz*u*5,i.height(d.x,d.z)+9,d.z-d.tx*u*5),p.target.position.set(d.x-d.tx*22+d.tz*u*3,0,d.z-d.tz*22-d.tx*u*3),t.add(p,p.target)}if(S.rainAt=S.rainAt!=null?S.rainAt:h==="rain"?6:h==="storm"?0:h==="random"&&n.theme!=="desert"&&!n.dev&&Math.random()<.3?18+Math.random()*30:1/0,S.roadMats=[],t.traverse(u=>{u.isMesh&&u.material&&/racetrack|conc_plates/.test(u.material.name||"")&&S.roadMats.push([u.material,u.material.roughness,u.material.metalness])}),i.theme.night){let u=new wi(16773590,90,70,.5,.7,1.4);u.position.set(0,.75,1.7),u.target.position.set(0,-.6,16),s.root.add(u,u.target)}}function cy(i){let e=S.track,t=S.player,n=S.pit;if(oy(i),S.state==="go"){let l=(t.x-n.x)**2+(t.z-n.z)**2,c=xm(t),h=c.reduce((u,d)=>u+d[1],0);if(t.pitZone=!!n.zone&&l<300,t.inPit&&!S.wasPit&&!n.busy&&hn(h>.3?"Limiter on. Stop in your box \u2014 about "+h.toFixed(1)+" seconds for "+c.map(u=>u[0].toLowerCase()).join(", ")+".":"Limiter on. Nothing to do \u2014 drive through.",!0),S.wasPit=t.inPit,n.busy||l<10&&t.speed<2&&h>.3){n.busy||(n.busy=!0,n.t=0,n.jobs=c,n.total=h),n.t+=i,n.tick-=i,n.tick<=0&&(n.tick=.55,Ve.wrench());let u=0,d=n.jobs[0][0];for(let p of n.jobs)n.t>=u&&(d=p[0]),u+=p[1];dn(d+"  "+Math.max(0,n.total-n.t).toFixed(1)+"s",!1,250),n.t>=n.total&&(t.repair(),t.fuel=1,t.nitro=1,t.wetTyres=S.wet>.4||S.rainAt-S.t<20,n.busy=!1,n.t=0,S.warned=S.saidTyre=S.saidFuel=S.saidDry=!1,S.pits++,dn("Go",!1,800),Ve.beep(660,.4),hn((t.wetTyres?"Wet tyres on":"Fresh tyres")+", full tank. Mind the limiter to the pit exit.",!0),S.mode==="online"&&dt&&dt.send({k:"fix",w:t.wetTyres}))}}let s=S.t;for(let l of S.picks){if(l.t>s){if(l.m.visible=!1,l.t!==1/0)continue;continue}if(l.t!==1/0&&(l.m.visible=!0,l.m.rotation.y+=i*2.5,l.m.position.y=l.y+Math.sin(s*3+l.x)*.18,(t.x-l.x)**2+(t.z-l.z)**2<5.5&&S.state==="go"))if(l.t=s+(l.nitro?14:25),Ve.pickup(l.nitro),l.fix){l.t=s+40;let c=t.tyre,h=t.fuel;t.repair(),t.tyre=c,t.fuel=h,Ve.wrench(),dn("Repaired",!1,900);for(let u=0;u<16;u++)S.fx.glow.emit(l.x,l.y,l.z,(Math.random()-.5)*7,Math.random()*6,(Math.random()-.5)*7,.45,.22,0,.3,1,.45,1,7)}else if(l.nitro){t.nitro=Math.min(1,t.nitro+.5);for(let c=0;c<14;c++)S.fx.glow.emit(l.x,l.y,l.z,(Math.random()-.5)*8,Math.random()*6,(Math.random()-.5)*8,.4,.25,0,.3,.7,1,1,6)}else{S.coins+=l.gold?200:25,l.gold&&(l.t=1/0,Vc("Golden coin: +200"));for(let c=0;c<6;c++)S.fx.glow.emit(l.x,l.y,l.z,(Math.random()-.5)*5,2+Math.random()*4,(Math.random()-.5)*5,.35,.18,0,1,.8,.2,1,9)}}if(S.t>S.rainAt&&S.wet<1){S.wet===0&&(dn("Rain",!0,1600),hn("Rain. Brake earlier \u2014 box for wet tyres if it gets heavy.",!0)),S.wet=Math.min(1,S.wet+i/9),e.wet=S.wet;for(let[l,c,h]of S.roadMats)l.roughness=c-(c-.28)*S.wet,l.metalness=h+(.35-h)*S.wet;Tt.fog.density=hd*(1+1.6*S.wet),un.intensity=om*(1-.6*S.wet),Es.intensity=lm*(1-.2*S.wet)}S.haze+=((S.ev.cur&&S.ev.cur.type==="haze"?1:0)-S.haze)*Math.min(1,i*.8),Tt.fog.density=hd*(1+1.6*S.wet)*(1+4.5*S.haze);let r=yn.domElement.height/(2*Math.tan(mt.fov*Math.PI/360));S.ambient.update(i,mt,S.wet,r);let a=wc[e.def.theme].sunDir,o=Math.hypot(a[0],a[1],a[2]);if(Rn&&(Rn.position.set(mt.position.x+a[0]/o*3400,mt.position.y+a[1]/o*3400,mt.position.z+a[2]/o*3400),Rn.lookAt(mt.position),Rn.visible=S.wet<.5),dd*=Math.exp(-i*5),xd*=Math.exp(-i*6),Vn){let l=Vn.u;if(l.tilt.value=S.attract?.7:Xc[go].fixed?1:0,l.time.value=S.t,l.hit.value=dd,l.wet.value=S.wet,l.speed.value+=((t.nitroOn?.9:vn((t.speed-40)/40,0,.4))-l.speed.value)*Math.min(1,i*5),Rn&&Rn.visible){let c=Rn.position.clone().project(mt),h=c.z<1?vn(1.5-Math.max(Math.abs(c.x),Math.abs(c.y)),0,1):0;l.sunPos.value.set(c.x*.5+.5,c.y*.5+.5),l.sunVis.value+=(h-l.sunVis.value)*Math.min(1,i*4)}else l.sunVis.value=0}}function vm(i){let e=S.track,t=S.player;if(S.state==="wait"&&(S.waitT+=i,S.waitT>1&&(S.waitT=0,dt&&dt.send({k:"loaded"}),_d())),S.state==="count"){S.countT-=i;let c=Math.min(5,Math.floor((3.6-S.countT)/.6)),h=j("lights").children;if(c>S.lightN&&S.countT>0){S.lightN=c;for(let u=0;u<5;u++)h[u].className=u<c?"red":"";Ve.beep(330,.12)}if(S.countT<=0){S.state="go";for(let u of h)u.className="go";Ve.beep(660,.5),dn("Go",!1,800),setTimeout(()=>j("lights").classList.remove("show"),900)}}let n=S.state!=="count"&&S.state!=="wait";n&&S.state!=="over"&&(S.t+=i),Gn("hTyreLbl",pt(t.wetTyres?"Wets":"Tyres"));for(let[c,h]of S.ais)c===t&&S.state!=="done"&&S.state!=="over"&&!S.demo||(Kp(c,e,h,S.cars,i),c!==t&&n&&ay(c,h,i),c.finished&&(h.inp.throttle*=.5),n&&!h.pitT&&(c.stuck=c.speed<1.5?c.stuck+i:0,c.stuck>2.5&&((S.respLog=S.respLog||[]).push(c.name+" t"+(S.t|0)+" idx"+c.idx+" hp"+c.health.toFixed(2)+" f"+c.dmg.front.toFixed(2)+" ty"+c.tyre.toFixed(2)+" oil"+S.slicks.length+" pitd"+Math.hypot(c.x-S.pit.x,c.z-S.pit.z).toFixed(0)),um(c),c.stuck=0,S.respawns=(S.respawns||0)+1)));la+=i;let s=0;for(;la>=Gc&&s++<8;)la-=Gc,fm(Gc,n);S.remote&&S.remote.netStep(i,e,performance.now());for(let c of S.cars)ny(c);let r=S.D;if(S.state==="go"){t.drifting?(r.time+=i,r.mult=1+Math.min(4,Math.floor(r.time/1.5)),r.combo+=Math.abs(t.beta)*t.speed*i*6*r.mult,r.grace=.9):r.combo>0&&(r.grace-=i,r.grace<=0&&(r.combo>150&&dn("+"+Math.round(r.combo),!1,900),dm()));let c=e.path[t.idx];t.wrong=t.vx*c.tx+t.vz*c.tz<-4?t.wrong+i:0,t.wrong>1.2&&dn("Wrong way",!0,400)}if(S.state==="done"&&(S.doneT+=i,S.doneT>2.2&&gy()),S.mode==="online"&&dt){S.sendT+=i,S.sendT>=1/ct.net.hz&&(S.sendT=0,dt.send({k:"s",p:t.netPack()})),S.pingT=(S.pingT||0)+i,S.pingT>2&&(S.pingT=0,dt.send({k:"ping",t:performance.now()}));let c=S.remote&&S.remote.nb;Gn("hPing",(S.ping!=null?Math.round(S.ping)+" ms":"\u2026")+(c?" \xB7 buffer "+Math.round(c.delay)+" ms":""))}cy(i);let a=Rs<1.2?.6:1;uy(e),!j("tele").hidden&&fy(t,i);for(let c of S.cars)c.render(i,e,c.isRemote?1:vn(la/Gc,0,1)),c.effects(i,S.fx,e,c===t?a:a*.6);S.fx.smoke.update(i),S.fx.glow.update(i),S.fx.skids.flush(),hy(i);let o=yn.domElement.height/(2*Math.tan(mt.fov*Math.PI/360));S.fx.smoke.mat.uniforms.uScale.value=S.fx.glow.mat.uniforms.uScale.value=o,my(i);let l=t.slipR>.16&&t.speed>6||t.wspin>.12||t.locked&&t.speed>3;t.gear!==S.lastGear&&(S.lastGear&&t.gear>0&&Ve.shift(),S.lastGear=t.gear),Ve.ambient(i,{on:!S.attract,day:!e.theme.night,rain:S.wet>.3}),Ve.drive({turbo:t.up.eng,rpm:t.rpm,throttle:S.state==="done"?.3:on.throttle,speed:t.speed,skid:l&&t.grass<.5?vn(t.slipR*1.6+t.wspin*.7,.25,1):0,dirt:t.grass*vn(t.speed/20,0,1),nitro:t.nitroOn,brake:t.braking?1:0,rain:S.wet}),by(i)}function hy(i){let e=S.player,t=Xc[go],n=e.speed,s=S.track,r=e.rx??e.x,a=e.rz??e.z,o=wc[s.def.theme].sunDir;if(un.position.set(r+o[0]*130,e.y+o[1]*130,a+o[2]*130),un.target.position.set(r,e.y,a),ts&&ts.position.set(r,0,a),S.marker&&(S.marker.position.y=e.top+1.5+Math.sin(S.t*4)*.12,S.marker.visible=!!t.fixed||!!t.follow),S.attract)return dy(i);if(t.fixed){let T=s.def.camYaw??.65,R=vn(n*.36,0,10),M=r+(n>1?e.vx/n:0)*R,A=a+(n>1?e.vz/n:0)*R,C=1-Math.exp(-i*3),I=(mt.aspect<1?1.35:1)*(q.zoom||1.5);Ge.look.x+=(M-Ge.look.x)*C,Ge.look.z+=(A-Ge.look.z)*C,Ge.look.y+=(e.y-Ge.look.y)*C,mt.position.set(Ge.look.x-Math.sin(T)*t.d*I,Ge.look.y+t.h*I,Ge.look.z-Math.cos(T)*t.d*I),mt.lookAt(Ge.look),Ge.pos.copy(mt.position),Ge.yaw=T,Math.abs(mt.fov-t.fov)>.05&&(mt.fov=Ge.fov=t.fov,mt.updateProjectionMatrix()),bo=0;return}let l=e.th,c=4.2;if(S.state==="over"||S.state==="done")l=e.th+2.4,c=1.2;else if(t.follow){let T=s.path[(e.idx+Math.round(14/s.spacing))%s.n];l=Math.atan2(T.tx,T.tz),c=1.5}else n>6&&e.vf>0&&(l=e.th+cd(Math.atan2(e.vx,e.vz)-e.th)*.55);Ge.yaw+=cd(l-Ge.yaw)*(1-Math.exp(-i*c));let h=mt.aspect<1?1.25:1,u=t.d*h*(t.follow?1+vn(n/60,0,1)*.18:1),d=r-Math.sin(Ge.yaw)*u,p=a-Math.cos(Ge.yaw)*u,g=e.y+t.h*h;g=Math.max(g,s.height(d,p)+1.2);let b=1-Math.exp(-i*(t.follow?4.5:7));Ge.pos.x+=(d-Ge.pos.x)*b,Ge.pos.y+=(g-Ge.pos.y)*(1-Math.exp(-i*4)),Ge.pos.z+=(p-Ge.pos.z)*b;let m=t.look+(t.follow?vn(n*.12,0,5):0),f=r+Math.sin(e.th)*m,v=a+Math.cos(e.th)*m,_=1-Math.exp(-i*(t.follow?6:10));Ge.look.x+=(f-Ge.look.x)*_,Ge.look.y+=(e.y+.8-Ge.look.y)*_,Ge.look.z+=(v-Ge.look.z)*_,bo*=Math.exp(-i*6);let x=e.grass*vn(n/30,0,1)*.04+bo*.25;mt.position.set(Ge.pos.x+(Math.random()-.5)*x,Ge.pos.y+(Math.random()-.5)*x,Ge.pos.z+(Math.random()-.5)*x),mt.lookAt(Ge.look);let w=t.fov+vn(n*(t.follow?.08:.22),0,14)+(e.nitroOn?t.follow?4:9:0)-xd;Ge.fov+=(w-Ge.fov)*(1-Math.exp(-i*5)),Math.abs(mt.fov-Ge.fov)>.05&&(mt.fov=Ge.fov,mt.updateProjectionMatrix())}var uy=i=>{i.tick&&i.tick(performance.now()/1e3)},rm=-1;function dy(i){let e=S.t,t=Math.floor(e/7),n=t%4,s=e%7/7,r=S.cars[t*3%S.cars.length],a=r.rx??r.x,o=r.rz??r.z,l=Math.sin(r.th),c=Math.cos(r.th),h,u,d,p=a,g=r.y+.8,b=o,m=40;if(n===0){let v=e*.22;h=a+Math.cos(v)*13,d=o+Math.sin(v)*13,u=r.y+3.2+Math.sin(e*.4)*1.2}else n===1?(h=a-22+s*8,d=o-20,u=r.y+40-s*16,m=34):n===2?(h=a-l*7.5+c*1.6,d=o-c*7.5-l*1.6,u=r.y+2,p=a+l*8,b=o+c*8,m=62):(h=a-l*6+Math.cos(e*.3)*6,d=o-c*6+Math.sin(e*.3)*6,u=r.y+52-s*10,p=a+l*10,b=o+c*10,m=30);u=Math.max(u,S.track.height(h,d)+1.2),rm!==t&&(rm=t,Ge.pos.set(h,u,d),Ge.look.set(p,g,b));let f=1-Math.exp(-i*4);Ge.pos.x+=(h-Ge.pos.x)*f,Ge.pos.y+=(u-Ge.pos.y)*f,Ge.pos.z+=(d-Ge.pos.z)*f,Ge.look.x+=(p-Ge.look.x)*f,Ge.look.y+=(g-Ge.look.y)*f,Ge.look.z+=(b-Ge.look.z)*f,mt.position.copy(Ge.pos),mt.lookAt(Ge.look),Math.abs(mt.fov-m)>.05&&(mt.fov=Ge.fov=m,mt.updateProjectionMatrix()),S.marker&&(S.marker.visible=!1)}var rd=60;function fy(i,e){let t=s=>(s*57.3).toFixed(1).padStart(6),n=s=>String(Math.round(Math.min(s,1.5)*100)).padStart(4)+"%";rd+=(1/Math.max(e,.001)-rd)*.05,j("tele").textContent=`speed      ${(i.speed*3.6).toFixed(0).padStart(5)} km/h   gear ${i.gear}
steer      ${t(i.steer)}\xB0
slip front ${t(i.aF)}\xB0   rear ${t(i.slipR)}\xB0
body slip  ${t(i.beta)}\xB0   yaw ${i.r.toFixed(2).padStart(6)} rad/s
grip used  F${n(i.useF)}  R${n(i.useR)}
accel      lat ${(i.ayS/9.81).toFixed(2).padStart(5)} g  long ${(i.axS/9.81).toFixed(2).padStart(5)} g
surface    ${i.wsurf.map(s=>"GKRWP"[s]).join(" ")}   (FL FR RL RR)
fuel ${n(i.fuel)}  tyres ${n(i.tyre)}  body ${n(i.health)}
damage     F${n(i.dmg.front)} R${n(i.dmg.rear)} L${n(i.dmg.left)} R${n(i.dmg.right)}
assist ${q.assist} \xB7 ${i.spec.drive} \xB7 physics ${ct.hz} Hz \xB7 render ${rd.toFixed(0)} fps`}var An=null;function py(){let i=S.track.box,e=156/Math.max(i.maxx-i.minx,i.maxz-i.minz),t=90-(i.minx+i.maxx)/2*e,n=90-(i.minz+i.maxz)/2*e,s=document.createElement("canvas");s.width=s.height=180;let r=s.getContext("2d");r.lineJoin="round",r.beginPath(),S.track.path.forEach((o,l)=>l?r.lineTo(o.x*e+t,o.z*e+n):r.moveTo(o.x*e+t,o.z*e+n)),r.closePath(),r.strokeStyle="rgba(23,24,28,.85)",r.lineWidth=9,r.stroke(),r.strokeStyle="#f3f4f6",r.lineWidth=3.5,r.stroke();let a=S.track.path[0];r.fillStyle="#e3262e",r.fillRect(a.x*e+t-3,a.z*e+n-3,6,6),An={bg:s,s:e,ox:t,oz:n,ctx:j("mini").getContext("2d")}}var ir={},Gn=(i,e)=>{ir[i]!==e&&(ir[i]=e,j(i).textContent=e)};function my(i){let e=S.player,t=yd(),n=t.indexOf(e)+1;Gn("hPos",String(n)),Gn("hLapN",String(vn(e.lap+1,1,S.laps))),Gn("hTime",Hn(e.lap<0?0:Math.max(0,S.t-e.lapStart)*1e3)),Gn("hSpeed",String(Math.round(Math.abs(e.vf)*(q.units==="mph"?2.237:3.6)))),Gn("hGear",e.gear===0?"R":String(e.gear));let s=(l,c,h)=>{let u=Math.round(h*100);if(ir[l]!==u){ir[l]=u;let d=j(l);d.style.setProperty("--v",u),d.classList.toggle("bad",u<30),j(c).textContent=u}};s("gBody","hBody",e.health),s("gFuel","hFuel",e.fuel),s("gTyre","hTyre",e.tyre),S.arc&&(j("hNitro").style.width=(e.nitro*100).toFixed(0)+"%",Gn("hDriftPts",String(S.drift)),Gn("hCombo",S.D.combo>5?"+"+Math.round(S.D.combo)+"  \xD7"+S.D.mult:""));let r=[...new Set([0,n-2,n-1,n].filter(l=>l>=0&&l<t.length))],a=r.map(l=>l+t[l].name).join();a!==S.orderKey&&S.cars.length>1&&(S.orderKey=a,j("order").innerHTML=r.map((l,c)=>{let h=t[l];return`<li class="${h===e?"me":""}${c&&r[c-1]!==l-1?" gap":""}" style="border-left-color:${ca(h.color)}"><span>${l+1}</span>${h.name}</li>`}).join(""));let o=An.ctx;o.clearRect(0,0,180,180),o.drawImage(An.bg,0,0),o.fillStyle="#19a7ce",o.fillRect(S.pit.x*An.s+An.ox-3.5,S.pit.z*An.s+An.oz-3.5,7,7);for(let l of S.cars)l!==e&&(o.fillStyle=ca(l.color),o.strokeStyle="#17181c",o.lineWidth=1.5,o.beginPath(),o.arc(l.x*An.s+An.ox,l.z*An.s+An.oz,4.5,0,7),o.fill(),o.stroke());o.fillStyle="#ffffff",o.strokeStyle="#17181c",o.lineWidth=2,o.beginPath(),o.arc(e.x*An.s+An.ox,e.z*An.s+An.oz,6,0,7),o.fill(),o.stroke()}function gy(){S.state="over";let i=S.player,e=yd(),t=e.indexOf(i)+1,n=S.track.def.id,s=0,r,a="",o=i.laps.length?Math.min(...i.laps):null;if(S.mode==="race")s=Math.round([600,420,300,220,160,120][t-1]*[.8,1,1.3][S.diff])+Math.round(S.drift/40),r=t===1?"Winner":ey[t-1]+" place",a="Best lap "+Hn(o);else if(S.mode==="online")s=(t===1?500:220)+Math.round(S.drift/40),r=t===1?"You win":"You lose",a="Best lap "+Hn(o);else if(S.mode==="trial")s=150+(S.newBest?300:0),r=Hn(o),a=S.newBest?"New personal best":"Personal best "+Hn(q.best[n]);else{let g=q.bestDrift[n]||0,b=S.drift>g;b&&(q.bestDrift[n]=S.drift),s=Math.round(S.drift/15)+(b?200:0),r=S.drift.toLocaleString()+" pts",a=b?"New drift record":"Record "+g.toLocaleString()}let l=q.stats,c=(g,b)=>{l[g]=(l[g]||0)+b};c("races",1),c("coins",S.coins||0),c("pits",S.pits),c("overtakes",S.overtakes),c("km",Math.max(0,i.prog)*S.track.spacing/1e3),S.cars.length>1&&(t===1&&c("wins",1),t<=3&&c("podiums",1),t===1&&S.crashes===0&&c("clean",1)),l.driftBest=Math.max(l.driftBest||0,S.drift);let h=-1;if(qc=!0,S.story){let g=S.story,b=q.story[g.id]||0;h=Qp(g.goal,{pos:t,bestLap:o,drift:S.drift}),qc=h>0,s=h*250+(h>0&&!b?400:0)+Math.round(S.drift/40)+(g.final&&h>0&&!b?5e3:0),h>b&&(q.story[g.id]=h),r=h>0?g.final?"Champion":"Event cleared":"Not this time",a=(h>0?g.win:g.lose)+(h>0&&h<3?"  Next star: "+kc({type:g.goal.type,v:[g.goal.v[h]]}).toLowerCase()+".":""),j("resTitle").textContent=r,j("resSub").textContent=a}if(S.gp&&q.gp){let g=q.gp;e.forEach((m,f)=>{g.pts[m.name]=(g.pts[m.name]||0)+xy[f]}),g.round++;let b=Object.entries(g.pts).sort((m,f)=>f[1]-m[1]);if(r=pt("Round")+" "+g.round+"/"+Kc.length+" \xB7 "+(t===1?pt("Winner"):"P"+t),g.round>=Kc.length){g.done=!0;let m=b[0][0]===i.name;m&&(s+=3e3,c("gpWins",1)),r=m?pt("Grand Prix champion"):pt("Grand Prix finished")+" \xB7 P"+(b.findIndex(f=>f[0]===i.name)+1)}a=pt("Standings")+":  "+b.slice(0,6).map((m,f)=>f+1+". "+m[0]+" "+m[1]).join("   "),j("resTitle").textContent=r,j("resSub").textContent=a}if(j("resStars").textContent=h<0?"":"\u2605".repeat(h)+"\u2606".repeat(3-h),S.daily&&q.daily!==S.daily.key&&(S.mode!=="race"||t<=3)){let g=new Date(Date.now()-864e5),b=g.getFullYear()+"-"+(g.getMonth()+1)+"-"+g.getDate();q.streak=q.daily===b?q.streak+1:1,q.daily=S.daily.key;let m=400+Math.min(q.streak,7)*100;s+=m,Wn("Daily challenge done: +"+m+" \xB7 streak "+q.streak)}let u=Bc(q.xp);q.xp+=60+Math.round(s/4);let d=Bc(q.xp);d>u&&(s+=d*200,setTimeout(()=>Wn("Level "+d+" \u2014 bonus "+d*200+" credits"),2400)),s+=S.coins||0,q.credits+=s,Zt(),setTimeout(bm,1200),j("resTitle").textContent=r,j("resSub").textContent=a,j("resReward").textContent="+"+s+" credits";let p=e[0].finishTime;j("resTable").innerHTML=S.cars.length>1?e.map((g,b)=>`<tr class="${g===i?"me":""}"><td>${b+1}</td><td>${g.name}</td><td>${g.spec.name}</td><td>${g.finished?b?"+"+((g.finishTime-p)/1e3).toFixed(2):Hn(g.finishTime):"still racing"}</td></tr>`).join(""):i.laps.map((g,b)=>`<tr class="${g===o?"me":""}"><td>Lap ${b+1}</td><td>${Hn(g)}</td></tr>`).join("")+`<tr><td>Drift score</td><td>${S.drift.toLocaleString()}</td></tr>`,j("againBtn").textContent=S.mode==="online"?"Back to lobby":S.gp?pt(q.gp&&q.gp.done?"Finish":"Next round"):S.story?qc?"Continue":"Try again":pt("Race again"),_t("results",!0)}var Hc=0,ad=0;function by(i){if(Hc+=i,ad++,Hc<3)return;let e=ad/Hc;Hc=ad=0,!(q.gfx!=="auto"||e>33)&&(is==="high"?(xo("medium"),Wn("Graphics lowered to keep the frame rate smooth")):Rs>1?(Rs=Math.max(1,Rs-.35),gd()):is==="medium"&&e<27&&xo("low"))}var ym=()=>{let i=hi.findIndex(e=>!q.story[e.id]);return i<0?hi.length-1:i},Kc=["nile","giza","corniche","midnight"],xy=[25,18,15,12,10,8,6,4,2,1,0,0];function _y(){let i=Dt.filter(n=>n.id!==q.car).sort(()=>Math.random()-.5),e=[...hm].sort(()=>Math.random()-.5),t=[.8,.89,.97][ue.diff];q.gp={round:0,pts:{},done:!1,rivals:i.slice(0,7).map((n,s)=>({name:e[s],car:n.id,skill:t+(6-s)*.01,paint:na[(s*3+2)%na.length]}))},Zt()}var Mm=()=>({mode:"race",gp:!0,track:Kc[q.gp.round],laps:3,diff:ue.diff,rivals:q.gp.rivals,rules:q.rules,weather:q.gp.round===2?"rain":"clear"}),Wc="",od=!1;async function vy(){if(ns()||j("menu").hidden)return;if((ue.tab==="garage"||ue.tab==="tune"?"garage":"show")==="garage"){fd++,S&&yo(),Wc!=="garage"&&($c(null),Li.visible=!0),Wc="garage";return}if(!(S||od)){Wc="show",od=!0,Li.visible=!1;try{await Di({attract:!0,mode:"race",track:"midnight",laps:99,diff:2,weather:"clear",nRivals:7,rules:"circuit"})}finally{od=!1}}}var ue={rivals:5,wx:"random",tab:"quick",ev:0,ch:0,mode:"race",track:0,laps:3,diff:1,car:Math.max(0,Dt.findIndex(i=>i.id===q.car))},ld={};async function yy(i){if(ld[i.id])return ld[i.id];let e;i.type==="glb"?e=(await yc("lider.json")).path.map(s=>({x:s[0]*2.2,z:s[1]*2.2})):e=Tc(i.pts,5);let t=0;return e.forEach((n,s)=>{let r=e[(s+1)%e.length];t+=Math.hypot(r.x-n.x,r.z-n.z)}),ld[i.id]={pts:e,len:t}}async function vt(){let i=_n[ue.track],e=Dt[ue.car],t=q.owned.includes(e.id),n=ue.mode==="online";j("credits").textContent=q.credits.toLocaleString(),j("name").value=q.name;let s=ue.tab==="career";for(let _ of document.querySelectorAll("#tabs button"))_.classList.toggle("on",_.dataset.tab===ue.tab);for(let _ of document.querySelectorAll("#modeSeg button"))_.classList.toggle("on",_.dataset.mode===ue.mode);let r=ue.tab==="quick"||ue.tab==="online",a=ue.mode==="gp"&&ue.tab==="quick";_t("tabCareer",!1),_t("tabQuick",ue.tab==="quick"),_t("tabGarage",ue.tab==="garage"),_t("tabTune",ue.tab==="tune"),_t("tabSettings",ue.tab==="settings"),document.querySelector(".card.track").hidden=!r||a,_t("optsRow",r&&!a),_t("startBtn",r),_t("gpBox",a),_t("rulesSeg",ue.tab==="quick"),_t("daily",ue.tab==="quick"),document.querySelector(".garage").hidden=ue.tab==="settings"||ue.tab==="trophies",j("rivals").textContent=ue.rivals;for(let _ of document.querySelectorAll("#wxSeg button"))_.classList.toggle("on",_.dataset.w===ue.wx);for(let _ of document.querySelectorAll("#langSeg button"))_.classList.toggle("on",_.dataset.l===q.lang);for(let _ of document.querySelectorAll("#zoomSeg button"))_.classList.toggle("on",+_.dataset.z===q.zoom);for(let _ of document.querySelectorAll("#unitSeg button"))_.classList.toggle("on",_.dataset.u===q.units);if(j("musicVol").value=q.mvol*100,j("sfxVol").value=q.svol*100,Gn("hUnit",q.units==="mph"?"mph":"km/h"),a){let _=q.gp&&!q.gp.done?q.gp:null;j("gpBox").innerHTML="<h2>"+pt("Grand Prix")+"</h2><p>"+pt("Four rounds, eight drivers, points for every finish. The third round is wet.")+"</p><ol>"+Kc.map((x,w)=>{let T=_n.find(R=>R.id===x);return'<li class="'+(_&&w<_.round?"done":_&&w===_.round?"on":"")+'">'+(q.lang==="ar"?T.ar:T.name)+"</li>"}).join("")+"</ol>"+(_?'<p class="meta">'+Object.entries(_.pts).sort((x,w)=>w[1]-x[1]).slice(0,4).map((x,w)=>w+1+". "+x[0]+" "+x[1]).join(" \xB7 ")+"</p>":"")}{let _=Dt[ue.car],x=_o(_.id),w=(A,C)=>C.map((I,F)=>'<button data-k="'+A+'" data-v="'+F+'" class="'+(x[A]===F?"on":"")+'" style="background:'+(I?ca(I):"transparent")+'">'+(I?"":"\xD7")+"</button>").join(""),T=(A,C)=>C.map((I,F)=>'<button data-k="'+A+'" data-v="'+F+'" class="'+(x[A]===F?"on":"")+'">'+pt(I)+"</button>").join("");j("lookRows").innerHTML="<h3>"+pt("Rear wing")+'</h3><div class="seg wide four">'+T("wing",["None","Lip","GT wing","Race wing"])+"</div><h3>"+pt("Front splitter")+'</h3><div class="seg wide two">'+T("split",["Off","On"])+"</div><h3>"+pt("Wheels")+'</h3><div class="paints">'+w("rim",Ac)+"</div><h3>"+pt("Glass")+'</h3><div class="paints">'+w("tint",Qu)+"</div><h3>"+pt("Underglow")+'</h3><div class="paints">'+w("glow",ed)+"</div>";let R=Jc(_.id),M=[["gear","Gearing","Top speed","Acceleration"],["aero","Downforce","Less drag","More grip"],["brake","Brake bias","Rearward","Forward"],["susp","Balance","Agile","Stable"]];j("tuneRows").innerHTML=M.map(([A,C,I,F])=>'<div class="trow2"><b>'+pt(C)+"</b><span>"+pt(I)+'</span><button data-k="'+A+'" data-d="-1">\u2212</button><i>'+[-2,-1,0,1,2].map(z=>'<u class="'+(z===R[A]?"on":"")+'"></u>').join("")+'</i><button data-k="'+A+'" data-d="1">+</button><span>'+pt(F)+"</span></div>").join("")+"<h3>"+pt("Tyre compound")+'</h3><div class="seg wide">'+["soft","medium","hard"].map(A=>'<button data-c="'+A+'" class="'+(R.tyre===A?"on":"")+'">'+pt(A[0].toUpperCase()+A.slice(1))+"</button>").join("")+'</div><p class="note">'+pt("Soft tyres grip more and wear faster. Hard tyres last longer. Settings apply to this car only.")+"</p>"}let o=Bc(q.xp);j("lvl").textContent=o,j("xpBar").style.width=vn((q.xp-zc(o))/(zc(o+1)-zc(o)),0,1)*100+"%",j("assistBtn").textContent="Assist: "+q.assist[0].toUpperCase()+q.assist.slice(1);for(let _ of document.querySelectorAll("#rulesSeg button"))_.classList.toggle("on",_.dataset.r===q.rules);j("gfxBtn").textContent="Graphics: "+q.gfx[0].toUpperCase()+q.gfx.slice(1),j("gasBtn").hidden=!Ni,j("gasBtn").textContent="Auto gas "+(q.autoGas?"on":"off");let l=sd(_n);if(j("dailyName").textContent=l.label+" \xB7 "+l.trackName+(l.weather==="rain"?" \xB7 rain":""),j("dailyInfo").textContent=q.daily===l.key?"Done \xB7 streak "+q.streak:"+"+(400+Math.min((q.streak||0)+1,7)*100),j("daily").classList.toggle("done",q.daily===l.key),s){let _=es[ue.ch];j("chNum").textContent="Chapter "+(ue.ch+1)+" of "+es.length,j("chName").textContent=_.name,j("chText").textContent=_.text,j("events").innerHTML=_.events.map(x=>{let w=hi.indexOf(x),T=w===0||q.story[hi[w-1].id]>0,R=q.story[x.id]||0;return`<li data-i="${w}" class="${w===ue.ev?"on":""} ${T?"":"locked"}"><span>${w+1}</span><div><b>${x.title}</b><small>${_n.find(M=>M.id===x.track).name} \xB7 ${kc(x.goal)}${x.weather==="rain"?" \xB7 rain":""}</small></div><em>${T?"\u2605".repeat(R)+"\u2606".repeat(3-R):"Locked"}</em></li>`}).join("")}for(let _ of document.querySelectorAll("#diff button"))_.classList.toggle("on",+_.dataset.d===ue.diff);j("diff").style.visibility=ue.mode==="race"||ue.mode==="gp"?"visible":"hidden",j("trkName").textContent=q.lang==="ar"?i.ar:i.name,j("trkBlurb").textContent=pt(i.blurb),j("laps").textContent=ue.laps,j("trkBest").textContent=ue.mode==="drift"?q.bestDrift[i.id]?"Record "+q.bestDrift[i.id].toLocaleString()+" pts":"":q.best[i.id]?"Best "+Hn(q.best[i.id]):"No lap set",j("carName").textContent=q.lang==="ar"?e.ar:e.name,j("carBlurb").textContent=e.cls+(q.lang==="ar"?"":". "+e.blurb),j("stSpeed").style.width=(e.top-40)/30*100+"%",j("stAcc").style.width=(e.acc-6)/7*100+"%",j("stGrip").style.width=(e.grip-.9)/.55*100+"%",j("stDrift").style.width=vn((1.06-e.rear)*4+e.loose*.6,.1,1)*100+"%",j("paints").innerHTML=na.map(_=>`<button style="background:${ca(_)}" data-p="${_}" class="${Zc(e.id)===_?"on":""}" aria-label="Paint ${ca(_)}"></button>`).join("");let c=Mo(e.id);j("ups").innerHTML=t?pm.map(([_,x])=>{let w=c[_],T=mm(e,w);return`<button data-k="${_}" ${w>=3||q.credits<T?"disabled":""}><b>${x}</b><i>${"\u25CF".repeat(w)}${"\u25CB".repeat(3-w)}</i><small>${w>=3?"Max":T.toLocaleString()}</small></button>`}).join(""):"",_t("tabTrophies",ue.tab==="trophies"),ue.tab==="trophies"&&(j("trophies").innerHTML=gm.map(_=>{let x=_.get(),w=x>=_.need;return`<li class="${w?"done":""}"><b>${_.name}</b><small>${_.desc}</small><em>${w?"\u2713":Math.floor(x)+" / "+_.need}</em></li>`}).join("")),j("buyBtn").hidden=t,j("buyBtn").textContent=pt("Unlock for")+" "+e.price.toLocaleString(),j("buyBtn").disabled=q.credits<e.price,_t("onlineBox",n),_t("lobby",!!dt),_t("onlineJoin",!dt);let h=j("startBtn");if(!t)h.disabled=!0,h.textContent=pt("Car locked");else if(n)h.disabled=!(dt&&Et&&Fi),h.textContent=pt(dt?Et?Fi?"Start duel":"Host starts the race":"Waiting for rival":"Join a room first");else if(s){let _=ue.ev,x=_===0||q.story[hi[_-1].id]>0;h.disabled=!x,h.textContent=x?"Start event":"Event locked"}else h.disabled=!1,h.textContent=ue.mode==="gp"?q.gp&&!q.gp.done?pt("Continue")+" \xB7 "+pt("Round")+" "+(q.gp.round+1)+"/4":pt("Start Grand Prix"):pt({race:"Start race",trial:"Start time trial",drift:"Start drift attack"}[ue.mode]);dt||(j("onlineMsg").textContent=aa?"Create a room and send the 5-letter code to a friend.":"Supabase keys are not set in config.js yet, so rooms only connect between tabs of this browser (handy for testing)."),Em(),Sy(),vy();let u=await yy(i);if(_n[ue.track]!==i)return;j("trkLen").textContent=(u.len/1e3).toFixed(2)+" km";let d=j("trkMap").getContext("2d");d.clearRect(0,0,120,90);let p=1e9,g=-1e9,b=1e9,m=-1e9;for(let _ of u.pts)p=Math.min(p,_.x),g=Math.max(g,_.x),b=Math.min(b,_.z),m=Math.max(m,_.z);let f=Math.min(104/(g-p),74/(m-b));d.beginPath(),u.pts.forEach((_,x)=>{let w=60+(_.x-(p+g)/2)*f,T=45+(_.z-(b+m)/2)*f;x?d.lineTo(w,T):d.moveTo(w,T)}),d.closePath(),d.lineJoin="round",d.strokeStyle="#f3f4f6",d.lineWidth=3,d.stroke();let v=j("board");v.hidden=!0,aa&&ue.mode!=="drift"&&$p(i.id).then(_=>{_n[ue.track]!==i||!_||!_.length||(v.innerHTML=_.map((x,w)=>`<li><span>${w+1}. ${x.name.replace(/[<>&]/g,"")}</span><b>${Hn(x.ms)}</b></li>`).join(""),v.hidden=!1)})}var Qc=(i,e,t)=>{ue[i]=(ue[i]+t+e)%e};j("trkPrev").onclick=()=>{Qc("track",_n.length,-1),ue.laps=_n[ue.track].laps,vt()};j("trkNext").onclick=()=>{Qc("track",_n.length,1),ue.laps=_n[ue.track].laps,vt()};var eh=()=>{let i=Dt[ue.car];q.owned.includes(i.id)&&(q.car=i.id,Zt(),th()),vo(),vt()};j("carPrev").onclick=()=>{Qc("car",Dt.length,-1),eh()};j("carNext").onclick=()=>{Qc("car",Dt.length,1),eh()};j("lapMinus").onclick=()=>{ue.laps=Math.max(1,ue.laps-1),vt()};j("lapPlus").onclick=()=>{ue.laps=Math.min(15,ue.laps+1),vt()};j("tabs").onclick=i=>{let e=i.target.closest("button");e&&(ue.tab=e.dataset.tab,ue.mode=ue.tab==="online"?"online":ue.mode==="online"?"race":ue.mode,(ue.tab==="garage"||ue.tab==="tune")&&vo(),vt())};j("modeSeg").onclick=i=>{let e=i.target.closest("button");e&&(ue.mode=e.dataset.mode,vt())};j("chPrev").onclick=()=>{ue.ch=(ue.ch+es.length-1)%es.length,ue.ev=hi.indexOf(es[ue.ch].events[0]),vt()};j("chNext").onclick=()=>{ue.ch=(ue.ch+1)%es.length,ue.ev=hi.indexOf(es[ue.ch].events[0]),vt()};j("events").onclick=i=>{let e=i.target.closest("li");e&&!e.classList.contains("locked")&&(ue.ev=+e.dataset.i,vt())};j("gfxBtn").onclick=()=>{let i=["auto","high","medium","low"];q.gfx=i[(i.indexOf(q.gfx)+1)%4],Zt(),xo(q.gfx==="auto"?Ni?"medium":"high":q.gfx),vt()};j("ups").onclick=i=>{let e=i.target.closest("button");if(!e||e.disabled)return;let t=Dt[ue.car],n=Mo(t.id),s=mm(t,n[e.dataset.k]);q.credits<s||(q.credits-=s,n[e.dataset.k]++,Zt(),th(),e.dataset.k==="eng"&&(Ve.quiet=!1,Ve.turboDemo()),Ve.init(),Ve.wrench(),vo(),vt())};var My={off:"Assist off: no automatic counter-steer, no throttle cut. Slides are yours to catch.",low:"Assist low: half-strength counter-steer in a slide and a gentle throttle cut past 24\xB0 of slip.",full:"Assist full: the car counter-steers for you in a slide and eases the throttle before it becomes a spin."};function Sy(){document.documentElement.lang=q.lang;for(let i of["menu","results","pause"])j(i).dir=q.lang==="ar"?"rtl":"ltr";for(let i of document.querySelectorAll("[data-t]"))i.dataset.t||(i.dataset.t=i.textContent.trim()),i.textContent=pt(i.dataset.t)}var wy=()=>{Zt(),th(),vo(),vt()};j("lookRows").onclick=i=>{let e=i.target.closest("button");e&&(_o(Dt[ue.car].id)[e.dataset.k]=+e.dataset.v,wy())};j("tuneRows").onclick=i=>{let e=i.target.closest("button");if(!e)return;let t=Jc(Dt[ue.car].id);e.dataset.c?t.tyre=e.dataset.c:t[e.dataset.k]=vn(t[e.dataset.k]+ +e.dataset.d,-2,2),Zt(),vt()};j("langSeg").onclick=i=>{let e=i.target.closest("button");e&&(q.lang=e.dataset.l,Zt(),vt())};j("zoomSeg").onclick=i=>{let e=i.target.closest("button");e&&(q.zoom=+e.dataset.z,Zt(),vt())};j("unitSeg").onclick=i=>{let e=i.target.closest("button");e&&(q.units=e.dataset.u,Zt(),vt())};j("wxSeg").onclick=i=>{let e=i.target.closest("button");e&&(ue.wx=e.dataset.w,vt())};j("rivMinus").onclick=()=>{ue.rivals=Math.max(1,ue.rivals-2),vt()};j("rivPlus").onclick=()=>{ue.rivals=Math.min(11,ue.rivals+2),vt()};j("musicVol").oninput=i=>{q.mvol=Ve.mvol=i.target.value/100,Zt(),Ve.init(),Ve.music(!ns())};j("sfxVol").oninput=i=>{q.svol=Ve.vol=i.target.value/100,Zt(),Ve.setMuted(q.muted)};j("resetBtn").onclick=()=>{if(confirm(pt("Erase all progress, cars and settings?"))){try{localStorage.removeItem(md)}catch{}location.reload()}};j("assistBtn").onclick=()=>{let i=["full","low","off"];q.assist=i[(i.indexOf(q.assist)+1)%3],Zt(),Wn(My[q.assist]),vt()};j("rulesSeg").onclick=i=>{let e=i.target.closest("button");e&&(q.rules=e.dataset.r,Zt(),Wn(q.rules==="circuit"?"Circuit rules: pure racing. Fuel, tyres, damage and pit stops.":"Arcade rules: adds nitro, pickups, slipstream and random events."),vt())};j("copyLink").onclick=()=>{let i=location.origin+location.pathname+"?room="+dt.code;(navigator.clipboard?navigator.clipboard.writeText(i):Promise.reject()).then(()=>Wn("Invite link copied"),()=>prompt("Copy this invite link",i))};j("gasBtn").onclick=()=>{q.autoGas=!q.autoGas,Zt(),vt()};j("daily").onclick=()=>{let i=sd(_n);Ve.init(),Cn={mode:i.mode,track:i.track,laps:3,diff:1,weather:i.weather,daily:i},Di(Cn)};var Ty={"Amm Saber":"#ffc21a",Zizo:"#e3262e","Captain Nadia":"#19a7ce","El Basha":"#f3f4f6",Hassan:"#2fb457",Hussein:"#2fb457"},ui=null;function Ey(i){ui={ev:i,i:0},_t("story",!0),Sm()}function Sm(){let[i,e]=ui.ev.intro[ui.i];j("stWho").textContent=i,j("stText").textContent=e,j("stEvent").textContent=ui.ev.title+" \xB7 "+kc(ui.ev.goal),j("stFace").textContent=i[0],j("stFace").style.background=Ty[i]||"#a5a9b4",j("stNext").textContent=ui.i===ui.ev.intro.length-1?"Start":"Next"}function wm(){let i=ui.ev;ui=null,_t("story",!1),Cn={mode:i.mode,track:i.track,laps:i.laps,diff:i.diff??1,weather:i.weather||"clear",rivals:i.rivals,story:i},Di(Cn)}j("stNext").onclick=()=>{Ve.init(),++ui.i>=ui.ev.intro.length?wm():Sm()};j("stSkip").onclick=wm;j("diff").onclick=i=>{let e=i.target.closest("button");e&&(ue.diff=+e.dataset.d,vt())};j("paints").onclick=i=>{let e=i.target.closest("button");e&&(q.paint[Dt[ue.car].id]=+e.dataset.p,Zt(),eh())};j("buyBtn").onclick=()=>{let i=Dt[ue.car];q.credits>=i.price&&!q.owned.includes(i.id)&&(q.credits-=i.price,q.owned.push(i.id),Ve.init(),Ve.beep(880,.3),Wn(i.name+" unlocked"),eh())};j("name").onchange=i=>{q.name=(i.target.value.trim()||q.name).slice(0,16),Zt(),th(),vt()};j("muteBtn").onclick=()=>{Ve.init(),bd(!q.muted),Ve.music(!ns())};addEventListener("pointerdown",()=>{Ve.ctx||(Ve.init(),Ve.music(!ns()))},{once:!1});j("startBtn").onclick=()=>{if(ue.tab==="career")return Ve.init(),Ey(hi[ue.ev]);if(ue.mode==="gp"&&ue.tab==="quick")return Ve.init(),(!q.gp||q.gp.done)&&_y(),Cn=Mm(),Di(Cn);let i={mode:ue.mode,track:_n[ue.track].id,laps:ue.laps,diff:ue.diff,rules:ue.mode==="online"?"circuit":q.rules,nRivals:ue.rivals,weather:ue.mode==="online"?void 0:ue.wx};if(ue.mode==="online"){if(!(dt&&Et&&Fi))return;i.rainAt=Math.random()<.3?18+Math.random()*30:1e9,dt.send({k:"start",track:i.track,laps:i.laps,rainAt:i.rainAt})}if(Ni)try{document.documentElement.requestFullscreen?.().then(()=>screen.orientation?.lock?.("landscape").catch(()=>{})).catch(()=>{})}catch{}Cn=i,Di(i)};var Cn=null,qc=!0;j("pauseBtn").onclick=vd;j("resumeBtn").onclick=vd;j("restartBtn").onclick=()=>{let i=Cn;yo(),Di(i)};j("quitBtn").onclick=ha;j("menuBtn").onclick=ha;j("againBtn").onclick=()=>{if(Cn.gp)return!q.gp||q.gp.done?ha():(Cn=Mm(),Di(Cn));if(Cn.mode==="online"||Cn.story&&qc)return ha();let i=Cn;yo(),Di(i)};var dt=null,Et=null,Fi=!1,Md=!1;async function Sd(i){if(!/^[A-Z0-9]{5}$/.test(i)){j("onlineMsg").textContent="Room codes are 5 letters or digits.";return}Ve.init(),j("onlineMsg").textContent="Connecting\u2026";let e=new po;e.onPeers=am,e.onMessage=Ry;try{await e.join(i,wd())}catch(t){j("onlineMsg").textContent=t.message;return}dt=e,Fi=!0,Et=null,j("lobbyCode").textContent=i,j("onlineMsg").textContent="Share the code. The race starts when the host presses start.",vt(),am(dt.peers)}function Tm(i){dt&&dt.leave(),dt=null,Et=null,S&&S.mode==="online"&&ha(),vt(),i&&(j("onlineMsg").textContent=i)}function am(i){if(!dt)return;let e=[dt.meta,...Object.values(i)].sort((n,s)=>n.t-s.t||(n.id<s.id?-1:1));if(e.indexOf(dt.meta)>1)return Tm("That room already has two drivers.");let t=Et;Et=e.find(n=>n.id!==dt.id)||null,Fi=e[0]===dt.meta,t&&!Et&&S&&S.mode==="online"&&Wn("Your rival left the race"),!t&&Et&&!ns()&&Wn(Et.name+" joined"),ns()||vt()}var wd=()=>({name:q.name,car:q.car,paint:Zc(q.car),up:{...Mo(q.car)},look:{..._o(q.car)}}),Td=i=>i.car+"|"+i.paint+"|"+JSON.stringify(i.up||{})+JSON.stringify(i.look||{});function th(){if(!dt)return;let i=wd();dt.setMeta(i),dt.send({k:"me",i})}function Ay(){let i=S.remote,e=Dt.find(n=>n.id===Et.car)||Dt[0],t=new ws(e,Et.paint??e.color,Et.name||"Rival",Et.up,Et.look);for(let n of["x","z","th","px","pz","pth","vx","vz","r","y","nb","idx","prog","lap","laps","lapStart","finished","finishTime","wrong"])t[n]=i[n];t.isRemote=!0,t.look=Td(Et),t.noNitro=i.noNitro,S.cars[S.cars.indexOf(i)]=t,S.remote=t,Tt.remove(i.root),i.dispose(),Tt.add(t.root),S.orderKey=""}function Em(){if(!dt)return;let i=(e,t)=>`<li><i style="background:${ca(e.paint??8947848)}"></i>${e.name}${t?" (you)":""} \u2014 ${(Dt.find(n=>n.id===e.car)||Dt[0]).name}${e.up&&Object.values(e.up).some(n=>n)?" <small>("+pm.filter(([n])=>e.up[n]).map(([n,s])=>s+" "+e.up[n]).join(", ")+")</small>":""}${(t?Fi:!Fi)?" \xB7 host":""}</li>`;j("lobbyList").innerHTML=i(dt.meta,!0)+(Et?i(Et,!1):"<li>Waiting for a second driver\u2026</li>")}function Ry(i){if(i.k==="start"&&!ns()){let e={mode:"online",track:i.track,laps:i.laps,diff:1,rainAt:i.rainAt};Cn=e,Di(e)}else if(i.k==="loaded")Md=!0,_d();else if(i.k==="go")jc();else if(i.k==="s"&&S&&S.remote)S.remote.netApply(i.p,performance.now());else if(i.k==="me"&&Et)Object.assign(Et,i.i),S&&S.remote&&S.remote.look!==Td(Et)?Ay():ns()||Em();else if(i.k==="ping")dt.send({k:"pong",t:i.t});else if(i.k==="pong"&&S)S.ping=S.ping==null?performance.now()-i.t:S.ping+(performance.now()-i.t-S.ping)*.3;else if(i.k==="d"&&S&&S.remote){let e=S.remote;e.hitL=i.l,e.hitN=i.n,e.hitX=e.x,e.hitZ=e.z,e.damage(i.p),e.impactFX(S.fx,S.track,i.p)}else i.k==="fix"&&S&&S.remote?(S.remote.repair(),S.remote.wetTyres=!!i.w):i.k==="fin"&&S&&S.remote&&(S.remote.finished=!0,S.remote.finishTime=i.t,S.player.finished||dn(S.remote.name+" finished",!0,1500))}j("createRoom").onclick=()=>Sd(po.makeCode());j("joinRoom").onclick=()=>Sd(j("roomCode").value.trim().toUpperCase());j("leaveRoom").onclick=()=>Tm("");var Yc=performance.now();function Am(i){requestAnimationFrame(Am);let e=Math.max(0,Math.min(.05,(i-Yc)/1e3));if(Yc=i,S){if(!nr)try{vm(e)}catch(t){window.__errOnce||(window.__errOnce=1,console.error("RACE ERROR "+t.message+" cars="+S.cars.length+" t="+S.t+" state="+S.state+" mode="+S.mode+" attract="+S.attract+" keys="+Object.keys(S).slice(0,12)))}}else if(As){ud+=e*.35,As.root.rotation.y=ud;let t=innerWidth<820;mt.fov=38,mt.updateProjectionMatrix();let n=q.lang==="ar"?-1:1;mt.position.set(t?0:-1.6*n,3,t?13:11.5),mt.lookAt(t?0:-2.9*n,t?1.8:-.4,0),un.position.set(6,12,8),un.target.position.set(0,0,0)}ty(e)}(async function(){$c(null),Ve.mvol=q.mvol,Ve.vol=q.svol,bd(q.muted),ue.ev=ym(),ue.ch=hi[ue.ev].ci,await jp(),vo(),vt(),requestAnimationFrame(Am),window.__booted=!0;let e=new URLSearchParams(location.search).get("room");e&&(ue.tab="online",ue.mode="online",vt(),Sd(e.toUpperCase())),window.__game={get R(){return S},touch:Fn,readInput:cm,TUNE:ct,physics:fm,get acc(){return la},audio:Ve,startEvent:_m,checkTrophies:bm,setGfx:xo,get gfx(){return is},sim(t,n=1/60){for(let s=0;s<Math.round(t/n)&&S;s++)vm(n)},CARS:Dt,renderer:yn,sun:un,keys:fn,save:q,startRace:Di,sel:ue,TRACKS:_n}})();})();
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
