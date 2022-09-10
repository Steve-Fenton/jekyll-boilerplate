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

/**
 * Sets the navigation based on the current page
 * @param {string} className 
 */
function setCurrentNavigationItem(className) {
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

setCurrentNavigationItem('details.sub-nav');

/**
 * Creates a mobile menu overlay
 * @param {string} iconSelector 
 * @param {string} navigationSelector 
 */
function addMobileNavigation(iconSelector, navigationSelector) {
    var icon = qs(iconSelector);
    var originalIcon = icon.innerHTML;
    var overlay = document.createElement('div');
    var dataOpen = 'data-open';

    function handleIconInteraction() {
        if (icon.dataset.open == dataOpen) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    }

    function openMobileMenu(){
        document.body.style.overflow = 'hidden';
        var navigation = qs(navigationSelector);
        
        overlay.innerHTML = navigation.outerHTML;
        overlay.className = 'overlay';
        overlay.style.display = 'block';
        icon.innerHTML = '×';
        document.body.appendChild(overlay);

        qs('a', overlay).focus();
        
        icon.setAttribute(dataOpen, dataOpen);
    }

    function closeMobileMenu() {
        document.body.style.overflow = 'auto';
        overlay.innerHTML = '';
        overlay.style.display = 'none';
        icon.innerHTML = originalIcon;
        icon.removeAttribute(dataOpen);
    }

    icon.addEventListener('click', function (e) {
        e.preventDefault();
        handleIconInteraction();
        return false;
    });

    document.addEventListener('resized', function () {
        closeMobileMenu();
    })
}

addMobileNavigation('.navigation-icon', '.site-nav');

/**
 * Makes an entire block clickable based on data-destination attribute
 * For example, the list-item elements in the article list
 */
function expandLinks() {
    var listItems = qsa('[data-destination]');

    for(var i = 0; i < listItems.length; i++) {
        var listItem = listItems[i];
        listItem.style.cursor = 'pointer';
        listItem.addEventListener('click', function (e) {
            e.preventDefault();
            document.location = /** @type {string} */ (this.dataset.destination);
            return false;
        });
    }
}

expandLinks();