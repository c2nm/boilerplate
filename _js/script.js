/* external packages */
import hlp from 'hlp';

/* internal classes */
import Page from './Page';

/* polyfills */
// we use "useBuiltIns": "usage" and have all es core features included
// however, there are cases where we need to import manual polyfill (since they are intentionally not included)
import 'whatwg-fetch'; // use fetch
import 'element-closest'; // closest polyfill
import 'mdn-polyfills/Node.prototype.remove'; // dom polyfill
/* ... */
// promise (150kb)
// included in corejs via builtins: usage
new Promise(resolve => {
    console.log('PROMISE RESOLVED');
    resolve();
});
// forEach (20kb)
// included in corejs via builtins: usage
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('div').forEach(() => {
        console.log('1');
    });
});
// fetch (50kb)
// this is missing in corejs (see https://github.com/zloirock/core-js), so we need a manual polyfill for this
fetch('http://httpbin.org/bytes/100').then(response => {
    console.log(response);
});
// remove (20kb)
// this is missing in corejs (see https://github.com/zloirock/core-js/issues/317#issuecomment-314691446), so we need a manual polyfill for this
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('br').remove();
});
/* end of polyfills */

/* if you embed your scripts with async, it is not guaranteed, that window load or document ready tirggers */
/* use this instead */
const ready = new Promise(resolve => {
    if (document.readyState !== 'loading') {
        return resolve();
    } else {
        document.addEventListener('DOMContentLoaded', () => {
            return resolve();
        });
    }
});
ready.then(() => {
    /* ... */
});

/* standard way */
const page = new Page();
document.addEventListener('DOMContentLoaded', () => {
    page.initOnReady();
    /* make publically available to run from outside for debugging purposes */
    window.app = page;
});

window.addEventListener('load', e => {
    page.initOnLoad();
});

/* when using the technique with loadCSS, use this instead */
hlp.waitUntil('.footer', 'position', 'relative').then(() => {});

/* Vue.js */
//import Vue from 'vue'; // import runtime only
import Vue from 'vue/dist/vue.js'; // import runtime+template compiler
import App from '../_vue/App.vue';
const vm = new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
});
