!function(e){var n={};function t(o){if(n[o])return n[o].exports;var a=n[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(o,a,function(n){return e[n]}.bind(null,a));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=2)}({2:function(module,exports){eval('/*\n *Offcanvas menu\n */\ndocument.addEventListener(\'DOMContentLoaded\', function () {\n  const offcanvasToggle = document.getElementById("offcanvas-toggle");\n  const offcanvasClose = document.getElementById("offcanvas-close");\n  const activeClass = "is-visible";\n\n  function toggleOffcanvas() {\n    offcanvas.classList.toggle(activeClass);\n  }\n\n  function closeOffcanvas() {\n    offcanvas.classList.remove(activeClass);\n  }\n\n  offcanvasToggle.addEventListener("click", toggleOffcanvas);\n  offcanvasClose.addEventListener("click", closeOffcanvas);\n});\n\n\n//# sourceURL=webpack:///./js/mobile-menu.js?')}});