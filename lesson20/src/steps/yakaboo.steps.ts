import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { YakabooPage } from '../pages/yakaboo-page.ts';
import { CustomWorld } from '../worlds/world.ts';

let yakaboo: YakabooPage;

Given('User opens Yakaboo homepage', async function (this: CustomWorld) {
    yakaboo = new YakabooPage(this.page);
    await yakaboo.openHomePage();
});

When('User searches for {string}', async function (this: CustomWorld, query: string) {
    await yakaboo.search(query);
});

Then('User should see at least one book in results containing {string}', async function (text: string) {
    const matching = yakaboo.resultCardWithUkraine.filter({
        hasText: text
    });
    await expect(matching.first()).toBeVisible();
});

When ('User hovers over the first book', async function () {
    await yakaboo.resultCardWithUkraine.first().hover();
});

When('User adds the first book to cart', async function () {
    await yakaboo.addFirstBookToCart();
});

When('User opens cart', async function () {
    await yakaboo.openCart();
});

Then('User should see cart sidebar', async function () {
    await expect(yakaboo.cartSidebar).toBeVisible();
});

Then('User should see book in cart', async function () {
    await expect(yakaboo.cartProductName).toBeVisible();
});
