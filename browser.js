// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(a):n(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):a.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(r){return"string"==typeof r}var f=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,v=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,b,"$1e"),n=p.call(n,w,"e"),n=p.call(n,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,y,"e+0$1"),n=p.call(n,g,"e-0$1"),r.alternate&&(n=p.call(n,d,"$1."),n=p.call(n,h,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):s.call(n)}function A(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function _(r,e,t){var n=e-r.length;return n<0?r:r=t?r+A(n):A(n)+r}var E=String.fromCharCode,U=isNaN,I=Array.isArray;function S(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function x(r){var e,t,n,a,o,f,s,l,p;if(!I(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",s=1,l=0;l<r.length;l++)if(u(n=r[l]))f+=n;else{if(e=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,U(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,U(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!U(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=U(o)?String(n.arg):E(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),f+=n.arg||"",s+=1}return f}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function j(r){var e,t,n,i;for(t=[],i=0,n=k.exec(r);n;)(e=r.slice(i,k.lastIndex-n[0].length)).length&&t.push(e),t.push(F(n)),i=k.lastIndex,n=k.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function N(r){return"string"==typeof r}function T(r){var e,t,n;if(!N(r))throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=j(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return x.apply(null,t)}var O=Object.prototype,V=O.toString,$=O.__defineGetter__,G=O.__defineSetter__,H=O.__lookupGetter__,W=O.__lookupSetter__,C=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===V.call(t))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(H.call(r,e)||W.call(r,e)?(n=r.__proto__,r.__proto__=O,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&$&&$.call(r,e,t.get),o&&G&&G.call(r,e,t.set),r};function L(r,e,t){C(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var P=Math.floor;function R(r){return P(r)===r}function Z(r){return r!=r}var M,X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),Y=Object.prototype.toString,z=Object.prototype.hasOwnProperty,q="function"==typeof Symbol?Symbol:void 0,B="function"==typeof q?q.toStringTag:"",D=X&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,i,a;if(null==r)return Y.call(r);t=r[B],a=B,e=null!=(i=r)&&z.call(i,a);try{r[B]=void 0}catch(e){return Y.call(r)}return n=Y.call(r),e?r[B]=t:delete r[B],n}:function(r){return Y.call(r)},J="function"==typeof Uint32Array,K="function"==typeof Uint32Array?Uint32Array:null,Q="function"==typeof Uint32Array?Uint32Array:void 0;M=function(){var r,e,t;if("function"!=typeof K)return!1;try{e=new K(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(J&&t instanceof Uint32Array||"[object Uint32Array]"===D(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Q:function(){throw new Error("not implemented")};var rr,er=M,tr="function"==typeof Float64Array,nr="function"==typeof Float64Array?Float64Array:null,ir="function"==typeof Float64Array?Float64Array:void 0;rr=function(){var r,e,t;if("function"!=typeof nr)return!1;try{e=new nr([1,3.14,-3.14,NaN]),t=e,r=(tr&&t instanceof Float64Array||"[object Float64Array]"===D(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?ir:function(){throw new Error("not implemented")};var ar,or=rr,cr="function"==typeof Uint8Array,ur="function"==typeof Uint8Array?Uint8Array:null,fr="function"==typeof Uint8Array?Uint8Array:void 0;ar=function(){var r,e,t;if("function"!=typeof ur)return!1;try{e=new ur(e=[1,3.14,-3.14,256,257]),t=e,r=(cr&&t instanceof Uint8Array||"[object Uint8Array]"===D(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?fr:function(){throw new Error("not implemented")};var sr,lr=ar,pr="function"==typeof Uint16Array,yr="function"==typeof Uint16Array?Uint16Array:null,gr="function"==typeof Uint16Array?Uint16Array:void 0;sr=function(){var r,e,t;if("function"!=typeof yr)return!1;try{e=new yr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(pr&&t instanceof Uint16Array||"[object Uint16Array]"===D(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?gr:function(){throw new Error("not implemented")};var dr,hr={uint16:sr,uint8:lr};(dr=new hr.uint16(1))[0]=4660;var vr=52===new hr.uint8(dr.buffer)[0],wr=!0===vr?1:0,br=new or(1),mr=new er(br.buffer);function Ar(r){return br[0]=r,mr[wr]}var _r,Er,Ur=!0===vr?1:0,Ir=new or(1),Sr=new er(Ir.buffer);function xr(r,e){return Ir[0]=r,Sr[Ur]=e>>>0,Ir[0]}!0===vr?(_r=1,Er=0):(_r=0,Er=1);var kr={HIGH:_r,LOW:Er},Fr=new or(1),jr=new er(Fr.buffer),Nr=kr.HIGH,Tr=kr.LOW;function Or(r,e){return jr[Nr]=r,jr[Tr]=e,Fr[0]}var Vr=Number.POSITIVE_INFINITY,$r=Number.NEGATIVE_INFINITY,Gr=1023,Hr=.6931471803691238,Wr=1.9082149292705877e-10,Cr=1.4426950408889634;function Lr(r){var e,t,n,i,a,o,c,u,f,s,l,p,y;if(r===Vr||Z(r))return r;if(r===$r)return-1;if(0===r)return r;if(r<0?(n=!0,u=-r):(n=!1,u=r),u>=38.816242111356935){if(n)return-1;if(u>=709.782712893384)return Vr}if(o=0|Ar(u),u>.34657359027997264)u<1.0397207708399179?n?(i=r+Hr,a=-Wr,y=-1):(i=r-Hr,a=Wr,y=1):(y=n?Cr*r-.5:Cr*r+.5,i=r-(l=y|=0)*Hr,a=l*Wr),s=i-(r=i-a)-a;else{if(o<1016070144)return r;y=0}return c=1+(f=r*(e=.5*r))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(f),p=f*((c-(l=3-c*e))/(6-r*l)),0===y?r-(r*p-f):(t=Or(Gr+y<<20,0),p=r*(p-s)-s,p-=f,-1===y?.5*(r-p)-.5:1===y?r<-.25?-2*(p-(r+.5)):1+2*(r-p):y<=-2||y>56?(u=1-(p-r),1024===y?u=xr(u,i=Ar(u)+(y<<20)|0):u*=t,u-1):(l=1,y<20?u=(l=xr(l,i=1072693248-(2097152>>y)|0))-(p-r):(u=r-(p+(l=xr(l,i=Gr-y<<20|0))),u+=1),u*=t))}var Pr,Rr,Zr=Math.ceil;function Mr(r){return r<0?Zr(r):P(r)}function Xr(r){return r===Vr||r===$r}!0===vr?(Pr=1,Rr=0):(Pr=0,Rr=1);var Yr={HIGH:Pr,LOW:Rr},zr=new or(1),qr=new er(zr.buffer),Br=Yr.HIGH,Dr=Yr.LOW;function Jr(r,e,t,n){return zr[0]=r,e[n]=qr[Br],e[n+t]=qr[Dr],e}function Kr(r){return Jr(r,[0,0],1,0)}L(Kr,"assign",Jr);var Qr=[0,0];function re(r,e,t,n){return Z(r)||Xr(r)?(e[n]=r,e[n+t]=0,e):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(e[n]=4503599627370496*r,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}L((function(r){return re(r,[0,0],1,0)}),"assign",re);var ee=[0,0],te=[0,0];function ne(r,e){var t,n,i,a,o,c;return 0===e||0===r||Z(r)||Xr(r)?r:(re(r,ee,1,0),e+=ee[1],e+=function(r){var e=Ar(r);return(e=(2146435072&e)>>>20)-Gr|0}(r=ee[0]),e<-1074?(i=0,a=r,Kr.assign(i,Qr,1,0),o=Qr[0],o&=2147483647,c=Ar(a),Or(o|=c&=2147483648,Qr[1])):e>1023?r<0?$r:Vr:(e<=-1023?(e+=52,n=2220446049250313e-31):n=1,Kr.assign(r,te,1,0),t=te[0],t&=2148532223,n*Or(t|=e+Gr<<20,te[1])))}var ie=1.4426950408889634,ae=1/(1<<28);function oe(r){var e;return Z(r)||r===Vr?r:r===$r?0:r>709.782712893384?Vr:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<ae?1+r:function(r,e,t){var n,i,a,o;return ne(1-(e-(n=r-e)*(a=n-(i=n*n)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),t)}(r-.6931471803691238*(e=Mr(r<0?ie*r-.5:ie*r+.5)),1.9082149292705877e-10*e,e)}function ce(r,e,t){var n,i;return Z(r)||Z(e)||Z(t)||!R(e)||!R(t)||e>t?NaN:0===r?1:(i=t-e+1,n=oe(r*e)*Lr(r*i),n/=i*Lr(r))}return L(ce,"factory",(function(r,e){var t,n;return Z(r)||Z(e)||!R(r)||!R(e)||r>e?(n=NaN,function(){return n}):(t=e-r+1,function(e){var n;return Z(e)?NaN:0===e?1:(n=oe(e*r)*Lr(e*t),n/=t*Lr(e))})})),ce},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).mgf=e();
//# sourceMappingURL=browser.js.map
