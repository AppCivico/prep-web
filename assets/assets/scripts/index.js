(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = backToTop;

function backToTop() {
  const $button = document.querySelector('.js-back-to-top');

  if ($button) {
    $button.addEventListener('click', event => {
      event.preventDefault();
      const $html = document.querySelector('html');
      $html.scrollTo(0, 0);
    });
  }

  function toggleToTopVisibility() {
    if (window.pageYOffset >= 200) {
      $button.style.opacity = 1;
    } else {
      $button.opacity = 0;
    }
  }

  if ($button) {
    window.addEventListener('scroll', toggleToTopVisibility, false);
    window.addEventListener('load', toggleToTopVisibility, false);
  }
}

},{}],2:[function(require,module,exports){
"use strict";

var _backToTop = require("./back-to-top");

var _backToTop2 = _interopRequireDefault(_backToTop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _backToTop2.default)();

},{"./back-to-top":1}]},{},[2]);
