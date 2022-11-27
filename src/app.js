/* eslint-disable import/extensions */
import {
	setupToggleMenu,
	setupToggleTheme,
} from './components/defaultButtons.js';
import setupAppContent from './setupAppContent.js';

function init() {
	setupAppContent('#app');
	setupToggleTheme('html', '#toggle-theme-btn');
	setupToggleMenu('#menu', '#menu-btn');
}

init();
