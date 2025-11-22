import { Page, Locator } from '@playwright/test';

export class YakabooPage {
    public readonly page: Page;
    public readonly closeDialogIcon: Locator;
    public readonly searchInput: Locator;
    public readonly searchTips: Locator;
    public readonly searchButton: Locator;
    public readonly resultCardWithUkraine: Locator;
    public readonly addToCartButton: Locator;
    public readonly cartButton: Locator;
    public readonly cartSidebar: Locator;
    public readonly cartProductName: Locator;

    public constructor(page: Page) {
        this.page = page;
        this.closeDialogIcon = page.locator('.cl-dialog-close-icon');
        this.searchTips = page.locator('.search-results');
        this.searchInput = page.locator('#search-input');
        this.searchButton = page.locator('.ui-search-form-input button.ui-btn-primary');
        this.resultCardWithUkraine = page.locator('.category-card.expanded .ui-card-title[title*="Україна"]');
        this.addToCartButton = page.locator('[data-testid="addToCart"]');
        this.cartButton = page.locator('#site-header button.ui-btn-shopping-cart');
        this.cartSidebar = page.locator('[data-testid="microcart"]');
        this.cartProductName = page.locator('[data-testid="sidebar"] .checkout-product-card .product-name');
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
        await this.searchButton.click();
    }

    public async addFirstBookToCart(): Promise<void> {
        await this.addToCartButton.first().click();
    }

    public async openCart(): Promise<void> {
        await this.cartButton.click();
    }
};
