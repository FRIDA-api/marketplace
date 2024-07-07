import { test, expect } from '@playwright/test';

test.describe('core', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/');
  });

  test('header', async ({ page }) => {
    await expect(page).toHaveTitle('Homepage - Marketplace - FRIDA');

    const catalogueSelector = page.getByRole('link', { name: 'API-Catalogue' });
    await expect(catalogueSelector).toBeVisible();
    await catalogueSelector.click();
    await expect(page).toHaveURL('http://localhost:4200/');

    const fridaSelector = page.getByAltText('Logo von FRIDA');
    await expect(fridaSelector).toBeVisible();
    await fridaSelector.click();
    await expect(page).toHaveURL('http://localhost:4200');
  });

  test('language switch', async ({ page }) => {
    const selectorTextDE = page.getByRole('link', { name: 'API-Katalog' });
    const selectorTextEN = page.getByRole('link', { name: 'API-Catalogue' });
    const selectorFlagDE = page.getByAltText('Flag of Germany');
    const selectorFlagEN = page.getByAltText('Flag of the USA');

    await expect(selectorTextDE).not.toBeVisible();
    await expect(selectorFlagDE).toBeVisible();
    await expect(selectorTextEN).toBeVisible();
    await expect(selectorFlagEN).not.toBeVisible();

    await page.getByLabel('Switch language to German').click();

    await expect(selectorTextDE).toBeVisible();
    await expect(selectorFlagDE).not.toBeVisible();
    await expect(selectorTextEN).not.toBeVisible();
    await expect(selectorFlagEN).toBeVisible();
  });

  test('footer', async ({ page }) => {
    await expect(
      page.getByRole('link', { name: 'www.freeinsurancedata.de' })
    ).toBeVisible();
    await expect(page.getByRole('link', { name: 'Imprint' })).toBeVisible();
    await expect(
      page.getByRole('link', { name: 'Data protection notice' })
    ).toBeVisible();
    await expect(
      page.getByRole('link', { name: 'FRIDA Statutes' })
    ).toBeVisible();
    await expect(
      page.getByText(
        '© Copyright 2024. all rights reserved. FRIDA e.V. c/o InsurLab Germany Hohenzollernring 85-87 50672 Cologne info@freeinsurancedata.de',
        { exact: true }
      )
    ).toBeVisible();
    await expect(
      page.getByRole('link', { name: 'Accessibility statement' })
    ).toBeVisible();
  });
});
