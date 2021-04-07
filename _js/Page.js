import hlp from 'hlp';
import hljs from 'highlight.js';

// this is how to import css from node module dependencies
import 'highlight.js/styles/github.css';

export default class Page {
    var3 = 'this also works!';
    static var4 = 'this also!';

    constructor() {
        let _ = this;
        _.var1 = 'variable1';
        this.var2 = 'variable2';
    }

    async initOnReady() {
        await this.loadScripts();
        this.addEnvironment();
        console.log(document.querySelector('#app').closest('body'));
        let foo = {};
        console.log(foo?.bar?.baz);
        foo = { bar: { baz: 'gnarr' } };
        console.log(foo?.bar?.baz);
        // test tailwind safelist
        document.querySelector('#app + div').classList.add('sticky');
    }

    async initOnLoad() {}

    loadScripts() {
        // try to detect page speed insights and delay loading of scripts
        if (
            navigator.userAgent.indexOf('Speed Insights') > -1 ||
            (navigator.language === 'en-US' && navigator.platform.indexOf('Linux') > -1)
        ) {
            //return;
        }
        let tplurl = hlp.url(); // if wordpress, this is set in header
        // some libs need to be loaded dynamically and not concatenated via gulp
        //return hlp.loadJs([tplurl + '/bundle.js']);
    }

    addEnvironment() {
        document.documentElement.classList.add(hlp.getOs());
        document.documentElement.classList.add(hlp.getDevice());
        document.documentElement.classList.add(hlp.getBrowser());
    }
}
