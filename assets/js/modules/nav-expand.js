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
    var summaries = qsa(className);
    var site = document.location.origin;
    var location = document.location.pathname;

    for (var i = 0; i < summaries.length; i++) {
        var summary = summaries[i];
        var anchorElement = /** @type {HTMLAnchorElement} */(qs('a', summary));
        var address = anchorElement.href.replace(site, '');

        if (location.startsWith(address)){
            summary.setAttribute('open', 'open');
        }
    }
}

/**
 * Highlights the current navigation item
 * 
 * @param {string} navQuery 
 * @param {string} selectedClass 
 */
function setNavigationItem(navQuery, selectedClass) {
    var anchors = qsa(navQuery);
    var site = document.location.origin;
    var location = document.location.pathname;

    for (var j = 0; j < anchors.length; j++) {
        var anchor = /** @type {HTMLAnchorElement} */ (anchors[j]);
        var href = anchor.href.replace(site, '');

        if (href === location) {
            anchor.classList.add(selectedClass);
        }
    }
}

export { setNavigationTree, setNavigationItem };