import hlp from 'hlp';

export default class Class1 {

    constructor() {
        this.var1 = 'variable1';
        this.var2 = 'variable2';
    }

    static staticFunction() {
        alert('foo');
        //hlp.scrollTo(document.querySelector('footer'),1000);
    }

    dynamicFunction() {
        alert('bar');
    }
    
}

/* make publically available to run from outside for debugging purposes */
window.Class1 = Class1;