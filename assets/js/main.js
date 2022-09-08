/** Utility */
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

/* Sticky Navigation 
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
        var headerHeight = header.clientHeight;
        var navigationHeight = navigationList.clientHeight;
        
        if (navigationHeight < ((browserHeight - headerHeight) - buffer)) {
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