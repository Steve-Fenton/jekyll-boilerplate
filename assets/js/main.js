// @ts-check

import { setNavigationTree } from './modules/nav-expand.js';
import { setClickableBlocks } from './modules/click-blocks.js';
import { addResizedEvent } from './modules/resizing.js';
import { addStickyNavigation } from './modules/nav-sticky.js';
import { addMobileNavigation } from './modules/nav-mobile.js';
import { addIntersectionObserver } from './modules/animation.js';
import { qsa } from './modules/query.js';

setNavigationTree('details.sub-nav');
setClickableBlocks();

const resizedEventName = addResizedEvent();

addStickyNavigation('.site-header', '.site-nav', '.site-nav > ul', resizedEventName);
addMobileNavigation('.navigation-icon', '.site-nav', resizedEventName);
addIntersectionObserver('.post-list .list-item, main img, main .note, main blockquote');

qsa('pre.highlight').forEach((elem) => elem.setAttribute('tabindex', '0'));