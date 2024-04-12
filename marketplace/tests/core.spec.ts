import { test, expect } from '@playwright/test';

test.describe('core', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:4200/');
    });

    test('header', async ({ page }) => {
        await expect(page).toHaveTitle('Marketplace');

        const catalogueSelector = page.getByRole('link', { name: 'API-Catalogue'})
        await expect(catalogueSelector).toBeVisible();
        await catalogueSelector.click();
        await expect(page).toHaveURL('http://localhost:4200/');

        const fridaSelector = page.getByAltText('Logo von FRIDA')
        await expect(fridaSelector).toBeVisible();
        await fridaSelector.click();
        await expect(page).toHaveURL('http://localhost:4200');
      });

      test('footer', async ({ page }) => {
        await expect(page.getByText('© Copyright 2023. all rights reserved. FRIDA e.V. c/o InsurLab Germany Hohenzollernring 85-87 50672 Cologne info@freeinsurancedata.de', { exact: true })).toBeVisible();
      });
})
