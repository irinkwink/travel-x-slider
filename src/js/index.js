import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import mobileNav from './modules/mobile-nav.js';

mobileNav();

const swiper = new Swiper('.swiper', {

  loop: true,
  parallax: true,
  speed: 1000,

  keyboard: {
    enabled: true,
  },

  // If we need pagination
  pagination: {
    el: '.slider-controls__count',
    type: 'fraction',
  },

  // Navigation arrows
  navigation: {
    nextEl: '#sliderNext',
    prevEl: '#sliderPrev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

