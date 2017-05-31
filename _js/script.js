import Class1 from './_class1';

Class1.staticFunction();

let c = new Class1();
c.dynamicFunction();
alert(c.var1);

/* run on document ready */
document.addEventListener("DOMContentLoaded", function() {
    Class1.staticFunction();
});
/* run on window load */
window.onload = function() {    
    Class1.staticFunction();
}
/* make publically available to run from outside */
window.Class1 = Class1;