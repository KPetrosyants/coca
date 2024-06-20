import '../assets/scss/main.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useHeaderHiden } from './components/header-hiden.js';
import { partnersSlider } from './components/partnersSlider.js';

useTheme();
useBurger();
useHeaderHiden();
partnersSlider();
