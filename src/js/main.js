import '../assets/scss/main.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useHeaderHiden } from './components/header-hiden.js';
import { UsePartnersSlider } from './components/partnersSlider.js';
import { UseAccord } from './components/accord.js';
import {
  useInsightSlider,
  useTestimonialsSlider,
} from './components/slider.js';

useTheme();
useBurger();
useHeaderHiden();
UsePartnersSlider();
UseAccord();
useInsightSlider();
useTestimonialsSlider();
