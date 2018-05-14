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
    }

    loadScripts()
    {
        // some libs need to be loaded dynamically and not concatenated via gulp
        return hlp.loadJs([
            tplurl+'/_plugins/library2/script.min.js'
        ]);    
    }
    
}