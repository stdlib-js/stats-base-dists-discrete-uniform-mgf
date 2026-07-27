"use strict";var s=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var o=s(function(j,c){
var f=require('@stdlib/math-base-assert-is-integer/dist'),a=require('@stdlib/math-base-assert-is-nan/dist'),q=require('@stdlib/math-base-special-expm1/dist'),y=require('@stdlib/math-base-special-exp/dist');function I(e,r,i){var u,n;return a(e)||a(r)||a(i)||!f(r)||!f(i)||r>i?NaN:e===0?1:(n=i-r+1,u=y(e*r)*q(e*n),u/=n*q(e),u)}c.exports=I
});var m=s(function(k,N){
var d=require('@stdlib/utils-constant-function/dist'),p=require('@stdlib/math-base-assert-is-integer/dist'),v=require('@stdlib/math-base-assert-is-nan/dist'),x=require('@stdlib/math-base-special-expm1/dist'),l=require('@stdlib/math-base-special-exp/dist');function F(e,r){var i;if(v(e)||v(r)||!p(e)||!p(r)||e>r)return d(NaN);return i=r-e+1,u;function u(n){var t;return v(n)?NaN:n===0?1:(t=l(n*e)*x(n*i),t/=i*x(n),t)}}N.exports=F
});var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=o(),R=m();O(g,"factory",R);module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
