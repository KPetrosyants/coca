import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

export const useAboutSlider = () => {
  new Swiper('.about__slider-container', {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    navigation: {
      nextEl: '.about__slider-button-next',
    },
  });
};
