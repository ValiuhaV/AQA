import { Page, Locator } from '@playwright/test';

export class YakabooPage {
    public readonly page: Page;

    public constructor(page: Page) {
        this.page = page;
    }

    public get closeDialogIcon(): Locator {
        return this.page.locator('.cl-dialog-close-icon');
    }

    public get searchInput(): Locator {
        return this.page.locator('#search-input');
    }

    public get searchTips(): Locator {
        return this.page.locator('.search-results');
    }

    public get searchButton(): Locator {
        return this.page.locator('.ui-search-form-input button.ui-btn-primary');
    }

    public get resultCardWithUkraine(): Locator {
        return this.page.locator('.category-card.expanded .ui-card-title[title*="Україна"]');
    }

    public get addToCartButton(): Locator {
        return this.page.locator('[data-testid="addToCart"]');
    }

    public get cartButton(): Locator {
        return this.page.locator('#site-header button.ui-btn-shopping-cart');
    }

    public get cartSidebar(): Locator {
        return this.page.locator('[data-testid="microcart"]');
    }

    public get cartProductName(): Locator {
        return this.page.locator('[data-testid="sidebar"] .checkout-product-card .product-name');
    }
    public async openHomePage(): Promise<void> {
        await this.page.goto('https://yakaboo.ua/');

        if (await this.closeDialogIcon.isVisible()) {
            await this.closeDialogIcon.click();
        }
    }

    public async search(query: string): Promise<void> {
        await this.searchInput.fill(query);
        await this.searchTips.waitFor({ state: 'visible'});
        if (await this.closeDialogIcon.isVisible()) {
            await this.closeDialogIcon.click();
        }
        await this.searchButton.click();
    }

    public async addFirstBookToCart(): Promise<void> {
        await this.addToCartButton.first().click();
    }

    public async openCart(): Promise<void> {
        await this.cartButton.click();
    }
}
