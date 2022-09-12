// @ts-check

import { qs, qsa } from './query.js';

/**
 * Makes an existing navigation element sticky
 * 
 * Example: If the existing navigation is not as tall as the content, the
 * navigation will stick to the top, allowing the user to see it as 
 * they scroll through the article
 * 
 * @param {string} headerSelector 
 * @param {string} navigationSelector 
 * @param {string} navigationListSelector 
 */
function addStickyNavigation(headerSelector, navigationSelector, navigationListSelector, resizedEventName) {
    function setNavigationMode() {
        var header = qs(headerSelector);
        var navigation = qs(navigationSelector);
        var navigationList = qs(navigationListSelector); 
        
        var buffer = 50;
        var className = 'sticky';

        var dimensions = {
            browserHeight: window.innerHeight,
            browserWidth: window.innerWidth,
            headerHeight: header.clientHeight,
            navigationHeight: navigationList.clientHeight
        };

        // Only enable sticky mode if the menu will fit vertically
        // && where the browser is more than 860px wide
        if (dimensions.navigationHeight < ((dimensions.browserHeight - dimensions.headerHeight) - buffer)
            && dimensions.browserWidth > 860) {
            console.log('Navigation: Sticky Mode');
            navigation.classList.add(className)
            navigation.style.top = dimensions.headerHeight.toString() + 'px';
        } else {
            console.log('Navigation: Fixed Mode');
            navigation.classList.remove(className);
        }
    }

    setNavigationMode();

    document.addEventListener(resizedEventName, function(e) {
        if (e.detail && e.detail.change && e.detail.change.height != 0) {
            setNavigationMode();
        }
    });
}

export { addStickyNavigation };