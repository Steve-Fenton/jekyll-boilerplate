// @ts-check

var resizeEventName = 'resize';
var resizedEventName = 'resized';

/**
 * Adds a de-bounced "resized" event, so you can listen to:
 * document.addEventListener('resized', <handler>);
 * @param {Window} global 
 * @param {Node} target
 * @returns {string}
 */
 function addResizedEvent(global, target) {
    var debounce = null;

    function resizeEnd() {
        global.clearTimeout(debounce);
        debounce = global.setTimeout(raiseEvent, 500);
    }

    function raiseEvent() {
        const resizeEndEvent = new CustomEvent(resizedEventName);
        target.dispatchEvent(resizeEndEvent);
    }

    global.addEventListener(resizeEventName, resizeEnd);

    return resizedEventName;
}

export { addResizedEvent };