import Swiper from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
export const useTeamSliders = () => {
  new Swiper('.team-slider', {
    modules: [Navigation],
    direction: 'horizontal',
    loop: true,
    spaceBetween: 32,
    slidesPerView: 'auto',

    navigation: {
      nextEl: '.team-slider__button-next',
    },
  });
};
