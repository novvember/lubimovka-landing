import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'

const swiper = new Swiper('.critics', {
  pagination: {
    el: '.slider__pagination',
    bulletClass: 'slider__pagination-bullet',
    bulletActiveClass: 'slider__pagination-bullet_active',
    clickable: true,
  },

  navigation: {
    nextEl: '.slider-button_type_next',
    prevEl: '.slider-button_type_prev',
  },

  centeredSlides: true,
  slideToClickedSlide: true,
  autoHeight: true,

  wrapperClass: 'critics__articles',
  slideClass: 'critics__article',
  slideActiveClass: 'critics__article_active',

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  }
});
