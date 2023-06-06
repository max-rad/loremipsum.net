import {initHeaderMenu} from './modules/init-header-menu.js';
import {initRangeSlider} from './modules/init-range-slider.js';
import {initCustomSelect} from './modules/init-custom-select.js';

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    initHeaderMenu();
    initRangeSlider();
    initCustomSelect();
  });
});
