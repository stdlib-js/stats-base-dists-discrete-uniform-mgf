// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(a):n(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):a.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var u=Math.abs,f=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,g=/^(\d+)$/,d=/^(\d+)e/,h=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function b(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":u(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=l.call(n,w,"$1e"),n=l.call(n,v,"e"),n=l.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=l.call(n,p,"e+0$1"),n=l.call(n,y,"e-0$1"),r.alternate&&(n=l.call(n,g,"$1."),n=l.call(n,d,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):f.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var A=String.fromCharCode,_=Array.isArray;function E(r){return r!=r}function U(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,t,n,a,o,u,f,s,l,p,y,g,d;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",f=1,s=0;s<r.length;s++)if("string"==typeof(n=r[s]))u+=n;else{if(e=void 0!==n.precision,!(n=U(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(a=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,E(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!E(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(o)?String(n.arg):A(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=b(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,y=n.width,g=n.padRight,d=void 0,(d=y-p.length)<0?p:p=g?p+m(d):m(d)+p)),u+=n.arg||"",f+=1}return u}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function k(r){var e,t,n,i;for(t=[],i=0,n=I.exec(r);n;)(e=r.slice(i,I.lastIndex-n[0].length)).length&&t.push(e),t.push(x(n)),i=I.lastIndex,n=I.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function F(r){var e,t;if("string"!=typeof r)throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[k(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return S.apply(null,e)}var j=Object.prototype,T=j.toString,N=j.__defineGetter__,O=j.__defineSetter__,V=j.__lookupGetter__,$=j.__lookupSetter__,G=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===T.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===T.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(V.call(r,e)||$.call(r,e)?(n=r.__proto__,r.__proto__=j,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&N&&N.call(r,e,t.get),o&&O&&O.call(r,e,t.set),r};function H(r,e,t){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var W=Math.floor;function C(r){return W(r)===r}function L(r){return r!=r}var P,R="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),Z=Object.prototype.toString,M=Object.prototype.hasOwnProperty,X="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof X?X.toStringTag:"",z=R&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,i,a;if(null==r)return Z.call(r);t=r[Y],a=Y,e=null!=(i=r)&&M.call(i,a);try{r[Y]=void 0}catch(e){return Z.call(r)}return n=Z.call(r),e?r[Y]=t:delete r[Y],n}:function(r){return Z.call(r)},q="function"==typeof Uint32Array,B="function"==typeof Uint32Array?Uint32Array:null,D="function"==typeof Uint32Array?Uint32Array:void 0;P=function(){var r,e,t;if("function"!=typeof B)return!1;try{e=new B(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(q&&t instanceof Uint32Array||"[object Uint32Array]"===z(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?D:function(){throw new Error("not implemented")};var J,K=P,Q="function"==typeof Float64Array,rr="function"==typeof Float64Array?Float64Array:null,er="function"==typeof Float64Array?Float64Array:void 0;J=function(){var r,e,t;if("function"!=typeof rr)return!1;try{e=new rr([1,3.14,-3.14,NaN]),t=e,r=(Q&&t instanceof Float64Array||"[object Float64Array]"===z(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?er:function(){throw new Error("not implemented")};var tr,nr=J,ir="function"==typeof Uint8Array,ar="function"==typeof Uint8Array?Uint8Array:null,or="function"==typeof Uint8Array?Uint8Array:void 0;tr=function(){var r,e,t;if("function"!=typeof ar)return!1;try{e=new ar(e=[1,3.14,-3.14,256,257]),t=e,r=(ir&&t instanceof Uint8Array||"[object Uint8Array]"===z(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?or:function(){throw new Error("not implemented")};var cr,ur=tr,fr="function"==typeof Uint16Array,sr="function"==typeof Uint16Array?Uint16Array:null,lr="function"==typeof Uint16Array?Uint16Array:void 0;cr=function(){var r,e,t;if("function"!=typeof sr)return!1;try{e=new sr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(fr&&t instanceof Uint16Array||"[object Uint16Array]"===z(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?lr:function(){throw new Error("not implemented")};var pr,yr={uint16:cr,uint8:ur};(pr=new yr.uint16(1))[0]=4660;var gr=52===new yr.uint8(pr.buffer)[0],dr=!0===gr?1:0,hr=new nr(1),vr=new K(hr.buffer);function wr(r){return hr[0]=r,vr[dr]}var br,mr,Ar=!0===gr?1:0,_r=new nr(1),Er=new K(_r.buffer);function Ur(r,e){return _r[0]=r,Er[Ar]=e>>>0,_r[0]}!0===gr?(br=1,mr=0):(br=0,mr=1);var Sr={HIGH:br,LOW:mr},Ir=new nr(1),xr=new K(Ir.buffer),kr=Sr.HIGH,Fr=Sr.LOW;function jr(r,e){return xr[kr]=r,xr[Fr]=e,Ir[0]}var Tr=Number.POSITIVE_INFINITY,Nr=Number.NEGATIVE_INFINITY,Or=1023,Vr=.34657359027997264,$r=709.782712893384,Gr=.6931471803691238,Hr=1.9082149292705877e-10,Wr=1.4426950408889634,Cr=38.816242111356935,Lr=1.0397207708399179;function Pr(r){var e,t,n,i,a,o,c,u,f,s,l,p,y;if(r===Tr||L(r))return r;if(r===Nr)return-1;if(0===r)return r;if(r<0?(n=!0,u=-r):(n=!1,u=r),u>=Cr){if(n)return-1;if(u>=$r)return Tr}if(o=0|wr(u),u>Vr)u<Lr?n?(i=r+Gr,a=-Hr,y=-1):(i=r-Gr,a=Hr,y=1):(y=n?Wr*r-.5:Wr*r+.5,i=r-(l=y|=0)*Gr,a=l*Hr),s=i-(r=i-a)-a;else{if(o<1016070144)return r;y=0}return c=1+(f=r*(e=.5*r))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(f),p=f*((c-(l=3-c*e))/(6-r*l)),0===y?r-(r*p-f):(t=jr(Or+y<<20,0),p=r*(p-s)-s,p-=f,-1===y?.5*(r-p)-.5:1===y?r<-.25?-2*(p-(r+.5)):1+2*(r-p):y<=-2||y>56?(u=1-(p-r),1024===y?u=Ur(u,i=wr(u)+(y<<20)|0):u*=t,u-1):(l=1,y<20?u=(l=Ur(l,i=1072693248-(2097152>>y)|0))-(p-r):(u=r-(p+(l=Ur(l,i=Or-y<<20|0))),u+=1),u*=t))}var Rr=Math.ceil;function Zr(r){return r<0?Rr(r):W(r)}var Mr=1023,Xr=-1023,Yr=-1074;function zr(r){return r===Tr||r===Nr}var qr,Br,Dr=2147483648,Jr=2147483647;!0===gr?(qr=1,Br=0):(qr=0,Br=1);var Kr={HIGH:qr,LOW:Br},Qr=new nr(1),re=new K(Qr.buffer),ee=Kr.HIGH,te=Kr.LOW;function ne(r,e,t,n){return Qr[0]=r,e[n]=re[ee],e[n+t]=re[te],e}function ie(r){return ne(r,[0,0],1,0)}H(ie,"assign",ne);var ae=[0,0],oe=22250738585072014e-324,ce=4503599627370496;function ue(r,e,t,n){return L(r)||zr(r)?(e[n]=r,e[n+t]=0,e):0!==r&&function(r){return Math.abs(r)}(r)<oe?(e[n]=r*ce,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}H((function(r){return ue(r,[0,0],1,0)}),"assign",ue);var fe=2146435072,se=2220446049250313e-31,le=2148532223,pe=[0,0],ye=[0,0];function ge(r,e){var t,n,i,a,o,c;return 0===e||0===r||L(r)||zr(r)?r:(ue(r,pe,1,0),r=pe[0],e+=pe[1],e+=function(r){var e=wr(r);return(e=(e&fe)>>>20)-Or|0}(r),e<Yr?(i=0,a=r,ie.assign(i,ae,1,0),o=ae[0],o&=Jr,c=wr(a),jr(o|=c&=Dr,ae[1])):e>Mr?r<0?Nr:Tr:(e<=Xr?(e+=52,n=se):n=1,ie.assign(r,ye,1,0),t=ye[0],t&=le,n*jr(t|=e+Or<<20,ye[1])))}var de=.6931471803691238,he=1.9082149292705877e-10,ve=1.4426950408889634,we=709.782712893384,be=-745.1332191019411,me=1/(1<<28),Ae=-me;function _e(r){var e;return L(r)||r===Tr?r:r===Nr?0:r>we?Tr:r<be?0:r>Ae&&r<me?1+r:function(r,e,t){var n,i,a,o;return ge(1-(e-(n=r-e)*(a=n-(i=n*n)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),t)}(r-(e=Zr(r<0?ve*r-.5:ve*r+.5))*de,e*he,e)}function Ee(r,e,t){var n,i;return L(r)||L(e)||L(t)||!C(e)||!C(t)||e>t?NaN:0===r?1:(i=t-e+1,n=_e(r*e)*Pr(r*i),n/=i*Pr(r))}return H(Ee,"factory",(function(r,e){var t,n;return L(r)||L(e)||!C(r)||!C(e)||r>e?(n=NaN,function(){return n}):(t=e-r+1,function(e){var n;return L(e)?NaN:0===e?1:(n=_e(e*r)*Pr(e*t),n/=t*Pr(e))})})),Ee},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).mgf=e();
//# sourceMappingURL=browser.js.map
