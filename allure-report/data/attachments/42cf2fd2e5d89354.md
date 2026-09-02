# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\Checkout.spec.js >> TC07 - Complete E2E Purchase Flow
- Location: tests\Checkout.spec.js:11:5

# Error details

```
ReferenceError: attachScreenshotAfterEach is not defined
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - generic [ref=e7]:
          - button "Open Menu" [ref=e8] [cursor=pointer]
          - img "Open Menu" [ref=e9]
        - generic [ref=e10]: Swag Labs
      - generic [ref=e14]: "Checkout: Complete!"
    - generic [ref=e16]:
      - img "Pony Express"
      - heading "Thank you for your order!" [level=2] [ref=e17]
      - generic [ref=e18]: Your order has been dispatched, and will arrive just as fast as the pony can get there!
      - generic [ref=e19]:
        - button "Back Home" [ref=e20] [cursor=pointer]
        - button "Generate PDF order" [ref=e21] [cursor=pointer]
  - contentinfo [ref=e22]:
    - list [ref=e23]:
      - listitem [ref=e24]:
        - link "Twitter" [ref=e25] [cursor=pointer]:
          - /url: https://twitter.com/saucelabs
      - listitem [ref=e26]:
        - link "Facebook" [ref=e27] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e28]:
        - link "LinkedIn" [ref=e29] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e30]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
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