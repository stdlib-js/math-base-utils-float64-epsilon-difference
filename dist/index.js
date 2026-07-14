"use strict";var v=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var s=v(function(A,t){
var f=require('@stdlib/math-base-utils-relative-difference/dist'),q=require('@stdlib/math-base-assert-is-nan/dist'),c=require('@stdlib/constants-float64-pinf/dist'),u=require('@stdlib/constants-float64-max/dist'),n=require('@stdlib/constants-float64-eps/dist'),o=u*n;function F(i,r,a){var e=f(i,r,a||"max-abs");return q(e)||e===c?e:e>=o?u:e/n}t.exports=F
});var p=s();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
