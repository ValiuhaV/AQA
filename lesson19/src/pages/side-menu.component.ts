import { expect, Locator, Page } from '@playwright/test';

export class SideMenuComponent {
    public constructor(public readonly page: Page) {}

    public get menu(): Locator {
        return this.page.locator('.main-menu');
    }

    public get booksCategoriesButton(): Locator {
        return this.page.locator('span.ui-menu-title.main-nav-list__info');
    }

    public get booksCategoriesMenu(): Locator {
        return this.page.locator('.books-menu-sidebar');
    }

    public get closeButton(): Locator {
        return this.page.locator('.main-menu__top .ui-btn-close');
    }

    public async openBooksCategories(): Promise<void> {
        await this.booksCategoriesButton.click();
        await expect(this.booksCategoriesMenu).toBeVisible();
    }

    public async waitForOpen(): Promise<void> {
        await this.menu.waitFor({ state: 'visible' });
    }

    public async waitForClose(): Promise<void> {
        await this.menu.waitFor({ state: 'hidden' });
    }
}

