"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=s(function(j,c){
var f=require('@stdlib/math-base-assert-is-integer/dist'),a=require('@stdlib/math-base-assert-is-nan/dist'),q=require('@stdlib/math-base-special-expm1/dist'),y=require('@stdlib/math-base-special-exp/dist');function I(e,r,n){var u,i;return a(e)||a(r)||a(n)||!f(r)||!f(n)||r>n?NaN:e===0?1:(i=n-r+1,u=y(e*r)*q(e*i),u/=i*q(e),u)}c.exports=I
});var m=s(function(k,N){
var d=require('@stdlib/utils-constant-function/dist'),p=require('@stdlib/math-base-assert-is-integer/dist'),v=require('@stdlib/math-base-assert-is-nan/dist'),x=require('@stdlib/math-base-special-expm1/dist'),l=require('@stdlib/math-base-special-exp/dist');function F(e,r){var n;if(v(e)||v(r)||!p(e)||!p(r)||e>r)return d(NaN);return n=r-e+1,u;function u(i){var t;return v(i)?NaN:i===0?1:(t=l(i*e)*x(i*n),t/=n*x(i),t)}}N.exports=F
});var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=o(),R=m();O(g,"factory",R);module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
