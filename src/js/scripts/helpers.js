/**
 * helpers.js
 * Vanilla JS helpers.
 * @author Ainsley Clark
 * @author URL:   https://www.ainsleyclark.com
 * @author Email: info@ainsleyclark.com
 */

/**
 * Query Selector
 * Usage: $('.classes'), $1('.classname')
 * 
 */

// Select a list of matching elements, context is optional
const $ = (selector, context) => (context || document).querySelectorAll(selector);


// Select the first match only, context is optional
const $1 = (selector, context) => (context || document).querySelector(selector);

/**
 * Get Siblings
 * 
 */

const getSiblings = (el, filter) => {
    var siblings = [];
    el = el.parentNode.firstChild;
    do { if (!filter || filter(el)) siblings.push(el); } while (el = el.nextSibling);
    return siblings;
}