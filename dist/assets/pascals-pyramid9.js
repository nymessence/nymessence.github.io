/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sp={ROTATE:0,DOLLY:1,PAN:2},bp={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},$s=0,Wn=1,eo=2,ms=1,to=2,er=3,Jt=0,mt=1,Zt=2,Kt=0,Oi=1,jn=2,Xn=3,qn=4,io=5,Ni=100,ro=101,no=102,Yn=103,Zn=104,ao=200,so=201,oo=202,lo=203,gs=204,_s=205,co=206,uo=207,ho=208,po=209,fo=210,mo=0,go=1,_o=2,An=3,vo=4,xo=5,Mo=6,yo=7,vs=0,So=1,bo=2,Wt=0,wo=1,To=2,Eo=3,Ao=4,Lo=5,xs=300,Fi=301,Gi=302,Ln=303,Cn=304,Or=306,Dn=1e3,Lt=1001,Pn=1002,ot=1003,Kn=1004,Wr=1005,yt=1006,Co=1007,ir=1008,pi=1009,Do=1010,Po=1011,Ms=1012,Ro=1013,li=1014,ci=1015,rr=1016,Io=1017,No=1018,Ui=1020,zo=1021,Ct=1023,Oo=1024,Uo=1025,ui=1026,Bi=1027,Fo=1028,Go=1029,Bo=1030,ko=1031,Vo=1033,jr=33776,Xr=33777,qr=33778,Yr=33779,Jn=35840,Qn=35841,$n=35842,ea=35843,Ho=36196,ta=37492,ia=37496,ra=37808,na=37809,aa=37810,sa=37811,oa=37812,la=37813,ca=37814,ua=37815,ha=37816,da=37817,pa=37818,fa=37819,ma=37820,ga=37821,Zr=36492,Wo=36283,_a=36284,va=36285,xa=36286,fi=3e3,ze=3001,jo=3200,Xo=3201,ys=0,qo=1,Rt="srgb",Nr="srgb-linear",Kr=7680,Yo=519,Ma=35044,ya="300 es",Rn=1035;class _i{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const i=t.slice(0);for(let r=0,n=i.length;r<n;r++)i[r].call(this,e);e.target=null}}}const it=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jr=Math.PI/180,Sa=180/Math.PI;function nr(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(it[a&255]+it[a>>8&255]+it[a>>16&255]+it[a>>24&255]+"-"+it[e&255]+it[e>>8&255]+"-"+it[e>>16&15|64]+it[e>>24&255]+"-"+it[t&63|128]+it[t>>8&255]+"-"+it[t>>16&255]+it[t>>24&255]+it[i&255]+it[i>>8&255]+it[i>>16&255]+it[i>>24&255]).toLowerCase()}function lt(a,e,t){return Math.max(e,Math.min(t,a))}function Zo(a,e){return(a%e+e)%e}function Qr(a,e,t){return(1-t)*a+t*e}function ba(a){return(a&a-1)===0&&a!==0}function In(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function ur(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function ht(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class Le{constructor(e=0,t=0){Le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),n=this.x-e.x,o=this.y-e.y;return this.x=n*i-o*r+e.x,this.y=n*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ft{constructor(){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,n,o,s,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=s,u[3]=t,u[4]=n,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,n=this.elements,o=i[0],s=i[3],c=i[6],l=i[1],u=i[4],f=i[7],h=i[2],m=i[5],x=i[8],p=r[0],d=r[3],y=r[6],S=r[1],M=r[4],v=r[7],E=r[2],A=r[5],D=r[8];return n[0]=o*p+s*S+c*E,n[3]=o*d+s*M+c*A,n[6]=o*y+s*v+c*D,n[1]=l*p+u*S+f*E,n[4]=l*d+u*M+f*A,n[7]=l*y+u*v+f*D,n[2]=h*p+m*S+x*E,n[5]=h*d+m*M+x*A,n[8]=h*y+m*v+x*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],o=e[4],s=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*s*l-i*n*u+i*s*c+r*n*l-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],o=e[4],s=e[5],c=e[6],l=e[7],u=e[8],f=u*o-s*l,h=s*c-u*n,m=l*n-o*c,x=t*f+i*h+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/x;return e[0]=f*p,e[1]=(r*l-u*i)*p,e[2]=(s*i-r*o)*p,e[3]=h*p,e[4]=(u*t-r*c)*p,e[5]=(r*n-s*t)*p,e[6]=m*p,e[7]=(i*c-l*t)*p,e[8]=(o*t-i*n)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,n,o,s){const c=Math.cos(n),l=Math.sin(n);return this.set(i*c,i*l,-i*(c*o+l*s)+o+e,-r*l,r*c,-r*(-l*o+c*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply($r.makeScale(e,t)),this}rotate(e){return this.premultiply($r.makeRotation(-e)),this}translate(e,t){return this.premultiply($r.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $r=new ft;function Ss(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function zr(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function hi(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Rr(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const en={[Rt]:{[Nr]:hi},[Nr]:{[Rt]:Rr}},at={legacyMode:!0,get workingColorSpace(){return Nr},set workingColorSpace(a){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(a,e,t){if(this.legacyMode||e===t||!e||!t)return a;if(en[e]&&en[e][t]!==void 0){const i=en[e][t];return a.r=i(a.r),a.g=i(a.g),a.b=i(a.b),a}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(a,e){return this.convert(a,this.workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this.workingColorSpace)}},bs={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},We={r:0,g:0,b:0},Tt={h:0,s:0,l:0},hr={h:0,s:0,l:0};function tn(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}function dr(a,e){return e.r=a.r,e.g=a.g,e.b=a.b,e}class Re{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=at.workingColorSpace){return this.r=e,this.g=t,this.b=i,at.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=at.workingColorSpace){if(e=Zo(e,1),t=lt(t,0,1),i=lt(i,0,1),t===0)this.r=this.g=this.b=i;else{const n=i<=.5?i*(1+t):i+t-i*t,o=2*i-n;this.r=tn(o,n,e+1/3),this.g=tn(o,n,e),this.b=tn(o,n,e-1/3)}return at.toWorkingColorSpace(this,r),this}setStyle(e,t=Rt){function i(n){n!==void 0&&parseFloat(n)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let n;const o=r[1],s=r[2];switch(o){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(n[1],10))/255,this.g=Math.min(255,parseInt(n[2],10))/255,this.b=Math.min(255,parseInt(n[3],10))/255,at.toWorkingColorSpace(this,t),i(n[4]),this;if(n=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(n[1],10))/100,this.g=Math.min(100,parseInt(n[2],10))/100,this.b=Math.min(100,parseInt(n[3],10))/100,at.toWorkingColorSpace(this,t),i(n[4]),this;break;case"hsl":case"hsla":if(n=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)){const c=parseFloat(n[1])/360,l=parseFloat(n[2])/100,u=parseFloat(n[3])/100;return i(n[4]),this.setHSL(c,l,u,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const n=r[1],o=n.length;if(o===3)return this.r=parseInt(n.charAt(0)+n.charAt(0),16)/255,this.g=parseInt(n.charAt(1)+n.charAt(1),16)/255,this.b=parseInt(n.charAt(2)+n.charAt(2),16)/255,at.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(n.charAt(0)+n.charAt(1),16)/255,this.g=parseInt(n.charAt(2)+n.charAt(3),16)/255,this.b=parseInt(n.charAt(4)+n.charAt(5),16)/255,at.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Rt){const i=bs[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hi(e.r),this.g=hi(e.g),this.b=hi(e.b),this}copyLinearToSRGB(e){return this.r=Rr(e.r),this.g=Rr(e.g),this.b=Rr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return at.fromWorkingColorSpace(dr(this,We),e),lt(We.r*255,0,255)<<16^lt(We.g*255,0,255)<<8^lt(We.b*255,0,255)<<0}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.fromWorkingColorSpace(dr(this,We),t);const i=We.r,r=We.g,n=We.b,o=Math.max(i,r,n),s=Math.min(i,r,n);let c,l;const u=(s+o)/2;if(s===o)c=0,l=0;else{const f=o-s;switch(l=u<=.5?f/(o+s):f/(2-o-s),o){case i:c=(r-n)/f+(r<n?6:0);break;case r:c=(n-i)/f+2;break;case n:c=(i-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=at.workingColorSpace){return at.fromWorkingColorSpace(dr(this,We),t),e.r=We.r,e.g=We.g,e.b=We.b,e}getStyle(e=Rt){return at.fromWorkingColorSpace(dr(this,We),e),e!==Rt?`color(${e} ${We.r} ${We.g} ${We.b})`:`rgb(${We.r*255|0},${We.g*255|0},${We.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(Tt),Tt.h+=e,Tt.s+=t,Tt.l+=i,this.setHSL(Tt.h,Tt.s,Tt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Tt),e.getHSL(hr);const i=Qr(Tt.h,hr.h,t),r=Qr(Tt.s,hr.s,t),n=Qr(Tt.l,hr.l,t);return this.setHSL(i,r,n),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Re.NAMES=bs;let vi;class ws{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{vi===void 0&&(vi=zr("canvas")),vi.width=e.width,vi.height=e.height;const i=vi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=vi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=zr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),n=r.data;for(let o=0;o<n.length;o++)n[o]=hi(n[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(hi(t[i]/255)*255):t[i]=hi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Ts{constructor(e=null){this.isSource=!0,this.uuid=nr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let n;if(Array.isArray(r)){n=[];for(let o=0,s=r.length;o<s;o++)r[o].isDataTexture?n.push(rn(r[o].image)):n.push(rn(r[o]))}else n=rn(r);i.url=n}return t||(e.images[this.uuid]=i),i}}function rn(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?ws.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ko=0;class gt extends _i{constructor(e=gt.DEFAULT_IMAGE,t=gt.DEFAULT_MAPPING,i=Lt,r=Lt,n=yt,o=ir,s=Ct,c=pi,l=gt.DEFAULT_ANISOTROPY,u=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ko++}),this.uuid=nr(),this.name="",this.source=new Ts(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=n,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xs)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dn:e.x=e.x-Math.floor(e.x);break;case Lt:e.x=e.x<0?0:1;break;case Pn:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dn:e.y=e.y-Math.floor(e.y);break;case Lt:e.y=e.y<0?0:1;break;case Pn:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}gt.DEFAULT_IMAGE=null;gt.DEFAULT_MAPPING=xs;gt.DEFAULT_ANISOTROPY=1;class Je{constructor(e=0,t=0,i=0,r=1){Je.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,n=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*n,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*n,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*n,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*n,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,n;const o=e.elements,s=o[0],c=o[4],l=o[8],u=o[1],f=o[5],h=o[9],m=o[2],x=o[6],p=o[10];if(Math.abs(c-u)<.01&&Math.abs(l-m)<.01&&Math.abs(h-x)<.01){if(Math.abs(c+u)<.1&&Math.abs(l+m)<.1&&Math.abs(h+x)<.1&&Math.abs(s+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(s+1)/2,S=(f+1)/2,M=(p+1)/2,v=(c+u)/4,E=(l+m)/4,A=(h+x)/4;return y>S&&y>M?y<.01?(i=0,r=.707106781,n=.707106781):(i=Math.sqrt(y),r=v/i,n=E/i):S>M?S<.01?(i=.707106781,r=0,n=.707106781):(r=Math.sqrt(S),i=v/r,n=A/r):M<.01?(i=.707106781,r=.707106781,n=0):(n=Math.sqrt(M),i=E/n,r=A/n),this.set(i,r,n,t),this}let d=Math.sqrt((x-h)*(x-h)+(l-m)*(l-m)+(u-c)*(u-c));return Math.abs(d)<.001&&(d=1),this.x=(x-h)/d,this.y=(l-m)/d,this.z=(u-c)/d,this.w=Math.acos((s+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mi extends _i{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Je(0,0,e,t),this.scissorTest=!1,this.viewport=new Je(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new gt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:yt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ts(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Es extends gt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ot,this.minFilter=ot,this.wrapR=Lt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jo extends gt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ot,this.minFilter=ot,this.wrapR=Lt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ar{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,n,o,s){let c=i[r+0],l=i[r+1],u=i[r+2],f=i[r+3];const h=n[o+0],m=n[o+1],x=n[o+2],p=n[o+3];if(s===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f;return}if(s===1){e[t+0]=h,e[t+1]=m,e[t+2]=x,e[t+3]=p;return}if(f!==p||c!==h||l!==m||u!==x){let d=1-s;const y=c*h+l*m+u*x+f*p,S=y>=0?1:-1,M=1-y*y;if(M>Number.EPSILON){const E=Math.sqrt(M),A=Math.atan2(E,y*S);d=Math.sin(d*A)/E,s=Math.sin(s*A)/E}const v=s*S;if(c=c*d+h*v,l=l*d+m*v,u=u*d+x*v,f=f*d+p*v,d===1-s){const E=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=E,l*=E,u*=E,f*=E}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,n,o){const s=i[r],c=i[r+1],l=i[r+2],u=i[r+3],f=n[o],h=n[o+1],m=n[o+2],x=n[o+3];return e[t]=s*x+u*f+c*m-l*h,e[t+1]=c*x+u*h+l*f-s*m,e[t+2]=l*x+u*m+s*h-c*f,e[t+3]=u*x-s*f-c*h-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,n=e._z,o=e._order,s=Math.cos,c=Math.sin,l=s(i/2),u=s(r/2),f=s(n/2),h=c(i/2),m=c(r/2),x=c(n/2);switch(o){case"XYZ":this._x=h*u*f+l*m*x,this._y=l*m*f-h*u*x,this._z=l*u*x+h*m*f,this._w=l*u*f-h*m*x;break;case"YXZ":this._x=h*u*f+l*m*x,this._y=l*m*f-h*u*x,this._z=l*u*x-h*m*f,this._w=l*u*f+h*m*x;break;case"ZXY":this._x=h*u*f-l*m*x,this._y=l*m*f+h*u*x,this._z=l*u*x+h*m*f,this._w=l*u*f-h*m*x;break;case"ZYX":this._x=h*u*f-l*m*x,this._y=l*m*f+h*u*x,this._z=l*u*x-h*m*f,this._w=l*u*f+h*m*x;break;case"YZX":this._x=h*u*f+l*m*x,this._y=l*m*f+h*u*x,this._z=l*u*x-h*m*f,this._w=l*u*f-h*m*x;break;case"XZY":this._x=h*u*f-l*m*x,this._y=l*m*f-h*u*x,this._z=l*u*x+h*m*f,this._w=l*u*f+h*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],n=t[8],o=t[1],s=t[5],c=t[9],l=t[2],u=t[6],f=t[10],h=i+s+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-c)*m,this._y=(n-l)*m,this._z=(o-r)*m}else if(i>s&&i>f){const m=2*Math.sqrt(1+i-s-f);this._w=(u-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(n+l)/m}else if(s>f){const m=2*Math.sqrt(1+s-i-f);this._w=(n-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+f-i-s);this._w=(o-r)/m,this._x=(n+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,n=e._z,o=e._w,s=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*s+r*l-n*c,this._y=r*u+o*c+n*s-i*l,this._z=n*u+o*l+i*c-r*s,this._w=o*u-i*s-r*c-n*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,n=this._z,o=this._w;let s=o*e._w+i*e._x+r*e._y+n*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=i,this._y=r,this._z=n,this;const c=1-s*s;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*n+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,s),f=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=n*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),n=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(n),i*Math.cos(n),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,i=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6]*r,this.y=n[1]*t+n[4]*i+n[7]*r,this.z=n[2]*t+n[5]*i+n[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,n=e.elements,o=1/(n[3]*t+n[7]*i+n[11]*r+n[15]);return this.x=(n[0]*t+n[4]*i+n[8]*r+n[12])*o,this.y=(n[1]*t+n[5]*i+n[9]*r+n[13])*o,this.z=(n[2]*t+n[6]*i+n[10]*r+n[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,n=e.x,o=e.y,s=e.z,c=e.w,l=c*t+o*r-s*i,u=c*i+s*t-n*r,f=c*r+n*i-o*t,h=-n*t-o*i-s*r;return this.x=l*c+h*-n+u*-s-f*-o,this.y=u*c+h*-o+f*-n-l*-s,this.z=f*c+h*-s+l*-o-u*-n,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,n=e.elements;return this.x=n[0]*t+n[4]*i+n[8]*r,this.y=n[1]*t+n[5]*i+n[9]*r,this.z=n[2]*t+n[6]*i+n[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,n=e.z,o=t.x,s=t.y,c=t.z;return this.x=r*c-n*s,this.y=n*o-i*c,this.z=i*s-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return nn.copy(this).projectOnVector(e),this.sub(nn)}reflect(e){return this.sub(nn.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nn=new P,wa=new ar;class sr{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,n=-1/0,o=-1/0,s=-1/0;for(let c=0,l=e.length;c<l;c+=3){const u=e[c],f=e[c+1],h=e[c+2];u<t&&(t=u),f<i&&(i=f),h<r&&(r=h),u>n&&(n=u),f>o&&(o=f),h>s&&(s=h)}return this.min.set(t,i,r),this.max.set(n,o,s),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,n=-1/0,o=-1/0,s=-1/0;for(let c=0,l=e.count;c<l;c++){const u=e.getX(c),f=e.getY(c),h=e.getZ(c);u<t&&(t=u),f<i&&(i=f),h<r&&(r=h),u>n&&(n=u),f>o&&(o=f),h>s&&(s=h)}return this.min.set(t,i,r),this.max.set(n,o,s),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ii.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const n=i.attributes.position;for(let o=0,s=n.count;o<s;o++)ii.fromBufferAttribute(n,o).applyMatrix4(e.matrixWorld),this.expandByPoint(ii)}else i.boundingBox===null&&i.computeBoundingBox(),an.copy(i.boundingBox),an.applyMatrix4(e.matrixWorld),this.union(an);const r=e.children;for(let n=0,o=r.length;n<o;n++)this.expandByObject(r[n],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xi),pr.subVectors(this.max,Xi),xi.subVectors(e.a,Xi),Mi.subVectors(e.b,Xi),yi.subVectors(e.c,Xi),jt.subVectors(Mi,xi),Xt.subVectors(yi,Mi),ri.subVectors(xi,yi);let t=[0,-jt.z,jt.y,0,-Xt.z,Xt.y,0,-ri.z,ri.y,jt.z,0,-jt.x,Xt.z,0,-Xt.x,ri.z,0,-ri.x,-jt.y,jt.x,0,-Xt.y,Xt.x,0,-ri.y,ri.x,0];return!sn(t,xi,Mi,yi,pr)||(t=[1,0,0,0,1,0,0,0,1],!sn(t,xi,Mi,yi,pr))?!1:(fr.crossVectors(jt,Xt),t=[fr.x,fr.y,fr.z],sn(t,xi,Mi,yi,pr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return ii.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ft[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ft[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ft[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ft[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ft[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ft[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ft[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ft[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ft),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ft=[new P,new P,new P,new P,new P,new P,new P,new P],ii=new P,an=new sr,xi=new P,Mi=new P,yi=new P,jt=new P,Xt=new P,ri=new P,Xi=new P,pr=new P,fr=new P,ni=new P;function sn(a,e,t,i,r){for(let n=0,o=a.length-3;n<=o;n+=3){ni.fromArray(a,n);const s=r.x*Math.abs(ni.x)+r.y*Math.abs(ni.y)+r.z*Math.abs(ni.z),c=e.dot(ni),l=t.dot(ni),u=i.dot(ni);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>s)return!1}return!0}const Qo=new sr,qi=new P,on=new P;class Ur{constructor(e=new P,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Qo.setFromPoints(e).getCenter(i);let r=0;for(let n=0,o=e.length;n<o;n++)r=Math.max(r,i.distanceToSquared(e[n]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qi.subVectors(e,this.center);const t=qi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(qi,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(on.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qi.copy(e.center).add(on)),this.expandByPoint(qi.copy(e.center).sub(on))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gt=new P,ln=new P,mr=new P,qt=new P,cn=new P,gr=new P,un=new P;class As{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Gt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gt.copy(this.direction).multiplyScalar(t).add(this.origin),Gt.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ln.copy(e).add(t).multiplyScalar(.5),mr.copy(t).sub(e).normalize(),qt.copy(this.origin).sub(ln);const n=e.distanceTo(t)*.5,o=-this.direction.dot(mr),s=qt.dot(this.direction),c=-qt.dot(mr),l=qt.lengthSq(),u=Math.abs(1-o*o);let f,h,m,x;if(u>0)if(f=o*c-s,h=o*s-c,x=n*u,f>=0)if(h>=-x)if(h<=x){const p=1/u;f*=p,h*=p,m=f*(f+o*h+2*s)+h*(o*f+h+2*c)+l}else h=n,f=Math.max(0,-(o*h+s)),m=-f*f+h*(h+2*c)+l;else h=-n,f=Math.max(0,-(o*h+s)),m=-f*f+h*(h+2*c)+l;else h<=-x?(f=Math.max(0,-(-o*n+s)),h=f>0?-n:Math.min(Math.max(-n,-c),n),m=-f*f+h*(h+2*c)+l):h<=x?(f=0,h=Math.min(Math.max(-n,-c),n),m=h*(h+2*c)+l):(f=Math.max(0,-(o*n+s)),h=f>0?n:Math.min(Math.max(-n,-c),n),m=-f*f+h*(h+2*c)+l);else h=o>0?-n:n,f=Math.max(0,-(o*h+s)),m=-f*f+h*(h+2*c)+l;return i&&i.copy(this.direction).multiplyScalar(f).add(this.origin),r&&r.copy(mr).multiplyScalar(h).add(ln),m}intersectSphere(e,t){Gt.subVectors(e.center,this.origin);const i=Gt.dot(this.direction),r=Gt.dot(Gt)-i*i,n=e.radius*e.radius;if(r>n)return null;const o=Math.sqrt(n-r),s=i-o,c=i+o;return s<0&&c<0?null:s<0?this.at(c,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,n,o,s,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),u>=0?(n=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(n=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||n>r||((n>i||isNaN(i))&&(i=n),(o<r||isNaN(r))&&(r=o),f>=0?(s=(e.min.z-h.z)*f,c=(e.max.z-h.z)*f):(s=(e.max.z-h.z)*f,c=(e.min.z-h.z)*f),i>c||s>r)||((s>i||i!==i)&&(i=s),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Gt)!==null}intersectTriangle(e,t,i,r,n){cn.subVectors(t,e),gr.subVectors(i,e),un.crossVectors(cn,gr);let o=this.direction.dot(un),s;if(o>0){if(r)return null;s=1}else if(o<0)s=-1,o=-o;else return null;qt.subVectors(this.origin,e);const c=s*this.direction.dot(gr.crossVectors(qt,gr));if(c<0)return null;const l=s*this.direction.dot(cn.cross(qt));if(l<0||c+l>o)return null;const u=-s*qt.dot(un);return u<0?null:this.at(u/o,n)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ge{constructor(){Ge.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,n,o,s,c,l,u,f,h,m,x,p,d){const y=this.elements;return y[0]=e,y[4]=t,y[8]=i,y[12]=r,y[1]=n,y[5]=o,y[9]=s,y[13]=c,y[2]=l,y[6]=u,y[10]=f,y[14]=h,y[3]=m,y[7]=x,y[11]=p,y[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ge().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Si.setFromMatrixColumn(e,0).length(),n=1/Si.setFromMatrixColumn(e,1).length(),o=1/Si.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*n,t[5]=i[5]*n,t[6]=i[6]*n,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,n=e.z,o=Math.cos(i),s=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(n),f=Math.sin(n);if(e.order==="XYZ"){const h=o*u,m=o*f,x=s*u,p=s*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=m+x*l,t[5]=h-p*l,t[9]=-s*c,t[2]=p-h*l,t[6]=x+m*l,t[10]=o*c}else if(e.order==="YXZ"){const h=c*u,m=c*f,x=l*u,p=l*f;t[0]=h+p*s,t[4]=x*s-m,t[8]=o*l,t[1]=o*f,t[5]=o*u,t[9]=-s,t[2]=m*s-x,t[6]=p+h*s,t[10]=o*c}else if(e.order==="ZXY"){const h=c*u,m=c*f,x=l*u,p=l*f;t[0]=h-p*s,t[4]=-o*f,t[8]=x+m*s,t[1]=m+x*s,t[5]=o*u,t[9]=p-h*s,t[2]=-o*l,t[6]=s,t[10]=o*c}else if(e.order==="ZYX"){const h=o*u,m=o*f,x=s*u,p=s*f;t[0]=c*u,t[4]=x*l-m,t[8]=h*l+p,t[1]=c*f,t[5]=p*l+h,t[9]=m*l-x,t[2]=-l,t[6]=s*c,t[10]=o*c}else if(e.order==="YZX"){const h=o*c,m=o*l,x=s*c,p=s*l;t[0]=c*u,t[4]=p-h*f,t[8]=x*f+m,t[1]=f,t[5]=o*u,t[9]=-s*u,t[2]=-l*u,t[6]=m*f+x,t[10]=h-p*f}else if(e.order==="XZY"){const h=o*c,m=o*l,x=s*c,p=s*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=h*f+p,t[5]=o*u,t[9]=m*f-x,t[2]=x*f-m,t[6]=s*u,t[10]=p*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($o,e,el)}lookAt(e,t,i){const r=this.elements;return dt.subVectors(e,t),dt.lengthSq()===0&&(dt.z=1),dt.normalize(),Yt.crossVectors(i,dt),Yt.lengthSq()===0&&(Math.abs(i.z)===1?dt.x+=1e-4:dt.z+=1e-4,dt.normalize(),Yt.crossVectors(i,dt)),Yt.normalize(),_r.crossVectors(dt,Yt),r[0]=Yt.x,r[4]=_r.x,r[8]=dt.x,r[1]=Yt.y,r[5]=_r.y,r[9]=dt.y,r[2]=Yt.z,r[6]=_r.z,r[10]=dt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,n=this.elements,o=i[0],s=i[4],c=i[8],l=i[12],u=i[1],f=i[5],h=i[9],m=i[13],x=i[2],p=i[6],d=i[10],y=i[14],S=i[3],M=i[7],v=i[11],E=i[15],A=r[0],D=r[4],g=r[8],w=r[12],L=r[1],H=r[5],W=r[9],N=r[13],R=r[2],V=r[6],Y=r[10],$=r[14],X=r[3],Q=r[7],Z=r[11],pe=r[15];return n[0]=o*A+s*L+c*R+l*X,n[4]=o*D+s*H+c*V+l*Q,n[8]=o*g+s*W+c*Y+l*Z,n[12]=o*w+s*N+c*$+l*pe,n[1]=u*A+f*L+h*R+m*X,n[5]=u*D+f*H+h*V+m*Q,n[9]=u*g+f*W+h*Y+m*Z,n[13]=u*w+f*N+h*$+m*pe,n[2]=x*A+p*L+d*R+y*X,n[6]=x*D+p*H+d*V+y*Q,n[10]=x*g+p*W+d*Y+y*Z,n[14]=x*w+p*N+d*$+y*pe,n[3]=S*A+M*L+v*R+E*X,n[7]=S*D+M*H+v*V+E*Q,n[11]=S*g+M*W+v*Y+E*Z,n[15]=S*w+M*N+v*$+E*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],n=e[12],o=e[1],s=e[5],c=e[9],l=e[13],u=e[2],f=e[6],h=e[10],m=e[14],x=e[3],p=e[7],d=e[11],y=e[15];return x*(+n*c*f-r*l*f-n*s*h+i*l*h+r*s*m-i*c*m)+p*(+t*c*m-t*l*h+n*o*h-r*o*m+r*l*u-n*c*u)+d*(+t*l*f-t*s*m-n*o*f+i*o*m+n*s*u-i*l*u)+y*(-r*s*u-t*c*f+t*s*h+r*o*f-i*o*h+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],o=e[4],s=e[5],c=e[6],l=e[7],u=e[8],f=e[9],h=e[10],m=e[11],x=e[12],p=e[13],d=e[14],y=e[15],S=f*d*l-p*h*l+p*c*m-s*d*m-f*c*y+s*h*y,M=x*h*l-u*d*l-x*c*m+o*d*m+u*c*y-o*h*y,v=u*p*l-x*f*l+x*s*m-o*p*m-u*s*y+o*f*y,E=x*f*c-u*p*c-x*s*h+o*p*h+u*s*d-o*f*d,A=t*S+i*M+r*v+n*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/A;return e[0]=S*D,e[1]=(p*h*n-f*d*n-p*r*m+i*d*m+f*r*y-i*h*y)*D,e[2]=(s*d*n-p*c*n+p*r*l-i*d*l-s*r*y+i*c*y)*D,e[3]=(f*c*n-s*h*n-f*r*l+i*h*l+s*r*m-i*c*m)*D,e[4]=M*D,e[5]=(u*d*n-x*h*n+x*r*m-t*d*m-u*r*y+t*h*y)*D,e[6]=(x*c*n-o*d*n-x*r*l+t*d*l+o*r*y-t*c*y)*D,e[7]=(o*h*n-u*c*n+u*r*l-t*h*l-o*r*m+t*c*m)*D,e[8]=v*D,e[9]=(x*f*n-u*p*n-x*i*m+t*p*m+u*i*y-t*f*y)*D,e[10]=(o*p*n-x*s*n+x*i*l-t*p*l-o*i*y+t*s*y)*D,e[11]=(u*s*n-o*f*n-u*i*l+t*f*l+o*i*m-t*s*m)*D,e[12]=E*D,e[13]=(u*p*r-x*f*r+x*i*h-t*p*h-u*i*d+t*f*d)*D,e[14]=(x*s*r-o*p*r-x*i*c+t*p*c+o*i*d-t*s*d)*D,e[15]=(o*f*r-u*s*r+u*i*c-t*f*c-o*i*h+t*s*h)*D,this}scale(e){const t=this.elements,i=e.x,r=e.y,n=e.z;return t[0]*=i,t[4]*=r,t[8]*=n,t[1]*=i,t[5]*=r,t[9]*=n,t[2]*=i,t[6]*=r,t[10]*=n,t[3]*=i,t[7]*=r,t[11]*=n,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),n=1-i,o=e.x,s=e.y,c=e.z,l=n*o,u=n*s;return this.set(l*o+i,l*s-r*c,l*c+r*s,0,l*s+r*c,u*s+i,u*c-r*o,0,l*c-r*s,u*c+r*o,n*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,n,o){return this.set(1,i,n,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,n=t._x,o=t._y,s=t._z,c=t._w,l=n+n,u=o+o,f=s+s,h=n*l,m=n*u,x=n*f,p=o*u,d=o*f,y=s*f,S=c*l,M=c*u,v=c*f,E=i.x,A=i.y,D=i.z;return r[0]=(1-(p+y))*E,r[1]=(m+v)*E,r[2]=(x-M)*E,r[3]=0,r[4]=(m-v)*A,r[5]=(1-(h+y))*A,r[6]=(d+S)*A,r[7]=0,r[8]=(x+M)*D,r[9]=(d-S)*D,r[10]=(1-(h+p))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let n=Si.set(r[0],r[1],r[2]).length();const o=Si.set(r[4],r[5],r[6]).length(),s=Si.set(r[8],r[9],r[10]).length();this.determinant()<0&&(n=-n),e.x=r[12],e.y=r[13],e.z=r[14],Et.copy(this);const c=1/n,l=1/o,u=1/s;return Et.elements[0]*=c,Et.elements[1]*=c,Et.elements[2]*=c,Et.elements[4]*=l,Et.elements[5]*=l,Et.elements[6]*=l,Et.elements[8]*=u,Et.elements[9]*=u,Et.elements[10]*=u,t.setFromRotationMatrix(Et),i.x=n,i.y=o,i.z=s,this}makePerspective(e,t,i,r,n,o){const s=this.elements,c=2*n/(t-e),l=2*n/(i-r),u=(t+e)/(t-e),f=(i+r)/(i-r),h=-(o+n)/(o-n),m=-2*o*n/(o-n);return s[0]=c,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=l,s[9]=f,s[13]=0,s[2]=0,s[6]=0,s[10]=h,s[14]=m,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,i,r,n,o){const s=this.elements,c=1/(t-e),l=1/(i-r),u=1/(o-n),f=(t+e)*c,h=(i+r)*l,m=(o+n)*u;return s[0]=2*c,s[4]=0,s[8]=0,s[12]=-f,s[1]=0,s[5]=2*l,s[9]=0,s[13]=-h,s[2]=0,s[6]=0,s[10]=-2*u,s[14]=-m,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Si=new P,Et=new Ge,$o=new P(0,0,0),el=new P(1,1,1),Yt=new P,_r=new P,dt=new P,Ta=new Ge,Ea=new ar;class or{constructor(e=0,t=0,i=0,r=or.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,n=r[0],o=r[4],s=r[8],c=r[1],l=r[5],u=r[9],f=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(lt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,n)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,n),this._z=0);break;case"ZXY":this._x=Math.asin(lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,n));break;case"ZYX":this._y=Math.asin(-lt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(c,n)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(lt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,n)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(s,n)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ta.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ta,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ea.setFromEuler(this),this.setFromQuaternion(Ea,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}or.DEFAULT_ORDER="XYZ";class Ls{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tl=0;const Aa=new P,bi=new ar,Bt=new Ge,vr=new P,Yi=new P,il=new P,rl=new ar,La=new P(1,0,0),Ca=new P(0,1,0),Da=new P(0,0,1),nl={type:"added"},Pa={type:"removed"};class Qe extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tl++}),this.uuid=nr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qe.DEFAULT_UP.clone();const e=new P,t=new or,i=new ar,r=new P(1,1,1);function n(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(n),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ge},normalMatrix:{value:new ft}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=Qe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Ls,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bi.setFromAxisAngle(e,t),this.quaternion.multiply(bi),this}rotateOnWorldAxis(e,t){return bi.setFromAxisAngle(e,t),this.quaternion.premultiply(bi),this}rotateX(e){return this.rotateOnAxis(La,e)}rotateY(e){return this.rotateOnAxis(Ca,e)}rotateZ(e){return this.rotateOnAxis(Da,e)}translateOnAxis(e,t){return Aa.copy(e).applyQuaternion(this.quaternion),this.position.add(Aa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(La,e)}translateY(e){return this.translateOnAxis(Ca,e)}translateZ(e){return this.translateOnAxis(Da,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bt.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?vr.copy(e):vr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Yi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bt.lookAt(Yi,vr,this.up):Bt.lookAt(vr,Yi,this.up),this.quaternion.setFromRotationMatrix(Bt),r&&(Bt.extractRotation(r.matrixWorld),bi.setFromRotationMatrix(Bt),this.quaternion.premultiply(bi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(nl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pa)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Pa)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Bt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const n=this.children[i].getObjectByProperty(e,t);if(n!==void 0)return n}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,n=this.children.length;r<n;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,e,il),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,rl,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const n=t[i];(n.matrixWorldAutoUpdate===!0||e===!0)&&n.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let n=0,o=r.length;n<o;n++){const s=r[n];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function n(s,c){return s[c.uuid]===void 0&&(s[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=n(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const c=s.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];n(e.shapes,f)}else n(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let c=0,l=this.material.length;c<l;c++)s.push(n(e.materials,this.material[c]));r.material=s}else r.material=n(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const c=this.animations[s];r.animations.push(n(e.animations,c))}}if(t){const s=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),m=o(e.animations),x=o(e.nodes);s.length>0&&(i.geometries=s),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(s){const c=[];for(const l in s){const u=s[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Qe.DEFAULT_UP=new P(0,1,0);Qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const At=new P,kt=new P,hn=new P,Vt=new P,wi=new P,Ti=new P,Ra=new P,dn=new P,pn=new P,fn=new P;class Ht{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),At.subVectors(e,t),r.cross(At);const n=r.lengthSq();return n>0?r.multiplyScalar(1/Math.sqrt(n)):r.set(0,0,0)}static getBarycoord(e,t,i,r,n){At.subVectors(r,t),kt.subVectors(i,t),hn.subVectors(e,t);const o=At.dot(At),s=At.dot(kt),c=At.dot(hn),l=kt.dot(kt),u=kt.dot(hn),f=o*l-s*s;if(f===0)return n.set(-2,-1,-1);const h=1/f,m=(l*c-s*u)*h,x=(o*u-s*c)*h;return n.set(1-m-x,x,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Vt),Vt.x>=0&&Vt.y>=0&&Vt.x+Vt.y<=1}static getUV(e,t,i,r,n,o,s,c){return this.getBarycoord(e,t,i,r,Vt),c.set(0,0),c.addScaledVector(n,Vt.x),c.addScaledVector(o,Vt.y),c.addScaledVector(s,Vt.z),c}static isFrontFacing(e,t,i,r){return At.subVectors(i,t),kt.subVectors(e,t),At.cross(kt).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return At.subVectors(this.c,this.b),kt.subVectors(this.a,this.b),At.cross(kt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ht.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ht.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,n){return Ht.getUV(e,this.a,this.b,this.c,t,i,r,n)}containsPoint(e){return Ht.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ht.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,n=this.c;let o,s;wi.subVectors(r,i),Ti.subVectors(n,i),dn.subVectors(e,i);const c=wi.dot(dn),l=Ti.dot(dn);if(c<=0&&l<=0)return t.copy(i);pn.subVectors(e,r);const u=wi.dot(pn),f=Ti.dot(pn);if(u>=0&&f<=u)return t.copy(r);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(wi,o);fn.subVectors(e,n);const m=wi.dot(fn),x=Ti.dot(fn);if(x>=0&&m<=x)return t.copy(n);const p=m*l-c*x;if(p<=0&&l>=0&&x<=0)return s=l/(l-x),t.copy(i).addScaledVector(Ti,s);const d=u*x-m*f;if(d<=0&&f-u>=0&&m-x>=0)return Ra.subVectors(n,r),s=(f-u)/(f-u+(m-x)),t.copy(r).addScaledVector(Ra,s);const y=1/(d+p+h);return o=p*y,s=h*y,t.copy(i).addScaledVector(wi,o).addScaledVector(Ti,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let al=0;class Hi extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:al++}),this.uuid=nr(),this.name="",this.type="Material",this.blending=Oi,this.side=Jt,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=gs,this.blendDst=_s,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=An,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kr,this.stencilZFail=Kr,this.stencilZPass=Kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Oi&&(i.blending=this.blending),this.side!==Jt&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(n){const o=[];for(const s in n){const c=n[s];delete c.metadata,o.push(c)}return o}if(t){const n=r(e.textures),o=r(e.images);n.length>0&&(i.textures=n),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let n=0;n!==r;++n)i[n]=t[n].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Cs extends Hi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=vs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ve=new P,xr=new Le;class Dt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ma,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,n=this.itemSize;r<n;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)xr.fromBufferAttribute(this,t),xr.applyMatrix3(e),this.setXY(t,xr.x,xr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ve.fromBufferAttribute(this,t),Ve.applyMatrix3(e),this.setXYZ(t,Ve.x,Ve.y,Ve.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ve.fromBufferAttribute(this,t),Ve.applyMatrix4(e),this.setXYZ(t,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ve.fromBufferAttribute(this,t),Ve.applyNormalMatrix(e),this.setXYZ(t,Ve.x,Ve.y,Ve.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ve.fromBufferAttribute(this,t),Ve.transformDirection(e),this.setXYZ(t,Ve.x,Ve.y,Ve.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ur(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ur(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ur(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ur(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array),r=ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,n){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array),r=ht(r,this.array),n=ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=n,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ma&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Ds extends Dt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ps extends Dt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Be extends Dt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let sl=0;const Mt=new Ge,mn=new Qe,Ei=new P,pt=new sr,Zi=new sr,Ze=new P;class bt extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sl++}),this.uuid=nr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ss(e)?Ps:Ds)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const n=new ft().getNormalMatrix(e);i.applyNormalMatrix(n),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mt.makeRotationFromQuaternion(e),this.applyMatrix4(Mt),this}rotateX(e){return Mt.makeRotationX(e),this.applyMatrix4(Mt),this}rotateY(e){return Mt.makeRotationY(e),this.applyMatrix4(Mt),this}rotateZ(e){return Mt.makeRotationZ(e),this.applyMatrix4(Mt),this}translate(e,t,i){return Mt.makeTranslation(e,t,i),this.applyMatrix4(Mt),this}scale(e,t,i){return Mt.makeScale(e,t,i),this.applyMatrix4(Mt),this}lookAt(e){return mn.lookAt(e),mn.updateMatrix(),this.applyMatrix4(mn.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ei).negate(),this.translate(Ei.x,Ei.y,Ei.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const n=e[i];t.push(n.x,n.y,n.z||0)}return this.setAttribute("position",new Be(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const n=t[i];pt.setFromBufferAttribute(n),this.morphTargetsRelative?(Ze.addVectors(this.boundingBox.min,pt.min),this.boundingBox.expandByPoint(Ze),Ze.addVectors(this.boundingBox.max,pt.max),this.boundingBox.expandByPoint(Ze)):(this.boundingBox.expandByPoint(pt.min),this.boundingBox.expandByPoint(pt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ur);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const i=this.boundingSphere.center;if(pt.setFromBufferAttribute(e),t)for(let n=0,o=t.length;n<o;n++){const s=t[n];Zi.setFromBufferAttribute(s),this.morphTargetsRelative?(Ze.addVectors(pt.min,Zi.min),pt.expandByPoint(Ze),Ze.addVectors(pt.max,Zi.max),pt.expandByPoint(Ze)):(pt.expandByPoint(Zi.min),pt.expandByPoint(Zi.max))}pt.getCenter(i);let r=0;for(let n=0,o=e.count;n<o;n++)Ze.fromBufferAttribute(e,n),r=Math.max(r,i.distanceToSquared(Ze));if(t)for(let n=0,o=t.length;n<o;n++){const s=t[n],c=this.morphTargetsRelative;for(let l=0,u=s.count;l<u;l++)Ze.fromBufferAttribute(s,l),c&&(Ei.fromBufferAttribute(e,l),Ze.add(Ei)),r=Math.max(r,i.distanceToSquared(Ze))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,n=t.normal.array,o=t.uv.array,s=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dt(new Float32Array(4*s),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let L=0;L<s;L++)l[L]=new P,u[L]=new P;const f=new P,h=new P,m=new P,x=new Le,p=new Le,d=new Le,y=new P,S=new P;function M(L,H,W){f.fromArray(r,L*3),h.fromArray(r,H*3),m.fromArray(r,W*3),x.fromArray(o,L*2),p.fromArray(o,H*2),d.fromArray(o,W*2),h.sub(f),m.sub(f),p.sub(x),d.sub(x);const N=1/(p.x*d.y-d.x*p.y);isFinite(N)&&(y.copy(h).multiplyScalar(d.y).addScaledVector(m,-p.y).multiplyScalar(N),S.copy(m).multiplyScalar(p.x).addScaledVector(h,-d.x).multiplyScalar(N),l[L].add(y),l[H].add(y),l[W].add(y),u[L].add(S),u[H].add(S),u[W].add(S))}let v=this.groups;v.length===0&&(v=[{start:0,count:i.length}]);for(let L=0,H=v.length;L<H;++L){const W=v[L],N=W.start,R=W.count;for(let V=N,Y=N+R;V<Y;V+=3)M(i[V+0],i[V+1],i[V+2])}const E=new P,A=new P,D=new P,g=new P;function w(L){D.fromArray(n,L*3),g.copy(D);const H=l[L];E.copy(H),E.sub(D.multiplyScalar(D.dot(H))).normalize(),A.crossVectors(g,H);const W=A.dot(u[L])<0?-1:1;c[L*4]=E.x,c[L*4+1]=E.y,c[L*4+2]=E.z,c[L*4+3]=W}for(let L=0,H=v.length;L<H;++L){const W=v[L],N=W.start,R=W.count;for(let V=N,Y=N+R;V<Y;V+=3)w(i[V+0]),w(i[V+1]),w(i[V+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Dt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new P,n=new P,o=new P,s=new P,c=new P,l=new P,u=new P,f=new P;if(e)for(let h=0,m=e.count;h<m;h+=3){const x=e.getX(h+0),p=e.getX(h+1),d=e.getX(h+2);r.fromBufferAttribute(t,x),n.fromBufferAttribute(t,p),o.fromBufferAttribute(t,d),u.subVectors(o,n),f.subVectors(r,n),u.cross(f),s.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),l.fromBufferAttribute(i,d),s.add(u),c.add(u),l.add(u),i.setXYZ(x,s.x,s.y,s.z),i.setXYZ(p,c.x,c.y,c.z),i.setXYZ(d,l.x,l.y,l.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),n.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,n),f.subVectors(r,n),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ze.fromBufferAttribute(e,t),Ze.normalize(),e.setXYZ(t,Ze.x,Ze.y,Ze.z)}toNonIndexed(){function e(s,c){const l=s.array,u=s.itemSize,f=s.normalized,h=new l.constructor(c.length*u);let m=0,x=0;for(let p=0,d=c.length;p<d;p++){s.isInterleavedBufferAttribute?m=c[p]*s.data.stride+s.offset:m=c[p]*u;for(let y=0;y<u;y++)h[x++]=l[m++]}return new Dt(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new bt,i=this.index.array,r=this.attributes;for(const s in r){const c=r[s],l=e(c,i);t.setAttribute(s,l)}const n=this.morphAttributes;for(const s in n){const c=[],l=n[s];for(let u=0,f=l.length;u<f;u++){const h=l[u],m=e(h,i);c.push(m)}t.morphAttributes[s]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,c=o.length;s<c;s++){const l=o[s];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let n=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const m=l[f];u.push(m.toJSON(e.data))}u.length>0&&(r[c]=u,n=!0)}n&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const n=e.morphAttributes;for(const l in n){const u=[],f=n[l];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ia=new Ge,Ai=new As,gn=new Ur,Ki=new P,Ji=new P,Qi=new P,_n=new P,Mr=new P,yr=new Le,Sr=new Le,br=new Le,vn=new P,wr=new P;class Nt extends Qe{constructor(e=new bt,t=new Cs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,n=i.length;r<n;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,n=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const s=this.morphTargetInfluences;if(n&&s){Mr.set(0,0,0);for(let c=0,l=n.length;c<l;c++){const u=s[c],f=n[c];u!==0&&(_n.fromBufferAttribute(f,e),o?Mr.addScaledVector(_n,u):Mr.addScaledVector(_n.sub(t),u))}t.add(Mr)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const i=this.geometry,r=this.material,n=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),gn.copy(i.boundingSphere),gn.applyMatrix4(n),e.ray.intersectsSphere(gn)===!1)||(Ia.copy(n).invert(),Ai.copy(e.ray).applyMatrix4(Ia),i.boundingBox!==null&&Ai.intersectsBox(i.boundingBox)===!1))return;let o;const s=i.index,c=i.attributes.position,l=i.attributes.uv,u=i.attributes.uv2,f=i.groups,h=i.drawRange;if(s!==null)if(Array.isArray(r))for(let m=0,x=f.length;m<x;m++){const p=f[m],d=r[p.materialIndex],y=Math.max(p.start,h.start),S=Math.min(s.count,Math.min(p.start+p.count,h.start+h.count));for(let M=y,v=S;M<v;M+=3){const E=s.getX(M),A=s.getX(M+1),D=s.getX(M+2);o=Tr(this,d,e,Ai,l,u,E,A,D),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const m=Math.max(0,h.start),x=Math.min(s.count,h.start+h.count);for(let p=m,d=x;p<d;p+=3){const y=s.getX(p),S=s.getX(p+1),M=s.getX(p+2);o=Tr(this,r,e,Ai,l,u,y,S,M),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}else if(c!==void 0)if(Array.isArray(r))for(let m=0,x=f.length;m<x;m++){const p=f[m],d=r[p.materialIndex],y=Math.max(p.start,h.start),S=Math.min(c.count,Math.min(p.start+p.count,h.start+h.count));for(let M=y,v=S;M<v;M+=3){const E=M,A=M+1,D=M+2;o=Tr(this,d,e,Ai,l,u,E,A,D),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const m=Math.max(0,h.start),x=Math.min(c.count,h.start+h.count);for(let p=m,d=x;p<d;p+=3){const y=p,S=p+1,M=p+2;o=Tr(this,r,e,Ai,l,u,y,S,M),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}}}function ol(a,e,t,i,r,n,o,s){let c;if(e.side===mt?c=i.intersectTriangle(o,n,r,!0,s):c=i.intersectTriangle(r,n,o,e.side===Jt,s),c===null)return null;wr.copy(s),wr.applyMatrix4(a.matrixWorld);const l=t.ray.origin.distanceTo(wr);return l<t.near||l>t.far?null:{distance:l,point:wr.clone(),object:a}}function Tr(a,e,t,i,r,n,o,s,c){a.getVertexPosition(o,Ki),a.getVertexPosition(s,Ji),a.getVertexPosition(c,Qi);const l=ol(a,e,t,i,Ki,Ji,Qi,vn);if(l){r&&(yr.fromBufferAttribute(r,o),Sr.fromBufferAttribute(r,s),br.fromBufferAttribute(r,c),l.uv=Ht.getUV(vn,Ki,Ji,Qi,yr,Sr,br,new Le)),n&&(yr.fromBufferAttribute(n,o),Sr.fromBufferAttribute(n,s),br.fromBufferAttribute(n,c),l.uv2=Ht.getUV(vn,Ki,Ji,Qi,yr,Sr,br,new Le));const u={a:o,b:s,c,normal:new P,materialIndex:0};Ht.getNormal(Ki,Ji,Qi,u.normal),l.face=u}return l}class lr extends bt{constructor(e=1,t=1,i=1,r=1,n=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:n,depthSegments:o};const s=this;r=Math.floor(r),n=Math.floor(n),o=Math.floor(o);const c=[],l=[],u=[],f=[];let h=0,m=0;x("z","y","x",-1,-1,i,t,e,o,n,0),x("z","y","x",1,-1,i,t,-e,o,n,1),x("x","z","y",1,1,e,i,t,r,o,2),x("x","z","y",1,-1,e,i,-t,r,o,3),x("x","y","z",1,-1,e,t,i,r,n,4),x("x","y","z",-1,-1,e,t,-i,r,n,5),this.setIndex(c),this.setAttribute("position",new Be(l,3)),this.setAttribute("normal",new Be(u,3)),this.setAttribute("uv",new Be(f,2));function x(p,d,y,S,M,v,E,A,D,g,w){const L=v/D,H=E/g,W=v/2,N=E/2,R=A/2,V=D+1,Y=g+1;let $=0,X=0;const Q=new P;for(let Z=0;Z<Y;Z++){const pe=Z*H-N;for(let O=0;O<V;O++){const q=O*L-W;Q[p]=q*S,Q[d]=pe*M,Q[y]=R,l.push(Q.x,Q.y,Q.z),Q[p]=0,Q[d]=0,Q[y]=A>0?1:-1,u.push(Q.x,Q.y,Q.z),f.push(O/D),f.push(1-Z/g),$+=1}}for(let Z=0;Z<g;Z++)for(let pe=0;pe<D;pe++){const O=h+pe+V*Z,q=h+pe+V*(Z+1),ie=h+(pe+1)+V*(Z+1),oe=h+(pe+1)+V*Z;c.push(O,q,oe),c.push(q,ie,oe),X+=6}s.addGroup(m,X,w),m+=X,h+=$}}static fromJSON(e){return new lr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ki(a){const e={};for(const t in a){e[t]={};for(const i in a[t]){const r=a[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function st(a){const e={};for(let t=0;t<a.length;t++){const i=ki(a[t]);for(const r in i)e[r]=i[r]}return e}function ll(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function Rs(a){return a.getRenderTarget()===null&&a.outputEncoding===ze?Rt:Nr}const cl={clone:ki,merge:st};var ul=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gi extends Hi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ul,this.fragmentShader=hl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ki(e.uniforms),this.uniformsGroups=ll(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const n=this.uniforms[r].value;n&&n.isTexture?t.uniforms[r]={type:"t",value:n.toJSON(e).uuid}:n&&n.isColor?t.uniforms[r]={type:"c",value:n.getHex()}:n&&n.isVector2?t.uniforms[r]={type:"v2",value:n.toArray()}:n&&n.isVector3?t.uniforms[r]={type:"v3",value:n.toArray()}:n&&n.isVector4?t.uniforms[r]={type:"v4",value:n.toArray()}:n&&n.isMatrix3?t.uniforms[r]={type:"m3",value:n.toArray()}:n&&n.isMatrix4?t.uniforms[r]={type:"m4",value:n.toArray()}:t.uniforms[r]={value:n}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Is extends Qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class St extends Is{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Sa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Jr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sa*2*Math.atan(Math.tan(Jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,n,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=n,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Jr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,n=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;n+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const s=this.filmOffset;s!==0&&(n+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(n,n+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Li=-90,Ci=1;class dl extends Qe{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new St(Li,Ci,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const n=new St(Li,Ci,e,t);n.layers=this.layers,n.up.set(0,1,0),n.lookAt(-1,0,0),this.add(n);const o=new St(Li,Ci,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const s=new St(Li,Ci,e,t);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(0,-1,0),this.add(s);const c=new St(Li,Ci,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new St(Li,Ci,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,n,o,s,c,l]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=Wt,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,n),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,s),e.setRenderTarget(i,4),e.render(t,c),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(t,l),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class Ns extends gt{constructor(e,t,i,r,n,o,s,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Fi,super(e,t,i,r,n,o,s,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pl extends mi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ns(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:yt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new lr(5,5,5),n=new gi({name:"CubemapFromEquirect",uniforms:ki(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:mt,blending:Kt});n.uniforms.tEquirect.value=t;const o=new Nt(r,n),s=t.minFilter;return t.minFilter===ir&&(t.minFilter=yt),new dl(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const n=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(n)}}const xn=new P,fl=new P,ml=new ft;class ai{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=xn.subVectors(i,t).cross(fl.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(xn),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const n=-(e.start.dot(this.normal)+this.constant)/r;return n<0||n>1?null:t.copy(i).multiplyScalar(n).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||ml.getNormalMatrix(e),r=this.coplanarPoint(xn).applyMatrix4(e),n=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(n),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Di=new Ur,Er=new P;class On{constructor(e=new ai,t=new ai,i=new ai,r=new ai,n=new ai,o=new ai){this.planes=[e,t,i,r,n,o]}set(e,t,i,r,n,o){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(n),s[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],n=i[1],o=i[2],s=i[3],c=i[4],l=i[5],u=i[6],f=i[7],h=i[8],m=i[9],x=i[10],p=i[11],d=i[12],y=i[13],S=i[14],M=i[15];return t[0].setComponents(s-r,f-c,p-h,M-d).normalize(),t[1].setComponents(s+r,f+c,p+h,M+d).normalize(),t[2].setComponents(s+n,f+l,p+m,M+y).normalize(),t[3].setComponents(s-n,f-l,p-m,M-y).normalize(),t[4].setComponents(s-o,f-u,p-x,M-S).normalize(),t[5].setComponents(s+o,f+u,p+x,M+S).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Di)}intersectsSprite(e){return Di.center.set(0,0,0),Di.radius=.7071067811865476,Di.applyMatrix4(e.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let n=0;n<6;n++)if(t[n].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Er.x=r.normal.x>0?e.max.x:e.min.x,Er.y=r.normal.y>0?e.max.y:e.min.y,Er.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Er)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function zs(){let a=null,e=!1,t=null,i=null;function r(n,o){t(n,o),i=a.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=a.requestAnimationFrame(r),e=!0)},stop:function(){a.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(n){t=n},setContext:function(n){a=n}}}function gl(a,e){const t=e.isWebGL2,i=new WeakMap;function r(l,u){const f=l.array,h=l.usage,m=a.createBuffer();a.bindBuffer(u,m),a.bufferData(u,f,h),l.onUploadCallback();let x;if(f instanceof Float32Array)x=5126;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)x=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=5123;else if(f instanceof Int16Array)x=5122;else if(f instanceof Uint32Array)x=5125;else if(f instanceof Int32Array)x=5124;else if(f instanceof Int8Array)x=5120;else if(f instanceof Uint8Array)x=5121;else if(f instanceof Uint8ClampedArray)x=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version}}function n(l,u,f){const h=u.array,m=u.updateRange;a.bindBuffer(f,l),m.count===-1?a.bufferSubData(f,0,h):(t?a.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):a.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);u&&(a.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const h=i.get(l);(!h||h.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const f=i.get(l);f===void 0?i.set(l,r(l,u)):f.version<l.version&&(n(f.buffer,l,u),f.version=l.version)}return{get:o,remove:s,update:c}}class Un extends bt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const n=e/2,o=t/2,s=Math.floor(i),c=Math.floor(r),l=s+1,u=c+1,f=e/s,h=t/c,m=[],x=[],p=[],d=[];for(let y=0;y<u;y++){const S=y*h-o;for(let M=0;M<l;M++){const v=M*f-n;x.push(v,-S,0),p.push(0,0,1),d.push(M/s),d.push(1-y/c)}}for(let y=0;y<c;y++)for(let S=0;S<s;S++){const M=S+l*y,v=S+l*(y+1),E=S+1+l*(y+1),A=S+1+l*y;m.push(M,v,A),m.push(v,E,A)}this.setIndex(m),this.setAttribute("position",new Be(x,3)),this.setAttribute("normal",new Be(p,3)),this.setAttribute("uv",new Be(d,2))}static fromJSON(e){return new Un(e.width,e.height,e.widthSegments,e.heightSegments)}}var _l=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,vl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xl=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ml=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yl=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Sl=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bl="vec3 transformed = vec3( position );",wl=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tl=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,El=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,Al=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ll=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Cl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pl=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rl=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Il=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,zl=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ol=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Ul=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,Fl=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Gl=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bl=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,kl=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vl=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hl="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wl=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jl=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Xl=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ql=`#ifdef USE_ENVMAP
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
#endif`,Yl=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zl=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Kl=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jl=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ql=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$l=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ec=`#ifdef USE_GRADIENTMAP
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
}`,tc=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ic=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nc=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ac=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,sc=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,oc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lc=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uc=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hc=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,dc=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		vec3 iridescenceF0;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pc=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fc=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,mc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,gc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_c=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,xc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Mc=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,bc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ec=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ac=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Lc=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Cc=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Dc=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Pc=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Rc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ic=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nc=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zc=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Oc=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Uc=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Fc=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Gc=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bc=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kc=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Vc=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hc=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wc=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jc=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xc=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qc=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yc=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Zc=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Kc=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Jc=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Qc=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$c=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,eu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tu=`#ifdef USE_SKINNING
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
#endif`,iu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ru=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,au=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,su=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,ou=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,lu=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,cu=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,uu=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,hu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,du=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,pu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,fu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gu=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,_u=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,xu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,yu=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Su=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,bu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,wu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Tu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Eu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Au=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cu=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Du=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pu=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Ru=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Nu=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ou=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Uu=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Fu=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gu=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Bu=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ku=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Vu=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hu=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,Wu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ju=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xu=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,qu=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Yu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,be={alphamap_fragment:_l,alphamap_pars_fragment:vl,alphatest_fragment:xl,alphatest_pars_fragment:Ml,aomap_fragment:yl,aomap_pars_fragment:Sl,begin_vertex:bl,beginnormal_vertex:wl,bsdfs:Tl,iridescence_fragment:El,bumpmap_pars_fragment:Al,clipping_planes_fragment:Ll,clipping_planes_pars_fragment:Cl,clipping_planes_pars_vertex:Dl,clipping_planes_vertex:Pl,color_fragment:Rl,color_pars_fragment:Il,color_pars_vertex:Nl,color_vertex:zl,common:Ol,cube_uv_reflection_fragment:Ul,defaultnormal_vertex:Fl,displacementmap_pars_vertex:Gl,displacementmap_vertex:Bl,emissivemap_fragment:kl,emissivemap_pars_fragment:Vl,encodings_fragment:Hl,encodings_pars_fragment:Wl,envmap_fragment:jl,envmap_common_pars_fragment:Xl,envmap_pars_fragment:ql,envmap_pars_vertex:Yl,envmap_physical_pars_fragment:sc,envmap_vertex:Zl,fog_vertex:Kl,fog_pars_vertex:Jl,fog_fragment:Ql,fog_pars_fragment:$l,gradientmap_pars_fragment:ec,lightmap_fragment:tc,lightmap_pars_fragment:ic,lights_lambert_fragment:rc,lights_lambert_pars_fragment:nc,lights_pars_begin:ac,lights_toon_fragment:oc,lights_toon_pars_fragment:lc,lights_phong_fragment:cc,lights_phong_pars_fragment:uc,lights_physical_fragment:hc,lights_physical_pars_fragment:dc,lights_fragment_begin:pc,lights_fragment_maps:fc,lights_fragment_end:mc,logdepthbuf_fragment:gc,logdepthbuf_pars_fragment:_c,logdepthbuf_pars_vertex:vc,logdepthbuf_vertex:xc,map_fragment:Mc,map_pars_fragment:yc,map_particle_fragment:Sc,map_particle_pars_fragment:bc,metalnessmap_fragment:wc,metalnessmap_pars_fragment:Tc,morphcolor_vertex:Ec,morphnormal_vertex:Ac,morphtarget_pars_vertex:Lc,morphtarget_vertex:Cc,normal_fragment_begin:Dc,normal_fragment_maps:Pc,normal_pars_fragment:Rc,normal_pars_vertex:Ic,normal_vertex:Nc,normalmap_pars_fragment:zc,clearcoat_normal_fragment_begin:Oc,clearcoat_normal_fragment_maps:Uc,clearcoat_pars_fragment:Fc,iridescence_pars_fragment:Gc,output_fragment:Bc,packing:kc,premultiplied_alpha_fragment:Vc,project_vertex:Hc,dithering_fragment:Wc,dithering_pars_fragment:jc,roughnessmap_fragment:Xc,roughnessmap_pars_fragment:qc,shadowmap_pars_fragment:Yc,shadowmap_pars_vertex:Zc,shadowmap_vertex:Kc,shadowmask_pars_fragment:Jc,skinbase_vertex:Qc,skinning_pars_vertex:$c,skinning_vertex:eu,skinnormal_vertex:tu,specularmap_fragment:iu,specularmap_pars_fragment:ru,tonemapping_fragment:nu,tonemapping_pars_fragment:au,transmission_fragment:su,transmission_pars_fragment:ou,uv_pars_fragment:lu,uv_pars_vertex:cu,uv_vertex:uu,uv2_pars_fragment:hu,uv2_pars_vertex:du,uv2_vertex:pu,worldpos_vertex:fu,background_vert:mu,background_frag:gu,backgroundCube_vert:_u,backgroundCube_frag:vu,cube_vert:xu,cube_frag:Mu,depth_vert:yu,depth_frag:Su,distanceRGBA_vert:bu,distanceRGBA_frag:wu,equirect_vert:Tu,equirect_frag:Eu,linedashed_vert:Au,linedashed_frag:Lu,meshbasic_vert:Cu,meshbasic_frag:Du,meshlambert_vert:Pu,meshlambert_frag:Ru,meshmatcap_vert:Iu,meshmatcap_frag:Nu,meshnormal_vert:zu,meshnormal_frag:Ou,meshphong_vert:Uu,meshphong_frag:Fu,meshphysical_vert:Gu,meshphysical_frag:Bu,meshtoon_vert:ku,meshtoon_frag:Vu,points_vert:Hu,points_frag:Wu,shadow_vert:ju,shadow_frag:Xu,sprite_vert:qu,sprite_frag:Yu},te={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new ft},uv2Transform:{value:new ft},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ft}}},It={basic:{uniforms:st([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:be.meshbasic_vert,fragmentShader:be.meshbasic_frag},lambert:{uniforms:st([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Re(0)}}]),vertexShader:be.meshlambert_vert,fragmentShader:be.meshlambert_frag},phong:{uniforms:st([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:be.meshphong_vert,fragmentShader:be.meshphong_frag},standard:{uniforms:st([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag},toon:{uniforms:st([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new Re(0)}}]),vertexShader:be.meshtoon_vert,fragmentShader:be.meshtoon_frag},matcap:{uniforms:st([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:be.meshmatcap_vert,fragmentShader:be.meshmatcap_frag},points:{uniforms:st([te.points,te.fog]),vertexShader:be.points_vert,fragmentShader:be.points_frag},dashed:{uniforms:st([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:be.linedashed_vert,fragmentShader:be.linedashed_frag},depth:{uniforms:st([te.common,te.displacementmap]),vertexShader:be.depth_vert,fragmentShader:be.depth_frag},normal:{uniforms:st([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:be.meshnormal_vert,fragmentShader:be.meshnormal_frag},sprite:{uniforms:st([te.sprite,te.fog]),vertexShader:be.sprite_vert,fragmentShader:be.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:be.background_vert,fragmentShader:be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:be.backgroundCube_vert,fragmentShader:be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:be.cube_vert,fragmentShader:be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:be.equirect_vert,fragmentShader:be.equirect_frag},distanceRGBA:{uniforms:st([te.common,te.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:be.distanceRGBA_vert,fragmentShader:be.distanceRGBA_frag},shadow:{uniforms:st([te.lights,te.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:be.shadow_vert,fragmentShader:be.shadow_frag}};It.physical={uniforms:st([It.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Le(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag};const Ar={r:0,b:0,g:0};function Zu(a,e,t,i,r,n,o){const s=new Re(0);let c=n===!0?0:1,l,u,f=null,h=0,m=null;function x(d,y){let S=!1,M=y.isScene===!0?y.background:null;M&&M.isTexture&&(M=(y.backgroundBlurriness>0?t:e).get(M));const v=a.xr,E=v.getSession&&v.getSession();E&&E.environmentBlendMode==="additive"&&(M=null),M===null?p(s,c):M&&M.isColor&&(p(M,1),S=!0),(a.autoClear||S)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),M&&(M.isCubeTexture||M.mapping===Or)?(u===void 0&&(u=new Nt(new lr(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:ki(It.backgroundCube.uniforms),vertexShader:It.backgroundCube.vertexShader,fragmentShader:It.backgroundCube.fragmentShader,side:mt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,D,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.toneMapped=M.encoding!==ze,(f!==M||h!==M.version||m!==a.toneMapping)&&(u.material.needsUpdate=!0,f=M,h=M.version,m=a.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Nt(new Un(2,2),new gi({name:"BackgroundMaterial",uniforms:ki(It.background.uniforms),vertexShader:It.background.vertexShader,fragmentShader:It.background.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=M.encoding!==ze,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||h!==M.version||m!==a.toneMapping)&&(l.material.needsUpdate=!0,f=M,h=M.version,m=a.toneMapping),l.layers.enableAll(),d.unshift(l,l.geometry,l.material,0,0,null))}function p(d,y){d.getRGB(Ar,Rs(a)),i.buffers.color.setClear(Ar.r,Ar.g,Ar.b,y,o)}return{getClearColor:function(){return s},setClearColor:function(d,y=1){s.set(d),c=y,p(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(d){c=d,p(s,c)},render:x}}function Ku(a,e,t,i){const r=a.getParameter(34921),n=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||n!==null,s={},c=d(null);let l=c,u=!1;function f(R,V,Y,$,X){let Q=!1;if(o){const Z=p($,Y,V);l!==Z&&(l=Z,m(l.object)),Q=y(R,$,Y,X),Q&&S(R,$,Y,X)}else{const Z=V.wireframe===!0;(l.geometry!==$.id||l.program!==Y.id||l.wireframe!==Z)&&(l.geometry=$.id,l.program=Y.id,l.wireframe=Z,Q=!0)}X!==null&&t.update(X,34963),(Q||u)&&(u=!1,g(R,V,Y,$),X!==null&&a.bindBuffer(34963,t.get(X).buffer))}function h(){return i.isWebGL2?a.createVertexArray():n.createVertexArrayOES()}function m(R){return i.isWebGL2?a.bindVertexArray(R):n.bindVertexArrayOES(R)}function x(R){return i.isWebGL2?a.deleteVertexArray(R):n.deleteVertexArrayOES(R)}function p(R,V,Y){const $=Y.wireframe===!0;let X=s[R.id];X===void 0&&(X={},s[R.id]=X);let Q=X[V.id];Q===void 0&&(Q={},X[V.id]=Q);let Z=Q[$];return Z===void 0&&(Z=d(h()),Q[$]=Z),Z}function d(R){const V=[],Y=[],$=[];for(let X=0;X<r;X++)V[X]=0,Y[X]=0,$[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:Y,attributeDivisors:$,object:R,attributes:{},index:null}}function y(R,V,Y,$){const X=l.attributes,Q=V.attributes;let Z=0;const pe=Y.getAttributes();for(const O in pe)if(pe[O].location>=0){const q=X[O];let ie=Q[O];if(ie===void 0&&(O==="instanceMatrix"&&R.instanceMatrix&&(ie=R.instanceMatrix),O==="instanceColor"&&R.instanceColor&&(ie=R.instanceColor)),q===void 0||q.attribute!==ie||ie&&q.data!==ie.data)return!0;Z++}return l.attributesNum!==Z||l.index!==$}function S(R,V,Y,$){const X={},Q=V.attributes;let Z=0;const pe=Y.getAttributes();for(const O in pe)if(pe[O].location>=0){let q=Q[O];q===void 0&&(O==="instanceMatrix"&&R.instanceMatrix&&(q=R.instanceMatrix),O==="instanceColor"&&R.instanceColor&&(q=R.instanceColor));const ie={};ie.attribute=q,q&&q.data&&(ie.data=q.data),X[O]=ie,Z++}l.attributes=X,l.attributesNum=Z,l.index=$}function M(){const R=l.newAttributes;for(let V=0,Y=R.length;V<Y;V++)R[V]=0}function v(R){E(R,0)}function E(R,V){const Y=l.newAttributes,$=l.enabledAttributes,X=l.attributeDivisors;Y[R]=1,$[R]===0&&(a.enableVertexAttribArray(R),$[R]=1),X[R]!==V&&((i.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,V),X[R]=V)}function A(){const R=l.newAttributes,V=l.enabledAttributes;for(let Y=0,$=V.length;Y<$;Y++)V[Y]!==R[Y]&&(a.disableVertexAttribArray(Y),V[Y]=0)}function D(R,V,Y,$,X,Q){i.isWebGL2===!0&&(Y===5124||Y===5125)?a.vertexAttribIPointer(R,V,Y,X,Q):a.vertexAttribPointer(R,V,Y,$,X,Q)}function g(R,V,Y,$){if(i.isWebGL2===!1&&(R.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const X=$.attributes,Q=Y.getAttributes(),Z=V.defaultAttributeValues;for(const pe in Q){const O=Q[pe];if(O.location>=0){let q=X[pe];if(q===void 0&&(pe==="instanceMatrix"&&R.instanceMatrix&&(q=R.instanceMatrix),pe==="instanceColor"&&R.instanceColor&&(q=R.instanceColor)),q!==void 0){const ie=q.normalized,oe=q.itemSize,U=t.get(q);if(U===void 0)continue;const ye=U.buffer,ue=U.type,he=U.bytesPerElement;if(q.isInterleavedBufferAttribute){const se=q.data,Fe=se.stride,Se=q.offset;if(se.isInstancedInterleavedBuffer){for(let ve=0;ve<O.locationSize;ve++)E(O.location+ve,se.meshPerAttribute);R.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ve=0;ve<O.locationSize;ve++)v(O.location+ve);a.bindBuffer(34962,ye);for(let ve=0;ve<O.locationSize;ve++)D(O.location+ve,oe/O.locationSize,ue,ie,Fe*he,(Se+oe/O.locationSize*ve)*he)}else{if(q.isInstancedBufferAttribute){for(let se=0;se<O.locationSize;se++)E(O.location+se,q.meshPerAttribute);R.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let se=0;se<O.locationSize;se++)v(O.location+se);a.bindBuffer(34962,ye);for(let se=0;se<O.locationSize;se++)D(O.location+se,oe/O.locationSize,ue,ie,oe*he,oe/O.locationSize*se*he)}}else if(Z!==void 0){const ie=Z[pe];if(ie!==void 0)switch(ie.length){case 2:a.vertexAttrib2fv(O.location,ie);break;case 3:a.vertexAttrib3fv(O.location,ie);break;case 4:a.vertexAttrib4fv(O.location,ie);break;default:a.vertexAttrib1fv(O.location,ie)}}}}A()}function w(){W();for(const R in s){const V=s[R];for(const Y in V){const $=V[Y];for(const X in $)x($[X].object),delete $[X];delete V[Y]}delete s[R]}}function L(R){if(s[R.id]===void 0)return;const V=s[R.id];for(const Y in V){const $=V[Y];for(const X in $)x($[X].object),delete $[X];delete V[Y]}delete s[R.id]}function H(R){for(const V in s){const Y=s[V];if(Y[R.id]===void 0)continue;const $=Y[R.id];for(const X in $)x($[X].object),delete $[X];delete Y[R.id]}}function W(){N(),u=!0,l!==c&&(l=c,m(l.object))}function N(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:W,resetDefaultState:N,dispose:w,releaseStatesOfGeometry:L,releaseStatesOfProgram:H,initAttributes:M,enableAttribute:v,disableUnusedAttributes:A}}function Ju(a,e,t,i){const r=i.isWebGL2;let n;function o(l){n=l}function s(l,u){a.drawArrays(n,l,u),t.update(u,n,1)}function c(l,u,f){if(f===0)return;let h,m;if(r)h=a,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](n,l,u,f),t.update(u,n,f)}this.setMode=o,this.render=s,this.renderInstances=c}function Qu(a,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");i=a.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function n(D){if(D==="highp"){if(a.getShaderPrecisionFormat(35633,36338).precision>0&&a.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";D="mediump"}return D==="mediump"&&a.getShaderPrecisionFormat(35633,36337).precision>0&&a.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&a instanceof WebGL2RenderingContext;let s=t.precision!==void 0?t.precision:"highp";const c=n(s);c!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",c,"instead."),s=c);const l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=a.getParameter(34930),h=a.getParameter(35660),m=a.getParameter(3379),x=a.getParameter(34076),p=a.getParameter(34921),d=a.getParameter(36347),y=a.getParameter(36348),S=a.getParameter(36349),M=h>0,v=o||e.has("OES_texture_float"),E=M&&v,A=o?a.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:n,precision:s,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:d,maxVaryings:y,maxFragmentUniforms:S,vertexTextures:M,floatFragmentTextures:v,floatVertexTextures:E,maxSamples:A}}function $u(a){const e=this;let t=null,i=0,r=!1,n=!1;const o=new ai,s=new ft,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||r;return r=h,i=f.length,m},this.beginShadows=function(){n=!0,u(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,m){const x=f.clippingPlanes,p=f.clipIntersection,d=f.clipShadows,y=a.get(f);if(!r||x===null||x.length===0||n&&!d)n?u(null):l();else{const S=n?0:i,M=S*4;let v=y.clippingState||null;c.value=v,v=u(x,h,M,m);for(let E=0;E!==M;++E)v[E]=t[E];y.clippingState=v,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,m,x){const p=f!==null?f.length:0;let d=null;if(p!==0){if(d=c.value,x!==!0||d===null){const y=m+p*4,S=h.matrixWorldInverse;s.getNormalMatrix(S),(d===null||d.length<y)&&(d=new Float32Array(y));for(let M=0,v=m;M!==p;++M,v+=4)o.copy(f[M]).applyMatrix4(S,s),o.normal.toArray(d,v),d[v+3]=o.constant}c.value=d,c.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,d}}function eh(a){let e=new WeakMap;function t(o,s){return s===Ln?o.mapping=Fi:s===Cn&&(o.mapping=Gi),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const s=o.mapping;if(s===Ln||s===Cn)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new pl(c.height/2);return l.fromEquirectangularTexture(a,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const s=o.target;s.removeEventListener("dispose",r);const c=e.get(s);c!==void 0&&(e.delete(s),c.dispose())}function n(){e=new WeakMap}return{get:i,dispose:n}}class Os extends Is{constructor(e=-1,t=1,i=1,r=-1,n=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=n,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,n,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=n,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let n=i-e,o=i+e,s=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;n+=l*this.view.offsetX,o=n+l*this.view.width,s-=u*this.view.offsetY,c=s-u*this.view.height}this.projectionMatrix.makeOrthographic(n,o,s,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const zi=4,Na=[.125,.215,.35,.446,.526,.582],oi=20,Mn=new Os,za=new Re;let yn=null;const si=(1+Math.sqrt(5))/2,Pi=1/si,Oa=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,si,Pi),new P(0,si,-Pi),new P(Pi,0,si),new P(-Pi,0,si),new P(si,Pi,0),new P(-si,Pi,0)];class Ua{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){yn=this._renderer.getRenderTarget(),this._setSize(256);const n=this._allocateTargets();return n.depthBuffer=!0,this._sceneToCubeUV(e,i,r,n),t>0&&this._blur(n,0,0,t),this._applyPMREM(n),this._cleanup(n),n}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ba(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ga(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(yn),e.scissorTest=!1,Lr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fi||e.mapping===Gi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yn=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:yt,minFilter:yt,generateMipmaps:!1,type:rr,format:Ct,encoding:fi,depthBuffer:!1},r=Fa(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fa(e,t,i);const{_lodMax:n}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=th(n)),this._blurMaterial=ih(n,e,t)}return r}_compileMaterial(e){const t=new Nt(this._lodPlanes[0],e);this._renderer.compile(t,Mn)}_sceneToCubeUV(e,t,i,r){const n=new St(90,1,t,i),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(za),c.toneMapping=Wt,c.autoClear=!1;const f=new Cs({name:"PMREM.Background",side:mt,depthWrite:!1,depthTest:!1}),h=new Nt(new lr,f);let m=!1;const x=e.background;x?x.isColor&&(f.color.copy(x),e.background=null,m=!0):(f.color.copy(za),m=!0);for(let p=0;p<6;p++){const d=p%3;d===0?(n.up.set(0,o[p],0),n.lookAt(s[p],0,0)):d===1?(n.up.set(0,0,o[p]),n.lookAt(0,s[p],0)):(n.up.set(0,o[p],0),n.lookAt(0,0,s[p]));const y=this._cubeSize;Lr(r,d*y,p>2?y:0,y,y),c.setRenderTarget(r),m&&c.render(h,n),c.render(e,n)}h.geometry.dispose(),h.material.dispose(),c.toneMapping=u,c.autoClear=l,e.background=x}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Fi||e.mapping===Gi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ba()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ga());const n=r?this._cubemapMaterial:this._equirectMaterial,o=new Nt(this._lodPlanes[0],n),s=n.uniforms;s.envMap.value=e;const c=this._cubeSize;Lr(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Mn)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const n=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Oa[(r-1)%Oa.length];this._blur(e,r-1,r,n,o)}t.autoClear=i}_blur(e,t,i,r,n){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",n),this._halfBlur(o,e,i,i,r,"longitudinal",n)}_halfBlur(e,t,i,r,n,o,s){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Nt(this._lodPlanes[r],l),h=l.uniforms,m=this._sizeLods[i]-1,x=isFinite(n)?Math.PI/(2*m):2*Math.PI/(2*oi-1),p=n/x,d=isFinite(n)?1+Math.floor(u*p):oi;d>oi&&console.warn(`sigmaRadians, ${n}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${oi}`);const y=[];let S=0;for(let D=0;D<oi;++D){const g=D/p,w=Math.exp(-g*g/2);y.push(w),D===0?S+=w:D<d&&(S+=2*w)}for(let D=0;D<y.length;D++)y[D]=y[D]/S;h.envMap.value=e.texture,h.samples.value=d,h.weights.value=y,h.latitudinal.value=o==="latitudinal",s&&(h.poleAxis.value=s);const{_lodMax:M}=this;h.dTheta.value=x,h.mipInt.value=M-i;const v=this._sizeLods[r],E=3*v*(r>M-zi?r-M+zi:0),A=4*(this._cubeSize-v);Lr(t,E,A,3*v,2*v),c.setRenderTarget(t),c.render(f,Mn)}}function th(a){const e=[],t=[],i=[];let r=a;const n=a-zi+1+Na.length;for(let o=0;o<n;o++){const s=Math.pow(2,r);t.push(s);let c=1/s;o>a-zi?c=Na[o-a+zi-1]:o===0&&(c=0),i.push(c);const l=1/(s-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,x=6,p=3,d=2,y=1,S=new Float32Array(p*x*m),M=new Float32Array(d*x*m),v=new Float32Array(y*x*m);for(let A=0;A<m;A++){const D=A%3*2/3-1,g=A>2?0:-1,w=[D,g,0,D+2/3,g,0,D+2/3,g+1,0,D,g,0,D+2/3,g+1,0,D,g+1,0];S.set(w,p*x*A),M.set(h,d*x*A);const L=[A,A,A,A,A,A];v.set(L,y*x*A)}const E=new bt;E.setAttribute("position",new Dt(S,p)),E.setAttribute("uv",new Dt(M,d)),E.setAttribute("faceIndex",new Dt(v,y)),e.push(E),r>zi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Fa(a,e,t){const i=new mi(a,e,t);return i.texture.mapping=Or,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Lr(a,e,t,i,r){a.viewport.set(e,t,i,r),a.scissor.set(e,t,i,r)}function ih(a,e,t){const i=new Float32Array(oi),r=new P(0,1,0);return new gi({name:"SphericalGaussianBlur",defines:{n:oi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Fn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Kt,depthTest:!1,depthWrite:!1})}function Ga(){return new gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fn(),fragmentShader:`

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
		`,blending:Kt,depthTest:!1,depthWrite:!1})}function Ba(){return new gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kt,depthTest:!1,depthWrite:!1})}function Fn(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function rh(a){let e=new WeakMap,t=null;function i(s){if(s&&s.isTexture){const c=s.mapping,l=c===Ln||c===Cn,u=c===Fi||c===Gi;if(l||u)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let f=e.get(s);return t===null&&(t=new Ua(a)),f=l?t.fromEquirectangular(s,f):t.fromCubemap(s,f),e.set(s,f),f.texture}else{if(e.has(s))return e.get(s).texture;{const f=s.image;if(l&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new Ua(a));const h=l?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,h),s.addEventListener("dispose",n),h.texture}else return null}}}return s}function r(s){let c=0;const l=6;for(let u=0;u<l;u++)s[u]!==void 0&&c++;return c===l}function n(s){const c=s.target;c.removeEventListener("dispose",n);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function nh(a){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=a.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function ah(a,e,t,i){const r={},n=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);h.removeEventListener("dispose",o),delete r[h.id];const m=n.get(h);m&&(e.remove(m),n.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function s(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function c(f){const h=f.attributes;for(const x in h)e.update(h[x],34962);const m=f.morphAttributes;for(const x in m){const p=m[x];for(let d=0,y=p.length;d<y;d++)e.update(p[d],34962)}}function l(f){const h=[],m=f.index,x=f.attributes.position;let p=0;if(m!==null){const S=m.array;p=m.version;for(let M=0,v=S.length;M<v;M+=3){const E=S[M+0],A=S[M+1],D=S[M+2];h.push(E,A,A,D,D,E)}}else{const S=x.array;p=x.version;for(let M=0,v=S.length/3-1;M<v;M+=3){const E=M+0,A=M+1,D=M+2;h.push(E,A,A,D,D,E)}}const d=new(Ss(h)?Ps:Ds)(h,1);d.version=p;const y=n.get(f);y&&e.remove(y),n.set(f,d)}function u(f){const h=n.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&l(f)}else l(f);return n.get(f)}return{get:s,update:c,getWireframeAttribute:u}}function sh(a,e,t,i){const r=i.isWebGL2;let n;function o(h){n=h}let s,c;function l(h){s=h.type,c=h.bytesPerElement}function u(h,m){a.drawElements(n,m,s,h*c),t.update(m,n,1)}function f(h,m,x){if(x===0)return;let p,d;if(r)p=a,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](n,m,s,h*c,x),t.update(m,n,x)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=f}function oh(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(n,o,s){switch(t.calls++,o){case 4:t.triangles+=s*(n/3);break;case 1:t.lines+=s*(n/2);break;case 3:t.lines+=s*(n-1);break;case 2:t.lines+=s*n;break;case 0:t.points+=s*n;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function lh(a,e){return a[0]-e[0]}function ch(a,e){return Math.abs(e[1])-Math.abs(a[1])}function uh(a,e,t){const i={},r=new Float32Array(8),n=new WeakMap,o=new Je,s=[];for(let l=0;l<8;l++)s[l]=[l,0];function c(l,u,f,h){const m=l.morphTargetInfluences;if(e.isWebGL2===!0){const x=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=x!==void 0?x.length:0;let d=n.get(u);if(d===void 0||d.count!==p){let M=function(){R.dispose(),n.delete(u),u.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();const v=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,A=u.morphAttributes.color!==void 0,D=u.morphAttributes.position||[],g=u.morphAttributes.normal||[],w=u.morphAttributes.color||[];let L=0;v===!0&&(L=1),E===!0&&(L=2),A===!0&&(L=3);let H=u.attributes.position.count*L,W=1;H>e.maxTextureSize&&(W=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const N=new Float32Array(H*W*4*p),R=new Es(N,H,W,p);R.type=ci,R.needsUpdate=!0;const V=L*4;for(let Y=0;Y<p;Y++){const $=D[Y],X=g[Y],Q=w[Y],Z=H*W*4*Y;for(let pe=0;pe<$.count;pe++){const O=pe*V;v===!0&&(o.fromBufferAttribute($,pe),N[Z+O+0]=o.x,N[Z+O+1]=o.y,N[Z+O+2]=o.z,N[Z+O+3]=0),E===!0&&(o.fromBufferAttribute(X,pe),N[Z+O+4]=o.x,N[Z+O+5]=o.y,N[Z+O+6]=o.z,N[Z+O+7]=0),A===!0&&(o.fromBufferAttribute(Q,pe),N[Z+O+8]=o.x,N[Z+O+9]=o.y,N[Z+O+10]=o.z,N[Z+O+11]=Q.itemSize===4?o.w:1)}}d={count:p,texture:R,size:new Le(H,W)},n.set(u,d),u.addEventListener("dispose",M)}let y=0;for(let M=0;M<m.length;M++)y+=m[M];const S=u.morphTargetsRelative?1:1-y;h.getUniforms().setValue(a,"morphTargetBaseInfluence",S),h.getUniforms().setValue(a,"morphTargetInfluences",m),h.getUniforms().setValue(a,"morphTargetsTexture",d.texture,t),h.getUniforms().setValue(a,"morphTargetsTextureSize",d.size)}else{const x=m===void 0?0:m.length;let p=i[u.id];if(p===void 0||p.length!==x){p=[];for(let v=0;v<x;v++)p[v]=[v,0];i[u.id]=p}for(let v=0;v<x;v++){const E=p[v];E[0]=v,E[1]=m[v]}p.sort(ch);for(let v=0;v<8;v++)v<x&&p[v][1]?(s[v][0]=p[v][0],s[v][1]=p[v][1]):(s[v][0]=Number.MAX_SAFE_INTEGER,s[v][1]=0);s.sort(lh);const d=u.morphAttributes.position,y=u.morphAttributes.normal;let S=0;for(let v=0;v<8;v++){const E=s[v],A=E[0],D=E[1];A!==Number.MAX_SAFE_INTEGER&&D?(d&&u.getAttribute("morphTarget"+v)!==d[A]&&u.setAttribute("morphTarget"+v,d[A]),y&&u.getAttribute("morphNormal"+v)!==y[A]&&u.setAttribute("morphNormal"+v,y[A]),r[v]=D,S+=D):(d&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),y&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),r[v]=0)}const M=u.morphTargetsRelative?1:1-S;h.getUniforms().setValue(a,"morphTargetBaseInfluence",M),h.getUniforms().setValue(a,"morphTargetInfluences",r)}}return{update:c}}function hh(a,e,t,i){let r=new WeakMap;function n(c){const l=i.render.frame,u=c.geometry,f=e.get(c,u);return r.get(f)!==l&&(e.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",s)===!1&&c.addEventListener("dispose",s),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),f}function o(){r=new WeakMap}function s(c){const l=c.target;l.removeEventListener("dispose",s),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:n,dispose:o}}const Us=new gt,Fs=new Es,Gs=new Jo,Bs=new Ns,ka=[],Va=[],Ha=new Float32Array(16),Wa=new Float32Array(9),ja=new Float32Array(4);function Wi(a,e,t){const i=a[0];if(i<=0||i>0)return a;const r=e*t;let n=ka[r];if(n===void 0&&(n=new Float32Array(r),ka[r]=n),e!==0){i.toArray(n,0);for(let o=1,s=0;o!==e;++o)s+=t,a[o].toArray(n,s)}return n}function je(a,e){if(a.length!==e.length)return!1;for(let t=0,i=a.length;t<i;t++)if(a[t]!==e[t])return!1;return!0}function Xe(a,e){for(let t=0,i=e.length;t<i;t++)a[t]=e[t]}function Fr(a,e){let t=Va[e];t===void 0&&(t=new Int32Array(e),Va[e]=t);for(let i=0;i!==e;++i)t[i]=a.allocateTextureUnit();return t}function dh(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function ph(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(je(t,e))return;a.uniform2fv(this.addr,e),Xe(t,e)}}function fh(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(je(t,e))return;a.uniform3fv(this.addr,e),Xe(t,e)}}function mh(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(je(t,e))return;a.uniform4fv(this.addr,e),Xe(t,e)}}function gh(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(je(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),Xe(t,e)}else{if(je(t,i))return;ja.set(i),a.uniformMatrix2fv(this.addr,!1,ja),Xe(t,i)}}function _h(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(je(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),Xe(t,e)}else{if(je(t,i))return;Wa.set(i),a.uniformMatrix3fv(this.addr,!1,Wa),Xe(t,i)}}function vh(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(je(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),Xe(t,e)}else{if(je(t,i))return;Ha.set(i),a.uniformMatrix4fv(this.addr,!1,Ha),Xe(t,i)}}function xh(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function Mh(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(je(t,e))return;a.uniform2iv(this.addr,e),Xe(t,e)}}function yh(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(je(t,e))return;a.uniform3iv(this.addr,e),Xe(t,e)}}function Sh(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(je(t,e))return;a.uniform4iv(this.addr,e),Xe(t,e)}}function bh(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function wh(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(je(t,e))return;a.uniform2uiv(this.addr,e),Xe(t,e)}}function Th(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(je(t,e))return;a.uniform3uiv(this.addr,e),Xe(t,e)}}function Eh(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(je(t,e))return;a.uniform4uiv(this.addr,e),Xe(t,e)}}function Ah(a,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(a.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Us,r)}function Lh(a,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(a.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Gs,r)}function Ch(a,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(a.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Bs,r)}function Dh(a,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(a.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Fs,r)}function Ph(a){switch(a){case 5126:return dh;case 35664:return ph;case 35665:return fh;case 35666:return mh;case 35674:return gh;case 35675:return _h;case 35676:return vh;case 5124:case 35670:return xh;case 35667:case 35671:return Mh;case 35668:case 35672:return yh;case 35669:case 35673:return Sh;case 5125:return bh;case 36294:return wh;case 36295:return Th;case 36296:return Eh;case 35678:case 36198:case 36298:case 36306:case 35682:return Ah;case 35679:case 36299:case 36307:return Lh;case 35680:case 36300:case 36308:case 36293:return Ch;case 36289:case 36303:case 36311:case 36292:return Dh}}function Rh(a,e){a.uniform1fv(this.addr,e)}function Ih(a,e){const t=Wi(e,this.size,2);a.uniform2fv(this.addr,t)}function Nh(a,e){const t=Wi(e,this.size,3);a.uniform3fv(this.addr,t)}function zh(a,e){const t=Wi(e,this.size,4);a.uniform4fv(this.addr,t)}function Oh(a,e){const t=Wi(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function Uh(a,e){const t=Wi(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function Fh(a,e){const t=Wi(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function Gh(a,e){a.uniform1iv(this.addr,e)}function Bh(a,e){a.uniform2iv(this.addr,e)}function kh(a,e){a.uniform3iv(this.addr,e)}function Vh(a,e){a.uniform4iv(this.addr,e)}function Hh(a,e){a.uniform1uiv(this.addr,e)}function Wh(a,e){a.uniform2uiv(this.addr,e)}function jh(a,e){a.uniform3uiv(this.addr,e)}function Xh(a,e){a.uniform4uiv(this.addr,e)}function qh(a,e,t){const i=this.cache,r=e.length,n=Fr(t,r);je(i,n)||(a.uniform1iv(this.addr,n),Xe(i,n));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Us,n[o])}function Yh(a,e,t){const i=this.cache,r=e.length,n=Fr(t,r);je(i,n)||(a.uniform1iv(this.addr,n),Xe(i,n));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Gs,n[o])}function Zh(a,e,t){const i=this.cache,r=e.length,n=Fr(t,r);je(i,n)||(a.uniform1iv(this.addr,n),Xe(i,n));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Bs,n[o])}function Kh(a,e,t){const i=this.cache,r=e.length,n=Fr(t,r);je(i,n)||(a.uniform1iv(this.addr,n),Xe(i,n));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Fs,n[o])}function Jh(a){switch(a){case 5126:return Rh;case 35664:return Ih;case 35665:return Nh;case 35666:return zh;case 35674:return Oh;case 35675:return Uh;case 35676:return Fh;case 5124:case 35670:return Gh;case 35667:case 35671:return Bh;case 35668:case 35672:return kh;case 35669:case 35673:return Vh;case 5125:return Hh;case 36294:return Wh;case 36295:return jh;case 36296:return Xh;case 35678:case 36198:case 36298:case 36306:case 35682:return qh;case 35679:case 36299:case 36307:return Yh;case 35680:case 36300:case 36308:case 36293:return Zh;case 36289:case 36303:case 36311:case 36292:return Kh}}class Qh{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Ph(t.type)}}class $h{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=Jh(t.type)}}class ed{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let n=0,o=r.length;n!==o;++n){const s=r[n];s.setValue(e,t[s.id],i)}}}const Sn=/(\w+)(\])?(\[|\.)?/g;function Xa(a,e){a.seq.push(e),a.map[e.id]=e}function td(a,e,t){const i=a.name,r=i.length;for(Sn.lastIndex=0;;){const n=Sn.exec(i),o=Sn.lastIndex;let s=n[1];const c=n[2]==="]",l=n[3];if(c&&(s=s|0),l===void 0||l==="["&&o+2===r){Xa(t,l===void 0?new Qh(s,a,e):new $h(s,a,e));break}else{let u=t.map[s];u===void 0&&(u=new ed(s),Xa(t,u)),t=u}}}class Ir{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const n=e.getActiveUniform(t,r),o=e.getUniformLocation(t,n.name);td(n,o,this)}}setValue(e,t,i,r){const n=this.map[t];n!==void 0&&n.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let n=0,o=t.length;n!==o;++n){const s=t[n],c=i[s.id];c.needsUpdate!==!1&&s.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,n=e.length;r!==n;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function qa(a,e,t){const i=a.createShader(e);return a.shaderSource(i,t),a.compileShader(i),i}let id=0;function rd(a,e){const t=a.split(`
`),i=[],r=Math.max(e-6,0),n=Math.min(e+6,t.length);for(let o=r;o<n;o++){const s=o+1;i.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return i.join(`
`)}function nd(a){switch(a){case fi:return["Linear","( value )"];case ze:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",a),["Linear","( value )"]}}function Ya(a,e,t){const i=a.getShaderParameter(e,35713),r=a.getShaderInfoLog(e).trim();if(i&&r==="")return"";const n=/ERROR: 0:(\d+)/.exec(r);if(n){const o=parseInt(n[1]);return t.toUpperCase()+`

`+r+`

`+rd(a.getShaderSource(e),o)}else return r}function ad(a,e){const t=nd(e);return"vec4 "+a+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function sd(a,e){let t;switch(e){case wo:t="Linear";break;case To:t="Reinhard";break;case Eo:t="OptimizedCineon";break;case Ao:t="ACESFilmic";break;case Lo:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function od(a){return[a.extensionDerivatives||a.envMapCubeUVHeight||a.bumpMap||a.tangentSpaceNormalMap||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(tr).join(`
`)}function ld(a){const e=[];for(const t in a){const i=a[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function cd(a,e){const t={},i=a.getProgramParameter(e,35721);for(let r=0;r<i;r++){const n=a.getActiveAttrib(e,r),o=n.name;let s=1;n.type===35674&&(s=2),n.type===35675&&(s=3),n.type===35676&&(s=4),t[o]={type:n.type,location:a.getAttribLocation(e,o),locationSize:s}}return t}function tr(a){return a!==""}function Za(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ka(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ud=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nn(a){return a.replace(ud,hd)}function hd(a,e){const t=be[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Nn(t)}const dd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ja(a){return a.replace(dd,pd)}function pd(a,e,t,i){let r="";for(let n=parseInt(e);n<parseInt(t);n++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return r}function Qa(a){let e="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function fd(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===ms?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===to?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===er&&(e="SHADOWMAP_TYPE_VSM"),e}function md(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Fi:case Gi:e="ENVMAP_TYPE_CUBE";break;case Or:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gd(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Gi:e="ENVMAP_MODE_REFRACTION";break}return e}function _d(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case vs:e="ENVMAP_BLENDING_MULTIPLY";break;case So:e="ENVMAP_BLENDING_MIX";break;case bo:e="ENVMAP_BLENDING_ADD";break}return e}function vd(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function xd(a,e,t,i){const r=a.getContext(),n=t.defines;let o=t.vertexShader,s=t.fragmentShader;const c=fd(t),l=md(t),u=gd(t),f=_d(t),h=vd(t),m=t.isWebGL2?"":od(t),x=ld(n),p=r.createProgram();let d,y,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[x].filter(tr).join(`
`),d.length>0&&(d+=`
`),y=[m,x].filter(tr).join(`
`),y.length>0&&(y+=`
`)):(d=[Qa(t),"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tr).join(`
`),y=[m,Qa(t),"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wt?"#define TONE_MAPPING":"",t.toneMapping!==Wt?be.tonemapping_pars_fragment:"",t.toneMapping!==Wt?sd("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",be.encodings_pars_fragment,ad("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(tr).join(`
`)),o=Nn(o),o=Za(o,t),o=Ka(o,t),s=Nn(s),s=Za(s,t),s=Ka(s,t),o=Ja(o),s=Ja(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,y=["#define varying in",t.glslVersion===ya?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ya?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const M=S+d+o,v=S+y+s,E=qa(r,35633,M),A=qa(r,35632,v);if(r.attachShader(p,E),r.attachShader(p,A),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),a.debug.checkShaderErrors){const w=r.getProgramInfoLog(p).trim(),L=r.getShaderInfoLog(E).trim(),H=r.getShaderInfoLog(A).trim();let W=!0,N=!0;if(r.getProgramParameter(p,35714)===!1){W=!1;const R=Ya(r,E,"vertex"),V=Ya(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,35715)+`

Program Info Log: `+w+`
`+R+`
`+V)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(L===""||H==="")&&(N=!1);N&&(this.diagnostics={runnable:W,programLog:w,vertexShader:{log:L,prefix:d},fragmentShader:{log:H,prefix:y}})}r.deleteShader(E),r.deleteShader(A);let D;this.getUniforms=function(){return D===void 0&&(D=new Ir(r,p)),D};let g;return this.getAttributes=function(){return g===void 0&&(g=cd(r,p)),g},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=id++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=E,this.fragmentShader=A,this}let Md=0;class yd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),n=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(n)===!1&&(o.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Sd(e),t.set(e,i)),i}}class Sd{constructor(e){this.id=Md++,this.code=e,this.usedTimes=0}}function bd(a,e,t,i,r,n,o){const s=new Ls,c=new yd,l=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(g,w,L,H,W){const N=H.fog,R=W.geometry,V=g.isMeshStandardMaterial?H.environment:null,Y=(g.isMeshStandardMaterial?t:e).get(g.envMap||V),$=Y&&Y.mapping===Or?Y.image.height:null,X=x[g.type];g.precision!==null&&(m=r.getMaxPrecision(g.precision),m!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",m,"instead."));const Q=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,Z=Q!==void 0?Q.length:0;let pe=0;R.morphAttributes.position!==void 0&&(pe=1),R.morphAttributes.normal!==void 0&&(pe=2),R.morphAttributes.color!==void 0&&(pe=3);let O,q,ie,oe;if(X){const se=It[X];O=se.vertexShader,q=se.fragmentShader}else O=g.vertexShader,q=g.fragmentShader,c.update(g),ie=c.getVertexShaderID(g),oe=c.getFragmentShaderID(g);const U=a.getRenderTarget(),ye=g.alphaTest>0,ue=g.clearcoat>0,he=g.iridescence>0;return{isWebGL2:u,shaderID:X,shaderName:g.type,vertexShader:O,fragmentShader:q,defines:g.defines,customVertexShaderID:ie,customFragmentShaderID:oe,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:m,instancing:W.isInstancedMesh===!0,instancingColor:W.isInstancedMesh===!0&&W.instanceColor!==null,supportsVertexTextures:h,outputEncoding:U===null?a.outputEncoding:U.isXRRenderTarget===!0?U.texture.encoding:fi,map:!!g.map,matcap:!!g.matcap,envMap:!!Y,envMapMode:Y&&Y.mapping,envMapCubeUVHeight:$,lightMap:!!g.lightMap,aoMap:!!g.aoMap,emissiveMap:!!g.emissiveMap,bumpMap:!!g.bumpMap,normalMap:!!g.normalMap,objectSpaceNormalMap:g.normalMapType===qo,tangentSpaceNormalMap:g.normalMapType===ys,decodeVideoTexture:!!g.map&&g.map.isVideoTexture===!0&&g.map.encoding===ze,clearcoat:ue,clearcoatMap:ue&&!!g.clearcoatMap,clearcoatRoughnessMap:ue&&!!g.clearcoatRoughnessMap,clearcoatNormalMap:ue&&!!g.clearcoatNormalMap,iridescence:he,iridescenceMap:he&&!!g.iridescenceMap,iridescenceThicknessMap:he&&!!g.iridescenceThicknessMap,displacementMap:!!g.displacementMap,roughnessMap:!!g.roughnessMap,metalnessMap:!!g.metalnessMap,specularMap:!!g.specularMap,specularIntensityMap:!!g.specularIntensityMap,specularColorMap:!!g.specularColorMap,opaque:g.transparent===!1&&g.blending===Oi,alphaMap:!!g.alphaMap,alphaTest:ye,gradientMap:!!g.gradientMap,sheen:g.sheen>0,sheenColorMap:!!g.sheenColorMap,sheenRoughnessMap:!!g.sheenRoughnessMap,transmission:g.transmission>0,transmissionMap:!!g.transmissionMap,thicknessMap:!!g.thicknessMap,combine:g.combine,vertexTangents:!!g.normalMap&&!!R.attributes.tangent,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUvs:!!g.map||!!g.bumpMap||!!g.normalMap||!!g.specularMap||!!g.alphaMap||!!g.emissiveMap||!!g.roughnessMap||!!g.metalnessMap||!!g.clearcoatMap||!!g.clearcoatRoughnessMap||!!g.clearcoatNormalMap||!!g.iridescenceMap||!!g.iridescenceThicknessMap||!!g.displacementMap||!!g.transmissionMap||!!g.thicknessMap||!!g.specularIntensityMap||!!g.specularColorMap||!!g.sheenColorMap||!!g.sheenRoughnessMap,uvsVertexOnly:!(g.map||g.bumpMap||g.normalMap||g.specularMap||g.alphaMap||g.emissiveMap||g.roughnessMap||g.metalnessMap||g.clearcoatNormalMap||g.iridescenceMap||g.iridescenceThicknessMap||g.transmission>0||g.transmissionMap||g.thicknessMap||g.specularIntensityMap||g.specularColorMap||g.sheen>0||g.sheenColorMap||g.sheenRoughnessMap)&&!!g.displacementMap,fog:!!N,useFog:g.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:!!g.flatShading,sizeAttenuation:g.sizeAttenuation,logarithmicDepthBuffer:f,skinning:W.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:pe,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:g.dithering,shadowMapEnabled:a.shadowMap.enabled&&L.length>0,shadowMapType:a.shadowMap.type,toneMapping:g.toneMapped?a.toneMapping:Wt,physicallyCorrectLights:a.physicallyCorrectLights,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Zt,flipSided:g.side===mt,useDepthPacking:!!g.depthPacking,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionDerivatives:g.extensions&&g.extensions.derivatives,extensionFragDepth:g.extensions&&g.extensions.fragDepth,extensionDrawBuffers:g.extensions&&g.extensions.drawBuffers,extensionShaderTextureLOD:g.extensions&&g.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:g.customProgramCacheKey()}}function d(g){const w=[];if(g.shaderID?w.push(g.shaderID):(w.push(g.customVertexShaderID),w.push(g.customFragmentShaderID)),g.defines!==void 0)for(const L in g.defines)w.push(L),w.push(g.defines[L]);return g.isRawShaderMaterial===!1&&(y(w,g),S(w,g),w.push(a.outputEncoding)),w.push(g.customProgramCacheKey),w.join()}function y(g,w){g.push(w.precision),g.push(w.outputEncoding),g.push(w.envMapMode),g.push(w.envMapCubeUVHeight),g.push(w.combine),g.push(w.vertexUvs),g.push(w.fogExp2),g.push(w.sizeAttenuation),g.push(w.morphTargetsCount),g.push(w.morphAttributeCount),g.push(w.numDirLights),g.push(w.numPointLights),g.push(w.numSpotLights),g.push(w.numSpotLightMaps),g.push(w.numHemiLights),g.push(w.numRectAreaLights),g.push(w.numDirLightShadows),g.push(w.numPointLightShadows),g.push(w.numSpotLightShadows),g.push(w.numSpotLightShadowsWithMaps),g.push(w.shadowMapType),g.push(w.toneMapping),g.push(w.numClippingPlanes),g.push(w.numClipIntersection),g.push(w.depthPacking)}function S(g,w){s.disableAll(),w.isWebGL2&&s.enable(0),w.supportsVertexTextures&&s.enable(1),w.instancing&&s.enable(2),w.instancingColor&&s.enable(3),w.map&&s.enable(4),w.matcap&&s.enable(5),w.envMap&&s.enable(6),w.lightMap&&s.enable(7),w.aoMap&&s.enable(8),w.emissiveMap&&s.enable(9),w.bumpMap&&s.enable(10),w.normalMap&&s.enable(11),w.objectSpaceNormalMap&&s.enable(12),w.tangentSpaceNormalMap&&s.enable(13),w.clearcoat&&s.enable(14),w.clearcoatMap&&s.enable(15),w.clearcoatRoughnessMap&&s.enable(16),w.clearcoatNormalMap&&s.enable(17),w.iridescence&&s.enable(18),w.iridescenceMap&&s.enable(19),w.iridescenceThicknessMap&&s.enable(20),w.displacementMap&&s.enable(21),w.specularMap&&s.enable(22),w.roughnessMap&&s.enable(23),w.metalnessMap&&s.enable(24),w.gradientMap&&s.enable(25),w.alphaMap&&s.enable(26),w.alphaTest&&s.enable(27),w.vertexColors&&s.enable(28),w.vertexAlphas&&s.enable(29),w.vertexUvs&&s.enable(30),w.vertexTangents&&s.enable(31),w.uvsVertexOnly&&s.enable(32),g.push(s.mask),s.disableAll(),w.fog&&s.enable(0),w.useFog&&s.enable(1),w.flatShading&&s.enable(2),w.logarithmicDepthBuffer&&s.enable(3),w.skinning&&s.enable(4),w.morphTargets&&s.enable(5),w.morphNormals&&s.enable(6),w.morphColors&&s.enable(7),w.premultipliedAlpha&&s.enable(8),w.shadowMapEnabled&&s.enable(9),w.physicallyCorrectLights&&s.enable(10),w.doubleSided&&s.enable(11),w.flipSided&&s.enable(12),w.useDepthPacking&&s.enable(13),w.dithering&&s.enable(14),w.specularIntensityMap&&s.enable(15),w.specularColorMap&&s.enable(16),w.transmission&&s.enable(17),w.transmissionMap&&s.enable(18),w.thicknessMap&&s.enable(19),w.sheen&&s.enable(20),w.sheenColorMap&&s.enable(21),w.sheenRoughnessMap&&s.enable(22),w.decodeVideoTexture&&s.enable(23),w.opaque&&s.enable(24),g.push(s.mask)}function M(g){const w=x[g.type];let L;if(w){const H=It[w];L=cl.clone(H.uniforms)}else L=g.uniforms;return L}function v(g,w){let L;for(let H=0,W=l.length;H<W;H++){const N=l[H];if(N.cacheKey===w){L=N,++L.usedTimes;break}}return L===void 0&&(L=new xd(a,w,g,n),l.push(L)),L}function E(g){if(--g.usedTimes===0){const w=l.indexOf(g);l[w]=l[l.length-1],l.pop(),g.destroy()}}function A(g){c.remove(g)}function D(){c.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:M,acquireProgram:v,releaseProgram:E,releaseShaderCache:A,programs:l,dispose:D}}function wd(){let a=new WeakMap;function e(n){let o=a.get(n);return o===void 0&&(o={},a.set(n,o)),o}function t(n){a.delete(n)}function i(n,o,s){a.get(n)[o]=s}function r(){a=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Td(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function $a(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function es(){const a=[];let e=0;const t=[],i=[],r=[];function n(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,m,x,p,d){let y=a[e];return y===void 0?(y={id:f.id,object:f,geometry:h,material:m,groupOrder:x,renderOrder:f.renderOrder,z:p,group:d},a[e]=y):(y.id=f.id,y.object=f,y.geometry=h,y.material=m,y.groupOrder=x,y.renderOrder=f.renderOrder,y.z=p,y.group=d),e++,y}function s(f,h,m,x,p,d){const y=o(f,h,m,x,p,d);m.transmission>0?i.push(y):m.transparent===!0?r.push(y):t.push(y)}function c(f,h,m,x,p,d){const y=o(f,h,m,x,p,d);m.transmission>0?i.unshift(y):m.transparent===!0?r.unshift(y):t.unshift(y)}function l(f,h){t.length>1&&t.sort(f||Td),i.length>1&&i.sort(h||$a),r.length>1&&r.sort(h||$a)}function u(){for(let f=e,h=a.length;f<h;f++){const m=a[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:n,push:s,unshift:c,finish:u,sort:l}}function Ed(){let a=new WeakMap;function e(i,r){const n=a.get(i);let o;return n===void 0?(o=new es,a.set(i,[o])):r>=n.length?(o=new es,n.push(o)):o=n[r],o}function t(){a=new WeakMap}return{get:e,dispose:t}}function Ad(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Re};break;case"SpotLight":t={position:new P,direction:new P,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new P,halfWidth:new P,halfHeight:new P};break}return a[e.id]=t,t}}}function Ld(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let Cd=0;function Dd(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function Pd(a,e){const t=new Ad,i=Ld(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new P);const n=new P,o=new Ge,s=new Ge;function c(u,f){let h=0,m=0,x=0;for(let H=0;H<9;H++)r.probe[H].set(0,0,0);let p=0,d=0,y=0,S=0,M=0,v=0,E=0,A=0,D=0,g=0;u.sort(Dd);const w=f!==!0?Math.PI:1;for(let H=0,W=u.length;H<W;H++){const N=u[H],R=N.color,V=N.intensity,Y=N.distance,$=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=R.r*V*w,m+=R.g*V*w,x+=R.b*V*w;else if(N.isLightProbe)for(let X=0;X<9;X++)r.probe[X].addScaledVector(N.sh.coefficients[X],V);else if(N.isDirectionalLight){const X=t.get(N);if(X.color.copy(N.color).multiplyScalar(N.intensity*w),N.castShadow){const Q=N.shadow,Z=i.get(N);Z.shadowBias=Q.bias,Z.shadowNormalBias=Q.normalBias,Z.shadowRadius=Q.radius,Z.shadowMapSize=Q.mapSize,r.directionalShadow[p]=Z,r.directionalShadowMap[p]=$,r.directionalShadowMatrix[p]=N.shadow.matrix,v++}r.directional[p]=X,p++}else if(N.isSpotLight){const X=t.get(N);X.position.setFromMatrixPosition(N.matrixWorld),X.color.copy(R).multiplyScalar(V*w),X.distance=Y,X.coneCos=Math.cos(N.angle),X.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),X.decay=N.decay,r.spot[y]=X;const Q=N.shadow;if(N.map&&(r.spotLightMap[D]=N.map,D++,Q.updateMatrices(N),N.castShadow&&g++),r.spotLightMatrix[y]=Q.matrix,N.castShadow){const Z=i.get(N);Z.shadowBias=Q.bias,Z.shadowNormalBias=Q.normalBias,Z.shadowRadius=Q.radius,Z.shadowMapSize=Q.mapSize,r.spotShadow[y]=Z,r.spotShadowMap[y]=$,A++}y++}else if(N.isRectAreaLight){const X=t.get(N);X.color.copy(R).multiplyScalar(V),X.halfWidth.set(N.width*.5,0,0),X.halfHeight.set(0,N.height*.5,0),r.rectArea[S]=X,S++}else if(N.isPointLight){const X=t.get(N);if(X.color.copy(N.color).multiplyScalar(N.intensity*w),X.distance=N.distance,X.decay=N.decay,N.castShadow){const Q=N.shadow,Z=i.get(N);Z.shadowBias=Q.bias,Z.shadowNormalBias=Q.normalBias,Z.shadowRadius=Q.radius,Z.shadowMapSize=Q.mapSize,Z.shadowCameraNear=Q.camera.near,Z.shadowCameraFar=Q.camera.far,r.pointShadow[d]=Z,r.pointShadowMap[d]=$,r.pointShadowMatrix[d]=N.shadow.matrix,E++}r.point[d]=X,d++}else if(N.isHemisphereLight){const X=t.get(N);X.skyColor.copy(N.color).multiplyScalar(V*w),X.groundColor.copy(N.groundColor).multiplyScalar(V*w),r.hemi[M]=X,M++}}S>0&&(e.isWebGL2||a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=te.LTC_FLOAT_1,r.rectAreaLTC2=te.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=te.LTC_HALF_1,r.rectAreaLTC2=te.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=x;const L=r.hash;(L.directionalLength!==p||L.pointLength!==d||L.spotLength!==y||L.rectAreaLength!==S||L.hemiLength!==M||L.numDirectionalShadows!==v||L.numPointShadows!==E||L.numSpotShadows!==A||L.numSpotMaps!==D)&&(r.directional.length=p,r.spot.length=y,r.rectArea.length=S,r.point.length=d,r.hemi.length=M,r.directionalShadow.length=v,r.directionalShadowMap.length=v,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=v,r.pointShadowMatrix.length=E,r.spotLightMatrix.length=A+D-g,r.spotLightMap.length=D,r.numSpotLightShadowsWithMaps=g,L.directionalLength=p,L.pointLength=d,L.spotLength=y,L.rectAreaLength=S,L.hemiLength=M,L.numDirectionalShadows=v,L.numPointShadows=E,L.numSpotShadows=A,L.numSpotMaps=D,r.version=Cd++)}function l(u,f){let h=0,m=0,x=0,p=0,d=0;const y=f.matrixWorldInverse;for(let S=0,M=u.length;S<M;S++){const v=u[S];if(v.isDirectionalLight){const E=r.directional[h];E.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(n),E.direction.transformDirection(y),h++}else if(v.isSpotLight){const E=r.spot[x];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(y),E.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(n),E.direction.transformDirection(y),x++}else if(v.isRectAreaLight){const E=r.rectArea[p];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(y),s.identity(),o.copy(v.matrixWorld),o.premultiply(y),s.extractRotation(o),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(s),E.halfHeight.applyMatrix4(s),p++}else if(v.isPointLight){const E=r.point[m];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(y),m++}else if(v.isHemisphereLight){const E=r.hemi[d];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(y),d++}}}return{setup:c,setupView:l,state:r}}function ts(a,e){const t=new Pd(a,e),i=[],r=[];function n(){i.length=0,r.length=0}function o(u){i.push(u)}function s(u){r.push(u)}function c(u){t.setup(i,u)}function l(u){t.setupView(i,u)}return{init:n,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function Rd(a,e){let t=new WeakMap;function i(n,o=0){const s=t.get(n);let c;return s===void 0?(c=new ts(a,e),t.set(n,[c])):o>=s.length?(c=new ts(a,e),s.push(c)):c=s[o],c}function r(){t=new WeakMap}return{get:i,dispose:r}}class Id extends Hi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jo,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Nd extends Hi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new P,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const zd=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Od=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ud(a,e,t){let i=new On;const r=new Le,n=new Le,o=new Je,s=new Id({depthPacking:Xo}),c=new Nd,l={},u=t.maxTextureSize,f={[Jt]:mt,[mt]:Jt,[Zt]:Zt},h=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:zd,fragmentShader:Od}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const x=new bt;x.setAttribute("position",new Dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Nt(x,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ms,this.render=function(v,E,A){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||v.length===0)return;const D=a.getRenderTarget(),g=a.getActiveCubeFace(),w=a.getActiveMipmapLevel(),L=a.state;L.setBlending(Kt),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);for(let H=0,W=v.length;H<W;H++){const N=v[H],R=N.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;r.copy(R.mapSize);const V=R.getFrameExtents();if(r.multiply(V),n.copy(R.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(n.x=Math.floor(u/V.x),r.x=n.x*V.x,R.mapSize.x=n.x),r.y>u&&(n.y=Math.floor(u/V.y),r.y=n.y*V.y,R.mapSize.y=n.y)),R.map===null){const $=this.type!==er?{minFilter:ot,magFilter:ot}:{};R.map=new mi(r.x,r.y,$),R.map.texture.name=N.name+".shadowMap",R.camera.updateProjectionMatrix()}a.setRenderTarget(R.map),a.clear();const Y=R.getViewportCount();for(let $=0;$<Y;$++){const X=R.getViewport($);o.set(n.x*X.x,n.y*X.y,n.x*X.z,n.y*X.w),L.viewport(o),R.updateMatrices(N,$),i=R.getFrustum(),M(E,A,R.camera,N,this.type)}R.isPointLightShadow!==!0&&this.type===er&&y(R,A),R.needsUpdate=!1}d.needsUpdate=!1,a.setRenderTarget(D,g,w)};function y(v,E){const A=e.update(p);h.defines.VSM_SAMPLES!==v.blurSamples&&(h.defines.VSM_SAMPLES=v.blurSamples,m.defines.VSM_SAMPLES=v.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new mi(r.x,r.y)),h.uniforms.shadow_pass.value=v.map.texture,h.uniforms.resolution.value=v.mapSize,h.uniforms.radius.value=v.radius,a.setRenderTarget(v.mapPass),a.clear(),a.renderBufferDirect(E,null,A,h,p,null),m.uniforms.shadow_pass.value=v.mapPass.texture,m.uniforms.resolution.value=v.mapSize,m.uniforms.radius.value=v.radius,a.setRenderTarget(v.map),a.clear(),a.renderBufferDirect(E,null,A,m,p,null)}function S(v,E,A,D,g,w){let L=null;const H=A.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(H!==void 0)L=H;else if(L=A.isPointLight===!0?c:s,a.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const W=L.uuid,N=E.uuid;let R=l[W];R===void 0&&(R={},l[W]=R);let V=R[N];V===void 0&&(V=L.clone(),R[N]=V),L=V}return L.visible=E.visible,L.wireframe=E.wireframe,w===er?L.side=E.shadowSide!==null?E.shadowSide:E.side:L.side=E.shadowSide!==null?E.shadowSide:f[E.side],L.alphaMap=E.alphaMap,L.alphaTest=E.alphaTest,L.map=E.map,L.clipShadows=E.clipShadows,L.clippingPlanes=E.clippingPlanes,L.clipIntersection=E.clipIntersection,L.displacementMap=E.displacementMap,L.displacementScale=E.displacementScale,L.displacementBias=E.displacementBias,L.wireframeLinewidth=E.wireframeLinewidth,L.linewidth=E.linewidth,A.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(L.referencePosition.setFromMatrixPosition(A.matrixWorld),L.nearDistance=D,L.farDistance=g),L}function M(v,E,A,D,g){if(v.visible===!1)return;if(v.layers.test(E.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&g===er)&&(!v.frustumCulled||i.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,v.matrixWorld);const L=e.update(v),H=v.material;if(Array.isArray(H)){const W=L.groups;for(let N=0,R=W.length;N<R;N++){const V=W[N],Y=H[V.materialIndex];if(Y&&Y.visible){const $=S(v,Y,D,A.near,A.far,g);a.renderBufferDirect(A,null,L,$,v,V)}}}else if(H.visible){const W=S(v,H,D,A.near,A.far,g);a.renderBufferDirect(A,null,L,W,v,null)}}const w=v.children;for(let L=0,H=w.length;L<H;L++)M(w[L],E,A,D,g)}}function Fd(a,e,t){const i=t.isWebGL2;function r(){let C=!1;const G=new Je;let K=null;const re=new Je(0,0,0,0);return{setMask:function(ge){K!==ge&&!C&&(a.colorMask(ge,ge,ge,ge),K=ge)},setLocked:function(ge){C=ge},setClear:function(ge,Pe,Ye,et,Qt){Qt===!0&&(ge*=et,Pe*=et,Ye*=et),G.set(ge,Pe,Ye,et),re.equals(G)===!1&&(a.clearColor(ge,Pe,Ye,et),re.copy(G))},reset:function(){C=!1,K=null,re.set(-1,0,0,0)}}}function n(){let C=!1,G=null,K=null,re=null;return{setTest:function(ge){ge?ye(2929):ue(2929)},setMask:function(ge){G!==ge&&!C&&(a.depthMask(ge),G=ge)},setFunc:function(ge){if(K!==ge){switch(ge){case mo:a.depthFunc(512);break;case go:a.depthFunc(519);break;case _o:a.depthFunc(513);break;case An:a.depthFunc(515);break;case vo:a.depthFunc(514);break;case xo:a.depthFunc(518);break;case Mo:a.depthFunc(516);break;case yo:a.depthFunc(517);break;default:a.depthFunc(515)}K=ge}},setLocked:function(ge){C=ge},setClear:function(ge){re!==ge&&(a.clearDepth(ge),re=ge)},reset:function(){C=!1,G=null,K=null,re=null}}}function o(){let C=!1,G=null,K=null,re=null,ge=null,Pe=null,Ye=null,et=null,Qt=null;return{setTest:function(Ue){C||(Ue?ye(2960):ue(2960))},setMask:function(Ue){G!==Ue&&!C&&(a.stencilMask(Ue),G=Ue)},setFunc:function(Ue,Ot,xt){(K!==Ue||re!==Ot||ge!==xt)&&(a.stencilFunc(Ue,Ot,xt),K=Ue,re=Ot,ge=xt)},setOp:function(Ue,Ot,xt){(Pe!==Ue||Ye!==Ot||et!==xt)&&(a.stencilOp(Ue,Ot,xt),Pe=Ue,Ye=Ot,et=xt)},setLocked:function(Ue){C=Ue},setClear:function(Ue){Qt!==Ue&&(a.clearStencil(Ue),Qt=Ue)},reset:function(){C=!1,G=null,K=null,re=null,ge=null,Pe=null,Ye=null,et=null,Qt=null}}}const s=new r,c=new n,l=new o,u=new WeakMap,f=new WeakMap;let h={},m={},x=new WeakMap,p=[],d=null,y=!1,S=null,M=null,v=null,E=null,A=null,D=null,g=null,w=!1,L=null,H=null,W=null,N=null,R=null;const V=a.getParameter(35661);let Y=!1,$=0;const X=a.getParameter(7938);X.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(X)[1]),Y=$>=1):X.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),Y=$>=2);let Q=null,Z={};const pe=a.getParameter(3088),O=a.getParameter(2978),q=new Je().fromArray(pe),ie=new Je().fromArray(O);function oe(C,G,K){const re=new Uint8Array(4),ge=a.createTexture();a.bindTexture(C,ge),a.texParameteri(C,10241,9728),a.texParameteri(C,10240,9728);for(let Pe=0;Pe<K;Pe++)a.texImage2D(G+Pe,0,6408,1,1,0,6408,5121,re);return ge}const U={};U[3553]=oe(3553,3553,1),U[34067]=oe(34067,34069,6),s.setClear(0,0,0,1),c.setClear(1),l.setClear(0),ye(2929),c.setFunc(An),$e(!1),vt(Wn),ye(2884),rt(Kt);function ye(C){h[C]!==!0&&(a.enable(C),h[C]=!0)}function ue(C){h[C]!==!1&&(a.disable(C),h[C]=!1)}function he(C,G){return m[C]!==G?(a.bindFramebuffer(C,G),m[C]=G,i&&(C===36009&&(m[36160]=G),C===36160&&(m[36009]=G)),!0):!1}function se(C,G){let K=p,re=!1;if(C)if(K=x.get(G),K===void 0&&(K=[],x.set(G,K)),C.isWebGLMultipleRenderTargets){const ge=C.texture;if(K.length!==ge.length||K[0]!==36064){for(let Pe=0,Ye=ge.length;Pe<Ye;Pe++)K[Pe]=36064+Pe;K.length=ge.length,re=!0}}else K[0]!==36064&&(K[0]=36064,re=!0);else K[0]!==1029&&(K[0]=1029,re=!0);re&&(t.isWebGL2?a.drawBuffers(K):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(K))}function Fe(C){return d!==C?(a.useProgram(C),d=C,!0):!1}const Se={[Ni]:32774,[ro]:32778,[no]:32779};if(i)Se[Yn]=32775,Se[Zn]=32776;else{const C=e.get("EXT_blend_minmax");C!==null&&(Se[Yn]=C.MIN_EXT,Se[Zn]=C.MAX_EXT)}const ve={[ao]:0,[so]:1,[oo]:768,[gs]:770,[fo]:776,[ho]:774,[co]:772,[lo]:769,[_s]:771,[po]:775,[uo]:773};function rt(C,G,K,re,ge,Pe,Ye,et){if(C===Kt){y===!0&&(ue(3042),y=!1);return}if(y===!1&&(ye(3042),y=!0),C!==io){if(C!==S||et!==w){if((M!==Ni||A!==Ni)&&(a.blendEquation(32774),M=Ni,A=Ni),et)switch(C){case Oi:a.blendFuncSeparate(1,771,1,771);break;case jn:a.blendFunc(1,1);break;case Xn:a.blendFuncSeparate(0,769,0,1);break;case qn:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Oi:a.blendFuncSeparate(770,771,1,771);break;case jn:a.blendFunc(770,1);break;case Xn:a.blendFuncSeparate(0,769,0,1);break;case qn:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}v=null,E=null,D=null,g=null,S=C,w=et}return}ge=ge||G,Pe=Pe||K,Ye=Ye||re,(G!==M||ge!==A)&&(a.blendEquationSeparate(Se[G],Se[ge]),M=G,A=ge),(K!==v||re!==E||Pe!==D||Ye!==g)&&(a.blendFuncSeparate(ve[K],ve[re],ve[Pe],ve[Ye]),v=K,E=re,D=Pe,g=Ye),S=C,w=!1}function _t(C,G){C.side===Zt?ue(2884):ye(2884);let K=C.side===mt;G&&(K=!K),$e(K),C.blending===Oi&&C.transparent===!1?rt(Kt):rt(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.premultipliedAlpha),c.setFunc(C.depthFunc),c.setTest(C.depthTest),c.setMask(C.depthWrite),s.setMask(C.colorWrite);const re=C.stencilWrite;l.setTest(re),re&&(l.setMask(C.stencilWriteMask),l.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),l.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Ie(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?ye(32926):ue(32926)}function $e(C){L!==C&&(C?a.frontFace(2304):a.frontFace(2305),L=C)}function vt(C){C!==$s?(ye(2884),C!==H&&(C===Wn?a.cullFace(1029):C===eo?a.cullFace(1028):a.cullFace(1032))):ue(2884),H=C}function He(C){C!==W&&(Y&&a.lineWidth(C),W=C)}function Ie(C,G,K){C?(ye(32823),(N!==G||R!==K)&&(a.polygonOffset(G,K),N=G,R=K)):ue(32823)}function zt(C){C?ye(3089):ue(3089)}function wt(C){C===void 0&&(C=33984+V-1),Q!==C&&(a.activeTexture(C),Q=C)}function T(C,G,K){K===void 0&&(Q===null?K=33984+V-1:K=Q);let re=Z[K];re===void 0&&(re={type:void 0,texture:void 0},Z[K]=re),(re.type!==C||re.texture!==G)&&(Q!==K&&(a.activeTexture(K),Q=K),a.bindTexture(C,G||U[C]),re.type=C,re.texture=G)}function _(){const C=Z[Q];C!==void 0&&C.type!==void 0&&(a.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function F(){try{a.compressedTexImage2D.apply(a,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function J(){try{a.compressedTexImage3D.apply(a,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ee(){try{a.texSubImage2D.apply(a,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ne(){try{a.texSubImage3D.apply(a,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function xe(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ae(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function j(){try{a.texStorage2D.apply(a,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function me(){try{a.texStorage3D.apply(a,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function _e(){try{a.texImage2D.apply(a,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ce(){try{a.texImage3D.apply(a,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function fe(C){q.equals(C)===!1&&(a.scissor(C.x,C.y,C.z,C.w),q.copy(C))}function de(C){ie.equals(C)===!1&&(a.viewport(C.x,C.y,C.z,C.w),ie.copy(C))}function Ce(C,G){let K=f.get(G);K===void 0&&(K=new WeakMap,f.set(G,K));let re=K.get(C);re===void 0&&(re=a.getUniformBlockIndex(G,C.name),K.set(C,re))}function Oe(C,G){const K=f.get(G).get(C);u.get(G)!==K&&(a.uniformBlockBinding(G,K,C.__bindingPointIndex),u.set(G,K))}function qe(){a.disable(3042),a.disable(2884),a.disable(2929),a.disable(32823),a.disable(3089),a.disable(2960),a.disable(32926),a.blendEquation(32774),a.blendFunc(1,0),a.blendFuncSeparate(1,0,1,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(513),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(519,0,4294967295),a.stencilOp(7680,7680,7680),a.clearStencil(0),a.cullFace(1029),a.frontFace(2305),a.polygonOffset(0,0),a.activeTexture(33984),a.bindFramebuffer(36160,null),i===!0&&(a.bindFramebuffer(36009,null),a.bindFramebuffer(36008,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),h={},Q=null,Z={},m={},x=new WeakMap,p=[],d=null,y=!1,S=null,M=null,v=null,E=null,A=null,D=null,g=null,w=!1,L=null,H=null,W=null,N=null,R=null,q.set(0,0,a.canvas.width,a.canvas.height),ie.set(0,0,a.canvas.width,a.canvas.height),s.reset(),c.reset(),l.reset()}return{buffers:{color:s,depth:c,stencil:l},enable:ye,disable:ue,bindFramebuffer:he,drawBuffers:se,useProgram:Fe,setBlending:rt,setMaterial:_t,setFlipSided:$e,setCullFace:vt,setLineWidth:He,setPolygonOffset:Ie,setScissorTest:zt,activeTexture:wt,bindTexture:T,unbindTexture:_,compressedTexImage2D:F,compressedTexImage3D:J,texImage2D:_e,texImage3D:ce,updateUBOMapping:Ce,uniformBlockBinding:Oe,texStorage2D:j,texStorage3D:me,texSubImage2D:ee,texSubImage3D:ne,compressedTexSubImage2D:xe,compressedTexSubImage3D:ae,scissor:fe,viewport:de,reset:qe}}function Gd(a,e,t,i,r,n,o){const s=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let p;const d=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(T,_){return y?new OffscreenCanvas(T,_):zr("canvas")}function M(T,_,F,J){let ee=1;if((T.width>J||T.height>J)&&(ee=J/Math.max(T.width,T.height)),ee<1||_===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const ne=_?In:Math.floor,xe=ne(ee*T.width),ae=ne(ee*T.height);p===void 0&&(p=S(xe,ae));const j=F?S(xe,ae):p;return j.width=xe,j.height=ae,j.getContext("2d").drawImage(T,0,0,xe,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+xe+"x"+ae+")."),j}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function v(T){return ba(T.width)&&ba(T.height)}function E(T){return s?!1:T.wrapS!==Lt||T.wrapT!==Lt||T.minFilter!==ot&&T.minFilter!==yt}function A(T,_){return T.generateMipmaps&&_&&T.minFilter!==ot&&T.minFilter!==yt}function D(T){a.generateMipmap(T)}function g(T,_,F,J,ee=!1){if(s===!1)return _;if(T!==null){if(a[T]!==void 0)return a[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ne=_;return _===6403&&(F===5126&&(ne=33326),F===5131&&(ne=33325),F===5121&&(ne=33321)),_===33319&&(F===5126&&(ne=33328),F===5131&&(ne=33327),F===5121&&(ne=33323)),_===6408&&(F===5126&&(ne=34836),F===5131&&(ne=34842),F===5121&&(ne=J===ze&&ee===!1?35907:32856),F===32819&&(ne=32854),F===32820&&(ne=32855)),(ne===33325||ne===33326||ne===33327||ne===33328||ne===34842||ne===34836)&&e.get("EXT_color_buffer_float"),ne}function w(T,_,F){return A(T,F)===!0||T.isFramebufferTexture&&T.minFilter!==ot&&T.minFilter!==yt?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function L(T){return T===ot||T===Kn||T===Wr?9728:9729}function H(T){const _=T.target;_.removeEventListener("dispose",H),N(_),_.isVideoTexture&&x.delete(_)}function W(T){const _=T.target;_.removeEventListener("dispose",W),V(_)}function N(T){const _=i.get(T);if(_.__webglInit===void 0)return;const F=T.source,J=d.get(F);if(J){const ee=J[_.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&R(T),Object.keys(J).length===0&&d.delete(F)}i.remove(T)}function R(T){const _=i.get(T);a.deleteTexture(_.__webglTexture);const F=T.source,J=d.get(F);delete J[_.__cacheKey],o.memory.textures--}function V(T){const _=T.texture,F=i.get(T),J=i.get(_);if(J.__webglTexture!==void 0&&(a.deleteTexture(J.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++)a.deleteFramebuffer(F.__webglFramebuffer[ee]),F.__webglDepthbuffer&&a.deleteRenderbuffer(F.__webglDepthbuffer[ee]);else{if(a.deleteFramebuffer(F.__webglFramebuffer),F.__webglDepthbuffer&&a.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&a.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let ee=0;ee<F.__webglColorRenderbuffer.length;ee++)F.__webglColorRenderbuffer[ee]&&a.deleteRenderbuffer(F.__webglColorRenderbuffer[ee]);F.__webglDepthRenderbuffer&&a.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let ee=0,ne=_.length;ee<ne;ee++){const xe=i.get(_[ee]);xe.__webglTexture&&(a.deleteTexture(xe.__webglTexture),o.memory.textures--),i.remove(_[ee])}i.remove(_),i.remove(T)}let Y=0;function $(){Y=0}function X(){const T=Y;return T>=c&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+c),Y+=1,T}function Q(T){const _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.encoding),_.join()}function Z(T,_){const F=i.get(T);if(T.isVideoTexture&&zt(T),T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){const J=T.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(F,T,_);return}}t.bindTexture(3553,F.__webglTexture,33984+_)}function pe(T,_){const F=i.get(T);if(T.version>0&&F.__version!==T.version){ue(F,T,_);return}t.bindTexture(35866,F.__webglTexture,33984+_)}function O(T,_){const F=i.get(T);if(T.version>0&&F.__version!==T.version){ue(F,T,_);return}t.bindTexture(32879,F.__webglTexture,33984+_)}function q(T,_){const F=i.get(T);if(T.version>0&&F.__version!==T.version){he(F,T,_);return}t.bindTexture(34067,F.__webglTexture,33984+_)}const ie={[Dn]:10497,[Lt]:33071,[Pn]:33648},oe={[ot]:9728,[Kn]:9984,[Wr]:9986,[yt]:9729,[Co]:9985,[ir]:9987};function U(T,_,F){if(F?(a.texParameteri(T,10242,ie[_.wrapS]),a.texParameteri(T,10243,ie[_.wrapT]),(T===32879||T===35866)&&a.texParameteri(T,32882,ie[_.wrapR]),a.texParameteri(T,10240,oe[_.magFilter]),a.texParameteri(T,10241,oe[_.minFilter])):(a.texParameteri(T,10242,33071),a.texParameteri(T,10243,33071),(T===32879||T===35866)&&a.texParameteri(T,32882,33071),(_.wrapS!==Lt||_.wrapT!==Lt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(T,10240,L(_.magFilter)),a.texParameteri(T,10241,L(_.minFilter)),_.minFilter!==ot&&_.minFilter!==yt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const J=e.get("EXT_texture_filter_anisotropic");if(_.magFilter===ot||_.minFilter!==Wr&&_.minFilter!==ir||_.type===ci&&e.has("OES_texture_float_linear")===!1||s===!1&&_.type===rr&&e.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||i.get(_).__currentAnisotropy)&&(a.texParameterf(T,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy)}}function ye(T,_){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",H));const J=_.source;let ee=d.get(J);ee===void 0&&(ee={},d.set(J,ee));const ne=Q(_);if(ne!==T.__cacheKey){ee[ne]===void 0&&(ee[ne]={texture:a.createTexture(),usedTimes:0},o.memory.textures++,F=!0),ee[ne].usedTimes++;const xe=ee[T.__cacheKey];xe!==void 0&&(ee[T.__cacheKey].usedTimes--,xe.usedTimes===0&&R(_)),T.__cacheKey=ne,T.__webglTexture=ee[ne].texture}return F}function ue(T,_,F){let J=3553;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(J=35866),_.isData3DTexture&&(J=32879);const ee=ye(T,_),ne=_.source;t.bindTexture(J,T.__webglTexture,33984+F);const xe=i.get(ne);if(ne.version!==xe.__version||ee===!0){t.activeTexture(33984+F),a.pixelStorei(37440,_.flipY),a.pixelStorei(37441,_.premultiplyAlpha),a.pixelStorei(3317,_.unpackAlignment),a.pixelStorei(37443,0);const ae=E(_)&&v(_.image)===!1;let j=M(_.image,ae,!1,u);j=wt(_,j);const me=v(j)||s,_e=n.convert(_.format,_.encoding);let ce=n.convert(_.type),fe=g(_.internalFormat,_e,ce,_.encoding,_.isVideoTexture);U(J,_,me);let de;const Ce=_.mipmaps,Oe=s&&_.isVideoTexture!==!0,qe=xe.__version===void 0||ee===!0,C=w(_,j,me);if(_.isDepthTexture)fe=6402,s?_.type===ci?fe=36012:_.type===li?fe=33190:_.type===Ui?fe=35056:fe=33189:_.type===ci&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===ui&&fe===6402&&_.type!==Ms&&_.type!==li&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=li,ce=n.convert(_.type)),_.format===Bi&&fe===6402&&(fe=34041,_.type!==Ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=Ui,ce=n.convert(_.type))),qe&&(Oe?t.texStorage2D(3553,1,fe,j.width,j.height):t.texImage2D(3553,0,fe,j.width,j.height,0,_e,ce,null));else if(_.isDataTexture)if(Ce.length>0&&me){Oe&&qe&&t.texStorage2D(3553,C,fe,Ce[0].width,Ce[0].height);for(let G=0,K=Ce.length;G<K;G++)de=Ce[G],Oe?t.texSubImage2D(3553,G,0,0,de.width,de.height,_e,ce,de.data):t.texImage2D(3553,G,fe,de.width,de.height,0,_e,ce,de.data);_.generateMipmaps=!1}else Oe?(qe&&t.texStorage2D(3553,C,fe,j.width,j.height),t.texSubImage2D(3553,0,0,0,j.width,j.height,_e,ce,j.data)):t.texImage2D(3553,0,fe,j.width,j.height,0,_e,ce,j.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Oe&&qe&&t.texStorage3D(35866,C,fe,Ce[0].width,Ce[0].height,j.depth);for(let G=0,K=Ce.length;G<K;G++)de=Ce[G],_.format!==Ct?_e!==null?Oe?t.compressedTexSubImage3D(35866,G,0,0,0,de.width,de.height,j.depth,_e,de.data,0,0):t.compressedTexImage3D(35866,G,fe,de.width,de.height,j.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?t.texSubImage3D(35866,G,0,0,0,de.width,de.height,j.depth,_e,ce,de.data):t.texImage3D(35866,G,fe,de.width,de.height,j.depth,0,_e,ce,de.data)}else{Oe&&qe&&t.texStorage2D(3553,C,fe,Ce[0].width,Ce[0].height);for(let G=0,K=Ce.length;G<K;G++)de=Ce[G],_.format!==Ct?_e!==null?Oe?t.compressedTexSubImage2D(3553,G,0,0,de.width,de.height,_e,de.data):t.compressedTexImage2D(3553,G,fe,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?t.texSubImage2D(3553,G,0,0,de.width,de.height,_e,ce,de.data):t.texImage2D(3553,G,fe,de.width,de.height,0,_e,ce,de.data)}else if(_.isDataArrayTexture)Oe?(qe&&t.texStorage3D(35866,C,fe,j.width,j.height,j.depth),t.texSubImage3D(35866,0,0,0,0,j.width,j.height,j.depth,_e,ce,j.data)):t.texImage3D(35866,0,fe,j.width,j.height,j.depth,0,_e,ce,j.data);else if(_.isData3DTexture)Oe?(qe&&t.texStorage3D(32879,C,fe,j.width,j.height,j.depth),t.texSubImage3D(32879,0,0,0,0,j.width,j.height,j.depth,_e,ce,j.data)):t.texImage3D(32879,0,fe,j.width,j.height,j.depth,0,_e,ce,j.data);else if(_.isFramebufferTexture){if(qe)if(Oe)t.texStorage2D(3553,C,fe,j.width,j.height);else{let G=j.width,K=j.height;for(let re=0;re<C;re++)t.texImage2D(3553,re,fe,G,K,0,_e,ce,null),G>>=1,K>>=1}}else if(Ce.length>0&&me){Oe&&qe&&t.texStorage2D(3553,C,fe,Ce[0].width,Ce[0].height);for(let G=0,K=Ce.length;G<K;G++)de=Ce[G],Oe?t.texSubImage2D(3553,G,0,0,_e,ce,de):t.texImage2D(3553,G,fe,_e,ce,de);_.generateMipmaps=!1}else Oe?(qe&&t.texStorage2D(3553,C,fe,j.width,j.height),t.texSubImage2D(3553,0,0,0,_e,ce,j)):t.texImage2D(3553,0,fe,_e,ce,j);A(_,me)&&D(J),xe.__version=ne.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function he(T,_,F){if(_.image.length!==6)return;const J=ye(T,_),ee=_.source;t.bindTexture(34067,T.__webglTexture,33984+F);const ne=i.get(ee);if(ee.version!==ne.__version||J===!0){t.activeTexture(33984+F),a.pixelStorei(37440,_.flipY),a.pixelStorei(37441,_.premultiplyAlpha),a.pixelStorei(3317,_.unpackAlignment),a.pixelStorei(37443,0);const xe=_.isCompressedTexture||_.image[0].isCompressedTexture,ae=_.image[0]&&_.image[0].isDataTexture,j=[];for(let G=0;G<6;G++)!xe&&!ae?j[G]=M(_.image[G],!1,!0,l):j[G]=ae?_.image[G].image:_.image[G],j[G]=wt(_,j[G]);const me=j[0],_e=v(me)||s,ce=n.convert(_.format,_.encoding),fe=n.convert(_.type),de=g(_.internalFormat,ce,fe,_.encoding),Ce=s&&_.isVideoTexture!==!0,Oe=ne.__version===void 0||J===!0;let qe=w(_,me,_e);U(34067,_,_e);let C;if(xe){Ce&&Oe&&t.texStorage2D(34067,qe,de,me.width,me.height);for(let G=0;G<6;G++){C=j[G].mipmaps;for(let K=0;K<C.length;K++){const re=C[K];_.format!==Ct?ce!==null?Ce?t.compressedTexSubImage2D(34069+G,K,0,0,re.width,re.height,ce,re.data):t.compressedTexImage2D(34069+G,K,de,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ce?t.texSubImage2D(34069+G,K,0,0,re.width,re.height,ce,fe,re.data):t.texImage2D(34069+G,K,de,re.width,re.height,0,ce,fe,re.data)}}}else{C=_.mipmaps,Ce&&Oe&&(C.length>0&&qe++,t.texStorage2D(34067,qe,de,j[0].width,j[0].height));for(let G=0;G<6;G++)if(ae){Ce?t.texSubImage2D(34069+G,0,0,0,j[G].width,j[G].height,ce,fe,j[G].data):t.texImage2D(34069+G,0,de,j[G].width,j[G].height,0,ce,fe,j[G].data);for(let K=0;K<C.length;K++){const re=C[K].image[G].image;Ce?t.texSubImage2D(34069+G,K+1,0,0,re.width,re.height,ce,fe,re.data):t.texImage2D(34069+G,K+1,de,re.width,re.height,0,ce,fe,re.data)}}else{Ce?t.texSubImage2D(34069+G,0,0,0,ce,fe,j[G]):t.texImage2D(34069+G,0,de,ce,fe,j[G]);for(let K=0;K<C.length;K++){const re=C[K];Ce?t.texSubImage2D(34069+G,K+1,0,0,ce,fe,re.image[G]):t.texImage2D(34069+G,K+1,de,ce,fe,re.image[G])}}}A(_,_e)&&D(34067),ne.__version=ee.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function se(T,_,F,J,ee){const ne=n.convert(F.format,F.encoding),xe=n.convert(F.type),ae=g(F.internalFormat,ne,xe,F.encoding);i.get(_).__hasExternalTextures||(ee===32879||ee===35866?t.texImage3D(ee,0,ae,_.width,_.height,_.depth,0,ne,xe,null):t.texImage2D(ee,0,ae,_.width,_.height,0,ne,xe,null)),t.bindFramebuffer(36160,T),Ie(_)?h.framebufferTexture2DMultisampleEXT(36160,J,ee,i.get(F).__webglTexture,0,He(_)):(ee===3553||ee>=34069&&ee<=34074)&&a.framebufferTexture2D(36160,J,ee,i.get(F).__webglTexture,0),t.bindFramebuffer(36160,null)}function Fe(T,_,F){if(a.bindRenderbuffer(36161,T),_.depthBuffer&&!_.stencilBuffer){let J=33189;if(F||Ie(_)){const ee=_.depthTexture;ee&&ee.isDepthTexture&&(ee.type===ci?J=36012:ee.type===li&&(J=33190));const ne=He(_);Ie(_)?h.renderbufferStorageMultisampleEXT(36161,ne,J,_.width,_.height):a.renderbufferStorageMultisample(36161,ne,J,_.width,_.height)}else a.renderbufferStorage(36161,J,_.width,_.height);a.framebufferRenderbuffer(36160,36096,36161,T)}else if(_.depthBuffer&&_.stencilBuffer){const J=He(_);F&&Ie(_)===!1?a.renderbufferStorageMultisample(36161,J,35056,_.width,_.height):Ie(_)?h.renderbufferStorageMultisampleEXT(36161,J,35056,_.width,_.height):a.renderbufferStorage(36161,34041,_.width,_.height),a.framebufferRenderbuffer(36160,33306,36161,T)}else{const J=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let ee=0;ee<J.length;ee++){const ne=J[ee],xe=n.convert(ne.format,ne.encoding),ae=n.convert(ne.type),j=g(ne.internalFormat,xe,ae,ne.encoding),me=He(_);F&&Ie(_)===!1?a.renderbufferStorageMultisample(36161,me,j,_.width,_.height):Ie(_)?h.renderbufferStorageMultisampleEXT(36161,me,j,_.width,_.height):a.renderbufferStorage(36161,j,_.width,_.height)}}a.bindRenderbuffer(36161,null)}function Se(T,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Z(_.depthTexture,0);const F=i.get(_.depthTexture).__webglTexture,J=He(_);if(_.depthTexture.format===ui)Ie(_)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,F,0,J):a.framebufferTexture2D(36160,36096,3553,F,0);else if(_.depthTexture.format===Bi)Ie(_)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,F,0,J):a.framebufferTexture2D(36160,33306,3553,F,0);else throw new Error("Unknown depthTexture format")}function ve(T){const _=i.get(T),F=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!_.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Se(_.__webglFramebuffer,T)}else if(F){_.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(36160,_.__webglFramebuffer[J]),_.__webglDepthbuffer[J]=a.createRenderbuffer(),Fe(_.__webglDepthbuffer[J],T,!1)}else t.bindFramebuffer(36160,_.__webglFramebuffer),_.__webglDepthbuffer=a.createRenderbuffer(),Fe(_.__webglDepthbuffer,T,!1);t.bindFramebuffer(36160,null)}function rt(T,_,F){const J=i.get(T);_!==void 0&&se(J.__webglFramebuffer,T,T.texture,36064,3553),F!==void 0&&ve(T)}function _t(T){const _=T.texture,F=i.get(T),J=i.get(_);T.addEventListener("dispose",W),T.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=a.createTexture()),J.__version=_.version,o.memory.textures++);const ee=T.isWebGLCubeRenderTarget===!0,ne=T.isWebGLMultipleRenderTargets===!0,xe=v(T)||s;if(ee){F.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)F.__webglFramebuffer[ae]=a.createFramebuffer()}else{if(F.__webglFramebuffer=a.createFramebuffer(),ne)if(r.drawBuffers){const ae=T.texture;for(let j=0,me=ae.length;j<me;j++){const _e=i.get(ae[j]);_e.__webglTexture===void 0&&(_e.__webglTexture=a.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&T.samples>0&&Ie(T)===!1){const ae=ne?_:[_];F.__webglMultisampledFramebuffer=a.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,F.__webglMultisampledFramebuffer);for(let j=0;j<ae.length;j++){const me=ae[j];F.__webglColorRenderbuffer[j]=a.createRenderbuffer(),a.bindRenderbuffer(36161,F.__webglColorRenderbuffer[j]);const _e=n.convert(me.format,me.encoding),ce=n.convert(me.type),fe=g(me.internalFormat,_e,ce,me.encoding,T.isXRRenderTarget===!0),de=He(T);a.renderbufferStorageMultisample(36161,de,fe,T.width,T.height),a.framebufferRenderbuffer(36160,36064+j,36161,F.__webglColorRenderbuffer[j])}a.bindRenderbuffer(36161,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=a.createRenderbuffer(),Fe(F.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(36160,null)}}if(ee){t.bindTexture(34067,J.__webglTexture),U(34067,_,xe);for(let ae=0;ae<6;ae++)se(F.__webglFramebuffer[ae],T,_,36064,34069+ae);A(_,xe)&&D(34067),t.unbindTexture()}else if(ne){const ae=T.texture;for(let j=0,me=ae.length;j<me;j++){const _e=ae[j],ce=i.get(_e);t.bindTexture(3553,ce.__webglTexture),U(3553,_e,xe),se(F.__webglFramebuffer,T,_e,36064+j,3553),A(_e,xe)&&D(3553)}t.unbindTexture()}else{let ae=3553;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(s?ae=T.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ae,J.__webglTexture),U(ae,_,xe),se(F.__webglFramebuffer,T,_,36064,ae),A(_,xe)&&D(ae),t.unbindTexture()}T.depthBuffer&&ve(T)}function $e(T){const _=v(T)||s,F=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let J=0,ee=F.length;J<ee;J++){const ne=F[J];if(A(ne,_)){const xe=T.isWebGLCubeRenderTarget?34067:3553,ae=i.get(ne).__webglTexture;t.bindTexture(xe,ae),D(xe),t.unbindTexture()}}}function vt(T){if(s&&T.samples>0&&Ie(T)===!1){const _=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],F=T.width,J=T.height;let ee=16384;const ne=[],xe=T.stencilBuffer?33306:36096,ae=i.get(T),j=T.isWebGLMultipleRenderTargets===!0;if(j)for(let me=0;me<_.length;me++)t.bindFramebuffer(36160,ae.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+me,36161,null),t.bindFramebuffer(36160,ae.__webglFramebuffer),a.framebufferTexture2D(36009,36064+me,3553,null,0);t.bindFramebuffer(36008,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,ae.__webglFramebuffer);for(let me=0;me<_.length;me++){ne.push(36064+me),T.depthBuffer&&ne.push(xe);const _e=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(_e===!1&&(T.depthBuffer&&(ee|=256),T.stencilBuffer&&(ee|=1024)),j&&a.framebufferRenderbuffer(36008,36064,36161,ae.__webglColorRenderbuffer[me]),_e===!0&&(a.invalidateFramebuffer(36008,[xe]),a.invalidateFramebuffer(36009,[xe])),j){const ce=i.get(_[me]).__webglTexture;a.framebufferTexture2D(36009,36064,3553,ce,0)}a.blitFramebuffer(0,0,F,J,0,0,F,J,ee,9728),m&&a.invalidateFramebuffer(36008,ne)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),j)for(let me=0;me<_.length;me++){t.bindFramebuffer(36160,ae.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+me,36161,ae.__webglColorRenderbuffer[me]);const _e=i.get(_[me]).__webglTexture;t.bindFramebuffer(36160,ae.__webglFramebuffer),a.framebufferTexture2D(36009,36064+me,3553,_e,0)}t.bindFramebuffer(36009,ae.__webglMultisampledFramebuffer)}}function He(T){return Math.min(f,T.samples)}function Ie(T){const _=i.get(T);return s&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function zt(T){const _=o.render.frame;x.get(T)!==_&&(x.set(T,_),T.update())}function wt(T,_){const F=T.encoding,J=T.format,ee=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===Rn||F!==fi&&(F===ze?s===!1?e.has("EXT_sRGB")===!0&&J===Ct?(T.format=Rn,T.minFilter=yt,T.generateMipmaps=!1):_=ws.sRGBToLinear(_):(J!==Ct||ee!==pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",F)),_}this.allocateTextureUnit=X,this.resetTextureUnits=$,this.setTexture2D=Z,this.setTexture2DArray=pe,this.setTexture3D=O,this.setTextureCube=q,this.rebindTextures=rt,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=se,this.useMultisampledRTT=Ie}function Bd(a,e,t){const i=t.isWebGL2;function r(n,o=null){let s;if(n===pi)return 5121;if(n===Io)return 32819;if(n===No)return 32820;if(n===Do)return 5120;if(n===Po)return 5122;if(n===Ms)return 5123;if(n===Ro)return 5124;if(n===li)return 5125;if(n===ci)return 5126;if(n===rr)return i?5131:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(n===zo)return 6406;if(n===Ct)return 6408;if(n===Oo)return 6409;if(n===Uo)return 6410;if(n===ui)return 6402;if(n===Bi)return 34041;if(n===Rn)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(n===Fo)return 6403;if(n===Go)return 36244;if(n===Bo)return 33319;if(n===ko)return 33320;if(n===Vo)return 36249;if(n===jr||n===Xr||n===qr||n===Yr)if(o===ze)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===jr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===qr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Yr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===jr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===qr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Yr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Jn||n===Qn||n===$n||n===ea)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Jn)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Qn)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$n)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ea)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ho)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===ta||n===ia)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ta)return o===ze?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ia)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ra||n===na||n===aa||n===sa||n===oa||n===la||n===ca||n===ua||n===ha||n===da||n===pa||n===fa||n===ma||n===ga)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ra)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===na)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===aa)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sa)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===oa)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===la)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ca)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ua)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ha)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===da)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===pa)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fa)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ma)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ga)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Zr)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Zr)return o===ze?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(n===Wo||n===_a||n===va||n===xa)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Zr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===_a)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===va)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ui?i?34042:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):a[n]!==void 0?a[n]:null}return{convert:r}}class kd extends St{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Cr extends Qe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vd={type:"move"};class bn{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,n=null,o=null;const s=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const p of e.hand.values()){const d=t.getJointPose(p,i),y=this._getHandJoint(l,p);d!==null&&(y.matrix.fromArray(d.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.jointRadius=d.radius),y.visible=d!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,x=.005;l.inputState.pinching&&h>m+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=m-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(n=t.getPose(e.gripSpace,i),n!==null&&(c.matrix.fromArray(n.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),n.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(n.linearVelocity)):c.hasLinearVelocity=!1,n.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(n.angularVelocity)):c.hasAngularVelocity=!1));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&n!==null&&(r=n),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Vd)))}return s!==null&&(s.visible=r!==null),c!==null&&(c.visible=n!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Cr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Hd extends gt{constructor(e,t,i,r,n,o,s,c,l,u){if(u=u!==void 0?u:ui,u!==ui&&u!==Bi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ui&&(i=li),i===void 0&&u===Bi&&(i=Ui),super(null,r,n,o,s,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:ot,this.minFilter=c!==void 0?c:ot,this.flipY=!1,this.generateMipmaps=!1}}class Wd extends _i{constructor(e,t){super();const i=this;let r=null,n=1,o=null,s="local-floor",c=1,l=null,u=null,f=null,h=null,m=null,x=null;const p=t.getContextAttributes();let d=null,y=null;const S=[],M=[],v=new Set,E=new Map,A=new St;A.layers.enable(1),A.viewport=new Je;const D=new St;D.layers.enable(2),D.viewport=new Je;const g=[A,D],w=new kd;w.layers.enable(1),w.layers.enable(2);let L=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let q=S[O];return q===void 0&&(q=new bn,S[O]=q),q.getTargetRaySpace()},this.getControllerGrip=function(O){let q=S[O];return q===void 0&&(q=new bn,S[O]=q),q.getGripSpace()},this.getHand=function(O){let q=S[O];return q===void 0&&(q=new bn,S[O]=q),q.getHandSpace()};function W(O){const q=M.indexOf(O.inputSource);if(q===-1)return;const ie=S[q];ie!==void 0&&ie.dispatchEvent({type:O.type,data:O.inputSource})}function N(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",R);for(let O=0;O<S.length;O++){const q=M[O];q!==null&&(M[O]=null,S[O].disconnect(q))}L=null,H=null,e.setRenderTarget(d),m=null,h=null,f=null,r=null,y=null,pe.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){n=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){s=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(O){l=O},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(O){if(r=O,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",N),r.addEventListener("inputsourceschange",R),p.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const q={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:p.alpha,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:n};m=new XRWebGLLayer(r,t,q),r.updateRenderState({baseLayer:m}),y=new mi(m.framebufferWidth,m.framebufferHeight,{format:Ct,type:pi,encoding:e.outputEncoding,stencilBuffer:p.stencil})}else{let q=null,ie=null,oe=null;p.depth&&(oe=p.stencil?35056:33190,q=p.stencil?Bi:ui,ie=p.stencil?Ui:li);const U={colorFormat:32856,depthFormat:oe,scaleFactor:n};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(U),r.updateRenderState({layers:[h]}),y=new mi(h.textureWidth,h.textureHeight,{format:Ct,type:pi,depthTexture:new Hd(h.textureWidth,h.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:p.stencil,encoding:e.outputEncoding,samples:p.antialias?4:0});const ye=e.properties.get(y);ye.__ignoreDepthValues=h.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(s),pe.setContext(r),pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function R(O){for(let q=0;q<O.removed.length;q++){const ie=O.removed[q],oe=M.indexOf(ie);oe>=0&&(M[oe]=null,S[oe].disconnect(ie))}for(let q=0;q<O.added.length;q++){const ie=O.added[q];let oe=M.indexOf(ie);if(oe===-1){for(let ye=0;ye<S.length;ye++)if(ye>=M.length){M.push(ie),oe=ye;break}else if(M[ye]===null){M[ye]=ie,oe=ye;break}if(oe===-1)break}const U=S[oe];U&&U.connect(ie)}}const V=new P,Y=new P;function $(O,q,ie){V.setFromMatrixPosition(q.matrixWorld),Y.setFromMatrixPosition(ie.matrixWorld);const oe=V.distanceTo(Y),U=q.projectionMatrix.elements,ye=ie.projectionMatrix.elements,ue=U[14]/(U[10]-1),he=U[14]/(U[10]+1),se=(U[9]+1)/U[5],Fe=(U[9]-1)/U[5],Se=(U[8]-1)/U[0],ve=(ye[8]+1)/ye[0],rt=ue*Se,_t=ue*ve,$e=oe/(-Se+ve),vt=$e*-Se;q.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(vt),O.translateZ($e),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const He=ue+$e,Ie=he+$e,zt=rt-vt,wt=_t+(oe-vt),T=se*he/Ie*He,_=Fe*he/Ie*He;O.projectionMatrix.makePerspective(zt,wt,T,_,He,Ie)}function X(O,q){q===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(q.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(r===null)return;w.near=D.near=A.near=O.near,w.far=D.far=A.far=O.far,(L!==w.near||H!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),L=w.near,H=w.far);const q=O.parent,ie=w.cameras;X(w,q);for(let U=0;U<ie.length;U++)X(ie[U],q);w.matrixWorld.decompose(w.position,w.quaternion,w.scale),O.matrix.copy(w.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale);const oe=O.children;for(let U=0,ye=oe.length;U<ye;U++)oe[U].updateMatrixWorld(!0);ie.length===2?$(w,A,D):w.projectionMatrix.copy(A.projectionMatrix)},this.getCamera=function(){return w},this.getFoveation=function(){if(!(h===null&&m===null))return c},this.setFoveation=function(O){c=O,h!==null&&(h.fixedFoveation=O),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=O)},this.getPlanes=function(){return v};let Q=null;function Z(O,q){if(u=q.getViewerPose(l||o),x=q,u!==null){const ie=u.views;m!==null&&(e.setRenderTargetFramebuffer(y,m.framebuffer),e.setRenderTarget(y));let oe=!1;ie.length!==w.cameras.length&&(w.cameras.length=0,oe=!0);for(let U=0;U<ie.length;U++){const ye=ie[U];let ue=null;if(m!==null)ue=m.getViewport(ye);else{const se=f.getViewSubImage(h,ye);ue=se.viewport,U===0&&(e.setRenderTargetTextures(y,se.colorTexture,h.ignoreDepthValues?void 0:se.depthStencilTexture),e.setRenderTarget(y))}let he=g[U];he===void 0&&(he=new St,he.layers.enable(U),he.viewport=new Je,g[U]=he),he.matrix.fromArray(ye.transform.matrix),he.projectionMatrix.fromArray(ye.projectionMatrix),he.viewport.set(ue.x,ue.y,ue.width,ue.height),U===0&&w.matrix.copy(he.matrix),oe===!0&&w.cameras.push(he)}}for(let ie=0;ie<S.length;ie++){const oe=M[ie],U=S[ie];oe!==null&&U!==void 0&&U.update(oe,q,l||o)}if(Q&&Q(O,q),q.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:q.detectedPlanes});let ie=null;for(const oe of v)q.detectedPlanes.has(oe)||(ie===null&&(ie=[]),ie.push(oe));if(ie!==null)for(const oe of ie)v.delete(oe),E.delete(oe),i.dispatchEvent({type:"planeremoved",data:oe});for(const oe of q.detectedPlanes)if(!v.has(oe))v.add(oe),E.set(oe,q.lastChangedTime),i.dispatchEvent({type:"planeadded",data:oe});else{const U=E.get(oe);oe.lastChangedTime>U&&(E.set(oe,oe.lastChangedTime),i.dispatchEvent({type:"planechanged",data:oe}))}}x=null}const pe=new zs;pe.setAnimationLoop(Z),this.setAnimationLoop=function(O){Q=O},this.dispose=function(){}}}function jd(a,e){function t(p,d){d.color.getRGB(p.fogColor.value,Rs(a)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function i(p,d,y,S,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),u(p,d)):d.isMeshPhongMaterial?(r(p,d),l(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&h(p,d,M)):d.isMeshMatcapMaterial?(r(p,d),m(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),x(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(n(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?s(p,d,y,S):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.bumpMap&&(p.bumpMap.value=d.bumpMap,p.bumpScale.value=d.bumpScale,d.side===mt&&(p.bumpScale.value*=-1)),d.displacementMap&&(p.displacementMap.value=d.displacementMap,p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap),d.normalMap&&(p.normalMap.value=d.normalMap,p.normalScale.value.copy(d.normalScale),d.side===mt&&p.normalScale.value.negate()),d.specularMap&&(p.specularMap.value=d.specularMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const y=e.get(d).envMap;if(y&&(p.envMap.value=y,p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const v=a.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*v}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity);let S;d.map?S=d.map:d.specularMap?S=d.specularMap:d.displacementMap?S=d.displacementMap:d.normalMap?S=d.normalMap:d.bumpMap?S=d.bumpMap:d.roughnessMap?S=d.roughnessMap:d.metalnessMap?S=d.metalnessMap:d.alphaMap?S=d.alphaMap:d.emissiveMap?S=d.emissiveMap:d.clearcoatMap?S=d.clearcoatMap:d.clearcoatNormalMap?S=d.clearcoatNormalMap:d.clearcoatRoughnessMap?S=d.clearcoatRoughnessMap:d.iridescenceMap?S=d.iridescenceMap:d.iridescenceThicknessMap?S=d.iridescenceThicknessMap:d.specularIntensityMap?S=d.specularIntensityMap:d.specularColorMap?S=d.specularColorMap:d.transmissionMap?S=d.transmissionMap:d.thicknessMap?S=d.thicknessMap:d.sheenColorMap?S=d.sheenColorMap:d.sheenRoughnessMap&&(S=d.sheenRoughnessMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),p.uvTransform.value.copy(S.matrix));let M;d.aoMap?M=d.aoMap:d.lightMap&&(M=d.lightMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),p.uv2Transform.value.copy(M.matrix))}function n(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function s(p,d,y,S){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*y,p.scale.value=S*.5,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let M;d.map?M=d.map:d.alphaMap&&(M=d.alphaMap),M!==void 0&&(M.matrixAutoUpdate===!0&&M.updateMatrix(),p.uvTransform.value.copy(M.matrix))}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let y;d.map?y=d.map:d.alphaMap&&(y=d.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix))}function l(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.roughness.value=d.roughness,p.metalness.value=d.metalness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function h(p,d,y){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),p.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===mt&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap)}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function x(p,d){p.referencePosition.value.copy(d.referencePosition),p.nearDistance.value=d.nearDistance,p.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function Xd(a,e,t,i){let r={},n={},o=[];const s=t.isWebGL2?a.getParameter(35375):0;function c(S,M){const v=M.program;i.uniformBlockBinding(S,v)}function l(S,M){let v=r[S.id];v===void 0&&(x(S),v=u(S),r[S.id]=v,S.addEventListener("dispose",d));const E=M.program;i.updateUBOMapping(S,E);const A=e.render.frame;n[S.id]!==A&&(h(S),n[S.id]=A)}function u(S){const M=f();S.__bindingPointIndex=M;const v=a.createBuffer(),E=S.__size,A=S.usage;return a.bindBuffer(35345,v),a.bufferData(35345,E,A),a.bindBuffer(35345,null),a.bindBufferBase(35345,M,v),v}function f(){for(let S=0;S<s;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const M=r[S.id],v=S.uniforms,E=S.__cache;a.bindBuffer(35345,M);for(let A=0,D=v.length;A<D;A++){const g=v[A];if(m(g,A,E)===!0){const w=g.__offset,L=Array.isArray(g.value)?g.value:[g.value];let H=0;for(let W=0;W<L.length;W++){const N=L[W],R=p(N);typeof N=="number"?(g.__data[0]=N,a.bufferSubData(35345,w+H,g.__data)):N.isMatrix3?(g.__data[0]=N.elements[0],g.__data[1]=N.elements[1],g.__data[2]=N.elements[2],g.__data[3]=N.elements[0],g.__data[4]=N.elements[3],g.__data[5]=N.elements[4],g.__data[6]=N.elements[5],g.__data[7]=N.elements[0],g.__data[8]=N.elements[6],g.__data[9]=N.elements[7],g.__data[10]=N.elements[8],g.__data[11]=N.elements[0]):(N.toArray(g.__data,H),H+=R.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(35345,w,g.__data)}}a.bindBuffer(35345,null)}function m(S,M,v){const E=S.value;if(v[M]===void 0){if(typeof E=="number")v[M]=E;else{const A=Array.isArray(E)?E:[E],D=[];for(let g=0;g<A.length;g++)D.push(A[g].clone());v[M]=D}return!0}else if(typeof E=="number"){if(v[M]!==E)return v[M]=E,!0}else{const A=Array.isArray(v[M])?v[M]:[v[M]],D=Array.isArray(E)?E:[E];for(let g=0;g<A.length;g++){const w=A[g];if(w.equals(D[g])===!1)return w.copy(D[g]),!0}}return!1}function x(S){const M=S.uniforms;let v=0;const E=16;let A=0;for(let D=0,g=M.length;D<g;D++){const w=M[D],L={boundary:0,storage:0},H=Array.isArray(w.value)?w.value:[w.value];for(let W=0,N=H.length;W<N;W++){const R=H[W],V=p(R);L.boundary+=V.boundary,L.storage+=V.storage}if(w.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=v,D>0){A=v%E;const W=E-A;A!==0&&W-L.boundary<0&&(v+=E-A,w.__offset=v)}v+=L.storage}return A=v%E,A>0&&(v+=E-A),S.__size=v,S.__cache={},this}function p(S){const M={boundary:0,storage:0};return typeof S=="number"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),M}function d(S){const M=S.target;M.removeEventListener("dispose",d);const v=o.indexOf(M.__bindingPointIndex);o.splice(v,1),a.deleteBuffer(r[M.id]),delete r[M.id],delete n[M.id]}function y(){for(const S in r)a.deleteBuffer(r[S]);o=[],r={},n={}}return{bind:c,update:l,dispose:y}}function qd(){const a=zr("canvas");return a.style.display="block",a}function ks(a={}){this.isWebGLRenderer=!0;const e=a.canvas!==void 0?a.canvas:qd(),t=a.context!==void 0?a.context:null,i=a.depth!==void 0?a.depth:!0,r=a.stencil!==void 0?a.stencil:!0,n=a.antialias!==void 0?a.antialias:!1,o=a.premultipliedAlpha!==void 0?a.premultipliedAlpha:!0,s=a.preserveDrawingBuffer!==void 0?a.preserveDrawingBuffer:!1,c=a.powerPreference!==void 0?a.powerPreference:"default",l=a.failIfMajorPerformanceCaveat!==void 0?a.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=a.alpha!==void 0?a.alpha:!1;let f=null,h=null;const m=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=fi,this.physicallyCorrectLights=!1,this.toneMapping=Wt,this.toneMappingExposure=1;const p=this;let d=!1,y=0,S=0,M=null,v=-1,E=null;const A=new Je,D=new Je;let g=null,w=e.width,L=e.height,H=1,W=null,N=null;const R=new Je(0,0,w,L),V=new Je(0,0,w,L);let Y=!1;const $=new On;let X=!1,Q=!1,Z=null;const pe=new Ge,O=new Le,q=new P,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function oe(){return M===null?H:1}let U=t;function ye(b,z){for(let B=0;B<b.length;B++){const I=b[B],k=e.getContext(I,z);if(k!==null)return k}return null}try{const b={alpha:!0,depth:i,stencil:r,antialias:n,premultipliedAlpha:o,preserveDrawingBuffer:s,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r149"),e.addEventListener("webglcontextlost",fe,!1),e.addEventListener("webglcontextrestored",de,!1),e.addEventListener("webglcontextcreationerror",Ce,!1),U===null){const z=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&z.shift(),U=ye(z,b),U===null)throw ye(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ue,he,se,Fe,Se,ve,rt,_t,$e,vt,He,Ie,zt,wt,T,_,F,J,ee,ne,xe,ae,j,me;function _e(){ue=new nh(U),he=new Qu(U,ue,a),ue.init(he),ae=new Bd(U,ue,he),se=new Fd(U,ue,he),Fe=new oh,Se=new wd,ve=new Gd(U,ue,se,Se,he,ae,Fe),rt=new eh(p),_t=new rh(p),$e=new gl(U,he),j=new Ku(U,ue,$e,he),vt=new ah(U,$e,Fe,j),He=new hh(U,vt,$e,Fe),ee=new uh(U,he,ve),_=new $u(Se),Ie=new bd(p,rt,_t,ue,he,j,_),zt=new jd(p,Se),wt=new Ed,T=new Rd(ue,he),J=new Zu(p,rt,_t,se,He,u,o),F=new Ud(p,He,he),me=new Xd(U,Fe,he,se),ne=new Ju(U,ue,Fe,he),xe=new sh(U,ue,Fe,he),Fe.programs=Ie.programs,p.capabilities=he,p.extensions=ue,p.properties=Se,p.renderLists=wt,p.shadowMap=F,p.state=se,p.info=Fe}_e();const ce=new Wd(p,U);this.xr=ce,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const b=ue.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ue.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(b){b!==void 0&&(H=b,this.setSize(w,L,!1))},this.getSize=function(b){return b.set(w,L)},this.setSize=function(b,z,B){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=b,L=z,e.width=Math.floor(b*H),e.height=Math.floor(z*H),B!==!1&&(e.style.width=b+"px",e.style.height=z+"px"),this.setViewport(0,0,b,z)},this.getDrawingBufferSize=function(b){return b.set(w*H,L*H).floor()},this.setDrawingBufferSize=function(b,z,B){w=b,L=z,H=B,e.width=Math.floor(b*B),e.height=Math.floor(z*B),this.setViewport(0,0,b,z)},this.getCurrentViewport=function(b){return b.copy(A)},this.getViewport=function(b){return b.copy(R)},this.setViewport=function(b,z,B,I){b.isVector4?R.set(b.x,b.y,b.z,b.w):R.set(b,z,B,I),se.viewport(A.copy(R).multiplyScalar(H).floor())},this.getScissor=function(b){return b.copy(V)},this.setScissor=function(b,z,B,I){b.isVector4?V.set(b.x,b.y,b.z,b.w):V.set(b,z,B,I),se.scissor(D.copy(V).multiplyScalar(H).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(b){se.setScissorTest(Y=b)},this.setOpaqueSort=function(b){W=b},this.setTransparentSort=function(b){N=b},this.getClearColor=function(b){return b.copy(J.getClearColor())},this.setClearColor=function(){J.setClearColor.apply(J,arguments)},this.getClearAlpha=function(){return J.getClearAlpha()},this.setClearAlpha=function(){J.setClearAlpha.apply(J,arguments)},this.clear=function(b=!0,z=!0,B=!0){let I=0;b&&(I|=16384),z&&(I|=256),B&&(I|=1024),U.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",fe,!1),e.removeEventListener("webglcontextrestored",de,!1),e.removeEventListener("webglcontextcreationerror",Ce,!1),wt.dispose(),T.dispose(),Se.dispose(),rt.dispose(),_t.dispose(),He.dispose(),j.dispose(),me.dispose(),Ie.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",re),ce.removeEventListener("sessionend",ge),Z&&(Z.dispose(),Z=null),Pe.stop()};function fe(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const b=Fe.autoReset,z=F.enabled,B=F.autoUpdate,I=F.needsUpdate,k=F.type;_e(),Fe.autoReset=b,F.enabled=z,F.autoUpdate=B,F.needsUpdate=I,F.type=k}function Ce(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Oe(b){const z=b.target;z.removeEventListener("dispose",Oe),qe(z)}function qe(b){C(b),Se.remove(b)}function C(b){const z=Se.get(b).programs;z!==void 0&&(z.forEach(function(B){Ie.releaseProgram(B)}),b.isShaderMaterial&&Ie.releaseShaderCache(b))}this.renderBufferDirect=function(b,z,B,I,k,le){z===null&&(z=ie);const Me=k.isMesh&&k.matrixWorld.determinant()<0,we=Zs(b,z,B,I,k);se.setMaterial(I,Me);let Te=B.index,Ne=1;I.wireframe===!0&&(Te=vt.getWireframeAttribute(B),Ne=2);const De=B.drawRange,Ee=B.attributes.position;let tt=De.start*Ne,ct=(De.start+De.count)*Ne;le!==null&&(tt=Math.max(tt,le.start*Ne),ct=Math.min(ct,(le.start+le.count)*Ne)),Te!==null?(tt=Math.max(tt,0),ct=Math.min(ct,Te.count)):Ee!=null&&(tt=Math.max(tt,0),ct=Math.min(ct,Ee.count));const Ut=ct-tt;if(Ut<0||Ut===1/0)return;j.setup(k,I,we,B,Te);let $t,ke=ne;if(Te!==null&&($t=$e.get(Te),ke=xe,ke.setIndex($t)),k.isMesh)I.wireframe===!0?(se.setLineWidth(I.wireframeLinewidth*oe()),ke.setMode(1)):ke.setMode(4);else if(k.isLine){let Ae=I.linewidth;Ae===void 0&&(Ae=1),se.setLineWidth(Ae*oe()),k.isLineSegments?ke.setMode(1):k.isLineLoop?ke.setMode(2):ke.setMode(3)}else k.isPoints?ke.setMode(0):k.isSprite&&ke.setMode(4);if(k.isInstancedMesh)ke.renderInstances(tt,Ut,k.count);else if(B.isInstancedBufferGeometry){const Ae=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Gr=Math.min(B.instanceCount,Ae);ke.renderInstances(tt,Ut,Gr)}else ke.render(tt,Ut)},this.compile=function(b,z){function B(I,k,le){I.transparent===!0&&I.side===Zt&&I.forceSinglePass===!1?(I.side=mt,I.needsUpdate=!0,xt(I,k,le),I.side=Jt,I.needsUpdate=!0,xt(I,k,le),I.side=Zt):xt(I,k,le)}h=T.get(b),h.init(),x.push(h),b.traverseVisible(function(I){I.isLight&&I.layers.test(z.layers)&&(h.pushLight(I),I.castShadow&&h.pushShadow(I))}),h.setupLights(p.physicallyCorrectLights),b.traverse(function(I){const k=I.material;if(k)if(Array.isArray(k))for(let le=0;le<k.length;le++){const Me=k[le];B(Me,b,I)}else B(k,b,I)}),x.pop(),h=null};let G=null;function K(b){G&&G(b)}function re(){Pe.stop()}function ge(){Pe.start()}const Pe=new zs;Pe.setAnimationLoop(K),typeof self<"u"&&Pe.setContext(self),this.setAnimationLoop=function(b){G=b,ce.setAnimationLoop(b),b===null?Pe.stop():Pe.start()},ce.addEventListener("sessionstart",re),ce.addEventListener("sessionend",ge),this.render=function(b,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(z),z=ce.getCamera()),b.isScene===!0&&b.onBeforeRender(p,b,z,M),h=T.get(b,x.length),h.init(),x.push(h),pe.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),$.setFromProjectionMatrix(pe),Q=this.localClippingEnabled,X=_.init(this.clippingPlanes,Q),f=wt.get(b,m.length),f.init(),m.push(f),Ye(b,z,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(W,N),X===!0&&_.beginShadows();const B=h.state.shadowsArray;if(F.render(B,b,z),X===!0&&_.endShadows(),this.info.autoReset===!0&&this.info.reset(),J.render(f,b),h.setupLights(p.physicallyCorrectLights),z.isArrayCamera){const I=z.cameras;for(let k=0,le=I.length;k<le;k++){const Me=I[k];et(f,b,Me,Me.viewport)}}else et(f,b,z);M!==null&&(ve.updateMultisampleRenderTarget(M),ve.updateRenderTargetMipmap(M)),b.isScene===!0&&b.onAfterRender(p,b,z),j.resetDefaultState(),v=-1,E=null,x.pop(),x.length>0?h=x[x.length-1]:h=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function Ye(b,z,B,I){if(b.visible===!1)return;if(b.layers.test(z.layers)){if(b.isGroup)B=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(z);else if(b.isLight)h.pushLight(b),b.castShadow&&h.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||$.intersectsSprite(b)){I&&q.setFromMatrixPosition(b.matrixWorld).applyMatrix4(pe);const le=He.update(b),Me=b.material;Me.visible&&f.push(b,le,Me,B,q.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(b.isSkinnedMesh&&b.skeleton.frame!==Fe.render.frame&&(b.skeleton.update(),b.skeleton.frame=Fe.render.frame),!b.frustumCulled||$.intersectsObject(b))){I&&q.setFromMatrixPosition(b.matrixWorld).applyMatrix4(pe);const le=He.update(b),Me=b.material;if(Array.isArray(Me)){const we=le.groups;for(let Te=0,Ne=we.length;Te<Ne;Te++){const De=we[Te],Ee=Me[De.materialIndex];Ee&&Ee.visible&&f.push(b,le,Ee,B,q.z,De)}}else Me.visible&&f.push(b,le,Me,B,q.z,null)}}const k=b.children;for(let le=0,Me=k.length;le<Me;le++)Ye(k[le],z,B,I)}function et(b,z,B,I){const k=b.opaque,le=b.transmissive,Me=b.transparent;h.setupLightsView(B),X===!0&&_.setGlobalState(p.clippingPlanes,B),le.length>0&&Qt(k,z,B),I&&se.viewport(A.copy(I)),k.length>0&&Ue(k,z,B),le.length>0&&Ue(le,z,B),Me.length>0&&Ue(Me,z,B),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function Qt(b,z,B){const I=he.isWebGL2;Z===null&&(Z=new mi(1,1,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")?rr:pi,minFilter:ir,samples:I&&n===!0?4:0})),p.getDrawingBufferSize(O),I?Z.setSize(O.x,O.y):Z.setSize(In(O.x),In(O.y));const k=p.getRenderTarget();p.setRenderTarget(Z),p.clear();const le=p.toneMapping;p.toneMapping=Wt,Ue(b,z,B),p.toneMapping=le,ve.updateMultisampleRenderTarget(Z),ve.updateRenderTargetMipmap(Z),p.setRenderTarget(k)}function Ue(b,z,B){const I=z.isScene===!0?z.overrideMaterial:null;for(let k=0,le=b.length;k<le;k++){const Me=b[k],we=Me.object,Te=Me.geometry,Ne=I===null?Me.material:I,De=Me.group;we.layers.test(B.layers)&&Ot(we,z,B,Te,Ne,De)}}function Ot(b,z,B,I,k,le){b.onBeforeRender(p,z,B,I,k,le),b.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),k.onBeforeRender(p,z,B,I,b,le),k.transparent===!0&&k.side===Zt&&k.forceSinglePass===!1?(k.side=mt,k.needsUpdate=!0,p.renderBufferDirect(B,z,I,k,b,le),k.side=Jt,k.needsUpdate=!0,p.renderBufferDirect(B,z,I,k,b,le),k.side=Zt):p.renderBufferDirect(B,z,I,k,b,le),b.onAfterRender(p,z,B,I,k,le)}function xt(b,z,B){z.isScene!==!0&&(z=ie);const I=Se.get(b),k=h.state.lights,le=h.state.shadowsArray,Me=k.state.version,we=Ie.getParameters(b,k.state,le,z,B),Te=Ie.getProgramCacheKey(we);let Ne=I.programs;I.environment=b.isMeshStandardMaterial?z.environment:null,I.fog=z.fog,I.envMap=(b.isMeshStandardMaterial?_t:rt).get(b.envMap||I.environment),Ne===void 0&&(b.addEventListener("dispose",Oe),Ne=new Map,I.programs=Ne);let De=Ne.get(Te);if(De!==void 0){if(I.currentProgram===De&&I.lightsStateVersion===Me)return kn(b,we),De}else we.uniforms=Ie.getUniforms(b),b.onBuild(B,we,p),b.onBeforeCompile(we,p),De=Ie.acquireProgram(we,Te),Ne.set(Te,De),I.uniforms=we.uniforms;const Ee=I.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ee.clippingPlanes=_.uniform),kn(b,we),I.needsLights=Js(b),I.lightsStateVersion=Me,I.needsLights&&(Ee.ambientLightColor.value=k.state.ambient,Ee.lightProbe.value=k.state.probe,Ee.directionalLights.value=k.state.directional,Ee.directionalLightShadows.value=k.state.directionalShadow,Ee.spotLights.value=k.state.spot,Ee.spotLightShadows.value=k.state.spotShadow,Ee.rectAreaLights.value=k.state.rectArea,Ee.ltc_1.value=k.state.rectAreaLTC1,Ee.ltc_2.value=k.state.rectAreaLTC2,Ee.pointLights.value=k.state.point,Ee.pointLightShadows.value=k.state.pointShadow,Ee.hemisphereLights.value=k.state.hemi,Ee.directionalShadowMap.value=k.state.directionalShadowMap,Ee.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ee.spotShadowMap.value=k.state.spotShadowMap,Ee.spotLightMatrix.value=k.state.spotLightMatrix,Ee.spotLightMap.value=k.state.spotLightMap,Ee.pointShadowMap.value=k.state.pointShadowMap,Ee.pointShadowMatrix.value=k.state.pointShadowMatrix);const tt=De.getUniforms(),ct=Ir.seqWithValue(tt.seq,Ee);return I.currentProgram=De,I.uniformsList=ct,De}function kn(b,z){const B=Se.get(b);B.outputEncoding=z.outputEncoding,B.instancing=z.instancing,B.skinning=z.skinning,B.morphTargets=z.morphTargets,B.morphNormals=z.morphNormals,B.morphColors=z.morphColors,B.morphTargetsCount=z.morphTargetsCount,B.numClippingPlanes=z.numClippingPlanes,B.numIntersection=z.numClipIntersection,B.vertexAlphas=z.vertexAlphas,B.vertexTangents=z.vertexTangents,B.toneMapping=z.toneMapping}function Zs(b,z,B,I,k){z.isScene!==!0&&(z=ie),ve.resetTextureUnits();const le=z.fog,Me=I.isMeshStandardMaterial?z.environment:null,we=M===null?p.outputEncoding:M.isXRRenderTarget===!0?M.texture.encoding:fi,Te=(I.isMeshStandardMaterial?_t:rt).get(I.envMap||Me),Ne=I.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,De=!!I.normalMap&&!!B.attributes.tangent,Ee=!!B.morphAttributes.position,tt=!!B.morphAttributes.normal,ct=!!B.morphAttributes.color,Ut=I.toneMapped?p.toneMapping:Wt,$t=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ke=$t!==void 0?$t.length:0,Ae=Se.get(I),Gr=h.state.lights;if(X===!0&&(Q===!0||b!==E)){const ut=b===E&&I.id===v;_.setState(I,b,ut)}let Br=!1;I.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==Gr.state.version||Ae.outputEncoding!==we||k.isInstancedMesh&&Ae.instancing===!1||!k.isInstancedMesh&&Ae.instancing===!0||k.isSkinnedMesh&&Ae.skinning===!1||!k.isSkinnedMesh&&Ae.skinning===!0||Ae.envMap!==Te||I.fog===!0&&Ae.fog!==le||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==_.numPlanes||Ae.numIntersection!==_.numIntersection)||Ae.vertexAlphas!==Ne||Ae.vertexTangents!==De||Ae.morphTargets!==Ee||Ae.morphNormals!==tt||Ae.morphColors!==ct||Ae.toneMapping!==Ut||he.isWebGL2===!0&&Ae.morphTargetsCount!==ke)&&(Br=!0):(Br=!0,Ae.__version=I.version);let ei=Ae.currentProgram;Br===!0&&(ei=xt(I,z,k));let Vn=!1,ji=!1,kr=!1;const nt=ei.getUniforms(),ti=Ae.uniforms;if(se.useProgram(ei.program)&&(Vn=!0,ji=!0,kr=!0),I.id!==v&&(v=I.id,ji=!0),Vn||E!==b){if(nt.setValue(U,"projectionMatrix",b.projectionMatrix),he.logarithmicDepthBuffer&&nt.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),E!==b&&(E=b,ji=!0,kr=!0),I.isShaderMaterial||I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshStandardMaterial||I.envMap){const ut=nt.map.cameraPosition;ut!==void 0&&ut.setValue(U,q.setFromMatrixPosition(b.matrixWorld))}(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&nt.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial||I.isShadowMaterial||k.isSkinnedMesh)&&nt.setValue(U,"viewMatrix",b.matrixWorldInverse)}if(k.isSkinnedMesh){nt.setOptional(U,k,"bindMatrix"),nt.setOptional(U,k,"bindMatrixInverse");const ut=k.skeleton;ut&&(he.floatVertexTextures?(ut.boneTexture===null&&ut.computeBoneTexture(),nt.setValue(U,"boneTexture",ut.boneTexture,ve),nt.setValue(U,"boneTextureSize",ut.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Vr=B.morphAttributes;if((Vr.position!==void 0||Vr.normal!==void 0||Vr.color!==void 0&&he.isWebGL2===!0)&&ee.update(k,B,I,ei),(ji||Ae.receiveShadow!==k.receiveShadow)&&(Ae.receiveShadow=k.receiveShadow,nt.setValue(U,"receiveShadow",k.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(ti.envMap.value=Te,ti.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),ji&&(nt.setValue(U,"toneMappingExposure",p.toneMappingExposure),Ae.needsLights&&Ks(ti,kr),le&&I.fog===!0&&zt.refreshFogUniforms(ti,le),zt.refreshMaterialUniforms(ti,I,H,L,Z),Ir.upload(U,Ae.uniformsList,ti,ve)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(Ir.upload(U,Ae.uniformsList,ti,ve),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&nt.setValue(U,"center",k.center),nt.setValue(U,"modelViewMatrix",k.modelViewMatrix),nt.setValue(U,"normalMatrix",k.normalMatrix),nt.setValue(U,"modelMatrix",k.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const ut=I.uniformsGroups;for(let Hr=0,Qs=ut.length;Hr<Qs;Hr++)if(he.isWebGL2){const Hn=ut[Hr];me.update(Hn,ei),me.bind(Hn,ei)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ei}function Ks(b,z){b.ambientLightColor.needsUpdate=z,b.lightProbe.needsUpdate=z,b.directionalLights.needsUpdate=z,b.directionalLightShadows.needsUpdate=z,b.pointLights.needsUpdate=z,b.pointLightShadows.needsUpdate=z,b.spotLights.needsUpdate=z,b.spotLightShadows.needsUpdate=z,b.rectAreaLights.needsUpdate=z,b.hemisphereLights.needsUpdate=z}function Js(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(b,z,B){Se.get(b.texture).__webglTexture=z,Se.get(b.depthTexture).__webglTexture=B;const I=Se.get(b);I.__hasExternalTextures=!0,I.__hasExternalTextures&&(I.__autoAllocateDepthBuffer=B===void 0,I.__autoAllocateDepthBuffer||ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,z){const B=Se.get(b);B.__webglFramebuffer=z,B.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(b,z=0,B=0){M=b,y=z,S=B;let I=!0,k=null,le=!1,Me=!1;if(b){const we=Se.get(b);we.__useDefaultFramebuffer!==void 0?(se.bindFramebuffer(36160,null),I=!1):we.__webglFramebuffer===void 0?ve.setupRenderTarget(b):we.__hasExternalTextures&&ve.rebindTextures(b,Se.get(b.texture).__webglTexture,Se.get(b.depthTexture).__webglTexture);const Te=b.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(Me=!0);const Ne=Se.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(k=Ne[z],le=!0):he.isWebGL2&&b.samples>0&&ve.useMultisampledRTT(b)===!1?k=Se.get(b).__webglMultisampledFramebuffer:k=Ne,A.copy(b.viewport),D.copy(b.scissor),g=b.scissorTest}else A.copy(R).multiplyScalar(H).floor(),D.copy(V).multiplyScalar(H).floor(),g=Y;if(se.bindFramebuffer(36160,k)&&he.drawBuffers&&I&&se.drawBuffers(b,k),se.viewport(A),se.scissor(D),se.setScissorTest(g),le){const we=Se.get(b.texture);U.framebufferTexture2D(36160,36064,34069+z,we.__webglTexture,B)}else if(Me){const we=Se.get(b.texture),Te=z||0;U.framebufferTextureLayer(36160,36064,we.__webglTexture,B||0,Te)}v=-1},this.readRenderTargetPixels=function(b,z,B,I,k,le,Me){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Se.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Me!==void 0&&(we=we[Me]),we){se.bindFramebuffer(36160,we);try{const Te=b.texture,Ne=Te.format,De=Te.type;if(Ne!==Ct&&ae.convert(Ne)!==U.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ee=De===rr&&(ue.has("EXT_color_buffer_half_float")||he.isWebGL2&&ue.has("EXT_color_buffer_float"));if(De!==pi&&ae.convert(De)!==U.getParameter(35738)&&!(De===ci&&(he.isWebGL2||ue.has("OES_texture_float")||ue.has("WEBGL_color_buffer_float")))&&!Ee){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=b.width-I&&B>=0&&B<=b.height-k&&U.readPixels(z,B,I,k,ae.convert(Ne),ae.convert(De),le)}finally{const Te=M!==null?Se.get(M).__webglFramebuffer:null;se.bindFramebuffer(36160,Te)}}},this.copyFramebufferToTexture=function(b,z,B=0){const I=Math.pow(2,-B),k=Math.floor(z.image.width*I),le=Math.floor(z.image.height*I);ve.setTexture2D(z,0),U.copyTexSubImage2D(3553,B,0,0,b.x,b.y,k,le),se.unbindTexture()},this.copyTextureToTexture=function(b,z,B,I=0){const k=z.image.width,le=z.image.height,Me=ae.convert(B.format),we=ae.convert(B.type);ve.setTexture2D(B,0),U.pixelStorei(37440,B.flipY),U.pixelStorei(37441,B.premultiplyAlpha),U.pixelStorei(3317,B.unpackAlignment),z.isDataTexture?U.texSubImage2D(3553,I,b.x,b.y,k,le,Me,we,z.image.data):z.isCompressedTexture?U.compressedTexSubImage2D(3553,I,b.x,b.y,z.mipmaps[0].width,z.mipmaps[0].height,Me,z.mipmaps[0].data):U.texSubImage2D(3553,I,b.x,b.y,Me,we,z.image),I===0&&B.generateMipmaps&&U.generateMipmap(3553),se.unbindTexture()},this.copyTextureToTexture3D=function(b,z,B,I,k=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const le=b.max.x-b.min.x+1,Me=b.max.y-b.min.y+1,we=b.max.z-b.min.z+1,Te=ae.convert(I.format),Ne=ae.convert(I.type);let De;if(I.isData3DTexture)ve.setTexture3D(I,0),De=32879;else if(I.isDataArrayTexture)ve.setTexture2DArray(I,0),De=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(37440,I.flipY),U.pixelStorei(37441,I.premultiplyAlpha),U.pixelStorei(3317,I.unpackAlignment);const Ee=U.getParameter(3314),tt=U.getParameter(32878),ct=U.getParameter(3316),Ut=U.getParameter(3315),$t=U.getParameter(32877),ke=B.isCompressedTexture?B.mipmaps[0]:B.image;U.pixelStorei(3314,ke.width),U.pixelStorei(32878,ke.height),U.pixelStorei(3316,b.min.x),U.pixelStorei(3315,b.min.y),U.pixelStorei(32877,b.min.z),B.isDataTexture||B.isData3DTexture?U.texSubImage3D(De,k,z.x,z.y,z.z,le,Me,we,Te,Ne,ke.data):B.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(De,k,z.x,z.y,z.z,le,Me,we,Te,ke.data)):U.texSubImage3D(De,k,z.x,z.y,z.z,le,Me,we,Te,Ne,ke),U.pixelStorei(3314,Ee),U.pixelStorei(32878,tt),U.pixelStorei(3316,ct),U.pixelStorei(3315,Ut),U.pixelStorei(32877,$t),k===0&&I.generateMipmaps&&U.generateMipmap(De),se.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?ve.setTextureCube(b,0):b.isData3DTexture?ve.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?ve.setTexture2DArray(b,0):ve.setTexture2D(b,0),se.unbindTexture()},this.resetState=function(){y=0,S=0,M=null,se.reset(),j.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Yd extends ks{}Yd.prototype.isWebGL1Renderer=!0;class Zd extends Qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class zn extends Dt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const is=new Ge,rs=new Ge,Dr=[],Kd=new Ge,$i=new Nt;class Jd extends Nt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new zn(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.frustumCulled=!1;for(let r=0;r<i;r++)this.setMatrixAt(r,Kd)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,r=this.count;if($i.geometry=this.geometry,$i.material=this.material,$i.material!==void 0)for(let n=0;n<r;n++){this.getMatrixAt(n,is),rs.multiplyMatrices(i,is),$i.matrixWorld=rs,$i.raycast(e,Dr);for(let o=0,s=Dr.length;o<s;o++){const c=Dr[o];c.instanceId=n,c.object=this,t.push(c)}Dr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new zn(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Qd extends Hi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ns=new P,as=new P,ss=new Ge,wn=new As,Pr=new Ur;class $d extends Qe{constructor(e=new bt,t=new Qd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,n=t.count;r<n;r++)ns.fromBufferAttribute(t,r-1),as.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=ns.distanceTo(as);e.setAttribute("lineDistance",new Be(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,n=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Pr.copy(i.boundingSphere),Pr.applyMatrix4(r),Pr.radius+=n,e.ray.intersectsSphere(Pr)===!1)return;ss.copy(r).invert(),wn.copy(e.ray).applyMatrix4(ss);const s=n/((this.scale.x+this.scale.y+this.scale.z)/3),c=s*s,l=new P,u=new P,f=new P,h=new P,m=this.isLineSegments?2:1,x=i.index,p=i.attributes.position;if(x!==null){const d=Math.max(0,o.start),y=Math.min(x.count,o.start+o.count);for(let S=d,M=y-1;S<M;S+=m){const v=x.getX(S),E=x.getX(S+1);if(l.fromBufferAttribute(p,v),u.fromBufferAttribute(p,E),wn.distanceSqToSegment(l,u,h,f)>c)continue;h.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(h);A<e.near||A>e.far||t.push({distance:A,point:f.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,o.start),y=Math.min(p.count,o.start+o.count);for(let S=d,M=y-1;S<M;S+=m){if(l.fromBufferAttribute(p,S),u.fromBufferAttribute(p,S+1),wn.distanceSqToSegment(l,u,h,f)>c)continue;h.applyMatrix4(this.matrixWorld);const v=e.ray.origin.distanceTo(h);v<e.near||v>e.far||t.push({distance:v,point:f.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,n=i.length;r<n;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const os=new P,ls=new P;class wp extends $d{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,n=t.count;r<n;r+=2)os.fromBufferAttribute(t,r),ls.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+os.distanceTo(ls);e.setAttribute("lineDistance",new Be(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Vs extends bt{constructor(e=1,t=1,i=1,r=32,n=1,o=!1,s=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:n,openEnded:o,thetaStart:s,thetaLength:c};const l=this;r=Math.floor(r),n=Math.floor(n);const u=[],f=[],h=[],m=[];let x=0;const p=[],d=i/2;let y=0;S(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new Be(f,3)),this.setAttribute("normal",new Be(h,3)),this.setAttribute("uv",new Be(m,2));function S(){const v=new P,E=new P;let A=0;const D=(t-e)/i;for(let g=0;g<=n;g++){const w=[],L=g/n,H=L*(t-e)+e;for(let W=0;W<=r;W++){const N=W/r,R=N*c+s,V=Math.sin(R),Y=Math.cos(R);E.x=H*V,E.y=-L*i+d,E.z=H*Y,f.push(E.x,E.y,E.z),v.set(V,D,Y).normalize(),h.push(v.x,v.y,v.z),m.push(N,1-L),w.push(x++)}p.push(w)}for(let g=0;g<r;g++)for(let w=0;w<n;w++){const L=p[w][g],H=p[w+1][g],W=p[w+1][g+1],N=p[w][g+1];u.push(L,H,N),u.push(H,W,N),A+=6}l.addGroup(y,A,0),y+=A}function M(v){const E=x,A=new Le,D=new P;let g=0;const w=v===!0?e:t,L=v===!0?1:-1;for(let W=1;W<=r;W++)f.push(0,d*L,0),h.push(0,L,0),m.push(.5,.5),x++;const H=x;for(let W=0;W<=r;W++){const N=W/r*c+s,R=Math.cos(N),V=Math.sin(N);D.x=w*V,D.y=d*L,D.z=w*R,f.push(D.x,D.y,D.z),h.push(0,L,0),A.x=R*.5+.5,A.y=V*.5*L+.5,m.push(A.x,A.y),x++}for(let W=0;W<r;W++){const N=E+W,R=H+W;v===!0?u.push(R,R+1,N):u.push(R+1,R,N),g+=3}l.addGroup(y,g,v===!0?1:2),y+=g}}static fromJSON(e){return new Vs(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Gn extends bt{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const n=[],o=[];s(r),l(i),u(),this.setAttribute("position",new Be(n,3)),this.setAttribute("normal",new Be(n.slice(),3)),this.setAttribute("uv",new Be(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function s(S){const M=new P,v=new P,E=new P;for(let A=0;A<t.length;A+=3)m(t[A+0],M),m(t[A+1],v),m(t[A+2],E),c(M,v,E,S)}function c(S,M,v,E){const A=E+1,D=[];for(let g=0;g<=A;g++){D[g]=[];const w=S.clone().lerp(v,g/A),L=M.clone().lerp(v,g/A),H=A-g;for(let W=0;W<=H;W++)W===0&&g===A?D[g][W]=w:D[g][W]=w.clone().lerp(L,W/H)}for(let g=0;g<A;g++)for(let w=0;w<2*(A-g)-1;w++){const L=Math.floor(w/2);w%2===0?(h(D[g][L+1]),h(D[g+1][L]),h(D[g][L])):(h(D[g][L+1]),h(D[g+1][L+1]),h(D[g+1][L]))}}function l(S){const M=new P;for(let v=0;v<n.length;v+=3)M.x=n[v+0],M.y=n[v+1],M.z=n[v+2],M.normalize().multiplyScalar(S),n[v+0]=M.x,n[v+1]=M.y,n[v+2]=M.z}function u(){const S=new P;for(let M=0;M<n.length;M+=3){S.x=n[M+0],S.y=n[M+1],S.z=n[M+2];const v=d(S)/2/Math.PI+.5,E=y(S)/Math.PI+.5;o.push(v,1-E)}x(),f()}function f(){for(let S=0;S<o.length;S+=6){const M=o[S+0],v=o[S+2],E=o[S+4],A=Math.max(M,v,E),D=Math.min(M,v,E);A>.9&&D<.1&&(M<.2&&(o[S+0]+=1),v<.2&&(o[S+2]+=1),E<.2&&(o[S+4]+=1))}}function h(S){n.push(S.x,S.y,S.z)}function m(S,M){const v=S*3;M.x=e[v+0],M.y=e[v+1],M.z=e[v+2]}function x(){const S=new P,M=new P,v=new P,E=new P,A=new Le,D=new Le,g=new Le;for(let w=0,L=0;w<n.length;w+=9,L+=6){S.set(n[w+0],n[w+1],n[w+2]),M.set(n[w+3],n[w+4],n[w+5]),v.set(n[w+6],n[w+7],n[w+8]),A.set(o[L+0],o[L+1]),D.set(o[L+2],o[L+3]),g.set(o[L+4],o[L+5]),E.copy(S).add(M).add(v).divideScalar(3);const H=d(E);p(A,L+0,S,H),p(D,L+2,M,H),p(g,L+4,v,H)}}function p(S,M,v,E){E<0&&S.x===1&&(o[M]=S.x-1),v.x===0&&v.z===0&&(o[M]=E/2/Math.PI+.5)}function d(S){return Math.atan2(S.z,-S.x)}function y(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}static fromJSON(e){return new Gn(e.vertices,e.indices,e.radius,e.details)}}class Hs extends Gn{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Hs(e.radius,e.detail)}}class Bn extends bt{constructor(e=1,t=32,i=16,r=0,n=Math.PI*2,o=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:n,thetaStart:o,thetaLength:s},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+s,Math.PI);let l=0;const u=[],f=new P,h=new P,m=[],x=[],p=[],d=[];for(let y=0;y<=i;y++){const S=[],M=y/i;let v=0;y==0&&o==0?v=.5/t:y==i&&c==Math.PI&&(v=-.5/t);for(let E=0;E<=t;E++){const A=E/t;f.x=-e*Math.cos(r+A*n)*Math.sin(o+M*s),f.y=e*Math.cos(o+M*s),f.z=e*Math.sin(r+A*n)*Math.sin(o+M*s),x.push(f.x,f.y,f.z),h.copy(f).normalize(),p.push(h.x,h.y,h.z),d.push(A+v,1-M),S.push(l++)}u.push(S)}for(let y=0;y<i;y++)for(let S=0;S<t;S++){const M=u[y][S+1],v=u[y][S],E=u[y+1][S],A=u[y+1][S+1];(y!==0||o>0)&&m.push(M,v,A),(y!==i-1||c<Math.PI)&&m.push(v,E,A)}this.setIndex(m),this.setAttribute("position",new Be(x,3)),this.setAttribute("normal",new Be(p,3)),this.setAttribute("uv",new Be(d,2))}static fromJSON(e){return new Bn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ws extends bt{constructor(e=1,t=.4,i=12,r=48,n=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:n},i=Math.floor(i),r=Math.floor(r);const o=[],s=[],c=[],l=[],u=new P,f=new P,h=new P;for(let m=0;m<=i;m++)for(let x=0;x<=r;x++){const p=x/r*n,d=m/i*Math.PI*2;f.x=(e+t*Math.cos(d))*Math.cos(p),f.y=(e+t*Math.cos(d))*Math.sin(p),f.z=t*Math.sin(d),s.push(f.x,f.y,f.z),u.x=e*Math.cos(p),u.y=e*Math.sin(p),h.subVectors(f,u).normalize(),c.push(h.x,h.y,h.z),l.push(x/r),l.push(m/i)}for(let m=1;m<=i;m++)for(let x=1;x<=r;x++){const p=(r+1)*m+x-1,d=(r+1)*(m-1)+x-1,y=(r+1)*(m-1)+x,S=(r+1)*m+x;o.push(p,d,S),o.push(d,y,S)}this.setIndex(o),this.setAttribute("position",new Be(s,3)),this.setAttribute("normal",new Be(c,3)),this.setAttribute("uv",new Be(l,2))}static fromJSON(e){return new Ws(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ep extends Hi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ys,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class js extends Qe{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Tn=new Ge,cs=new P,us=new P;class tp{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new On,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;cs.setFromMatrixPosition(e.matrixWorld),t.position.copy(cs),us.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(us),t.updateMatrixWorld(),Tn.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tn),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Tn)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ip extends tp{constructor(){super(new Os(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class rp extends js{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.target=new Qe,this.shadow=new ip}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class np extends js{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ap{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=hs(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=hs();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function hs(){return(typeof performance>"u"?Date:performance).now()}class Tp{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(lt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"149"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="149");const Ri=new or(0,0,0,"YXZ"),Ii=new P,sp={type:"change"},op={type:"lock"},lp={type:"unlock"},ds=Math.PI/2;class cp extends _i{constructor(e,t){super(),this.domElement=t,this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1;const i=this;function r(s){if(i.isLocked===!1)return;const c=s.movementX||s.mozMovementX||s.webkitMovementX||0,l=s.movementY||s.mozMovementY||s.webkitMovementY||0;Ri.setFromQuaternion(e.quaternion),Ri.y-=c*.002*i.pointerSpeed,Ri.x-=l*.002*i.pointerSpeed,Ri.x=Math.max(ds-i.maxPolarAngle,Math.min(ds-i.minPolarAngle,Ri.x)),e.quaternion.setFromEuler(Ri),i.dispatchEvent(sp)}function n(){i.domElement.ownerDocument.pointerLockElement===i.domElement?(i.dispatchEvent(op),i.isLocked=!0):(i.dispatchEvent(lp),i.isLocked=!1)}function o(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}this.connect=function(){i.domElement.ownerDocument.addEventListener("mousemove",r),i.domElement.ownerDocument.addEventListener("pointerlockchange",n),i.domElement.ownerDocument.addEventListener("pointerlockerror",o)},this.disconnect=function(){i.domElement.ownerDocument.removeEventListener("mousemove",r),i.domElement.ownerDocument.removeEventListener("pointerlockchange",n),i.domElement.ownerDocument.removeEventListener("pointerlockerror",o)},this.dispose=function(){this.disconnect()},this.getObject=function(){return e},this.getDirection=(function(){const s=new P(0,0,-1);return function(c){return c.copy(s).applyQuaternion(e.quaternion)}})(),this.moveForward=function(s){Ii.setFromMatrixColumn(e.matrix,0),Ii.crossVectors(e.up,Ii),e.position.addScaledVector(Ii,s)},this.moveRight=function(s){Ii.setFromMatrixColumn(e.matrix,0),e.position.addScaledVector(Ii,s)},this.lock=function(){this.domElement.requestPointerLock()},this.unlock=function(){i.domElement.ownerDocument.exitPointerLock()},this.connect()}}const Xs=document.getElementById("container"),Vi=new Zd;Vi.background=new Re(0);const di=new St(75,window.innerWidth/window.innerHeight,.1,5e3);di.position.set(0,200,500);const cr=new ks({antialias:!0});cr.setSize(window.innerWidth,window.innerHeight);Xs.appendChild(cr.domElement);const up=new np(16777215,.7);Vi.add(up);const qs=new rp(16777215,.8);qs.position.set(100,200,100);Vi.add(qs);const hp=new cp(di,cr.domElement);Xs.addEventListener("click",()=>hp.lock());let Ke={forward:0,backward:0,left:0,right:0,up:0,down:0},En=new P;const dp=50,pp=.85;document.addEventListener("keydown",a=>{a.code==="KeyW"&&(Ke.forward=1),a.code==="KeyS"&&(Ke.backward=1),a.code==="KeyA"&&(Ke.left=1),a.code==="KeyD"&&(Ke.right=1),a.code==="KeyR"&&(Ke.up=1),a.code==="KeyF"&&(Ke.down=1)});document.addEventListener("keyup",a=>{a.code==="KeyW"&&(Ke.forward=0),a.code==="KeyS"&&(Ke.backward=0),a.code==="KeyA"&&(Ke.left=0),a.code==="KeyD"&&(Ke.right=0),a.code==="KeyR"&&(Ke.up=0),a.code==="KeyF"&&(Ke.down=0)});const ps=15,fp=5;let Pt;function fs(a,e){if(e<0||e>a)return 0;if(e===0||e===a)return 1;e>a/2&&(e=a-e);let t=1;for(let i=1;i<=e;i++)t=t*(a-i+1)/i;return Math.round(t)}function mp(a,e,t){return fs(a,e)*fs(a-e,t)}function gp(a){if(a<2)return!1;for(let e=2;e*e<=a;e++)if(a%e===0)return!1;return!0}const _p=[16711680,65280,255,16776960,16711935,65535,16746496],vp=16777215;function xp(a){const e=new Re(0);let t=!1;return[2,3,5,7,11,13,17].forEach((i,r)=>{if(a%i===0){t=!0;const n=new Re(_p[r]),o=Math.min(Math.floor(Math.log(a)/Math.log(i)),4)/4;e.lerp(n,o)}}),!t&&gp(a)&&e.set(vp),e}function Mp(){Pt&&Vi.remove(Pt);const a=[],e=[],t=12,i=ps*t/2;for(let s=0;s<=ps;s++)for(let c=0;c<=s;c++)for(let l=0;l<=s-c;l++){const u=s-c-l,f=new P((c-l)*.866*t,(u-(c+l)/2)*t-i,s*t*.5);a.push(f);const h=mp(s,c,l);e.push(xp(h))}const r=new Bn(fp,12,12),n=new ep({vertexColors:!1});Pt=new Jd(r,n,a.length),Pt.instanceColor=new zn(new Float32Array(a.length*3),3);const o=new Qe;a.forEach((s,c)=>{o.position.copy(s),o.updateMatrix(),Pt.setMatrixAt(c,o.matrix);const l=e[c];Pt.setColorAt(c,l)}),Pt.instanceMatrix.needsUpdate=!0,Pt.instanceColor&&(Pt.instanceColor.needsUpdate=!0),Vi.add(Pt)}Mp();const yp=new ap;function Ys(){requestAnimationFrame(Ys);const a=yp.getDelta(),e=new P(Ke.right-Ke.left,Ke.up-Ke.down,Ke.backward-Ke.forward);e.lengthSq()>0&&(e.normalize(),e.applyQuaternion(di.quaternion),En.add(e.multiplyScalar(dp*a))),di.position.add(En.clone().multiplyScalar(a*5)),En.multiplyScalar(pp),cr.render(Vi,di)}Ys();window.addEventListener("resize",()=>{di.aspect=window.innerWidth/window.innerHeight,di.updateProjectionMatrix(),cr.setSize(window.innerWidth,window.innerHeight)});export{wp as E,Ws as H,Qd as J,Le as L,Nt as N,Dt as P,Cr as R,Tp as T,ks as V,Hs as W,Zd as Z,P as a,St as b,Sp as c,bp as d,ep as e,lr as h,Vs as k,ar as l,rp as r,np as s,_i as v,bt as w};
//# sourceMappingURL=pascals-pyramid9.js.map
