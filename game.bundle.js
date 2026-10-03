(()=>{var Pf=0,Xh=1,If=2;var er=1,Lf=2,Xr=3,ki=0,on=1,Wt=2,ri=0,ws=1,An=2,jh=3,Kh=4,Df=5;var tr=100,Ff=101,Nf=102,Uf=103,kf=104,Of=200,Bf=201,zf=202,Hf=203,Yh=204,Jh=205,Gf=206,Vf=207,Wf=208,qf=209,Xf=210,jf=211,Kf=212,Yf=213,Jf=214,al=0,ol=1,ll=2,Ar=3,cl=4,hl=5,ul=6,dl=7,Pl=0,Zf=1,$f=2,bi=0,Qa=1,eo=2,to=3,nr=4,no=5,io=6,so=7,Fh="attached",Qf="detached",Zh=300,Ts=301,ir=302,Il=303,Ll=304,ro=306,Ri=1e3,si=1001,Rr=1002,$t=1003,Dl=1004;var sr=1005;var Qt=1006,jr=1007;var vi=1008;var Wn=1009,$h=1010,Qh=1011,Kr=1012,Fl=1013,_i=1014,Yn=1015,ln=1016,Nl=1017,Ul=1018,Yr=1020,eu=35902,tu=35899,nu=1021,iu=1022,Jn=1023,Ci=1026,Es=1027,kl=1028,Ol=1029,As=1030,Bl=1031;var zl=1033,ao=33776,oo=33777,lo=33778,co=33779,Hl=35840,Gl=35841,Vl=35842,Wl=35843,ql=36196,Xl=37492,jl=37496,Kl=37488,Yl=37489,ho=37490,Jl=37491,Zl=37808,$l=37809,Ql=37810,ec=37811,tc=37812,nc=37813,ic=37814,sc=37815,rc=37816,ac=37817,oc=37818,lc=37819,cc=37820,hc=37821,uc=36492,dc=36494,fc=36495,pc=36283,mc=36284,uo=36285,gc=36286;var Gs=2300,Vs=2301,il=2302,Nh=2303,Uh=2400,kh=2401,Oh=2402,ep=2500;var su=0,fo=1,Jr=2,tp=3200;var po=0,np=1,ss="",Gt="srgb",In="srgb-linear",Ia="linear",vt="srgb";var sl=7680;var ip=519,sp=512,rp=513,ap=514,xc=515,op=516,lp=517,bc=518,cp=519,ru=35044;var au="300 es",mi=2e3,Cr=2001;function Zm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function $m(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Pr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function hp(){let i=Pr("canvas");return i.style.display="block",i}var Xd={},Ir=null;function La(...i){let e="THREE."+i.shift();Ir?Ir("log",e,...i):console.log(e,...i)}function up(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ze(...i){i=up(i);let e="THREE."+i.shift();if(Ir)Ir("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ve(...i){i=up(i);let e="THREE."+i.shift();if(Ir)Ir("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Hs(...i){let e=i.join(" ");e in Xd||(Xd[e]=!0,ze(...i))}function dp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var fp={[al]:ol,[ll]:ul,[cl]:dl,[Ar]:hl,[ol]:al,[ul]:ll,[dl]:cl,[hl]:Ar},Pi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jd=1234567,Ca=Math.PI/180,Ws=180/Math.PI;function gi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Sn[i&255]+Sn[i>>8&255]+Sn[i>>16&255]+Sn[i>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[t&63|128]+Sn[t>>8&255]+"-"+Sn[t>>16&255]+Sn[t>>24&255]+Sn[n&255]+Sn[n>>8&255]+Sn[n>>16&255]+Sn[n>>24&255]).toLowerCase()}function ct(i,e,t){return Math.max(e,Math.min(t,i))}function ou(i,e){return(i%e+e)%e}function Qm(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function eg(i,e,t){return i!==e?(t-i)/(e-i):0}function Pa(i,e,t){return(1-t)*i+t*e}function tg(i,e,t,n){return Pa(i,e,1-Math.exp(-t*n))}function ng(i,e=1){return e-Math.abs(ou(i,e*2)-e)}function ig(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function sg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function rg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function ag(i,e){return i+Math.random()*(e-i)}function og(i){return i*(.5-Math.random())}function lg(i){i!==void 0&&(jd=i);let e=jd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function cg(i){return i*Ca}function hg(i){return i*Ws}function ug(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function dg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function fg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function pg(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),m=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*m,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*m,o*c);break;case"ZYZ":i.set(l*m,l*f,o*h,o*c);break;default:ze("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function pi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function It(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var lu={DEG2RAD:Ca,RAD2DEG:Ws,generateUUID:gi,clamp:ct,euclideanModulo:ou,mapLinear:Qm,inverseLerp:eg,lerp:Pa,damp:tg,pingpong:ng,smoothstep:ig,smootherstep:sg,randInt:rg,randFloat:ag,randFloatSpread:og,seededRandom:lg,degToRad:cg,radToDeg:hg,isPowerOfTwo:ug,ceilPowerOfTwo:dg,floorPowerOfTwo:fg,setQuaternionFromProperEuler:pg,normalize:It,denormalize:pi},Ue=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Tn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],m=r[a+2],x=r[a+3];if(u!==x||l!==d||c!==f||h!==m){let g=l*d+c*f+h*m+u*x;g<0&&(d=-d,f=-f,m=-m,x=-x,g=-g);let p=1-o;if(g<.9995){let b=Math.acos(g),M=Math.sin(b);p=Math.sin(p*b)/M,o=Math.sin(o*b)/M,l=l*p+d*o,c=c*p+f*o,h=h*p+m*o,u=u*p+x*o}else{l=l*p+d*o,c=c*p+f*o,h=h*p+m*o,u=u*p+x*o;let b=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=b,c*=b,h*=b,u*=b}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return e[t]=o*m+h*u+l*f-c*d,e[t+1]=l*m+h*d+c*u-o*f,e[t+2]=c*m+h*f+o*d-l*u,e[t+3]=h*m-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:ze("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Kd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Kd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return hh.copy(this).projectOnVector(e),this.sub(hh)}reflect(e){return this.sub(hh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},hh=new O,Kd=new Tn,We=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],x=s[0],g=s[3],p=s[6],b=s[1],M=s[4],v=s[7],S=s[2],T=s[5],C=s[8];return r[0]=a*x+o*b+l*S,r[3]=a*g+o*M+l*T,r[6]=a*p+o*v+l*C,r[1]=c*x+h*b+u*S,r[4]=c*g+h*M+u*T,r[7]=c*p+h*v+u*C,r[2]=d*x+f*b+m*S,r[5]=d*g+f*M+m*T,r[8]=d*p+f*v+m*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,m=t*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=u*x,e[1]=(s*c-h*n)*x,e[2]=(o*n-s*a)*x,e[3]=d*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Hs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(uh.makeScale(e,t)),this}rotate(e){return Hs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(uh.makeRotation(-e)),this}translate(e,t){return Hs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(uh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},uh=new We,Yd=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jd=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mg(){let i={enabled:!0,workingColorSpace:In,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===vt&&(s.r=Zi(s.r),s.g=Zi(s.g),s.b=Zi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===vt&&(s.r=Er(s.r),s.g=Er(s.g),s.b=Er(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ss?Ia:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Hs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Hs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[In]:{primaries:e,whitePoint:n,transfer:Ia,toXYZ:Yd,fromXYZ:Jd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Gt},outputColorSpaceConfig:{drawingBufferColorSpace:Gt}},[Gt]:{primaries:e,whitePoint:n,transfer:vt,toXYZ:Yd,fromXYZ:Jd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Gt}}}),i}var Ze=mg();function Zi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Er(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var dr,fl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{dr===void 0&&(dr=Pr("canvas")),dr.width=e.width,dr.height=e.height;let s=dr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=dr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Pr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Zi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Zi(t[n]/255)*255):t[n]=Zi(t[n]);return{data:t,width:e.width,height:e.height}}else return ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},gg=0,Lr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:gg++}),this.uuid=gi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(dh(s[a].image)):r.push(dh(s[a]))}else r=dh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function dh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?fl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ze("Texture: Unable to serialize Texture."),{})}var xg=0,fh=new O,an=class i extends Pi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=si,s=si,r=Qt,a=vi,o=Jn,l=Wn,c=i.DEFAULT_ANISOTROPY,h=ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xg++}),this.uuid=gi(),this.name="",this.source=new Lr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(fh).x}get height(){return this.source.getSize(fh).y}get depth(){return this.source.getSize(fh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ze(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ri:e.x=e.x-Math.floor(e.x);break;case si:e.x=e.x<0?0:1;break;case Rr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ri:e.y=e.y-Math.floor(e.y);break;case si:e.y=e.y<0?0:1;break;case Rr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=Zh;an.DEFAULT_ANISOTROPY=1;var Lt=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,v=(f+1)/2,S=(p+1)/2,T=(h+d)/4,C=(u+x)/4,w=(m+g)/4;return M>v&&M>S?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=T/n,r=C/n):v>S?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=w/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=C/r,s=w/r),this.set(n,s,r,t),this}let b=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(g-m)/b,this.y=(u-x)/b,this.z=(d-h)/b,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this.w=ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this.w=ct(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},pl=class extends Pi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new an(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Lr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kt=class extends pl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Da=class extends an{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ml=class extends an{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var je=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,l,c,h,u,d,f,m,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,d,f,m,x,g)}set(e,t,n,s,r,a,o,l,c,h,u,d,f,m,x,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/fr.setFromMatrixColumn(e,0).length(),r=1/fr.setFromMatrixColumn(e,1).length(),a=1/fr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,m=o*h,x=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+m*c,t[5]=d-x*c,t[9]=-o*l,t[2]=x-d*c,t[6]=m+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,m=c*h,x=c*u;t[0]=d+x*o,t[4]=m*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-m,t[6]=x+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,m=c*h,x=c*u;t[0]=d-x*o,t[4]=-a*u,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,m=o*h,x=o*u;t[0]=l*h,t[4]=m*c-f,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=f*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,m=o*l,x=o*c;t[0]=l*h,t[4]=x-d*u,t[8]=m*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+m,t[10]=d-x*u}else if(e.order==="XZY"){let d=a*l,f=a*c,m=o*l,x=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=a*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=o*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bg,e,vg)}lookAt(e,t,n){let s=this.elements;return Xn.subVectors(e,t),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),ms.crossVectors(n,Xn),ms.lengthSq()===0&&(Math.abs(n.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),ms.crossVectors(n,Xn)),ms.normalize(),Lo.crossVectors(Xn,ms),s[0]=ms.x,s[4]=Lo.x,s[8]=Xn.x,s[1]=ms.y,s[5]=Lo.y,s[9]=Xn.y,s[2]=ms.z,s[6]=Lo.z,s[10]=Xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],x=n[6],g=n[10],p=n[14],b=n[3],M=n[7],v=n[11],S=n[15],T=s[0],C=s[4],w=s[8],R=s[12],P=s[1],D=s[5],N=s[9],H=s[13],k=s[2],q=s[6],Q=s[10],X=s[14],oe=s[3],Z=s[7],ne=s[11],se=s[15];return r[0]=a*T+o*P+l*k+c*oe,r[4]=a*C+o*D+l*q+c*Z,r[8]=a*w+o*N+l*Q+c*ne,r[12]=a*R+o*H+l*X+c*se,r[1]=h*T+u*P+d*k+f*oe,r[5]=h*C+u*D+d*q+f*Z,r[9]=h*w+u*N+d*Q+f*ne,r[13]=h*R+u*H+d*X+f*se,r[2]=m*T+x*P+g*k+p*oe,r[6]=m*C+x*D+g*q+p*Z,r[10]=m*w+x*N+g*Q+p*ne,r[14]=m*R+x*H+g*X+p*se,r[3]=b*T+M*P+v*k+S*oe,r[7]=b*C+M*D+v*q+S*Z,r[11]=b*w+M*N+v*Q+S*ne,r[15]=b*R+M*H+v*X+S*se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],x=e[7],g=e[11],p=e[15],b=l*f-c*d,M=o*f-c*u,v=o*d-l*u,S=a*f-c*h,T=a*d-l*h,C=a*u-o*h;return t*(x*b-g*M+p*v)-n*(m*b-g*S+p*T)+s*(m*M-x*S+p*C)-r*(m*v-x*T+g*C)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],x=e[13],g=e[14],p=e[15],b=t*o-n*a,M=t*l-s*a,v=t*c-r*a,S=n*l-s*o,T=n*c-r*o,C=s*c-r*l,w=h*x-u*m,R=h*g-d*m,P=h*p-f*m,D=u*g-d*x,N=u*p-f*x,H=d*p-f*g,k=b*H-M*N+v*D+S*P-T*R+C*w;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let q=1/k;return e[0]=(o*H-l*N+c*D)*q,e[1]=(s*N-n*H-r*D)*q,e[2]=(x*C-g*T+p*S)*q,e[3]=(d*T-u*C-f*S)*q,e[4]=(l*P-a*H-c*R)*q,e[5]=(t*H-s*P+r*R)*q,e[6]=(g*v-m*C-p*M)*q,e[7]=(h*C-d*v+f*M)*q,e[8]=(a*N-o*P+c*w)*q,e[9]=(n*P-t*N-r*w)*q,e[10]=(m*T-x*v+p*b)*q,e[11]=(u*v-h*T-f*b)*q,e[12]=(o*R-a*D-l*w)*q,e[13]=(t*D-n*R+s*w)*q,e[14]=(x*M-m*S-g*b)*q,e[15]=(h*S-u*M+d*b)*q,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,m=r*u,x=a*h,g=a*u,p=o*u,b=l*c,M=l*h,v=l*u,S=n.x,T=n.y,C=n.z;return s[0]=(1-(x+p))*S,s[1]=(f+v)*S,s[2]=(m-M)*S,s[3]=0,s[4]=(f-v)*T,s[5]=(1-(d+p))*T,s[6]=(g+b)*T,s[7]=0,s[8]=(m+M)*C,s[9]=(g-b)*C,s[10]=(1-(d+x))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=fr.set(s[0],s[1],s[2]).length(),o=fr.set(s[4],s[5],s[6]).length(),l=fr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),hi.copy(this);let c=1/a,h=1/o,u=1/l;return hi.elements[0]*=c,hi.elements[1]*=c,hi.elements[2]*=c,hi.elements[4]*=h,hi.elements[5]*=h,hi.elements[6]*=h,hi.elements[8]*=u,hi.elements[9]*=u,hi.elements[10]*=u,t.setFromRotationMatrix(hi),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=mi,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),m,x;if(l)m=r/(a-r),x=a*r/(a-r);else if(o===mi)m=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Cr)m=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=mi,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),m,x;if(l)m=1/(a-r),x=a/(a-r);else if(o===mi)m=-2/(a-r),x=-(a+r)/(a-r);else if(o===Cr)m=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},fr=new O,hi=new je,bg=new O(0,0,0),vg=new O(1,1,1),ms=new O,Lo=new O,Xn=new O,Zd=new je,$d=new Tn,Ii=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ct(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ct(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Zd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $d.setFromEuler(this),this.setFromQuaternion($d,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ii.DEFAULT_ORDER="XYZ";var Fa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},_g=0,Qd=new O,pr=new Tn,qi=new je,Do=new O,ya=new O,yg=new O,Mg=new Tn,ef=new O(1,0,0),tf=new O(0,1,0),nf=new O(0,0,1),sf={type:"added"},Sg={type:"removed"},mr={type:"childadded",child:null},ph={type:"childremoved",child:null},Nt=class i extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_g++}),this.uuid=gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new O,t=new Ii,n=new Tn,s=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new je},normalMatrix:{value:new We}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return pr.setFromAxisAngle(e,t),this.quaternion.multiply(pr),this}rotateOnWorldAxis(e,t){return pr.setFromAxisAngle(e,t),this.quaternion.premultiply(pr),this}rotateX(e){return this.rotateOnAxis(ef,e)}rotateY(e){return this.rotateOnAxis(tf,e)}rotateZ(e){return this.rotateOnAxis(nf,e)}translateOnAxis(e,t){return Qd.copy(e).applyQuaternion(this.quaternion),this.position.add(Qd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ef,e)}translateY(e){return this.translateOnAxis(tf,e)}translateZ(e){return this.translateOnAxis(nf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Do.copy(e):Do.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ya.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qi.lookAt(ya,Do,this.up):qi.lookAt(Do,ya,this.up),this.quaternion.setFromRotationMatrix(qi),s&&(qi.extractRotation(s.matrixWorld),pr.setFromRotationMatrix(qi),this.quaternion.premultiply(pr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ve("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sf),mr.child=e,this.dispatchEvent(mr),mr.child=null):Ve("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sg),ph.child=e,this.dispatchEvent(ph),ph.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sf),mr.child=e,this.dispatchEvent(mr),mr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ya,e,yg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ya,Mg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Nt.DEFAULT_UP=new O(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var wt=class extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}},wg={type:"move"},Dr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(wg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new wt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},pp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gs={h:0,s:0,l:0},Fo={h:0,s:0,l:0};function mh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var be=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ze.workingColorSpace){if(e=ou(e,1),t=ct(t,0,1),n=ct(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=mh(a,r,e+1/3),this.g=mh(a,r,e),this.b=mh(a,r,e-1/3)}return Ze.colorSpaceToWorking(this,s),this}setStyle(e,t=Gt){function n(r){r!==void 0&&parseFloat(r)<1&&ze("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ze("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){let n=pp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}copyLinearToSRGB(e){return this.r=Er(e.r),this.g=Er(e.g),this.b=Er(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return Ze.workingToColorSpace(wn.copy(this),e),Math.round(ct(wn.r*255,0,255))*65536+Math.round(ct(wn.g*255,0,255))*256+Math.round(ct(wn.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(wn.copy(this),t);let n=wn.r,s=wn.g,r=wn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(wn.copy(this),t),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=Gt){Ze.workingToColorSpace(wn.copy(this),e);let t=wn.r,n=wn.g,s=wn.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(gs),this.setHSL(gs.h+e,gs.s+t,gs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(gs),e.getHSL(Fo);let n=Pa(gs.h,Fo.h,t),s=Pa(gs.s,Fo.s,t),r=Pa(gs.l,Fo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},wn=new be;be.NAMES=pp;var Na=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new be(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var qs=class extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ii,this.environmentIntensity=1,this.environmentRotation=new Ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ui=new O,Xi=new O,gh=new O,ji=new O,gr=new O,xr=new O,rf=new O,xh=new O,bh=new O,vh=new O,_h=new Lt,yh=new Lt,Mh=new Lt,ys=class i{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ui.subVectors(e,t),s.cross(ui);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ui.subVectors(s,t),Xi.subVectors(n,t),gh.subVectors(e,t);let a=ui.dot(ui),o=ui.dot(Xi),l=ui.dot(gh),c=Xi.dot(Xi),h=Xi.dot(gh),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,m=(a*h-o*l)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ji)===null?!1:ji.x>=0&&ji.y>=0&&ji.x+ji.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,ji)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ji.x),l.addScaledVector(a,ji.y),l.addScaledVector(o,ji.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return _h.setScalar(0),yh.setScalar(0),Mh.setScalar(0),_h.fromBufferAttribute(e,t),yh.fromBufferAttribute(e,n),Mh.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(_h,r.x),a.addScaledVector(yh,r.y),a.addScaledVector(Mh,r.z),a}static isFrontFacing(e,t,n,s){return ui.subVectors(n,t),Xi.subVectors(e,t),ui.cross(Xi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ui.subVectors(this.c,this.b),Xi.subVectors(this.a,this.b),ui.cross(Xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;gr.subVectors(s,n),xr.subVectors(r,n),xh.subVectors(e,n);let l=gr.dot(xh),c=xr.dot(xh);if(l<=0&&c<=0)return t.copy(n);bh.subVectors(e,s);let h=gr.dot(bh),u=xr.dot(bh);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(gr,a);vh.subVectors(e,r);let f=gr.dot(vh),m=xr.dot(vh);if(m>=0&&f<=m)return t.copy(r);let x=f*c-l*m;if(x<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(xr,o);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return rf.subVectors(r,s),o=(u-h)/(u-h+(f-m)),t.copy(s).addScaledVector(rf,o);let p=1/(g+x+d);return a=x*p,o=d*p,t.copy(n).addScaledVector(gr,a).addScaledVector(xr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ln=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,di):di.fromBufferAttribute(r,a),di.applyMatrix4(e.matrixWorld),this.expandByPoint(di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),No.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),No.copy(n.boundingBox)),No.applyMatrix4(e.matrixWorld),this.union(No)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ma),Uo.subVectors(this.max,Ma),br.subVectors(e.a,Ma),vr.subVectors(e.b,Ma),_r.subVectors(e.c,Ma),xs.subVectors(vr,br),bs.subVectors(_r,vr),ks.subVectors(br,_r);let t=[0,-xs.z,xs.y,0,-bs.z,bs.y,0,-ks.z,ks.y,xs.z,0,-xs.x,bs.z,0,-bs.x,ks.z,0,-ks.x,-xs.y,xs.x,0,-bs.y,bs.x,0,-ks.y,ks.x,0];return!Sh(t,br,vr,_r,Uo)||(t=[1,0,0,0,1,0,0,0,1],!Sh(t,br,vr,_r,Uo))?!1:(ko.crossVectors(xs,bs),t=[ko.x,ko.y,ko.z],Sh(t,br,vr,_r,Uo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ki=[new O,new O,new O,new O,new O,new O,new O,new O],di=new O,No=new Ln,br=new O,vr=new O,_r=new O,xs=new O,bs=new O,ks=new O,Ma=new O,Uo=new O,ko=new O,Os=new O;function Sh(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Os.fromArray(i,r);let o=s.x*Math.abs(Os.x)+s.y*Math.abs(Os.y)+s.z*Math.abs(Os.z),l=e.dot(Os),c=t.dot(Os),h=n.dot(Os);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var nn=new O,Oo=new Ue,Tg=0,Ct=class extends Pi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Tg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ru,this.updateRanges=[],this.gpuType=Yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Oo.fromBufferAttribute(this,t),Oo.applyMatrix3(e),this.setXY(t,Oo.x,Oo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix3(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=pi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=It(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pi(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pi(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pi(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),s=It(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),s=It(s,this.array),r=It(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Ua=class extends Ct{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ka=class extends Ct{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var $e=class extends Ct{constructor(e,t,n){super(new Float32Array(e),t,n)}},Eg=new Ln,Sa=new O,wh=new O,Hn=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Eg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sa.subVectors(e,this.center);let t=Sa.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Sa,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sa.copy(e.center).add(wh)),this.expandByPoint(Sa.copy(e.center).sub(wh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ag=0,ii=new je,Th=new Nt,yr=new O,jn=new Ln,wa=new Ln,fn=new O,_t=class i extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ag++}),this.uuid=gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zm(e)?ka:Ua)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new We().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ii.makeRotationFromQuaternion(e),this.applyMatrix4(ii),this}rotateX(e){return ii.makeRotationX(e),this.applyMatrix4(ii),this}rotateY(e){return ii.makeRotationY(e),this.applyMatrix4(ii),this}rotateZ(e){return ii.makeRotationZ(e),this.applyMatrix4(ii),this}translate(e,t,n){return ii.makeTranslation(e,t,n),this.applyMatrix4(ii),this}scale(e,t,n){return ii.makeScale(e,t,n),this.applyMatrix4(ii),this}lookAt(e){return Th.lookAt(e),Th.updateMatrix(),this.applyMatrix4(Th.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yr).negate(),this.translate(yr.x,yr.y,yr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new $e(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ln);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];jn.setFromBufferAttribute(r),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){let n=this.boundingSphere.center;if(jn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];wa.setFromBufferAttribute(o),this.morphTargetsRelative?(fn.addVectors(jn.min,wa.min),jn.expandByPoint(fn),fn.addVectors(jn.max,wa.max),jn.expandByPoint(fn)):(jn.expandByPoint(wa.min),jn.expandByPoint(wa.max))}jn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)fn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(fn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)fn.fromBufferAttribute(o,c),l&&(yr.fromBufferAttribute(e,c),fn.add(yr)),s=Math.max(s,n.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ct(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let w=0;w<n.count;w++)o[w]=new O,l[w]=new O;let c=new O,h=new O,u=new O,d=new Ue,f=new Ue,m=new Ue,x=new O,g=new O;function p(w,R,P){c.fromBufferAttribute(n,w),h.fromBufferAttribute(n,R),u.fromBufferAttribute(n,P),d.fromBufferAttribute(r,w),f.fromBufferAttribute(r,R),m.fromBufferAttribute(r,P),h.sub(c),u.sub(c),f.sub(d),m.sub(d);let D=1/(f.x*m.y-m.x*f.y);isFinite(D)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(D),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(D),o[w].add(x),o[R].add(x),o[P].add(x),l[w].add(g),l[R].add(g),l[P].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let w=0,R=b.length;w<R;++w){let P=b[w],D=P.start,N=P.count;for(let H=D,k=D+N;H<k;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let M=new O,v=new O,S=new O,T=new O;function C(w){S.fromBufferAttribute(s,w),T.copy(S);let R=o[w];M.copy(R),M.sub(S.multiplyScalar(S.dot(R))).normalize(),v.crossVectors(T,R);let D=v.dot(l[w])<0?-1:1;a.setXYZW(w,M.x,M.y,M.z,D)}for(let w=0,R=b.length;w<R;++w){let P=b[w],D=P.start,N=P.count;for(let H=D,k=D+N;H<k;H+=3)C(e.getX(H+0)),C(e.getX(H+1)),C(e.getX(H+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ct(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new O,r=new O,a=new O,o=new O,l=new O,c=new O,h=new O,u=new O;if(e)for(let d=0,f=e.count;d<f;d+=3){let m=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)fn.fromBufferAttribute(e,t),fn.normalize(),e.setXYZ(t,fn.x,fn.y,fn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,m=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new Ct(d,h,u)}if(this.index===null)return ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ru,this.updateRanges=[],this.version=0,this.uuid=gi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Pn=new O,Nr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Pn.fromBufferAttribute(this,t),Pn.applyMatrix4(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pn.fromBufferAttribute(this,t),Pn.applyNormalMatrix(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pn.fromBufferAttribute(this,t),Pn.transformDirection(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=pi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=It(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=pi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=pi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=pi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=pi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),n=It(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),n=It(n,this.array),s=It(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),n=It(n,this.array),s=It(s,this.array),r=It(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){La("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ct(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){La("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Eh=new O,Rg=new O,Cg=new We,fi=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Eh.subVectors(n,t).cross(Rg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Eh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Cg.getNormalMatrix(e),s=this.coplanarPoint(Eh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Pg=0,Dn=class extends Pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pg++}),this.uuid=gi(),this.name="",this.type="Material",this.blending=ws,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yh,this.blendDst=Jh,this.blendEquation=tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=Ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ip,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sl,this.stencilZFail=sl,this.stencilZPass=sl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ze(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new be().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new fi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ue().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ue().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Yi=new O,Ah=new O,Bo=new O,zo=new O,Xs=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yi.copy(this.origin).addScaledVector(this.direction,t),Yi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ah.copy(e).add(t).multiplyScalar(.5),Bo.copy(t).sub(e).normalize(),zo.copy(this.origin).sub(Ah);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Bo),o=zo.dot(this.direction),l=-zo.dot(Bo),c=zo.lengthSq(),h=Math.abs(1-a*a),u,d,f,m;if(h>0)if(u=a*l-o,d=a*o-l,m=r*h,u>=0)if(d>=-m)if(d<=m){let x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ah).addScaledVector(Bo,d),f}intersectSphere(e,t){if(e.radius<0)return null;Yi.subVectors(e.center,this.origin);let n=Yi.dot(this.direction),s=Yi.dot(Yi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Yi)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,m=t.x-a.x,x=t.y-a.y,g=t.z-a.z,p=n.x-a.x,b=n.y-a.y,M=n.z-a.z,v=Math.abs(l),S=Math.abs(c),T=Math.abs(h),C,w,R,P,D,N,H,k,q,Q,X,oe;if(v>=S&&v>=T?(R=l,N=u,q=m,oe=p,l>=0?(C=c,w=h,P=d,D=f,H=x,k=g,Q=b,X=M):(C=h,w=c,P=f,D=d,H=g,k=x,Q=M,X=b)):S>=T?(R=c,N=d,q=x,oe=b,c>=0?(C=h,w=l,P=f,D=u,H=g,k=m,Q=M,X=p):(C=l,w=h,P=u,D=f,H=m,k=g,Q=p,X=M)):(R=h,N=f,q=g,oe=M,h>=0?(C=l,w=c,P=u,D=d,H=m,k=x,Q=p,X=b):(C=c,w=l,P=d,D=u,H=x,k=m,Q=b,X=p)),R===0)return null;let Z=C/R,ne=w/R,se=1/R,Re=P-Z*N,Ae=D-ne*N,ft=H-Z*q,Ye=k-ne*q,it=Q-Z*oe,ee=X-ne*oe,ae=it*Ye-ee*ft,ye=Re*ee-Ae*it,Ce=ft*Ae-Ye*Re;if(s){if(ae<0||ye<0||Ce<0)return null}else if((ae<0||ye<0||Ce<0)&&(ae>0||ye>0||Ce>0))return null;let _e=ae+ye+Ce;if(_e===0)return null;let qe=se*(ae*N+ye*q+Ce*oe);return(_e>0?qe<0:qe>0)?null:this.at(qe/_e,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},mt=class extends Dn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=Pl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},af=new je,Bs=new Xs,Ho=new Hn,of=new O,Go=new O,Vo=new O,Wo=new O,Rh=new O,qo=new O,lf=new O,Xo=new O,ve=class extends Nt{constructor(e=new _t,t=new mt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){qo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Rh.fromBufferAttribute(u,e),a?qo.addScaledVector(Rh,h):qo.addScaledVector(Rh.sub(t),h))}t.add(qo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ho.copy(n.boundingSphere),Ho.applyMatrix4(r),Bs.copy(e.ray).recast(e.near),!(Ho.containsPoint(Bs.origin)===!1&&(Bs.intersectSphere(Ho,of)===null||Bs.origin.distanceToSquared(of)>(e.far-e.near)**2))&&(af.copy(r).invert(),Bs.copy(e.ray).applyMatrix4(af),!(n.boundingBox!==null&&Bs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Bs)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=a[g.materialIndex],b=Math.max(g.start,f.start),M=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let v=b,S=M;v<S;v+=3){let T=o.getX(v),C=o.getX(v+1),w=o.getX(v+2);s=jo(this,p,e,n,c,h,u,T,C,w),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let b=o.getX(g),M=o.getX(g+1),v=o.getX(g+2);s=jo(this,a,e,n,c,h,u,b,M,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=a[g.materialIndex],b=Math.max(g.start,f.start),M=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let v=b,S=M;v<S;v+=3){let T=v,C=v+1,w=v+2;s=jo(this,p,e,n,c,h,u,T,C,w),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let b=g,M=g+1,v=g+2;s=jo(this,a,e,n,c,h,u,b,M,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Ig(i,e,t,n,s,r,a,o){let l;if(e.side===on?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===ki,o),l===null)return null;Xo.copy(o),Xo.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Xo);return c<t.near||c>t.far?null:{distance:c,point:Xo.clone(),object:i}}function jo(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Go),i.getVertexPosition(l,Vo),i.getVertexPosition(c,Wo);let h=Ig(i,e,t,n,Go,Vo,Wo,lf);if(h){let u=new O;ys.getBarycoord(lf,Go,Vo,Wo,u),s&&(h.uv=ys.getInterpolatedAttribute(s,o,l,c,u,new Ue)),r&&(h.uv1=ys.getInterpolatedAttribute(r,o,l,c,u,new Ue)),a&&(h.normal=ys.getInterpolatedAttribute(a,o,l,c,u,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new O,materialIndex:0};ys.getNormal(Go,Vo,Wo,d.normal),h.face=d,h.barycoord=u}return h}var Ta=new Lt,cf=new Lt,hf=new Lt,Lg=new Lt,uf=new je,Ko=new O,Ch=new Hn,df=new je,Ph=new Xs,Oa=class extends ve{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Fh,this.bindMatrix=new je,this.bindMatrixInverse=new je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ln),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ko),this.boundingBox.expandByPoint(Ko)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Hn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ko),this.boundingSphere.expandByPoint(Ko)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ch.copy(this.boundingSphere),Ch.applyMatrix4(s),e.ray.intersectsSphere(Ch)!==!1&&(df.copy(s).invert(),Ph.copy(e.ray).applyMatrix4(df),!(this.boundingBox!==null&&Ph.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ph)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Lt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Fh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Qf?this.bindMatrixInverse.copy(this.bindMatrix).invert():ze("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;cf.fromBufferAttribute(s.attributes.skinIndex,e),hf.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Ta.copy(t),t.set(0,0,0,0)):(Ta.set(...t,1),t.set(0,0,0)),Ta.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=hf.getComponent(r);if(a!==0){let o=cf.getComponent(r);uf.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Lg.copy(Ta).applyMatrix4(uf),a)}}return t.isVector4&&(t.w=Ta.w),t.applyMatrix4(this.bindMatrixInverse)}},Ur=class extends Nt{constructor(){super(),this.isBone=!0,this.type="Bone"}},kr=class extends an{constructor(e=null,t=1,n=1,s,r,a,o,l,c=$t,h=$t,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ff=new je,Dg=new je,Ba=class i{constructor(e=[],t=[]){this.uuid=gi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){ze("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:Dg;ff.multiplyMatrices(o,t[r]),ff.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new kr(t,e,e,Jn,Yn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(ze("Skeleton: No bone found with UUID:",r),a=new Ur),this.bones.push(a),this.boneInverses.push(new je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},Gn=class extends Ct{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Mr=new je,pf=new je,Yo=[],mf=new Ln,Fg=new je,Ea=new ve,Aa=new Hn,$i=class extends ve{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Gn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Fg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ln),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Mr),mf.copy(e.boundingBox).applyMatrix4(Mr),this.boundingBox.union(mf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Mr),Aa.copy(e.boundingSphere).applyMatrix4(Mr),this.boundingSphere.union(Aa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Ea.geometry=this.geometry,Ea.material=this.material,Ea.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Aa.copy(this.boundingSphere),Aa.applyMatrix4(n),e.ray.intersectsSphere(Aa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Mr),pf.multiplyMatrices(n,Mr),Ea.matrixWorld=pf,Ea.raycast(e,Yo);for(let a=0,o=Yo.length;a<o;a++){let l=Yo[a];l.instanceId=r,l.object=this,t.push(l)}Yo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Gn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new kr(new Float32Array(s*this.count),s,this.count,kl,Yn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},zs=new Hn,Ng=new Ue(.5,.5),Jo=new O,Or=class{constructor(e=new fi,t=new fi,n=new fi,s=new fi,r=new fi,a=new fi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=mi,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],m=r[8],x=r[9],g=r[10],p=r[11],b=r[12],M=r[13],v=r[14],S=r[15];if(s[0].setComponents(c-a,f-h,p-m,S-b).normalize(),s[1].setComponents(c+a,f+h,p+m,S+b).normalize(),s[2].setComponents(c+o,f+u,p+x,S+M).normalize(),s[3].setComponents(c-o,f-u,p-x,S-M).normalize(),n)s[4].setComponents(l,d,g,v).normalize(),s[5].setComponents(c-l,f-d,p-g,S-v).normalize();else if(s[4].setComponents(c-l,f-d,p-g,S-v).normalize(),t===mi)s[5].setComponents(c+l,f+d,p+g,S+v).normalize();else if(t===Cr)s[5].setComponents(l,d,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zs)}intersectsSprite(e){zs.center.set(0,0,0);let t=Ng.distanceTo(e.center);return zs.radius=.7071067811865476+t,zs.applyMatrix4(e.matrixWorld),this.intersectsSphere(zs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Jo.x=s.normal.x>0?e.max.x:e.min.x,Jo.y=s.normal.y>0?e.max.y:e.min.y,Jo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Jo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Br=class extends Dn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},gl=new O,xl=new O,gf=new je,Ra=new Xs,Zo=new Hn,Ih=new O,xf=new O,js=class extends Nt{constructor(e=new _t,t=new Br){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)gl.fromBufferAttribute(t,s-1),xl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=gl.distanceTo(xl);e.setAttribute("lineDistance",new $e(n,1))}else ze("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zo.copy(n.boundingSphere),Zo.applyMatrix4(s),Zo.radius+=r,e.ray.intersectsSphere(Zo)===!1)return;gf.copy(s).invert(),Ra.copy(e.ray).applyMatrix4(gf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let x=f,g=m-1;x<g;x+=c){let p=h.getX(x),b=h.getX(x+1),M=$o(this,e,Ra,l,p,b,x);M&&t.push(M)}if(this.isLineLoop){let x=h.getX(m-1),g=h.getX(f),p=$o(this,e,Ra,l,x,g,m-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let x=f,g=m-1;x<g;x+=c){let p=$o(this,e,Ra,l,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=$o(this,e,Ra,l,m-1,f,m-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function $o(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(gl.fromBufferAttribute(o,s),xl.fromBufferAttribute(o,r),t.distanceSqToSegment(gl,xl,Ih,xf)>n)return;Ih.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ih);if(!(c<e.near||c>e.far))return{distance:c,point:xf.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var bf=new O,vf=new O,Ks=class extends js{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)bf.fromBufferAttribute(t,s),vf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+bf.distanceTo(vf);e.setAttribute("lineDistance",new $e(n,1))}else ze("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},za=class extends js{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},zr=class extends Dn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},_f=new je,Bh=new Xs,Qo=new Hn,el=new O,Ms=class extends Nt{constructor(e=new _t,t=new zr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qo.copy(n.boundingSphere),Qo.applyMatrix4(s),Qo.radius+=r,e.ray.intersectsSphere(Qo)===!1)return;_f.copy(s).invert(),Bh.copy(e.ray).applyMatrix4(_f);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=d,x=f;m<x;m++){let g=c.getX(m);el.fromBufferAttribute(u,g),yf(el,g,l,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let m=d,x=f;m<x;m++)el.fromBufferAttribute(u,m),yf(el,m,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function yf(i,e,t,n,s,r,a){let o=Bh.distanceSqToPoint(i);if(o<t){let l=new O;Bh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Ha=class extends an{constructor(e=[],t=Ts,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},xi=class extends an{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ss=class extends an{constructor(e,t,n=_i,s,r,a,o=$t,l=$t,c,h=Ci,u=1){if(h!==Ci&&h!==Es)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Lr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},bl=class extends Ss{constructor(e,t=_i,n=Ts,s,r,a=$t,o=$t,l,c=Ci){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ga=class extends an{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ht=class i extends _t{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,s,a,2),m("x","z","y",1,-1,e,n,-t,s,a,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new $e(c,3)),this.setAttribute("normal",new $e(h,3)),this.setAttribute("uv",new $e(u,2));function m(x,g,p,b,M,v,S,T,C,w,R){let P=v/C,D=S/w,N=v/2,H=S/2,k=T/2,q=C+1,Q=w+1,X=0,oe=0,Z=new O;for(let ne=0;ne<Q;ne++){let se=ne*D-H;for(let Re=0;Re<q;Re++){let Ae=Re*P-N;Z[x]=Ae*b,Z[g]=se*M,Z[p]=k,c.push(Z.x,Z.y,Z.z),Z[x]=0,Z[g]=0,Z[p]=T>0?1:-1,h.push(Z.x,Z.y,Z.z),u.push(Re/C),u.push(1-ne/w),X+=1}}for(let ne=0;ne<w;ne++)for(let se=0;se<C;se++){let Re=d+se+q*ne,Ae=d+se+q*(ne+1),ft=d+(se+1)+q*(ne+1),Ye=d+(se+1)+q*ne;l.push(Re,Ae,Ye),l.push(Ae,ft,Ye),oe+=6}o.addGroup(f,oe,R),f+=oe,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Kn=class i extends _t{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,m=n*2+r,x=s+1,g=new O,p=new O;for(let b=0;b<=m;b++){let M=0,v=0,S=0,T=0;if(b<=n){let R=b/n,P=R*Math.PI/2;v=-h-e*Math.cos(P),S=e*Math.sin(P),T=-e*Math.cos(P),M=R*u}else if(b<=n+r){let R=(b-n)/r;v=-h+R*t,S=e,T=0,M=u+R*d}else{let R=(b-n-r)/n,P=R*Math.PI/2;v=h+e*Math.sin(P),S=e*Math.cos(P),T=e*Math.sin(P),M=u+d+R*u}let C=Math.max(0,Math.min(1,M/f)),w=0;b===0?w=.5/s:b===m&&(w=-.5/s);for(let R=0;R<=s;R++){let P=R/s,D=P*Math.PI*2,N=Math.sin(D),H=Math.cos(D);p.x=-S*H,p.y=v,p.z=S*N,o.push(p.x,p.y,p.z),g.set(-S*H,T,S*N),g.normalize(),l.push(g.x,g.y,g.z),c.push(P+w,C)}if(b>0){let R=(b-1)*x;for(let P=0;P<s;P++){let D=R+P,N=R+P+1,H=b*x+P,k=b*x+P+1;a.push(D,N,H),a.push(N,k,H)}}}this.setIndex(a),this.setAttribute("position",new $e(o,3)),this.setAttribute("normal",new $e(l,3)),this.setAttribute("uv",new $e(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Ys=class i extends _t{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new O,h=new Ue;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new $e(a,3)),this.setAttribute("normal",new $e(o,3)),this.setAttribute("uv",new $e(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},En=class i extends _t{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,x=[],g=n/2,p=0;b(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new $e(u,3)),this.setAttribute("normal",new $e(d,3)),this.setAttribute("uv",new $e(f,2));function b(){let v=new O,S=new O,T=0,C=(t-e)/n;for(let w=0;w<=r;w++){let R=[],P=w/r,D=P*(t-e)+e;for(let N=0;N<=s;N++){let H=N/s,k=H*l+o,q=Math.sin(k),Q=Math.cos(k);S.x=D*q,S.y=-P*n+g,S.z=D*Q,u.push(S.x,S.y,S.z),v.set(q,C,Q).normalize(),d.push(v.x,v.y,v.z),f.push(H,1-P),R.push(m++)}x.push(R)}for(let w=0;w<s;w++)for(let R=0;R<r;R++){let P=x[R][w],D=x[R+1][w],N=x[R+1][w+1],H=x[R][w+1];(e>0||R!==0)&&(h.push(P,D,H),T+=3),(t>0||R!==r-1)&&(h.push(D,N,H),T+=3)}c.addGroup(p,T,0),p+=T}function M(v){let S=m,T=new Ue,C=new O,w=0,R=v===!0?e:t,P=v===!0?1:-1;for(let N=1;N<=s;N++)u.push(0,g*P,0),d.push(0,P,0),f.push(.5,.5),m++;let D=m;for(let N=0;N<=s;N++){let k=N/s*l+o,q=Math.cos(k),Q=Math.sin(k);C.x=R*Q,C.y=g*P,C.z=R*q,u.push(C.x,C.y,C.z),d.push(0,P,0),T.x=q*.5+.5,T.y=Q*.5*P+.5,f.push(T.x,T.y),m++}for(let N=0;N<s;N++){let H=S+N,k=D+N;v===!0?h.push(k,k+1,H):h.push(k+1,k,H),w+=3}c.addGroup(p,w,v===!0?1:2),p+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Fn=class i extends En{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Hr=class i extends _t{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new $e(r,3)),this.setAttribute("normal",new $e(r.slice(),3)),this.setAttribute("uv",new $e(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(b){let M=new O,v=new O,S=new O;for(let T=0;T<t.length;T+=3)f(t[T+0],M),f(t[T+1],v),f(t[T+2],S),l(M,v,S,b)}function l(b,M,v,S){let T=S+1,C=[];for(let w=0;w<=T;w++){C[w]=[];let R=b.clone().lerp(v,w/T),P=M.clone().lerp(v,w/T),D=T-w;for(let N=0;N<=D;N++)N===0&&w===T?C[w][N]=R:C[w][N]=R.clone().lerp(P,N/D)}for(let w=0;w<T;w++)for(let R=0;R<2*(T-w)-1;R++){let P=Math.floor(R/2);R%2===0?(d(C[w][P+1]),d(C[w+1][P]),d(C[w][P])):(d(C[w][P+1]),d(C[w+1][P+1]),d(C[w+1][P]))}}function c(b){let M=new O;for(let v=0;v<r.length;v+=3)M.x=r[v+0],M.y=r[v+1],M.z=r[v+2],M.normalize().multiplyScalar(b),r[v+0]=M.x,r[v+1]=M.y,r[v+2]=M.z}function h(){let b=new O;for(let M=0;M<r.length;M+=3){b.x=r[M+0],b.y=r[M+1],b.z=r[M+2];let v=g(b)/2/Math.PI+.5,S=p(b)/Math.PI+.5;a.push(v,1-S)}m(),u()}function u(){for(let b=0;b<a.length;b+=6){let M=a[b+0],v=a[b+2],S=a[b+4],T=Math.max(M,v,S),C=Math.min(M,v,S);T>.9&&C<.1&&(M<.2&&(a[b+0]+=1),v<.2&&(a[b+2]+=1),S<.2&&(a[b+4]+=1))}}function d(b){r.push(b.x,b.y,b.z)}function f(b,M){let v=b*3;M.x=e[v+0],M.y=e[v+1],M.z=e[v+2]}function m(){let b=new O,M=new O,v=new O,S=new O,T=new Ue,C=new Ue,w=new Ue;for(let R=0,P=0;R<r.length;R+=9,P+=6){b.set(r[R+0],r[R+1],r[R+2]),M.set(r[R+3],r[R+4],r[R+5]),v.set(r[R+6],r[R+7],r[R+8]),T.set(a[P+0],a[P+1]),C.set(a[P+2],a[P+3]),w.set(a[P+4],a[P+5]),S.copy(b).add(M).add(v).divideScalar(3);let D=g(S);x(T,P+0,b,D),x(C,P+2,M,D),x(w,P+4,v,D)}}function x(b,M,v,S){S<0&&b.x===1&&(a[M]=b.x-1),v.x===0&&v.z===0&&(a[M]=S/2/Math.PI+.5)}function g(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}},Va=class i extends Hr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Wa=class i extends Hr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var qa=class i extends Hr{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},pn=class i extends _t{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,f=[],m=[],x=[],g=[];for(let p=0;p<h;p++){let b=p*d-a;for(let M=0;M<c;M++){let v=M*u-r;m.push(v,-b,0),x.push(0,0,1),g.push(M/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){let M=b+c*p,v=b+c*(p+1),S=b+1+c*(p+1),T=b+1+c*p;f.push(M,v,T),f.push(v,S,T)}this.setIndex(f),this.setAttribute("position",new $e(m,3)),this.setAttribute("normal",new $e(x,3)),this.setAttribute("uv",new $e(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var xn=class i extends _t{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new O,d=new O,f=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){let b=[],M=p/n,v=a+M*o,S=e*Math.cos(v),T=Math.sqrt(e*e-S*S),C=0;p===0&&a===0?C=.5/t:p===n&&l===Math.PI&&(C=-.5/t);for(let w=0;w<=t;w++){let R=w/t,P=s+R*r;u.x=-T*Math.cos(P),u.y=S,u.z=T*Math.sin(P),m.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(R+C,1-M),b.push(c++)}h.push(b)}for(let p=0;p<n;p++)for(let b=0;b<t;b++){let M=h[p][b+1],v=h[p][b],S=h[p+1][b],T=h[p+1][b+1];(p!==0||a>0)&&f.push(M,v,T),(p!==n-1||l<Math.PI)&&f.push(v,S,T)}this.setIndex(f),this.setAttribute("position",new $e(m,3)),this.setAttribute("normal",new $e(x,3)),this.setAttribute("uv",new $e(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Js=class i extends _t{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],u=[],d=new O,f=new O,m=new O;for(let x=0;x<=n;x++){let g=a+x/n*o;for(let p=0;p<=s;p++){let b=p/s*r;f.x=(e+t*Math.cos(g))*Math.cos(b),f.y=(e+t*Math.cos(g))*Math.sin(b),f.z=t*Math.sin(g),c.push(f.x,f.y,f.z),d.x=e*Math.cos(b),d.y=e*Math.sin(b),m.subVectors(f,d).normalize(),h.push(m.x,m.y,m.z),u.push(p/s),u.push(x/n)}}for(let x=1;x<=n;x++)for(let g=1;g<=s;g++){let p=(s+1)*x+g-1,b=(s+1)*(x-1)+g-1,M=(s+1)*(x-1)+g,v=(s+1)*x+g;l.push(p,b,v),l.push(b,M,v)}this.setIndex(l),this.setAttribute("position",new $e(c,3)),this.setAttribute("normal",new $e(h,3)),this.setAttribute("uv",new $e(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function rr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Mf(s))s.isRenderTargetTexture?(ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Mf(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Rn(i){let e={};for(let t=0;t<i.length;t++){let n=rr(i[t]);for(let s in n)e[s]=n[s]}return e}function Mf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Ug(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function cu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}var rs={clone:rr,merge:Rn},kg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Og=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Bt=class extends Dn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kg,this.fragmentShader=Og,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rr(e.uniforms),this.uniformsGroups=Ug(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new be().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ue().fromArray(s.value);break;case"v3":this.uniforms[n].value=new O().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Lt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new We().fromArray(s.value);break;case"m4":this.uniforms[n].value=new je().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Gr=class extends Bt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},we=class extends Dn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=po,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},mn=class extends we{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ct(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Xa=class extends Dn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=po,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=Pl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},vl=class extends Dn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},_l=class extends Dn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function _s(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function rl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function Bg(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Sf(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function zg(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var Li=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},yl=class extends Li{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Uh,endingEnd:Uh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case kh:r=e,o=2*t-n;break;case Oh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case kh:a=e,l=2*n-t;break;case Oh:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(s-t),x=m*m,g=x*m,p=-d*g+2*d*x-d*m,b=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*m+1,M=(-1-f)*g+(1.5+f)*x+.5*m,v=f*g-f*x;for(let S=0;S!==o;++S)r[S]=p*a[h+S]+b*a[c+S]+M*a[l+S]+v*a[u+S];return r}},Ml=class extends Li{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Sl=class extends Li{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},wl=class extends Li{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let m=(n-t)/(s-t),x=1-m;for(let g=0;g!==o;++g)r[g]=a[c+g]*x+a[l+g]*m;return r}let d=o*2,f=e-1;for(let m=0;m!==o;++m){let x=a[c+m],g=a[l+m],p=f*d+m*2,b=u[p],M=u[p+1],v=e*d+m*2,S=h[v],T=h[v+1],C=Gg(n,t,b,S,s);r[m]=mp(C,x,M,T,g)}return r}};function mp(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Hg(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Gg(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=mp(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Hg(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Vn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_s(t,this.TimeBufferType),this.values=_s(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:_s(e.times,Array),values:_s(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),rl(e.settings)&&(n.settings={inTangents:_s(e.settings.inTangents,Array),outTangents:_s(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Sl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ml(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new yl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new wl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Gs:t=this.InterpolantFactoryMethodDiscrete;break;case Vs:t=this.InterpolantFactoryMethodLinear;break;case il:t=this.InterpolantFactoryMethodSmooth;break;case Nh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ze("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Gs;case this.InterpolantFactoryMethodLinear:return Vs;case this.InterpolantFactoryMethodSmooth:return il;case this.InterpolantFactoryMethodBezier:return Nh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;rl(this.settings)&&(wf(this.settings.inTangents,e),wf(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ve("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ve("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ve("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ve("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&$m(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ve("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===il,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let x=t[u+m];if(x!==t[d+m]||x!==t[f+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,rl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function wf(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Vn.prototype.ValueTypeName="";Vn.prototype.TimeBufferType=Float32Array;Vn.prototype.ValueBufferType=Float32Array;Vn.prototype.DefaultInterpolation=Vs;var Qi=class extends Vn{constructor(e,t,n){super(e,t,n)}};Qi.prototype.ValueTypeName="bool";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=Gs;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var ja=class extends Vn{constructor(e,t,n,s){super(e,t,n,s)}};ja.prototype.ValueTypeName="color";var es=class extends Vn{constructor(e,t,n,s){super(e,t,n,s)}};es.prototype.ValueTypeName="number";var Tl=class extends Li{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Tn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Di=class extends Vn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Tl(this.times,this.values,this.getValueSize(),e)}};Di.prototype.ValueTypeName="quaternion";Di.prototype.InterpolantFactoryMethodSmooth=void 0;var ts=class extends Vn{constructor(e,t,n){super(e,t,n)}};ts.prototype.ValueTypeName="string";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=Gs;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;var ns=class extends Vn{constructor(e,t,n,s){super(e,t,n,s)}};ns.prototype.ValueTypeName="vector";var Vr=class{constructor(e="",t=-1,n=[],s=ep){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=gi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Wg(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Vn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=Bg(l);l=Sf(l,1,h),c=Sf(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new es(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Vg(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return es;case"vector":case"vector2":case"vector3":case"vector4":return ns;case"color":return ja;case"quaternion":return Di;case"bool":case"boolean":return Qi;case"string":return ts}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Wg(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Vg(i.type);if(i.times===void 0){let n=[],s=[];zg(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),rl(i.settings)&&(t.settings={inTangents:_s(i.settings.inTangents,Float32Array),outTangents:_s(i.settings.outTangents,Float32Array)}),t}var Ai={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Tf(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Tf(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Tf(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var El=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},gp=new El,Fi=class{constructor(e){this.manager=e!==void 0?e:gp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Fi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ji={},zh=class extends Error{constructor(e,t){super(e),this.response=t}},Wr=class extends Fi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ai.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Ji[e]!==void 0){Ji[e].push({onLoad:t,onProgress:n,onError:s});return}Ji[e]=[],Ji[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&ze("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Ji[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0,x=0,g=new ReadableStream({start(p){b();function b(){u.read().then(({done:M,value:v})=>{if(M)p.close();else{x+=v.byteLength;let S=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:f});for(let T=0,C=h.length;T<C;T++){let w=h[T];w.onProgress&&w.onProgress(S)}p.enqueue(v),b()}},M=>{p.error(M)})}}});return new Response(g)}else throw new zh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{Ai.add(`file:${e}`,c);let h=Ji[e];delete Ji[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=Ji[e];if(h===void 0)throw this.manager.itemError(e),c;delete Ji[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Sr=new WeakMap,Al=class extends Fi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Ai.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Sr.get(a);u===void 0&&(u=[],Sr.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=Pr("img");function l(){h(),t&&t(this);let u=Sr.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}Sr.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),Ai.remove(`image:${e}`);let d=Sr.get(this)||[];for(let f=0;f<d.length;f++){let m=d[f];m.onError&&m.onError(u)}Sr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ai.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var Ka=class extends Fi{constructor(e){super(e)}load(e,t,n,s){let r=new an,a=new Al(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Zs=class extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new be(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ya=class extends Zs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Lh=new je,Ef=new O,Af=new O,qr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.mapType=Wn,this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Or,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Ef.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ef),Af.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Af),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Lh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Lh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Cr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Lh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},tl=new O,nl=new Tn,Ei=new O,Ja=class extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=mi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(tl,nl,Ei),Ei.x===1&&Ei.y===1&&Ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(tl,nl,Ei.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(tl,nl,Ei),Ei.x===1&&Ei.y===1&&Ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(tl,nl,Ei.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},vs=new O,Rf=new Ue,Cf=new Ue,sn=class extends Ja{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ws*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ca*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ws*2*Math.atan(Math.tan(Ca*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){vs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vs.x,vs.y).multiplyScalar(-e/vs.z),vs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vs.x,vs.y).multiplyScalar(-e/vs.z)}getViewSize(e,t){return this.getViewBounds(e,Rf,Cf),t.subVectors(Cf,Rf)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ca*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Hh=class extends qr{constructor(){super(new sn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Ws*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Ni=class extends Zs{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Hh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Gh=class extends qr{constructor(){super(new sn(90,1,.5,500)),this.isPointLightShadow=!0}},$s=class extends Zs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Gh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ui=class extends Ja{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Vh=class extends qr{constructor(){super(new Ui(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qs=class extends Zs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new Vh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var is=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Dh=new WeakMap,Za=class extends Fi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&ze("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&ze("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Ai.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{Dh.has(a)===!0?(s&&s(Dh.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ai.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Dh.set(l,c),Ai.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Ai.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var wr=-90,Tr=1,Rl=class extends Nt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new sn(wr,Tr,e,t);s.layers=this.layers,this.add(s);let r=new sn(wr,Tr,e,t);r.layers=this.layers,this.add(r);let a=new sn(wr,Tr,e,t);a.layers=this.layers,this.add(a);let o=new sn(wr,Tr,e,t);o.layers=this.layers,this.add(o);let l=new sn(wr,Tr,e,t);l.layers=this.layers,this.add(l);let c=new sn(wr,Tr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===mi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Cr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Cl=class extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},$a=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=qg.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function qg(){this._document.hidden===!1&&this.reset()}var hu="\\[\\]\\.:\\/",Xg=new RegExp("["+hu+"]","g"),uu="[^"+hu+"]",jg="[^"+hu.replace("\\.","")+"]",Kg=/((?:WC+[\/:])*)/.source.replace("WC",uu),Yg=/(WCOD+)?/.source.replace("WCOD",jg),Jg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uu),Zg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uu),$g=new RegExp("^"+Kg+Yg+Jg+Zg+"$"),Qg=["material","materials","bones","map"],Wh=class{constructor(e,t,n){let s=n||Ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ot=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Xg,"")}static parseTrackName(e){let t=$g.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Qg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ze("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ve("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ve("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ve("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ve("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ve("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Ve("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ot.Composite=Wh;Ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ot.prototype.GetterByBindingType=[Ot.prototype._getValue_direct,Ot.prototype._getValue_array,Ot.prototype._getValue_arrayElement,Ot.prototype._getValue_toArray];Ot.prototype.SetterByBindingTypeAndVersioning=[[Ot.prototype._setValue_direct,Ot.prototype._setValue_direct_setNeedsUpdate,Ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_array,Ot.prototype._setValue_array_setNeedsUpdate,Ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_arrayElement,Ot.prototype._setValue_arrayElement_setNeedsUpdate,Ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_fromArray,Ot.prototype._setValue_fromArray_setNeedsUpdate,Ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var qy=new Float32Array(1);var qh=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function du(i,e,t,n){let s=e0(n);switch(t){case nu:return i*e;case kl:return i*e/s.components*s.byteLength;case Ol:return i*e/s.components*s.byteLength;case As:return i*e*2/s.components*s.byteLength;case Bl:return i*e*2/s.components*s.byteLength;case iu:return i*e*3/s.components*s.byteLength;case Jn:return i*e*4/s.components*s.byteLength;case zl:return i*e*4/s.components*s.byteLength;case ao:case oo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case lo:case co:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Gl:case Wl:return Math.max(i,16)*Math.max(e,8)/4;case Hl:case Vl:return Math.max(i,8)*Math.max(e,8)/2;case ql:case Xl:case Kl:case Yl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case jl:case ho:case Jl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Zl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $l:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ql:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ec:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case tc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case nc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ic:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case sc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case rc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ac:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case oc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case lc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case cc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case hc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case uc:case dc:case fc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case pc:case mc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case uo:case gc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function e0(i){switch(i){case Wn:case $h:return{byteLength:1,components:1};case Kr:case Qh:case ln:return{byteLength:2,components:1};case Nl:case Ul:return{byteLength:2,components:4};case _i:case Fl:case Yn:return{byteLength:4,components:1};case eu:case tu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Op(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function s0(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],x=u[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let x=u[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var r0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,a0=`#ifdef USE_ALPHAHASH
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
#endif`,o0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,l0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,c0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,h0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,u0=`#ifdef USE_AOMAP
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
#endif`,d0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,f0=`#ifdef USE_BATCHING
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
#endif`,p0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,m0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,g0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,x0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,b0=`#ifdef USE_IRIDESCENCE
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
#endif`,v0=`#ifdef USE_BUMPMAP
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
#endif`,_0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,y0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,M0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,S0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,w0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,T0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,E0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,A0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,R0=`#define PI 3.141592653589793
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
} // validated`,C0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,P0=`vec3 transformedNormal = objectNormal;
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
#endif`,I0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,L0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,D0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,F0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,N0="gl_FragColor = linearToOutputTexel( gl_FragColor );",U0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,k0=`#ifdef USE_ENVMAP
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
#endif`,O0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,B0=`#ifdef USE_ENVMAP
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
#endif`,z0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,H0=`#ifdef USE_ENVMAP
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
#endif`,G0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,V0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,W0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,q0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,X0=`#ifdef USE_GRADIENTMAP
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
}`,j0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,K0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Y0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,J0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Z0=`#ifdef USE_ENVMAP
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
#endif`,$0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Q0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ex=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nx=`PhysicalMaterial material;
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
#endif`,ix=`uniform sampler2D dfgLUT;
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
}`,sx=`
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
#endif`,rx=`#if defined( RE_IndirectDiffuse )
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
#endif`,ax=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ox=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,lx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ux=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,px=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,mx=`#if defined( USE_POINTS_UV )
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
#endif`,gx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_x=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yx=`#ifdef USE_MORPHTARGETS
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
#endif`,Mx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Tx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ax=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Rx=`#ifdef USE_NORMALMAP
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
#endif`,Cx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Px=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ix=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Nx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ux=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ox=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Wx=`float getShadowMask() {
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
}`,qx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xx=`#ifdef USE_SKINNING
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
#endif`,jx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kx=`#ifdef USE_SKINNING
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
#endif`,Yx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$x=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qx=`#ifdef USE_TRANSMISSION
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
#endif`,eb=`#ifdef USE_TRANSMISSION
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
#endif`,tb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ib=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,rb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ab=`uniform sampler2D t2D;
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
}`,ob=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ub=`#include <common>
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
}`,db=`#if DEPTH_PACKING == 3200
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
}`,fb=`#define DISTANCE
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
}`,pb=`#define DISTANCE
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
}`,mb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xb=`uniform float scale;
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
}`,bb=`uniform vec3 diffuse;
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
}`,vb=`#include <common>
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
}`,_b=`uniform vec3 diffuse;
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
}`,yb=`#define LAMBERT
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
}`,Mb=`#define LAMBERT
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
}`,Sb=`#define MATCAP
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
}`,wb=`#define MATCAP
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
}`,Tb=`#define NORMAL
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
}`,Eb=`#define NORMAL
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
}`,Ab=`#define PHONG
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
}`,Rb=`#define PHONG
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
}`,Cb=`#define STANDARD
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
}`,Pb=`#define STANDARD
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
}`,Ib=`#define TOON
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
}`,Lb=`#define TOON
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
}`,Db=`uniform float size;
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
}`,Fb=`uniform vec3 diffuse;
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
}`,Nb=`#include <common>
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
}`,Ub=`uniform vec3 color;
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
}`,kb=`uniform float rotation;
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
}`,Ob=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:r0,alphahash_pars_fragment:a0,alphamap_fragment:o0,alphamap_pars_fragment:l0,alphatest_fragment:c0,alphatest_pars_fragment:h0,aomap_fragment:u0,aomap_pars_fragment:d0,batching_pars_vertex:f0,batching_vertex:p0,begin_vertex:m0,beginnormal_vertex:g0,bsdfs:x0,iridescence_fragment:b0,bumpmap_pars_fragment:v0,clipping_planes_fragment:_0,clipping_planes_pars_fragment:y0,clipping_planes_pars_vertex:M0,clipping_planes_vertex:S0,color_fragment:w0,color_pars_fragment:T0,color_pars_vertex:E0,color_vertex:A0,common:R0,cube_uv_reflection_fragment:C0,defaultnormal_vertex:P0,displacementmap_pars_vertex:I0,displacementmap_vertex:L0,emissivemap_fragment:D0,emissivemap_pars_fragment:F0,colorspace_fragment:N0,colorspace_pars_fragment:U0,envmap_fragment:k0,envmap_common_pars_fragment:O0,envmap_pars_fragment:B0,envmap_pars_vertex:z0,envmap_physical_pars_fragment:Z0,envmap_vertex:H0,fog_vertex:G0,fog_pars_vertex:V0,fog_fragment:W0,fog_pars_fragment:q0,gradientmap_pars_fragment:X0,lightmap_pars_fragment:j0,lights_lambert_fragment:K0,lights_lambert_pars_fragment:Y0,lights_pars_begin:J0,lights_toon_fragment:$0,lights_toon_pars_fragment:Q0,lights_phong_fragment:ex,lights_phong_pars_fragment:tx,lights_physical_fragment:nx,lights_physical_pars_fragment:ix,lights_fragment_begin:sx,lights_fragment_maps:rx,lights_fragment_end:ax,lightprobes_pars_fragment:ox,logdepthbuf_fragment:lx,logdepthbuf_pars_fragment:cx,logdepthbuf_pars_vertex:hx,logdepthbuf_vertex:ux,map_fragment:dx,map_pars_fragment:fx,map_particle_fragment:px,map_particle_pars_fragment:mx,metalnessmap_fragment:gx,metalnessmap_pars_fragment:xx,morphinstance_vertex:bx,morphcolor_vertex:vx,morphnormal_vertex:_x,morphtarget_pars_vertex:yx,morphtarget_vertex:Mx,normal_fragment_begin:Sx,normal_fragment_maps:wx,normal_pars_fragment:Tx,normal_pars_vertex:Ex,normal_vertex:Ax,normalmap_pars_fragment:Rx,clearcoat_normal_fragment_begin:Cx,clearcoat_normal_fragment_maps:Px,clearcoat_pars_fragment:Ix,iridescence_pars_fragment:Lx,opaque_fragment:Dx,packing:Fx,premultiplied_alpha_fragment:Nx,project_vertex:Ux,dithering_fragment:kx,dithering_pars_fragment:Ox,roughnessmap_fragment:Bx,roughnessmap_pars_fragment:zx,shadowmap_pars_fragment:Hx,shadowmap_pars_vertex:Gx,shadowmap_vertex:Vx,shadowmask_pars_fragment:Wx,skinbase_vertex:qx,skinning_pars_vertex:Xx,skinning_vertex:jx,skinnormal_vertex:Kx,specularmap_fragment:Yx,specularmap_pars_fragment:Jx,tonemapping_fragment:Zx,tonemapping_pars_fragment:$x,transmission_fragment:Qx,transmission_pars_fragment:eb,uv_pars_fragment:tb,uv_pars_vertex:nb,uv_vertex:ib,worldpos_vertex:sb,background_vert:rb,background_frag:ab,backgroundCube_vert:ob,backgroundCube_frag:lb,cube_vert:cb,cube_frag:hb,depth_vert:ub,depth_frag:db,distance_vert:fb,distance_frag:pb,equirect_vert:mb,equirect_frag:gb,linedashed_vert:xb,linedashed_frag:bb,meshbasic_vert:vb,meshbasic_frag:_b,meshlambert_vert:yb,meshlambert_frag:Mb,meshmatcap_vert:Sb,meshmatcap_frag:wb,meshnormal_vert:Tb,meshnormal_frag:Eb,meshphong_vert:Ab,meshphong_frag:Rb,meshphysical_vert:Cb,meshphysical_frag:Pb,meshtoon_vert:Ib,meshtoon_frag:Lb,points_vert:Db,points_frag:Fb,shadow_vert:Nb,shadow_frag:Ub,sprite_vert:kb,sprite_frag:Ob},Me={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Bi={basic:{uniforms:Rn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:Rn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new be(0)},envMapIntensity:{value:1}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:Rn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:Rn([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:Rn([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new be(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:Rn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:Rn([Me.points,Me.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:Rn([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:Rn([Me.common,Me.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:Rn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:Rn([Me.sprite,Me.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distance:{uniforms:Rn([Me.common,Me.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distance_vert,fragmentShader:tt.distance_frag},shadow:{uniforms:Rn([Me.lights,Me.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};Bi.physical={uniforms:Rn([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};var vc={r:0,b:0,g:0},Bb=new je,Bp=new We;Bp.set(-1,0,0,0,1,0,0,0,1);function zb(i,e,t,n,s,r){let a=new be(0),o=s===!0?0:1,l,c,h=null,u=0,d=null;function f(b){let M=b.isScene===!0?b.background:null;if(M&&M.isTexture){let v=b.backgroundBlurriness>0;M=e.get(M,v)}return M}function m(b){let M=!1,v=f(b);v===null?g(a,o):v&&v.isColor&&(g(v,1),M=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(b,M){let v=f(M);v&&(v.isCubeTexture||v.mapping===ro)?(c===void 0&&(c=new ve(new ht(1,1,1),new Bt({name:"BackgroundCubeMaterial",uniforms:rr(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Bb.makeRotationFromEuler(M.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Bp),c.material.toneMapped=Ze.getTransfer(v.colorSpace)!==vt,(h!==v||u!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,d=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new ve(new pn(2,2),new Bt({name:"BackgroundMaterial",uniforms:rr(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(v.colorSpace)!==vt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,d=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function g(b,M){b.getRGB(vc,cu(i)),t.buffers.color.setClear(vc.r,vc.g,vc.b,M,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,M=1){a.set(b),o=M,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,g(a,o)},render:m,addToRenderList:x,dispose:p}}function Hb(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(D,N,H,k,q){let Q=!1,X=u(D,k,H,N);r!==X&&(r=X,c(r.object)),Q=f(D,k,H,q),Q&&m(D,k,H,q),q!==null&&e.update(q,i.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,v(D,N,H,k),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function h(D){return i.deleteVertexArray(D)}function u(D,N,H,k){let q=k.wireframe===!0,Q=n[N.id];Q===void 0&&(Q={},n[N.id]=Q);let X=D.isInstancedMesh===!0?D.id:0,oe=Q[X];oe===void 0&&(oe={},Q[X]=oe);let Z=oe[H.id];Z===void 0&&(Z={},oe[H.id]=Z);let ne=Z[q];return ne===void 0&&(ne=d(l()),Z[q]=ne),ne}function d(D){let N=[],H=[],k=[];for(let q=0;q<t;q++)N[q]=0,H[q]=0,k[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:H,attributeDivisors:k,object:D,attributes:{},index:null}}function f(D,N,H,k){let q=r.attributes,Q=N.attributes,X=0,oe=H.getAttributes();for(let Z in oe)if(oe[Z].location>=0){let se=q[Z],Re=Q[Z];if(Re===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(Re=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(Re=D.instanceColor)),se===void 0||se.attribute!==Re||Re&&se.data!==Re.data)return!0;X++}return r.attributesNum!==X||r.index!==k}function m(D,N,H,k){let q={},Q=N.attributes,X=0,oe=H.getAttributes();for(let Z in oe)if(oe[Z].location>=0){let se=Q[Z];se===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(se=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(se=D.instanceColor));let Re={};Re.attribute=se,se&&se.data&&(Re.data=se.data),q[Z]=Re,X++}r.attributes=q,r.attributesNum=X,r.index=k}function x(){let D=r.newAttributes;for(let N=0,H=D.length;N<H;N++)D[N]=0}function g(D){p(D,0)}function p(D,N){let H=r.newAttributes,k=r.enabledAttributes,q=r.attributeDivisors;H[D]=1,k[D]===0&&(i.enableVertexAttribArray(D),k[D]=1),q[D]!==N&&(i.vertexAttribDivisor(D,N),q[D]=N)}function b(){let D=r.newAttributes,N=r.enabledAttributes;for(let H=0,k=N.length;H<k;H++)N[H]!==D[H]&&(i.disableVertexAttribArray(H),N[H]=0)}function M(D,N,H,k,q,Q,X){X===!0?i.vertexAttribIPointer(D,N,H,q,Q):i.vertexAttribPointer(D,N,H,k,q,Q)}function v(D,N,H,k){x();let q=k.attributes,Q=H.getAttributes(),X=N.defaultAttributeValues;for(let oe in Q){let Z=Q[oe];if(Z.location>=0){let ne=q[oe];if(ne===void 0&&(oe==="instanceMatrix"&&D.instanceMatrix&&(ne=D.instanceMatrix),oe==="instanceColor"&&D.instanceColor&&(ne=D.instanceColor)),ne!==void 0){let se=ne.normalized,Re=ne.itemSize,Ae=e.get(ne);if(Ae===void 0)continue;let ft=Ae.buffer,Ye=Ae.type,it=Ae.bytesPerElement,ee=Ye===i.INT||Ye===i.UNSIGNED_INT||ne.gpuType===Fl;if(ne.isInterleavedBufferAttribute){let ae=ne.data,ye=ae.stride,Ce=ne.offset;if(ae.isInstancedInterleavedBuffer){for(let _e=0;_e<Z.locationSize;_e++)p(Z.location+_e,ae.meshPerAttribute);D.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let _e=0;_e<Z.locationSize;_e++)g(Z.location+_e);i.bindBuffer(i.ARRAY_BUFFER,ft);for(let _e=0;_e<Z.locationSize;_e++)M(Z.location+_e,Re/Z.locationSize,Ye,se,ye*it,(Ce+Re/Z.locationSize*_e)*it,ee)}else{if(ne.isInstancedBufferAttribute){for(let ae=0;ae<Z.locationSize;ae++)p(Z.location+ae,ne.meshPerAttribute);D.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ae=0;ae<Z.locationSize;ae++)g(Z.location+ae);i.bindBuffer(i.ARRAY_BUFFER,ft);for(let ae=0;ae<Z.locationSize;ae++)M(Z.location+ae,Re/Z.locationSize,Ye,se,Re*it,Re/Z.locationSize*ae*it,ee)}}else if(X!==void 0){let se=X[oe];if(se!==void 0)switch(se.length){case 2:i.vertexAttrib2fv(Z.location,se);break;case 3:i.vertexAttrib3fv(Z.location,se);break;case 4:i.vertexAttrib4fv(Z.location,se);break;default:i.vertexAttrib1fv(Z.location,se)}}}}b()}function S(){R();for(let D in n){let N=n[D];for(let H in N){let k=N[H];for(let q in k){let Q=k[q];for(let X in Q)h(Q[X].object),delete Q[X];delete k[q]}}delete n[D]}}function T(D){if(n[D.id]===void 0)return;let N=n[D.id];for(let H in N){let k=N[H];for(let q in k){let Q=k[q];for(let X in Q)h(Q[X].object),delete Q[X];delete k[q]}}delete n[D.id]}function C(D){for(let N in n){let H=n[N];for(let k in H){let q=H[k];if(q[D.id]===void 0)continue;let Q=q[D.id];for(let X in Q)h(Q[X].object),delete Q[X];delete q[D.id]}}}function w(D){for(let N in n){let H=n[N],k=D.isInstancedMesh===!0?D.id:0,q=H[k];if(q!==void 0){for(let Q in q){let X=q[Q];for(let oe in X)h(X[oe].object),delete X[oe];delete q[Q]}delete H[k],Object.keys(H).length===0&&delete n[N]}}}function R(){P(),a=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:P,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:g,disableUnusedAttributes:b}}function Gb(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Vb(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==Jn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let w=C===ln&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Wn&&C!==Yn&&!w&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(ze("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:v,maxSamples:S,samples:T}}function Wb(i){let e=this,t=null,n=0,s=!1,r=!1,a=new fi,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let b=r?0:n,M=b*4,v=p.clippingState||null;l.value=v,v=h(m,d,M,f);for(let S=0;S!==M;++S)v[S]=t[S];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let p=f+x*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(g===null||g.length<p)&&(g=new Float32Array(p));for(let M=0,v=f;M!==x;++M,v+=4)a.copy(u[M]).applyMatrix4(b,o),a.normal.toArray(g,v),g[v+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}var $r=4,qb=6,Xb=20,jb=256,mo=new Ui,xp=new be,fu=null,pu=0,mu=0,gu=!1,Kb=new O,ar=new O,ea=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Kb}=r;fu=this._renderer.getRenderTarget(),pu=this._renderer.getActiveCubeFace(),mu=this._renderer.getActiveMipmapLevel(),gu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_p(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(fu,pu,mu),this._renderer.xr.enabled=gu,e.scissorTest=!1,Zr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ts||e.mapping===ir?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fu=this._renderer.getRenderTarget(),pu=this._renderer.getActiveCubeFace(),mu=this._renderer.getActiveMipmapLevel(),gu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:ln,format:Jn,colorSpace:In,depthBuffer:!1},s=bp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bp(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Yb(r)),this._blurMaterial=Zb(r,e,t),this._ggxMaterial=Jb(r,e,t)}return s}_compileMaterial(e){let t=new ve(new _t,e);this._renderer.compile(t,mo)}_sceneToCubeUV(e,t,n,s,r){let l=new sn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(xp),u.toneMapping=bi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ve(new ht,new mt({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,p=!1,b=e.background;b?b.isColor&&(g.color.copy(b),e.background=null,p=!0):(g.color.copy(xp),p=!0);for(let M=0;M<6;M++){let v=M%3;v===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[M],r.y,r.z)):v===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[M]));let S=this._cubeSize;Zr(s,v*S,M>2?S:0,S,S),u.setRenderTarget(s),p&&u.render(x,l),u.render(e,l)}u.toneMapping=f,u.autoClear=d,e.background=b}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ts||e.mapping===ir;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=_p()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vp());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Zr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,mo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=c*1.25,f=u*d,{_lodMax:m}=this,x=this._sizeLods[n],g=3*x*(n>m-$r?n-m+$r:0),p=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=m-t,Zr(r,g,p,3*x,2*x),s.setRenderTarget(r),s.render(o,mo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,Zr(e,g,p,3*x,2*x),s.setRenderTarget(e),s.render(o,mo)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-$r?s-this._lodMax+$r:0),d=4*(this._cubeSize-h);Zr(t,u,d,3*h,2*h),a.setRenderTarget(t),a.render(l,mo)}};function Yb(i){let e=[],t=[],n=i,s=i-$r+1+qb;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,d=6,f=3,m=new Float32Array(f*d*u),x=new Float32Array(f*d*u);for(let p=0;p<u;p++){let b=p%3*2/3-1,M=p>2?0:-1,v=[b,M,0,b+2/3,M,0,b+2/3,M+1,0,b,M,0,b+2/3,M+1,0,b,M+1,0];m.set(v,f*d*p);for(let S=0;S<d;S++){let T=h[S*2]*2-1,C=h[S*2+1]*2-1;p===0?ar.set(1,C,T):p===1?ar.set(-T,1,-C):p===2?ar.set(-T,C,1):p===3?ar.set(-1,C,-T):p===4?ar.set(-T,-1,C):ar.set(T,C,-1),ar.toArray(x,(p*d+S)*f)}}let g=new _t;g.setAttribute("position",new Ct(m,f)),g.setAttribute("outputDirection",new Ct(x,f)),t.push(new ve(g,null)),n>$r&&n--}return{lodMeshes:t,sizeLods:e}}function bp(i,e,t){let n=new Kt(i,e,t);return n.texture.mapping=ro,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Jb(i,e,t){return new Bt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:jb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Sc(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Zb(i,e,t){return new Bt({name:"SphericalGaussianBlur",defines:{SAMPLES:Xb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Sc(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function vp(){return new Bt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sc(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function _p(){return new Bt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Sc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var yc=class extends Kt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ha(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ht(5,5,5),r=new Bt({name:"CubemapFromEquirect",uniforms:rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:ri});r.uniforms.tEquirect.value=t;let a=new ve(s,r),o=t.minFilter;return t.minFilter===vi&&(t.minFilter=Qt),new Rl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function $b(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Il||f===Ll)if(e.has(d)){let m=e.get(d).texture;return o(m,d.mapping)}else{let m=d.image;if(m&&m.height>0){let x=new yc(m.height);return x.fromEquirectangularTexture(i,d),e.set(d,x),d.addEventListener("dispose",c),o(x.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let f=d.mapping,m=f===Il||f===Ll,x=f===Ts||f===ir;if(m||x){let g=t.get(d),p=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new ea(i)),g=m?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{let b=d.image;return m&&b&&b.height>0||x&&b&&l(b)?(n===null&&(n=new ea(i)),g=m?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function o(d,f){return f===Il?d.mapping=Ts:f===Ll&&(d.mapping=ir),d}function l(d){let f=0,m=6;for(let x=0;x<m;x++)d[x]!==void 0&&f++;return f===m}function c(d){let f=d.target;f.removeEventListener("dispose",c);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Qb(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Hs("WebGLRenderer: "+n+" extension not supported."),s}}}function ev(i,e,t,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,m=u.attributes.position,x=0;if(m===void 0)return;if(f!==null){let b=f.array;x=f.version;for(let M=0,v=b.length;M<v;M+=3){let S=b[M+0],T=b[M+1],C=b[M+2];d.push(S,T,T,C,C,S)}}else{let b=m.array;x=m.version;for(let M=0,v=b.length/3-1;M<v;M+=3){let S=M+0,T=M+1,C=M+2;d.push(S,T,T,C,C,S)}}let g=new(m.count>=65535?ka:Ua)(d,1);g.version=x;let p=r.get(u);p&&e.remove(p),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function tv(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*a),t.update(d,n,1)}function c(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*a,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let x=0;for(let g=0;g<f;g++)x+=d[g];t.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function nv(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ve("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function iv(i,e,t){let n=new WeakMap,s=new Lt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let R=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",R)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],M=0;f===!0&&(M=1),m===!0&&(M=2),x===!0&&(M=3);let v=o.attributes.position.count*M,S=1;v>e.maxTextureSize&&(S=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let T=new Float32Array(v*S*4*u),C=new Da(T,v,S,u);C.type=Yn,C.needsUpdate=!0;let w=M*4;for(let P=0;P<u;P++){let D=g[P],N=p[P],H=b[P],k=v*S*4*P;for(let q=0;q<D.count;q++){let Q=q*w;f===!0&&(s.fromBufferAttribute(D,q),T[k+Q+0]=s.x,T[k+Q+1]=s.y,T[k+Q+2]=s.z,T[k+Q+3]=0),m===!0&&(s.fromBufferAttribute(N,q),T[k+Q+4]=s.x,T[k+Q+5]=s.y,T[k+Q+6]=s.z,T[k+Q+7]=0),x===!0&&(s.fromBufferAttribute(H,q),T[k+Q+8]=s.x,T[k+Q+9]=s.y,T[k+Q+10]=s.z,T[k+Q+11]=H.itemSize===4?s.w:1)}}d={count:u,texture:C,size:new Ue(v,S)},n.set(o,d),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function sv(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var rv={[Qa]:"LINEAR_TONE_MAPPING",[eo]:"REINHARD_TONE_MAPPING",[to]:"CINEON_TONE_MAPPING",[nr]:"ACES_FILMIC_TONE_MAPPING",[io]:"AGX_TONE_MAPPING",[so]:"NEUTRAL_TONE_MAPPING",[no]:"CUSTOM_TONE_MAPPING"};function av(i,e,t,n,s,r){let a=new Kt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new _t;c.setAttribute("position",new $e([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new $e([0,2,0,0,2,0],2));let h=new Gr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new ve(c,h),d=new Ui(-1,1,1,-1,0,1),f=null,m=null,x=!1,g,p=null,b=[],M=!1;this.setSize=function(v,S){a.setSize(v,S),o!==null&&o.setSize(v,S),l!==null&&l.setSize(v,S);for(let T=0;T<b.length;T++){let C=b[T];C.setSize&&C.setSize(v,S)}},this.setEffects=function(v){b=v,M=b.length>0&&b[0].isRenderPass===!0;let S=a.width,T=a.height;b.length>0&&o===null&&(o=new Kt(S,T,{type:ln,depthBuffer:!1,stencilBuffer:!1}),l=new Kt(S,T,{type:ln,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<b.length;C++){let w=b[C];w.setSize&&w.setSize(S,T)}},this.begin=function(v,S){if(x||v.toneMapping===bi&&b.length===0)return!1;if(p=S,S!==null){let T=S.width,C=S.height;(a.width!==T||a.height!==C)&&this.setSize(T,C)}return M===!1&&v.setRenderTarget(a),g=v.toneMapping,v.toneMapping=bi,!0},this.hasRenderPass=function(){return M},this.end=function(v,S){v.toneMapping=g,x=!0;let T=a,C=o;for(let w=0;w<b.length;w++){let R=b[w];R.enabled!==!1&&(R.render(v,C,T,S),R.needsSwap!==!1&&(T=C,C=C===o?l:o))}if(f!==v.outputColorSpace||m!==v.toneMapping){f=v.outputColorSpace,m=v.toneMapping,h.defines={},Ze.getTransfer(f)===vt&&(h.defines.SRGB_TRANSFER="");let w=rv[m];w&&(h.defines[w]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,v.setRenderTarget(p),v.render(u,d),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var zp=new an,vu=new Ss(1,1),Hp=new Da,Gp=new ml,Vp=new Ha,yp=[],Mp=[],Sp=new Float32Array(16),wp=new Float32Array(9),Tp=new Float32Array(4);function ta(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=yp[s];if(r===void 0&&(r=new Float32Array(s),yp[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function cn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function hn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function wc(i,e){let t=Mp[e];t===void 0&&(t=new Int32Array(e),Mp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ov(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function lv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;i.uniform2fv(this.addr,e),hn(t,e)}}function cv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(cn(t,e))return;i.uniform3fv(this.addr,e),hn(t,e)}}function hv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;i.uniform4fv(this.addr,e),hn(t,e)}}function uv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),hn(t,e)}else{if(cn(t,n))return;Tp.set(n),i.uniformMatrix2fv(this.addr,!1,Tp),hn(t,n)}}function dv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),hn(t,e)}else{if(cn(t,n))return;wp.set(n),i.uniformMatrix3fv(this.addr,!1,wp),hn(t,n)}}function fv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),hn(t,e)}else{if(cn(t,n))return;Sp.set(n),i.uniformMatrix4fv(this.addr,!1,Sp),hn(t,n)}}function pv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function mv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;i.uniform2iv(this.addr,e),hn(t,e)}}function gv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;i.uniform3iv(this.addr,e),hn(t,e)}}function xv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;i.uniform4iv(this.addr,e),hn(t,e)}}function bv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function vv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;i.uniform2uiv(this.addr,e),hn(t,e)}}function _v(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;i.uniform3uiv(this.addr,e),hn(t,e)}}function yv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;i.uniform4uiv(this.addr,e),hn(t,e)}}function Mv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(vu.compareFunction=t.isReversedDepthBuffer()?bc:xc,r=vu):r=zp,t.setTexture2D(e||r,s)}function Sv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Gp,s)}function wv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Vp,s)}function Tv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Hp,s)}function Ev(i){switch(i){case 5126:return ov;case 35664:return lv;case 35665:return cv;case 35666:return hv;case 35674:return uv;case 35675:return dv;case 35676:return fv;case 5124:case 35670:return pv;case 35667:case 35671:return mv;case 35668:case 35672:return gv;case 35669:case 35673:return xv;case 5125:return bv;case 36294:return vv;case 36295:return _v;case 36296:return yv;case 35678:case 36198:case 36298:case 36306:case 35682:return Mv;case 35679:case 36299:case 36307:return Sv;case 35680:case 36300:case 36308:case 36293:return wv;case 36289:case 36303:case 36311:case 36292:return Tv}}function Av(i,e){i.uniform1fv(this.addr,e)}function Rv(i,e){let t=ta(e,this.size,2);i.uniform2fv(this.addr,t)}function Cv(i,e){let t=ta(e,this.size,3);i.uniform3fv(this.addr,t)}function Pv(i,e){let t=ta(e,this.size,4);i.uniform4fv(this.addr,t)}function Iv(i,e){let t=ta(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Lv(i,e){let t=ta(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Dv(i,e){let t=ta(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Fv(i,e){i.uniform1iv(this.addr,e)}function Nv(i,e){i.uniform2iv(this.addr,e)}function Uv(i,e){i.uniform3iv(this.addr,e)}function kv(i,e){i.uniform4iv(this.addr,e)}function Ov(i,e){i.uniform1uiv(this.addr,e)}function Bv(i,e){i.uniform2uiv(this.addr,e)}function zv(i,e){i.uniform3uiv(this.addr,e)}function Hv(i,e){i.uniform4uiv(this.addr,e)}function Gv(i,e,t){let n=this.cache,s=e.length,r=wc(t,s);cn(n,r)||(i.uniform1iv(this.addr,r),hn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=vu:a=zp;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Vv(i,e,t){let n=this.cache,s=e.length,r=wc(t,s);cn(n,r)||(i.uniform1iv(this.addr,r),hn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Gp,r[a])}function Wv(i,e,t){let n=this.cache,s=e.length,r=wc(t,s);cn(n,r)||(i.uniform1iv(this.addr,r),hn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Vp,r[a])}function qv(i,e,t){let n=this.cache,s=e.length,r=wc(t,s);cn(n,r)||(i.uniform1iv(this.addr,r),hn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Hp,r[a])}function Xv(i){switch(i){case 5126:return Av;case 35664:return Rv;case 35665:return Cv;case 35666:return Pv;case 35674:return Iv;case 35675:return Lv;case 35676:return Dv;case 5124:case 35670:return Fv;case 35667:case 35671:return Nv;case 35668:case 35672:return Uv;case 35669:case 35673:return kv;case 5125:return Ov;case 36294:return Bv;case 36295:return zv;case 36296:return Hv;case 35678:case 36198:case 36298:case 36306:case 35682:return Gv;case 35679:case 36299:case 36307:return Vv;case 35680:case 36300:case 36308:case 36293:return Wv;case 36289:case 36303:case 36311:case 36292:return qv}}var _u=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ev(t.type)}},yu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Xv(t.type)}},Mu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},xu=/(\w+)(\])?(\[|\.)?/g;function Ep(i,e){i.seq.push(e),i.map[e.id]=e}function jv(i,e,t){let n=i.name,s=n.length;for(xu.lastIndex=0;;){let r=xu.exec(n),a=xu.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Ep(t,c===void 0?new _u(o,i,e):new yu(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Mu(o),Ep(t,u)),t=u}}}var Qr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);jv(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Ap(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Kv=37297,Yv=0;function Jv(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Rp=new We;function Zv(i){Ze._getMatrix(Rp,Ze.workingColorSpace,i);let e=`mat3( ${Rp.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(i)){case Ia:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return ze("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Cp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Jv(i.getShaderSource(e),o)}else return r}function $v(i,e){let t=Zv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Qv={[Qa]:"Linear",[eo]:"Reinhard",[to]:"Cineon",[nr]:"ACESFilmic",[io]:"AgX",[so]:"Neutral",[no]:"Custom"};function e_(i,e){let t=Qv[e];return t===void 0?(ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var _c=new O;function t_(){Ze.getLuminanceCoefficients(_c);let i=_c.x.toFixed(4),e=_c.y.toFixed(4),t=_c.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function n_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xo).join(`
`)}function i_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function s_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function xo(i){return i!==""}function Pp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ip(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var r_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Su(i){return i.replace(r_,o_)}var a_=new Map;function o_(i,e){let t=tt[e];if(t===void 0){let n=a_.get(e);if(n!==void 0)t=tt[n],ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Su(t)}var l_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lp(i){return i.replace(l_,c_)}function c_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Dp(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var h_={[er]:"SHADOWMAP_TYPE_PCF",[Xr]:"SHADOWMAP_TYPE_VSM"};function u_(i){return h_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var d_={[Ts]:"ENVMAP_TYPE_CUBE",[ir]:"ENVMAP_TYPE_CUBE",[ro]:"ENVMAP_TYPE_CUBE_UV"};function f_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":d_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var p_={[ir]:"ENVMAP_MODE_REFRACTION"};function m_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":p_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var g_={[Pl]:"ENVMAP_BLENDING_MULTIPLY",[Zf]:"ENVMAP_BLENDING_MIX",[$f]:"ENVMAP_BLENDING_ADD"};function x_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":g_[i.combine]||"ENVMAP_BLENDING_NONE"}function b_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function v_(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=u_(t),c=f_(t),h=m_(t),u=x_(t),d=b_(t),f=n_(t),m=i_(r),x=s.createProgram(),g,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(xo).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(xo).join(`
`),p.length>0&&(p+=`
`)):(g=[Dp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xo).join(`
`),p=[Dp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bi?"#define TONE_MAPPING":"",t.toneMapping!==bi?tt.tonemapping_pars_fragment:"",t.toneMapping!==bi?e_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,$v("linearToOutputTexel",t.outputColorSpace),t_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xo).join(`
`)),a=Su(a),a=Pp(a,t),a=Ip(a,t),o=Su(o),o=Pp(o,t),o=Ip(o,t),a=Lp(a),o=Lp(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===au?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===au?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=b+g+a,v=b+p+o,S=Ap(s,s.VERTEX_SHADER,M),T=Ap(s,s.FRAGMENT_SHADER,v);s.attachShader(x,S),s.attachShader(x,T),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function C(D){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(x)||"",H=s.getShaderInfoLog(S)||"",k=s.getShaderInfoLog(T)||"",q=N.trim(),Q=H.trim(),X=k.trim(),oe=!0,Z=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(oe=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,S,T);else{let ne=Cp(s,S,"vertex"),se=Cp(s,T,"fragment");Ve("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+q+`
`+ne+`
`+se)}else q!==""?ze("WebGLProgram: Program Info Log:",q):(Q===""||X==="")&&(Z=!1);Z&&(D.diagnostics={runnable:oe,programLog:q,vertexShader:{log:Q,prefix:g},fragmentShader:{log:X,prefix:p}})}s.deleteShader(S),s.deleteShader(T),w=new Qr(s,x),R=s_(s,x)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let R;this.getAttributes=function(){return R===void 0&&C(this),R};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(x,Kv)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Yv++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=T,this}var __=0,wu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Tu(e),t.set(e,n)),n}},Tu=class{constructor(e){this.id=__++,this.code=e,this.usedTimes=0}};function y_(i){return i===As||i===ho||i===uo}function M_(i,e,t,n,s,r){let a=new Fa,o=new wu,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(w){return l.add(w),w===0?"uv":`uv${w}`}function x(w,R,P,D,N,H){let k=D.fog,q=N.geometry,Q=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?D.environment:null,X=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,oe=e.get(w.envMap||Q,X),Z=oe&&oe.mapping===ro?oe.image.height:null,ne=f[w.type];w.precision!==null&&(d=n.getMaxPrecision(w.precision),d!==w.precision&&ze("WebGLProgram.getParameters:",w.precision,"not supported, using",d,"instead."));let se=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Re=se!==void 0?se.length:0,Ae=0;q.morphAttributes.position!==void 0&&(Ae=1),q.morphAttributes.normal!==void 0&&(Ae=2),q.morphAttributes.color!==void 0&&(Ae=3);let ft,Ye,it,ee;if(ne){let At=Bi[ne];ft=At.vertexShader,Ye=At.fragmentShader}else{ft=w.vertexShader,Ye=w.fragmentShader;let At=o.getVertexShaderStage(w),bt=o.getFragmentShaderStage(w);o.update(w,At,bt),it=At.id,ee=bt.id}let ae=i.getRenderTarget(),ye=i.state.buffers.depth.getReversed(),Ce=N.isInstancedMesh===!0,_e=N.isBatchedMesh===!0,qe=!!w.map,Et=!!w.matcap,Xe=!!oe,st=!!w.aoMap,pt=!!w.lightMap,Je=!!w.bumpMap&&w.wireframe===!1,Mt=!!w.normalMap,St=!!w.displacementMap,Pt=!!w.emissiveMap,ot=!!w.metalnessMap,nt=!!w.roughnessMap,B=w.anisotropy>0,jt=w.clearcoat>0,Ke=w.dispersion>0,E=w.retroreflectivity>0,y=w.iridescence>0,I=w.sheen>0,U=w.transmission>0,V=B&&!!w.anisotropyMap,ie=jt&&!!w.clearcoatMap,he=jt&&!!w.clearcoatNormalMap,Y=jt&&!!w.clearcoatRoughnessMap,W=y&&!!w.iridescenceMap,re=y&&!!w.iridescenceThicknessMap,pe=I&&!!w.sheenColorMap,de=I&&!!w.sheenRoughnessMap,te=!!w.specularMap,xe=!!w.specularColorMap,Te=!!w.specularIntensityMap,me=U&&!!w.transmissionMap,L=U&&!!w.thicknessMap,ue=!!w.gradientMap,J=!!w.alphaMap,fe=w.alphaTest>0,ge=!!w.alphaHash,le=!!w.extensions,ke=bi;w.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(ke=i.toneMapping);let Le={shaderID:ne,shaderType:w.type,shaderName:w.name,vertexShader:ft,fragmentShader:Ye,defines:w.defines,customVertexShaderID:it,customFragmentShaderID:ee,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:d,batching:_e,batchingColor:_e&&N._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&N.instanceColor!==null,instancingMorph:Ce&&N.morphTexture!==null,outputColorSpace:ae===null?i.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Ze.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:qe,matcap:Et,envMap:Xe,envMapMode:Xe&&oe.mapping,envMapCubeUVHeight:Z,aoMap:st,lightMap:pt,bumpMap:Je,normalMap:Mt,displacementMap:St,emissiveMap:Pt,normalMapObjectSpace:Mt&&w.normalMapType===np,normalMapTangentSpace:Mt&&w.normalMapType===po,packedNormalMap:Mt&&w.normalMapType===po&&y_(w.normalMap.format),metalnessMap:ot,roughnessMap:nt,anisotropy:B,anisotropyMap:V,clearcoat:jt,clearcoatMap:ie,clearcoatNormalMap:he,clearcoatRoughnessMap:Y,dispersion:Ke,retroreflection:E,iridescence:y,iridescenceMap:W,iridescenceThicknessMap:re,sheen:I,sheenColorMap:pe,sheenRoughnessMap:de,specularMap:te,specularColorMap:xe,specularIntensityMap:Te,transmission:U,transmissionMap:me,thicknessMap:L,gradientMap:ue,opaque:w.transparent===!1&&w.blending===ws&&w.alphaToCoverage===!1,alphaMap:J,alphaTest:fe,alphaHash:ge,combine:w.combine,mapUv:qe&&m(w.map.channel),aoMapUv:st&&m(w.aoMap.channel),lightMapUv:pt&&m(w.lightMap.channel),bumpMapUv:Je&&m(w.bumpMap.channel),normalMapUv:Mt&&m(w.normalMap.channel),displacementMapUv:St&&m(w.displacementMap.channel),emissiveMapUv:Pt&&m(w.emissiveMap.channel),metalnessMapUv:ot&&m(w.metalnessMap.channel),roughnessMapUv:nt&&m(w.roughnessMap.channel),anisotropyMapUv:V&&m(w.anisotropyMap.channel),clearcoatMapUv:ie&&m(w.clearcoatMap.channel),clearcoatNormalMapUv:he&&m(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&m(w.clearcoatRoughnessMap.channel),iridescenceMapUv:W&&m(w.iridescenceMap.channel),iridescenceThicknessMapUv:re&&m(w.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&m(w.sheenColorMap.channel),sheenRoughnessMapUv:de&&m(w.sheenRoughnessMap.channel),specularMapUv:te&&m(w.specularMap.channel),specularColorMapUv:xe&&m(w.specularColorMap.channel),specularIntensityMapUv:Te&&m(w.specularIntensityMap.channel),transmissionMapUv:me&&m(w.transmissionMap.channel),thicknessMapUv:L&&m(w.thicknessMap.channel),alphaMapUv:J&&m(w.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Mt||B),vertexNormals:!!q.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!q.attributes.uv&&(qe||J),fog:!!k,useFog:w.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||q.attributes.normal===void 0&&Mt===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ye,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:q.attributes.position!==void 0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:Ae,numSunLights:R.sun.length,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numSunLightShadows:R.sunShadowMap.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:ke,decodeVideoTexture:qe&&w.map.isVideoTexture===!0&&Ze.getTransfer(w.map.colorSpace)===vt,decodeVideoTextureEmissive:Pt&&w.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(w.emissiveMap.colorSpace)===vt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Wt,flipSided:w.side===on,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:le&&w.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(le&&w.extensions.multiDraw===!0||_e)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Le.vertexUv1s=l.has(1),Le.vertexUv2s=l.has(2),Le.vertexUv3s=l.has(3),l.clear(),Le}function g(w){let R=[];if(w.shaderID?R.push(w.shaderID):(R.push(w.customVertexShaderID),R.push(w.customFragmentShaderID)),w.defines!==void 0)for(let P in w.defines)R.push(P),R.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(p(R,w),b(R,w),R.push(i.outputColorSpace)),R.push(w.customProgramCacheKey),R.join()}function p(w,R){w.push(R.precision),w.push(R.outputColorSpace),w.push(R.envMapMode),w.push(R.envMapCubeUVHeight),w.push(R.mapUv),w.push(R.alphaMapUv),w.push(R.lightMapUv),w.push(R.aoMapUv),w.push(R.bumpMapUv),w.push(R.normalMapUv),w.push(R.displacementMapUv),w.push(R.emissiveMapUv),w.push(R.metalnessMapUv),w.push(R.roughnessMapUv),w.push(R.anisotropyMapUv),w.push(R.clearcoatMapUv),w.push(R.clearcoatNormalMapUv),w.push(R.clearcoatRoughnessMapUv),w.push(R.iridescenceMapUv),w.push(R.iridescenceThicknessMapUv),w.push(R.sheenColorMapUv),w.push(R.sheenRoughnessMapUv),w.push(R.specularMapUv),w.push(R.specularColorMapUv),w.push(R.specularIntensityMapUv),w.push(R.transmissionMapUv),w.push(R.thicknessMapUv),w.push(R.combine),w.push(R.fogExp2),w.push(R.sizeAttenuation),w.push(R.morphTargetsCount),w.push(R.morphAttributeCount),w.push(R.numSunLights),w.push(R.numDirLights),w.push(R.numPointLights),w.push(R.numSpotLights),w.push(R.numSpotLightMaps),w.push(R.numHemiLights),w.push(R.numRectAreaLights),w.push(R.numSunLightShadows),w.push(R.numDirLightShadows),w.push(R.numPointLightShadows),w.push(R.numSpotLightShadows),w.push(R.numSpotLightShadowsWithMaps),w.push(R.numLightProbes),w.push(R.shadowMapType),w.push(R.toneMapping),w.push(R.numClippingPlanes),w.push(R.numClipIntersection),w.push(R.depthPacking)}function b(w,R){a.disableAll(),R.instancing&&a.enable(0),R.instancingColor&&a.enable(1),R.instancingMorph&&a.enable(2),R.matcap&&a.enable(3),R.envMap&&a.enable(4),R.normalMapObjectSpace&&a.enable(5),R.normalMapTangentSpace&&a.enable(6),R.clearcoat&&a.enable(7),R.iridescence&&a.enable(8),R.alphaTest&&a.enable(9),R.vertexColors&&a.enable(10),R.vertexAlphas&&a.enable(11),R.vertexUv1s&&a.enable(12),R.vertexUv2s&&a.enable(13),R.vertexUv3s&&a.enable(14),R.vertexTangents&&a.enable(15),R.anisotropy&&a.enable(16),R.alphaHash&&a.enable(17),R.batching&&a.enable(18),R.dispersion&&a.enable(19),R.retroreflection&&a.enable(24),R.batchingColor&&a.enable(20),R.gradientMap&&a.enable(21),R.packedNormalMap&&a.enable(22),R.vertexNormals&&a.enable(23),w.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.reversedDepthBuffer&&a.enable(4),R.skinning&&a.enable(5),R.morphTargets&&a.enable(6),R.morphNormals&&a.enable(7),R.morphColors&&a.enable(8),R.premultipliedAlpha&&a.enable(9),R.shadowMapEnabled&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),R.decodeVideoTextureEmissive&&a.enable(20),R.alphaToCoverage&&a.enable(21),R.numLightProbeGrids>0&&a.enable(22),R.hasPositionAttribute&&a.enable(23),w.push(a.mask)}function M(w){let R=f[w.type],P;if(R){let D=Bi[R];P=rs.clone(D.uniforms)}else P=w.uniforms;return P}function v(w,R){let P=h.get(R);return P!==void 0?++P.usedTimes:(P=new v_(i,R,w,s),c.push(P),h.set(R,P)),P}function S(w){if(--w.usedTimes===0){let R=c.indexOf(w);c[R]=c[c.length-1],c.pop(),h.delete(w.cacheKey),w.destroy()}}function T(w){o.remove(w)}function C(){o.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:M,acquireProgram:v,releaseProgram:S,releaseShaderCache:T,programs:c,dispose:C}}function S_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function w_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Fp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Np(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,m,x,g,p){let b=i[e];return b===void 0?(b={id:d.id,object:d,geometry:f,material:m,materialVariant:a(d),groupOrder:x,renderOrder:d.renderOrder,z:g,group:p},i[e]=b):(b.id=d.id,b.object=d,b.geometry=f,b.material=m,b.materialVariant=a(d),b.groupOrder=x,b.renderOrder=d.renderOrder,b.z=g,b.group=p),e++,b}function l(d,f,m,x,g,p,b){b.reversedDepth===!0&&(g=-g);let M=o(d,f,m,x,g,p);m.transmission>0?n.push(M):m.transparent===!0?s.push(M):t.push(M)}function c(d,f,m,x,g,p){let b=o(d,f,m,x,g,p);m.transmission>0?n.unshift(b):m.transparent===!0?s.unshift(b):t.unshift(b)}function h(d,f){t.length>1&&t.sort(d||w_),n.length>1&&n.sort(f||Fp),s.length>1&&s.sort(f||Fp)}function u(){for(let d=e,f=i.length;d<f;d++){let m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function T_(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Np,i.set(n,[a])):s>=r.length?(a=new Np,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function E_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new O,color:new be};break;case"SpotLight":t={position:new O,direction:new O,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new be,groundColor:new be};break;case"RectAreaLight":t={color:new be,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function A_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var R_=0;function C_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function P_(i){let e=new E_,t=A_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);let s=new O,r=new je,a=new je;function o(c){let h=0,u=0,d=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,b=0,M=0,v=0,S=0,T=0,C=0,w=0,R=0,P=0;c.sort(C_);for(let N=0,H=c.length;N<H;N++){let k=c[N],q=k.color,Q=k.intensity,X=k.distance,oe=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===As?oe=k.shadow.map.texture:oe=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)h+=q.r*Q,u+=q.g*Q,d+=q.b*Q;else if(k.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(k.sh.coefficients[Z],Q);P++}else if(k.isSunLight){let Z=e.get(k);if(Z.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let ne=k.shadow,se=t.get(k);se.shadowIntensity=ne.intensity,se.shadowBias=ne.bias,se.shadowNormalBias=ne.normalBias,se.shadowRadius=ne.radius,se.shadowMapSize.copy(ne.mapSize).multiply(ne.getFrameExtents()),n.sunShadow[m]=se,n.sunShadowMap[m]=oe;let Re=ne.getViewportCount();for(let Ae=0;Ae<Re;Ae++)n.sunShadowMatrix[x+Ae]=ne.getMatrix(Ae),n.sunShadowCascade[x+Ae]=ne._cascadeData[Ae];x+=Re,m++}n.sun[f]=Z,f++}else if(k.isDirectionalLight){let Z=e.get(k);if(Z.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let ne=k.shadow,se=t.get(k);se.shadowIntensity=ne.intensity,se.shadowBias=ne.bias,se.shadowNormalBias=ne.normalBias,se.shadowRadius=ne.radius,se.shadowMapSize=ne.mapSize,n.directionalShadow[g]=se,n.directionalShadowMap[g]=oe,n.directionalShadowMatrix[g]=k.shadow.matrix,S++}n.directional[g]=Z,g++}else if(k.isSpotLight){let Z=e.get(k);Z.position.setFromMatrixPosition(k.matrixWorld),Z.color.copy(q).multiplyScalar(Q),Z.distance=X,Z.coneCos=Math.cos(k.angle),Z.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),Z.decay=k.decay,n.spot[b]=Z;let ne=k.shadow;if(k.map&&(n.spotLightMap[w]=k.map,w++,ne.updateMatrices(k),k.castShadow&&R++),n.spotLightMatrix[b]=ne.matrix,k.castShadow){let se=t.get(k);se.shadowIntensity=ne.intensity,se.shadowBias=ne.bias,se.shadowNormalBias=ne.normalBias,se.shadowRadius=ne.radius,se.shadowMapSize=ne.mapSize,n.spotShadow[b]=se,n.spotShadowMap[b]=oe,C++}b++}else if(k.isRectAreaLight){let Z=e.get(k);Z.color.copy(q).multiplyScalar(Q),Z.halfWidth.set(k.width*.5,0,0),Z.halfHeight.set(0,k.height*.5,0),n.rectArea[M]=Z,M++}else if(k.isPointLight){let Z=e.get(k);if(Z.color.copy(k.color).multiplyScalar(k.intensity),Z.distance=k.distance,Z.decay=k.decay,k.castShadow){let ne=k.shadow,se=t.get(k);se.shadowIntensity=ne.intensity,se.shadowBias=ne.bias,se.shadowNormalBias=ne.normalBias,se.shadowRadius=ne.radius,se.shadowMapSize=ne.mapSize,se.shadowCameraNear=ne.camera.near,se.shadowCameraFar=ne.camera.far,n.pointShadow[p]=se,n.pointShadowMap[p]=oe,n.pointShadowMatrix[p]=k.shadow.matrix,T++}n.point[p]=Z,p++}else if(k.isHemisphereLight){let Z=e.get(k);Z.skyColor.copy(k.color).multiplyScalar(Q),Z.groundColor.copy(k.groundColor).multiplyScalar(Q),n.hemi[v]=Z,v++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let D=n.hash;(D.sunLength!==f||D.directionalLength!==g||D.pointLength!==p||D.spotLength!==b||D.rectAreaLength!==M||D.hemiLength!==v||D.numSunShadows!==m||D.numDirectionalShadows!==S||D.numPointShadows!==T||D.numSpotShadows!==C||D.numSpotMaps!==w||D.numLightProbes!==P)&&(n.sun.length=f,n.directional.length=g,n.spot.length=b,n.rectArea.length=M,n.point.length=p,n.hemi.length=v,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+w-R,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=P,D.sunLength=f,D.directionalLength=g,D.pointLength=p,D.spotLength=b,D.rectAreaLength=M,D.hemiLength=v,D.numSunShadows=m,D.numDirectionalShadows=S,D.numPointShadows=T,D.numSpotShadows=C,D.numSpotMaps=w,D.numLightProbes=P,n.version=R_++)}function l(c,h){let u=0,d=0,f=0,m=0,x=0,g=0,p=h.matrixWorldInverse;for(let b=0,M=c.length;b<M;b++){let v=c[b];if(v.isSunLight){let S=n.sun[u];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(p),u++}else if(v.isDirectionalLight){let S=n.directional[d];S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),d++}else if(v.isSpotLight){let S=n.spot[m];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),m++}else if(v.isRectAreaLight){let S=n.rectArea[x];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),a.identity(),r.copy(v.matrixWorld),r.premultiply(p),a.extractRotation(r),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),x++}else if(v.isPointLight){let S=n.point[f];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){let S=n.hemi[g];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:n}}function Up(i){let e=new P_(i),t=[],n=[],s=[];function r(d){u.camera=d,t.length=0,n.length=0,s.length=0}function a(d){t.push(d)}function o(d){n.push(d)}function l(d){s.push(d)}function c(){e.setup(t)}function h(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function I_(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Up(i),e.set(s,[o])):r>=a.length?(o=new Up(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var L_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,D_=`uniform sampler2D shadow_pass;
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
}`,F_=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],N_=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],kp=new je,go=new O,bu=new O;function U_(i,e,t){let n=new Or,s=new Ue,r=new Ue,a=new Lt,o=new vl,l=new _l,c={},h=t.maxTextureSize,u={[ki]:on,[on]:ki,[Wt]:Wt},d=new Bt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:L_,fragmentShader:D_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new _t;m.setAttribute("position",new Ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ve(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=er;let p=this.type;this.render=function(T,C,w){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===Lf&&(ze("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=er);let R=i.getRenderTarget(),P=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),N=i.state;N.setBlending(ri),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let H=p!==this.type;H&&C.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(q=>q.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,q=T.length;k<q;k++){let Q=T[k],X=Q.shadow;if(X===void 0){ze("WebGLShadowMap:",Q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let oe=X.getFrameExtents();s.multiply(oe),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/oe.x),s.x=r.x*oe.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/oe.y),s.y=r.y*oe.y,X.mapSize.y=r.y));let Z=i.state.buffers.depth.getReversed();if(X.camera._reversedDepth=Z,X.map===null||H===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Xr){if(Q.isPointLight){ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Kt(s.x,s.y,{format:As,type:ln,minFilter:Qt,magFilter:Qt,generateMipmaps:!1}),X.map.texture.name=Q.name+".shadowMap",X.map.depthTexture=new Ss(s.x,s.y,Yn),X.map.depthTexture.name=Q.name+".shadowMapDepth",X.map.depthTexture.format=Ci,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=$t,X.map.depthTexture.magFilter=$t}else Q.isPointLight?(X.map=new yc(s.x),X.map.depthTexture=new bl(s.x,_i)):(X.map=new Kt(s.x,s.y),X.map.depthTexture=new Ss(s.x,s.y,_i)),X.map.depthTexture.name=Q.name+".shadowMap",X.map.depthTexture.format=Ci,this.type===er?(X.map.depthTexture.compareFunction=Z?bc:xc,X.map.depthTexture.minFilter=Qt,X.map.depthTexture.magFilter=Qt):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=$t,X.map.depthTexture.magFilter=$t);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==s.x||X.map.height!==s.y)&&X.map.setSize(s.x,s.y);let ne=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();Q.isPointLight!==!0&&X.updateMatrices(Q,w);for(let se=0;se<ne;se++){let Re=X.getCamera(se);if(Q.isPointLight){let Ae=X.camera,ft=X.matrix,Ye=Q.distance||Ae.far;Ye!==Ae.far&&(Ae.far=Ye,Ae.updateProjectionMatrix()),go.setFromMatrixPosition(Q.matrixWorld),Ae.position.copy(go),bu.copy(Ae.position),bu.add(F_[se]),Ae.up.copy(N_[se]),Ae.lookAt(bu),Ae.updateMatrixWorld(),ft.makeTranslation(-go.x,-go.y,-go.z),kp.multiplyMatrices(Ae.projectionMatrix,Ae.matrixWorldInverse),X._frustum.setFromProjectionMatrix(kp,Ae.coordinateSystem,Ae.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)i.setRenderTarget(X.map,se),i.clear();else{se===0&&(i.setRenderTarget(X.map),i.clear());let Ae=X.getViewport(se);a.set(r.x*Ae.x,r.y*Ae.y,r.x*Ae.z,r.y*Ae.w),N.viewport(a)}n=X.getFrustum(se),v(C,w,Re,Q,this.type)}X.isPointLightShadow!==!0&&this.type===Xr&&b(X,w),X.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(R,P,D)};function b(T,C){let w=e.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new Kt(s.x,s.y,{format:As,type:ln}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(C,null,w,d,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(C,null,w,f,x,null)}function M(T,C,w,R){let P=null,D=w.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)P=D;else if(P=w.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let N=P.uuid,H=C.uuid,k=c[N];k===void 0&&(k={},c[N]=k);let q=k[H];q===void 0&&(q=P.clone(),k[H]=q,C.addEventListener("dispose",S)),P=q}if(P.visible=C.visible,P.wireframe=C.wireframe,R===Xr?P.side=C.shadowSide!==null?C.shadowSide:C.side:P.side=C.shadowSide!==null?C.shadowSide:u[C.side],P.alphaMap=C.alphaMap,P.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,P.map=C.map,P.clipShadows=C.clipShadows,P.clippingPlanes=C.clippingPlanes,P.clipIntersection=C.clipIntersection,P.displacementMap=C.displacementMap,P.displacementScale=C.displacementScale,P.displacementBias=C.displacementBias,P.wireframeLinewidth=C.wireframeLinewidth,P.linewidth=C.linewidth,w.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let N=i.properties.get(P);N.light=w}return P}function v(T,C,w,R,P){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&P===Xr)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,T.matrixWorld);let H=e.update(T),k=T.material;if(Array.isArray(k)){let q=H.groups;for(let Q=0,X=q.length;Q<X;Q++){let oe=q[Q],Z=k[oe.materialIndex];if(Z&&Z.visible){let ne=M(T,Z,R,P);T.onBeforeShadow(i,T,C,w,H,ne,oe),i.renderBufferDirect(w,null,H,ne,T,oe),T.onAfterShadow(i,T,C,w,H,ne,oe)}}}else if(k.visible){let q=M(T,k,R,P);T.onBeforeShadow(i,T,C,w,H,q,null),i.renderBufferDirect(w,null,H,q,T,null),T.onAfterShadow(i,T,C,w,H,q,null)}}let N=T.children;for(let H=0,k=N.length;H<k;H++)v(N[H],C,w,R,P)}function S(T){T.target.removeEventListener("dispose",S);for(let w in c){let R=c[w],P=T.target.uuid;P in R&&(R[P].dispose(),delete R[P])}}}function k_(i,e){function t(){let L=!1,ue=new Lt,J=null,fe=new Lt(0,0,0,0);return{setMask:function(ge){J!==ge&&!L&&(i.colorMask(ge,ge,ge,ge),J=ge)},setLocked:function(ge){L=ge},setClear:function(ge,le,ke,Le,At){At===!0&&(ge*=Le,le*=Le,ke*=Le),ue.set(ge,le,ke,Le),fe.equals(ue)===!1&&(i.clearColor(ge,le,ke,Le),fe.copy(ue))},reset:function(){L=!1,J=null,fe.set(-1,0,0,0)}}}function n(){let L=!1,ue=!1,J=null,fe=null,ge=null;return{setReversed:function(le){if(ue!==le){let ke=e.get("EXT_clip_control");le?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),ue=le;let Le=ge;ge=null,this.setClear(Le)}},getReversed:function(){return ue},setTest:function(le){le?ae(i.DEPTH_TEST):ye(i.DEPTH_TEST)},setMask:function(le){J!==le&&!L&&(i.depthMask(le),J=le)},setFunc:function(le){if(ue&&(le=fp[le]),fe!==le){switch(le){case al:i.depthFunc(i.NEVER);break;case ol:i.depthFunc(i.ALWAYS);break;case ll:i.depthFunc(i.LESS);break;case Ar:i.depthFunc(i.LEQUAL);break;case cl:i.depthFunc(i.EQUAL);break;case hl:i.depthFunc(i.GEQUAL);break;case ul:i.depthFunc(i.GREATER);break;case dl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}fe=le}},setLocked:function(le){L=le},setClear:function(le){ge!==le&&(ge=le,ue&&(le=1-le),i.clearDepth(le))},reset:function(){L=!1,J=null,fe=null,ge=null,ue=!1}}}function s(){let L=!1,ue=null,J=null,fe=null,ge=null,le=null,ke=null,Le=null,At=null;return{setTest:function(bt){L||(bt?ae(i.STENCIL_TEST):ye(i.STENCIL_TEST))},setMask:function(bt){ue!==bt&&!L&&(i.stencilMask(bt),ue=bt)},setFunc:function(bt,gn,Bn){(J!==bt||fe!==gn||ge!==Bn)&&(i.stencilFunc(bt,gn,Bn),J=bt,fe=gn,ge=Bn)},setOp:function(bt,gn,Bn){(le!==bt||ke!==gn||Le!==Bn)&&(i.stencilOp(bt,gn,Bn),le=bt,ke=gn,Le=Bn)},setLocked:function(bt){L=bt},setClear:function(bt){At!==bt&&(i.clearStencil(bt),At=bt)},reset:function(){L=!1,ue=null,J=null,fe=null,ge=null,le=null,ke=null,Le=null,At=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},d={},f=new WeakMap,m=[],x=null,g=!1,p=null,b=null,M=null,v=null,S=null,T=null,C=null,w=new be(0,0,0),R=0,P=!1,D=null,N=null,H=null,k=null,q=null,Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,oe=0,Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(Z)[1]),X=oe>=1):Z.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),X=oe>=2);let ne=null,se={},Re=i.getParameter(i.SCISSOR_BOX),Ae=i.getParameter(i.VIEWPORT),ft=new Lt().fromArray(Re),Ye=new Lt().fromArray(Ae);function it(L,ue,J,fe){let ge=new Uint8Array(4),le=i.createTexture();i.bindTexture(L,le),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ke=0;ke<J;ke++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(ue,0,i.RGBA,1,1,fe,0,i.RGBA,i.UNSIGNED_BYTE,ge):i.texImage2D(ue+ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ge);return le}let ee={};ee[i.TEXTURE_2D]=it(i.TEXTURE_2D,i.TEXTURE_2D,1),ee[i.TEXTURE_CUBE_MAP]=it(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[i.TEXTURE_2D_ARRAY]=it(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ee[i.TEXTURE_3D]=it(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ae(i.DEPTH_TEST),a.setFunc(Ar),Je(!1),Mt(Xh),ae(i.CULL_FACE),st(ri);function ae(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function ye(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function Ce(L,ue){return d[L]!==ue?(i.bindFramebuffer(L,ue),d[L]=ue,L===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ue),L===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ue),!0):!1}function _e(L,ue){let J=m,fe=!1;if(L){J=f.get(ue),J===void 0&&(J=[],f.set(ue,J));let ge=L.textures;if(J.length!==ge.length||J[0]!==i.COLOR_ATTACHMENT0){for(let le=0,ke=ge.length;le<ke;le++)J[le]=i.COLOR_ATTACHMENT0+le;J.length=ge.length,fe=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,fe=!0);fe&&i.drawBuffers(J)}function qe(L){return x!==L?(i.useProgram(L),x=L,!0):!1}let Et={[tr]:i.FUNC_ADD,[Ff]:i.FUNC_SUBTRACT,[Nf]:i.FUNC_REVERSE_SUBTRACT};Et[Uf]=i.MIN,Et[kf]=i.MAX;let Xe={[Of]:i.ZERO,[Bf]:i.ONE,[zf]:i.SRC_COLOR,[Yh]:i.SRC_ALPHA,[Xf]:i.SRC_ALPHA_SATURATE,[Wf]:i.DST_COLOR,[Gf]:i.DST_ALPHA,[Hf]:i.ONE_MINUS_SRC_COLOR,[Jh]:i.ONE_MINUS_SRC_ALPHA,[qf]:i.ONE_MINUS_DST_COLOR,[Vf]:i.ONE_MINUS_DST_ALPHA,[jf]:i.CONSTANT_COLOR,[Kf]:i.ONE_MINUS_CONSTANT_COLOR,[Yf]:i.CONSTANT_ALPHA,[Jf]:i.ONE_MINUS_CONSTANT_ALPHA};function st(L,ue,J,fe,ge,le,ke,Le,At,bt){if(L===ri){g===!0&&(ye(i.BLEND),g=!1);return}if(g===!1&&(ae(i.BLEND),g=!0),L!==Df){if(L!==p||bt!==P){if((b!==tr||S!==tr)&&(i.blendEquation(i.FUNC_ADD),b=tr,S=tr),bt)switch(L){case ws:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case An:i.blendFunc(i.ONE,i.ONE);break;case jh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Kh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ve("WebGLState: Invalid blending: ",L);break}else switch(L){case ws:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case An:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case jh:Ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Kh:Ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ve("WebGLState: Invalid blending: ",L);break}M=null,v=null,T=null,C=null,w.set(0,0,0),R=0,p=L,P=bt}return}ge=ge||ue,le=le||J,ke=ke||fe,(ue!==b||ge!==S)&&(i.blendEquationSeparate(Et[ue],Et[ge]),b=ue,S=ge),(J!==M||fe!==v||le!==T||ke!==C)&&(i.blendFuncSeparate(Xe[J],Xe[fe],Xe[le],Xe[ke]),M=J,v=fe,T=le,C=ke),(Le.equals(w)===!1||At!==R)&&(i.blendColor(Le.r,Le.g,Le.b,At),w.copy(Le),R=At),p=L,P=!1}function pt(L,ue){L.side===Wt?ye(i.CULL_FACE):ae(i.CULL_FACE);let J=L.side===on;ue&&(J=!J),Je(J),L.blending===ws&&L.transparent===!1?st(ri):st(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let fe=L.stencilWrite;o.setTest(fe),fe&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Pt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ae(i.SAMPLE_ALPHA_TO_COVERAGE):ye(i.SAMPLE_ALPHA_TO_COVERAGE)}function Je(L){D!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),D=L)}function Mt(L){L!==Pf?(ae(i.CULL_FACE),L!==N&&(L===Xh?i.cullFace(i.BACK):L===If?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ye(i.CULL_FACE),N=L}function St(L){L!==H&&(X&&i.lineWidth(L),H=L)}function Pt(L,ue,J){L?(ae(i.POLYGON_OFFSET_FILL),(k!==ue||q!==J)&&(k=ue,q=J,a.getReversed()&&(ue=-ue),i.polygonOffset(ue,J))):ye(i.POLYGON_OFFSET_FILL)}function ot(L){L?ae(i.SCISSOR_TEST):ye(i.SCISSOR_TEST)}function nt(L){L===void 0&&(L=i.TEXTURE0+Q-1),ne!==L&&(i.activeTexture(L),ne=L)}function B(L,ue,J){J===void 0&&(ne===null?J=i.TEXTURE0+Q-1:J=ne);let fe=se[J];fe===void 0&&(fe={type:void 0,texture:void 0},se[J]=fe),(fe.type!==L||fe.texture!==ue)&&(ne!==J&&(i.activeTexture(J),ne=J),i.bindTexture(L,ue||ee[L]),fe.type=L,fe.texture=ue)}function jt(){let L=se[ne];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Ke(){try{i.compressedTexImage2D(...arguments)}catch(L){Ve("WebGLState:",L)}}function E(){try{i.compressedTexImage3D(...arguments)}catch(L){Ve("WebGLState:",L)}}function y(){try{i.texSubImage2D(...arguments)}catch(L){Ve("WebGLState:",L)}}function I(){try{i.texSubImage3D(...arguments)}catch(L){Ve("WebGLState:",L)}}function U(){try{i.compressedTexSubImage2D(...arguments)}catch(L){Ve("WebGLState:",L)}}function V(){try{i.compressedTexSubImage3D(...arguments)}catch(L){Ve("WebGLState:",L)}}function ie(){try{i.texStorage2D(...arguments)}catch(L){Ve("WebGLState:",L)}}function he(){try{i.texStorage3D(...arguments)}catch(L){Ve("WebGLState:",L)}}function Y(){try{i.texImage2D(...arguments)}catch(L){Ve("WebGLState:",L)}}function W(){try{i.texImage3D(...arguments)}catch(L){Ve("WebGLState:",L)}}function re(L){return u[L]!==void 0?u[L]:i.getParameter(L)}function pe(L,ue){u[L]!==ue&&(i.pixelStorei(L,ue),u[L]=ue)}function de(L){ft.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),ft.copy(L))}function te(L){Ye.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Ye.copy(L))}function xe(L,ue){let J=c.get(ue);J===void 0&&(J=new WeakMap,c.set(ue,J));let fe=J.get(L);fe===void 0&&(fe=i.getUniformBlockIndex(ue,L.name),J.set(L,fe))}function Te(L,ue){let fe=c.get(ue).get(L);l.get(ue)!==fe&&(i.uniformBlockBinding(ue,fe,L.__bindingPointIndex),l.set(ue,fe))}function me(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},ne=null,se={},d={},f=new WeakMap,m=[],x=null,g=!1,p=null,b=null,M=null,v=null,S=null,T=null,C=null,w=new be(0,0,0),R=0,P=!1,D=null,N=null,H=null,k=null,q=null,ft.set(0,0,i.canvas.width,i.canvas.height),Ye.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ae,disable:ye,bindFramebuffer:Ce,drawBuffers:_e,useProgram:qe,setBlending:st,setMaterial:pt,setFlipSided:Je,setCullFace:Mt,setLineWidth:St,setPolygonOffset:Pt,setScissorTest:ot,activeTexture:nt,bindTexture:B,unbindTexture:jt,compressedTexImage2D:Ke,compressedTexImage3D:E,texImage2D:Y,texImage3D:W,pixelStorei:pe,getParameter:re,updateUBOMapping:xe,uniformBlockBinding:Te,texStorage2D:ie,texStorage3D:he,texSubImage2D:y,texSubImage3D:I,compressedTexSubImage2D:U,compressedTexSubImage3D:V,scissor:de,viewport:te,reset:me}}function O_(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ue,h=new WeakMap,u=new Set,d,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(E,y){return m?new OffscreenCanvas(E,y):Pr("canvas")}function g(E,y,I){let U=1,V=Ke(E);if((V.width>I||V.height>I)&&(U=I/Math.max(V.width,V.height)),U<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let ie=Math.floor(U*V.width),he=Math.floor(U*V.height);d===void 0&&(d=x(ie,he));let Y=y?x(ie,he):d;return Y.width=ie,Y.height=he,Y.getContext("2d").drawImage(E,0,0,ie,he),ze("WebGLRenderer: Texture has been resized from ("+V.width+"x"+V.height+") to ("+ie+"x"+he+")."),Y}else return"data"in E&&ze("WebGLRenderer: Image in DataTexture is too big ("+V.width+"x"+V.height+")."),E;return E}function p(E){return E.generateMipmaps}function b(E){i.generateMipmap(E)}function M(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(E,y,I,U,V,ie=!1){if(E!==null){if(i[E]!==void 0)return i[E];ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let he;U&&(he=e.get("EXT_texture_norm16"),he||ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=y;if(y===i.RED&&(I===i.FLOAT&&(Y=i.R32F),I===i.HALF_FLOAT&&(Y=i.R16F),I===i.UNSIGNED_BYTE&&(Y=i.R8),I===i.UNSIGNED_SHORT&&he&&(Y=he.R16_EXT),I===i.SHORT&&he&&(Y=he.R16_SNORM_EXT)),y===i.RED_INTEGER&&(I===i.UNSIGNED_BYTE&&(Y=i.R8UI),I===i.UNSIGNED_SHORT&&(Y=i.R16UI),I===i.UNSIGNED_INT&&(Y=i.R32UI),I===i.BYTE&&(Y=i.R8I),I===i.SHORT&&(Y=i.R16I),I===i.INT&&(Y=i.R32I)),y===i.RG&&(I===i.FLOAT&&(Y=i.RG32F),I===i.HALF_FLOAT&&(Y=i.RG16F),I===i.UNSIGNED_BYTE&&(Y=i.RG8),I===i.UNSIGNED_SHORT&&he&&(Y=he.RG16_EXT),I===i.SHORT&&he&&(Y=he.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(I===i.UNSIGNED_BYTE&&(Y=i.RG8UI),I===i.UNSIGNED_SHORT&&(Y=i.RG16UI),I===i.UNSIGNED_INT&&(Y=i.RG32UI),I===i.BYTE&&(Y=i.RG8I),I===i.SHORT&&(Y=i.RG16I),I===i.INT&&(Y=i.RG32I)),y===i.RGB_INTEGER&&(I===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),I===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),I===i.UNSIGNED_INT&&(Y=i.RGB32UI),I===i.BYTE&&(Y=i.RGB8I),I===i.SHORT&&(Y=i.RGB16I),I===i.INT&&(Y=i.RGB32I)),y===i.RGBA_INTEGER&&(I===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),I===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),I===i.UNSIGNED_INT&&(Y=i.RGBA32UI),I===i.BYTE&&(Y=i.RGBA8I),I===i.SHORT&&(Y=i.RGBA16I),I===i.INT&&(Y=i.RGBA32I)),y===i.RGB&&(I===i.UNSIGNED_SHORT&&he&&(Y=he.RGB16_EXT),I===i.SHORT&&he&&(Y=he.RGB16_SNORM_EXT),I===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),I===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),y===i.RGBA){let W=ie?Ia:Ze.getTransfer(V);I===i.FLOAT&&(Y=i.RGBA32F),I===i.HALF_FLOAT&&(Y=i.RGBA16F),I===i.UNSIGNED_BYTE&&(Y=W===vt?i.SRGB8_ALPHA8:i.RGBA8),I===i.UNSIGNED_SHORT&&he&&(Y=he.RGBA16_EXT),I===i.SHORT&&he&&(Y=he.RGBA16_SNORM_EXT),I===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),I===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function S(E,y){let I;return E?y===null||y===_i||y===Yr?I=i.DEPTH24_STENCIL8:y===Yn?I=i.DEPTH32F_STENCIL8:y===Kr&&(I=i.DEPTH24_STENCIL8,ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===_i||y===Yr?I=i.DEPTH_COMPONENT24:y===Yn?I=i.DEPTH_COMPONENT32F:y===Kr&&(I=i.DEPTH_COMPONENT16),I}function T(E,y){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==$t&&E.minFilter!==Qt?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function C(E){let y=E.target;y.removeEventListener("dispose",C),R(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&u.delete(y)}function w(E){let y=E.target;y.removeEventListener("dispose",w),D(y)}function R(E){let y=n.get(E);if(y.__webglInit===void 0)return;let I=E.source,U=f.get(I);if(U){let V=U[y.__cacheKey];V.usedTimes--,V.usedTimes===0&&P(E),Object.keys(U).length===0&&f.delete(I)}n.remove(E)}function P(E){let y=n.get(E);i.deleteTexture(y.__webglTexture);let I=E.source,U=f.get(I);delete U[y.__cacheKey],a.memory.textures--}function D(E){let y=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let U=0;U<6;U++){if(Array.isArray(y.__webglFramebuffer[U]))for(let V=0;V<y.__webglFramebuffer[U].length;V++)i.deleteFramebuffer(y.__webglFramebuffer[U][V]);else i.deleteFramebuffer(y.__webglFramebuffer[U]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[U])}else{if(Array.isArray(y.__webglFramebuffer))for(let U=0;U<y.__webglFramebuffer.length;U++)i.deleteFramebuffer(y.__webglFramebuffer[U]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let U=0;U<y.__webglColorRenderbuffer.length;U++)y.__webglColorRenderbuffer[U]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[U]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let I=E.textures;for(let U=0,V=I.length;U<V;U++){let ie=n.get(I[U]);ie.__webglTexture&&(i.deleteTexture(ie.__webglTexture),a.memory.textures--),n.remove(I[U])}n.remove(E)}let N=0;function H(){N=0}function k(){return N}function q(E){N=E}function Q(){let E=N;return E>=s.maxTextures&&ze("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+s.maxTextures),N+=1,E}function X(E){let y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.colorSpace),y.join()}function oe(E,y){let I=n.get(E);if(E.isVideoTexture&&B(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&I.__version!==E.version){let U=E.image;if(U===null)ze("WebGLRenderer: Texture marked for update but no image data found.");else if(U.complete===!1)ze("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(I,E,y);return}}else E.isExternalTexture&&(I.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,I.__webglTexture,i.TEXTURE0+y)}function Z(E,y){let I=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&I.__version!==E.version){ye(I,E,y);return}else E.isExternalTexture&&(I.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,I.__webglTexture,i.TEXTURE0+y)}function ne(E,y){let I=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&I.__version!==E.version){ye(I,E,y);return}t.bindTexture(i.TEXTURE_3D,I.__webglTexture,i.TEXTURE0+y)}function se(E,y){let I=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&I.__version!==E.version){Ce(I,E,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+y)}let Re={[Ri]:i.REPEAT,[si]:i.CLAMP_TO_EDGE,[Rr]:i.MIRRORED_REPEAT},Ae={[$t]:i.NEAREST,[Dl]:i.NEAREST_MIPMAP_NEAREST,[sr]:i.NEAREST_MIPMAP_LINEAR,[Qt]:i.LINEAR,[jr]:i.LINEAR_MIPMAP_NEAREST,[vi]:i.LINEAR_MIPMAP_LINEAR},ft={[sp]:i.NEVER,[cp]:i.ALWAYS,[rp]:i.LESS,[xc]:i.LEQUAL,[ap]:i.EQUAL,[bc]:i.GEQUAL,[op]:i.GREATER,[lp]:i.NOTEQUAL};function Ye(E,y){if(y.type===Yn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Qt||y.magFilter===jr||y.magFilter===sr||y.magFilter===vi||y.minFilter===Qt||y.minFilter===jr||y.minFilter===sr||y.minFilter===vi)&&ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,Re[y.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,Re[y.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,Re[y.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,Ae[y.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,Ae[y.minFilter]),y.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,ft[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===$t||y.minFilter!==sr&&y.minFilter!==vi||y.type===Yn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let I=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function it(E,y){let I=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",C));let U=y.source,V=f.get(U);V===void 0&&(V={},f.set(U,V));let ie=X(y);if(ie!==E.__cacheKey){V[ie]===void 0&&(V[ie]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,I=!0),V[ie].usedTimes++;let he=V[E.__cacheKey];he!==void 0&&(V[E.__cacheKey].usedTimes--,he.usedTimes===0&&P(y)),E.__cacheKey=ie,E.__webglTexture=V[ie].texture}return I}function ee(E,y,I){return Math.floor(Math.floor(E/I)/y)}function ae(E,y,I,U){let ie=E.updateRanges;if(ie.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,I,U,y.data);else{ie.sort((pe,de)=>pe.start-de.start);let he=0;for(let pe=1;pe<ie.length;pe++){let de=ie[he],te=ie[pe],xe=de.start+de.count,Te=ee(te.start,y.width,4),me=ee(de.start,y.width,4);te.start<=xe+1&&Te===me&&ee(te.start+te.count-1,y.width,4)===Te?de.count=Math.max(de.count,te.start+te.count-de.start):(++he,ie[he]=te)}ie.length=he+1;let Y=t.getParameter(i.UNPACK_ROW_LENGTH),W=t.getParameter(i.UNPACK_SKIP_PIXELS),re=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let pe=0,de=ie.length;pe<de;pe++){let te=ie[pe],xe=Math.floor(te.start/4),Te=Math.ceil(te.count/4),me=xe%y.width,L=Math.floor(xe/y.width),ue=Te,J=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,me),t.pixelStorei(i.UNPACK_SKIP_ROWS,L),t.texSubImage2D(i.TEXTURE_2D,0,me,L,ue,J,I,U,y.data)}E.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Y),t.pixelStorei(i.UNPACK_SKIP_PIXELS,W),t.pixelStorei(i.UNPACK_SKIP_ROWS,re)}}function ye(E,y,I){let U=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(U=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(U=i.TEXTURE_3D);let V=it(E,y),ie=y.source;t.bindTexture(U,E.__webglTexture,i.TEXTURE0+I);let he=n.get(ie);if(ie.version!==he.__version||V===!0){if(t.activeTexture(i.TEXTURE0+I),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let J=Ze.getPrimaries(Ze.workingColorSpace),fe=y.colorSpace===ss?null:Ze.getPrimaries(y.colorSpace),ge=y.colorSpace===ss||J===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge)}t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let W=g(y.image,!1,s.maxTextureSize);W=jt(y,W);let re=r.convert(y.format,y.colorSpace),pe=r.convert(y.type),de=v(y.internalFormat,re,pe,y.normalized,y.colorSpace,y.isVideoTexture);Ye(U,y);let te,xe=y.mipmaps,Te=y.isVideoTexture!==!0,me=he.__version===void 0||V===!0,L=ie.dataReady,ue=T(y,W);if(y.isDepthTexture)de=S(y.format===Es,y.type),me&&(Te?t.texStorage2D(i.TEXTURE_2D,1,de,W.width,W.height):t.texImage2D(i.TEXTURE_2D,0,de,W.width,W.height,0,re,pe,null));else if(y.isDataTexture)if(xe.length>0){Te&&me&&t.texStorage2D(i.TEXTURE_2D,ue,de,xe[0].width,xe[0].height);for(let J=0,fe=xe.length;J<fe;J++)te=xe[J],Te?L&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,te.width,te.height,re,pe,te.data):t.texImage2D(i.TEXTURE_2D,J,de,te.width,te.height,0,re,pe,te.data);y.generateMipmaps=!1}else Te?(me&&t.texStorage2D(i.TEXTURE_2D,ue,de,W.width,W.height),L&&ae(y,W,re,pe)):t.texImage2D(i.TEXTURE_2D,0,de,W.width,W.height,0,re,pe,W.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Te&&me&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ue,de,xe[0].width,xe[0].height,W.depth);for(let J=0,fe=xe.length;J<fe;J++)if(te=xe[J],y.format!==Jn)if(re!==null)if(Te){if(L)if(y.layerUpdates.size>0){let ge=du(te.width,te.height,y.format,y.type);for(let le of y.layerUpdates){let ke=te.data.subarray(le*ge/te.data.BYTES_PER_ELEMENT,(le+1)*ge/te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,le,te.width,te.height,1,re,ke)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,te.width,te.height,W.depth,re,te.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,de,te.width,te.height,W.depth,0,te.data,0,0);else ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Te?L&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,te.width,te.height,W.depth,re,pe,te.data):t.texImage3D(i.TEXTURE_2D_ARRAY,J,de,te.width,te.height,W.depth,0,re,pe,te.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Te&&me&&t.texStorage2D(i.TEXTURE_2D,ue,de,xe[0].width,xe[0].height);for(let J=0,fe=xe.length;J<fe;J++)te=xe[J],y.format!==Jn?re!==null?Te?L&&t.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,te.width,te.height,re,te.data):t.compressedTexImage2D(i.TEXTURE_2D,J,de,te.width,te.height,0,te.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?L&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,te.width,te.height,re,pe,te.data):t.texImage2D(i.TEXTURE_2D,J,de,te.width,te.height,0,re,pe,te.data)}else if(y.isDataArrayTexture)if(Te){if(me&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ue,de,W.width,W.height,W.depth),L)if(y.layerUpdates.size>0){let J=du(W.width,W.height,y.format,y.type);for(let fe of y.layerUpdates){let ge=W.data.subarray(fe*J/W.data.BYTES_PER_ELEMENT,(fe+1)*J/W.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,fe,W.width,W.height,1,re,pe,ge)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,W.width,W.height,W.depth,re,pe,W.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,de,W.width,W.height,W.depth,0,re,pe,W.data);else if(y.isData3DTexture)Te?(me&&t.texStorage3D(i.TEXTURE_3D,ue,de,W.width,W.height,W.depth),L&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,W.width,W.height,W.depth,re,pe,W.data)):t.texImage3D(i.TEXTURE_3D,0,de,W.width,W.height,W.depth,0,re,pe,W.data);else if(y.isFramebufferTexture){if(me)if(Te)t.texStorage2D(i.TEXTURE_2D,ue,de,W.width,W.height);else{let J=W.width,fe=W.height;for(let ge=0;ge<ue;ge++)t.texImage2D(i.TEXTURE_2D,ge,de,J,fe,0,re,pe,null),J>>=1,fe>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){let J=i.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),W.parentNode!==J){J.appendChild(W),u.add(y),J.onpaint=fe=>{let ge=fe.changedElements;for(let le of u)ge.includes(le.image)&&(le.needsUpdate=!0)},J.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,W);else{let ge=i.RGBA,le=i.RGBA,ke=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ge,le,ke,W)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(xe.length>0){if(Te&&me){let J=Ke(xe[0]);t.texStorage2D(i.TEXTURE_2D,ue,de,J.width,J.height)}for(let J=0,fe=xe.length;J<fe;J++)te=xe[J],Te?L&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,re,pe,te):t.texImage2D(i.TEXTURE_2D,J,de,re,pe,te);y.generateMipmaps=!1}else if(Te){if(me){let J=Ke(W);t.texStorage2D(i.TEXTURE_2D,ue,de,J.width,J.height)}L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,re,pe,W)}else t.texImage2D(i.TEXTURE_2D,0,de,re,pe,W);p(y)&&b(U),he.__version=ie.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function Ce(E,y,I){if(y.image.length!==6)return;let U=it(E,y),V=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+I);let ie=n.get(V);if(V.version!==ie.__version||U===!0){t.activeTexture(i.TEXTURE0+I);let he=Ze.getPrimaries(Ze.workingColorSpace),Y=y.colorSpace===ss?null:Ze.getPrimaries(y.colorSpace),W=y.colorSpace===ss||he===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,W);let re=y.isCompressedTexture||y.image[0].isCompressedTexture,pe=y.image[0]&&y.image[0].isDataTexture,de=[];for(let le=0;le<6;le++)!re&&!pe?de[le]=g(y.image[le],!0,s.maxCubemapSize):de[le]=pe?y.image[le].image:y.image[le],de[le]=jt(y,de[le]);let te=de[0],xe=r.convert(y.format,y.colorSpace),Te=r.convert(y.type),me=v(y.internalFormat,xe,Te,y.normalized,y.colorSpace),L=y.isVideoTexture!==!0,ue=ie.__version===void 0||U===!0,J=V.dataReady,fe=T(y,te);Ye(i.TEXTURE_CUBE_MAP,y);let ge;if(re){L&&ue&&t.texStorage2D(i.TEXTURE_CUBE_MAP,fe,me,te.width,te.height);for(let le=0;le<6;le++){ge=de[le].mipmaps;for(let ke=0;ke<ge.length;ke++){let Le=ge[ke];y.format!==Jn?xe!==null?L?J&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,ke,0,0,Le.width,Le.height,xe,Le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,ke,me,Le.width,Le.height,0,Le.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,ke,0,0,Le.width,Le.height,xe,Te,Le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,ke,me,Le.width,Le.height,0,xe,Te,Le.data)}}}else{if(ge=y.mipmaps,L&&ue){ge.length>0&&fe++;let le=Ke(de[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,fe,me,le.width,le.height)}for(let le=0;le<6;le++)if(pe){L?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,de[le].width,de[le].height,xe,Te,de[le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,me,de[le].width,de[le].height,0,xe,Te,de[le].data);for(let ke=0;ke<ge.length;ke++){let At=ge[ke].image[le].image;L?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,ke+1,0,0,At.width,At.height,xe,Te,At.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,ke+1,me,At.width,At.height,0,xe,Te,At.data)}}else{L?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,xe,Te,de[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,me,xe,Te,de[le]);for(let ke=0;ke<ge.length;ke++){let Le=ge[ke];L?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,ke+1,0,0,xe,Te,Le.image[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,ke+1,me,xe,Te,Le.image[le])}}}p(y)&&b(i.TEXTURE_CUBE_MAP),ie.__version=V.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function _e(E,y,I,U,V,ie){let he=r.convert(I.format,I.colorSpace),Y=r.convert(I.type),W=v(I.internalFormat,he,Y,I.normalized,I.colorSpace),re=n.get(y),pe=n.get(I);if(pe.__renderTarget=y,!re.__hasExternalTextures){let de=Math.max(1,y.width>>ie),te=Math.max(1,y.height>>ie);V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?t.texImage3D(V,ie,W,de,te,y.depth,0,he,Y,null):t.texImage2D(V,ie,W,de,te,0,he,Y,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),nt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,U,V,pe.__webglTexture,0,ot(y)):(V===i.TEXTURE_2D||V>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&V<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,U,V,pe.__webglTexture,ie),t.bindFramebuffer(i.FRAMEBUFFER,null)}function qe(E,y,I){if(i.bindRenderbuffer(i.RENDERBUFFER,E),y.depthBuffer){let U=y.depthTexture,V=U&&U.isDepthTexture?U.type:null,ie=S(y.stencilBuffer,V),he=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;nt(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot(y),ie,y.width,y.height):I?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot(y),ie,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ie,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,E)}else{let U=y.textures;for(let V=0;V<U.length;V++){let ie=U[V],he=r.convert(ie.format,ie.colorSpace),Y=r.convert(ie.type),W=v(ie.internalFormat,he,Y,ie.normalized,ie.colorSpace);nt(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot(y),W,y.width,y.height):I?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot(y),W,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,W,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Et(E,y,I){let U=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let V=n.get(y.depthTexture);if(V.__renderTarget=y,(!V.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),U){if(V.__webglInit===void 0&&(V.__webglInit=!0,y.depthTexture.addEventListener("dispose",C)),V.__webglTexture===void 0){V.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),Ye(i.TEXTURE_CUBE_MAP,y.depthTexture);let re=r.convert(y.depthTexture.format),pe=r.convert(y.depthTexture.type),de;y.depthTexture.format===Ci?de=i.DEPTH_COMPONENT24:y.depthTexture.format===Es&&(de=i.DEPTH24_STENCIL8);for(let te=0;te<6;te++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,de,y.width,y.height,0,re,pe,null)}}else oe(y.depthTexture,0);let ie=V.__webglTexture,he=ot(y),Y=U?i.TEXTURE_CUBE_MAP_POSITIVE_X+I:i.TEXTURE_2D,W=y.depthTexture.format===Es?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===Ci)nt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,Y,ie,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,W,Y,ie,0);else if(y.depthTexture.format===Es)nt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,Y,ie,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,W,Y,ie,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Xe(E){let y=n.get(E),I=E.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==E.depthTexture){let U=E.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),U){let V=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,U.removeEventListener("dispose",V)};U.addEventListener("dispose",V),y.__depthDisposeCallback=V}y.__boundDepthTexture=U}if(E.depthTexture&&!y.__autoAllocateDepthBuffer)if(I)for(let U=0;U<6;U++)Et(y.__webglFramebuffer[U],E,U);else{let U=E.texture.mipmaps;U&&U.length>0?Et(y.__webglFramebuffer[0],E,0):Et(y.__webglFramebuffer,E,0)}else if(I){y.__webglDepthbuffer=[];for(let U=0;U<6;U++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[U]),y.__webglDepthbuffer[U]===void 0)y.__webglDepthbuffer[U]=i.createRenderbuffer(),qe(y.__webglDepthbuffer[U],E,!1);else{let V=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=y.__webglDepthbuffer[U];i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,V,i.RENDERBUFFER,ie)}}else{let U=E.texture.mipmaps;if(U&&U.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),qe(y.__webglDepthbuffer,E,!1);else{let V=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,V,i.RENDERBUFFER,ie)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function st(E,y,I){let U=n.get(E);y!==void 0&&_e(U.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),I!==void 0&&Xe(E)}function pt(E){let y=E.texture,I=n.get(E),U=n.get(y);E.addEventListener("dispose",w);let V=E.textures,ie=E.isWebGLCubeRenderTarget===!0,he=V.length>1;if(he||(U.__webglTexture===void 0&&(U.__webglTexture=i.createTexture()),U.__version=y.version,a.memory.textures++),ie){I.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(y.mipmaps&&y.mipmaps.length>0){I.__webglFramebuffer[Y]=[];for(let W=0;W<y.mipmaps.length;W++)I.__webglFramebuffer[Y][W]=i.createFramebuffer()}else I.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){I.__webglFramebuffer=[];for(let Y=0;Y<y.mipmaps.length;Y++)I.__webglFramebuffer[Y]=i.createFramebuffer()}else I.__webglFramebuffer=i.createFramebuffer();if(he)for(let Y=0,W=V.length;Y<W;Y++){let re=n.get(V[Y]);re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&nt(E)===!1){I.__webglMultisampledFramebuffer=i.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let Y=0;Y<V.length;Y++){let W=V[Y];I.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,I.__webglColorRenderbuffer[Y]);let re=r.convert(W.format,W.colorSpace),pe=r.convert(W.type),de=v(W.internalFormat,re,pe,W.normalized,W.colorSpace,E.isXRRenderTarget===!0),te=ot(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,te,de,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,I.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(I.__webglDepthRenderbuffer=i.createRenderbuffer(),qe(I.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ie){t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture),Ye(i.TEXTURE_CUBE_MAP,y);for(let Y=0;Y<6;Y++)if(y.mipmaps&&y.mipmaps.length>0)for(let W=0;W<y.mipmaps.length;W++)_e(I.__webglFramebuffer[Y][W],E,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,W);else _e(I.__webglFramebuffer[Y],E,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);p(y)&&b(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let Y=0,W=V.length;Y<W;Y++){let re=V[Y],pe=n.get(re),de=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(de=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,pe.__webglTexture),Ye(de,re),_e(I.__webglFramebuffer,E,re,i.COLOR_ATTACHMENT0+Y,de,0),p(re)&&b(de)}t.unbindTexture()}else{let Y=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Y=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Y,U.__webglTexture),Ye(Y,y),y.mipmaps&&y.mipmaps.length>0)for(let W=0;W<y.mipmaps.length;W++)_e(I.__webglFramebuffer[W],E,y,i.COLOR_ATTACHMENT0,Y,W);else _e(I.__webglFramebuffer,E,y,i.COLOR_ATTACHMENT0,Y,0);p(y)&&b(Y),t.unbindTexture()}E.depthBuffer&&Xe(E)}function Je(E){let y=E.textures;for(let I=0,U=y.length;I<U;I++){let V=y[I];if(p(V)){let ie=M(E),he=n.get(V).__webglTexture;t.bindTexture(ie,he),b(ie),t.unbindTexture()}}}let Mt=[],St=[];function Pt(E){if(E.samples>0){if(nt(E)===!1){let y=E.textures,I=E.width,U=E.height,V=i.COLOR_BUFFER_BIT,ie=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=n.get(E),Y=y.length>1;if(Y)for(let re=0;re<y.length;re++)t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer);let W=E.texture.mipmaps;W&&W.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let re=0;re<y.length;re++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(V|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(V|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,he.__webglColorRenderbuffer[re]);let pe=n.get(y[re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,pe,0)}i.blitFramebuffer(0,0,I,U,0,0,I,U,V,i.NEAREST),l===!0&&(Mt.length=0,St.length=0,Mt.push(i.COLOR_ATTACHMENT0+re),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&(Mt.push(ie),St.push(ie),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,St)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Mt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let re=0;re<y.length;re++){t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,he.__webglColorRenderbuffer[re]);let pe=n.get(y[re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.TEXTURE_2D,pe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){let y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function ot(E){return Math.min(s.maxSamples,E.samples)}function nt(E){let y=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function B(E){let y=a.render.frame;h.get(E)!==y&&(h.set(E,y),E.update())}function jt(E,y){let I=E.colorSpace,U=E.format,V=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||I!==In&&I!==ss&&(Ze.getTransfer(I)===vt?(U!==Jn||V!==Wn)&&ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ve("WebGLTextures: Unsupported texture color space:",I)),y}function Ke(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=Q,this.resetTextureUnits=H,this.getTextureUnits=k,this.setTextureUnits=q,this.setTexture2D=oe,this.setTexture2DArray=Z,this.setTexture3D=ne,this.setTextureCube=se,this.rebindTextures=st,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=nt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function B_(i,e){function t(n,s=ss){let r,a=Ze.getTransfer(s);if(n===Wn)return i.UNSIGNED_BYTE;if(n===Nl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ul)return i.UNSIGNED_SHORT_5_5_5_1;if(n===eu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===tu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===$h)return i.BYTE;if(n===Qh)return i.SHORT;if(n===Kr)return i.UNSIGNED_SHORT;if(n===Fl)return i.INT;if(n===_i)return i.UNSIGNED_INT;if(n===Yn)return i.FLOAT;if(n===ln)return i.HALF_FLOAT;if(n===nu)return i.ALPHA;if(n===iu)return i.RGB;if(n===Jn)return i.RGBA;if(n===Ci)return i.DEPTH_COMPONENT;if(n===Es)return i.DEPTH_STENCIL;if(n===kl)return i.RED;if(n===Ol)return i.RED_INTEGER;if(n===As)return i.RG;if(n===Bl)return i.RG_INTEGER;if(n===zl)return i.RGBA_INTEGER;if(n===ao||n===oo||n===lo||n===co)if(a===vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ao)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ao)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===oo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===lo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===co)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Hl||n===Gl||n===Vl||n===Wl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Hl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Gl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Vl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ql||n===Xl||n===jl||n===Kl||n===Yl||n===ho||n===Jl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ql||n===Xl)return a===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===jl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Kl)return r.COMPRESSED_R11_EAC;if(n===Yl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ho)return r.COMPRESSED_RG11_EAC;if(n===Jl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Zl||n===$l||n===Ql||n===ec||n===tc||n===nc||n===ic||n===sc||n===rc||n===ac||n===oc||n===lc||n===cc||n===hc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Zl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$l)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ql)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ec)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===tc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===nc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ic)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===sc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===rc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ac)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===oc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===lc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===cc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===hc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===uc||n===dc||n===fc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===uc)return a===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===dc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===pc||n===mc||n===uo||n===gc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===pc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===mc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===uo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===gc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Yr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var z_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,H_=`
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

}`,Eu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ga(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Bt({vertexShader:z_,fragmentShader:H_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ve(new pn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Au=class extends Pi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null,x=typeof XRWebGLBinding<"u",g=new Eu,p={},b=t.getContextAttributes(),M=null,v=null,S=[],T=[],C=new Ue,w=null,R=null,P=new sn;P.viewport=new Lt;let D=new sn;D.viewport=new Lt;let N=[P,D],H=new Cl,k=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let ae=S[ee];return ae===void 0&&(ae=new Dr,S[ee]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(ee){let ae=S[ee];return ae===void 0&&(ae=new Dr,S[ee]=ae),ae.getGripSpace()},this.getHand=function(ee){let ae=S[ee];return ae===void 0&&(ae=new Dr,S[ee]=ae),ae.getHandSpace()};function Q(ee){let ae=T.indexOf(ee.inputSource);if(ae===-1)return;let ye=S[ae];ye!==void 0&&(ye.update(ee.inputSource,ee.frame,c||a),ye.dispatchEvent({type:ee.type,data:ee.inputSource}))}function X(){s.removeEventListener("select",Q),s.removeEventListener("selectstart",Q),s.removeEventListener("selectend",Q),s.removeEventListener("squeeze",Q),s.removeEventListener("squeezestart",Q),s.removeEventListener("squeezeend",Q),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",oe);for(let ee=0;ee<S.length;ee++){let ae=T[ee];ae!==null&&(T[ee]=null,S[ee].disconnect(ae))}k=null,q=null,g.reset();for(let ee in p)delete p[ee];if(e.setRenderTarget(M),f=null,d=null,u=null,s=null,v=null,it.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(C.width,C.height,!1),R!==null){let ee=R.camera;ee.fov=R.fov,ee.zoom=R.zoom,ee.updateProjectionMatrix(),R=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,n.isPresenting===!0&&ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,n.isPresenting===!0&&ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(ee){if(s=ee,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",Q),s.addEventListener("selectstart",Q),s.addEventListener("selectend",Q),s.addEventListener("squeeze",Q),s.addEventListener("squeezestart",Q),s.addEventListener("squeezeend",Q),s.addEventListener("end",X),s.addEventListener("inputsourceschange",oe),b.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Ce=null,_e=null;b.depth&&(_e=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=b.stencil?Es:Ci,Ce=b.stencil?Yr:_i);let qe={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(qe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Kt(d.textureWidth,d.textureHeight,{format:Jn,type:Wn,depthTexture:new Ss(d.textureWidth,d.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ye={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ye),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Kt(f.framebufferWidth,f.framebufferHeight,{format:Jn,type:Wn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),it.setContext(s),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function oe(ee){for(let ae=0;ae<ee.removed.length;ae++){let ye=ee.removed[ae],Ce=T.indexOf(ye);Ce>=0&&(T[Ce]=null,S[Ce].disconnect(ye))}for(let ae=0;ae<ee.added.length;ae++){let ye=ee.added[ae],Ce=T.indexOf(ye);if(Ce===-1){for(let qe=0;qe<S.length;qe++)if(qe>=T.length){T.push(ye),Ce=qe;break}else if(T[qe]===null){T[qe]=ye,Ce=qe;break}if(Ce===-1)break}let _e=S[Ce];_e&&_e.connect(ye)}}let Z=new O,ne=new O;function se(ee,ae,ye){Z.setFromMatrixPosition(ae.matrixWorld),ne.setFromMatrixPosition(ye.matrixWorld);let Ce=Z.distanceTo(ne),_e=ae.projectionMatrix.elements,qe=ye.projectionMatrix.elements,Et=_e[14]/(_e[10]-1),Xe=_e[14]/(_e[10]+1),st=(_e[9]+1)/_e[5],pt=(_e[9]-1)/_e[5],Je=(_e[8]-1)/_e[0],Mt=(qe[8]+1)/qe[0],St=Et*Je,Pt=Et*Mt,ot=Ce/(-Je+Mt),nt=ot*-Je;if(ae.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(nt),ee.translateZ(ot),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),_e[10]===-1)ee.projectionMatrix.copy(ae.projectionMatrix),ee.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{let B=Et+ot,jt=Xe+ot,Ke=St-nt,E=Pt+(Ce-nt),y=st*Xe/jt*B,I=pt*Xe/jt*B;ee.projectionMatrix.makePerspective(Ke,E,y,I,B,jt),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function Re(ee,ae){ae===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(ae.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(s===null)return;let ae=ee.near,ye=ee.far;g.texture!==null&&(g.depthNear>0&&(ae=g.depthNear),g.depthFar>0&&(ye=g.depthFar)),H.near=D.near=P.near=ae,H.far=D.far=P.far=ye,(k!==H.near||q!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),k=H.near,q=H.far),H.layers.mask=ee.layers.mask|6,P.layers.mask=H.layers.mask&-5,D.layers.mask=H.layers.mask&-3;let Ce=ee.parent,_e=H.cameras;Re(H,Ce);for(let qe=0;qe<_e.length;qe++)Re(_e[qe],Ce);_e.length===2?se(H,P,D):H.projectionMatrix.copy(P.projectionMatrix),R===null&&ee.isPerspectiveCamera&&(R={camera:ee,fov:ee.fov,zoom:ee.zoom}),Ae(ee,H,Ce)};function Ae(ee,ae,ye){ye===null?ee.matrix.copy(ae.matrixWorld):(ee.matrix.copy(ye.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(ae.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(ae.projectionMatrix),ee.projectionMatrixInverse.copy(ae.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Ws*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(ee){l=ee,d!==null&&(d.fixedFoveation=ee),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ee)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(H)},this.getCameraTexture=function(ee){return p[ee]};let ft=null;function Ye(ee,ae){if(h=ae.getViewerPose(c||a),m=ae,h!==null){let ye=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Ce=!1;ye.length!==H.cameras.length&&(H.cameras.length=0,Ce=!0);for(let Xe=0;Xe<ye.length;Xe++){let st=ye[Xe],pt=null;if(f!==null)pt=f.getViewport(st);else{let Mt=u.getViewSubImage(d,st);pt=Mt.viewport,Xe===0&&(e.setRenderTargetTextures(v,Mt.colorTexture,Mt.depthStencilTexture),e.setRenderTarget(v))}let Je=N[Xe];Je===void 0&&(Je=new sn,Je.layers.enable(Xe),Je.viewport=new Lt,N[Xe]=Je),Je.matrix.fromArray(st.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(st.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(pt.x,pt.y,pt.width,pt.height),Xe===0&&(H.matrix.copy(Je.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Ce===!0&&H.cameras.push(Je)}let _e=s.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let Xe=u.getDepthInformation(ye[0]);Xe&&Xe.isValid&&Xe.texture&&g.init(Xe,s.renderState)}if(_e&&_e.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let Xe=0;Xe<ye.length;Xe++){let st=ye[Xe].camera;if(st){let pt=p[st];pt||(pt=new Ga,p[st]=pt);let Je=u.getCameraImage(st);pt.sourceTexture=Je}}}}for(let ye=0;ye<S.length;ye++){let Ce=T[ye],_e=S[ye];Ce!==null&&_e!==void 0&&_e.update(Ce,ae,c||a)}ft&&ft(ee,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),m=null}let it=new Op;it.setAnimationLoop(Ye),this.setAnimationLoop=function(ee){ft=ee},this.dispose=function(){}}},G_=new je,Wp=new We;Wp.set(-1,0,0,0,1,0,0,0,1);function V_(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,cu(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,b,M,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,v)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,b,M):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===on&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===on&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let b=e.get(p),M=b.envMap,v=b.envMapRotation;M&&(g.envMap.value=M,g.envMapRotation.value.setFromMatrix4(G_.makeRotationFromEuler(v)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Wp),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,b,M){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*b,g.scale.value=M*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,b){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===on&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let b=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function W_(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,S){let T=S.program;n.uniformBlockBinding(v,T)}function c(v,S){let T=s[v.id];T===void 0&&(g(v),T=h(v),s[v.id]=T,v.addEventListener("dispose",b));let C=S.program;n.updateUBOMapping(v,C);let w=e.render.frame;r[v.id]!==w&&(d(v),r[v.id]=w)}function h(v){let S=u();v.__bindingPointIndex=S;let T=i.createBuffer(),C=v.__size,w=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,C,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,T),T}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Ve("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let S=s[v.id],T=v.uniforms,C=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let w=0,R=T.length;w<R;w++){let P=T[w];if(Array.isArray(P))for(let D=0,N=P.length;D<N;D++)f(P[D],w,D,C);else f(P,w,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,S,T,C){if(x(v,S,T,C)===!0){let w=v.__offset,R=v.value;if(Array.isArray(R)){let P=0;for(let D=0;D<R.length;D++){let N=R[D],H=p(N);m(N,v.__data,P),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(P+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(R,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,w,v.__data)}}function m(v,S,T){typeof v=="number"||typeof v=="boolean"?S[0]=v:v.isMatrix3?(S[0]=v.elements[0],S[1]=v.elements[1],S[2]=v.elements[2],S[3]=0,S[4]=v.elements[3],S[5]=v.elements[4],S[6]=v.elements[5],S[7]=0,S[8]=v.elements[6],S[9]=v.elements[7],S[10]=v.elements[8],S[11]=0):ArrayBuffer.isView(v)?S.set(new v.constructor(v.buffer,v.byteOffset,S.length)):v.toArray(S,T)}function x(v,S,T,C){let w=v.value,R=S+"_"+T;if(C[R]===void 0)return typeof w=="number"||typeof w=="boolean"?C[R]=w:ArrayBuffer.isView(w)?C[R]=w.slice():C[R]=w.clone(),!0;{let P=C[R];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return C[R]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(P.equals(w)===!1)return P.copy(w),!0}}return!1}function g(v){let S=v.uniforms,T=0,C=16;for(let R=0,P=S.length;R<P;R++){let D=Array.isArray(S[R])?S[R]:[S[R]];for(let N=0,H=D.length;N<H;N++){let k=D[N],q=Array.isArray(k.value)?k.value:[k.value];for(let Q=0,X=q.length;Q<X;Q++){let oe=q[Q],Z=p(oe),ne=T%C,se=ne%Z.boundary,Re=ne+se;T+=se,Re!==0&&C-Re<Z.storage&&(T+=C-Re),k.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=T,T+=Z.storage}}}let w=T%C;return w>0&&(T+=C-w),v.__size=T,v.__cache={},this}function p(v){let S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):ze("WebGLRenderer: Unsupported uniform value type.",v),S}function b(v){let S=v.target;S.removeEventListener("dispose",b);let T=a.indexOf(S.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function M(){for(let v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:c,dispose:M}}var q_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Oi=null;function X_(){return Oi===null&&(Oi=new kr(q_,16,16,As,ln),Oi.name="DFG_LUT",Oi.minFilter=Qt,Oi.magFilter=Qt,Oi.wrapS=si,Oi.wrapT=si,Oi.generateMipmaps=!1,Oi.needsUpdate=!0),Oi}var Mc=class{constructor(e={}){let{canvas:t=hp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Wn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let x=f,g=new Set([zl,Bl,Ol]),p=new Set([Wn,_i,Kr,Yr,Nl,Ul]),b=new Uint32Array(4),M=new Int32Array(4),v=new O,S=null,T=null,C=[],w=[],R=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,D=!1,N=null,H=null,k=null,q=null;this._outputColorSpace=Gt;let Q=0,X=0,oe=null,Z=-1,ne=null,se=new Lt,Re=new Lt,Ae=null,ft=new be(0),Ye=0,it=t.width,ee=t.height,ae=1,ye=null,Ce=null,_e=new Lt(0,0,it,ee),qe=new Lt(0,0,it,ee),Et=!1,Xe=new Or,st=!1,pt=!1,Je=new je,Mt=new O,St=new Lt,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ot=!1;function nt(){return oe===null?ae:1}let B=n;function jt(A,z){return t.getContext(A,z)}let Ke,E,y,I,U,V,ie,he,Y,W,re,pe,de,te,xe,Te,me,L,ue,J,fe,ge,le;try{let A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",At,!1),t.addEventListener("webglcontextrestored",bt,!1),t.addEventListener("webglcontextcreationerror",gn,!1),B===null){let z="webgl2";if(B=jt(z,A),B===null)throw jt(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ke()}catch(A){throw t.removeEventListener("webglcontextlost",At,!1),t.removeEventListener("webglcontextrestored",bt,!1),t.removeEventListener("webglcontextcreationerror",gn,!1),Ve("WebGLRenderer: "+A.message),A}function ke(){Ke=new Qb(B),Ke.init(),fe=new B_(B,Ke),E=new Vb(B,Ke,e,fe),y=new k_(B,Ke),E.reversedDepthBuffer&&d&&y.buffers.depth.setReversed(!0),H=B.createFramebuffer(),k=B.createFramebuffer(),q=B.createFramebuffer(),I=new nv(B),U=new S_,V=new O_(B,Ke,y,U,E,fe,I),ie=new $b(P),he=new s0(B),ge=new Hb(B,he),Y=new ev(B,he,I,ge),W=new sv(B,Y,he,ge,I),L=new iv(B,E,V),xe=new Wb(U),re=new M_(P,ie,Ke,E,ge,xe),pe=new V_(P,U),de=new T_,te=new I_(Ke),me=new zb(P,ie,y,W,m,l),Te=new U_(P,W,E),le=new W_(B,I,E,y),ue=new Gb(B,Ke,I),J=new tv(B,Ke,I),I.programs=re.programs,P.capabilities=E,P.extensions=Ke,P.properties=U,P.renderLists=de,P.shadowMap=Te,P.state=y,P.info=I}x!==Wn&&(R=new av(x,t.width,t.height,o,s,r));let Le=new Au(P,B);this.xr=Le,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let A=Ke.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Ke.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(A){A!==void 0&&(ae=A,this.setSize(it,ee,!1))},this.getSize=function(A){return A.set(it,ee)},this.setSize=function(A,z,$=!0){if(Le.isPresenting){ze("WebGLRenderer: Can't change size while VR device is presenting.");return}it=A,ee=z,t.width=Math.floor(A*ae),t.height=Math.floor(z*ae),$===!0&&(t.style.width=A+"px",t.style.height=z+"px"),R!==null&&R.setSize(t.width,t.height),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(it*ae,ee*ae).floor()},this.setDrawingBufferSize=function(A,z,$){it=A,ee=z,ae=$,t.width=Math.floor(A*$),t.height=Math.floor(z*$),this.setViewport(0,0,A,z)},this.setEffects=function(A){if(x===Wn){Ve("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let z=0;z<A.length;z++)if(A[z].isOutputPass===!0){ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(se)},this.getViewport=function(A){return A.copy(_e)},this.setViewport=function(A,z,$,j){A.isVector4?_e.set(A.x,A.y,A.z,A.w):_e.set(A,z,$,j),y.viewport(se.copy(_e).multiplyScalar(ae).round())},this.getScissor=function(A){return A.copy(qe)},this.setScissor=function(A,z,$,j){A.isVector4?qe.set(A.x,A.y,A.z,A.w):qe.set(A,z,$,j),y.scissor(Re.copy(qe).multiplyScalar(ae).round())},this.getScissorTest=function(){return Et},this.setScissorTest=function(A){y.setScissorTest(Et=A)},this.setOpaqueSort=function(A){ye=A},this.setTransparentSort=function(A){Ce=A},this.getClearColor=function(A){return A.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor(...arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha(...arguments)},this.clear=function(A=!0,z=!0,$=!0){let j=0;if(A){let K=!1;if(oe!==null){let Ee=oe.texture.format;K=g.has(Ee)}if(K){let Ee=oe.texture.type,Ie=p.has(Ee),Se=me.getClearColor(),De=me.getClearAlpha(),Oe=Se.r,et=Se.g,lt=Se.b;Ie?(b[0]=Oe,b[1]=et,b[2]=lt,b[3]=De,B.clearBufferuiv(B.COLOR,0,b)):(M[0]=Oe,M[1]=et,M[2]=lt,M[3]=De,B.clearBufferiv(B.COLOR,0,M))}else j|=B.COLOR_BUFFER_BIT}z&&(j|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(j|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&B.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),N=A},this.dispose=function(){t.removeEventListener("webglcontextlost",At,!1),t.removeEventListener("webglcontextrestored",bt,!1),t.removeEventListener("webglcontextcreationerror",gn,!1),me.dispose(),de.dispose(),te.dispose(),U.dispose(),ie.dispose(),W.dispose(),ge.dispose(),le.dispose(),re.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",kd),Le.removeEventListener("sessionend",Od),Us.stop()};function At(A){A.preventDefault(),La("WebGLRenderer: Context Lost."),D=!0}function bt(){La("WebGLRenderer: Context Restored."),D=!1;let A=I.autoReset,z=Te.enabled,$=Te.autoUpdate,j=Te.needsUpdate,K=Te.type;ke(),I.autoReset=A,Te.enabled=z,Te.autoUpdate=$,Te.needsUpdate=j,Te.type=K}function gn(A){Ve("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Bn(A){let z=A.target;z.removeEventListener("dispose",Bn),zn(z)}function zn(A){_a(A),U.remove(A)}function _a(A){let z=U.get(A).programs;z!==void 0&&(z.forEach(function($){re.releaseProgram($)}),A.isShaderMaterial&&re.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,$,j,K,Ee){z===null&&(z=Pt);let Ie=K.isMesh&&K.matrixWorld.determinantAffine()<0,Se=Km(A,z,$,j,K);y.setMaterial(j,Ie);let De=$.index,Oe=1;if(j.wireframe===!0){if(De=Y.getWireframeAttribute($),De===void 0)return;Oe=2}let et=$.drawRange,lt=$.attributes.position,Fe=et.start*Oe,Rt=(et.start+et.count)*Oe;Ee!==null&&(Fe=Math.max(Fe,Ee.start*Oe),Rt=Math.min(Rt,(Ee.start+Ee.count)*Oe)),De!==null?(Fe=Math.max(Fe,0),Rt=Math.min(Rt,De.count)):lt!=null&&(Fe=Math.max(Fe,0),Rt=Math.min(Rt,lt.count));let tn=Rt-Fe;if(tn<0||tn===1/0)return;ge.setup(K,j,Se,$,De);let Vt,kt=ue;if(De!==null&&(Vt=he.get(De),kt=J,kt.setIndex(Vt)),K.isMesh)j.wireframe===!0?(y.setLineWidth(j.wireframeLinewidth*nt()),kt.setMode(B.LINES)):kt.setMode(B.TRIANGLES);else if(K.isLine){let Mn=j.linewidth;Mn===void 0&&(Mn=1),y.setLineWidth(Mn*nt()),K.isLineSegments?kt.setMode(B.LINES):K.isLineLoop?kt.setMode(B.LINE_LOOP):kt.setMode(B.LINE_STRIP)}else K.isPoints?kt.setMode(B.POINTS):K.isSprite&&kt.setMode(B.TRIANGLES);if(K.isBatchedMesh)if(Ke.get("WEBGL_multi_draw"))kt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let Mn=K._multiDrawStarts,Pe=K._multiDrawCounts,Cn=K._multiDrawCount,gt=De?he.get(De).bytesPerElement:1,ni=U.get(j).currentProgram.getUniforms();for(let Ti=0;Ti<Cn;Ti++)ni.setValue(B,"_gl_DrawID",Ti),kt.render(Mn[Ti]/gt,Pe[Ti])}else if(K.isInstancedMesh)kt.renderInstances(Fe,tn,K.count);else if($.isInstancedBufferGeometry){let Mn=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Pe=Math.min($.instanceCount,Mn);kt.renderInstances(Fe,tn,Pe)}else kt.render(Fe,tn)};function Ud(A,z,$,j){N!==null&&A.isNodeMaterial&&N.setObject(j,A),st===!0&&xe.setState(A,$,!1),A.transparent===!0&&A.side===Wt&&A.forceSinglePass===!1?(A.side=on,A.needsUpdate=!0,Io(A,z,j),A.side=ki,A.needsUpdate=!0,Io(A,z,j),A.side=Wt):Io(A,z,j)}this.compile=function(A,z,$=null){$===null&&($=A),N!==null&&N.renderStart(A,z,$),T=te.get($),T.init(z),w.push(T),$.traverseVisible(function(K){K.isLight&&K.layers.test(z.layers)&&(T.pushLight(K),K.castShadow&&T.pushShadow(K))}),A!==$&&A.traverseVisible(function(K){K.isLight&&K.layers.test(z.layers)&&(T.pushLight(K),K.castShadow&&T.pushShadow(K))}),T.setupLights(),N!==null&&N.updateLights(T.state.lightsArray),pt=this.localClippingEnabled,st=xe.init(this.clippingPlanes,pt),st===!0&&xe.setGlobalState(this.clippingPlanes,z),N!==null&&Te.render(T.state.shadowsArray,$,z);let j=new Set;return A.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let Ee=K.material;if(Ee)if(Array.isArray(Ee))for(let Ie=0;Ie<Ee.length;Ie++){let Se=Ee[Ie];Ud(Se,$,z,K),j.add(Se)}else Ud(Ee,$,z,K),j.add(Ee)}),T=w.pop(),N!==null&&N.renderEnd(),j},this.compileAsync=function(A,z,$=null){let j=this.compile(A,z,$);return new Promise(K=>{function Ee(){if(j.forEach(function(Ie){let De=U.get(Ie).currentProgram;(De===void 0||De.isReady())&&j.delete(Ie)}),j.size===0){K(A);return}setTimeout(Ee,10)}Ke.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let lh=null;function Xm(A){lh&&lh(A)}function kd(){Us.stop()}function Od(){Us.start()}let Us=new Op;Us.setAnimationLoop(Xm),typeof self<"u"&&Us.setContext(self),this.setAnimationLoop=function(A){lh=A,Le.setAnimationLoop(A),A===null?Us.stop():Us.start()},Le.addEventListener("sessionstart",kd),Le.addEventListener("sessionend",Od),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){Ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;N!==null&&N.renderStart(A,z);let $=Le.enabled===!0&&Le.isPresenting===!0,j=R!==null&&(oe===null||$)&&R.begin(P,oe);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(z),z=Le.getCamera()),A.isScene===!0&&A.onBeforeRender(P,A,z,oe),T=te.get(A,w.length),T.init(z),T.state.textureUnits=V.getTextureUnits(),w.push(T),Je.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Xe.setFromProjectionMatrix(Je,mi,z.reversedDepth),pt=this.localClippingEnabled,st=xe.init(this.clippingPlanes,pt),S=de.get(A,C.length),S.init(),C.push(S),Le.enabled===!0&&Le.isPresenting===!0){let Ie=P.xr.getDepthSensingMesh();Ie!==null&&ch(Ie,z,-1/0,P.sortObjects)}ch(A,z,0,P.sortObjects),S.finish(),N!==null&&N.updateLights(T.state.lightsArray),P.sortObjects===!0&&S.sort(ye,Ce),ot=Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1,ot&&me.addToRenderList(S,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),st===!0&&xe.beginShadows();let K=T.state.shadowsArray;if(Te.render(K,A,z),st===!0&&xe.endShadows(),(j&&R.hasRenderPass())===!1){let Ie=S.opaque,Se=S.transmissive;if(T.setupLights(),z.isArrayCamera){let De=z.cameras;if(Se.length>0)for(let Oe=0,et=De.length;Oe<et;Oe++){let lt=De[Oe];zd(Ie,Se,A,lt)}ot&&me.render(A);for(let Oe=0,et=De.length;Oe<et;Oe++){let lt=De[Oe];Bd(S,A,lt,lt.viewport)}}else Se.length>0&&zd(Ie,Se,A,z),ot&&me.render(A),Bd(S,A,z)}oe!==null&&X===0&&(V.updateMultisampleRenderTarget(oe),V.updateRenderTargetMipmap(oe)),j&&R.end(P),A.isScene===!0&&A.onAfterRender(P,A,z),ge.resetDefaultState(),Z=-1,ne=null,w.pop(),w.length>0?(T=w[w.length-1],V.setTextureUnits(T.state.textureUnits),st===!0&&xe.setGlobalState(P.clippingPlanes,T.state.camera)):T=null,C.pop(),C.length>0?S=C[C.length-1]:S=null,N!==null&&N.renderEnd()};function ch(A,z,$,j){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)$=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLightProbeGrid)T.pushLightProbeGrid(A);else if(A.isLight)T.pushLight(A),A.castShadow&&T.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(Xe)){j&&St.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Je);let Ie=W.update(A),Se=A.material;Se.visible&&S.push(A,Ie,Se,$,St.z,null,z)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(Xe))){let Ie=W.update(A),Se=A.material;if(j&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),St.copy(A.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),St.copy(Ie.boundingSphere.center)),St.applyMatrix4(A.matrixWorld).applyMatrix4(Je)),Array.isArray(Se)){let De=Ie.groups;for(let Oe=0,et=De.length;Oe<et;Oe++){let lt=De[Oe],Fe=Se[lt.materialIndex];Fe&&Fe.visible&&S.push(A,Ie,Fe,$,St.z,lt,z)}}else Se.visible&&S.push(A,Ie,Se,$,St.z,null,z)}}let Ee=A.children;for(let Ie=0,Se=Ee.length;Ie<Se;Ie++)ch(Ee[Ie],z,$,j)}function Bd(A,z,$,j){let{opaque:K,transmissive:Ee,transparent:Ie}=A;T.setupLightsView($),st===!0&&xe.setGlobalState(P.clippingPlanes,$),j&&y.viewport(se.copy(j)),K.length>0&&Po(K,z,$),Ee.length>0&&Po(Ee,z,$),Ie.length>0&&Po(Ie,z,$),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function zd(A,z,$,j){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[j.id]===void 0){let Fe=Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[j.id]=new Kt(1,1,{generateMipmaps:!0,type:Fe?ln:Wn,minFilter:vi,samples:Math.max(4,E.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}let Ee=T.state.transmissionRenderTarget[j.id],Ie=j.viewport||se;Ee.setSize(Ie.z*P.transmissionResolutionScale,Ie.w*P.transmissionResolutionScale);let Se=P.getRenderTarget(),De=P.getActiveCubeFace(),Oe=P.getActiveMipmapLevel();P.setRenderTarget(Ee),P.getClearColor(ft),Ye=P.getClearAlpha(),Ye<1&&P.setClearColor(16777215,.5),P.clear(),ot&&me.render($);let et=P.toneMapping;P.toneMapping=bi;let lt=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),T.setupLightsView(j),st===!0&&xe.setGlobalState(P.clippingPlanes,j),Po(A,$,j),V.updateMultisampleRenderTarget(Ee),V.updateRenderTargetMipmap(Ee),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let Rt=0,tn=z.length;Rt<tn;Rt++){let Vt=z[Rt],{object:kt,geometry:Mn,material:Pe,group:Cn}=Vt;if(Pe.side===Wt&&kt.layers.test(j.layers)){let gt=Pe.side;Pe.side=on,Pe.needsUpdate=!0,Hd(kt,$,j,Mn,Pe,Cn),Pe.side=gt,Pe.needsUpdate=!0,Fe=!0}}Fe===!0&&(V.updateMultisampleRenderTarget(Ee),V.updateRenderTargetMipmap(Ee))}P.setRenderTarget(Se,De,Oe),P.setClearColor(ft,Ye),lt!==void 0&&(j.viewport=lt),P.toneMapping=et}function Po(A,z,$){let j=z.isScene===!0?z.overrideMaterial:null;for(let K=0,Ee=A.length;K<Ee;K++){let Ie=A[K],{object:Se,geometry:De,group:Oe}=Ie,et=Ie.material;et.allowOverride===!0&&j!==null&&(et=j),Se.layers.test($.layers)&&Hd(Se,z,$,De,et,Oe)}}function Hd(A,z,$,j,K,Ee){N!==null&&K.isNodeMaterial&&N.setObject(A,K),A.onBeforeRender(P,z,$,j,K,Ee),A.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),K.onBeforeRender(P,z,$,j,A,Ee),K.transparent===!0&&K.side===Wt&&K.forceSinglePass===!1?(K.side=on,K.needsUpdate=!0,P.renderBufferDirect($,z,j,K,A,Ee),K.side=ki,K.needsUpdate=!0,P.renderBufferDirect($,z,j,K,A,Ee),K.side=Wt):P.renderBufferDirect($,z,j,K,A,Ee),A.onAfterRender(P,z,$,j,K,Ee)}function Io(A,z,$){z.isScene!==!0&&(z=Pt);let j=U.get(A),K=T.state.lights,Ee=T.state.shadowsArray,Ie=K.state.version,Se=re.getParameters(A,K.state,Ee,z,$,T.state.lightProbeGridArray),De=re.getProgramCacheKey(Se),Oe=j.programs;j.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?z.environment:null,j.fog=z.fog;let et=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;j.envMap=ie.get(A.envMap||j.environment,et),j.envMapRotation=j.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,Oe===void 0&&(A.addEventListener("dispose",Bn),Oe=new Map,j.programs=Oe);let lt=Oe.get(De);if(lt!==void 0){if(j.currentProgram===lt&&j.lightsStateVersion===Ie)return Vd(A,Se),lt}else Se.uniforms=re.getUniforms(A),N!==null&&A.isNodeMaterial&&N.build(A,$,Se),A.onBeforeCompile(Se,P),lt=re.acquireProgram(Se,De),Oe.set(De,lt),j.uniforms=Se.uniforms;let Fe=j.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Fe.clippingPlanes=xe.uniform),Vd(A,Se),j.needsLights=Jm(A),j.lightsStateVersion=Ie,j.needsLights&&(Fe.ambientLightColor.value=K.state.ambient,Fe.lightProbe.value=K.state.probe,Fe.sunLights.value=K.state.sun,Fe.sunLightShadows.value=K.state.sunShadow,Fe.directionalLights.value=K.state.directional,Fe.directionalLightShadows.value=K.state.directionalShadow,Fe.spotLights.value=K.state.spot,Fe.spotLightShadows.value=K.state.spotShadow,Fe.rectAreaLights.value=K.state.rectArea,Fe.ltc_1.value=K.state.rectAreaLTC1,Fe.ltc_2.value=K.state.rectAreaLTC2,Fe.pointLights.value=K.state.point,Fe.pointLightShadows.value=K.state.pointShadow,Fe.hemisphereLights.value=K.state.hemi,Fe.sunShadowMatrix.value=K.state.sunShadowMatrix,Fe.sunShadowCascade.value=K.state.sunShadowCascade,Fe.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Fe.spotLightMatrix.value=K.state.spotLightMatrix,Fe.spotLightMap.value=K.state.spotLightMap,Fe.pointShadowMatrix.value=K.state.pointShadowMatrix),j.lightProbeGrid=T.state.lightProbeGridArray.length>0,j.currentProgram=lt,j.uniformsList=null,lt}function Gd(A){if(A.uniformsList===null){let z=A.currentProgram.getUniforms();A.uniformsList=Qr.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function Vd(A,z){let $=U.get(A);$.outputColorSpace=z.outputColorSpace,$.batching=z.batching,$.batchingColor=z.batchingColor,$.instancing=z.instancing,$.instancingColor=z.instancingColor,$.instancingMorph=z.instancingMorph,$.skinning=z.skinning,$.morphTargets=z.morphTargets,$.morphNormals=z.morphNormals,$.morphColors=z.morphColors,$.morphTargetsCount=z.morphTargetsCount,$.numClippingPlanes=z.numClippingPlanes,$.numIntersection=z.numClipIntersection,$.vertexAlphas=z.vertexAlphas,$.vertexTangents=z.vertexTangents,$.toneMapping=z.toneMapping}function jm(A,z){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;v.setFromMatrixPosition(z.matrixWorld);for(let $=0,j=A.length;$<j;$++){let K=A[$];if(K.texture!==null&&K.boundingBox.containsPoint(v))return K}return null}function Km(A,z,$,j,K){z.isScene!==!0&&(z=Pt),V.resetTextureUnits();let Ee=z.fog,Ie=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?z.environment:null,Se=oe===null?P.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Ze.workingColorSpace,De=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,Oe=ie.get(j.envMap||Ie,De),et=j.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,lt=!!$.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Fe=!!$.morphAttributes.position,Rt=!!$.morphAttributes.normal,tn=!!$.morphAttributes.color,Vt=bi;j.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Vt=P.toneMapping);let kt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Mn=kt!==void 0?kt.length:0,Pe=U.get(j),Cn=T.state.lights;if(st===!0&&(pt===!0||A!==ne)){let Ht=A===ne&&j.id===Z;xe.setState(j,A,Ht)}let gt=!1;j.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==Cn.state.version||Pe.outputColorSpace!==Se||K.isBatchedMesh&&Pe.batching===!1||!K.isBatchedMesh&&Pe.batching===!0||K.isBatchedMesh&&Pe.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&Pe.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&Pe.instancing===!1||!K.isInstancedMesh&&Pe.instancing===!0||K.isSkinnedMesh&&Pe.skinning===!1||!K.isSkinnedMesh&&Pe.skinning===!0||K.isInstancedMesh&&Pe.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Pe.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Pe.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Pe.instancingMorph===!1&&K.morphTexture!==null||Pe.envMap!==Oe||j.fog===!0&&Pe.fog!==Ee||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==xe.numPlanes||Pe.numIntersection!==xe.numIntersection)||Pe.vertexAlphas!==et||Pe.vertexTangents!==lt||Pe.morphTargets!==Fe||Pe.morphNormals!==Rt||Pe.morphColors!==tn||Pe.toneMapping!==Vt||Pe.morphTargetsCount!==Mn||!!Pe.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(gt=!0):(gt=!0,Pe.__version=j.version);let ni=Pe.currentProgram;gt===!0&&(ni=Io(j,z,K),N&&j.isNodeMaterial&&N.onUpdateProgram(j,ni,Pe));let Ti=!1,ds=!1,hr=!1,Ft=ni.getUniforms(),Zt=Pe.uniforms;if(y.useProgram(ni.program)&&(Ti=!0,ds=!0,hr=!0),j.id!==Z&&(Z=j.id,ds=!0),Pe.needsLights){let Ht=jm(T.state.lightProbeGridArray,K);Pe.lightProbeGrid!==Ht&&(Pe.lightProbeGrid=Ht,ds=!0)}if(Ti||ne!==A){y.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ft.setValue(B,"projectionMatrix",A.projectionMatrix),Ft.setValue(B,"viewMatrix",A.matrixWorldInverse);let ps=Ft.map.cameraPosition;ps!==void 0&&ps.setValue(B,Mt.setFromMatrixPosition(A.matrixWorld)),E.logarithmicDepthBuffer&&Ft.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Ft.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),ne!==A&&(ne=A,ds=!0,hr=!0)}if(Pe.needsLights&&(Cn.state.sunShadowMap.length>0&&Ft.setValue(B,"sunShadowMap",Cn.state.sunShadowMap,V),Cn.state.directionalShadowMap.length>0&&Ft.setValue(B,"directionalShadowMap",Cn.state.directionalShadowMap,V),Cn.state.spotShadowMap.length>0&&Ft.setValue(B,"spotShadowMap",Cn.state.spotShadowMap,V),Cn.state.pointShadowMap.length>0&&Ft.setValue(B,"pointShadowMap",Cn.state.pointShadowMap,V)),K.isSkinnedMesh){Ft.setOptional(B,K,"bindMatrix"),Ft.setOptional(B,K,"bindMatrixInverse");let Ht=K.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),Ft.setValue(B,"boneTexture",Ht.boneTexture,V))}K.isBatchedMesh&&(Ft.setOptional(B,K,"batchingTexture"),Ft.setValue(B,"batchingTexture",K._matricesTexture,V),Ft.setOptional(B,K,"batchingIdTexture"),Ft.setValue(B,"batchingIdTexture",K._indirectTexture,V),Ft.setOptional(B,K,"batchingColorTexture"),K._colorsTexture!==null&&Ft.setValue(B,"batchingColorTexture",K._colorsTexture,V));let fs=$.morphAttributes;if((fs.position!==void 0||fs.normal!==void 0||fs.color!==void 0)&&L.update(K,$,ni),(ds||Pe.receiveShadow!==K.receiveShadow)&&(Pe.receiveShadow=K.receiveShadow,Ft.setValue(B,"receiveShadow",K.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&z.environment!==null&&(Zt.envMapIntensity.value=z.environmentIntensity),Zt.dfgLUT!==void 0&&(Zt.dfgLUT.value=X_()),ds){if(Ft.setValue(B,"toneMappingExposure",P.toneMappingExposure),Pe.needsLights&&Ym(Zt,hr),Ee&&j.fog===!0&&pe.refreshFogUniforms(Zt,Ee),pe.refreshMaterialUniforms(Zt,j,ae,ee,T.state.transmissionRenderTarget[A.id]),Pe.needsLights&&Pe.lightProbeGrid){let Ht=Pe.lightProbeGrid;Zt.probesSH.value=Ht.texture,Zt.probesMin.value.copy(Ht.boundingBox.min),Zt.probesMax.value.copy(Ht.boundingBox.max),Zt.probesResolution.value.copy(Ht.resolution)}Qr.upload(B,Gd(Pe),Zt,V)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Qr.upload(B,Gd(Pe),Zt,V),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Ft.setValue(B,"center",K.center),Ft.setValue(B,"modelViewMatrix",K.modelViewMatrix),Ft.setValue(B,"normalMatrix",K.normalMatrix),Ft.setValue(B,"modelMatrix",K.matrixWorld),j.uniformsGroups!==void 0){let Ht=j.uniformsGroups;for(let ps=0,ur=Ht.length;ps<ur;ps++){let qd=Ht[ps];le.update(qd,ni),le.bind(qd,ni)}}return ni}function Ym(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.sunLights.needsUpdate=z,A.sunLightShadows.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function Jm(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return oe},this.setRenderTargetTextures=function(A,z,$){let j=U.get(A);j.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),U.get(A.texture).__webglTexture=z,U.get(A.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:$,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,z){let $=U.get(A);$.__webglFramebuffer=z,$.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,$=0){oe=A,Q=z,X=$;let j=null,K=!1,Ee=!1;if(A){let Se=U.get(A);if(Se.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(B.FRAMEBUFFER,Se.__webglFramebuffer),se.copy(A.viewport),Re.copy(A.scissor),Ae=A.scissorTest,y.viewport(se),y.scissor(Re),y.setScissorTest(Ae),Z=-1;return}else if(Se.__webglFramebuffer===void 0)V.setupRenderTarget(A);else if(Se.__hasExternalTextures)V.rebindTextures(A,U.get(A.texture).__webglTexture,U.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let et=A.depthTexture;if(Se.__boundDepthTexture!==et){if(et!==null&&U.has(et)&&(A.width!==et.image.width||A.height!==et.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");V.setupDepthRenderbuffer(A)}}let De=A.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Ee=!0);let Oe=U.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Oe[z])?j=Oe[z][$]:j=Oe[z],K=!0):A.samples>0&&V.useMultisampledRTT(A)===!1?j=U.get(A).__webglMultisampledFramebuffer:Array.isArray(Oe)?j=Oe[$]:j=Oe,se.copy(A.viewport),Re.copy(A.scissor),Ae=A.scissorTest}else se.copy(_e).multiplyScalar(ae).floor(),Re.copy(qe).multiplyScalar(ae).floor(),Ae=Et;if($!==0&&(j=H),y.bindFramebuffer(B.FRAMEBUFFER,j)&&y.drawBuffers(A,j),y.viewport(se),y.scissor(Re),y.setScissorTest(Ae),K){let Se=U.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+z,Se.__webglTexture,$)}else if(Ee){let Se=z;for(let De=0;De<A.textures.length;De++){let Oe=U.get(A.textures[De]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+De,Oe.__webglTexture,$,Se)}}else if(A!==null&&$!==0){let Se=U.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Se.__webglTexture,$)}Z=-1};function Wd(A){let z=U.get(A);return(z.__readFormat!==A.format||z.__readType!==A.type)&&(z.__readFormat=A.format,z.__readType=A.type,z.__formatReadable=E.textureFormatReadable(A.format),z.__typeReadable=E.textureTypeReadable(A.type)),z}this.readRenderTargetPixels=function(A,z,$,j,K,Ee,Ie,Se=0){if(!(A&&A.isWebGLRenderTarget)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=U.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ie!==void 0&&(De=De[Ie]),De){y.bindFramebuffer(B.FRAMEBUFFER,De);try{let Oe=A.textures[Se],et=Oe.format,lt=Oe.type;A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Se);let Fe=Wd(Oe);if(Fe.__formatReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Fe.__typeReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-j&&$>=0&&$<=A.height-K&&B.readPixels(z,$,j,K,fe.convert(et),fe.convert(lt),Ee)}finally{let Oe=oe!==null?U.get(oe).__webglFramebuffer:null;y.bindFramebuffer(B.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(A,z,$,j,K,Ee,Ie,Se=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=U.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ie!==void 0&&(De=De[Ie]),De)if(z>=0&&z<=A.width-j&&$>=0&&$<=A.height-K){y.bindFramebuffer(B.FRAMEBUFFER,De);let Oe=A.textures[Se],et=Oe.format,lt=Oe.type;A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Se);let Fe=Wd(Oe);if(Fe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Fe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Rt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Rt),B.bufferData(B.PIXEL_PACK_BUFFER,Ee.byteLength,B.STREAM_READ),B.readPixels(z,$,j,K,fe.convert(et),fe.convert(lt),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let tn=oe!==null?U.get(oe).__webglFramebuffer:null;y.bindFramebuffer(B.FRAMEBUFFER,tn);let Vt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await dp(B,Vt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Rt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Ee),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(Rt),B.deleteSync(Vt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,z=null,$=0){let j=Math.pow(2,-$),K=Math.floor(A.image.width*j),Ee=Math.floor(A.image.height*j),Ie=z!==null?z.x:0,Se=z!==null?z.y:0;V.setTexture2D(A,0),B.copyTexSubImage2D(B.TEXTURE_2D,$,0,0,Ie,Se,K,Ee),y.unbindTexture()},this.copyTextureToTexture=function(A,z,$=null,j=null,K=0,Ee=0){let Ie,Se,De,Oe,et,lt,Fe,Rt,tn,Vt=A.isCompressedTexture?A.mipmaps[Ee]:A.image;if($!==null)Ie=$.max.x-$.min.x,Se=$.max.y-$.min.y,De=$.isBox3?$.max.z-$.min.z:1,Oe=$.min.x,et=$.min.y,lt=$.isBox3?$.min.z:0;else{let Zt=Math.pow(2,-K);Ie=Math.floor(Vt.width*Zt),Se=Math.floor(Vt.height*Zt),A.isDataArrayTexture?De=Vt.depth:A.isData3DTexture?De=Math.floor(Vt.depth*Zt):De=1,Oe=0,et=0,lt=0}j!==null?(Fe=j.x,Rt=j.y,tn=j.z):(Fe=0,Rt=0,tn=0);let kt=fe.convert(z.format),Mn=fe.convert(z.type),Pe;z.isData3DTexture?(V.setTexture3D(z,0),Pe=B.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(V.setTexture2DArray(z,0),Pe=B.TEXTURE_2D_ARRAY):(V.setTexture2D(z,0),Pe=B.TEXTURE_2D),y.activeTexture(B.TEXTURE0),y.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,z.flipY),y.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),y.pixelStorei(B.UNPACK_ALIGNMENT,z.unpackAlignment);let Cn=y.getParameter(B.UNPACK_ROW_LENGTH),gt=y.getParameter(B.UNPACK_IMAGE_HEIGHT),ni=y.getParameter(B.UNPACK_SKIP_PIXELS),Ti=y.getParameter(B.UNPACK_SKIP_ROWS),ds=y.getParameter(B.UNPACK_SKIP_IMAGES);y.pixelStorei(B.UNPACK_ROW_LENGTH,Vt.width),y.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Vt.height),y.pixelStorei(B.UNPACK_SKIP_PIXELS,Oe),y.pixelStorei(B.UNPACK_SKIP_ROWS,et),y.pixelStorei(B.UNPACK_SKIP_IMAGES,lt);let hr=A.isDataArrayTexture||A.isData3DTexture,Ft=z.isDataArrayTexture||z.isData3DTexture;if(A.isDepthTexture){let Zt=U.get(A),fs=U.get(z),Ht=U.get(Zt.__renderTarget),ps=U.get(fs.__renderTarget);y.bindFramebuffer(B.READ_FRAMEBUFFER,Ht.__webglFramebuffer),y.bindFramebuffer(B.DRAW_FRAMEBUFFER,ps.__webglFramebuffer);for(let ur=0;ur<De;ur++)hr&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,U.get(A).__webglTexture,K,lt+ur),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,U.get(z).__webglTexture,Ee,tn+ur)),B.blitFramebuffer(Oe,et,Ie,Se,Fe,Rt,Ie,Se,B.DEPTH_BUFFER_BIT,B.NEAREST);y.bindFramebuffer(B.READ_FRAMEBUFFER,null),y.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(K!==0||A.isRenderTargetTexture||U.has(A)){let Zt=U.get(A),fs=U.get(z);y.bindFramebuffer(B.READ_FRAMEBUFFER,k),y.bindFramebuffer(B.DRAW_FRAMEBUFFER,q);for(let Ht=0;Ht<De;Ht++)hr?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Zt.__webglTexture,K,lt+Ht):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Zt.__webglTexture,K),Ft?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,fs.__webglTexture,Ee,tn+Ht):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,fs.__webglTexture,Ee),K!==0?B.blitFramebuffer(Oe,et,Ie,Se,Fe,Rt,Ie,Se,B.COLOR_BUFFER_BIT,B.NEAREST):Ft?B.copyTexSubImage3D(Pe,Ee,Fe,Rt,tn+Ht,Oe,et,Ie,Se):B.copyTexSubImage2D(Pe,Ee,Fe,Rt,Oe,et,Ie,Se);y.bindFramebuffer(B.READ_FRAMEBUFFER,null),y.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Ft?A.isDataTexture||A.isData3DTexture?B.texSubImage3D(Pe,Ee,Fe,Rt,tn,Ie,Se,De,kt,Mn,Vt.data):z.isCompressedArrayTexture?B.compressedTexSubImage3D(Pe,Ee,Fe,Rt,tn,Ie,Se,De,kt,Vt.data):B.texSubImage3D(Pe,Ee,Fe,Rt,tn,Ie,Se,De,kt,Mn,Vt):A.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Ee,Fe,Rt,Ie,Se,kt,Mn,Vt.data):A.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Ee,Fe,Rt,Vt.width,Vt.height,kt,Vt.data):B.texSubImage2D(B.TEXTURE_2D,Ee,Fe,Rt,Ie,Se,kt,Mn,Vt);y.pixelStorei(B.UNPACK_ROW_LENGTH,Cn),y.pixelStorei(B.UNPACK_IMAGE_HEIGHT,gt),y.pixelStorei(B.UNPACK_SKIP_PIXELS,ni),y.pixelStorei(B.UNPACK_SKIP_ROWS,Ti),y.pixelStorei(B.UNPACK_SKIP_IMAGES,ds),Ee===0&&z.generateMipmaps&&B.generateMipmap(Pe),y.unbindTexture()},this.initRenderTarget=function(A){U.get(A).__webglFramebuffer===void 0&&V.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?V.setTextureCube(A,0):A.isData3DTexture?V.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?V.setTexture2DArray(A,0):V.setTexture2D(A,0),y.unbindTexture()},this.resetState=function(){Q=0,X=0,oe=null,y.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}};var Tc=class extends qs{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new ht;e.deleteAttribute("uv");let t=new we({side:on}),n=new we,s=new $s(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new ve(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new $i(e,n,6),o=new Nt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new ve(e,na(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new ve(e,na(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new ve(e,na(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new ve(e,na(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new ve(e,na(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new ve(e,na(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function na(i){return new Xa({color:0,emissive:16777215,emissiveIntensity:i})}function Xp(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new _t,c=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=qp(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<a[h].length;++x)f.push(a[h][x][d]);let m=qp(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function qp(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new Ct(a,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<t;m++){let x=h.getComponent(d,m);o.setComponent(d+u,m,x)}}else a.set(h.array,l);l+=h.count*t}return s!==void 0&&(o.gpuType=s),o}function Ru(i,e){if(e===su)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Jr||e===fo){let t=i.getIndex();if(t===null){let r=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Jr)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function jp(i){let e=new Map,t=new Map,n=i.clone();return Kp(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Kp(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Kp(i.children[n],e.children[n],t)}var sa=class extends Fi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Nu(t)}),this.register(function(t){return new Uu(t)}),this.register(function(t){return new qu(t)}),this.register(function(t){return new Xu(t)}),this.register(function(t){return new ju(t)}),this.register(function(t){return new Ou(t)}),this.register(function(t){return new Bu(t)}),this.register(function(t){return new zu(t)}),this.register(function(t){return new Hu(t)}),this.register(function(t){return new Fu(t)}),this.register(function(t){return new Gu(t)}),this.register(function(t){return new ku(t)}),this.register(function(t){return new Wu(t)}),this.register(function(t){return new Vu(t)}),this.register(function(t){return new Lu(t)}),this.register(function(t){return new Ec(t,rt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Ec(t,rt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Ku(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=is.extractUrlBase(e);a=is.resolveURL(c,this.path)}else a=is.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Wr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Qp){try{a[rt.KHR_BINARY_GLTF]=new Yu(e)}catch(u){s&&s(u);return}r=JSON.parse(a[rt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new nd(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case rt.KHR_MATERIALS_UNLIT:a[u]=new Du;break;case rt.KHR_DRACO_MESH_COMPRESSION:a[u]=new Ju(r,this.dracoLoader);break;case rt.KHR_TEXTURE_TRANSFORM:a[u]=new Zu;break;case rt.KHR_MESH_QUANTIZATION:a[u]=new $u;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function j_(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function en(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var rt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Lu=class{constructor(e){this.parser=e,this.name=rt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new be(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],In);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Qs(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new $s(h),c.distance=u;break;case"spot":c=new Ni(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),zi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},Du=class{constructor(){this.name=rt.KHR_MATERIALS_UNLIT}getMaterialType(){return mt}extendParams(e,t,n){let s=[];e.color=new be(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],In),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Gt))}return Promise.all(s)}},Fu=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=en(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Nu=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return en(this.parser,e,this.name)!==null?mn:null}extendMaterialParams(e,t){let n=en(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ue(r,r)}return Promise.all(s)}},Uu=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return en(this.parser,e,this.name)!==null?mn:null}extendMaterialParams(e,t){let n=en(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},ku=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return en(this.parser,e,this.name)!==null?mn:null}extendMaterialParams(e,t){let n=en(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},Ou=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_SHEEN}getMaterialType(e){return en(this.parser,e,this.name)!==null?mn:null}extendMaterialParams(e,t){let n=en(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new be(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],In)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Gt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},Bu=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return en(this.parser,e,this.name)!==null?mn:null}extendMaterialParams(e,t){let n=en(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},zu=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_VOLUME}getMaterialType(e){return en(this.parser,e,this.name)!==null?mn:null}extendMaterialParams(e,t){let n=en(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new be().setRGB(r[0],r[1],r[2],In),Promise.all(s)}},Hu=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_IOR}getMaterialType(e){return en(this.parser,e,this.name)!==null?mn:null}extendMaterialParams(e,t){let n=en(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Gu=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return en(this.parser,e,this.name)!==null?mn:null}extendMaterialParams(e,t){let n=en(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new be().setRGB(r[0],r[1],r[2],In),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Gt)),Promise.all(s)}},Vu=class{constructor(e){this.parser=e,this.name=rt.EXT_MATERIALS_BUMP}getMaterialType(e){return en(this.parser,e,this.name)!==null?mn:null}extendMaterialParams(e,t){let n=en(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},Wu=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return en(this.parser,e,this.name)!==null?mn:null}extendMaterialParams(e,t){let n=en(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},qu=class{constructor(e){this.parser=e,this.name=rt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Xu=class{constructor(e){this.parser=e,this.name=rt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},ju=class{constructor(e){this.parser=e,this.name=rt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},Ec=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},Ku=class{constructor(e){this.name=rt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==ai.TRIANGLES&&c.mode!==ai.TRIANGLE_STRIP&&c.mode!==ai.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let m of u){let x=new je,g=new O,p=new Tn,b=new O(1,1,1),M=new $i(m.geometry,m.material,d);for(let S=0;S<d;S++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,S),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,S),l.SCALE&&b.fromBufferAttribute(l.SCALE,S),M.setMatrixAt(S,x.compose(g,p,b));let v=null;for(let S in l)if(S==="_COLOR_0"){let T=l[S];M.instanceColor=new Gn(T.array,T.itemSize,T.normalized)}else if(S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"){if(v===null){let C=M.geometry;v=new _t,v.name=C.name;for(let w in C.attributes)v.setAttribute(w,C.attributes[w]);for(let w in C.morphAttributes)v.morphAttributes[w]=C.morphAttributes[w];C.index!==null&&v.setIndex(C.index),v.morphTargetsRelative=C.morphTargetsRelative;for(let w of C.groups)v.addGroup(w.start,w.count,w.materialIndex);C.boundingBox!==null&&(v.boundingBox=C.boundingBox.clone()),C.boundingSphere!==null&&(v.boundingSphere=C.boundingSphere.clone()),v.drawRange.start=C.drawRange.start,v.drawRange.count=C.drawRange.count,v.userData=Object.assign({},C.userData),M.geometry=v}let T=l[S];v.setAttribute(S,new Gn(T.array,T.itemSize,T.normalized))}Nt.prototype.copy.call(M,m),this.parser.assignFinalMaterial(M),f.push(M)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Qp="glTF",vo=12,Yp={JSON:1313821514,BIN:5130562},Yu=class{constructor(e){this.name=rt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,vo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Qp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-vo,r=new DataView(e,vo),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===Yp.JSON){let c=new Uint8Array(e,vo+a,o);this.content=n.decode(c)}else if(l===Yp.BIN){let c=vo+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Ju=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=rt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=ed[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=ed[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=ia[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let m in f.attributes){let x=f.attributes[m],g=l[m];g!==void 0&&(x.normalized=g)}u(f)},o,c,In,d)})})}},Zu=class{constructor(){this.name=rt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},$u=class{constructor(){this.name=rt.KHR_MESH_QUANTIZATION}},Ac=class extends Li{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,m=e*c,x=m-c,g=-2*f+3*d,p=f-d,b=1-g,M=p-d+u;for(let v=0;v!==o;v++){let S=a[x+v+o],T=a[x+v+l]*h,C=a[m+v+o],w=a[m+v]*h;r[v]=b*S+M*T+g*C+p*w}return r}},K_=new Tn,Qu=class extends Ac{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return K_.fromArray(r).normalize().toArray(r),r}},ai={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ia={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Jp={9728:$t,9729:Qt,9984:Dl,9985:jr,9986:sr,9987:vi},Zp={33071:si,33648:Rr,10497:Ri},Cu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ed={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Rs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Y_={CUBICSPLINE:void 0,LINEAR:Vs,STEP:Gs},Pu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function J_(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new we({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ki})),i.DefaultMaterial}function or(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function zi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Z_(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function $_(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Q_(i){let e,t=i.extensions&&i.extensions[rt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Iu(t.attributes):e=i.indices+":"+Iu(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Iu(i.targets[n]);return e}function Iu(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function td(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ey(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var ty=new je,nd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new j_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new Ka(this.options.manager):this.textureLoader=new Za(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Wr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return or(r,o,s),zi(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[rt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(is.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=Cu[s.type],o=ia[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new Ct(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=Cu[s.type],c=ia[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0,x,g;if(f&&f!==u){let p=Math.floor(d/f),b="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,M=t.cache.get(b);M||(x=new c(o,p*f,s.count*f/h),M=new Fr(x,f/h),t.cache.add(b,M)),g=new Nr(M,l,d%f/h,m)}else o===null?x=new c(s.count*l):x=new c(o,d,s.count*l),g=new Ct(x,l,m);if(s.sparse!==void 0){let p=Cu.SCALAR,b=ia[s.sparse.indices.componentType],M=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,S=new b(a[1],M,s.sparse.count*p),T=new c(a[2],v,s.sparse.count*l);o!==null&&(g=new Ct(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let C=0,w=S.length;C<w;C++){let R=S[C];if(g.setX(R,T[C*l]),l>=2&&g.setY(R,T[C*l+1]),l>=3&&g.setZ(R,T[C*l+2]),l>=4&&g.setW(R,T[C*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=Jp[d.magFilter]||Qt,h.minFilter=Jp[d.minFilter]||vi,h.wrapS=Zp[d.wrapS]||Ri,h.wrapT=Zp[d.wrapT]||Ri,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==$t&&h.minFilter!==Qt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=s.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(x){let g=new an(x);g.needsUpdate=!0,d(g)}),t.load(is.resolveURL(u,r.path),m,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),zi(u,a),u.userData.mimeType=a.mimeType||ey(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[rt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[rt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[rt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new zr,Dn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Br,Dn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return we}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[rt.KHR_MATERIALS_UNLIT]){let u=s[rt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new be(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],In),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,Gt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Wt);let h=r.alphaMode||Pu.OPAQUE;if(h===Pu.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Pu.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==mt&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Ue(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==mt&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==mt){let u=r.emissiveFactor;o.emissive=new be().setRGB(u[0],u[1],u[2],In)}return r.emissiveTexture!==void 0&&a!==mt&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Gt)),Promise.all(c).then(function(){let u=new a(o);return r.name&&(u.name=r.name),zi(u,r),t.associations.set(u,{materials:e}),r.extensions&&or(s,u,r),u})}createUniqueName(e){let t=Ot.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[rt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return $p(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=Q_(c),u=s[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[rt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=$p(new _t,c,t),c.mode===ai.TRIANGLE_STRIP?d=d.then(f=>Ru(f,fo)):c.mode===ai.TRIANGLE_FAN&&(d=d.then(f=>Ru(f,Jr))),s[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?J_(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,m=h.length;f<m;f++){let x=h[f],g=a[f],p,b=c[f];if(g.mode===ai.TRIANGLES||g.mode===ai.TRIANGLE_STRIP||g.mode===ai.TRIANGLE_FAN||g.mode===void 0){let M=r.isSkinnedMesh===!0,v=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");M&&v===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=M&&v?new Oa(x,b):new ve(x,b),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(g.mode===ai.LINES)p=new Ks(x,b);else if(g.mode===ai.LINE_STRIP)p=new js(x,b);else if(g.mode===ai.LINE_LOOP)p=new za(x,b);else if(g.mode===ai.POINTS)p=new Ms(x,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&$_(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),zi(p,r),g.extensions&&or(s,p,g),t.assignFinalMaterial(p),u.push(p)}for(let f=0,m=u.length;f<m;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&or(s,u[0],r),u[0];let d=new wt;r.extensions&&or(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new sn(lu.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Ui(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),zi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let d=new je;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ba(o,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],m=s.samplers[f.sampler],x=f.target,g=x.node,p=s.parameters!==void 0?s.parameters[m.input]:m.input,b=s.parameters!==void 0?s.parameters[m.output]:m.output;x.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",b)),c.push(m),h.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],m=u[2],x=u[3],g=u[4],p=[];for(let M=0,v=d.length;M<v;M++){let S=d[M],T=f[M],C=m[M],w=x[M],R=g[M];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();let P=n._createAnimationTracks(S,T,C,w,R);if(P)for(let D=0;D<P.length;D++)p.push(P[D])}let b=new Vr(r,void 0,p);return zi(b,s),b})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,ty)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,m=u[0];h.pivot=new O().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],m.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new Ur:c.length>1?h=new wt:c.length===1?h=c[0]:h=new Nt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),zi(h,r),r.extensions&&or(n,h,r),r.matrix!==void 0){let u=new je;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new wt;n.name&&(r.name=s.createUniqueName(n.name)),zi(r,n),n.extensions&&or(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++){let d=l[h];d.parent!==null?r.add(jp(d)):r.add(d)}let c=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof Dn||d instanceof an)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}Rs[r.path]===Rs.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(Rs[r.path]){case Rs.weights:h=es;break;case Rs.rotation:h=Di;break;case Rs.translation:case Rs.scale:h=ns;break;default:n.itemSize===1?h=es:h=ns;break}let u=s.interpolation!==void 0?Y_[s.interpolation]:Vs,d=this._getArrayFromAccessor(n);for(let f=0,m=l.length;f<m;f++){let x=new h(l[f]+"."+Rs[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),a.push(x)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=td(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Di?Qu:Ac;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function ny(i,e,t){let n=e.attributes,s=new Ln;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new O(l[0],l[1],l[2]),new O(c[0],c[1],c[2])),o.normalized){let h=td(ia[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new O,l=new O;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){let x=td(ia[d.componentType]);l.multiplyScalar(x)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new Hn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function $p(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(let a in n){let o=ed[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return Ze.workingColorSpace!==In&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ze.workingColorSpace}" not supported.`),zi(i,e),ny(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Z_(i,e.targets,t):i})}var em=(function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?o(e):o(i),r,a=WebAssembly.instantiate(s,{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var b=new Uint8Array(p.length),M=0;M<p.length;++M){var v=p.charCodeAt(M);b[M]=v>96?v-97:v>64?v-39:v+4}for(var S=0,M=0;M<p.length;++M)b[S++]=b[M]<60?n[b[M]]:(b[M]-60)*64+b[++M];return b.buffer.slice(0,S)}function l(p,b,M,v,S,T,C){var w=p.exports.sbrk,R=v+3&-4,P=w(R*S),D=w(T.length),N=new Uint8Array(p.exports.memory.buffer);N.set(T,D);var H=b(P,v,S,D,T.length);if(H==0&&C&&C(P,R,S),M.set(N.subarray(P,P+v*S)),w(P-w(0)),H!=0)throw new Error("Malformed buffer data: "+H)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function f(p){var b={object:new Worker(p),pending:0,requests:{}};return b.object.onmessage=function(M){var v=M.data;b.pending-=v.count,b.requests[v.id][v.action](v.value),delete b.requests[v.id]},b}function m(p){for(var b="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(s)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+g.name+";"+l.toString()+g.toString(),M=new Blob([b],{type:"text/javascript"}),v=URL.createObjectURL(M),S=u.length;S<p;++S)u[S]=f(v);for(var S=p;S<u.length;++S)u[S].object.postMessage({});u.length=p,URL.revokeObjectURL(v)}function x(p,b,M,v,S){for(var T=u[0],C=1;C<u.length;++C)u[C].pending<T.pending&&(T=u[C]);return new Promise(function(w,R){var P=new Uint8Array(M),D=++d;T.pending+=p,T.requests[D]={resolve:w,reject:R},T.object.postMessage({id:D,count:p,size:b,source:P,mode:v,filter:S},[P.buffer])})}function g(p){var b=p.data;self.ready.then(function(M){if(!b.id)return self.close();try{var v=new Uint8Array(b.count*b.size);l(M,M.exports[b.mode],v,b.count,b.size,b.source,M.exports[b.filter]),self.postMessage({id:b.id,count:b.count,action:"resolve",value:v},[v.buffer])}catch(S){self.postMessage({id:b.id,count:b.count,action:"reject",value:S})}})}return{ready:a,supported:!0,useWorkers:function(p){m(p)},decodeVertexBuffer:function(p,b,M,v,S){l(r,r.exports.meshopt_decodeVertexBuffer,p,b,M,v,r.exports[c[S]])},decodeIndexBuffer:function(p,b,M,v){l(r,r.exports.meshopt_decodeIndexBuffer,p,b,M,v)},decodeIndexSequence:function(p,b,M,v){l(r,r.exports.meshopt_decodeIndexSequence,p,b,M,v)},decodeGltfBuffer:function(p,b,M,v,S,T){l(r,r.exports[h[S]],p,b,M,v,r.exports[c[T]])},decodeGltfBufferAsync:function(p,b,M,v,S){return u.length>0?x(p,b,M,h[v],c[S]):a.then(function(){var T=new Uint8Array(p*b);return l(r,r.exports[h[v]],T,p,b,M,r.exports[c[S]]),T})}}})();var iy=location.protocol==="file:";function sy(i){return new Promise((e,t)=>{window.__ASSETS=window.__ASSETS||{};let n=()=>{let r=atob(window.__ASSETS[i]);delete window.__ASSETS[i];let a=new Uint8Array(r.length);for(let o=0;o<r.length;o++)a[o]=r.charCodeAt(o);e(a.buffer)},s=document.createElement("script");s.src="assets/"+i+".js",s.onload=n,s.onerror=()=>t(new Error("Missing assets/"+i+".js")),document.head.appendChild(s)})}async function ra(i,e){if(iy)return sy(i);let t=await fetch("assets/"+i);if(!t.ok)throw new Error("Could not load assets/"+i+" ("+t.status+")");let n=+t.headers.get("content-length")||0;if(!e||!n||!t.body)return t.arrayBuffer();let s=t.body.getReader(),r=[],a=0;for(;;){let{done:c,value:h}=await s.read();if(c)break;r.push(h),a+=h.length,e(Math.min(1,a/n))}let o=new Uint8Array(a),l=0;for(let c of r)o.set(c,l),l+=c.length;return o.buffer}var Rc=async i=>JSON.parse(new TextDecoder().decode(await ra(i)));var Ps=0,oa=1,as=2,oi=3,Pc=4,Ic={day:{skyTop:4163288,skyBot:13625077,fog:14214364,fogD:.0012,sun:16770752,sunI:2.9,hemiS:12573183,hemiG:7043658,hemiI:1.1,sunDir:[-.6,.6,.4],ground:5212732,exposure:1},desert:{skyTop:3112912,skyBot:15982e3,fog:15522224,fogD:.0019,sun:16771524,sunI:3,hemiS:16771264,hemiG:11897420,hemiI:1,sunDir:[.6,.55,.3],ground:14267244,exposure:1},coast:{skyTop:15895131,skyBot:16767392,fog:16239008,fogD:.0017,sun:16761994,sunI:2.5,hemiS:16763304,hemiG:5992274,hemiI:1,sunDir:[-.2,.24,-.85],ground:6132040,exposure:1},night:{skyTop:329231,skyBot:2759242,fog:1708848,fogD:.0035,sun:9414399,sunI:.7,hemiS:4868752,hemiG:2105388,hemiI:1,sunDir:[.3,1,.2],ground:2303531,exposure:1.15,night:!0}},bn=[{id:"nile",name:"Nile Park Circuit",ar:"\u062D\u0644\u0628\u0629 \u0627\u0644\u0646\u064A\u0644",type:"proc",theme:"day",laps:3,width:15,runoff:6,pit:[90,90],camYaw:.7,blurb:"The home circuit. A full pit lane, a fast first sector, a chicane and two hairpins.",pts:[[40,0],[150,0],[210,20],[230,70],[200,115],[140,110],[110,80],[70,95],[60,140],[100,180],[80,225],[20,235],[-40,205],[-50,150],[-20,110],[-60,70],[-110,90],[-150,60],[-140,10],[-80,-5]]},{id:"lider",name:"Lider Karting Club",ar:"\u0646\u0627\u062F\u064A \u0644\u064A\u062F\u0631",type:"glb",theme:"day",laps:3,blurb:"Your scanned kart circuit. Tight, technical, tyre walls everywhere."},{id:"giza",name:"Giza Sand Ring",ar:"\u062D\u0644\u0628\u0629 \u0627\u0644\u062C\u064A\u0632\u0629",type:"proc",theme:"desert",laps:3,width:16,runoff:9,blurb:"Fast sweepers under the pyramids. Sand runoff eats your speed.",pts:[[60,-6],[120,-10],[200,30],[230,110],[180,170],[100,150],[60,200],[-20,230],[-110,200],[-140,120],[-80,70],[-120,0],[-60,-40],[0,0]]},{id:"corniche",name:"Alex Corniche",ar:"\u0643\u0648\u0631\u0646\u064A\u0634 \u0625\u0633\u0643\u0646\u062F\u0631\u064A\u0629",type:"proc",theme:"coast",laps:3,width:15,runoff:7,blurb:"A long seafront blast into a knot of hairpins at sunset.",pts:[[130,0],[260,0],[320,40],[300,100],[220,110],[180,70],[120,90],[130,160],[60,190],[-20,150],[-10,90],[-80,60],[-90,10],[0,0]]},{id:"midnight",name:"Cairo Midnight",ar:"\u0645\u0646\u062A\u0635\u0641 \u0627\u0644\u0644\u064A\u0644",type:"proc",theme:"night",laps:4,width:14,runoff:5,blurb:"Street circuit after dark. Square corners, neon walls, no mercy.",pts:[[75,0],[150,0],[180,30],[180,120],[150,150],[90,150],[60,120],[60,80],[20,60],[-40,80],[-40,160],[-80,200],[-140,180],[-150,100],[-120,20],[-60,-10],[0,0]]},{id:"luxor",name:"Luxor Speedway",ar:"\u062D\u0644\u0628\u0629 \u0627\u0644\u0623\u0642\u0635\u0631",type:"proc",theme:"desert",laps:4,width:17,runoff:9,pit:[70,70],camYaw:.5,blurb:"A fast desert oval with one kink. Flat out, slipstreams and late braking.",pts:[[0,0],[140,0],[230,25],[270,90],[230,155],[140,180],[0,180],[-90,155],[-130,90],[-90,25]]},{id:"aswan",name:"Aswan Lakeside",ar:"\u0628\u062D\u064A\u0631\u0629 \u0623\u0633\u0648\u0627\u0646",type:"proc",theme:"day",laps:3,width:15,runoff:6,pit:[60,70],camYaw:.8,blurb:"Long and technical: an esses section, three hairpins and a quick back stretch.",pts:[[30,0],[130,0],[190,-30],[250,0],[260,70],[200,110],[130,90],[80,130],[100,200],[40,240],[-40,210],[-30,140],[-90,110],[-150,150],[-200,100],[-160,30],[-80,20]]},{id:"hurghada",name:"Hurghada Marina",ar:"\u0645\u0627\u0631\u064A\u0646\u0627 \u0627\u0644\u063A\u0631\u062F\u0642\u0629",type:"proc",theme:"coast",laps:3,width:15,runoff:7,pit:[70,70],camYaw:.6,blurb:"Seafront straight, then a tight harbour section where the walls are close.",pts:[[60,0],[200,0],[270,30],[290,100],[240,150],[160,130],[110,170],[130,240],[60,270],[-20,240],[-40,170],[10,120],[-30,70],[-110,90],[-150,40],[-100,-5]]},{id:"pad",name:"Test pad",ar:"\u0633\u0627\u062D\u0629 \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631",type:"proc",theme:"day",laps:1,width:84,runoff:14,pit:null,dev:!0,blurb:"Tuning ground: a wide asphalt oval for braking, constant-radius, slalom and surface tests. Press T for telemetry.",pts:[[0,0],[110,0],[220,0],[285,65],[220,130],[110,130],[0,130],[-65,65]]}];function tm(i,e,t,n,s){let r=s*s,a=r*s;return .5*(2*e+(-i+t)*s+(2*i-5*e+4*t-n)*r+(-i+3*e-3*t+n)*a)}function Lc(i,e){let t=i.length,n=[];for(let c=0;c<t;c++){let h=i[(c+t-1)%t],u=i[c],d=i[(c+1)%t],f=i[(c+2)%t];for(let m=0;m<24;m++){let x=m/24;n.push([tm(h[0],u[0],d[0],f[0],x),tm(h[1],u[1],d[1],f[1],x)])}}let s=[0];for(let c=1;c<=n.length;c++){let h=n[c-1],u=n[c%n.length];s.push(s[c-1]+Math.hypot(u[0]-h[0],u[1]-h[1]))}let r=s[n.length],a=Math.round(r/e),o=[],l=0;for(let c=0;c<a;c++){let h=c*r/a;for(;s[l+1]<h;)l++;let u=(h-s[l])/(s[l+1]-s[l]||1),d=n[l],f=n[(l+1)%n.length];o.push({x:d[0]+(f[0]-d[0])*u,z:d[1]+(f[1]-d[1])*u})}return o}function Hi(i,e,t,n=1,s=1){let r=document.createElement("canvas");r.width=i,r.height=e,t(r.getContext("2d"),i,e);let a=new xi(r);return a.wrapS=a.wrapT=Ri,a.repeat.set(n,s),a.colorSpace=Gt,a.anisotropy=8,a}function nm(i,e,t,n,s,r){i.fillStyle=n,i.fillRect(0,0,e,t);for(let a=0;a<r;a++){let o=Math.random();i.fillStyle=`rgba(${o>.5?255:0},${o>.5?255:0},${o>.5?255:0},${Math.random()*s})`,i.fillRect(Math.random()*e,Math.random()*t,1+Math.random()*2,1+Math.random()*2)}}var Cc=1,xt=()=>(Cc=Cc*16807%2147483647,Cc/2147483647),id=class{constructor(e){this.def=e,this.theme=Ic[e.theme],this.group=new wt,this.grid=null,this.path=[],this.lights=[]}finishPath(e){let t=e.length;this.path=e,this.n=t;let n=0;for(let r=0;r<t;r++){let a=e[r],o=e[(r+1)%t],l=e[(r+t-1)%t],c=o.x-l.x,h=o.z-l.z,u=Math.hypot(c,h)||1;a.tx=c/u,a.tz=h/u,n+=Math.hypot(o.x-a.x,o.z-a.z)}this.len=n,this.spacing=n/t;let s=e.map((r,a)=>{let o=e[(a+t-3)%t],l=e[(a+3)%t],c=Math.atan2(l.tx,l.tz)-Math.atan2(o.tx,o.tz);for(;c>Math.PI;)c-=2*Math.PI;for(;c<-Math.PI;)c+=2*Math.PI;return c/(6*this.spacing)});for(let r=0;r<t;r++)e[r].k=(s[(r+t-1)%t]+2*s[r]+s[(r+1)%t])/4}surf(e,t){let n=this.grid,s=Math.floor((e-n.x0)/n.cell),r=Math.floor((t-n.z0)/n.cell);return s<0||r<0||s>=n.w||r>=n.h?oi:n.surf[r*n.w+s]}height(e,t){let n=this.grid;if(!n.hgt)return 0;let s=(e-n.x0)/n.cell-.5,r=(t-n.z0)/n.cell-.5;s=Math.max(0,Math.min(n.w-1.001,s)),r=Math.max(0,Math.min(n.h-1.001,r));let a=s|0,o=r|0,l=s-a,c=r-o,h=o*n.w+a,u=n.hgt;return(u[h]*(1-l)+u[h+1]*l)*(1-c)+(u[h+n.w]*(1-l)+u[h+n.w+1]*l)*c}nearest(e,t,n=-1,s=18){let r=this.path,a=this.n,o=0,l=1/0;if(n<0){for(let c=0;c<a;c++){let h=(r[c].x-e)**2+(r[c].z-t)**2;h<l&&(l=h,o=c)}return o}for(let c=-s;c<=s;c++){let h=((n+c)%a+a)%a,u=(r[h].x-e)**2+(r[h].z-t)**2;u<l&&(l=u,o=h)}return o}escape(e,t){for(let n=.35;n<6;n+=.35)for(let s=0;s<16;s++){let r=Math.cos(s*Math.PI/8),a=Math.sin(s*Math.PI/8);if(this.surf(e+r*n,t+a*n)!==oi)return{nx:r,nz:a,d:n}}return null}gridSlot(e){let t=((this.n-3-Math.ceil((e+1)*7.5/this.spacing))%this.n+this.n)%this.n,n=this.path[t],s=(e%2?-1:1)*2.6;return{x:n.x+n.tz*s,z:n.z-n.tx*s,th:Math.atan2(n.tx,n.tz),idx:t}}dispose(){this.group.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&[].concat(e.material).forEach(t=>{for(let n in t)t[n]&&t[n].isTexture&&t[n].dispose();t.dispose()})})}};function ry(i){let e=i.path[0],t=Math.atan2(e.tx,e.tz),n=i.height(e.x,e.z),s=0;for(;s<14&&i.surf(e.x+e.tz*s,e.z-e.tx*s)!==oi&&i.surf(e.x+e.tz*s,e.z-e.tx*s)!==Ps;)s+=.5;s=Math.max(5,s);let r=new wt;r.position.set(e.x,n,e.z),r.rotation.y=t;let a=Hi(128,32,u=>{for(let d=0;d<16;d++)for(let f=0;f<4;f++)u.fillStyle=(d+f)%2?"#111":"#f5f5f5",u.fillRect(d*8,f*8,8,8)}),o=new ve(new pn(s*2,2.2),new we({map:a,roughness:.8,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}));o.rotation.x=-Math.PI/2,o.position.y=.05,o.receiveShadow=!0,r.add(o);let l=new we({color:2830134,metalness:.7,roughness:.4});for(let u of[-1,1]){let d=new ve(new ht(.5,7.5,.5),l);d.position.set(u*(s+1.2),3.75,0),d.castShadow=!0,r.add(d)}let c=Hi(1024,128,(u,d,f)=>{u.fillStyle="#e3262e",u.fillRect(0,0,d,f),u.fillStyle="#fff",u.font="italic 900 92px Rubik, Arial Black, sans-serif",u.textAlign="center",u.textBaseline="middle",u.fillText("TAFHEET  \xB7  \u062A\u0641\u062D\u064A\u0637  \xB7  START",d/2,f/2+6)}),h=new ve(new ht(s*2+3,1.3,.5),[l,l,l,l,new we({map:c,emissive:16777215,emissiveMap:c,emissiveIntensity:i.theme.night?.9:.15}),new we({map:c})]);h.position.y=7.3,h.castShadow=!0,r.add(h),i.group.add(r)}var Cs=2.2;async function ay(i,e){let t=new sa;t.setMeshoptDecoder(em);let[n,s,r]=await Promise.all([ra("lider.glb",e),Rc("lider.json"),ra("lider.bin")]),o=(await t.parseAsync(n,"")).scene;o.scale.setScalar(Cs),o.traverse(x=>{if(!x.isMesh)return;x.receiveShadow=!0,x.frustumCulled=!x.isInstancedMesh;let g=x.material,p=g.name||"";if(p==="02_-_Default_0"){x.visible=!1;return}g.map&&(g.map.anisotropy=8),(g.transparent||g.alphaTest>0||/Trees|green|fence|wire/.test(p))&&(g.alphaTest=Math.max(g.alphaTest,.4),g.transparent=!1,g.depthWrite=!0,g.side=Wt),/racetrack|conc|kerb/.test(p)&&(g.roughness=Math.min(g.roughness,.92)),x.castShadow=x.isInstancedMesh?!0:!/racetrack|grass|green|conc|kerb|road_marking|bitumen|GROOVE|skids|dust|decal|Cracks/.test(p)}),i.group.add(o);let l=s.w*s.h,c=new Uint8Array(r,0,l),h=new Int16Array(r.slice(l,l+l*2)),u=new Uint8Array(l),d=new Float32Array(l);for(let x=0;x<l;x++){let g=c[x];u[x]=g===255?oi:g===200?as:g===100?oa:Ps,d[x]=h[x]/100*Cs}i.grid={w:s.w,h:s.h,x0:s.x0*Cs,z0:s.z0*Cs,cell:Cs/s.ppm,surf:u,hgt:d};let f=Lc(s.path.map(x=>[x[0]*Cs,x[1]*Cs]),2),m=Math.round(30*Cs/2);f=f.slice(m).concat(f.slice(0,m)),i.finishPath(f),i.bounds=420}function aa(i,e,t,n,s,r=!0,a=null){let o=[],l=[],c=[],h=i.length,u=0,d=0,f=!1;for(let x=0;x<=h;x++){let g=i[x%h],p=!a||a[x%h];p&&(o.push(g.x+g.tz*e,n,g.z-g.tx*e,g.x+g.tz*t,n,g.z-g.tx*t),l.push(0,u*s,1,u*s),f&&c.push(d-2,d-1,d,d-1,d+1,d),d+=2),f=p,u+=Math.hypot(i[(x+1)%h].x-g.x,i[(x+1)%h].z-g.z)}let m=new _t;return m.setAttribute("position",new $e(o,3)),m.setAttribute("uv",new $e(l,2)),m.setIndex(c),m.computeVertexNormals(),m}function oy(i,e,t,n){let s=typeof e=="function"?e:()=>e,r=[],a=[],o=[],l=i.length,c=0;for(let u=0;u<=l;u++){let d=i[u%l],f=s(u%l),m=d.x+d.tz*f,x=d.z-d.tx*f;r.push(m,0,x,m,t,x),a.push(c*n,0,c*n,1),u<l&&o.push(u*2,u*2+1,u*2+2,u*2+1,u*2+3,u*2+2),c+=Math.hypot(i[(u+1)%l].x-d.x,i[(u+1)%l].z-d.z)}let h=new _t;return h.setAttribute("position",new $e(r,3)),h.setAttribute("uv",new $e(a,2)),h.setIndex(o),h.computeVertexNormals(),h}var rd=[];function Nn(i,e,t,n=!0){if(t.length>50){let s=new Map;for(let r of t){let a=Math.floor(r.x/80)+","+Math.floor(r.z/80);s.has(a)||s.set(a,[]),s.get(a).push(r)}if(s.size>1){let r=new wt;for(let a of s.values())r.add(sd(i,e,a,n));return r}}return sd(i,e,t,n)}function sd(i,e,t,n=!0){let s=new $i(i,e,t.length),r=new Nt;if(t.forEach((a,o)=>{r.position.set(a.x,a.y||0,a.z),r.rotation.set(0,a.r||0,0),r.scale.set(a.sx||a.s||1,a.sy||a.s||1,a.sz||a.s||1),r.updateMatrix(),s.setMatrixAt(o,r.matrix),a.c&&s.setColorAt(o,a.c)}),s.castShadow=n,s.receiveShadow=!0,t.length&&!t.some(a=>(a.sx||1)>8)){let a=0,o=0;for(let l of t)a+=l.x,o+=l.z;rd.push({m:s,x:a/t.length,z:o/t.length})}return s}function ly(i){let e=i.def,t=i.theme,n=e.width/2,s=n+e.runoff,r=i.group;rd=[],Cc=e.id.length*7919+13;let a=i.uTime={value:0},o=[];i.fancyLights=[];let l=(E,y)=>(E.onBeforeCompile=I=>{I.uniforms.uTime=a,I.vertexShader=`uniform float uTime;
`+I.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
`+y)},E),c=window.__crowdK||1,h={value:new O(1e6,0,0)},u={value:new O(1e6,0,0)};i.tick=(E,y,I,U,V)=>{a.value=E,y!=null&&(h.value.set(y,0,I),u.value.set(U??y,0,V??I));for(let ie of o)ie(E)};let d=(()=>{let E=(U,V,ie)=>{let he=U.attributes.position.count;return U.setAttribute("aPart",new Ct(new Float32Array(he).fill(V),1)),U.setAttribute("aLimb",new Ct(new Float32Array(he).fill(ie),1)),U},y=(U,V,ie,he,Y,W,re)=>E(new Kn(U,V,2,7).translate(ie,he,Y),W,re),I=[E(new Kn(.165,.3,3,9).scale(1.18,1,.74).translate(0,1.1,0),0,0),E(new xn(.17,9,5).scale(1.12,.7,.82).translate(0,.84,0),2,0),E(new En(.05,.06,.09,7).translate(0,1.4,0),1,0),E(new xn(.138,10,8).scale(1,1.13,1.03).translate(0,1.54,0),1,5),E(new xn(.15,10,5,0,6.2832,0,1.5).translate(0,1.565,-.014),3,5),E(new ht(.2,.022,.15).translate(0,1.6,.16),5,5)];for(let[U,V,ie]of[[1,1,3],[-1,2,4]])I.push(y(.074,.58,U*.09,.43,0,2,ie),E(new ht(.1,.07,.23).translate(U*.09,.035,.04),4,ie),y(.056,.2,U*.25,1.2,0,0,V),y(.046,.24,U*.25,.94,0,1,V));return Xp(I)})(),f=new we({roughness:.85});f.onBeforeCompile=E=>{E.uniforms.uTime=a,E.uniforms.uCar=h,E.uniforms.uCar2=u,E.vertexShader=`uniform float uTime; uniform vec3 uCar, uCar2; attribute float aPart, aLimb, aBeh, aPh, aWalk; attribute vec3 aSkin;
`+E.vertexShader.replace("#include <color_vertex>",`#include <color_vertex>
        #ifdef USE_INSTANCING_COLOR
          float capW = step(.7, fract(aPh * 13.));
          vColor.rgb = aPart < .5 ? instanceColor.rgb : aPart < 1.5 ? aSkin : aPart < 2.5 ? vec3(.10, .12, .2) + fract(aPh * 7.) * vec3(.22, .2, .14) : aPart < 3.5 ? mix(vec3(.07, .05, .04) + fract(aPh * 3.) * .32, instanceColor.rgb * .8, capW) : aPart < 4.5 ? vec3(.06) + fract(aPh * 5.) * .5 : instanceColor.rgb * .8;
        #endif`).replace("#include <begin_vertex>",`#include <begin_vertex>
        if (aPart > 4.5) transformed = mix(vec3(0., 1.6, 0.), transformed, step(.7, fract(aPh * 13.)));   // only cap wearers get a brim
        vec2 ip = vec2(instanceMatrix[3][0], instanceMatrix[3][2]);
        float near = max(smoothstep(46., 10., distance(ip, uCar.xz)), smoothstep(46., 10., distance(ip, uCar2.xz)));
        float ph = aPh * 6.2832, T = uTime, walk = aBeh > 1.5 ? 1. : 0.;
        float cheer = aBeh > .5 && aBeh < 1.5 ? .25 + .75 * near : aBeh < .5 ? near * near * .85 : 0.;
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
        transformed.y += abs(sin(T * 5.5 + ph)) * .2 * cheer;
        transformed.x += sin(T * 1.1 + ph) * .03 * (1. - walk);
        if (walk > .5) { float u = fract(T * .6 / max(aWalk, 1.) + aPh), tri = abs(u * 2. - 1.); transformed.xz *= (u < .5 ? -1. : 1.); transformed.z += (tri - .5) * aWalk; }`)};let m=[15845797,14263671,11038783,8014379].map(E=>new be(E)),x=E=>{let y=new Map;for(let I of E){let U=Math.floor(I.x/60)+","+Math.floor(I.z/60);y.has(U)||y.set(U,[]),y.get(U).push(I)}for(let I of y.values()){let U=d.clone(),V=I.length,ie=new Float32Array(V),he=new Float32Array(V),Y=new Float32Array(V*3),W=new Float32Array(V);I.forEach((pe,de)=>{ie[de]=pe.beh||0,he[de]=xt();let te=pe.k||m[xt()*4|0];Y[de*3]=te.r,Y[de*3+1]=te.g,Y[de*3+2]=te.b,W[de]=pe.walk||0,pe.c||(pe.c=new be(15987958));let xe=pe.s||1;pe.sx=xe*(.9+xt()*.22),pe.sz=pe.sx,pe.sy=xe*(.94+xt()*.14)}),U.setAttribute("aBeh",new Gn(ie,1)),U.setAttribute("aPh",new Gn(he,1)),U.setAttribute("aSkin",new Gn(Y,3)),U.setAttribute("aWalk",new Gn(W,1));let re=sd(U,f,I,!1);re.computeBoundingSphere(),re.boundingSphere.radius+=9,r.add(re)}},g="transformed.y += abs(sin(uTime * 3.4 + instanceMatrix[3][0] * 1.7 + instanceMatrix[3][2] * 2.3)) * .14;",p=Lc(e.pts,2);i.finishPath(p);let b=p.length,M=1e9,v=-1e9,S=1e9,T=-1e9;for(let E of p)M=Math.min(M,E.x),v=Math.max(v,E.x),S=Math.min(S,E.z),T=Math.max(T,E.z);let C=(M+v)/2,w=(S+T)/2,R=p.map((E,y)=>{for(let I=-6;I<=6;I++)if(Math.abs(p[((y+I)%b+b)%b].k)>1/110)return!0;return!1}),P=.5,D=Math.max(30,s+8),N=M-D,H=S-D,k=Math.ceil((v-M+D*2)/P),q=Math.ceil((T-S+D*2)/P),Q=document.createElement("canvas");Q.width=k,Q.height=q;let X=Q.getContext("2d",{willReadFrequently:!0});X.fillStyle="#000",X.fillRect(0,0,k,q),X.globalCompositeOperation="lighter",X.lineJoin=X.lineCap="round";let oe=E=>{X.beginPath();let y=!1;for(let I=0;I<=b;I++){let U=p[I%b],V=(U.x-N)/P,ie=(U.z-H)/P;if(E&&!E[I%b]){y=!1;continue}y?X.lineTo(V,ie):X.moveTo(V,ie),y=!0}X.stroke()};X.strokeStyle="#00ff00",X.lineWidth=s*2/P,oe(),X.strokeStyle="#ff0000",X.lineWidth=n*2/P,oe(),X.strokeStyle="#0000ff",X.lineWidth=(n+1.5)*2/P,oe(R);let Z=e.pit===null?null:e.pit||[50,50],ne=Z?Math.round(Z[0]/2):0,se=Z?Math.round(Z[1]/2):0,Re=E=>!!Z&&(E>=b-ne||E<=se),Ae=[];for(let E=b-ne;E<=b+se;E++)Ae.push(E%b);let ft=(E,y)=>{E.beginPath(),Ae.forEach((I,U)=>{let V=p[I],ie=(V.x+V.tz*y-N)/P,he=(V.z-V.tx*y-H)/P;U?E.lineTo(ie,he):E.moveTo(ie,he)}),E.stroke()},Ye=null,it=Math.max(s+.2,n+8.6);if(Z){X.lineCap="butt",X.strokeStyle="#00ff00",X.lineWidth=9.2/P,ft(X,n+4);let E=document.createElement("canvas");E.width=k,E.height=q;let y=E.getContext("2d",{willReadFrequently:!0});y.lineJoin="round",y.strokeStyle="#fff",y.lineWidth=7.6/P,ft(y,n+3.7),Ye=y.getImageData(0,0,k,q).data}let ee=X.getImageData(0,0,k,q).data,ae=new Uint8Array(k*q);for(let E=0;E<k*q;E++){let y=ee[E*4],I=ee[E*4+1],U=ee[E*4+2];ae[E]=I<128?oi:y>128?as:Ye&&Ye[E*4]>128?Pc:U>128?oa:Ps}i.grid={w:k,h:q,x0:N,z0:H,cell:P,surf:ae,hgt:null},i.bounds=Math.max(v-M,T-S)/2+60;let ye=t.night,Ce=e.theme==="desert",_e=e.theme==="day",qe=Hi(256,256,(E,y,I)=>nm(E,y,I,Ce?"#d8b26c":ye?"#2a2d31":_e?"#55a83a":"#4f8a3c",.1,5e3),220,220),Et=new ve(new pn(2600,2600),new we({map:qe,roughness:1}));Et.rotation.x=-Math.PI/2,Et.position.set(C,-.02,w),Et.receiveShadow=!0,r.add(Et);let Xe=Hi(256,256,(E,y,I)=>{nm(E,y,I,ye?"#26272c":"#51475f",.1,9e3),ye&&(E.fillStyle="rgba(255,255,255,.75)",E.fillRect(y/2-2,0,4,I*.45))},1,1),st=new ve(aa(p,n,-n,.02,1/12),new we({map:Xe,roughness:.85}));st.receiveShadow=!0,st.material.name="racetrack",r.add(st);let pt=new we({color:15921906,roughness:.7});for(let E of[1,-1]){let y=new ve(aa(p,E*n-.35+(E>0?0:.7),E*n-.65+(E>0?0:.7),.035,1),pt);y.receiveShadow=!0,r.add(y)}let Je=Hi(64,64,E=>{E.fillStyle=_e?"#e8475a":"#e3262e",E.fillRect(0,0,64,32),E.fillStyle=_e?"#f2c230":"#f4f4f4",E.fillRect(0,32,64,32)}),Mt=new we({map:Je,roughness:.7});for(let E of[1,-1]){let y=new ve(aa(p,E>0?n+1.5:-n,E>0?n:-n-1.5,.045,.25,!0,R),Mt);y.receiveShadow=!0,r.add(y)}let St=Hi(128,32,E=>{ye?(E.fillStyle="#15161c",E.fillRect(0,0,128,32),E.fillStyle="#19d3ff",E.fillRect(0,20,128,5),E.fillStyle="#ff2bd0",E.fillRect(0,6,128,3)):_e?(E.fillStyle="#2d6bd1",E.fillRect(0,0,128,32),E.fillStyle="#1c4ea8",E.fillRect(0,8,128,3),E.fillRect(0,20,128,3),E.fillStyle="#7a4326",E.fillRect(0,0,7,32)):(E.fillStyle="#e9e9e9",E.fillRect(0,0,128,32),E.fillStyle=Ce?"#1e88c9":"#e3262e",E.fillRect(0,0,64,32),E.fillStyle="rgba(0,0,0,.25)",E.fillRect(0,0,128,3))}),Pt=new we({map:St,side:Wt,roughness:.6,emissive:ye?16777215:0,emissiveMap:ye?St:null,emissiveIntensity:ye?1.2:0});for(let E of[1,-1]){let y=new ve(oy(p,E>0?I=>Re(I)?it:s+.2:-(s+.2),1.15,.16666666666666666),Pt);y.castShadow=!ye,r.add(y)}let ot=(E,y,I)=>{for(let U=0;U<8;U++)if(i.surf(E+Math.cos(U*.785)*I,y+Math.sin(U*.785)*I)!==oi)return!1;return!0},nt=[];for(let E=0;E<b;E+=4)for(let y of[1,-1]){let I=p[E],U=y*(s+5+xt()*38),V=I.x+I.tz*U,ie=I.z-I.tx*U;ot(V,ie,5)&&nt.push({x:V,z:ie,r:xt()*6.28,s:.8+xt()*.7,i:E})}if(ye){let E=Hi(64,128,W=>{W.fillStyle="#0d0e14",W.fillRect(0,0,64,128);for(let re=4;re<124;re+=10)for(let pe=4;pe<60;pe+=9)Math.random()>.45&&(W.fillStyle=["#ffd27a","#8fd8ff","#ff9ad5"][Math.random()*3|0],W.fillRect(pe,re,5,6))}),y=new we({map:E,emissive:16777215,emissiveMap:E,emissiveIntensity:1.1,roughness:.8}),I=new ht(1,1,1);I.translate(0,.5,0),r.add(Nn(I,y,nt.filter((W,re)=>re%3===0).map(W=>({x:W.x,z:W.z,r:0,sx:14+xt()*12,sy:5+xt()*9,sz:14+xt()*12})),!1));let U=new En(.12,.16,7,6);U.translate(0,3.5,0);let V=new xn(.45,8,6);V.translate(0,7.1,0);let ie=[];for(let W=0;W<b;W+=14){let re=p[W],pe=(W%28?1:-1)*(s+1.2);ie.push({x:re.x+re.tz*pe,z:re.z-re.tx*pe})}r.add(Nn(U,new we({color:3158586}),ie,!1)),r.add(Nn(V,new mt({color:new be(16769704).multiplyScalar(3)}),ie,!1));let he=new Fn(3.4,7,14,1,!0);he.translate(0,3.5,0);let Y=Nn(he,new mt({color:16767392,transparent:!0,opacity:.07,depthWrite:!1,blending:An,side:Wt}),ie,!1);Y.receiveShadow=!1,r.add(Y)}else{let E=new En(.22,.34,Ce||e.theme==="coast"?6:2.4,6);E.translate(0,Ce||e.theme==="coast"?3:1.2,0);let y;Ce||e.theme==="coast"?(y=new Fn(2.6,1.6,7),y.scale(1,.7,1),y.translate(0,6.2,0)):(y=new Wa(2.7,1),y.scale(1,.85,1),y.translate(0,4.3,0));let I=nt.filter((U,V)=>Ce?V%3===0:_e?V%11!==5&&V%11!==8:!0);if(r.add(Nn(E,new we({color:7031339,roughness:1}),I)),r.add(Nn(y,new we({color:Ce?5147194:_e?3970112:3107636,roughness:1,flatShading:!0}),I)),Ce){let U=new Fn(1,1,4);U.rotateY(Math.PI/4),U.translate(0,.5,0);let V=new we({color:13804636,roughness:1,flatShading:!0});r.add(Nn(U,V,[{x:C+420,z:w-380,sx:330,sy:210,sz:330},{x:C+40,z:w-520,sx:280,sy:180,sz:280},{x:C-330,z:w-430,sx:190,sy:120,sz:190}],!1));let ie=new Va(1.4,0);r.add(Nn(ie,new we({color:11569749,roughness:1,flatShading:!0}),nt.filter((he,Y)=>Y%3===1).map(he=>({...he,y:.3,s:he.s*1.4}))))}if(e.theme==="coast"){let U=new ve(new pn(3e3,1200),new we({color:1863580,roughness:.15,metalness:.5}));U.rotation.x=-Math.PI/2,U.position.set(C,.03,S-s-22-600),r.add(U);let V=new ve(new pn(3e3,22),new we({color:15126426,roughness:1}));V.rotation.x=-Math.PI/2,V.position.set(C,.01,S-s-11),V.receiveShadow=!0,r.add(V);let ie=new ht(1,1,1);ie.translate(0,.5,0);let he=[15852488,15321504,14280428,15782592].map(W=>new be(W)),Y=[];for(let W=M-120;W<v+120;W+=26)Y.push({x:W,z:T+s+40+xt()*20,sx:20,sy:16+xt()*34,sz:18,c:he[xt()*4|0]});r.add(Nn(ie,new we({roughness:.9}),Y))}}if(!ye){let E=new we({color:Ce?12884572:11034424,roughness:1});for(let y of[1,-1]){let I=new ve(aa(p,y>0?n+2.2:-n,y>0?n:-n-2.2,.012,1),E);I.receiveShadow=!0,r.add(I)}}if(Z){let E=p.map((pe,de)=>Re(de)),y=new ve(aa(p,n+7.6,n,.02,1/12,!0,E),new we({color:ye?3421501:6708341,roughness:.9,name:"racetrack"}));y.receiveShadow=!0,r.add(y);let I=new ve(aa(p,n+.25,n-.05,.05,1,!0,E),new we({color:15909424,roughness:.7}));r.add(I),i.pitBoxes=[];let U=[],V=[14886446,1681358,16761370,3126359,16743088,15987958].map(pe=>new be(pe));for(let pe=0;pe<6;pe++){let de=((b-Math.round(ne*.6)+pe*4)%b+b)%b,te=p[de],xe=te.x+te.tz*(n+5),Te=te.z-te.tx*(n+5),me=Math.atan2(te.tx,te.tz),L=Hi(128,256,J=>{J.clearRect(0,0,128,256),J.strokeStyle="#fff",J.lineWidth=8,J.strokeRect(6,6,116,244),J.fillStyle="rgba(255,255,255,.9)",J.font="900 70px Rubik, Arial Black, sans-serif",J.textAlign="center",J.fillText(String(pe+1),64,150)}),ue=new ve(new pn(3.4,6.8),new mt({map:L,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-5,polygonOffsetUnits:-5}));ue.rotation.set(-Math.PI/2,0,Math.PI-me),ue.position.set(xe,.06,Te),r.add(ue),i.pitBoxes.push({x:xe,z:Te,th:me,idx:de});for(let J=0;J<3;J++)U.push({x:te.x+te.tz*(n+7.6)+te.tx*(J-1)*1.3,z:te.z-te.tx*(n+7.6)+te.tz*(J-1)*1.3,c:V[pe]})}new Kn(.3,.75,3,8).translate(0,.68,0),new xn(.27,8,6).translate(0,1.52,0),U.forEach((pe,de)=>{pe.beh=0,pe.r=Math.atan2(p[0].tx,p[0].tz)-Math.PI/2+(de%3-1)*.5}),x(U);let Y=p[0],W=new ve(new ht(1.2,1.15,(ne+se)*1.5),new we({color:ye?2763827:15327956,roughness:.9}));W.position.set(Y.x+Y.tz*(it+1.4),.58,Y.z-Y.tx*(it+1.4));let re=new ve(new ht(9.4,.5,(ne+se)*1.5+1),new we({color:4160090,roughness:.8}));re.position.copy(W.position),re.position.y=4.85,re.rotation.y=W.rotation.y,re.visible=!1,r.add(re)}if(!e.dev){let E=[],y=[14886446,1681358,16761370,15987958,3126359,16743088,8077284].map(me=>new be(me)),I=[15845797,14263671,11038783,8014379].map(me=>new be(me));for(let me=0;me<b;me++)if(!(me%64>46)){for(let L of[1,-1])if(!(L>0&&Re(me)))for(let ue=0;ue<6;ue++){if(xt()>.82*c)continue;let J=p[me],fe=L*(s+1.7+ue*1.05+xt()*.3),ge=J.x+J.tz*fe+(xt()-.5)*.8,le=J.z-J.tx*fe+(xt()-.5)*.8;ot(ge,le,.9)&&E.push({x:ge,z:le,s:.92+xt()*.2,c:y[xt()*7|0],k:I[xt()*4|0],i:me,sd:L,row:ue})}}new Kn(.28,.7,3,8).translate(0,.63,0),new xn(.24,8,6).translate(0,1.42,0);let ie=[],he=[],Y=[14886446,16761370,15987958,1681358,3126359,1118740].map(me=>new be(me));for(let me=6;me<b;me+=9){let L=p[me],ue=L.k>0?-1:1;if(ue>0&&Re(me))continue;let J=ue*(s+.9),fe=L.x+L.tz*J,ge=L.z-L.tx*J;ot(fe,ge,.5)&&(he.push({x:fe,z:ge,y:0,r:Math.atan2(L.tx,L.tz)+(ue>0?0:Math.PI),c:Y[xt()*6|0]}),Math.abs(L.k)>1/80&&ie.push({x:fe+L.tx*1.2,z:ge+L.tz*1.2,c:new be(16742938)}))}let W=new En(.05,.05,4.4,5);W.translate(0,2.2,0),r.add(Nn(W,new we({color:14211288}),he.map(me=>({x:me.x,z:me.z})),!1));let re=new pn(1.7,1,8,1);re.translate(.85,3.8,0);let pe=Nn(re,l(new we({side:Wt,roughness:.8}),"transformed.z += sin(position.x * 3.5 - uTime * 6. + instanceMatrix[3][0]) * .16 * position.x; transformed.y += sin(position.x * 2. - uTime * 4.) * .04 * position.x;"),he,!1);r.add(pe),E.push(...ie.map(me=>({...me,s:1.05,k:I[1]}))),E.forEach((me,L)=>{if(me.i==null){me.beh=0;return}let ue=p[me.i],J=Math.atan2(ue.x-me.x,ue.z-me.z);me.row<2?(me.beh=xt()<.7?1:0,me.r=J+(xt()-.5)*.5):xt()<.22?(me.beh=2,me.walk=5+xt()*9,me.r=Math.atan2(ue.tx,ue.tz)):(me.beh=xt()<.25?1:0,me.r=J+(L%2?1.25:-1.25)*(me.beh?.2:1))}),x(E);let de=[["TAFHEET","#e3262e","#fff"],["EGYSeal","#f3f4f6","#1c4ea8"],["NILE COLA","#1c4ea8","#fff"],["AMM SABER","#ffc21a","#17181c"],["SCARAB OIL","#f3f4f6","#e3262e"],["RA ROSSO","#e3262e","#ffc21a"],["HORUS TYRES","#17181c","#ffc21a"]],te=new we({color:8012582,roughness:1});de.forEach(([me,L,ue],J)=>{let fe=Math.round((J+.45)*b/de.length)%b,ge=p[fe],le=ge.k>0?-1:1,ke=le*((le>0&&Re(fe)?it+16:s)+5.5),Le=ge.x+ge.tz*ke,At=ge.z-ge.tx*ke;if(!ot(Le,At,2.5))return;let bt=Hi(512,200,zn=>{zn.fillStyle=L,zn.fillRect(0,0,512,200),zn.strokeStyle=ue,zn.lineWidth=10,zn.strokeRect(14,14,484,172),zn.fillStyle=ue,zn.font="italic 900 84px Rubik, Arial Black, sans-serif",zn.textAlign="center",zn.textBaseline="middle",zn.fillText(me,256,106,440)}),gn=new wt,Bn=new ve(new ht(10,3.9,.3),[te,te,te,te,new we({map:bt,roughness:.8}),te]);Bn.position.y=4.4,Bn.castShadow=!0,gn.add(Bn);for(let zn of[-4,4]){let _a=new ve(new ht(.35,2.6,.35),te);_a.position.set(zn,1.3,-.1),_a.castShadow=!0,gn.add(_a)}gn.position.set(Le,0,At),gn.rotation.y=Math.atan2(ge.x-Le,ge.z-At),r.add(gn)});let xe=[];for(let me=0;me<b;me+=5){let L=p[me];if(Math.abs(L.k)<1/70)continue;let ue=L.k>0?-1:1;if(ue>0&&Re(me))continue;let J=ue*(s+1.3),fe=L.x+L.tz*J,ge=L.z-L.tx*J,le=Math.atan2(L.tx,L.tz);ot(fe,ge,.8)&&xe.push({x:fe,z:ge,y:.55,r:le},{x:fe+L.tx*1.6,z:ge+L.tz*1.6,y:.55,r:le},{x:fe+L.tx*.8,z:ge+L.tz*.8,y:1.6,r:le})}let Te=new ht(1.1,1.05,1.5,2,2,2);if(r.add(Nn(Te,new we({color:14197825,roughness:1,flatShading:!0}),xe)),_e){let me=nt.filter((fe,ge)=>ge%11===5).map(fe=>({x:fe.x,z:fe.z,y:0,r:fe.r,c:y[xt()*7|0]})),L=new ht(2.3,2.2,5);L.translate(0,1.4,0),r.add(Nn(L,new we({roughness:.6}),me));let ue=nt.filter((fe,ge)=>ge%11===8).map(fe=>({x:fe.x,z:fe.z,r:fe.r})),J=new Fn(2.6,2.6,4);J.translate(0,1.3,0),r.add(Nn(J,new we({color:15986662,roughness:1,flatShading:!0}),ue))}}if(e.dev){let E=[];for(let I=0;I<12;I++)E.push({x:20+I*18,z:24});for(let I=0;I<24;I++)E.push({x:110+Math.cos(I/24*6.283)*30,z:65+Math.sin(I/24*6.283)*30});let y=new Fn(.35,.9,8);y.translate(0,.45,0),r.add(Nn(y,new we({color:16738835,roughness:.7}),E))}let B=p[0],jt=Hi(256,64,E=>{E.fillStyle="#3a3d45",E.fillRect(0,0,256,64);for(let y=0;y<900;y++)E.fillStyle=`hsl(${Math.random()*360},70%,${45+Math.random()*30}%)`,E.fillRect(Math.random()*256,Math.random()*64,3,4)},3,1),Ke=new wt;Ke.position.set(B.x-B.tz*(s+3),0,B.z+B.tx*(s+3)),Ke.rotation.y=Math.atan2(B.tx,B.tz);for(let E=0;E<5;E++){let y=new ve(new ht(2.2,1.1*(E+1),60),new we({map:jt,emissive:ye?5592405:0,emissiveMap:ye?jt:null}));y.position.set(-E*2.2,.55*(E+1),10),y.castShadow=!0,Ke.add(y)}r.add(Ke);{let E=[],y=Ke.rotation.y,I=Math.cos(y),U=Math.sin(y),V=[14886446,1681358,16761370,15987958,3126359,16743088,8077284].map(W=>new be(W));for(let W=0;W<5;W++)for(let re=-19;re<40;re+=.8){if(xt()>.88*c)continue;let pe=-W*2.2+(xt()-.5)*.9;E.push({x:Ke.position.x+pe*I+re*U,z:Ke.position.z-pe*U+re*I,y:1.1*(W+1),s:.9+xt()*.2,c:V[xt()*7|0]})}new Kn(.28,.6,3,6).translate(0,.55,0),new xn(.23,7,5).translate(0,1.28,0),E.forEach(W=>{W.beh=xt()<.75?1:0,W.r=y+Math.PI/2+(xt()-.5)*.4}),x(E),ye||[[14886446,16761370],[1681358,15987958],[8077284,16743088],[3126359,16761370]].forEach(([W,re],pe)=>{let de=new wt,te=new ve(new xn(9,12,10),new we({color:W,roughness:.7,flatShading:!0}));te.scale.y=1.2;let xe=new ve(new En(8.9,8.9,3,12,1,!0),new we({color:re,roughness:.7})),Te=new ve(new ht(2.4,2,2.4),new we({color:8012582}));Te.position.y=-14,de.add(te,xe,Te);let me=pe*1.7+.6,L=i.bounds+70+pe*25,ue=C+Math.cos(me)*L,J=w+Math.sin(me)*L,fe=34+pe*9;de.position.set(ue,fe,J),r.add(de),o.push(ge=>{de.position.y=fe+Math.sin(ge*.25+pe)*3,de.position.x=ue+Math.sin(ge*.05+pe*2)*14})}),ye&&[16722896,1692671,16761370,8257435].forEach((W,re)=>{let pe=Ke.position.x+-9*I+(re*16-14)*U,de=Ke.position.z- -9*U+(re*16-14)*I,te=new Ni(W,420,95,.32,.6,1.3);te.position.set(pe,13,de),r.add(te,te.target),i.fancyLights.push(te);let xe=new ve(new Fn(5,46,12,1,!0),new mt({color:W,transparent:!0,opacity:.09,depthWrite:!1,blending:An,side:Wt}));xe.geometry.translate(0,-23,0),xe.geometry.rotateX(Math.PI),xe.position.set(pe,13,de),r.add(xe),o.push(Te=>{let me=Math.sin(Te*.5+re*1.6),L=p[((Math.round((me*.5+.5)*40)-20)%b+b)%b];te.target.position.set(L.x+B.tz*Math.sin(Te*.9+re)*5,0,L.z-B.tx*Math.sin(Te*.9+re)*5),xe.rotation.set(Math.sin(Te*.7+re)*.5,0,Math.cos(Te*.45+re*2)*.5)})})}}async function im(i,e){let t=bn.find(l=>l.id===i),n=new id(t);t.type==="glb"?await ay(n,e):ly(n),n.cullables=t.type==="glb"?[]:rd,ry(n);let s=1e9,r=-1e9,a=1e9,o=-1e9;for(let l of n.path)s=Math.min(s,l.x),r=Math.max(r,l.x),a=Math.min(a,l.z),o=Math.max(o,l.z);return n.box={minx:s,maxx:r,minz:a,maxz:o},n}function sm(i){let e=new xn(4e3,24,12),t=new Bt({side:on,depthWrite:!1,fog:!1,uniforms:{top:{value:new be(i.skyTop)},bot:{value:new be(i.skyBot)}},vertexShader:"varying vec3 p; void main(){ p=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`varying vec3 p; uniform vec3 top; uniform vec3 bot; void main(){ float h=clamp(normalize(p).y*2.2,0.,1.); gl_FragColor=vec4(mix(bot,top,pow(h,.6)),1.);
#include <tonemapping_fragment>
#include <colorspace_fragment>
 }`}),n=new ve(e,t);return n.renderOrder=-10,n.frustumCulled=!1,n}var He={hz:120,tyre:{frontB:13.5,frontC:1.45,rearB:9.5,rearC:1.35,driveShare:.45,brakeShare:.6,loadSens:.3,wornGrip:.72,wear:{base:.0011,slip:.011,spin:.008,lock:.03,offroad:.002},wetLossSlick:.27,wetLossWet:.07,dryLossWet:.07},steer:{lock:.76,speedK:.038,rate:6.6,rateSpeedK:.02,returnRate:7.5,maxLock:.62},assist:{off:0,low:.4,medium:.7,full:1},surface:{kerbGrip:.95,grassDrag:.15,roadDrag:.03,airDrag:.25},fuel:{tankKg:45,fullThrottleSeconds:330,idle:.06},pit:{limit:16.7,tyres:2.6,fuelFull:4,repairFull:6},damage:{threshold:3.5,scale:34,enginePowerLoss:.4,steerPull:.05},gripScale:1.48,rearBias:1.12,powerSlide:.85,slideAid:.75,assistYawDamp:.6,enginePower:1.22,shock:{minHit:7,perMs:.08,max:1.6},visualLead:{steer:.78,yaw:.16,max:.33,rate:13,fullSpeed:12},wall:{bounce:.02,spin:.28,friction:.2,yawKeep:.94},yawDamp:.45,yawDampSpeed:.01,net:{hz:24,minBuffer:45,maxBuffer:300,intervalK:1.2,jitterK:2.6},parts:{enginePower:.55,engineDead:.98,gearboxTop:.45,wheelGrip:.65,wheelPull:.09,flatAt:.7,flatDrag:.22,towSeconds:12},reset:{penalty:2},setup:{gearAcc:.04,gearTop:.035,aeroDown:.35,aeroTop:.02,biasStep:.05,rollStep:.03,compound:{soft:[1.04,1.6],medium:[1,1],hard:[.97,.6]}},toy:{w:1.08,h:1.16,l:.88,wheel:1.12}},Tt=[{id:"Ford",cyl:4,name:"Scarab RS",ar:"\u0627\u0644\u062C\u0639\u0631\u0627\u0646",cls:"Compact \xB7 FWD",price:0,color:2060267,top:50,acc:8.6,grip:1.22,rear:1.04,loose:.3,off:.62,mass:1180,drive:"fwd",brake:1.25,aero:.5,rollF:.6,yawK:1.12,blurb:"Front-drive hot hatch. Safe understeer, lift to tuck the nose in. The beginner\u2019s car."},{id:"Sterrato",cyl:10,name:"Sandstorm",ar:"\u0627\u0644\u0639\u0627\u0635\u0641\u0629",cls:"Rally \xB7 AWD",price:0,color:15245852,top:53,acc:9.4,grip:1.18,rear:1,loose:.5,off:.8,mass:1350,drive:"awd",brake:1.25,aero:.7,rollF:.54,yawK:1.25,blurb:"All-wheel drive. Huge traction out of corners and barely notices the grass."},{id:"Mercedes",cyl:8,name:"Pharaoh",ar:"\u0627\u0644\u0641\u0631\u0639\u0648\u0646",cls:"Touring \xB7 RWD",price:1500,color:1842982,top:56,acc:9.8,grip:1.15,rear:.96,loose:.8,off:.55,mass:1650,drive:"rwd",brake:1.2,aero:.6,rollF:.5,yawK:1.4,blurb:"Heavy rear-drive saloon. Long braking, and the tail steps out under power."},{id:"LandRover",cyl:8,name:"Sphinx 4x4",ar:"\u0623\u0628\u0648 \u0627\u0644\u0647\u0648\u0644",cls:"Truck \xB7 AWD",price:2500,color:3112271,top:49,acc:9,grip:1.12,rear:1.03,loose:.4,off:.9,mass:2100,drive:"awd",brake:1.05,aero:.3,rollF:.57,yawK:1.6,blurb:"Two tonnes. Slow to turn, slow to stop, wins every shoving match."},{id:"Artura",cyl:6,name:"Cobra",ar:"\u0627\u0644\u0643\u0648\u0628\u0631\u0627",cls:"GT \xB7 RWD",price:4e3,color:16738835,top:60,acc:11,grip:1.32,rear:.99,loose:.6,off:.5,mass:1400,drive:"rwd",brake:1.4,aero:1.2,rollF:.52,yawK:1.1,blurb:"Mid-engine GT. Sharp turn-in, strong brakes, needs a smooth right foot."},{id:"Ferrari",cyl:8,name:"Ra Rosso",ar:"\u0631\u0639",cls:"GT \xB7 RWD",price:6500,color:14163500,top:64,acc:11.8,grip:1.36,rear:.97,loose:.7,off:.5,mass:1450,drive:"rwd",brake:1.45,aero:1.4,rollF:.5,yawK:1.1,blurb:"V8 GT. Faster everywhere than the Cobra and less forgiving about it."},{id:"Zenvo",cyl:8,name:"Horus GT",ar:"\u062D\u0648\u0631\u0633",cls:"Hyper \xB7 RWD",price:9500,color:1324712,top:69,acc:12.8,grip:1.42,rear:.98,loose:.75,off:.45,mass:1500,drive:"rwd",brake:1.5,aero:2.3,rollF:.5,yawK:1.05,blurb:"Downforce car: the faster you go, the harder it grips. Brutal on cold nerves."},{id:"Mustang",cyl:8,name:"Khamsin",ar:"\u0627\u0644\u062E\u0645\u0627\u0633\u064A\u0646",cls:"Muscle \xB7 RWD",price:2e3,color:15909376,top:58,acc:10.6,grip:1.14,rear:.94,loose:.9,off:.5,mass:1700,drive:"rwd",brake:1.15,aero:.5,rollF:.48,yawK:1.35,blurb:"Big V8 muscle. Loud, fast in a straight line, and happy to go sideways."},{id:"M8",cyl:8,name:"Anubis M",ar:"\u0623\u0646\u0648\u0628\u064A\u0633",cls:"Touring \xB7 RWD",price:3500,color:1006666,top:62,acc:11,grip:1.28,rear:.97,loose:.7,off:.5,mass:1750,drive:"rwd",brake:1.35,aero:.9,rollF:.52,yawK:1.3,blurb:"Grand tourer. Heavy but composed, with long legs on the straights."},{id:"Urus",cyl:8,name:"Bastet SUV",ar:"\u0628\u0627\u0633\u062A\u064A\u062A",cls:"Super SUV \xB7 AWD",price:4500,color:15987958,top:60,acc:11.2,grip:1.2,rear:1.02,loose:.45,off:.82,mass:2200,drive:"awd",brake:1.2,aero:.6,rollF:.56,yawK:1.55,blurb:"A fast SUV. Launches hard on four driven wheels, leans on its brakes."},{id:"Porsche",cyl:8,name:"Nefertiti S",ar:"\u0646\u0641\u0631\u062A\u064A\u062A\u064A",cls:"Sports saloon \xB7 AWD",price:5e3,color:8077284,top:61,acc:11.4,grip:1.3,rear:1,loose:.5,off:.6,mass:1900,drive:"awd",brake:1.35,aero:1,rollF:.53,yawK:1.35,blurb:"All-wheel-drive saloon. Stable, quick, and easy to trust in the rain."},{id:"AMG",cyl:8,name:"Osiris GT",ar:"\u0623\u0648\u0632\u064A\u0631\u064A\u0633",cls:"GT \xB7 RWD",price:6e3,color:3126359,top:63,acc:11.6,grip:1.33,rear:.97,loose:.7,off:.5,mass:1600,drive:"rwd",brake:1.4,aero:1.3,rollF:.5,yawK:1.15,blurb:"Front-engine GT with a long bonnet. Balanced, and rewards trail braking."},{id:"GTR",cyl:6,name:"Sobek R",ar:"\u0633\u0648\u0628\u0643",cls:"GT \xB7 AWD",price:7e3,color:1681358,top:64,acc:12.4,grip:1.34,rear:1,loose:.5,off:.6,mass:1750,drive:"awd",brake:1.4,aero:1.3,rollF:.54,yawK:1.25,blurb:"Twin-turbo all-wheel drive. Monstrous traction out of slow corners."},{id:"P1GTR",cyl:8,name:"Seth GTR",ar:"\u0633\u062A",cls:"Track hyper \xB7 RWD",price:12e3,color:16738835,top:70,acc:13.2,grip:1.48,rear:.99,loose:.7,off:.42,mass:1400,drive:"rwd",brake:1.55,aero:2.9,rollF:.5,yawK:1,blurb:"Track-only hypercar. Enormous downforce; the fastest car in the game."}];var Dc=[0,15987958,1118740,12088115,15909376,14886446,1681358],od=[0,197380,733010,5915664,4853012],ld=[0,1681358,16722896,8257435,16761370,14886446,16777215];function cy(i,e){e=Object.assign({gear:0,aero:0,brake:0,susp:0,tyre:"medium"},e||{});let t=He.setup,n=t.compound[e.tyre]||t.compound.medium;return{acc:1+t.gearAcc*e.gear,top:(1-t.gearTop*e.gear)*(1-t.aeroTop*e.aero),aero:Math.max(.1,1+t.aeroDown*e.aero),bias:.7+t.biasStep*e.brake,rollF:i.rollF+t.rollStep*e.susp,grip:n[0],wear:n[1]}}var la=[1006666,9051179,2830218,16751918,14163500,16738835,15909376,3126359,1681358,2060267,8077284,16732067,15921906,1842982],Yt=(i,e,t)=>i<e?e:i>t?t:i,_o=i=>{for(;i>Math.PI;)i-=2*Math.PI;for(;i<-Math.PI;)i+=2*Math.PI;return i},yi=["FL","FR","RL","RR"],Zn={},hy=[new be(5916208),new be(13215339)],ad=null;async function rm(){let i=await new sa().parseAsync(await ra("cars.glb"),"");ad={};for(let e of i.scene.children)ad[e.name]=e}var os={};function uy(i){return os.tire||(os.tire=new we({color:789517,roughness:.92}),os.rim=new we({color:13225170,metalness:.95,roughness:.28}),os.rimDark=new we({color:2763824,metalness:.8,roughness:.4}),os.body=new we({color:921361,roughness:.6,metalness:.2}),os.trim=new we({color:1381914,roughness:.45,metalness:.5}),os.window=new mn({color:659478,roughness:.06,metalness:.9,clearcoat:1}),os.front=new we({color:16777215,emissive:16774096,emissiveIntensity:1.1})),{...os,paint:new mn({color:i,metalness:.55,roughness:.32,clearcoat:1,clearcoatRoughness:.06}),rear:new we({color:9046538,emissive:16718362,emissiveIntensity:.5})}}var Is=class{constructor(e,t=e.color,n="Driver",s,r,a){this.spec=e,this.name=n,this.color=t,this.up=s||{eng:0,tyre:0,nitro:0,armor:0},this.fuel=1,this.fuelK=1,this.parts={engine:0,gearbox:0,wheels:[0,0,0,0]},this.gone=[!1,!1,!1,!1],this.partK=1,this.shock=0,this.tc=!0,this.abs=!0,this.steerK=1,this.wspinF=0,this.lost=[],this.noNitro=!1,this.assistK=0,this.inPit=!1,this.pitZone=!1,this.aF=0,this.useF=0,this.useR=0,this.dirt=0,this.dirtShown=0,this.wetTyres=!1,this.baseColor=new be(t);let o=ad[e.id],l=this.root=new wt;l.rotation.order="YXZ";let c=this.chassis=new wt;l.add(c),this.m=uy(t),this.wheels={},this.bodyMeshes=[],this.dmg={front:0,rear:0,left:0,right:0},this.tyre=1,this.dmgScale=1,this.wear=1;for(let d of o.children){let f=d.clone(!0);if(f.traverse(m=>{if(!m.isMesh)return;m.castShadow=!0;let x=m.userData.kind=m.material.name;m.material=x==="paint"?this.m.paint:x==="tire"?this.m.tire:x==="rim7"?this.m.rim:x==="rim6"?this.m.rimDark:this.m[x]||this.m.body}),f.name.startsWith("body"))c.add(f),f.traverse(m=>{m.isMesh&&(m.geometry=m.geometry.clone(),m.userData.orig=m.geometry.attributes.position.array.slice(),this.bodyMeshes.push(m))});else{let m=new wt;m.position.copy(f.position),f.position.set(0,0,0),m.add(f),l.add(m),this.wheels[f.name.slice(6,8)]={pivot:m,mesh:f,x:m.position.x,y:m.position.y,z:m.position.z}}}let h=this.wheels;this.a=h.FL.z,this.b=-h.RL.z,this.tw=h.FL.x,this.R=h.RL.y;{let d=He.toy;c.scale.set(d.w,d.h,d.l);for(let f in h){let m=h[f];m.mesh.scale.setScalar(d.wheel),m.y*=d.wheel,m.pivot.position.set(m.x*d.w,m.y,m.z*d.l)}this.rideY=this.R*(d.wheel-1),this.R*=d.wheel}let u=new Ln().setFromObject(c);this.tn=cy(e,a),this.wear=this.tn.wear,this.dress(r),this.hw0=(u.max.x-u.min.x)/2,this.zf0=u.max.z,this.makeLamps(),this.hw=(u.max.x-u.min.x)/2-.05,this.zf=u.max.z-.1,this.zr=-u.min.z-.1,this.top=u.max.y,this.I=e.mass*this.a*this.b*e.yawK,this.h=.3,this.wsurf=[as,as,as,as],this.lastSk=[null,null],this.spin=[0,0],this.reset(0,0,0)}reset(e,t,n){this.x=this.px=e,this.z=this.pz=t,this.th=this.pth=n,this.vx=this.vz=this.r=0,this.steer=0,this.axS=this.ayS=0,this.slipR=0,this.wspin=0,this.locked=!1,this.grass=0,this.nitro=1,this.nitroOn=!1,this.braking=!1,this.rollD=this.pitchD=0,this.lead=0,this.draft=0,this.oil=0,this.lockF=!1,this.y=0,this.pitch=this.roll=0,this.stuck=0,this.lastSk=[null,null],this.emitAcc=0,this.rpm=0,this.gear=1}get speed(){return Math.hypot(this.vx,this.vz)}get vf(){return this.vx*Math.sin(this.th)+this.vz*Math.cos(this.th)}get beta(){let e=Math.sin(this.th),t=Math.cos(this.th);return Math.atan2(this.vx*t-this.vz*e,Math.abs(this.vx*e+this.vz*t))}step(e,t,n,s,r=1){let a=this.spec,o=a.mass+He.fuel.tankKg*this.fuel,l=this.a,c=this.b,h=l+c,u=9.81,d=this.up,f=this.x,m=this.z,x=He.tyre,g=this.tn;this.px=f,this.pz=m,this.pth=this.th;let p=Math.sin(this.th),b=Math.cos(this.th),M=this.vx*p+this.vz*b,v=this.vx*b-this.vz*p,S=Math.hypot(M,v),T=M>=0?1:-1,C=n.wet||0,w=this.dmg,R=this.parts,P=He.parts,D=R.wheels.reduce((te,xe)=>te+(xe>P.flatAt?P.flatDrag:0),0),N=a.grip*g.grip*(1+.035*d.tyre)*(.72+.28*this.tyre)*(this.oil>0?.42:1)*He.gripScale,H=this.wetTyres?.07*C+.07*(1-C):.27*C;this.oil=Math.max(0,this.oil-e);let k=0,q=0,Q=0,X=0;for(let te=0;te<4;te++){let xe=this.wheels[yi[te]],Te=n.surf(this.x+p*xe.z+b*xe.x,this.z+b*xe.z-p*xe.x);this.wsurf[te]=Te,Te===Pc&&X++;let me=Te===as||Te===Pc?1-H:Te===oa?.95-H*1.2:a.off*(1-.15*C);(Te===Ps||Te===oi)&&(Q+=.25);let L=me*(1-P.wheelGrip*R.wheels[te]);te<2?k+=L/2:q+=L/2}this.grass=Q,this.inPit=X>=2||this.pitZone;let oe=S>4&&M>0?Math.atan2(v,M):0,Z=t.steer*He.steer.lock/(1+S*He.steer.speedK),ne=Math.abs(oe);this.shock=Math.max(0,this.shock-e);let se=this.shock>0?0:this.assistK;se>0&&M>5&&(Z=Z*(1-se*Yt((ne-.3)*1.6,0,.8))+se*Yt(oe*.75,-.5,.5)),S>3&&(Z+=(w.left-w.right)*.05+(R.wheels[0]-R.wheels[1])*P.wheelPull+w.front*.02*Math.sin(this.x*.7+this.z*.9)),Z=Yt(Z,-.62,.62);let Re=(t.steer===0?He.steer.returnRate:He.steer.rate*this.steerK/(1+S*He.steer.rateSpeedK))*e;this.steer+=Yt(Z-this.steer,-Re,Re);let Ae=o*this.axS*this.h/h,ft=a.aero*g.aero*S*S,Ye=Math.min(1,Math.abs(this.ayS)*this.h/(u*this.tw)),it=1-x.loadSens*(Ye*g.rollF*2)**2,ee=1-x.loadSens*(Ye*(1-g.rollF)*2)**2,ae=Math.max(o*u*c/h-Ae,o*u*.15)+ft*.45,ye=Math.max(o*u*l/h+Ae,o*u*.15)+ft*.55,Ce=s?t.throttle:0,_e=s?t.brake:1;(this.fuel<=0||R.engine>=P.engineDead)&&(Ce=0);let qe=this.burn=s&&Ce>.8&&_e>.5&&S<5&&a.drive!=="fwd";if(this.inPit){let te=He.pit.limit;M>te+.5?(Ce=0,_e=Math.max(_e,.55)):M>te-1.2&&(Ce=Math.min(Ce,.12))}let Et=s&&_e>0&&Ce===0&&M<1.2,Xe=this.nitroOn=!!(t.nitro&&!this.noNitro&&this.nitro>0&&Ce>0&&s&&M>3);Xe&&(this.nitro=Math.max(0,this.nitro-e/(3.2*(1+.25*d.nitro))));let st=a.top*g.top*(1+.04*d.eng)*(Xe?1.16:1)*(Q>.5?.55:1)*(1-.1*(w.front+w.rear))*(1-P.gearboxTop*R.gearbox);se>0&&ne>.42&&(Ce*=1-se*(1-Yt(1-(ne-.42)/.3,.2,1)));let pt=Et?-_e*a.acc*o*.5*Yt(1+M/12,0,1):Ce*a.acc*g.acc*(1+.06*d.eng)*(1+.12*this.draft)*o*r*(1-P.enginePower*R.engine)*(1-.2*R.gearbox)*(Xe?1.5:1)*Math.min(1,16/Math.max(M,1))*Yt(1-(M/st)**2,0,1);pt*=He.enginePower,qe&&(pt*=.3),this._thr>.7&&Ce<.1&&this.rpm>.55&&(this.backfire=.14),this._thr=Ce,this.backfire=Math.max(0,(this.backfire||0)-e);let Je=Et?0:Math.min(_e*a.brake*o*u,o*Math.abs(M)/e);this.braking=_e>.1&&!Et;let Mt=a.drive==="fwd"?1:a.drive==="awd"?.42:0,St=k*N*ae*it,Pt=q*N*a.rear*He.rearBias*ye*ee;this.wspinF=Mt>0&&!this.tc?Math.max(0,(pt*Mt-St)/St):0;let ot=Yt(pt*Mt-T*Je*g.bias,-St,St),nt=pt*(1-Mt)-T*Je*(1-g.bias),B=Math.max(Math.abs(M),3),jt=v-c*this.r,Ke=Math.atan2(v+l*this.r,B)-this.steer*T,E=-Math.sqrt(Math.max(St*St-(ot>0?ot*x.driveShare:ot*(this.abs?x.brakeShare:1.12))**2,St*St*.15))*Math.sin(x.frontC*Math.atan(x.frontB*Ke)),y;if(this.wspin=0,this.locked=!1,t.hand&&s&&S>1){let te=Math.hypot(M,jt)||1,xe=Pt*.7;nt=-xe*M/te,y=-xe*jt/te,this.locked=!0,this.slipR=1}else{this.tc&&!qe&&nt>Pt*.96&&(nt=Pt*.96),Math.abs(nt)>Pt&&(this.wspin=(Math.abs(nt)-Pt)/Pt,nt=Math.sign(nt)*Pt);let te=Math.atan2(jt,B);y=-Math.sqrt(Math.max(Pt*Pt-nt*nt*a.loose*He.powerSlide*(this.tc?.45:1),Pt*Pt*.12))*Math.sin(x.rearC*Math.atan(x.rearB*te)),this.slipR=Math.abs(te)}qe&&(this.wspin=Math.max(this.wspin,1.2),y*=.3),this.aF=Ke,this.useF=Math.hypot(ot,E)/(St||1),this.useR=Math.hypot(nt,y)/(Pt||1);let I=Math.cos(this.steer),U=Math.sin(this.steer),V=(nt+ot*I-E*U-.25*(1-.45*this.draft)*M*Math.abs(M)-o*(.03+D+Q*He.surface.grassDrag)*M-(Ce===0&&!Et?o*.45*Math.sign(M)*Math.min(1,Math.abs(M)):0))/o,ie=(E*I+ot*U+y)/o;if(this.vx+=(V*p+ie*b)*e,this.vz+=(V*b-ie*p)*e,se>0&&S>3&&!t.hand){let te=this.vx*b-this.vz*p,xe=Math.min(1,He.slideAid*se*e);this.vx-=b*te*xe,this.vz+=p*te*xe}this.r+=(l*(E*I+ot*U)-c*y)/this.I*e,this.r-=this.r*(He.yawDamp+S*He.yawDampSpeed+se*He.assistYawDamp)*e,Ce===0&&(_e===0||!s)&&S<.5&&(this.vx*=.9,this.vz*=.9,this.r*=.85),s||(this.vx=this.vz=this.r=0),this.th+=this.r*e,this.x+=this.vx*e,this.z+=this.vz*e,this.axS+=(V-this.axS)*Math.min(1,e*8),this.ayS+=(ie-this.ayS)*Math.min(1,e*8),s&&(this.fuel=Math.max(0,this.fuel-e*this.fuelK*(He.fuel.idle+Ce*(.35+.65*this.rpm))/He.fuel.fullThrottleSeconds)),s&&(this.tyre=Math.max(0,this.tyre-e*this.wear*(x.wear.base*Math.min(1,S/25)+Math.min(this.slipR,.8)*.011+this.wspin*.008+(this.locked?.03:0)+Q*.002))),!Xe&&s&&(this.nitro=Math.min(1,this.nitro+e*(.018+(this.drifting?.09:0)))),this.drifting=Math.abs(this.beta)>.22&&S>9&&M>0&&Q<.6;let he=Math.abs(M),Y=[0,.22,.4,.58,.78,1.02].map(te=>te*a.top),W=1;for(;W<5&&he>Y[W];)W++;this.gear=Et&&M<-.5?0:W;let re=(he-Y[W-1])/(Y[W]-Y[W-1]),pe=s?Yt(.25+re*.7+this.wspin*.3,.12,1):.15+t.throttle*.7;this.rpm+=(pe-this.rpm)*Math.min(1,e*10),this.dirt=Yt(this.dirt+e*(Q*Math.min(1,S/15)*.07-C*.03),0,1),this.lockF=this.braking&&_e>.9&&S>17&&Q<.5;let de=this.collideWalls(n);return n.surf(this.x,this.z)===oi&&(this.x=f,this.z=m,this.vx*=.15,this.vz*=.15,this.r*=.3,de=Math.max(de,S*.5),this.hitX=f,this.hitZ=m,this.hitL=[0,this.zf],this.hitN=[-p,-b]),de}collideWalls(e){let t=Math.sin(this.th),n=Math.cos(this.th),s=this.spec.mass,r=this.hw,a=He.wall,o=[[r,this.zf],[-r,this.zf],[r,-this.zr],[-r,-this.zr],[r,0],[-r,0]],l=0,c=!1,h=null;for(let[u,d]of o){let f=t*d+n*u,m=n*d-t*u,x=this.x+f,g=this.z+m;if(e.surf(x,g)!==oi)continue;let p=0,b=0;for(let N=0;N<16;N++){let H=Math.cos(N*.3927),k=Math.sin(N*.3927);for(let q of[.8,1.6,2.6])e.surf(x+H*q,g+k*q)!==oi&&(p+=H,b+=k)}let M=Math.hypot(p,b);if(M<.01){let N=e.escape(x,g);if(!N)continue;p=N.nx,b=N.nz,M=1}p/=M,b/=M;let v=0;for(;v<4&&e.surf(x+p*v,g+b*v)===oi;)v+=.06;this.x+=p*v,this.z+=b*v,c=!0;let S=(this.vx+this.r*m)*p+(this.vz-this.r*f)*b;if(S>=0)continue;let T=m*p-f*b,C=-(1+a.bounce)*S/(1/s+T*T/this.I);this.vx+=C*p/s,this.vz+=C*b/s,this.r+=C*T/this.I*a.spin;let w=-b,R=p,P=this.vx*w+this.vz*R,D=Math.sign(P)*Math.min(Math.abs(P),a.friction*C/s);this.vx-=w*D,this.vz-=R*D,-S>l&&(l=-S,this.hitX=x,this.hitZ=g,this.hitL=[u,d],this.hitN=[p,b]),h=[p,b]}if(h&&this.speed>3){let u=-h[1],d=h[0];this.vx*u+this.vz*d<0&&(u=-u,d=-d);let f=_o(Math.atan2(u,d)-this.th);Math.abs(f)<1.15&&(this.th+=f*.07,this.x+=h[0]*.01,this.z+=h[1]*.01)}return c&&(this.r=Yt(this.r*a.yawKeep,-1.8,1.8),this.touchT=.35),l}bump(e,t){let n=0;for(let s of[1.15,-1.15])for(let r of[1.15,-1.15]){let a=this.x+Math.sin(this.th)*s,o=this.z+Math.cos(this.th)*s,l=e.x+Math.sin(e.th)*r,c=e.z+Math.cos(e.th)*r,h=a-l,u=o-c,d=Math.hypot(h,u),f=2.05;if(d>=f||d<1e-4)continue;let m=h/d,x=u/d,g=f-d,p=this.spec.mass,b=t?1e9:e.spec.mass,M=1/p,v=1/b;this.x+=m*g*v/(M+v)*(t?0:1)+(t?m*g:0),this.z+=x*g*v/(M+v)*(t?0:1)+(t?x*g:0),t||(e.x-=m*g*M/(M+v),e.z-=x*g*M/(M+v));let S=(this.vx-e.vx)*m+(this.vz-e.vz)*x;if(S>=0)continue;let T=-1.08*S/(M+v);this.vx+=T*m*M,this.vz+=T*x*M,this.r+=(Math.cos(this.th)*s*m-Math.sin(this.th)*s*x)*T*1.1/this.I,t||(e.vx-=T*m*v,e.vz-=T*x*v,e.r-=(Math.cos(e.th)*r*m-Math.sin(e.th)*r*x)*T*1.1/e.I),-S>n&&(n=-S,this.hitX=(a+l)/2,this.hitZ=(o+c)/2,this.hitL=this.toLocal(this.hitX,this.hitZ),this.hitN=[m,x],e.hitX=this.hitX,e.hitZ=this.hitZ,e.hitL=e.toLocal(this.hitX,this.hitZ),e.hitN=[-m,-x])}return n}dress(e){let t=this.look=Object.assign({wing:0,split:0,rim:0,tint:0,glow:0,skirt:0,scoop:0,pipe:0},e||{}),n=this.chassis,s="wing";this.addons&&n.remove(this.addons);let r=this.addons=new wt;n.add(r);let a=1e9,o=-1e9,l=0,c=[];for(let p of this.bodyMeshes){let b=p.userData.orig;for(let M=0;M<b.length;M+=3)c.push(b[M],b[M+1],b[M+2]),b[M+2]<a&&(a=b[M+2]),b[M+2]>o&&(o=b[M+2]),b[M]>l&&(l=b[M])}let h=(p,b,M)=>{let v=0;for(let S=0;S<c.length;S+=3)c[S+2]>=p&&c[S+2]<=b&&Math.abs(c[S])<M&&c[S+1]>v&&(v=c[S+1]);return v},u=(p,b)=>{let M=9;for(let v=0;v<c.length;v+=3)c[v+2]>=p&&c[v+2]<=b&&c[v+1]<M&&(M=c[v+1]);return M},d=new we({color:921361,roughness:.45,metalness:.5}),f=l*2,m=(p,b,M,v,S,T,C)=>{let w=new ve(new ht(p,b,M),v);return w.position.set(S,T,C),w.castShadow=!0,w.userData.part=s,r.add(w),w};if(t.wing){let p=h(a+.08,a+.5,l*.75),b=a+.26;if(t.wing===1)m(f*.8,.06,.2,this.m.paint,0,p+.02,a+.14).rotation.x=.25;else{let M=t.wing===2?.27:.4,v=t.wing===2?.3:.42,S=f*(t.wing===2?.86:.97);m(S,.035,v,t.wing===2?this.m.paint:d,0,p+M,b).rotation.x=.13;for(let T of[-.27,.27])m(.04,M,.11,d,T*f,p+M/2,b+.03);for(let T of[-.5,.5])m(.025,t.wing===2?.15:.24,v+.06,d,T*S,p+M+.02,b)}}if(s="split",t.split){let p=u(o-.3,o);m(f*.88,.03,.34,d,0,p+.015,o-.1);for(let b of[-.46,.46])m(.03,.09,.2,d,b*f*.88,p+.05,o-.14)}if(s="skirt",t.skirt){let p=u(a+.8,o-.8);for(let b of[-1,1])m(.07,.1,(o-a)*.46,d,b*(l-.02),p+.07,(a+o)/2)}if(s="scoop",t.scoop){let p=h(-.5,.3,l*.45);m(.36,.09,.52,d,0,p+.035,-.12),m(.3,.05,.06,this.m.paint,0,p+.06,.15)}if(s="pipe",t.pipe){let p=new we({color:14211806,metalness:1,roughness:.2}),b=u(a,a+.3);for(let M of[-.24,-.16,.16,.24])m(.075,.075,.2,p,M*f,b+.13,a-.03)}if(s="glow",t.glow){let p=new ve(new pn(f*.92,(o-a)*.82),new mt({color:new be(ld[t.glow]).multiplyScalar(1.8),transparent:!0,opacity:.6,depthWrite:!1,side:Wt}));p.rotation.x=-Math.PI/2,p.position.set(0,u(a,o)+.03,(a+o)/2),r.add(p)}let x=t.rim?new we({color:Dc[t.rim],metalness:.9,roughness:.26}):null;for(let p in this.wheels)this.wheels[p].mesh.traverse(b=>{b.isMesh&&b.userData.kind&&b.userData.kind.startsWith("rim")&&(b.material=x||(b.userData.kind==="rim6"?this.m.rimDark:this.m.rim))});let g=t.tint?new mn({color:od[t.tint],roughness:.08,metalness:.9,clearcoat:1}):this.m.window;for(let p of this.bodyMeshes)p.userData.kind==="window"&&(p.material=g)}makeLamps(){if(!Zn.cone){Zn.cone=new Fn(2.1,13,16,1,!0).translate(0,-6.5,0).rotateX(-Math.PI/2).scale(1,.3,1),Zn.coneM=new mt({color:16773324,transparent:!0,opacity:.03,blending:An,depthWrite:!1,side:Wt,fog:!1});let t=document.createElement("canvas");t.width=t.height=128;let n=t.getContext("2d"),s=n.createRadialGradient(64,64,4,64,64,64);s.addColorStop(0,"rgba(255,244,214,1)"),s.addColorStop(.5,"rgba(255,240,200,.45)"),s.addColorStop(1,"rgba(255,240,200,0)"),n.fillStyle=s,n.fillRect(0,0,128,128),Zn.poolM=new mt({map:new xi(t),transparent:!0,opacity:.3,blending:An,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-8,polygonOffsetUnits:-8,fog:!1}),Zn.pool=new pn(4.6,10),Zn.lens=new xn(.085,8,6),Zn.lensM=new mt({color:new be(16774358).multiplyScalar(2.5)})}let e=t=>{let n=new wt;n.position.set(t*this.hw0*.64,.56,this.zf0-.04);let s=new ve(Zn.cone,Zn.coneM);s.rotation.x=.05;let r=new ve(Zn.pool,Zn.poolM);return r.rotation.x=-Math.PI/2,r.position.set(-t*.2,-.5,6.2),n.add(s,r,new ve(Zn.lens,Zn.lensM)),n.visible=!1,this.root.add(n),{g:n,ok:!0}};this.lamps=[e(1),e(-1)],this.lightsOn=!1}setLights(e){this.lightsOn=e;for(let t of this.lamps)t.g.visible=e&&t.ok}toLocal(e,t){let n=e-this.x,s=t-this.z,r=Math.sin(this.th),a=Math.cos(this.th);return[n*a-s*r,n*r+s*a]}damage(e,t=!0){let n=Math.max(0,e-3.5)/34*this.dmgScale;if(n<=0||!this.hitL)return 0;t&&e>He.shock.minHit&&(this.shock=Math.min(He.shock.max,e*He.shock.perMs));let[s,r]=this.hitL,a=this.dmg,o=r>this.zf*.55?"front":r<-this.zr*.55?"rear":s>0?"left":"right";a[o]=Math.min(1,a[o]+n);{let x=this.parts,g=n*this.partK,p=Math.abs(s)>this.hw*.45,b=(M,v)=>{x.wheels[M]=Math.min(1,x.wheels[M]+v),x.wheels[M]>=1&&!this.gone[M]&&(this.gone[M]=!0,this.wheels[yi[M]].mesh.traverse(S=>{S.isMesh&&this.lost.push(S)}))};o==="front"?(x.engine=Math.min(1,x.engine+g*.9),p&&b(s>0?0:1,g*1.3)):o==="rear"?(x.gearbox=Math.min(1,x.gearbox+g*.9),p&&b(s>0?2:3,g*1.3)):b(s>0?r>0?0:2:r>0?1:3,g*1.9)}if(o==="front"&&n>.035)for(let x of n>.22?[0,1]:[s>0?0:1])this.lamps[x].ok&&(this.lamps[x].ok=!1,this.lamps[x].g.visible=!1,this.glass=!0);if(n>.07&&this.addons){let x=o==="rear"?["wing","pipe"]:o==="front"?["split"]:["skirt"];for(let g of this.addons.children)x.includes(g.userData.part)&&!g.userData.gone&&(g.userData.gone=!0,this.lost.push(g))}let l=Math.sin(this.th),c=Math.cos(this.th),h=this.hitN,u=h[0]*c-h[1]*l,d=h[0]*l+h[1]*c,f=1.25,m=Math.min(.3,n*2.4);for(let x of this.bodyMeshes){let g=x.geometry.attributes.position,p=g.array,b=x.userData.orig,M=!1;for(let v=0;v<p.length;v+=3){let S=Math.hypot(b[v]-s,(b[v+1]-.55)*.6,b[v+2]-r);if(S>f)continue;let T=(1-S/f)**2*m,C=Math.sin(b[v]*37.1+b[v+1]*91.7+b[v+2]*53.3)*.35;p[v]+=u*T*(1+C),p[v+1]-=T*.25*(1+C),p[v+2]+=d*T*(1+C);let w=p[v]-b[v],R=p[v+1]-b[v+1],P=p[v+2]-b[v+2],D=Math.hypot(w,R,P);if(D>.36){let N=.36/D;p[v]=b[v]+w*N,p[v+1]=b[v+1]+R*N,p[v+2]=b[v+2]+P*N}M=!0}M&&(g.needsUpdate=!0,x.geometry.computeVertexNormals())}return n}get health(){let e=this.dmg,t=this.parts;return Math.max(0,1-(e.front+e.rear+e.left+e.right)/4*.55-t.engine*.2-t.gearbox*.1-(t.wheels[0]+t.wheels[1]+t.wheels[2]+t.wheels[3])/4*.25)}get stranded(){return this.parts.engine>=He.parts.engineDead||this.gone.filter(Boolean).length>=2}repair(){this.dmg={front:0,rear:0,left:0,right:0},this.tyre=1,this.dirt=0,this.parts={engine:0,gearbox:0,wheels:[0,0,0,0]},this.gone=[!1,!1,!1,!1];for(let e in this.wheels)this.wheels[e].mesh.traverse(t=>{t.visible=!0});this.dress(this.look);for(let e of this.lamps)e.ok=!0;this.setLights(this.lightsOn);for(let e of this.bodyMeshes)e.geometry.attributes.position.array.set(e.userData.orig),e.geometry.attributes.position.needsUpdate=!0,e.geometry.computeVertexNormals()}render(e,t,n=1){let s=this.rx=this.px+(this.x-this.px)*n,r=this.rz=this.pz+(this.z-this.pz)*n,a=this.pth+_o(this.th-this.pth)*n;{let m=He.visualLead,x=Math.hypot(this.vx,this.vz),g=Yt(this.steer*m.steer+this.r*m.yaw,-m.max,m.max)*Math.min(1,x/m.fullSpeed)*(this.vf>1&&!(this.touchT>0)?1:0);this.touchT=Math.max(0,(this.touchT||0)-e),this.lead+=(g-this.lead)*Math.min(1,e*m.rate)}let o=Math.sin(a),l=Math.cos(a),c=[];for(let m=0;m<4;m++){let x=this.wheels[yi[m]];c.push(t.height(s+o*x.z+l*x.x,r+l*x.z-o*x.x))}let h=Math.min(1,e*14);this.y+=((c[0]+c[1]+c[2]+c[3])/4-this.y)*Math.min(1,e*25),this.pitch+=(Math.atan2((c[2]+c[3]-c[0]-c[1])/2,this.a+this.b)-this.pitch)*h,this.roll+=(Math.atan2((c[0]+c[2]-c[1]-c[3])/2,this.tw*2)-this.roll)*h,this.root.position.set(s,this.y,r),this.root.rotation.set(this.pitch,a+this.lead,this.roll),this.rollD+=(Yt(this.ayS*.011,-.085,.085)-this.rollD)*Math.min(1,e*7),this.pitchD+=(Yt(-this.axS*.0055,-.05,.05)-this.pitchD)*Math.min(1,e*7);let u=this.speed>2?this.grass*.011+(this.wsurf.includes(oa)?.005:0):0;this.chassis.rotation.set(this.pitchD+(Math.random()-.5)*u*.5+this.dmg.front*.02+((this.gone[0]||this.gone[1]?.06:0)-(this.gone[2]||this.gone[3]?.06:0)),0,(this.gone[1]||this.gone[3]?.07:0)-(this.gone[0]||this.gone[2]?.07:0)+this.rollD+(Math.random()-.5)*u+(this.dmg.left-this.dmg.right)*.035),this.chassis.position.y=this.rideY+(Math.random()-.5)*u+(this.rpm>.2?Math.sin(performance.now()*.05)*.003:0);let d=this.vf,f=d/this.R*e;this.spin[0]+=f,this.spin[1]+=this.locked?0:f*(1+this.wspin*3)+(this.wspin>0?(30+this.wspin*40)*e:0);for(let m=0;m<4;m++){let x=this.wheels[yi[m]];x.mesh.rotation.x=this.spin[m<2?0:1],x.mesh.rotation.z=this.parts.wheels[m]*.32*Math.sin(this.spin[m<2?0:1]),x.mesh.scale.y=He.toy.wheel*(this.parts.wheels[m]>He.parts.flatAt?.82:1),m<2&&(x.pivot.rotation.y=this.steer),x.pivot.position.y=x.y+(this.wsurf[m]===Ps&&this.speed>2?(Math.random()-.5)*.012:0)}this.m.rear.emissiveIntensity=this.braking?2.4:.5,Math.abs(this.dirt-this.dirtShown)>.03&&(this.dirtShown=this.dirt,this.m.paint.color.copy(this.baseColor).lerp(hy[t.def.theme==="desert"?1:0],this.dirt*.6),this.m.paint.roughness=.32+this.dirt*.5,this.m.paint.clearcoat=1-this.dirt*.8)}effects(e,t,n,s=1){let r=Math.sin(this.th),a=Math.cos(this.th),o=this.speed,l=n.def.theme==="desert"?[.78,.64,.42]:[.36,.28,.17],c=this.slipR>.16&&o>6||this.wspin>.12||this.locked&&o>3;this.emitAcc+=e*60*s;let h=Math.floor(this.emitAcc);this.emitAcc-=h;for(let d=2;d<4;d++){let f=this.wheels[yi[d]],m=this.x+r*f.z+a*f.x,x=this.z+a*f.z-r*f.x,g=this.wsurf[d],p=n.height(m,x);if(c&&(g===as||g===oa)){let M=Yt(this.slipR*1.6+this.wspin+(this.locked?.6:0),.3,1);for(let C=0;C<h;C++)Math.random()<M&&t.smoke.emit(m+(Math.random()-.5)*.3,p+.15,x+(Math.random()-.5)*.3,this.vx*.3+(Math.random()-.5)*1.5,.6+Math.random()*1.1,this.vz*.3+(Math.random()-.5)*1.5,1.5+Math.random()*1.3,.8,3.8,.88,.89,.93,.3*M);let v=[m+a*.15,p+.06,x-r*.15],S=[m-a*.15,p+.06,x+r*.15],T=this.lastSk[d-2];T&&(T[0][0]-v[0])**2+(T[0][2]-v[2])**2<9&&t.skids.quad(T[0],T[1],v,S),this.lastSk[d-2]=[v,S]}else this.lastSk[d-2]=null}if(o>3)for(let d=0;d<4;d++){if(this.wsurf[d]!==Ps)continue;let f=this.wheels[yi[d]],m=this.x+r*f.z+a*f.x,x=this.z+a*f.z-r*f.x,g=n.height(m,x),p=Yt(o/25,.2,1);for(let b=0;b<h;b++)Math.random()<p*.7&&(t.smoke.emit(m,g+.1,x,this.vx*.3+(Math.random()-.5)*2,1+Math.random()*2,this.vz*.3+(Math.random()-.5)*2,.7+Math.random()*.6,.7,3.5,l[0],l[1],l[2],.42),Math.random()<.5&&t.smoke.emit(m,g+.1,x,-this.vx*.1+(Math.random()-.5)*4,2+Math.random()*3,-this.vz*.1+(Math.random()-.5)*4,.5,.16,0,l[0]*.6,l[1]*.6,l[2]*.6,1,12))}if(this.lockF)for(let d=0;d<2;d++){let f=this.wheels[yi[d]],m=this.x+r*f.z+a*f.x,x=this.z+a*f.z-r*f.x;Math.random()<.35*h&&t.smoke.emit(m,this.y+.15,x,this.vx*.3,.6+Math.random(),this.vz*.3,.6,.6,2.6,.93,.93,.95,.16)}if(this.wspinF>.15)for(let d=0;d<2;d++){let f=this.wheels[yi[d]],m=this.x+r*f.z+a*f.x,x=this.z+a*f.z-r*f.x;for(let g=0;g<h;g++)Math.random()<.6&&t.smoke.emit(m,this.y+.15,x,(Math.random()-.5)*2,.8+Math.random(),(Math.random()-.5)*2,1,.8,3,.93,.93,.95,.28)}if(this.burn)for(let d=2;d<4;d++){let f=this.wheels[yi[d]],m=this.x+r*f.z+a*f.x,x=this.z+a*f.z-r*f.x;for(let g=0;g<h*2;g++)t.smoke.emit(m+(Math.random()-.5)*.5,this.y+.2,x+(Math.random()-.5)*.5,-r*2+(Math.random()-.5)*3,1+Math.random()*2,-a*2+(Math.random()-.5)*3,1.6+Math.random(),1.1,4.2,.96,.96,.97,.4)}if(this.gear!==this._g){if(this._g&&o>6){let d=this.x-r*(this.zr+.15),f=this.z-a*(this.zr+.15);for(let m=0;m<4;m++)t.smoke.emit(d,this.y+.4,f,this.vx*.5-r*2,.4+Math.random(),this.vz*.5-a*2,.5,.35,2.2,.35,.35,.37,.3)}this._g=this.gear}if(this.backfire>0&&Math.random()<.5){let d=this.x-r*(this.zr+.15),f=this.z-a*(this.zr+.15);t.glow.emit(d,this.y+.4,f,this.vx-r*5,.5,this.vz-a*5,.1,.45,-2,1,.55,.15,1)}let u=n.wet||0;if(u>.15&&o>8)for(let d=2;d<4;d++){let f=this.wheels[yi[d]],m=this.x+r*f.z+a*f.x,x=this.z+a*f.z-r*f.x;for(let g=0;g<h;g++)Math.random()<u*.8&&t.smoke.emit(m,this.y+.2,x,this.vx*.45+(Math.random()-.5)*2,1.2+Math.random()*1.5,this.vz*.45+(Math.random()-.5)*2,.6+Math.random()*.4,.7,4,.8,.86,.93,.16*u)}if(this.parts.gearbox>.5&&o>4&&Math.random()<.25&&t.smoke.emit(this.x-r*this.zr*.5,this.y+.12,this.z-a*this.zr*.5,0,0,0,2.5,.22,.1,.05,.04,.03,.7),this.parts.engine>.3){let d=this.parts.engine,f=this.x+r*this.zf*.6,m=this.z+a*this.zf*.6,x=.5-d*.42;for(let g=0;g<h;g++)Math.random()<d*.5&&t.smoke.emit(f+(Math.random()-.5)*.6,this.y+this.top*.75,m+(Math.random()-.5)*.6,this.vx*.5,1.5+Math.random()*1.5,this.vz*.5,1.2+Math.random()*.8,.6,2.4,x,x,x,.4);d>.85&&Math.random()<.5&&t.glow.emit(f,this.y+this.top*.7,m,this.vx,1.5+Math.random()*2,this.vz,.25,.5,-1,1,.5,.1,.8)}if(this.nitroOn)for(let d of[-.35,.35])for(let f=0;f<Math.max(1,h);f++){let m=this.x-r*(this.zr+.1)+a*d,x=this.z-a*(this.zr+.1)-r*d;t.glow.emit(m,this.y+.42,x,this.vx-r*(6+Math.random()*5),Math.random()-.5,this.vz-a*(6+Math.random()*5),.12+Math.random()*.1,.55,-2,.35,.65,1,.9)}}impactFX(e,t,n){let s=t.height(this.hitX,this.hitZ)+.45,r=this.hitN||[0,0],a=-r[1],o=r[0],l=Math.sign(this.vx*a+this.vz*o)||1,c=Math.min(1,n/20);for(let h=0;h<5+c*26;h++){let u=(4+Math.random()*10)*l*(.4+c);e.glow.emit(this.hitX,s+Math.random()*.3,this.hitZ,a*u+r[0]*(1+Math.random()*4)+this.vx*.3,.5+Math.random()*4.5,o*u+r[1]*(1+Math.random()*4)+this.vz*.3,.2+Math.random()*.4,.13,0,1,.72,.28,1,15)}if(n>6){let h=new be(this.color);for(let u=0;u<3+c*10;u++)e.smoke.emit(this.hitX,s,this.hitZ,r[0]*(2+Math.random()*5)+(Math.random()-.5)*5+this.vx*.4,2+Math.random()*5,r[1]*(2+Math.random()*5)+(Math.random()-.5)*5+this.vz*.4,.7+Math.random()*.5,.16+Math.random()*.12,0,u%2?h.r:.08,u%2?h.g:.08,u%2?h.b:.09,1,13);for(let u=0;u<6;u++)e.smoke.emit(this.hitX,s-.2,this.hitZ,(Math.random()-.5)*3,.6+Math.random(),(Math.random()-.5)*3,.8,.8,3,.6,.58,.55,.22)}}netApply(e,t){let n=this.nb||(this.nb={buf:[],off:1/0,iv:1e3/He.net.hz,jit:4,last:0,delay:70}),s=e[8];if(!(n.buf.length&&s<=n.buf[n.buf.length-1].t)){if(n.buf.push({t:s,x:e[0],z:e[1],th:e[2],vx:e[3],vz:e[4],r:e[5]}),n.buf.length>40&&n.buf.shift(),n.off=Math.min(n.off+.05,t-s),n.last){let r=t-n.last;n.iv+=(r-n.iv)*.1,n.jit+=(Math.abs(r-n.iv)-n.jit)*.1}n.last=t,this.steer=e[6],this.braking=!!(e[7]&1),this.nitroOn=!!(e[7]&2),this.locked=!!(e[7]&4),this.slipR=e[7]&8?.4:0,this.wspin=0}}netStep(e,t,n){let s=this.nb;if(!s||!s.buf.length)return;{let p=Yt(s.iv*He.net.intervalK+s.jit*He.net.jitterK,He.net.minBuffer,He.net.maxBuffer);s.delay+=(p-s.delay)*Math.min(1,e*(p>s.delay?2.5:.5))}let r=n-s.off-s.delay,a=s.buf,o=a.length-1;for(;o>0&&a[o].t>r;)o--;let l=a[o],c=a[o+1],h,u,d,f,m,x;if(c&&r>=l.t){let p=(c.t-l.t)/1e3,b=(r-l.t)/(c.t-l.t),M=b*b,v=M*b,S=2*v-3*M+1,T=v-2*M+b,C=-2*v+3*M,w=v-M;h=S*l.x+T*p*l.vx+C*c.x+w*p*c.vx,u=S*l.z+T*p*l.vz+C*c.z+w*p*c.vz,d=l.th+_o(c.th-l.th)*b,f=l.vx+(c.vx-l.vx)*b,m=l.vz+(c.vz-l.vz)*b,x=l.r+(c.r-l.r)*b}else{let p=Yt((r-l.t)/1e3,0,.25),b=r-l.t>250?Math.exp(-(r-l.t-250)/200):1;h=l.x+l.vx*p,u=l.z+l.vz*p,d=l.th+l.r*p,f=l.vx*b,m=l.vz*b,x=l.r*b}let g=Math.min(1,e*25);this.x+=(h-this.x)*g,this.z+=(u-this.z)*g,this.th+=_o(d-this.th)*g,this.vx=f,this.vz=m,this.r=x;for(let p=0;p<4;p++){let b=this.wheels[yi[p]];this.wsurf[p]=t.surf(this.x+Math.sin(this.th)*b.z+Math.cos(this.th)*b.x,this.z+Math.cos(this.th)*b.z-Math.sin(this.th)*b.x)}this.grass=this.wsurf.filter(p=>p===Ps).length/4,this.px=this.x,this.pz=this.z,this.pth=this.th}netPack(){return[+this.x.toFixed(2),+this.z.toFixed(2),+this.th.toFixed(3),+this.vx.toFixed(2),+this.vz.toFixed(2),+this.r.toFixed(2),+this.steer.toFixed(2),(this.braking?1:0)|(this.nitroOn?2:0)|(this.locked?4:0)|(this.slipR>.16?8:0),Math.round(performance.now())]}dispose(){this.m.paint.dispose(),this.m.rear.dispose()}};function am(i,e,t,n,s){let r=e.n,a=i.speed,o=e.path,l=Math.round((7+a*.42)/e.spacing),c=o[(i.idx+l)%r],h=Yt(c.k*260,-1,1)*t.wide+t.lane,u=0,d=Math.sin(i.th),f=Math.cos(i.th);for(let S of n){if(S===i||S.out)continue;let T=S.x-i.x,C=S.z-i.z,w=T*d+C*f,R=T*f-C*d;if(w<-3.5||w>55||Math.abs(R)>8)continue;let P=S.vx*d+S.vz*f,D=S.vx*f-S.vz*d,N=i.vf-P,H=N>.5?Math.max(0,w-4.6)/N:99,k=R+D*Math.min(H,1.2);S.speed<4&&w>0&&Math.abs(R)<3.4?(h+=R>0?-3.6:3.6,H<1.1&&(u=Math.max(u,.6))):w>0&&Math.abs(k)<2.5&&H<2.4?(h+=(k>0?-1:1)*3*(1.2-H/2.4),H<.5*t.care&&(u=Math.max(u,1-H))):w>-3.5&&w<5&&Math.abs(R)<3.3&&(h+=(R>0?-1:1)*1.3*t.care)}t.off+=(Yt(h,-t.max,t.max)-t.off)*Math.min(1,s*1.5);let m=c.x+c.tz*t.off,x=c.z-c.tx*t.off,g=_o(Math.atan2(m-i.x,x-i.z)-i.th),p=i.spec.top,b=i.spec.grip*(.72+.28*i.tyre)*t.skill*t.skill*.78*He.gripScale*(1-.26*(e.wet||0)*(i.wetTyres?.3:1))*(1-.3*Math.max(i.parts.wheels[0],i.parts.wheels[1]))*9.81,M=7.5*t.skill;for(let S=0;S<70;S++){let T=o[(i.idx+S)%r],C=Math.sqrt(b/Math.max(Math.abs(T.k),.0015))*1.02,w=Math.sqrt(C*C+2*M*S*e.spacing);w<p&&(p=w)}i.grass>.4&&(p=Math.min(p,16));let v=t.inp;return v.steer=Yt(g*2.4,-1,1),v.throttle=a<p?Math.abs(g)>.5?.5:1:0,v.brake=a>p+1.5?Yt((a-p)/6,.2,1):0,a>8&&Math.abs(i.beta)>.1&&(v.throttle*=Math.abs(i.beta)>.25?.15:.5),v.hand=!1,v.nitro=t.skill>.9&&Math.abs(c.k)<.004&&Math.abs(g)<.08&&i.nitro>.5,u>0&&i.vf>6&&(v.throttle=0,v.brake=Math.max(v.brake,u*.8)),v.brake&&i.vf<2&&(v.brake=0),v}var cd={Play:"\u0627\u0644\u0639\u0628",Garage:"\u0627\u0644\u062C\u0631\u0627\u062C",Tuning:"\u0627\u0644\u0636\u0628\u0637",Online:"\u0623\u0648\u0646\u0644\u0627\u064A\u0646",Trophies:"\u0627\u0644\u0643\u0624\u0648\u0633",Settings:"\u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A",credits:"\u0631\u0635\u064A\u062F",Race:"\u0633\u0628\u0627\u0642","Grand Prix":"\u0627\u0644\u062C\u0627\u0626\u0632\u0629 \u0627\u0644\u0643\u0628\u0631\u0649","Time trial":"\u0636\u062F \u0627\u0644\u0632\u0645\u0646",Drift:"\u062A\u0641\u062D\u064A\u0637","Circuit rules":"\u0642\u0648\u0627\u0639\u062F \u0627\u0644\u062D\u0644\u0628\u0629","Arcade rules":"\u0642\u0648\u0627\u0639\u062F \u0627\u0644\u0623\u0631\u0643\u064A\u062F","Daily challenge":"\u062A\u062D\u062F\u064A \u0627\u0644\u064A\u0648\u0645",Laps:"\u0627\u0644\u0644\u0641\u0627\u062A",Rivals:"\u0627\u0644\u0645\u0646\u0627\u0641\u0633\u0648\u0646",Easy:"\u0633\u0647\u0644",Medium:"\u0645\u062A\u0648\u0633\u0637",Hard:"\u0635\u0639\u0628",Dry:"\u062C\u0627\u0641",Changeable:"\u0645\u062A\u0642\u0644\u0628",Rain:"\u0645\u0637\u0631","Start race":"\u0627\u0628\u062F\u0623 \u0627\u0644\u0633\u0628\u0627\u0642","Start time trial":"\u0627\u0628\u062F\u0623 \u0636\u062F \u0627\u0644\u0632\u0645\u0646","Start drift attack":"\u0627\u0628\u062F\u0623 \u0627\u0644\u062A\u0641\u062D\u064A\u0637","Start Grand Prix":"\u0627\u0628\u062F\u0623 \u0627\u0644\u062C\u0627\u0626\u0632\u0629 \u0627\u0644\u0643\u0628\u0631\u0649",Continue:"\u0623\u0643\u0645\u0644",Round:"\u0627\u0644\u062C\u0648\u0644\u0629","Car locked":"\u0627\u0644\u0633\u064A\u0627\u0631\u0629 \u0645\u0642\u0641\u0644\u0629","Unlock for":"\u0627\u0641\u062A\u062D \u0628\u0640","Join a room first":"\u0627\u062F\u062E\u0644 \u063A\u0631\u0641\u0629 \u0623\u0648\u0644\u0627\u064B","Waiting for rival":"\u0641\u064A \u0627\u0646\u062A\u0638\u0627\u0631 \u0627\u0644\u0645\u0646\u0627\u0641\u0633","Start duel":"\u0627\u0628\u062F\u0623 \u0627\u0644\u0645\u0628\u0627\u0631\u0632\u0629","Host starts the race":"\u0627\u0644\u0645\u0636\u064A\u0641 \u064A\u0628\u062F\u0623 \u0627\u0644\u0633\u0628\u0627\u0642",Paint:"\u0627\u0644\u0637\u0644\u0627\u0621",Upgrades:"\u0627\u0644\u062A\u0631\u0642\u064A\u0627\u062A","Rear wing":"\u0627\u0644\u062C\u0646\u0627\u062D \u0627\u0644\u062E\u0644\u0641\u064A",None:"\u0628\u062F\u0648\u0646",Lip:"\u062D\u0627\u0641\u0629","GT wing":"\u062C\u0646\u0627\u062D GT","Race wing":"\u062C\u0646\u0627\u062D \u0633\u0628\u0627\u0642","Front splitter":"\u0627\u0644\u0645\u0634\u062A\u062A \u0627\u0644\u0623\u0645\u0627\u0645\u064A",Off:"\u0625\u064A\u0642\u0627\u0641",On:"\u062A\u0634\u063A\u064A\u0644",Wheels:"\u0627\u0644\u062C\u0646\u0648\u0637",Glass:"\u0627\u0644\u0632\u062C\u0627\u062C",Underglow:"\u0625\u0636\u0627\u0621\u0629 \u0633\u0641\u0644\u064A\u0629",Engine:"\u0627\u0644\u0645\u062D\u0631\u0643",Tyres:"\u0627\u0644\u0625\u0637\u0627\u0631\u0627\u062A",Nitro:"\u0646\u064A\u062A\u0631\u0648",Armour:"\u0627\u0644\u062F\u0631\u0639","Car set-up":"\u0636\u0628\u0637 \u0627\u0644\u0633\u064A\u0627\u0631\u0629",Gearing:"\u0646\u0633\u0628 \u0627\u0644\u062A\u0631\u0648\u0633","Top speed":"\u0627\u0644\u0633\u0631\u0639\u0629 \u0627\u0644\u0642\u0635\u0648\u0649",Acceleration:"\u0627\u0644\u062A\u0633\u0627\u0631\u0639",Downforce:"\u0627\u0644\u0642\u0648\u0629 \u0627\u0644\u0633\u0641\u0644\u064A\u0629","Less drag":"\u0645\u0642\u0627\u0648\u0645\u0629 \u0623\u0642\u0644","More grip":"\u062A\u0645\u0627\u0633\u0643 \u0623\u0643\u062B\u0631","Brake bias":"\u062A\u0648\u0632\u064A\u0639 \u0627\u0644\u0641\u0631\u0627\u0645\u0644",Rearward:"\u0644\u0644\u062E\u0644\u0641",Forward:"\u0644\u0644\u0623\u0645\u0627\u0645",Balance:"\u0627\u0644\u062A\u0648\u0627\u0632\u0646",Agile:"\u0631\u0634\u064A\u0642\u0629",Stable:"\u062B\u0627\u0628\u062A\u0629","Tyre compound":"\u0646\u0648\u0639 \u0627\u0644\u0625\u0637\u0627\u0631",Soft:"\u0644\u064A\u0646","Hard ":"\u0642\u0627\u0633\u064D","Soft tyres grip more and wear faster. Hard tyres last longer. Settings apply to this car only.":"\u0627\u0644\u0625\u0637\u0627\u0631\u0627\u062A \u0627\u0644\u0644\u064A\u0646\u0629 \u062A\u062A\u0645\u0627\u0633\u0643 \u0623\u0643\u062B\u0631 \u0648\u062A\u062A\u0622\u0643\u0644 \u0623\u0633\u0631\u0639\u060C \u0648\u0627\u0644\u0642\u0627\u0633\u064A\u0629 \u062A\u062F\u0648\u0645 \u0623\u0637\u0648\u0644. \u0627\u0644\u0636\u0628\u0637 \u064A\u062E\u0635 \u0647\u0630\u0647 \u0627\u0644\u0633\u064A\u0627\u0631\u0629 \u0641\u0642\u0637.",Language:"\u0627\u0644\u0644\u063A\u0629","Driver name":"\u0627\u0633\u0645 \u0627\u0644\u0633\u0627\u0626\u0642","Camera distance":"\u0628\u064F\u0639\u062F \u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627",Close:"\u0642\u0631\u064A\u0628",Normal:"\u0639\u0627\u062F\u064A",Far:"\u0628\u0639\u064A\u062F","Very far":"\u0628\u0639\u064A\u062F \u062C\u062F\u0627\u064B","Speed units":"\u0648\u062D\u062F\u0629 \u0627\u0644\u0633\u0631\u0639\u0629",Music:"\u0627\u0644\u0645\u0648\u0633\u064A\u0642\u0649","Sound effects":"\u0627\u0644\u0645\u0624\u062B\u0631\u0627\u062A","Reset progress":"\u0645\u0633\u062D \u0627\u0644\u062A\u0642\u062F\u0645","Erase all progress, cars and settings?":"\u0645\u0633\u062D \u0643\u0644 \u0627\u0644\u062A\u0642\u062F\u0645 \u0648\u0627\u0644\u0633\u064A\u0627\u0631\u0627\u062A \u0648\u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A\u061F","Create room":"\u0623\u0646\u0634\u0626 \u063A\u0631\u0641\u0629",or:"\u0623\u0648",Join:"\u0627\u0646\u0636\u0645",Room:"\u0627\u0644\u063A\u0631\u0641\u0629","copy invite link":"\u0627\u0646\u0633\u062E \u0631\u0627\u0628\u0637 \u0627\u0644\u062F\u0639\u0648\u0629",leave:"\u062E\u0631\u0648\u062C",Speed:"\u0627\u0644\u0633\u0631\u0639\u0629",Launch:"\u0627\u0644\u0627\u0646\u0637\u0644\u0627\u0642",Grip:"\u0627\u0644\u062A\u0645\u0627\u0633\u0643",Pos:"\u0627\u0644\u0645\u0631\u0643\u0632",Lap:"\u0644\u0641\u0629",Best:"\u0627\u0644\u0623\u0641\u0636\u0644",Car:"\u0627\u0644\u0633\u064A\u0627\u0631\u0629",Fuel:"\u0627\u0644\u0648\u0642\u0648\u062F",Wets:"\u0645\u0637\u0631",Paused:"\u0625\u064A\u0642\u0627\u0641 \u0645\u0624\u0642\u062A",Resume:"\u0627\u0633\u062A\u0645\u0631",Restart:"\u0623\u0639\u062F","Back to menu":"\u0627\u0644\u0642\u0627\u0626\u0645\u0629",Menu:"\u0627\u0644\u0642\u0627\u0626\u0645\u0629","Race again":"\u0633\u0628\u0627\u0642 \u0622\u062E\u0631","Next round":"\u0627\u0644\u062C\u0648\u0644\u0629 \u0627\u0644\u062A\u0627\u0644\u064A\u0629",Finish:"\u0625\u0646\u0647\u0627\u0621",Winner:"\u0627\u0644\u0641\u0627\u0626\u0632",Standings:"\u0627\u0644\u062A\u0631\u062A\u064A\u0628","Grand Prix champion":"\u0628\u0637\u0644 \u0627\u0644\u062C\u0627\u0626\u0632\u0629 \u0627\u0644\u0643\u0628\u0631\u0649","Grand Prix finished":"\u0627\u0646\u062A\u0647\u062A \u0627\u0644\u062C\u0627\u0626\u0632\u0629 \u0627\u0644\u0643\u0628\u0631\u0649","Four rounds, eight drivers, points for every finish. The third round is wet.":"\u0623\u0631\u0628\u0639 \u062C\u0648\u0644\u0627\u062A \u0648\u062B\u0645\u0627\u0646\u064A\u0629 \u0633\u0627\u0626\u0642\u064A\u0646 \u0648\u0646\u0642\u0627\u0637 \u0644\u0643\u0644 \u0645\u0631\u0643\u0632. \u0627\u0644\u062C\u0648\u0644\u0629 \u0627\u0644\u062B\u0627\u0644\u062B\u0629 \u062A\u062D\u062A \u0627\u0644\u0645\u0637\u0631.",Knockout:"\u0627\u0644\u0625\u0642\u0635\u0627\u0621",Endurance:"\u0627\u0644\u062A\u062D\u0645\u0644","Start knockout":"\u0627\u0628\u062F\u0623 \u0627\u0644\u0625\u0642\u0635\u0627\u0621","Start endurance":"\u0627\u0628\u062F\u0623 \u0627\u0644\u062A\u062D\u0645\u0644","is out":"\u062E\u0631\u062C","Knocked out":"\u062A\u0645 \u0625\u0642\u0635\u0627\u0624\u0643","Side skirts":"\u062C\u0648\u0627\u0646\u0628","Roof scoop":"\u0641\u062A\u062D\u0629 \u0627\u0644\u0633\u0642\u0641","Exhaust tips":"\u0639\u0648\u0627\u062F\u0645","Traction control":"\u0645\u0646\u0639 \u0627\u0644\u0627\u0646\u0632\u0644\u0627\u0642",Steering:"\u0627\u0644\u062A\u0648\u062C\u064A\u0647",Calm:"\u0647\u0627\u062F\u0626",Sharp:"\u062D\u0627\u062F",Burnout:"\u062D\u0631\u0642 \u0625\u0637\u0627\u0631\u0627\u062A",Wheelspin:"\u062F\u0648\u0631\u0627\u0646 \u0627\u0644\u0639\u062C\u0644\u0627\u062A",Oversteer:"\u0627\u0646\u0632\u0644\u0627\u0642 \u062E\u0644\u0641\u064A",Understeer:"\u0627\u0646\u0632\u0644\u0627\u0642 \u0623\u0645\u0627\u0645\u064A",Slipstream:"\u0633\u062D\u0628 \u0647\u0648\u0627\u0626\u064A",Professional:"\u0627\u062D\u062A\u0631\u0627\u0641\u064A",Arcade:"\u0623\u0631\u0643\u064A\u062F","Daily box":"\u0635\u0646\u062F\u0648\u0642 \u0627\u0644\u064A\u0648\u0645","A car, an upgrade, XP or credits":"\u0633\u064A\u0627\u0631\u0629 \u0623\u0648 \u062A\u0631\u0642\u064A\u0629 \u0623\u0648 \u062E\u0628\u0631\u0629 \u0623\u0648 \u0631\u0635\u064A\u062F","Open now":"\u0627\u0641\u062A\u062D\u0647 \u0627\u0644\u0622\u0646","Come back tomorrow":"\u0639\u062F \u063A\u062F\u0627\u064B",Collect:"\u0627\u0633\u062A\u0644\u0645","New car":"\u0633\u064A\u0627\u0631\u0629 \u062C\u062F\u064A\u062F\u0629","Free upgrade":"\u062A\u0631\u0642\u064A\u0629 \u0645\u062C\u0627\u0646\u064A\u0629","Driver XP":"\u062E\u0628\u0631\u0629 \u0627\u0644\u0633\u0627\u0626\u0642",Credits:"\u0631\u0635\u064A\u062F","Your pit box":"\u0645\u0648\u0642\u0641\u0643","laps of fuel":"\u0644\u0641\u0627\u062A \u0648\u0642\u0648\u062F","is towed in":"\u0633\u064F\u062D\u0628\u062A \u0625\u0644\u0649 \u0627\u0644\u0635\u064A\u0627\u0646\u0629",Engine:"\u0627\u0644\u0645\u062D\u0631\u0643",Gearbox:"\u0646\u0627\u0642\u0644 \u0627\u0644\u062D\u0631\u0643\u0629",Bodywork:"\u0627\u0644\u0647\u064A\u0643\u0644",Go:"\u0627\u0646\u0637\u0644\u0642","Final lap":"\u0627\u0644\u0644\u0641\u0629 \u0627\u0644\u0623\u062E\u064A\u0631\u0629","Wrong way":"\u0627\u062A\u062C\u0627\u0647 \u062E\u0627\u0637\u0626",Repaired:"\u062A\u0645 \u0627\u0644\u0625\u0635\u0644\u0627\u062D","Combo lost":"\u0636\u0627\u0639\u062A \u0627\u0644\u0633\u0644\u0633\u0644\u0629","Lights out. Clean first corner.":"\u0627\u0646\u0637\u0641\u0623\u062A \u0627\u0644\u0623\u0636\u0648\u0627\u0621. \u062E\u064F\u0630 \u0627\u0644\u0645\u0646\u0639\u0637\u0641 \u0627\u0644\u0623\u0648\u0644 \u0628\u0647\u062F\u0648\u0621.","Last lap. Everything you have.":"\u0627\u0644\u0644\u0641\u0629 \u0627\u0644\u0623\u062E\u064A\u0631\u0629. \u0623\u0639\u0637\u0650 \u0643\u0644 \u0645\u0627 \u0639\u0646\u062F\u0643.","Tyres are nearly gone. Box at the blue pit.":"\u0627\u0644\u0625\u0637\u0627\u0631\u0627\u062A \u0627\u0646\u062A\u0647\u062A \u062A\u0642\u0631\u064A\u0628\u0627\u064B. \u0627\u062F\u062E\u0644 \u0627\u0644\u0635\u064A\u0627\u0646\u0629.","Fuel is low. Box this lap or you will not make it.":"\u0627\u0644\u0648\u0642\u0648\u062F \u0642\u0644\u064A\u0644. \u0627\u062F\u062E\u0644 \u0627\u0644\u0635\u064A\u0627\u0646\u0629 \u0647\u0630\u0647 \u0627\u0644\u0644\u0641\u0629.","We are out of fuel. Coast it to the pit lane.":"\u0627\u0646\u062A\u0647\u0649 \u0627\u0644\u0648\u0642\u0648\u062F. \u062A\u062F\u062D\u0631\u062C \u0625\u0644\u0649 \u0645\u0645\u0631 \u0627\u0644\u0635\u064A\u0627\u0646\u0629.","Rain. Brake earlier \u2014 box for wet tyres if it gets heavy.":"\u0645\u0637\u0631. \u0627\u0641\u0631\u0645\u0644 \u0645\u0628\u0643\u0631\u0627\u064B \u0648\u0627\u062F\u062E\u0644 \u0644\u0625\u0637\u0627\u0631\u0627\u062A \u0627\u0644\u0645\u0637\u0631 \u0625\u0646 \u0627\u0634\u062A\u062F.","Limiter on. Nothing to do \u2014 drive through.":"\u0645\u062D\u062F\u062F \u0627\u0644\u0633\u0631\u0639\u0629 \u064A\u0639\u0645\u0644. \u0644\u0627 \u0634\u064A\u0621 \u0645\u0637\u0644\u0648\u0628\u060C \u0623\u0643\u0645\u0644.","Invite link copied":"\u062A\u0645 \u0646\u0633\u062E \u0631\u0627\u0628\u0637 \u0627\u0644\u062F\u0639\u0648\u0629","The home circuit. A full pit lane, a fast first sector, a chicane and two hairpins.":"\u062D\u0644\u0628\u0629 \u0627\u0644\u062F\u0627\u0631. \u0645\u0645\u0631 \u0635\u064A\u0627\u0646\u0629 \u0643\u0627\u0645\u0644 \u0648\u0642\u0637\u0627\u0639 \u0623\u0648\u0644 \u0633\u0631\u064A\u0639 \u0648\u0634\u064A\u0643\u0627\u0646 \u0648\u0645\u0646\u0639\u0637\u0641\u0627\u0646 \u062D\u0627\u062F\u0627\u0646.","Your scanned kart circuit. Tight, technical, tyre walls everywhere.":"\u062D\u0644\u0628\u0629 \u0627\u0644\u0643\u0627\u0631\u062A\u064A\u0646\u062C \u0627\u0644\u0645\u0645\u0633\u0648\u062D\u0629. \u0636\u064A\u0642\u0629 \u0648\u062A\u0642\u0646\u064A\u0629 \u0648\u062D\u0648\u0627\u062C\u0632 \u0627\u0644\u0625\u0637\u0627\u0631\u0627\u062A \u0641\u064A \u0643\u0644 \u0645\u0643\u0627\u0646.","Fast sweepers under the pyramids. Sand runoff eats your speed.":"\u0645\u0646\u0639\u0637\u0641\u0627\u062A \u0633\u0631\u064A\u0639\u0629 \u062A\u062D\u062A \u0627\u0644\u0623\u0647\u0631\u0627\u0645\u0627\u062A\u060C \u0648\u0627\u0644\u0631\u0645\u0644 \u064A\u0633\u0631\u0642 \u0633\u0631\u0639\u062A\u0643.","A long seafront blast into a knot of hairpins at sunset.":"\u062E\u0637 \u0645\u0633\u062A\u0642\u064A\u0645 \u0637\u0648\u064A\u0644 \u0639\u0644\u0649 \u0627\u0644\u0628\u062D\u0631 \u062B\u0645 \u0639\u0642\u062F\u0629 \u0645\u0646\u0639\u0637\u0641\u0627\u062A \u0639\u0646\u062F \u0627\u0644\u063A\u0631\u0648\u0628.","Street circuit after dark. Square corners, neon walls, no mercy.":"\u062D\u0644\u0628\u0629 \u0634\u0648\u0627\u0631\u0639 \u0644\u064A\u0644\u064A\u0629. \u0632\u0648\u0627\u064A\u0627 \u062D\u0627\u062F\u0629 \u0648\u062C\u062F\u0631\u0627\u0646 \u0646\u064A\u0648\u0646 \u0628\u0644\u0627 \u0631\u062D\u0645\u0629."};var ca=class{constructor(e,t=1800,n=!1){this.max=t,this.cur=0,this.pos=new Float32Array(t*3),this.col=new Float32Array(t*4),this.size=new Float32Array(t),this.vel=new Float32Array(t*3),this.life=new Float32Array(t),this.maxLife=new Float32Array(t),this.grow=new Float32Array(t),this.alpha=new Float32Array(t),this.grav=new Float32Array(t);let s=new _t;s.setAttribute("position",new Ct(this.pos,3)),s.setAttribute("aColor",new Ct(this.col,4)),s.setAttribute("aSize",new Ct(this.size,1)),this.mat=new Bt({transparent:!0,depthWrite:!1,blending:n?An:ws,uniforms:{uScale:{value:600}},vertexShader:"attribute vec4 aColor; attribute float aSize; varying vec4 vC; uniform float uScale; void main(){ vC=aColor; vec4 mv=modelViewMatrix*vec4(position,1.); gl_Position=projectionMatrix*mv; gl_PointSize=aSize*uScale/max(-mv.z,.1); }",fragmentShader:"varying vec4 vC; void main(){ float d=length(gl_PointCoord-.5); float a=smoothstep(.5,.12,d)*vC.a; if(a<.01) discard; gl_FragColor=vec4(vC.rgb,a); }"}),this.points=new Ms(s,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=5,e.add(this.points),this.geo=s}emit(e,t,n,s,r,a,o,l,c,h,u,d,f,m=0){let x=this.cur;this.cur=(x+1)%this.max,this.pos[x*3]=e,this.pos[x*3+1]=t,this.pos[x*3+2]=n,this.vel[x*3]=s,this.vel[x*3+1]=r,this.vel[x*3+2]=a,this.life[x]=this.maxLife[x]=o,this.size[x]=l,this.grow[x]=c,this.alpha[x]=f,this.grav[x]=m,this.col[x*4]=h,this.col[x*4+1]=u,this.col[x*4+2]=d,this.col[x*4+3]=f}update(e){let{pos:t,vel:n,life:s,maxLife:r,size:a,grow:o,col:l,alpha:c,grav:h}=this;for(let d=0;d<this.max;d++){if(s[d]<=0)continue;if(s[d]-=e,s[d]<=0){a[d]=0,l[d*4+3]=0;continue}let f=d*3;n[f+1]-=h[d]*e,t[f]+=n[f]*e,t[f+1]+=n[f+1]*e,t[f+2]+=n[f+2]*e;let m=1-e*1.6;n[f]*=m,n[f+2]*=m,a[d]+=o[d]*e,l[d*4+3]=c[d]*(s[d]/r[d])}let u=this.geo.attributes;u.position.needsUpdate=u.aColor.needsUpdate=u.aSize.needsUpdate=!0}clear(){this.life.fill(0),this.size.fill(0)}},Fc=class{constructor(e,t=3500){this.max=t,this.cur=0,this.pos=new Float32Array(t*18);let n=new _t;n.setAttribute("position",new Ct(this.pos,3)),this.mesh=new ve(n,new mt({color:723724,transparent:!0,opacity:.5,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-6,side:Wt})),this.mesh.frustumCulled=!1,this.mesh.renderOrder=2,e.add(this.mesh),this.geo=n}quad(e,t,n,s){let r=this.pos,a=this.cur*18;this.cur=(this.cur+1)%this.max,r.set(e,a),r.set(t,a+3),r.set(n,a+6),r.set(t,a+9),r.set(s,a+12),r.set(n,a+15),this.dirty=!0}flush(){this.dirty&&(this.geo.attributes.position.needsUpdate=!0,this.dirty=!1)}clear(){this.pos.fill(0),this.dirty=!0}},Nc=class{constructor(e){let t=(s,r,a)=>{let o=new Float32Array(s*(a?6:3)),l=new Float32Array(s*(a?2:1));for(let h=0;h<s;h++){let u=Math.random()*r,d=Math.random()*r*.5,f=Math.random()*r;a?(o.set([u,d,f,u,d,f],h*6),l[h*2+1]=1):o.set([u,d,f],h*3)}let c=new _t;return c.setAttribute("position",new Ct(o,3)),c.setAttribute("tip",new Ct(l,1)),c},n="vec3 p=position+uVel*uTime; p=mod(p-uCam+vec3(B*.5,B*.25,B*.5), vec3(B,B*.5,B))-vec3(B*.5,B*.25,B*.5)+uCam;";this.dust=new Ms(t(500,70),new Bt({transparent:!0,depthWrite:!1,blending:An,uniforms:{uTime:{value:0},uCam:{value:new O},uVel:{value:new O(.5,.12,.3)},uCol:{value:new be(1,.95,.8)},uA:{value:.5},uScale:{value:600}},vertexShader:`uniform float uTime,uScale; uniform vec3 uCam,uVel; attribute float tip; varying float vF; const float B=70.; void main(){ ${n} p.y+=sin(uTime*.6+position.x)*.4; vec4 mv=modelViewMatrix*vec4(p,1.); gl_Position=projectionMatrix*mv; gl_PointSize=.09*uScale/max(-mv.z,.5); vF=smoothstep(35.,22.,length(p-uCam))*smoothstep(1.,4.,-mv.z); }`,fragmentShader:"uniform vec3 uCol; uniform float uA; varying float vF; void main(){ float d=length(gl_PointCoord-.5); float a=smoothstep(.5,.0,d)*uA*vF; if(a<.01) discard; gl_FragColor=vec4(uCol,a); }"})),this.rain=new Ks(t(1600,50,!0),new Bt({transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uCam:{value:new O},uVel:{value:new O(2,-26,1)},uA:{value:0}},vertexShader:`uniform float uTime; uniform vec3 uCam,uVel; attribute float tip; varying float vT; const float B=50.; void main(){ ${n} p+=normalize(uVel)*tip*-.9; vT=tip; gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.); }`,fragmentShader:"uniform float uA; varying float vT; void main(){ gl_FragColor=vec4(.8,.86,.95,uA*(.15+vT*.5)); }"}));for(let s of[this.dust,this.rain])s.frustumCulled=!1,s.renderOrder=6,e.add(s);this.rain.visible=!1,this.scene=e}update(e,t,n,s){for(let r of[this.dust,this.rain])r.material.uniforms.uTime.value+=e,r.material.uniforms.uCam.value.copy(t.position);this.dust.material.uniforms.uScale.value=s,this.dust.material.uniforms.uA.value=.5*(1-n),this.rain.visible=n>.02,this.rain.material.uniforms.uA.value=n*.4}dispose(){for(let e of[this.dust,this.rain])this.scene.remove(e),e.geometry.dispose(),e.material.dispose()}},Uc=class{constructor(e,t=40){this.scene=e,this.items=[],this.max=t}spawn(e,t,n,s,r,a){this.items.length>=this.max&&this.scene.remove(this.items.shift().m);let o=new ve(e,t);o.position.copy(n),s&&o.quaternion.copy(s),r&&o.scale.copy(r),o.castShadow=!0,this.scene.add(o),this.items.push({m:o,v:a,w:new O((Math.random()-.5)*12,(Math.random()-.5)*12,(Math.random()-.5)*12),life:35,rest:!1})}update(e,t){for(let n=this.items.length-1;n>=0;n--){let s=this.items[n],r=s.m;if(!s.rest){s.v.y-=22*e,r.position.addScaledVector(s.v,e),r.rotation.x+=s.w.x*e,r.rotation.y+=s.w.y*e,r.rotation.z+=s.w.z*e;let a=t.height(r.position.x,r.position.z)+.07;r.position.y<a&&(r.position.y=a,Math.abs(s.v.y)<2?(s.rest=!0,r.rotation.x=Math.round(r.rotation.x/Math.PI)*Math.PI,r.rotation.z=Math.round(r.rotation.z/Math.PI)*Math.PI):(s.v.y*=-.36,s.v.x*=.62,s.v.z*=.62,s.w.multiplyScalar(.55)))}s.life-=e,s.life<0&&(this.scene.remove(r),this.items.splice(n,1))}}dispose(){for(let e of this.items)this.scene.remove(e.m);this.items=[]}};var ha={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var $n=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},dy=new Ui(-1,1,1,-1,0,1),hd=class extends _t{constructor(){super(),this.setAttribute("position",new $e([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new $e([0,2,0,0,2,0],2))}},fy=new hd,Ls=class{constructor(e){this._mesh=new ve(fy,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,dy)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var ua=class extends $n{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Bt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=rs.clone(e.uniforms),this.material=new Bt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ls(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var yo=class extends $n{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},kc=class extends $n{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Oc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Ue);this._width=n.width,this._height=n.height,t=new Kt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ln}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ua(ha),this.copyPass.material.blending=ri,this.timer=new $a}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}yo!==void 0&&(a instanceof yo?n=!0:a instanceof kc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Ue);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Bc=class extends $n{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new be}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var om={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new be(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var zc=class i extends $n{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Ue(e.x,e.y):new Ue(256,256),this.clearColor=new be(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Kt(r,a,{type:ln,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new Kt(r,a,{type:ln,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let d=new Kt(r,a,{type:ln,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=om;this.highPassUniforms=rs.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Bt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Ue(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=rs.clone(ha.uniforms),this.blendMaterial=new Bt({uniforms:this.copyUniforms,vertexShader:ha.vertexShader,fragmentShader:ha.fragmentShader,premultipliedAlpha:!0,blending:An,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new be,this._oldClearAlpha=1,this._basic=new mt,this._fsQuad=new Ls(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Ue(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],l=a+1<e?t[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new Bt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Ue(.5,.5)},direction:{value:new Ue(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Bt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};zc.BlurDirectionX=new Ue(1,0);zc.BlurDirectionY=new Ue(0,1);var Mo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Hc=class extends $n{constructor(){super(),this.isOutputPass=!0,this.uniforms=rs.clone(Mo.uniforms),this.material=new Gr({name:Mo.name,uniforms:this.uniforms,vertexShader:Mo.vertexShader,fragmentShader:Mo.fragmentShader}),this._fsQuad=new Ls(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ze.getTransfer(this._outputColorSpace)===vt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Qa?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===eo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===to?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===nr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===io?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===so?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===no&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var py={uniforms:{tDiffuse:{value:null},sunPos:{value:new Ue(.5,.5)},sunVis:{value:0},rays:{value:.085},speed:{value:0},hit:{value:0},vig:{value:.32},wet:{value:0},tilt:{value:0},grade:{value:1},time:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform vec2 sunPos; uniform float sunVis, rays, speed, hit, vig, wet, tilt, grade, time; varying vec2 vUv;
    void main(){
      vec2 uv=vUv;
      if(wet>.05){ float edge=smoothstep(.3,.5,max(abs(uv.x-.5),abs(uv.y-.5)*1.05)); if(edge>.01){ vec2 g=uv*vec2(22.,13.); float hc=fract(sin(floor(g.x)*91.7)*4375.5); g.y+=time*(.02+hc*.05); vec2 id=floor(g), f=fract(g)-.5; float h=fract(sin(dot(id,vec2(127.1,311.7)))*43758.5);
        if(h>.62){ vec2 o=(vec2(fract(h*17.),fract(h*31.))-.5)*.5; float d=length((f-o)*vec2(1.,.75)); uv+=(f-o)*smoothstep(.07+.09*h,0.,d)*wet*edge*.16; } } }   // a few small drops near the screen edges only; the middle stays clear
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
    }`},Gc=class{constructor(e,t,n){let s=e.getDrawingBufferSize(new Ue),r=new Kt(s.x,s.y,{type:ln,samples:4});this.composer=new Oc(e,r),this.composer.addPass(new Bc(t,n)),this.bloom={strength:0},this.fx=new ua(py),this.composer.addPass(this.fx),this.composer.addPass(new Hc),this.u=this.fx.uniforms}setSize(e,t,n){this.composer.setPixelRatio(n),this.composer.setSize(e,t)}render(e){this.composer.render(e)}};var Vc=class{constructor(){this.on=!0,this.ctx=null,this.vol=.7,this.mvol=.5,this.pitchK=1,this.birdT=3,this.lastThr=0}init(){if(this.ctx){this.ctx.state!=="running"&&this.ctx.resume();return}let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=this.ctx=new e,n=t.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=4,n.attack.value=.01,n.release.value=.25,n.connect(t.destination),this.master=t.createGain(),this.master.gain.value=this.on?this.vol:0,this.master.connect(n);let s=24,r=new Float32Array(s),a=new Float32Array(s);for(let b=1;b<s;b++)a[b]=(b%2?.55:1)/Math.pow(b,1.15)*(b===2||b===4?1.5:1);let o=t.createPeriodicWave(r,a),l=t.createWaveShaper(),c=new Float32Array(512);for(let b=0;b<512;b++){let M=b/256-1;c[b]=Math.tanh(M*2.2)}l.curve=c,this.engLP=t.createBiquadFilter(),this.engLP.type="lowpass",this.engLP.frequency.value=300,this.engLP.Q.value=.8,this.engGain=t.createGain(),this.engGain.gain.value=0,this.osc=[1,.5,1.006].map((b,M)=>{let v=t.createOscillator();v.setPeriodicWave(o),v.frequency.value=40*b;let S=t.createGain();return S.gain.value=[.5,.6,.3][M],v.connect(S),S.connect(l),v.start(),v.mult=b,v}),l.connect(this.engLP),this.engLP.connect(this.engGain),this.engGain.connect(this.master);let h=t.createBuffer(1,t.sampleRate*3,t.sampleRate),u=h.getChannelData(0),d=0;for(let b=0;b<u.length;b++){let M=Math.random()*2-1;d=(d+.04*M)/1.04,u[b]=M*.5+d*6}this.noiseBuf=h;let f=(b,M,v)=>{let S=t.createBufferSource();S.buffer=h,S.loop=!0,S.playbackRate.value=.8+Math.random()*.4;let T=t.createBiquadFilter();T.type=b,T.frequency.value=M,T.Q.value=v;let C=t.createGain();return C.gain.value=0,S.connect(T),T.connect(C),C.connect(this.master),S.start(),{g:C,fl:T}};this.wind=f("lowpass",500,.5),this.roll=f("lowpass",260,.7),this.skid=f("bandpass",850,1.6),this.skidHi=f("bandpass",2100,3),this.dirt=f("lowpass",420,.8),this.nitro=f("bandpass",1600,.7),this.brake=f("bandpass",3100,5),this.rain=f("highpass",2600,.4),this.intake=f("bandpass",380,1.2);let m=f("bandpass",170,1.1);this.burbG=m.g,this.burbLfo=t.createOscillator(),this.burbLfo.type="square",this.burbLfo.frequency.value=20;let x=t.createGain();x.gain.value=.03,this.burbLfo.connect(x),x.connect(m.g.gain),this.burbLfo.start(),this.turboO=t.createOscillator(),this.turboO.type="sine",this.turboG=t.createGain(),this.turboG.gain.value=0,this.turboO.connect(this.turboG),this.turboG.connect(this.master),this.turboO.start(),this.crowd=f("bandpass",950,.5),this.wave=o,this.ctxN=s,this.rivO=t.createOscillator(),this.rivO.type="sawtooth";let g=t.createBiquadFilter();g.type="lowpass",g.frequency.value=520,this.rivG=t.createGain(),this.rivG.gain.value=0,this.rivO.connect(g),g.connect(this.rivG),this.rivG.connect(this.master),this.rivO.start(),this.whine=t.createOscillator(),this.whine.type="sine",this.whineG=t.createGain(),this.whineG.gain.value=0,this.whine.connect(this.whineG),this.whineG.connect(this.master),this.whine.start(),this.pad=t.createGain(),this.pad.gain.value=0;let p=t.createBiquadFilter();p.type="lowpass",p.frequency.value=900,this.pad.connect(p),p.connect(this.master);for(let b of[110,164.81,220,246.94,329.63])for(let M of[-4,5]){let v=t.createOscillator();v.type="sine",v.frequency.value=b,v.detune.value=M;let S=t.createGain();S.gain.value=.05;let T=t.createOscillator();T.frequency.value=.05+Math.random()*.12;let C=t.createGain();C.gain.value=.035,T.connect(C),C.connect(S.gain),v.connect(S),S.connect(this.pad),v.start(),T.start()}}setMuted(e){this.on=!e,this.el&&this.music(this.musicOn),this.master&&this.master.gain.setTargetAtTime(this.on?this.vol:0,this.ctx.currentTime,.05)}music(e){this.el||(this.el=new Audio("assets/menu.mp3"),this.el.loop=!0,this.el.volume=0),this.musicOn=e;let t=this.el;e&&this.on&&t.play().catch(()=>{}),clearInterval(this.fade),this.fade=setInterval(()=>{let n=e&&this.on?this.mvol:0,s=n-t.volume;Math.abs(s)<.05?(t.volume=n,clearInterval(this.fade),n||t.pause()):t.volume=Math.max(0,Math.min(1,t.volume+Math.sign(s)*.04))},60)}setCar(e){if(this.pitchK={4:1.16,6:1.04,8:.86,10:1.1,12:1.2}[e]||1,!this.ctx)return;let t=24,n=new Float32Array(t),s=new Float32Array(t),r=e/2;for(let o=1;o<t;o++)s[o]=(o%2?.55:1)/Math.pow(o,e>=10?1.3:1.1)*(o===r||o===r*2?1.9:o===1&&e===8?1.5:1);let a=this.ctx.createPeriodicWave(n,s);for(let o of this.osc)o.setPeriodicWave(a)}ambient(e,t){if(this.ctx&&(this.crowd.g.gain.setTargetAtTime(t.on?.028:0,this.ctx.currentTime,.6),this.birdT-=e,t.on&&t.day&&!t.rain&&this.birdT<0)){this.birdT=2+Math.random()*6;let n=2300+Math.random()*1600,s=2+(Math.random()*3|0);for(let r=0;r<s;r++)setTimeout(()=>this.tone(n*(1+r*.06),.08,.011,"sine",1.22),r*120)}}rival(e,t){if(!this.ctx||this.quiet)return;let n=this.ctx.currentTime,s=Math.max(0,1-t/42);this.rivO.frequency.setTargetAtTime(44+e*125,n,.05),this.rivG.gain.setTargetAtTime(s*s*.085,n,.08)}horn(){this.tone(392,.4,.1,"square"),this.tone(494,.4,.08,"square")}turboDemo(){this.tone(1800,.7,.05,"sine",3.2),setTimeout(()=>{this.burst("highpass",2600,.6,.35,.12,1.3),this.tone(2100,.25,.03,"sine",.4)},720)}drive(e){if(!this.ctx)return;if(this.quiet)return this.silence();let t=this.ctx.currentTime,n=(36+e.rpm*118)*this.pitchK,s=Math.min(1,e.speed/60);for(let a of this.osc)a.frequency.setTargetAtTime(n*a.mult,t,.035);this.engLP.frequency.setTargetAtTime(180+e.rpm*700+e.throttle*1100,t,.06),this.engGain.gain.setTargetAtTime(.09+e.throttle*.12+e.rpm*.04,t,.07),this.intake.g.gain.setTargetAtTime(e.throttle*e.rpm*.05,t,.08),this.intake.fl.frequency.setTargetAtTime(250+e.rpm*500,t,.08),this.wind.g.gain.setTargetAtTime(s*s*.22,t,.2),this.wind.fl.frequency.setTargetAtTime(300+s*900,t,.2),this.roll.g.gain.setTargetAtTime(Math.min(.16,s*.3)*(1-e.dirt),t,.15),this.skid.g.gain.setTargetAtTime(e.skid*.2,t,.09),this.skid.fl.frequency.setTargetAtTime(700+e.skid*350,t,.15),this.skidHi.g.gain.setTargetAtTime(e.skid*e.skid*.05,t,.12),this.dirt.g.gain.setTargetAtTime(e.dirt*.35,t,.1),this.brake.g.gain.setTargetAtTime(e.brake*Math.min(1,e.speed/25)*.018,t,.05),this.nitro.g.gain.setTargetAtTime(e.nitro?.16:0,t,.1),this.whine.frequency.setTargetAtTime(900+e.rpm*1400,t,.1),this.whineG.gain.setTargetAtTime(e.nitro?.025:e.throttle*e.rpm*.006,t,.1),this.rain.g.gain.setTargetAtTime((e.rain||0)*.1,t,.5),this.burbG.gain.setTargetAtTime((.018+e.throttle*.045)*(1-e.rpm*.45),t,.08),this.burbLfo.frequency.setTargetAtTime(n*.5,t,.04);let r=e.turbo||0;this.turboG.gain.setTargetAtTime(r*e.throttle*e.rpm*.011,t,.18),this.turboO.frequency.setTargetAtTime(2400+e.rpm*5200,t,.22),r&&this.lastThr>.6&&e.throttle<.2&&e.rpm>.45&&t-(this.bovT||0)>1.2&&(this.bovT=t,this.burst("highpass",2600,.6,.3,.05+r*.025,1.3),this.tone(1900,.2,.012+r*.006,"sine",.45)),this.lastThr=e.throttle}silence(){if(!this.ctx)return;let e=this.ctx.currentTime;for(let t of[this.engGain,this.wind.g,this.roll.g,this.skid.g,this.skidHi.g,this.dirt.g,this.nitro.g,this.brake.g,this.rain.g,this.intake.g,this.whineG,this.burbG,this.turboG,this.crowd.g,this.rivG])t.gain.setTargetAtTime(0,e,.12)}tone(e,t=.2,n=.2,s="sine",r=1){if(!this.ctx||this.quiet)return;let a=this.ctx,o=a.createOscillator(),l=a.createGain(),c=a.currentTime;o.type=s,o.frequency.setValueAtTime(e,c),r!==1&&o.frequency.exponentialRampToValueAtTime(e*r,c+t),l.gain.setValueAtTime(0,c),l.gain.linearRampToValueAtTime(n,c+.012),l.gain.exponentialRampToValueAtTime(.001,c+t),o.connect(l),l.connect(this.master),o.start(),o.stop(c+t+.02)}beep(e=440,t=.18,n=.16){this.tone(e,t,n),this.tone(e*2,t*.7,n*.25)}burst(e,t,n,s,r,a=1){if(!this.ctx||this.quiet)return;let o=this.ctx,l=o.createBufferSource(),c=o.createBiquadFilter(),h=o.createGain(),u=o.currentTime;l.buffer=this.noiseBuf,l.playbackRate.value=a,c.type=e,c.frequency.value=t,c.Q.value=n,h.gain.setValueAtTime(r,u),h.gain.exponentialRampToValueAtTime(.001,u+s),l.connect(c),c.connect(h),h.connect(this.master),l.start(u,Math.random()*2),l.stop(u+s+.02)}crash(e){let t=Math.min(1,e/22);this.tone(85,.28,.25+t*.45,"sine",.45),this.burst("lowpass",500+t*900,.7,.22+t*.2,.25+t*.5),t>.3&&(this.burst("bandpass",2400,2.5,.16,t*.28,1.4),this.tone(310+Math.random()*120,.35,t*.06,"triangle",.9))}scrape(e){this.burst("bandpass",1500,1.2,.12,Math.min(.2,e*.02))}pickup(e){e?(this.tone(520,.12,.12),this.tone(780,.2,.1)):(this.tone(1320,.09,.08),this.tone(1760,.16,.07))}wrench(){for(let e=0;e<5;e++)setTimeout(()=>this.burst("bandpass",3200,6,.05,.12,2),e*55)}shift(){this.burst("lowpass",300,1,.06,.12)}};var Wc=window.GAME_CONFIG||{},da=!!(Wc.SUPABASE_URL&&Wc.SUPABASE_ANON_KEY&&window.supabase),lm=null,qc=()=>lm||(lm=window.supabase.createClient(Wc.SUPABASE_URL,Wc.SUPABASE_ANON_KEY,{realtime:{params:{eventsPerSecond:60}}})),my=Math.random().toString(36).slice(2,10),So=class{constructor(){this.id=my,this.peers={},this.onMessage=()=>{},this.onPeers=()=>{},this.meta={},this.code=null}static makeCode(){let e="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",t="";for(let n=0;n<5;n++)t+=e[Math.random()*e.length|0];return t}join(e,t){return this.code=e.toUpperCase(),this.meta={...t,id:this.id,t:Date.now()},new Promise((n,s)=>{if(da){let r=this.ch=qc().channel("tafheet:"+this.code,{config:{broadcast:{self:!1},presence:{key:this.id}}});r.on("broadcast",{event:"m"},({payload:a})=>this.onMessage(a)),r.on("presence",{event:"sync"},()=>{let a=r.presenceState();this.peers={};for(let o in a)o!==this.id&&a[o].length&&(this.peers[o]=a[o][a[o].length-1]);this.onPeers(this.peers)}),r.subscribe(async a=>{a==="SUBSCRIBED"?(await r.track(this.meta),n()):(a==="CHANNEL_ERROR"||a==="TIMED_OUT")&&s(new Error("Could not reach the room ("+a+")"))})}else{let r=this.bc=new BroadcastChannel("tafheet:"+this.code);r.onmessage=({data:a})=>{a._==="hi"||a._==="here"?(this.peers[a.meta.id]=a.meta,this.onPeers(this.peers),a._==="hi"&&r.postMessage({_:"here",meta:this.meta})):a._==="bye"?(delete this.peers[a.id],this.onPeers(this.peers)):this.onMessage(a)},r.postMessage({_:"hi",meta:this.meta}),this.unload=()=>r.postMessage({_:"bye",id:this.id}),addEventListener("beforeunload",this.unload),setTimeout(n,250)}})}setMeta(e){Object.assign(this.meta,e),this.ch?this.ch.track(this.meta):this.bc&&this.bc.postMessage({_:"here",meta:this.meta})}send(e){this.ch?this.ch.send({type:"broadcast",event:"m",payload:e}):this.bc&&this.bc.postMessage(e)}leave(){this.ch&&(this.ch.untrack(),qc().removeChannel(this.ch),this.ch=null),this.bc&&(this.bc.postMessage({_:"bye",id:this.id}),this.bc.close(),this.bc=null,removeEventListener("beforeunload",this.unload)),this.peers={}}};async function cm(i,e,t,n){if(da)try{await qc().from("lap_times").insert({track:i,name:e.slice(0,16),car:t,ms:Math.round(n)})}catch(s){console.warn("leaderboard",s)}}async function hm(i){if(!da)return null;try{let{data:e,error:t}=await qc().from("lap_times").select("name,car,ms").eq("track",i).order("ms",{ascending:!0}).limit(8);return t?null:e}catch{return null}}var ud=(i,e,t)=>[{name:i,car:e,skill:t}],ls=[{name:"Shubra Nights",text:"Uncle Hamdi left you two things: a garage in Shubra with a leaking roof, and an unpaid entry to the Pharaoh\u2019s Cup. Amm Saber, his old mechanic, thinks you should sell the first and forget the second.",events:[{id:"s1",title:"First laps",mode:"trial",track:"lider",laps:3,goal:{type:"lap",v:[82,72,64]},intro:[["Amm Saber","Your uncle drove this circuit every Thursday for twenty years. Show me one clean lap and I\u2019ll stop telling you to sell the place."],["Amm Saber","Brake before the corner, not in it. And stay off the grass \u2014 I only have one set of tyres."]],win:"Amm Saber wipes his hands and says nothing. He is already ordering parts.",lose:"Amm Saber: \u201CThe stopwatch doesn\u2019t lie. Again.\u201D"},{id:"s2",title:"Club night",mode:"race",track:"lider",laps:3,diff:0,goal:{type:"pos",v:[3,2,1]},intro:[["Amm Saber","Club night. Five locals who all knew Hamdi. Finish on the podium and people will start saying your name instead of his."],["Zizo","New kid in the old man\u2019s car? Cute. Try not to hold us up."]],win:"Three people you have never met shake your hand. One of them asks if the garage is open tomorrow.",lose:"Zizo waves from the podium. It is not a friendly wave."},{id:"s3",title:"Zizo\u2019s dare",mode:"race",track:"lider",laps:3,diff:1,rivals:ud("Zizo","Mercedes",.93),goal:{type:"pos",v:[1,1,1]},intro:[["Zizo","One on one. You win, I put your name on the Cup list myself. I win, the garage sign comes down."],["Amm Saber","He\u2019s fast on the straights and sloppy everywhere else. That big saloon eats its rear tyres. Be patient."]],win:"Zizo: \u201CFine. You\u2019re on the list. Don\u2019t make me regret it.\u201D",lose:"Zizo: \u201CLeave the sign up one more week. I want a rematch crowd.\u201D"}]},{name:"Sand and Stone",text:"The Cup\u2019s second round runs in the shadow of the pyramids. The sand gets everywhere, and the regulars here slide their cars on purpose.",events:[{id:"g1",title:"Sideways school",mode:"drift",track:"giza",laps:2,goal:{type:"drift",v:[500,1400,3e3]},intro:[["Captain Nadia","You drive like a taxi meter \u2014 straight and nervous. Out here the fast line is the sideways one."],["Captain Nadia","Tap the handbrake going in, then hold the slide with the throttle. Show me you can keep it off the walls."]],win:"Captain Nadia: \u201CUgly. But sideways. We can work with ugly.\u201D",lose:"Captain Nadia: \u201CThat was parking, not drifting.\u201D"},{id:"g2",title:"Dust devils",mode:"race",track:"giza",laps:3,diff:1,goal:{type:"pos",v:[3,2,1]},intro:[["Amm Saber","Full grid today. The sand runoff will take your speed and your tyres. If the car gets hurt, the blue pit box is just past the start line."]],win:"Sand in your teeth, a trophy in the boot.",lose:"Amm Saber is already under the car, muttering about sand in the brakes."},{id:"g3",title:"Captain Nadia",mode:"race",track:"giza",laps:3,diff:1,rivals:ud("Capt. Nadia","Artura",.97),goal:{type:"pos",v:[1,1,1]},intro:[["Captain Nadia","Lesson\u2019s over. Now beat the teacher."],["Amm Saber","She doesn\u2019t make mistakes. So don\u2019t wait for one \u2014 out-brake her into the hairpin."]],win:"Captain Nadia hands you her spare helmet. \u201CFor the Corniche. It rains there.\u201D",lose:"Captain Nadia: \u201CCloser than I expected. Come back.\u201D"}]},{name:"Sea Breeze",text:"Alexandria. A long seafront straight, a knot of hairpins, and weather that changes its mind halfway through a lap.",events:[{id:"c1",title:"Storm front",mode:"race",track:"corniche",laps:3,diff:1,weather:"rain",goal:{type:"pos",v:[3,2,1]},intro:[["Amm Saber","Rain is coming in off the sea. When the road shines, you have a quarter less grip. Brake early, squeeze the throttle."]],win:"You are soaked, the car is filthy, and the points table has your name in the top three.",lose:"The sea wall has a new scuff the same colour as your car."},{id:"c2",title:"Golden hour",mode:"trial",track:"corniche",laps:3,goal:{type:"lap",v:[64,55,49]},intro:[["Zizo","The lap record here is El Basha\u2019s. Nobody gets near it. I just want to see how far off you are."]],win:"Zizo looks at the timing screen for a long moment. \u201C\u2026He\u2019s going to hear about this.\u201D",lose:"Zizo: \u201CTold you.\u201D"},{id:"c3",title:"The twins",mode:"race",track:"corniche",laps:3,diff:2,rivals:[{name:"Hassan",car:"Ferrari",skill:.97},{name:"Hussein",car:"Ferrari",skill:.96}],goal:{type:"pos",v:[1,1,1]},intro:[["Hassan","We race as a pair."],["Hussein","One of us blocks. One of us wins. You can guess which is which."],["Amm Saber","Don\u2019t get stuck between them. Pass them one at a time."]],win:"For the first time all season the twins disagree \u2014 about whose fault it was.",lose:"Hassan and Hussein cross the line side by side. Of course they do."}]},{name:"Midnight Crown",text:"The final is a street circuit through Cairo after dark. El Basha has won it six years running, and he has noticed you.",events:[{id:"m1",title:"Neon drift",mode:"drift",track:"midnight",laps:3,goal:{type:"drift",v:[800,2e3,4e3]},intro:[["Captain Nadia","The crowd here votes with its phones. Give them smoke under the lights and the organisers give you a front-row start."]],win:"The clip is everywhere by morning.",lose:"The crowd films the car behind you instead."},{id:"m2",title:"Qualifier",mode:"race",track:"midnight",laps:4,diff:2,goal:{type:"pos",v:[3,2,1]},intro:[["Amm Saber","Top three go to the final. The walls here are concrete, not tyres. Every touch costs you \u2014 pit if you must."]],win:"You are in the final. Amm Saber pretends he has something in his eye.",lose:"Fourth is the loneliest place on a results sheet."},{id:"m3",title:"El Basha",mode:"race",track:"midnight",laps:4,diff:2,weather:"rain",rivals:ud("El Basha","Zenvo",1),goal:{type:"pos",v:[1,1,1]},final:!0,intro:[["El Basha","I raced your uncle for years. He never beat me. He never stopped trying either."],["El Basha","Let us see which half of that you inherited."],["Amm Saber","Hamdi\u2019s notes say El Basha lifts in the rain. It\u2019s going to rain."]],win:"El Basha takes off his gloves and offers his hand. The Pharaoh\u2019s Cup goes on the shelf in a garage in Shubra, under a roof that no longer leaks.",lose:"El Basha: \u201CSame as your uncle. Come back next year.\u201D"}]}],Mi=ls.flatMap((i,e)=>i.events.map(t=>Object.assign(t,{ci:e})));function Xc(i){return i.type==="pos"?i.v[0]===1?"Win the race":"Finish in the top "+i.v[0]:i.type==="lap"?"Set a lap under "+i.v[0]+" s":"Score "+i.v[0].toLocaleString()+" drift points"}function um(i,e){let t=0;for(let n of i.v)(i.type==="pos"?e.pos<=n:i.type==="lap"?e.bestLap!=null&&e.bestLap<=n*1e3:e.drift>=n)&&t++;return i.type==="pos"&&i.v[0]===1?e.pos===1?3:0:t}var jc=i=>Math.floor(Math.sqrt(i/250))+1,Kc=i=>(i-1)**2*250;function dd(i){let e=new Date,t=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate(),n=7;for(let a of t)n=(n*31+a.charCodeAt(0))%9973;let s=["race","drift","trial"][n%3],r=i[(n>>2)%i.length];return{key:t,mode:s,track:r.id,trackName:r.name,weather:n%4===0?"rain":"clear",label:{race:"Podium finish",drift:"Drift attack",trial:"Time trial"}[s]}}var G=i=>document.getElementById(i),rn=(i,e,t)=>i<e?e:i>t?t:i,xd=i=>{for(;i>Math.PI;)i-=2*Math.PI;for(;i<-Math.PI;)i+=2*Math.PI;return i},Qn=i=>{if(i==null||!isFinite(i))return"\u2014";let e=i/1e3,t=Math.floor(e/60);return t+":"+(e-t*60).toFixed(2).padStart(5,"0")},pa=i=>"#"+i.toString(16).padStart(6,"0"),dm=["1st","2nd","3rd","4th","5th","6th"],Sd="tafheet.v1",F={dev:!1,devGod:!1,devScale:1,boxDay:"",v9:0,tc:!0,abs:!0,sens:1,v7:0,lang:"en",zoom:2.25,units:"kmh",mvol:.5,svol:.7,look:{},tune:{},gp:null,v5:0,assist:"full",rules:"circuit",sectors:{},up:{},stats:{},trophies:{},gfx:"auto",autoGas:!1,story:{},xp:0,daily:"",streak:0,credits:0,owned:["Ford","Sterrato"],car:"Ford",paint:{},name:"",best:{},bestDrift:{},muted:!1};try{Object.assign(F,JSON.parse(localStorage.getItem(Sd)||"{}"))}catch{}F.name||(F.name="Driver"+(100+Math.random()*900|0));{let i=new URLSearchParams(location.search).get("gfx");["auto","high","medium","low"].includes(i)&&(F.gfx=i)}F.v5||(F.autoGas=!1,F.v5=1);F.v7||(F.zoom=2.25,F.v7=1);F.v8||(F.assist="medium",F.v8=1);F.v9||(F.zoom=1.5,F.v9=1);var Ut=()=>{try{localStorage.setItem(Sd,JSON.stringify(F))}catch{}},Ge=i=>F.lang==="ar"&&cd[i]!=null?cd[i]:i,Ro=i=>F.look[i]||(F.look[i]={wing:0,split:0,rim:0,tint:0,glow:0}),ih=i=>F.tune[i]||(F.tune[i]={gear:0,aero:0,brake:0,susp:0,tyre:"medium"}),us=()=>!!_&&!_.attract,sh=i=>F.paint[i]??Tt.find(e=>e.id===i).color,yn=new Mc({canvas:G("gl"),antialias:!0,powerPreference:"high-performance"}),Wi=matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>0;Wi&&document.body.classList.add("touch");var ti=F.gfx==="auto"?Wi?"medium":"high":F.gfx,Ns=ti==="low"?1:Math.min(devicePixelRatio||1,Wi?1.5:1.75);yn.setPixelRatio(Ns);yn.outputColorSpace=Gt;yn.toneMapping=nr;yn.shadowMap.enabled=!0;yn.shadowMap.type=er;var yt=new qs,Qe=new sn(55,1,.3,9e3);yt.environment=new ea(yn).fromScene(new Tc,.04).texture;var Ds=new Ya(16777215,4473924,1),qt=new Qs(16777215,2.5);qt.castShadow=!0;qt.shadow.mapSize.set(2048,2048);qt.shadow.bias=-5e-4;qt.shadow.normalBias=.04;function wd(){let i=30*(F.zoom||1.5)+18,e=qt.shadow.camera;Object.assign(e,{left:-i,right:i,top:i,bottom:-i,near:1,far:360}),e.updateProjectionMatrix();let t=i>75?4096:2048;qt.shadow.mapSize.x!==t&&(qt.shadow.mapSize.set(t,t),qt.shadow.map&&(qt.shadow.map.dispose(),qt.shadow.map=null))}wd();yt.add(Ds,qt,qt.target);var ei=null;function Td(){let i=innerWidth,e=innerHeight;yn.setPixelRatio(Ns),yn.setSize(i,e,!1),Qe.aspect=i/e,Qe.updateProjectionMatrix(),ei&&ei.setSize(i,e,Ns)}function Eo(i){if(ti=i,Ns=i==="low"?1:Math.min(devicePixelRatio||1,Wi?1.5:1.75),yn.shadowMap.enabled=qt.castShadow=i!=="low",i==="high"&&!ei)try{ei=new Gc(yn,yt,Qe)}catch(e){console.warn(e),ti="medium"}Td()}function _m(i){ti==="high"&&ei?ei.render(i):yn.render(yt,Qe)}addEventListener("resize",Td);Eo(ti);var cs=null,kn=null,bd=0,ym=1,Mm=1;function Co(i){if(cs&&(yt.remove(cs),cs.geometry.dispose(),cs.material.dispose(),cs=null),kn&&(yt.remove(kn),kn.geometry.dispose(),kn.material.dispose(),kn=null),ei&&(ei.bloom.strength=i&&i.night?.6:.26,ei.u.sunVis.value=0,ei.u.speed.value=0,ei.u.wet.value=0),!i){yt.background=new be(1513500),yt.fog=null,Ds.color.set(14674175),Ds.groundColor.set(3158586),Ds.intensity=.7,qt.color.set(16777215),qt.intensity=2.2,yt.environmentIntensity=.9,yn.toneMappingExposure=1;return}cs=sm(i),yt.add(cs),yt.background=null,yt.fog=new Na(i.fog,i.fogD),Ds.color.set(i.hemiS),Ds.groundColor.set(i.hemiG),Ds.intensity=i.hemiI,qt.color.set(i.sun),qt.intensity=i.sunI,yt.environmentIntensity=i.night?.25:.5,yn.toneMappingExposure=i.exposure,bd=i.fogD,ym=i.sunI,Mm=i.hemiI,i.night||(kn=new ve(new Ys(120,24),new mt({color:new be(i.sun).multiplyScalar(16),fog:!1})),kn.frustumCulled=!1,yt.add(kn))}var ci=new wt;yt.add(ci);{let i=new ve(new En(4.6,4.8,.25,48),new we({color:2303275,metalness:.6,roughness:.35}));i.position.y=-.125,i.receiveShadow=!0,ci.add(i);let e=new ve(new Js(4.75,.06,8,64),new mt({color:16761370}));e.rotation.x=Math.PI/2,e.position.y=.01,ci.add(e);let t=new ve(new Ys(60,32),new we({color:1513500,roughness:.9}));t.rotation.x=-Math.PI/2,t.position.y=-.25,t.receiveShadow=!0,ci.add(t)}var li=null;function cr(){li&&(ci.remove(li.root),li.dispose());let i=Tt[ce.car];li=new Is(i,sh(i.id),"",va(i.id),Ro(i.id),ih(i.id)),li.root.rotation.y=vd,ci.add(li.root)}var vd=.6,vn={},qn={},Be=new Vc;Be.on=!F.muted;addEventListener("keydown",i=>{if(i.target.tagName!=="INPUT"&&(vn[i.code]=!0,Be.init(),["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(i.code)&&i.preventDefault(),!!us())){if((i.code==="Escape"||i.code==="KeyP")&&Cd(),i.code==="KeyR"&&Am(_.player,!0),i.code==="KeyM"&&Ed(!F.muted),i.code==="KeyH"&&Be.horn(),F.dev){let e=_.player;i.code==="F2"&&(e.repair(),e.fuel=1,Xt("DEV: repaired and refuelled")),i.code==="F3"&&(_.rainAt=_.wet>0?1/0:0,_.wet>0&&(_.wet=0,_.track.wet=0),Xt("DEV: rain toggled")),i.code==="F4"&&(e.hitL=[.6,e.zf],e.hitN=[-Math.sin(e.th),-Math.cos(e.th)],e.hitX=e.x,e.hitZ=e.z,Fs(e,18),Xt("DEV: front impact")),i.code==="F6"&&(e.fuel=.04,Xt("DEV: fuel nearly empty")),i.code==="F7"&&(e.prog+=_.track.n-30,Xt("DEV: skipped to the end of the lap")),i.code.startsWith("F")&&i.preventDefault()}i.code==="KeyT"&&(G("tele").hidden=!G("tele").hidden)}});addEventListener("keyup",i=>{vn[i.code]=!1});addEventListener("blur",()=>{for(let i in vn)vn[i]=!1});var un={steer:0,throttle:0,brake:0,hand:!1,nitro:!1};function Sm(){let i=vn.ArrowLeft||vn.KeyA||qn.left,e=vn.ArrowRight||vn.KeyD||qn.right;un.steer=(i?1:0)-(e?1:0),qn.steerOn&&(un.steer=qn.steerVal),un.throttle=vn.ArrowUp||vn.KeyW||qn.gas?1:0,un.brake=vn.ArrowDown||vn.KeyS||qn.brake?1:0,un.hand=!!(vn.Space||qn.hand),un.nitro=!!(vn.ShiftLeft||vn.ShiftRight||vn.KeyN||qn.nitro);let t=navigator.getGamepads?[...navigator.getGamepads()].find(n=>n):null;return t&&(Math.abs(t.axes[0])>.12&&(un.steer=-t.axes[0]),un.throttle=Math.max(un.throttle,t.buttons[7]?.value||0),un.brake=Math.max(un.brake,t.buttons[6]?.value||0),un.hand=un.hand||!!t.buttons[0]?.pressed,un.nitro=un.nitro||!!t.buttons[2]?.pressed||!!t.buttons[5]?.pressed),Wi&&F.autoGas&&!t&&!un.brake&&(un.throttle=1),un}if("ontouchstart"in window||navigator.maxTouchPoints>0){G("touch").hidden=!1;for(let i of document.querySelectorAll("#touch .t")){let e=t=>n=>{n.preventDefault(),qn[i.dataset.k]=t,i.classList.toggle("on",t),Be.init()};i.addEventListener("pointerdown",t=>{try{i.setPointerCapture(t.pointerId)}catch{}e(!0)(t)});for(let t of["pointerup","pointercancel","lostpointercapture"])i.addEventListener(t,e(!1))}}{let i=G("steer"),e=i.querySelector("i"),t=null,n=r=>{let a=i.getBoundingClientRect(),o=rn((r.clientX-(a.left+a.width/2))/(a.width*.36),-1,1);e.style.transform=`translateX(${o*a.width*.33}px)`,o=Math.sign(o)*Math.pow(Math.abs(o),1.35),qn.steerVal=-o,qn.steerOn=!0},s=r=>{t!==null&&r.pointerId!==t||(t=null,qn.steerOn=!1,qn.steerVal=0,e.style.transform="",i.classList.remove("on"))};i.addEventListener("pointerdown",r=>{r.preventDefault(),t=r.pointerId;try{i.setPointerCapture(t)}catch{}i.classList.add("on"),n(r),Be.init()}),i.addEventListener("pointermove",r=>{r.pointerId===t&&n(r)});for(let r of["pointerup","pointercancel","lostpointercapture"])i.addEventListener(r,s);addEventListener("contextmenu",r=>{Wi&&r.preventDefault()})}function Ed(i){F.muted=i,Ut(),Be.setMuted(i),G("muteBtn").textContent=i?"Sound off":"Sound on"}var fm=0;function Xt(i){let e=G("toast");e.textContent=Ge(i),e.classList.add("show"),clearTimeout(fm),fm=setTimeout(()=>e.classList.remove("show"),2200)}var pm=0;function Jt(i,e=!1,t=1500){if(_&&_.attract)return;let n=G("msg");n.textContent=Ge(i),n.className="show"+(e?" warn":""),clearTimeout(pm),t&&(pm=setTimeout(()=>n.className="",t))}var dt=(i,e)=>{G(i).hidden=!e},_=null,lr=!1,wm=0,To=0,fa=0,Tm=[{name:"Circuit",fixed:!0,d:43,h:48,fov:30}],_d=0,Ad=0,Ne={yaw:0,pos:new O,look:new O,fov:55},Yc=1/120,Em=["Omar","Youssef","Karim","Nour","Laila","Tarek","Mona","Ziad","Hana","Sherif","Salma","Hassan","Farida","Adel"],Qc=0,mm=["Tap the handbrake (Space) on corner entry to kick the tail out.","Drifting refills your nitro much faster than driving straight.","Lift off early \u2014 the kerbs are fine, the grass is not.","Longer drifts multiply your score. Touch a wall and the combo is gone.","Press C to change camera, R to get back on track."];function wo(i,e){let t=_.track.gridSlot(e);i.reset(t.x,t.z,t.th),i.idx=t.idx,i.prog=t.idx-_.track.n,i.lap=-1,i.lapStart=0,i.laps=[],i.finished=!1,i.finishTime=null,i.wrong=0}function Am(i,e){if(_&&e&&i.stranded&&_.state==="go")return Dm(i);if(!_||e&&(_.state!=="go"||_.t-(i.lastReset||-9)<1.5))return;let t=_.track.path[i.idx],n=i.nitro;i.reset(t.x,t.z,Math.atan2(t.tx,t.tz)),i.nitro=n,i.lastReset=_.t,i.holdT=_.t+He.reset.penalty,i===_.player&&e&&Jt("Reset  +"+He.reset.penalty+"s",!0,1300),i===_.player&&(Ne.yaw=i.th,_.D.combo=0)}async function wi(i){_&&xa();let e=++Qc;window.__crowdK=ti==="high"?.85:ti==="medium"?.5:.3,i.attract||(Be.init(),dt("menu",!1),dt("results",!1),dt("pause",!1),dt("loading",!0));let t=bn.find(h=>h.id===i.track);G("loadName").textContent=t.name,G("loadBar").style.width="4%",G("loadTip").textContent=mm[Math.random()*mm.length|0],ci.visible=!1,Ld=!1;let n;try{n=await im(i.track,h=>{G("loadBar").style.width=Math.round(4+h*92)+"%"})}catch(h){console.error(h),dt("loading",!1),ga(),Xt("Could not load that track");return}if(e!==Qc){n.dispose();return}if(ti==="low"&&n.fancyLights)for(let h of n.fancyLights)h.visible=!1;yt.add(n.group),Co(n.theme),_={...i,track:n,cars:[],ais:new Map,t:0,state:"wait",countT:3.6,drift:0,D:{combo:0,time:0,mult:1,grace:0},fx:null,sendT:0,waitT:0,bestThisRace:null},_.rules=i.rules||"circuit",_.arc=_.rules==="arcade"||i.mode==="drift",_.fx={smoke:new ca(yt,2600),glow:new ca(yt,900,!0),skids:new Fc(yt)},_.ambient=new Nc(yt),_.debris=new Uc(yt);let s=Tt.find(h=>h.id===F.car),r=va(s.id),a=_.player=new Is(s,sh(s.id),F.name,r,Ro(s.id),ih(s.id));a.assistK=He.assist[F.assist]??.7,a.tc=F.tc,a.abs=F.abs,a.steerK=F.sens,a.isPlayer=!0,a.dmgScale=1-.18*r.armor;let o=Math.max(1.5,(t.width?t.width/2:6.2)-2.6),l=h=>({skill:h,wide:o*.7,lane:(Math.random()-.5)*o,max:o,care:i.rules==="arcade"?.7:1.3,off:0,inp:{steer:0,throttle:0,brake:0,hand:!1,nitro:!1},boost:1});if(_.ais.set(a,l(.95)),i.mode==="race"){let h=[.8,.89,.97][i.diff],u=Tt.filter(x=>x.id!==s.id).sort(()=>Math.random()-.5),d=[...Em].sort(()=>Math.random()-.5),f=i.rivals,m=f?f.length:i.nRivals||5;for(let x=0;x<m;x++){let g=f?Tt.find(b=>b.id===f[x].car):u[x%u.length],p=new Is(g,f&&f[x].paint!=null?f[x].paint:la[(x*2+1+(Math.random()*2|0))%la.length],f?f[x].name:d[x],void 0,{wing:Math.random()*4|0,split:Math.random()*2|0,rim:Math.random()*Dc.length|0});_.ais.set(p,l(f?f[x].skill:h+(4-x)*.012+Math.random()*.015)),p.assistK=.7,_.cars.push(p),wo(p,x)}_.cars.push(a),wo(a,m)}else if(i.mode==="online"){if(_.cars.push(a),wo(a,Vi?0:1),Dt){let h=Tt.find(d=>d.id===Dt.car)||Tt[0],u=_.remote=new Is(h,Dt.paint??h.color,Dt.name||"Rival",Dt.up,Dt.look);u.isRemote=!0,u.look=Nd(Dt),_.cars.push(u),wo(u,Vi?1:0)}at.send({k:"me",i:Fd()})}else _.cars.push(a),wo(a,0);for(let h of _.cars)yt.add(h.root),h.y=n.height(h.x,h.z),h.render(.016,n);My(),i.attract||Be.music(!1),hs.cond="",Ne.yaw=a.th,Ne.pos.set(a.x-Math.sin(a.th)*30,a.y+22,a.z-Math.cos(a.th)*30),Ne.look.set(a.x,a.y,a.z),Ay(),G("hPosOf").textContent="/"+_.cars.length,G("hLapOf").textContent="/"+_.laps,G("order").innerHTML="",_.orderKey="",G("hBest").textContent=F.best[t.id]?Qn(F.best[t.id]):"\u2014",G("hSec").textContent="",G("hSec").className="";let c=_.cars.length<2;G("order").hidden=c,G("hPosBox").style.visibility=c?"hidden":"visible",dt("hPingRow",i.mode==="online"),dt("hArc",_.arc),document.querySelector("#touch .n").hidden=_.rules!=="arcade";for(let h in hs)delete hs[h];if(dt("loading",!1),dt("hud",!i.attract),lr=!1,fa=0,nh=performance.now(),Be.quiet=!!i.attract,Be.setCar(s.cyl),i.attract){_.attract=!0,_.demo=!0,_.state="go";return}i.mode==="online"?(at.send({k:"loaded"}),Jt("Waiting for rival\u2026",!1,0),Dt?Rd():eh()):eh()}function eh(){if(!(!_||_.state!=="wait")){_.state="count",_.countT=3.6,_.lightN=0,G("msg").className="",G("lights").classList.add("show");for(let i of G("lights").children)i.className=""}}function Rd(){_&&_.mode==="online"&&Vi&&_.state==="wait"&&Ld&&(at.send({k:"go"}),eh())}function xa(){if(_){for(let i of _.cars)yt.remove(i.root),i.dispose();for(let i of[_.fx.smoke,_.fx.glow])yt.remove(i.points),i.geo.dispose(),i.mat.dispose();yt.remove(_.fx.skids.mesh),_.fx.skids.geo.dispose(),_.ambient.dispose(),_.debris.dispose(),yt.remove(_.track.group),_.track.dispose(),_=null,Be.silence(),dt("hud",!1),dt("pause",!1),dt("results",!1),G("lights").classList.remove("show"),G("msg").className=""}}function ga(){xa(),ma="",ce.tab==="career"&&(ce.ev=km(),ce.ch=Mi[ce.ev].ci),Co(null),ci.visible=!0,dt("menu",!0),ut(),Be.music(!0)}function Cd(){!_||_.state==="over"||(lr=!lr,dt("pause",lr),G("zoomVal").textContent=Math.round(F.zoom/1.5*100)+"%",lr?Be.silence():nh=performance.now(),_.mode==="online"&&(lr=!1))}function gy(i){if(i.out)return;let e=_.track,t=e.n,n=e.nearest(i.x,i.z,i.idx),s=n-i.idx;if(s>t/2&&(s-=t),s<-t/2&&(s+=t),i.idx=n,i.prog+=s,i===_.player&&_.state==="go"&&i.lap>=0){let a=Math.min(2,Math.floor((i.prog%t+t)%t/(t/3)));a!==i.sec&&(i.sec!=null&&s>0&&a===(i.sec+1)%3&&xy(i,i.sec),i.sec=a,i.secStart=_.t)}let r=Math.floor(i.prog/t);if(r>i.lap&&_.state!=="count"&&_.state!=="wait"){let a=i.lap<0;if(i.lap=r,!a){let o=(_.t-i.lapStart)*1e3;i.laps.push(o),i===_.player&&by(o),_.elim&&_.state==="go"&&ba().filter(l=>!l.out)[0]===i&&vy()}i.fuelLap!=null&&i.fuelLap>i.fuel&&(i.fpl=i.fuelLap-i.fuel),i.fuelLap=i.fuel,i.lapStart=_.t,i.lap>=_.laps&&!i.finished&&(i.finished=!0,i.finishTime=_.t*1e3,i===_.player&&yd())}}function xy(i,e){let t=_.track.def.id,n=(_.t-i.secStart)*1e3,s=(F.sectors[t]||(F.sectors[t]=[]))[e],r=G("hSec");r.textContent="S"+(e+1)+"  "+(n/1e3).toFixed(2)+(s?"  "+(n<s?"\u2212":"+")+(Math.abs(n-s)/1e3).toFixed(2):""),r.className=!s||n<s?"good":"slow",(!s||n<s)&&(F.sectors[t][e]=Math.round(n),Ut())}function by(i){let e=_.track.def.id,t=F.best[e];(_.bestThisRace==null||i<_.bestThisRace)&&(_.bestThisRace=i),!t||i<t?(F.best[e]=i,Ut(),G("hBest").textContent=Qn(i),Jt("Best lap "+Qn(i)),_.newBest=!0,cm(e,F.name,Tt.find(n=>n.id===F.car).name,i),Be.beep(880,.25)):_.player.lap===_.laps-1?Jt("Final lap"):Jt(Qn(i))}function yd(){_.state="done",_.doneT=0,Rm(),Be.beep(1040,.5),Jt("Finish",!1,1400),_.mode==="online"&&at.send({k:"fin",t:_.t*1e3})}function Rm(){let i=_.D;i.combo>0&&(_.drift+=Math.round(i.combo),i.combo=0,i.time=0)}function ba(){return[..._.cars].sort((i,e)=>i.out||e.out?i.out&&e.out?e.out-i.out:i.out?1:-1:i.finished&&e.finished?i.finishTime-e.finishTime:i.finished?-1:e.finished?1:e.prog-i.prog)}function vy(){let i=ba().filter(n=>!n.out);if(i.length<2)return;let e=i[i.length-1],t=_.player;e.out=_.outN=(_.outN||0)+1,e!==t&&(yt.remove(e.root),e.x=e.z=1e5,Jt(e.name+" "+Ge("is out"),!0,1400)),e===t?(t.finished=!0,t.finishTime=_.t*1e3,Jt("Knocked out",!0,1600),yd()):i.length===2&&i[0]===t&&(t.finished=!0,t.finishTime=_.t*1e3,yd())}function Fs(i,e,t){if(e<2)return;let n=_.player,s=(i.x-n.x)**2+(i.z-n.z)**2<3600;if(e<4){i===n&&Math.random()<.2&&(Be.scrape(e),i.impactFX(_.fx,_.track,e*.4));return}let r=i.damage(e,!t);if(i.glass){if(i.glass=!1,s)for(let a=0;a<18;a++)_.fx.glow.emit(i.hitX,i.y+.6,i.hitZ,i.vx*.5+(Math.random()-.5)*8,1+Math.random()*4,i.vz*.5+(Math.random()-.5)*8,.5+Math.random()*.4,.09,0,.85,.95,1,1,14);i===n&&(n.spotK=n.lamps.filter(a=>a.ok).length/2)}if(i===n&&(e>8&&_.crashes++,r>0&&_.mode==="online"&&at&&at.send({k:"d",l:n.hitL,n:n.hitN,p:+e.toFixed(1)})),s&&i.impactFX(_.fx,_.track,e),i.lost.length||r>.06){let a=new O,o=new Tn,l=new O,c=i.hitN||[0,0];for(let h of i.lost)h.updateWorldMatrix(!0,!1),h.matrixWorld.decompose(a,o,l),_.debris.spawn(h.geometry,h.material,a.clone(),o.clone(),l.clone(),new O(i.vx*.7+c[0]*3,3+Math.random()*3,i.vz*.7+c[1]*3)),h.visible=!1;if(i.lost.length=0,s&&r>.06)for(let h=0;h<Math.min(3,1+r*8|0);h++)_.debris.spawn(new ht(.5+Math.random()*.7,.04,.25+Math.random()*.3),i.m.paint,new O(i.hitX,i.y+.5,i.hitZ),null,null,new O(i.vx*.6+c[0]*(2+Math.random()*4)+(Math.random()-.5)*4,3+Math.random()*4,i.vz*.6+c[1]*(2+Math.random()*4)+(Math.random()-.5)*4))}if(i!==n){s&&Be.crash(e*.35);return}Wi&&navigator.vibrate&&navigator.vibrate(Math.min(90,e*5)),Be.crash(e),To=Math.min(1.2,To+e/13),_d=Math.min(1,e/14),Ad=Math.min(6,e*.35),_.D.combo>30&&Jt("Combo lost",!0,900),_.D.combo=0,_.D.time=0,r>.02&&!_.attract&&(n.health<.55||n.dmg.front>.6)&&!_.warned&&(_.warned=!0,Xt("Car damaged \u2014 stop in the blue pit box to repair"))}function Cm(i,e){let t=_.track,n=_.player,s=_.state==="done"||_.state==="over"||_.demo,r=_.pit&&_.pit.busy||_.t<(n.holdT||0),a=s?_.ais.get(n).inp:r?gm:Sm();if(_.demo==="keys"){let o=_.ais.get(n).inp;a={steer:Math.abs(o.steer)>.15?Math.sign(o.steer):0,throttle:o.throttle>.3?1:0,brake:o.brake>.2?1:0,hand:!1,nitro:!1}}Fs(n,n.step(i,a,t,e),!0),r&&(n.vx=n.vz=n.r=0);for(let o of _.cars)if(o!==n&&!o.isRemote&&!o.out){let l=_.ais.get(o);Fs(o,o.step(i,_.t<(o.holdT||0)?gm:l.inp,t,e,l.boost||1),!0)}for(let o=0;o<_.cars.length;o++)for(let l=o+1;l<_.cars.length;l++){let c=_.cars[o],h=_.cars[l];if(!(c.out||h.out||Math.abs(c.x-h.x)>6||Math.abs(c.z-h.z)>6))if(h.isRemote)Fs(c,c.bump(h,!0));else if(c.isRemote)Fs(h,h.bump(c,!0));else{let u=c.bump(h,!1);u>0&&(Fs(c,u*.8),Fs(h,u*.8))}}}var gm={steer:0,throttle:0,brake:1,hand:!0,nitro:!1},th=[["eng","Engine"],["tyre","Tyres"],["nitro","Nitro"],["armor","Armour"]],va=i=>F.up[i]||(F.up[i]={eng:0,tyre:0,nitro:0,armor:0}),Pm=(i,e)=>Math.round([500,1300,2800][Math.min(e,2)]*(1+i.price/6e3)/50)*50,Gi=i=>F.stats[i]||0,Im=[{id:"win1",name:"First blood",desc:"Win a race",need:1,get:()=>Gi("wins")},{id:"pod10",name:"Podium regular",desc:"Finish on the podium 10 times",need:10,get:()=>Gi("podiums")},{id:"clean",name:"Clean hands",desc:"Win a race without a single hard hit",need:1,get:()=>Gi("clean")},{id:"dr3",name:"Sideways",desc:"Score 3,000 drift points in one run",need:3e3,get:()=>Gi("driftBest")},{id:"dr8",name:"Smoke machine",desc:"Score 8,000 drift points in one run",need:8e3,get:()=>Gi("driftBest")},{id:"ot50",name:"Overtaker",desc:"Make 50 overtakes",need:50,get:()=>Gi("overtakes")},{id:"pit10",name:"Pit crew favourite",desc:"Complete 10 pit stops",need:10,get:()=>Gi("pits")},{id:"coin",name:"Coin collector",desc:"Collect 2,000 credits on track",need:2e3,get:()=>Gi("coins")},{id:"km100",name:"Road trip",desc:"Drive 100 km",need:100,get:()=>Gi("km")},{id:"day5",name:"Daily habit",desc:"Reach a 5-day challenge streak",need:5,get:()=>F.streak||0},{id:"gar",name:"Full garage",desc:"Own all 14 cars",need:14,get:()=>F.owned.length},{id:"gp",name:"Grand Prix champion",desc:"Win a Grand Prix",need:1,get:()=>Gi("gpWins")}];function Pd(){let i=0;for(let e of Im)!F.trophies[e.id]&&e.get()>=e.need&&(F.trophies[e.id]=1,F.credits+=300,i++,Xt("Trophy: "+e.name+" \u2014 +300 credits"));i&&(Ut(),(!_||_.state==="over")&&(G("credits").textContent=F.credits.toLocaleString()))}var xm=0,Md=-9;function dn(i,e){if(!_||_.attract||!e&&_.t-Md<6)return;Md=_.t;let t=G("radio");t.lastElementChild.textContent=Ge(i),t.classList.add("show"),clearTimeout(xm),xm=setTimeout(()=>t.classList.remove("show"),4e3),Be.tone(1250,.05,.05),Be.tone(950,.07,.04)}var Lm=i=>{let e=i.parts,t=e.wheels.filter(n=>n>.15).length;return[["Tyres",i.tyre<.92||t?He.pit.tyres+t*.6:0],["Fuel",i.fuelK>0?(1-i.fuel)*He.pit.fuelFull:0],["Engine",e.engine*4],["Gearbox",e.gearbox*3.5],["Bodywork",(i.dmg.front+i.dmg.rear+i.dmg.left+i.dmg.right)/4*He.pit.repairFull]].filter(n=>n[1]>.15)};function Dm(i){let e=_.ais.get(i),t=(i===_.player?_.pit:e&&e.box)||_.pit,n=t.th??Math.atan2(_.track.path[0].tx,_.track.path[0].tz);i.reset(t.x,t.z,n),i.repair(),i.fuel=1,i.idx=_.track.nearest(t.x,t.z),i.holdT=_.t+He.parts.towSeconds,e&&(e.pitT=0),i===_.player?(Ne.yaw=i.th,Jt("Towed to the pits  +"+He.parts.towSeconds+"s",!0,2500),dn("Recovery truck has you. Rebuild will cost about "+He.parts.towSeconds+" seconds.",!0)):Jt(i.name+" "+Ge("is towed in"),!1,1200)}function _y(i,e,t){let n=i.parts,s=i.fuelK>0&&i.fuel<Math.max(.07,(i.fpl||.15)*1.15);if(!(i.health<.4||n.engine>.6||n.gearbox>.7||n.wheels.some(u=>u>.7)||i.tyre<.28||s||e.pitT>0))return;let r=e.box||_.pit,a=r.x-i.x,o=r.z-i.z,l=Math.hypot(a,o),c=a*Math.sin(i.th)+o*Math.cos(i.th);if(l>60||c<-1&&!e.pitT)return;let h=l<3?0:Math.min(28,Math.sqrt(12*(l-2)));e.inp.steer=l>2.5?rn(xd(Math.atan2(a,o)-i.th)*2.5,-1,1):0,e.inp.throttle=i.speed<h?.7:0,e.inp.brake=i.speed>h+1&&i.vf>2?1:0,e.inp.nitro=!1,l<3.4&&i.speed<4&&(i.vx*=.8,i.vz*=.8,e.inp.throttle=0,e.pitT||(e.pitNeed=Lm(i).reduce((u,d)=>u+d[1],0)),e.pitT=(e.pitT||0)+t,e.pitT>e.pitNeed&&(i.repair(),i.fuel=1,i.wetTyres=_.wet>.4,e.pitT=0,_.aiPits=(_.aiPits||0)+1))}function Zc(i){let e=_.ev,t=e.cur;t&&(t.pick&&t.pick.t!==1/0&&(t.pick.t=1/0),t.pick&&(t.pick.m.visible=!1),e.cur=null,e.next=_.t+20+Math.random()*16,On("hEvent",""),i&&Jt(i,/missed/.test(i),1300))}function Fm(){let i=_.track,e=_.player,t=i.n,n=_.ev,s=["oil","rush","gold","haze","trap"].concat(_.mode==="race"&&_.cars.length>1?["bounty","bounty"]:[]).filter(c=>c!==n.last),r=s[Math.random()*s.length|0],a=n.cur={type:r,t:0};n.last=r;let o="",l=(c,h)=>{let u=i.path[(e.idx+Math.round(c/i.spacing))%t],d=u.x+u.tz*h,f=u.z-u.tx*h;return{x:d,z:f,y:i.height(d,f)}};if(r==="oil"){a.t=6,o="Oil on track";for(let c of[140,260]){let h=l(c,(Math.random()-.5)*5),u=new ve(new Ys(2.7,22),new we({color:263173,roughness:.04,metalness:.95,transparent:!0,opacity:.88,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-7,polygonOffsetUnits:-7}));u.rotation.x=-Math.PI/2,u.position.set(h.x,h.y+.06,h.z),i.group.add(u),_.slicks.push({x:h.x,z:h.z,m:u,until:_.t+45})}dn("Oil on the track ahead. Dark patches \u2014 stay off them.",!0)}else if(r==="rush")a.t=12,o="Nitro rush",dn("Nitro rush! Tanks are refilling, use it.");else if(r==="gold"){a.t=26,o="Golden coin";let c=l(170,(Math.random()-.5)*4),h=new ve(_.coinG,_.coinM);h.scale.setScalar(2),h.position.set(c.x,c.y+1.4,c.z),i.group.add(h),a.pick={x:c.x,z:c.z,y:c.y+1.4,m:h,nitro:!1,gold:!0,t:0},_.picks.push(a.pick),dn("Golden coin on the racing line. Worth 200.")}else r==="haze"?(a.t=16,o=i.def.theme==="desert"?"Sandstorm":"Fog bank",dn(o+" rolling in. Trust the lines.",!0)):r==="trap"?(a.kmh=Math.round(e.spec.top*3.6*.78/10)*10,a.t=20,o="Speed trap "+a.kmh+" km/h",dn("Speed trap is live. Hit "+a.kmh+" for a bonus.")):(a.t=24,o="Bounty: overtake",dn("Bounty on the car ahead. Take the place, take the money."));a.label=o,Jt(o,r==="oil"||r==="haze",1500),Be.beep(520,.2)}function yy(i){let e=_.track,t=_.player,n=_.ev;if(_.state!=="go")return;for(let a of _.cars){if(a.isRemote)continue;let o=0;if(_.rules==="arcade"&&a.speed>20){let l=Math.sin(a.th),c=Math.cos(a.th);for(let h of _.cars){if(h===a)continue;let u=h.x-a.x,d=h.z-a.z,f=u*l+d*c,m=u*c-d*l;f>4&&f<24&&Math.abs(m)<1.7&&(o=Math.max(o,1-(f-4)/20))}}a.draft+=(o-a.draft)*Math.min(1,i*3)}if(On("hTow",Ge(t.burn?"Burnout":t.wspin>.25||t.wspinF>.25?"Wheelspin":Math.abs(t.beta)>.16&&t.speed>9?"Oversteer":t.useF>1.03&&t.useR<.9&&t.speed>10&&Math.abs(t.steer)>.08?"Understeer":t.draft>.25?"Slipstream":"")),t.draft>.25&&Math.random()<.5){let a=Math.random()*6.28;_.fx.smoke.emit(t.x+Math.cos(a)*2.5+Math.sin(t.th)*6,t.y+.5+Math.random()*1.5,t.z+Math.sin(a)*2.5+Math.cos(t.th)*6,-t.vx*.6,0,-t.vz*.6,.25,.12,0,1,1,1,.25)}t.draft>.4&&!_.towSaid&&(_.towSaid=!0,dn("You\u2019re in the tow. Stay tucked in, pull out late."));let s=ba().indexOf(t)+1;if(_.lastPos&&_.t>6&&_.cars.length>1&&!t.finished&&(s<_.lastPos?(_.coins+=40,_.overtakes++,Jt("+40 overtake",!1,700),dn(s===1?"P1! You lead. Keep it clean.":"P"+s+". Next one is just ahead."),n.cur&&n.cur.type==="bounty"&&(_.coins+=150,Zc("Bounty paid: +150"))):s>_.lastPos&&dn("Lost a place. P"+s+". Stay calm, take it back.")),_.lastPos=s,t.tyre<.3&&!_.saidTyre&&(_.saidTyre=!0,dn("Tyres are nearly gone. Box at the blue pit.",!0)),t.lap===_.laps-1&&!_.saidLast&&_.laps>1&&(_.saidLast=!0,dn("Last lap. Everything you have.",!0)),_.attract)return;_.t>1&&!_.saidGo&&(_.saidGo=!0,dn(_.story?"Radio check. Clean first corner, then push.":"Lights out. Clean first corner.",!0)),_.slicks=_.slicks.filter(a=>a.until>_.t||(e.group.remove(a.m),!1));for(let a of _.slicks)for(let o of _.cars)!o.isRemote&&o.oil<=0&&(o.x-a.x)**2+(o.z-a.z)**2<7.5&&(o.oil=o===t?1.1:.4,o===t&&dn("Oil! Easy on the wheel.",!0));if(t.fuel<.15&&!_.saidFuel&&(_.saidFuel=!0,dn("Fuel is low. Box this lap or you will not make it.",!0)),t.fuel<=0&&!_.saidDry&&(_.saidDry=!0,dn("We are out of fuel. Coast it to the pit lane.",!0)),_.mode==="online"||_.rules!=="arcade")return;let r=n.cur;if(r){if(r.t-=i,On("hEvent",r.label+(r.type==="oil"?"":"  "+Math.ceil(r.t)+"s")),r.type==="rush")for(let a of _.cars)a.nitro=Math.min(1,a.nitro+i*.22);r.type==="trap"&&Math.abs(t.vf)*3.6>=r.kmh?(_.coins+=120,Zc("Speed trap beaten: +120")):r.t<=0&&Zc(r.type==="bounty"||r.type==="trap"||r.type==="gold"?"Challenge missed":null)}else _.t>n.next&&!t.finished&&Fm()}function My(){let i=_.track,e=i.n,t=i.group,n=i.def,s=_.player,r=6;if(i.pitBoxes)_.cars.forEach((u,d)=>{let f=_.ais.get(u),m=i.pitBoxes[d%i.pitBoxes.length];u===s?_.pit={x:m.x,z:m.z,t:0,busy:!1,tick:0}:f&&(f.box=m)}),r=n.width/2;else{let u=Math.round(34/i.spacing),d=i.path[u];for(r=0;r<12&&i.surf(d.x-d.tz*(r+.5),d.z+d.tx*(r+.5))===2;)r+=.5;let f=Math.max(2,r-2.1),m=d.x-d.tz*f,x=d.z+d.tx*f,g=i.height(m,x),p=document.createElement("canvas");p.width=128,p.height=256;let b=p.getContext("2d");b.fillStyle="rgba(25,167,206,.55)",b.fillRect(0,0,128,256),b.strokeStyle="#fff",b.lineWidth=10,b.strokeRect(5,5,118,246),b.fillStyle="#fff",b.font="900 54px Rubik, Arial Black, sans-serif",b.textAlign="center",b.fillText("PIT",64,146);let M=new xi(p);M.colorSpace=Gt;let v=new ve(new pn(3.6,7.2),new mt({map:M,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-5,polygonOffsetUnits:-5}));v.rotation.set(-Math.PI/2,0,Math.PI-Math.atan2(d.tx,d.tz)),v.position.set(m,g+.07,x),t.add(v),_.pit={x:m,z:x,t:0,busy:!1,tick:0,zone:!0},n.dev&&(v.visible=!1,_.pit.x=_.pit.z=1e6)}if(_.crew=null,i.pitBoxes){let u=i.pitBoxes[_.cars.indexOf(s)%i.pitBoxes.length],d=u.th,f=Math.sin(d),m=Math.cos(d),x=Math.cos(d),g=-Math.sin(d);_.pit.th=d;let p=document.createElement("canvas");p.width=128,p.height=256;let b=p.getContext("2d");b.fillStyle="#ffc21a",b.fillRect(0,0,128,256),b.strokeStyle="#17181c",b.lineWidth=12;for(let X=-128;X<256;X+=36)b.beginPath(),b.moveTo(0,X+128),b.lineTo(128,X),b.stroke();b.clearRect(14,14,100,228),b.fillStyle="rgba(255,194,26,.35)",b.fillRect(14,14,100,228);let M=new xi(p);M.colorSpace=Gt;let v=new ve(new pn(3.8,7.4),new mt({map:M,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-6}));v.rotation.set(-Math.PI/2,0,Math.PI-d),v.position.set(u.x,.08,u.z),t.add(v),_.pit.pad=v;let S=document.createElement("canvas");S.width=256,S.height=64;let T=S.getContext("2d");T.fillStyle="#e3262e",T.fillRect(0,0,256,64),T.fillStyle="#fff",T.font="900 38px Rubik, Arial Black, sans-serif",T.textAlign="center",T.textBaseline="middle",T.fillText((F.name||"YOU").toUpperCase().slice(0,9),128,34);let C=new xi(S);C.colorSpace=Gt;let w=new ve(new ht(3.6,.9,.12),new mt({map:C}));w.position.set(u.x+x*2.7,3.4,u.z+g*2.7),w.rotation.y=d+Math.PI/2,t.add(w);for(let X of[-1.7,1.7]){let oe=new ve(new ht(.1,3,.1),new we({color:2830134}));oe.position.set(u.x+x*2.7+f*X,1.5,u.z+g*2.7+m*X),t.add(oe)}let R=new be(s.color),P=new we({color:R,roughness:.7}),D=new we({color:1513500,roughness:.6}),N=new we({color:15987958,roughness:.35}),H=new we({color:789517,roughness:.9}),k=()=>{let X=new wt,oe=new ve(new Kn(.19,.42,3,8),P);oe.position.y=1.02;let Z=new ve(new Kn(.15,.5,3,8),D);Z.position.y=.45;let ne=new ve(new xn(.17,10,8),N);ne.position.y=1.52;let se=Re=>{let Ae=new wt;Ae.position.set(Re*.25,1.28,0);let ft=new ve(new Kn(.06,.42,2,6),P);return ft.position.y=-.24,Ae.add(ft),X.add(Ae),Ae};X.add(oe,Z,ne);for(let Re of[oe,Z,ne])Re.castShadow=!0;return{g:X,aL:se(1),aR:se(-1)}},q=new ve(new En(.35,.35,1.3,12),new we({color:14886446,metalness:.4,roughness:.4}));q.position.set(u.x+x*2.9-f*2.4,.65,u.z+g*2.9-m*2.4),q.castShadow=!0,t.add(q);let Q=[[1.45,1.55],[-1.45,1.55],[1.45,-1.4],[-1.45,-1.4],[1.5,-2.6],[0,3.6]];_.crew=Q.map(([X,oe],Z)=>{let ne=k(),se=u.x+x*2.6+f*(Z-2.5)*1.05,Re=u.z+g*2.6+m*(Z-2.5)*1.05;if(ne.g.position.set(se,0,Re),ne.g.rotation.y=d-Math.PI/2,t.add(ne.g),Z<4){let Ae=new ve(new Js(.26,.13,8,14),H);Ae.position.set(0,.95,.32),ne.g.add(Ae),ne.tyre=Ae}return Object.assign(ne,{hx:se,hz:Re,wx:u.x+x*X+f*oe,wz:u.z+g*X+m*oe,role:Z<4?"tyre":Z===4?"fuel":"jack",ph:Z*1.3})})}let a=new ve(new En(.08,.08,4,8),new mt({color:new be(1681358).multiplyScalar(2.2)}));a.position.set(_.pit.x,i.height(_.pit.x,_.pit.z)+5,_.pit.z),t.add(a);let o=new ve(new Fn(.42,.7,4),new mt({color:16777215,fog:!1}));o.rotation.x=Math.PI,o.position.y=s.top+1.5,s.root.add(o),_.marker=o,_.pro=_.rules!=="arcade";{let u=i.len/36,d=Math.max(2.6,_.laps*.62),f=_.mode==="race"&&_.laps>=3?rn(He.fuel.fullThrottleSeconds*.8/(d*u),1,6):1;for(let m of _.cars)m.noNitro=_.pro,_.pro?(m.fuelK=_.endu?f*1.3:f,_.endu&&(m.wear*=1.7)):(m.fuelK=0,m.partK=.3,m.dmgScale*=.55,m.wear*=.3);F.dev&&F.devGod&&(s.dmgScale=0,s.partK=0)}_.picks=[],_.coins=0;let l=new En(.5,.5,.1,18);l.rotateX(Math.PI/2);let c=new we({color:16761370,emissive:16754688,emissiveIntensity:1.1,metalness:.9,roughness:.25});if(_.rules==="arcade"){let u=new qa(.6),d=new we({color:1681358,emissive:1681358,emissiveIntensity:2.2,metalness:.6,roughness:.25}),f=Math.max(1.2,Math.min(r,7)-2.5),m=(x,g,p)=>{let b=i.path[(x%e+e)%e],M=b.x+b.tz*g,v=b.z-b.tx*g,S=new ve(p?u:l,p?d:c);S.position.set(M,i.height(M,v)+1,v),S.castShadow=!0,t.add(S),_.picks.push({x:M,z:v,y:S.position.y,m:S,nitro:p,t:0})};[.14,.33,.52,.7,.88].forEach((x,g)=>m(Math.round(x*e),(g%2?1:-1)*f*.6,!0)),[.07,.24,.42,.61,.79].forEach((x,g)=>{let p=(g%2?-1:1)*f*.5;for(let b=0;b<4;b++)m(Math.round(x*e)+b*4,p,!1)})}if(_.rules==="arcade"){let u=new we({color:3126359,emissive:3126359,emissiveIntensity:1.6,roughness:.4}),d=Math.max(1.2,Math.min(r,7)-2.5);[.2,.5,.82].forEach((f,m)=>{let x=i.path[Math.round(f*e)%e],g=(m%2?1:-1)*d*.35,p=x.x+x.tz*g,b=x.z-x.tx*g,M=new wt;M.add(new ve(new ht(1.2,.36,.36),u),new ve(new ht(.36,1.2,.36),u)),M.position.set(p,i.height(p,b)+1.1,b),t.add(M),_.picks.push({x:p,z:b,y:M.position.y,m:M,fix:!0,t:0})})}let h=_.weather||"random";if(_.wet=0,i.wet=0,_.coinG=l,_.coinM=c,_.slicks=[],_.ev={cur:null,next:20+Math.random()*12,last:""},_.haze=0,_.pits=0,_.overtakes=0,_.crashes=0,_.lastPos=0,Md=-9,i.theme.night)for(let u of[-1,1]){let d=i.path[0],f=new Ni(13623551,220,70,.75,.6,1.4);f.position.set(d.x+d.tz*u*5,i.height(d.x,d.z)+9,d.z-d.tx*u*5),f.target.position.set(d.x-d.tx*22+d.tz*u*3,0,d.z-d.tz*22-d.tx*u*3),t.add(f,f.target)}if(_.rainAt=_.rainAt!=null?_.rainAt:h==="rain"?6:h==="storm"?0:h==="random"&&n.theme!=="desert"&&!n.dev&&Math.random()<.3?18+Math.random()*30:1/0,_.roadMats=[],t.traverse(u=>{u.isMesh&&u.material&&/racetrack|conc_plates/.test(u.material.name||"")&&_.roadMats.push([u.material,u.material.roughness,u.material.metalness])}),i.theme.night){let u=new Ni(16773590,90,70,.5,.7,1.4);u.position.set(0,.75,1.7),u.target.position.set(0,-.6,16),s.root.add(u,u.target),s.spot=u,s.spotK=1}_.lit=!!i.theme.night||n.theme==="coast";for(let u of _.cars)u.setLights(_.lit)}function Sy(i){let e=_.track,t=_.player,n=_.pit;if(yy(i),_.state==="go"){let l=(t.x-n.x)**2+(t.z-n.z)**2,c=Lm(t),h=c.reduce((u,d)=>u+d[1],0);if(t.pitZone=!!n.zone&&l<300,t.inPit&&!_.wasPit&&!n.busy&&dn(h>.3?"Limiter on. Stop in your box \u2014 about "+h.toFixed(1)+" seconds for "+c.map(u=>u[0].toLowerCase()).join(", ")+".":"Limiter on. Nothing to do \u2014 drive through.",!0),_.wasPit=t.inPit,n.busy||l<10&&t.speed<2&&h>.3){n.busy||(n.busy=!0,n.t=0,n.jobs=c,n.total=h),n.t+=i,n.tick-=i,n.tick<=0&&(n.tick=.55,Be.wrench());let u=0,d=n.jobs[0][0];for(let f of n.jobs)n.t>=u&&(d=f[0]),u+=f[1];Jt(d+"  "+Math.max(0,n.total-n.t).toFixed(1)+"s",!1,250),n.t>=n.total&&(t.repair(),t.fuel=1,t.nitro=1,t.wetTyres=_.wet>.4||_.rainAt-_.t<20,n.busy=!1,n.t=0,_.warned=_.saidTyre=_.saidFuel=_.saidDry=!1,_.pits++,Jt("Go",!1,800),Be.beep(660,.4),dn((t.wetTyres?"Wet tyres on":"Fresh tyres")+", full tank. Mind the limiter to the pit exit.",!0),_.mode==="online"&&at&&at.send({k:"fix",w:t.wetTyres}))}}if(_.crew){let l=n.busy,c=l?(()=>{let u=0,d=n.jobs[0][0];for(let f of n.jobs)n.t>=u&&(d=f[0]),u+=f[1];return d})():"",h=performance.now()/1e3;for(let u of _.crew){let d=l&&(u.role==="jack"||(u.role==="fuel"?n.jobs.some(b=>b[0]==="Fuel"):!0)),f=d?u.wx:u.hx,m=d?u.wz:u.hz,x=f-u.g.position.x,g=m-u.g.position.z,p=Math.hypot(x,g);if(p>.08){let b=Math.min(p,7*i);u.g.position.x+=x/p*b,u.g.position.z+=g/p*b,u.g.rotation.y=Math.atan2(x,g),u.g.position.y=Math.abs(Math.sin(h*14+u.ph))*.07,u.aL.rotation.x=Math.sin(h*14+u.ph)*.9,u.aR.rotation.x=-u.aL.rotation.x,u.g.scale.y=1}else if(d){u.g.rotation.y=Math.atan2(n.x-u.g.position.x,n.z-u.g.position.z);let b=u.role==="tyre"?c==="Tyres"||c==="Bodywork"||c==="Engine"||c==="Gearbox":u.role==="fuel"?c==="Fuel":!0;u.g.scale.y=u.role==="tyre"?.72:1,u.g.position.y=0,u.aL.rotation.x=-1.2+(b?Math.sin(h*16+u.ph)*.5:0),u.aR.rotation.x=-1.2+(b?Math.cos(h*16+u.ph)*.5:0),u.tyre&&(u.tyre.visible=c==="Tyres"?Math.sin(h*3+u.ph)>0:!1)}else u.g.scale.y=1,u.g.position.y=0,u.g.rotation.y=(n.th||0)-Math.PI/2,u.aL.rotation.x=u.aR.rotation.x=0,u.tyre&&(u.tyre.visible=!0)}if(n.pad&&(n.pad.material.opacity=t.inPit&&!l?.65+Math.sin(h*6)*.35:.8),t.inPit&&!l&&_.state==="go"){let u=Math.hypot(n.x-t.x,n.z-t.z),d=(n.x-t.x)*Math.sin(t.th)+(n.z-t.z)*Math.cos(t.th)>0;On("hEvent",d?Ge("Your pit box")+"  "+Math.round(u)+" m":""),_.pitHint=!0}else _.pitHint&&(_.pitHint=!1,On("hEvent",""))}let s=_.t;for(let l of _.picks){if(l.t>s){if(l.m.visible=!1,l.t!==1/0)continue;continue}if(l.t!==1/0&&(l.m.visible=!0,l.m.rotation.y+=i*2.5,l.m.position.y=l.y+Math.sin(s*3+l.x)*.18,(t.x-l.x)**2+(t.z-l.z)**2<5.5&&_.state==="go"))if(l.t=s+(l.nitro?14:25),Be.pickup(l.nitro),l.fix){l.t=s+40;let c=t.tyre,h=t.fuel;t.repair(),t.tyre=c,t.fuel=h,Be.wrench(),Jt("Repaired",!1,900);for(let u=0;u<16;u++)_.fx.glow.emit(l.x,l.y,l.z,(Math.random()-.5)*7,Math.random()*6,(Math.random()-.5)*7,.45,.22,0,.3,1,.45,1,7)}else if(l.nitro){t.nitro=Math.min(1,t.nitro+.5);for(let c=0;c<14;c++)_.fx.glow.emit(l.x,l.y,l.z,(Math.random()-.5)*8,Math.random()*6,(Math.random()-.5)*8,.4,.25,0,.3,.7,1,1,6)}else{_.coins+=l.gold?200:25,l.gold&&(l.t=1/0,Zc("Golden coin: +200"));for(let c=0;c<6;c++)_.fx.glow.emit(l.x,l.y,l.z,(Math.random()-.5)*5,2+Math.random()*4,(Math.random()-.5)*5,.35,.18,0,1,.8,.2,1,9)}}if(_.t>_.rainAt&&_.wet<1){_.wet===0&&(Jt("Rain",!0,1600),dn("Rain. Brake earlier \u2014 box for wet tyres if it gets heavy.",!0)),_.wet=Math.min(1,_.wet+i/9),e.wet=_.wet;for(let[l,c,h]of _.roadMats)l.roughness=c-(c-.28)*_.wet,l.metalness=h+(.35-h)*_.wet;yt.fog.density=bd*(1+.5*_.wet),qt.intensity=ym*(1-.35*_.wet),Ds.intensity=Mm*(1-.2*_.wet)}_.haze+=((_.ev.cur&&_.ev.cur.type==="haze"?1:0)-_.haze)*Math.min(1,i*.8),yt.fog.density=bd*(1+.5*_.wet)*(1+4.5*_.haze);let r=yn.domElement.height/(2*Math.tan(Qe.fov*Math.PI/360));_.ambient.update(i,Qe,_.wet,r);let a=Ic[e.def.theme].sunDir,o=Math.hypot(a[0],a[1],a[2]);if(kn&&(kn.position.set(Qe.position.x+a[0]/o*3400,Qe.position.y+a[1]/o*3400,Qe.position.z+a[2]/o*3400),kn.lookAt(Qe.position),kn.visible=_.wet<.5),!_.lit&&_.wet>.3){_.lit=!0;for(let l of _.cars)l.setLights(!0)}if(t.spot&&(t.spot.intensity=90*(t.spotK??1)),e.cullables.length){let l=ti==="high"?340:ti==="medium"?250:180,c=_.attract?Qe.position.x:Ne.look.x,h=_.attract?Qe.position.z:Ne.look.z;for(let u of e.cullables)u.m.visible=(u.x-c)**2+(u.z-h)**2<l*l}if(_d*=Math.exp(-i*5),Ad*=Math.exp(-i*6),ei){let l=ei.u;if(l.tilt.value=_.attract?.7:Tm[wm].fixed?1:0,l.time.value=_.t,l.hit.value=_d,l.wet.value=_.wet,l.speed.value+=((t.nitroOn?.9:rn((t.speed-40)/40,0,.4))-l.speed.value)*Math.min(1,i*5),kn&&kn.visible){let c=kn.position.clone().project(Qe),h=c.z<1?rn(1.5-Math.max(Math.abs(c.x),Math.abs(c.y)),0,1):0;l.sunPos.value.set(c.x*.5+.5,c.y*.5+.5),l.sunVis.value+=(h-l.sunVis.value)*Math.min(1,i*4)}else l.sunVis.value=0}}function Nm(i){let e=_.track,t=_.player;if(_.state==="wait"&&(_.waitT+=i,_.waitT>1&&(_.waitT=0,at&&at.send({k:"loaded"}),Rd())),_.state==="count"){_.countT-=i;let c=Math.min(5,Math.floor((3.6-_.countT)/.6)),h=G("lights").children;if(c>_.lightN&&_.countT>0){_.lightN=c;for(let u=0;u<5;u++)h[u].className=u<c?"red":"";Be.beep(330,.12)}if(_.countT<=0){_.state="go";for(let u of h)u.className="go";Be.beep(660,.5),Jt("Go",!1,800),setTimeout(()=>G("lights").classList.remove("show"),900)}}let n=_.state!=="count"&&_.state!=="wait";n&&_.state!=="over"&&(_.t+=i),On("hTyreLbl",Ge(t.wetTyres?"Wets":"Tyres"));for(let[c,h]of _.ais)c.out||c===t&&_.state!=="done"&&_.state!=="over"&&!_.demo||(am(c,e,h,_.cars,i),c!==t&&(h.boost=_.rules==="arcade"?(t.prog-c.prog)*e.spacing>50?1.08:(t.prog-c.prog)*e.spacing<-70?.93:1:1),c!==t&&n&&_y(c,h,i),c.finished&&(h.inp.throttle*=.5),n&&!h.pitT&&(c.stuck=c.speed<1.5?c.stuck+i:0,c.stuck>2.5&&c.stranded?(Dm(c),c.stuck=0):c.stuck>2.5&&((_.respLog=_.respLog||[]).push(c.name+" t"+(_.t|0)+" idx"+c.idx+" hp"+c.health.toFixed(2)+" f"+c.dmg.front.toFixed(2)+" ty"+c.tyre.toFixed(2)+" oil"+_.slicks.length+" pitd"+Math.hypot(c.x-_.pit.x,c.z-_.pit.z).toFixed(0)),Am(c),c.stuck=0,_.respawns=(_.respawns||0)+1)));fa+=i;let s=0;for(;fa>=Yc&&s++<8;)fa-=Yc,Cm(Yc,n);_.remote&&_.remote.netStep(i,e,performance.now());for(let c of _.cars)gy(c);let r=_.D;if(_.state==="go"){t.drifting?(r.time+=i,r.mult=1+Math.min(4,Math.floor(r.time/1.5)),r.combo+=Math.abs(t.beta)*t.speed*i*6*r.mult,r.grace=.9):r.combo>0&&(r.grace-=i,r.grace<=0&&(r.combo>150&&Jt("+"+Math.round(r.combo),!1,900),Rm()));let c=e.path[t.idx];t.wrong=t.vx*c.tx+t.vz*c.tz<-4?t.wrong+i:0,t.wrong>1.2&&Jt("Wrong way",!0,400)}if(_.state==="done"&&(_.doneT+=i,_.doneT>2.2&&Cy()),_.mode==="online"&&at){if(_.sendT+=i,_.sendT>=1/He.net.hz&&(_.sendT=0,at.send({k:"s",p:t.netPack()})),_.pingT=(_.pingT||0)+i,_.pingT>2&&(_.pingT=0,at.send({k:"ping",t:performance.now()})),_.stT=(_.stT||0)+i,_.stT>1){_.stT=0;let h=t.dmg;at.send({k:"st",d:[h.front,h.rear,h.left,h.right].map(u=>+u.toFixed(2)),ty:+t.tyre.toFixed(2),w:t.wetTyres?1:0,lm:t.lamps.map(u=>u.ok?1:0),lo:t.lightsOn?1:0,pt:[t.parts.engine,t.parts.gearbox,...t.parts.wheels].map(u=>+u.toFixed(2))})}let c=_.remote&&_.remote.nb;On("hPing",(_.ping!=null?Math.round(_.ping)+" ms":"\u2026")+(c?" \xB7 buffer "+Math.round(c.delay)+" ms":""))}Sy(i);let a=Ns<1.2?.6:1;wy(e),!G("tele").hidden&&Ey(t,i);for(let c of _.cars)c.render(i,e,c.isRemote?1:rn(fa/Yc,0,1)),c.effects(i,_.fx,e,c===t?a:a*.6);_.fx.smoke.update(i),_.fx.glow.update(i),_.fx.skids.flush(),_.debris.update(i,e),Um(i);let o=yn.domElement.height/(2*Math.tan(Qe.fov*Math.PI/360));_.fx.smoke.mat.uniforms.uScale.value=_.fx.glow.mat.uniforms.uScale.value=o,Ry(i);let l=t.slipR>.16&&t.speed>6||t.wspin>.12||t.locked&&t.speed>3;t.gear!==_.lastGear&&(_.lastGear&&t.gear>0&&Be.shift(),_.lastGear=t.gear);{let c=1e9,h=null;for(let u of _.cars)if(u!==t&&!u.out){let d=Math.hypot(u.x-t.x,u.z-t.z);d<c&&(c=d,h=u)}Be.rival(h?h.rpm:0,c)}Be.ambient(i,{on:!_.attract,day:!e.theme.night,rain:_.wet>.3}),Be.drive({turbo:t.up.eng,rpm:t.rpm,throttle:_.state==="done"?.3:un.throttle,speed:t.speed,skid:l&&t.grass<.5?rn(t.slipR*1.6+t.wspin*.7,.25,1):0,dirt:t.grass*rn(t.speed/20,0,1),nitro:t.nitroOn,brake:t.braking?1:0,rain:_.wet}),Py(i)}function Um(i){let e=_.player,t=Tm[wm],n=e.speed,s=_.track,r=e.rx??e.x,a=e.rz??e.z,o=Ic[s.def.theme].sunDir;if(qt.position.set(r+o[0]*130,e.y+o[1]*130,a+o[2]*130),qt.target.position.set(r,e.y,a),cs&&cs.position.set(r,0,a),_.marker&&(_.marker.position.y=e.top+1.5+Math.sin(_.t*4)*.12,_.marker.visible=!!t.fixed||!!t.follow),_.attract)return Ty(i);if(t.fixed){let T=(s.def.camYaw??.65)+(_.state==="count"?rn(_.countT/3.6,0,1)**2*1.5:_.state==="wait"?1.5:0),C=rn(n*.6,0,22)*Math.min(1,(F.zoom||1.5)/2.25),w=r+(n>1?e.vx/n:0)*C,R=a+(n>1?e.vz/n:0)*C,P=1-Math.exp(-i*3),D=_.state==="count"?rn(_.countT/3.6,0,1)**2:_.state==="wait"?1:0,N=(Qe.aspect<1?1.35:1)*(F.zoom||1.5)*(1-.62*D);Ne.look.x+=(w-Ne.look.x)*P,Ne.look.z+=(R-Ne.look.z)*P,Ne.look.y+=(e.y-Ne.look.y)*P,Qe.position.set(Ne.look.x-Math.sin(T)*t.d*N,Ne.look.y+t.h*N*(1-.45*D),Ne.look.z-Math.cos(T)*t.d*N),Qe.lookAt(Ne.look),Ne.pos.copy(Qe.position),Ne.yaw=T,Math.abs(Qe.fov-t.fov)>.05&&(Qe.fov=Ne.fov=t.fov,Qe.updateProjectionMatrix()),To=0;return}let l=e.th,c=4.2;if(_.state==="over"||_.state==="done")l=e.th+2.4,c=1.2;else if(t.follow){let T=s.path[(e.idx+Math.round(14/s.spacing))%s.n];l=Math.atan2(T.tx,T.tz),c=1.5}else n>6&&e.vf>0&&(l=e.th+xd(Math.atan2(e.vx,e.vz)-e.th)*.55);Ne.yaw+=xd(l-Ne.yaw)*(1-Math.exp(-i*c));let h=Qe.aspect<1?1.25:1,u=t.d*h*(t.follow?1+rn(n/60,0,1)*.18:1),d=r-Math.sin(Ne.yaw)*u,f=a-Math.cos(Ne.yaw)*u,m=e.y+t.h*h;m=Math.max(m,s.height(d,f)+1.2);let x=1-Math.exp(-i*(t.follow?4.5:7));Ne.pos.x+=(d-Ne.pos.x)*x,Ne.pos.y+=(m-Ne.pos.y)*(1-Math.exp(-i*4)),Ne.pos.z+=(f-Ne.pos.z)*x;let g=t.look+(t.follow?rn(n*.12,0,5):0),p=r+Math.sin(e.th)*g,b=a+Math.cos(e.th)*g,M=1-Math.exp(-i*(t.follow?6:10));Ne.look.x+=(p-Ne.look.x)*M,Ne.look.y+=(e.y+.8-Ne.look.y)*M,Ne.look.z+=(b-Ne.look.z)*M,To*=Math.exp(-i*6);let v=e.grass*rn(n/30,0,1)*.04+To*.25;Qe.position.set(Ne.pos.x+(Math.random()-.5)*v,Ne.pos.y+(Math.random()-.5)*v,Ne.pos.z+(Math.random()-.5)*v),Qe.lookAt(Ne.look);let S=t.fov+rn(n*(t.follow?.08:.22),0,14)+(e.nitroOn?t.follow?4:9:0)-Ad;Ne.fov+=(S-Ne.fov)*(1-Math.exp(-i*5)),Math.abs(Qe.fov-Ne.fov)>.05&&(Qe.fov=Ne.fov,Qe.updateProjectionMatrix())}var wy=i=>{if(!i.tick)return;let e=_.attract?_.cars[Math.floor(_.t/7)*3%_.cars.length]:_.player,t=ba()[0];i.tick(performance.now()/1e3,e.x,e.z,t.x,t.z)},bm=-1;function Ty(i){let e=_.t,t=Math.floor(e/7),n=t%4,s=e%7/7,r=_.cars[t*3%_.cars.length],a=r.rx??r.x,o=r.rz??r.z,l=Math.sin(r.th),c=Math.cos(r.th),h,u,d,f=a,m=r.y+.8,x=o,g=40;if(n===0){let b=e*.22;h=a+Math.cos(b)*13,d=o+Math.sin(b)*13,u=r.y+3.2+Math.sin(e*.4)*1.2}else n===1?(h=a-22+s*8,d=o-20,u=r.y+40-s*16,g=34):n===2?(h=a-l*7.5+c*1.6,d=o-c*7.5-l*1.6,u=r.y+2,f=a+l*8,x=o+c*8,g=62):(h=a-l*6+Math.cos(e*.3)*6,d=o-c*6+Math.sin(e*.3)*6,u=r.y+52-s*10,f=a+l*10,x=o+c*10,g=30);u=Math.max(u,_.track.height(h,d)+1.2),bm!==t&&(bm=t,Ne.pos.set(h,u,d),Ne.look.set(f,m,x));let p=1-Math.exp(-i*4);Ne.pos.x+=(h-Ne.pos.x)*p,Ne.pos.y+=(u-Ne.pos.y)*p,Ne.pos.z+=(d-Ne.pos.z)*p,Ne.look.x+=(f-Ne.look.x)*p,Ne.look.y+=(m-Ne.look.y)*p,Ne.look.z+=(x-Ne.look.z)*p,Qe.position.copy(Ne.pos),Qe.lookAt(Ne.look),Math.abs(Qe.fov-g)>.05&&(Qe.fov=Ne.fov=g,Qe.updateProjectionMatrix()),_.marker&&(_.marker.visible=!1)}var fd=60;function Ey(i,e){let t=s=>(s*57.3).toFixed(1).padStart(6),n=s=>String(Math.round(Math.min(s,1.5)*100)).padStart(4)+"%";fd+=(1/Math.max(e,.001)-fd)*.05,G("tele").textContent=`speed      ${(i.speed*3.6).toFixed(0).padStart(5)} km/h   gear ${i.gear}
steer      ${t(i.steer)}\xB0
slip front ${t(i.aF)}\xB0   rear ${t(i.slipR)}\xB0
body slip  ${t(i.beta)}\xB0   yaw ${i.r.toFixed(2).padStart(6)} rad/s
grip used  F${n(i.useF)}  R${n(i.useR)}
accel      lat ${(i.ayS/9.81).toFixed(2).padStart(5)} g  long ${(i.axS/9.81).toFixed(2).padStart(5)} g
surface    ${i.wsurf.map(s=>"GKRWP"[s]).join(" ")}   (FL FR RL RR)
fuel ${n(i.fuel)}  tyres ${n(i.tyre)}  body ${n(i.health)}
damage     F${n(i.dmg.front)} R${n(i.dmg.rear)} L${n(i.dmg.left)} R${n(i.dmg.right)}
assist ${F.assist} \xB7 ${i.spec.drive} \xB7 physics ${He.hz} Hz \xB7 render ${fd.toFixed(0)} fps`}var Un=null;function Ay(){let i=_.track.box,e=156/Math.max(i.maxx-i.minx,i.maxz-i.minz),t=90-(i.minx+i.maxx)/2*e,n=90-(i.minz+i.maxz)/2*e,s=document.createElement("canvas");s.width=s.height=180;let r=s.getContext("2d");r.lineJoin="round",r.beginPath(),_.track.path.forEach((o,l)=>l?r.lineTo(o.x*e+t,o.z*e+n):r.moveTo(o.x*e+t,o.z*e+n)),r.closePath(),r.strokeStyle="rgba(23,24,28,.85)",r.lineWidth=9,r.stroke(),r.strokeStyle="#f3f4f6",r.lineWidth=3.5,r.stroke();let a=_.track.path[0];r.fillStyle="#e3262e",r.fillRect(a.x*e+t-3,a.z*e+n-3,6,6),Un={bg:s,s:e,ox:t,oz:n,ctx:G("mini").getContext("2d")}}var hs={},On=(i,e)=>{hs[i]!==e&&(hs[i]=e,G(i).textContent=e)};function Ry(i){let e=_.player,t=ba(),n=t.indexOf(e)+1;On("hPos",String(n)),On("hLapN",String(rn(e.lap+1,1,_.laps))),On("hTime",Qn(e.lap<0?0:Math.max(0,_.t-e.lapStart)*1e3)),On("hSpeed",String(Math.round(Math.abs(e.vf)*(F.units==="mph"?2.237:3.6)))),On("hGear",e.gear===0?"R":String(e.gear));let s=(l,c,h)=>{let u=Math.round(h*100);if(hs[l]!==u){hs[l]=u;let d=G(l);d.style.setProperty("--v",u),d.classList.toggle("bad",u<30),G(c).textContent=u}};s("gBody","hBody",e.health),s("gFuel","hFuel",e.fuel),s("gTyre","hTyre",e.tyre);{let l=e.parts,c=[l.engine,l.gearbox,...l.wheels],h=c.map(u=>u>.66?2:u>.25?1:0).join("")+(e.fpl?(e.fuel/e.fpl).toFixed(1):"");hs.parts!==h&&(hs.parts=h,["pE","pG","pW0","pW1","pW2","pW3"].forEach((u,d)=>{G(u).className=c[d]>.66?"bad":c[d]>.25?"warn":""}),G("hFuelL").textContent=e.fuelK>0&&e.fpl?(e.fuel/e.fpl).toFixed(1)+" "+Ge("laps of fuel"):"")}_.arc&&(G("hNitro").style.width=(e.nitro*100).toFixed(0)+"%",On("hDriftPts",String(_.drift)),On("hCombo",_.D.combo>5?"+"+Math.round(_.D.combo)+"  \xD7"+_.D.mult:""));let r=[...new Set([0,n-2,n-1,n].filter(l=>l>=0&&l<t.length))],a=r.map(l=>l+t[l].name).join();a!==_.orderKey&&_.cars.length>1&&(_.orderKey=a,G("order").innerHTML=r.map((l,c)=>{let h=t[l];return`<li class="${h===e?"me":""}${c&&r[c-1]!==l-1?" gap":""}" style="border-left-color:${pa(h.color)}"><span>${l+1}</span>${h.name}</li>`}).join(""));let o=Un.ctx;o.clearRect(0,0,180,180),o.drawImage(Un.bg,0,0),o.fillStyle="#19a7ce",o.fillRect(_.pit.x*Un.s+Un.ox-3.5,_.pit.z*Un.s+Un.oz-3.5,7,7);for(let l of _.cars)l!==e&&(o.fillStyle=pa(l.color),o.strokeStyle="#17181c",o.lineWidth=1.5,o.beginPath(),o.arc(l.x*Un.s+Un.ox,l.z*Un.s+Un.oz,4.5,0,7),o.fill(),o.stroke());o.fillStyle="#ffffff",o.strokeStyle="#17181c",o.lineWidth=2,o.beginPath(),o.arc(e.x*Un.s+Un.ox,e.z*Un.s+Un.oz,6,0,7),o.fill(),o.stroke()}function Cy(){_.state="over";let i=_.player,e=ba(),t=e.indexOf(i)+1,n=_.track.def.id,s=0,r,a="",o=i.laps.length?Math.min(...i.laps):null;if(_.mode==="race"){if(s=Math.round(([600,420,300,220,160,120][t-1]||90)*[.8,1,1.3][_.diff])+Math.round(_.drift/40),r=_.elim?t===1?"Last car standing":"Knocked out \xB7 P"+t:t===1?"Winner":(dm[t-1]||"P"+t)+(dm[t-1]?" place":""),a="Best lap "+Qn(o),_.endu&&(s=Math.round(s*1.8)),t===1)for(let m=0;m<260;m++){let x=Math.random();_.fx.glow.emit(i.x+(Math.random()-.5)*26,i.y+10+Math.random()*14,i.z+(Math.random()-.5)*26,(Math.random()-.5)*4,-2-Math.random()*3,(Math.random()-.5)*4,3+Math.random()*2,.3,0,x<.33?1:.2,x>.33&&x<.66?1:.5,x>.66?1:.25,1,2)}}else if(_.mode==="online")s=(t===1?500:220)+Math.round(_.drift/40),r=t===1?"You win":"You lose",a="Best lap "+Qn(o);else if(_.mode==="trial")s=150+(_.newBest?300:0),r=Qn(o),a=_.newBest?"New personal best":"Personal best "+Qn(F.best[n]);else{let m=F.bestDrift[n]||0,x=_.drift>m;x&&(F.bestDrift[n]=_.drift),s=Math.round(_.drift/15)+(x?200:0),r=_.drift.toLocaleString()+" pts",a=x?"New drift record":"Record "+m.toLocaleString()}let l=F.stats,c=(m,x)=>{l[m]=(l[m]||0)+x};c("races",1),c("coins",_.coins||0),c("pits",_.pits),c("overtakes",_.overtakes),c("km",Math.max(0,i.prog)*_.track.spacing/1e3),_.cars.length>1&&(t===1&&c("wins",1),t<=3&&c("podiums",1),t===1&&_.crashes===0&&c("clean",1)),l.driftBest=Math.max(l.driftBest||0,_.drift);let h=-1;if($c=!0,_.story){let m=_.story,x=F.story[m.id]||0;h=um(m.goal,{pos:t,bestLap:o,drift:_.drift}),$c=h>0,s=h*250+(h>0&&!x?400:0)+Math.round(_.drift/40)+(m.final&&h>0&&!x?5e3:0),h>x&&(F.story[m.id]=h),r=h>0?m.final?"Champion":"Event cleared":"Not this time",a=(h>0?m.win:m.lose)+(h>0&&h<3?"  Next star: "+Xc({type:m.goal.type,v:[m.goal.v[h]]}).toLowerCase()+".":""),G("resTitle").textContent=r,G("resSub").textContent=a}if(_.gp&&F.gp){let m=F.gp;e.forEach((g,p)=>{m.pts[g.name]=(m.pts[g.name]||0)+Iy[p]}),m.round++;let x=Object.entries(m.pts).sort((g,p)=>p[1]-g[1]);if(r=Ge("Round")+" "+m.round+"/"+Ao.length+" \xB7 "+(t===1?Ge("Winner"):"P"+t),m.round>=Ao.length){m.done=!0;let g=x[0][0]===i.name;g&&(s+=3e3,c("gpWins",1)),r=g?Ge("Grand Prix champion"):Ge("Grand Prix finished")+" \xB7 P"+(x.findIndex(p=>p[0]===i.name)+1)}a=Ge("Standings")+":  "+x.slice(0,6).map((g,p)=>p+1+". "+g[0]+" "+g[1]).join("   "),G("resTitle").textContent=r,G("resSub").textContent=a}if(G("resStars").textContent=h<0?"":"\u2605".repeat(h)+"\u2606".repeat(3-h),_.daily&&F.daily!==_.daily.key&&(_.mode!=="race"||t<=3)){let m=new Date(Date.now()-864e5),x=m.getFullYear()+"-"+(m.getMonth()+1)+"-"+m.getDate();F.streak=F.daily===x?F.streak+1:1,F.daily=_.daily.key;let g=400+Math.min(F.streak,7)*100;s+=g,Xt("Daily challenge done: +"+g+" \xB7 streak "+F.streak)}let u=jc(F.xp);F.xp+=60+Math.round(s/4);let d=jc(F.xp);d>u&&(s+=d*200,setTimeout(()=>Xt("Level "+d+" \u2014 bonus "+d*200+" credits"),2400)),s+=_.coins||0,F.credits+=s,Ut(),setTimeout(Pd,1200),G("resTitle").textContent=r,G("resSub").textContent=a,G("resReward").textContent="+"+s+" credits";let f=e[0].finishTime;G("resTable").innerHTML=_.cars.length>1?e.map((m,x)=>`<tr class="${m===i?"me":""}"><td>${x+1}</td><td>${m.name}</td><td>${m.spec.name}</td><td>${m.finished?x?"+"+((m.finishTime-f)/1e3).toFixed(2):Qn(m.finishTime):"still racing"}</td></tr>`).join(""):i.laps.map((m,x)=>`<tr class="${m===o?"me":""}"><td>Lap ${x+1}</td><td>${Qn(m)}</td></tr>`).join("")+`<tr><td>Drift score</td><td>${_.drift.toLocaleString()}</td></tr>`,G("againBtn").textContent=_.mode==="online"?"Back to lobby":_.gp?Ge(F.gp&&F.gp.done?"Finish":"Next round"):_.story?$c?"Continue":"Try again":Ge("Race again"),dt("results",!0)}var Jc=0,pd=0;function Py(i){if(Jc+=i,pd++,Jc<3)return;let e=pd/Jc;Jc=pd=0,!(F.gfx!=="auto"||e>33)&&(ti==="high"?(Eo("medium"),Xt("Graphics lowered to keep the frame rate smooth")):Ns>1?(Ns=Math.max(1,Ns-.35),Td()):ti==="medium"&&e<27&&Eo("low"))}var km=()=>{let i=Mi.findIndex(e=>!F.story[e.id]);return i<0?Mi.length-1:i},Ao=["nile","luxor","hurghada","aswan","midnight"],Iy=[25,18,15,12,10,8,6,4,2,1,0,0];function Ly(){let i=Tt.filter(n=>n.id!==F.car).sort(()=>Math.random()-.5),e=[...Em].sort(()=>Math.random()-.5),t=[.8,.89,.97][ce.diff];F.gp={round:0,pts:{},done:!1,rivals:i.slice(0,7).map((n,s)=>({name:e[s],car:n.id,skill:t+(6-s)*.01,paint:la[(s*3+2)%la.length]}))},Ut()}var Om=()=>({mode:"race",gp:!0,track:Ao[F.gp.round],laps:3,diff:ce.diff,rivals:F.gp.rivals,rules:F.rules,weather:F.gp.round===2?"rain":"clear",nRivals:7}),ma="",md=!1;async function Dy(){if(us()||G("menu").hidden||zt.on)return;if((ce.tab==="garage"||ce.tab==="tune"?"garage":"show")==="garage"){Qc++,_&&xa(),ma!=="garage"&&(Co(null),ci.visible=!0),ma="garage";return}if(!(_||md)){ma="show",md=!0,ci.visible=!1;try{await wi({attract:!0,mode:"race",track:"midnight",laps:99,diff:2,weather:"clear",nRivals:7,rules:"circuit"})}finally{md=!1}}}var ce={rivals:5,wx:"random",tab:"quick",ev:0,ch:0,mode:"race",track:0,laps:3,diff:1,car:Math.max(0,Tt.findIndex(i=>i.id===F.car))},gd={};async function Fy(i){if(gd[i.id])return gd[i.id];let e;i.type==="glb"?e=(await Rc("lider.json")).path.map(s=>({x:s[0]*2.2,z:s[1]*2.2})):e=Lc(i.pts,5);let t=0;return e.forEach((n,s)=>{let r=e[(s+1)%e.length];t+=Math.hypot(r.x-n.x,r.z-n.z)}),gd[i.id]={pts:e,len:t}}async function ut(){let i=bn[ce.track],e=Tt[ce.car],t=F.owned.includes(e.id),n=ce.mode==="online";G("credits").textContent=F.credits.toLocaleString(),G("name").value=F.name;let s=ce.tab==="career";for(let M of document.querySelectorAll("#tabs button"))M.classList.toggle("on",M.dataset.tab===ce.tab);for(let M of document.querySelectorAll("#modeSeg button"))M.classList.toggle("on",M.dataset.mode===ce.mode);let r=ce.tab==="quick"||ce.tab==="online",a=ce.mode==="gp"&&ce.tab==="quick";dt("tabCareer",!1),dt("tabQuick",ce.tab==="quick"),dt("tabGarage",ce.tab==="garage"),dt("tabTune",ce.tab==="tune"),dt("tabSettings",ce.tab==="settings"),document.querySelector(".card.track").hidden=!r||a,dt("optsRow",r&&!a),dt("startBtn",r),dt("gpBox",a),dt("rulesSeg",ce.tab==="quick"),dt("daily",ce.tab==="quick"),document.querySelector(".garage").hidden=ce.tab==="settings"||ce.tab==="trophies",G("rivals").textContent=ce.rivals;for(let M of document.querySelectorAll("#wxSeg button"))M.classList.toggle("on",M.dataset.w===ce.wx);for(let M of document.querySelectorAll("#langSeg button"))M.classList.toggle("on",M.dataset.l===F.lang);for(let M of document.querySelectorAll("#zoomSeg button"))M.classList.toggle("on",+M.dataset.z===F.zoom);for(let M of document.querySelectorAll("#unitSeg button"))M.classList.toggle("on",M.dataset.u===F.units);if(G("musicVol").value=F.mvol*100,G("sfxVol").value=F.svol*100,On("hUnit",F.units==="mph"?"mph":"km/h"),a){let M=F.gp&&!F.gp.done?F.gp:null;G("gpBox").innerHTML="<h2>"+Ge("Grand Prix")+"</h2><p>"+Ge("Four rounds, eight drivers, points for every finish. The third round is wet.")+"</p><ol>"+Ao.map((v,S)=>{let T=bn.find(C=>C.id===v);return'<li class="'+(M&&S<M.round?"done":M&&S===M.round?"on":"")+'">'+(F.lang==="ar"?T.ar:T.name)+"</li>"}).join("")+"</ol>"+(M?'<p class="meta">'+Object.entries(M.pts).sort((v,S)=>S[1]-v[1]).slice(0,4).map((v,S)=>S+1+". "+v[0]+" "+v[1]).join(" \xB7 ")+"</p>":"")}{let M=Tt[ce.car],v=Ro(M.id),S=(R,P)=>P.map((D,N)=>'<button data-k="'+R+'" data-v="'+N+'" class="'+(v[R]===N?"on":"")+'" style="background:'+(D?pa(D):"transparent")+'">'+(D?"":"\xD7")+"</button>").join(""),T=(R,P)=>P.map((D,N)=>'<button data-k="'+R+'" data-v="'+N+'" class="'+(v[R]===N?"on":"")+'">'+Ge(D)+"</button>").join("");G("lookRows").innerHTML="<h3>"+Ge("Rear wing")+'</h3><div class="seg wide four">'+T("wing",["None","Lip","GT wing","Race wing"])+"</div><h3>"+Ge("Front splitter")+'</h3><div class="seg wide two">'+T("split",["Off","On"])+"</div><h3>"+Ge("Extras")+'</h3><div class="seg wide">'+["skirt","scoop","pipe"].map((R,P)=>'<button data-k="'+R+'" data-v="'+(v[R]?0:1)+'" class="'+(v[R]?"on":"")+'">'+Ge(["Side skirts","Roof scoop","Exhaust tips"][P])+"</button>").join("")+"</div><h3>"+Ge("Wheels")+'</h3><div class="paints">'+S("rim",Dc)+"</div><h3>"+Ge("Glass")+'</h3><div class="paints">'+S("tint",od)+"</div><h3>"+Ge("Underglow")+'</h3><div class="paints">'+S("glow",ld)+"</div>";let C=ih(M.id),w=[["gear","Gearing","Top speed","Acceleration"],["aero","Downforce","Less drag","More grip"],["brake","Brake bias","Rearward","Forward"],["susp","Balance","Agile","Stable"]];G("tuneRows").innerHTML=w.map(([R,P,D,N])=>'<div class="trow2"><b>'+Ge(P)+"</b><span>"+Ge(D)+'</span><button data-k="'+R+'" data-d="-1">\u2212</button><i>'+[-2,-1,0,1,2].map(H=>'<u class="'+(H===C[R]?"on":"")+'"></u>').join("")+'</i><button data-k="'+R+'" data-d="1">+</button><span>'+Ge(N)+"</span></div>").join("")+"<h3>"+Ge("Tyre compound")+'</h3><div class="seg wide">'+["soft","medium","hard"].map(R=>'<button data-c="'+R+'" class="'+(C.tyre===R?"on":"")+'">'+Ge(R[0].toUpperCase()+R.slice(1))+"</button>").join("")+'</div><p class="note">'+Ge("Soft tyres grip more and wear faster. Hard tyres last longer. Settings apply to this car only.")+"</p>"}let o=jc(F.xp);G("lvl").textContent=o,G("xpBar").style.width=rn((F.xp-Kc(o))/(Kc(o+1)-Kc(o)),0,1)*100+"%",G("assistBtn").textContent="Assist: "+F.assist[0].toUpperCase()+F.assist.slice(1);for(let M of document.querySelectorAll("#rulesSeg button"))M.classList.toggle("on",M.dataset.r===F.rules);dt("devBox",!!F.dev),G("devBtn").textContent=F.dev?"Developer: on":"Developer",F.dev&&(G("devGod").textContent="No damage: "+(F.devGod?"on":"off"),G("devScale").textContent="Game speed: "+(F.devScale||1)+"\xD7");{let M=F.boxDay!==Id();G("boxBtn").classList.toggle("done",!M),G("boxInfo").textContent=Ge(M?"Open now":"Come back tomorrow")}G("tcBtn").textContent=Ge("Traction control")+": "+Ge(F.tc?"On":"Off"),G("absBtn").textContent="ABS: "+Ge(F.abs?"On":"Off"),G("sensBtn").textContent=Ge("Steering")+": "+Ge(F.sens<.9?"Calm":F.sens>1.1?"Sharp":"Normal"),G("gfxBtn").textContent="Graphics: "+F.gfx[0].toUpperCase()+F.gfx.slice(1),G("gasBtn").hidden=!Wi,G("gasBtn").textContent="Auto gas "+(F.autoGas?"on":"off");let l=dd(bn);if(G("dailyName").textContent=l.label+" \xB7 "+l.trackName+(l.weather==="rain"?" \xB7 rain":""),G("dailyInfo").textContent=F.daily===l.key?"Done \xB7 streak "+F.streak:"+"+(400+Math.min((F.streak||0)+1,7)*100),G("daily").classList.toggle("done",F.daily===l.key),s){let M=ls[ce.ch];G("chNum").textContent="Chapter "+(ce.ch+1)+" of "+ls.length,G("chName").textContent=M.name,G("chText").textContent=M.text,G("events").innerHTML=M.events.map(v=>{let S=Mi.indexOf(v),T=S===0||F.story[Mi[S-1].id]>0,C=F.story[v.id]||0;return`<li data-i="${S}" class="${S===ce.ev?"on":""} ${T?"":"locked"}"><span>${S+1}</span><div><b>${v.title}</b><small>${bn.find(w=>w.id===v.track).name} \xB7 ${Xc(v.goal)}${v.weather==="rain"?" \xB7 rain":""}</small></div><em>${T?"\u2605".repeat(C)+"\u2606".repeat(3-C):"Locked"}</em></li>`}).join("")}for(let M of document.querySelectorAll("#diff button"))M.classList.toggle("on",+M.dataset.d===ce.diff);G("diff").style.visibility=["race","gp","elim","endu"].includes(ce.mode)?"visible":"hidden",G("trkName").textContent=F.lang==="ar"?i.ar:i.name,G("trkBlurb").textContent=Ge(i.blurb),G("laps").textContent=ce.laps,G("trkBest").textContent=ce.mode==="drift"?F.bestDrift[i.id]?"Record "+F.bestDrift[i.id].toLocaleString()+" pts":"":F.best[i.id]?"Best "+Qn(F.best[i.id]):"No lap set",G("carName").textContent=F.lang==="ar"?e.ar:e.name,G("carBlurb").textContent=e.cls+(F.lang==="ar"?"":". "+e.blurb),G("stSpeed").style.width=(e.top-40)/30*100+"%",G("stAcc").style.width=(e.acc-6)/7*100+"%",G("stGrip").style.width=(e.grip-.9)/.55*100+"%",G("stDrift").style.width=rn((1.06-e.rear)*4+e.loose*.6,.1,1)*100+"%",G("paints").innerHTML=la.map(M=>`<button style="background:${pa(M)}" data-p="${M}" class="${sh(e.id)===M?"on":""}" aria-label="Paint ${pa(M)}"></button>`).join("");let c=va(e.id);G("ups").innerHTML=t?th.map(([M,v])=>{let S=c[M],T=Pm(e,S);return`<button data-k="${M}" ${S>=3||F.credits<T?"disabled":""}><b>${v}</b><i>${"\u25CF".repeat(S)}${"\u25CB".repeat(3-S)}</i><small>${S>=3?"Max":T.toLocaleString()}</small></button>`}).join(""):"",dt("tabTrophies",ce.tab==="trophies"),ce.tab==="trophies"&&(G("trophies").innerHTML=Im.map(M=>{let v=M.get(),S=v>=M.need;return`<li class="${S?"done":""}"><b>${M.name}</b><small>${M.desc}</small><em>${S?"\u2713":Math.floor(v)+" / "+M.need}</em></li>`}).join("")),G("buyBtn").hidden=t,G("buyBtn").textContent=Ge("Unlock for")+" "+e.price.toLocaleString(),G("buyBtn").disabled=F.credits<e.price,dt("onlineBox",n),dt("lobby",!!at),dt("onlineJoin",!at);let h=G("startBtn");if(!t)h.disabled=!0,h.textContent=Ge("Car locked");else if(n)h.disabled=!(at&&Dt&&Vi),h.textContent=Ge(at?Dt?Vi?"Start duel":"Host starts the race":"Waiting for rival":"Join a room first");else if(s){let M=ce.ev,v=M===0||F.story[Mi[M-1].id]>0;h.disabled=!v,h.textContent=v?"Start event":"Event locked"}else h.disabled=!1,h.textContent=ce.mode==="gp"?F.gp&&!F.gp.done?Ge("Continue")+" \xB7 "+Ge("Round")+" "+(F.gp.round+1)+"/"+Ao.length:Ge("Start Grand Prix"):Ge({race:"Start race",trial:"Start time trial",drift:"Start drift attack",elim:"Start knockout",endu:"Start endurance"}[ce.mode]);at||(G("onlineMsg").textContent=da?"Create a room and send the 5-letter code to a friend.":"Supabase keys are not set in config.js yet, so rooms only connect between tabs of this browser (handy for testing)."),Wm(),Uy(),Dy();let u=await Fy(i);if(bn[ce.track]!==i)return;G("trkLen").textContent=(u.len/1e3).toFixed(2)+" km";let d=G("trkMap").getContext("2d");d.clearRect(0,0,120,90);let f=1e9,m=-1e9,x=1e9,g=-1e9;for(let M of u.pts)f=Math.min(f,M.x),m=Math.max(m,M.x),x=Math.min(x,M.z),g=Math.max(g,M.z);let p=Math.min(104/(m-f),74/(g-x));d.beginPath(),u.pts.forEach((M,v)=>{let S=60+(M.x-(f+m)/2)*p,T=45+(M.z-(x+g)/2)*p;v?d.lineTo(S,T):d.moveTo(S,T)}),d.closePath(),d.lineJoin="round",d.strokeStyle="#f3f4f6",d.lineWidth=3,d.stroke();let b=G("board");b.hidden=!0,da&&ce.mode!=="drift"&&hm(i.id).then(M=>{bn[ce.track]!==i||!M||!M.length||(b.innerHTML=M.map((v,S)=>`<li><span>${S+1}. ${v.name.replace(/[<>&]/g,"")}</span><b>${Qn(v.ms)}</b></li>`).join(""),b.hidden=!1)})}var rh=(i,e,t)=>{ce[i]=(ce[i]+t+e)%e};G("trkPrev").onclick=()=>{rh("track",bn.length,-1),ce.laps=bn[ce.track].laps,ut()};G("trkNext").onclick=()=>{rh("track",bn.length,1),ce.laps=bn[ce.track].laps,ut()};var ah=()=>{let i=Tt[ce.car];F.owned.includes(i.id)&&(F.car=i.id,Ut(),oh()),cr(),ut()};G("carPrev").onclick=()=>{rh("car",Tt.length,-1),ah()};G("carNext").onclick=()=>{rh("car",Tt.length,1),ah()};G("lapMinus").onclick=()=>{ce.laps=Math.max(1,ce.laps-1),ut()};G("lapPlus").onclick=()=>{ce.laps=Math.min(15,ce.laps+1),ut()};G("tabs").onclick=i=>{let e=i.target.closest("button");e&&(ce.tab=e.dataset.tab,ce.mode=ce.tab==="online"?"online":ce.mode==="online"?"race":ce.mode,(ce.tab==="garage"||ce.tab==="tune")&&cr(),ut())};G("modeSeg").onclick=i=>{let e=i.target.closest("button");e&&(ce.mode=e.dataset.mode,ut())};G("chPrev").onclick=()=>{ce.ch=(ce.ch+ls.length-1)%ls.length,ce.ev=Mi.indexOf(ls[ce.ch].events[0]),ut()};G("chNext").onclick=()=>{ce.ch=(ce.ch+1)%ls.length,ce.ev=Mi.indexOf(ls[ce.ch].events[0]),ut()};G("events").onclick=i=>{let e=i.target.closest("li");e&&!e.classList.contains("locked")&&(ce.ev=+e.dataset.i,ut())};G("gfxBtn").onclick=()=>{let i=["auto","high","medium","low"];F.gfx=i[(i.indexOf(F.gfx)+1)%4],Ut(),Eo(F.gfx==="auto"?Wi?"medium":"high":F.gfx),ut()};G("ups").onclick=i=>{let e=i.target.closest("button");if(!e||e.disabled)return;let t=Tt[ce.car],n=va(t.id),s=Pm(t,n[e.dataset.k]);F.credits<s||(F.credits-=s,n[e.dataset.k]++,Ut(),oh(),e.dataset.k==="eng"&&(Be.quiet=!1,Be.turboDemo()),Be.init(),Be.wrench(),cr(),ut())};var Ny={medium:"Assist medium: the car helps catch slides, but it will oversteer and understeer if you overdrive it.",off:"Assist off: no automatic counter-steer, no throttle cut. Slides are yours to catch.",low:"Assist low: half-strength counter-steer in a slide and a gentle throttle cut past 24\xB0 of slip.",full:"Assist full: the car counter-steers for you in a slide and eases the throttle before it becomes a spin."};function Uy(){document.documentElement.lang=F.lang;for(let i of["menu","results","pause"])G(i).dir=F.lang==="ar"?"rtl":"ltr";for(let i of document.querySelectorAll("[data-t]"))i.dataset.t||(i.dataset.t=i.textContent.trim()),i.textContent=Ge(i.dataset.t)}var ky=()=>{Ut(),oh(),cr(),ut()};G("lookRows").onclick=i=>{let e=i.target.closest("button");e&&(Ro(Tt[ce.car].id)[e.dataset.k]=+e.dataset.v,ky())};G("tuneRows").onclick=i=>{let e=i.target.closest("button");if(!e)return;let t=ih(Tt[ce.car].id);e.dataset.c?t.tyre=e.dataset.c:t[e.dataset.k]=rn(t[e.dataset.k]+ +e.dataset.d,-2,2),Ut(),ut()};G("langSeg").onclick=i=>{let e=i.target.closest("button");e&&(F.lang=e.dataset.l,Ut(),ut())};G("zoomSeg").onclick=i=>{let e=i.target.closest("button");e&&(F.zoom=+e.dataset.z,Ut(),wd(),ut())};var Bm=i=>{F.zoom=rn(Math.round((F.zoom+i)*100)/100,.7,3.4),Ut(),wd(),G("zoomVal").textContent=Math.round(F.zoom/1.5*100)+"%",_&&(Um(0),_m(0))};G("zoomOut").onclick=()=>Bm(.15);G("zoomIn").onclick=()=>Bm(-.15);G("unitSeg").onclick=i=>{let e=i.target.closest("button");e&&(F.units=e.dataset.u,Ut(),ut())};G("wxSeg").onclick=i=>{let e=i.target.closest("button");e&&(ce.wx=e.dataset.w,ut())};G("rivMinus").onclick=()=>{ce.rivals=Math.max(1,ce.rivals-2),ut()};G("rivPlus").onclick=()=>{ce.rivals=Math.min(11,ce.rivals+2),ut()};G("musicVol").oninput=i=>{F.mvol=Be.mvol=i.target.value/100,Ut(),Be.init(),Be.music(!us())};G("sfxVol").oninput=i=>{F.svol=Be.vol=i.target.value/100,Ut(),Be.setMuted(F.muted)};G("resetBtn").onclick=()=>{if(confirm(Ge("Erase all progress, cars and settings?"))){try{localStorage.removeItem(Sd)}catch{}location.reload()}};G("tcBtn").onclick=()=>{F.tc=!F.tc,Ut(),Xt(F.tc?"Traction control on: power is trimmed to what the tyres can take.":"Traction control off: full throttle will spin the wheels and step the tail out."),ut()};G("absBtn").onclick=()=>{F.abs=!F.abs,Ut(),Xt(F.abs?"ABS on: you can brake and steer together.":"ABS off: full braking locks the fronts and the car ploughs straight on."),ut()};G("sensBtn").onclick=()=>{F.sens=F.sens<.9?1:F.sens>1.1?.75:1.3,Ut(),ut()};G("devBtn").onclick=()=>{if(!F.dev){if(prompt("Developer password")!=="Monalisa")return Xt("Wrong password");F.dev=!0,Ut(),Xt("Developer mode on")}ut()};G("devBox").onclick=i=>{let e=i.target.closest("button");if(!e)return;let t=e.dataset.a;if(t==="cars"&&(F.owned=Tt.map(n=>n.id),Xt("All cars unlocked")),t==="cash"&&(F.credits+=5e4,Xt("+50,000 credits")),t==="ups"){for(let n of Tt)F.up[n.id]={eng:3,tyre:3,nitro:3,armor:3};Xt("All upgrades maxed")}t==="box"&&(F.boxDay="",Xt("Daily box is ready again")),t==="god"&&(F.devGod=!F.devGod),t==="scale"&&(F.devScale=F.devScale===1?.5:F.devScale===.5?2:1),t==="tele"&&(G("tele").hidden=!G("tele").hidden),t==="off"&&(F.dev=!1,F.devGod=!1,F.devScale=1),Ut(),cr(),ut()};var Id=()=>{let i=new Date;return i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate()},zt={on:!1,t:0,g:null,lid:null,beams:[],fx:null,reward:null};function Oy(){let i=new wt,e=new we({color:8014374,roughness:.8}),t=new we({color:16761370,metalness:1,roughness:.25,emissive:6965760,emissiveIntensity:.5}),n=new we({color:1323115,roughness:.5,metalness:.3}),s=(o,l,c,h,u,d=i)=>{let f=new ve(o,l);return f.position.set(c,h,u),f.castShadow=!0,d.add(f),f};s(new ht(2.4,1.3,1.7),n,0,.65,0);for(let o of[-1.1,0,1.1])s(new ht(.16,1.36,1.76),t,o,.66,0);for(let o of[-.8,.8])s(new ht(2.46,.14,.14),t,0,.1,o);for(let o of[-1.25,1.25])s(new Js(.2,.05,8,16),t,o,.75,0).rotation.y=Math.PI/2;let r=new wt;r.position.set(0,1.3,-.85),i.add(r),s(new ht(2.5,.34,1.8),n,0,.17,.85,r);for(let o of[-1.1,0,1.1])s(new ht(.17,.38,1.84),t,o,.17,.85,r);s(new En(.3,.3,.08,20),t,0,.72,.87).rotation.x=Math.PI/2,s(new ht(.12,.28,.1),n,0,.7,.92);let a=[];for(let o=0;o<7;o++){let l=new ve(new Fn(.9,9,10,1,!0).translate(0,4.5,0),new mt({color:o%2?16771496:16761370,transparent:!0,opacity:0,blending:An,depthWrite:!1,side:Wt}));l.position.y=1.2,l.rotation.set((Math.random()-.5)*1.1,0,(Math.random()-.5)*1.1),i.add(l),a.push(l)}i.visible=!1,ci.add(i),Object.assign(zt,{g:i,lid:r,beams:a,fx:new ca(yt,500,!0)})}function By(){let i=Tt.filter(n=>!F.owned.includes(n.id)),e=Math.random();if(e<.1&&i.length){let n=i[Math.random()*Math.min(3,i.length)|0];return F.owned.push(n.id),["New car",n.name]}if(e<.28){let n=F.owned[Math.random()*F.owned.length|0],s=va(n),r=th.map(a=>a[0]).filter(a=>s[a]<3);if(r.length){let a=r[Math.random()*r.length|0];return s[a]++,["Free upgrade",Tt.find(o=>o.id===n).name+" \xB7 "+th.find(o=>o[0]===a)[1]+" "+s[a]]}}if(e<.45){let n=150+(Math.random()*6|0)*50;return F.xp+=n,["Driver XP","+"+n+" XP"]}let t=[300,400,500,750,1e3,1500,2500][Math.min(6,Math.floor(Math.pow(Math.random(),1.8)*7))];return F.credits+=t,["Credits","+"+t.toLocaleString()]}function zy(){if(!(F.boxDay===Id()||zt.on)){Be.init(),zt.g||Oy(),Qc++,_&&xa(),Co(null),ci.visible=!0,ma="garage",li&&(li.root.visible=!1),zt.g.visible=!0,zt.on=!0,zt.t=0,zt.lid.rotation.x=0,zt.reward=null,dt("menu",!1);for(let i of zt.beams)i.material.opacity=0}}function zm(i){let e=zt.t+=i,t=zt.g;Qe.fov=36,Qe.updateProjectionMatrix();let n=e*.5;if(Qe.position.set(Math.sin(n)*7.5,3.2-Math.min(e,2)*.4,Math.cos(n)*7.5),Qe.lookAt(0,1+Math.min(1,Math.max(0,e-2.2))*.8,0),qt.position.set(6,12,8),qt.target.position.set(0,0,0),e<2.2){let s=e/2.2;t.rotation.z=Math.sin(e*34)*.05*s,t.rotation.x=Math.cos(e*29)*.04*s,t.position.y=Math.abs(Math.sin(e*9))*.12*s,Math.random()<.2&&Be.tone(200+s*400,.05,.03,"square")}else{t.rotation.set(0,0,0),t.position.y=0;let s=Math.min(1,(e-2.2)/.5);zt.lid.rotation.x=-s*s*2.1;for(let r of zt.beams)r.material.opacity=Math.min(.13,(e-2.2)*.4)*(.6+.4*Math.sin(e*5+r.rotation.x*9)),r.rotation.y+=i*.6;if(zt.reward||(zt.reward=By(),F.boxDay=Id(),Ut(),Be.beep(660,.25),setTimeout(()=>Be.beep(990,.5),180),G("boxKind").textContent=Ge(zt.reward[0]),G("boxWhat").textContent=zt.reward[1]),e<4.5&&Math.random()<.9)for(let r=0;r<4;r++){let a=Math.random();zt.fx.emit((Math.random()-.5)*1.6,1.4,(Math.random()-.5)*1,(Math.random()-.5)*5,5+Math.random()*6,(Math.random()-.5)*5,1.6+Math.random(),.22,0,1,a<.5?.85:.5,a<.5?.3:.9,1,7)}e>3&&G("boxWin").hidden&&dt("boxWin",!0)}zt.fx.mat.uniforms.uScale.value=yn.domElement.height/(2*Math.tan(Qe.fov*Math.PI/360)),zt.fx.update(i)}G("boxBtn").onclick=zy;G("boxTake").onclick=()=>{dt("boxWin",!1),zt.on=!1,zt.g.visible=!1,zt.fx.clear(),zt.fx.update(0),li&&(li.root.visible=!0),ma="",dt("menu",!0),cr(),ut(),Pd()};G("assistBtn").onclick=()=>{let i=["full","medium","low","off"];F.assist=i[(i.indexOf(F.assist)+1)%4],Ut(),Xt(Ny[F.assist]),ut()};G("rulesSeg").onclick=i=>{let e=i.target.closest("button");e&&(F.rules=e.dataset.r,Ut(),Xt(F.rules==="circuit"?"Professional: fuel strategy, tyre wear, full parts damage, pit crew, clean AI. No pickups.":"Arcade: no fuel, light damage, nitro, repair kits, coins, slipstream, random events, pushier AI."),ut())};G("copyLink").onclick=()=>{let i=location.origin+location.pathname+"?room="+at.code;(navigator.clipboard?navigator.clipboard.writeText(i):Promise.reject()).then(()=>Xt("Invite link copied"),()=>prompt("Copy this invite link",i))};G("gasBtn").onclick=()=>{F.autoGas=!F.autoGas,Ut(),ut()};G("daily").onclick=()=>{let i=dd(bn);Be.init(),_n={mode:i.mode,track:i.track,laps:3,diff:1,weather:i.weather,daily:i},wi(_n)};var Hy={"Amm Saber":"#ffc21a",Zizo:"#e3262e","Captain Nadia":"#19a7ce","El Basha":"#f3f4f6",Hassan:"#2fb457",Hussein:"#2fb457"},Si=null;function Gy(i){Si={ev:i,i:0},dt("story",!0),Hm()}function Hm(){let[i,e]=Si.ev.intro[Si.i];G("stWho").textContent=i,G("stText").textContent=e,G("stEvent").textContent=Si.ev.title+" \xB7 "+Xc(Si.ev.goal),G("stFace").textContent=i[0],G("stFace").style.background=Hy[i]||"#a5a9b4",G("stNext").textContent=Si.i===Si.ev.intro.length-1?"Start":"Next"}function Gm(){let i=Si.ev;Si=null,dt("story",!1),_n={mode:i.mode,track:i.track,laps:i.laps,diff:i.diff??1,weather:i.weather||"clear",rivals:i.rivals,story:i},wi(_n)}G("stNext").onclick=()=>{Be.init(),++Si.i>=Si.ev.intro.length?Gm():Hm()};G("stSkip").onclick=Gm;G("diff").onclick=i=>{let e=i.target.closest("button");e&&(ce.diff=+e.dataset.d,ut())};G("paints").onclick=i=>{let e=i.target.closest("button");e&&(F.paint[Tt[ce.car].id]=+e.dataset.p,Ut(),ah())};G("buyBtn").onclick=()=>{let i=Tt[ce.car];F.credits>=i.price&&!F.owned.includes(i.id)&&(F.credits-=i.price,F.owned.push(i.id),Be.init(),Be.beep(880,.3),Xt(i.name+" unlocked"),ah())};G("name").onchange=i=>{F.name=(i.target.value.trim()||F.name).slice(0,16),Ut(),oh(),ut()};G("muteBtn").onclick=()=>{Be.init(),Ed(!F.muted),Be.music(!us())};addEventListener("pointerdown",()=>{Be.ctx||(Be.init(),Be.music(!us()))},{once:!1});G("startBtn").onclick=()=>{if(ce.tab==="career")return Be.init(),Gy(Mi[ce.ev]);if((ce.mode==="elim"||ce.mode==="endu")&&ce.tab==="quick"){let e=ce.mode==="elim";return _n={mode:"race",elim:e,endu:!e,track:bn[ce.track].id,laps:e?ce.rivals:Math.max(10,ce.laps*4),diff:ce.diff,rules:F.rules,nRivals:ce.rivals,weather:ce.wx},wi(_n)}if(ce.mode==="gp"&&ce.tab==="quick")return Be.init(),(!F.gp||F.gp.done)&&Ly(),_n=Om(),wi(_n);let i={mode:ce.mode,track:bn[ce.track].id,laps:ce.laps,diff:ce.diff,rules:ce.mode==="online"?"circuit":F.rules,nRivals:ce.rivals,weather:ce.mode==="online"?void 0:ce.wx};if(ce.mode==="online"){if(!(at&&Dt&&Vi))return;i.rainAt=Math.random()<.3?18+Math.random()*30:1e9,at.send({k:"start",track:i.track,laps:i.laps,rainAt:i.rainAt})}if(Wi)try{document.documentElement.requestFullscreen?.().then(()=>screen.orientation?.lock?.("landscape").catch(()=>{})).catch(()=>{})}catch{}_n=i,wi(i)};var _n=null,$c=!0;G("pauseBtn").onclick=Cd;G("resumeBtn").onclick=Cd;G("restartBtn").onclick=()=>{let i=_n;xa(),wi(i)};G("quitBtn").onclick=ga;G("menuBtn").onclick=ga;G("againBtn").onclick=()=>{if(_n.gp)return!F.gp||F.gp.done?ga():(_n=Om(),wi(_n));if(_n.mode==="online"||_n.story&&$c)return ga();let i=_n;xa(),wi(i)};var at=null,Dt=null,Vi=!1,Ld=!1;async function Dd(i){if(!/^[A-Z0-9]{5}$/.test(i)){G("onlineMsg").textContent="Room codes are 5 letters or digits.";return}Be.init(),G("onlineMsg").textContent="Connecting\u2026";let e=new So;e.onPeers=vm,e.onMessage=Wy;try{await e.join(i,Fd())}catch(t){G("onlineMsg").textContent=t.message;return}at=e,Vi=!0,Dt=null,G("lobbyCode").textContent=i,G("onlineMsg").textContent="Share the code. The race starts when the host presses start.",ut(),vm(at.peers)}function Vm(i){at&&at.leave(),at=null,Dt=null,_&&_.mode==="online"&&ga(),ut(),i&&(G("onlineMsg").textContent=i)}function vm(i){if(!at)return;let e=[at.meta,...Object.values(i)].sort((n,s)=>n.t-s.t||(n.id<s.id?-1:1));if(e.indexOf(at.meta)>1)return Vm("That room already has two drivers.");let t=Dt;Dt=e.find(n=>n.id!==at.id)||null,Vi=e[0]===at.meta,t&&!Dt&&_&&_.mode==="online"&&Xt("Your rival left the race"),!t&&Dt&&!us()&&Xt(Dt.name+" joined"),us()||ut()}var Fd=()=>({name:F.name,car:F.car,paint:sh(F.car),up:{...va(F.car)},look:{...Ro(F.car)}}),Nd=i=>i.car+"|"+i.paint+"|"+JSON.stringify(i.up||{})+JSON.stringify(i.look||{});function oh(){if(!at)return;let i=Fd();at.setMeta(i),at.send({k:"me",i})}function Vy(){let i=_.remote,e=Tt.find(n=>n.id===Dt.car)||Tt[0],t=new Is(e,Dt.paint??e.color,Dt.name||"Rival",Dt.up,Dt.look);for(let n of["x","z","th","px","pz","pth","vx","vz","r","y","nb","idx","prog","lap","laps","lapStart","finished","finishTime","wrong"])t[n]=i[n];t.isRemote=!0,t.look=Nd(Dt),t.noNitro=i.noNitro,_.cars[_.cars.indexOf(i)]=t,_.remote=t,yt.remove(i.root),i.dispose(),yt.add(t.root),_.orderKey=""}function Wm(){if(!at)return;let i=(e,t)=>`<li><i style="background:${pa(e.paint??8947848)}"></i>${e.name}${t?" (you)":""} \u2014 ${(Tt.find(n=>n.id===e.car)||Tt[0]).name}${e.up&&Object.values(e.up).some(n=>n)?" <small>("+th.filter(([n])=>e.up[n]).map(([n,s])=>s+" "+e.up[n]).join(", ")+")</small>":""}${(t?Vi:!Vi)?" \xB7 host":""}</li>`;G("lobbyList").innerHTML=i(at.meta,!0)+(Dt?i(Dt,!1):"<li>Waiting for a second driver\u2026</li>")}function Wy(i){if(i.k==="start"&&!us()){let e={mode:"online",track:i.track,laps:i.laps,diff:1,rainAt:i.rainAt};_n=e,wi(e)}else if(i.k==="loaded")Ld=!0,Rd();else if(i.k==="go")eh();else if(i.k==="s"&&_&&_.remote)_.remote.netApply(i.p,performance.now());else if(i.k==="me"&&Dt)Object.assign(Dt,i.i),_&&_.remote&&_.remote.look!==Nd(Dt)?Vy():us()||Wm();else if(i.k==="ping")at.send({k:"pong",t:i.t});else if(i.k==="pong"&&_)_.ping=_.ping==null?performance.now()-i.t:_.ping+(performance.now()-i.t-_.ping)*.3;else if(i.k==="d"&&_&&_.remote){let e=_.remote;e.hitL=i.l,e.hitN=i.n,e.hitX=e.x,e.hitZ=e.z,Fs(e,i.p,!0)}else if(i.k==="st"&&_&&_.remote){let e=_.remote;["front","rear","left","right"].forEach((n,s)=>{e.dmg[n]=i.d[s]}),e.tyre=i.ty,e.wetTyres=!!i.w,i.lm.forEach((n,s)=>{e.lamps[s].ok=!!n}),e.setLights(!!i.lo),i.pt&&(e.parts.engine=i.pt[0],e.parts.gearbox=i.pt[1],e.parts.wheels=i.pt.slice(2))}else i.k==="fix"&&_&&_.remote?(_.remote.repair(),_.remote.wetTyres=!!i.w):i.k==="fin"&&_&&_.remote&&(_.remote.finished=!0,_.remote.finishTime=i.t,_.player.finished||Jt(_.remote.name+" finished",!0,1500))}G("createRoom").onclick=()=>Dd(So.makeCode());G("joinRoom").onclick=()=>Dd(G("roomCode").value.trim().toUpperCase());G("leaveRoom").onclick=()=>Vm("");var nh=performance.now();function qm(i){requestAnimationFrame(qm);let e=Math.max(0,Math.min(.05,(i-nh)/1e3))*(F.dev&&F.devScale||1);if(nh=i,_){if(!lr)try{Nm(e)}catch(t){window.__errOnce||(window.__errOnce=1,console.error("RACE ERROR "+t.message+" cars="+_.cars.length+" t="+_.t+" state="+_.state+" mode="+_.mode+" attract="+_.attract+" keys="+Object.keys(_).slice(0,12)))}}else if(zt.on)zm(e);else if(li){vd+=e*.35,li.root.rotation.y=vd;let t=innerWidth<820;Qe.fov=38,Qe.updateProjectionMatrix();let n=F.lang==="ar"?-1:1;Qe.position.set(t?0:-1.6*n,3,t?13:11.5),Qe.lookAt(t?0:-2.9*n,t?1.8:-.4,0),qt.position.set(6,12,8),qt.target.position.set(0,0,0)}_m(e)}(async function(){Co(null),Be.mvol=F.mvol,Be.vol=F.svol,Ed(F.muted),ce.ev=km(),ce.ch=Mi[ce.ev].ci,await rm(),cr(),ut(),requestAnimationFrame(qm),window.__booted=!0;let e=new URLSearchParams(location.search).get("room");e&&(ce.tab="online",ce.mode="online",ut(),Dd(e.toUpperCase())),window.__game={get R(){return _},boxTick:zm,box:zt,touch:qn,readInput:Sm,TUNE:He,physics:Cm,get acc(){return fa},audio:Be,startEvent:Fm,checkTrophies:Pd,setGfx:Eo,get gfx(){return ti},sim(t,n=1/60){for(let s=0;s<Math.round(t/n)&&_;s++)Nm(n)},CARS:Tt,renderer:yn,sun:qt,keys:vn,save:F,startRace:wi,sel:ce,TRACKS:bn}})();})();
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
