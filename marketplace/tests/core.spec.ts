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

        const explorerSelector = page.getByRole('link', { name: 'API-Explorer'})
        await expect(explorerSelector).toBeVisible();
        await explorerSelector.click();
        await expect(page).toHaveURL('http://localhost:4200/api-explorer/');

        const fridaSelector = page.getByAltText('Logo von FRIDA')
        await expect(fridaSelector).toBeVisible();
        await fridaSelector.click();
        await expect(page).toHaveURL('http://localhost:4200');
      });

      test('footer', async ({ page }) => {
        await expect(page.getByRole('link', {name: "www.freeinsurancedata.de"})).toBeVisible();
        await expect(page.getByRole('link', {name: "Imprint"})).toBeVisible();
        await expect(page.getByRole('link', {name: "Data protection notice"})).toBeVisible();
        await expect(page.getByRole('link', {name: "Change privacy settings"})).toBeVisible();
        await expect(page.getByRole('link', {name: "FRIDA Statutes"})).toBeVisible();
        await expect(page.getByText('© Copyright 2023. all rights reserved. FRIDA e.V. c/o InsurLab Germany Hohenzollernring 85-87 50672 Cologne info@freeinsurancedata.de', { exact: true })).toBeVisible();
      });
})
