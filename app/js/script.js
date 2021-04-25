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

