import { test, expect } from '@playwright/test';

test.describe('homepage', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/');
  });



  test('has download information', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'https://github.com/FRIDA-api/FRIDA-car' })).toBeVisible();
  });

});
