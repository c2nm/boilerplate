import Helpers from './_helpers';

export default class Class1 {

    constructor() {
        this.var1 = 'variable1';
        this.var2 = 'variable2';
    }

    static staticFunction() {
        alert('foo');
        Helpers.scrollTo(document.querySelector('footer'),1000);
    }

    dynamicFunction() {
        alert('bar');
    }
    
}