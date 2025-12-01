import { IWorldOptions, World } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page } from 'playwright';
import { YakabooPage } from 'src/pages/yakaboo-page';

export class CustomWorld extends World {
    public static globalContext: Map<string, unknown> = new Map<string, unknown> ();

    // we can create a context class that will have its set and get methods for better readability
    public scenarioContext: Map<string, unknown>;

    public static browser: Browser;
    public context: BrowserContext;
    public page: Page;

    public get browser(): Browser {
        return CustomWorld.browser;
    }

    public get globalContext(): Map<string, unknown> {
        return CustomWorld.globalContext;
    }

    // pages
    public _YakabooPage: YakabooPage;

    public constructor(options: IWorldOptions) {
        super(options);
        this.scenarioContext = new Map<string, unknown>();
    }
}

export default CustomWorld;
