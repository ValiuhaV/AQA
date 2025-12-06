import { test, expect } from '@playwright/test';
import { YakabooPage } from '../src//pages/yakaboo-page';

test.describe('Yakaboo search and cart tests', () => {
    let yakaboo: YakabooPage;

    test.beforeEach(async ({ page }) => {
        yakaboo = new YakabooPage(page);
        await yakaboo.openHomePage();
    });

    test('Search results should show at least one card with word "Україна"', async () => {
        await yakaboo.search('Україна');
        await expect(yakaboo.resultCardWithUkraine).not.toHaveCount(0);
    });

    test('Book should be added to cart after clicking "Купити"', async () => {
        await yakaboo.search('Україна');

        await yakaboo.addFirstBookToCart();
        await yakaboo.openCart();

        await expect(yakaboo.cartSidebar).toBeVisible();
        await expect(yakaboo.cartProductName).toBeVisible();
    });
});

