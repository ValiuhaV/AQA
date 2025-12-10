import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto(process.env.BASE_URL || 'http://localhost:3000');
});

test('Should add new transaction', async ({ page }) => {

  await page.getByPlaceholder('Detail of Transaction').fill('Test transaction');
  await page.getByPlaceholder('Dollar Value of Transaction').fill('500');

  await page.getByRole('button', { name: 'Add Transaction' }).click();

  const newTransaction = page.locator('text=Test transaction');

  await expect(newTransaction).toBeVisible();
  await expect(newTransaction).toContainText('+$500');
});


test('Should delete added transaction', async ({ page }) => {

  await page.getByPlaceholder('Detail of Transaction').fill('Test transaction2');
  await page.getByPlaceholder('Dollar Value of Transaction').fill('150');
  await page.getByRole('button', { name: 'Add Transaction' }).click();

  const row = page.locator('text=Test transaction2');
  await expect(row).toBeVisible();

  await row.hover();

  const deleteBtn = row.getByRole('button', { name: 'X' });
  await expect(deleteBtn).toBeVisible();

  await deleteBtn.click();

  await expect(row).not.toBeVisible();
});
