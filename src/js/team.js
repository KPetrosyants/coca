import '/scss/team.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useHeaderHiden } from './components/header-hiden.js';
import { UseAccord } from './components/accord.js';
import { useTeamSliders } from './components/team/useTeamSliders.js';

useTheme();
useBurger();
useHeaderHiden();
useTeamSliders();
UseAccord();
