import { ChainablePromiseElement } from 'webdriverio';
import Page from './page';


class DataTablePage extends Page {

    public open () {
        return super.openGoogle();
    }
}

export default new DataTablePage();