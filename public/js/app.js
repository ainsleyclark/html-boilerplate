function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==_typeof(t)&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=1)}([function(t,e,n){var o,r,a;function i(){return(i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function s(t){return(s="function"==typeof Symbol&&"symbol"==_typeof(Symbol.iterator)?function(t){return _typeof(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof(t)})(t)}a=function(){"use strict";var t="undefined"!=typeof window,e=t&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),n=t&&"IntersectionObserver"in window,o=t&&"classList"in document.createElement("p"),r={elements_selector:"img",container:e||t?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_poster:"poster",class_loading:"loading",class_loaded:"loaded",class_error:"error",load_delay:0,auto_unobserve:!0,callback_enter:null,callback_exit:null,callback_reveal:null,callback_loaded:null,callback_error:null,callback_finish:null,use_native:!1},a=function(t,e){var n,o=new t(e);try{n=new CustomEvent("LazyLoad::Initialized",{detail:{instance:o}})}catch(t){(n=document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized",!1,!1,{instance:o})}window.dispatchEvent(n)},s=function(t,e){return t.getAttribute("data-"+e)},c=function(t,e,n){var o="data-"+e;null!==n?t.setAttribute(o,n):t.removeAttribute(o)},l=function(t){return"true"===s(t,"was-processed")},u=function(t,e){return c(t,"ll-timeout",e)},f=function(t){return s(t,"ll-timeout")},d=function(t,e,n,o){t&&(void 0===o?void 0===n?t(e):t(e,n):t(e,n,o))},_=function(t,e){t.loadingCount+=e,0===t._elements.length&&0===t.loadingCount&&d(t._settings.callback_finish,t)},v=function(t){for(var e,n=[],o=0;e=t.children[o];o+=1)"SOURCE"===e.tagName&&n.push(e);return n},p=function(t,e,n){n&&t.setAttribute(e,n)},b=function(t,e){p(t,"sizes",s(t,e.data_sizes)),p(t,"srcset",s(t,e.data_srcset)),p(t,"src",s(t,e.data_src))},y={IMG:function(t,e){var n=t.parentNode;n&&"PICTURE"===n.tagName&&v(n).forEach(function(t){b(t,e)}),b(t,e)},IFRAME:function(t,e){p(t,"src",s(t,e.data_src))},VIDEO:function(t,e){v(t).forEach(function(t){p(t,"src",s(t,e.data_src))}),p(t,"poster",s(t,e.data_poster)),p(t,"src",s(t,e.data_src)),t.load()}},m=function(t,e){o?t.classList.add(e):t.className+=(t.className?" ":"")+e},g=function(t,e){o?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\s+)"+e+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},h=function(t,e,n){t.addEventListener(e,n)},E=function(t,e,n){t.removeEventListener(e,n)},w=function(t,e,n){E(t,"load",e),E(t,"loadeddata",e),E(t,"error",n)},S=function(t,e,n){var o=n._settings,r=e?o.class_loaded:o.class_error,a=e?o.callback_loaded:o.callback_error,i=t.target;g(i,o.class_loading),m(i,r),d(a,i,n),_(n,-1)},O=["IMG","IFRAME","VIDEO"],I=function(t,e){var n=e._observer;A(t,e),n&&e._settings.auto_unobserve&&n.unobserve(t)},k=function(t){var e=f(t);e&&(clearTimeout(e),u(t,null))},A=function(t,e,n){var o=e._settings;!n&&l(t)||(O.indexOf(t.tagName)>-1&&(function(t,e){var n=function n(r){S(r,!0,e),w(t,n,o)},o=function o(r){S(r,!1,e),w(t,n,o)};!function(t,e,n){h(t,"load",e),h(t,"loadeddata",e),h(t,"error",n)}(t,n,o)}(t,e),m(t,o.class_loading)),function(t,e){var n,o,r=e._settings,a=t.tagName,i=y[a];if(i)return i(t,r),_(e,1),void(e._elements=(n=e._elements,o=t,n.filter(function(t){return t!==o})));!function(t,e){var n=s(t,e.data_src),o=s(t,e.data_bg);n&&(t.style.backgroundImage='url("'.concat(n,'")')),o&&(t.style.backgroundImage=o)}(t,r)}(t,e),function(t){c(t,"was-processed","true")}(t),d(o.callback_reveal,t,e),d(o.callback_set,t,e))},L=function(t){return!!n&&(t._observer=new IntersectionObserver(function(e){e.forEach(function(e){return function(t){return t.isIntersecting||t.intersectionRatio>0}(e)?function(t,e,n){var o=n._settings;d(o.callback_enter,t,e,n),o.load_delay?function(t,e){var n=e._settings.load_delay,o=f(t);o||(o=setTimeout(function(){I(t,e),k(t)},n),u(t,o))}(t,n):I(t,n)}(e.target,e,t):function(t,e,n){var o=n._settings;d(o.callback_exit,t,e,n),o.load_delay&&k(t)}(e.target,e,t)})},{root:(e=t._settings).container===document?null:e.container,rootMargin:e.thresholds||e.threshold+"px"}),!0);var e},x=["IMG","IFRAME"],z=function(t,e){return function(t){return t.filter(function(t){return!l(t)})}((n=t||function(t){return t.container.querySelectorAll(t.elements_selector)}(e),Array.prototype.slice.call(n)));var n},M=function(e,n){var o;this._settings=i({},r,e),this.loadingCount=0,L(this),this.update(n),o=this,t&&window.addEventListener("online",function(t){!function(t){var e=t._settings;e.container.querySelectorAll("."+e.class_error).forEach(function(t){g(t,e.class_error),function(t){c(t,"was-processed",null)}(t)}),t.update()}(o)})};return M.prototype={update:function(t){var n,o=this,r=this._settings;this._elements=z(t,r),!e&&this._observer?(r.use_native&&"loading"in HTMLImageElement.prototype&&((n=this)._elements.forEach(function(t){-1!==x.indexOf(t.tagName)&&(t.setAttribute("loading","lazy"),A(t,n))}),this._elements=z(t,r)),this._elements.forEach(function(t){o._observer.observe(t)})):this.loadAll()},destroy:function(){var t=this;this._observer&&(this._elements.forEach(function(e){t._observer.unobserve(e)}),this._observer=null),this._elements=null,this._settings=null},load:function(t,e){A(t,this,e)},loadAll:function(){var t=this;this._elements.forEach(function(e){I(e,t)})}},t&&function(t,e){if(e)if(e.length)for(var n,o=0;n=e[o];o+=1)a(t,n);else a(t,e)}(M,window.lazyLoadOptions),M},"object"===s(e)&&void 0!==t?t.exports=a():void 0===(r="function"==typeof(o=a)?o.call(e,n,e,t):o)||(t.exports=r)},function(t,e,n){n(2),t.exports=n(4)},function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o);n(3),console.log("Javascript Loaded"),new r.a({elements_selector:".lazy"});var a=header.offsetHeight;window.addEventListener("resize",function(){a=header.offsetHeight}),document.querySelectorAll('a[href^="#"]').forEach(function(t){t.addEventListener("click",function(e){e.preventDefault();var n=a,o=document.querySelector(t.getAttribute("href")).offsetTop-n;window.scrollTo({top:o,behavior:"smooth"})})})},function(t,e){},function(t,e){}]);
