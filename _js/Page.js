export default class Page {
    constructor() {}

    async ready() {
        console.log('ready');
        this.addTailwindCDN();
    }
    async load() {
        console.log('load');
    }

    static async readyOnce() {
        console.log('readyOnce');
    }
    static async loadOnce() {
        console.log('loadOnce');
    }

    addTailwindCDN() {
        if (window.location.host.includes('local') || window.location.host.includes('close2dev')) {
            let script = document.createElement('script');
            script.src = 'https://cdn.tailwindcss.com';
            document.head.appendChild(script);
        }
    }
}
