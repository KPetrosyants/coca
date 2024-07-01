import '/scss/about.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useHeaderHiden } from './components/header-hiden.js';
import { UseAccord } from './components/accord.js';
import { useAboutSlider } from './components/about/aboutSlider.js';
import { useTabs } from './components/about/aboutTabs.js';

useTheme();
useBurger();
useHeaderHiden();
UseAccord();
useAboutSlider();
useTabs();
