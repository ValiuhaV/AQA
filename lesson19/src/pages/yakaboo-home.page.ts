import { Page } from '@playwright/test';
import { HeaderComponent } from './header.component';
import { SideMenuComponent } from './side-menu.component';

export class YakabooHomePage {
    public readonly header: HeaderComponent;
    public readonly menu: SideMenuComponent;

    public constructor(public readonly page: Page) {
        this.header = new HeaderComponent(page);
        this.menu = new SideMenuComponent(page);
    }

    public async open(): Promise<void> {
        await this.page.goto('https://yakaboo.ua/');
    }
}
