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

//Local
require('./scripts/helpers.js');

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

/*
 * scrollToAnchor - Targets all links with # anchor & adds smooth scrolling
 *
 */

let headerOffset = header.offsetHeight; //! SET Header

window.addEventListener("resize", function(){
    headerOffset = header.offsetHeight;
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        let offset = headerOffset,
            section = document.querySelector(anchor.getAttribute('href')),
            elementPosition = section.offsetTop,
            offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    });
});
