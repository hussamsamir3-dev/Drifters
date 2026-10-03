(()=>{var Yf=0,fu=1,Jf=2;var hr=1,Zf=2,ra=3,Vi=0,dn=1,$t=2,fi=0,Ds=1,Mn=2,pu=3,mu=4,Vl=5;var ds=100,$f=101,Qf=102,ep=103,tp=104,np=200,Wl=201,ip=202,sp=203,gu=204,xu=205,rp=206,ap=207,ql=208,op=209,lp=210,cp=211,hp=212,up=213,dp=214,vl=0,_l=1,yl=2,Or=3,Ml=4,Sl=5,wl=6,Tl=7,Xl=0,fp=1,pp=2,Ei=0,oo=1,lo=2,co=3,ur=4,ho=5,uo=6,fo=7,tu="attached",mp="detached",bu=300,Fs=301,dr=302,jl=303,Kl=304,po=306,ii=1e3,ui=1001,Br=1002,sn=1003,Yl=1004;var fr=1005;var rn=1006,aa=1007;var Ai=1008;var Jn=1009,vu=1010,_u=1011,oa=1012,Jl=1013,Ri=1014,ri=1015,fn=1016,Zl=1017,$l=1018,la=1020,yu=35902,Mu=35899,Su=1021,wu=1022,ai=1023,ki=1026,Ns=1027,Ql=1028,ec=1029,ks=1030,tc=1031;var nc=1033,mo=33776,go=33777,xo=33778,bo=33779,ic=35840,sc=35841,rc=35842,ac=35843,oc=36196,lc=37492,cc=37496,hc=37488,uc=37489,vo=37490,dc=37491,fc=37808,pc=37809,mc=37810,gc=37811,xc=37812,bc=37813,vc=37814,_c=37815,yc=37816,Mc=37817,Sc=37818,wc=37819,Tc=37820,Ec=37821,Ac=36492,Rc=36494,Cc=36495,Pc=36283,Ic=36284,_o=36285,Lc=36286;var tr=2300,nr=2301,gl=2302,nu=2303,iu=2400,su=2401,ru=2402,gp=2500;var Tu=0,yo=1,ca=2,xp=3200;var Mo=0,bp=1,fs="",Lt="srgb",Un="srgb-linear",Ha="linear",Mt="srgb";var xl=7680;var vp=519,_p=512,yp=513,Mp=514,Dc=515,Sp=516,wp=517,Fc=518,Tp=519,Eu=35044;var Au="300 es",wi=2e3,zr=2001;function yg(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Mg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Hr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ep(){let i=Hr("canvas");return i.style.display="block",i}var df={},Gr=null;function Ga(...i){let e="THREE."+i.shift();Gr?Gr("log",e,...i):console.log(e,...i)}function Ap(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ze(...i){i=Ap(i);let e="THREE."+i.shift();if(Gr)Gr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Xe(...i){i=Ap(i);let e="THREE."+i.shift();if(Gr)Gr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function er(...i){let e=i.join(" ");e in df||(df[e]=!0,ze(...i))}function Rp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Cp={[vl]:_l,[yl]:wl,[Ml]:Tl,[Or]:Sl,[_l]:vl,[wl]:yl,[Tl]:Ml,[Sl]:Or},Ui=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ff=1234567,Ba=Math.PI/180,ir=180/Math.PI;function Ti(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pn[i&255]+Pn[i>>8&255]+Pn[i>>16&255]+Pn[i>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[t&63|128]+Pn[t>>8&255]+"-"+Pn[t>>16&255]+Pn[t>>24&255]+Pn[n&255]+Pn[n>>8&255]+Pn[n>>16&255]+Pn[n>>24&255]).toLowerCase()}function ct(i,e,t){return Math.max(e,Math.min(t,i))}function Ru(i,e){return(i%e+e)%e}function Sg(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function wg(i,e,t){return i!==e?(t-i)/(e-i):0}function za(i,e,t){return(1-t)*i+t*e}function Tg(i,e,t,n){return za(i,e,1-Math.exp(-t*n))}function Eg(i,e=1){return e-Math.abs(Ru(i,e*2)-e)}function Ag(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Rg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Cg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Pg(i,e){return i+Math.random()*(e-i)}function Ig(i){return i*(.5-Math.random())}function Lg(i){i!==void 0&&(ff=i);let e=ff+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Dg(i){return i*Ba}function Fg(i){return i*ir}function Ng(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function kg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ug(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Og(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),p=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*p,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*p,o*c);break;case"ZYZ":i.set(l*p,l*f,o*h,o*c);break;default:ze("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Si(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ft(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Cu={DEG2RAD:Ba,RAD2DEG:ir,generateUUID:Ti,clamp:ct,euclideanModulo:Ru,mapLinear:Sg,inverseLerp:wg,lerp:za,damp:Tg,pingpong:Eg,smoothstep:Ag,smootherstep:Rg,randInt:Cg,randFloat:Pg,randFloatSpread:Ig,seededRandom:Lg,degToRad:Dg,radToDeg:Fg,isPowerOfTwo:Ng,ceilPowerOfTwo:kg,floorPowerOfTwo:Ug,setQuaternionFromProperEuler:Og,normalize:Ft,denormalize:Si},Oe=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ln=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],p=r[a+2],x=r[a+3];if(u!==x||l!==d||c!==f||h!==p){let g=l*d+c*f+h*p+u*x;g<0&&(d=-d,f=-f,p=-p,x=-x,g=-g);let m=1-o;if(g<.9995){let y=Math.acos(g),M=Math.sin(y);m=Math.sin(m*y)/M,o=Math.sin(o*y)/M,l=l*m+d*o,c=c*m+f*o,h=h*m+p*o,u=u*m+x*o}else{l=l*m+d*o,c=c*m+f*o,h=h*m+p*o,u=u*m+x*o;let y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],p=r[a+3];return e[t]=o*p+h*u+l*f-c*d,e[t+1]=l*p+h*d+c*u-o*f,e[t+2]=c*p+h*f+o*d-l*u,e[t+3]=h*p-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:ze("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ih.copy(this).projectOnVector(e),this.sub(Ih)}reflect(e){return this.sub(Ih.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ih=new U,pf=new Ln,Ke=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],x=s[0],g=s[3],m=s[6],y=s[1],M=s[4],_=s[7],w=s[2],T=s[5],A=s[8];return r[0]=a*x+o*y+l*w,r[3]=a*g+o*M+l*T,r[6]=a*m+o*_+l*A,r[1]=c*x+h*y+u*w,r[4]=c*g+h*M+u*T,r[7]=c*m+h*_+u*A,r[2]=d*x+f*y+p*w,r[5]=d*g+f*M+p*T,r[8]=d*m+f*_+p*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,p=t*u+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=u*x,e[1]=(s*c-h*n)*x,e[2]=(o*n-s*a)*x,e[3]=d*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return er("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Lh.makeScale(e,t)),this}rotate(e){return er("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Lh.makeRotation(-e)),this}translate(e,t){return er("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Lh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Lh=new Ke,mf=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gf=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bg(){let i={enabled:!0,workingColorSpace:Un,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Mt&&(s.r=ss(s.r),s.g=ss(s.g),s.b=ss(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Mt&&(s.r=Ur(s.r),s.g=Ur(s.g),s.b=Ur(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===fs?Ha:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return er("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return er("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Un]:{primaries:e,whitePoint:n,transfer:Ha,toXYZ:mf,fromXYZ:gf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Lt},outputColorSpaceConfig:{drawingBufferColorSpace:Lt}},[Lt]:{primaries:e,whitePoint:n,transfer:Mt,toXYZ:mf,fromXYZ:gf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Lt}}}),i}var Ze=Bg();function ss(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ur(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Sr,El=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Sr===void 0&&(Sr=Hr("canvas")),Sr.width=e.width,Sr.height=e.height;let s=Sr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Sr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Hr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ss(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ss(t[n]/255)*255):t[n]=ss(t[n]);return{data:t,width:e.width,height:e.height}}else return ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},zg=0,Vr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:zg++}),this.uuid=Ti(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Dh(s[a].image)):r.push(Dh(s[a]))}else r=Dh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Dh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?El.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ze("Texture: Unable to serialize Texture."),{})}var Hg=0,Fh=new U,un=class i extends Ui{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ui,s=ui,r=rn,a=Ai,o=ai,l=Jn,c=i.DEFAULT_ANISOTROPY,h=fs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hg++}),this.uuid=Ti(),this.name="",this.source=new Vr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Fh).x}get height(){return this.source.getSize(Fh).y}get depth(){return this.source.getSize(Fh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ze(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ii:e.x=e.x-Math.floor(e.x);break;case ui:e.x=e.x<0?0:1;break;case Br:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ii:e.y=e.y-Math.floor(e.y);break;case ui:e.y=e.y<0?0:1;break;case Br:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=bu;un.DEFAULT_ANISOTROPY=1;var At=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,_=(f+1)/2,w=(m+1)/2,T=(h+d)/4,A=(u+x)/4,S=(p+g)/4;return M>_&&M>w?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=T/n,r=A/n):_>w?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=T/s,r=S/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=A/r,s=S/r),this.set(n,s,r,t),this}let y=Math.sqrt((g-p)*(g-p)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(g-p)/y,this.y=(u-x)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this.w=ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this.w=ct(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Al=class extends Ui{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new un(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Vr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jt=class extends Al{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Va=class extends un{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Rl=class extends un{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Ye=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,l,c,h,u,d,f,p,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,d,f,p,x,g)}set(e,t,n,s,r,a,o,l,c,h,u,d,f,p,x,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/wr.setFromMatrixColumn(e,0).length(),r=1/wr.setFromMatrixColumn(e,1).length(),a=1/wr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,p=o*h,x=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+p*c,t[5]=d-x*c,t[9]=-o*l,t[2]=x-d*c,t[6]=p+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,p=c*h,x=c*u;t[0]=d+x*o,t[4]=p*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-p,t[6]=x+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,p=c*h,x=c*u;t[0]=d-x*o,t[4]=-a*u,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,p=o*h,x=o*u;t[0]=l*h,t[4]=p*c-f,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=f*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,p=o*l,x=o*c;t[0]=l*h,t[4]=x-d*u,t[8]=p*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+p,t[10]=d-x*u}else if(e.order==="XZY"){let d=a*l,f=a*c,p=o*l,x=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=a*h,t[9]=f*u-p,t[2]=p*u-f,t[6]=o*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gg,e,Vg)}lookAt(e,t,n){let s=this.elements;return ti.subVectors(e,t),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Ms.crossVectors(n,ti),Ms.lengthSq()===0&&(Math.abs(n.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Ms.crossVectors(n,ti)),Ms.normalize(),qo.crossVectors(ti,Ms),s[0]=Ms.x,s[4]=qo.x,s[8]=ti.x,s[1]=Ms.y,s[5]=qo.y,s[9]=ti.y,s[2]=Ms.z,s[6]=qo.z,s[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],x=n[6],g=n[10],m=n[14],y=n[3],M=n[7],_=n[11],w=n[15],T=s[0],A=s[4],S=s[8],E=s[12],C=s[1],L=s[5],N=s[9],V=s[13],O=s[2],W=s[6],K=s[10],Q=s[14],re=s[3],$=s[7],ae=s[11],he=s[15];return r[0]=a*T+o*C+l*O+c*re,r[4]=a*A+o*L+l*W+c*$,r[8]=a*S+o*N+l*K+c*ae,r[12]=a*E+o*V+l*Q+c*he,r[1]=h*T+u*C+d*O+f*re,r[5]=h*A+u*L+d*W+f*$,r[9]=h*S+u*N+d*K+f*ae,r[13]=h*E+u*V+d*Q+f*he,r[2]=p*T+x*C+g*O+m*re,r[6]=p*A+x*L+g*W+m*$,r[10]=p*S+x*N+g*K+m*ae,r[14]=p*E+x*V+g*Q+m*he,r[3]=y*T+M*C+_*O+w*re,r[7]=y*A+M*L+_*W+w*$,r[11]=y*S+M*N+_*K+w*ae,r[15]=y*E+M*V+_*Q+w*he,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],p=e[3],x=e[7],g=e[11],m=e[15],y=l*f-c*d,M=o*f-c*u,_=o*d-l*u,w=a*f-c*h,T=a*d-l*h,A=a*u-o*h;return t*(x*y-g*M+m*_)-n*(p*y-g*w+m*T)+s*(p*M-x*w+m*A)-r*(p*_-x*T+g*A)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],p=e[12],x=e[13],g=e[14],m=e[15],y=t*o-n*a,M=t*l-s*a,_=t*c-r*a,w=n*l-s*o,T=n*c-r*o,A=s*c-r*l,S=h*x-u*p,E=h*g-d*p,C=h*m-f*p,L=u*g-d*x,N=u*m-f*x,V=d*m-f*g,O=y*V-M*N+_*L+w*C-T*E+A*S;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/O;return e[0]=(o*V-l*N+c*L)*W,e[1]=(s*N-n*V-r*L)*W,e[2]=(x*A-g*T+m*w)*W,e[3]=(d*T-u*A-f*w)*W,e[4]=(l*C-a*V-c*E)*W,e[5]=(t*V-s*C+r*E)*W,e[6]=(g*_-p*A-m*M)*W,e[7]=(h*A-d*_+f*M)*W,e[8]=(a*N-o*C+c*S)*W,e[9]=(n*C-t*N-r*S)*W,e[10]=(p*T-x*_+m*y)*W,e[11]=(u*_-h*T-f*y)*W,e[12]=(o*E-a*L-l*S)*W,e[13]=(t*L-n*E+s*S)*W,e[14]=(x*M-p*w-g*y)*W,e[15]=(h*w-u*M+d*y)*W,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,p=r*u,x=a*h,g=a*u,m=o*u,y=l*c,M=l*h,_=l*u,w=n.x,T=n.y,A=n.z;return s[0]=(1-(x+m))*w,s[1]=(f+_)*w,s[2]=(p-M)*w,s[3]=0,s[4]=(f-_)*T,s[5]=(1-(d+m))*T,s[6]=(g+y)*T,s[7]=0,s[8]=(p+M)*A,s[9]=(g-y)*A,s[10]=(1-(d+x))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=wr.set(s[0],s[1],s[2]).length(),o=wr.set(s[4],s[5],s[6]).length(),l=wr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),vi.copy(this);let c=1/a,h=1/o,u=1/l;return vi.elements[0]*=c,vi.elements[1]*=c,vi.elements[2]*=c,vi.elements[4]*=h,vi.elements[5]*=h,vi.elements[6]*=h,vi.elements[8]*=u,vi.elements[9]*=u,vi.elements[10]*=u,t.setFromRotationMatrix(vi),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=wi,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),p,x;if(l)p=r/(a-r),x=a*r/(a-r);else if(o===wi)p=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===zr)p=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=wi,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),p,x;if(l)p=1/(a-r),x=a/(a-r);else if(o===wi)p=-2/(a-r),x=-(a+r)/(a-r);else if(o===zr)p=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},wr=new U,vi=new Ye,Gg=new U(0,0,0),Vg=new U(1,1,1),Ms=new U,qo=new U,ti=new U,xf=new Ye,bf=new Ln,Oi=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ct(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ct(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return xf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bf.setFromEuler(this),this.setFromQuaternion(bf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Oi.DEFAULT_ORDER="XYZ";var Wa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Wg=0,vf=new U,Tr=new Ln,$i=new Ye,Xo=new U,Ia=new U,qg=new U,Xg=new Ln,_f=new U(1,0,0),yf=new U(0,1,0),Mf=new U(0,0,1),Sf={type:"added"},jg={type:"removed"},Er={type:"childadded",child:null},Nh={type:"childremoved",child:null},zt=class i extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wg++}),this.uuid=Ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new U,t=new Oi,n=new Ln,s=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ye},normalMatrix:{value:new Ke}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Tr.setFromAxisAngle(e,t),this.quaternion.multiply(Tr),this}rotateOnWorldAxis(e,t){return Tr.setFromAxisAngle(e,t),this.quaternion.premultiply(Tr),this}rotateX(e){return this.rotateOnAxis(_f,e)}rotateY(e){return this.rotateOnAxis(yf,e)}rotateZ(e){return this.rotateOnAxis(Mf,e)}translateOnAxis(e,t){return vf.copy(e).applyQuaternion(this.quaternion),this.position.add(vf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_f,e)}translateY(e){return this.translateOnAxis(yf,e)}translateZ(e){return this.translateOnAxis(Mf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xo.copy(e):Xo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ia.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(Ia,Xo,this.up):$i.lookAt(Xo,Ia,this.up),this.quaternion.setFromRotationMatrix($i),s&&($i.extractRotation(s.matrixWorld),Tr.setFromRotationMatrix($i),this.quaternion.premultiply(Tr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Xe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Sf),Er.child=e,this.dispatchEvent(Er),Er.child=null):Xe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jg),Nh.child=e,this.dispatchEvent(Nh),Nh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$i.multiply(e.parent.matrixWorld)),e.applyMatrix4($i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Sf),Er.child=e,this.dispatchEvent(Er),Er.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ia,e,qg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ia,Xg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};zt.DEFAULT_UP=new U(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var yt=class extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Kg={type:"move"},Wr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Kg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new yt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Pp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ss={h:0,s:0,l:0},jo={h:0,s:0,l:0};function kh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var be=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ze.workingColorSpace){if(e=Ru(e,1),t=ct(t,0,1),n=ct(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=kh(a,r,e+1/3),this.g=kh(a,r,e),this.b=kh(a,r,e-1/3)}return Ze.colorSpaceToWorking(this,s),this}setStyle(e,t=Lt){function n(r){r!==void 0&&parseFloat(r)<1&&ze("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ze("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Lt){let n=Pp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ss(e.r),this.g=ss(e.g),this.b=ss(e.b),this}copyLinearToSRGB(e){return this.r=Ur(e.r),this.g=Ur(e.g),this.b=Ur(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return Ze.workingToColorSpace(In.copy(this),e),Math.round(ct(In.r*255,0,255))*65536+Math.round(ct(In.g*255,0,255))*256+Math.round(ct(In.b*255,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(In.copy(this),t);let n=In.r,s=In.g,r=In.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(In.copy(this),t),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=Lt){Ze.workingToColorSpace(In.copy(this),e);let t=In.r,n=In.g,s=In.b;return e!==Lt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ss),this.setHSL(Ss.h+e,Ss.s+t,Ss.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ss),e.getHSL(jo);let n=za(Ss.h,jo.h,t),s=za(Ss.s,jo.s,t),r=za(Ss.l,jo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},In=new be;be.NAMES=Pp;var qr=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new be(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Cs=class extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oi,this.environmentIntensity=1,this.environmentRotation=new Oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},_i=new U,Qi=new U,Uh=new U,es=new U,Ar=new U,Rr=new U,wf=new U,Oh=new U,Bh=new U,zh=new U,Hh=new At,Gh=new At,Vh=new At,Rs=class i{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),_i.subVectors(e,t),s.cross(_i);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){_i.subVectors(s,t),Qi.subVectors(n,t),Uh.subVectors(e,t);let a=_i.dot(_i),o=_i.dot(Qi),l=_i.dot(Uh),c=Qi.dot(Qi),h=Qi.dot(Uh),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,p=(a*h-o*l)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,es)===null?!1:es.x>=0&&es.y>=0&&es.x+es.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,es)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,es.x),l.addScaledVector(a,es.y),l.addScaledVector(o,es.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Hh.setScalar(0),Gh.setScalar(0),Vh.setScalar(0),Hh.fromBufferAttribute(e,t),Gh.fromBufferAttribute(e,n),Vh.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Hh,r.x),a.addScaledVector(Gh,r.y),a.addScaledVector(Vh,r.z),a}static isFrontFacing(e,t,n,s){return _i.subVectors(n,t),Qi.subVectors(e,t),_i.cross(Qi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _i.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),_i.cross(Qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ar.subVectors(s,n),Rr.subVectors(r,n),Oh.subVectors(e,n);let l=Ar.dot(Oh),c=Rr.dot(Oh);if(l<=0&&c<=0)return t.copy(n);Bh.subVectors(e,s);let h=Ar.dot(Bh),u=Rr.dot(Bh);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Ar,a);zh.subVectors(e,r);let f=Ar.dot(zh),p=Rr.dot(zh);if(p>=0&&f<=p)return t.copy(r);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Rr,o);let g=h*p-f*u;if(g<=0&&u-h>=0&&f-p>=0)return wf.subVectors(r,s),o=(u-h)/(u-h+(f-p)),t.copy(s).addScaledVector(wf,o);let m=1/(g+x+d);return a=x*m,o=d*m,t.copy(n).addScaledVector(Ar,a).addScaledVector(Rr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},On=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(yi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(yi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=yi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,yi):yi.fromBufferAttribute(r,a),yi.applyMatrix4(e.matrixWorld),this.expandByPoint(yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ko.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ko.copy(n.boundingBox)),Ko.applyMatrix4(e.matrixWorld),this.union(Ko)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(La),Yo.subVectors(this.max,La),Cr.subVectors(e.a,La),Pr.subVectors(e.b,La),Ir.subVectors(e.c,La),ws.subVectors(Pr,Cr),Ts.subVectors(Ir,Pr),Js.subVectors(Cr,Ir);let t=[0,-ws.z,ws.y,0,-Ts.z,Ts.y,0,-Js.z,Js.y,ws.z,0,-ws.x,Ts.z,0,-Ts.x,Js.z,0,-Js.x,-ws.y,ws.x,0,-Ts.y,Ts.x,0,-Js.y,Js.x,0];return!Wh(t,Cr,Pr,Ir,Yo)||(t=[1,0,0,0,1,0,0,0,1],!Wh(t,Cr,Pr,Ir,Yo))?!1:(Jo.crossVectors(ws,Ts),t=[Jo.x,Jo.y,Jo.z],Wh(t,Cr,Pr,Ir,Yo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ts[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ts[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ts[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ts[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ts[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ts[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ts[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ts[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ts),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ts=[new U,new U,new U,new U,new U,new U,new U,new U],yi=new U,Ko=new On,Cr=new U,Pr=new U,Ir=new U,ws=new U,Ts=new U,Js=new U,La=new U,Yo=new U,Jo=new U,Zs=new U;function Wh(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Zs.fromArray(i,r);let o=s.x*Math.abs(Zs.x)+s.y*Math.abs(Zs.y)+s.z*Math.abs(Zs.z),l=e.dot(Zs),c=t.dot(Zs),h=n.dot(Zs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var hn=new U,Zo=new Oe,Yg=0,St=class extends Ui{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Eu,this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Zo.fromBufferAttribute(this,t),Zo.applyMatrix3(e),this.setXY(t,Zo.x,Zo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix3(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Si(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ft(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Si(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Si(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Si(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Si(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),s=Ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),s=Ft(s,this.array),r=Ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var qa=class extends St{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Xa=class extends St{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var $e=class extends St{constructor(e,t,n){super(new Float32Array(e),t,n)}},Jg=new On,Da=new U,qh=new U,Xn=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Jg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Da.subVectors(e,this.center);let t=Da.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Da,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Da.copy(e.center).add(qh)),this.expandByPoint(Da.copy(e.center).sub(qh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Zg=0,hi=new Ye,Xh=new zt,Lr=new U,ni=new On,Fa=new On,bn=new U,wt=class i extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zg++}),this.uuid=Ti(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yg(e)?Xa:qa)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return hi.makeRotationFromQuaternion(e),this.applyMatrix4(hi),this}rotateX(e){return hi.makeRotationX(e),this.applyMatrix4(hi),this}rotateY(e){return hi.makeRotationY(e),this.applyMatrix4(hi),this}rotateZ(e){return hi.makeRotationZ(e),this.applyMatrix4(hi),this}translate(e,t,n){return hi.makeTranslation(e,t,n),this.applyMatrix4(hi),this}scale(e,t,n){return hi.makeScale(e,t,n),this.applyMatrix4(hi),this}lookAt(e){return Xh.lookAt(e),Xh.updateMatrix(),this.applyMatrix4(Xh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lr).negate(),this.translate(Lr.x,Lr.y,Lr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new $e(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new On);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];ni.setFromBufferAttribute(r),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let n=this.boundingSphere.center;if(ni.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Fa.setFromBufferAttribute(o),this.morphTargetsRelative?(bn.addVectors(ni.min,Fa.min),ni.expandByPoint(bn),bn.addVectors(ni.max,Fa.max),ni.expandByPoint(bn)):(ni.expandByPoint(Fa.min),ni.expandByPoint(Fa.max))}ni.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)bn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(bn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)bn.fromBufferAttribute(o,c),l&&(Lr.fromBufferAttribute(e,c),bn.add(Lr)),s=Math.max(s,n.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new St(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let S=0;S<n.count;S++)o[S]=new U,l[S]=new U;let c=new U,h=new U,u=new U,d=new Oe,f=new Oe,p=new Oe,x=new U,g=new U;function m(S,E,C){c.fromBufferAttribute(n,S),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,C),d.fromBufferAttribute(r,S),f.fromBufferAttribute(r,E),p.fromBufferAttribute(r,C),h.sub(c),u.sub(c),f.sub(d),p.sub(d);let L=1/(f.x*p.y-p.x*f.y);isFinite(L)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(L),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(L),o[S].add(x),o[E].add(x),o[C].add(x),l[S].add(g),l[E].add(g),l[C].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let S=0,E=y.length;S<E;++S){let C=y[S],L=C.start,N=C.count;for(let V=L,O=L+N;V<O;V+=3)m(e.getX(V+0),e.getX(V+1),e.getX(V+2))}let M=new U,_=new U,w=new U,T=new U;function A(S){w.fromBufferAttribute(s,S),T.copy(w);let E=o[S];M.copy(E),M.sub(w.multiplyScalar(w.dot(E))).normalize(),_.crossVectors(T,E);let L=_.dot(l[S])<0?-1:1;a.setXYZW(S,M.x,M.y,M.z,L)}for(let S=0,E=y.length;S<E;++S){let C=y[S],L=C.start,N=C.count;for(let V=L,O=L+N;V<O;V+=3)A(e.getX(V+0)),A(e.getX(V+1)),A(e.getX(V+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new St(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new U,r=new U,a=new U,o=new U,l=new U,c=new U,h=new U,u=new U;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)bn.fromBufferAttribute(e,t),bn.normalize(),e.setXYZ(t,bn.x,bn.y,bn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let m=0;m<h;m++)d[p++]=c[f++]}return new St(d,h,u)}if(this.index===null)return ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Eu,this.updateRanges=[],this.version=0,this.uuid=Ti()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},kn=new U,jr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)kn.fromBufferAttribute(this,t),kn.applyMatrix4(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kn.fromBufferAttribute(this,t),kn.applyNormalMatrix(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kn.fromBufferAttribute(this,t),kn.transformDirection(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Si(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Si(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Si(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Si(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Si(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),s=Ft(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),s=Ft(s,this.array),r=Ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ga("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new St(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ga("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},jh=new U,$g=new U,Qg=new Ke,Mi=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=jh.subVectors(n,t).cross($g.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(jh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Qg.getNormalMatrix(e),s=this.coplanarPoint(jh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},e0=0,Bn=class extends Ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=Ti(),this.name="",this.type="Material",this.blending=Ds,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gu,this.blendDst=xu,this.blendEquation=ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=Or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xl,this.stencilZFail=xl,this.stencilZPass=xl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ze(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new be().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Mi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Oe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Oe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var ns=new U,Kh=new U,$o=new U,Qo=new U,sr=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ns)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ns.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ns.copy(this.origin).addScaledVector(this.direction,t),ns.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Kh.copy(e).add(t).multiplyScalar(.5),$o.copy(t).sub(e).normalize(),Qo.copy(this.origin).sub(Kh);let r=e.distanceTo(t)*.5,a=-this.direction.dot($o),o=Qo.dot(this.direction),l=-Qo.dot($o),c=Qo.lengthSq(),h=Math.abs(1-a*a),u,d,f,p;if(h>0)if(u=a*l-o,d=a*o-l,p=r*h,u>=0)if(d>=-p)if(d<=p){let x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Kh).addScaledVector($o,d),f}intersectSphere(e,t){if(e.radius<0)return null;ns.subVectors(e.center,this.origin);let n=ns.dot(this.direction),s=ns.dot(ns)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ns)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,x=t.y-a.y,g=t.z-a.z,m=n.x-a.x,y=n.y-a.y,M=n.z-a.z,_=Math.abs(l),w=Math.abs(c),T=Math.abs(h),A,S,E,C,L,N,V,O,W,K,Q,re;if(_>=w&&_>=T?(E=l,N=u,W=p,re=m,l>=0?(A=c,S=h,C=d,L=f,V=x,O=g,K=y,Q=M):(A=h,S=c,C=f,L=d,V=g,O=x,K=M,Q=y)):w>=T?(E=c,N=d,W=x,re=y,c>=0?(A=h,S=l,C=f,L=u,V=g,O=p,K=M,Q=m):(A=l,S=h,C=u,L=f,V=p,O=g,K=m,Q=M)):(E=h,N=f,W=g,re=M,h>=0?(A=l,S=c,C=u,L=d,V=p,O=x,K=m,Q=y):(A=c,S=l,C=d,L=u,V=x,O=p,K=y,Q=m)),E===0)return null;let $=A/E,ae=S/E,he=1/E,Ue=C-$*N,Pe=L-ae*N,_t=V-$*W,et=O-ae*W,ot=K-$*re,te=Q-ae*re,ue=ot*et-te*_t,Ae=Ue*te-Pe*ot,ye=_t*Pe-et*Ue;if(s){if(ue<0||Ae<0||ye<0)return null}else if((ue<0||Ae<0||ye<0)&&(ue>0||Ae>0||ye>0))return null;let ve=ue+Ae+ye;if(ve===0)return null;let Ve=he*(ue*N+Ae*W+ye*re);return(ve>0?Ve<0:Ve>0)?null:this.at(Ve/ve,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},rt=class extends Bn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=Xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Tf=new Ye,$s=new sr,el=new Xn,Ef=new U,tl=new U,nl=new U,il=new U,Yh=new U,sl=new U,Af=new U,rl=new U,xe=class extends zt{constructor(e=new wt,t=new rt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){sl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Yh.fromBufferAttribute(u,e),a?sl.addScaledVector(Yh,h):sl.addScaledVector(Yh.sub(t),h))}t.add(sl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),el.copy(n.boundingSphere),el.applyMatrix4(r),$s.copy(e.ray).recast(e.near),!(el.containsPoint($s.origin)===!1&&($s.intersectSphere(el,Ef)===null||$s.origin.distanceToSquared(Ef)>(e.far-e.near)**2))&&(Tf.copy(r).invert(),$s.copy(e.ray).applyMatrix4(Tf),!(n.boundingBox!==null&&$s.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,$s)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=a[g.materialIndex],y=Math.max(g.start,f.start),M=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let _=y,w=M;_<w;_+=3){let T=o.getX(_),A=o.getX(_+1),S=o.getX(_+2);s=al(this,m,e,n,c,h,u,T,A,S),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let y=o.getX(g),M=o.getX(g+1),_=o.getX(g+2);s=al(this,a,e,n,c,h,u,y,M,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=a[g.materialIndex],y=Math.max(g.start,f.start),M=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let _=y,w=M;_<w;_+=3){let T=_,A=_+1,S=_+2;s=al(this,m,e,n,c,h,u,T,A,S),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let y=g,M=g+1,_=g+2;s=al(this,a,e,n,c,h,u,y,M,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function t0(i,e,t,n,s,r,a,o){let l;if(e.side===dn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Vi,o),l===null)return null;rl.copy(o),rl.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(rl);return c<t.near||c>t.far?null:{distance:c,point:rl.clone(),object:i}}function al(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,tl),i.getVertexPosition(l,nl),i.getVertexPosition(c,il);let h=t0(i,e,t,n,tl,nl,il,Af);if(h){let u=new U;Rs.getBarycoord(Af,tl,nl,il,u),s&&(h.uv=Rs.getInterpolatedAttribute(s,o,l,c,u,new Oe)),r&&(h.uv1=Rs.getInterpolatedAttribute(r,o,l,c,u,new Oe)),a&&(h.normal=Rs.getInterpolatedAttribute(a,o,l,c,u,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new U,materialIndex:0};Rs.getNormal(tl,nl,il,d.normal),h.face=d,h.barycoord=u}return h}var Na=new At,Rf=new At,Cf=new At,n0=new At,Pf=new Ye,ol=new U,Jh=new Xn,If=new Ye,Zh=new sr,ja=class extends xe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=tu,this.bindMatrix=new Ye,this.bindMatrixInverse=new Ye,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new On),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ol),this.boundingBox.expandByPoint(ol)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Xn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ol),this.boundingSphere.expandByPoint(ol)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Jh.copy(this.boundingSphere),Jh.applyMatrix4(s),e.ray.intersectsSphere(Jh)!==!1&&(If.copy(s).invert(),Zh.copy(e.ray).applyMatrix4(If),!(this.boundingBox!==null&&Zh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Zh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new At,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===tu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===mp?this.bindMatrixInverse.copy(this.bindMatrix).invert():ze("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Rf.fromBufferAttribute(s.attributes.skinIndex,e),Cf.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Na.copy(t),t.set(0,0,0,0)):(Na.set(...t,1),t.set(0,0,0)),Na.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=Cf.getComponent(r);if(a!==0){let o=Rf.getComponent(r);Pf.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(n0.copy(Na).applyMatrix4(Pf),a)}}return t.isVector4&&(t.w=Na.w),t.applyMatrix4(this.bindMatrixInverse)}},Kr=class extends zt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Yr=class extends un{constructor(e=null,t=1,n=1,s,r,a,o,l,c=sn,h=sn,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Lf=new Ye,i0=new Ye,Ka=class i{constructor(e=[],t=[]){this.uuid=Ti(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){ze("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ye)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ye;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:i0;Lf.multiplyMatrices(o,t[r]),Lf.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Yr(t,e,e,ai,ri);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(ze("Skeleton: No bone found with UUID:",r),a=new Kr),this.bones.push(a),this.boneInverses.push(new Ye().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},jn=class extends St{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Dr=new Ye,Df=new Ye,ll=[],Ff=new On,s0=new Ye,ka=new xe,Ua=new Xn,rs=class extends xe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new jn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,s0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new On),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Dr),Ff.copy(e.boundingBox).applyMatrix4(Dr),this.boundingBox.union(Ff)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Dr),Ua.copy(e.boundingSphere).applyMatrix4(Dr),this.boundingSphere.union(Ua)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(ka.geometry=this.geometry,ka.material=this.material,ka.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ua.copy(this.boundingSphere),Ua.applyMatrix4(n),e.ray.intersectsSphere(Ua)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Dr),Df.multiplyMatrices(n,Dr),ka.matrixWorld=Df,ka.raycast(e,ll);for(let a=0,o=ll.length;a<o;a++){let l=ll[a];l.instanceId=r,l.object=this,t.push(l)}ll.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new jn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Yr(new Float32Array(s*this.count),s,this.count,Ql,ri));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Qs=new Xn,r0=new Oe(.5,.5),cl=new U,Jr=class{constructor(e=new Mi,t=new Mi,n=new Mi,s=new Mi,r=new Mi,a=new Mi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=wi,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],x=r[9],g=r[10],m=r[11],y=r[12],M=r[13],_=r[14],w=r[15];if(s[0].setComponents(c-a,f-h,m-p,w-y).normalize(),s[1].setComponents(c+a,f+h,m+p,w+y).normalize(),s[2].setComponents(c+o,f+u,m+x,w+M).normalize(),s[3].setComponents(c-o,f-u,m-x,w-M).normalize(),n)s[4].setComponents(l,d,g,_).normalize(),s[5].setComponents(c-l,f-d,m-g,w-_).normalize();else if(s[4].setComponents(c-l,f-d,m-g,w-_).normalize(),t===wi)s[5].setComponents(c+l,f+d,m+g,w+_).normalize();else if(t===zr)s[5].setComponents(l,d,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qs)}intersectsSprite(e){Qs.center.set(0,0,0);let t=r0.distanceTo(e.center);return Qs.radius=.7071067811865476+t,Qs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(cl.x=s.normal.x>0?e.max.x:e.min.x,cl.y=s.normal.y>0?e.max.y:e.min.y,cl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(cl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Zr=class extends Bn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Cl=new U,Pl=new U,Nf=new Ye,Oa=new sr,hl=new Xn,$h=new U,kf=new U,rr=class extends zt{constructor(e=new wt,t=new Zr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Cl.fromBufferAttribute(t,s-1),Pl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Cl.distanceTo(Pl);e.setAttribute("lineDistance",new $e(n,1))}else ze("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hl.copy(n.boundingSphere),hl.applyMatrix4(s),hl.radius+=r,e.ray.intersectsSphere(hl)===!1)return;Nf.copy(s).invert(),Oa.copy(e.ray).applyMatrix4(Nf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let x=f,g=p-1;x<g;x+=c){let m=h.getX(x),y=h.getX(x+1),M=ul(this,e,Oa,l,m,y,x);M&&t.push(M)}if(this.isLineLoop){let x=h.getX(p-1),g=h.getX(f),m=ul(this,e,Oa,l,x,g,p-1);m&&t.push(m)}}else{let f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let x=f,g=p-1;x<g;x+=c){let m=ul(this,e,Oa,l,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){let x=ul(this,e,Oa,l,p-1,f,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ul(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(Cl.fromBufferAttribute(o,s),Pl.fromBufferAttribute(o,r),t.distanceSqToSegment(Cl,Pl,$h,kf)>n)return;$h.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo($h);if(!(c<e.near||c>e.far))return{distance:c,point:kf.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Uf=new U,Of=new U,ar=class extends rr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Uf.fromBufferAttribute(t,s),Of.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Uf.distanceTo(Of);e.setAttribute("lineDistance",new $e(n,1))}else ze("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ya=class extends rr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},$r=class extends Bn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Bf=new Ye,au=new sr,dl=new Xn,fl=new U,Ps=class extends zt{constructor(e=new wt,t=new $r){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),dl.copy(n.boundingSphere),dl.applyMatrix4(s),dl.radius+=r,e.ray.intersectsSphere(dl)===!1)return;Bf.copy(s).invert(),au.copy(e.ray).applyMatrix4(Bf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=d,x=f;p<x;p++){let g=c.getX(p);fl.fromBufferAttribute(u,g),zf(fl,g,l,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let p=d,x=f;p<x;p++)fl.fromBufferAttribute(u,p),zf(fl,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function zf(i,e,t,n,s,r,a){let o=au.distanceSqToPoint(i);if(o<t){let l=new U;au.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Ja=class extends un{constructor(e=[],t=Fs,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Dn=class extends un{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Is=class extends un{constructor(e,t,n=Ri,s,r,a,o=sn,l=sn,c,h=ki,u=1){if(h!==ki&&h!==Ns)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Vr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Il=class extends Is{constructor(e,t=Ri,n=Fs,s,r,a=sn,o=sn,l,c=ki){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Za=class extends un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Qe=class i extends wt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,n,t,e,a,r,0),p("z","y","x",1,-1,n,t,-e,a,r,1),p("x","z","y",1,1,e,n,t,s,a,2),p("x","z","y",1,-1,e,n,-t,s,a,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new $e(c,3)),this.setAttribute("normal",new $e(h,3)),this.setAttribute("uv",new $e(u,2));function p(x,g,m,y,M,_,w,T,A,S,E){let C=_/A,L=w/S,N=_/2,V=w/2,O=T/2,W=A+1,K=S+1,Q=0,re=0,$=new U;for(let ae=0;ae<K;ae++){let he=ae*L-V;for(let Ue=0;Ue<W;Ue++){let Pe=Ue*C-N;$[x]=Pe*y,$[g]=he*M,$[m]=O,c.push($.x,$.y,$.z),$[x]=0,$[g]=0,$[m]=T>0?1:-1,h.push($.x,$.y,$.z),u.push(Ue/A),u.push(1-ae/S),Q+=1}}for(let ae=0;ae<S;ae++)for(let he=0;he<A;he++){let Ue=d+he+W*ae,Pe=d+he+W*(ae+1),_t=d+(he+1)+W*(ae+1),et=d+(he+1)+W*ae;l.push(Ue,Pe,et),l.push(Pe,_t,et),re+=6}o.addGroup(f,re,E),f+=re,d+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},si=class i extends wt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+r,x=s+1,g=new U,m=new U;for(let y=0;y<=p;y++){let M=0,_=0,w=0,T=0;if(y<=n){let E=y/n,C=E*Math.PI/2;_=-h-e*Math.cos(C),w=e*Math.sin(C),T=-e*Math.cos(C),M=E*u}else if(y<=n+r){let E=(y-n)/r;_=-h+E*t,w=e,T=0,M=u+E*d}else{let E=(y-n-r)/n,C=E*Math.PI/2;_=h+e*Math.sin(C),w=e*Math.cos(C),T=e*Math.sin(C),M=u+d+E*u}let A=Math.max(0,Math.min(1,M/f)),S=0;y===0?S=.5/s:y===p&&(S=-.5/s);for(let E=0;E<=s;E++){let C=E/s,L=C*Math.PI*2,N=Math.sin(L),V=Math.cos(L);m.x=-w*V,m.y=_,m.z=w*N,o.push(m.x,m.y,m.z),g.set(-w*V,T,w*N),g.normalize(),l.push(g.x,g.y,g.z),c.push(C+S,A)}if(y>0){let E=(y-1)*x;for(let C=0;C<s;C++){let L=E+C,N=E+C+1,V=y*x+C,O=y*x+C+1;a.push(L,N,V),a.push(N,O,V)}}}this.setIndex(a),this.setAttribute("position",new $e(o,3)),this.setAttribute("normal",new $e(l,3)),this.setAttribute("uv",new $e(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},or=class i extends wt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new U,h=new Oe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new $e(a,3)),this.setAttribute("normal",new $e(o,3)),this.setAttribute("uv",new $e(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},yn=class i extends wt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],p=0,x=[],g=n/2,m=0;y(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new $e(u,3)),this.setAttribute("normal",new $e(d,3)),this.setAttribute("uv",new $e(f,2));function y(){let _=new U,w=new U,T=0,A=(t-e)/n;for(let S=0;S<=r;S++){let E=[],C=S/r,L=C*(t-e)+e;for(let N=0;N<=s;N++){let V=N/s,O=V*l+o,W=Math.sin(O),K=Math.cos(O);w.x=L*W,w.y=-C*n+g,w.z=L*K,u.push(w.x,w.y,w.z),_.set(W,A,K).normalize(),d.push(_.x,_.y,_.z),f.push(V,1-C),E.push(p++)}x.push(E)}for(let S=0;S<s;S++)for(let E=0;E<r;E++){let C=x[E][S],L=x[E+1][S],N=x[E+1][S+1],V=x[E][S+1];(e>0||E!==0)&&(h.push(C,L,V),T+=3),(t>0||E!==r-1)&&(h.push(L,N,V),T+=3)}c.addGroup(m,T,0),m+=T}function M(_){let w=p,T=new Oe,A=new U,S=0,E=_===!0?e:t,C=_===!0?1:-1;for(let N=1;N<=s;N++)u.push(0,g*C,0),d.push(0,C,0),f.push(.5,.5),p++;let L=p;for(let N=0;N<=s;N++){let O=N/s*l+o,W=Math.cos(O),K=Math.sin(O);A.x=E*K,A.y=g*C,A.z=E*W,u.push(A.x,A.y,A.z),d.push(0,C,0),T.x=W*.5+.5,T.y=K*.5*C+.5,f.push(T.x,T.y),p++}for(let N=0;N<s;N++){let V=w+N,O=L+N;_===!0?h.push(O,O+1,V):h.push(O+1,O,V),S+=3}c.addGroup(m,S,_===!0?1:2),m+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Kn=class i extends yn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Qr=class i extends wt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new $e(r,3)),this.setAttribute("normal",new $e(r.slice(),3)),this.setAttribute("uv",new $e(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let M=new U,_=new U,w=new U;for(let T=0;T<t.length;T+=3)f(t[T+0],M),f(t[T+1],_),f(t[T+2],w),l(M,_,w,y)}function l(y,M,_,w){let T=w+1,A=[];for(let S=0;S<=T;S++){A[S]=[];let E=y.clone().lerp(_,S/T),C=M.clone().lerp(_,S/T),L=T-S;for(let N=0;N<=L;N++)N===0&&S===T?A[S][N]=E:A[S][N]=E.clone().lerp(C,N/L)}for(let S=0;S<T;S++)for(let E=0;E<2*(T-S)-1;E++){let C=Math.floor(E/2);E%2===0?(d(A[S][C+1]),d(A[S+1][C]),d(A[S][C])):(d(A[S][C+1]),d(A[S+1][C+1]),d(A[S+1][C]))}}function c(y){let M=new U;for(let _=0;_<r.length;_+=3)M.x=r[_+0],M.y=r[_+1],M.z=r[_+2],M.normalize().multiplyScalar(y),r[_+0]=M.x,r[_+1]=M.y,r[_+2]=M.z}function h(){let y=new U;for(let M=0;M<r.length;M+=3){y.x=r[M+0],y.y=r[M+1],y.z=r[M+2];let _=g(y)/2/Math.PI+.5,w=m(y)/Math.PI+.5;a.push(_,1-w)}p(),u()}function u(){for(let y=0;y<a.length;y+=6){let M=a[y+0],_=a[y+2],w=a[y+4],T=Math.max(M,_,w),A=Math.min(M,_,w);T>.9&&A<.1&&(M<.2&&(a[y+0]+=1),_<.2&&(a[y+2]+=1),w<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,M){let _=y*3;M.x=e[_+0],M.y=e[_+1],M.z=e[_+2]}function p(){let y=new U,M=new U,_=new U,w=new U,T=new Oe,A=new Oe,S=new Oe;for(let E=0,C=0;E<r.length;E+=9,C+=6){y.set(r[E+0],r[E+1],r[E+2]),M.set(r[E+3],r[E+4],r[E+5]),_.set(r[E+6],r[E+7],r[E+8]),T.set(a[C+0],a[C+1]),A.set(a[C+2],a[C+3]),S.set(a[C+4],a[C+5]),w.copy(y).add(M).add(_).divideScalar(3);let L=g(w);x(T,C+0,y,L),x(A,C+2,M,L),x(S,C+4,_,L)}}function x(y,M,_,w){w<0&&y.x===1&&(a[M]=y.x-1),_.x===0&&_.z===0&&(a[M]=w/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}},$a=class i extends Qr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Qa=class i extends Qr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var eo=class i extends Qr{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Qt=class i extends wt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,f=[],p=[],x=[],g=[];for(let m=0;m<h;m++){let y=m*d-a;for(let M=0;M<c;M++){let _=M*u-r;p.push(_,-y,0),x.push(0,0,1),g.push(M/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<o;y++){let M=y+c*m,_=y+c*(m+1),w=y+1+c*(m+1),T=y+1+c*m;f.push(M,_,T),f.push(_,w,T)}this.setIndex(f),this.setAttribute("position",new $e(p,3)),this.setAttribute("normal",new $e(x,3)),this.setAttribute("uv",new $e(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var zn=class i extends wt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new U,d=new U,f=[],p=[],x=[],g=[];for(let m=0;m<=n;m++){let y=[],M=m/n,_=a+M*o,w=e*Math.cos(_),T=Math.sqrt(e*e-w*w),A=0;m===0&&a===0?A=.5/t:m===n&&l===Math.PI&&(A=-.5/t);for(let S=0;S<=t;S++){let E=S/t,C=s+E*r;u.x=-T*Math.cos(C),u.y=w,u.z=T*Math.sin(C),p.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(E+A,1-M),y.push(c++)}h.push(y)}for(let m=0;m<n;m++)for(let y=0;y<t;y++){let M=h[m][y+1],_=h[m][y],w=h[m+1][y],T=h[m+1][y+1];(m!==0||a>0)&&f.push(M,_,T),(m!==n-1||l<Math.PI)&&f.push(_,w,T)}this.setIndex(f),this.setAttribute("position",new $e(p,3)),this.setAttribute("normal",new $e(x,3)),this.setAttribute("uv",new $e(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var lr=class i extends wt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],u=[],d=new U,f=new U,p=new U;for(let x=0;x<=n;x++){let g=a+x/n*o;for(let m=0;m<=s;m++){let y=m/s*r;f.x=(e+t*Math.cos(g))*Math.cos(y),f.y=(e+t*Math.cos(g))*Math.sin(y),f.z=t*Math.sin(g),c.push(f.x,f.y,f.z),d.x=e*Math.cos(y),d.y=e*Math.sin(y),p.subVectors(f,d).normalize(),h.push(p.x,p.y,p.z),u.push(m/s),u.push(x/n)}}for(let x=1;x<=n;x++)for(let g=1;g<=s;g++){let m=(s+1)*x+g-1,y=(s+1)*(x-1)+g-1,M=(s+1)*(x-1)+g,_=(s+1)*x+g;l.push(m,y,_),l.push(y,M,_)}this.setIndex(l),this.setAttribute("position",new $e(c,3)),this.setAttribute("normal",new $e(h,3)),this.setAttribute("uv",new $e(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function pr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Hf(s))s.isRenderTargetTexture?(ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Hf(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Fn(i){let e={};for(let t=0;t<i.length;t++){let n=pr(i[t]);for(let s in n)e[s]=n[s]}return e}function Hf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function a0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Pu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}var ps={clone:pr,merge:Fn},o0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,l0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Vt=class extends Bn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=o0,this.fragmentShader=l0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pr(e.uniforms),this.uniformsGroups=a0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new be().setHex(s.value);break;case"v2":this.uniforms[n].value=new Oe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new U().fromArray(s.value);break;case"v4":this.uniforms[n].value=new At().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ke().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ye().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ea=class extends Vt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Me=class extends Bn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mo,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},vn=class extends Me{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ct(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var to=class extends Bn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mo,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=Xl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ll=class extends Bn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Dl=class extends Bn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function As(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function bl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function c0(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Gf(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function h0(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var Bi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Fl=class extends Bi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:iu,endingEnd:iu}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case su:r=e,o=2*t-n;break;case ru:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case su:a=e,l=2*n-t;break;case ru:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(s-t),x=p*p,g=x*p,m=-d*g+2*d*x-d*p,y=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*p+1,M=(-1-f)*g+(1.5+f)*x+.5*p,_=f*g-f*x;for(let w=0;w!==o;++w)r[w]=m*a[h+w]+y*a[c+w]+M*a[l+w]+_*a[u+w];return r}},Nl=class extends Bi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},kl=class extends Bi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ul=class extends Bi{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-t)/(s-t),x=1-p;for(let g=0;g!==o;++g)r[g]=a[c+g]*x+a[l+g]*p;return r}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let x=a[c+p],g=a[l+p],m=f*d+p*2,y=u[m],M=u[m+1],_=e*d+p*2,w=h[_],T=h[_+1],A=d0(n,t,y,w,s);r[p]=Ip(A,x,M,T,g)}return r}};function Ip(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function u0(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function d0(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Ip(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=u0(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Yn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=As(t,this.TimeBufferType),this.values=As(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:As(e.times,Array),values:As(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),bl(e.settings)&&(n.settings={inTangents:As(e.settings.inTangents,Array),outTangents:As(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new kl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Nl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Fl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ul(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case tr:t=this.InterpolantFactoryMethodDiscrete;break;case nr:t=this.InterpolantFactoryMethodLinear;break;case gl:t=this.InterpolantFactoryMethodSmooth;break;case nu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ze("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return tr;case this.InterpolantFactoryMethodLinear:return nr;case this.InterpolantFactoryMethodSmooth:return gl;case this.InterpolantFactoryMethodBezier:return nu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;bl(this.settings)&&(Vf(this.settings.inTangents,e),Vf(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Xe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Xe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Xe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Xe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Mg(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Xe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===gl,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){let x=t[u+p];if(x!==t[d+p]||x!==t[f+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,bl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Vf(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Yn.prototype.ValueTypeName="";Yn.prototype.TimeBufferType=Float32Array;Yn.prototype.ValueBufferType=Float32Array;Yn.prototype.DefaultInterpolation=nr;var as=class extends Yn{constructor(e,t,n){super(e,t,n)}};as.prototype.ValueTypeName="bool";as.prototype.ValueBufferType=Array;as.prototype.DefaultInterpolation=tr;as.prototype.InterpolantFactoryMethodLinear=void 0;as.prototype.InterpolantFactoryMethodSmooth=void 0;var no=class extends Yn{constructor(e,t,n,s){super(e,t,n,s)}};no.prototype.ValueTypeName="color";var os=class extends Yn{constructor(e,t,n,s){super(e,t,n,s)}};os.prototype.ValueTypeName="number";var Ol=class extends Bi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Ln.slerpFlat(r,0,a,c-o,a,c,l);return r}},zi=class extends Yn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Ol(this.times,this.values,this.getValueSize(),e)}};zi.prototype.ValueTypeName="quaternion";zi.prototype.InterpolantFactoryMethodSmooth=void 0;var ls=class extends Yn{constructor(e,t,n){super(e,t,n)}};ls.prototype.ValueTypeName="string";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=tr;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;var cs=class extends Yn{constructor(e,t,n,s){super(e,t,n,s)}};cs.prototype.ValueTypeName="vector";var ta=class{constructor(e="",t=-1,n=[],s=gp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Ti(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(p0(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Yn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=c0(l);l=Gf(l,1,h),c=Gf(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new os(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function f0(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return os;case"vector":case"vector2":case"vector3":case"vector4":return cs;case"color":return no;case"quaternion":return zi;case"bool":case"boolean":return as;case"string":return ls}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function p0(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=f0(i.type);if(i.times===void 0){let n=[],s=[];h0(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),bl(i.settings)&&(t.settings={inTangents:As(i.settings.inTangents,Float32Array),outTangents:As(i.settings.outTangents,Float32Array)}),t}var Ni={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Wf(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Wf(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Wf(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Bl=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Lp=new Bl,Hi=class{constructor(e){this.manager=e!==void 0?e:Lp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Hi.DEFAULT_MATERIAL_NAME="__DEFAULT";var is={},ou=class extends Error{constructor(e,t){super(e),this.response=t}},na=class extends Hi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ni.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(is[e]!==void 0){is[e].push({onLoad:t,onProgress:n,onError:s});return}is[e]=[],is[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&ze("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=is[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0,x=0,g=new ReadableStream({start(m){y();function y(){u.read().then(({done:M,value:_})=>{if(M)m.close();else{x+=_.byteLength;let w=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:f});for(let T=0,A=h.length;T<A;T++){let S=h[T];S.onProgress&&S.onProgress(w)}m.enqueue(_),y()}},M=>{m.error(M)})}}});return new Response(g)}else throw new ou(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{Ni.add(`file:${e}`,c);let h=is[e];delete is[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=is[e];if(h===void 0)throw this.manager.itemError(e),c;delete is[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Fr=new WeakMap,zl=class extends Hi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Ni.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Fr.get(a);u===void 0&&(u=[],Fr.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=Hr("img");function l(){h(),t&&t(this);let u=Fr.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}Fr.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),Ni.remove(`image:${e}`);let d=Fr.get(this)||[];for(let f=0;f<d.length;f++){let p=d[f];p.onError&&p.onError(u)}Fr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ni.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var io=class extends Hi{constructor(e){super(e)}load(e,t,n,s){let r=new un,a=new zl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},cr=class extends zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new be(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ia=class extends cr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Qh=new Ye,qf=new U,Xf=new U,sa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.mapType=Jn,this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jr,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;qf.setFromMatrixPosition(e.matrixWorld),t.position.copy(qf),Xf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Qh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Qh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===zr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Qh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},pl=new U,ml=new Ln,Fi=new U,so=class extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(pl,ml,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pl,ml,Fi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(pl,ml,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pl,ml,Fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Es=new U,jf=new Oe,Kf=new Oe,nn=class extends so{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ir*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ba*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ir*2*Math.atan(Math.tan(Ba*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Es.x,Es.y).multiplyScalar(-e/Es.z),Es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Es.x,Es.y).multiplyScalar(-e/Es.z)}getViewSize(e,t){return this.getViewBounds(e,jf,Kf),t.subVectors(Kf,jf)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ba*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},lu=class extends sa{constructor(){super(new nn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=ir*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},di=class extends cr{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new lu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},cu=class extends sa{constructor(){super(new nn(90,1,.5,500)),this.isPointLightShadow=!0}},hs=class extends cr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new cu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Gi=class extends so{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},hu=class extends sa{constructor(){super(new Gi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ls=class extends cr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new hu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var us=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var eu=new WeakMap,ro=class extends Hi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&ze("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&ze("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Ni.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{eu.has(a)===!0?(s&&s(eu.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ni.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),eu.set(l,c),Ni.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Ni.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Nr=-90,kr=1,Hl=class extends zt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new nn(Nr,kr,e,t);s.layers=this.layers,this.add(s);let r=new nn(Nr,kr,e,t);r.layers=this.layers,this.add(r);let a=new nn(Nr,kr,e,t);a.layers=this.layers,this.add(a);let o=new nn(Nr,kr,e,t);o.layers=this.layers,this.add(o);let l=new nn(Nr,kr,e,t);l.layers=this.layers,this.add(l);let c=new nn(Nr,kr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===wi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===zr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Gl=class extends nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},ao=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=m0.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function m0(){this._document.hidden===!1&&this.reset()}var Iu="\\[\\]\\.:\\/",g0=new RegExp("["+Iu+"]","g"),Lu="[^"+Iu+"]",x0="[^"+Iu.replace("\\.","")+"]",b0=/((?:WC+[\/:])*)/.source.replace("WC",Lu),v0=/(WCOD+)?/.source.replace("WCOD",x0),_0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Lu),y0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Lu),M0=new RegExp("^"+b0+v0+_0+y0+"$"),S0=["material","materials","bones","map"],uu=class{constructor(e,t,n){let s=n||Gt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Gt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(g0,"")}static parseTrackName(e){let t=M0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);S0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ze("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Xe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Xe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Xe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Xe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Xe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Xe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Gt.Composite=uu;Gt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Gt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Gt.prototype.GetterByBindingType=[Gt.prototype._getValue_direct,Gt.prototype._getValue_array,Gt.prototype._getValue_arrayElement,Gt.prototype._getValue_toArray];Gt.prototype.SetterByBindingTypeAndVersioning=[[Gt.prototype._setValue_direct,Gt.prototype._setValue_direct_setNeedsUpdate,Gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_array,Gt.prototype._setValue_array_setNeedsUpdate,Gt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_arrayElement,Gt.prototype._setValue_arrayElement_setNeedsUpdate,Gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_fromArray,Gt.prototype._setValue_fromArray_setNeedsUpdate,Gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var MM=new Float32Array(1);var du=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function Du(i,e,t,n){let s=w0(n);switch(t){case Su:return i*e;case Ql:return i*e/s.components*s.byteLength;case ec:return i*e/s.components*s.byteLength;case ks:return i*e*2/s.components*s.byteLength;case tc:return i*e*2/s.components*s.byteLength;case wu:return i*e*3/s.components*s.byteLength;case ai:return i*e*4/s.components*s.byteLength;case nc:return i*e*4/s.components*s.byteLength;case mo:case go:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case xo:case bo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case sc:case ac:return Math.max(i,16)*Math.max(e,8)/4;case ic:case rc:return Math.max(i,8)*Math.max(e,8)/2;case oc:case lc:case hc:case uc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case cc:case vo:case dc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case pc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case mc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case gc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case xc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case bc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case vc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case _c:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case yc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Mc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Sc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case wc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Tc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ec:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ac:case Rc:case Cc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Pc:case Ic:return Math.ceil(i/4)*Math.ceil(e/4)*8;case _o:case Lc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function w0(i){switch(i){case Jn:case vu:return{byteLength:1,components:1};case oa:case _u:case fn:return{byteLength:2,components:1};case Zl:case $l:return{byteLength:2,components:4};case Ri:case Jl:case ri:return{byteLength:4,components:1};case yu:case Mu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function em(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function R0(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],x=u[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let x=u[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var C0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,P0=`#ifdef USE_ALPHAHASH
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
#endif`,I0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,L0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,D0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,F0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,N0=`#ifdef USE_AOMAP
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
#endif`,k0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,U0=`#ifdef USE_BATCHING
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
#endif`,O0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,B0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,z0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,H0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,G0=`#ifdef USE_IRIDESCENCE
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
#endif`,V0=`#ifdef USE_BUMPMAP
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
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,q0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,X0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,j0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,K0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Y0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,J0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Z0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,$0=`#define PI 3.141592653589793
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
} // validated`,Q0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ex=`vec3 transformedNormal = objectNormal;
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
#endif`,tx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ix=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rx="gl_FragColor = linearToOutputTexel( gl_FragColor );",ax=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ox=`#ifdef USE_ENVMAP
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
#endif`,lx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,cx=`#ifdef USE_ENVMAP
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
#endif`,hx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ux=`#ifdef USE_ENVMAP
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
#endif`,dx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,px=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gx=`#ifdef USE_GRADIENTMAP
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
}`,xx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_x=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,yx=`#ifdef USE_ENVMAP
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
#endif`,Mx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ex=`PhysicalMaterial material;
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
#endif`,Ax=`uniform sampler2D dfgLUT;
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
}`,Rx=`
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
#endif`,Cx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Px=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ix=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Lx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ux=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ox=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Bx=`#if defined( USE_POINTS_UV )
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
#endif`,zx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qx=`#ifdef USE_MORPHTARGETS
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
#endif`,Xx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Kx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Yx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,$x=`#ifdef USE_NORMALMAP
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
#endif`,Qx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ib=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ab=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ob=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ub=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,db=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pb=`float getShadowMask() {
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
}`,mb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gb=`#ifdef USE_SKINNING
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
#endif`,xb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bb=`#ifdef USE_SKINNING
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
#endif`,vb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_b=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sb=`#ifdef USE_TRANSMISSION
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
#endif`,wb=`#ifdef USE_TRANSMISSION
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
#endif`,Tb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Eb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ab=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Cb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pb=`uniform sampler2D t2D;
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
}`,Ib=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Db=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nb=`#include <common>
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
}`,kb=`#if DEPTH_PACKING == 3200
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
}`,Ub=`#define DISTANCE
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
}`,Ob=`#define DISTANCE
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
}`,Bb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hb=`uniform float scale;
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
}`,Gb=`uniform vec3 diffuse;
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
}`,Vb=`#include <common>
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
}`,Wb=`uniform vec3 diffuse;
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
}`,qb=`#define LAMBERT
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
}`,Xb=`#define LAMBERT
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
}`,jb=`#define MATCAP
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
}`,Kb=`#define MATCAP
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
}`,Yb=`#define NORMAL
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
}`,Jb=`#define NORMAL
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
}`,Zb=`#define PHONG
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
}`,$b=`#define PHONG
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
}`,Qb=`#define STANDARD
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
}`,ev=`#define STANDARD
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
}`,tv=`#define TOON
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
}`,nv=`#define TOON
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
}`,iv=`uniform float size;
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
}`,sv=`uniform vec3 diffuse;
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
}`,rv=`#include <common>
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
}`,av=`uniform vec3 color;
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
}`,ov=`uniform float rotation;
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
}`,lv=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:C0,alphahash_pars_fragment:P0,alphamap_fragment:I0,alphamap_pars_fragment:L0,alphatest_fragment:D0,alphatest_pars_fragment:F0,aomap_fragment:N0,aomap_pars_fragment:k0,batching_pars_vertex:U0,batching_vertex:O0,begin_vertex:B0,beginnormal_vertex:z0,bsdfs:H0,iridescence_fragment:G0,bumpmap_pars_fragment:V0,clipping_planes_fragment:W0,clipping_planes_pars_fragment:q0,clipping_planes_pars_vertex:X0,clipping_planes_vertex:j0,color_fragment:K0,color_pars_fragment:Y0,color_pars_vertex:J0,color_vertex:Z0,common:$0,cube_uv_reflection_fragment:Q0,defaultnormal_vertex:ex,displacementmap_pars_vertex:tx,displacementmap_vertex:nx,emissivemap_fragment:ix,emissivemap_pars_fragment:sx,colorspace_fragment:rx,colorspace_pars_fragment:ax,envmap_fragment:ox,envmap_common_pars_fragment:lx,envmap_pars_fragment:cx,envmap_pars_vertex:hx,envmap_physical_pars_fragment:yx,envmap_vertex:ux,fog_vertex:dx,fog_pars_vertex:fx,fog_fragment:px,fog_pars_fragment:mx,gradientmap_pars_fragment:gx,lightmap_pars_fragment:xx,lights_lambert_fragment:bx,lights_lambert_pars_fragment:vx,lights_pars_begin:_x,lights_toon_fragment:Mx,lights_toon_pars_fragment:Sx,lights_phong_fragment:wx,lights_phong_pars_fragment:Tx,lights_physical_fragment:Ex,lights_physical_pars_fragment:Ax,lights_fragment_begin:Rx,lights_fragment_maps:Cx,lights_fragment_end:Px,lightprobes_pars_fragment:Ix,logdepthbuf_fragment:Lx,logdepthbuf_pars_fragment:Dx,logdepthbuf_pars_vertex:Fx,logdepthbuf_vertex:Nx,map_fragment:kx,map_pars_fragment:Ux,map_particle_fragment:Ox,map_particle_pars_fragment:Bx,metalnessmap_fragment:zx,metalnessmap_pars_fragment:Hx,morphinstance_vertex:Gx,morphcolor_vertex:Vx,morphnormal_vertex:Wx,morphtarget_pars_vertex:qx,morphtarget_vertex:Xx,normal_fragment_begin:jx,normal_fragment_maps:Kx,normal_pars_fragment:Yx,normal_pars_vertex:Jx,normal_vertex:Zx,normalmap_pars_fragment:$x,clearcoat_normal_fragment_begin:Qx,clearcoat_normal_fragment_maps:eb,clearcoat_pars_fragment:tb,iridescence_pars_fragment:nb,opaque_fragment:ib,packing:sb,premultiplied_alpha_fragment:rb,project_vertex:ab,dithering_fragment:ob,dithering_pars_fragment:lb,roughnessmap_fragment:cb,roughnessmap_pars_fragment:hb,shadowmap_pars_fragment:ub,shadowmap_pars_vertex:db,shadowmap_vertex:fb,shadowmask_pars_fragment:pb,skinbase_vertex:mb,skinning_pars_vertex:gb,skinning_vertex:xb,skinnormal_vertex:bb,specularmap_fragment:vb,specularmap_pars_fragment:_b,tonemapping_fragment:yb,tonemapping_pars_fragment:Mb,transmission_fragment:Sb,transmission_pars_fragment:wb,uv_pars_fragment:Tb,uv_pars_vertex:Eb,uv_vertex:Ab,worldpos_vertex:Rb,background_vert:Cb,background_frag:Pb,backgroundCube_vert:Ib,backgroundCube_frag:Lb,cube_vert:Db,cube_frag:Fb,depth_vert:Nb,depth_frag:kb,distance_vert:Ub,distance_frag:Ob,equirect_vert:Bb,equirect_frag:zb,linedashed_vert:Hb,linedashed_frag:Gb,meshbasic_vert:Vb,meshbasic_frag:Wb,meshlambert_vert:qb,meshlambert_frag:Xb,meshmatcap_vert:jb,meshmatcap_frag:Kb,meshnormal_vert:Yb,meshnormal_frag:Jb,meshphong_vert:Zb,meshphong_frag:$b,meshphysical_vert:Qb,meshphysical_frag:ev,meshtoon_vert:tv,meshtoon_frag:nv,points_vert:iv,points_frag:sv,shadow_vert:rv,shadow_frag:av,sprite_vert:ov,sprite_frag:lv},Se={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},qi={basic:{uniforms:Fn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:Fn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new be(0)},envMapIntensity:{value:1}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:Fn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:Fn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:Fn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new be(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:Fn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:Fn([Se.points,Se.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:Fn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:Fn([Se.common,Se.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:Fn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:Fn([Se.sprite,Se.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distance:{uniforms:Fn([Se.common,Se.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distance_vert,fragmentShader:nt.distance_frag},shadow:{uniforms:Fn([Se.lights,Se.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};qi.physical={uniforms:Fn([qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};var Nc={r:0,b:0,g:0},cv=new Ye,tm=new Ke;tm.set(-1,0,0,0,1,0,0,0,1);function hv(i,e,t,n,s,r){let a=new be(0),o=s===!0?0:1,l,c,h=null,u=0,d=null;function f(y){let M=y.isScene===!0?y.background:null;if(M&&M.isTexture){let _=y.backgroundBlurriness>0;M=e.get(M,_)}return M}function p(y){let M=!1,_=f(y);_===null?g(a,o):_&&_.isColor&&(g(_,1),M=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(y,M){let _=f(M);_&&(_.isCubeTexture||_.mapping===po)?(c===void 0&&(c=new xe(new Qe(1,1,1),new Vt({name:"BackgroundCubeMaterial",uniforms:pr(qi.backgroundCube.uniforms),vertexShader:qi.backgroundCube.vertexShader,fragmentShader:qi.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(cv.makeRotationFromEuler(M.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(tm),c.material.toneMapped=Ze.getTransfer(_.colorSpace)!==Mt,(h!==_||u!==_.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,u=_.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new xe(new Qt(2,2),new Vt({name:"BackgroundMaterial",uniforms:pr(qi.background.uniforms),vertexShader:qi.background.vertexShader,fragmentShader:qi.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(_.colorSpace)!==Mt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||u!==_.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,u=_.version,d=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function g(y,M){y.getRGB(Nc,Pu(i)),t.buffers.color.setClear(Nc.r,Nc.g,Nc.b,M,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,M=1){a.set(y),o=M,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,g(a,o)},render:p,addToRenderList:x,dispose:m}}function uv(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(L,N,V,O,W){let K=!1,Q=u(L,O,V,N);r!==Q&&(r=Q,c(r.object)),K=f(L,O,V,W),K&&p(L,O,V,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,_(L,N,V,O),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return i.createVertexArray()}function c(L){return i.bindVertexArray(L)}function h(L){return i.deleteVertexArray(L)}function u(L,N,V,O){let W=O.wireframe===!0,K=n[N.id];K===void 0&&(K={},n[N.id]=K);let Q=L.isInstancedMesh===!0?L.id:0,re=K[Q];re===void 0&&(re={},K[Q]=re);let $=re[V.id];$===void 0&&($={},re[V.id]=$);let ae=$[W];return ae===void 0&&(ae=d(l()),$[W]=ae),ae}function d(L){let N=[],V=[],O=[];for(let W=0;W<t;W++)N[W]=0,V[W]=0,O[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:V,attributeDivisors:O,object:L,attributes:{},index:null}}function f(L,N,V,O){let W=r.attributes,K=N.attributes,Q=0,re=V.getAttributes();for(let $ in re)if(re[$].location>=0){let he=W[$],Ue=K[$];if(Ue===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(Ue=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(Ue=L.instanceColor)),he===void 0||he.attribute!==Ue||Ue&&he.data!==Ue.data)return!0;Q++}return r.attributesNum!==Q||r.index!==O}function p(L,N,V,O){let W={},K=N.attributes,Q=0,re=V.getAttributes();for(let $ in re)if(re[$].location>=0){let he=K[$];he===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(he=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(he=L.instanceColor));let Ue={};Ue.attribute=he,he&&he.data&&(Ue.data=he.data),W[$]=Ue,Q++}r.attributes=W,r.attributesNum=Q,r.index=O}function x(){let L=r.newAttributes;for(let N=0,V=L.length;N<V;N++)L[N]=0}function g(L){m(L,0)}function m(L,N){let V=r.newAttributes,O=r.enabledAttributes,W=r.attributeDivisors;V[L]=1,O[L]===0&&(i.enableVertexAttribArray(L),O[L]=1),W[L]!==N&&(i.vertexAttribDivisor(L,N),W[L]=N)}function y(){let L=r.newAttributes,N=r.enabledAttributes;for(let V=0,O=N.length;V<O;V++)N[V]!==L[V]&&(i.disableVertexAttribArray(V),N[V]=0)}function M(L,N,V,O,W,K,Q){Q===!0?i.vertexAttribIPointer(L,N,V,W,K):i.vertexAttribPointer(L,N,V,O,W,K)}function _(L,N,V,O){x();let W=O.attributes,K=V.getAttributes(),Q=N.defaultAttributeValues;for(let re in K){let $=K[re];if($.location>=0){let ae=W[re];if(ae===void 0&&(re==="instanceMatrix"&&L.instanceMatrix&&(ae=L.instanceMatrix),re==="instanceColor"&&L.instanceColor&&(ae=L.instanceColor)),ae!==void 0){let he=ae.normalized,Ue=ae.itemSize,Pe=e.get(ae);if(Pe===void 0)continue;let _t=Pe.buffer,et=Pe.type,ot=Pe.bytesPerElement,te=et===i.INT||et===i.UNSIGNED_INT||ae.gpuType===Jl;if(ae.isInterleavedBufferAttribute){let ue=ae.data,Ae=ue.stride,ye=ae.offset;if(ue.isInstancedInterleavedBuffer){for(let ve=0;ve<$.locationSize;ve++)m($.location+ve,ue.meshPerAttribute);L.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ve=0;ve<$.locationSize;ve++)g($.location+ve);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let ve=0;ve<$.locationSize;ve++)M($.location+ve,Ue/$.locationSize,et,he,Ae*ot,(ye+Ue/$.locationSize*ve)*ot,te)}else{if(ae.isInstancedBufferAttribute){for(let ue=0;ue<$.locationSize;ue++)m($.location+ue,ae.meshPerAttribute);L.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ue=0;ue<$.locationSize;ue++)g($.location+ue);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let ue=0;ue<$.locationSize;ue++)M($.location+ue,Ue/$.locationSize,et,he,Ue*ot,Ue/$.locationSize*ue*ot,te)}}else if(Q!==void 0){let he=Q[re];if(he!==void 0)switch(he.length){case 2:i.vertexAttrib2fv($.location,he);break;case 3:i.vertexAttrib3fv($.location,he);break;case 4:i.vertexAttrib4fv($.location,he);break;default:i.vertexAttrib1fv($.location,he)}}}}y()}function w(){E();for(let L in n){let N=n[L];for(let V in N){let O=N[V];for(let W in O){let K=O[W];for(let Q in K)h(K[Q].object),delete K[Q];delete O[W]}}delete n[L]}}function T(L){if(n[L.id]===void 0)return;let N=n[L.id];for(let V in N){let O=N[V];for(let W in O){let K=O[W];for(let Q in K)h(K[Q].object),delete K[Q];delete O[W]}}delete n[L.id]}function A(L){for(let N in n){let V=n[N];for(let O in V){let W=V[O];if(W[L.id]===void 0)continue;let K=W[L.id];for(let Q in K)h(K[Q].object),delete K[Q];delete W[L.id]}}}function S(L){for(let N in n){let V=n[N],O=L.isInstancedMesh===!0?L.id:0,W=V[O];if(W!==void 0){for(let K in W){let Q=W[K];for(let re in Q)h(Q[re].object),delete Q[re];delete W[K]}delete V[O],Object.keys(V).length===0&&delete n[N]}}}function E(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:C,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:S,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:g,disableUnusedAttributes:y}}function dv(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function fv(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==ai&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let S=A===fn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Jn&&A!==ri&&!S&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(ze("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:_,maxSamples:w,samples:T}}function pv(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Mi,o=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,m=i.get(u);if(!s||p===null||p.length===0||r&&!g)r?h(null):c();else{let y=r?0:n,M=y*4,_=m.clippingState||null;l.value=_,_=h(p,d,M,f);for(let w=0;w!==M;++w)_[w]=t[w];m.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,p){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=f+x*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let M=0,_=f;M!==x;++M,_+=4)a.copy(u[M]).applyMatrix4(y,o),a.normal.toArray(g,_),g[_+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}var ua=4,mv=6,gv=20,xv=256,So=new Gi,Dp=new be,Fu=null,Nu=0,ku=0,Uu=!1,bv=new U,mr=new U,fa=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=bv}=r;Fu=this._renderer.getRenderTarget(),Nu=this._renderer.getActiveCubeFace(),ku=this._renderer.getActiveMipmapLevel(),Uu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Np(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Fu,Nu,ku),this._renderer.xr.enabled=Uu,e.scissorTest=!1,ha(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fs||e.mapping===dr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fu=this._renderer.getRenderTarget(),Nu=this._renderer.getActiveCubeFace(),ku=this._renderer.getActiveMipmapLevel(),Uu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:fn,format:ai,colorSpace:Un,depthBuffer:!1},s=Fp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fp(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=vv(r)),this._blurMaterial=yv(r,e,t),this._ggxMaterial=_v(r,e,t)}return s}_compileMaterial(e){let t=new xe(new wt,e);this._renderer.compile(t,So)}_sceneToCubeUV(e,t,n,s,r){let l=new nn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Dp),u.toneMapping=Ei,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new xe(new Qe,new rt({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,m=!1,y=e.background;y?y.isColor&&(g.color.copy(y),e.background=null,m=!0):(g.color.copy(Dp),m=!0);for(let M=0;M<6;M++){let _=M%3;_===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[M],r.y,r.z)):_===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[M]));let w=this._cubeSize;ha(s,_*w,M>2?w:0,w,w),u.setRenderTarget(s),m&&u.render(x,l),u.render(e,l)}u.toneMapping=f,u.autoClear=d,e.background=y}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Fs||e.mapping===dr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=kp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Np());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;ha(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,So)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=c*1.25,f=u*d,{_lodMax:p}=this,x=this._sizeLods[n],g=3*x*(n>p-ua?n-p+ua:0),m=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=p-t,ha(r,g,m,3*x,2*x),s.setRenderTarget(r),s.render(o,So),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,ha(e,g,m,3*x,2*x),s.setRenderTarget(e),s.render(o,So)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-ua?s-this._lodMax+ua:0),d=4*(this._cubeSize-h);ha(t,u,d,3*h,2*h),a.setRenderTarget(t),a.render(l,So)}};function vv(i){let e=[],t=[],n=i,s=i-ua+1+mv;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,d=6,f=3,p=new Float32Array(f*d*u),x=new Float32Array(f*d*u);for(let m=0;m<u;m++){let y=m%3*2/3-1,M=m>2?0:-1,_=[y,M,0,y+2/3,M,0,y+2/3,M+1,0,y,M,0,y+2/3,M+1,0,y,M+1,0];p.set(_,f*d*m);for(let w=0;w<d;w++){let T=h[w*2]*2-1,A=h[w*2+1]*2-1;m===0?mr.set(1,A,T):m===1?mr.set(-T,1,-A):m===2?mr.set(-T,A,1):m===3?mr.set(-1,A,-T):m===4?mr.set(-T,-1,A):mr.set(T,A,-1),mr.toArray(x,(m*d+w)*f)}}let g=new wt;g.setAttribute("position",new St(p,f)),g.setAttribute("outputDirection",new St(x,f)),t.push(new xe(g,null)),n>ua&&n--}return{lodMeshes:t,sizeLods:e}}function Fp(i,e,t){let n=new Jt(i,e,t);return n.texture.mapping=po,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ha(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function _v(i,e,t){return new Vt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:xv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Bc(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function yv(i,e,t){return new Vt({name:"SphericalGaussianBlur",defines:{SAMPLES:gv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Bc(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Np(){return new Vt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bc(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function kp(){return new Vt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Bc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Uc=class extends Jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ja(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Qe(5,5,5),r=new Vt({name:"CubemapFromEquirect",uniforms:pr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:dn,blending:fi});r.uniforms.tEquirect.value=t;let a=new xe(s,r),o=t.minFilter;return t.minFilter===Ai&&(t.minFilter=rn),new Hl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function Mv(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===jl||f===Kl)if(e.has(d)){let p=e.get(d).texture;return o(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let x=new Uc(p.height);return x.fromEquirectangularTexture(i,d),e.set(d,x),d.addEventListener("dispose",c),o(x.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let f=d.mapping,p=f===jl||f===Kl,x=f===Fs||f===dr;if(p||x){let g=t.get(d),m=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new fa(i)),g=p?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{let y=d.image;return p&&y&&y.height>0||x&&y&&l(y)?(n===null&&(n=new fa(i)),g=p?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function o(d,f){return f===jl?d.mapping=Fs:f===Kl&&(d.mapping=dr),d}function l(d){let f=0,p=6;for(let x=0;x<p;x++)d[x]!==void 0&&f++;return f===p}function c(d){let f=d.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Sv(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&er("WebGLRenderer: "+n+" extension not supported."),s}}}function wv(i,e,t,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,p=u.attributes.position,x=0;if(p===void 0)return;if(f!==null){let y=f.array;x=f.version;for(let M=0,_=y.length;M<_;M+=3){let w=y[M+0],T=y[M+1],A=y[M+2];d.push(w,T,T,A,A,w)}}else{let y=p.array;x=p.version;for(let M=0,_=y.length/3-1;M<_;M+=3){let w=M+0,T=M+1,A=M+2;d.push(w,T,T,A,A,w)}}let g=new(p.count>=65535?Xa:qa)(d,1);g.version=x;let m=r.get(u);m&&e.remove(m),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Tv(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*a),t.update(d,n,1)}function c(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*a,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let x=0;for(let g=0;g<f;g++)x+=d[g];t.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Ev(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Xe("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Av(i,e,t){let n=new WeakMap,s=new At;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let E=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],M=0;f===!0&&(M=1),p===!0&&(M=2),x===!0&&(M=3);let _=o.attributes.position.count*M,w=1;_>e.maxTextureSize&&(w=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let T=new Float32Array(_*w*4*u),A=new Va(T,_,w,u);A.type=ri,A.needsUpdate=!0;let S=M*4;for(let C=0;C<u;C++){let L=g[C],N=m[C],V=y[C],O=_*w*4*C;for(let W=0;W<L.count;W++){let K=W*S;f===!0&&(s.fromBufferAttribute(L,W),T[O+K+0]=s.x,T[O+K+1]=s.y,T[O+K+2]=s.z,T[O+K+3]=0),p===!0&&(s.fromBufferAttribute(N,W),T[O+K+4]=s.x,T[O+K+5]=s.y,T[O+K+6]=s.z,T[O+K+7]=0),x===!0&&(s.fromBufferAttribute(V,W),T[O+K+8]=s.x,T[O+K+9]=s.y,T[O+K+10]=s.z,T[O+K+11]=V.itemSize===4?s.w:1)}}d={count:u,texture:A,size:new Oe(_,w)},n.set(o,d),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Rv(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var Cv={[oo]:"LINEAR_TONE_MAPPING",[lo]:"REINHARD_TONE_MAPPING",[co]:"CINEON_TONE_MAPPING",[ur]:"ACES_FILMIC_TONE_MAPPING",[uo]:"AGX_TONE_MAPPING",[fo]:"NEUTRAL_TONE_MAPPING",[ho]:"CUSTOM_TONE_MAPPING"};function Pv(i,e,t,n,s,r){let a=new Jt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new wt;c.setAttribute("position",new $e([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new $e([0,2,0,0,2,0],2));let h=new ea({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new xe(c,h),d=new Gi(-1,1,1,-1,0,1),f=null,p=null,x=!1,g,m=null,y=[],M=!1;this.setSize=function(_,w){a.setSize(_,w),o!==null&&o.setSize(_,w),l!==null&&l.setSize(_,w);for(let T=0;T<y.length;T++){let A=y[T];A.setSize&&A.setSize(_,w)}},this.setEffects=function(_){y=_,M=y.length>0&&y[0].isRenderPass===!0;let w=a.width,T=a.height;y.length>0&&o===null&&(o=new Jt(w,T,{type:fn,depthBuffer:!1,stencilBuffer:!1}),l=new Jt(w,T,{type:fn,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<y.length;A++){let S=y[A];S.setSize&&S.setSize(w,T)}},this.begin=function(_,w){if(x||_.toneMapping===Ei&&y.length===0)return!1;if(m=w,w!==null){let T=w.width,A=w.height;(a.width!==T||a.height!==A)&&this.setSize(T,A)}return M===!1&&_.setRenderTarget(a),g=_.toneMapping,_.toneMapping=Ei,!0},this.hasRenderPass=function(){return M},this.end=function(_,w){_.toneMapping=g,x=!0;let T=a,A=o;for(let S=0;S<y.length;S++){let E=y[S];E.enabled!==!1&&(E.render(_,A,T,w),E.needsSwap!==!1&&(T=A,A=A===o?l:o))}if(f!==_.outputColorSpace||p!==_.toneMapping){f=_.outputColorSpace,p=_.toneMapping,h.defines={},Ze.getTransfer(f)===Mt&&(h.defines.SRGB_TRANSFER="");let S=Cv[p];S&&(h.defines[S]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,_.setRenderTarget(m),_.render(u,d),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var nm=new un,zu=new Is(1,1),im=new Va,sm=new Rl,rm=new Ja,Up=[],Op=[],Bp=new Float32Array(16),zp=new Float32Array(9),Hp=new Float32Array(4);function pa(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Up[s];if(r===void 0&&(r=new Float32Array(s),Up[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function pn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function mn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function zc(i,e){let t=Op[e];t===void 0&&(t=new Int32Array(e),Op[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Iv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Lv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;i.uniform2fv(this.addr,e),mn(t,e)}}function Dv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pn(t,e))return;i.uniform3fv(this.addr,e),mn(t,e)}}function Fv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;i.uniform4fv(this.addr,e),mn(t,e)}}function Nv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(pn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,n))return;Hp.set(n),i.uniformMatrix2fv(this.addr,!1,Hp),mn(t,n)}}function kv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(pn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,n))return;zp.set(n),i.uniformMatrix3fv(this.addr,!1,zp),mn(t,n)}}function Uv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(pn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,n))return;Bp.set(n),i.uniformMatrix4fv(this.addr,!1,Bp),mn(t,n)}}function Ov(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Bv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;i.uniform2iv(this.addr,e),mn(t,e)}}function zv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;i.uniform3iv(this.addr,e),mn(t,e)}}function Hv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;i.uniform4iv(this.addr,e),mn(t,e)}}function Gv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Vv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;i.uniform2uiv(this.addr,e),mn(t,e)}}function Wv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;i.uniform3uiv(this.addr,e),mn(t,e)}}function qv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;i.uniform4uiv(this.addr,e),mn(t,e)}}function Xv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(zu.compareFunction=t.isReversedDepthBuffer()?Fc:Dc,r=zu):r=nm,t.setTexture2D(e||r,s)}function jv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||sm,s)}function Kv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||rm,s)}function Yv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||im,s)}function Jv(i){switch(i){case 5126:return Iv;case 35664:return Lv;case 35665:return Dv;case 35666:return Fv;case 35674:return Nv;case 35675:return kv;case 35676:return Uv;case 5124:case 35670:return Ov;case 35667:case 35671:return Bv;case 35668:case 35672:return zv;case 35669:case 35673:return Hv;case 5125:return Gv;case 36294:return Vv;case 36295:return Wv;case 36296:return qv;case 35678:case 36198:case 36298:case 36306:case 35682:return Xv;case 35679:case 36299:case 36307:return jv;case 35680:case 36300:case 36308:case 36293:return Kv;case 36289:case 36303:case 36311:case 36292:return Yv}}function Zv(i,e){i.uniform1fv(this.addr,e)}function $v(i,e){let t=pa(e,this.size,2);i.uniform2fv(this.addr,t)}function Qv(i,e){let t=pa(e,this.size,3);i.uniform3fv(this.addr,t)}function e_(i,e){let t=pa(e,this.size,4);i.uniform4fv(this.addr,t)}function t_(i,e){let t=pa(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function n_(i,e){let t=pa(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function i_(i,e){let t=pa(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function s_(i,e){i.uniform1iv(this.addr,e)}function r_(i,e){i.uniform2iv(this.addr,e)}function a_(i,e){i.uniform3iv(this.addr,e)}function o_(i,e){i.uniform4iv(this.addr,e)}function l_(i,e){i.uniform1uiv(this.addr,e)}function c_(i,e){i.uniform2uiv(this.addr,e)}function h_(i,e){i.uniform3uiv(this.addr,e)}function u_(i,e){i.uniform4uiv(this.addr,e)}function d_(i,e,t){let n=this.cache,s=e.length,r=zc(t,s);pn(n,r)||(i.uniform1iv(this.addr,r),mn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=zu:a=nm;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function f_(i,e,t){let n=this.cache,s=e.length,r=zc(t,s);pn(n,r)||(i.uniform1iv(this.addr,r),mn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||sm,r[a])}function p_(i,e,t){let n=this.cache,s=e.length,r=zc(t,s);pn(n,r)||(i.uniform1iv(this.addr,r),mn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||rm,r[a])}function m_(i,e,t){let n=this.cache,s=e.length,r=zc(t,s);pn(n,r)||(i.uniform1iv(this.addr,r),mn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||im,r[a])}function g_(i){switch(i){case 5126:return Zv;case 35664:return $v;case 35665:return Qv;case 35666:return e_;case 35674:return t_;case 35675:return n_;case 35676:return i_;case 5124:case 35670:return s_;case 35667:case 35671:return r_;case 35668:case 35672:return a_;case 35669:case 35673:return o_;case 5125:return l_;case 36294:return c_;case 36295:return h_;case 36296:return u_;case 35678:case 36198:case 36298:case 36306:case 35682:return d_;case 35679:case 36299:case 36307:return f_;case 35680:case 36300:case 36308:case 36293:return p_;case 36289:case 36303:case 36311:case 36292:return m_}}var Hu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Jv(t.type)}},Gu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=g_(t.type)}},Vu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Ou=/(\w+)(\])?(\[|\.)?/g;function Gp(i,e){i.seq.push(e),i.map[e.id]=e}function x_(i,e,t){let n=i.name,s=n.length;for(Ou.lastIndex=0;;){let r=Ou.exec(n),a=Ou.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Gp(t,c===void 0?new Hu(o,i,e):new Gu(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Vu(o),Gp(t,u)),t=u}}}var da=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);x_(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Vp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var b_=37297,v_=0;function __(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Wp=new Ke;function y_(i){Ze._getMatrix(Wp,Ze.workingColorSpace,i);let e=`mat3( ${Wp.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(i)){case Ha:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return ze("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function qp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+__(i.getShaderSource(e),o)}else return r}function M_(i,e){let t=y_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var S_={[oo]:"Linear",[lo]:"Reinhard",[co]:"Cineon",[ur]:"ACESFilmic",[uo]:"AgX",[fo]:"Neutral",[ho]:"Custom"};function w_(i,e){let t=S_[e];return t===void 0?(ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var kc=new U;function T_(){Ze.getLuminanceCoefficients(kc);let i=kc.x.toFixed(4),e=kc.y.toFixed(4),t=kc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function E_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(To).join(`
`)}function A_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function R_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function To(i){return i!==""}function Xp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var C_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wu(i){return i.replace(C_,I_)}var P_=new Map;function I_(i,e){let t=nt[e];if(t===void 0){let n=P_.get(e);if(n!==void 0)t=nt[n],ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Wu(t)}var L_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kp(i){return i.replace(L_,D_)}function D_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Yp(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var F_={[hr]:"SHADOWMAP_TYPE_PCF",[ra]:"SHADOWMAP_TYPE_VSM"};function N_(i){return F_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var k_={[Fs]:"ENVMAP_TYPE_CUBE",[dr]:"ENVMAP_TYPE_CUBE",[po]:"ENVMAP_TYPE_CUBE_UV"};function U_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":k_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var O_={[dr]:"ENVMAP_MODE_REFRACTION"};function B_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":O_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var z_={[Xl]:"ENVMAP_BLENDING_MULTIPLY",[fp]:"ENVMAP_BLENDING_MIX",[pp]:"ENVMAP_BLENDING_ADD"};function H_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":z_[i.combine]||"ENVMAP_BLENDING_NONE"}function G_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function V_(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=N_(t),c=U_(t),h=B_(t),u=H_(t),d=G_(t),f=E_(t),p=A_(r),x=s.createProgram(),g,m,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(To).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(To).join(`
`),m.length>0&&(m+=`
`)):(g=[Yp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(To).join(`
`),m=[Yp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ei?"#define TONE_MAPPING":"",t.toneMapping!==Ei?nt.tonemapping_pars_fragment:"",t.toneMapping!==Ei?w_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,M_("linearToOutputTexel",t.outputColorSpace),T_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(To).join(`
`)),a=Wu(a),a=Xp(a,t),a=jp(a,t),o=Wu(o),o=Xp(o,t),o=jp(o,t),a=Kp(a),o=Kp(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Au?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Au?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let M=y+g+a,_=y+m+o,w=Vp(s,s.VERTEX_SHADER,M),T=Vp(s,s.FRAGMENT_SHADER,_);s.attachShader(x,w),s.attachShader(x,T),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(L){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(x)||"",V=s.getShaderInfoLog(w)||"",O=s.getShaderInfoLog(T)||"",W=N.trim(),K=V.trim(),Q=O.trim(),re=!0,$=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(re=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,w,T);else{let ae=qp(s,w,"vertex"),he=qp(s,T,"fragment");Xe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+W+`
`+ae+`
`+he)}else W!==""?ze("WebGLProgram: Program Info Log:",W):(K===""||Q==="")&&($=!1);$&&(L.diagnostics={runnable:re,programLog:W,vertexShader:{log:K,prefix:g},fragmentShader:{log:Q,prefix:m}})}s.deleteShader(w),s.deleteShader(T),S=new da(s,x),E=R_(s,x)}let S;this.getUniforms=function(){return S===void 0&&A(this),S};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(x,b_)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=v_++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=T,this}var W_=0,qu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Xu(e),t.set(e,n)),n}},Xu=class{constructor(e){this.id=W_++,this.code=e,this.usedTimes=0}};function q_(i){return i===ks||i===vo||i===_o}function X_(i,e,t,n,s,r){let a=new Wa,o=new qu,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(S){return l.add(S),S===0?"uv":`uv${S}`}function x(S,E,C,L,N,V){let O=L.fog,W=N.geometry,K=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?L.environment:null,Q=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,re=e.get(S.envMap||K,Q),$=re&&re.mapping===po?re.image.height:null,ae=f[S.type];S.precision!==null&&(d=n.getMaxPrecision(S.precision),d!==S.precision&&ze("WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));let he=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ue=he!==void 0?he.length:0,Pe=0;W.morphAttributes.position!==void 0&&(Pe=1),W.morphAttributes.normal!==void 0&&(Pe=2),W.morphAttributes.color!==void 0&&(Pe=3);let _t,et,ot,te;if(ae){let Pt=qi[ae];_t=Pt.vertexShader,et=Pt.fragmentShader}else{_t=S.vertexShader,et=S.fragmentShader;let Pt=o.getVertexShaderStage(S),mt=o.getFragmentShaderStage(S);o.update(S,Pt,mt),ot=Pt.id,te=mt.id}let ue=i.getRenderTarget(),Ae=i.state.buffers.depth.getReversed(),ye=N.isInstancedMesh===!0,ve=N.isBatchedMesh===!0,Ve=!!S.map,Ot=!!S.matcap,je=!!re,ut=!!S.aoMap,dt=!!S.lightMap,Je=!!S.bumpMap&&S.wireframe===!1,Et=!!S.normalMap,Rt=!!S.displacementMap,Ct=!!S.emissiveMap,xt=!!S.metalnessMap,st=!!S.roughnessMap,z=S.anisotropy>0,Dt=S.clearcoat>0,pt=S.dispersion>0,P=S.retroreflectivity>0,v=S.iridescence>0,I=S.sheen>0,F=S.transmission>0,B=z&&!!S.anisotropyMap,ee=Dt&&!!S.clearcoatMap,se=Dt&&!!S.clearcoatNormalMap,q=Dt&&!!S.clearcoatRoughnessMap,J=v&&!!S.iridescenceMap,ie=v&&!!S.iridescenceThicknessMap,me=I&&!!S.sheenColorMap,ce=I&&!!S.sheenRoughnessMap,de=!!S.specularMap,oe=!!S.specularColorMap,_e=!!S.specularIntensityMap,Re=F&&!!S.transmissionMap,D=F&&!!S.thicknessMap,le=!!S.gradientMap,Y=!!S.alphaMap,pe=S.alphaTest>0,ge=!!S.alphaHash,ne=!!S.extensions,Ie=Ei;S.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(Ie=i.toneMapping);let Fe={shaderID:ae,shaderType:S.type,shaderName:S.name,vertexShader:_t,fragmentShader:et,defines:S.defines,customVertexShaderID:ot,customFragmentShaderID:te,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:ve,batchingColor:ve&&N._colorsTexture!==null,instancing:ye,instancingColor:ye&&N.instanceColor!==null,instancingMorph:ye&&N.morphTexture!==null,outputColorSpace:ue===null?i.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Ze.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:Ve,matcap:Ot,envMap:je,envMapMode:je&&re.mapping,envMapCubeUVHeight:$,aoMap:ut,lightMap:dt,bumpMap:Je,normalMap:Et,displacementMap:Rt,emissiveMap:Ct,normalMapObjectSpace:Et&&S.normalMapType===bp,normalMapTangentSpace:Et&&S.normalMapType===Mo,packedNormalMap:Et&&S.normalMapType===Mo&&q_(S.normalMap.format),metalnessMap:xt,roughnessMap:st,anisotropy:z,anisotropyMap:B,clearcoat:Dt,clearcoatMap:ee,clearcoatNormalMap:se,clearcoatRoughnessMap:q,dispersion:pt,retroreflection:P,iridescence:v,iridescenceMap:J,iridescenceThicknessMap:ie,sheen:I,sheenColorMap:me,sheenRoughnessMap:ce,specularMap:de,specularColorMap:oe,specularIntensityMap:_e,transmission:F,transmissionMap:Re,thicknessMap:D,gradientMap:le,opaque:S.transparent===!1&&S.blending===Ds&&S.alphaToCoverage===!1,alphaMap:Y,alphaTest:pe,alphaHash:ge,combine:S.combine,mapUv:Ve&&p(S.map.channel),aoMapUv:ut&&p(S.aoMap.channel),lightMapUv:dt&&p(S.lightMap.channel),bumpMapUv:Je&&p(S.bumpMap.channel),normalMapUv:Et&&p(S.normalMap.channel),displacementMapUv:Rt&&p(S.displacementMap.channel),emissiveMapUv:Ct&&p(S.emissiveMap.channel),metalnessMapUv:xt&&p(S.metalnessMap.channel),roughnessMapUv:st&&p(S.roughnessMap.channel),anisotropyMapUv:B&&p(S.anisotropyMap.channel),clearcoatMapUv:ee&&p(S.clearcoatMap.channel),clearcoatNormalMapUv:se&&p(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&p(S.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&p(S.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&p(S.iridescenceThicknessMap.channel),sheenColorMapUv:me&&p(S.sheenColorMap.channel),sheenRoughnessMapUv:ce&&p(S.sheenRoughnessMap.channel),specularMapUv:de&&p(S.specularMap.channel),specularColorMapUv:oe&&p(S.specularColorMap.channel),specularIntensityMapUv:_e&&p(S.specularIntensityMap.channel),transmissionMapUv:Re&&p(S.transmissionMap.channel),thicknessMapUv:D&&p(S.thicknessMap.channel),alphaMapUv:Y&&p(S.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Et||z),vertexNormals:!!W.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!W.attributes.uv&&(Ve||Y),fog:!!O,useFog:S.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||W.attributes.normal===void 0&&Et===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Ae,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:W.attributes.position!==void 0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Ue,morphTextureStride:Pe,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ie,decodeVideoTexture:Ve&&S.map.isVideoTexture===!0&&Ze.getTransfer(S.map.colorSpace)===Mt,decodeVideoTextureEmissive:Ct&&S.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(S.emissiveMap.colorSpace)===Mt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===$t,flipSided:S.side===dn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ne&&S.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&S.extensions.multiDraw===!0||ve)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Fe.vertexUv1s=l.has(1),Fe.vertexUv2s=l.has(2),Fe.vertexUv3s=l.has(3),l.clear(),Fe}function g(S){let E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(let C in S.defines)E.push(C),E.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(m(E,S),y(E,S),E.push(i.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function m(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numSunLights),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numSunLightShadows),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function y(S,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),S.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),S.push(a.mask)}function M(S){let E=f[S.type],C;if(E){let L=qi[E];C=ps.clone(L.uniforms)}else C=S.uniforms;return C}function _(S,E){let C=h.get(E);return C!==void 0?++C.usedTimes:(C=new V_(i,E,S,s),c.push(C),h.set(E,C)),C}function w(S){if(--S.usedTimes===0){let E=c.indexOf(S);c[E]=c[c.length-1],c.pop(),h.delete(S.cacheKey),S.destroy()}}function T(S){o.remove(S)}function A(){o.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:M,acquireProgram:_,releaseProgram:w,releaseShaderCache:T,programs:c,dispose:A}}function j_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function K_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Jp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Zp(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,p,x,g,m){let y=i[e];return y===void 0?(y={id:d.id,object:d,geometry:f,material:p,materialVariant:a(d),groupOrder:x,renderOrder:d.renderOrder,z:g,group:m},i[e]=y):(y.id=d.id,y.object=d,y.geometry=f,y.material=p,y.materialVariant=a(d),y.groupOrder=x,y.renderOrder=d.renderOrder,y.z=g,y.group=m),e++,y}function l(d,f,p,x,g,m,y){y.reversedDepth===!0&&(g=-g);let M=o(d,f,p,x,g,m);p.transmission>0?n.push(M):p.transparent===!0?s.push(M):t.push(M)}function c(d,f,p,x,g,m){let y=o(d,f,p,x,g,m);p.transmission>0?n.unshift(y):p.transparent===!0?s.unshift(y):t.unshift(y)}function h(d,f){t.length>1&&t.sort(d||K_),n.length>1&&n.sort(f||Jp),s.length>1&&s.sort(f||Jp)}function u(){for(let d=e,f=i.length;d<f;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function Y_(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Zp,i.set(n,[a])):s>=r.length?(a=new Zp,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function J_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new U,color:new be};break;case"SpotLight":t={position:new U,direction:new U,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new be,groundColor:new be};break;case"RectAreaLight":t={color:new be,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function Z_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var $_=0;function Q_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ey(i){let e=new J_,t=Z_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);let s=new U,r=new Ye,a=new Ye;function o(c){let h=0,u=0,d=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let f=0,p=0,x=0,g=0,m=0,y=0,M=0,_=0,w=0,T=0,A=0,S=0,E=0,C=0;c.sort(Q_);for(let N=0,V=c.length;N<V;N++){let O=c[N],W=O.color,K=O.intensity,Q=O.distance,re=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===ks?re=O.shadow.map.texture:re=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)h+=W.r*K,u+=W.g*K,d+=W.b*K;else if(O.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(O.sh.coefficients[$],K);C++}else if(O.isSunLight){let $=e.get(O);if($.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let ae=O.shadow,he=t.get(O);he.shadowIntensity=ae.intensity,he.shadowBias=ae.bias,he.shadowNormalBias=ae.normalBias,he.shadowRadius=ae.radius,he.shadowMapSize.copy(ae.mapSize).multiply(ae.getFrameExtents()),n.sunShadow[p]=he,n.sunShadowMap[p]=re;let Ue=ae.getViewportCount();for(let Pe=0;Pe<Ue;Pe++)n.sunShadowMatrix[x+Pe]=ae.getMatrix(Pe),n.sunShadowCascade[x+Pe]=ae._cascadeData[Pe];x+=Ue,p++}n.sun[f]=$,f++}else if(O.isDirectionalLight){let $=e.get(O);if($.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let ae=O.shadow,he=t.get(O);he.shadowIntensity=ae.intensity,he.shadowBias=ae.bias,he.shadowNormalBias=ae.normalBias,he.shadowRadius=ae.radius,he.shadowMapSize=ae.mapSize,n.directionalShadow[g]=he,n.directionalShadowMap[g]=re,n.directionalShadowMatrix[g]=O.shadow.matrix,w++}n.directional[g]=$,g++}else if(O.isSpotLight){let $=e.get(O);$.position.setFromMatrixPosition(O.matrixWorld),$.color.copy(W).multiplyScalar(K),$.distance=Q,$.coneCos=Math.cos(O.angle),$.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),$.decay=O.decay,n.spot[y]=$;let ae=O.shadow;if(O.map&&(n.spotLightMap[S]=O.map,S++,ae.updateMatrices(O),O.castShadow&&E++),n.spotLightMatrix[y]=ae.matrix,O.castShadow){let he=t.get(O);he.shadowIntensity=ae.intensity,he.shadowBias=ae.bias,he.shadowNormalBias=ae.normalBias,he.shadowRadius=ae.radius,he.shadowMapSize=ae.mapSize,n.spotShadow[y]=he,n.spotShadowMap[y]=re,A++}y++}else if(O.isRectAreaLight){let $=e.get(O);$.color.copy(W).multiplyScalar(K),$.halfWidth.set(O.width*.5,0,0),$.halfHeight.set(0,O.height*.5,0),n.rectArea[M]=$,M++}else if(O.isPointLight){let $=e.get(O);if($.color.copy(O.color).multiplyScalar(O.intensity),$.distance=O.distance,$.decay=O.decay,O.castShadow){let ae=O.shadow,he=t.get(O);he.shadowIntensity=ae.intensity,he.shadowBias=ae.bias,he.shadowNormalBias=ae.normalBias,he.shadowRadius=ae.radius,he.shadowMapSize=ae.mapSize,he.shadowCameraNear=ae.camera.near,he.shadowCameraFar=ae.camera.far,n.pointShadow[m]=he,n.pointShadowMap[m]=re,n.pointShadowMatrix[m]=O.shadow.matrix,T++}n.point[m]=$,m++}else if(O.isHemisphereLight){let $=e.get(O);$.skyColor.copy(O.color).multiplyScalar(K),$.groundColor.copy(O.groundColor).multiplyScalar(K),n.hemi[_]=$,_++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Se.LTC_FLOAT_1,n.rectAreaLTC2=Se.LTC_FLOAT_2):(n.rectAreaLTC1=Se.LTC_HALF_1,n.rectAreaLTC2=Se.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let L=n.hash;(L.sunLength!==f||L.directionalLength!==g||L.pointLength!==m||L.spotLength!==y||L.rectAreaLength!==M||L.hemiLength!==_||L.numSunShadows!==p||L.numDirectionalShadows!==w||L.numPointShadows!==T||L.numSpotShadows!==A||L.numSpotMaps!==S||L.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=g,n.spot.length=y,n.rectArea.length=M,n.point.length=m,n.hemi.length=_,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+S-E,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=C,L.sunLength=f,L.directionalLength=g,L.pointLength=m,L.spotLength=y,L.rectAreaLength=M,L.hemiLength=_,L.numSunShadows=p,L.numDirectionalShadows=w,L.numPointShadows=T,L.numSpotShadows=A,L.numSpotMaps=S,L.numLightProbes=C,n.version=$_++)}function l(c,h){let u=0,d=0,f=0,p=0,x=0,g=0,m=h.matrixWorldInverse;for(let y=0,M=c.length;y<M;y++){let _=c[y];if(_.isSunLight){let w=n.sun[u];w.direction.setFromMatrixPosition(_.matrixWorld),w.direction.transformDirection(m),u++}else if(_.isDirectionalLight){let w=n.directional[d];w.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),d++}else if(_.isSpotLight){let w=n.spot[p];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),p++}else if(_.isRectAreaLight){let w=n.rectArea[x];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(m),a.identity(),r.copy(_.matrixWorld),r.premultiply(m),a.extractRotation(r),w.halfWidth.set(_.width*.5,0,0),w.halfHeight.set(0,_.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),x++}else if(_.isPointLight){let w=n.point[f];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){let w=n.hemi[g];w.direction.setFromMatrixPosition(_.matrixWorld),w.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function $p(i){let e=new ey(i),t=[],n=[],s=[];function r(d){u.camera=d,t.length=0,n.length=0,s.length=0}function a(d){t.push(d)}function o(d){n.push(d)}function l(d){s.push(d)}function c(){e.setup(t)}function h(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function ty(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new $p(i),e.set(s,[o])):r>=a.length?(o=new $p(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var ny=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iy=`uniform sampler2D shadow_pass;
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
}`,sy=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],ry=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Qp=new Ye,wo=new U,Bu=new U;function ay(i,e,t){let n=new Jr,s=new Oe,r=new Oe,a=new At,o=new Ll,l=new Dl,c={},h=t.maxTextureSize,u={[Vi]:dn,[dn]:Vi,[$t]:$t},d=new Vt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:ny,fragmentShader:iy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new wt;p.setAttribute("position",new St(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new xe(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hr;let m=this.type;this.render=function(T,A,S){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===Zf&&(ze("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=hr);let E=i.getRenderTarget(),C=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),N=i.state;N.setBlending(fi),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let V=m!==this.type;V&&A.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(W=>W.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,W=T.length;O<W;O++){let K=T[O],Q=K.shadow;if(Q===void 0){ze("WebGLShadowMap:",K,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;s.copy(Q.mapSize);let re=Q.getFrameExtents();s.multiply(re),r.copy(Q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/re.x),s.x=r.x*re.x,Q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/re.y),s.y=r.y*re.y,Q.mapSize.y=r.y));let $=i.state.buffers.depth.getReversed();if(Q.camera._reversedDepth=$,Q.map===null||V===!0){if(Q.map!==null&&(Q.map.depthTexture!==null&&(Q.map.depthTexture.dispose(),Q.map.depthTexture=null),Q.map.dispose()),this.type===ra){if(K.isPointLight){ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Q.map=new Jt(s.x,s.y,{format:ks,type:fn,minFilter:rn,magFilter:rn,generateMipmaps:!1}),Q.map.texture.name=K.name+".shadowMap",Q.map.depthTexture=new Is(s.x,s.y,ri),Q.map.depthTexture.name=K.name+".shadowMapDepth",Q.map.depthTexture.format=ki,Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=sn,Q.map.depthTexture.magFilter=sn}else K.isPointLight?(Q.map=new Uc(s.x),Q.map.depthTexture=new Il(s.x,Ri)):(Q.map=new Jt(s.x,s.y),Q.map.depthTexture=new Is(s.x,s.y,Ri)),Q.map.depthTexture.name=K.name+".shadowMap",Q.map.depthTexture.format=ki,this.type===hr?(Q.map.depthTexture.compareFunction=$?Fc:Dc,Q.map.depthTexture.minFilter=rn,Q.map.depthTexture.magFilter=rn):(Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=sn,Q.map.depthTexture.magFilter=sn);Q.camera.updateProjectionMatrix()}Q.map.isWebGLCubeRenderTarget!==!0&&(Q.map.width!==s.x||Q.map.height!==s.y)&&Q.map.setSize(s.x,s.y);let ae=Q.map.isWebGLCubeRenderTarget?6:Q.getViewportCount();K.isPointLight!==!0&&Q.updateMatrices(K,S);for(let he=0;he<ae;he++){let Ue=Q.getCamera(he);if(K.isPointLight){let Pe=Q.camera,_t=Q.matrix,et=K.distance||Pe.far;et!==Pe.far&&(Pe.far=et,Pe.updateProjectionMatrix()),wo.setFromMatrixPosition(K.matrixWorld),Pe.position.copy(wo),Bu.copy(Pe.position),Bu.add(sy[he]),Pe.up.copy(ry[he]),Pe.lookAt(Bu),Pe.updateMatrixWorld(),_t.makeTranslation(-wo.x,-wo.y,-wo.z),Qp.multiplyMatrices(Pe.projectionMatrix,Pe.matrixWorldInverse),Q._frustum.setFromProjectionMatrix(Qp,Pe.coordinateSystem,Pe.reversedDepth)}if(Q.map.isWebGLCubeRenderTarget)i.setRenderTarget(Q.map,he),i.clear();else{he===0&&(i.setRenderTarget(Q.map),i.clear());let Pe=Q.getViewport(he);a.set(r.x*Pe.x,r.y*Pe.y,r.x*Pe.z,r.y*Pe.w),N.viewport(a)}n=Q.getFrustum(he),_(A,S,Ue,K,this.type)}Q.isPointLightShadow!==!0&&this.type===ra&&y(Q,S),Q.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(E,C,L)};function y(T,A){let S=e.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new Jt(s.x,s.y,{format:ks,type:fn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,S,d,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,S,f,x,null)}function M(T,A,S,E){let C=null,L=S.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)C=L;else if(C=S.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let N=C.uuid,V=A.uuid,O=c[N];O===void 0&&(O={},c[N]=O);let W=O[V];W===void 0&&(W=C.clone(),O[V]=W,A.addEventListener("dispose",w)),C=W}if(C.visible=A.visible,C.wireframe=A.wireframe,E===ra?C.side=A.shadowSide!==null?A.shadowSide:A.side:C.side=A.shadowSide!==null?A.shadowSide:u[A.side],C.alphaMap=A.alphaMap,C.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,C.map=A.map,C.clipShadows=A.clipShadows,C.clippingPlanes=A.clippingPlanes,C.clipIntersection=A.clipIntersection,C.displacementMap=A.displacementMap,C.displacementScale=A.displacementScale,C.displacementBias=A.displacementBias,C.wireframeLinewidth=A.wireframeLinewidth,C.linewidth=A.linewidth,S.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let N=i.properties.get(C);N.light=S}return C}function _(T,A,S,E,C){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&C===ra)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,T.matrixWorld);let V=e.update(T),O=T.material;if(Array.isArray(O)){let W=V.groups;for(let K=0,Q=W.length;K<Q;K++){let re=W[K],$=O[re.materialIndex];if($&&$.visible){let ae=M(T,$,E,C);T.onBeforeShadow(i,T,A,S,V,ae,re),i.renderBufferDirect(S,null,V,ae,T,re),T.onAfterShadow(i,T,A,S,V,ae,re)}}}else if(O.visible){let W=M(T,O,E,C);T.onBeforeShadow(i,T,A,S,V,W,null),i.renderBufferDirect(S,null,V,W,T,null),T.onAfterShadow(i,T,A,S,V,W,null)}}let N=T.children;for(let V=0,O=N.length;V<O;V++)_(N[V],A,S,E,C)}function w(T){T.target.removeEventListener("dispose",w);for(let S in c){let E=c[S],C=T.target.uuid;C in E&&(E[C].dispose(),delete E[C])}}}function oy(i,e){function t(){let D=!1,le=new At,Y=null,pe=new At(0,0,0,0);return{setMask:function(ge){Y!==ge&&!D&&(i.colorMask(ge,ge,ge,ge),Y=ge)},setLocked:function(ge){D=ge},setClear:function(ge,ne,Ie,Fe,Pt){Pt===!0&&(ge*=Fe,ne*=Fe,Ie*=Fe),le.set(ge,ne,Ie,Fe),pe.equals(le)===!1&&(i.clearColor(ge,ne,Ie,Fe),pe.copy(le))},reset:function(){D=!1,Y=null,pe.set(-1,0,0,0)}}}function n(){let D=!1,le=!1,Y=null,pe=null,ge=null;return{setReversed:function(ne){if(le!==ne){let Ie=e.get("EXT_clip_control");ne?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),le=ne;let Fe=ge;ge=null,this.setClear(Fe)}},getReversed:function(){return le},setTest:function(ne){ne?ue(i.DEPTH_TEST):Ae(i.DEPTH_TEST)},setMask:function(ne){Y!==ne&&!D&&(i.depthMask(ne),Y=ne)},setFunc:function(ne){if(le&&(ne=Cp[ne]),pe!==ne){switch(ne){case vl:i.depthFunc(i.NEVER);break;case _l:i.depthFunc(i.ALWAYS);break;case yl:i.depthFunc(i.LESS);break;case Or:i.depthFunc(i.LEQUAL);break;case Ml:i.depthFunc(i.EQUAL);break;case Sl:i.depthFunc(i.GEQUAL);break;case wl:i.depthFunc(i.GREATER);break;case Tl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pe=ne}},setLocked:function(ne){D=ne},setClear:function(ne){ge!==ne&&(ge=ne,le&&(ne=1-ne),i.clearDepth(ne))},reset:function(){D=!1,Y=null,pe=null,ge=null,le=!1}}}function s(){let D=!1,le=null,Y=null,pe=null,ge=null,ne=null,Ie=null,Fe=null,Pt=null;return{setTest:function(mt){D||(mt?ue(i.STENCIL_TEST):Ae(i.STENCIL_TEST))},setMask:function(mt){le!==mt&&!D&&(i.stencilMask(mt),le=mt)},setFunc:function(mt,ei,Rn){(Y!==mt||pe!==ei||ge!==Rn)&&(i.stencilFunc(mt,ei,Rn),Y=mt,pe=ei,ge=Rn)},setOp:function(mt,ei,Rn){(ne!==mt||Ie!==ei||Fe!==Rn)&&(i.stencilOp(mt,ei,Rn),ne=mt,Ie=ei,Fe=Rn)},setLocked:function(mt){D=mt},setClear:function(mt){Pt!==mt&&(i.clearStencil(mt),Pt=mt)},reset:function(){D=!1,le=null,Y=null,pe=null,ge=null,ne=null,Ie=null,Fe=null,Pt=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},d={},f=new WeakMap,p=[],x=null,g=!1,m=null,y=null,M=null,_=null,w=null,T=null,A=null,S=new be(0,0,0),E=0,C=!1,L=null,N=null,V=null,O=null,W=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Q=!1,re=0,$=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec($)[1]),Q=re>=1):$.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),Q=re>=2);let ae=null,he={},Ue=i.getParameter(i.SCISSOR_BOX),Pe=i.getParameter(i.VIEWPORT),_t=new At().fromArray(Ue),et=new At().fromArray(Pe);function ot(D,le,Y,pe){let ge=new Uint8Array(4),ne=i.createTexture();i.bindTexture(D,ne),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ie=0;Ie<Y;Ie++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(le,0,i.RGBA,1,1,pe,0,i.RGBA,i.UNSIGNED_BYTE,ge):i.texImage2D(le+Ie,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ge);return ne}let te={};te[i.TEXTURE_2D]=ot(i.TEXTURE_2D,i.TEXTURE_2D,1),te[i.TEXTURE_CUBE_MAP]=ot(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[i.TEXTURE_2D_ARRAY]=ot(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),te[i.TEXTURE_3D]=ot(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ue(i.DEPTH_TEST),a.setFunc(Or),Je(!1),Et(fu),ue(i.CULL_FACE),ut(fi);function ue(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function Ae(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function ye(D,le){return d[D]!==le?(i.bindFramebuffer(D,le),d[D]=le,D===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=le),D===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=le),!0):!1}function ve(D,le){let Y=p,pe=!1;if(D){Y=f.get(le),Y===void 0&&(Y=[],f.set(le,Y));let ge=D.textures;if(Y.length!==ge.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let ne=0,Ie=ge.length;ne<Ie;ne++)Y[ne]=i.COLOR_ATTACHMENT0+ne;Y.length=ge.length,pe=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,pe=!0);pe&&i.drawBuffers(Y)}function Ve(D){return x!==D?(i.useProgram(D),x=D,!0):!1}let Ot={[ds]:i.FUNC_ADD,[$f]:i.FUNC_SUBTRACT,[Qf]:i.FUNC_REVERSE_SUBTRACT};Ot[ep]=i.MIN,Ot[tp]=i.MAX;let je={[np]:i.ZERO,[Wl]:i.ONE,[ip]:i.SRC_COLOR,[gu]:i.SRC_ALPHA,[lp]:i.SRC_ALPHA_SATURATE,[ql]:i.DST_COLOR,[rp]:i.DST_ALPHA,[sp]:i.ONE_MINUS_SRC_COLOR,[xu]:i.ONE_MINUS_SRC_ALPHA,[op]:i.ONE_MINUS_DST_COLOR,[ap]:i.ONE_MINUS_DST_ALPHA,[cp]:i.CONSTANT_COLOR,[hp]:i.ONE_MINUS_CONSTANT_COLOR,[up]:i.CONSTANT_ALPHA,[dp]:i.ONE_MINUS_CONSTANT_ALPHA};function ut(D,le,Y,pe,ge,ne,Ie,Fe,Pt,mt){if(D===fi){g===!0&&(Ae(i.BLEND),g=!1);return}if(g===!1&&(ue(i.BLEND),g=!0),D!==Vl){if(D!==m||mt!==C){if((y!==ds||w!==ds)&&(i.blendEquation(i.FUNC_ADD),y=ds,w=ds),mt)switch(D){case Ds:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Mn:i.blendFunc(i.ONE,i.ONE);break;case pu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case mu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Xe("WebGLState: Invalid blending: ",D);break}else switch(D){case Ds:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Mn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case pu:Xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mu:Xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xe("WebGLState: Invalid blending: ",D);break}M=null,_=null,T=null,A=null,S.set(0,0,0),E=0,m=D,C=mt}return}ge=ge||le,ne=ne||Y,Ie=Ie||pe,(le!==y||ge!==w)&&(i.blendEquationSeparate(Ot[le],Ot[ge]),y=le,w=ge),(Y!==M||pe!==_||ne!==T||Ie!==A)&&(i.blendFuncSeparate(je[Y],je[pe],je[ne],je[Ie]),M=Y,_=pe,T=ne,A=Ie),(Fe.equals(S)===!1||Pt!==E)&&(i.blendColor(Fe.r,Fe.g,Fe.b,Pt),S.copy(Fe),E=Pt),m=D,C=!1}function dt(D,le){D.side===$t?Ae(i.CULL_FACE):ue(i.CULL_FACE);let Y=D.side===dn;le&&(Y=!Y),Je(Y),D.blending===Ds&&D.transparent===!1?ut(fi):ut(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let pe=D.stencilWrite;o.setTest(pe),pe&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ct(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ue(i.SAMPLE_ALPHA_TO_COVERAGE):Ae(i.SAMPLE_ALPHA_TO_COVERAGE)}function Je(D){L!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),L=D)}function Et(D){D!==Yf?(ue(i.CULL_FACE),D!==N&&(D===fu?i.cullFace(i.BACK):D===Jf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ae(i.CULL_FACE),N=D}function Rt(D){D!==V&&(Q&&i.lineWidth(D),V=D)}function Ct(D,le,Y){D?(ue(i.POLYGON_OFFSET_FILL),(O!==le||W!==Y)&&(O=le,W=Y,a.getReversed()&&(le=-le),i.polygonOffset(le,Y))):Ae(i.POLYGON_OFFSET_FILL)}function xt(D){D?ue(i.SCISSOR_TEST):Ae(i.SCISSOR_TEST)}function st(D){D===void 0&&(D=i.TEXTURE0+K-1),ae!==D&&(i.activeTexture(D),ae=D)}function z(D,le,Y){Y===void 0&&(ae===null?Y=i.TEXTURE0+K-1:Y=ae);let pe=he[Y];pe===void 0&&(pe={type:void 0,texture:void 0},he[Y]=pe),(pe.type!==D||pe.texture!==le)&&(ae!==Y&&(i.activeTexture(Y),ae=Y),i.bindTexture(D,le||te[D]),pe.type=D,pe.texture=le)}function Dt(){let D=he[ae];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function pt(){try{i.compressedTexImage2D(...arguments)}catch(D){Xe("WebGLState:",D)}}function P(){try{i.compressedTexImage3D(...arguments)}catch(D){Xe("WebGLState:",D)}}function v(){try{i.texSubImage2D(...arguments)}catch(D){Xe("WebGLState:",D)}}function I(){try{i.texSubImage3D(...arguments)}catch(D){Xe("WebGLState:",D)}}function F(){try{i.compressedTexSubImage2D(...arguments)}catch(D){Xe("WebGLState:",D)}}function B(){try{i.compressedTexSubImage3D(...arguments)}catch(D){Xe("WebGLState:",D)}}function ee(){try{i.texStorage2D(...arguments)}catch(D){Xe("WebGLState:",D)}}function se(){try{i.texStorage3D(...arguments)}catch(D){Xe("WebGLState:",D)}}function q(){try{i.texImage2D(...arguments)}catch(D){Xe("WebGLState:",D)}}function J(){try{i.texImage3D(...arguments)}catch(D){Xe("WebGLState:",D)}}function ie(D){return u[D]!==void 0?u[D]:i.getParameter(D)}function me(D,le){u[D]!==le&&(i.pixelStorei(D,le),u[D]=le)}function ce(D){_t.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),_t.copy(D))}function de(D){et.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),et.copy(D))}function oe(D,le){let Y=c.get(le);Y===void 0&&(Y=new WeakMap,c.set(le,Y));let pe=Y.get(D);pe===void 0&&(pe=i.getUniformBlockIndex(le,D.name),Y.set(D,pe))}function _e(D,le){let pe=c.get(le).get(D);l.get(le)!==pe&&(i.uniformBlockBinding(le,pe,D.__bindingPointIndex),l.set(le,pe))}function Re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},ae=null,he={},d={},f=new WeakMap,p=[],x=null,g=!1,m=null,y=null,M=null,_=null,w=null,T=null,A=null,S=new be(0,0,0),E=0,C=!1,L=null,N=null,V=null,O=null,W=null,_t.set(0,0,i.canvas.width,i.canvas.height),et.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ue,disable:Ae,bindFramebuffer:ye,drawBuffers:ve,useProgram:Ve,setBlending:ut,setMaterial:dt,setFlipSided:Je,setCullFace:Et,setLineWidth:Rt,setPolygonOffset:Ct,setScissorTest:xt,activeTexture:st,bindTexture:z,unbindTexture:Dt,compressedTexImage2D:pt,compressedTexImage3D:P,texImage2D:q,texImage3D:J,pixelStorei:me,getParameter:ie,updateUBOMapping:oe,uniformBlockBinding:_e,texStorage2D:ee,texStorage3D:se,texSubImage2D:v,texSubImage3D:I,compressedTexSubImage2D:F,compressedTexSubImage3D:B,scissor:ce,viewport:de,reset:Re}}function ly(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Oe,h=new WeakMap,u=new Set,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,v){return p?new OffscreenCanvas(P,v):Hr("canvas")}function g(P,v,I){let F=1,B=pt(P);if((B.width>I||B.height>I)&&(F=I/Math.max(B.width,B.height)),F<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let ee=Math.floor(F*B.width),se=Math.floor(F*B.height);d===void 0&&(d=x(ee,se));let q=v?x(ee,se):d;return q.width=ee,q.height=se,q.getContext("2d").drawImage(P,0,0,ee,se),ze("WebGLRenderer: Texture has been resized from ("+B.width+"x"+B.height+") to ("+ee+"x"+se+")."),q}else return"data"in P&&ze("WebGLRenderer: Image in DataTexture is too big ("+B.width+"x"+B.height+")."),P;return P}function m(P){return P.generateMipmaps}function y(P){i.generateMipmap(P)}function M(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(P,v,I,F,B,ee=!1){if(P!==null){if(i[P]!==void 0)return i[P];ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let se;F&&(se=e.get("EXT_texture_norm16"),se||ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=v;if(v===i.RED&&(I===i.FLOAT&&(q=i.R32F),I===i.HALF_FLOAT&&(q=i.R16F),I===i.UNSIGNED_BYTE&&(q=i.R8),I===i.UNSIGNED_SHORT&&se&&(q=se.R16_EXT),I===i.SHORT&&se&&(q=se.R16_SNORM_EXT)),v===i.RED_INTEGER&&(I===i.UNSIGNED_BYTE&&(q=i.R8UI),I===i.UNSIGNED_SHORT&&(q=i.R16UI),I===i.UNSIGNED_INT&&(q=i.R32UI),I===i.BYTE&&(q=i.R8I),I===i.SHORT&&(q=i.R16I),I===i.INT&&(q=i.R32I)),v===i.RG&&(I===i.FLOAT&&(q=i.RG32F),I===i.HALF_FLOAT&&(q=i.RG16F),I===i.UNSIGNED_BYTE&&(q=i.RG8),I===i.UNSIGNED_SHORT&&se&&(q=se.RG16_EXT),I===i.SHORT&&se&&(q=se.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(I===i.UNSIGNED_BYTE&&(q=i.RG8UI),I===i.UNSIGNED_SHORT&&(q=i.RG16UI),I===i.UNSIGNED_INT&&(q=i.RG32UI),I===i.BYTE&&(q=i.RG8I),I===i.SHORT&&(q=i.RG16I),I===i.INT&&(q=i.RG32I)),v===i.RGB_INTEGER&&(I===i.UNSIGNED_BYTE&&(q=i.RGB8UI),I===i.UNSIGNED_SHORT&&(q=i.RGB16UI),I===i.UNSIGNED_INT&&(q=i.RGB32UI),I===i.BYTE&&(q=i.RGB8I),I===i.SHORT&&(q=i.RGB16I),I===i.INT&&(q=i.RGB32I)),v===i.RGBA_INTEGER&&(I===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),I===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),I===i.UNSIGNED_INT&&(q=i.RGBA32UI),I===i.BYTE&&(q=i.RGBA8I),I===i.SHORT&&(q=i.RGBA16I),I===i.INT&&(q=i.RGBA32I)),v===i.RGB&&(I===i.UNSIGNED_SHORT&&se&&(q=se.RGB16_EXT),I===i.SHORT&&se&&(q=se.RGB16_SNORM_EXT),I===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),I===i.UNSIGNED_INT_10F_11F_11F_REV&&(q=i.R11F_G11F_B10F)),v===i.RGBA){let J=ee?Ha:Ze.getTransfer(B);I===i.FLOAT&&(q=i.RGBA32F),I===i.HALF_FLOAT&&(q=i.RGBA16F),I===i.UNSIGNED_BYTE&&(q=J===Mt?i.SRGB8_ALPHA8:i.RGBA8),I===i.UNSIGNED_SHORT&&se&&(q=se.RGBA16_EXT),I===i.SHORT&&se&&(q=se.RGBA16_SNORM_EXT),I===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),I===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function w(P,v){let I;return P?v===null||v===Ri||v===la?I=i.DEPTH24_STENCIL8:v===ri?I=i.DEPTH32F_STENCIL8:v===oa&&(I=i.DEPTH24_STENCIL8,ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ri||v===la?I=i.DEPTH_COMPONENT24:v===ri?I=i.DEPTH_COMPONENT32F:v===oa&&(I=i.DEPTH_COMPONENT16),I}function T(P,v){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==sn&&P.minFilter!==rn?Math.log2(Math.max(v.width,v.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?v.mipmaps.length:1}function A(P){let v=P.target;v.removeEventListener("dispose",A),E(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&u.delete(v)}function S(P){let v=P.target;v.removeEventListener("dispose",S),L(v)}function E(P){let v=n.get(P);if(v.__webglInit===void 0)return;let I=P.source,F=f.get(I);if(F){let B=F[v.__cacheKey];B.usedTimes--,B.usedTimes===0&&C(P),Object.keys(F).length===0&&f.delete(I)}n.remove(P)}function C(P){let v=n.get(P);i.deleteTexture(v.__webglTexture);let I=P.source,F=f.get(I);delete F[v.__cacheKey],a.memory.textures--}function L(P){let v=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let F=0;F<6;F++){if(Array.isArray(v.__webglFramebuffer[F]))for(let B=0;B<v.__webglFramebuffer[F].length;B++)i.deleteFramebuffer(v.__webglFramebuffer[F][B]);else i.deleteFramebuffer(v.__webglFramebuffer[F]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[F])}else{if(Array.isArray(v.__webglFramebuffer))for(let F=0;F<v.__webglFramebuffer.length;F++)i.deleteFramebuffer(v.__webglFramebuffer[F]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let F=0;F<v.__webglColorRenderbuffer.length;F++)v.__webglColorRenderbuffer[F]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[F]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let I=P.textures;for(let F=0,B=I.length;F<B;F++){let ee=n.get(I[F]);ee.__webglTexture&&(i.deleteTexture(ee.__webglTexture),a.memory.textures--),n.remove(I[F])}n.remove(P)}let N=0;function V(){N=0}function O(){return N}function W(P){N=P}function K(){let P=N;return P>=s.maxTextures&&ze("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),N+=1,P}function Q(P){let v=[];return v.push(P.wrapS),v.push(P.wrapT),v.push(P.wrapR||0),v.push(P.magFilter),v.push(P.minFilter),v.push(P.anisotropy),v.push(P.internalFormat),v.push(P.format),v.push(P.type),v.push(P.generateMipmaps),v.push(P.premultiplyAlpha),v.push(P.flipY),v.push(P.unpackAlignment),v.push(P.colorSpace),v.join()}function re(P,v){let I=n.get(P);if(P.isVideoTexture&&z(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&I.__version!==P.version){let F=P.image;if(F===null)ze("WebGLRenderer: Texture marked for update but no image data found.");else if(F.complete===!1)ze("WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(I,P,v);return}}else P.isExternalTexture&&(I.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,I.__webglTexture,i.TEXTURE0+v)}function $(P,v){let I=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&I.__version!==P.version){Ae(I,P,v);return}else P.isExternalTexture&&(I.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,I.__webglTexture,i.TEXTURE0+v)}function ae(P,v){let I=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&I.__version!==P.version){Ae(I,P,v);return}t.bindTexture(i.TEXTURE_3D,I.__webglTexture,i.TEXTURE0+v)}function he(P,v){let I=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&I.__version!==P.version){ye(I,P,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+v)}let Ue={[ii]:i.REPEAT,[ui]:i.CLAMP_TO_EDGE,[Br]:i.MIRRORED_REPEAT},Pe={[sn]:i.NEAREST,[Yl]:i.NEAREST_MIPMAP_NEAREST,[fr]:i.NEAREST_MIPMAP_LINEAR,[rn]:i.LINEAR,[aa]:i.LINEAR_MIPMAP_NEAREST,[Ai]:i.LINEAR_MIPMAP_LINEAR},_t={[_p]:i.NEVER,[Tp]:i.ALWAYS,[yp]:i.LESS,[Dc]:i.LEQUAL,[Mp]:i.EQUAL,[Fc]:i.GEQUAL,[Sp]:i.GREATER,[wp]:i.NOTEQUAL};function et(P,v){if(v.type===ri&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===rn||v.magFilter===aa||v.magFilter===fr||v.magFilter===Ai||v.minFilter===rn||v.minFilter===aa||v.minFilter===fr||v.minFilter===Ai)&&ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,Ue[v.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,Ue[v.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,Ue[v.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,Pe[v.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,Pe[v.minFilter]),v.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,_t[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===sn||v.minFilter!==fr&&v.minFilter!==Ai||v.type===ri&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let I=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ot(P,v){let I=!1;P.__webglInit===void 0&&(P.__webglInit=!0,v.addEventListener("dispose",A));let F=v.source,B=f.get(F);B===void 0&&(B={},f.set(F,B));let ee=Q(v);if(ee!==P.__cacheKey){B[ee]===void 0&&(B[ee]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,I=!0),B[ee].usedTimes++;let se=B[P.__cacheKey];se!==void 0&&(B[P.__cacheKey].usedTimes--,se.usedTimes===0&&C(v)),P.__cacheKey=ee,P.__webglTexture=B[ee].texture}return I}function te(P,v,I){return Math.floor(Math.floor(P/I)/v)}function ue(P,v,I,F){let ee=P.updateRanges;if(ee.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,I,F,v.data);else{ee.sort((me,ce)=>me.start-ce.start);let se=0;for(let me=1;me<ee.length;me++){let ce=ee[se],de=ee[me],oe=ce.start+ce.count,_e=te(de.start,v.width,4),Re=te(ce.start,v.width,4);de.start<=oe+1&&_e===Re&&te(de.start+de.count-1,v.width,4)===_e?ce.count=Math.max(ce.count,de.start+de.count-ce.start):(++se,ee[se]=de)}ee.length=se+1;let q=t.getParameter(i.UNPACK_ROW_LENGTH),J=t.getParameter(i.UNPACK_SKIP_PIXELS),ie=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let me=0,ce=ee.length;me<ce;me++){let de=ee[me],oe=Math.floor(de.start/4),_e=Math.ceil(de.count/4),Re=oe%v.width,D=Math.floor(oe/v.width),le=_e,Y=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Re),t.pixelStorei(i.UNPACK_SKIP_ROWS,D),t.texSubImage2D(i.TEXTURE_2D,0,Re,D,le,Y,I,F,v.data)}P.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,q),t.pixelStorei(i.UNPACK_SKIP_PIXELS,J),t.pixelStorei(i.UNPACK_SKIP_ROWS,ie)}}function Ae(P,v,I){let F=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(F=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(F=i.TEXTURE_3D);let B=ot(P,v),ee=v.source;t.bindTexture(F,P.__webglTexture,i.TEXTURE0+I);let se=n.get(ee);if(ee.version!==se.__version||B===!0){if(t.activeTexture(i.TEXTURE0+I),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let Y=Ze.getPrimaries(Ze.workingColorSpace),pe=v.colorSpace===fs?null:Ze.getPrimaries(v.colorSpace),ge=v.colorSpace===fs||Y===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge)}t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let J=g(v.image,!1,s.maxTextureSize);J=Dt(v,J);let ie=r.convert(v.format,v.colorSpace),me=r.convert(v.type),ce=_(v.internalFormat,ie,me,v.normalized,v.colorSpace,v.isVideoTexture);et(F,v);let de,oe=v.mipmaps,_e=v.isVideoTexture!==!0,Re=se.__version===void 0||B===!0,D=ee.dataReady,le=T(v,J);if(v.isDepthTexture)ce=w(v.format===Ns,v.type),Re&&(_e?t.texStorage2D(i.TEXTURE_2D,1,ce,J.width,J.height):t.texImage2D(i.TEXTURE_2D,0,ce,J.width,J.height,0,ie,me,null));else if(v.isDataTexture)if(oe.length>0){_e&&Re&&t.texStorage2D(i.TEXTURE_2D,le,ce,oe[0].width,oe[0].height);for(let Y=0,pe=oe.length;Y<pe;Y++)de=oe[Y],_e?D&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,de.width,de.height,ie,me,de.data):t.texImage2D(i.TEXTURE_2D,Y,ce,de.width,de.height,0,ie,me,de.data);v.generateMipmaps=!1}else _e?(Re&&t.texStorage2D(i.TEXTURE_2D,le,ce,J.width,J.height),D&&ue(v,J,ie,me)):t.texImage2D(i.TEXTURE_2D,0,ce,J.width,J.height,0,ie,me,J.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){_e&&Re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,ce,oe[0].width,oe[0].height,J.depth);for(let Y=0,pe=oe.length;Y<pe;Y++)if(de=oe[Y],v.format!==ai)if(ie!==null)if(_e){if(D)if(v.layerUpdates.size>0){let ge=Du(de.width,de.height,v.format,v.type);for(let ne of v.layerUpdates){let Ie=de.data.subarray(ne*ge/de.data.BYTES_PER_ELEMENT,(ne+1)*ge/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,ne,de.width,de.height,1,ie,Ie)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,de.width,de.height,J.depth,ie,de.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,ce,de.width,de.height,J.depth,0,de.data,0,0);else ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else _e?D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,de.width,de.height,J.depth,ie,me,de.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Y,ce,de.width,de.height,J.depth,0,ie,me,de.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{_e&&Re&&t.texStorage2D(i.TEXTURE_2D,le,ce,oe[0].width,oe[0].height);for(let Y=0,pe=oe.length;Y<pe;Y++)de=oe[Y],v.format!==ai?ie!==null?_e?D&&t.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,de.width,de.height,ie,de.data):t.compressedTexImage2D(i.TEXTURE_2D,Y,ce,de.width,de.height,0,de.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_e?D&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,de.width,de.height,ie,me,de.data):t.texImage2D(i.TEXTURE_2D,Y,ce,de.width,de.height,0,ie,me,de.data)}else if(v.isDataArrayTexture)if(_e){if(Re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,ce,J.width,J.height,J.depth),D)if(v.layerUpdates.size>0){let Y=Du(J.width,J.height,v.format,v.type);for(let pe of v.layerUpdates){let ge=J.data.subarray(pe*Y/J.data.BYTES_PER_ELEMENT,(pe+1)*Y/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,pe,J.width,J.height,1,ie,me,ge)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ie,me,J.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ce,J.width,J.height,J.depth,0,ie,me,J.data);else if(v.isData3DTexture)_e?(Re&&t.texStorage3D(i.TEXTURE_3D,le,ce,J.width,J.height,J.depth),D&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ie,me,J.data)):t.texImage3D(i.TEXTURE_3D,0,ce,J.width,J.height,J.depth,0,ie,me,J.data);else if(v.isFramebufferTexture){if(Re)if(_e)t.texStorage2D(i.TEXTURE_2D,le,ce,J.width,J.height);else{let Y=J.width,pe=J.height;for(let ge=0;ge<le;ge++)t.texImage2D(i.TEXTURE_2D,ge,ce,Y,pe,0,ie,me,null),Y>>=1,pe>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let Y=i.canvas;if(Y.hasAttribute("layoutsubtree")||Y.setAttribute("layoutsubtree","true"),J.parentNode!==Y){Y.appendChild(J),u.add(v),Y.onpaint=pe=>{let ge=pe.changedElements;for(let ne of u)ge.includes(ne.image)&&(ne.needsUpdate=!0)},Y.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,J);else{let ge=i.RGBA,ne=i.RGBA,Ie=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ge,ne,Ie,J)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(oe.length>0){if(_e&&Re){let Y=pt(oe[0]);t.texStorage2D(i.TEXTURE_2D,le,ce,Y.width,Y.height)}for(let Y=0,pe=oe.length;Y<pe;Y++)de=oe[Y],_e?D&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,ie,me,de):t.texImage2D(i.TEXTURE_2D,Y,ce,ie,me,de);v.generateMipmaps=!1}else if(_e){if(Re){let Y=pt(J);t.texStorage2D(i.TEXTURE_2D,le,ce,Y.width,Y.height)}D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ie,me,J)}else t.texImage2D(i.TEXTURE_2D,0,ce,ie,me,J);m(v)&&y(F),se.__version=ee.version,v.onUpdate&&v.onUpdate(v)}P.__version=v.version}function ye(P,v,I){if(v.image.length!==6)return;let F=ot(P,v),B=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+I);let ee=n.get(B);if(B.version!==ee.__version||F===!0){t.activeTexture(i.TEXTURE0+I);let se=Ze.getPrimaries(Ze.workingColorSpace),q=v.colorSpace===fs?null:Ze.getPrimaries(v.colorSpace),J=v.colorSpace===fs||se===q?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let ie=v.isCompressedTexture||v.image[0].isCompressedTexture,me=v.image[0]&&v.image[0].isDataTexture,ce=[];for(let ne=0;ne<6;ne++)!ie&&!me?ce[ne]=g(v.image[ne],!0,s.maxCubemapSize):ce[ne]=me?v.image[ne].image:v.image[ne],ce[ne]=Dt(v,ce[ne]);let de=ce[0],oe=r.convert(v.format,v.colorSpace),_e=r.convert(v.type),Re=_(v.internalFormat,oe,_e,v.normalized,v.colorSpace),D=v.isVideoTexture!==!0,le=ee.__version===void 0||F===!0,Y=B.dataReady,pe=T(v,de);et(i.TEXTURE_CUBE_MAP,v);let ge;if(ie){D&&le&&t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,Re,de.width,de.height);for(let ne=0;ne<6;ne++){ge=ce[ne].mipmaps;for(let Ie=0;Ie<ge.length;Ie++){let Fe=ge[Ie];v.format!==ai?oe!==null?D?Y&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ie,0,0,Fe.width,Fe.height,oe,Fe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ie,Re,Fe.width,Fe.height,0,Fe.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ie,0,0,Fe.width,Fe.height,oe,_e,Fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ie,Re,Fe.width,Fe.height,0,oe,_e,Fe.data)}}}else{if(ge=v.mipmaps,D&&le){ge.length>0&&pe++;let ne=pt(ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,Re,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(me){D?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ce[ne].width,ce[ne].height,oe,_e,ce[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Re,ce[ne].width,ce[ne].height,0,oe,_e,ce[ne].data);for(let Ie=0;Ie<ge.length;Ie++){let Pt=ge[Ie].image[ne].image;D?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ie+1,0,0,Pt.width,Pt.height,oe,_e,Pt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ie+1,Re,Pt.width,Pt.height,0,oe,_e,Pt.data)}}else{D?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,oe,_e,ce[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Re,oe,_e,ce[ne]);for(let Ie=0;Ie<ge.length;Ie++){let Fe=ge[Ie];D?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ie+1,0,0,oe,_e,Fe.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ie+1,Re,oe,_e,Fe.image[ne])}}}m(v)&&y(i.TEXTURE_CUBE_MAP),ee.__version=B.version,v.onUpdate&&v.onUpdate(v)}P.__version=v.version}function ve(P,v,I,F,B,ee){let se=r.convert(I.format,I.colorSpace),q=r.convert(I.type),J=_(I.internalFormat,se,q,I.normalized,I.colorSpace),ie=n.get(v),me=n.get(I);if(me.__renderTarget=v,!ie.__hasExternalTextures){let ce=Math.max(1,v.width>>ee),de=Math.max(1,v.height>>ee);B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?t.texImage3D(B,ee,J,ce,de,v.depth,0,se,q,null):t.texImage2D(B,ee,J,ce,de,0,se,q,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),st(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,F,B,me.__webglTexture,0,xt(v)):(B===i.TEXTURE_2D||B>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&B<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,F,B,me.__webglTexture,ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ve(P,v,I){if(i.bindRenderbuffer(i.RENDERBUFFER,P),v.depthBuffer){let F=v.depthTexture,B=F&&F.isDepthTexture?F.type:null,ee=w(v.stencilBuffer,B),se=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;st(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xt(v),ee,v.width,v.height):I?i.renderbufferStorageMultisample(i.RENDERBUFFER,xt(v),ee,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ee,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,P)}else{let F=v.textures;for(let B=0;B<F.length;B++){let ee=F[B],se=r.convert(ee.format,ee.colorSpace),q=r.convert(ee.type),J=_(ee.internalFormat,se,q,ee.normalized,ee.colorSpace);st(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xt(v),J,v.width,v.height):I?i.renderbufferStorageMultisample(i.RENDERBUFFER,xt(v),J,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,J,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ot(P,v,I){let F=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let B=n.get(v.depthTexture);if(B.__renderTarget=v,(!B.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),F){if(B.__webglInit===void 0&&(B.__webglInit=!0,v.depthTexture.addEventListener("dispose",A)),B.__webglTexture===void 0){B.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture),et(i.TEXTURE_CUBE_MAP,v.depthTexture);let ie=r.convert(v.depthTexture.format),me=r.convert(v.depthTexture.type),ce;v.depthTexture.format===ki?ce=i.DEPTH_COMPONENT24:v.depthTexture.format===Ns&&(ce=i.DEPTH24_STENCIL8);for(let de=0;de<6;de++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ce,v.width,v.height,0,ie,me,null)}}else re(v.depthTexture,0);let ee=B.__webglTexture,se=xt(v),q=F?i.TEXTURE_CUBE_MAP_POSITIVE_X+I:i.TEXTURE_2D,J=v.depthTexture.format===Ns?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===ki)st(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,q,ee,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,J,q,ee,0);else if(v.depthTexture.format===Ns)st(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,q,ee,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,J,q,ee,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function je(P){let v=n.get(P),I=P.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==P.depthTexture){let F=P.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),F){let B=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,F.removeEventListener("dispose",B)};F.addEventListener("dispose",B),v.__depthDisposeCallback=B}v.__boundDepthTexture=F}if(P.depthTexture&&!v.__autoAllocateDepthBuffer)if(I)for(let F=0;F<6;F++)Ot(v.__webglFramebuffer[F],P,F);else{let F=P.texture.mipmaps;F&&F.length>0?Ot(v.__webglFramebuffer[0],P,0):Ot(v.__webglFramebuffer,P,0)}else if(I){v.__webglDepthbuffer=[];for(let F=0;F<6;F++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[F]),v.__webglDepthbuffer[F]===void 0)v.__webglDepthbuffer[F]=i.createRenderbuffer(),Ve(v.__webglDepthbuffer[F],P,!1);else{let B=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=v.__webglDepthbuffer[F];i.bindRenderbuffer(i.RENDERBUFFER,ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,B,i.RENDERBUFFER,ee)}}else{let F=P.texture.mipmaps;if(F&&F.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Ve(v.__webglDepthbuffer,P,!1);else{let B=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,B,i.RENDERBUFFER,ee)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(P,v,I){let F=n.get(P);v!==void 0&&ve(F.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),I!==void 0&&je(P)}function dt(P){let v=P.texture,I=n.get(P),F=n.get(v);P.addEventListener("dispose",S);let B=P.textures,ee=P.isWebGLCubeRenderTarget===!0,se=B.length>1;if(se||(F.__webglTexture===void 0&&(F.__webglTexture=i.createTexture()),F.__version=v.version,a.memory.textures++),ee){I.__webglFramebuffer=[];for(let q=0;q<6;q++)if(v.mipmaps&&v.mipmaps.length>0){I.__webglFramebuffer[q]=[];for(let J=0;J<v.mipmaps.length;J++)I.__webglFramebuffer[q][J]=i.createFramebuffer()}else I.__webglFramebuffer[q]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){I.__webglFramebuffer=[];for(let q=0;q<v.mipmaps.length;q++)I.__webglFramebuffer[q]=i.createFramebuffer()}else I.__webglFramebuffer=i.createFramebuffer();if(se)for(let q=0,J=B.length;q<J;q++){let ie=n.get(B[q]);ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&st(P)===!1){I.__webglMultisampledFramebuffer=i.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let q=0;q<B.length;q++){let J=B[q];I.__webglColorRenderbuffer[q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,I.__webglColorRenderbuffer[q]);let ie=r.convert(J.format,J.colorSpace),me=r.convert(J.type),ce=_(J.internalFormat,ie,me,J.normalized,J.colorSpace,P.isXRRenderTarget===!0),de=xt(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,de,ce,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+q,i.RENDERBUFFER,I.__webglColorRenderbuffer[q])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(I.__webglDepthRenderbuffer=i.createRenderbuffer(),Ve(I.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ee){t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture),et(i.TEXTURE_CUBE_MAP,v);for(let q=0;q<6;q++)if(v.mipmaps&&v.mipmaps.length>0)for(let J=0;J<v.mipmaps.length;J++)ve(I.__webglFramebuffer[q][J],P,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+q,J);else ve(I.__webglFramebuffer[q],P,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);m(v)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){for(let q=0,J=B.length;q<J;q++){let ie=B[q],me=n.get(ie),ce=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ce=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,me.__webglTexture),et(ce,ie),ve(I.__webglFramebuffer,P,ie,i.COLOR_ATTACHMENT0+q,ce,0),m(ie)&&y(ce)}t.unbindTexture()}else{let q=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(q=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(q,F.__webglTexture),et(q,v),v.mipmaps&&v.mipmaps.length>0)for(let J=0;J<v.mipmaps.length;J++)ve(I.__webglFramebuffer[J],P,v,i.COLOR_ATTACHMENT0,q,J);else ve(I.__webglFramebuffer,P,v,i.COLOR_ATTACHMENT0,q,0);m(v)&&y(q),t.unbindTexture()}P.depthBuffer&&je(P)}function Je(P){let v=P.textures;for(let I=0,F=v.length;I<F;I++){let B=v[I];if(m(B)){let ee=M(P),se=n.get(B).__webglTexture;t.bindTexture(ee,se),y(ee),t.unbindTexture()}}}let Et=[],Rt=[];function Ct(P){if(P.samples>0){if(st(P)===!1){let v=P.textures,I=P.width,F=P.height,B=i.COLOR_BUFFER_BIT,ee=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=n.get(P),q=v.length>1;if(q)for(let ie=0;ie<v.length;ie++)t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer);let J=P.texture.mipmaps;J&&J.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let ie=0;ie<v.length;ie++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(B|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(B|=i.STENCIL_BUFFER_BIT)),q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,se.__webglColorRenderbuffer[ie]);let me=n.get(v[ie]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,me,0)}i.blitFramebuffer(0,0,I,F,0,0,I,F,B,i.NEAREST),l===!0&&(Et.length=0,Rt.length=0,Et.push(i.COLOR_ATTACHMENT0+ie),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(Et.push(ee),Rt.push(ee),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Rt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Et))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),q)for(let ie=0;ie<v.length;ie++){t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,se.__webglColorRenderbuffer[ie]);let me=n.get(v[ie]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.TEXTURE_2D,me,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let v=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function xt(P){return Math.min(s.maxSamples,P.samples)}function st(P){let v=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function z(P){let v=a.render.frame;h.get(P)!==v&&(h.set(P,v),P.update())}function Dt(P,v){let I=P.colorSpace,F=P.format,B=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||I!==Un&&I!==fs&&(Ze.getTransfer(I)===Mt?(F!==ai||B!==Jn)&&ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xe("WebGLTextures: Unsupported texture color space:",I)),v}function pt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=V,this.getTextureUnits=O,this.setTextureUnits=W,this.setTexture2D=re,this.setTexture2DArray=$,this.setTexture3D=ae,this.setTextureCube=he,this.rebindTextures=ut,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=st,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function cy(i,e){function t(n,s=fs){let r,a=Ze.getTransfer(s);if(n===Jn)return i.UNSIGNED_BYTE;if(n===Zl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===$l)return i.UNSIGNED_SHORT_5_5_5_1;if(n===yu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Mu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===vu)return i.BYTE;if(n===_u)return i.SHORT;if(n===oa)return i.UNSIGNED_SHORT;if(n===Jl)return i.INT;if(n===Ri)return i.UNSIGNED_INT;if(n===ri)return i.FLOAT;if(n===fn)return i.HALF_FLOAT;if(n===Su)return i.ALPHA;if(n===wu)return i.RGB;if(n===ai)return i.RGBA;if(n===ki)return i.DEPTH_COMPONENT;if(n===Ns)return i.DEPTH_STENCIL;if(n===Ql)return i.RED;if(n===ec)return i.RED_INTEGER;if(n===ks)return i.RG;if(n===tc)return i.RG_INTEGER;if(n===nc)return i.RGBA_INTEGER;if(n===mo||n===go||n===xo||n===bo)if(a===Mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===mo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===mo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===go)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===bo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ic||n===sc||n===rc||n===ac)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ic)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===sc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===rc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ac)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===oc||n===lc||n===cc||n===hc||n===uc||n===vo||n===dc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===oc||n===lc)return a===Mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===cc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===hc)return r.COMPRESSED_R11_EAC;if(n===uc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===vo)return r.COMPRESSED_RG11_EAC;if(n===dc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===fc||n===pc||n===mc||n===gc||n===xc||n===bc||n===vc||n===_c||n===yc||n===Mc||n===Sc||n===wc||n===Tc||n===Ec)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===fc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===pc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===mc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===gc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===bc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===vc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_c)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===yc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Mc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Sc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Tc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ec)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ac||n===Rc||n===Cc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ac)return a===Mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Rc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Cc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Pc||n===Ic||n===_o||n===Lc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Pc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ic)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_o)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Lc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===la?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var hy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uy=`
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

}`,ju=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Za(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Vt({vertexShader:hy,fragmentShader:uy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xe(new Qt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ku=class extends Ui{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,x=typeof XRWebGLBinding<"u",g=new ju,m={},y=t.getContextAttributes(),M=null,_=null,w=[],T=[],A=new Oe,S=null,E=null,C=new nn;C.viewport=new At;let L=new nn;L.viewport=new At;let N=[C,L],V=new Gl,O=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ue=w[te];return ue===void 0&&(ue=new Wr,w[te]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(te){let ue=w[te];return ue===void 0&&(ue=new Wr,w[te]=ue),ue.getGripSpace()},this.getHand=function(te){let ue=w[te];return ue===void 0&&(ue=new Wr,w[te]=ue),ue.getHandSpace()};function K(te){let ue=T.indexOf(te.inputSource);if(ue===-1)return;let Ae=w[ue];Ae!==void 0&&(Ae.update(te.inputSource,te.frame,c||a),Ae.dispatchEvent({type:te.type,data:te.inputSource}))}function Q(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",re);for(let te=0;te<w.length;te++){let ue=T[te];ue!==null&&(T[te]=null,w[te].disconnect(ue))}O=null,W=null,g.reset();for(let te in m)delete m[te];if(e.setRenderTarget(M),f=null,d=null,u=null,s=null,_=null,ot.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(A.width,A.height,!1),E!==null){let te=E.camera;te.fov=E.fov,te.zoom=E.zoom,te.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,n.isPresenting===!0&&ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,n.isPresenting===!0&&ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",re),y.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,ye=null,ve=null;y.depth&&(ve=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ae=y.stencil?Ns:ki,ye=y.stencil?la:Ri);let Ve={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Ve),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Jt(d.textureWidth,d.textureHeight,{format:ai,type:Jn,depthTexture:new Is(d.textureWidth,d.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Ae={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Ae),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Jt(f.framebufferWidth,f.framebufferHeight,{format:ai,type:Jn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ot.setContext(s),ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function re(te){for(let ue=0;ue<te.removed.length;ue++){let Ae=te.removed[ue],ye=T.indexOf(Ae);ye>=0&&(T[ye]=null,w[ye].disconnect(Ae))}for(let ue=0;ue<te.added.length;ue++){let Ae=te.added[ue],ye=T.indexOf(Ae);if(ye===-1){for(let Ve=0;Ve<w.length;Ve++)if(Ve>=T.length){T.push(Ae),ye=Ve;break}else if(T[Ve]===null){T[Ve]=Ae,ye=Ve;break}if(ye===-1)break}let ve=w[ye];ve&&ve.connect(Ae)}}let $=new U,ae=new U;function he(te,ue,Ae){$.setFromMatrixPosition(ue.matrixWorld),ae.setFromMatrixPosition(Ae.matrixWorld);let ye=$.distanceTo(ae),ve=ue.projectionMatrix.elements,Ve=Ae.projectionMatrix.elements,Ot=ve[14]/(ve[10]-1),je=ve[14]/(ve[10]+1),ut=(ve[9]+1)/ve[5],dt=(ve[9]-1)/ve[5],Je=(ve[8]-1)/ve[0],Et=(Ve[8]+1)/Ve[0],Rt=Ot*Je,Ct=Ot*Et,xt=ye/(-Je+Et),st=xt*-Je;if(ue.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(st),te.translateZ(xt),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),ve[10]===-1)te.projectionMatrix.copy(ue.projectionMatrix),te.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{let z=Ot+xt,Dt=je+xt,pt=Rt-st,P=Ct+(ye-st),v=ut*je/Dt*z,I=dt*je/Dt*z;te.projectionMatrix.makePerspective(pt,P,v,I,z,Dt),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function Ue(te,ue){ue===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ue.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;let ue=te.near,Ae=te.far;g.texture!==null&&(g.depthNear>0&&(ue=g.depthNear),g.depthFar>0&&(Ae=g.depthFar)),V.near=L.near=C.near=ue,V.far=L.far=C.far=Ae,(O!==V.near||W!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),O=V.near,W=V.far),V.layers.mask=te.layers.mask|6,C.layers.mask=V.layers.mask&-5,L.layers.mask=V.layers.mask&-3;let ye=te.parent,ve=V.cameras;Ue(V,ye);for(let Ve=0;Ve<ve.length;Ve++)Ue(ve[Ve],ye);ve.length===2?he(V,C,L):V.projectionMatrix.copy(C.projectionMatrix),E===null&&te.isPerspectiveCamera&&(E={camera:te,fov:te.fov,zoom:te.zoom}),Pe(te,V,ye)};function Pe(te,ue,Ae){Ae===null?te.matrix.copy(ue.matrixWorld):(te.matrix.copy(Ae.matrixWorld),te.matrix.invert(),te.matrix.multiply(ue.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ue.projectionMatrix),te.projectionMatrixInverse.copy(ue.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=ir*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(te){l=te,d!==null&&(d.fixedFoveation=te),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=te)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(V)},this.getCameraTexture=function(te){return m[te]};let _t=null;function et(te,ue){if(h=ue.getViewerPose(c||a),p=ue,h!==null){let Ae=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let ye=!1;Ae.length!==V.cameras.length&&(V.cameras.length=0,ye=!0);for(let je=0;je<Ae.length;je++){let ut=Ae[je],dt=null;if(f!==null)dt=f.getViewport(ut);else{let Et=u.getViewSubImage(d,ut);dt=Et.viewport,je===0&&(e.setRenderTargetTextures(_,Et.colorTexture,Et.depthStencilTexture),e.setRenderTarget(_))}let Je=N[je];Je===void 0&&(Je=new nn,Je.layers.enable(je),Je.viewport=new At,N[je]=Je),Je.matrix.fromArray(ut.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(ut.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(dt.x,dt.y,dt.width,dt.height),je===0&&(V.matrix.copy(Je.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),ye===!0&&V.cameras.push(Je)}let ve=s.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let je=u.getDepthInformation(Ae[0]);je&&je.isValid&&je.texture&&g.init(je,s.renderState)}if(ve&&ve.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let je=0;je<Ae.length;je++){let ut=Ae[je].camera;if(ut){let dt=m[ut];dt||(dt=new Za,m[ut]=dt);let Je=u.getCameraImage(ut);dt.sourceTexture=Je}}}}for(let Ae=0;Ae<w.length;Ae++){let ye=T[Ae],ve=w[Ae];ye!==null&&ve!==void 0&&ve.update(ye,ue,c||a)}_t&&_t(te,ue),ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ue}),p=null}let ot=new em;ot.setAnimationLoop(et),this.setAnimationLoop=function(te){_t=te},this.dispose=function(){}}},dy=new Ye,am=new Ke;am.set(-1,0,0,0,1,0,0,0,1);function fy(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Pu(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,y,M,_){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,_)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,y,M):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===dn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===dn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let y=e.get(m),M=y.envMap,_=y.envMapRotation;M&&(g.envMap.value=M,g.envMapRotation.value.setFromMatrix4(dy.makeRotationFromEuler(_)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(am),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,y,M){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*y,g.scale.value=M*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,y){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===dn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let y=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function py(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,w){let T=w.program;n.uniformBlockBinding(_,T)}function c(_,w){let T=s[_.id];T===void 0&&(g(_),T=h(_),s[_.id]=T,_.addEventListener("dispose",y));let A=w.program;n.updateUBOMapping(_,A);let S=e.render.frame;r[_.id]!==S&&(d(_),r[_.id]=S)}function h(_){let w=u();_.__bindingPointIndex=w;let T=i.createBuffer(),A=_.__size,S=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,A,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,T),T}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return Xe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let w=s[_.id],T=_.uniforms,A=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let S=0,E=T.length;S<E;S++){let C=T[S];if(Array.isArray(C))for(let L=0,N=C.length;L<N;L++)f(C[L],S,L,A);else f(C,S,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,w,T,A){if(x(_,w,T,A)===!0){let S=_.__offset,E=_.value;if(Array.isArray(E)){let C=0;for(let L=0;L<E.length;L++){let N=E[L],V=m(N);p(N,_.__data,C),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(C+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(E,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,S,_.__data)}}function p(_,w,T){typeof _=="number"||typeof _=="boolean"?w[0]=_:_.isMatrix3?(w[0]=_.elements[0],w[1]=_.elements[1],w[2]=_.elements[2],w[3]=0,w[4]=_.elements[3],w[5]=_.elements[4],w[6]=_.elements[5],w[7]=0,w[8]=_.elements[6],w[9]=_.elements[7],w[10]=_.elements[8],w[11]=0):ArrayBuffer.isView(_)?w.set(new _.constructor(_.buffer,_.byteOffset,w.length)):_.toArray(w,T)}function x(_,w,T,A){let S=_.value,E=w+"_"+T;if(A[E]===void 0)return typeof S=="number"||typeof S=="boolean"?A[E]=S:ArrayBuffer.isView(S)?A[E]=S.slice():A[E]=S.clone(),!0;{let C=A[E];if(typeof S=="number"||typeof S=="boolean"){if(C!==S)return A[E]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(C.equals(S)===!1)return C.copy(S),!0}}return!1}function g(_){let w=_.uniforms,T=0,A=16;for(let E=0,C=w.length;E<C;E++){let L=Array.isArray(w[E])?w[E]:[w[E]];for(let N=0,V=L.length;N<V;N++){let O=L[N],W=Array.isArray(O.value)?O.value:[O.value];for(let K=0,Q=W.length;K<Q;K++){let re=W[K],$=m(re),ae=T%A,he=ae%$.boundary,Ue=ae+he;T+=he,Ue!==0&&A-Ue<$.storage&&(T+=A-Ue),O.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=T,T+=$.storage}}}let S=T%A;return S>0&&(T+=A-S),_.__size=T,_.__cache={},this}function m(_){let w={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(w.boundary=4,w.storage=4):_.isVector2?(w.boundary=8,w.storage=8):_.isVector3||_.isColor?(w.boundary=16,w.storage=12):_.isVector4?(w.boundary=16,w.storage=16):_.isMatrix3?(w.boundary=48,w.storage=48):_.isMatrix4?(w.boundary=64,w.storage=64):_.isTexture?ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(w.boundary=16,w.storage=_.byteLength):ze("WebGLRenderer: Unsupported uniform value type.",_),w}function y(_){let w=_.target;w.removeEventListener("dispose",y);let T=a.indexOf(w.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function M(){for(let _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:l,update:c,dispose:M}}var my=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Wi=null;function gy(){return Wi===null&&(Wi=new Yr(my,16,16,ks,fn),Wi.name="DFG_LUT",Wi.minFilter=rn,Wi.magFilter=rn,Wi.wrapS=ui,Wi.wrapT=ui,Wi.generateMipmaps=!1,Wi.needsUpdate=!0),Wi}var Oc=class{constructor(e={}){let{canvas:t=Ep(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Jn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let x=f,g=new Set([nc,tc,ec]),m=new Set([Jn,Ri,oa,la,Zl,$l]),y=new Uint32Array(4),M=new Int32Array(4),_=new U,w=null,T=null,A=[],S=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,L=!1,N=null,V=null,O=null,W=null;this._outputColorSpace=Lt;let K=0,Q=0,re=null,$=-1,ae=null,he=new At,Ue=new At,Pe=null,_t=new be(0),et=0,ot=t.width,te=t.height,ue=1,Ae=null,ye=null,ve=new At(0,0,ot,te),Ve=new At(0,0,ot,te),Ot=!1,je=new Jr,ut=!1,dt=!1,Je=new Ye,Et=new U,Rt=new At,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},xt=!1;function st(){return re===null?ue:1}let z=n;function Dt(R,H){return t.getContext(R,H)}let pt,P,v,I,F,B,ee,se,q,J,ie,me,ce,de,oe,_e,Re,D,le,Y,pe,ge,ne;try{let R={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Pt,!1),t.addEventListener("webglcontextrestored",mt,!1),t.addEventListener("webglcontextcreationerror",ei,!1),z===null){let H="webgl2";if(z=Dt(H,R),z===null)throw Dt(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ie()}catch(R){throw t.removeEventListener("webglcontextlost",Pt,!1),t.removeEventListener("webglcontextrestored",mt,!1),t.removeEventListener("webglcontextcreationerror",ei,!1),Xe("WebGLRenderer: "+R.message),R}function Ie(){pt=new Sv(z),pt.init(),pe=new cy(z,pt),P=new fv(z,pt,e,pe),v=new oy(z,pt),P.reversedDepthBuffer&&d&&v.buffers.depth.setReversed(!0),V=z.createFramebuffer(),O=z.createFramebuffer(),W=z.createFramebuffer(),I=new Ev(z),F=new j_,B=new ly(z,pt,v,F,P,pe,I),ee=new Mv(C),se=new R0(z),ge=new uv(z,se),q=new wv(z,se,I,ge),J=new Rv(z,q,se,ge,I),D=new Av(z,P,B),oe=new pv(F),ie=new X_(C,ee,pt,P,ge,oe),me=new fy(C,F),ce=new Y_,de=new ty(pt),Re=new hv(C,ee,v,J,p,l),_e=new ay(C,J,P),ne=new py(z,I,P,v),le=new dv(z,pt,I),Y=new Tv(z,pt,I),I.programs=ie.programs,C.capabilities=P,C.extensions=pt,C.properties=F,C.renderLists=ce,C.shadowMap=_e,C.state=v,C.info=I}x!==Jn&&(E=new Pv(x,t.width,t.height,o,s,r));let Fe=new Ku(C,z);this.xr=Fe,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let R=pt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=pt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(R){R!==void 0&&(ue=R,this.setSize(ot,te,!1))},this.getSize=function(R){return R.set(ot,te)},this.setSize=function(R,H,Z=!0){if(Fe.isPresenting){ze("WebGLRenderer: Can't change size while VR device is presenting.");return}ot=R,te=H,t.width=Math.floor(R*ue),t.height=Math.floor(H*ue),Z===!0&&(t.style.width=R+"px",t.style.height=H+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,R,H)},this.getDrawingBufferSize=function(R){return R.set(ot*ue,te*ue).floor()},this.setDrawingBufferSize=function(R,H,Z){ot=R,te=H,ue=Z,t.width=Math.floor(R*Z),t.height=Math.floor(H*Z),this.setViewport(0,0,R,H)},this.setEffects=function(R){if(x===Jn){Xe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let H=0;H<R.length;H++)if(R[H].isOutputPass===!0){ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(he)},this.getViewport=function(R){return R.copy(ve)},this.setViewport=function(R,H,Z,X){R.isVector4?ve.set(R.x,R.y,R.z,R.w):ve.set(R,H,Z,X),v.viewport(he.copy(ve).multiplyScalar(ue).round())},this.getScissor=function(R){return R.copy(Ve)},this.setScissor=function(R,H,Z,X){R.isVector4?Ve.set(R.x,R.y,R.z,R.w):Ve.set(R,H,Z,X),v.scissor(Ue.copy(Ve).multiplyScalar(ue).round())},this.getScissorTest=function(){return Ot},this.setScissorTest=function(R){v.setScissorTest(Ot=R)},this.setOpaqueSort=function(R){Ae=R},this.setTransparentSort=function(R){ye=R},this.getClearColor=function(R){return R.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(R=!0,H=!0,Z=!0){let X=0;if(R){let j=!1;if(re!==null){let Ee=re.texture.format;j=g.has(Ee)}if(j){let Ee=re.texture.type,Le=m.has(Ee),we=Re.getClearColor(),Ne=Re.getClearAlpha(),Be=we.r,tt=we.g,lt=we.b;Le?(y[0]=Be,y[1]=tt,y[2]=lt,y[3]=Ne,z.clearBufferuiv(z.COLOR,0,y)):(M[0]=Be,M[1]=tt,M[2]=lt,M[3]=Ne,z.clearBufferiv(z.COLOR,0,M))}else X|=z.COLOR_BUFFER_BIT}H&&(X|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(X|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&z.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),N=R},this.dispose=function(){t.removeEventListener("webglcontextlost",Pt,!1),t.removeEventListener("webglcontextrestored",mt,!1),t.removeEventListener("webglcontextcreationerror",ei,!1),Re.dispose(),ce.dispose(),de.dispose(),F.dispose(),ee.dispose(),J.dispose(),ge.dispose(),ne.dispose(),ie.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",nf),Fe.removeEventListener("sessionend",sf),Ys.stop()};function Pt(R){R.preventDefault(),Ga("WebGLRenderer: Context Lost."),L=!0}function mt(){Ga("WebGLRenderer: Context Restored."),L=!1;let R=I.autoReset,H=_e.enabled,Z=_e.autoUpdate,X=_e.needsUpdate,j=_e.type;Ie(),I.autoReset=R,_e.enabled=H,_e.autoUpdate=Z,_e.needsUpdate=X,_e.type=j}function ei(R){Xe("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Rn(R){let H=R.target;H.removeEventListener("dispose",Rn),Pa(H)}function Pa(R){qn(R),F.remove(R)}function qn(R){let H=F.get(R).programs;H!==void 0&&(H.forEach(function(Z){ie.releaseProgram(Z)}),R.isShaderMaterial&&ie.releaseShaderCache(R))}this.renderBufferDirect=function(R,H,Z,X,j,Ee){H===null&&(H=Ct);let Le=j.isMesh&&j.matrixWorld.determinantAffine()<0,we=bg(R,H,Z,X,j);v.setMaterial(X,Le);let Ne=Z.index,Be=1;if(X.wireframe===!0){if(Ne=q.getWireframeAttribute(Z),Ne===void 0)return;Be=2}let tt=Z.drawRange,lt=Z.attributes.position,ke=tt.start*Be,It=(tt.start+tt.count)*Be;Ee!==null&&(ke=Math.max(ke,Ee.start*Be),It=Math.min(It,(Ee.start+Ee.count)*Be)),Ne!==null?(ke=Math.max(ke,0),It=Math.min(It,Ne.count)):lt!=null&&(ke=Math.max(ke,0),It=Math.min(It,lt.count));let cn=It-ke;if(cn<0||cn===1/0)return;ge.setup(j,X,we,Z,Ne);let jt,Ht=le;if(Ne!==null&&(jt=se.get(Ne),Ht=Y,Ht.setIndex(jt)),j.isMesh)X.wireframe===!0?(v.setLineWidth(X.wireframeLinewidth*st()),Ht.setMode(z.LINES)):Ht.setMode(z.TRIANGLES);else if(j.isLine){let Cn=X.linewidth;Cn===void 0&&(Cn=1),v.setLineWidth(Cn*st()),j.isLineSegments?Ht.setMode(z.LINES):j.isLineLoop?Ht.setMode(z.LINE_LOOP):Ht.setMode(z.LINE_STRIP)}else j.isPoints?Ht.setMode(z.POINTS):j.isSprite&&Ht.setMode(z.TRIANGLES);if(j.isBatchedMesh)if(pt.get("WEBGL_multi_draw"))Ht.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{let Cn=j._multiDrawStarts,Ce=j._multiDrawCounts,Nn=j._multiDrawCount,bt=Ne?se.get(Ne).bytesPerElement:1,ci=F.get(X).currentProgram.getUniforms();for(let Di=0;Di<Nn;Di++)ci.setValue(z,"_gl_DrawID",Di),Ht.render(Cn[Di]/bt,Ce[Di])}else if(j.isInstancedMesh)Ht.renderInstances(ke,cn,j.count);else if(Z.isInstancedBufferGeometry){let Cn=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Ce=Math.min(Z.instanceCount,Cn);Ht.renderInstances(ke,cn,Ce)}else Ht.render(ke,cn)};function _r(R,H,Z,X){N!==null&&R.isNodeMaterial&&N.setObject(X,R),ut===!0&&oe.setState(R,Z,!1),R.transparent===!0&&R.side===$t&&R.forceSinglePass===!1?(R.side=dn,R.needsUpdate=!0,Wo(R,H,X),R.side=Vi,R.needsUpdate=!0,Wo(R,H,X),R.side=$t):Wo(R,H,X)}this.compile=function(R,H,Z=null){Z===null&&(Z=R),N!==null&&N.renderStart(R,H,Z),T=de.get(Z),T.init(H),S.push(T),Z.traverseVisible(function(j){j.isLight&&j.layers.test(H.layers)&&(T.pushLight(j),j.castShadow&&T.pushShadow(j))}),R!==Z&&R.traverseVisible(function(j){j.isLight&&j.layers.test(H.layers)&&(T.pushLight(j),j.castShadow&&T.pushShadow(j))}),T.setupLights(),N!==null&&N.updateLights(T.state.lightsArray),dt=this.localClippingEnabled,ut=oe.init(this.clippingPlanes,dt),ut===!0&&oe.setGlobalState(this.clippingPlanes,H),N!==null&&_e.render(T.state.shadowsArray,Z,H);let X=new Set;return R.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;let Ee=j.material;if(Ee)if(Array.isArray(Ee))for(let Le=0;Le<Ee.length;Le++){let we=Ee[Le];_r(we,Z,H,j),X.add(we)}else _r(Ee,Z,H,j),X.add(Ee)}),T=S.pop(),N!==null&&N.renderEnd(),X},this.compileAsync=function(R,H,Z=null){let X=this.compile(R,H,Z);return new Promise(j=>{function Ee(){if(X.forEach(function(Le){let Ne=F.get(Le).currentProgram;(Ne===void 0||Ne.isReady())&&X.delete(Le)}),X.size===0){j(R);return}setTimeout(Ee,10)}pt.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Ch=null;function gg(R){Ch&&Ch(R)}function nf(){Ys.stop()}function sf(){Ys.start()}let Ys=new em;Ys.setAnimationLoop(gg),typeof self<"u"&&Ys.setContext(self),this.setAnimationLoop=function(R){Ch=R,Fe.setAnimationLoop(R),R===null?Ys.stop():Ys.start()},Fe.addEventListener("sessionstart",nf),Fe.addEventListener("sessionend",sf),this.render=function(R,H){if(H!==void 0&&H.isCamera!==!0){Xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;N!==null&&N.renderStart(R,H);let Z=Fe.enabled===!0&&Fe.isPresenting===!0,X=E!==null&&(re===null||Z)&&E.begin(C,re);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(H),H=Fe.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,H,re),T=de.get(R,S.length),T.init(H),T.state.textureUnits=B.getTextureUnits(),S.push(T),Je.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),je.setFromProjectionMatrix(Je,wi,H.reversedDepth),dt=this.localClippingEnabled,ut=oe.init(this.clippingPlanes,dt),w=ce.get(R,A.length),w.init(),A.push(w),Fe.enabled===!0&&Fe.isPresenting===!0){let Le=C.xr.getDepthSensingMesh();Le!==null&&Ph(Le,H,-1/0,C.sortObjects)}Ph(R,H,0,C.sortObjects),w.finish(),N!==null&&N.updateLights(T.state.lightsArray),C.sortObjects===!0&&w.sort(Ae,ye),xt=Fe.enabled===!1||Fe.isPresenting===!1||Fe.hasDepthSensing()===!1,xt&&Re.addToRenderList(w,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ut===!0&&oe.beginShadows();let j=T.state.shadowsArray;if(_e.render(j,R,H),ut===!0&&oe.endShadows(),(X&&E.hasRenderPass())===!1){let Le=w.opaque,we=w.transmissive;if(T.setupLights(),H.isArrayCamera){let Ne=H.cameras;if(we.length>0)for(let Be=0,tt=Ne.length;Be<tt;Be++){let lt=Ne[Be];af(Le,we,R,lt)}xt&&Re.render(R);for(let Be=0,tt=Ne.length;Be<tt;Be++){let lt=Ne[Be];rf(w,R,lt,lt.viewport)}}else we.length>0&&af(Le,we,R,H),xt&&Re.render(R),rf(w,R,H)}re!==null&&Q===0&&(B.updateMultisampleRenderTarget(re),B.updateRenderTargetMipmap(re)),X&&E.end(C),R.isScene===!0&&R.onAfterRender(C,R,H),ge.resetDefaultState(),$=-1,ae=null,S.pop(),S.length>0?(T=S[S.length-1],B.setTextureUnits(T.state.textureUnits),ut===!0&&oe.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,A.pop(),A.length>0?w=A[A.length-1]:w=null,N!==null&&N.renderEnd()};function Ph(R,H,Z,X){if(R.visible===!1)return;if(R.layers.test(H.layers)){if(R.isGroup)Z=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(H);else if(R.isLightProbeGrid)T.pushLightProbeGrid(R);else if(R.isLight)T.pushLight(R),R.castShadow&&T.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||R.intersectsFrustum(je)){X&&Rt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Je);let Le=J.update(R),we=R.material;we.visible&&w.push(R,Le,we,Z,Rt.z,null,H)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||R.intersectsFrustum(je))){let Le=J.update(R),we=R.material;if(X&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Rt.copy(R.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Rt.copy(Le.boundingSphere.center)),Rt.applyMatrix4(R.matrixWorld).applyMatrix4(Je)),Array.isArray(we)){let Ne=Le.groups;for(let Be=0,tt=Ne.length;Be<tt;Be++){let lt=Ne[Be],ke=we[lt.materialIndex];ke&&ke.visible&&w.push(R,Le,ke,Z,Rt.z,lt,H)}}else we.visible&&w.push(R,Le,we,Z,Rt.z,null,H)}}let Ee=R.children;for(let Le=0,we=Ee.length;Le<we;Le++)Ph(Ee[Le],H,Z,X)}function rf(R,H,Z,X){let{opaque:j,transmissive:Ee,transparent:Le}=R;T.setupLightsView(Z),ut===!0&&oe.setGlobalState(C.clippingPlanes,Z),X&&v.viewport(he.copy(X)),j.length>0&&Vo(j,H,Z),Ee.length>0&&Vo(Ee,H,Z),Le.length>0&&Vo(Le,H,Z),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function af(R,H,Z,X){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[X.id]===void 0){let ke=pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[X.id]=new Jt(1,1,{generateMipmaps:!0,type:ke?fn:Jn,minFilter:Ai,samples:Math.max(4,P.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}let Ee=T.state.transmissionRenderTarget[X.id],Le=X.viewport||he;Ee.setSize(Le.z*C.transmissionResolutionScale,Le.w*C.transmissionResolutionScale);let we=C.getRenderTarget(),Ne=C.getActiveCubeFace(),Be=C.getActiveMipmapLevel();C.setRenderTarget(Ee),C.getClearColor(_t),et=C.getClearAlpha(),et<1&&C.setClearColor(16777215,.5),C.clear(),xt&&Re.render(Z);let tt=C.toneMapping;C.toneMapping=Ei;let lt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),T.setupLightsView(X),ut===!0&&oe.setGlobalState(C.clippingPlanes,X),Vo(R,Z,X),B.updateMultisampleRenderTarget(Ee),B.updateRenderTargetMipmap(Ee),pt.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let It=0,cn=H.length;It<cn;It++){let jt=H[It],{object:Ht,geometry:Cn,material:Ce,group:Nn}=jt;if(Ce.side===$t&&Ht.layers.test(X.layers)){let bt=Ce.side;Ce.side=dn,Ce.needsUpdate=!0,of(Ht,Z,X,Cn,Ce,Nn),Ce.side=bt,Ce.needsUpdate=!0,ke=!0}}ke===!0&&(B.updateMultisampleRenderTarget(Ee),B.updateRenderTargetMipmap(Ee))}C.setRenderTarget(we,Ne,Be),C.setClearColor(_t,et),lt!==void 0&&(X.viewport=lt),C.toneMapping=tt}function Vo(R,H,Z){let X=H.isScene===!0?H.overrideMaterial:null;for(let j=0,Ee=R.length;j<Ee;j++){let Le=R[j],{object:we,geometry:Ne,group:Be}=Le,tt=Le.material;tt.allowOverride===!0&&X!==null&&(tt=X),we.layers.test(Z.layers)&&of(we,H,Z,Ne,tt,Be)}}function of(R,H,Z,X,j,Ee){N!==null&&j.isNodeMaterial&&N.setObject(R,j),R.onBeforeRender(C,H,Z,X,j,Ee),R.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(C,H,Z,X,R,Ee),j.transparent===!0&&j.side===$t&&j.forceSinglePass===!1?(j.side=dn,j.needsUpdate=!0,C.renderBufferDirect(Z,H,X,j,R,Ee),j.side=Vi,j.needsUpdate=!0,C.renderBufferDirect(Z,H,X,j,R,Ee),j.side=$t):C.renderBufferDirect(Z,H,X,j,R,Ee),R.onAfterRender(C,H,Z,X,j,Ee)}function Wo(R,H,Z){H.isScene!==!0&&(H=Ct);let X=F.get(R),j=T.state.lights,Ee=T.state.shadowsArray,Le=j.state.version,we=ie.getParameters(R,j.state,Ee,H,Z,T.state.lightProbeGridArray),Ne=ie.getProgramCacheKey(we),Be=X.programs;X.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?H.environment:null,X.fog=H.fog;let tt=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;X.envMap=ee.get(R.envMap||X.environment,tt),X.envMapRotation=X.environment!==null&&R.envMap===null?H.environmentRotation:R.envMapRotation,Be===void 0&&(R.addEventListener("dispose",Rn),Be=new Map,X.programs=Be);let lt=Be.get(Ne);if(lt!==void 0){if(X.currentProgram===lt&&X.lightsStateVersion===Le)return cf(R,we),lt}else we.uniforms=ie.getUniforms(R),N!==null&&R.isNodeMaterial&&N.build(R,Z,we),R.onBeforeCompile(we,C),lt=ie.acquireProgram(we,Ne),Be.set(Ne,lt),X.uniforms=we.uniforms;let ke=X.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ke.clippingPlanes=oe.uniform),cf(R,we),X.needsLights=_g(R),X.lightsStateVersion=Le,X.needsLights&&(ke.ambientLightColor.value=j.state.ambient,ke.lightProbe.value=j.state.probe,ke.sunLights.value=j.state.sun,ke.sunLightShadows.value=j.state.sunShadow,ke.directionalLights.value=j.state.directional,ke.directionalLightShadows.value=j.state.directionalShadow,ke.spotLights.value=j.state.spot,ke.spotLightShadows.value=j.state.spotShadow,ke.rectAreaLights.value=j.state.rectArea,ke.ltc_1.value=j.state.rectAreaLTC1,ke.ltc_2.value=j.state.rectAreaLTC2,ke.pointLights.value=j.state.point,ke.pointLightShadows.value=j.state.pointShadow,ke.hemisphereLights.value=j.state.hemi,ke.sunShadowMatrix.value=j.state.sunShadowMatrix,ke.sunShadowCascade.value=j.state.sunShadowCascade,ke.directionalShadowMatrix.value=j.state.directionalShadowMatrix,ke.spotLightMatrix.value=j.state.spotLightMatrix,ke.spotLightMap.value=j.state.spotLightMap,ke.pointShadowMatrix.value=j.state.pointShadowMatrix),X.lightProbeGrid=T.state.lightProbeGridArray.length>0,X.currentProgram=lt,X.uniformsList=null,lt}function lf(R){if(R.uniformsList===null){let H=R.currentProgram.getUniforms();R.uniformsList=da.seqWithValue(H.seq,R.uniforms)}return R.uniformsList}function cf(R,H){let Z=F.get(R);Z.outputColorSpace=H.outputColorSpace,Z.batching=H.batching,Z.batchingColor=H.batchingColor,Z.instancing=H.instancing,Z.instancingColor=H.instancingColor,Z.instancingMorph=H.instancingMorph,Z.skinning=H.skinning,Z.morphTargets=H.morphTargets,Z.morphNormals=H.morphNormals,Z.morphColors=H.morphColors,Z.morphTargetsCount=H.morphTargetsCount,Z.numClippingPlanes=H.numClippingPlanes,Z.numIntersection=H.numClipIntersection,Z.vertexAlphas=H.vertexAlphas,Z.vertexTangents=H.vertexTangents,Z.toneMapping=H.toneMapping}function xg(R,H){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;_.setFromMatrixPosition(H.matrixWorld);for(let Z=0,X=R.length;Z<X;Z++){let j=R[Z];if(j.texture!==null&&j.boundingBox.containsPoint(_))return j}return null}function bg(R,H,Z,X,j){H.isScene!==!0&&(H=Ct),B.resetTextureUnits();let Ee=H.fog,Le=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?H.environment:null,we=re===null?C.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Ze.workingColorSpace,Ne=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Be=ee.get(X.envMap||Le,Ne),tt=X.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,lt=!!Z.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),ke=!!Z.morphAttributes.position,It=!!Z.morphAttributes.normal,cn=!!Z.morphAttributes.color,jt=Ei;X.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(jt=C.toneMapping);let Ht=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Cn=Ht!==void 0?Ht.length:0,Ce=F.get(X),Nn=T.state.lights;if(ut===!0&&(dt===!0||R!==ae)){let qt=R===ae&&X.id===$;oe.setState(X,R,qt)}let bt=!1;X.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==Nn.state.version||Ce.outputColorSpace!==we||j.isBatchedMesh&&Ce.batching===!1||!j.isBatchedMesh&&Ce.batching===!0||j.isBatchedMesh&&Ce.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&Ce.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&Ce.instancing===!1||!j.isInstancedMesh&&Ce.instancing===!0||j.isSkinnedMesh&&Ce.skinning===!1||!j.isSkinnedMesh&&Ce.skinning===!0||j.isInstancedMesh&&Ce.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ce.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ce.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ce.instancingMorph===!1&&j.morphTexture!==null||Ce.envMap!==Be||X.fog===!0&&Ce.fog!==Ee||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==oe.numPlanes||Ce.numIntersection!==oe.numIntersection)||Ce.vertexAlphas!==tt||Ce.vertexTangents!==lt||Ce.morphTargets!==ke||Ce.morphNormals!==It||Ce.morphColors!==cn||Ce.toneMapping!==jt||Ce.morphTargetsCount!==Cn||!!Ce.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(bt=!0):(bt=!0,Ce.__version=X.version);let ci=Ce.currentProgram;bt===!0&&(ci=Wo(X,H,j),N&&X.isNodeMaterial&&N.onUpdateProgram(X,ci,Ce));let Di=!1,vs=!1,yr=!1,Bt=ci.getUniforms(),tn=Ce.uniforms;if(v.useProgram(ci.program)&&(Di=!0,vs=!0,yr=!0),X.id!==$&&($=X.id,vs=!0),Ce.needsLights){let qt=xg(T.state.lightProbeGridArray,j);Ce.lightProbeGrid!==qt&&(Ce.lightProbeGrid=qt,vs=!0)}if(Di||ae!==R){v.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Bt.setValue(z,"projectionMatrix",R.projectionMatrix),Bt.setValue(z,"viewMatrix",R.matrixWorldInverse);let ys=Bt.map.cameraPosition;ys!==void 0&&ys.setValue(z,Et.setFromMatrixPosition(R.matrixWorld)),P.logarithmicDepthBuffer&&Bt.setValue(z,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Bt.setValue(z,"isOrthographic",R.isOrthographicCamera===!0),ae!==R&&(ae=R,vs=!0,yr=!0)}if(Ce.needsLights&&(Nn.state.sunShadowMap.length>0&&Bt.setValue(z,"sunShadowMap",Nn.state.sunShadowMap,B),Nn.state.directionalShadowMap.length>0&&Bt.setValue(z,"directionalShadowMap",Nn.state.directionalShadowMap,B),Nn.state.spotShadowMap.length>0&&Bt.setValue(z,"spotShadowMap",Nn.state.spotShadowMap,B),Nn.state.pointShadowMap.length>0&&Bt.setValue(z,"pointShadowMap",Nn.state.pointShadowMap,B)),j.isSkinnedMesh){Bt.setOptional(z,j,"bindMatrix"),Bt.setOptional(z,j,"bindMatrixInverse");let qt=j.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),Bt.setValue(z,"boneTexture",qt.boneTexture,B))}j.isBatchedMesh&&(Bt.setOptional(z,j,"batchingTexture"),Bt.setValue(z,"batchingTexture",j._matricesTexture,B),Bt.setOptional(z,j,"batchingIdTexture"),Bt.setValue(z,"batchingIdTexture",j._indirectTexture,B),Bt.setOptional(z,j,"batchingColorTexture"),j._colorsTexture!==null&&Bt.setValue(z,"batchingColorTexture",j._colorsTexture,B));let _s=Z.morphAttributes;if((_s.position!==void 0||_s.normal!==void 0||_s.color!==void 0)&&D.update(j,Z,ci),(vs||Ce.receiveShadow!==j.receiveShadow)&&(Ce.receiveShadow=j.receiveShadow,Bt.setValue(z,"receiveShadow",j.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&H.environment!==null&&(tn.envMapIntensity.value=H.environmentIntensity),tn.dfgLUT!==void 0&&(tn.dfgLUT.value=gy()),vs){if(Bt.setValue(z,"toneMappingExposure",C.toneMappingExposure),Ce.needsLights&&vg(tn,yr),Ee&&X.fog===!0&&me.refreshFogUniforms(tn,Ee),me.refreshMaterialUniforms(tn,X,ue,te,T.state.transmissionRenderTarget[R.id]),Ce.needsLights&&Ce.lightProbeGrid){let qt=Ce.lightProbeGrid;tn.probesSH.value=qt.texture,tn.probesMin.value.copy(qt.boundingBox.min),tn.probesMax.value.copy(qt.boundingBox.max),tn.probesResolution.value.copy(qt.resolution)}da.upload(z,lf(Ce),tn,B)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(da.upload(z,lf(Ce),tn,B),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Bt.setValue(z,"center",j.center),Bt.setValue(z,"modelViewMatrix",j.modelViewMatrix),Bt.setValue(z,"normalMatrix",j.normalMatrix),Bt.setValue(z,"modelMatrix",j.matrixWorld),X.uniformsGroups!==void 0){let qt=X.uniformsGroups;for(let ys=0,Mr=qt.length;ys<Mr;ys++){let uf=qt[ys];ne.update(uf,ci),ne.bind(uf,ci)}}return ci}function vg(R,H){R.ambientLightColor.needsUpdate=H,R.lightProbe.needsUpdate=H,R.sunLights.needsUpdate=H,R.sunLightShadows.needsUpdate=H,R.directionalLights.needsUpdate=H,R.directionalLightShadows.needsUpdate=H,R.pointLights.needsUpdate=H,R.pointLightShadows.needsUpdate=H,R.spotLights.needsUpdate=H,R.spotLightShadows.needsUpdate=H,R.rectAreaLights.needsUpdate=H,R.hemisphereLights.needsUpdate=H}function _g(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return re},this.setRenderTargetTextures=function(R,H,Z){let X=F.get(R);X.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),F.get(R.texture).__webglTexture=H,F.get(R.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:Z,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,H){let Z=F.get(R);Z.__webglFramebuffer=H,Z.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(R,H=0,Z=0){re=R,K=H,Q=Z;let X=null,j=!1,Ee=!1;if(R){let we=F.get(R);if(we.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(z.FRAMEBUFFER,we.__webglFramebuffer),he.copy(R.viewport),Ue.copy(R.scissor),Pe=R.scissorTest,v.viewport(he),v.scissor(Ue),v.setScissorTest(Pe),$=-1;return}else if(we.__webglFramebuffer===void 0)B.setupRenderTarget(R);else if(we.__hasExternalTextures)B.rebindTextures(R,F.get(R.texture).__webglTexture,F.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let tt=R.depthTexture;if(we.__boundDepthTexture!==tt){if(tt!==null&&F.has(tt)&&(R.width!==tt.image.width||R.height!==tt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(R)}}let Ne=R.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Ee=!0);let Be=F.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Be[H])?X=Be[H][Z]:X=Be[H],j=!0):R.samples>0&&B.useMultisampledRTT(R)===!1?X=F.get(R).__webglMultisampledFramebuffer:Array.isArray(Be)?X=Be[Z]:X=Be,he.copy(R.viewport),Ue.copy(R.scissor),Pe=R.scissorTest}else he.copy(ve).multiplyScalar(ue).floor(),Ue.copy(Ve).multiplyScalar(ue).floor(),Pe=Ot;if(Z!==0&&(X=V),v.bindFramebuffer(z.FRAMEBUFFER,X)&&v.drawBuffers(R,X),v.viewport(he),v.scissor(Ue),v.setScissorTest(Pe),j){let we=F.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+H,we.__webglTexture,Z)}else if(Ee){let we=H;for(let Ne=0;Ne<R.textures.length;Ne++){let Be=F.get(R.textures[Ne]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Ne,Be.__webglTexture,Z,we)}}else if(R!==null&&Z!==0){let we=F.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,we.__webglTexture,Z)}$=-1};function hf(R){let H=F.get(R);return(H.__readFormat!==R.format||H.__readType!==R.type)&&(H.__readFormat=R.format,H.__readType=R.type,H.__formatReadable=P.textureFormatReadable(R.format),H.__typeReadable=P.textureTypeReadable(R.type)),H}this.readRenderTargetPixels=function(R,H,Z,X,j,Ee,Le,we=0){if(!(R&&R.isWebGLRenderTarget)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=F.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Le!==void 0&&(Ne=Ne[Le]),Ne){v.bindFramebuffer(z.FRAMEBUFFER,Ne);try{let Be=R.textures[we],tt=Be.format,lt=Be.type;R.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+we);let ke=hf(Be);if(ke.__formatReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ke.__typeReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=R.width-X&&Z>=0&&Z<=R.height-j&&z.readPixels(H,Z,X,j,pe.convert(tt),pe.convert(lt),Ee)}finally{let Be=re!==null?F.get(re).__webglFramebuffer:null;v.bindFramebuffer(z.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(R,H,Z,X,j,Ee,Le,we=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=F.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Le!==void 0&&(Ne=Ne[Le]),Ne)if(H>=0&&H<=R.width-X&&Z>=0&&Z<=R.height-j){v.bindFramebuffer(z.FRAMEBUFFER,Ne);let Be=R.textures[we],tt=Be.format,lt=Be.type;R.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+we);let ke=hf(Be);if(ke.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ke.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let It=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,It),z.bufferData(z.PIXEL_PACK_BUFFER,Ee.byteLength,z.STREAM_READ),z.readPixels(H,Z,X,j,pe.convert(tt),pe.convert(lt),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let cn=re!==null?F.get(re).__webglFramebuffer:null;v.bindFramebuffer(z.FRAMEBUFFER,cn);let jt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Rp(z,jt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,It),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Ee),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(It),z.deleteSync(jt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,H=null,Z=0){let X=Math.pow(2,-Z),j=Math.floor(R.image.width*X),Ee=Math.floor(R.image.height*X),Le=H!==null?H.x:0,we=H!==null?H.y:0;B.setTexture2D(R,0),z.copyTexSubImage2D(z.TEXTURE_2D,Z,0,0,Le,we,j,Ee),v.unbindTexture()},this.copyTextureToTexture=function(R,H,Z=null,X=null,j=0,Ee=0){let Le,we,Ne,Be,tt,lt,ke,It,cn,jt=R.isCompressedTexture?R.mipmaps[Ee]:R.image;if(Z!==null)Le=Z.max.x-Z.min.x,we=Z.max.y-Z.min.y,Ne=Z.isBox3?Z.max.z-Z.min.z:1,Be=Z.min.x,tt=Z.min.y,lt=Z.isBox3?Z.min.z:0;else{let tn=Math.pow(2,-j);Le=Math.floor(jt.width*tn),we=Math.floor(jt.height*tn),R.isDataArrayTexture?Ne=jt.depth:R.isData3DTexture?Ne=Math.floor(jt.depth*tn):Ne=1,Be=0,tt=0,lt=0}X!==null?(ke=X.x,It=X.y,cn=X.z):(ke=0,It=0,cn=0);let Ht=pe.convert(H.format),Cn=pe.convert(H.type),Ce;H.isData3DTexture?(B.setTexture3D(H,0),Ce=z.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(B.setTexture2DArray(H,0),Ce=z.TEXTURE_2D_ARRAY):(B.setTexture2D(H,0),Ce=z.TEXTURE_2D),v.activeTexture(z.TEXTURE0),v.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,H.flipY),v.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),v.pixelStorei(z.UNPACK_ALIGNMENT,H.unpackAlignment);let Nn=v.getParameter(z.UNPACK_ROW_LENGTH),bt=v.getParameter(z.UNPACK_IMAGE_HEIGHT),ci=v.getParameter(z.UNPACK_SKIP_PIXELS),Di=v.getParameter(z.UNPACK_SKIP_ROWS),vs=v.getParameter(z.UNPACK_SKIP_IMAGES);v.pixelStorei(z.UNPACK_ROW_LENGTH,jt.width),v.pixelStorei(z.UNPACK_IMAGE_HEIGHT,jt.height),v.pixelStorei(z.UNPACK_SKIP_PIXELS,Be),v.pixelStorei(z.UNPACK_SKIP_ROWS,tt),v.pixelStorei(z.UNPACK_SKIP_IMAGES,lt);let yr=R.isDataArrayTexture||R.isData3DTexture,Bt=H.isDataArrayTexture||H.isData3DTexture;if(R.isDepthTexture){let tn=F.get(R),_s=F.get(H),qt=F.get(tn.__renderTarget),ys=F.get(_s.__renderTarget);v.bindFramebuffer(z.READ_FRAMEBUFFER,qt.__webglFramebuffer),v.bindFramebuffer(z.DRAW_FRAMEBUFFER,ys.__webglFramebuffer);for(let Mr=0;Mr<Ne;Mr++)yr&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,F.get(R).__webglTexture,j,lt+Mr),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,F.get(H).__webglTexture,Ee,cn+Mr)),z.blitFramebuffer(Be,tt,Le,we,ke,It,Le,we,z.DEPTH_BUFFER_BIT,z.NEAREST);v.bindFramebuffer(z.READ_FRAMEBUFFER,null),v.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(j!==0||R.isRenderTargetTexture||F.has(R)){let tn=F.get(R),_s=F.get(H);v.bindFramebuffer(z.READ_FRAMEBUFFER,O),v.bindFramebuffer(z.DRAW_FRAMEBUFFER,W);for(let qt=0;qt<Ne;qt++)yr?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,tn.__webglTexture,j,lt+qt):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,tn.__webglTexture,j),Bt?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,_s.__webglTexture,Ee,cn+qt):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,_s.__webglTexture,Ee),j!==0?z.blitFramebuffer(Be,tt,Le,we,ke,It,Le,we,z.COLOR_BUFFER_BIT,z.NEAREST):Bt?z.copyTexSubImage3D(Ce,Ee,ke,It,cn+qt,Be,tt,Le,we):z.copyTexSubImage2D(Ce,Ee,ke,It,Be,tt,Le,we);v.bindFramebuffer(z.READ_FRAMEBUFFER,null),v.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Bt?R.isDataTexture||R.isData3DTexture?z.texSubImage3D(Ce,Ee,ke,It,cn,Le,we,Ne,Ht,Cn,jt.data):H.isCompressedArrayTexture?z.compressedTexSubImage3D(Ce,Ee,ke,It,cn,Le,we,Ne,Ht,jt.data):z.texSubImage3D(Ce,Ee,ke,It,cn,Le,we,Ne,Ht,Cn,jt):R.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Ee,ke,It,Le,we,Ht,Cn,jt.data):R.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Ee,ke,It,jt.width,jt.height,Ht,jt.data):z.texSubImage2D(z.TEXTURE_2D,Ee,ke,It,Le,we,Ht,Cn,jt);v.pixelStorei(z.UNPACK_ROW_LENGTH,Nn),v.pixelStorei(z.UNPACK_IMAGE_HEIGHT,bt),v.pixelStorei(z.UNPACK_SKIP_PIXELS,ci),v.pixelStorei(z.UNPACK_SKIP_ROWS,Di),v.pixelStorei(z.UNPACK_SKIP_IMAGES,vs),Ee===0&&H.generateMipmaps&&z.generateMipmap(Ce),v.unbindTexture()},this.initRenderTarget=function(R){F.get(R).__webglFramebuffer===void 0&&B.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?B.setTextureCube(R,0):R.isData3DTexture?B.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?B.setTexture2DArray(R,0):B.setTexture2D(R,0),v.unbindTexture()},this.resetState=function(){K=0,Q=0,re=null,v.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}};var Hc=class extends Cs{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Qe;e.deleteAttribute("uv");let t=new Me({side:dn}),n=new Me,s=new hs(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new xe(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new rs(e,n,6),o=new zt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new xe(e,ma(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new xe(e,ma(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new xe(e,ma(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new xe(e,ma(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new xe(e,ma(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new xe(e,ma(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function ma(i){return new to({color:0,emissive:16777215,emissiveIntensity:i})}function Yu(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new wt,c=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=om(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<a[h].length;++x)f.push(a[h][x][d]);let p=om(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function om(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new St(a,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let d=0,f=h.count;d<f;d++)for(let p=0;p<t;p++){let x=h.getComponent(d,p);o.setComponent(d+u,p,x)}}else a.set(h.array,l);l+=h.count*t}return s!==void 0&&(o.gpuType=s),o}function Ju(i,e){if(e===Tu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===ca||e===yo){let t=i.getIndex();if(t===null){let r=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===ca)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function lm(i){let e=new Map,t=new Map,n=i.clone();return cm(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function cm(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)cm(i.children[n],e.children[n],t)}var xa=class extends Hi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new id(t)}),this.register(function(t){return new sd(t)}),this.register(function(t){return new fd(t)}),this.register(function(t){return new pd(t)}),this.register(function(t){return new md(t)}),this.register(function(t){return new ad(t)}),this.register(function(t){return new od(t)}),this.register(function(t){return new ld(t)}),this.register(function(t){return new cd(t)}),this.register(function(t){return new nd(t)}),this.register(function(t){return new hd(t)}),this.register(function(t){return new rd(t)}),this.register(function(t){return new dd(t)}),this.register(function(t){return new ud(t)}),this.register(function(t){return new ed(t)}),this.register(function(t){return new Gc(t,at.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Gc(t,at.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new gd(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=us.extractUrlBase(e);a=us.resolveURL(c,this.path)}else a=us.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new na(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===pm){try{a[at.KHR_BINARY_GLTF]=new xd(e)}catch(u){s&&s(u);return}r=JSON.parse(a[at.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new wd(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case at.KHR_MATERIALS_UNLIT:a[u]=new td;break;case at.KHR_DRACO_MESH_COMPRESSION:a[u]=new bd(r,this.dracoLoader);break;case at.KHR_TEXTURE_TRANSFORM:a[u]=new vd;break;case at.KHR_MESH_QUANTIZATION:a[u]=new _d;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function xy(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function an(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var at={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},ed=class{constructor(e){this.parser=e,this.name=at.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new be(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Un);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ls(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new hs(h),c.distance=u;break;case"spot":c=new di(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Xi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},td=class{constructor(){this.name=at.KHR_MATERIALS_UNLIT}getMaterialType(){return rt}extendParams(e,t,n){let s=[];e.color=new be(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Un),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Lt))}return Promise.all(s)}},nd=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=an(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},id=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return an(this.parser,e,this.name)!==null?vn:null}extendMaterialParams(e,t){let n=an(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Oe(r,r)}return Promise.all(s)}},sd=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_DISPERSION}getMaterialType(e){return an(this.parser,e,this.name)!==null?vn:null}extendMaterialParams(e,t){let n=an(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},rd=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return an(this.parser,e,this.name)!==null?vn:null}extendMaterialParams(e,t){let n=an(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},ad=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_SHEEN}getMaterialType(e){return an(this.parser,e,this.name)!==null?vn:null}extendMaterialParams(e,t){let n=an(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new be(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Un)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Lt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},od=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return an(this.parser,e,this.name)!==null?vn:null}extendMaterialParams(e,t){let n=an(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},ld=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_VOLUME}getMaterialType(e){return an(this.parser,e,this.name)!==null?vn:null}extendMaterialParams(e,t){let n=an(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new be().setRGB(r[0],r[1],r[2],Un),Promise.all(s)}},cd=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_IOR}getMaterialType(e){return an(this.parser,e,this.name)!==null?vn:null}extendMaterialParams(e,t){let n=an(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},hd=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_SPECULAR}getMaterialType(e){return an(this.parser,e,this.name)!==null?vn:null}extendMaterialParams(e,t){let n=an(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new be().setRGB(r[0],r[1],r[2],Un),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Lt)),Promise.all(s)}},ud=class{constructor(e){this.parser=e,this.name=at.EXT_MATERIALS_BUMP}getMaterialType(e){return an(this.parser,e,this.name)!==null?vn:null}extendMaterialParams(e,t){let n=an(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},dd=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return an(this.parser,e,this.name)!==null?vn:null}extendMaterialParams(e,t){let n=an(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},fd=class{constructor(e){this.parser=e,this.name=at.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},pd=class{constructor(e){this.parser=e,this.name=at.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},md=class{constructor(e){this.parser=e,this.name=at.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},Gc=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},gd=class{constructor(e){this.name=at.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==pi.TRIANGLES&&c.mode!==pi.TRIANGLE_STRIP&&c.mode!==pi.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let p of u){let x=new Ye,g=new U,m=new Ln,y=new U(1,1,1),M=new rs(p.geometry,p.material,d);for(let w=0;w<d;w++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,w),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,w),l.SCALE&&y.fromBufferAttribute(l.SCALE,w),M.setMatrixAt(w,x.compose(g,m,y));let _=null;for(let w in l)if(w==="_COLOR_0"){let T=l[w];M.instanceColor=new jn(T.array,T.itemSize,T.normalized)}else if(w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"){if(_===null){let A=M.geometry;_=new wt,_.name=A.name;for(let S in A.attributes)_.setAttribute(S,A.attributes[S]);for(let S in A.morphAttributes)_.morphAttributes[S]=A.morphAttributes[S];A.index!==null&&_.setIndex(A.index),_.morphTargetsRelative=A.morphTargetsRelative;for(let S of A.groups)_.addGroup(S.start,S.count,S.materialIndex);A.boundingBox!==null&&(_.boundingBox=A.boundingBox.clone()),A.boundingSphere!==null&&(_.boundingSphere=A.boundingSphere.clone()),_.drawRange.start=A.drawRange.start,_.drawRange.count=A.drawRange.count,_.userData=Object.assign({},A.userData),M.geometry=_}let T=l[w];_.setAttribute(w,new jn(T.array,T.itemSize,T.normalized))}zt.prototype.copy.call(M,p),this.parser.assignFinalMaterial(M),f.push(M)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},pm="glTF",Ao=12,hm={JSON:1313821514,BIN:5130562},xd=class{constructor(e){this.name=at.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ao),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==pm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Ao,r=new DataView(e,Ao),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===hm.JSON){let c=new Uint8Array(e,Ao+a,o);this.content=n.decode(c)}else if(l===hm.BIN){let c=Ao+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},bd=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=at.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=Md[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=Md[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=ga[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let p in f.attributes){let x=f.attributes[p],g=l[p];g!==void 0&&(x.normalized=g)}u(f)},o,c,Un,d)})})}},vd=class{constructor(){this.name=at.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},_d=class{constructor(){this.name=at.KHR_MESH_QUANTIZATION}},Vc=class extends Bi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,p=e*c,x=p-c,g=-2*f+3*d,m=f-d,y=1-g,M=m-d+u;for(let _=0;_!==o;_++){let w=a[x+_+o],T=a[x+_+l]*h,A=a[p+_+o],S=a[p+_]*h;r[_]=y*w+M*T+g*A+m*S}return r}},by=new Ln,yd=class extends Vc{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return by.fromArray(r).normalize().toArray(r),r}},pi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ga={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},um={9728:sn,9729:rn,9984:Yl,9985:aa,9986:fr,9987:Ai},dm={33071:ui,33648:Br,10497:ii},Zu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Md={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Us={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},vy={CUBICSPLINE:void 0,LINEAR:nr,STEP:tr},$u={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function _y(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Me({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Vi})),i.DefaultMaterial}function gr(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Xi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function yy(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function My(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Sy(i){let e,t=i.extensions&&i.extensions[at.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Qu(t.attributes):e=i.indices+":"+Qu(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Qu(i.targets[n]);return e}function Qu(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Sd(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function wy(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Ty=new Ye,wd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new xy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new io(this.options.manager):this.textureLoader=new ro(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new na(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return gr(r,o,s),Xi(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[at.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(us.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=Zu[s.type],o=ga[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new St(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=Zu[s.type],c=ga[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0,x,g;if(f&&f!==u){let m=Math.floor(d/f),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count,M=t.cache.get(y);M||(x=new c(o,m*f,s.count*f/h),M=new Xr(x,f/h),t.cache.add(y,M)),g=new jr(M,l,d%f/h,p)}else o===null?x=new c(s.count*l):x=new c(o,d,s.count*l),g=new St(x,l,p);if(s.sparse!==void 0){let m=Zu.SCALAR,y=ga[s.sparse.indices.componentType],M=s.sparse.indices.byteOffset||0,_=s.sparse.values.byteOffset||0,w=new y(a[1],M,s.sparse.count*m),T=new c(a[2],_,s.sparse.count*l);o!==null&&(g=new St(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let A=0,S=w.length;A<S;A++){let E=w[A];if(g.setX(E,T[A*l]),l>=2&&g.setY(E,T[A*l+1]),l>=3&&g.setZ(E,T[A*l+2]),l>=4&&g.setW(E,T[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=p}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=um[d.magFilter]||rn,h.minFilter=um[d.minFilter]||Ai,h.wrapS=dm[d.wrapS]||ii,h.wrapT=dm[d.wrapT]||ii,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==sn&&h.minFilter!==rn,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=s.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let p=d;t.isImageBitmapLoader===!0&&(p=function(x){let g=new un(x);g.needsUpdate=!0,d(g)}),t.load(us.resolveURL(u,r.path),p,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),Xi(u,a),u.userData.mimeType=a.mimeType||wy(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[at.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[at.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[at.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new $r,Bn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Zr,Bn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Me}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[at.KHR_MATERIALS_UNLIT]){let u=s[at.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new be(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Un),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,Lt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=$t);let h=r.alphaMode||$u.OPAQUE;if(h===$u.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===$u.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==rt&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Oe(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==rt&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==rt){let u=r.emissiveFactor;o.emissive=new be().setRGB(u[0],u[1],u[2],Un)}return r.emissiveTexture!==void 0&&a!==rt&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Lt)),Promise.all(c).then(function(){let u=new a(o);return r.name&&(u.name=r.name),Xi(u,r),t.associations.set(u,{materials:e}),r.extensions&&gr(s,u,r),u})}createUniqueName(e){let t=Gt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[at.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return fm(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=Sy(c),u=s[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[at.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=fm(new wt,c,t),c.mode===pi.TRIANGLE_STRIP?d=d.then(f=>Ju(f,yo)):c.mode===pi.TRIANGLE_FAN&&(d=d.then(f=>Ju(f,ca))),s[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?_y(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,p=h.length;f<p;f++){let x=h[f],g=a[f],m,y=c[f];if(g.mode===pi.TRIANGLES||g.mode===pi.TRIANGLE_STRIP||g.mode===pi.TRIANGLE_FAN||g.mode===void 0){let M=r.isSkinnedMesh===!0,_=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");M&&_===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=M&&_?new ja(x,y):new xe(x,y),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(g.mode===pi.LINES)m=new ar(x,y);else if(g.mode===pi.LINE_STRIP)m=new rr(x,y);else if(g.mode===pi.LINE_LOOP)m=new Ya(x,y);else if(g.mode===pi.POINTS)m=new Ps(x,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&My(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Xi(m,r),g.extensions&&gr(s,m,g),t.assignFinalMaterial(m),u.push(m)}for(let f=0,p=u.length;f<p;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&gr(s,u[0],r),u[0];let d=new yt;r.extensions&&gr(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,p=u.length;f<p;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new nn(Cu.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Gi(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Xi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let d=new Ye;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ka(o,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],p=s.samplers[f.sampler],x=f.target,g=x.node,m=s.parameters!==void 0?s.parameters[p.input]:p.input,y=s.parameters!==void 0?s.parameters[p.output]:p.output;x.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",y)),c.push(p),h.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],p=u[2],x=u[3],g=u[4],m=[];for(let M=0,_=d.length;M<_;M++){let w=d[M],T=f[M],A=p[M],S=x[M],E=g[M];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();let C=n._createAnimationTracks(w,T,A,S,E);if(C)for(let L=0;L<C.length;L++)m.push(C[L])}let y=new ta(r,void 0,m);return Xi(y,s),y})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Ty)});for(let f=0,p=u.length;f<p;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,p=u[0];h.pivot=new U().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new Kr:c.length>1?h=new yt:c.length===1?h=c[0]:h=new zt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Xi(h,r),r.extensions&&gr(n,h,r),r.matrix!==void 0){let u=new Ye;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new yt;n.name&&(r.name=s.createUniqueName(n.name)),Xi(r,n),n.extensions&&gr(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++){let d=l[h];d.parent!==null?r.add(lm(d)):r.add(d)}let c=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof Bn||d instanceof un)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}Us[r.path]===Us.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(Us[r.path]){case Us.weights:h=os;break;case Us.rotation:h=zi;break;case Us.translation:case Us.scale:h=cs;break;default:n.itemSize===1?h=os:h=cs;break}let u=s.interpolation!==void 0?vy[s.interpolation]:nr,d=this._getArrayFromAccessor(n);for(let f=0,p=l.length;f<p;f++){let x=new h(l[f]+"."+Us[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),a.push(x)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Sd(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof zi?yd:Vc;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Ey(i,e,t){let n=e.attributes,s=new On;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new U(l[0],l[1],l[2]),new U(c[0],c[1],c[2])),o.normalized){let h=Sd(ga[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new U,l=new U;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){let x=Sd(ga[d.componentType]);l.multiplyScalar(x)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new Xn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function fm(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(let a in n){let o=Md[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return Ze.workingColorSpace!==Un&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ze.workingColorSpace}" not supported.`),Xi(i,e),Ey(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?yy(i,e.targets,t):i})}var mm=(function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?o(e):o(i),r,a=WebAssembly.instantiate(s,{}).then(function(m){r=m.instance,r.exports.__wasm_call_ctors()});function o(m){for(var y=new Uint8Array(m.length),M=0;M<m.length;++M){var _=m.charCodeAt(M);y[M]=_>96?_-97:_>64?_-39:_+4}for(var w=0,M=0;M<m.length;++M)y[w++]=y[M]<60?n[y[M]]:(y[M]-60)*64+y[++M];return y.buffer.slice(0,w)}function l(m,y,M,_,w,T,A){var S=m.exports.sbrk,E=_+3&-4,C=S(E*w),L=S(T.length),N=new Uint8Array(m.exports.memory.buffer);N.set(T,L);var V=y(C,_,w,L,T.length);if(V==0&&A&&A(C,E,w),M.set(N.subarray(C,C+_*w)),S(C-S(0)),V!=0)throw new Error("Malformed buffer data: "+V)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function f(m){var y={object:new Worker(m),pending:0,requests:{}};return y.object.onmessage=function(M){var _=M.data;y.pending-=_.count,y.requests[_.id][_.action](_.value),delete y.requests[_.id]},y}function p(m){for(var y="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(s)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+g.name+";"+l.toString()+g.toString(),M=new Blob([y],{type:"text/javascript"}),_=URL.createObjectURL(M),w=u.length;w<m;++w)u[w]=f(_);for(var w=m;w<u.length;++w)u[w].object.postMessage({});u.length=m,URL.revokeObjectURL(_)}function x(m,y,M,_,w){for(var T=u[0],A=1;A<u.length;++A)u[A].pending<T.pending&&(T=u[A]);return new Promise(function(S,E){var C=new Uint8Array(M),L=++d;T.pending+=m,T.requests[L]={resolve:S,reject:E},T.object.postMessage({id:L,count:m,size:y,source:C,mode:_,filter:w},[C.buffer])})}function g(m){var y=m.data;self.ready.then(function(M){if(!y.id)return self.close();try{var _=new Uint8Array(y.count*y.size);l(M,M.exports[y.mode],_,y.count,y.size,y.source,M.exports[y.filter]),self.postMessage({id:y.id,count:y.count,action:"resolve",value:_},[_.buffer])}catch(w){self.postMessage({id:y.id,count:y.count,action:"reject",value:w})}})}return{ready:a,supported:!0,useWorkers:function(m){p(m)},decodeVertexBuffer:function(m,y,M,_,w){l(r,r.exports.meshopt_decodeVertexBuffer,m,y,M,_,r.exports[c[w]])},decodeIndexBuffer:function(m,y,M,_){l(r,r.exports.meshopt_decodeIndexBuffer,m,y,M,_)},decodeIndexSequence:function(m,y,M,_){l(r,r.exports.meshopt_decodeIndexSequence,m,y,M,_)},decodeGltfBuffer:function(m,y,M,_,w,T){l(r,r.exports[h[w]],m,y,M,_,r.exports[c[T]])},decodeGltfBufferAsync:function(m,y,M,_,w){return u.length>0?x(m,y,M,h[_],c[w]):a.then(function(){var T=new Uint8Array(m*y);return l(r,r.exports[h[_]],T,m,y,M,r.exports[c[w]]),T})}}})();var Ay=location.protocol==="file:";function Ry(i){return new Promise((e,t)=>{window.__ASSETS=window.__ASSETS||{};let n=()=>{let r=atob(window.__ASSETS[i]);delete window.__ASSETS[i];let a=new Uint8Array(r.length);for(let o=0;o<r.length;o++)a[o]=r.charCodeAt(o);e(a.buffer)},s=document.createElement("script");s.src="assets/"+i+".js",s.onload=n,s.onerror=()=>t(new Error("Missing assets/"+i+".js")),document.head.appendChild(s)})}async function Os(i,e){if(Ay)return Ry(i);let t=await fetch("assets/"+i);if(!t.ok)throw new Error("Could not load assets/"+i+" ("+t.status+")");let n=+t.headers.get("content-length")||0;if(!e||!n||!t.body)return t.arrayBuffer();let s=t.body.getReader(),r=[],a=0;for(;;){let{done:c,value:h}=await s.read();if(c)break;r.push(h),a+=h.length,e(Math.min(1,a/n))}let o=new Uint8Array(a),l=0;for(let c of r)o.set(c,l),l+=c.length;return o.buffer}var Wc=async i=>JSON.parse(new TextDecoder().decode(await Os(i)));var zs=0,va=1,ms=2,mi=3,Xc=4,Ro={day:{skyTop:4163288,skyBot:13625077,fog:14214364,fogD:.0012,sun:16770752,sunI:2.9,hemiS:12573183,hemiG:7043658,hemiI:1.1,sunDir:[-.6,.6,.4],ground:5212732,exposure:1},desert:{skyTop:3112912,skyBot:15982e3,fog:15522224,fogD:.0019,sun:16771524,sunI:3,hemiS:16771264,hemiG:11897420,hemiI:1,sunDir:[.6,.55,.3],ground:14267244,exposure:1},coast:{skyTop:15895131,skyBot:16767392,fog:16239008,fogD:.0017,sun:16761994,sunI:2.5,hemiS:16763304,hemiG:5992274,hemiI:1,sunDir:[-.2,.24,-.85],ground:6132040,exposure:1},night:{skyTop:329231,skyBot:2759242,fog:1708848,fogD:.0035,sun:9414399,sunI:.7,hemiS:4868752,hemiG:2105388,hemiI:1,sunDir:[.3,1,.2],ground:2303531,exposure:1.15,night:!0}},Sn=[{id:"nile",name:"Nile Park Circuit",ar:"\u062D\u0644\u0628\u0629 \u0627\u0644\u0646\u064A\u0644",type:"proc",theme:"day",laps:3,width:15,runoff:6,pit:[90,90],camYaw:.7,blurb:"The home circuit. A full pit lane, a fast first sector, a chicane and two hairpins.",pts:[[40,0],[150,0],[210,20],[230,70],[200,115],[140,110],[110,80],[70,95],[60,140],[100,180],[80,225],[20,235],[-40,205],[-50,150],[-20,110],[-60,70],[-110,90],[-150,60],[-140,10],[-80,-5]]},{id:"lider",name:"Lider Karting Club",ar:"\u0646\u0627\u062F\u064A \u0644\u064A\u062F\u0631",type:"glb",theme:"day",laps:3,blurb:"Your scanned kart circuit. Tight, technical, tyre walls everywhere."},{id:"giza",name:"Giza Sand Ring",ar:"\u062D\u0644\u0628\u0629 \u0627\u0644\u062C\u064A\u0632\u0629",type:"proc",theme:"desert",laps:3,width:16,runoff:9,blurb:"Fast sweepers under the pyramids. Sand runoff eats your speed.",pts:[[60,-6],[120,-10],[200,30],[230,110],[180,170],[100,150],[60,200],[-20,230],[-110,200],[-140,120],[-80,70],[-120,0],[-60,-40],[0,0]]},{id:"corniche",name:"Alex Corniche",ar:"\u0643\u0648\u0631\u0646\u064A\u0634 \u0625\u0633\u0643\u0646\u062F\u0631\u064A\u0629",type:"proc",theme:"coast",laps:3,width:15,runoff:7,blurb:"A long seafront blast into a knot of hairpins at sunset.",pts:[[130,0],[260,0],[320,40],[300,100],[220,110],[180,70],[120,90],[130,160],[60,190],[-20,150],[-10,90],[-80,60],[-90,10],[0,0]]},{id:"midnight",name:"Cairo Midnight",ar:"\u0645\u0646\u062A\u0635\u0641 \u0627\u0644\u0644\u064A\u0644",type:"proc",theme:"night",laps:4,width:14,runoff:5,blurb:"Street circuit after dark. Square corners, neon walls, no mercy.",pts:[[75,0],[150,0],[180,30],[180,120],[150,150],[90,150],[60,120],[60,80],[20,60],[-40,80],[-40,160],[-80,200],[-140,180],[-150,100],[-120,20],[-60,-10],[0,0]]},{id:"luxor",name:"Luxor Speedway",ar:"\u062D\u0644\u0628\u0629 \u0627\u0644\u0623\u0642\u0635\u0631",type:"proc",theme:"desert",laps:4,width:17,runoff:9,pit:[70,70],camYaw:.5,blurb:"A fast desert oval with one kink. Flat out, slipstreams and late braking.",pts:[[0,0],[140,0],[230,25],[270,90],[230,155],[140,180],[0,180],[-90,155],[-130,90],[-90,25]]},{id:"aswan",name:"Aswan Lakeside",ar:"\u0628\u062D\u064A\u0631\u0629 \u0623\u0633\u0648\u0627\u0646",type:"proc",theme:"day",laps:3,width:15,runoff:6,pit:[60,70],camYaw:.8,blurb:"Long and technical: an esses section, three hairpins and a quick back stretch.",pts:[[30,0],[130,0],[190,-30],[250,0],[260,70],[200,110],[130,90],[80,130],[100,200],[40,240],[-40,210],[-30,140],[-90,110],[-150,150],[-200,100],[-160,30],[-80,20]]},{id:"hurghada",name:"Hurghada Marina",ar:"\u0645\u0627\u0631\u064A\u0646\u0627 \u0627\u0644\u063A\u0631\u062F\u0642\u0629",type:"proc",theme:"coast",laps:3,width:15,runoff:7,pit:[70,70],camYaw:.6,blurb:"Seafront straight, then a tight harbour section where the walls are close.",pts:[[60,0],[200,0],[270,30],[290,100],[240,150],[160,130],[110,170],[130,240],[60,270],[-20,240],[-40,170],[10,120],[-30,70],[-110,90],[-150,40],[-100,-5]]},{id:"pad",name:"Test pad",ar:"\u0633\u0627\u062D\u0629 \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631",type:"proc",theme:"day",laps:1,width:84,runoff:14,pit:null,dev:!0,blurb:"Tuning ground: a wide asphalt oval for braking, constant-radius, slalom and surface tests. Press T for telemetry.",pts:[[0,0],[110,0],[220,0],[285,65],[220,130],[110,130],[0,130],[-65,65]]}];function gm(i,e,t,n,s){let r=s*s,a=r*s;return .5*(2*e+(-i+t)*s+(2*i-5*e+4*t-n)*r+(-i+3*e-3*t+n)*a)}function jc(i,e){let t=i.length,n=[];for(let c=0;c<t;c++){let h=i[(c+t-1)%t],u=i[c],d=i[(c+1)%t],f=i[(c+2)%t];for(let p=0;p<24;p++){let x=p/24;n.push([gm(h[0],u[0],d[0],f[0],x),gm(h[1],u[1],d[1],f[1],x)])}}let s=[0];for(let c=1;c<=n.length;c++){let h=n[c-1],u=n[c%n.length];s.push(s[c-1]+Math.hypot(u[0]-h[0],u[1]-h[1]))}let r=s[n.length],a=Math.round(r/e),o=[],l=0;for(let c=0;c<a;c++){let h=c*r/a;for(;s[l+1]<h;)l++;let u=(h-s[l])/(s[l+1]-s[l]||1),d=n[l],f=n[(l+1)%n.length];o.push({x:d[0]+(f[0]-d[0])*u,z:d[1]+(f[1]-d[1])*u})}return o}function ji(i,e,t,n=1,s=1){let r=document.createElement("canvas");r.width=i,r.height=e,t(r.getContext("2d"),i,e);let a=new Dn(r);return a.wrapS=a.wrapT=ii,a.repeat.set(n,s),a.colorSpace=Lt,a.anisotropy=8,a}function xm(i,e,t,n,s,r){i.fillStyle=n,i.fillRect(0,0,e,t);for(let a=0;a<r;a++){let o=Math.random();i.fillStyle=`rgba(${o>.5?255:0},${o>.5?255:0},${o>.5?255:0},${Math.random()*s})`,i.fillRect(Math.random()*e,Math.random()*t,1+Math.random()*2,1+Math.random()*2)}}var qc=1,vt=()=>(qc=qc*16807%2147483647,qc/2147483647),Td=class{constructor(e){this.def=e,this.theme=Ro[e.theme],this.group=new yt,this.grid=null,this.path=[],this.lights=[]}finishPath(e){let t=e.length;this.path=e,this.n=t;let n=0;for(let r=0;r<t;r++){let a=e[r],o=e[(r+1)%t],l=e[(r+t-1)%t],c=o.x-l.x,h=o.z-l.z,u=Math.hypot(c,h)||1;a.tx=c/u,a.tz=h/u,n+=Math.hypot(o.x-a.x,o.z-a.z)}this.len=n,this.spacing=n/t;let s=e.map((r,a)=>{let o=e[(a+t-3)%t],l=e[(a+3)%t],c=Math.atan2(l.tx,l.tz)-Math.atan2(o.tx,o.tz);for(;c>Math.PI;)c-=2*Math.PI;for(;c<-Math.PI;)c+=2*Math.PI;return c/(6*this.spacing)});for(let r=0;r<t;r++)e[r].k=(s[(r+t-1)%t]+2*s[r]+s[(r+1)%t])/4}surf(e,t){let n=this.grid,s=Math.floor((e-n.x0)/n.cell),r=Math.floor((t-n.z0)/n.cell);return s<0||r<0||s>=n.w||r>=n.h?mi:n.surf[r*n.w+s]}height(e,t){let n=this.grid;if(!n.hgt)return 0;let s=(e-n.x0)/n.cell-.5,r=(t-n.z0)/n.cell-.5;s=Math.max(0,Math.min(n.w-1.001,s)),r=Math.max(0,Math.min(n.h-1.001,r));let a=s|0,o=r|0,l=s-a,c=r-o,h=o*n.w+a,u=n.hgt;return(u[h]*(1-l)+u[h+1]*l)*(1-c)+(u[h+n.w]*(1-l)+u[h+n.w+1]*l)*c}nearest(e,t,n=-1,s=18){let r=this.path,a=this.n,o=0,l=1/0;if(n<0){for(let c=0;c<a;c++){let h=(r[c].x-e)**2+(r[c].z-t)**2;h<l&&(l=h,o=c)}return o}for(let c=-s;c<=s;c++){let h=((n+c)%a+a)%a,u=(r[h].x-e)**2+(r[h].z-t)**2;u<l&&(l=u,o=h)}return o}escape(e,t){for(let n=.35;n<6;n+=.35)for(let s=0;s<16;s++){let r=Math.cos(s*Math.PI/8),a=Math.sin(s*Math.PI/8);if(this.surf(e+r*n,t+a*n)!==mi)return{nx:r,nz:a,d:n}}return null}gridSlot(e){let t=((this.n-3-Math.ceil((e+1)*7.5/this.spacing))%this.n+this.n)%this.n,n=this.path[t],s=(e%2?-1:1)*2.6;return{x:n.x+n.tz*s,z:n.z-n.tx*s,th:Math.atan2(n.tx,n.tz),idx:t}}dispose(){this.group.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&[].concat(e.material).forEach(t=>{for(let n in t)t[n]&&t[n].isTexture&&t[n].dispose();t.dispose()})})}};function Cy(i){let e=i.path[0],t=Math.atan2(e.tx,e.tz),n=i.height(e.x,e.z),s=0;for(;s<14&&i.surf(e.x+e.tz*s,e.z-e.tx*s)!==mi&&i.surf(e.x+e.tz*s,e.z-e.tx*s)!==zs;)s+=.5;s=Math.max(5,s);let r=new yt;r.position.set(e.x,n,e.z),r.rotation.y=t;let a=ji(128,32,d=>{for(let f=0;f<16;f++)for(let p=0;p<4;p++)d.fillStyle=(f+p)%2?"#111":"#f5f5f5",d.fillRect(f*8,p*8,8,8)}),o=new xe(new Qt(s*2,2.2),new Me({map:a,roughness:.8,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}));o.rotation.x=-Math.PI/2,o.position.y=.05,o.receiveShadow=!0,r.add(o);let l=new Me({color:2830134,metalness:.7,roughness:.4});for(let d of[-1,1]){let f=new xe(new Qe(.5,7.5,.5),l);f.position.set(d*(s+1.2),3.75,0),f.castShadow=!0,r.add(f)}let c=ji(1024,128,(d,f,p)=>{d.fillStyle="#e3262e",d.fillRect(0,0,f,p),d.fillStyle="#fff",d.font="italic 900 92px Rubik, Arial Black, sans-serif",d.textAlign="center",d.textBaseline="middle",d.fillText("TAFHEET  \xB7  \u062A\u0641\u062D\u064A\u0637  \xB7  START",f/2,p/2+6)}),h=new xe(new Qe(s*2+3,1.3,.5),[l,l,l,l,new Me({map:c,emissive:16777215,emissiveMap:c,emissiveIntensity:i.theme.night?.9:.15}),new Me({map:c})]);h.position.y=7.3,h.castShadow=!0,r.add(h);let u=new rt({color:15921906,transparent:!0,opacity:.8,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4});for(let d=0;d<12;d++){let f=i.gridSlot(d),p=Math.sin(f.th),x=Math.cos(f.th),g=i.height(f.x,f.z)+.05;for(let[m,y,M,_]of[[2.5,.16,0,2.7],[.16,1.1,1.17,2.2],[.16,1.1,-1.17,2.2]]){let w=new xe(new Qt(m,y),u);w.rotation.set(-Math.PI/2,0,-f.th),w.position.set(f.x+p*_+x*M,g,f.z+x*_-p*M),i.group.add(w)}}i.group.add(r)}var Bs=2.2;async function Py(i,e){let t=new xa;t.setMeshoptDecoder(mm);let[n,s,r]=await Promise.all([Os("lider.glb",e),Wc("lider.json"),Os("lider.bin")]),o=(await t.parseAsync(n,"")).scene;o.scale.setScalar(Bs),o.traverse(x=>{if(!x.isMesh)return;x.receiveShadow=!0,x.frustumCulled=!x.isInstancedMesh;let g=x.material,m=g.name||"";if(m==="02_-_Default_0"){x.visible=!1;return}g.map&&(g.map.anisotropy=8),(g.transparent||g.alphaTest>0||/Trees|green|fence|wire/.test(m))&&(g.alphaTest=Math.max(g.alphaTest,.4),g.transparent=!1,g.depthWrite=!0,g.side=$t),/racetrack|conc|kerb/.test(m)&&(g.roughness=Math.min(g.roughness,.92)),x.castShadow=x.isInstancedMesh?!0:!/racetrack|grass|green|conc|kerb|road_marking|bitumen|GROOVE|skids|dust|decal|Cracks/.test(m)}),i.group.add(o);let l=s.w*s.h,c=new Uint8Array(r,0,l),h=new Int16Array(r.slice(l,l+l*2)),u=new Uint8Array(l),d=new Float32Array(l);for(let x=0;x<l;x++){let g=c[x];u[x]=g===255?mi:g===200?ms:g===100?va:zs,d[x]=h[x]/100*Bs}i.grid={w:s.w,h:s.h,x0:s.x0*Bs,z0:s.z0*Bs,cell:Bs/s.ppm,surf:u,hgt:d};let f=jc(s.path.map(x=>[x[0]*Bs,x[1]*Bs]),2),p=Math.round(30*Bs/2);f=f.slice(p).concat(f.slice(0,p)),i.finishPath(f),i.bounds=420}function ba(i,e,t,n,s,r=!0,a=null){let o=[],l=[],c=[],h=i.length,u=0,d=0,f=!1;for(let x=0;x<=h;x++){let g=i[x%h],m=!a||a[x%h];m&&(o.push(g.x+g.tz*e,n,g.z-g.tx*e,g.x+g.tz*t,n,g.z-g.tx*t),l.push(0,u*s,1,u*s),f&&c.push(d-2,d-1,d,d-1,d+1,d),d+=2),f=m,u+=Math.hypot(i[(x+1)%h].x-g.x,i[(x+1)%h].z-g.z)}let p=new wt;return p.setAttribute("position",new $e(o,3)),p.setAttribute("uv",new $e(l,2)),p.setIndex(c),p.computeVertexNormals(),p}function Iy(i,e,t,n){let s=typeof e=="function"?e:()=>e,r=[],a=[],o=[],l=i.length,c=0;for(let u=0;u<=l;u++){let d=i[u%l],f=s(u%l),p=d.x+d.tz*f,x=d.z-d.tx*f;r.push(p,0,x,p,t,x),a.push(c*n,0,c*n,1),u<l&&o.push(u*2,u*2+1,u*2+2,u*2+1,u*2+3,u*2+2),c+=Math.hypot(i[(u+1)%l].x-d.x,i[(u+1)%l].z-d.z)}let h=new wt;return h.setAttribute("position",new $e(r,3)),h.setAttribute("uv",new $e(a,2)),h.setIndex(o),h.computeVertexNormals(),h}var Ad=[];function Hn(i,e,t,n=!0){if(t.length>50){let s=new Map;for(let r of t){let a=Math.floor(r.x/80)+","+Math.floor(r.z/80);s.has(a)||s.set(a,[]),s.get(a).push(r)}if(s.size>1){let r=new yt;for(let a of s.values())r.add(Ed(i,e,a,n));return r}}return Ed(i,e,t,n)}function Ed(i,e,t,n=!0){let s=new rs(i,e,t.length),r=new zt;if(t.forEach((a,o)=>{r.position.set(a.x,a.y||0,a.z),r.rotation.set(0,a.r||0,0),r.scale.set(a.sx||a.s||1,a.sy||a.s||1,a.sz||a.s||1),r.updateMatrix(),s.setMatrixAt(o,r.matrix),a.c&&s.setColorAt(o,a.c)}),s.castShadow=n,s.receiveShadow=!0,t.length&&!t.some(a=>(a.sx||1)>8)){let a=0,o=0;for(let l of t)a+=l.x,o+=l.z;Ad.push({m:s,x:a/t.length,z:o/t.length})}return s}function Ly(i){let e=i.def,t=i.theme,n=e.width/2,s=n+e.runoff,r=i.group;Ad=[],qc=e.id.length*7919+13;let a=i.uTime={value:0},o=[];i.fancyLights=[];let l=(v,I)=>(v.onBeforeCompile=F=>{F.uniforms.uTime=a,F.vertexShader=`uniform float uTime;
`+F.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
`+I)},v),c=window.__crowdK||1,h={value:new U(1e6,0,0)},u={value:new U(1e6,0,0)};i.tick=(v,I,F,B,ee)=>{a.value=v,I!=null&&(h.value.set(I,0,F),u.value.set(B??I,0,ee??F));for(let se of o)se(v)};let d=(()=>{let v=(B,ee,se)=>{let q=B.attributes.position.count;return B.setAttribute("aPart",new St(new Float32Array(q).fill(ee),1)),B.setAttribute("aLimb",new St(new Float32Array(q).fill(se),1)),B},I=(B,ee,se,q,J,ie,me)=>v(new si(B,ee,2,7).translate(se,q,J),ie,me),F=[v(new si(.165,.3,3,9).scale(1.18,1,.74).translate(0,1.1,0),0,0),v(new zn(.17,9,5).scale(1.12,.7,.82).translate(0,.84,0),2,0),v(new yn(.05,.06,.09,7).translate(0,1.4,0),1,0),v(new zn(.138,10,8).scale(1,1.13,1.03).translate(0,1.54,0),1,5),v(new zn(.15,10,5,0,6.2832,0,1.5).translate(0,1.565,-.014),3,5),v(new Qe(.2,.022,.15).translate(0,1.6,.16),5,5)];for(let[B,ee,se]of[[1,1,3],[-1,2,4]])F.push(I(.074,.58,B*.09,.43,0,2,se),v(new Qe(.1,.07,.23).translate(B*.09,.035,.04),4,se),I(.056,.2,B*.25,1.2,0,0,ee),I(.046,.24,B*.25,.94,0,1,ee));return Yu(F)})(),f=new Me({roughness:.85});f.onBeforeCompile=v=>{v.uniforms.uTime=a,v.uniforms.uCar=h,v.uniforms.uCar2=u,v.vertexShader=`uniform float uTime; uniform vec3 uCar, uCar2; attribute float aPart, aLimb, aBeh, aPh, aWalk; attribute vec3 aSkin;
`+v.vertexShader.replace("#include <color_vertex>",`#include <color_vertex>
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
        if (walk > .5) { float u = fract(T * .6 / max(aWalk, 1.) + aPh), tri = abs(u * 2. - 1.); transformed.xz *= (u < .5 ? -1. : 1.); transformed.z += (tri - .5) * aWalk; }`)};let p=[15845797,14263671,11038783,8014379].map(v=>new be(v)),x=(()=>{let v=(F,B,ee)=>{let se=F.attributes.position.count;return F.setAttribute("aPart",new St(new Float32Array(se).fill(B),1)),F.setAttribute("aLimb",new St(new Float32Array(se).fill(ee),1)),F},I=(F,B,ee,se,q,J,ie,me)=>v(new Qe(F,B,ee).translate(se,q,J),ie,me);return Yu([I(.4,.58,.25,0,1.1,0,0,0),I(.27,.3,.27,0,1.55,0,1,5),I(.14,.82,.17,.09,.41,0,2,3),I(.14,.82,.17,-.09,.41,0,2,4),I(.1,.5,.11,.26,1.06,0,0,1),I(.1,.5,.11,-.26,1.06,0,0,2)])})(),g=v=>{let I=new Map;for(let F of v){let B=Math.floor(F.x/60)+","+Math.floor(F.z/60);I.has(B)||I.set(B,[]),I.get(B).push(F)}for(let F of I.values()){let B=d.clone(),ee=F.length,se=new Float32Array(ee),q=new Float32Array(ee),J=new Float32Array(ee*3),ie=new Float32Array(ee);F.forEach((de,oe)=>{se[oe]=de.beh||0,q[oe]=vt();let _e=de.k||p[vt()*4|0];J[oe*3]=_e.r,J[oe*3+1]=_e.g,J[oe*3+2]=_e.b,ie[oe]=de.walk||0,de.c||(de.c=new be(15987958));let Re=de.s||1;de.sx=Re*(.9+vt()*.22),de.sz=de.sx,de.sy=Re*(.94+vt()*.14)}),B.setAttribute("aBeh",new jn(se,1)),B.setAttribute("aPh",new jn(q,1)),B.setAttribute("aSkin",new jn(J,3)),B.setAttribute("aWalk",new jn(ie,1));let me=x.clone();for(let de of["aBeh","aPh","aSkin","aWalk"])me.setAttribute(de,B.getAttribute(de));let ce=Ed(B,f,F,!1);ce.computeBoundingSphere(),ce.boundingSphere.radius+=9,ce.userData.lod=[B,me],ce.userData.cur=0,r.add(ce)}},m="transformed.y += abs(sin(uTime * 3.4 + instanceMatrix[3][0] * 1.7 + instanceMatrix[3][2] * 2.3)) * .14;",y=jc(e.pts,2);i.finishPath(y);let M=y.length,_=1e9,w=-1e9,T=1e9,A=-1e9;for(let v of y)_=Math.min(_,v.x),w=Math.max(w,v.x),T=Math.min(T,v.z),A=Math.max(A,v.z);let S=(_+w)/2,E=(T+A)/2,C=y.map((v,I)=>{for(let F=-6;F<=6;F++)if(Math.abs(y[((I+F)%M+M)%M].k)>1/110)return!0;return!1}),L=.5,N=Math.max(30,s+8),V=_-N,O=T-N,W=Math.ceil((w-_+N*2)/L),K=Math.ceil((A-T+N*2)/L),Q=document.createElement("canvas");Q.width=W,Q.height=K;let re=Q.getContext("2d",{willReadFrequently:!0});re.fillStyle="#000",re.fillRect(0,0,W,K),re.globalCompositeOperation="lighter",re.lineJoin=re.lineCap="round";let $=v=>{re.beginPath();let I=!1;for(let F=0;F<=M;F++){let B=y[F%M],ee=(B.x-V)/L,se=(B.z-O)/L;if(v&&!v[F%M]){I=!1;continue}I?re.lineTo(ee,se):re.moveTo(ee,se),I=!0}re.stroke()};re.strokeStyle="#00ff00",re.lineWidth=s*2/L,$(),re.strokeStyle="#ff0000",re.lineWidth=n*2/L,$(),re.strokeStyle="#0000ff",re.lineWidth=(n+1.5)*2/L,$(C);let ae=e.pit===null?null:e.pit||[50,50],he=ae?Math.round(ae[0]/2):0,Ue=ae?Math.round(ae[1]/2):0,Pe=v=>!!ae&&(v>=M-he||v<=Ue),_t=[];for(let v=M-he;v<=M+Ue;v++)_t.push(v%M);let et=(v,I)=>{v.beginPath(),_t.forEach((F,B)=>{let ee=y[F],se=(ee.x+ee.tz*I-V)/L,q=(ee.z-ee.tx*I-O)/L;B?v.lineTo(se,q):v.moveTo(se,q)}),v.stroke()},ot=null,te=Math.max(s+.2,n+8.6);if(ae){re.lineCap="butt",re.strokeStyle="#00ff00",re.lineWidth=9.2/L,et(re,n+4);let v=document.createElement("canvas");v.width=W,v.height=K;let I=v.getContext("2d",{willReadFrequently:!0});I.lineJoin="round",I.strokeStyle="#fff",I.lineWidth=7.6/L,et(I,n+3.7),ot=I.getImageData(0,0,W,K).data}let ue=re.getImageData(0,0,W,K).data,Ae=new Uint8Array(W*K);for(let v=0;v<W*K;v++){let I=ue[v*4],F=ue[v*4+1],B=ue[v*4+2];Ae[v]=F<128?mi:I>128?ms:ot&&ot[v*4]>128?Xc:B>128?va:zs}i.grid={w:W,h:K,x0:V,z0:O,cell:L,surf:Ae,hgt:null},i.bounds=Math.max(w-_,A-T)/2+60;let ye=t.night,ve=e.theme==="desert",Ve=e.theme==="day",Ot=ji(256,256,(v,I,F)=>{xm(v,I,F,ve?"#d8b26c":ye?"#2a2d31":Ve?"#55a83a":"#4f8a3c",.1,5e3),Ve&&(v.fillStyle="rgba(255,255,255,.055)",v.fillRect(0,0,I/2,F),v.fillStyle="rgba(0,40,0,.05)",v.fillRect(I/2,0,I/2,F))},220,220),je=new xe(new Qt(2600,2600),new Me({map:Ot,roughness:1}));je.rotation.x=-Math.PI/2,je.position.set(S,-.02,E),je.receiveShadow=!0,r.add(je);let ut=ji(256,256,(v,I,F)=>{xm(v,I,F,ye?"#26272c":"#51475f",.1,9e3);{let B=v.createLinearGradient(0,0,I,0);B.addColorStop(0,"rgba(255,255,255,.07)"),B.addColorStop(.3,"rgba(0,0,0,.1)"),B.addColorStop(.5,"rgba(0,0,0,.16)"),B.addColorStop(.7,"rgba(0,0,0,.1)"),B.addColorStop(1,"rgba(255,255,255,.07)"),v.fillStyle=B,v.fillRect(0,0,I,F)}ye&&(v.fillStyle="rgba(255,255,255,.75)",v.fillRect(I/2-2,0,4,F*.45))},1,1),dt=new xe(ba(y,n,-n,.02,1/12),new Me({map:ut,roughness:.85}));dt.receiveShadow=!0,dt.material.name="racetrack",r.add(dt);let Je=new Me({color:15921906,roughness:.7});for(let v of[1,-1]){let I=new xe(ba(y,v*n-.35+(v>0?0:.7),v*n-.65+(v>0?0:.7),.035,1),Je);I.receiveShadow=!0,r.add(I)}let Et=ji(64,64,v=>{v.fillStyle=Ve?"#e8475a":"#e3262e",v.fillRect(0,0,64,32),v.fillStyle=Ve?"#f2c230":"#f4f4f4",v.fillRect(0,32,64,32)}),Rt=new Me({map:Et,roughness:.7});for(let v of[1,-1]){let I=new xe(ba(y,v>0?n+1.5:-n,v>0?n:-n-1.5,.045,.25,!0,C),Rt);I.receiveShadow=!0,r.add(I)}let Ct=ji(128,32,v=>{ye?(v.fillStyle="#15161c",v.fillRect(0,0,128,32),v.fillStyle="#19d3ff",v.fillRect(0,20,128,5),v.fillStyle="#ff2bd0",v.fillRect(0,6,128,3)):Ve?(v.fillStyle="#2d6bd1",v.fillRect(0,0,128,32),v.fillStyle="#1c4ea8",v.fillRect(0,8,128,3),v.fillRect(0,20,128,3),v.fillStyle="#7a4326",v.fillRect(0,0,7,32)):(v.fillStyle="#e9e9e9",v.fillRect(0,0,128,32),v.fillStyle=ve?"#1e88c9":"#e3262e",v.fillRect(0,0,64,32),v.fillStyle="rgba(0,0,0,.25)",v.fillRect(0,0,128,3))}),xt=new Me({map:Ct,side:$t,roughness:.6,emissive:ye?16777215:0,emissiveMap:ye?Ct:null,emissiveIntensity:ye?1.2:0});for(let v of[1,-1]){let I=new xe(Iy(y,v>0?F=>Pe(F)?te:s+.2:-(s+.2),1.15,.16666666666666666),xt);I.castShadow=!ye,r.add(I)}let st=(v,I,F)=>{for(let B=0;B<8;B++)if(i.surf(v+Math.cos(B*.785)*F,I+Math.sin(B*.785)*F)!==mi)return!1;return!0},z=[];for(let v=0;v<M;v+=4)for(let I of[1,-1]){let F=y[v],B=I*(s+5+vt()*38),ee=F.x+F.tz*B,se=F.z-F.tx*B;st(ee,se,5)&&z.push({x:ee,z:se,r:vt()*6.28,s:.8+vt()*.7,i:v})}if(ye){let v=ji(64,128,ie=>{ie.fillStyle="#0d0e14",ie.fillRect(0,0,64,128);for(let me=4;me<124;me+=10)for(let ce=4;ce<60;ce+=9)Math.random()>.45&&(ie.fillStyle=["#ffd27a","#8fd8ff","#ff9ad5"][Math.random()*3|0],ie.fillRect(ce,me,5,6))}),I=new Me({map:v,emissive:16777215,emissiveMap:v,emissiveIntensity:1.1,roughness:.8}),F=new Qe(1,1,1);F.translate(0,.5,0),r.add(Hn(F,I,z.filter((ie,me)=>me%3===0).map(ie=>({x:ie.x,z:ie.z,r:0,sx:14+vt()*12,sy:5+vt()*9,sz:14+vt()*12})),!1));let B=new yn(.12,.16,7,6);B.translate(0,3.5,0);let ee=new zn(.45,8,6);ee.translate(0,7.1,0);let se=[];for(let ie=0;ie<M;ie+=14){let me=y[ie],ce=(ie%28?1:-1)*(s+1.2);se.push({x:me.x+me.tz*ce,z:me.z-me.tx*ce})}r.add(Hn(B,new Me({color:3158586}),se,!1)),r.add(Hn(ee,new rt({color:new be(16769704).multiplyScalar(3)}),se,!1));let q=new Kn(3.4,7,14,1,!0);q.translate(0,3.5,0);let J=Hn(q,new rt({color:16767392,transparent:!0,opacity:.07,depthWrite:!1,blending:Mn,side:$t}),se,!1);J.visible=!1,r.add(J)}else{let v=new yn(.22,.34,ve||e.theme==="coast"?6:2.4,6);v.translate(0,ve||e.theme==="coast"?3:1.2,0);let I;ve||e.theme==="coast"?(I=new Kn(2.6,1.6,7),I.scale(1,.7,1),I.translate(0,6.2,0)):(I=new Qa(2.7,1),I.scale(1,.85,1),I.translate(0,4.3,0));let F=z.filter((B,ee)=>ve?ee%3===0:Ve?ee%11!==5&&ee%11!==8:!0);if(r.add(Hn(v,new Me({color:7031339,roughness:1}),F)),r.add(Hn(I,new Me({color:ve?5147194:Ve?3970112:3107636,roughness:1,flatShading:!0}),F)),ve){let B=new Kn(1,1,4);B.rotateY(Math.PI/4),B.translate(0,.5,0);let ee=new Me({color:13804636,roughness:1,flatShading:!0});r.add(Hn(B,ee,[{x:S+420,z:E-380,sx:330,sy:210,sz:330},{x:S+40,z:E-520,sx:280,sy:180,sz:280},{x:S-330,z:E-430,sx:190,sy:120,sz:190}],!1));let se=new $a(1.4,0);r.add(Hn(se,new Me({color:11569749,roughness:1,flatShading:!0}),z.filter((q,J)=>J%3===1).map(q=>({...q,y:.3,s:q.s*1.4}))))}if(e.theme==="coast"){let B=new xe(new Qt(3e3,1200),new Me({color:1863580,roughness:.15,metalness:.5}));B.rotation.x=-Math.PI/2,B.position.set(S,.03,T-s-22-600),r.add(B);let ee=new xe(new Qt(3e3,22),new Me({color:15126426,roughness:1}));ee.rotation.x=-Math.PI/2,ee.position.set(S,.01,T-s-11),ee.receiveShadow=!0,r.add(ee);let se=new Qe(1,1,1);se.translate(0,.5,0);let q=[15852488,15321504,14280428,15782592].map(ie=>new be(ie)),J=[];for(let ie=_-120;ie<w+120;ie+=26)J.push({x:ie,z:A+s+40+vt()*20,sx:20,sy:16+vt()*34,sz:18,c:q[vt()*4|0]});r.add(Hn(se,new Me({roughness:.9}),J))}}if(!ye){let v=new Me({color:ve?12884572:11034424,roughness:1});for(let I of[1,-1]){let F=new xe(ba(y,I>0?n+2.2:-n,I>0?n:-n-2.2,.012,1),v);F.receiveShadow=!0,r.add(F)}}if(ae){let v=y.map((ce,de)=>Pe(de)),I=new xe(ba(y,n+7.6,n,.02,1/12,!0,v),new Me({color:ye?3421501:6708341,roughness:.9,name:"racetrack"}));I.receiveShadow=!0,r.add(I);let F=new xe(ba(y,n+.25,n-.05,.05,1,!0,v),new Me({color:15909424,roughness:.7}));r.add(F),i.pitBoxes=[];let B=[],ee=[14886446,1681358,16761370,3126359,16743088,15987958].map(ce=>new be(ce));for(let ce=0;ce<6;ce++){let de=((M-Math.round(he*.6)+ce*4)%M+M)%M,oe=y[de],_e=oe.x+oe.tz*(n+5),Re=oe.z-oe.tx*(n+5),D=Math.atan2(oe.tx,oe.tz),le=ji(128,256,pe=>{pe.clearRect(0,0,128,256),pe.strokeStyle="#fff",pe.lineWidth=8,pe.strokeRect(6,6,116,244),pe.fillStyle="rgba(255,255,255,.9)",pe.font="900 70px Rubik, Arial Black, sans-serif",pe.textAlign="center",pe.fillText(String(ce+1),64,150)}),Y=new xe(new Qt(3.4,6.8),new rt({map:le,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-5,polygonOffsetUnits:-5}));Y.rotation.set(-Math.PI/2,0,Math.PI-D),Y.position.set(_e,.06,Re),r.add(Y),i.pitBoxes.push({x:_e,z:Re,th:D,idx:de});for(let pe=0;pe<3;pe++)B.push({x:oe.x+oe.tz*(n+7.6)+oe.tx*(pe-1)*1.3,z:oe.z-oe.tx*(n+7.6)+oe.tz*(pe-1)*1.3,c:ee[ce]})}new si(.3,.75,3,8).translate(0,.68,0),new zn(.27,8,6).translate(0,1.52,0),B.forEach((ce,de)=>{ce.beh=0,ce.r=Math.atan2(y[0].tx,y[0].tz)-Math.PI/2+(de%3-1)*.5}),g(B);let J=y[0],ie=new xe(new Qe(1.2,1.15,(he+Ue)*1.5),new Me({color:ye?2763827:15327956,roughness:.9}));ie.position.set(J.x+J.tz*(te+1.4),.58,J.z-J.tx*(te+1.4));let me=new xe(new Qe(9.4,.5,(he+Ue)*1.5+1),new Me({color:4160090,roughness:.8}));me.position.copy(ie.position),me.position.y=4.85,me.rotation.y=ie.rotation.y,me.visible=!1,r.add(me)}if(!e.dev){let v=[],I=[14886446,1681358,16761370,15987958,3126359,16743088,8077284].map(D=>new be(D)),F=[15845797,14263671,11038783,8014379].map(D=>new be(D));for(let D=0;D<M;D++)if(!(D%64>46)){for(let le of[1,-1])if(!(le>0&&Pe(D)))for(let Y=0;Y<6;Y++){if(vt()>.82*c)continue;let pe=y[D],ge=le*(s+1.7+Y*1.05+vt()*.3),ne=pe.x+pe.tz*ge+(vt()-.5)*.8,Ie=pe.z-pe.tx*ge+(vt()-.5)*.8;st(ne,Ie,.9)&&v.push({x:ne,z:Ie,s:.92+vt()*.2,c:I[vt()*7|0],k:F[vt()*4|0],i:D,sd:le,row:Y})}}new si(.28,.7,3,8).translate(0,.63,0),new zn(.24,8,6).translate(0,1.42,0);let se=[],q=[],J=[14886446,16761370,15987958,1681358,3126359,1118740].map(D=>new be(D));for(let D=6;D<M;D+=9){let le=y[D],Y=le.k>0?-1:1;if(Y>0&&Pe(D))continue;let pe=Y*(s+.9),ge=le.x+le.tz*pe,ne=le.z-le.tx*pe;st(ge,ne,.5)&&(q.push({x:ge,z:ne,y:0,r:Math.atan2(le.tx,le.tz)+(Y>0?0:Math.PI),c:J[vt()*6|0]}),Math.abs(le.k)>1/80&&se.push({x:ge+le.tx*1.2,z:ne+le.tz*1.2,c:new be(16742938)}))}let ie=new yn(.05,.05,4.4,5);ie.translate(0,2.2,0),r.add(Hn(ie,new Me({color:14211288}),q.map(D=>({x:D.x,z:D.z})),!1));let me=new Qt(1.7,1,8,1);me.translate(.85,3.8,0);let ce=Hn(me,l(new Me({side:$t,roughness:.8}),"transformed.z += sin(position.x * 3.5 - uTime * 6. + instanceMatrix[3][0]) * .16 * position.x; transformed.y += sin(position.x * 2. - uTime * 4.) * .04 * position.x;"),q,!1);r.add(ce),v.push(...se.map(D=>({...D,s:1.05,k:F[1]}))),v.forEach((D,le)=>{if(D.i==null){D.beh=0;return}let Y=y[D.i],pe=Math.atan2(Y.x-D.x,Y.z-D.z);D.row<2?(D.beh=vt()<.7?1:0,D.r=pe+(vt()-.5)*.5):vt()<.22?(D.beh=2,D.walk=5+vt()*9,D.r=Math.atan2(Y.tx,Y.tz)):(D.beh=vt()<.25?1:0,D.r=pe+(le%2?1.25:-1.25)*(D.beh?.2:1))}),g(v);let de=[["TAFHEET","#e3262e","#fff"],["EGYSeal","#f3f4f6","#1c4ea8"],["NILE COLA","#1c4ea8","#fff"],["AMM SABER","#ffc21a","#17181c"],["SCARAB OIL","#f3f4f6","#e3262e"],["RA ROSSO","#e3262e","#ffc21a"],["HORUS TYRES","#17181c","#ffc21a"]],oe=new Me({color:8012582,roughness:1});de.forEach(([D,le,Y],pe)=>{let ge=Math.round((pe+.45)*M/de.length)%M,ne=y[ge],Ie=ne.k>0?-1:1,Fe=Ie*((Ie>0&&Pe(ge)?te+16:s)+5.5),Pt=ne.x+ne.tz*Fe,mt=ne.z-ne.tx*Fe;if(!st(Pt,mt,2.5))return;let ei=ji(512,200,qn=>{qn.fillStyle=le,qn.fillRect(0,0,512,200),qn.strokeStyle=Y,qn.lineWidth=10,qn.strokeRect(14,14,484,172),qn.fillStyle=Y,qn.font="italic 900 84px Rubik, Arial Black, sans-serif",qn.textAlign="center",qn.textBaseline="middle",qn.fillText(D,256,106,440)}),Rn=new yt,Pa=new xe(new Qe(10,3.9,.3),[oe,oe,oe,oe,new Me({map:ei,roughness:.8}),oe]);Pa.position.y=4.4,Pa.castShadow=!0,Rn.add(Pa);for(let qn of[-4,4]){let _r=new xe(new Qe(.35,2.6,.35),oe);_r.position.set(qn,1.3,-.1),_r.castShadow=!0,Rn.add(_r)}Rn.position.set(Pt,0,mt),Rn.rotation.y=Math.atan2(ne.x-Pt,ne.z-mt),r.add(Rn)});let _e=[];for(let D=0;D<M;D+=5){let le=y[D];if(Math.abs(le.k)<1/70)continue;let Y=le.k>0?-1:1;if(Y>0&&Pe(D))continue;let pe=Y*(s+1.3),ge=le.x+le.tz*pe,ne=le.z-le.tx*pe,Ie=Math.atan2(le.tx,le.tz);st(ge,ne,.8)&&_e.push({x:ge,z:ne,y:.55,r:Ie},{x:ge+le.tx*1.6,z:ne+le.tz*1.6,y:.55,r:Ie},{x:ge+le.tx*.8,z:ne+le.tz*.8,y:1.6,r:Ie})}let Re=new Qe(1.1,1.05,1.5,2,2,2);if(r.add(Hn(Re,new Me({color:14197825,roughness:1,flatShading:!0}),_e)),Ve){let D=z.filter((ge,ne)=>ne%11===5).map(ge=>({x:ge.x,z:ge.z,y:0,r:ge.r,c:I[vt()*7|0]})),le=new Qe(2.3,2.2,5);le.translate(0,1.4,0),r.add(Hn(le,new Me({roughness:.6}),D));let Y=z.filter((ge,ne)=>ne%11===8).map(ge=>({x:ge.x,z:ge.z,r:ge.r})),pe=new Kn(2.6,2.6,4);pe.translate(0,1.3,0),r.add(Hn(pe,new Me({color:15986662,roughness:1,flatShading:!0}),Y))}}if(e.dev){let v=[];for(let F=0;F<12;F++)v.push({x:20+F*18,z:24});for(let F=0;F<24;F++)v.push({x:110+Math.cos(F/24*6.283)*30,z:65+Math.sin(F/24*6.283)*30});let I=new Kn(.35,.9,8);I.translate(0,.45,0),r.add(Hn(I,new Me({color:16738835,roughness:.7}),v))}let Dt=y[0],pt=ji(256,64,v=>{v.fillStyle="#3a3d45",v.fillRect(0,0,256,64);for(let I=0;I<900;I++)v.fillStyle=`hsl(${Math.random()*360},70%,${45+Math.random()*30}%)`,v.fillRect(Math.random()*256,Math.random()*64,3,4)},3,1),P=new yt;P.position.set(Dt.x-Dt.tz*(s+3),0,Dt.z+Dt.tx*(s+3)),P.rotation.y=Math.atan2(Dt.tx,Dt.tz);for(let v=0;v<5;v++){let I=new xe(new Qe(2.2,1.1*(v+1),60),new Me({map:pt,emissive:ye?5592405:0,emissiveMap:ye?pt:null}));I.position.set(-v*2.2,.55*(v+1),10),I.castShadow=!0,P.add(I)}r.add(P);{let v=[],I=P.rotation.y,F=Math.cos(I),B=Math.sin(I),ee=[14886446,1681358,16761370,15987958,3126359,16743088,8077284].map(ie=>new be(ie));for(let ie=0;ie<5;ie++)for(let me=-19;me<40;me+=.8){if(vt()>.88*c)continue;let ce=-ie*2.2+(vt()-.5)*.9;v.push({x:P.position.x+ce*F+me*B,z:P.position.z-ce*B+me*F,y:1.1*(ie+1),s:.9+vt()*.2,c:ee[vt()*7|0]})}new si(.28,.6,3,6).translate(0,.55,0),new zn(.23,7,5).translate(0,1.28,0),v.forEach(ie=>{ie.beh=vt()<.75?1:0,ie.r=I+Math.PI/2+(vt()-.5)*.4}),g(v),ye||[[14886446,16761370],[1681358,15987958],[8077284,16743088],[3126359,16761370]].forEach(([ie,me],ce)=>{let de=new yt,oe=new xe(new zn(9,12,10),new Me({color:ie,roughness:.7,flatShading:!0}));oe.scale.y=1.2;let _e=new xe(new yn(8.9,8.9,3,12,1,!0),new Me({color:me,roughness:.7})),Re=new xe(new Qe(2.4,2,2.4),new Me({color:8012582}));Re.position.y=-14,de.add(oe,_e,Re);let D=ce*1.7+.6,le=i.bounds+70+ce*25,Y=S+Math.cos(D)*le,pe=E+Math.sin(D)*le,ge=34+ce*9;de.position.set(Y,ge,pe),r.add(de),o.push(ne=>{de.position.y=ge+Math.sin(ne*.25+ce)*3,de.position.x=Y+Math.sin(ne*.05+ce*2)*14})}),ye&&[16722896,1692671,16761370,8257435].forEach((ie,me)=>{let ce=P.position.x+-9*F+(me*16-14)*B,de=P.position.z- -9*B+(me*16-14)*F,oe=new di(ie,420,95,.32,.6,1.3);oe.position.set(ce,13,de),r.add(oe,oe.target),i.fancyLights.push(oe);let _e=new xe(new Kn(5,46,12,1,!0),new rt({color:ie,transparent:!0,opacity:.09,depthWrite:!1,blending:Mn,side:$t}));_e.geometry.translate(0,-23,0),_e.geometry.rotateX(Math.PI),_e.position.set(ce,13,de),_e.visible=!1,r.add(_e),o.push(Re=>{let D=Math.sin(Re*.5+me*1.6),le=y[((Math.round((D*.5+.5)*40)-20)%M+M)%M];oe.target.position.set(le.x+Dt.tz*Math.sin(Re*.9+me)*5,0,le.z-Dt.tx*Math.sin(Re*.9+me)*5),_e.rotation.set(Math.sin(Re*.7+me)*.5,0,Math.cos(Re*.45+me*2)*.5)})})}}async function bm(i,e){let t=Sn.find(l=>l.id===i),n=new Td(t);t.type==="glb"?await Py(n,e):Ly(n),n.cullables=t.type==="glb"?[]:Ad,Cy(n);let s=1e9,r=-1e9,a=1e9,o=-1e9;for(let l of n.path)s=Math.min(s,l.x),r=Math.max(r,l.x),a=Math.min(a,l.z),o=Math.max(o,l.z);return n.box={minx:s,maxx:r,minz:a,maxz:o},n}function vm(i){let e=new zn(4e3,24,12),t=new Vt({side:dn,depthWrite:!1,fog:!1,uniforms:{top:{value:new be(i.skyTop)},bot:{value:new be(i.skyBot)}},vertexShader:"varying vec3 p; void main(){ p=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`varying vec3 p; uniform vec3 top; uniform vec3 bot; void main(){ float h=clamp(normalize(p).y*2.2,0.,1.); gl_FragColor=vec4(mix(bot,top,pow(h,.6)),1.);
#include <tonemapping_fragment>
#include <colorspace_fragment>
 }`}),n=new xe(e,t);return n.renderOrder=-10,n.frustumCulled=!1,n}var He={hz:120,tyre:{frontB:13.5,frontC:1.45,rearB:9.5,rearC:1.35,driveShare:.45,brakeShare:.38,loadSens:.3,wornGrip:.72,wear:{base:.0011,slip:.011,spin:.008,lock:.03,offroad:.002},wetLossSlick:.27,wetLossWet:.07,dryLossWet:.07},steer:{lock:.76,speedK:.038,rate:6.6,rateSpeedK:.02,returnRate:7.5,maxLock:.62},assist:{off:0,low:.4,medium:.7,full:1},surface:{kerbGrip:.95,grassDrag:.15,roadDrag:.03,airDrag:.25},fuel:{tankKg:45,fullThrottleSeconds:330,idle:.06},pit:{limit:16.7,tyres:2.6,fuelFull:4,repairFull:6},damage:{threshold:3.5,scale:34,enginePowerLoss:.4,steerPull:.05},gripScale:1.48,rearBias:1.12,powerSlide:.85,slideAid:.75,assistYawDamp:.6,slowTurn:.28,drift:{rearCut:.34,build:3.2,decay:5,minSpeed:10},enginePower:1.22,shock:{minHit:7,perMs:.08,max:1.6},visualLead:{steer:.78,yaw:.16,max:.33,rate:13,fullSpeed:12},wall:{bounce:.02,spin:.28,friction:.2,yawKeep:.94},yawDamp:.45,yawDampSpeed:.01,net:{hz:24,minBuffer:45,maxBuffer:300,intervalK:1.2,jitterK:2.6},parts:{limp:.26,enginePower:.8,engineDead:9,gearboxTop:.45,wheelGrip:.65,wheelPull:.09,flatAt:.7,flatDrag:.22,towSeconds:12},reset:{penalty:2},setup:{gearAcc:.04,gearTop:.035,aeroDown:.35,aeroTop:.02,biasStep:.05,rollStep:.03,compound:{soft:[1.04,1.6],medium:[1,1],hard:[.97,.6]}},toy:{w:1.08,h:1.16,l:.88,wheel:1.12}},gt=[{id:"Ford",snd:"01_Turbo_Inline4",idle:900,red:7200,turbo:1,pops:"pop",cyl:4,name:"Scarab RS",ar:"\u0627\u0644\u062C\u0639\u0631\u0627\u0646",cls:"Compact \xB7 FWD",price:0,color:2060267,top:50,acc:8.6,grip:1.22,rear:1.04,loose:.3,off:.62,mass:1180,drive:"fwd",brake:1.25,aero:.5,rollF:.6,yawK:1.12,blurb:"Front-drive hot hatch. Safe understeer, lift to tuck the nose in. The beginner\u2019s car."},{id:"Sterrato",snd:"08_Race_V10",idle:1e3,red:8500,turbo:0,pops:"crackle",cyl:10,name:"Sandstorm",ar:"\u0627\u0644\u0639\u0627\u0635\u0641\u0629",cls:"Rally \xB7 AWD",price:0,color:15245852,top:53,acc:9.4,grip:1.18,rear:1,loose:.5,off:.8,mass:1350,drive:"awd",brake:1.25,aero:.7,rollF:.54,yawK:1.25,blurb:"All-wheel drive. Huge traction out of corners and barely notices the grass."},{id:"Mercedes",snd:"04_Crossplane_V8",idle:750,red:6800,turbo:0,pops:"pop",cyl:8,name:"Pharaoh",ar:"\u0627\u0644\u0641\u0631\u0639\u0648\u0646",cls:"Touring \xB7 RWD",price:1500,color:1842982,top:56,acc:9.8,grip:1.15,rear:.96,loose:.8,off:.55,mass:1650,drive:"rwd",brake:1.2,aero:.6,rollF:.5,yawK:1.4,blurb:"Heavy rear-drive saloon. Long braking, and the tail steps out under power."},{id:"LandRover",snd:"04_Crossplane_V8",idle:700,red:6e3,turbo:0,pops:"",cyl:8,name:"Sphinx 4x4",ar:"\u0623\u0628\u0648 \u0627\u0644\u0647\u0648\u0644",cls:"Truck \xB7 AWD",price:2500,color:3112271,top:49,acc:9,grip:1.12,rear:1.03,loose:.4,off:.9,mass:2100,drive:"awd",brake:1.05,aero:.3,rollF:.57,yawK:1.6,blurb:"Two tonnes. Slow to turn, slow to stop, wins every shoving match."},{id:"Artura",snd:"07_TwinTurbo_V6",idle:950,red:8200,turbo:1,pops:"pop",cyl:6,name:"Cobra",ar:"\u0627\u0644\u0643\u0648\u0628\u0631\u0627",cls:"GT \xB7 RWD",price:4e3,color:16738835,top:60,acc:11,grip:1.32,rear:.99,loose:.6,off:.5,mass:1400,drive:"rwd",brake:1.4,aero:1.2,rollF:.52,yawK:1.1,blurb:"Mid-engine GT. Sharp turn-in, strong brakes, needs a smooth right foot."},{id:"Ferrari",snd:"05_FlatPlane_V8",idle:1e3,red:8800,turbo:0,pops:"crackle",cyl:8,name:"Ra Rosso",ar:"\u0631\u0639",cls:"GT \xB7 RWD",price:6500,color:14163500,top:64,acc:11.8,grip:1.36,rear:.97,loose:.7,off:.5,mass:1450,drive:"rwd",brake:1.45,aero:1.4,rollF:.5,yawK:1.1,blurb:"V8 GT. Faster everywhere than the Cobra and less forgiving about it."},{id:"Zenvo",snd:"06_Race_V12",idle:900,red:7800,turbo:1,pops:"crackle",cyl:8,name:"Horus GT",ar:"\u062D\u0648\u0631\u0633",cls:"Hyper \xB7 RWD",price:9500,color:1324712,top:69,acc:12.8,grip:1.42,rear:.98,loose:.75,off:.45,mass:1500,drive:"rwd",brake:1.5,aero:2.3,rollF:.5,yawK:1.05,blurb:"Downforce car: the faster you go, the harder it grips. Brutal on cold nerves."},{id:"Mustang",snd:"04_Crossplane_V8",idle:750,red:7e3,turbo:0,pops:"crackle",cyl:8,name:"Khamsin",ar:"\u0627\u0644\u062E\u0645\u0627\u0633\u064A\u0646",cls:"Muscle \xB7 RWD",price:2e3,color:15909376,top:58,acc:10.6,grip:1.14,rear:.94,loose:.9,off:.5,mass:1700,drive:"rwd",brake:1.15,aero:.5,rollF:.48,yawK:1.35,blurb:"Big V8 muscle. Loud, fast in a straight line, and happy to go sideways."},{id:"M8",snd:"03_Race_Inline6",idle:800,red:7e3,turbo:1,pops:"pop",cyl:8,name:"Anubis M",ar:"\u0623\u0646\u0648\u0628\u064A\u0633",cls:"Touring \xB7 RWD",price:3500,color:1006666,top:62,acc:11,grip:1.28,rear:.97,loose:.7,off:.5,mass:1750,drive:"rwd",brake:1.35,aero:.9,rollF:.52,yawK:1.3,blurb:"Grand tourer. Heavy but composed, with long legs on the straights."},{id:"Urus",snd:"04_Crossplane_V8",idle:800,red:6800,turbo:1,pops:"pop",cyl:8,name:"Bastet SUV",ar:"\u0628\u0627\u0633\u062A\u064A\u062A",cls:"Super SUV \xB7 AWD",price:4500,color:15987958,top:60,acc:11.2,grip:1.2,rear:1.02,loose:.45,off:.82,mass:2200,drive:"awd",brake:1.2,aero:.6,rollF:.56,yawK:1.55,blurb:"A fast SUV. Launches hard on four driven wheels, leans on its brakes."},{id:"Porsche",snd:"02_Boxer_Flat4",idle:850,red:7200,turbo:1,pops:"pop",cyl:8,name:"Nefertiti S",ar:"\u0646\u0641\u0631\u062A\u064A\u062A\u064A",cls:"Sports saloon \xB7 AWD",price:5e3,color:8077284,top:61,acc:11.4,grip:1.3,rear:1,loose:.5,off:.6,mass:1900,drive:"awd",brake:1.35,aero:1,rollF:.53,yawK:1.35,blurb:"All-wheel-drive saloon. Stable, quick, and easy to trust in the rain."},{id:"AMG",snd:"04_Crossplane_V8",idle:800,red:7200,turbo:1,pops:"crackle",cyl:8,name:"Osiris GT",ar:"\u0623\u0648\u0632\u064A\u0631\u064A\u0633",cls:"GT \xB7 RWD",price:6e3,color:3126359,top:63,acc:11.6,grip:1.33,rear:.97,loose:.7,off:.5,mass:1600,drive:"rwd",brake:1.4,aero:1.3,rollF:.5,yawK:1.15,blurb:"Front-engine GT with a long bonnet. Balanced, and rewards trail braking."},{id:"GTR",snd:"09_Rally_Inline5",idle:900,red:7400,turbo:1,pops:"pop",cyl:6,name:"Sobek R",ar:"\u0633\u0648\u0628\u0643",cls:"GT \xB7 AWD",price:7e3,color:1681358,top:64,acc:12.4,grip:1.34,rear:1,loose:.5,off:.6,mass:1750,drive:"awd",brake:1.4,aero:1.3,rollF:.54,yawK:1.25,blurb:"Twin-turbo all-wheel drive. Monstrous traction out of slow corners."},{id:"P1GTR",snd:"05_FlatPlane_V8",idle:1100,red:9e3,turbo:1,pops:"crackle",cyl:8,name:"Seth GTR",ar:"\u0633\u062A",cls:"Track hyper \xB7 RWD",price:12e3,color:16738835,top:70,acc:13.2,grip:1.48,rear:.99,loose:.7,off:.42,mass:1400,drive:"rwd",brake:1.55,aero:2.9,rollF:.5,yawK:1,blurb:"Track-only hypercar. Enormous downforce; the fastest car in the game."}];var Kc=[0,15987958,1118740,12088115,15909376,14886446,1681358],Cd=[0,197380,733010,5915664,4853012],Yc=[0,1681358,16722896,8257435,16761370,14886446,16777215];function Dy(i,e){e=Object.assign({gear:0,aero:0,brake:0,susp:0,tyre:"medium"},e||{});let t=He.setup,n=t.compound[e.tyre]||t.compound.medium;return{acc:1+t.gearAcc*e.gear,top:(1-t.gearTop*e.gear)*(1-t.aeroTop*e.aero),aero:Math.max(.1,1+t.aeroDown*e.aero),bias:.7+t.biasStep*e.brake,rollF:i.rollF+t.rollStep*e.susp,grip:n[0],wear:n[1]}}var Hs=[1006666,9051179,2830218,16751918,14163500,16738835,15909376,3126359,1681358,2060267,8077284,16732067,15921906,1842982],Kt=(i,e,t)=>i<e?e:i>t?t:i,Co=i=>{for(;i>Math.PI;)i-=2*Math.PI;for(;i<-Math.PI;)i+=2*Math.PI;return i},Ci=["FL","FR","RL","RR"],wn={},Fy=[new be(5916208),new be(13215339)],Rd=null;async function _m(){let i=await new xa().parseAsync(await Os("cars.glb"),"");Rd={};for(let e of i.scene.children)Rd[e.name]=e}var gs={};function Ny(i){return gs.tire||(gs.tire=new Me({color:789517,roughness:.92}),gs.rim=new Me({color:13225170,metalness:.95,roughness:.28}),gs.rimDark=new Me({color:2763824,metalness:.8,roughness:.4}),gs.body=new Me({color:921361,roughness:.6,metalness:.2}),gs.trim=new Me({color:1381914,roughness:.45,metalness:.5}),gs.window=new vn({color:659478,roughness:.06,metalness:.9,clearcoat:1}),gs.front=new Me({color:16777215,emissive:16774096,emissiveIntensity:1.1})),{...gs,paint:new vn({color:i,metalness:.55,roughness:.32,clearcoat:1,clearcoatRoughness:.06}),rear:new Me({color:9046538,emissive:16718362,emissiveIntensity:.5})}}var Ki=class{constructor(e,t=e.color,n="Driver",s,r,a){this.spec=e,this.name=n,this.color=t,this.up=s||{eng:0,tyre:0,nitro:0,armor:0},this.fuel=1,this.fuelK=1,this.parts={engine:0,gearbox:0,wheels:[0,0,0,0]},this.gone=[!1,!1,!1,!1],this.partK=1,this.shock=0,this.tc=!0,this.abs=!0,this.steerK=1,this.wspinF=0,this.lost=[],this.noNitro=!1,this.assistK=0,this.inPit=!1,this.pitZone=!1,this.aF=0,this.useF=0,this.useR=0,this.dirt=0,this.dirtShown=0,this.wetTyres=!1,this.baseColor=new be(t);let o=Rd[e.id],l=this.root=new yt;l.rotation.order="YXZ";let c=this.chassis=new yt;l.add(c),this.m=Ny(t),this.wheels={},this.bodyMeshes=[],this.dmg={front:0,rear:0,left:0,right:0},this.tyre=1,this.dmgScale=1,this.wear=1;for(let d of o.children){let f=d.clone(!0);if(f.traverse(p=>{if(!p.isMesh)return;p.castShadow=!0;let x=p.userData.kind=p.material.name;p.material=x==="paint"?this.m.paint:x==="tire"?this.m.tire:x==="rim7"?this.m.rim:x==="rim6"?this.m.rimDark:this.m[x]||this.m.body}),f.name.startsWith("body"))c.add(f),f.traverse(p=>{p.isMesh&&(p.geometry=p.geometry.clone(),p.userData.orig=p.geometry.attributes.position.array.slice(),this.bodyMeshes.push(p))});else{let p=new yt;p.position.copy(f.position),f.position.set(0,0,0),p.add(f),l.add(p),this.wheels[f.name.slice(6,8)]={pivot:p,mesh:f,x:p.position.x,y:p.position.y,z:p.position.z}}}let h=this.wheels;this.a=h.FL.z,this.b=-h.RL.z,this.tw=h.FL.x,this.R=h.RL.y;{let d=He.toy;c.scale.set(d.w,d.h,d.l);for(let f in h){let p=h[f];p.mesh.scale.setScalar(d.wheel),p.y*=d.wheel,p.pivot.position.set(p.x*d.w,p.y,p.z*d.l)}this.rideY=this.R*(d.wheel-1),this.R*=d.wheel}let u=new On().setFromObject(c);{if(!wn.aoTex){let f=document.createElement("canvas");f.width=f.height=64;let p=f.getContext("2d"),x=p.createRadialGradient(32,32,6,32,32,32);x.addColorStop(0,"rgba(0,0,0,.85)"),x.addColorStop(.6,"rgba(0,0,0,.45)"),x.addColorStop(1,"rgba(0,0,0,0)"),p.fillStyle=x,p.fillRect(0,0,64,64),wn.aoTex=new Dn(f),wn.aoM=new rt({map:wn.aoTex,transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3})}let d=new xe(new Qt((u.max.x-u.min.x)*1.45,(u.max.z-u.min.z)*1.25),wn.aoM);d.rotation.x=-Math.PI/2,d.position.set(0,.03,(u.max.z+u.min.z)/2),d.renderOrder=1,l.add(d)}this.tn=Dy(e,a),this.wear=this.tn.wear,this.dress(r),this.hw0=(u.max.x-u.min.x)/2,this.zf0=u.max.z,this.makeLamps(),this.hw=(u.max.x-u.min.x)/2-.05,this.zf=u.max.z-.1,this.zr=-u.min.z-.1,this.top=u.max.y,this.I=e.mass*this.a*this.b*e.yawK,this.h=.3,this.wsurf=[ms,ms,ms,ms],this.lastSk=[null,null],this.spin=[0,0],this.reset(0,0,0)}reset(e,t,n){this.x=this.px=e,this.z=this.pz=t,this.th=this.pth=n,this.vx=this.vz=this.r=0,this.steer=0,this.axS=this.ayS=0,this.slipR=0,this.wspin=0,this.locked=!1,this.grass=0,this.nitro=1,this.nitroOn=!1,this.braking=!1,this.rollD=this.pitchD=0,this.di=0,this.rpmR=900,this.gearI=1,this.shiftT=0,this.lead=0,this.draft=0,this.oil=0,this.lockF=!1,this.y=0,this.pitch=this.roll=0,this.stuck=0,this.lastSk=[null,null],this.emitAcc=0,this.rpm=0,this.gear=1}get speed(){return Math.hypot(this.vx,this.vz)}get vf(){return this.vx*Math.sin(this.th)+this.vz*Math.cos(this.th)}get beta(){let e=Math.sin(this.th),t=Math.cos(this.th);return Math.atan2(this.vx*t-this.vz*e,Math.abs(this.vx*e+this.vz*t))}step(e,t,n,s,r=1){let a=this.spec,o=a.mass+He.fuel.tankKg*this.fuel,l=this.a,c=this.b,h=l+c,u=9.81,d=this.up,f=this.x,p=this.z,x=He.tyre,g=this.tn;this.px=f,this.pz=p,this.pth=this.th;let m=Math.sin(this.th),y=Math.cos(this.th),M=this.vx*m+this.vz*y,_=this.vx*y-this.vz*m,w=Math.hypot(M,_),T=M>=0?1:-1,A=n.wet||0,S=this.dmg,E=this.parts,C=He.parts,L=Math.min(.3,E.wheels.reduce((oe,_e)=>oe+(_e>C.flatAt?C.flatDrag:0),0)),N=a.grip*g.grip*(1+.035*d.tyre)*(.72+.28*this.tyre)*(this.oil>0?.42:1)*He.gripScale,V=this.wetTyres?.07*A+.07*(1-A):.27*A;this.oil=Math.max(0,this.oil-e);let O=0,W=0,K=0,Q=0;for(let oe=0;oe<4;oe++){let _e=this.wheels[Ci[oe]],Re=n.surf(this.x+m*_e.z+y*_e.x,this.z+y*_e.z-m*_e.x);this.wsurf[oe]=Re,Re===Xc&&Q++;let D=Re===ms||Re===Xc?1-V:Re===va?.95-V*1.2:a.off*(1-.15*A);(Re===zs||Re===mi)&&(K+=.25);let le=D*(1-C.wheelGrip*E.wheels[oe]);oe<2?O+=le/2:W+=le/2}this.grass=K,this.inPit=Q>=2||this.pitZone;let re=w>4&&M>0?Math.atan2(_,M):0,$=t.steer*He.steer.lock/(1+w*He.steer.speedK),ae=Math.abs(re);this.shock=Math.max(0,this.shock-e);let he=this.shock>0?0:this.assistK;he>0&&M>5&&($=$*(1-he*Kt((ae-.3)*1.6,0,.8))+he*Kt(re*.75,-.5,.5)),w>3&&($+=(S.left-S.right)*.05+(E.wheels[0]-E.wheels[1])*C.wheelPull+S.front*.02*Math.sin(this.x*.7+this.z*.9)),$=Kt($,-.62,.62);let Ue=(t.steer===0?He.steer.returnRate:He.steer.rate*this.steerK/(1+w*He.steer.rateSpeedK))*e;this.steer+=Kt($-this.steer,-Ue,Ue);let Pe=o*this.axS*this.h/h,_t=a.aero*g.aero*w*w,et=Math.min(1,Math.abs(this.ayS)*this.h/(u*this.tw)),ot=1-x.loadSens*(et*g.rollF*2)**2,te=1-x.loadSens*(et*(1-g.rollF)*2)**2,ue=Math.max(o*u*c/h-Pe,o*u*.15)+_t*.45,Ae=Math.max(o*u*l/h+Pe,o*u*.15)+_t*.55,ye=s?t.throttle:0,ve=s?t.brake:1;this.fuel<=0&&(ye=0);{let oe=He.drift,_e=this.forceDrift||this.driftable&&Math.abs(t.steer)>.92&&ye>.3&&w>oe.minSpeed&&M>0;this.di+=((_e?1:0)-this.di)*Math.min(1,e*(_e?oe.build:oe.decay))}let Ve=this.burn=s&&ye>.8&&ve>.5&&w<5&&a.drive!=="fwd";if(this.inPit){let oe=He.pit.limit;M>oe+.5?(ye=0,ve=Math.max(ve,.55)):M>oe-1.2&&(ye=Math.min(ye,.12))}let Ot=s&&ve>0&&ye===0&&M<1.2,je=this.nitroOn=!!(t.nitro&&!this.noNitro&&this.nitro>0&&ye>0&&s&&M>3);je&&(this.nitro=Math.max(0,this.nitro-e/(3.2*(1+.25*d.nitro))));let ut=a.top*g.top*(1+.04*d.eng)*(je?1.16:1)*(K>.5?.55:1)*(1-.1*(S.front+S.rear))*(1-C.gearboxTop*E.gearbox);he>0&&ae>.42&&(ye*=1-he*(1-Kt(1-(ae-.42)/.3,.2,1)));let dt=Ot?-ve*a.acc*o*.5*Kt(1+M/12,0,1):ye*a.acc*g.acc*(1+.06*d.eng)*(1+.12*this.draft)*o*r*Math.max(C.limp,1-C.enginePower*E.engine)*(1-.2*E.gearbox)*(je?1.5:1)*Math.min(1,16/Math.max(M,1))*Kt(1-(M/ut)**2,0,1);dt*=He.enginePower*(this.shiftT>0?.2:1),Ve&&(dt*=.3),this._thr>.7&&ye<.1&&this.rpm>.55&&(this.backfire=.14),this._thr=ye,this.backfire=Math.max(0,(this.backfire||0)-e);let Je=Ot?0:Math.min(ve*a.brake*o*u,o*Math.abs(M)/e);this.braking=ve>.1&&!Ot;let Et=a.drive==="fwd"?1:a.drive==="awd"?.42:0,Rt=O*N*ue*ot*(1+He.slowTurn*Kt(-this.axS/8,0,1)),Ct=W*N*a.rear*He.rearBias*Ae*te*(1-He.drift.rearCut*this.di);this.wspinF=Et>0&&!this.tc?Math.max(0,(dt*Et-Rt)/Rt):0;let xt=Kt(dt*Et-T*Je*g.bias,-Rt,Rt),st=dt*(1-Et)-T*Je*(1-g.bias),z=Math.max(Math.abs(M),3),Dt=_-c*this.r,pt=Math.atan2(_+l*this.r,z)-this.steer*T,P=-Math.sqrt(Math.max(Rt*Rt-(xt>0?xt*x.driveShare:xt*(this.abs?x.brakeShare:1.12))**2,Rt*Rt*.15))*Math.sin(x.frontC*Math.atan(x.frontB*pt)),v;if(this.wspin=0,this.locked=!1,t.hand&&s&&w>1){let oe=Math.hypot(M,Dt)||1,_e=Ct*.7;st=-_e*M/oe,v=-_e*Dt/oe,this.locked=!0,this.slipR=1}else{this.tc&&!Ve&&st>Ct*.96&&(st=Ct*.96),Math.abs(st)>Ct&&(this.wspin=(Math.abs(st)-Ct)/Ct,st=Math.sign(st)*Ct);let oe=Math.atan2(Dt,z);v=-Math.sqrt(Math.max(Ct*Ct-st*st*a.loose*He.powerSlide*(this.tc?.45:1),Ct*Ct*.12))*Math.sin(x.rearC*Math.atan(x.rearB*oe)),this.slipR=Math.abs(oe)}Ve&&(this.wspin=Math.max(this.wspin,1.2),v*=.3),this.aF=pt,this.useF=Math.hypot(xt,P)/(Rt||1),this.useR=Math.hypot(st,v)/(Ct||1);let I=Math.cos(this.steer),F=Math.sin(this.steer),B=(st+xt*I-P*F-.25*(1-.45*this.draft)*M*Math.abs(M)-o*(.03+L+K*He.surface.grassDrag)*M-(ye===0&&!Ot?o*.45*Math.sign(M)*Math.min(1,Math.abs(M)):0))/o,ee=(P*I+xt*F+v)/o;if(this.vx+=(B*m+ee*y)*e,this.vz+=(B*y-ee*m)*e,he>0&&w>3&&!t.hand){let oe=this.vx*y-this.vz*m,_e=Math.min(1,He.slideAid*he*e)*(1-this.di);this.vx-=y*oe*_e,this.vz+=m*oe*_e}this.r+=(l*(P*I+xt*F)-c*v)/this.I*e,this.r-=this.r*(He.yawDamp+w*He.yawDampSpeed+he*He.assistYawDamp)*e,ye===0&&(ve===0||!s)&&w<.5&&(this.vx*=.9,this.vz*=.9,this.r*=.85),s||(this.vx=this.vz=this.r=0),this.th+=this.r*e,this.x+=this.vx*e,this.z+=this.vz*e,this.axS+=(B-this.axS)*Math.min(1,e*8),this.ayS+=(ee-this.ayS)*Math.min(1,e*8),s&&(this.fuel=Math.max(0,this.fuel-e*this.fuelK*(He.fuel.idle+ye*(.35+.65*this.rpm))/He.fuel.fullThrottleSeconds)),s&&(this.tyre=Math.max(0,this.tyre-e*this.wear*(x.wear.base*Math.min(1,w/25)+Math.min(this.slipR,.8)*.011+this.wspin*.008+(this.locked?.03:0)+K*.002))),!je&&s&&(this.nitro=Math.min(1,this.nitro+e*(.018+(this.drifting?.09:0)))),this.drifting=Math.abs(this.beta)>.22&&w>9&&M>0&&K<.6;let se=a.idle,q=a.red,J=Math.abs(M)*(1+Math.min(this.wspin,1.5)*.5+this.wspinF*.3),ie=[0,.24,.42,.6,.8,1.03].map(oe=>oe*a.top*g.top),me=this.gearI;!(this.shiftT>0)&&s&&(me<5&&J>ie[me]*.97?(me++,this.shiftT=.15,this.shiftEvt=1):me>1&&J<ie[me-1]*.72&&(me--,this.shiftT=.12,this.shiftEvt=-1)),this.gearI=me,this.gear=Ot&&M<-.5?0:me,this.shiftT=Math.max(0,this.shiftT-e);let ce=s?Ve?q*1.05:Ot?se+Math.abs(M)/12*(q*.5-se):Math.max(q*J/ie[me],me===1?se+ye*(q*.42-se):se):se+t.throttle*(q*1.04-se);ce>q&&(ce=q*1.01),this.cutT=Math.max(0,(this.cutT||0)-e),this.cutT>0&&(ce=q*.93);{let oe=(ce>this.rpmR?8e3:1e4)*e;this.rpmR+=Kt(ce-this.rpmR,-oe,oe)}this.rpmR>=q&&this.cutT<=0&&(this.cutT=.08),this.limiter=this.cutT>0,this.rpm=Kt((this.rpmR-se)/(q-se),0,1.02),this.load=s?ye*(this.shiftT>0?.2:1):t.throttle*.45,this.dirt=Kt(this.dirt+e*(K*Math.min(1,w/15)*.07-A*.03),0,1),this.lockF=this.braking&&ve>.9&&w>17&&K<.5;let de=this.collideWalls(n);return n.surf(this.x,this.z)===mi&&(this.x=f,this.z=p,this.vx*=.15,this.vz*=.15,this.r*=.3,de=Math.max(de,w*.5),this.hitX=f,this.hitZ=p,this.hitL=[0,this.zf],this.hitN=[-m,-y]),de}collideWalls(e){let t=Math.sin(this.th),n=Math.cos(this.th),s=this.spec.mass,r=this.hw,a=He.wall,o=[[r,this.zf],[-r,this.zf],[r,-this.zr],[-r,-this.zr],[r,0],[-r,0]],l=0,c=!1,h=null;for(let[u,d]of o){let f=t*d+n*u,p=n*d-t*u,x=this.x+f,g=this.z+p;if(e.surf(x,g)!==mi)continue;let m=0,y=0;for(let N=0;N<16;N++){let V=Math.cos(N*.3927),O=Math.sin(N*.3927);for(let W of[.8,1.6,2.6])e.surf(x+V*W,g+O*W)!==mi&&(m+=V,y+=O)}let M=Math.hypot(m,y);if(M<.01){let N=e.escape(x,g);if(!N)continue;m=N.nx,y=N.nz,M=1}m/=M,y/=M;let _=0;for(;_<4&&e.surf(x+m*_,g+y*_)===mi;)_+=.06;this.x+=m*_,this.z+=y*_,c=!0;let w=(this.vx+this.r*p)*m+(this.vz-this.r*f)*y;if(w>=0)continue;let T=p*m-f*y,A=-(1+a.bounce)*w/(1/s+T*T/this.I);this.vx+=A*m/s,this.vz+=A*y/s,this.r+=A*T/this.I*a.spin;let S=-y,E=m,C=this.vx*S+this.vz*E,L=Math.sign(C)*Math.min(Math.abs(C),a.friction*A/s);this.vx-=S*L,this.vz-=E*L,-w>l&&(l=-w,this.hitX=x,this.hitZ=g,this.hitL=[u,d],this.hitN=[m,y]),h=[m,y]}if(h&&this.speed>3){let u=-h[1],d=h[0];this.vx*u+this.vz*d<0&&(u=-u,d=-d);let f=Co(Math.atan2(u,d)-this.th);Math.abs(f)<1.15&&(this.th+=f*.07,this.x+=h[0]*.01,this.z+=h[1]*.01)}return c&&(this.r=Kt(this.r*a.yawKeep,-1.8,1.8),this.touchT=.35),l}bump(e,t){let n=0;for(let s of[1.15,-1.15])for(let r of[1.15,-1.15]){let a=this.x+Math.sin(this.th)*s,o=this.z+Math.cos(this.th)*s,l=e.x+Math.sin(e.th)*r,c=e.z+Math.cos(e.th)*r,h=a-l,u=o-c,d=Math.hypot(h,u),f=2.05;if(d>=f||d<1e-4)continue;let p=h/d,x=u/d,g=f-d,m=this.spec.mass,y=e.spec.mass,M=1/m,_=1/y;this.x+=p*g*_/(M+_)*(t?0:1)+(t?p*g:0),this.z+=x*g*_/(M+_)*(t?0:1)+(t?x*g:0),t||(e.x-=p*g*M/(M+_),e.z-=x*g*M/(M+_));let w=(this.vx-e.vx)*p+(this.vz-e.vz)*x;if(w>=0)continue;let T=-1.08*w/(M+_);this.vx+=T*p*M,this.vz+=T*x*M,this.r+=(Math.cos(this.th)*s*p-Math.sin(this.th)*s*x)*T*1.1/this.I,t||(e.vx-=T*p*_,e.vz-=T*x*_,e.r-=(Math.cos(e.th)*r*p-Math.sin(e.th)*r*x)*T*1.1/e.I),-w>n&&(n=-w,this.hitX=(a+l)/2,this.hitZ=(o+c)/2,this.hitL=this.toLocal(this.hitX,this.hitZ),this.hitN=[p,x],e.hitX=this.hitX,e.hitZ=this.hitZ,e.hitL=e.toLocal(this.hitX,this.hitZ),e.hitN=[-p,-x])}return n}dress(e){let t=this.look=Object.assign({wing:0,split:0,rim:0,tint:0,glow:0,skirt:0,scoop:0,pipe:0},e||{}),n=this.chassis,s="wing";this.addons&&n.remove(this.addons);let r=this.addons=new yt;n.add(r);let a=1e9,o=-1e9,l=0,c=[];for(let m of this.bodyMeshes){let y=m.userData.orig;for(let M=0;M<y.length;M+=3)c.push(y[M],y[M+1],y[M+2]),y[M+2]<a&&(a=y[M+2]),y[M+2]>o&&(o=y[M+2]),y[M]>l&&(l=y[M])}let h=(m,y,M)=>{let _=0;for(let w=0;w<c.length;w+=3)c[w+2]>=m&&c[w+2]<=y&&Math.abs(c[w])<M&&c[w+1]>_&&(_=c[w+1]);return _},u=(m,y)=>{let M=9;for(let _=0;_<c.length;_+=3)c[_+2]>=m&&c[_+2]<=y&&c[_+1]<M&&(M=c[_+1]);return M},d=new Me({color:921361,roughness:.45,metalness:.5}),f=l*2,p=(m,y,M,_,w,T,A)=>{let S=new xe(new Qe(m,y,M),_);return S.position.set(w,T,A),S.castShadow=!0,S.userData.part=s,r.add(S),S};if(t.wing){let m=h(a+.08,a+.5,l*.75),y=a+.26;if(t.wing===1)p(f*.8,.06,.2,this.m.paint,0,m+.02,a+.14).rotation.x=.25;else{let M=t.wing===2?.27:.4,_=t.wing===2?.3:.42,w=f*(t.wing===2?.86:.97);p(w,.035,_,t.wing===2?this.m.paint:d,0,m+M,y).rotation.x=.13;for(let T of[-.27,.27])p(.04,M,.11,d,T*f,m+M/2,y+.03);for(let T of[-.5,.5])p(.025,t.wing===2?.15:.24,_+.06,d,T*w,m+M+.02,y)}}if(s="split",t.split){let m=u(o-.3,o);p(f*.88,.03,.34,d,0,m+.015,o-.1);for(let y of[-.46,.46])p(.03,.09,.2,d,y*f*.88,m+.05,o-.14)}if(s="skirt",t.skirt){let m=u(a+.8,o-.8);for(let y of[-1,1])p(.07,.1,(o-a)*.46,d,y*(l-.02),m+.07,(a+o)/2)}if(s="scoop",t.scoop){let m=h(-.5,.3,l*.45);p(.36,.09,.52,d,0,m+.035,-.12),p(.3,.05,.06,this.m.paint,0,m+.06,.15)}if(s="pipe",t.pipe){let m=new Me({color:14211806,metalness:1,roughness:.2}),y=u(a,a+.3);for(let M of[-.24,-.16,.16,.24])p(.075,.075,.2,m,M*f,y+.13,a-.03)}if(s="glow",t.glow){if(!wn.glowTex){let T=document.createElement("canvas");T.width=T.height=128;let A=T.getContext("2d"),S=A.createRadialGradient(64,64,6,64,64,64);S.addColorStop(0,"rgba(255,255,255,.55)"),S.addColorStop(.42,"rgba(255,255,255,.95)"),S.addColorStop(.7,"rgba(255,255,255,.3)"),S.addColorStop(1,"rgba(255,255,255,0)"),A.fillStyle=S,A.fillRect(0,0,128,128),wn.glowTex=new Dn(T)}let m=new be(Yc[t.glow]),y=u(a,o),M=o-a,_=new xe(new Qt(f*2.5,M*1.45),new rt({map:wn.glowTex,color:m,transparent:!0,opacity:.75,blending:Mn,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-7,polygonOffsetUnits:-7,fog:!1}));_.rotation.x=-Math.PI/2,_.position.set(0,.03-this.rideY/He.toy.h,(a+o)/2),_.userData.part="glow",r.add(_),this.glowPool=_;let w=new rt({color:m.clone().multiplyScalar(2.2)});for(let T of[-1,1]){let A=new xe(new Qe(.035,.035,M*.6),w);A.position.set(T*(l-.08),y+.03,(a+o)/2),A.userData.part="glow",r.add(A)}for(let T of[a+.25,o-.3]){let A=new xe(new Qe(f*.7,.035,.035),w);A.position.set(0,y+.03,T),A.userData.part="glow",r.add(A)}}else this.glowPool=null;let x=t.rim?new Me({color:Kc[t.rim],metalness:.9,roughness:.26}):null;for(let m in this.wheels)this.wheels[m].mesh.traverse(y=>{y.isMesh&&y.userData.kind&&y.userData.kind.startsWith("rim")&&(y.material=x||(y.userData.kind==="rim6"?this.m.rimDark:this.m.rim))});let g=t.tint?new vn({color:Cd[t.tint],roughness:.08,metalness:.9,clearcoat:1}):this.m.window;for(let m of this.bodyMeshes)m.userData.kind==="window"&&(m.material=g)}makeLamps(){if(!wn.fan){let n=document.createElement("canvas");n.width=n.height=256;let s=n.getContext("2d"),r=s.createImageData(256,256),a=r.data,o=13,l=26;for(let f=0;f<256;f++)for(let p=0;p<256;p++){let x=(p-128)/128*o/2,g=(f-4)/252*l,m=Math.hypot(x,g)/l,y=Math.atan2(x,Math.max(g,.001)),M=g<=0?0:Math.exp(-((y/.3)**2))/(1+(m*2.9)**2)*(1-Math.min(1,Math.max(0,(m-.62)/.38))**2)*Math.min(1,m/.03);M+=g<=0?0:.55*Math.exp(-((y/.12)**2))*Math.exp(-(((m-.2)/.16)**2));let _=(f*256+p)*4,w=Math.min(1,M);a[_]=255*w,a[_+1]=238*w,a[_+2]=200*w,a[_+3]=255}s.putImageData(r,0,0);let c=new Dn(n);c.colorSpace=Lt,wn.fanM=new rt({map:c,color:new be(1.7,1.7,1.7),transparent:!0,depthWrite:!1,fog:!1,blending:Vl,blendEquation:ds,blendSrc:ql,blendDst:Wl,polygonOffset:!0,polygonOffsetFactor:-8,polygonOffsetUnits:-8}),wn.fan=new Qt(o,l).translate(0,-l/2,0);let h=document.createElement("canvas");h.width=h.height=64;let u=h.getContext("2d"),d=u.createRadialGradient(32,32,1,32,32,32);d.addColorStop(0,"rgba(255,248,225,1)"),d.addColorStop(.25,"rgba(255,240,200,.55)"),d.addColorStop(1,"rgba(255,240,200,0)"),u.fillStyle=d,u.fillRect(0,0,64,64),wn.glareM=new rt({map:new Dn(h),transparent:!0,depthWrite:!1,blending:Mn,fog:!1}),wn.glare=new Qt(.7,.7)}let e=t=>{let n=new yt;n.position.set(t*this.hw0*.64,.56,this.zf0-.04);let s=new xe(wn.fan,wn.fanM);s.rotation.x=-Math.PI/2,s.position.set(0,-.5,.3),s.renderOrder=3;let r=new xe(wn.glare,wn.glareM);return r.rotation.x=-Math.PI/2,r.position.y=.12,n.add(s,r),n.visible=!1,this.root.add(n),{g:n,ok:!0}};this.lamps=[e(1),e(-1)],this.lightsOn=!1}setLights(e){this.lightsOn=e;for(let t of this.lamps)t.g.visible=e&&t.ok}toLocal(e,t){let n=e-this.x,s=t-this.z,r=Math.sin(this.th),a=Math.cos(this.th);return[n*a-s*r,n*r+s*a]}damage(e,t=!0){let n=Math.max(0,e-3.5)/34*this.dmgScale;if(n<=0||!this.hitL)return 0;t&&e>He.shock.minHit&&(this.shock=Math.min(He.shock.max,e*He.shock.perMs));let[s,r]=this.hitL,a=this.dmg,o=r>this.zf*.55?"front":r<-this.zr*.55?"rear":s>0?"left":"right";a[o]=Math.min(1,a[o]+n);{let x=this.parts,g=n*this.partK,m=Math.abs(s)>this.hw*.45,y=(M,_)=>{x.wheels[M]=Math.min(.92,x.wheels[M]+_),x.wheels[M]>=1&&!this.gone[M]&&(this.gone[M]=!0,this.wheels[Ci[M]].mesh.traverse(w=>{w.isMesh&&this.lost.push(w)}))};o==="front"?(x.engine=Math.min(1,x.engine+g*.9),m&&y(s>0?0:1,g*1.3)):o==="rear"?(x.gearbox=Math.min(1,x.gearbox+g*.9),m&&y(s>0?2:3,g*1.3)):y(s>0?r>0?0:2:r>0?1:3,g*1.9)}if(o==="front"&&n>.035)for(let x of n>.22?[0,1]:[s>0?0:1])this.lamps[x].ok&&(this.lamps[x].ok=!1,this.lamps[x].g.visible=!1,this.glass=!0);if(n>.07&&this.addons){let x=o==="rear"?["wing","pipe"]:o==="front"?["split"]:["skirt"];for(let g of this.addons.children)x.includes(g.userData.part)&&!g.userData.gone&&(g.userData.gone=!0,this.lost.push(g))}let l=Math.sin(this.th),c=Math.cos(this.th),h=this.hitN,u=h[0]*c-h[1]*l,d=h[0]*l+h[1]*c,f=1.25,p=Math.min(.3,n*2.4);for(let x of this.bodyMeshes){let g=x.geometry.attributes.position,m=g.array,y=x.userData.orig,M=!1;for(let _=0;_<m.length;_+=3){let w=Math.hypot(y[_]-s,(y[_+1]-.55)*.6,y[_+2]-r);if(w>f)continue;let T=(1-w/f)**2*p,A=Math.sin(y[_]*37.1+y[_+1]*91.7+y[_+2]*53.3)*.35;m[_]+=u*T*(1+A),m[_+1]-=T*.25*(1+A),m[_+2]+=d*T*(1+A);let S=m[_]-y[_],E=m[_+1]-y[_+1],C=m[_+2]-y[_+2],L=Math.hypot(S,E,C);if(L>.36){let N=.36/L;m[_]=y[_]+S*N,m[_+1]=y[_+1]+E*N,m[_+2]=y[_+2]+C*N}M=!0}M&&(g.needsUpdate=!0,x.geometry.computeVertexNormals())}return n}get health(){let e=this.dmg,t=this.parts;return Math.max(.05,1-(e.front+e.rear+e.left+e.right)/4*.55-t.engine*.2-t.gearbox*.1-(t.wheels[0]+t.wheels[1]+t.wheels[2]+t.wheels[3])/4*.25)}get stranded(){return this.fuelK>0&&this.fuel<=0&&this.speed<1}repair(){this.dmg={front:0,rear:0,left:0,right:0},this.tyre=1,this.dirt=0,this.parts={engine:0,gearbox:0,wheels:[0,0,0,0]},this.gone=[!1,!1,!1,!1];for(let e in this.wheels)this.wheels[e].mesh.traverse(t=>{t.visible=!0});this.dress(this.look);for(let e of this.lamps)e.ok=!0;this.setLights(this.lightsOn);for(let e of this.bodyMeshes)e.geometry.attributes.position.array.set(e.userData.orig),e.geometry.attributes.position.needsUpdate=!0,e.geometry.computeVertexNormals()}render(e,t,n=1){let s=this.rx=this.px+(this.x-this.px)*n,r=this.rz=this.pz+(this.z-this.pz)*n,a=this.pth+Co(this.th-this.pth)*n;{let p=He.visualLead,x=Math.hypot(this.vx,this.vz),g=Kt(this.steer*p.steer+this.r*p.yaw,-p.max,p.max)*Math.min(1,x/p.fullSpeed)*(this.vf>1&&!(this.touchT>0)?1:0);this.touchT=Math.max(0,(this.touchT||0)-e),this.lead+=(g-this.lead)*Math.min(1,e*p.rate)}let o=Math.sin(a),l=Math.cos(a),c=[];for(let p=0;p<4;p++){let x=this.wheels[Ci[p]];c.push(t.height(s+o*x.z+l*x.x,r+l*x.z-o*x.x))}let h=Math.min(1,e*14);this.y+=((c[0]+c[1]+c[2]+c[3])/4-this.y)*Math.min(1,e*25),this.pitch+=(Math.atan2((c[2]+c[3]-c[0]-c[1])/2,this.a+this.b)-this.pitch)*h,this.roll+=(Math.atan2((c[0]+c[2]-c[1]-c[3])/2,this.tw*2)-this.roll)*h,this.root.position.set(s,this.y,r),this.root.rotation.set(this.pitch,a+this.lead,this.roll),this.rollD+=(Kt(this.ayS*.011,-.085,.085)-this.rollD)*Math.min(1,e*7),this.pitchD+=(Kt(-this.axS*.0055,-.05,.05)-this.pitchD)*Math.min(1,e*7);let u=this.speed>2?this.grass*.011+(this.wsurf.includes(va)?.005:0):0;this.chassis.rotation.set(this.pitchD+(Math.random()-.5)*u*.5+this.dmg.front*.02+((this.gone[0]||this.gone[1]?.06:0)-(this.gone[2]||this.gone[3]?.06:0)),0,(this.gone[1]||this.gone[3]?.07:0)-(this.gone[0]||this.gone[2]?.07:0)+this.rollD+(Math.random()-.5)*u+(this.dmg.left-this.dmg.right)*.035),this.chassis.position.y=this.rideY+(Math.random()-.5)*u+(this.rpm>.2?Math.sin(performance.now()*.05)*.003:0);let d=this.vf,f=d/this.R*e;this.spin[0]+=f,this.spin[1]+=this.locked?0:f*(1+this.wspin*3)+(this.wspin>0?(30+this.wspin*40)*e:0);for(let p=0;p<4;p++){let x=this.wheels[Ci[p]];x.mesh.rotation.x=this.spin[p<2?0:1],x.mesh.rotation.z=this.parts.wheels[p]*.32*Math.sin(this.spin[p<2?0:1]),x.mesh.scale.y=He.toy.wheel*(this.parts.wheels[p]>He.parts.flatAt?.82:1),p<2&&(x.pivot.rotation.y=this.steer),x.pivot.position.y=x.y+(this.wsurf[p]===zs&&this.speed>2?(Math.random()-.5)*.012:0)}this.m.rear.emissiveIntensity=this.braking?2.4:.5,Math.abs(this.dirt-this.dirtShown)>.03&&(this.dirtShown=this.dirt,this.m.paint.color.copy(this.baseColor).lerp(Fy[t.def.theme==="desert"?1:0],this.dirt*.6),this.m.paint.roughness=.32+this.dirt*.5,this.m.paint.clearcoat=1-this.dirt*.8)}effects(e,t,n,s=1){let r=Math.sin(this.th),a=Math.cos(this.th),o=this.speed,l=n.def.theme==="desert"?[.78,.64,.42]:[.36,.28,.17],c=this.slipR>.16&&o>6||this.wspin>.12||this.locked&&o>3;this.emitAcc+=e*60*s;let h=Math.floor(this.emitAcc);this.emitAcc-=h;for(let d=2;d<4;d++){let f=this.wheels[Ci[d]],p=this.x+r*f.z+a*f.x,x=this.z+a*f.z-r*f.x,g=this.wsurf[d],m=n.height(p,x);if(c&&(g===ms||g===va)){let M=Kt(this.slipR*1.6+this.wspin+(this.locked?.6:0),.3,1);for(let A=0;A<h;A++)Math.random()<M&&t.smoke.emit(p+(Math.random()-.5)*.3,m+.15,x+(Math.random()-.5)*.3,this.vx*.3+(Math.random()-.5)*1.5,.6+Math.random()*1.1,this.vz*.3+(Math.random()-.5)*1.5,1.5+Math.random()*1.3,.8,3.8,.88,.89,.93,.3*M);let _=[p+a*.15,m+.06,x-r*.15],w=[p-a*.15,m+.06,x+r*.15],T=this.lastSk[d-2];T&&(T[0][0]-_[0])**2+(T[0][2]-_[2])**2<9&&t.skids.quad(T[0],T[1],_,w),this.lastSk[d-2]=[_,w]}else this.lastSk[d-2]=null}if(o>3)for(let d=0;d<4;d++){if(this.wsurf[d]!==zs)continue;let f=this.wheels[Ci[d]],p=this.x+r*f.z+a*f.x,x=this.z+a*f.z-r*f.x,g=n.height(p,x),m=Kt(o/25,.2,1);for(let y=0;y<h;y++)Math.random()<m*.7&&(t.smoke.emit(p,g+.1,x,this.vx*.3+(Math.random()-.5)*2,1+Math.random()*2,this.vz*.3+(Math.random()-.5)*2,.7+Math.random()*.6,.7,3.5,l[0],l[1],l[2],.42),Math.random()<.5&&t.smoke.emit(p,g+.1,x,-this.vx*.1+(Math.random()-.5)*4,2+Math.random()*3,-this.vz*.1+(Math.random()-.5)*4,.5,.16,0,l[0]*.6,l[1]*.6,l[2]*.6,1,12))}if(this.lockF)for(let d=0;d<2;d++){let f=this.wheels[Ci[d]],p=this.x+r*f.z+a*f.x,x=this.z+a*f.z-r*f.x;Math.random()<.35*h&&t.smoke.emit(p,this.y+.15,x,this.vx*.3,.6+Math.random(),this.vz*.3,.6,.6,2.6,.93,.93,.95,.16)}if(this.wspinF>.15)for(let d=0;d<2;d++){let f=this.wheels[Ci[d]],p=this.x+r*f.z+a*f.x,x=this.z+a*f.z-r*f.x;for(let g=0;g<h;g++)Math.random()<.6&&t.smoke.emit(p,this.y+.15,x,(Math.random()-.5)*2,.8+Math.random(),(Math.random()-.5)*2,1,.8,3,.93,.93,.95,.28)}if(this.burn)for(let d=2;d<4;d++){let f=this.wheels[Ci[d]],p=this.x+r*f.z+a*f.x,x=this.z+a*f.z-r*f.x;for(let g=0;g<h*2;g++)t.smoke.emit(p+(Math.random()-.5)*.5,this.y+.2,x+(Math.random()-.5)*.5,-r*2+(Math.random()-.5)*3,1+Math.random()*2,-a*2+(Math.random()-.5)*3,1.6+Math.random(),1.1,4.2,.96,.96,.97,.4)}if(this.gear!==this._g){if(this._g&&o>6){let d=this.x-r*(this.zr+.15),f=this.z-a*(this.zr+.15);for(let p=0;p<4;p++)t.smoke.emit(d,this.y+.4,f,this.vx*.5-r*2,.4+Math.random(),this.vz*.5-a*2,.5,.35,2.2,.35,.35,.37,.3)}this._g=this.gear}if(this.backfire>0&&Math.random()<.5){let d=this.x-r*(this.zr+.15),f=this.z-a*(this.zr+.15);t.glow.emit(d,this.y+.4,f,this.vx-r*5,.5,this.vz-a*5,.1,.45,-2,1,.55,.15,1)}let u=n.wet||0;if(u>.15&&o>8)for(let d=2;d<4;d++){let f=this.wheels[Ci[d]],p=this.x+r*f.z+a*f.x,x=this.z+a*f.z-r*f.x;for(let g=0;g<h;g++)Math.random()<u*.8&&t.smoke.emit(p,this.y+.2,x,this.vx*.45+(Math.random()-.5)*2,1.2+Math.random()*1.5,this.vz*.45+(Math.random()-.5)*2,.6+Math.random()*.4,.7,4,.8,.86,.93,.16*u)}if(this.parts.gearbox>.5&&o>4&&Math.random()<.25&&t.smoke.emit(this.x-r*this.zr*.5,this.y+.12,this.z-a*this.zr*.5,0,0,0,2.5,.22,.1,.05,.04,.03,.7),this.parts.engine>.3){let d=this.parts.engine,f=this.x+r*this.zf*.6,p=this.z+a*this.zf*.6,x=.5-d*.42;for(let g=0;g<h;g++)Math.random()<d*.5&&t.smoke.emit(f+(Math.random()-.5)*.6,this.y+this.top*.75,p+(Math.random()-.5)*.6,this.vx*.5,1.5+Math.random()*1.5,this.vz*.5,1.2+Math.random()*.8,.6,2.4,x,x,x,.4);d>.85&&Math.random()<.5&&t.glow.emit(f,this.y+this.top*.7,p,this.vx,1.5+Math.random()*2,this.vz,.25,.5,-1,1,.5,.1,.8)}if(this.nitroOn)for(let d of[-.35,.35])for(let f=0;f<Math.max(1,h);f++){let p=this.x-r*(this.zr+.1)+a*d,x=this.z-a*(this.zr+.1)-r*d;t.glow.emit(p,this.y+.42,x,this.vx-r*(6+Math.random()*5),Math.random()-.5,this.vz-a*(6+Math.random()*5),.12+Math.random()*.1,.55,-2,.35,.65,1,.9)}}impactFX(e,t,n){let s=t.height(this.hitX,this.hitZ)+.45,r=this.hitN||[0,0],a=-r[1],o=r[0],l=Math.sign(this.vx*a+this.vz*o)||1,c=Math.min(1,n/20);for(let h=0;h<5+c*26;h++){let u=(4+Math.random()*10)*l*(.4+c);e.glow.emit(this.hitX,s+Math.random()*.3,this.hitZ,a*u+r[0]*(1+Math.random()*4)+this.vx*.3,.5+Math.random()*4.5,o*u+r[1]*(1+Math.random()*4)+this.vz*.3,.2+Math.random()*.4,.13,0,1,.72,.28,1,15)}if(n>6){let h=new be(this.color);for(let u=0;u<3+c*10;u++)e.smoke.emit(this.hitX,s,this.hitZ,r[0]*(2+Math.random()*5)+(Math.random()-.5)*5+this.vx*.4,2+Math.random()*5,r[1]*(2+Math.random()*5)+(Math.random()-.5)*5+this.vz*.4,.7+Math.random()*.5,.16+Math.random()*.12,0,u%2?h.r:.08,u%2?h.g:.08,u%2?h.b:.09,1,13);for(let u=0;u<6;u++)e.smoke.emit(this.hitX,s-.2,this.hitZ,(Math.random()-.5)*3,.6+Math.random(),(Math.random()-.5)*3,.8,.8,3,.6,.58,.55,.22)}}netApply(e,t){let n=this.nb||(this.nb={buf:[],off:1/0,iv:1e3/He.net.hz,jit:4,last:0,delay:70}),s=e[8];if(!(n.buf.length&&s<=n.buf[n.buf.length-1].t)){if(n.buf.push({t:s,x:e[0],z:e[1],th:e[2],vx:e[3],vz:e[4],r:e[5]}),n.buf.length>40&&n.buf.shift(),n.off=Math.min(n.off+.05,t-s),n.last){let r=t-n.last;n.iv+=(r-n.iv)*.1,n.jit+=(Math.abs(r-n.iv)-n.jit)*.1}n.last=t,this.steer=e[6],this.braking=!!(e[7]&1),this.nitroOn=!!(e[7]&2),this.locked=!!(e[7]&4),this.slipR=e[7]&8?.4:0,this.wspin=0,this.pitBusy=!!(e[7]&16)}}netStep(e,t,n){let s=this.nb;if(!s||!s.buf.length)return;{let m=Kt(s.iv*He.net.intervalK+s.jit*He.net.jitterK,He.net.minBuffer,He.net.maxBuffer);s.delay+=(m-s.delay)*Math.min(1,e*(m>s.delay?2.5:.5))}let r=n-s.off-s.delay,a=s.buf,o=a.length-1;for(;o>0&&a[o].t>r;)o--;let l=a[o],c=a[o+1],h,u,d,f,p,x;if(c&&r>=l.t){let m=(c.t-l.t)/1e3,y=(r-l.t)/(c.t-l.t),M=y*y,_=M*y,w=2*_-3*M+1,T=_-2*M+y,A=-2*_+3*M,S=_-M;h=w*l.x+T*m*l.vx+A*c.x+S*m*c.vx,u=w*l.z+T*m*l.vz+A*c.z+S*m*c.vz,d=l.th+Co(c.th-l.th)*y,f=l.vx+(c.vx-l.vx)*y,p=l.vz+(c.vz-l.vz)*y,x=l.r+(c.r-l.r)*y}else{let m=Kt((r-l.t)/1e3,0,.25),y=r-l.t>250?Math.exp(-(r-l.t-250)/200):1;h=l.x+l.vx*m,u=l.z+l.vz*m,d=l.th+l.r*m,f=l.vx*y,p=l.vz*y,x=l.r*y}let g=Math.min(1,e*25);this.x+=(h-this.x)*g,this.z+=(u-this.z)*g,this.th+=Co(d-this.th)*g,this.vx=f,this.vz=p,this.r=x;for(let m=0;m<4;m++){let y=this.wheels[Ci[m]];this.wsurf[m]=t.surf(this.x+Math.sin(this.th)*y.z+Math.cos(this.th)*y.x,this.z+Math.cos(this.th)*y.z-Math.sin(this.th)*y.x)}this.grass=this.wsurf.filter(m=>m===zs).length/4,this.px=this.x,this.pz=this.z,this.pth=this.th}netPack(){return[+this.x.toFixed(2),+this.z.toFixed(2),+this.th.toFixed(3),+this.vx.toFixed(2),+this.vz.toFixed(2),+this.r.toFixed(2),+this.steer.toFixed(2),(this.braking?1:0)|(this.nitroOn?2:0)|(this.locked?4:0)|(this.slipR>.16?8:0)|(this.pitBusy?16:0),Math.round(performance.now())]}dispose(){this.m.paint.dispose(),this.m.rear.dispose()}};function ym(i,e,t,n,s){let r=e.n,a=i.speed,o=e.path,l=Math.round((7+a*.42)/e.spacing),c=o[(i.idx+l)%r],h=o[(i.idx+l+Math.round(34/e.spacing))%r],u=Kt(c.k*300,-1,1),d=Kt(h.k*300,-1,1),f=(u-d*.85*(1-Math.abs(u)))*t.wide*1.2+t.lane*(1-Math.abs(u)),p=0,x=Math.sin(i.th),g=Math.cos(i.th);for(let S of n){if(S===i||S.out)continue;let E=S.x-i.x,C=S.z-i.z,L=E*x+C*g,N=E*g-C*x;if(L<-3.5){L>-15&&Math.abs(N)<3.6&&S.vx*x+S.vz*g>i.vf+1&&Math.abs(d)>.3&&(f+=d*1.4*t.care);continue}if(L>55||Math.abs(N)>8)continue;let V=S.vx*x+S.vz*g,O=S.vx*g-S.vz*x,W=i.vf-V,K=W>.5?Math.max(0,L-4.6)/W:99,Q=N+O*Math.min(K,1.2);S.speed<4&&L>0&&Math.abs(N)<3.4?(f+=N>0?-3.6:3.6,K<1.1&&(p=Math.max(p,.6))):L>0&&Math.abs(Q)<2.5&&K<2.4?(f+=(Q>0?-1:1)*3*(1.2-K/2.4),K<.5*t.care&&(p=Math.max(p,1-K))):L>-3.5&&L<5&&Math.abs(N)<3.3&&(f+=(N>0?-1:1)*1.3*t.care)}t.off+=(Kt(f,-t.max,t.max)-t.off)*Math.min(1,s*1.5);let m=c.x+c.tz*t.off,y=c.z-c.tx*t.off,M=Co(Math.atan2(m-i.x,y-i.z)-i.th),_=i.spec.top,w=i.spec.grip*(.72+.28*i.tyre)*t.skill*t.skill*.78*He.gripScale*(1-.26*(e.wet||0)*(i.wetTyres?.3:1))*(1-.3*Math.max(i.parts.wheels[0],i.parts.wheels[1]))*9.81,T=7.5*t.skill;for(let S=0;S<70;S++){let E=o[(i.idx+S)%r],C=Math.sqrt(w/Math.max(Math.abs(E.k),.0015))*1.02,L=Math.sqrt(C*C+2*T*S*e.spacing);L<_&&(_=L)}i.grass>.4&&(_=Math.min(_,16));let A=t.inp;return A.steer=Kt(M*2.4,-1,1),A.throttle=a<_?Math.abs(M)>.5?.5:1:0,A.brake=a>_+1.5?Kt((a-_)/6,.2,1):0,a>8&&Math.abs(i.beta)>.1&&(A.throttle*=Math.abs(i.beta)>.25?.15:.5),A.hand=!1,A.nitro=t.skill>.9&&Math.abs(c.k)<.004&&Math.abs(M)<.08&&i.nitro>.5,Math.abs(M)>1.9&&a<12&&(A.steer=M>0?1:-1,A.throttle=.6,A.brake=0),i.held&&(t.revT=0),t.jam=a<1.2&&A.throttle>0&&!i.held?(t.jam||0)+s:0,t.jam>1.1||t.revT>0?(t.revT>0||(t.revT=1.2),t.revT-=s,t.jam=0,A.throttle=0,A.brake=1,A.steer=-A.steer,A.nitro=!1,A):(p>0&&i.vf>6&&(A.throttle=0,A.brake=Math.max(A.brake,p*.8)),A.brake&&i.vf<2&&(A.brake=0),A)}var Pd={Play:"\u0627\u0644\u0639\u0628",Garage:"\u0627\u0644\u062C\u0631\u0627\u062C",Tuning:"\u0627\u0644\u0636\u0628\u0637",Online:"\u0623\u0648\u0646\u0644\u0627\u064A\u0646",Trophies:"\u0627\u0644\u0643\u0624\u0648\u0633",Settings:"\u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A",credits:"\u0631\u0635\u064A\u062F",Race:"\u0633\u0628\u0627\u0642","Grand Prix":"\u0627\u0644\u062C\u0627\u0626\u0632\u0629 \u0627\u0644\u0643\u0628\u0631\u0649","Time trial":"\u0636\u062F \u0627\u0644\u0632\u0645\u0646",Drift:"\u062A\u0641\u062D\u064A\u0637","Circuit rules":"\u0642\u0648\u0627\u0639\u062F \u0627\u0644\u062D\u0644\u0628\u0629","Arcade rules":"\u0642\u0648\u0627\u0639\u062F \u0627\u0644\u0623\u0631\u0643\u064A\u062F","Daily challenge":"\u062A\u062D\u062F\u064A \u0627\u0644\u064A\u0648\u0645",Laps:"\u0627\u0644\u0644\u0641\u0627\u062A",Rivals:"\u0627\u0644\u0645\u0646\u0627\u0641\u0633\u0648\u0646",Easy:"\u0633\u0647\u0644",Medium:"\u0645\u062A\u0648\u0633\u0637",Hard:"\u0635\u0639\u0628",Dry:"\u062C\u0627\u0641",Changeable:"\u0645\u062A\u0642\u0644\u0628",Rain:"\u0645\u0637\u0631","Start race":"\u0627\u0628\u062F\u0623 \u0627\u0644\u0633\u0628\u0627\u0642","Start time trial":"\u0627\u0628\u062F\u0623 \u0636\u062F \u0627\u0644\u0632\u0645\u0646","Start drift attack":"\u0627\u0628\u062F\u0623 \u0627\u0644\u062A\u0641\u062D\u064A\u0637","Start Grand Prix":"\u0627\u0628\u062F\u0623 \u0627\u0644\u062C\u0627\u0626\u0632\u0629 \u0627\u0644\u0643\u0628\u0631\u0649",Continue:"\u0623\u0643\u0645\u0644",Round:"\u0627\u0644\u062C\u0648\u0644\u0629","Car locked":"\u0627\u0644\u0633\u064A\u0627\u0631\u0629 \u0645\u0642\u0641\u0644\u0629","Unlock for":"\u0627\u0641\u062A\u062D \u0628\u0640","Join a room first":"\u0627\u062F\u062E\u0644 \u063A\u0631\u0641\u0629 \u0623\u0648\u0644\u0627\u064B","Waiting for rival":"\u0641\u064A \u0627\u0646\u062A\u0638\u0627\u0631 \u0627\u0644\u0645\u0646\u0627\u0641\u0633","Start duel":"\u0627\u0628\u062F\u0623 \u0627\u0644\u0645\u0628\u0627\u0631\u0632\u0629","Host starts the race":"\u0627\u0644\u0645\u0636\u064A\u0641 \u064A\u0628\u062F\u0623 \u0627\u0644\u0633\u0628\u0627\u0642",Paint:"\u0627\u0644\u0637\u0644\u0627\u0621",Upgrades:"\u0627\u0644\u062A\u0631\u0642\u064A\u0627\u062A","Rear wing":"\u0627\u0644\u062C\u0646\u0627\u062D \u0627\u0644\u062E\u0644\u0641\u064A",None:"\u0628\u062F\u0648\u0646",Lip:"\u062D\u0627\u0641\u0629","GT wing":"\u062C\u0646\u0627\u062D GT","Race wing":"\u062C\u0646\u0627\u062D \u0633\u0628\u0627\u0642","Front splitter":"\u0627\u0644\u0645\u0634\u062A\u062A \u0627\u0644\u0623\u0645\u0627\u0645\u064A",Off:"\u0625\u064A\u0642\u0627\u0641",On:"\u062A\u0634\u063A\u064A\u0644",Wheels:"\u0627\u0644\u062C\u0646\u0648\u0637",Glass:"\u0627\u0644\u0632\u062C\u0627\u062C",Underglow:"\u0625\u0636\u0627\u0621\u0629 \u0633\u0641\u0644\u064A\u0629",Engine:"\u0627\u0644\u0645\u062D\u0631\u0643",Tyres:"\u0627\u0644\u0625\u0637\u0627\u0631\u0627\u062A",Nitro:"\u0646\u064A\u062A\u0631\u0648",Armour:"\u0627\u0644\u062F\u0631\u0639","Car set-up":"\u0636\u0628\u0637 \u0627\u0644\u0633\u064A\u0627\u0631\u0629",Gearing:"\u0646\u0633\u0628 \u0627\u0644\u062A\u0631\u0648\u0633","Top speed":"\u0627\u0644\u0633\u0631\u0639\u0629 \u0627\u0644\u0642\u0635\u0648\u0649",Acceleration:"\u0627\u0644\u062A\u0633\u0627\u0631\u0639",Downforce:"\u0627\u0644\u0642\u0648\u0629 \u0627\u0644\u0633\u0641\u0644\u064A\u0629","Less drag":"\u0645\u0642\u0627\u0648\u0645\u0629 \u0623\u0642\u0644","More grip":"\u062A\u0645\u0627\u0633\u0643 \u0623\u0643\u062B\u0631","Brake bias":"\u062A\u0648\u0632\u064A\u0639 \u0627\u0644\u0641\u0631\u0627\u0645\u0644",Rearward:"\u0644\u0644\u062E\u0644\u0641",Forward:"\u0644\u0644\u0623\u0645\u0627\u0645",Balance:"\u0627\u0644\u062A\u0648\u0627\u0632\u0646",Agile:"\u0631\u0634\u064A\u0642\u0629",Stable:"\u062B\u0627\u0628\u062A\u0629","Tyre compound":"\u0646\u0648\u0639 \u0627\u0644\u0625\u0637\u0627\u0631",Soft:"\u0644\u064A\u0646","Hard ":"\u0642\u0627\u0633\u064D","Soft tyres grip more and wear faster. Hard tyres last longer. Settings apply to this car only.":"\u0627\u0644\u0625\u0637\u0627\u0631\u0627\u062A \u0627\u0644\u0644\u064A\u0646\u0629 \u062A\u062A\u0645\u0627\u0633\u0643 \u0623\u0643\u062B\u0631 \u0648\u062A\u062A\u0622\u0643\u0644 \u0623\u0633\u0631\u0639\u060C \u0648\u0627\u0644\u0642\u0627\u0633\u064A\u0629 \u062A\u062F\u0648\u0645 \u0623\u0637\u0648\u0644. \u0627\u0644\u0636\u0628\u0637 \u064A\u062E\u0635 \u0647\u0630\u0647 \u0627\u0644\u0633\u064A\u0627\u0631\u0629 \u0641\u0642\u0637.",Language:"\u0627\u0644\u0644\u063A\u0629","Driver name":"\u0627\u0633\u0645 \u0627\u0644\u0633\u0627\u0626\u0642","Camera distance":"\u0628\u064F\u0639\u062F \u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627",Close:"\u0642\u0631\u064A\u0628",Normal:"\u0639\u0627\u062F\u064A",Far:"\u0628\u0639\u064A\u062F","Very far":"\u0628\u0639\u064A\u062F \u062C\u062F\u0627\u064B","Speed units":"\u0648\u062D\u062F\u0629 \u0627\u0644\u0633\u0631\u0639\u0629",Music:"\u0627\u0644\u0645\u0648\u0633\u064A\u0642\u0649","Sound effects":"\u0627\u0644\u0645\u0624\u062B\u0631\u0627\u062A","Reset progress":"\u0645\u0633\u062D \u0627\u0644\u062A\u0642\u062F\u0645","Erase all progress, cars and settings?":"\u0645\u0633\u062D \u0643\u0644 \u0627\u0644\u062A\u0642\u062F\u0645 \u0648\u0627\u0644\u0633\u064A\u0627\u0631\u0627\u062A \u0648\u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A\u061F","Create room":"\u0623\u0646\u0634\u0626 \u063A\u0631\u0641\u0629",or:"\u0623\u0648",Join:"\u0627\u0646\u0636\u0645",Room:"\u0627\u0644\u063A\u0631\u0641\u0629","copy invite link":"\u0627\u0646\u0633\u062E \u0631\u0627\u0628\u0637 \u0627\u0644\u062F\u0639\u0648\u0629",leave:"\u062E\u0631\u0648\u062C",Speed:"\u0627\u0644\u0633\u0631\u0639\u0629",Launch:"\u0627\u0644\u0627\u0646\u0637\u0644\u0627\u0642",Grip:"\u0627\u0644\u062A\u0645\u0627\u0633\u0643",Pos:"\u0627\u0644\u0645\u0631\u0643\u0632",Lap:"\u0644\u0641\u0629",Best:"\u0627\u0644\u0623\u0641\u0636\u0644",Car:"\u0627\u0644\u0633\u064A\u0627\u0631\u0629",Fuel:"\u0627\u0644\u0648\u0642\u0648\u062F",Wets:"\u0645\u0637\u0631",Paused:"\u0625\u064A\u0642\u0627\u0641 \u0645\u0624\u0642\u062A",Resume:"\u0627\u0633\u062A\u0645\u0631",Restart:"\u0623\u0639\u062F","Back to menu":"\u0627\u0644\u0642\u0627\u0626\u0645\u0629",Menu:"\u0627\u0644\u0642\u0627\u0626\u0645\u0629","Race again":"\u0633\u0628\u0627\u0642 \u0622\u062E\u0631","Next round":"\u0627\u0644\u062C\u0648\u0644\u0629 \u0627\u0644\u062A\u0627\u0644\u064A\u0629",Finish:"\u0625\u0646\u0647\u0627\u0621",Winner:"\u0627\u0644\u0641\u0627\u0626\u0632",Standings:"\u0627\u0644\u062A\u0631\u062A\u064A\u0628","Grand Prix champion":"\u0628\u0637\u0644 \u0627\u0644\u062C\u0627\u0626\u0632\u0629 \u0627\u0644\u0643\u0628\u0631\u0649","Grand Prix finished":"\u0627\u0646\u062A\u0647\u062A \u0627\u0644\u062C\u0627\u0626\u0632\u0629 \u0627\u0644\u0643\u0628\u0631\u0649","Four rounds, eight drivers, points for every finish. The third round is wet.":"\u0623\u0631\u0628\u0639 \u062C\u0648\u0644\u0627\u062A \u0648\u062B\u0645\u0627\u0646\u064A\u0629 \u0633\u0627\u0626\u0642\u064A\u0646 \u0648\u0646\u0642\u0627\u0637 \u0644\u0643\u0644 \u0645\u0631\u0643\u0632. \u0627\u0644\u062C\u0648\u0644\u0629 \u0627\u0644\u062B\u0627\u0644\u062B\u0629 \u062A\u062D\u062A \u0627\u0644\u0645\u0637\u0631.",Knockout:"\u0627\u0644\u0625\u0642\u0635\u0627\u0621",Endurance:"\u0627\u0644\u062A\u062D\u0645\u0644","Start knockout":"\u0627\u0628\u062F\u0623 \u0627\u0644\u0625\u0642\u0635\u0627\u0621","Start endurance":"\u0627\u0628\u062F\u0623 \u0627\u0644\u062A\u062D\u0645\u0644","is out":"\u062E\u0631\u062C","Knocked out":"\u062A\u0645 \u0625\u0642\u0635\u0627\u0624\u0643","Side skirts":"\u062C\u0648\u0627\u0646\u0628","Roof scoop":"\u0641\u062A\u062D\u0629 \u0627\u0644\u0633\u0642\u0641","Exhaust tips":"\u0639\u0648\u0627\u062F\u0645","Traction control":"\u0645\u0646\u0639 \u0627\u0644\u0627\u0646\u0632\u0644\u0627\u0642",Steering:"\u0627\u0644\u062A\u0648\u062C\u064A\u0647",Calm:"\u0647\u0627\u062F\u0626",Sharp:"\u062D\u0627\u062F",Burnout:"\u062D\u0631\u0642 \u0625\u0637\u0627\u0631\u0627\u062A",Wheelspin:"\u062F\u0648\u0631\u0627\u0646 \u0627\u0644\u0639\u062C\u0644\u0627\u062A",Oversteer:"\u0627\u0646\u0632\u0644\u0627\u0642 \u062E\u0644\u0641\u064A",Understeer:"\u0627\u0646\u0632\u0644\u0627\u0642 \u0623\u0645\u0627\u0645\u064A",Slipstream:"\u0633\u062D\u0628 \u0647\u0648\u0627\u0626\u064A",Professional:"\u0627\u062D\u062A\u0631\u0627\u0641\u064A",Arcade:"\u0623\u0631\u0643\u064A\u062F","Daily box":"\u0635\u0646\u062F\u0648\u0642 \u0627\u0644\u064A\u0648\u0645","A car, an upgrade, XP or credits":"\u0633\u064A\u0627\u0631\u0629 \u0623\u0648 \u062A\u0631\u0642\u064A\u0629 \u0623\u0648 \u062E\u0628\u0631\u0629 \u0623\u0648 \u0631\u0635\u064A\u062F","Open now":"\u0627\u0641\u062A\u062D\u0647 \u0627\u0644\u0622\u0646","Come back tomorrow":"\u0639\u062F \u063A\u062F\u0627\u064B",Collect:"\u0627\u0633\u062A\u0644\u0645","New car":"\u0633\u064A\u0627\u0631\u0629 \u062C\u062F\u064A\u062F\u0629","Free upgrade":"\u062A\u0631\u0642\u064A\u0629 \u0645\u062C\u0627\u0646\u064A\u0629","Driver XP":"\u062E\u0628\u0631\u0629 \u0627\u0644\u0633\u0627\u0626\u0642",Credits:"\u0631\u0635\u064A\u062F","Your pit box":"\u0645\u0648\u0642\u0641\u0643","laps of fuel":"\u0644\u0641\u0627\u062A \u0648\u0642\u0648\u062F","is towed in":"\u0633\u064F\u062D\u0628\u062A \u0625\u0644\u0649 \u0627\u0644\u0635\u064A\u0627\u0646\u0629",Engine:"\u0627\u0644\u0645\u062D\u0631\u0643",Gearbox:"\u0646\u0627\u0642\u0644 \u0627\u0644\u062D\u0631\u0643\u0629",Bodywork:"\u0627\u0644\u0647\u064A\u0643\u0644",Engine:"\u0627\u0644\u0645\u062D\u0631\u0643",Go:"\u0627\u0646\u0637\u0644\u0642","Final lap":"\u0627\u0644\u0644\u0641\u0629 \u0627\u0644\u0623\u062E\u064A\u0631\u0629","Wrong way":"\u0627\u062A\u062C\u0627\u0647 \u062E\u0627\u0637\u0626",Repaired:"\u062A\u0645 \u0627\u0644\u0625\u0635\u0644\u0627\u062D","Combo lost":"\u0636\u0627\u0639\u062A \u0627\u0644\u0633\u0644\u0633\u0644\u0629","Lights out. Clean first corner.":"\u0627\u0646\u0637\u0641\u0623\u062A \u0627\u0644\u0623\u0636\u0648\u0627\u0621. \u062E\u064F\u0630 \u0627\u0644\u0645\u0646\u0639\u0637\u0641 \u0627\u0644\u0623\u0648\u0644 \u0628\u0647\u062F\u0648\u0621.","Last lap. Everything you have.":"\u0627\u0644\u0644\u0641\u0629 \u0627\u0644\u0623\u062E\u064A\u0631\u0629. \u0623\u0639\u0637\u0650 \u0643\u0644 \u0645\u0627 \u0639\u0646\u062F\u0643.","Tyres are nearly gone. Box at the blue pit.":"\u0627\u0644\u0625\u0637\u0627\u0631\u0627\u062A \u0627\u0646\u062A\u0647\u062A \u062A\u0642\u0631\u064A\u0628\u0627\u064B. \u0627\u062F\u062E\u0644 \u0627\u0644\u0635\u064A\u0627\u0646\u0629.","Fuel is low. Box this lap or you will not make it.":"\u0627\u0644\u0648\u0642\u0648\u062F \u0642\u0644\u064A\u0644. \u0627\u062F\u062E\u0644 \u0627\u0644\u0635\u064A\u0627\u0646\u0629 \u0647\u0630\u0647 \u0627\u0644\u0644\u0641\u0629.","We are out of fuel. Coast it to the pit lane.":"\u0627\u0646\u062A\u0647\u0649 \u0627\u0644\u0648\u0642\u0648\u062F. \u062A\u062F\u062D\u0631\u062C \u0625\u0644\u0649 \u0645\u0645\u0631 \u0627\u0644\u0635\u064A\u0627\u0646\u0629.","Rain. Brake earlier \u2014 box for wet tyres if it gets heavy.":"\u0645\u0637\u0631. \u0627\u0641\u0631\u0645\u0644 \u0645\u0628\u0643\u0631\u0627\u064B \u0648\u0627\u062F\u062E\u0644 \u0644\u0625\u0637\u0627\u0631\u0627\u062A \u0627\u0644\u0645\u0637\u0631 \u0625\u0646 \u0627\u0634\u062A\u062F.","Limiter on. Nothing to do \u2014 drive through.":"\u0645\u062D\u062F\u062F \u0627\u0644\u0633\u0631\u0639\u0629 \u064A\u0639\u0645\u0644. \u0644\u0627 \u0634\u064A\u0621 \u0645\u0637\u0644\u0648\u0628\u060C \u0623\u0643\u0645\u0644.","Invite link copied":"\u062A\u0645 \u0646\u0633\u062E \u0631\u0627\u0628\u0637 \u0627\u0644\u062F\u0639\u0648\u0629","The home circuit. A full pit lane, a fast first sector, a chicane and two hairpins.":"\u062D\u0644\u0628\u0629 \u0627\u0644\u062F\u0627\u0631. \u0645\u0645\u0631 \u0635\u064A\u0627\u0646\u0629 \u0643\u0627\u0645\u0644 \u0648\u0642\u0637\u0627\u0639 \u0623\u0648\u0644 \u0633\u0631\u064A\u0639 \u0648\u0634\u064A\u0643\u0627\u0646 \u0648\u0645\u0646\u0639\u0637\u0641\u0627\u0646 \u062D\u0627\u062F\u0627\u0646.","Your scanned kart circuit. Tight, technical, tyre walls everywhere.":"\u062D\u0644\u0628\u0629 \u0627\u0644\u0643\u0627\u0631\u062A\u064A\u0646\u062C \u0627\u0644\u0645\u0645\u0633\u0648\u062D\u0629. \u0636\u064A\u0642\u0629 \u0648\u062A\u0642\u0646\u064A\u0629 \u0648\u062D\u0648\u0627\u062C\u0632 \u0627\u0644\u0625\u0637\u0627\u0631\u0627\u062A \u0641\u064A \u0643\u0644 \u0645\u0643\u0627\u0646.","Fast sweepers under the pyramids. Sand runoff eats your speed.":"\u0645\u0646\u0639\u0637\u0641\u0627\u062A \u0633\u0631\u064A\u0639\u0629 \u062A\u062D\u062A \u0627\u0644\u0623\u0647\u0631\u0627\u0645\u0627\u062A\u060C \u0648\u0627\u0644\u0631\u0645\u0644 \u064A\u0633\u0631\u0642 \u0633\u0631\u0639\u062A\u0643.","A long seafront blast into a knot of hairpins at sunset.":"\u062E\u0637 \u0645\u0633\u062A\u0642\u064A\u0645 \u0637\u0648\u064A\u0644 \u0639\u0644\u0649 \u0627\u0644\u0628\u062D\u0631 \u062B\u0645 \u0639\u0642\u062F\u0629 \u0645\u0646\u0639\u0637\u0641\u0627\u062A \u0639\u0646\u062F \u0627\u0644\u063A\u0631\u0648\u0628.","Street circuit after dark. Square corners, neon walls, no mercy.":"\u062D\u0644\u0628\u0629 \u0634\u0648\u0627\u0631\u0639 \u0644\u064A\u0644\u064A\u0629. \u0632\u0648\u0627\u064A\u0627 \u062D\u0627\u062F\u0629 \u0648\u062C\u062F\u0631\u0627\u0646 \u0646\u064A\u0648\u0646 \u0628\u0644\u0627 \u0631\u062D\u0645\u0629."};var Jc=class{constructor(e){this.cv=e,this.on=!1,this.last=0,this.parts=[]}start(){this.on||(this.on=!0,this.cv.hidden=!1,this.build())}stop(){this.on&&(this.on=!1,this.cv.hidden=!0)}build(){let e=this.W=Math.min(1100,Math.max(480,Math.round(innerWidth*.62))),t=this.H=Math.round(e*innerHeight/innerWidth);if(this.cv.width===e&&this.cv.height===t&&this.ground)return;this.cv.width=e,this.cv.height=t,this.ctx=this.cv.getContext("2d");let n=()=>{let d=document.createElement("canvas");return d.width=e,d.height=t,d},s=this.ground=n(),r=s.getContext("2d"),a=r.createLinearGradient(0,0,e,t);a.addColorStop(0,"#4a3523"),a.addColorStop(.5,"#3b2a1b"),a.addColorStop(1,"#2b1e13"),r.fillStyle=a,r.fillRect(0,0,e,t);for(let d=0;d<2600;d++){let f=Math.random();r.fillStyle=`rgba(${f>.5?"120,90,60":"20,12,6"},${.03+Math.random()*.07})`,r.beginPath(),r.ellipse(Math.random()*e,Math.random()*t,2+Math.random()*26,1+Math.random()*12,Math.random()*3,0,7),r.fill()}for(let d=0;d<7;d++){let f=Math.random()*e,p=Math.random()*t,x=30+Math.random()*70,g=14+Math.random()*30,m=Math.random()*3;r.fillStyle="rgba(18,14,12,.55)",r.beginPath(),r.ellipse(f,p,x,g,m,0,7),r.fill(),r.fillStyle="rgba(150,170,190,.08)",r.beginPath(),r.ellipse(f-x*.2,p-g*.2,x*.5,g*.35,m,0,7),r.fill()}r.strokeStyle="rgba(15,9,5,.25)",r.lineWidth=5;for(let d=0;d<9;d++)r.beginPath(),r.ellipse(e*(.3+Math.random()*.5),t*(.3+Math.random()*.4),e*(.15+Math.random()*.25),t*(.15+Math.random()*.25),Math.random(),0,7),r.stroke();this.trail=n(),this.tctx=this.trail.getContext("2d");let o=this.vig=n(),l=o.getContext("2d");a=l.createRadialGradient(e*.58,t*.5,t*.25,e*.58,t*.5,e*.75),a.addColorStop(0,"rgba(0,0,0,0)"),a.addColorStop(1,"rgba(0,0,0,.82)"),l.fillStyle=a,l.fillRect(0,0,e,t);let c=this.puff=document.createElement("canvas");c.width=c.height=64;let h=c.getContext("2d");a=h.createRadialGradient(32,32,2,32,32,32),a.addColorStop(0,"rgba(190,150,105,.55)"),a.addColorStop(1,"rgba(190,150,105,0)"),h.fillStyle=a,h.fillRect(0,0,64,64);let u=this.S=e/1100;this.cars=[{col:"#e3262e",cx:.6,cy:.5,rx:.2,ry:.26,sp:.55,ph:0,slip:.62},{col:"#ffc21a",cx:.62,cy:.52,rx:.31,ry:.36,sp:.43,ph:2.3,slip:.55},{col:"#19a7ce",cx:.58,cy:.48,rx:.12,ry:.15,sp:-.7,ph:4.1,slip:-.7}].map(d=>Object.assign(d,{spr:this.sprite(d.col,u)})),this.parts=[]}sprite(e,t){let n=document.createElement("canvas"),s=Math.round(34*t*1.6),r=Math.round(70*t*1.6);n.width=s,n.height=r;let a=n.getContext("2d"),o=s*.28,l=(h,u,d,f,p)=>{a.beginPath(),a.moveTo(h+p,u),a.arcTo(h+d,u,h+d,u+f,p),a.arcTo(h+d,u+f,h,u+f,p),a.arcTo(h,u+f,h,u,p),a.arcTo(h,u,h+d,u,p),a.fill()};a.fillStyle="#0c0c0d";for(let[h,u]of[[0,.16],[.84,.16],[0,.68],[.84,.68]])l(s*h,r*u,s*.16,r*.16,2);let c=a.createLinearGradient(0,0,s,0);return c.addColorStop(0,"rgba(0,0,0,.35)"),c.addColorStop(.3,"rgba(255,255,255,.18)"),c.addColorStop(.7,"rgba(255,255,255,.05)"),c.addColorStop(1,"rgba(0,0,0,.4)"),a.fillStyle=e,l(s*.1,0,s*.8,r,o),a.fillStyle=c,l(s*.1,0,s*.8,r,o),a.fillStyle="rgba(10,16,22,.92)",l(s*.2,r*.2,s*.6,r*.17,o*.5),l(s*.22,r*.64,s*.56,r*.12,o*.5),a.fillStyle="rgba(0,0,0,.18)",l(s*.2,r*.38,s*.6,r*.25,3),a.fillStyle="#fff6d8",l(s*.16,r*.015,s*.18,r*.035,2),l(s*.66,r*.015,s*.18,r*.035,2),a.fillStyle="#ff2a2a",l(s*.16,r*.955,s*.2,r*.03,2),l(s*.64,r*.955,s*.2,r*.03,2),n}tick(e){if(!this.on||e-this.last<33)return;let t=Math.min(.05,(e-this.last)/1e3);this.last=e,this.cv.width!==Math.min(1100,Math.max(480,Math.round(innerWidth*.62)))&&this.build();let n=this.ctx,s=this.W,r=this.H,a=this.S,o=e/1e3,l=this.tctx;l.globalCompositeOperation="destination-out",l.fillStyle="rgba(0,0,0,.012)",l.fillRect(0,0,s,r),l.globalCompositeOperation="source-over",n.setTransform(1,0,0,1,0,0),n.globalCompositeOperation="source-over";let c=Math.sin(o*.11)*10*a,h=Math.cos(o*.09)*7*a,u=1.04+Math.sin(o*.07)*.02;n.setTransform(u,0,0,u,-s*(u-1)/2+c,-r*(u-1)/2+h),n.drawImage(this.ground,0,0),n.drawImage(this.trail,0,0);let d=[];for(let f of this.cars){let p=o*f.sp+f.ph,x=s*(f.cx+Math.cos(p)*f.rx),g=r*(f.cy+Math.sin(p)*f.ry),m=Math.sign(f.sp),y=-Math.sin(p)*f.rx*s*m,M=Math.cos(p)*f.ry*r*m,_=Math.atan2(M,y),w=_-f.slip*m*(.85+.15*Math.sin(o*1.7+f.ph)),T=Math.cos(w),A=Math.sin(w),S=f.spr.width,E=f.spr.height;for(let C of[-.36,.36]){let L=x-T*E*.34-A*C*S,N=g-A*E*.34+T*C*S;l.fillStyle="rgba(12,7,4,.5)",l.beginPath(),l.arc(L,N,2.6*a,0,7),l.fill();for(let V=0;V<2;V++)this.parts.push({x:L,y:N,vx:-Math.cos(_)*60*a+(Math.random()-.5)*90*a,vy:-Math.sin(_)*60*a+(Math.random()-.5)*90*a,l:.5+Math.random()*.5,m:1,r:(1.5+Math.random()*2.5)*a});Math.random()<.5&&this.parts.push({x:L,y:N,vx:(Math.random()-.5)*20*a,vy:(Math.random()-.5)*20*a-6*a,l:1.6+Math.random(),m:0,r:(14+Math.random()*16)*a})}n.save(),n.translate(x,g),n.rotate(w+Math.PI/2),n.fillStyle="rgba(0,0,0,.35)",n.beginPath(),n.ellipse(4*a,6*a,S*.56,E*.54,0,0,7),n.fill(),n.drawImage(f.spr,-S/2,-E/2),n.restore(),d.push([x+T*E*.5,g+A*E*.5,w])}for(let f=this.parts.length-1;f>=0;f--){let p=this.parts[f];if(p.l-=t,p.l<=0){this.parts.splice(f,1);continue}if(p.x+=p.vx*t,p.y+=p.vy*t,p.vx*=.96,p.vy*=.96,p.m)n.fillStyle=`rgba(70,46,26,${Math.min(1,p.l*2)})`,n.beginPath(),n.arc(p.x,p.y,p.r,0,7),n.fill();else{n.globalAlpha=Math.min(.5,p.l*.35);let x=p.r*(2.6-p.l*.6);n.drawImage(this.puff,p.x-x,p.y-x,x*2,x*2),n.globalAlpha=1}}this.parts.length>420&&this.parts.splice(0,this.parts.length-420),n.globalCompositeOperation="lighter";for(let[f,p,x]of d){let g=230*a,m=n.createRadialGradient(f,p,4,f+Math.cos(x)*g*.5,p+Math.sin(x)*g*.5,g*.62);m.addColorStop(0,"rgba(255,240,200,.34)"),m.addColorStop(1,"rgba(255,240,200,0)"),n.fillStyle=m,n.beginPath(),n.moveTo(f,p),n.arc(f,p,g,x-.32,x+.32),n.closePath(),n.fill()}for(let[f,p,x]of[["255,170,70",0,.13],["70,160,255",2.5,.1],["255,60,170",4.2,.08]]){let g=s*(.58+Math.cos(o*x+p)*.38),m=r*(.5+Math.sin(o*x*1.4+p)*.38),y=n.createRadialGradient(g,m,0,g,m,s*.3);y.addColorStop(0,`rgba(${f},.2)`),y.addColorStop(1,`rgba(${f},0)`),n.fillStyle=y,n.fillRect(0,0,s,r)}n.globalCompositeOperation="source-over",n.setTransform(1,0,0,1,0,0),n.drawImage(this.vig,0,0)}};var Tn={p:[0,1,2,3].map(()=>new U(0,-999,0)),d:[0,1,2,3].map(()=>new U(0,0,1)),c:[0,1,2,3].map(()=>new At(0,0,0,0))},Mm="uniform vec3 uLP[4]; uniform vec3 uLD[4]; uniform vec4 uLC[4]; vec3 beams(vec3 w){ vec3 l=vec3(0.); for(int i=0;i<4;i++){ vec3 d=w-uLP[i]; float dist=length(d)+.001; float c=dot(d/dist,uLD[i]); l+=uLC[i].rgb*uLC[i].a*smoothstep(.88,.975,c)*max(0.,1.-dist/48.)*min(1.,dist*.5); } return l; }",Gs=class{constructor(e,t=1800,n=!1){this.max=t,this.cur=0,this.pos=new Float32Array(t*3),this.col=new Float32Array(t*4),this.size=new Float32Array(t),this.vel=new Float32Array(t*3),this.life=new Float32Array(t),this.maxLife=new Float32Array(t),this.grow=new Float32Array(t),this.alpha=new Float32Array(t),this.grav=new Float32Array(t);let s=new wt;s.setAttribute("position",new St(this.pos,3)),s.setAttribute("aColor",new St(this.col,4)),s.setAttribute("aSize",new St(this.size,1)),this.mat=new Vt({transparent:!0,depthWrite:!1,blending:n?Mn:Ds,uniforms:{uScale:{value:600},uLP:{value:Tn.p},uLD:{value:Tn.d},uLC:{value:Tn.c}},vertexShader:Mm+"attribute vec4 aColor; attribute float aSize; varying vec4 vC; varying vec3 vL; uniform float uScale; void main(){ vC=aColor; vL=beams(position); vec4 mv=modelViewMatrix*vec4(position,1.); gl_Position=projectionMatrix*mv; gl_PointSize=aSize*uScale/max(-mv.z,.1); }",fragmentShader:"varying vec4 vC; varying vec3 vL; void main(){ float d=length(gl_PointCoord-.5); float a=smoothstep(.5,.12,d)*vC.a; if(a<.01) discard; gl_FragColor=vec4(vC.rgb+vL*.85, min(1., a*(1.+dot(vL,vec3(.5))))); }"}),this.points=new Ps(s,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=5,e.add(this.points),this.geo=s}emit(e,t,n,s,r,a,o,l,c,h,u,d,f,p=0){let x=this.cur;this.cur=(x+1)%this.max,this.pos[x*3]=e,this.pos[x*3+1]=t,this.pos[x*3+2]=n,this.vel[x*3]=s,this.vel[x*3+1]=r,this.vel[x*3+2]=a,this.life[x]=this.maxLife[x]=o,this.size[x]=l,this.grow[x]=c,this.alpha[x]=f,this.grav[x]=p,this.col[x*4]=h,this.col[x*4+1]=u,this.col[x*4+2]=d,this.col[x*4+3]=f}update(e){let{pos:t,vel:n,life:s,maxLife:r,size:a,grow:o,col:l,alpha:c,grav:h}=this;for(let d=0;d<this.max;d++){if(s[d]<=0)continue;if(s[d]-=e,s[d]<=0){a[d]=0,l[d*4+3]=0;continue}let f=d*3;n[f+1]-=h[d]*e,t[f]+=n[f]*e,t[f+1]+=n[f+1]*e,t[f+2]+=n[f+2]*e;let p=1-e*1.6;n[f]*=p,n[f+2]*=p,a[d]+=o[d]*e,l[d*4+3]=c[d]*(s[d]/r[d])}let u=this.geo.attributes;u.position.needsUpdate=u.aColor.needsUpdate=u.aSize.needsUpdate=!0}clear(){this.life.fill(0),this.size.fill(0)}},Po=class{constructor(e,t=3500){this.max=t,this.cur=0,this.pos=new Float32Array(t*18);let n=new wt;n.setAttribute("position",new St(this.pos,3)),this.mesh=new xe(n,new rt({color:723724,transparent:!0,opacity:.5,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-6,side:$t})),this.mesh.frustumCulled=!1,this.mesh.renderOrder=2,e.add(this.mesh),this.geo=n}quad(e,t,n,s){let r=this.pos,a=this.cur*18;this.cur=(this.cur+1)%this.max,r.set(e,a),r.set(t,a+3),r.set(n,a+6),r.set(t,a+9),r.set(s,a+12),r.set(n,a+15),this.dirty=!0}flush(){this.dirty&&(this.geo.attributes.position.needsUpdate=!0,this.dirty=!1)}clear(){this.pos.fill(0),this.dirty=!0}},Zc=class{constructor(e){let t=(s,r,a)=>{let o=new Float32Array(s*(a?6:3)),l=new Float32Array(s*(a?2:1));for(let h=0;h<s;h++){let u=Math.random()*r,d=Math.random()*r*.5,f=Math.random()*r;a?(o.set([u,d,f,u,d,f],h*6),l[h*2+1]=1):o.set([u,d,f],h*3)}let c=new wt;return c.setAttribute("position",new St(o,3)),c.setAttribute("tip",new St(l,1)),c},n="vec3 p=position+uVel*uTime; p=mod(p-uCam+vec3(B*.5,B*.25,B*.5), vec3(B,B*.5,B))-vec3(B*.5,B*.25,B*.5)+uCam;";this.dust=new Ps(t(500,70),new Vt({transparent:!0,depthWrite:!1,blending:Mn,uniforms:{uTime:{value:0},uCam:{value:new U},uVel:{value:new U(.5,.12,.3)},uCol:{value:new be(1,.95,.8)},uA:{value:.5},uScale:{value:600},uLP:{value:Tn.p},uLD:{value:Tn.d},uLC:{value:Tn.c}},vertexShader:Mm+`uniform float uTime,uScale; uniform vec3 uCam,uVel; attribute float tip; varying float vF; varying float vL; const float B=70.; void main(){ ${n} p.y+=sin(uTime*.6+position.x)*.4; vec4 mv=modelViewMatrix*vec4(p,1.); gl_Position=projectionMatrix*mv; gl_PointSize=.09*uScale/max(-mv.z,.5); vF=smoothstep(35.,22.,length(p-uCam))*smoothstep(1.,4.,-mv.z); vL=dot(beams(p),vec3(.34)); gl_PointSize*=1.+min(vL,1.5)*1.6; }`,fragmentShader:"uniform vec3 uCol; uniform float uA; varying float vF; varying float vL; void main(){ float d=length(gl_PointCoord-.5); float a=smoothstep(.5,.0,d)*(uA+vL*1.4)*vF; if(a<.01) discard; gl_FragColor=vec4(mix(uCol,vec3(1.,.96,.84),min(1.,vL)),min(1.,a)); }"})),this.rain=new ar(t(1600,50,!0),new Vt({transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uCam:{value:new U},uVel:{value:new U(2,-26,1)},uA:{value:0}},vertexShader:`uniform float uTime; uniform vec3 uCam,uVel; attribute float tip; varying float vT; const float B=50.; void main(){ ${n} p+=normalize(uVel)*tip*-.9; vT=tip; gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.); }`,fragmentShader:"uniform float uA; varying float vT; void main(){ gl_FragColor=vec4(.8,.86,.95,uA*(.15+vT*.5)); }"}));for(let s of[this.dust,this.rain])s.frustumCulled=!1,s.renderOrder=6,e.add(s);this.rain.visible=!1,this.scene=e}update(e,t,n,s){for(let r of[this.dust,this.rain])r.material.uniforms.uTime.value+=e,r.material.uniforms.uCam.value.copy(t.position);this.dust.material.uniforms.uScale.value=s,this.dust.material.uniforms.uA.value=.5*(1-n),this.rain.visible=n>.02,this.rain.material.uniforms.uA.value=n*.4}dispose(){for(let e of[this.dust,this.rain])this.scene.remove(e),e.geometry.dispose(),e.material.dispose()}},$c=class{constructor(e,t=40){this.scene=e,this.items=[],this.max=t}spawn(e,t,n,s,r,a){this.items.length>=this.max&&this.scene.remove(this.items.shift().m);let o=new xe(e,t);o.position.copy(n),s&&o.quaternion.copy(s),r&&o.scale.copy(r),o.castShadow=!0,this.scene.add(o),this.items.push({m:o,v:a,w:new U((Math.random()-.5)*12,(Math.random()-.5)*12,(Math.random()-.5)*12),life:35,rest:!1})}update(e,t){for(let n=this.items.length-1;n>=0;n--){let s=this.items[n],r=s.m;if(!s.rest){s.v.y-=22*e,r.position.addScaledVector(s.v,e),r.rotation.x+=s.w.x*e,r.rotation.y+=s.w.y*e,r.rotation.z+=s.w.z*e;let a=t.height(r.position.x,r.position.z)+.07;r.position.y<a&&(r.position.y=a,Math.abs(s.v.y)<2?(s.rest=!0,r.rotation.x=Math.round(r.rotation.x/Math.PI)*Math.PI,r.rotation.z=Math.round(r.rotation.z/Math.PI)*Math.PI):(s.v.y*=-.36,s.v.x*=.62,s.v.z*=.62,s.w.multiplyScalar(.55)))}s.life-=e,s.life<0&&(this.scene.remove(r),this.items.splice(n,1))}}dispose(){for(let e of this.items)this.scene.remove(e.m);this.items=[]}};var _a={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var oi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},ky=new Gi(-1,1,1,-1,0,1),Id=class extends wt{constructor(){super(),this.setAttribute("position",new $e([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new $e([0,2,0,0,2,0],2))}},Uy=new Id,Vs=class{constructor(e){this._mesh=new xe(Uy,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ky)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var ya=class extends oi{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Vt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ps.clone(e.uniforms),this.material=new Vt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Vs(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Io=class extends oi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Qc=class extends oi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var eh=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Oe);this._width=n.width,this._height=n.height,t=new Jt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:fn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ya(_a),this.copyPass.material.blending=fi,this.timer=new ao}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Io!==void 0&&(a instanceof Io?n=!0:a instanceof Qc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Oe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var th=class extends oi{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new be}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Sm={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new be(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var nh=class i extends oi{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Oe(e.x,e.y):new Oe(256,256),this.clearColor=new be(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Jt(r,a,{type:fn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new Jt(r,a,{type:fn,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let d=new Jt(r,a,{type:fn,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=Sm;this.highPassUniforms=ps.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Vt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Oe(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ps.clone(_a.uniforms),this.blendMaterial=new Vt({uniforms:this.copyUniforms,vertexShader:_a.vertexShader,fragmentShader:_a.fragmentShader,premultipliedAlpha:!0,blending:Mn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new be,this._oldClearAlpha=1,this._basic=new rt,this._fsQuad=new Vs(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Oe(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],l=a+1<e?t[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new Vt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Oe(.5,.5)},direction:{value:new Oe(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Vt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};nh.BlurDirectionX=new Oe(1,0);nh.BlurDirectionY=new Oe(0,1);var Lo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var ih=class extends oi{constructor(){super(),this.isOutputPass=!0,this.uniforms=ps.clone(Lo.uniforms),this.material=new ea({name:Lo.name,uniforms:this.uniforms,vertexShader:Lo.vertexShader,fragmentShader:Lo.fragmentShader}),this._fsQuad=new Vs(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ze.getTransfer(this._outputColorSpace)===Mt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===oo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===lo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===co?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ur?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===uo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===fo?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===ho&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Oy={uniforms:{tDiffuse:{value:null},sunPos:{value:new Oe(.5,.5)},sunVis:{value:0},rays:{value:.085},speed:{value:0},hit:{value:0},vig:{value:.32},wet:{value:0},tilt:{value:0},grade:{value:1},time:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`
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
      col=mix(vec3(dot(col,vec3(.299,.587,.114))), col, 1.+.3*grade); col*=mix(vec3(1.), vec3(1.05,1.,.93), grade);
      col=mix(col, col*vec3(.86,.93,1.04), wet*.6);
      col*=1.-vig*smoothstep(.42,1.,length(c)*1.22);
      gl_FragColor=vec4(col,1.);
    }`},sh=class{constructor(e,t,n){let s=e.getDrawingBufferSize(new Oe),r=new Jt(s.x,s.y,{type:fn,samples:2});this.composer=new eh(e,r),this.composer.addPass(new th(t,n)),this.bloom={strength:0},this.fx=new ya(Oy),this.composer.addPass(this.fx),this.composer.addPass(new ih),this.u=this.fx.uniforms}setSize(e,t,n){this.composer.setPixelRatio(n),this.composer.setSize(e,t)}render(e){this.composer.render(e)}};var ah=3e3,rh=i=>({label:i.slice(3).replace(/_/g," "),trim:1,loops:[{file:i+"_Loop.wav",rpm:ah}]}),Do=(i,e)=>({label:i.slice(3).replace(/_/g," ")+" (4 rpm layers)",trim:e,loops:[1200,2400,4200,6400].map(t=>({file:i+"_"+t+".wav",rpm:t}))}),ch={"01_Turbo_Inline4":rh("01_Turbo_Inline4"),"02_Boxer_Flat4":rh("02_Boxer_Flat4"),"03_Race_Inline6":rh("03_Race_Inline6"),"04_Crossplane_V8":rh("04_Crossplane_V8"),"05_FlatPlane_V8":Do("05_FlatPlane_V8",1.5),"06_Race_V12":Do("06_Race_V12",1.55),"07_TwinTurbo_V6":Do("07_TwinTurbo_V6",1.45),"08_Race_V10":Do("08_Race_V10",1.5),"09_Rally_Inline5":Do("09_Rally_Inline5",1.5)},Ld={sqLow:"tyre_squeal_low.wav",sqMid:"tyre_squeal_mid.wav",sqHigh:"tyre_squeal_high.wav",whine:"gear_whine.wav",limiter:"rev_limiter.wav",spool:"turbo_spool.wav",scrub:"tyre_scrub.wav",grass:"surface_grass.wav",gravel:"surface_gravel.wav",kerb:"kerb_rumble.wav"},wm={pop:"06_Shift_Exhaust_SinglePop.wav",crackle:"07_Shift_Exhaust_CrackleBurst.wav",bang1:"exhaust_bang_1.wav",bang2:"exhaust_bang_2.wav",bang3:"exhaust_bang_3.wav",bov1:"turbo_blowoff_1.wav",bov2:"turbo_blowoff_2.wav"},oh=(i,e,t)=>i<e?e:i>t?t:i,Fo=class{constructor(e){this.au=e;let t=e.ctx;this.level=t.createGain(),this.level.gain.value=0,this.lp=t.createBiquadFilter(),this.lp.type="lowpass",this.lp.frequency.value=1500,this.lp.Q.value=.5,this.level.connect(this.lp),this.lp.connect(e.engBus),this.cur=null,this.name=""}start(e,t=.4){let n=this.au,s=n.ctx,r=ch[e];if(!r||!r.loops.every(c=>n.buf[c.file]))return!1;this.fadeOut(.2);let a=s.createGain(),o=s.currentTime;a.gain.setValueAtTime(0,o),a.gain.linearRampToValueAtTime(r.trim,o+.2),a.connect(this.level);let l=r.loops.map((c,h)=>{let u=n.buf[c.file],d=s.createBufferSource(),f=s.createGain();return d.buffer=u,d.loop=!0,d.loopStart=0,d.loopEnd=u.duration,f.gain.value=h?0:1,d.connect(f),f.connect(a),d.start(o,Math.random()*u.duration),n.stats.live++,{src:d,g:f,rpm:c.rpm}});return this.cur={layers:l,fade:a},this.name=e,n.stats.starts++,!0}fadeOut(e=.25){let t=this.cur;if(!t)return;let n=this.au.ctx.currentTime;t.fade.gain.cancelScheduledValues(n),t.fade.gain.setValueAtTime(t.fade.gain.value,n),t.fade.gain.linearRampToValueAtTime(0,n+e);for(let s of t.layers)s.src.stop(n+e+.05),s.src.onended=()=>{s.src.disconnect(),s.g.disconnect(),this.au.stats.live--};setTimeout(()=>t.fade.disconnect(),(e+.2)*1e3),this.cur=null,this.name=""}set(e,t,n){if(!this.cur)return;let s=this.au.ctx.currentTime,r=this.cur.layers,a=r.length,o=0;for(;o<a-2&&e>r[o+1].rpm;)o++;let l=a>1?oh(Math.log(e/r[o].rpm)/Math.log(r[o+1].rpm/r[o].rpm),0,1):0;r.forEach((c,h)=>{c.src.playbackRate.setTargetAtTime(oh(e/c.rpm,a>1?.45:.25,a>1?2.4:3.4),s,.035),c.g.gain.setTargetAtTime(a===1?1:h===o?Math.cos(l*1.5708):h===o+1?Math.sin(l*1.5708):0,s,.03)}),this.level.gain.setTargetAtTime(n*(.16+.39*t),s,.06),this.lp.frequency.setTargetAtTime(1300+t*4200+oh(e/3e3,0,2.5)*500,s,.07)}},lh=class{constructor(){this.on=!0,this.ctx=null,this.vol=.7,this.evol=.7,this.mvol=.5,this.buf={},this.state="idle",this.stats={starts:0,live:0,shots:0,liveShots:0},this.lastLoad=0,this.spec=null,this.riv=[]}init(){if(this.ctx){this.ctx.state!=="running"&&!document.hidden&&this.ctx.resume();return}let e=window.AudioContext||window.webkitAudioContext;if(!e){this.state="unsupported";return}let t=this.ctx=new e,n=t.createDynamicsCompressor();n.threshold.value=-10,n.knee.value=12,n.ratio.value=3,n.attack.value=.01,n.release.value=.25,n.connect(t.destination),this.master=t.createGain(),this.master.gain.value=this.on?.8:0,this.master.connect(n),this.engBus=t.createGain(),this.engBus.gain.value=this.evol,this.engBus.connect(this.master);{let l=Math.floor(t.sampleRate*.32),c=t.createBuffer(1,l,t.sampleRate),h=c.getChannelData(0);for(let p=0;p<l;p++){let x=p/t.sampleRate;h[p]=(Math.random()*2-1)*Math.exp(-x/.07)*(x<.004?0:1)}for(let p of[11,23,37,58])h[Math.floor(p/1e3*t.sampleRate)]+=.5;let u=t.createConvolver();u.buffer=c;let d=t.createBiquadFilter();d.type="lowpass",d.frequency.value=2600;let f=t.createGain();f.gain.value=.22,this.engBus.connect(u),u.connect(d),d.connect(f),f.connect(this.master)}this.shotLP=t.createBiquadFilter(),this.shotLP.type="lowpass",this.shotLP.frequency.value=5200,this.shotLP.Q.value=.4,this.shotLP.connect(this.engBus),this.airLP=t.createBiquadFilter(),this.airLP.type="lowpass",this.airLP.frequency.value=5200,this.airLP.connect(this.engBus),this.sfx=t.createGain(),this.sfx.gain.value=this.vol,this.sfx.connect(this.master),this.meterNode=t.createAnalyser(),this.meterNode.fftSize=1024,this.master.connect(this.meterNode);let s=t.createBuffer(1,t.sampleRate*3,t.sampleRate),r=s.getChannelData(0),a=0;for(let l=0;l<r.length;l++){let c=Math.random()*2-1;a=(a+.04*c)/1.04,r[l]=c*.5+a*6}this.noiseBuf=s;let o=(l,c,h,u=this.sfx)=>{let d=t.createBufferSource();d.buffer=s,d.loop=!0,d.playbackRate.value=.8+Math.random()*.4;let f=t.createBiquadFilter();f.type=l,f.frequency.value=c,f.Q.value=h;let p=t.createGain();return p.gain.value=0,d.connect(f),f.connect(p),p.connect(u),d.start(),{g:p,fl:f}};this.wind=o("lowpass",500,.5),this.roll=o("lowpass",260,.7),this.skid=o("bandpass",520,.9),this.skidHi=o("highpass",3200,.5);{let l=t.createBufferSource();l.buffer=s,l.loop=!0;let c=t.createGain();c.gain.value=0,c.connect(this.sfx);let h=t.createOscillator();h.frequency.value=4.3;let u=t.createGain();u.gain.value=45,h.connect(u),h.start(),this.sq={g:c,f:[1,1.52,2.31].map((d,f)=>{let p=t.createBiquadFilter();p.type="bandpass",p.Q.value=18-f*3,p.frequency.value=700*d;let x=t.createGain();return x.gain.value=[1,.55,.3][f],l.connect(p),p.connect(x),x.connect(c),u.connect(p.detune),p.mult=d,p})},l.start()}this.dirt=o("lowpass",420,.8),this.nitro=o("bandpass",1600,.7),this.brake=o("bandpass",3100,5),this.rain=o("highpass",2600,.4),this.crowd=o("bandpass",950,.5),this.spool=o("bandpass",2600,2.2,this.engBus),this.voice=new Fo(this),this.rivV=[0,1,2].map(()=>new Fo(this)),this.audV=new Fo(this),document.addEventListener("visibilitychange",()=>{this.ctx&&(document.hidden?this.ctx.suspend():(this.ctx.resume(),this.lastLoad=0))}),this.load()}async load(){this.state="loading";try{let e=[...Object.values(ch).flatMap(t=>t.loops.map(n=>n.file)),...Object.values(wm),...Object.values(Ld)];await Promise.all(e.map(async t=>{this.buf[t]=await this.ctx.decodeAudioData(await Os("audio/"+t))})),this.state="ready",this.ty={};for(let t in Ld){let n=this.ctx.createBufferSource(),s=this.ctx.createGain();n.buffer=this.buf[Ld[t]],n.loop=!0,s.gain.value=0,n.connect(s),s.connect(t==="spool"?this.airLP:t==="limiter"||t==="whine"?this.engBus:this.sfx),n.start(0,Math.random()),this.ty[t]={src:n,g:s}}}catch(e){console.warn("engine audio failed to load",e),this.state="error"}}setMuted(e){this.on=!e,this.el&&this.music(this.musicOn),this.master&&this.master.gain.setTargetAtTime(this.on?.8:0,this.ctx.currentTime,.05)}setVolumes(){if(!this.ctx)return;let e=this.ctx.currentTime;this.engBus.gain.setTargetAtTime(this.evol,e,.05),this.sfx.gain.setTargetAtTime(this.vol,e,.05)}music(e){this.el||(this.el=new Audio("assets/menu.mp3"),this.el.loop=!0,this.el.volume=0),this.musicOn=e;let t=this.el;e&&this.on&&t.play().catch(()=>{}),clearInterval(this.fade),this.fade=setInterval(()=>{let n=e&&this.on?this.mvol:0,s=n-t.volume;Math.abs(s)<.05?(t.volume=n,clearInterval(this.fade),n||t.pause()):t.volume=Math.max(0,Math.min(1,t.volume+Math.sign(s)*.04))},60)}setCar(e){this.spec=e}drive(e){if(!this.ctx)return;if(this.quiet)return this.silence();let t=this.ctx.currentTime,n=Math.min(1,e.speed/60),s=this.spec;if(this.lastRpmN=e.rpmN,this.state==="ready"&&s)if(e.running===!1)this.voice.cur&&this.voice.fadeOut(.5);else{this.voice.name!==s.snd&&this.voice.start(s.snd,e.rpm/ah);let d=1;t<(this.dipUntil||0)&&(d=.42),e.limiter&&(d*=.5),this.voice.set(e.rpm,e.load,d);let f=e.turbo||0,p=f?Math.min(1,e.load*(.25+e.rpmN*1.1)):0;this.boost=(this.boost||0)+(p-(this.boost||0))*(p>(this.boost||0)?.045:.12),this.ty&&(this.ty.spool.g.gain.setTargetAtTime(Math.min(1,f)*this.boost*this.boost*.12,t,.1),this.ty.spool.src.playbackRate.setTargetAtTime(.45+this.boost*.75+e.rpmN*.2,t,.1)),this.spool.g.gain.setTargetAtTime(0,t,.1),this.lastLoad>.6&&e.load<.15&&t-(this.liftT||0)>.9&&(this.liftT=t,f&&this.boost>.35?(this.shot(e.rpmN>.62?"bov2":"bov1",.36+this.boost*.24,!0),this.boost*=.2):!f&&e.rpmN>.5&&s.pops==="crackle"&&Math.random()<.6&&this.shot("crackle",.5)),this.lastLoad+=(e.load-this.lastLoad)*.5}this.wind.g.gain.setTargetAtTime(n*n*.3,t,.2),this.wind.fl.frequency.setTargetAtTime(300+n*900,t,.2),this.roll.g.gain.setTargetAtTime(Math.min(.16,n*.3)*(1-e.dirt),t,.15);let r=Math.max(0,Math.min(1,((e.grip||0)-.5)/.5)),a=1-(e.wet||0)*.85,o=e.skid||0,l=Math.min(1,e.speed/30),c=this.ty,h=1-e.dirt,u=(d,f,p,x=.08)=>{d.g.gain.setTargetAtTime(f,t,x),p&&d.src.playbackRate.setTargetAtTime(p,t,.1)};if(c){u(c.scrub,(r*.5+o*.35+n*.12)*l*h,.75+n*.7+r*.15);{let d=e.speed,f=Math.max(o,(e.lock||0)*.6)*(.4+.6*l)*a*h*.36,p=1-Math.min(1,Math.max(0,(d-9)/11)),x=Math.min(1,Math.max(0,(d-24)/16)),g=Math.max(0,1-p-x),m=(e.lock||0)*.14-(e.spin||0)*.12,y=o>.05?.05:.16;u(c.sqLow,f*p,.8+d/30*.35+m,y),u(c.sqMid,f*g,.78+d/45*.4+m,y),u(c.sqHigh,f*x*1.1,.75+d/70*.45+m,y)}u(c.whine,n*Math.sqrt(n)*.05,.35+e.speed/42,.15),u(c.limiter,e.limiter?.45:0,1,e.limiter?.01:.04),u(c.grass,e.sand?0:e.dirt*(.25+.75*l)*1.1,.8+n*.9),u(c.gravel,(e.sand?e.dirt:e.dirt*.25)*(.25+.75*l)*1.6,.8+n*.8),u(c.kerb,(e.kerb||0)*Math.min(1,e.speed/12)*1.6,Math.max(.4,e.speed/13)),this.skid.g.gain.setTargetAtTime(0,t,.1),this.dirt.g.gain.setTargetAtTime(0,t,.1),this.sq.g.gain.setTargetAtTime(0,t,.1)}else this.skid.g.gain.setTargetAtTime((r*.1+o*.12)*l*h,t,.08),this.dirt.g.gain.setTargetAtTime(e.dirt*.35,t,.1),this.sq.g.gain.setTargetAtTime(o*a*h*.4,t,.08);this.skidHi.g.gain.setTargetAtTime(Math.max(o,r*.5)*(e.wet||0)*l*.09,t,.12),this.brake.g.gain.setTargetAtTime((e.brake||0)*Math.min(1,e.speed/25)*.018,t,.05),this.nitro.g.gain.setTargetAtTime(e.nitro?.16:0,t,.1),this.rain.g.gain.setTargetAtTime((e.rain||0)*.1,t,.5)}shift(e,t,n,s){if(!this.ctx||this.quiet)return;let r=this.ctx.currentTime;this.dipUntil=r+(e>0?.13:.09),e>0&&t>.6&&n>.5&&s&&(this.shot("bang"+(s==="crackle"?1+(Math.random()*3|0):1+(Math.random()*2|0)),.85+n*.25),s==="crackle"&&Math.random()<.5&&setTimeout(()=>this.shot("crackle",.28,!0),120))}shot(e,t=.5,n=!1){let s=this.ctx,r=this.buf[wm[e]],a=s.currentTime;if(!r||!n&&a-(this.shotT||0)<.22||this.stats.liveShots>=4)return;n||(this.shotT=a);let o=s.createBufferSource(),l=s.createGain();o.buffer=r,o.playbackRate.value=1+(Math.random()-.5)*.08;let c=t*(1+(Math.random()-.5)*.2);l.gain.setValueAtTime(0,a),l.gain.linearRampToValueAtTime(c,a+.006),l.gain.setValueAtTime(c,a+r.duration*.7),l.gain.linearRampToValueAtTime(0,a+r.duration),o.connect(l),l.connect(e.startsWith("bov")?this.airLP:this.shotLP),e.startsWith("bang")&&(o.playbackRate.value*=.9+(this.lastRpmN||.5)*.25,this.dipUntil=Math.max(this.dipUntil||0,a+.07)),this.stats.shots++,this.stats.liveShots++,o.onended=()=>{o.disconnect(),l.disconnect(),this.stats.liveShots--},o.start(a)}rivals(e){!this.ctx||this.quiet||this.state!=="ready"||this.rivV.forEach((t,n)=>{let s=e[n];if(!s||s.dist>60){t.cur&&t.fadeOut(.4);return}t.name!==s.snd&&t.start(s.snd,s.rpm/ah);let r=oh(1-s.dist/60,0,1);t.set(s.rpm,s.load,r*r*.5)})}silence(){if(!this.ctx)return;let e=this.ctx.currentTime;if(this.sq&&this.sq.g.gain.setTargetAtTime(0,e,.1),this.ty)for(let t in this.ty)this.ty[t].g.gain.setTargetAtTime(0,e,.1);for(let t of[this.wind,this.roll,this.skid,this.skidHi,this.dirt,this.nitro,this.brake,this.rain,this.crowd,this.spool])t.g.gain.setTargetAtTime(0,e,.12);this.voice.cur&&this.voice.fadeOut(.3);for(let t of this.rivV)t.cur&&t.fadeOut(.3)}ambient(e,t){this.ctx&&this.crowd.g.gain.setTargetAtTime(t.on?.028:0,this.ctx.currentTime,.6)}audition(e,t,n){if(!(!this.ctx||this.state!=="ready")){if(!e){this.audV.cur&&this.audV.fadeOut(.25);return}this.audV.name!==e&&this.audV.start(e,t/ah),this.audV.set(t,n,By(this)<(this.dipUntil||0)?.42:1)}}meter(){if(!this.meterNode)return-99;let e=new Float32Array(this.meterNode.fftSize);this.meterNode.getFloatTimeDomainData(e);let t=0,n=0;for(let s of e)t+=s*s,n=Math.max(n,Math.abs(s));return{rms:20*Math.log10(Math.sqrt(t/e.length)+1e-6),peak:20*Math.log10(n+1e-6)}}tone(e,t=.2,n=.2,s="sine",r=1){if(!this.ctx||this.quiet)return;let a=this.ctx,o=a.createOscillator(),l=a.createGain(),c=a.currentTime;o.type=s,o.frequency.setValueAtTime(e,c),r!==1&&o.frequency.exponentialRampToValueAtTime(e*r,c+t),l.gain.setValueAtTime(0,c),l.gain.linearRampToValueAtTime(n,c+.012),l.gain.exponentialRampToValueAtTime(.001,c+t),o.connect(l),l.connect(this.sfx),o.onended=()=>{o.disconnect(),l.disconnect()},o.start(),o.stop(c+t+.02)}beep(e=440,t=.18,n=.16){this.tone(e,t,n),this.tone(e*2,t*.7,n*.25)}burst(e,t,n,s,r,a=1,o){if(!this.ctx||this.quiet)return;let l=this.ctx,c=l.createBufferSource(),h=l.createBiquadFilter(),u=l.createGain(),d=l.currentTime;c.buffer=this.noiseBuf,c.playbackRate.value=a,h.type=e,h.frequency.value=t,h.Q.value=n,u.gain.setValueAtTime(r,d),u.gain.exponentialRampToValueAtTime(.001,d+s),c.connect(h),h.connect(u),u.connect(o||this.sfx),c.onended=()=>{c.disconnect(),h.disconnect(),u.disconnect()},c.start(d,Math.random()*2),c.stop(d+s+.02)}crash(e){let t=Math.min(1,e/22);this.tone(85,.28,.25+t*.45,"sine",.45),this.burst("lowpass",500+t*900,.7,.22+t*.2,.25+t*.5),t>.3&&this.burst("bandpass",2400,2.5,.16,t*.28,1.4)}scrape(e){this.burst("bandpass",1500,1.2,.12,Math.min(.2,e*.02))}pickup(e){e?(this.tone(520,.12,.12),this.tone(780,.2,.1)):(this.tone(1320,.09,.08),this.tone(1760,.16,.07))}wrench(){for(let e=0;e<5;e++)setTimeout(()=>this.burst("bandpass",3200,6,.05,.12,2),e*55)}horn(){this.tone(392,.4,.1,"square"),this.tone(494,.4,.08,"square")}turboDemo(){if(this.ty){let e=this.ctx.currentTime,t=this.ty.spool;t.g.gain.setTargetAtTime(.2,e,.2),t.src.playbackRate.setTargetAtTime(1.2,e,.3),t.g.gain.setTargetAtTime(0,e+.8,.05)}setTimeout(()=>this.shot("bov2",.6,!0),820)}},By=i=>i.ctx.currentTime;var hh=window.GAME_CONFIG||{},Ma=!!(hh.SUPABASE_URL&&hh.SUPABASE_ANON_KEY&&window.supabase),Tm=null,uh=()=>Tm||(Tm=window.supabase.createClient(hh.SUPABASE_URL,hh.SUPABASE_ANON_KEY,{realtime:{params:{eventsPerSecond:60}}})),zy=Math.random().toString(36).slice(2,10),No=class{constructor(){this.id=zy,this.peers={},this.onMessage=()=>{},this.onPeers=()=>{},this.meta={},this.code=null}static makeCode(){let e="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",t="";for(let n=0;n<5;n++)t+=e[Math.random()*e.length|0];return t}join(e,t){return this.code=e.toUpperCase(),this.meta={...t,id:this.id,t:Date.now()},new Promise((n,s)=>{if(Ma){let r=this.ch=uh().channel("tafheet:"+this.code,{config:{broadcast:{self:!1},presence:{key:this.id}}});r.on("broadcast",{event:"m"},({payload:a})=>this.onMessage(a)),r.on("presence",{event:"sync"},()=>{let a=r.presenceState();this.peers={};for(let o in a)o!==this.id&&a[o].length&&(this.peers[o]=a[o][a[o].length-1]);this.onPeers(this.peers)}),r.subscribe(async a=>{a==="SUBSCRIBED"?(await r.track(this.meta),n()):(a==="CHANNEL_ERROR"||a==="TIMED_OUT")&&s(new Error("Could not reach the room ("+a+")"))})}else{let r=this.bc=new BroadcastChannel("tafheet:"+this.code);r.onmessage=({data:a})=>{a._==="hi"||a._==="here"?(this.peers[a.meta.id]=a.meta,this.onPeers(this.peers),a._==="hi"&&r.postMessage({_:"here",meta:this.meta})):a._==="bye"?(delete this.peers[a.id],this.onPeers(this.peers)):this.onMessage(a)},r.postMessage({_:"hi",meta:this.meta}),this.unload=()=>r.postMessage({_:"bye",id:this.id}),addEventListener("beforeunload",this.unload),setTimeout(n,250)}})}setMeta(e){Object.assign(this.meta,e),this.ch?this.ch.track(this.meta):this.bc&&this.bc.postMessage({_:"here",meta:this.meta})}send(e){this.ch?this.ch.send({type:"broadcast",event:"m",payload:e}):this.bc&&this.bc.postMessage(e)}leave(){this.ch&&(this.ch.untrack(),uh().removeChannel(this.ch),this.ch=null),this.bc&&(this.bc.postMessage({_:"bye",id:this.id}),this.bc.close(),this.bc=null,removeEventListener("beforeunload",this.unload)),this.peers={}}};async function Em(i,e,t,n){if(Ma)try{await uh().from("lap_times").insert({track:i,name:e.slice(0,16),car:t,ms:Math.round(n)})}catch(s){console.warn("leaderboard",s)}}async function Am(i){if(!Ma)return null;try{let{data:e,error:t}=await uh().from("lap_times").select("name,car,ms").eq("track",i).order("ms",{ascending:!0}).limit(8);return t?null:e}catch{return null}}var Dd=(i,e,t)=>[{name:i,car:e,skill:t}],xs=[{name:"Shubra Nights",text:"Uncle Hamdi left you two things: a garage in Shubra with a leaking roof, and an unpaid entry to the Pharaoh\u2019s Cup. Amm Saber, his old mechanic, thinks you should sell the first and forget the second.",events:[{id:"s1",title:"First laps",mode:"trial",track:"lider",laps:3,goal:{type:"lap",v:[82,72,64]},intro:[["Amm Saber","Your uncle drove this circuit every Thursday for twenty years. Show me one clean lap and I\u2019ll stop telling you to sell the place."],["Amm Saber","Brake before the corner, not in it. And stay off the grass \u2014 I only have one set of tyres."]],win:"Amm Saber wipes his hands and says nothing. He is already ordering parts.",lose:"Amm Saber: \u201CThe stopwatch doesn\u2019t lie. Again.\u201D"},{id:"s2",title:"Club night",mode:"race",track:"lider",laps:3,diff:0,goal:{type:"pos",v:[3,2,1]},intro:[["Amm Saber","Club night. Five locals who all knew Hamdi. Finish on the podium and people will start saying your name instead of his."],["Zizo","New kid in the old man\u2019s car? Cute. Try not to hold us up."]],win:"Three people you have never met shake your hand. One of them asks if the garage is open tomorrow.",lose:"Zizo waves from the podium. It is not a friendly wave."},{id:"s3",title:"Zizo\u2019s dare",mode:"race",track:"lider",laps:3,diff:1,rivals:Dd("Zizo","Mercedes",.93),goal:{type:"pos",v:[1,1,1]},intro:[["Zizo","One on one. You win, I put your name on the Cup list myself. I win, the garage sign comes down."],["Amm Saber","He\u2019s fast on the straights and sloppy everywhere else. That big saloon eats its rear tyres. Be patient."]],win:"Zizo: \u201CFine. You\u2019re on the list. Don\u2019t make me regret it.\u201D",lose:"Zizo: \u201CLeave the sign up one more week. I want a rematch crowd.\u201D"}]},{name:"Sand and Stone",text:"The Cup\u2019s second round runs in the shadow of the pyramids. The sand gets everywhere, and the regulars here slide their cars on purpose.",events:[{id:"g1",title:"Sideways school",mode:"drift",track:"giza",laps:2,goal:{type:"drift",v:[500,1400,3e3]},intro:[["Captain Nadia","You drive like a taxi meter \u2014 straight and nervous. Out here the fast line is the sideways one."],["Captain Nadia","Tap the handbrake going in, then hold the slide with the throttle. Show me you can keep it off the walls."]],win:"Captain Nadia: \u201CUgly. But sideways. We can work with ugly.\u201D",lose:"Captain Nadia: \u201CThat was parking, not drifting.\u201D"},{id:"g2",title:"Dust devils",mode:"race",track:"giza",laps:3,diff:1,goal:{type:"pos",v:[3,2,1]},intro:[["Amm Saber","Full grid today. The sand runoff will take your speed and your tyres. If the car gets hurt, the blue pit box is just past the start line."]],win:"Sand in your teeth, a trophy in the boot.",lose:"Amm Saber is already under the car, muttering about sand in the brakes."},{id:"g3",title:"Captain Nadia",mode:"race",track:"giza",laps:3,diff:1,rivals:Dd("Capt. Nadia","Artura",.97),goal:{type:"pos",v:[1,1,1]},intro:[["Captain Nadia","Lesson\u2019s over. Now beat the teacher."],["Amm Saber","She doesn\u2019t make mistakes. So don\u2019t wait for one \u2014 out-brake her into the hairpin."]],win:"Captain Nadia hands you her spare helmet. \u201CFor the Corniche. It rains there.\u201D",lose:"Captain Nadia: \u201CCloser than I expected. Come back.\u201D"}]},{name:"Sea Breeze",text:"Alexandria. A long seafront straight, a knot of hairpins, and weather that changes its mind halfway through a lap.",events:[{id:"c1",title:"Storm front",mode:"race",track:"corniche",laps:3,diff:1,weather:"rain",goal:{type:"pos",v:[3,2,1]},intro:[["Amm Saber","Rain is coming in off the sea. When the road shines, you have a quarter less grip. Brake early, squeeze the throttle."]],win:"You are soaked, the car is filthy, and the points table has your name in the top three.",lose:"The sea wall has a new scuff the same colour as your car."},{id:"c2",title:"Golden hour",mode:"trial",track:"corniche",laps:3,goal:{type:"lap",v:[64,55,49]},intro:[["Zizo","The lap record here is El Basha\u2019s. Nobody gets near it. I just want to see how far off you are."]],win:"Zizo looks at the timing screen for a long moment. \u201C\u2026He\u2019s going to hear about this.\u201D",lose:"Zizo: \u201CTold you.\u201D"},{id:"c3",title:"The twins",mode:"race",track:"corniche",laps:3,diff:2,rivals:[{name:"Hassan",car:"Ferrari",skill:.97},{name:"Hussein",car:"Ferrari",skill:.96}],goal:{type:"pos",v:[1,1,1]},intro:[["Hassan","We race as a pair."],["Hussein","One of us blocks. One of us wins. You can guess which is which."],["Amm Saber","Don\u2019t get stuck between them. Pass them one at a time."]],win:"For the first time all season the twins disagree \u2014 about whose fault it was.",lose:"Hassan and Hussein cross the line side by side. Of course they do."}]},{name:"Midnight Crown",text:"The final is a street circuit through Cairo after dark. El Basha has won it six years running, and he has noticed you.",events:[{id:"m1",title:"Neon drift",mode:"drift",track:"midnight",laps:3,goal:{type:"drift",v:[800,2e3,4e3]},intro:[["Captain Nadia","The crowd here votes with its phones. Give them smoke under the lights and the organisers give you a front-row start."]],win:"The clip is everywhere by morning.",lose:"The crowd films the car behind you instead."},{id:"m2",title:"Qualifier",mode:"race",track:"midnight",laps:4,diff:2,goal:{type:"pos",v:[3,2,1]},intro:[["Amm Saber","Top three go to the final. The walls here are concrete, not tyres. Every touch costs you \u2014 pit if you must."]],win:"You are in the final. Amm Saber pretends he has something in his eye.",lose:"Fourth is the loneliest place on a results sheet."},{id:"m3",title:"El Basha",mode:"race",track:"midnight",laps:4,diff:2,weather:"rain",rivals:Dd("El Basha","Zenvo",1),goal:{type:"pos",v:[1,1,1]},final:!0,intro:[["El Basha","I raced your uncle for years. He never beat me. He never stopped trying either."],["El Basha","Let us see which half of that you inherited."],["Amm Saber","Hamdi\u2019s notes say El Basha lifts in the rain. It\u2019s going to rain."]],win:"El Basha takes off his gloves and offers his hand. The Pharaoh\u2019s Cup goes on the shelf in a garage in Shubra, under a roof that no longer leaks.",lose:"El Basha: \u201CSame as your uncle. Come back next year.\u201D"}]}],Pi=xs.flatMap((i,e)=>i.events.map(t=>Object.assign(t,{ci:e})));function dh(i){return i.type==="pos"?i.v[0]===1?"Win the race":"Finish in the top "+i.v[0]:i.type==="lap"?"Set a lap under "+i.v[0]+" s":"Score "+i.v[0].toLocaleString()+" drift points"}function Rm(i,e){let t=0;for(let n of i.v)(i.type==="pos"?e.pos<=n:i.type==="lap"?e.bestLap!=null&&e.bestLap<=n*1e3:e.drift>=n)&&t++;return i.type==="pos"&&i.v[0]===1?e.pos===1?3:0:t}var fh=i=>Math.floor(Math.sqrt(i/250))+1,ph=i=>(i-1)**2*250;function Fd(i){let e=new Date,t=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate(),n=7;for(let a of t)n=(n*31+a.charCodeAt(0))%9973;let s=["race","drift","trial"][n%3],r=i[(n>>2)%i.length];return{key:t,mode:s,track:r.id,trackName:r.name,weather:n%4===0?"rain":"clear",label:{race:"Podium finish",drift:"Drift attack",trial:"Time trial"}[s]}}var G=i=>document.getElementById(i),Zt=(i,e,t)=>i<e?e:i>t?t:i,vh=i=>{for(;i>Math.PI;)i-=2*Math.PI;for(;i<-Math.PI;)i+=2*Math.PI;return i},li=i=>{if(i==null||!isFinite(i))return"\u2014";let e=i/1e3,t=Math.floor(e/60);return t+":"+(e-t*60).toFixed(2).padStart(5,"0")},wa=i=>"#"+i.toString(16).padStart(6,"0"),Cm=["1st","2nd","3rd","4th","5th","6th"],Wd="tafheet.v1",k={evol:.7,dev:!1,devGod:!1,devScale:1,boxDay:"",v9:0,tc:!0,abs:!0,sens:1,v7:0,lang:"en",zoom:2.25,units:"kmh",mvol:.5,svol:.7,look:{},tune:{},gp:null,v5:0,assist:"full",rules:"circuit",sectors:{},up:{},stats:{},trophies:{},gfx:"auto",autoGas:!1,story:{},xp:0,daily:"",streak:0,credits:0,owned:["Ford","Sterrato"],car:"Ford",paint:{},name:"",best:{},bestDrift:{},muted:!1};try{Object.assign(k,JSON.parse(localStorage.getItem(Wd)||"{}"))}catch{}k.name||(k.name="Driver"+(100+Math.random()*900|0));{let i=new URLSearchParams(location.search).get("gfx");["auto","high","medium","low"].includes(i)&&(k.gfx=i)}k.v5||(k.autoGas=!1,k.v5=1);k.v7||(k.zoom=2.25,k.v7=1);k.v8||(k.assist="medium",k.v8=1);k.v9||(k.zoom=1.5,k.v9=1);var Ut=()=>{try{localStorage.setItem(Wd,JSON.stringify(k))}catch{}},We=i=>k.lang==="ar"&&Pd[i]!=null?Pd[i]:i,br=i=>k.look[i]||(k.look[i]={wing:0,split:0,rim:0,tint:0,glow:0}),Th=i=>k.tune[i]||(k.tune[i]={gear:0,aero:0,brake:0,susp:0,tyre:"medium"}),Zi=()=>!!b&&!b.attract,Aa=i=>k.paint[i]??gt.find(e=>e.id===i).color,Tt=new Oc({canvas:G("gl"),antialias:!0,powerPreference:"high-performance"}),js=matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>0;js&&document.body.classList.add("touch");var xn=k.gfx==="auto"?js?"medium":"high":k.gfx,$n=xn==="low"?1:Math.min(devicePixelRatio||1,1.5);Tt.setPixelRatio($n);Tt.outputColorSpace=Lt;Tt.toneMapping=ur;Tt.shadowMap.enabled=!0;Tt.shadowMap.type=hr;var Ge=new Cs,qe=new nn(55,1,.3,9e3);Ge.environment=new fa(Tt).fromScene(new Hc,.04).texture;var Ii=new ia(16777215,4473924,1),kt=new Ls(16777215,2.5);kt.castShadow=!0;kt.shadow.mapSize.set(2048,2048);kt.shadow.bias=-5e-4;kt.shadow.normalBias=.04;function qd(){let i=30*(k.zoom||1.5)+18,e=kt.shadow.camera;Object.assign(e,{left:-i,right:i,top:i,bottom:-i,near:1,far:360}),e.updateProjectionMatrix();let t=2048;kt.shadow.mapSize.x!==t&&(kt.shadow.mapSize.set(t,t),kt.shadow.map&&(kt.shadow.map.dispose(),kt.shadow.map=null))}qd();Ge.add(Ii,kt,kt.target);var ln=null;function Bo(){let i=innerWidth,e=innerHeight;Tt.setPixelRatio($n),Tt.setSize(i,e,!1),qe.aspect=i/e,qe.updateProjectionMatrix(),ln&&ln.setSize(i,e,$n)}function zo(i){if(xn=i,$n=i==="low"?1:Math.min(devicePixelRatio||1,1.5),Tt.shadowMap.enabled=kt.castShadow=i!=="low",i==="high"&&!ln)try{ln=new sh(Tt,Ge,qe)}catch(e){console.warn(e),xn="medium"}Bo()}var _h=0;function Hm(i){_h++,xn!=="high"?(Tt.shadowMap.autoUpdate=!1,_h&1&&(Tt.shadowMap.needsUpdate=!0)):Tt.shadowMap.autoUpdate=!0,xn==="high"&&ln?ln.render(i):Tt.render(Ge,qe)}addEventListener("resize",Bo);zo(xn);var gi=null,Vn=null,Bd=0,Gm=1,Vm=1;function Go(i){if(gi&&(Ge.remove(gi),gi.geometry.dispose(),gi.material.dispose(),gi=null),Vn&&(Ge.remove(Vn),Vn.geometry.dispose(),Vn.material.dispose(),Vn=null),ln&&(ln.bloom.strength=i&&i.night?.6:.26,ln.u.sunVis.value=0,ln.u.speed.value=0,ln.u.wet.value=0),!i){Ge.background=new be(1513500),Ge.fog=null,Ii.color.set(14674175),Ii.groundColor.set(3158586),Ii.intensity=.7,kt.color.set(16777215),kt.intensity=2.2,Ge.environmentIntensity=.9,Tt.toneMappingExposure=1;return}gi=vm(i),Ge.add(gi),Ge.background=null,Ge.fog=new qr(i.fog,i.fogD),Ii.color.set(i.hemiS),Ii.groundColor.set(i.hemiG),Ii.intensity=i.hemiI,kt.color.set(i.sun),kt.intensity=i.sunI,Ge.environmentIntensity=i.night?.25:.5,Tt.toneMappingExposure=i.exposure,Bd=i.fogD,Gm=i.sunI,Vm=i.hemiI,i.night||(Vn=new xe(new or(120,24),new rt({color:new be(i.sun).multiplyScalar(16),fog:!1})),Vn.frustumCulled=!1,Ge.add(Vn))}var xi=new yt;Ge.add(xi);{let i=new xe(new yn(4.6,4.8,.25,48),new Me({color:2303275,metalness:.6,roughness:.35}));i.position.y=-.125,i.receiveShadow=!0,xi.add(i);let e=new xe(new lr(4.75,.06,8,64),new rt({color:16761370}));e.rotation.x=Math.PI/2,e.position.y=.01,xi.add(e);let t=new xe(new or(60,32),new Me({color:1513500,roughness:.9}));t.rotation.x=-Math.PI/2,t.position.y=-.25,t.receiveShadow=!0,xi.add(t)}var Qn=null;function vr(){Qn&&(xi.remove(Qn.root),Qn.dispose());let i=gt[fe.car];Qn=new Ki(i,Aa(i.id),"",Ks(i.id),br(i.id),Th(i.id)),Qn.root.rotation.y=zd,xi.add(Qn.root),cM()}var zd=.6,En={},Zn={},Te=new lh;Te.on=!k.muted;addEventListener("keydown",i=>{if(i.target.tagName!=="INPUT"&&(En[i.code]=!0,Te.init(),["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(i.code)&&i.preventDefault(),!!Zi())){if((i.code==="Escape"||i.code==="KeyP")&&Yd(),i.code==="KeyR"&&Km(b.player,!0),i.code==="KeyM"&&Xd(!k.muted),i.code==="KeyH"&&Te.horn(),k.dev){let e=b.player;i.code==="F2"&&(e.repair(),e.fuel=1,Yt("DEV: repaired and refuelled")),i.code==="F3"&&(b.rainAt=b.wet>0?1/0:0,b.wet>0&&(b.wet=0,b.track.wet=0),Yt("DEV: rain toggled")),i.code==="F4"&&(e.hitL=[.6,e.zf],e.hitN=[-Math.sin(e.th),-Math.cos(e.th)],e.hitX=e.x,e.hitZ=e.z,qs(e,18),Yt("DEV: front impact")),i.code==="F6"&&(e.fuel=.04,Yt("DEV: fuel nearly empty")),i.code==="F7"&&(e.prog+=b.track.n-30,Yt("DEV: skipped to the end of the lap")),i.code.startsWith("F")&&i.preventDefault()}i.code==="KeyT"&&(G("tele").hidden=!G("tele").hidden)}});addEventListener("keyup",i=>{En[i.code]=!1});addEventListener("blur",()=>{for(let i in En)En[i]=!1});var _n={steer:0,throttle:0,brake:0,hand:!1,nitro:!1};function Wm(){let i=En.ArrowLeft||En.KeyA||Zn.left,e=En.ArrowRight||En.KeyD||Zn.right;_n.steer=(i?1:0)-(e?1:0),Zn.steerOn&&(_n.steer=Zn.steerVal),_n.throttle=En.ArrowUp||En.KeyW||Zn.gas?1:0,_n.brake=En.ArrowDown||En.KeyS||Zn.brake?1:0,_n.hand=!!(En.Space||Zn.hand),_n.nitro=!!(En.ShiftLeft||En.ShiftRight||En.KeyN||Zn.nitro);let t=navigator.getGamepads?[...navigator.getGamepads()].find(n=>n):null;return t&&(Math.abs(t.axes[0])>.12&&(_n.steer=-t.axes[0]),_n.throttle=Math.max(_n.throttle,t.buttons[7]?.value||0),_n.brake=Math.max(_n.brake,t.buttons[6]?.value||0),_n.hand=_n.hand||!!t.buttons[0]?.pressed,_n.nitro=_n.nitro||!!t.buttons[2]?.pressed||!!t.buttons[5]?.pressed),js&&k.autoGas&&!t&&!_n.brake&&(_n.throttle=1),_n}if("ontouchstart"in window||navigator.maxTouchPoints>0){G("touch").hidden=!1;for(let i of document.querySelectorAll("#touch .t")){let e=t=>n=>{n.preventDefault(),Zn[i.dataset.k]=t,i.classList.toggle("on",t),Te.init()};i.addEventListener("pointerdown",t=>{try{i.setPointerCapture(t.pointerId)}catch{}e(!0)(t)});for(let t of["pointerup","pointercancel","lostpointercapture"])i.addEventListener(t,e(!1))}}{let i=G("steer"),e=i.querySelector("i"),t=null,n=r=>{let a=i.getBoundingClientRect(),o=Zt((r.clientX-(a.left+a.width/2))/(a.width*.36),-1,1);e.style.transform=`translateX(${o*a.width*.33}px)`,o=Math.sign(o)*Math.pow(Math.abs(o),1.35),Zn.steerVal=-o,Zn.steerOn=!0},s=r=>{t!==null&&r.pointerId!==t||(t=null,Zn.steerOn=!1,Zn.steerVal=0,e.style.transform="",i.classList.remove("on"))};i.addEventListener("pointerdown",r=>{r.preventDefault(),t=r.pointerId;try{i.setPointerCapture(t)}catch{}i.classList.add("on"),n(r),Te.init()}),i.addEventListener("pointermove",r=>{r.pointerId===t&&n(r)});for(let r of["pointerup","pointercancel","lostpointercapture"])i.addEventListener(r,s);addEventListener("contextmenu",r=>{js&&r.preventDefault()})}function Xd(i){k.muted=i,Ut(),Te.setMuted(i),G("muteBtn").textContent=i?"Sound off":"Sound on"}var Pm=0;function Yt(i){let e=G("toast");e.textContent=We(i),e.classList.add("show"),clearTimeout(Pm),Pm=setTimeout(()=>e.classList.remove("show"),2200)}var Im=0;function en(i,e=!1,t=1500){if(b&&b.attract)return;let n=G("msg");n.textContent=We(i),n.className="show"+(e?" warn":""),clearTimeout(Im),t&&(Im=setTimeout(()=>n.className="",t))}var ft=(i,e)=>{G(i).hidden=!e},b=null,Ws=!1,qm=0,Uo=0,Sa=0,Xm=[{name:"Circuit",fixed:!0,d:43,h:48,fov:30}],Hd=0,jd=0,Lm={position:new U},De={yaw:0,pos:new U,look:new U,fov:55},Xs=1/120,jm=["Omar","Youssef","Karim","Nour","Laila","Tarek","Mona","Ziad","Hana","Sherif","Salma","Hassan","Farida","Adel"],yh=0,Dm=["Tap the handbrake (Space) on corner entry to kick the tail out.","Drifting refills your nitro much faster than driving straight.","Lift off early \u2014 the kerbs are fine, the grass is not.","Longer drifts multiply your score. Touch a wall and the combo is gone.","Press C to change camera, R to get back on track."];function ko(i,e){let t=b.track.gridSlot(e);i.reset(t.x,t.z,t.th),i.idx=t.idx,i.prog=t.idx-b.track.n,i.lap=-1,i.lapStart=0,i.laps=[],i.finished=!1,i.finishTime=null,i.wrong=0}function Km(i,e){if(b&&e&&i.stranded&&b.state==="go")return eg(i);if(!b||e&&(b.state!=="go"||b.t-(i.lastReset||-9)<1.5))return;let t=b.track.path[i.idx],n=i.nitro;i.reset(t.x,t.z,Math.atan2(t.tx,t.tz)),i.nitro=n,i.lastReset=b.t,i.holdT=b.t+He.reset.penalty,i===b.player&&e&&en("Reset  +"+He.reset.penalty+"s",!0,1300),i===b.player&&(De.yaw=i.th,b.D.combo=0)}async function Ji(i){xr.stop(),wh(),b&&Ra();let e=++yh;window.__crowdK=xn==="high"?.6:xn==="medium"?.4:.22,i.attract||(Te.init(),ft("menu",!1),ft("results",!1),ft("pause",!1),ft("loading",!0));let t=Sn.find(h=>h.id===i.track);G("loadName").textContent=t.name,G("loadBar").style.width="4%",G("loadTip").textContent=Dm[Math.random()*Dm.length|0],xi.visible=!1,$d=!1;let n;try{n=await bm(i.track,h=>{G("loadBar").style.width=Math.round(4+h*92)+"%"})}catch(h){console.error(h),ft("loading",!1),Ea(),Yt("Could not load that track");return}if(e!==yh){n.dispose();return}if(xn==="low"&&n.fancyLights)for(let h of n.fancyLights)h.visible=!1;Ge.add(n.group),Go(n.theme),b={...i,track:n,cars:[],ais:new Map,t:0,state:"wait",countT:3.6,drift:0,D:{combo:0,time:0,mult:1,grace:0},fx:null,sendT:0,waitT:0,bestThisRace:null},b.rules=i.rules||"circuit",b.arc=b.rules==="arcade"||i.mode==="drift",b.fx={smoke:new Gs(Ge,2600),glow:new Gs(Ge,900,!0),skids:new Po(Ge)},b.ambient=new Zc(Ge),b.debris=new $c(Ge);let s=gt.find(h=>h.id===k.car),r=Ks(s.id),a=b.player=new Ki(s,Aa(s.id),k.name,r,br(s.id),Th(s.id));a.assistK=He.assist[k.assist]??.7,a.tc=k.tc,a.abs=k.abs,a.steerK=k.sens,a.isPlayer=!0,a.driftable=!0,a.dmgScale=1-.18*r.armor;let o=Math.max(1.5,(t.width?t.width/2:6.2)-2.6),l=h=>({skill:h,wide:o*.7,lane:(Math.random()-.5)*o,max:o,care:i.rules==="arcade"?.7:1.3,off:0,inp:{steer:0,throttle:0,brake:0,hand:!1,nitro:!1},boost:1});if(b.ais.set(a,l(.95)),i.mode==="race"){let h=[.8,.89,.97][i.diff],u=gt.filter(x=>x.id!==s.id).sort(()=>Math.random()-.5),d=[...jm].sort(()=>Math.random()-.5),f=i.rivals,p=f?f.length:i.nRivals||5;for(let x=0;x<p;x++){let g=f?gt.find(y=>y.id===f[x].car):u[x%u.length],m=new Ki(g,f&&f[x].paint!=null?f[x].paint:Hs[(x*2+1+(Math.random()*2|0))%Hs.length],f?f[x].name:d[x],void 0,{wing:Math.random()*4|0,split:Math.random()*2|0,rim:Math.random()*Kc.length|0});b.ais.set(m,l(f?f[x].skill:h+(4-x)*.012+Math.random()*.015)),m.assistK=.7,b.cars.push(m),ko(m,x)}b.cars.push(a),ko(a,p)}else if(i.mode==="online"){if(b.cars.push(a),ko(a,bi?0:1),Nt){let h=gt.find(d=>d.id===Nt.car)||gt[0],u=b.remote=new Ki(h,Nt.paint??h.color,Nt.name||"Rival",Nt.up,Nt.look);u.isRemote=!0,u.look=tf(Nt),b.cars.push(u),ko(u,bi?1:0)}it.send({k:"me",i:ef()})}else b.cars.push(a),ko(a,0);for(let h of b.cars)Ge.add(h.root),h.y=n.height(h.x,h.z),h.render(.016,n);Yy(),i.attract||Te.music(!1),bs.cond="",De.yaw=a.th,De.pos.set(a.x-Math.sin(a.th)*30,a.y+22,a.z-Math.cos(a.th)*30),De.look.set(a.x,a.y,a.z),eM(),G("hPosOf").textContent="/"+b.cars.length,G("hLapOf").textContent="/"+b.laps,G("order").innerHTML="",b.orderKey="",G("hBest").textContent=k.best[t.id]?li(k.best[t.id]):"\u2014",G("hSec").textContent="",G("hSec").className="";let c=b.cars.length<2;G("order").hidden=c,G("hPosBox").style.visibility=c?"hidden":"visible",ft("hPingRow",i.mode==="online"),ft("hArc",b.arc),document.querySelector("#touch .n").hidden=b.rules!=="arcade";for(let h in bs)delete bs[h];if(ft("loading",!1),ft("hud",!i.attract),Ws=!1,Sa=0,Oo=performance.now(),Te.quiet=!!i.attract,Te.setCar(s),i.attract){b.attract=!0,b.demo=!0,b.state="go";return}i.mode==="online"?(it.send({k:"loaded"}),en("Waiting for rival\u2026",!1,0),Nt?Kd():Mh()):Mh()}function Mh(){if(!(!b||b.state!=="wait")){b.state="count",b.countT=3.6,b.lightN=0,G("msg").className="",G("lights").classList.add("show");for(let i of G("lights").children)i.className=""}}function Kd(){b&&b.mode==="online"&&bi&&b.state==="wait"&&$d&&(it.send({k:"go"}),Mh())}function Ra(){if(b){for(let i of b.cars)Ge.remove(i.root),i.dispose();for(let i of[b.fx.smoke,b.fx.glow])Ge.remove(i.points),i.geo.dispose(),i.mat.dispose();for(let i of[...b.spots||[],...b.glows||[]])Ge.remove(i),i.target&&Ge.remove(i.target),i.dispose();Ge.remove(b.fx.skids.mesh),b.fx.skids.geo.dispose(),b.ambient.dispose(),b.debris.dispose(),Ge.remove(b.track.group),b.track.dispose(),b=null,Te.silence(),ft("hud",!1),ft("pause",!1),ft("results",!1),G("lights").classList.remove("show"),G("msg").className=""}}function Ea(){Ra(),Ta="",fe.tab==="career"&&(fe.ev=sg(),fe.ch=Pi[fe.ev].ci),Go(null),xi.visible=!0,ft("menu",!0),ht(),Te.music(!0)}function Yd(){!b||b.state==="over"||(Ws=!Ws,ft("pause",Ws),G("zoomVal").textContent=Math.round(k.zoom/1.5*100)+"%",Ws?Te.silence():Oo=performance.now(),b.mode==="online"&&(Ws=!1))}function Hy(i){if(i.out)return;let e=b.track,t=e.n,n=e.nearest(i.x,i.z,i.idx),s=n-i.idx;if(s>t/2&&(s-=t),s<-t/2&&(s+=t),i.idx=n,i.prog+=s,i===b.player&&b.state==="go"&&i.lap>=0){let a=Math.min(2,Math.floor((i.prog%t+t)%t/(t/3)));a!==i.sec&&(i.sec!=null&&s>0&&a===(i.sec+1)%3&&Gy(i,i.sec),i.sec=a,i.secStart=b.t)}let r=Math.floor(i.prog/t);if(r>i.lap&&b.state!=="count"&&b.state!=="wait"){let a=i.lap<0;if(i.lap=r,!a){let o=(b.t-i.lapStart)*1e3;i.laps.push(o),i===b.player&&Vy(o),b.elim&&b.state==="go"&&Ca().filter(l=>!l.out)[0]===i&&Wy()}i.fuelLap!=null&&i.fuelLap>i.fuel&&(i.fpl=i.fuelLap-i.fuel),i.fuelLap=i.fuel,i.lapStart=b.t,i.lap>=b.laps&&!i.finished&&(i.finished=!0,i.finishTime=b.t*1e3,i===b.player&&Gd())}}function Gy(i,e){let t=b.track.def.id,n=(b.t-i.secStart)*1e3,s=(k.sectors[t]||(k.sectors[t]=[]))[e],r=G("hSec");r.textContent="S"+(e+1)+"  "+(n/1e3).toFixed(2)+(s?"  "+(n<s?"\u2212":"+")+(Math.abs(n-s)/1e3).toFixed(2):""),r.className=!s||n<s?"good":"slow",(!s||n<s)&&(k.sectors[t][e]=Math.round(n),Ut())}function Vy(i){let e=b.track.def.id,t=k.best[e];(b.bestThisRace==null||i<b.bestThisRace)&&(b.bestThisRace=i),!t||i<t?(k.best[e]=i,Ut(),G("hBest").textContent=li(i),en("Best lap "+li(i)),b.newBest=!0,Em(e,k.name,gt.find(n=>n.id===k.car).name,i),Te.beep(880,.25)):b.player.lap===b.laps-1?en("Final lap"):en(li(i))}function Gd(){b.state="done",b.doneT=0,Ym(),Te.beep(1040,.5),en("Finish",!1,1400),b.mode==="online"&&it.send({k:"fin",t:b.t*1e3})}function Ym(){let i=b.D;i.combo>0&&(b.drift+=Math.round(i.combo),i.combo=0,i.time=0)}function Ca(){return[...b.cars].sort((i,e)=>i.out||e.out?i.out&&e.out?e.out-i.out:i.out?1:-1:i.finished&&e.finished?i.finishTime-e.finishTime:i.finished?-1:e.finished?1:e.prog-i.prog)}function Wy(){let i=Ca().filter(n=>!n.out);if(i.length<2)return;let e=i[i.length-1],t=b.player;e.out=b.outN=(b.outN||0)+1,e!==t&&(Ge.remove(e.root),e.x=e.z=1e5,en(e.name+" "+We("is out"),!0,1400)),e===t?(t.finished=!0,t.finishTime=b.t*1e3,en("Knocked out",!0,1600),Gd()):i.length===2&&i[0]===t&&(t.finished=!0,t.finishTime=b.t*1e3,Gd())}function qs(i,e,t){if(e<2)return;let n=b.player,s=(i.x-n.x)**2+(i.z-n.z)**2<3600;if(e<4){i===n&&Math.random()<.2&&(Te.scrape(e),i.impactFX(b.fx,b.track,e*.4));return}let r=i.damage(e,!t);if(i.glass&&(i.glass=!1,s))for(let a=0;a<18;a++)b.fx.glow.emit(i.hitX,i.y+.6,i.hitZ,i.vx*.5+(Math.random()-.5)*8,1+Math.random()*4,i.vz*.5+(Math.random()-.5)*8,.5+Math.random()*.4,.09,0,.85,.95,1,1,14);if(i===n&&(e>8&&b.crashes++,r>0&&b.mode==="online"&&it&&it.send({k:"d",l:n.hitL,n:n.hitN,p:+e.toFixed(1)})),s&&i.impactFX(b.fx,b.track,e),i.lost.length||r>.06){let a=new U,o=new Ln,l=new U,c=i.hitN||[0,0];for(let h of i.lost)h.updateWorldMatrix(!0,!1),h.matrixWorld.decompose(a,o,l),b.debris.spawn(h.geometry,h.material,a.clone(),o.clone(),l.clone(),new U(i.vx*.7+c[0]*3,3+Math.random()*3,i.vz*.7+c[1]*3)),h.visible=!1;if(i.lost.length=0,s&&r>.06)for(let h=0;h<Math.min(3,1+r*8|0);h++)b.debris.spawn(new Qe(.5+Math.random()*.7,.04,.25+Math.random()*.3),i.m.paint,new U(i.hitX,i.y+.5,i.hitZ),null,null,new U(i.vx*.6+c[0]*(2+Math.random()*4)+(Math.random()-.5)*4,3+Math.random()*4,i.vz*.6+c[1]*(2+Math.random()*4)+(Math.random()-.5)*4))}if(i!==n){s&&Te.crash(e*.35);return}js&&navigator.vibrate&&navigator.vibrate(Math.min(90,e*5)),Te.crash(e),Uo=Math.min(1.2,Uo+e/13),Hd=Math.min(1,e/14),jd=Math.min(6,e*.35),b.D.combo>30&&en("Combo lost",!0,900),b.D.combo=0,b.D.time=0,r>.02&&!b.attract&&(n.health<.55||n.dmg.front>.6)&&!b.warned&&(b.warned=!0,Yt("Car damaged \u2014 stop in the blue pit box to repair"))}function Jm(i,e){let t=b.track,n=b.player,s=b.state==="done"||b.state==="over"||b.demo,r=b.pit&&b.pit.busy||b.t<(n.holdT||0),a=s?b.ais.get(n).inp:r?Fm:Wm();if(b.demo==="keys"){let o=b.ais.get(n).inp;a={steer:Math.abs(o.steer)>.15?Math.sign(o.steer):0,throttle:o.throttle>.3?1:0,brake:o.brake>.2?1:0,hand:!1,nitro:!1}}qs(n,n.step(i,a,t,e),!0),r&&(n.vx=n.vz=n.r=0);for(let o of b.cars)if(o!==n&&!o.isRemote&&!o.out){let l=b.ais.get(o);qs(o,o.step(i,b.t<(o.holdT||0)?Fm:l.inp,t,e,l.boost||1),!0)}for(let o=0;o<b.cars.length;o++)for(let l=o+1;l<b.cars.length;l++){let c=b.cars[o],h=b.cars[l];if(!(c.out||h.out||Math.abs(c.x-h.x)>6||Math.abs(c.z-h.z)>6))if(h.isRemote||c.isRemote){let u=h.isRemote?c:h,d=u.bump(h.isRemote?h:c,!0);qs(u,d),d>1.5&&it&&b.t-(b.hitSent||-9)>.15&&(b.hitSent=b.t,u.lastHitT=b.t,it.send({k:"hit",n:u.hitN,v:+d.toFixed(1)}))}else{let u=c.bump(h,!1);u>0&&(qs(c,u*.8),qs(h,u*.8))}}}var Fm={steer:0,throttle:0,brake:1,hand:!0,nitro:!1},Sh=[["eng","Engine"],["tyre","Tyres"],["nitro","Nitro"],["armor","Armour"]],Ks=i=>k.up[i]||(k.up[i]={eng:0,tyre:0,nitro:0,armor:0}),Zm=(i,e)=>Math.round([500,1300,2800][Math.min(e,2)]*(1+i.price/6e3)/50)*50,Yi=i=>k.stats[i]||0,$m=[{id:"win1",name:"First blood",desc:"Win a race",need:1,get:()=>Yi("wins")},{id:"pod10",name:"Podium regular",desc:"Finish on the podium 10 times",need:10,get:()=>Yi("podiums")},{id:"clean",name:"Clean hands",desc:"Win a race without a single hard hit",need:1,get:()=>Yi("clean")},{id:"dr3",name:"Sideways",desc:"Score 3,000 drift points in one run",need:3e3,get:()=>Yi("driftBest")},{id:"dr8",name:"Smoke machine",desc:"Score 8,000 drift points in one run",need:8e3,get:()=>Yi("driftBest")},{id:"ot50",name:"Overtaker",desc:"Make 50 overtakes",need:50,get:()=>Yi("overtakes")},{id:"pit10",name:"Pit crew favourite",desc:"Complete 10 pit stops",need:10,get:()=>Yi("pits")},{id:"coin",name:"Coin collector",desc:"Collect 2,000 credits on track",need:2e3,get:()=>Yi("coins")},{id:"km100",name:"Road trip",desc:"Drive 100 km",need:100,get:()=>Yi("km")},{id:"day5",name:"Daily habit",desc:"Reach a 5-day challenge streak",need:5,get:()=>k.streak||0},{id:"gar",name:"Full garage",desc:"Own all 14 cars",need:14,get:()=>k.owned.length},{id:"gp",name:"Grand Prix champion",desc:"Win a Grand Prix",need:1,get:()=>Yi("gpWins")}];function Jd(){let i=0;for(let e of $m)!k.trophies[e.id]&&e.get()>=e.need&&(k.trophies[e.id]=1,k.credits+=300,i++,Yt("Trophy: "+e.name+" \u2014 +300 credits"));i&&(Ut(),(!b||b.state==="over")&&(G("credits").textContent=k.credits.toLocaleString()))}var Nm=0,Vd=-9;function gn(i,e){if(!b||b.attract||!e&&b.t-Vd<6)return;Vd=b.t;let t=G("radio");t.lastElementChild.textContent=We(i),t.classList.add("show"),clearTimeout(Nm),Nm=setTimeout(()=>t.classList.remove("show"),4e3),Te.tone(1250,.05,.05),Te.tone(950,.07,.04)}var Qm=i=>{let e=i.parts,t=e.wheels.filter(n=>n>.15).length;return[["Tyres",i.tyre<.92||t?He.pit.tyres+t*.6:0],["Fuel",i.fuelK>0?(1-i.fuel)*He.pit.fuelFull:0],["Engine",e.engine*4],["Gearbox",e.gearbox*3.5],["Bodywork",(i.dmg.front+i.dmg.rear+i.dmg.left+i.dmg.right)/4*He.pit.repairFull]].filter(n=>n[1]>.15)};function eg(i){let e=b.ais.get(i),t=(i===b.player?b.pit:e&&e.box)||b.pit,n=t.th??Math.atan2(b.track.path[0].tx,b.track.path[0].tz);i.reset(t.x,t.z,n),i.repair(),i.fuel=1,i.idx=b.track.nearest(t.x,t.z),i.holdT=b.t+He.parts.towSeconds,e&&(e.pitT=0),i===b.player?(De.yaw=i.th,en("Towed to the pits  +"+He.parts.towSeconds+"s",!0,2500),gn("Recovery truck has you. Rebuild will cost about "+He.parts.towSeconds+" seconds.",!0)):en(i.name+" "+We("is towed in"),!1,1200)}function qy(i,e,t){let n=i.parts,s=i.fuelK>0&&i.fuel<Math.max(.07,(i.fpl||.15)*1.15);if(!(i.health<.4||n.engine>.6||n.gearbox>.7||n.wheels.some(u=>u>.7)||i.tyre<.28||s||e.pitT>0))return;let r=e.box||b.pit,a=r.x-i.x,o=r.z-i.z,l=Math.hypot(a,o),c=a*Math.sin(i.th)+o*Math.cos(i.th);if(l>60||c<-1&&!e.pitT)return;let h=l<3?0:Math.min(28,Math.sqrt(12*(l-2)));e.inp.steer=l>2.5?Zt(vh(Math.atan2(a,o)-i.th)*2.5,-1,1):0,e.inp.throttle=i.speed<h?.7:0,e.inp.brake=i.speed>h+1&&i.vf>2?1:0,e.inp.nitro=!1,l<3.4&&i.speed<4&&(i.vx*=.8,i.vz*=.8,e.inp.throttle=0,e.pitT||(e.pitNeed=Qm(i).reduce((u,d)=>u+d[1],0)),e.pitT=(e.pitT||0)+t,e.pitT>e.pitNeed&&(i.repair(),i.fuel=1,i.wetTyres=b.wet>.4,e.pitT=0,b.aiPits=(b.aiPits||0)+1))}function xh(i){let e=b.ev,t=e.cur;t&&(t.pick&&t.pick.t!==1/0&&(t.pick.t=1/0),t.pick&&(t.pick.m.visible=!1),e.cur=null,e.next=b.t+20+Math.random()*16,Wn("hEvent",""),i&&en(i,/missed/.test(i),1300))}function tg(){let i=b.track,e=b.player,t=i.n,n=b.ev,s=["oil","rush","gold","haze","trap"].concat(b.mode==="race"&&b.cars.length>1?["bounty","bounty"]:[]).filter(c=>c!==n.last),r=s[Math.random()*s.length|0],a=n.cur={type:r,t:0};n.last=r;let o="",l=(c,h)=>{let u=i.path[(e.idx+Math.round(c/i.spacing))%t],d=u.x+u.tz*h,f=u.z-u.tx*h;return{x:d,z:f,y:i.height(d,f)}};if(r==="oil"){a.t=6,o="Oil on track";for(let c of[140,260]){let h=l(c,(Math.random()-.5)*5),u=new xe(new or(2.7,22),new Me({color:263173,roughness:.04,metalness:.95,transparent:!0,opacity:.88,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-7,polygonOffsetUnits:-7}));u.rotation.x=-Math.PI/2,u.position.set(h.x,h.y+.06,h.z),i.group.add(u),b.slicks.push({x:h.x,z:h.z,m:u,until:b.t+45})}gn("Oil on the track ahead. Dark patches \u2014 stay off them.",!0)}else if(r==="rush")a.t=12,o="Nitro rush",gn("Nitro rush! Tanks are refilling, use it.");else if(r==="gold"){a.t=26,o="Golden coin";let c=l(170,(Math.random()-.5)*4),h=new xe(b.coinG,b.coinM);h.scale.setScalar(2),h.position.set(c.x,c.y+1.4,c.z),i.group.add(h),a.pick={x:c.x,z:c.z,y:c.y+1.4,m:h,nitro:!1,gold:!0,t:0},b.picks.push(a.pick),gn("Golden coin on the racing line. Worth 200.")}else r==="haze"?(a.t=16,o=i.def.theme==="desert"?"Sandstorm":"Fog bank",gn(o+" rolling in. Trust the lines.",!0)):r==="trap"?(a.kmh=Math.round(e.spec.top*3.6*.78/10)*10,a.t=20,o="Speed trap "+a.kmh+" km/h",gn("Speed trap is live. Hit "+a.kmh+" for a bonus.")):(a.t=24,o="Bounty: overtake",gn("Bounty on the car ahead. Take the place, take the money."));a.label=o,en(o,r==="oil"||r==="haze",1500),Te.beep(520,.2)}function Xy(i){let e=b.track,t=b.player,n=b.ev;if(b.state!=="go")return;for(let a of b.cars){if(a.isRemote)continue;let o=0;if(b.rules==="arcade"&&a.speed>20){let l=Math.sin(a.th),c=Math.cos(a.th);for(let h of b.cars){if(h===a)continue;let u=h.x-a.x,d=h.z-a.z,f=u*l+d*c,p=u*c-d*l;f>4&&f<24&&Math.abs(p)<1.7&&(o=Math.max(o,1-(f-4)/20))}}a.draft+=(o-a.draft)*Math.min(1,i*3)}if(Wn("hTow",We(t.burn?"Burnout":t.wspin>.25||t.wspinF>.25?"Wheelspin":Math.abs(t.beta)>.16&&t.speed>9?"Oversteer":t.useF>1.03&&t.useR<.9&&t.speed>10&&Math.abs(t.steer)>.08?"Understeer":t.draft>.25?"Slipstream":"")),t.draft>.25&&Math.random()<.5){let a=Math.random()*6.28;b.fx.smoke.emit(t.x+Math.cos(a)*2.5+Math.sin(t.th)*6,t.y+.5+Math.random()*1.5,t.z+Math.sin(a)*2.5+Math.cos(t.th)*6,-t.vx*.6,0,-t.vz*.6,.25,.12,0,1,1,1,.25)}t.draft>.4&&!b.towSaid&&(b.towSaid=!0,gn("You\u2019re in the tow. Stay tucked in, pull out late."));let s=Ca().indexOf(t)+1;if(b.lastPos&&b.t>6&&b.cars.length>1&&!t.finished&&(s<b.lastPos?(b.coins+=40,b.overtakes++,en("+40 overtake",!1,700),gn(s===1?"P1! You lead. Keep it clean.":"P"+s+". Next one is just ahead."),n.cur&&n.cur.type==="bounty"&&(b.coins+=150,xh("Bounty paid: +150"))):s>b.lastPos&&gn("Lost a place. P"+s+". Stay calm, take it back.")),b.lastPos=s,t.tyre<.3&&!b.saidTyre&&(b.saidTyre=!0,gn("Tyres are nearly gone. Box at the blue pit.",!0)),t.lap===b.laps-1&&!b.saidLast&&b.laps>1&&(b.saidLast=!0,gn("Last lap. Everything you have.",!0)),b.attract)return;b.t>1&&!b.saidGo&&(b.saidGo=!0,gn(b.story?"Radio check. Clean first corner, then push.":"Lights out. Clean first corner.",!0)),b.slicks=b.slicks.filter(a=>a.until>b.t||(e.group.remove(a.m),!1));for(let a of b.slicks)for(let o of b.cars)!o.isRemote&&o.oil<=0&&(o.x-a.x)**2+(o.z-a.z)**2<7.5&&(o.oil=o===t?1.1:.4,o===t&&gn("Oil! Easy on the wheel.",!0));if(t.fuel<.15&&!b.saidFuel&&(b.saidFuel=!0,gn("Fuel is low. Box this lap or you will not make it.",!0)),t.fuel<=0&&!b.saidDry&&(b.saidDry=!0,gn("We are out of fuel. Coast it to the pit lane.",!0)),b.mode==="online"||b.rules!=="arcade")return;let r=n.cur;if(r){if(r.t-=i,Wn("hEvent",r.label+(r.type==="oil"?"":"  "+Math.ceil(r.t)+"s")),r.type==="rush")for(let a of b.cars)a.nitro=Math.min(1,a.nitro+i*.22);r.type==="trap"&&Math.abs(t.vf)*3.6>=r.kmh?(b.coins+=120,xh("Speed trap beaten: +120")):r.t<=0&&xh(r.type==="bounty"||r.type==="trap"||r.type==="gold"?"Challenge missed":null)}else b.t>n.next&&!t.finished&&tg()}function jy(){b.spots=[],b.glows=[],b.madeSpots=b.madeGlows=!1;for(let i=0;i<4;i++)Tn.c[i].set(0,0,0,0)}function km(i){let e=i?xn==="high"?2:xn==="medium"?1:0:xn==="low"?0:1;i?b.madeSpots=!0:b.madeGlows=!0,i?b.spots=[]:b.glows=[];let t=i?e:0,n=i?0:e;for(let s=0;s<t;s++){let r=new di(16773330,0,62,.44,.7,1.25);s===0&&k.gfx==="high"&&(r.castShadow=!0,r.shadow.mapSize.set(1024,1024),r.shadow.camera.near=.6,r.shadow.camera.far=62,r.shadow.bias=-.0015,r.shadow.normalBias=.05),Ge.add(r,r.target),b.spots.push(r)}for(let s=0;s<n;s++){let r=new hs(16777215,0,9,1.5);Ge.add(r),b.glows.push(r)}for(let s=0;s<4;s++)Tn.c[s].set(0,0,0,0)}function Ky(i){b.lit&&!b.madeSpots&&km(!0),!b.madeGlows&&b.cars.some(c=>c.glowPool)&&km(!1);let e=b.player,t=b.attract?b.cars[Math.floor(Math.max(0,b.t)/7)*3%b.cars.length]:e,n=b.track.theme.night?1:b.track.def.theme==="coast"?.75:.45+.3*b.wet,s=b.cars.filter(c=>!c.out).sort((c,h)=>(c===t?-1:h===t?1:0)||(c.x-t.x)**2+(c.z-t.z)**2-((h.x-t.x)**2+(h.z-t.z)**2)),r=s.filter(c=>c.lightsOn&&c.lamps.some(h=>h.ok)),a=Math.min(1,i*10);b.spots.forEach((c,h)=>{let u=r[h];if(!u){c.intensity+=(0-c.intensity)*a,Tn.c[h].w=0;return}let d=u.root.rotation.y,f=Math.sin(d),p=Math.cos(d),x=u.lamps[0].ok,g=u.lamps[1].ok,m=x&&g?0:x?.5:-.5,y=u.root.position.x+f*(u.zf+.1)+p*m,M=u.root.position.z+p*(u.zf+.1)-f*m;c.position.set(y,u.y+.62,M),c.target.position.set(y+f*22,u.y-.9,M+p*22),c.intensity+=((x&&g?150:80)*n-c.intensity)*a,Tn.p[h].copy(c.position),Tn.d[h].set(f,-.07,p).normalize(),Tn.c[h].set(1,.93,.78,(x&&g?1:.55)*n)});let o=s.filter(c=>c.look&&c.look.glow&&c.glowPool);b.glows.forEach((c,h)=>{let u=o[h];if(!u){c.intensity+=(0-c.intensity)*a;return}c.color.setHex(Yc[u.look.glow]),c.position.set(u.root.position.x,u.y+.28,u.root.position.z),c.intensity+=((b.track.theme.night?9:4)-c.intensity)*a});let l=.68+.1*Math.sin(performance.now()/420);for(let c of b.cars)c.glowPool&&(c.glowPool.material.opacity=l*(b.track.theme.night?1:.6))}function Um(i,e,t,n){let s=b.track.group,r=i.th,a=Math.sin(r),o=Math.cos(r),l=Math.cos(r),c=-Math.sin(r),h=null;if(n){let A=document.createElement("canvas");A.width=128,A.height=256;let S=A.getContext("2d");S.fillStyle="#ffc21a",S.fillRect(0,0,128,256),S.strokeStyle="#17181c",S.lineWidth=12;for(let C=-128;C<256;C+=36)S.beginPath(),S.moveTo(0,C+128),S.lineTo(128,C),S.stroke();S.clearRect(14,14,100,228),S.fillStyle="rgba(255,194,26,.35)",S.fillRect(14,14,100,228);let E=new Dn(A);E.colorSpace=Lt,h=new xe(new Qt(3.8,7.4),new rt({map:E,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-6})),h.rotation.set(-Math.PI/2,0,Math.PI-r),h.position.set(i.x,.08,i.z),s.add(h)}let u=document.createElement("canvas");u.width=256,u.height=64;let d=u.getContext("2d");d.fillStyle=n?"#e3262e":"#1c4ea8",d.fillRect(0,0,256,64),d.fillStyle="#fff",d.font="900 38px Rubik, Arial Black, sans-serif",d.textAlign="center",d.textBaseline="middle",d.fillText((t||"YOU").toUpperCase().slice(0,9),128,34);let f=new Dn(u);f.colorSpace=Lt;let p=new xe(new Qe(3.6,.9,.12),new rt({map:f}));p.position.set(i.x+l*2.7,3.4,i.z+c*2.7),p.rotation.y=r+Math.PI/2,s.add(p);for(let A of[-1.7,1.7]){let S=new xe(new Qe(.1,3,.1),new Me({color:2830134}));S.position.set(i.x+l*2.7+a*A,1.5,i.z+c*2.7+o*A),s.add(S)}let x=new Me({color:new be(e),roughness:.7}),g=new Me({color:1513500,roughness:.6}),m=new Me({color:15987958,roughness:.35}),y=new Me({color:789517,roughness:.9}),M=()=>{let A=new yt,S=new xe(new si(.19,.42,3,8),x);S.position.y=1.02;let E=new xe(new si(.15,.5,3,8),g);E.position.y=.45;let C=new xe(new zn(.17,10,8),m);C.position.y=1.52;let L=N=>{let V=new yt;V.position.set(N*.25,1.28,0);let O=new xe(new si(.06,.42,2,6),x);return O.position.y=-.24,V.add(O),A.add(V),V};return A.add(S,E,C),{g:A,aL:L(1),aR:L(-1)}},_=new xe(new yn(.35,.35,1.3,12),new Me({color:14886446,metalness:.4,roughness:.4}));return _.position.set(i.x+l*2.9-a*2.4,.65,i.z+c*2.9-o*2.4),s.add(_),{crew:[[1.45,1.55],[-1.45,1.55],[1.45,-1.4],[-1.45,-1.4],[1.5,-2.6],[0,3.6]].map(([A,S],E)=>{let C=M(),L=i.x+l*2.6+a*(E-2.5)*1.05,N=i.z+c*2.6+o*(E-2.5)*1.05;if(C.g.position.set(L,0,N),C.g.rotation.y=r-Math.PI/2,s.add(C.g),E<4){let V=new xe(new lr(.26,.13,8,14),y);V.position.set(0,.95,.32),C.g.add(V),C.tyre=V}return Object.assign(C,{hx:L,hz:N,wx:i.x+l*A+a*S,wz:i.z+c*A+o*S,role:E<4?"tyre":E===4?"fuel":"jack",ph:E*1.3})}),pad:h}}function Om(i,e,t,n,s,r){let a=performance.now()/1e3;for(let o of i){let l=t&&(o.role!=="fuel"||s),c=l?o.wx:o.hx,h=l?o.wz:o.hz,u=c-o.g.position.x,d=h-o.g.position.z,f=Math.hypot(u,d);if(f>.08){let p=Math.min(f,7*r);o.g.position.x+=u/f*p,o.g.position.z+=d/f*p,o.g.rotation.y=Math.atan2(u,d),o.g.position.y=Math.abs(Math.sin(a*14+o.ph))*.07,o.aL.rotation.x=Math.sin(a*14+o.ph)*.9,o.aR.rotation.x=-o.aL.rotation.x,o.g.scale.y=1}else if(l){o.g.rotation.y=Math.atan2(e.x-o.g.position.x,e.z-o.g.position.z);let p=o.role==="tyre"?n!=="Fuel":o.role==="fuel"?n==="Fuel":!0;o.g.scale.y=o.role==="tyre"?.72:1,o.g.position.y=0,o.aL.rotation.x=-1.2+(p?Math.sin(a*16+o.ph)*.5:0),o.aR.rotation.x=-1.2+(p?Math.cos(a*16+o.ph)*.5:0),o.tyre&&(o.tyre.visible=n==="Tyres"?Math.sin(a*3+o.ph)>0:!1)}else o.g.scale.y=1,o.g.position.y=0,o.g.rotation.y=(e.th||0)-Math.PI/2,o.aL.rotation.x=o.aR.rotation.x=0,o.tyre&&(o.tyre.visible=!0)}}function Yy(){let i=b.track,e=i.n,t=i.group,n=i.def,s=b.player,r=6;if(i.pitBoxes){let u=i.pitBoxes.length;b.myBox=b.mode==="online"?bi?0:1:b.cars.indexOf(s)%u,b.rivBox=bi?1:0,b.cars.forEach((d,f)=>{let p=b.ais.get(d),x=i.pitBoxes[d===s?b.myBox:d.isRemote?b.rivBox:f%u];d===s?b.pit={x:x.x,z:x.z,t:0,busy:!1,tick:0}:p&&(p.box=x)}),r=n.width/2}else{let u=Math.round(34/i.spacing),d=i.path[u];for(r=0;r<12&&i.surf(d.x-d.tz*(r+.5),d.z+d.tx*(r+.5))===2;)r+=.5;let f=Math.max(2,r-2.1),p=d.x-d.tz*f,x=d.z+d.tx*f,g=i.height(p,x),m=document.createElement("canvas");m.width=128,m.height=256;let y=m.getContext("2d");y.fillStyle="rgba(25,167,206,.55)",y.fillRect(0,0,128,256),y.strokeStyle="#fff",y.lineWidth=10,y.strokeRect(5,5,118,246),y.fillStyle="#fff",y.font="900 54px Rubik, Arial Black, sans-serif",y.textAlign="center",y.fillText("PIT",64,146);let M=new Dn(m);M.colorSpace=Lt;let _=new xe(new Qt(3.6,7.2),new rt({map:M,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-5,polygonOffsetUnits:-5}));_.rotation.set(-Math.PI/2,0,Math.PI-Math.atan2(d.tx,d.tz)),_.position.set(p,g+.07,x),t.add(_),b.pit={x:p,z:x,t:0,busy:!1,tick:0,zone:!0},n.dev&&(_.visible=!1,b.pit.x=b.pit.z=1e6)}if(b.crew=b.crew2=null,i.pitBoxes){let u=i.pitBoxes[b.myBox],d=Um(u,s.color,k.name,!0);if(b.crew=d.crew,b.pit.pad=d.pad,b.pit.th=u.th,b.remote){let f=i.pitBoxes[b.rivBox];b.crew2=Um(f,b.remote.color,b.remote.name,!1).crew,b.pit2={x:f.x,z:f.z,th:f.th}}}let a=new xe(new yn(.08,.08,4,8),new rt({color:new be(1681358).multiplyScalar(2.2)}));a.position.set(b.pit.x,i.height(b.pit.x,b.pit.z)+5,b.pit.z),t.add(a);let o=new xe(new Kn(.42,.7,4),new rt({color:16777215,fog:!1}));o.rotation.x=Math.PI,o.position.y=s.top+1.5,s.root.add(o),b.marker=o,b.pro=b.rules!=="arcade";{let u=i.len/36,d=Math.max(2.6,b.laps*.62),f=b.mode==="race"&&b.laps>=3?Zt(He.fuel.fullThrottleSeconds*.8/(d*u),1,6):1;for(let p of b.cars)p.noNitro=b.pro,b.pro?(p.fuelK=b.endu?f*1.3:f,b.endu&&(p.wear*=1.7)):(p.fuelK=0,p.partK=.3,p.dmgScale*=.55,p.wear*=.3);k.dev&&k.devGod&&(s.dmgScale=0,s.partK=0)}b.picks=[],b.coins=0;let l=new yn(.5,.5,.1,18);l.rotateX(Math.PI/2);let c=new Me({color:16761370,emissive:16754688,emissiveIntensity:1.1,metalness:.9,roughness:.25});if(b.rules==="arcade"){let u=new eo(.6),d=new Me({color:1681358,emissive:1681358,emissiveIntensity:2.2,metalness:.6,roughness:.25}),f=Math.max(1.2,Math.min(r,7)-2.5),p=(x,g,m)=>{let y=i.path[(x%e+e)%e],M=y.x+y.tz*g,_=y.z-y.tx*g,w=new xe(m?u:l,m?d:c);w.position.set(M,i.height(M,_)+1,_),w.castShadow=!0,t.add(w),b.picks.push({x:M,z:_,y:w.position.y,m:w,nitro:m,t:0})};[.14,.33,.52,.7,.88].forEach((x,g)=>p(Math.round(x*e),(g%2?1:-1)*f*.6,!0)),[.07,.24,.42,.61,.79].forEach((x,g)=>{let m=(g%2?-1:1)*f*.5;for(let y=0;y<4;y++)p(Math.round(x*e)+y*4,m,!1)})}if(b.rules==="arcade"){let u=new Me({color:3126359,emissive:3126359,emissiveIntensity:1.6,roughness:.4}),d=Math.max(1.2,Math.min(r,7)-2.5);[.2,.5,.82].forEach((f,p)=>{let x=i.path[Math.round(f*e)%e],g=(p%2?1:-1)*d*.35,m=x.x+x.tz*g,y=x.z-x.tx*g,M=new yt;M.add(new xe(new Qe(1.2,.36,.36),u),new xe(new Qe(.36,1.2,.36),u)),M.position.set(m,i.height(m,y)+1.1,y),t.add(M),b.picks.push({x:m,z:y,y:M.position.y,m:M,fix:!0,t:0})})}let h=b.weather||"random";if(b.wet=0,i.wet=0,b.coinG=l,b.coinM=c,b.slicks=[],b.ev={cur:null,next:20+Math.random()*12,last:""},b.haze=0,b.pits=0,b.overtakes=0,b.crashes=0,b.lastPos=0,Vd=-9,i.theme.night)for(let u of[-1,1]){let d=i.path[0],f=new di(13623551,220,70,.75,.6,1.4);f.position.set(d.x+d.tz*u*5,i.height(d.x,d.z)+9,d.z-d.tx*u*5),f.target.position.set(d.x-d.tx*22+d.tz*u*3,0,d.z-d.tz*22-d.tx*u*3),t.add(f,f.target)}b.rainAt=b.rainAt!=null?b.rainAt:h==="rain"?6:h==="storm"?0:h==="random"&&n.theme!=="desert"&&!n.dev&&Math.random()<.3?18+Math.random()*30:1/0,b.roadMats=[],t.traverse(u=>{u.isMesh&&u.material&&/racetrack|conc_plates/.test(u.material.name||"")&&b.roadMats.push([u.material,u.material.roughness,u.material.metalness])}),jy(),b.lit=!!i.theme.night||n.theme==="coast";for(let u of b.cars)u.setLights(b.lit)}function Jy(i){let e=b.track,t=b.player,n=b.pit;if(Xy(i),b.state==="go"){let l=(t.x-n.x)**2+(t.z-n.z)**2,c=Qm(t),h=c.reduce((u,d)=>u+d[1],0);if(t.pitZone=!!n.zone&&l<300,t.inPit&&!b.wasPit&&!n.busy&&gn(h>.3?"Limiter on. Stop in your box \u2014 about "+h.toFixed(1)+" seconds for "+c.map(u=>u[0].toLowerCase()).join(", ")+".":"Limiter on. Nothing to do \u2014 drive through.",!0),b.wasPit=t.inPit,n.busy||l<10&&t.speed<2&&h>.3){n.busy||(n.busy=!0,n.t=0,n.jobs=c,n.total=h),n.t+=i,n.tick-=i,n.tick<=0&&(n.tick=.55,Te.wrench());let u=0,d=n.jobs[0][0];for(let f of n.jobs)n.t>=u&&(d=f[0]),u+=f[1];en(d+"  "+Math.max(0,n.total-n.t).toFixed(1)+"s",!1,250),n.t>=n.total&&(t.repair(),t.fuel=1,t.nitro=1,t.wetTyres=b.wet>.4||b.rainAt-b.t<20,n.busy=!1,n.t=0,b.warned=b.saidTyre=b.saidFuel=b.saidDry=!1,b.pits++,en("Go",!1,800),Te.beep(660,.4),gn((t.wetTyres?"Wet tyres on":"Fresh tyres")+", full tank. Mind the limiter to the pit exit.",!0),b.mode==="online"&&it&&it.send({k:"fix",w:t.wetTyres}))}}if(t.pitBusy=!!n.busy,b.crew){let l=n.busy,c=performance.now()/1e3,h="";if(l){let u=0;h=n.jobs[0][0];for(let d of n.jobs)n.t>=u&&(h=d[0]),u+=d[1]}if(Om(b.crew,n,l,h,l&&n.jobs.some(u=>u[0]==="Fuel"),i),n.pad&&(n.pad.material.opacity=t.inPit&&!l?.65+Math.sin(c*6)*.35:.8),t.inPit&&!l&&b.state==="go"){let u=Math.hypot(n.x-t.x,n.z-t.z),d=(n.x-t.x)*Math.sin(t.th)+(n.z-t.z)*Math.cos(t.th)>0;Wn("hEvent",d?We("Your pit box")+"  "+Math.round(u)+" m":""),b.pitHint=!0}else b.pitHint&&(b.pitHint=!1,Wn("hEvent",""))}if(b.crew2&&b.remote){let l=!!b.remote.pitBusy;b.p2t=l?(b.p2t||0)+i:0,Om(b.crew2,b.pit2,l,l?["Tyres","Fuel","Bodywork"][Math.floor(b.p2t/2)%3]:"",!0,i)}let s=b.t;for(let l of b.picks){if(l.t>s){if(l.m.visible=!1,l.t!==1/0)continue;continue}if(l.t!==1/0&&(l.m.visible=!0,l.m.rotation.y+=i*2.5,l.m.position.y=l.y+Math.sin(s*3+l.x)*.18,(t.x-l.x)**2+(t.z-l.z)**2<5.5&&b.state==="go"))if(l.t=s+(l.nitro?14:25),Te.pickup(l.nitro),l.fix){l.t=s+40;let c=t.tyre,h=t.fuel;t.repair(),t.tyre=c,t.fuel=h,Te.wrench(),en("Repaired",!1,900);for(let u=0;u<16;u++)b.fx.glow.emit(l.x,l.y,l.z,(Math.random()-.5)*7,Math.random()*6,(Math.random()-.5)*7,.45,.22,0,.3,1,.45,1,7)}else if(l.nitro){t.nitro=Math.min(1,t.nitro+.5);for(let c=0;c<14;c++)b.fx.glow.emit(l.x,l.y,l.z,(Math.random()-.5)*8,Math.random()*6,(Math.random()-.5)*8,.4,.25,0,.3,.7,1,1,6)}else{b.coins+=l.gold?200:25,l.gold&&(l.t=1/0,xh("Golden coin: +200"));for(let c=0;c<6;c++)b.fx.glow.emit(l.x,l.y,l.z,(Math.random()-.5)*5,2+Math.random()*4,(Math.random()-.5)*5,.35,.18,0,1,.8,.2,1,9)}}if(b.t>b.rainAt&&b.wet<1){b.wet===0&&(en("Rain",!0,1600),gn("Rain. Brake earlier \u2014 box for wet tyres if it gets heavy.",!0)),b.wet=Math.min(1,b.wet+i/9),e.wet=b.wet;for(let[l,c,h]of b.roadMats)l.roughness=c-(c-.28)*b.wet,l.metalness=h+(.35-h)*b.wet;Ge.fog.density=Bd*(1+.5*b.wet),kt.intensity=Gm*(1-.35*b.wet),Ii.intensity=Vm*(1-.2*b.wet)}b.haze+=((b.ev.cur&&b.ev.cur.type==="haze"?1:0)-b.haze)*Math.min(1,i*.8),Ge.fog.density=Bd*(1+.5*b.wet)*(1+4.5*b.haze);let r=Tt.domElement.height/(2*Math.tan(qe.fov*Math.PI/360));Lm.position.set(b.attract?qe.position.x:De.look.x,b.attract?qe.position.y:De.look.y+7,b.attract?qe.position.z:De.look.z),b.ambient.update(i,Lm,b.wet,r);let a=Ro[e.def.theme].sunDir,o=Math.hypot(a[0],a[1],a[2]);if(Vn&&(Vn.position.set(qe.position.x+a[0]/o*3400,qe.position.y+a[1]/o*3400,qe.position.z+a[2]/o*3400),Vn.lookAt(qe.position),Vn.visible=b.wet<.5),!b.lit&&b.wet>.3){b.lit=!0;for(let l of b.cars)l.setLights(!0)}if(Ky(i),e.cullables.length&&_h%3===0){let l=xn==="high"?280:xn==="medium"?210:160,c=b.attract?qe.position.x:De.look.x,h=b.attract?qe.position.z:De.look.z;for(let u of e.cullables){let d=(u.x-c)**2+(u.z-h)**2,f=u.m;f.visible=d<l*l;let p=f.userData.lod;if(p&&f.visible){let x=d<8100?0:1;f.userData.cur!==x&&(f.userData.cur=x,f.geometry=p[x])}}}if(Hd*=Math.exp(-i*5),jd*=Math.exp(-i*6),ln){let l=ln.u;if(l.tilt.value=b.attract?.7:Xm[qm].fixed?1:0,l.time.value=b.t,l.hit.value=Hd,l.wet.value=b.wet,l.speed.value+=((t.nitroOn?.9:Zt((t.speed-40)/40,0,.4))-l.speed.value)*Math.min(1,i*5),Vn&&Vn.visible){let c=Vn.position.clone().project(qe),h=c.z<1?Zt(1.5-Math.max(Math.abs(c.x),Math.abs(c.y)),0,1):0;l.sunPos.value.set(c.x*.5+.5,c.y*.5+.5),l.sunVis.value+=(h-l.sunVis.value)*Math.min(1,i*4)}else l.sunVis.value=0}}function ng(i){let e=b.track,t=b.player;if(b.state==="wait"&&(b.waitT+=i,b.waitT>1&&(b.waitT=0,it&&it.send({k:"loaded"}),Kd())),b.state==="count"){b.countT-=i;let c=Math.min(5,Math.floor((3.6-b.countT)/.6)),h=G("lights").children;if(c>b.lightN&&b.countT>0){b.lightN=c;for(let u=0;u<5;u++)h[u].className=u<c?"red":"";Te.beep(330,.12)}if(b.countT<=0){b.state="go";for(let u of h)u.className="go";Te.beep(660,.5),en("Go",!1,800),setTimeout(()=>G("lights").classList.remove("show"),900)}}let n=b.state!=="count"&&b.state!=="wait";n&&b.state!=="over"&&(b.t+=i),Wn("hTyreLbl",We(t.wetTyres?"Wets":"Tyres"));for(let[c,h]of b.ais)c.out||c===t&&b.state!=="done"&&b.state!=="over"&&!b.demo||(c.held=!n||b.t<(c.holdT||0),ym(c,e,h,b.cars,i),c!==t&&(h.boost=b.rules==="arcade"?(t.prog-c.prog)*e.spacing>50?1.08:(t.prog-c.prog)*e.spacing<-70?.93:1:1),c!==t&&n&&qy(c,h,i),c.finished&&(h.inp.throttle*=.5),n&&!h.pitT&&(c.stuck=c.speed<1.5?c.stuck+i:0,c.stuck>2.5&&c.stranded?(eg(c),c.stuck=0):c.stuck>2.5&&((b.respLog=b.respLog||[]).push(c.name+" t"+(b.t|0)+" idx"+c.idx+" hp"+c.health.toFixed(2)+" f"+c.dmg.front.toFixed(2)+" ty"+c.tyre.toFixed(2)+" oil"+b.slicks.length+" pitd"+Math.hypot(c.x-b.pit.x,c.z-b.pit.z).toFixed(0)),Km(c),c.stuck=0,b.respawns=(b.respawns||0)+1)));Sa+=i;let s=0;for(;Sa>=Xs&&s++<8;)Sa-=Xs,Jm(Xs,n);b.remote&&b.remote.netStep(i,e,performance.now());for(let c of b.cars)Hy(c);let r=b.D;if(b.state==="go"){t.drifting?(r.time+=i,r.mult=1+Math.min(4,Math.floor(r.time/1.5)),r.combo+=Math.abs(t.beta)*t.speed*i*6*r.mult,r.grace=.9):r.combo>0&&(r.grace-=i,r.grace<=0&&(r.combo>150&&en("+"+Math.round(r.combo),!1,900),Ym()));let c=e.path[t.idx];t.wrong=t.vx*c.tx+t.vz*c.tz<-4?t.wrong+i:0,t.wrong>1.2&&en("Wrong way",!0,400)}if(b.state==="done"&&(b.doneT+=i,b.doneT>2.2&&nM()),b.mode==="online"&&it){if(b.sendT+=i,b.sendT>=1/He.net.hz&&(b.sendT=0,it.send({k:"s",p:t.netPack()})),b.pingT=(b.pingT||0)+i,b.pingT>2&&(b.pingT=0,it.send({k:"ping",t:performance.now()})),b.stT=(b.stT||0)+i,b.stT>1){b.stT=0;let h=t.dmg;it.send({k:"st",d:[h.front,h.rear,h.left,h.right].map(u=>+u.toFixed(2)),ty:+t.tyre.toFixed(2),w:t.wetTyres?1:0,lm:t.lamps.map(u=>u.ok?1:0),lo:t.lightsOn?1:0,pt:[t.parts.engine,t.parts.gearbox,...t.parts.wheels].map(u=>+u.toFixed(2))})}let c=b.remote&&b.remote.nb;Wn("hPing",(b.ping!=null?Math.round(b.ping)+" ms":"\u2026")+(c?" \xB7 buffer "+Math.round(c.delay)+" ms":""))}Jy(i);let a=$n<1.2?.6:1;Zy(e),!G("tele").hidden&&Qy(t,i);for(let c of b.cars)c.render(i,e,c.isRemote?1:Zt(Sa/Xs,0,1)),c.effects(i,b.fx,e,c===t?a:a*.6);b.fx.smoke.update(i),b.fx.glow.update(i),b.fx.skids.flush(),b.debris.update(i,e),ig(i);let o=Tt.domElement.height/(2*Math.tan(qe.fov*Math.PI/360));b.fx.smoke.mat.uniforms.uScale.value=b.fx.glow.mat.uniforms.uScale.value=o,tM(i);let l=t.slipR>.16&&t.speed>6||t.wspin>.12||t.locked&&t.speed>3;t.shiftEvt&&(Te.shift(t.shiftEvt,Math.min(1,t.load*(t.shiftT>0?5:1)),t.rpm,t.spec.pops),t.shiftEvt=0);{let c=b.cars.filter(h=>h!==t&&!h.out).map(h=>({c:h,d:Math.hypot(h.x-t.x,h.z-t.z)})).sort((h,u)=>h.d-u.d).slice(0,3);Te.rivals(c.map(({c:h,d:u})=>({snd:h.spec.snd,dist:u,rpm:h.isRemote?h.spec.idle+Math.min(1,h.speed/h.spec.top)*(h.spec.red-h.spec.idle)*.8:h.rpmR,load:h.isRemote?.5:h.load||0})))}Te.ambient(i,{on:!b.attract,day:!e.theme.night,rain:b.wet>.3}),Te.drive({rpm:t.rpmR,rpmN:t.rpm,load:b.state==="done"?.3:t.load,limiter:t.limiter,turbo:Math.max(t.spec.turbo,t.up.eng>0?1:0)*(1+t.up.eng*.25),running:!0,sand:e.def.theme==="desert",kerb:t.speed>2&&t.wsurf.includes(1)?1:0,speed:t.speed,skid:l&&t.grass<.5?Zt(t.slipR*1.6+t.wspin*.7,.25,1):0,grip:t.grass<.5?Math.max(t.useF,t.useR):0,lock:t.lockF?1:0,spin:Math.min(1,t.wspin+t.wspinF),wet:b.wet,dirt:t.grass*Zt(t.speed/20,0,1),nitro:t.nitroOn,brake:t.braking?1:0,rain:b.wet}),iM(i)}function ig(i){let e=b.player,t=Xm[qm],n=e.speed,s=b.track,r=e.rx??e.x,a=e.rz??e.z,o=Ro[s.def.theme].sunDir;if(kt.position.set(r+o[0]*130,e.y+o[1]*130,a+o[2]*130),kt.target.position.set(r,e.y,a),gi&&gi.position.set(r,0,a),b.marker&&(b.marker.position.y=e.top+1.5+Math.sin(b.t*4)*.12,b.marker.visible=!!t.fixed||!!t.follow),b.attract)return $y(i);if(t.fixed){let T=(s.def.camYaw??.65)+(b.state==="count"?Zt(b.countT/3.6,0,1)**2*1.5:b.state==="wait"?1.5:0),A=Zt(n*.6,0,22)*Math.min(1,(k.zoom||1.5)/2.25),S=r+(n>1?e.vx/n:0)*A,E=a+(n>1?e.vz/n:0)*A,C=1-Math.exp(-i*3),L=b.state==="count"?Zt(b.countT/3.6,0,1)**2:b.state==="wait"?1:0,N=(qe.aspect<1?1.35:1)*(k.zoom||1.5)*(1-.62*L);De.look.x+=(S-De.look.x)*C,De.look.z+=(E-De.look.z)*C,De.look.y+=(e.y-De.look.y)*C,qe.position.set(De.look.x-Math.sin(T)*t.d*N,De.look.y+t.h*N*(1-.45*L),De.look.z-Math.cos(T)*t.d*N),qe.lookAt(De.look),De.pos.copy(qe.position),De.yaw=T,Math.abs(qe.fov-t.fov)>.05&&(qe.fov=De.fov=t.fov,qe.updateProjectionMatrix()),Uo=0;return}let l=e.th,c=4.2;if(b.state==="over"||b.state==="done")l=e.th+2.4,c=1.2;else if(t.follow){let T=s.path[(e.idx+Math.round(14/s.spacing))%s.n];l=Math.atan2(T.tx,T.tz),c=1.5}else n>6&&e.vf>0&&(l=e.th+vh(Math.atan2(e.vx,e.vz)-e.th)*.55);De.yaw+=vh(l-De.yaw)*(1-Math.exp(-i*c));let h=qe.aspect<1?1.25:1,u=t.d*h*(t.follow?1+Zt(n/60,0,1)*.18:1),d=r-Math.sin(De.yaw)*u,f=a-Math.cos(De.yaw)*u,p=e.y+t.h*h;p=Math.max(p,s.height(d,f)+1.2);let x=1-Math.exp(-i*(t.follow?4.5:7));De.pos.x+=(d-De.pos.x)*x,De.pos.y+=(p-De.pos.y)*(1-Math.exp(-i*4)),De.pos.z+=(f-De.pos.z)*x;let g=t.look+(t.follow?Zt(n*.12,0,5):0),m=r+Math.sin(e.th)*g,y=a+Math.cos(e.th)*g,M=1-Math.exp(-i*(t.follow?6:10));De.look.x+=(m-De.look.x)*M,De.look.y+=(e.y+.8-De.look.y)*M,De.look.z+=(y-De.look.z)*M,Uo*=Math.exp(-i*6);let _=e.grass*Zt(n/30,0,1)*.04+Uo*.25;qe.position.set(De.pos.x+(Math.random()-.5)*_,De.pos.y+(Math.random()-.5)*_,De.pos.z+(Math.random()-.5)*_),qe.lookAt(De.look);let w=t.fov+Zt(n*(t.follow?.08:.22),0,14)+(e.nitroOn?t.follow?4:9:0)-jd;De.fov+=(w-De.fov)*(1-Math.exp(-i*5)),Math.abs(qe.fov-De.fov)>.05&&(qe.fov=De.fov,qe.updateProjectionMatrix())}var Zy=i=>{if(!i.tick)return;let e=b.attract?b.cars[Math.floor(b.t/7)*3%b.cars.length]:b.player,t=Ca()[0];i.tick(performance.now()/1e3,e.x,e.z,t.x,t.z)},Bm=-1;function $y(i){let e=b.t,t=Math.floor(e/7),n=t%4,s=e%7/7,r=b.cars[t*3%b.cars.length],a=r.rx??r.x,o=r.rz??r.z,l=Math.sin(r.th),c=Math.cos(r.th),h,u,d,f=a,p=r.y+.8,x=o,g=40;if(n===0){let y=e*.22;h=a+Math.cos(y)*13,d=o+Math.sin(y)*13,u=r.y+3.2+Math.sin(e*.4)*1.2}else n===1?(h=a-22+s*8,d=o-20,u=r.y+40-s*16,g=34):n===2?(h=a-l*7.5+c*1.6,d=o-c*7.5-l*1.6,u=r.y+2,f=a+l*8,x=o+c*8,g=62):(h=a-l*6+Math.cos(e*.3)*6,d=o-c*6+Math.sin(e*.3)*6,u=r.y+52-s*10,f=a+l*10,x=o+c*10,g=30);u=Math.max(u,b.track.height(h,d)+1.2),Bm!==t&&(Bm=t,De.pos.set(h,u,d),De.look.set(f,p,x));let m=1-Math.exp(-i*4);De.pos.x+=(h-De.pos.x)*m,De.pos.y+=(u-De.pos.y)*m,De.pos.z+=(d-De.pos.z)*m,De.look.x+=(f-De.look.x)*m,De.look.y+=(p-De.look.y)*m,De.look.z+=(x-De.look.z)*m,qe.position.copy(De.pos),qe.lookAt(De.look),Math.abs(qe.fov-g)>.05&&(qe.fov=De.fov=g,qe.updateProjectionMatrix()),b.marker&&(b.marker.visible=!1)}var Nd=60;function Qy(i,e){let t=s=>(s*57.3).toFixed(1).padStart(6),n=s=>String(Math.round(Math.min(s,1.5)*100)).padStart(4)+"%";Nd+=(1/Math.max(e,.001)-Nd)*.05,G("tele").textContent=`speed      ${(i.speed*3.6).toFixed(0).padStart(5)} km/h   gear ${i.gear}
steer      ${t(i.steer)}\xB0
slip front ${t(i.aF)}\xB0   rear ${t(i.slipR)}\xB0
body slip  ${t(i.beta)}\xB0   yaw ${i.r.toFixed(2).padStart(6)} rad/s
grip used  F${n(i.useF)}  R${n(i.useR)}
accel      lat ${(i.ayS/9.81).toFixed(2).padStart(5)} g  long ${(i.axS/9.81).toFixed(2).padStart(5)} g
surface    ${i.wsurf.map(s=>"GKRWP"[s]).join(" ")}   (FL FR RL RR)
fuel ${n(i.fuel)}  tyres ${n(i.tyre)}  body ${n(i.health)}
damage     F${n(i.dmg.front)} R${n(i.dmg.rear)} L${n(i.dmg.left)} R${n(i.dmg.right)}
assist ${k.assist} \xB7 ${i.spec.drive} \xB7 physics ${He.hz} Hz \xB7 render ${Nd.toFixed(0)} fps`}var Gn=null;function eM(){let i=b.track.box,e=156/Math.max(i.maxx-i.minx,i.maxz-i.minz),t=90-(i.minx+i.maxx)/2*e,n=90-(i.minz+i.maxz)/2*e,s=document.createElement("canvas");s.width=s.height=180;let r=s.getContext("2d");r.lineJoin="round",r.beginPath(),b.track.path.forEach((o,l)=>l?r.lineTo(o.x*e+t,o.z*e+n):r.moveTo(o.x*e+t,o.z*e+n)),r.closePath(),r.strokeStyle="rgba(23,24,28,.85)",r.lineWidth=9,r.stroke(),r.strokeStyle="#f3f4f6",r.lineWidth=3.5,r.stroke();let a=b.track.path[0];r.fillStyle="#e3262e",r.fillRect(a.x*e+t-3,a.z*e+n-3,6,6),Gn={bg:s,s:e,ox:t,oz:n,ctx:G("mini").getContext("2d")}}var bs={},Wn=(i,e)=>{bs[i]!==e&&(bs[i]=e,G(i).textContent=e)};function tM(i){let e=b.player,t=Ca(),n=t.indexOf(e)+1;Wn("hPos",String(n)),Wn("hLapN",String(Zt(e.lap+1,1,b.laps))),Wn("hTime",li(e.lap<0?0:Math.max(0,b.t-e.lapStart)*1e3)),Wn("hSpeed",String(Math.round(Math.abs(e.vf)*(k.units==="mph"?2.237:3.6)))),Wn("hGear",e.gear===0?"R":String(e.gear));let s=(l,c,h)=>{let u=Math.round(h*100);if(bs[l]!==u){bs[l]=u;let d=G(l);d.style.setProperty("--v",u),d.classList.toggle("bad",u<30),G(c).textContent=u}};s("gBody","hBody",e.health),s("gFuel","hFuel",e.fuel),s("gTyre","hTyre",e.tyre);{let l=e.parts,c=[l.engine,l.gearbox,...l.wheels],h=c.map(u=>u>.66?2:u>.25?1:0).join("")+(e.fpl?(e.fuel/e.fpl).toFixed(1):"");bs.parts!==h&&(bs.parts=h,["pE","pG","pW0","pW1","pW2","pW3"].forEach((u,d)=>{G(u).className=c[d]>.66?"bad":c[d]>.25?"warn":""}),G("hFuelL").textContent=e.fuelK>0&&e.fpl?(e.fuel/e.fpl).toFixed(1)+" "+We("laps of fuel"):"")}b.arc&&(G("hNitro").style.width=(e.nitro*100).toFixed(0)+"%",Wn("hDriftPts",String(b.drift)),Wn("hCombo",b.D.combo>5?"+"+Math.round(b.D.combo)+"  \xD7"+b.D.mult:""));let r=[...new Set([0,n-2,n-1,n].filter(l=>l>=0&&l<t.length))],a=r.map(l=>l+t[l].name).join();if(a!==b.orderKey&&b.cars.length>1&&(b.orderKey=a,G("order").innerHTML=r.map((l,c)=>{let h=t[l];return`<li class="${h===e?"me":""}${c&&r[c-1]!==l-1?" gap":""}" style="border-left-color:${wa(h.color)}"><span>${l+1}</span>${h.name}</li>`}).join("")),_h&1)return;let o=Gn.ctx;o.clearRect(0,0,180,180),o.drawImage(Gn.bg,0,0),o.fillStyle="#19a7ce",o.fillRect(b.pit.x*Gn.s+Gn.ox-3.5,b.pit.z*Gn.s+Gn.oz-3.5,7,7);for(let l of b.cars)l!==e&&(o.fillStyle=wa(l.color),o.strokeStyle="#17181c",o.lineWidth=1.5,o.beginPath(),o.arc(l.x*Gn.s+Gn.ox,l.z*Gn.s+Gn.oz,4.5,0,7),o.fill(),o.stroke());o.fillStyle="#ffffff",o.strokeStyle="#17181c",o.lineWidth=2,o.beginPath(),o.arc(e.x*Gn.s+Gn.ox,e.z*Gn.s+Gn.oz,6,0,7),o.fill(),o.stroke()}function nM(){b.state="over";let i=b.player,e=Ca(),t=e.indexOf(i)+1,n=b.track.def.id,s=0,r,a="",o=i.laps.length?Math.min(...i.laps):null;if(b.mode==="race"){if(s=Math.round(([600,420,300,220,160,120][t-1]||90)*[.8,1,1.3][b.diff])+Math.round(b.drift/40),r=b.elim?t===1?"Last car standing":"Knocked out \xB7 P"+t:t===1?"Winner":(Cm[t-1]||"P"+t)+(Cm[t-1]?" place":""),a="Best lap "+li(o),b.endu&&(s=Math.round(s*1.8)),t===1)for(let p=0;p<260;p++){let x=Math.random();b.fx.glow.emit(i.x+(Math.random()-.5)*26,i.y+10+Math.random()*14,i.z+(Math.random()-.5)*26,(Math.random()-.5)*4,-2-Math.random()*3,(Math.random()-.5)*4,3+Math.random()*2,.3,0,x<.33?1:.2,x>.33&&x<.66?1:.5,x>.66?1:.25,1,2)}}else if(b.mode==="online")s=(t===1?500:220)+Math.round(b.drift/40),r=t===1?"You win":"You lose",a="Best lap "+li(o);else if(b.mode==="trial")s=150+(b.newBest?300:0),r=li(o),a=b.newBest?"New personal best":"Personal best "+li(k.best[n]);else{let p=k.bestDrift[n]||0,x=b.drift>p;x&&(k.bestDrift[n]=b.drift),s=Math.round(b.drift/15)+(x?200:0),r=b.drift.toLocaleString()+" pts",a=x?"New drift record":"Record "+p.toLocaleString()}let l=k.stats,c=(p,x)=>{l[p]=(l[p]||0)+x};c("races",1),c("coins",b.coins||0),c("pits",b.pits),c("overtakes",b.overtakes),c("km",Math.max(0,i.prog)*b.track.spacing/1e3),b.cars.length>1&&(t===1&&c("wins",1),t<=3&&c("podiums",1),t===1&&b.crashes===0&&c("clean",1)),l.driftBest=Math.max(l.driftBest||0,b.drift);let h=-1;if(bh=!0,b.story){let p=b.story,x=k.story[p.id]||0;h=Rm(p.goal,{pos:t,bestLap:o,drift:b.drift}),bh=h>0,s=h*250+(h>0&&!x?400:0)+Math.round(b.drift/40)+(p.final&&h>0&&!x?5e3:0),h>x&&(k.story[p.id]=h),r=h>0?p.final?"Champion":"Event cleared":"Not this time",a=(h>0?p.win:p.lose)+(h>0&&h<3?"  Next star: "+dh({type:p.goal.type,v:[p.goal.v[h]]}).toLowerCase()+".":""),G("resTitle").textContent=r,G("resSub").textContent=a}if(b.gp&&k.gp){let p=k.gp;e.forEach((g,m)=>{p.pts[g.name]=(p.pts[g.name]||0)+sM[m]}),p.round++;let x=Object.entries(p.pts).sort((g,m)=>m[1]-g[1]);if(r=We("Round")+" "+p.round+"/"+Ho.length+" \xB7 "+(t===1?We("Winner"):"P"+t),p.round>=Ho.length){p.done=!0;let g=x[0][0]===i.name;g&&(s+=3e3,c("gpWins",1)),r=g?We("Grand Prix champion"):We("Grand Prix finished")+" \xB7 P"+(x.findIndex(m=>m[0]===i.name)+1)}a=We("Standings")+":  "+x.slice(0,6).map((g,m)=>m+1+". "+g[0]+" "+g[1]).join("   "),G("resTitle").textContent=r,G("resSub").textContent=a}if(G("resStars").textContent=h<0?"":"\u2605".repeat(h)+"\u2606".repeat(3-h),b.daily&&k.daily!==b.daily.key&&(b.mode!=="race"||t<=3)){let p=new Date(Date.now()-864e5),x=p.getFullYear()+"-"+(p.getMonth()+1)+"-"+p.getDate();k.streak=k.daily===x?k.streak+1:1,k.daily=b.daily.key;let g=400+Math.min(k.streak,7)*100;s+=g,Yt("Daily challenge done: +"+g+" \xB7 streak "+k.streak)}let u=fh(k.xp);k.xp+=60+Math.round(s/4);let d=fh(k.xp);d>u&&(s+=d*200,setTimeout(()=>Yt("Level "+d+" \u2014 bonus "+d*200+" credits"),2400)),s+=b.coins||0,k.credits+=s,Ut(),setTimeout(Jd,1200),G("resTitle").textContent=r,G("resSub").textContent=a,G("resReward").textContent="+"+s+" credits";let f=e[0].finishTime;G("resTable").innerHTML=b.cars.length>1?e.map((p,x)=>`<tr class="${p===i?"me":""}"><td>${x+1}</td><td>${p.name}</td><td>${p.spec.name}</td><td>${p.finished?x?"+"+((p.finishTime-f)/1e3).toFixed(2):li(p.finishTime):"still racing"}</td></tr>`).join(""):i.laps.map((p,x)=>`<tr class="${p===o?"me":""}"><td>Lap ${x+1}</td><td>${li(p)}</td></tr>`).join("")+`<tr><td>Drift score</td><td>${b.drift.toLocaleString()}</td></tr>`,G("againBtn").textContent=b.mode==="online"?"Back to lobby":b.gp?We(k.gp&&k.gp.done?"Finish":"Next round"):b.story?bh?"Continue":"Try again":We("Race again"),ft("results",!0)}var mh=0,kd=0;function iM(i){if(mh+=i,kd++,mh<2)return;let e=kd/mh;mh=kd=0,!(k.gfx!=="auto"||e>42||b.attract)&&(xn==="high"?(zo("medium"),Yt("Graphics lowered to keep the frame rate smooth")):$n>1?($n=Math.max(1,$n-.35),Bo()):xn==="medium"&&e<27&&zo("low"))}var sg=()=>{let i=Pi.findIndex(e=>!k.story[e.id]);return i<0?Pi.length-1:i},Ho=["nile","luxor","hurghada","aswan","midnight"],sM=[25,18,15,12,10,8,6,4,2,1,0,0];function rM(){let i=gt.filter(n=>n.id!==k.car).sort(()=>Math.random()-.5),e=[...jm].sort(()=>Math.random()-.5),t=[.8,.89,.97][fe.diff];k.gp={round:0,pts:{},done:!1,rivals:i.slice(0,7).map((n,s)=>({name:e[s],car:n.id,skill:t+(6-s)*.01,paint:Hs[(s*3+2)%Hs.length]}))},Ut()}var rg=()=>({mode:"race",gp:!0,track:Ho[k.gp.round],laps:3,diff:fe.diff,rivals:k.gp.rivals,rules:k.rules,weather:k.gp.round===2?"rain":"clear",nRivals:7}),Ta="",xr=new Jc(G("menuBg")),Xt={on:!1,g:null,cars:[],fx:null,t:0,acc:0,track:{def:{theme:"day",id:"arena"},theme:Ro.day,wet:0,surf:()=>0,height:()=>0,escape:()=>null},spots:[]};function aM(){let i=Xt.g=new yt,e=1024,t=document.createElement("canvas"),n=document.createElement("canvas");t.width=t.height=n.width=n.height=e;let s=t.getContext("2d"),r=n.getContext("2d"),a=s.createImageData(e,e),o=r.createImageData(e,e),l=a.data,c=o.data,h=[4,9,19,41,87,180].map(g=>{let m=new Float32Array(g*g);for(let y=0;y<m.length;y++)m[y]=Math.random();return{sz:g,a:m}}),u=[1,.62,.42,.3,.2,.13],d=u.reduce((g,m)=>g+m,0);for(let g=0;g<e;g++)for(let m=0;m<e;m++){let y=0;for(let S=0;S<6;S++){let{sz:E,a:C}=h[S],L=m/e*E,N=g/e*E,V=L|0,O=N|0,W=L-V,K=N-O,Q=W*W*(3-2*W),re=K*K*(3-2*K),$=(V+1)%E,ae=(O+1)%E;y+=u[S]*((C[O*E+V]*(1-Q)+C[O*E+$]*Q)*(1-re)+(C[ae*E+V]*(1-Q)+C[ae*E+$]*Q)*re)}y=y/d;let M=(Math.random()-.5)*.09,_=Math.random()>.9988?.35:0,w=Math.min(1,Math.max(0,(y-.3)/.42))+M,T=(g*e+m)*4;l[T]=52+w*78+_*110,l[T+1]=36+w*58+_*100,l[T+2]=23+w*40+_*90,l[T+3]=255;let A=Math.min(255,255*(y*.8+M*1.6+_));c[T]=c[T+1]=c[T+2]=A,c[T+3]=255}s.putImageData(a,0,0),r.putImageData(o,0,0);let f=new Dn(t);f.colorSpace=Lt,f.anisotropy=8,f.wrapS=f.wrapT=ii,f.repeat.set(3,3);let p=new Dn(n);p.wrapS=p.wrapT=ii,p.repeat.set(3,3);let x=new xe(new Qt(150,150),new Me({map:f,bumpMap:p,bumpScale:1.1,roughness:.9,metalness:0}));x.rotation.x=-Math.PI/2,x.receiveShadow=!0,i.add(x),[[16756832,1,1],[4892927,-1,1],[16727976,-1,-1],[16769712,1,-1]].forEach(([g,m,y],M)=>{let _=m*34,w=y*34,T=new xe(new yn(.25,.35,16,8),new Me({color:1776672,metalness:.7,roughness:.4}));T.position.set(_,8,w),i.add(T);let A=new xe(new Qe(2.2,1,.5),new rt({color:new be(g).multiplyScalar(2.5)}));A.position.set(_,16.3,w),A.lookAt(0,0,0),i.add(A);let S=new xe(new Kn(7,46,20,1,!0).translate(0,-23,0),new rt({color:g,transparent:!0,opacity:.028,depthWrite:!1,blending:Mn,side:$t,fog:!1}));S.position.set(_,16.3,w),S.visible=!1,i.add(S);let E=null;M<2&&(E=new di(g,2600,90,.5,.7,1.5),E.position.set(_,16.3,w),i.add(E,E.target)),Xt.spots.push({beam:S,L:E,x:_,z:w,ph:M*1.7})})}function oM(){if(Xt.on)return;Xt.on=!0,Xt.g||aM(),Ge.add(Xt.g),xi.visible=!1,Xt.t=0,Xt.acc=0,gi&&(Ge.remove(gi),gi=null),Ge.background=new be(657157),Ge.fog=new qr(1511434,.011),Ii.color.set(8425664),Ii.groundColor.set(3811866),Ii.intensity=.5,kt.color.set(12570879),kt.intensity=1.1,Ge.environmentIntensity=.45,Tt.toneMappingExposure=1.1,ln&&(ln.u.sunVis.value=0,ln.u.speed.value=0,ln.u.wet.value=0,ln.u.hit.value=0,ln.u.tilt.value=.55),Xt.fx={smoke:new Gs(Ge,1500),glow:new Gs(Ge,200,!0),skids:new Po(Ge,2200)};let i=gt.find(t=>t.id===k.car),e=gt.filter(t=>t.id!==k.car&&t.drive!=="fwd").sort(()=>Math.random()-.5);Xt.cars=[[i,14.5,1,0],[e[0],21.5,1,2.4],[e[1],7.5,-1,1]].map(([t,n,s,r],a)=>{let o=new Ki(t,a?Hs[Math.random()*Hs.length|0]:Aa(t.id),"",a?void 0:Ks(t.id),a?{wing:2,split:1,rim:4,glow:[0,2,1][a]}:br(t.id));return o.reset(Math.sin(r)*n,Math.cos(r)*n,r+s*Math.PI/2),o.vx=Math.sin(o.th)*9,o.vz=Math.cos(o.th)*9,o.assistK=.8,o.tc=!1,o.forceDrift=!0,o.fuelK=0,o.wear=0,o.setLights(!0),o.R0=n,o.dir=s,o.inp={steer:0,throttle:1,brake:0,hand:!1,nitro:!1},o.ruts=[null,null],o.spot=new di(16773330,190,46,.46,.85,1.35),Ge.add(o.spot,o.spot.target),Ge.add(o.root),o})}function lM(){if(!Xt.on)return;let i=Xt.cars[0],e=gt.find(n=>n.id===k.car),t=new Ki(e,Aa(e.id),"",Ks(e.id),br(e.id));for(let n of["x","z","th","px","pz","pth","vx","vz","r","R0","dir","inp","ruts"])t[n]=i[n];t.assistK=.8,t.tc=!1,t.forceDrift=!0,t.fuelK=0,t.wear=0,t.setLights(!0),t.spot=i.spot,Ge.remove(i.root),i.dispose(),Ge.add(t.root),Xt.cars[0]=t}var on={};function cM(){if(!Qn)return;let i=800,e=450;if(!on.rt){on.rt=new Jt(i,e),on.rt.texture.colorSpace=Lt,on.scene=new Cs,on.scene.environment=Ge.environment,on.scene.add(new ia(16777215,3158586,1.2));let u=new Ls(16777215,2.6);u.position.set(4,7,5),on.scene.add(u),on.cam=new nn(28,i/e,.1,60),on.cam.position.set(6.2,2.9,7),on.cam.lookAt(0,.5,0),on.buf=new Uint8Array(i*e*4),on.col=new be}let t=Qn.root,n=t.parent,s=t.rotation.y,r=t.visible,a=Tt.getClearAlpha();Tt.getClearColor(on.col),t.rotation.y=0,t.visible=!0,on.scene.add(t);let o=Tt.getRenderTarget();Tt.setRenderTarget(on.rt),Tt.setClearColor(0,0),Tt.clear(),Tt.render(on.scene,on.cam),Tt.readRenderTargetPixels(on.rt,0,0,i,e,on.buf),Tt.setRenderTarget(o),Tt.setClearColor(on.col,a),n&&n.add(t),t.rotation.y=s,t.visible=r;let l=G("carPic"),c=l.getContext("2d"),h=c.createImageData(i,e);for(let u=0;u<e;u++)h.data.set(on.buf.subarray((e-1-u)*i*4,(e-u)*i*4),u*i*4);c.putImageData(h,0,0)}function wh(){if(Xt.on){Xt.on=!1,Ge.remove(Xt.g);for(let i of Xt.cars)Ge.remove(i.root),i.dispose(),i.spot&&(Ge.remove(i.spot,i.spot.target),i.spot.dispose());Xt.cars=[];for(let i of[Xt.fx.smoke,Xt.fx.glow])Ge.remove(i.points),i.geo.dispose(),i.mat.dispose();Ge.remove(Xt.fx.skids.mesh),Xt.fx.skids.geo.dispose(),Xt.fx=null;for(let i=0;i<4;i++)Tn.c[i].set(0,0,0,0)}}function ag(i){let e=Xt,t=e.track;e.t+=i,e.acc+=i;let n=0;for(;e.acc>=Xs&&n++<6;){e.acc-=Xs;for(let o of e.cars){let l=Math.hypot(o.x,o.z),c=Math.atan2(o.x,o.z),h=vh(c+o.dir*(Math.PI/2+Zt((l-o.R0)*.22,-1.1,1.1))-o.th);if(o.inp.steer=Zt(h*1.7,-1,1),o.inp.throttle=o.speed<(o.R0>18?17.5:o.R0>11?14:10)?1:.35,o.step(Xs,o.inp,t,!0),l>60||o.speed<1&&e.t>3){let u=Math.random()*6.28;o.reset(Math.sin(u)*o.R0,Math.cos(u)*o.R0,u+o.dir*Math.PI/2),o.vx=Math.sin(o.th)*9,o.vz=Math.cos(o.th)*9,o.ruts=[null,null]}}for(let o=0;o<e.cars.length;o++)for(let l=o+1;l<e.cars.length;l++)e.cars[o].bump(e.cars[l],!1)}e.cars.forEach((o,l)=>{o.render(i,t,Zt(e.acc/Xs,0,1)),o.effects(i,e.fx,t,.8);let c=Math.sin(o.th),h=Math.cos(o.th);for(let u=0;u<2;u++){let d=o.wheels[u?"RR":"RL"],f=o.x+c*d.z+h*d.x,p=o.z+h*d.z-c*d.x,x=[f+h*.16,.03,p-c*.16],g=[f-h*.16,.03,p+c*.16],m=o.ruts[u];m&&(m[0][0]-x[0])**2+(m[0][2]-x[2])**2<9&&e.fx.skids.quad(m[0],m[1],x,g),o.ruts[u]=[x,g]}o.spot.position.set(o.x+c*(o.zf+.1),.7,o.z+h*(o.zf+.1)),o.spot.target.position.set(o.x+c*20,-1.2,o.z+h*20),Tn.p[l].set(o.x+c*o.zf,.62,o.z+h*o.zf),Tn.d[l].set(c,-.07,h).normalize(),Tn.c[l].set(1,.93,.78,1)});let s=innerWidth<820,r=e.t;qe.fov=40,qe.position.set(Math.sin(r*.06)*8+(s?0:-4),60+Math.sin(r*.1)*4,22+Math.cos(r*.06)*6),qe.lookAt(s?0:-9,0,1),qe.updateProjectionMatrix(),kt.position.set(30,60,18),kt.target.position.set(0,0,0);for(let o of e.spots){let l=Math.sin(r*.35+o.ph)*16,c=Math.cos(r*.27+o.ph)*16;o.beam.lookAt(l,-30,c),o.beam.rotateX(-Math.PI/2),o.L&&o.L.target.position.set(l,0,c)}let a=Tt.domElement.height/(2*Math.tan(qe.fov*Math.PI/360));e.fx.smoke.mat.uniforms.uScale.value=e.fx.glow.mat.uniforms.uScale.value=a,e.fx.smoke.update(i),e.fx.glow.update(i),e.fx.skids.flush(),ln&&(ln.u.time.value=r)}function hM(){if(Zi()||G("menu").hidden||Wt.on)return;let i=fe.tab==="garage"||fe.tab==="tune"?"garage":"show";b&&(yh++,Ra()),i==="garage"?(xr.stop(),wh(),Ta!=="garage"&&(Go(null),xi.visible=!0),Ta="garage"):(Ta="show",xn==="low"?(wh(),xr.start()):(xr.stop(),oM()))}var fe={rivals:5,wx:"random",tab:"quick",ev:0,ch:0,mode:"race",track:0,laps:3,diff:1,car:Math.max(0,gt.findIndex(i=>i.id===k.car))},Ud={};async function uM(i){if(Ud[i.id])return Ud[i.id];let e;i.type==="glb"?e=(await Wc("lider.json")).path.map(s=>({x:s[0]*2.2,z:s[1]*2.2})):e=jc(i.pts,5);let t=0;return e.forEach((n,s)=>{let r=e[(s+1)%e.length];t+=Math.hypot(r.x-n.x,r.z-n.z)}),Ud[i.id]={pts:e,len:t}}async function ht(){let i=Sn[fe.track],e=gt[fe.car],t=k.owned.includes(e.id),n=fe.mode==="online";G("credits").textContent=k.credits.toLocaleString(),G("name").value=k.name;let s=fe.tab==="career";for(let M of document.querySelectorAll("#tabs button"))M.classList.toggle("on",M.dataset.tab===fe.tab);for(let M of document.querySelectorAll("#modeSeg button"))M.classList.toggle("on",M.dataset.mode===fe.mode);let r=fe.tab==="quick"||fe.tab==="online",a=fe.mode==="gp"&&fe.tab==="quick";ft("tabCareer",!1),ft("tabQuick",fe.tab==="quick"),ft("tabGarage",fe.tab==="garage"),ft("tabTune",fe.tab==="tune"),ft("tabSettings",fe.tab==="settings"),document.querySelector(".card.track").hidden=!r||a,ft("optsRow",r&&!a),ft("startBtn",r),ft("gpBox",a),ft("rulesSeg",fe.tab==="quick"),ft("daily",fe.tab==="quick"),document.querySelector(".garage").hidden=fe.tab==="settings"||fe.tab==="trophies",G("rivals").textContent=fe.rivals;for(let M of document.querySelectorAll("#wxSeg button"))M.classList.toggle("on",M.dataset.w===fe.wx);for(let M of document.querySelectorAll("#langSeg button"))M.classList.toggle("on",M.dataset.l===k.lang);for(let M of document.querySelectorAll("#zoomSeg button"))M.classList.toggle("on",+M.dataset.z===k.zoom);for(let M of document.querySelectorAll("#unitSeg button"))M.classList.toggle("on",M.dataset.u===k.units);if(G("musicVol").value=k.mvol*100,G("sfxVol").value=k.svol*100,G("engVol").value=k.evol*100,Wn("hUnit",k.units==="mph"?"mph":"km/h"),a){let M=k.gp&&!k.gp.done?k.gp:null;G("gpBox").innerHTML="<h2>"+We("Grand Prix")+"</h2><p>"+We("Four rounds, eight drivers, points for every finish. The third round is wet.")+"</p><ol>"+Ho.map((_,w)=>{let T=Sn.find(A=>A.id===_);return'<li class="'+(M&&w<M.round?"done":M&&w===M.round?"on":"")+'">'+(k.lang==="ar"?T.ar:T.name)+"</li>"}).join("")+"</ol>"+(M?'<p class="meta">'+Object.entries(M.pts).sort((_,w)=>w[1]-_[1]).slice(0,4).map((_,w)=>w+1+". "+_[0]+" "+_[1]).join(" \xB7 ")+"</p>":"")}{let M=gt[fe.car],_=br(M.id),w=(E,C)=>C.map((L,N)=>'<button data-k="'+E+'" data-v="'+N+'" class="'+(_[E]===N?"on":"")+'" style="background:'+(L?wa(L):"transparent")+'">'+(L?"":"\xD7")+"</button>").join(""),T=(E,C)=>C.map((L,N)=>'<button data-k="'+E+'" data-v="'+N+'" class="'+(_[E]===N?"on":"")+'">'+We(L)+"</button>").join("");G("lookRows").innerHTML="<h3>"+We("Rear wing")+'</h3><div class="seg wide four">'+T("wing",["None","Lip","GT wing","Race wing"])+"</div><h3>"+We("Front splitter")+'</h3><div class="seg wide two">'+T("split",["Off","On"])+"</div><h3>"+We("Extras")+'</h3><div class="seg wide">'+["skirt","scoop","pipe"].map((E,C)=>'<button data-k="'+E+'" data-v="'+(_[E]?0:1)+'" class="'+(_[E]?"on":"")+'">'+We(["Side skirts","Roof scoop","Exhaust tips"][C])+"</button>").join("")+"</div><h3>"+We("Wheels")+'</h3><div class="paints">'+w("rim",Kc)+"</div><h3>"+We("Glass")+'</h3><div class="paints">'+w("tint",Cd)+"</div><h3>"+We("Underglow")+'</h3><div class="paints">'+w("glow",Yc)+"</div>";let A=Th(M.id),S=[["gear","Gearing","Top speed","Acceleration"],["aero","Downforce","Less drag","More grip"],["brake","Brake bias","Rearward","Forward"],["susp","Balance","Agile","Stable"]];G("tuneRows").innerHTML=S.map(([E,C,L,N])=>'<div class="trow2"><b>'+We(C)+"</b><span>"+We(L)+'</span><button data-k="'+E+'" data-d="-1">\u2212</button><i>'+[-2,-1,0,1,2].map(V=>'<u class="'+(V===A[E]?"on":"")+'"></u>').join("")+'</i><button data-k="'+E+'" data-d="1">+</button><span>'+We(N)+"</span></div>").join("")+"<h3>"+We("Tyre compound")+'</h3><div class="seg wide">'+["soft","medium","hard"].map(E=>'<button data-c="'+E+'" class="'+(A.tyre===E?"on":"")+'">'+We(E[0].toUpperCase()+E.slice(1))+"</button>").join("")+'</div><p class="note">'+We("Soft tyres grip more and wear faster. Hard tyres last longer. Settings apply to this car only.")+"</p>"}let o=fh(k.xp);G("lvl").textContent=o,G("xpBar").style.width=Zt((k.xp-ph(o))/(ph(o+1)-ph(o)),0,1)*100+"%",G("assistBtn").textContent="Assist: "+k.assist[0].toUpperCase()+k.assist.slice(1);for(let M of document.querySelectorAll("#rulesSeg button"))M.classList.toggle("on",M.dataset.r===k.rules);ft("devBox",!!k.dev),G("devBtn").textContent=k.dev?"Developer: on":"Developer",k.dev&&(G("devGod").textContent="No damage: "+(k.devGod?"on":"off"),G("devScale").textContent="Game speed: "+(k.devScale||1)+"\xD7");{let M=k.boxDay!==Zd();G("boxBtn").classList.toggle("done",!M),G("boxInfo").textContent=We(M?"Open now":"Come back tomorrow")}G("tcBtn").textContent=We("Traction control")+": "+We(k.tc?"On":"Off"),G("absBtn").textContent="ABS: "+We(k.abs?"On":"Off"),G("sensBtn").textContent=We("Steering")+": "+We(k.sens<.9?"Calm":k.sens>1.1?"Sharp":"Normal"),G("gfxBtn").textContent="Graphics: "+k.gfx[0].toUpperCase()+k.gfx.slice(1),G("gasBtn").hidden=!js,G("gasBtn").textContent="Auto gas "+(k.autoGas?"on":"off");let l=Fd(Sn);if(G("dailyName").textContent=l.label+" \xB7 "+l.trackName+(l.weather==="rain"?" \xB7 rain":""),G("dailyInfo").textContent=k.daily===l.key?"Done \xB7 streak "+k.streak:"+"+(400+Math.min((k.streak||0)+1,7)*100),G("daily").classList.toggle("done",k.daily===l.key),s){let M=xs[fe.ch];G("chNum").textContent="Chapter "+(fe.ch+1)+" of "+xs.length,G("chName").textContent=M.name,G("chText").textContent=M.text,G("events").innerHTML=M.events.map(_=>{let w=Pi.indexOf(_),T=w===0||k.story[Pi[w-1].id]>0,A=k.story[_.id]||0;return`<li data-i="${w}" class="${w===fe.ev?"on":""} ${T?"":"locked"}"><span>${w+1}</span><div><b>${_.title}</b><small>${Sn.find(S=>S.id===_.track).name} \xB7 ${dh(_.goal)}${_.weather==="rain"?" \xB7 rain":""}</small></div><em>${T?"\u2605".repeat(A)+"\u2606".repeat(3-A):"Locked"}</em></li>`}).join("")}for(let M of document.querySelectorAll("#diff button"))M.classList.toggle("on",+M.dataset.d===fe.diff);G("diff").style.visibility=["race","gp","elim","endu"].includes(fe.mode)?"visible":"hidden",G("trkName").textContent=k.lang==="ar"?i.ar:i.name,G("trkBlurb").textContent=We(i.blurb),G("laps").textContent=fe.laps,G("trkBest").textContent=fe.mode==="drift"?k.bestDrift[i.id]?"Record "+k.bestDrift[i.id].toLocaleString()+" pts":"":k.best[i.id]?"Best "+li(k.best[i.id]):"No lap set",G("carName").textContent=k.lang==="ar"?e.ar:e.name,G("carBlurb").textContent=e.cls+(k.lang==="ar"?"":". "+e.blurb),G("stSpeed").style.width=(e.top-40)/30*100+"%",G("stAcc").style.width=(e.acc-6)/7*100+"%",G("stGrip").style.width=(e.grip-.9)/.55*100+"%",G("stDrift").style.width=Zt((1.06-e.rear)*4+e.loose*.6,.1,1)*100+"%",G("paints").innerHTML=Hs.map(M=>`<button style="background:${wa(M)}" data-p="${M}" class="${Aa(e.id)===M?"on":""}" aria-label="Paint ${wa(M)}"></button>`).join("");let c=Ks(e.id);G("ups").innerHTML=t?Sh.map(([M,_])=>{let w=c[M],T=Zm(e,w);return`<button data-k="${M}" ${w>=3||k.credits<T?"disabled":""}><b>${_}</b><i>${"\u25CF".repeat(w)}${"\u25CB".repeat(3-w)}</i><small>${w>=3?"Max":T.toLocaleString()}</small></button>`}).join(""):"",ft("tabTrophies",fe.tab==="trophies"),fe.tab==="trophies"&&(G("trophies").innerHTML=$m.map(M=>{let _=M.get(),w=_>=M.need;return`<li class="${w?"done":""}"><b>${M.name}</b><small>${M.desc}</small><em>${w?"\u2713":Math.floor(_)+" / "+M.need}</em></li>`}).join("")),G("buyBtn").hidden=t,G("buyBtn").textContent=We("Unlock for")+" "+e.price.toLocaleString(),G("buyBtn").disabled=k.credits<e.price,ft("onlineBox",n),ft("lobby",!!it),ft("onlineJoin",!it);let h=G("startBtn");if(!t)h.disabled=!0,h.textContent=We("Car locked");else if(n)h.disabled=!(it&&Nt&&bi),h.textContent=We(it?Nt?bi?"Start duel":"Host starts the race":"Waiting for rival":"Join a room first");else if(s){let M=fe.ev,_=M===0||k.story[Pi[M-1].id]>0;h.disabled=!_,h.textContent=_?"Start event":"Event locked"}else h.disabled=!1,h.textContent=fe.mode==="gp"?k.gp&&!k.gp.done?We("Continue")+" \xB7 "+We("Round")+" "+(k.gp.round+1)+"/"+Ho.length:We("Start Grand Prix"):We({race:"Start race",trial:"Start time trial",drift:"Start drift attack",elim:"Start knockout",endu:"Start endurance"}[fe.mode]);it||(G("onlineMsg").textContent=Ma?"Create a room and send the 5-letter code to a friend.":"Supabase keys are not set in config.js yet, so rooms only connect between tabs of this browser (handy for testing)."),pg(),fM(),hM();let u=await uM(i);if(Sn[fe.track]!==i)return;G("trkLen").textContent=(u.len/1e3).toFixed(2)+" km";let d=G("trkMap").getContext("2d");d.clearRect(0,0,120,90);let f=1e9,p=-1e9,x=1e9,g=-1e9;for(let M of u.pts)f=Math.min(f,M.x),p=Math.max(p,M.x),x=Math.min(x,M.z),g=Math.max(g,M.z);let m=Math.min(104/(p-f),74/(g-x));d.beginPath(),u.pts.forEach((M,_)=>{let w=60+(M.x-(f+p)/2)*m,T=45+(M.z-(x+g)/2)*m;_?d.lineTo(w,T):d.moveTo(w,T)}),d.closePath(),d.lineJoin="round",d.strokeStyle="#f3f4f6",d.lineWidth=3,d.stroke();let y=G("board");y.hidden=!0,Ma&&fe.mode!=="drift"&&Am(i.id).then(M=>{Sn[fe.track]!==i||!M||!M.length||(y.innerHTML=M.map((_,w)=>`<li><span>${w+1}. ${_.name.replace(/[<>&]/g,"")}</span><b>${li(_.ms)}</b></li>`).join(""),y.hidden=!1)})}var Eh=(i,e,t)=>{fe[i]=(fe[i]+t+e)%e};G("trkPrev").onclick=()=>{Eh("track",Sn.length,-1),fe.laps=Sn[fe.track].laps,ht()};G("trkNext").onclick=()=>{Eh("track",Sn.length,1),fe.laps=Sn[fe.track].laps,ht()};var Ah=()=>{let i=gt[fe.car];k.owned.includes(i.id)&&(k.car=i.id,Ut(),Rh(),lM()),vr(),ht()};G("carPrev").onclick=()=>{Eh("car",gt.length,-1),Ah()};G("carNext").onclick=()=>{Eh("car",gt.length,1),Ah()};G("lapMinus").onclick=()=>{fe.laps=Math.max(1,fe.laps-1),ht()};G("lapPlus").onclick=()=>{fe.laps=Math.min(15,fe.laps+1),ht()};G("tabs").onclick=i=>{let e=i.target.closest("button");e&&(fe.tab=e.dataset.tab,fe.mode=fe.tab==="online"?"online":fe.mode==="online"?"race":fe.mode,(fe.tab==="garage"||fe.tab==="tune")&&vr(),ht())};G("modeSeg").onclick=i=>{let e=i.target.closest("button");e&&(fe.mode=e.dataset.mode,ht())};G("chPrev").onclick=()=>{fe.ch=(fe.ch+xs.length-1)%xs.length,fe.ev=Pi.indexOf(xs[fe.ch].events[0]),ht()};G("chNext").onclick=()=>{fe.ch=(fe.ch+1)%xs.length,fe.ev=Pi.indexOf(xs[fe.ch].events[0]),ht()};G("events").onclick=i=>{let e=i.target.closest("li");e&&!e.classList.contains("locked")&&(fe.ev=+e.dataset.i,ht())};G("gfxBtn").onclick=()=>{let i=["auto","high","medium","low"];k.gfx=i[(i.indexOf(k.gfx)+1)%4],Ut(),zo(k.gfx==="auto"?js?"medium":"high":k.gfx),ht()};G("ups").onclick=i=>{let e=i.target.closest("button");if(!e||e.disabled)return;let t=gt[fe.car],n=Ks(t.id),s=Zm(t,n[e.dataset.k]);k.credits<s||(k.credits-=s,n[e.dataset.k]++,Ut(),Rh(),e.dataset.k==="eng"&&(Te.quiet=!1,Te.turboDemo()),Te.init(),Te.wrench(),vr(),ht())};var dM={medium:"Assist medium: the car helps catch slides, but it will oversteer and understeer if you overdrive it.",off:"Assist off: no automatic counter-steer, no throttle cut. Slides are yours to catch.",low:"Assist low: half-strength counter-steer in a slide and a gentle throttle cut past 24\xB0 of slip.",full:"Assist full: the car counter-steers for you in a slide and eases the throttle before it becomes a spin."};function fM(){document.documentElement.lang=k.lang;for(let i of["menu","results","pause"])G(i).dir=k.lang==="ar"?"rtl":"ltr";for(let i of document.querySelectorAll("[data-t]"))i.dataset.t||(i.dataset.t=i.textContent.trim()),i.textContent=We(i.dataset.t)}var pM=()=>{Ut(),Rh(),vr(),ht()};G("lookRows").onclick=i=>{let e=i.target.closest("button");e&&(br(gt[fe.car].id)[e.dataset.k]=+e.dataset.v,pM())};G("tuneRows").onclick=i=>{let e=i.target.closest("button");if(!e)return;let t=Th(gt[fe.car].id);e.dataset.c?t.tyre=e.dataset.c:t[e.dataset.k]=Zt(t[e.dataset.k]+ +e.dataset.d,-2,2),Ut(),ht()};G("langSeg").onclick=i=>{let e=i.target.closest("button");e&&(k.lang=e.dataset.l,Ut(),ht())};G("zoomSeg").onclick=i=>{let e=i.target.closest("button");e&&(k.zoom=+e.dataset.z,Ut(),qd(),ht())};var og=i=>{k.zoom=Zt(Math.round((k.zoom+i)*100)/100,.7,3.4),Ut(),qd(),G("zoomVal").textContent=Math.round(k.zoom/1.5*100)+"%",b&&(ig(0),Hm(0))};G("zoomOut").onclick=()=>og(.15);G("zoomIn").onclick=()=>og(-.15);G("unitSeg").onclick=i=>{let e=i.target.closest("button");e&&(k.units=e.dataset.u,Ut(),ht())};G("wxSeg").onclick=i=>{let e=i.target.closest("button");e&&(fe.wx=e.dataset.w,ht())};G("rivMinus").onclick=()=>{fe.rivals=Math.max(1,fe.rivals-2),ht()};G("rivPlus").onclick=()=>{fe.rivals=Math.min(11,fe.rivals+2),ht()};G("musicVol").oninput=i=>{k.mvol=Te.mvol=i.target.value/100,Ut(),Te.init(),Te.music(!Zi())};G("sfxVol").oninput=i=>{k.svol=Te.vol=i.target.value/100,Ut(),Te.setVolumes()};G("engVol").oninput=i=>{k.evol=Te.evol=i.target.value/100,Ut(),Te.setVolumes()};G("auEng").innerHTML='<option value="">Engine audition: off</option>'+Object.entries(ch).map(([i,e])=>'<option value="'+i+'">'+e.label+"</option>").join("");var lg=!1,cg=()=>{let i=G("auEng").value;lg=!!i,Te.init(),i&&Te.music(!1),Te.audition(i,+G("auRpm").value,G("auLoad").value/100);let e=Te.meter();G("auMeter").textContent=Te.state+" \xB7 "+G("auRpm").value+" rpm \xB7 rate "+(G("auRpm").value/3e3).toFixed(2)+"\xD7 \xB7 "+(e.rms?e.rms.toFixed(0)+" dB rms, peak "+e.peak.toFixed(0)+" dB":"")+" \xB7 loop starts "+Te.stats.starts+", pops "+Te.stats.shots};for(let i of["auEng","auRpm","auLoad"])G(i).oninput=cg;G("auUp").onclick=()=>{Te.dipUntil=Te.ctx.currentTime+.13,Te.shot("pop",.55)};G("auPop").onclick=()=>Te.shot("bang"+(1+(Math.random()*3|0)),.7,!0);G("auCrk").onclick=()=>Te.shot("crackle",.5);G("resetBtn").onclick=()=>{if(confirm(We("Erase all progress, cars and settings?"))){try{localStorage.removeItem(Wd)}catch{}location.reload()}};G("tcBtn").onclick=()=>{k.tc=!k.tc,Ut(),Yt(k.tc?"Traction control on: power is trimmed to what the tyres can take.":"Traction control off: full throttle will spin the wheels and step the tail out."),ht()};G("absBtn").onclick=()=>{k.abs=!k.abs,Ut(),Yt(k.abs?"ABS on: you can brake and steer together.":"ABS off: full braking locks the fronts and the car ploughs straight on."),ht()};G("sensBtn").onclick=()=>{k.sens=k.sens<.9?1:k.sens>1.1?.75:1.3,Ut(),ht()};G("devBtn").onclick=()=>{if(!k.dev){if(prompt("Developer password")!=="Monalisa")return Yt("Wrong password");k.dev=!0,Ut(),Yt("Developer mode on")}ht()};G("devBox").onclick=i=>{let e=i.target.closest("button");if(!e)return;let t=e.dataset.a;if(t==="cars"&&(k.owned=gt.map(n=>n.id),Yt("All cars unlocked")),t==="cash"&&(k.credits+=5e4,Yt("+50,000 credits")),t==="ups"){for(let n of gt)k.up[n.id]={eng:3,tyre:3,nitro:3,armor:3};Yt("All upgrades maxed")}t==="box"&&(k.boxDay="",Yt("Daily box is ready again")),t==="god"&&(k.devGod=!k.devGod),t==="scale"&&(k.devScale=k.devScale===1?.5:k.devScale===.5?2:1),t==="tele"&&(G("tele").hidden=!G("tele").hidden),t==="off"&&(k.dev=!1,k.devGod=!1,k.devScale=1),Ut(),vr(),ht()};var Zd=()=>{let i=new Date;return i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate()},Wt={on:!1,t:0,g:null,lid:null,beams:[],fx:null,reward:null};function mM(){let i=new yt,e=new Me({color:8014374,roughness:.8}),t=new Me({color:16761370,metalness:1,roughness:.25,emissive:6965760,emissiveIntensity:.5}),n=new Me({color:1323115,roughness:.5,metalness:.3}),s=(o,l,c,h,u,d=i)=>{let f=new xe(o,l);return f.position.set(c,h,u),f.castShadow=!0,d.add(f),f};s(new Qe(2.4,1.3,1.7),n,0,.65,0);for(let o of[-1.1,0,1.1])s(new Qe(.16,1.36,1.76),t,o,.66,0);for(let o of[-.8,.8])s(new Qe(2.46,.14,.14),t,0,.1,o);for(let o of[-1.25,1.25])s(new lr(.2,.05,8,16),t,o,.75,0).rotation.y=Math.PI/2;let r=new yt;r.position.set(0,1.3,-.85),i.add(r),s(new Qe(2.5,.34,1.8),n,0,.17,.85,r);for(let o of[-1.1,0,1.1])s(new Qe(.17,.38,1.84),t,o,.17,.85,r);s(new yn(.3,.3,.08,20),t,0,.72,.87).rotation.x=Math.PI/2,s(new Qe(.12,.28,.1),n,0,.7,.92);let a=[];for(let o=0;o<7;o++){let l=new xe(new Kn(.9,9,10,1,!0).translate(0,4.5,0),new rt({color:o%2?16771496:16761370,transparent:!0,opacity:0,blending:Mn,depthWrite:!1,side:$t}));l.position.y=1.2,l.rotation.set((Math.random()-.5)*1.1,0,(Math.random()-.5)*1.1),i.add(l),a.push(l)}i.visible=!1,xi.add(i),Object.assign(Wt,{g:i,lid:r,beams:a,fx:new Gs(Ge,500,!0)})}function gM(){let i=gt.filter(n=>!k.owned.includes(n.id)),e=Math.random();if(e<.1&&i.length){let n=i[Math.random()*Math.min(3,i.length)|0];return k.owned.push(n.id),["New car",n.name]}if(e<.28){let n=k.owned[Math.random()*k.owned.length|0],s=Ks(n),r=Sh.map(a=>a[0]).filter(a=>s[a]<3);if(r.length){let a=r[Math.random()*r.length|0];return s[a]++,["Free upgrade",gt.find(o=>o.id===n).name+" \xB7 "+Sh.find(o=>o[0]===a)[1]+" "+s[a]]}}if(e<.45){let n=150+(Math.random()*6|0)*50;return k.xp+=n,["Driver XP","+"+n+" XP"]}let t=[300,400,500,750,1e3,1500,2500][Math.min(6,Math.floor(Math.pow(Math.random(),1.8)*7))];return k.credits+=t,["Credits","+"+t.toLocaleString()]}function xM(){if(!(k.boxDay===Zd()||Wt.on)){Te.init(),Wt.g||mM(),xr.stop(),wh(),yh++,b&&Ra(),Go(null),xi.visible=!0,Ta="garage",Qn&&(Qn.root.visible=!1),Wt.g.visible=!0,Wt.on=!0,Wt.t=0,Wt.lid.rotation.x=0,Wt.reward=null,ft("menu",!1);for(let i of Wt.beams)i.material.opacity=0}}function hg(i){let e=Wt.t+=i,t=Wt.g;qe.fov=36,qe.updateProjectionMatrix();let n=e*.5;if(qe.position.set(Math.sin(n)*7.5,3.2-Math.min(e,2)*.4,Math.cos(n)*7.5),qe.lookAt(0,1+Math.min(1,Math.max(0,e-2.2))*.8,0),kt.position.set(6,12,8),kt.target.position.set(0,0,0),e<2.2){let s=e/2.2;t.rotation.z=Math.sin(e*34)*.05*s,t.rotation.x=Math.cos(e*29)*.04*s,t.position.y=Math.abs(Math.sin(e*9))*.12*s,Math.random()<.2&&Te.tone(200+s*400,.05,.03,"square")}else{t.rotation.set(0,0,0),t.position.y=0;let s=Math.min(1,(e-2.2)/.5);Wt.lid.rotation.x=-s*s*2.1;for(let r of Wt.beams)r.material.opacity=Math.min(.13,(e-2.2)*.4)*(.6+.4*Math.sin(e*5+r.rotation.x*9)),r.rotation.y+=i*.6;if(Wt.reward||(Wt.reward=gM(),k.boxDay=Zd(),Ut(),Te.beep(660,.25),setTimeout(()=>Te.beep(990,.5),180),G("boxKind").textContent=We(Wt.reward[0]),G("boxWhat").textContent=Wt.reward[1]),e<4.5&&Math.random()<.9)for(let r=0;r<4;r++){let a=Math.random();Wt.fx.emit((Math.random()-.5)*1.6,1.4,(Math.random()-.5)*1,(Math.random()-.5)*5,5+Math.random()*6,(Math.random()-.5)*5,1.6+Math.random(),.22,0,1,a<.5?.85:.5,a<.5?.3:.9,1,7)}e>3&&G("boxWin").hidden&&ft("boxWin",!0)}Wt.fx.mat.uniforms.uScale.value=Tt.domElement.height/(2*Math.tan(qe.fov*Math.PI/360)),Wt.fx.update(i)}G("boxBtn").onclick=xM;G("boxTake").onclick=()=>{ft("boxWin",!1),Wt.on=!1,Wt.g.visible=!1,Wt.fx.clear(),Wt.fx.update(0),Qn&&(Qn.root.visible=!0),Ta="",ft("menu",!0),vr(),ht(),Jd()};G("assistBtn").onclick=()=>{let i=["full","medium","low","off"];k.assist=i[(i.indexOf(k.assist)+1)%4],Ut(),Yt(dM[k.assist]),ht()};G("rulesSeg").onclick=i=>{let e=i.target.closest("button");e&&(k.rules=e.dataset.r,Ut(),Yt(k.rules==="circuit"?"Professional: fuel strategy, tyre wear, full parts damage, pit crew, clean AI. No pickups.":"Arcade: no fuel, light damage, nitro, repair kits, coins, slipstream, random events, pushier AI."),ht())};G("copyLink").onclick=()=>{let i=location.origin+location.pathname+"?room="+it.code;(navigator.clipboard?navigator.clipboard.writeText(i):Promise.reject()).then(()=>Yt("Invite link copied"),()=>prompt("Copy this invite link",i))};G("gasBtn").onclick=()=>{k.autoGas=!k.autoGas,Ut(),ht()};G("daily").onclick=()=>{let i=Fd(Sn);Te.init(),An={mode:i.mode,track:i.track,laps:3,diff:1,weather:i.weather,daily:i},Ji(An)};var bM={"Amm Saber":"#ffc21a",Zizo:"#e3262e","Captain Nadia":"#19a7ce","El Basha":"#f3f4f6",Hassan:"#2fb457",Hussein:"#2fb457"},Li=null;function vM(i){Li={ev:i,i:0},ft("story",!0),ug()}function ug(){let[i,e]=Li.ev.intro[Li.i];G("stWho").textContent=i,G("stText").textContent=e,G("stEvent").textContent=Li.ev.title+" \xB7 "+dh(Li.ev.goal),G("stFace").textContent=i[0],G("stFace").style.background=bM[i]||"#a5a9b4",G("stNext").textContent=Li.i===Li.ev.intro.length-1?"Start":"Next"}function dg(){let i=Li.ev;Li=null,ft("story",!1),An={mode:i.mode,track:i.track,laps:i.laps,diff:i.diff??1,weather:i.weather||"clear",rivals:i.rivals,story:i},Ji(An)}G("stNext").onclick=()=>{Te.init(),++Li.i>=Li.ev.intro.length?dg():ug()};G("stSkip").onclick=dg;G("diff").onclick=i=>{let e=i.target.closest("button");e&&(fe.diff=+e.dataset.d,ht())};G("paints").onclick=i=>{let e=i.target.closest("button");e&&(k.paint[gt[fe.car].id]=+e.dataset.p,Ut(),Ah())};G("buyBtn").onclick=()=>{let i=gt[fe.car];k.credits>=i.price&&!k.owned.includes(i.id)&&(k.credits-=i.price,k.owned.push(i.id),Te.init(),Te.beep(880,.3),Yt(i.name+" unlocked"),Ah())};G("name").onchange=i=>{k.name=(i.target.value.trim()||k.name).slice(0,16),Ut(),Rh(),ht()};G("muteBtn").onclick=()=>{Te.init(),Xd(!k.muted),Te.music(!Zi())};addEventListener("pointerdown",()=>{Te.ctx||(Te.init(),Te.music(!Zi()))},{once:!1});G("startBtn").onclick=()=>{if(fe.tab==="career")return Te.init(),vM(Pi[fe.ev]);if((fe.mode==="elim"||fe.mode==="endu")&&fe.tab==="quick"){let e=fe.mode==="elim";return An={mode:"race",elim:e,endu:!e,track:Sn[fe.track].id,laps:e?fe.rivals:Math.max(10,fe.laps*4),diff:fe.diff,rules:k.rules,nRivals:fe.rivals,weather:fe.wx},Ji(An)}if(fe.mode==="gp"&&fe.tab==="quick")return Te.init(),(!k.gp||k.gp.done)&&rM(),An=rg(),Ji(An);let i={mode:fe.mode,track:Sn[fe.track].id,laps:fe.laps,diff:fe.diff,rules:fe.mode==="online"?"circuit":k.rules,nRivals:fe.rivals,weather:fe.mode==="online"?void 0:fe.wx};if(fe.mode==="online"){if(!(it&&Nt&&bi))return;i.rainAt=Math.random()<.3?18+Math.random()*30:1e9,it.send({k:"start",track:i.track,laps:i.laps,rainAt:i.rainAt})}if(js)try{document.documentElement.requestFullscreen?.().then(()=>screen.orientation?.lock?.("landscape").catch(()=>{})).catch(()=>{})}catch{}An=i,Ji(i)};var An=null,bh=!0;G("pauseBtn").onclick=Yd;G("resumeBtn").onclick=Yd;G("restartBtn").onclick=()=>{let i=An;Ra(),Ji(i)};G("quitBtn").onclick=Ea;G("menuBtn").onclick=Ea;G("againBtn").onclick=()=>{if(An.gp)return!k.gp||k.gp.done?Ea():(An=rg(),Ji(An));if(An.mode==="online"||An.story&&bh)return Ea();let i=An;Ra(),Ji(i)};var it=null,Nt=null,bi=!1,$d=!1;async function Qd(i){if(!/^[A-Z0-9]{5}$/.test(i)){G("onlineMsg").textContent="Room codes are 5 letters or digits.";return}Te.init(),G("onlineMsg").textContent="Connecting\u2026";let e=new No;e.onPeers=zm,e.onMessage=yM;try{await e.join(i,ef())}catch(t){G("onlineMsg").textContent=t.message;return}it=e,bi=!0,Nt=null,G("lobbyCode").textContent=i,G("onlineMsg").textContent="Share the code. The race starts when the host presses start.",ht(),zm(it.peers)}function fg(i){it&&it.leave(),it=null,Nt=null,b&&b.mode==="online"&&Ea(),ht(),i&&(G("onlineMsg").textContent=i)}function zm(i){if(!it)return;let e=[it.meta,...Object.values(i)].sort((n,s)=>n.t-s.t||(n.id<s.id?-1:1));if(e.indexOf(it.meta)>1)return fg("That room already has two drivers.");let t=Nt;Nt=e.find(n=>n.id!==it.id)||null,bi=e[0]===it.meta,t&&!Nt&&b&&b.mode==="online"&&Yt("Your rival left the race"),!t&&Nt&&!Zi()&&Yt(Nt.name+" joined"),Zi()||ht()}var ef=()=>({name:k.name,car:k.car,paint:Aa(k.car),up:{...Ks(k.car)},look:{...br(k.car)}}),tf=i=>i.car+"|"+i.paint+"|"+JSON.stringify(i.up||{})+JSON.stringify(i.look||{});function Rh(){if(!it)return;let i=ef();it.setMeta(i),it.send({k:"me",i})}function _M(){let i=b.remote,e=gt.find(n=>n.id===Nt.car)||gt[0],t=new Ki(e,Nt.paint??e.color,Nt.name||"Rival",Nt.up,Nt.look);for(let n of["x","z","th","px","pz","pth","vx","vz","r","y","nb","idx","prog","lap","laps","lapStart","finished","finishTime","wrong"])t[n]=i[n];t.isRemote=!0,t.look=tf(Nt),t.noNitro=i.noNitro,b.cars[b.cars.indexOf(i)]=t,b.remote=t,Ge.remove(i.root),i.dispose(),Ge.add(t.root),b.orderKey=""}function pg(){if(!it)return;let i=(e,t)=>`<li><i style="background:${wa(e.paint??8947848)}"></i>${e.name}${t?" (you)":""} \u2014 ${(gt.find(n=>n.id===e.car)||gt[0]).name}${e.up&&Object.values(e.up).some(n=>n)?" <small>("+Sh.filter(([n])=>e.up[n]).map(([n,s])=>s+" "+e.up[n]).join(", ")+")</small>":""}${(t?bi:!bi)?" \xB7 host":""}</li>`;G("lobbyList").innerHTML=i(it.meta,!0)+(Nt?i(Nt,!1):"<li>Waiting for a second driver\u2026</li>")}function yM(i){if(i.k==="start"&&!Zi()){let e={mode:"online",track:i.track,laps:i.laps,diff:1,rainAt:i.rainAt};An=e,Ji(e)}else if(i.k==="loaded")$d=!0,Kd();else if(i.k==="go")Mh();else if(i.k==="s"&&b&&b.remote)b.remote.netApply(i.p,performance.now());else if(i.k==="me"&&Nt)Object.assign(Nt,i.i),b&&b.remote&&b.remote.look!==tf(Nt)?_M():Zi()||pg();else if(i.k==="ping")it.send({k:"pong",t:i.t});else if(i.k==="pong"&&b)b.ping=b.ping==null?performance.now()-i.t:b.ping+(performance.now()-i.t-b.ping)*.3;else if(i.k==="d"&&b&&b.remote){let e=b.remote;e.hitL=i.l,e.hitN=i.n,e.hitX=e.x,e.hitZ=e.z,qs(e,i.p,!0)}else if(i.k==="hit"&&b&&b.remote&&b.state==="go"){let e=b.player;if(b.t-(e.lastHitT||-9)>.25){e.lastHitT=b.t;let t=-i.n[0],n=-i.n[1],s=i.v;e.vx+=t*s*.5,e.vz+=n*s*.5;let r=e.toLocal(b.remote.x,b.remote.z);e.r+=Zt(-r[0]*Math.sign(r[1]||1)*s*.06,-1.2,1.2),e.hitN=[t,n],e.hitX=(e.x+b.remote.x)/2,e.hitZ=(e.z+b.remote.z)/2,e.hitL=e.toLocal(e.hitX,e.hitZ),qs(e,s*.8)}}else if(i.k==="st"&&b&&b.remote){let e=b.remote;["front","rear","left","right"].forEach((n,s)=>{e.dmg[n]=i.d[s]}),e.tyre=i.ty,e.wetTyres=!!i.w,i.lm.forEach((n,s)=>{e.lamps[s].ok=!!n}),e.setLights(!!i.lo),i.pt&&(e.parts.engine=i.pt[0],e.parts.gearbox=i.pt[1],e.parts.wheels=i.pt.slice(2))}else i.k==="fix"&&b&&b.remote?(b.remote.repair(),b.remote.wetTyres=!!i.w):i.k==="fin"&&b&&b.remote&&(b.remote.finished=!0,b.remote.finishTime=i.t,b.player.finished||en(b.remote.name+" finished",!0,1500))}G("createRoom").onclick=()=>Qd(No.makeCode());G("joinRoom").onclick=()=>Qd(G("roomCode").value.trim().toUpperCase());G("leaveRoom").onclick=()=>fg("");var Oo=performance.now(),gh=1/60,Od=0;function mg(i){requestAnimationFrame(mg);{let t=Math.min(.1,Math.max(0,(i-Oo)/1e3));if(gh+=(t-gh)*.04,Od+=t,Od>1.2&&xn!=="low"){Od=0;let n=Math.min(devicePixelRatio||1,1.5),s=Math.max(.6,n*.55);gh>1/50&&$n>s?($n=Math.max(s,$n-.12),Bo()):gh<1/58&&$n<n&&($n=Math.min(n,$n+.06),Bo())}}let e=Math.max(0,Math.min(.05,(i-Oo)/1e3))*(k.dev&&k.devScale||1);if(Oo=i,lg&&!Zi()&&cg(),b){if(!Ws)try{ng(e)}catch(t){window.__errOnce||(window.__errOnce=1,console.error("RACE ERROR "+t.message+" cars="+b.cars.length+" t="+b.t+" state="+b.state+" mode="+b.mode+" attract="+b.attract+" keys="+Object.keys(b).slice(0,12)))}}else if(Wt.on)hg(e);else if(Xt.on)ag(e);else if(Qn){zd+=e*.35,Qn.root.rotation.y=zd;let t=innerWidth<820;qe.fov=38,qe.updateProjectionMatrix();let n=k.lang==="ar"?-1:1;qe.position.set(t?0:-1.6*n,3,t?13:11.5),qe.lookAt(t?0:-2.9*n,t?1.8:-.4,0),kt.position.set(6,12,8),kt.target.position.set(0,0,0)}xr.on?xr.tick(i):Hm(e)}(async function(){Go(null),Te.mvol=k.mvol,Te.vol=k.svol,Te.evol=k.evol,Xd(k.muted),fe.ev=sg(),fe.ch=Pi[fe.ev].ci,await _m(),vr(),ht(),requestAnimationFrame(mg),window.__booted=!0;let e=new URLSearchParams(location.search).get("room");e&&(fe.tab="online",fe.mode="online",ht(),Qd(e.toUpperCase())),window.__game={get R(){return b},arena:Xt,arenaTick:ag,cam3:()=>qe.position,paused:()=>Ws,boxTick:hg,box:Wt,touch:Zn,readInput:Wm,TUNE:He,physics:Jm,get acc(){return Sa},audio:Te,startEvent:tg,checkTrophies:Jd,setGfx:zo,get gfx(){return xn},sim(t,n=1/60){for(let s=0;s<Math.round(t/n)&&b;s++)ng(n)},CARS:gt,renderer:Tt,sun:kt,keys:En,save:k,startRace:Ji,sel:fe,TRACKS:Sn}})();})();
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
