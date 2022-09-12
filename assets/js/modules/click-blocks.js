// @ts-check

import { qsa } from './query.js';

/**
 * Makes an entire block clickable based on a data-attribute, usually "data-destination"
 * 
 * Example: You have a list of blog posts, including featured images. If you make the title
 * clickable, clicks on the image won't open the blog. Adding links to the images means
 * keyboard users have to tab twice as much to get through the list.
 * 
 * Use clickable blocks to allow keyboard users to tab through the real links, but still
 * capture clicks elsewhere on the block.
 * 
 * @param {string} dataAttributeName
 */
 function setClickableBlocks(dataAttributeName) {
    var listItems = qsa('[' + dataAttributeName + ']');

    for(var i = 0; i < listItems.length; i++) {
        var listItem = listItems[i];
        listItem.style.cursor = 'pointer';
        listItem.addEventListener('click', function (e) {
            var location = this.getAttribute(dataAttributeName);

            if (location) {
                e.preventDefault();
                document.location = location;
                return false;
            }
        });
    }
}

export { setClickableBlocks };