import { test as base } from '@playwright/test';
import { YakabooHomePage } from '../src/pages/yakaboo-home.page.js';

export const test = base.extend<{ yakaboo: YakabooHomePage }>({
    yakaboo: async ({ page }, use) => {
        const home = new YakabooHomePage(page);
        await home.open();
        await use(home);
    }
});

export { expect } from '@playwright/test';
