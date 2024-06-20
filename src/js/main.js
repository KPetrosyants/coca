import '../assets/scss/main.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useHeaderHiden } from './components/header-hiden.js';
import { UsePartnersSlider } from './components/partnersSlider.js';
import { useInsightSlider } from './components/slider.js';

useTheme();
useBurger();
useHeaderHiden();
UsePartnersSlider();
useInsightSlider();
