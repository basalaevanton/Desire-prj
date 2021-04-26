// rs menu animation

let menu = document.querySelector('.header__btn-menu');
let close = document.querySelector('.rs-menu__close');
let rsMenu = document.querySelector('.rs-menu');
let wrapper = document.querySelector('.wrapper');

function listener() {
  document.addEventListener('mousedown', function (event) {
    if (!rsMenu.contains(event.target)) {
      rsMenu.classList.add('rs-menu--close');
    }
  });
}

listener();

menu.onclick = function removeClass() {
  rsMenu.classList.remove('rs-menu--close');
};

close.onclick = function addClass() {
  rsMenu.classList.add('rs-menu--close');
};

// swiper

// index
const swiper_main = new Swiper('.swiper-index', {
  initialSlide: 1,
  direction: 'horizontal',

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// contact
const swiper_contact = new Swiper('.swiper-contact', {
  initialSlide: 1,
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination1',
    clickable: true,
  },
});

// blog
const swiper_blog = new Swiper('.swiper-container', {
  direction: 'horizontal',

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// mixit up

var mixer = mixitup('.gallery__inner', {
  load: {
    filter: '.living',
  },
  animation: {
    duration: 300,
  },
});



