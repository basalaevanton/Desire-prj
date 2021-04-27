"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// rs menu animation
var btnmenu = document.querySelector('.header__btn-menu');
var close = document.querySelector('.rs-menu__close');
var rsMenu_bg = document.querySelector('.rs-menu');
var rsMenu = document.querySelector('.rs-menu__box');

function listener() {
  rsMenu_bg.addEventListener('mousedown', function (event) {
    if (!rsMenu.contains(event.target)) {
      rsMenu_bg.classList.add('rs-menu--close');
    }
  });
}

listener();

btnmenu.onclick = function removeClass() {
  rsMenu_bg.classList.remove('rs-menu--close');
};

close.onclick = function addClass() {
  rsMenu_bg.classList.add('rs-menu--close');
}; // burger menu


var btn_burg = document.querySelector('.header__btn-burger');
var menu = document.querySelectorAll('.menu');

btn_burg.onclick = function toggle() {
  var _iterator = _createForOfIteratorHelper(menu),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var index = _step.value;
      index.classList.toggle('menu--open');
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}; // swiper
// index


var swiper_main = new Swiper('.swiper-index', {
  initialSlide: 1,
  direction: 'horizontal',
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
}); // contact

var swiper_contact = new Swiper('.swiper-contact', {
  initialSlide: 1,
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination1',
    clickable: true
  }
}); // blog

var swiper_blog = new Swiper('.swiper-container', {
  direction: 'horizontal',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
}); // mixit up

var mixer = mixitup('.gallery__inner', {
  load: {
    filter: '.living'
  },
  animation: {
    duration: 300
  }
}); // change btns value @media

var mediaQuery = window.matchMedia('(max-width: 768px)');
var gallery__btn = document.querySelectorAll('.gallery__btn');
var BtnTxt = [];

var _iterator2 = _createForOfIteratorHelper(gallery__btn),
    _step2;

try {
  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
    var index = _step2.value;
    BtnTxt.push(index.innerText);
  }
} catch (err) {
  _iterator2.e(err);
} finally {
  _iterator2.f();
}

function handleTabletChange(e) {
  if (e.matches) {
    var BtnTxt_new = [];

    var _iterator3 = _createForOfIteratorHelper(gallery__btn),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _index = _step3.value;
        BtnTxt_new.push(_index.innerText);
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    for (var index in BtnTxt_new) {
      BtnTxt_new[index] = BtnTxt_new[index].split(' ')[0];
    }

    var i = 0;

    var _iterator4 = _createForOfIteratorHelper(gallery__btn),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var _index2 = _step4.value;
        _index2.innerText = BtnTxt_new[i];
        i++;
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
  } else {
    var _i = 0;

    var _iterator5 = _createForOfIteratorHelper(gallery__btn),
        _step5;

    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var _index3 = _step5.value;
        _index3.innerText = BtnTxt[_i];
        _i++;
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
  }
}

mediaQuery.addListener(handleTabletChange);
handleTabletChange(mediaQuery); ///