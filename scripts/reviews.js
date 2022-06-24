import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'

const swiper = new Swiper('.reviews', {
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

  wrapperClass: 'reviews__articles',
  slideClass: 'reviews__article',

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
    },
  }
});
