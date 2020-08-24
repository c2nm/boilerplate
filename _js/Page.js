import hlp from 'hlp';
import hljs from 'highlight.js';

// this is how to import css from node module dependencies!
import 'highlight.js/styles/github.css';

export default class Page {
    var3 = 'this also works!';
    static var4 = 'this also!';

    constructor() {
        let _ = this;
        _.var1 = 'variable1';
        this.var2 = 'variable2';
    }

    async init() {
        await this.loadScripts();
        this.addEnvironment();
        this.initGoogleAnalytics();
        console.log( document.querySelector('#app').closest('body') );
        let foo = {};
        console.log( foo?.bar?.baz );
        foo = { bar: { baz: 'gnarr' } };
        console.log( foo?.bar?.baz );
    }

    async initOnLoad() {
        
    }

    loadScripts() {
        let tplurl = hlp.url(); // if wordpress, this is set in header
        // some libs need to be loaded dynamically and not concatenated via gulp
        //return hlp.loadJs([tplurl + '/bundle.js']);
    }

    addEnvironment() {
        document.documentElement.classList.add(hlp.getOs());
        document.documentElement.classList.add(hlp.getDevice());
        document.documentElement.classList.add(hlp.getBrowser());
    }

    initGoogleAnalytics() {
        // try to detect page speed insights and prevent analytics from being loaded
        if(navigator.userAgent.indexOf('Speed Insights') > -1 || (navigator.language === 'en-US' && navigator.platform.indexOf('Linux') > -1))
        {
            return;
        }

        let property = 'UA-12350231-1';

        /* opt out */
        let disableStr = 'ga-disable-' + property;
        if (document.cookie.indexOf(disableStr + '=true') > -1) {
            window[disableStr] = true;
        }
        document.addEventListener(
            'click',
            e => {
                if (e.target.tagName === 'A' && e.target.textContent === 'Google Analytics deaktivieren') {
                    alert('Google Analytics wurde deaktiviert');
                    document.cookie = disableStr + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
                    window[disableStr] = true;
                    e.preventDefault();
                }
            },
            true
        );

        /* tracking code */
        var script = null;
        script = document.createElement('script');
        script.src = 'https://www.googletagmanager.com/gtag/js?id=' + property;
        document.head.appendChild(script);
        script = document.createElement('script');
        script.innerHTML += 'window.dataLayer = window.dataLayer || [];';
        script.innerHTML += 'var gtag = function() { dataLayer.push(arguments); };';
        script.innerHTML += "gtag('js', new Date());";
        // send page view
        script.innerHTML += "gtag('config', '" + property + "', { 'anonymize_ip': true });";
        document.head.appendChild(script);
    }
}
