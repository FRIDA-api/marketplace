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

  test('click use-case card', async ({ page}) => {
    const contentCard = page.getByRole('link', {name: 'PensionAPI'});
    await contentCard.click();
    await expect(page).toHaveURL('http://localhost:4200/pension-api')
  });
});
