"use strict";var v=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var t=v(function(A,n){
var f=require('@stdlib/math-base-utils-relative-difference/dist'),q=require('@stdlib/math-base-assert-is-nan/dist'),c=require('@stdlib/constants-float64-pinf/dist'),a=require('@stdlib/constants-float64-max/dist'),u=require('@stdlib/constants-float64-eps/dist'),o=a*u;function F(i,r,s){var e=f(i,r,s||"max-abs");return q(e)||e===c?e:e>=o?a:e/u}n.exports=F
});var p=t();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
