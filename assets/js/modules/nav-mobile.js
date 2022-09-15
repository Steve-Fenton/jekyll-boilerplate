// @ts-check

import { qs, qsa } from './query.js';
import { getFocusableElement, trapFocusForward, trapReverseFocus } from './focus.js';

/**
 * Provides an overlay with the navigation for mobile users.
 * 
 * Example: You have site navigation on the page, but demote it (closer to the footer) on mobile to avoid
 * the content being pushed below the fold. You provide an icon that bookmarks to the
 * navigation.
 * 
 * The mobile navigation intercepts the bookmark link and opens the navigation in a modal
 * overlay, trapping keyboard focus until the overlay is closed.
 * 
 * @param {string} iconSelector 
 * @param {string} navigationSelector 
 */
 function addMobileNavigation(iconSelector, navigationSelector, resizedEventName) {
    var icon = qs(iconSelector);
    var originalIcon = icon.innerHTML;
    var overlay = document.createElement('div');
    var dataOpen = 'data-open';

    icon.addEventListener('keydown', function(e) { 
        if (icon.getAttribute(dataOpen) === dataOpen) {
            var focusElements = getFocusableElement(overlay);
            trapFocusForward(e, focusElements.first); 
            trapReverseFocus(e, focusElements.last);
        }
    });

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

        var ids = qsa('[id]', overlay);

        for (var i = 0; i < ids.length; i++) {
            ids[i].id = 'overlay__' + ids[i].id;
        }

        // Modal Accessibility
        var title = qs('.site-nav-title', overlay);
        title.setAttribute('id', 'modal-title');
        title.setAttribute('tabindex', '-1');
        overlay.setAttribute('role', 'dialog');
        overlay.setAttribute('aria-modal', 'true');
        overlay.setAttribute('aria-labelledby', 'modal-title');

        // Trap Focus to Visible Overlay
        var focusElements = getFocusableElement(overlay);

        focusElements.first.addEventListener('keydown', function(e) {
            trapReverseFocus(e, icon);
        })
        focusElements.last.addEventListener('keydown', function(e) { 
            trapFocusForward(e, icon); 
        });

        icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" 
            width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" 
            fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
            </svg>`;

        document.body.appendChild(overlay);
        icon.setAttribute(dataOpen, dataOpen);
        title.focus();
    }

    function closeMobileMenu() {
        document.body.style.overflow = 'auto';

        if (icon.getAttribute(dataOpen) === dataOpen) {
            overlay.innerHTML = '';
            overlay.style.display = 'none';
            document.body.removeChild(overlay);
        }

        icon.innerHTML = originalIcon;
        icon.removeAttribute(dataOpen);
    }

    icon.addEventListener('click', function (e) {
        e.preventDefault();
        handleIconInteraction();
        return false;
    });

    document.addEventListener(resizedEventName, function () {
        closeMobileMenu();
    })
}

export { addMobileNavigation };