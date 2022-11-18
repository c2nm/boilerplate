export default class Page {
    constructor() {}

    async ready() {
        console.log('ready');
    }
    async load() {
        console.log('load');
    }

    static async readyOnce() {}
    static async loadOnce() {}
}
