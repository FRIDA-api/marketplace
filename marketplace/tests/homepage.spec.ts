import { test, expect } from '@playwright/test';

test.describe('homepage', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/');
  });

  test('show use-case cards', async ({ page}) => {
    await expect(page.locator('.use-case-card-container').getByRole('heading')).toHaveCount(7);
    await expect(page.locator('.use-case-card-container').getByRole('paragraph')).toHaveCount(7);
    await expect(page.locator('.use-case-card-container').getByRole('link')).toHaveCount(7);
  });

  test('has download information', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'https://github.com/FRIDA-api/FRIDA-car' })).toBeVisible();
  });

});
