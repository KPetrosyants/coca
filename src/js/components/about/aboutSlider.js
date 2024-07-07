import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

export const useAboutSlider = () => {
  new Swiper('.about__slider-container', {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 32,
    centeredSlides: false,
    loop: true,
    navigation: {
      nextEl: '.about__slider-button-next',
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      740: {
        centeredSlides: false,
        slidesPerView: 'auto',
      },
    },
  });
  new Swiper('.articles__slider', {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: false,
    navigation: {
      prevEl: '.articles__slider-button-prev',
      nextEl: '.articles__slider-button-next',
    },
    breakpoints: {
      400: {
        slidesPerView: 1.5,
        centeredSlides: true,
      },
      600: {
        slidesPerView: 2,
      },
      880: {
        centeredSlides: false,
        slidesPerView: 3,
      },
    },
  });
};
