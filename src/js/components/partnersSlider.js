import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
// import SwiperCore, { Autoplay } from 'swiper';
export const partnersSlider = () => {
  new Swiper('.partners-swiper', {
    modules: [Autoplay],
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    speed: 400,
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    breakpoints: {
      381: {
        slidesPerView: 2,
      },
      481: {
        slidesPerView: 3,
      },
    },
  });
};
