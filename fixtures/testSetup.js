// fixtures/testSetup.js

import { test as base, expect } from '@playwright/test';


import BasePage from '../pages/BasePage.js';


import {
  attachScreenshotAfterEach
} from '../utils/screenshotUtil.js';


const APP_URL = 'https://www.saucedemo.com/';


// =====================================================
// CUSTOM TEST
// =====================================================

export const test = base;


// =====================================================
// BEFORE EACH HOOK
// =====================================================

test.beforeEach(async ({ page }) => {

  const basePage = new BasePage(page);

  await basePage.navigate(APP_URL);

  // Make sure login page is loaded
  await page.locator('#user-name').waitFor({
    state: 'visible'
  });

});


// =====================================================
// AFTER EACH HOOK
// =====================================================

test.afterEach(async ({ page }, testInfo) => {

  await attachScreenshotAfterEach(
    page,
    testInfo
  );

});


// =====================================================
// EXPECT
// =====================================================

export { expect };