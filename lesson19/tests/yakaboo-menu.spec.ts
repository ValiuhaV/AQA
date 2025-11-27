import { test, expect } from '../fixtures/yakaboo-fixture';

test.describe('Yakaboo menu tests', () => {
    test.beforeEach(async ({ yakaboo }) => {
        await yakaboo.header.openMenu();
        await yakaboo.menu.waitForOpen();
    });

    test('Sidebar opens when clicking menu button', async ({ yakaboo }) => {
        await expect(yakaboo.menu.menu).toBeVisible();
    });

    test('Books categories menu opens and contains expected items', async ({ yakaboo }) => {
        await yakaboo.menu.openBooksCategories();

        const expectedCategories = ['Всі', 'Паперові', 'Електронні', 'Аудіо'];

        const items = yakaboo.menu.booksCategoriesMenu.locator('.ui-btn-simple');

        const actual = await items.allInnerTexts();
        expect(actual).toEqual(expectedCategories);
    });

    test('Sidebar closes when clicking close button', async ({ yakaboo }) => {
        await yakaboo.menu.closeButton.click();
        await yakaboo.menu.waitForClose();
    });
});
