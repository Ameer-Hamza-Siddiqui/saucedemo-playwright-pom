// fixtures/testSetup.js

import { test as base, expect } from '@playwright/test';
import BasePage from '../pages/BasePage.js';
import { attachScreenshotAfterEach } from '../utilities/screenshotUtil.js';

const APP_URL = 'https://www.saucedemo.com/';

// Custom Extended Test Fixture
export const test = base.extend({
  page: async ({ page }, use) => {
    // 1. Navigate to application landing page
    const basePage = new BasePage(page);
    await basePage.navigate(APP_URL);

    // 2. Ensure initial DOM element is ready
    await page.locator('#user-name').waitFor({
      state: 'visible',
      timeout: 10000
    });

    // 3. Handover execution to test runner
    await use(page);
  }
});

// AFTER EACH HOOK
test.afterEach(async ({ page }, testInfo) => {
  // Only trigger screenshot logic for UI-based tests containing a valid browser page
  if (page) {
    await attachScreenshotAfterEach(page, testInfo);
  }
});

export { expect };