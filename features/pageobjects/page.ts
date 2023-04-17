/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    public open (path: string) {
        let browserInstance = browser.url(`https://the-internet.herokuapp.com/${path}`)
        browser.maximizeWindow();
        return browserInstance;

    }

    public openGoogle(){
        let browserInstance = browser.url(`https//:www.google.com`)
        browser.maximizeWindow();
        return browserInstance;

    }

    public waitUntilElementVisible(elem:any, desiredText:string, errorMessage:string){
         elem.waitUntil(async function(){
            console.error(await this.getText);
            return (await this.getText())== desiredText
        },{
            timeout: 15000,
            timeoutMsg: errorMessage
        })
    }

    public waitUtillElementVisible(elem:any): any{
        browser.waitUntil(async function(){
            const elm = await elem
            if(elm.length()==1){
                return elm;
            }else if(elm.length() >1){
                console.error('Found multiple elements but desired exactly one')
            }
            return elem;
        },{
            timeoutMsg:"Element not found for locator "+elem
        })
    }
}
