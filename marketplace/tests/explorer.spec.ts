import { test, expect } from '@playwright/test';

test.describe('explorer', () => {

  test('no api selected', async ({ page }) => {
    await page.goto('http://localhost:4200/api-explorer/');
    await expect(page.getByText('This page shows the OpenAPI specifications of the different insurance APIs. To show one specification please select one on the left.', { exact: true })).toBeVisible();
  });

  test('frida pension api selected', async ({ page }) => {
    await page.goto('http://localhost:4200/api-explorer/pension-api');
    await expect(page.getByRole('heading', { name: 'FRIDA PensionSerivce'})).toBeVisible();
    await expect(page.getByRole('link', { name: '/assets/api/FRIDA_PensionInformation_OA3_full_en.yaml' })).toBeVisible();
  });

});


