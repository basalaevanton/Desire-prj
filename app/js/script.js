// rs menu animation

let btnmenu = document.querySelector('.header__btn-menu');
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

btnmenu.onclick = function removeClass() {
  rsMenu.classList.remove('rs-menu--close');
};

close.onclick = function addClass() {
  rsMenu.classList.add('rs-menu--close');
};

// burger menu

let btn_burg = document.querySelector('.header__btn-burger');
let menu = document.querySelectorAll('.menu');

btn_burg.onclick = function toggle() {
  for (let index of menu) {
    index.classList.toggle('menu--open');
  }
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

// if (window.matchMedia('(max-width: 990px)').matches) {
//   let bbb = document.querySelectorAll('.gallery__btn');
//   let mas = [];
//   for (let index of bbb) {
//     mas.push(index.innerText);
//   }

//   for (let index in mas) {
//     mas[index] = mas[index].split(' ')[0];
//   }

//   let i = 0;
//   for (let index of bbb) {
//     index.innerText = mas[i];
//     i++;
//   }
// } else {
//   console.log('byyye');
// }

const mediaQuery = window.matchMedia('(max-width: 768px)');
let gallery__btn = document.querySelectorAll('.gallery__btn');
let BtnTxt = [];

for (let index of gallery__btn) {
  BtnTxt.push(index.innerText);
}

function handleTabletChange(e) {
  if (e.matches) {
    let BtnTxt_new =[]
    for (let index of gallery__btn) {
      BtnTxt_new.push(index.innerText);
    }
    for (let index in BtnTxt_new) {

      BtnTxt_new[index] = BtnTxt_new[index].split(' ')[0];
    }
    
    let i = 0;
    for (let index of gallery__btn) {
      index.innerText = BtnTxt_new[i];
      i++;
    }
  
  }
  else{
    let i = 0;
    for (let index of gallery__btn) {
      index.innerText = BtnTxt[i];
      i++;
    }
  }
}
// Register event listener
mediaQuery.addListener(handleTabletChange);

// Initial check
handleTabletChange(mediaQuery);




