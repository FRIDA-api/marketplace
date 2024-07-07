import {test, expect} from "@playwright/test";

test.describe('api-overview', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/pension-api');
  });

  test('show correct content', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1, name: 'Use-Case: Pension API' })).toBeVisible();
    await expect(page.getByText("Making pension assets accessible", { exact: true })).toBeVisible();
    await expect(page.getByText("Customer perspective", { exact: true })).toBeVisible();
    await expect(page.getByText("What can I actually expect in old age? How big is my pension gap?", { exact: true })).toBeVisible();
    await expect(page.getByText("Answering this question and focusing on it regularly means: paper receipts and a lot of effort to adapt my specially created overview every year.", { exact: true })).toBeVisible();
    await expect(page.getByText("How FRIDA solves the problem", { exact: true })).toBeVisible();
    await expect(page.getByText("The FRIDA PensionAPI enables third-party providers to make pension contract data transparently available to their users at any time.", { exact: true })).toBeVisible();
    await expect(page.getByText("Users decide for themselves which third-party service they use to aggregate their data.", { exact: true })).toBeVisible();
    await expect(page.getByText("Open Standard API", { exact: true })).toBeVisible();
    await expect(page.getByText("With the FRIDA API, all insurers speak the same language. Third-party providers can use this API to create services with annuity values.", { exact: true })).toBeVisible();
    await expect(page.getByText("Pension cockpit selection", { exact: true })).toBeVisible();
    await expect(page.getByText("As the end consumer, I decide on a pension cockpit of my choice and give it my consent for data access. However, other services can also be created here (e.g. digital estate).", { exact: true })).toBeVisible();
    await expect(page.getByText("All pension assets in one place", { exact: true })).toBeVisible();
    await expect(page.getByText("As a user of a pension cockpit, I can always keep an eye on my expected pension, identify gaps and actively manage my pension provision or seek advice from pension experts.", { exact: true })).toBeVisible();
  });

  test('should switch tabs', async ({ page }) => {
    const overviewTab = page.getByRole('tab', {name: 'Overview'});
    const apiDocumentationTab = page.getByRole('tab', {name: 'API Documentation'});

    await apiDocumentationTab.click();

    await expect(page.getByText("Customer perspective", { exact: true })).not.toBeVisible();
    await expect(page.locator('.swagger-ui')).toBeVisible();

    await overviewTab.click();

    await expect(page.getByText("Customer perspective", { exact: true })).toBeVisible();
    await expect(page.locator('.swagger-ui')).not.toBeVisible();
  });
});
