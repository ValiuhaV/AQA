import { Locator, Page } from '@playwright/test';

export class HeaderComponent {
    public constructor(public readonly page: Page) {}

    public get menuButton(): Locator {
        return this.page.locator('.ui-btn-double-line');
    }

    public async openMenu(): Promise<void> {
        await this.menuButton.click();
    }
}
