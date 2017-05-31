export default class Helpers {

    static fadeOut(el) {
        el.style.opacity = 1;
        (function fade() {
            if ((el.style.opacity -= .1) < 0) {
                el.style.display = "none";
            } else {
                requestAnimationFrame(fade);
            }
        })();
    }

    static fadeIn(el) {
        el.style.opacity = 0;
        el.style.display = "block";
        (function fade() {
            var val = parseFloat(el.style.opacity);
            if (!((val += .1) > 1)) {
                el.style.opacity = val;
                requestAnimationFrame(fade);
            }
        })();
    }

    static scrollTo(element, duration) {
        let to = (element.getBoundingClientRect().top + window.pageYOffset - document.documentElement.clientTop),
            from = ((document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop),
            by = (to-from),
            currentIteration = 0,
            animIterations = Math.round(60 * (duration/1000)); 
            console.log(to,from,by);
        (function scroll() {
            let value = Math.round(Helpers.easeInOutCirc(currentIteration, from, by, animIterations));
            document.documentElement.scrollTop = document.body.scrollTop = value;
            currentIteration++;
            if (currentIteration < animIterations) {
                requestAnimationFrame(scroll);
            }    
        })();
    }
    static linearEase(t, b, c, d) { return c * t / d + b; }
    static easeOutCubic(t, b, c, d) { return c * (Math.pow(t / d - 1, 3) + 1) + b; }
    static easeInOutCirc(t, b, c, d) { t /= d/2; if (t < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b; t -= 2; return c/2 * (Math.sqrt(1 - t*t) + 1) + b; };

}