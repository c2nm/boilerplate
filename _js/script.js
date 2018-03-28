import Helpers from './_helpers';
import Class1 from './_class1';

//Class1.staticFunction();
//let c = new Class1();
//c.dynamicFunction();
//alert(c.var1);

/* run on document ready */
document.addEventListener('DOMContentLoaded', function()
{
    //Helpers.fixMobileHeightInit();
    //Class1.staticFunction();
});

/* run on window load */
window.addEventListener('load', function(e)
{    
    //Class1.staticFunction();
}, false);

/* Vue.js */
//import Vue from 'vue'; // import runtime only
import Vue from 'vue/dist/vue.js'; // import runtime+template compiler 
import App from '../_vue/_build/App.js';
const vm = new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
});