// @ts-check

import { setNavigationTree, setNavigationItem } from './modules/nav-expand.js';
import { setClickableBlocks } from './modules/click-blocks.js';
import { addResizedEvent } from './modules/resizing.js';
import { addStickyNavigation } from './modules/nav-sticky.js';
import { addMobileNavigation } from './modules/nav-mobile.js';
import { qs, qsa } from './modules/query.js';

setNavigationTree('details.sub-nav');
setNavigationItem('.site-nav a', 'current-item')
setClickableBlocks('data-destination');

var resizedEventName = addResizedEvent();

addStickyNavigation('.site-header', '.site-nav', '.site-nav > ul', resizedEventName);
addMobileNavigation('.navigation-icon', '.site-nav', resizedEventName);


function handleIntersection(entries, observer) {
    for (var entry of entries) {
        var value = entry.isIntersecting ? 1 : 0;
        entry.target.style.setProperty('--shown', value);
    }
}

var options = {
     root: null,
     rootMargin: '0px',
     threshold: 0
};

var observer = new IntersectionObserver(handleIntersection, options)

var items = qsa('.list-item');

for (var i = 0; i < items.length; i++) {
    observer.observe(items[i]);
}