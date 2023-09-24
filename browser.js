// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e=/./,r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function n(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function o(e,r,t){var n=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(o):i(o)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,c=String.prototype.toUpperCase;function u(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!n(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=o(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=o(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===c.call(e.specifier)?c.call(t):a.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function s(e){return"string"==typeof e}var f=Math.abs,l=String.prototype.toLowerCase,p=String.prototype.toUpperCase,g=String.prototype.replace,d=/e\+(\d)$/,b=/e-(\d)$/,h=/^(\d+)$/,y=/^(\d+)e/,v=/\.0$/,w=/\.0*e/,m=/(\..*[^0])0*e/;function _(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!n(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":f(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=g.call(t,m,"$1e"),t=g.call(t,w,"e"),t=g.call(t,v,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=g.call(t,d,"e+0$1"),t=g.call(t,b,"e-0$1"),e.alternate&&(t=g.call(t,h,"$1."),t=g.call(t,y,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===p.call(e.specifier)?p.call(t):l.call(t)}function E(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function j(e,r,t){var n=r-e.length;return n<0?e:e=t?e+E(n):E(n)+e}var x=String.fromCharCode,S=isNaN,T=Array.isArray;function k(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function I(e){var r,t,n,i,a,c,f,l,p;if(!T(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",f=1,l=0;l<e.length;l++)if(s(n=e[l]))c+=n;else{if(r=void 0!==n.precision,!(n=k(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,S(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,S(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!S(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=S(a)?String(n.arg):x(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=_(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=j(n.arg,n.width,n.padRight)),c+=n.arg||"",f+=1}return c}var A=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function N(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function V(e){var r,t,n,i;for(t=[],i=0,n=A.exec(e);n;)(r=e.slice(i,A.lastIndex-n[0].length)).length&&t.push(r),t.push(N(n)),i=A.lastIndex,n=A.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function F(e){return"string"==typeof e}function O(e){var r,t,n;if(!F(e))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=V(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return I.apply(null,t)}var $,C=Object.prototype,P=C.toString,B=C.__defineGetter__,R=C.__defineSetter__,G=C.__lookupGetter__,L=C.__lookupSetter__;$=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===P.call(e))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===P.call(t))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(G.call(e,r)||L.call(e,r)?(n=e.__proto__,e.__proto__=C,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&B&&B.call(e,r,t.get),a&&R&&R.call(e,r,t.set),e};var Z=$;function M(e,r,t){Z(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function U(e){return"boolean"==typeof e}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return W&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString,Y=Object.prototype.hasOwnProperty,q="function"==typeof Symbol?Symbol:void 0,D="function"==typeof q?q.toStringTag:"",H=X()?function(e){var r,t,n,i,o;if(null==e)return z.call(e);t=e[D],o=D,r=null!=(i=e)&&Y.call(i,o);try{e[D]=void 0}catch(r){return z.call(e)}return n=z.call(e),r?e[D]=t:delete e[D],n}:function(e){return z.call(e)},J=Boolean,K=Boolean.prototype.toString,Q=X();function ee(e){return"object"==typeof e&&(e instanceof J||(Q?function(e){try{return K.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===H(e)))}function re(e){return U(e)||ee(e)}function te(){return new Function("return this;")()}M(re,"isPrimitive",U),M(re,"isObject",ee);var ne="object"==typeof self?self:null,ie="object"==typeof window?window:null,oe="object"==typeof globalThis?globalThis:null,ae=function(e){if(arguments.length){if(!U(e))throw new TypeError(O("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return te()}if(oe)return oe;if(ne)return ne;if(ie)return ie;throw new Error("unexpected error. Unable to resolve global object.")}(),ce=ae.document&&ae.document.childNodes,ue=Int8Array;function se(){return/^\s*function\s*([^(]*)/i}var fe=/^\s*function\s*([^(]*)/i;M(se,"REGEXP",fe);var le=Array.isArray?Array.isArray:function(e){return"[object Array]"===H(e)};function pe(e){return null!==e&&"object"==typeof e}function ge(e){var r,t,n,i;if(("Object"===(t=H(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=fe.exec(n.toString()))return r[1]}return pe(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}M(pe,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(O("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!le(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(pe));var de="function"==typeof e||"object"==typeof ue||"function"==typeof ce?function(e){return ge(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?ge(e).toLowerCase():r};function be(e){return e!=e}var he=Number.POSITIVE_INFINITY,ye=Number.NEGATIVE_INFINITY;function ve(e){return Math.abs(e)}var we={"max-abs":function(e,r){return(e=ve(e))<(r=ve(r))?r:e},max:function(e,r){return e<r?r:e},"min-abs":function(e,r){return(e=ve(e))>(r=ve(r))?r:e},min:function(e,r){return e>r?r:e},"mean-abs":function(e,r){return(e=ve(e))+((r=ve(r))-e)/2},mean:function(e,r){return e+(r-e)/2},x:function(e){return e},y:function(e,r){return r}};function me(e,r,t){var n,i;if(be(e)||be(r))return NaN;if(e===he||e===ye||r===he||r===ye)return e===r?NaN:he;if(e===r)return 0;if("function"===de(t))n=t;else if(void 0===t&&(t="max-abs"),void 0===(n=we[t]))throw new Error(O("invalid argument. Unrecognized/unsupported scale function. Value: `%s`.",t));return 0===(i=n(e,r))?NaN:ve((e-r)/i)}var _e=17976931348623157e292,Ee=2220446049250313e-31;return function(e,r,t){var n=me(e,r,t||"max-abs");return be(n)||n===he?n:n>=3991680619069439e277?_e:n/Ee}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).epsdiff=r();
//# sourceMappingURL=browser.js.map
