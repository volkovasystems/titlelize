!function webpackUniversalModuleDefinition(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.titlelize=r():e.titlelize=r()}(this,function(){return function(e){function __webpack_require__(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,__webpack_require__),n.l=!0,n.exports}var r={};return __webpack_require__.m=e,__webpack_require__.c=r,__webpack_require__.d=function(e,r,t){__webpack_require__.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:t})},__webpack_require__.n=function(e){var r=e&&e.__esModule?function getDefault(){return e.default}:function getModuleExports(){return e};return __webpack_require__.d(r,"a",r),r},__webpack_require__.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=0)}([function(e,r,t){"use strict";var n=t(1),o=t(3),u=/^[a-z]|\s[a-z]/g,_=function titlelize(e){return o(e)||"string"!=typeof e?e:n(e).toLowerCase().replace(u,function(e){return e.toUpperCase()})};e.exports=_},function(e,r,t){"use strict";var n=t(2),o=/[^a-zA-Z0-9]+/g,u=/[A-Z]+/g,_=/\s+/g,i=/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g,c=function disdo(e){return n(e)||"string"!=typeof e?e:e.replace(o," ").replace(u,function(e){return e.replace(e," "+e)}).replace(_," ").replace(i,"")};e.exports=c},function(e,r,t){"use strict";var n=function falzy(e){return"number"==typeof e?isNaN(e):void 0===e||null===e||""===e};e.exports=n},function(e,r,t){"use strict";var n=function falzy(e){return"number"==typeof e?isNaN(e):void 0===e||null===e||""===e};e.exports=n}])});
//# sourceMappingURL=titlelize.deploy.js.map