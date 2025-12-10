This project contains automated UI tests for yakaboo.ua using Playwright and the Page Object Model

Structure

src/pages/yakaboo-page.ts — Page Object with locators and page actions

tests/yakaboo.spec.ts — Test suite for search and cart functionality

Run tests

Install dependencies and run tests:

npm install
npx playwright test

✅ Covered scenarios

Search results show at least one item containing "Україна"

A book can be added to the cart and appears in the sidebar