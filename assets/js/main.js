/** Utility Functions */
(function(){
    var debounce = null;

    function resizeEnd() {
        window.clearTimeout(debounce);
        debounce = window.setTimeout(raiseEvent, 500);
    }

    function raiseEvent() {
        const resizeEndEvent = new CustomEvent('resized');
        document.dispatchEvent(resizeEndEvent);
    }

    window.addEventListener('resize', resizeEnd);
}());

/*
Sticky Navigation 

    Depends on
        .site-header
        .site-nav
        .site-nav > ul
*/
(function() {
    function setNavigationMode() {
        var header = document.querySelector('.site-header');
        var navigation = document.querySelector('.site-nav');
        var navigationList = document.querySelector('.site-nav > ul'); 
        
        var buffer = 50;
        var className = 'sticky';

        var browserHeight = isNaN(window.innerHeight) ? window.clientHeight : window.innerHeight;
        var browserWidth = isNaN(window.innerWidth) ? window.clientWidth : window.innerWidth;
        var headerHeight = header.clientHeight;
        var navigationHeight = navigationList.clientHeight;
        
        // Only enable sticky mode if the menu will fit vertically
        // && where the browser is more than 860px wide
        if (navigationHeight < ((browserHeight - headerHeight) - buffer)
            && browserWidth > 860) {
            console.log('Navigation: Sticky Mode');
            navigation.classList.add(className)
            navigation.style.top = headerHeight.toString() + 'px';
        } else {
            console.log('Navigation: Fixed Mode');
            navigation.classList.remove('sticky');
        }
    }

    setNavigationMode();
    document.addEventListener('resized', setNavigationMode);
    
}());

/*
Auto-Open Current Navigation 

    Depends on
        details.sub-nav
*/
(function() {
    var summaries = document.querySelectorAll('details.sub-nav');
    var site = document.location.origin;
    var location = document.location.pathname;

    for (var i = 0; i < summaries.length; i++) {
        var summary = summaries[i];
        var anchor = summary.querySelector('a').href.replace(site, '');

        if (location.startsWith(anchor)){
            summary.setAttribute('open', 'open');
        }
    }
}());