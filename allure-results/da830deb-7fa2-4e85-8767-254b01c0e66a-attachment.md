# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\Login.spec.js >> TC03 - Invalid Login
- Location: tests\Login.spec.js:78:5

# Error details

```
ReferenceError: attachScreenshotAfterEach is not defined
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - generic [ref=e5]:
    - generic [ref=e9]:
      - textbox "Username" [ref=e11]: invalid_user
      - textbox "Password" [ref=e15]: invalid_password
      - heading [level=3] [ref=e19]:
        - button [ref=e20] [cursor=pointer]
        - text: "Epic sadface: Username and password do not match any user in this service"
      - button "Login" [active] [ref=e23] [cursor=pointer]
    - generic [ref=e25]:
      - generic [ref=e26]:
        - heading "Accepted usernames are:" [level=4] [ref=e27]
        - text: standard_userlocked_out_userproblem_userperformance_glitch_usererror_uservisual_user
      - generic [ref=e28]:
        - heading "Password for all users:" [level=4] [ref=e29]
        - text: secret_sauce
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