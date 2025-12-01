import { Before, After } from '@cucumber/cucumber';
import { CustomWorld } from '../worlds/world.ts';
import { chromium } from 'playwright';

Before(async function () {
    CustomWorld.browser = await chromium.launch({
        headless: false
    });
    this.page = await CustomWorld.browser.newPage();
});

After(async function () {
    await this.page.close();
    CustomWorld.browser.close();
});
