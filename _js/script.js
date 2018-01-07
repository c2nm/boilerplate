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
window.onload = function()
{    
    //Class1.staticFunction();
}

/* Vue.js */
//import Vue from 'vue'; // import runtime only
import Vue from 'vue/dist/vue.js'; // import runtime+template compiler 
import App from '../_vue/App.js';
document.addEventListener('DOMContentLoaded', function()
{
const vue = new Vue({
    el: '#vue',
    template: '<App/>',
    components: { App }
});
});