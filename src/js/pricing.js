import '../assets/scss/pricing.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { usePriceSwitcher } from './components/pricing/priceSwticher.js';
import { UseAccord } from './components/accord.js';
import { useHeaderHiden } from './components/header-hiden.js';
useTheme();
useBurger();
usePriceSwitcher();
UseAccord();
useHeaderHiden();
