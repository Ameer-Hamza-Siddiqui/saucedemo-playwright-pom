# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\AddToCart.spec.js >> TC06 - Add Multiple Products
- Location: tests\AddToCart.spec.js:56:5

# Error details

```
TypeError: (0 , _screenshotUtil.attachStepScreenshot) is not a function
```

```
TypeError: (0 , _screenshotUtil.attachScreenshotAfterEach) is not a function
```

```
TypeError: (0 , _screenshotUtil.attachScreenshotAfterEach) is not a function
```

# Page snapshot

```yaml
- generic [ref=f1e3]:
  - generic [ref=f1e4]: Swag Labs
  - generic [ref=f1e5]:
    - generic [ref=f1e9]:
      - textbox "Username" [active] [ref=f1e11]: standard_user
      - textbox "Password" [ref=f1e13]
      - button "Login" [ref=f1e15] [cursor=pointer]
    - generic [ref=f1e17]:
      - generic [ref=f1e18]:
        - heading "Accepted usernames are:" [level=4] [ref=f1e19]
        - text: standard_userlocked_out_userproblem_userperformance_glitch_usererror_uservisual_user
      - generic [ref=f1e20]:
        - heading "Password for all users:" [level=4] [ref=f1e21]
        - text: secret_sauce
```

# Test source

```ts
  1  | import { test as base, expect } from '@playwright/test';
  2  | 
  3  | import BasePage from '../Pages/BasePage.js';
  4  | 
  5  | import {
  6  |   attachScreenshotAfterEach
  7  | } from '../utils/screenshotUtil.js';
  8  | 
  9  | 
  10 | // =====================================================
  11 | // APPLICATION URL
  12 | // =====================================================
  13 | 
  14 | const APP_URL = 'https://www.saucedemo.com/';
  15 | 
  16 | 
  17 | // =====================================================
  18 | // CUSTOM PLAYWRIGHT FIXTURE
  19 | // =====================================================
  20 | 
  21 | export const test = base.extend({
  22 | 
  23 |   pageSetup: [
  24 | 
  25 |     async ({ page }, use) => {
  26 | 
  27 |       const basePage = new BasePage(page);
  28 | 
  29 |       await basePage.navigate(APP_URL);
  30 | 
  31 |       await use();
  32 | 
  33 |     },
  34 | 
  35 |     { auto: true }
  36 | 
  37 |   ]
  38 | 
  39 | });
  40 | 
  41 | 
  42 | // =====================================================
  43 | // AFTER EACH HOOK
  44 | // =====================================================
  45 | 
  46 | test.afterEach(async ({ page }, testInfo) => {
  47 | 
> 48 |   await attachScreenshotAfterEach(page, testInfo);
     |                                  ^ TypeError: (0 , _screenshotUtil.attachScreenshotAfterEach) is not a function
  49 | 
  50 | });
  51 | 
  52 | 
  53 | // =====================================================
  54 | // EXPORT EXPECT
  55 | // =====================================================
  56 | 
  57 | export { expect };
```