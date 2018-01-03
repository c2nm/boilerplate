import isMobile from 'ismobilejs';

export default class Helpers
{

    static isMobile()
    {
        // viewport width based and using isMobile library
        if( window.innerWidth < 750 || isMobile.phone ) { return true; }
        return false;
    }

    static isTablet()
    {
        return isMobile.tablet;   
    }

    static isTouch()
    {
        return 'ontouchstart' in window || navigator.maxTouchPoints;
    } 

    static isMobile()
    {
        return isMobile.phone;
    }

    static isTablet()
    {
        return isMobile.tablet;   
    }

    static isTouch()
    {
        return 'ontouchstart' in window || navigator.maxTouchPoints;
    }

    static fadeOut(el)
    {
        el.style.opacity = 1;
        (function fade()
        {
            if ((el.style.opacity -= .1) < 0)
            {
                el.style.display = "none";
            } else {
                requestAnimationFrame(fade);
            }
        })();
    }

    static fadeIn(el)
    {
        el.style.opacity = 0;
        el.style.display = "block";
        (function fade()
        {
            var val = parseFloat(el.style.opacity);
            if (!((val += .1) > 1))
            {
                el.style.opacity = val;
                requestAnimationFrame(fade);
            }
        })();
    }

    static scrollTo(element, duration)
    {
        let to = (element.getBoundingClientRect().top + window.pageYOffset - document.documentElement.clientTop),
            from = ((document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop),
            by = (to-from),
            currentIteration = 0,
            animIterations = Math.round(60 * (duration/1000)); 
            console.log(to,from,by);
        (function scroll()
        {
            let value = Math.round(Helpers.easeInOutCirc(currentIteration, from, by, animIterations));
            document.documentElement.scrollTop = document.body.scrollTop = value;
            currentIteration++;
            if (currentIteration < animIterations)
            {
                requestAnimationFrame(scroll);
            }    
        })();
    }
    static linearEase(t, b, c, d) { return c * t / d + b; }
    static easeOutCubic(t, b, c, d) { return c * (Math.pow(t / d - 1, 3) + 1) + b; }
    static easeInOutCirc(t, b, c, d) { t /= d/2; if (t < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b; t -= 2; return c/2 * (Math.sqrt(1 - t*t) + 1) + b; };


    static fixMobileHeightInit()
    {
        /* on apple devices fix height bug (https://nicolas-hoizey.com/2015/02/viewport-height-is-taller-than-the-visible-part-of-the-document-in-some-mobile-browsers.html) */
        if( Helpers.isMobile() || Helpers.isTablet() )
        {
            Helpers.fixMobileHeight();
            Helpers.onResizeHorizontal(Helpers.fixMobileHeight);
        }
    }
    static fixMobileHeight()
    {
        // do some manual work here
        document.querySelector('.full-height-item').style.height = window.innerHeight+'px';
    }

    static onResizeHorizontal(fun)
    {
        var windowWidth = window.innerWidth;
        window.addEventListener('resize', () =>
        {
            var windowWidthNew = window.innerWidth;
            if(windowWidthNew != windowWidth)
            {
                windowWidth = windowWidthNew;
                fun();
            }
        });
    }

    static onResizeVertical(fun)
    {
        var windowHeight = window.innerHeight;
        window.addEventListener('resize', () =>
        {
            var windowHeightNew = window.innerHeight;
            if(windowHeightNew != windowHeight)
            {
                windowHeight = windowHeightNew;
                fun();
            }
        });
    }

    static parseJson(string)
    {
        try
        {
            return JSON.parse(string);
        }
        catch(error)
        {
            return string;
        }
    }

    static get(url, success, error, throttle = 0)
    {
        let xhr = new XMLHttpRequest();
        xhr.onload = () =>
        { 
            setTimeout(() =>
            {
                if(xhr.readyState != 4 || xhr.status != 200)
                {
                    error([xhr.readyState, xhr.status, xhr.statusText]);
                }
                success(this.parseJson(xhr.responseText));
            }, throttle);
        }
        xhr.open( 'GET', url, true );            
        xhr.send( null );
    }

    static post(url, data, success, error, throttle = 0)
    {
        let xhr = new XMLHttpRequest();
        xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        xhr.onload = () =>
        {
            setTimeout(() =>
            {
                if(xhr.readyState != 4 || xhr.status != 200)
                {
                    error(this.parseJson(xhr.statusText));
                }
                success(xhr.responseText);
            }, throttle);
        }
        xhr.open( 'POST', url, true );
        xhr.send( JSON.stringify(data) );
    }

    static getWithPromise(url, throttle = 0)
    {
        return new Promise((resolve, reject) =>
        {
            this.get(url, (v) => { resolve(v); }, (v) => { reject(v); }, throttle);
        });
    }

    static postWithPromise(url, data, throttle = 0)
    {
        return new Promise((resolve, reject) =>
        {
            this.post(url, data, (v) => { resolve(v); }, (v) => { reject(v); }, throttle);
        });
    }

}