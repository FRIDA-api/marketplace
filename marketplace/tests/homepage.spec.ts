import { test, expect } from '@playwright/test';

test.describe('homepage', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/');
  });

  test('has api information', async ({ page }) => {
    await expect(page.getByText('The FRIDA use case focuses on the provision of data for transparency in retirement provision, e.g. using a pension cockpit', { exact: true })).toBeVisible();
    await expect(page.getByText('The FRIDA use case focuses on use cases in the healthcare sector, e.g. integrated contract and benefit management', { exact: true })).toBeVisible();
    await expect(page.getByText('The FRIDA use case focuses on the exchange of insurance data in the event of a claim, e.g. via wallet', { exact: true })).toBeVisible();
    await expect(page.getByText('The FRIDA use case focuses on use cases in the context of cyber insurance, e.g. the standardization of key risk indicators and data exchange between third-party providers and insurers', { exact: true })).toBeVisible();
    await expect(page.getByText('Choose the Mailbox of your choices for receiving our insurance related Documents', { exact: true })).toBeVisible();
    await expect(page.getByText('Get all insurance relevant Data for your Building and add them with Data from external sources', { exact: true })).toBeVisible();
  });

  test('has download information', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'https://github.com/FRIDA-api/FRIDA-car' })).toBeVisible();
  });

});
