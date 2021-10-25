/* external packages */
import hlp from 'hlp';

/* internal classes */
import Page from './Page';
import Module from './Module';

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
/* use this instead of the original functions */
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
const load = new Promise(resolve => {
    if (document.readyState === 'complete') {
        return resolve();
    } else {
        window.addEventListener('load', () => {
            return resolve();
        });
    }
});
load.then(() => {
    /* ... */
});

/* standard way */
const page = new Page();
document.addEventListener('DOMContentLoaded', () => {
    page.ready();
    /* make publically available to run from outside for debugging purposes */
    window.app = page;
});

window.addEventListener('load', e => {
    page.load();
});

/* modular way */
// singletons
[Page].forEach(classes__value => {
    // for convenience we use dynamic instead of static functions
    let c = new classes__value();
    if (typeof c.ready === 'function') {
        hlp.ready().then(() => {
            c.ready();
        });
    }
    if (typeof c.load === 'function') {
        hlp.load().then(() => {
            c.load();
        });
    }
});
// components
[[Module, 'Module']].forEach(classes__value => {
    hlp.runForEl(classes__value[0].selector, $el => {
        let c = new classes__value[0]($el);
        if (typeof c.ready === 'function') {
            hlp.ready().then(() => {
                c.ready();
            });
        }
        if (typeof c.load === 'function') {
            hlp.load().then(() => {
                c.load();
            });
        }
        // also add it to the dom element (for an implicit event bus for communication between classes); call via $0.Module
        // we cannot use c.constructor.name here, because minification would break!
        $el[classes__value[1]] = c;
    });
    // allow classes to also have static functions (these are only called ONCE overall)
    hlp.ready().then(() => {
        if (typeof classes__value[0].readyOnce === 'function') {
            classes__value[0].readyOnce();
        }
    });
    hlp.load().then(() => {
        if (typeof classes__value[0].loadOnce === 'function') {
            classes__value[0].loadOnce();
        }
    });
});
// routes
[[RouteX, 'RouteX']].forEach((classes__value) => {
    if (new RegExp(window.location.pathname).test(classes__value[0].route) === false) {
        return;
    }
    // for convenience we use dynamic instead of static functions
    let c = new classes__value[0]();
    if (typeof c.ready === 'function') {
        hlp.ready().then(() => {
            c.ready();
        });
    }
    if (typeof c.load === 'function') {
        hlp.load().then(() => {
            c.load();
        });
    }
});


/* when using the technique with loadCSS, use this instead */
hlp.waitUntil('footer', 'position', 'relative').then(() => {
    console.log('DONE');
});

/* Vue.js */
//import Vue from 'vue'; // import runtime only
import Vue from 'vue/dist/vue.js'; // import runtime+template compiler
import App from '../_vue/App.vue';
const vm = new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
});

/* React */
const MyComponent = () => {
    return (
        <div>
            <button type="button">Click me</button>
            <p>Hello</p>
        </div>
    );
};
console.log(MyComponent);
