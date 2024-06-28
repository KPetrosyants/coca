import '/scss/contact.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useWorldMap } from './components/contact/worldMap.js';
import { useHeaderHiden } from './components/header-hiden.js';
import { UsePartnersSlider } from './components/partnersSlider.js';
import { UseAccord } from './components/accord.js';
import { usePhone } from './components/contact/phone.js';

useTheme();
useBurger();
useWorldMap();
useHeaderHiden();
UsePartnersSlider();
UseAccord();
usePhone();
