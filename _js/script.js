import hlp from 'hlp';
import Page from './Page';
import '@babel/polyfill/noConflict'; // use Array.includes etc. in IE11
import 'whatwg-fetch'; // use fetch
import 'element-closest'; // closest polyfill

/* if you embed your scripts with async, it is not guaranteed, that window load or document ready tirggers */
/* use this instead */
const ready = new Promise((resolve) =>
{
    if (document.readyState !== 'loading') { return resolve(); }
    else { document.addEventListener('DOMContentLoaded', () => { return resolve(); }); }
});
ready.then(() => {
    /* ... */
});

document.addEventListener('DOMContentLoaded', () => {
    const page = new Page();
    page.init();
    /* make publically available to run from outside for debugging purposes */
    window.app = page;
});

window.addEventListener('load', e => {}, false);
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
