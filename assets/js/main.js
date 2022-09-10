// @ts-check

/**
 * Adds a de-bounced "resized" event, so you can listen to:
 * document.addEventListener('resized', <handler>);
 * @param {Window} global 
 * @param {Node} target
 */
function addResizedEventUtility(global, target) {
    var debounce = null;

    function resizeEnd() {
        global.clearTimeout(debounce);
        debounce = global.setTimeout(raiseEvent, 500);
    }

    function raiseEvent() {
        const resizeEndEvent = new CustomEvent('resized');
        target.dispatchEvent(resizeEndEvent);
    }

    global.addEventListener('resize', resizeEnd);
}

addResizedEventUtility(window, document);

/**
 * Utility for query selector
 * @param {string} query
 * @param {HTMLElement | null} [container]
 * @returns HTMLElement
 */
 function qs(query, container) {
    var target = (container)
        ? container
        : document;

    /** @type {HTMLElement | null} */
    var result = target.querySelector(query);

    if (result) {
        return result;
    }

    throw new Error(`No element ${query}`);
}

/**
 * Utility for query selector all
 * @param {string} query
 * @param {HTMLElement | null} [container]
 * @returns NodeListOf<any>
 */
 function qsa(query, container) {
    var target = (container)
        ? container
        : document;

    /** @type {NodeListOf<HTMLElement>} */
    var result = target.querySelectorAll(query);
    return result;
}

/**
 * Makes an existing navigation element sticky
 * if the screen size makes that useful.
 * @param {string} headerSelector 
 * @param {string} navigationSelector 
 * @param {string} navigationListSelector 
 */
function addStickyNavigation(headerSelector, navigationSelector, navigationListSelector) {
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

    document.addEventListener('resized', setNavigationMode);
    
}

addStickyNavigation('.site-header', '.site-nav', '.site-nav > ul');

/*
Auto-Open Current Navigation 

    Depends on
        details.sub-nav
*/
(function() {
    var summaries = qsa('details.sub-nav');
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
}());

/*
Mobile Menu Enhancement

    Depens on
        .navigation-icon
        .site-nav
*/
(function() {
    var icon = qs('.navigation-icon');
    var originalIcon = icon.innerHTML;
    var overlay = document.createElement('div');
    var dataOpen = 'data-open';

    icon.addEventListener('click', function (e) {
        e.preventDefault();

        if (icon.dataset.open == dataOpen) {
            document.body.style.overflow = 'auto';
            overlay.innerHTML = '';
            overlay.style.display = 'none';
            icon.innerHTML = originalIcon;
            icon.removeAttribute(dataOpen);
        } else {
            document.body.style.overflow = 'hidden';
            var navigation = qs('.site-nav');
            
            overlay.innerHTML = navigation.outerHTML;
            overlay.className = 'overlay';
            overlay.style.display = 'block';
            icon.innerHTML = '×';
            document.body.appendChild(overlay);

            qs('a', overlay).focus();
            
            icon.setAttribute(dataOpen, dataOpen);
        }

        return false;
    });
}());