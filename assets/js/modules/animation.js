// @ts-check

import { qsa } from './query.js';

/**
 * Assists animation by setting "--shown" CSS property
 * 
 * When an item is visible in the viewport, it will have --shown: 1
 * Otherwise it will be --shown: 0
 * This allows CSS transitions and calculated properties to animate elements
 * 
 * Example
 *     transition: all 0.2s ease-in;
 *     scale: calc(0.75 + (var(--shown, 1) * 0.25));
 * 
 * @param {string} listItemQuery 
 */
function addIntersectionObserver(listItemQuery) {
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

    var items = qsa(listItemQuery);

    for (var i = 0; i < items.length; i++) {
        observer.observe(items[i]);
    }
}

export { addIntersectionObserver };