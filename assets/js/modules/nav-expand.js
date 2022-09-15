// @ts-check

import { qs, qsa } from './query.js';

/**
 * Sets the navigation based on the current page
 * 
 * Example: You have a navigation tree with an "About" page with several child items.
 * When the user is on the "About" page, or any child pages, the navigation should
 * be automatically expanded so the user can orient themselves within the site.
 * 
 * @param {string} className 
 */
 function setNavigationTree(className) {
    const site = document.location.origin;
    const location = document.location.pathname;

    qsa(className).forEach((summary) => {
        const anchorElement = /** @type {HTMLAnchorElement} */(qs('a', summary));
        const address = anchorElement.href.replace(site, '');

        if (location.startsWith(address)){
            summary.setAttribute('open', 'open');
        }
    });
}

export { setNavigationTree };