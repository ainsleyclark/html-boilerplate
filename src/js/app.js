/**
 * app.js
 * All custom JS for theme stored here.
 * @author Ainsley Clark
 * @author URL:   https://www.ainsleyclark.com
 * @author Email: info@ainsleyclark.com
 */

/**
 * Require * Import
 * 
 */

//Vendor
import LazyLoad from 'vanilla-lazyload';

/**
 *  Comments
 * 
 */
console.log('Javascript Loaded');

/**
 * Vanilla Lazyload
 * 
 */
let lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy"
    // ... more custom settings?
});