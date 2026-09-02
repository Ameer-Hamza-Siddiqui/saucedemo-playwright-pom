# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke\Smoke.spec.js >> SMOKE TEST - Complete Application Flow
- Location: smoke\Smoke.spec.js:16:5

# Error details

```
TypeError: login.goto is not a function
```

```
ReferenceError: attachScreenshotAfterEach is not defined
```

# Test source

```ts
  1  | import { test as base, expect } from '@playwright/test';
  2  | 
  3  | import BasePage from '../Pages/BasePage.js';
  4  | 
  5  | 
  6  | 
  7  | // =====================================================
  8  | // APPLICATION URL
  9  | // =====================================================
  10 | 
  11 | const APP_URL = 'https://www.saucedemo.com/';
  12 | 
  13 | 
  14 | // =====================================================
  15 | // CUSTOM PLAYWRIGHT FIXTURE
  16 | // =====================================================
  17 | 
  18 | export const test = base.extend({
  19 | 
  20 |   pageSetup: [
  21 | 
  22 |     async ({ page }, use) => {
  23 | 
  24 |       // Create BasePage object
  25 |       const basePage = new BasePage(page);
  26 | 
  27 | 
  28 |       // Open application
  29 |       await basePage.navigate(APP_URL);
  30 | 
  31 | 
  32 |       // Continue test
  33 |       await use();
  34 | 
  35 |     },
  36 | 
  37 |     { auto: true }
  38 | 
  39 |   ]
  40 | 
  41 | });
  42 | 
  43 | 
  44 | // =====================================================
  45 | // AFTER EACH HOOK
  46 | // =====================================================
  47 | 
  48 | test.afterEach(async ({ page }, testInfo) => {
  49 | 
> 50 |   await attachScreenshotAfterEach(
     |   ^ ReferenceError: attachScreenshotAfterEach is not defined
  51 |     page,
  52 |     testInfo
  53 |   );
  54 | 
  55 | });
  56 | 
  57 | 
  58 | // =====================================================
  59 | // EXPORT EXPECT
  60 | // =====================================================
  61 | 
  62 | export { expect };
```