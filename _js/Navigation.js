export default class Navigation {
    constructor() {
        this.breakpoint = 768;
        this.selectorChildren = '.menu-item.menu-item-has-children';
        this.classHover = 'hover';
    }

    async ready() {
        console.log('ready');
    }
    async load() {
        console.log('load');
        this.initOnLoad();
    }

    initOnLoad() {
        if (document.querySelector(this.selectorChildren) !== null) {
            document.querySelectorAll(this.selectorChildren).forEach(el => {
                el.addEventListener('touchstart', e => {
                    if (window.innerWidth >= this.breakpoint) {
                        if (!el.classList.contains(this.classHover)) {
                            e.preventDefault();
                            document.querySelectorAll(this.selectorChildren).forEach(el => {
                                el.classList.remove(this.classHover);
                            });
                            el.classList.add(this.classHover);
                        }
                    }
                });
                window.addEventListener('touchstart', e => {
                    if (!el.contains(e.target)) {
                        el.classList.remove(this.classHover);
                    }
                });
            });
        }
    }
}
