import hlp from 'hlp';

export default class Class1
{

    constructor()
    {
        this.var1 = 'variable1';
        this.var2 = 'variable2';
    }

    async init()
    {
        await this.loadScripts();
        this.addEnvironment();
        this.initGoogleAnalytics();
    }

    loadScripts()
    {
        // some libs need to be loaded dynamically and not concatenated via gulp
        return hlp.loadJs([
            tplurl+'/_plugins/library2/script.min.js'
        ]);    
    }

    addEnvironment()
    {
        document.documentElement.classList.add(hlp.getOs());
        document.documentElement.classList.add(hlp.getDevice());
        document.documentElement.classList.add(hlp.getBrowser());    
    }

    initGoogleAnalytics()
    {
        if(navigator.userAgent.indexOf('Speed Insights') > -1)
        {
            return;
        }

        let property = 'UA-12350231-1';

        /* opt out */
        let disableStr = 'ga-disable-'+property;
        if( document.cookie.indexOf(disableStr + '=true') > -1 )
        {
            window[disableStr] = true;
        }
        document.addEventListener('click', (e) =>
        {
            if( e.target.tagName === 'A' && e.target.textContent === 'Google Analytics deaktivieren' )
            {
                alert('Google Analytics wurde deaktiviert');
                document.cookie = disableStr + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/'; window[disableStr] = true;
                e.preventDefault();
            }
        }, true);

        /* tracking code */
        var script = null;        
        script = document.createElement('script');
        script.src = 'https://www.googletagmanager.com/gtag/js?id='+property;
        document.head.appendChild(script);
        script = document.createElement('script');
        script.innerHTML += 'window.dataLayer = window.dataLayer || [];';
        script.innerHTML += 'var gtag = function() { dataLayer.push(arguments); };';
        script.innerHTML += 'gtag(\'js\', new Date());';
        // send page view
        script.innerHTML += 'gtag(\'config\', '+property+', { \'anonymize_ip\': true });';
        document.head.appendChild(script);
    }
    
}