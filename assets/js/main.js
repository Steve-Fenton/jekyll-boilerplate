// @ts-check

import { setNavigationTree, setNavigationItem } from './modules/nav-expand.js';
import { setClickableBlocks } from './modules/click-blocks.js';
import { addResizedEvent } from './modules/resizing.js';
import { addStickyNavigation } from './modules/nav-sticky.js';
import { addMobileNavigation } from './modules/nav-mobile.js';
import { addIntersectionObserver } from './modules/animation.js';

setNavigationTree('details.sub-nav');
setNavigationItem('.site-nav a', 'current-item')
setClickableBlocks('data-destination');

var resizedEventName = addResizedEvent();

addStickyNavigation('.site-header', '.site-nav', '.site-nav > ul', resizedEventName);
addMobileNavigation('.navigation-icon', '.site-nav', resizedEventName);
addIntersectionObserver('.post-list .list-item');