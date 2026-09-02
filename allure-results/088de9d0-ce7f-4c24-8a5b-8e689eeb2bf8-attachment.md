# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\Login.spec.js >> TC01 - Valid Login
- Location: tests\Login.spec.js:13:5

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
        - generic:
          - generic:
            - generic [ref=e7]:
              - button "Open Menu" [ref=e8] [cursor=pointer]
              - img "Open Menu" [ref=e9]
            - generic [ref=e10]:
              - navigation [ref=e12]:
                - link [ref=e13] [cursor=pointer]:
                  - /url: "#"
                  - text: All Items
                - link [ref=e14] [cursor=pointer]:
                  - /url: https://saucelabs.com/
                  - text: About
                - link [ref=e15] [cursor=pointer]:
                  - /url: "#"
                  - text: Logout
                - link [ref=e16] [cursor=pointer]:
                  - /url: "#"
                  - text: Reset App State
              - button [ref=e18] [cursor=pointer]: Close Menu
        - generic [ref=e20]: Swag Labs
      - generic [ref=e24]:
        - generic [ref=e25]: Products
        - generic [ref=e27] [cursor=pointer]:
          - generic [ref=e28]: Name (A to Z)
          - combobox [ref=e29]:
            - option "Name (A to Z)" [selected]
            - option "Name (Z to A)"
            - option "Price (low to high)"
            - option "Price (high to low)"
    - generic [ref=e33]:
      - generic [ref=e34]:
        - link "Sauce Labs Backpack" [ref=e36] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Backpack"
        - generic [ref=e37]:
          - generic [ref=e38]:
            - link "Sauce Labs Backpack" [ref=e39] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e41]: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.
          - generic [ref=e42]:
            - generic [ref=e43]: $29.99
            - button "Add to cart" [ref=e44] [cursor=pointer]
      - generic [ref=e45]:
        - link [ref=e47] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Bike Light" [ref=e48]
        - generic [ref=e49]:
          - generic [ref=e50]:
            - link "Sauce Labs Bike Light" [ref=e51] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e53]: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.
          - generic [ref=e54]:
            - generic [ref=e55]: $9.99
            - button "Add to cart" [ref=e56] [cursor=pointer]
      - generic [ref=e57]:
        - link [ref=e59] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Bolt T-Shirt" [ref=e60]
        - generic [ref=e61]:
          - generic [ref=e62]:
            - link "Sauce Labs Bolt T-Shirt" [ref=e63] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e65]: Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.
          - generic [ref=e66]:
            - generic [ref=e67]: $15.99
            - button "Add to cart" [ref=e68] [cursor=pointer]
      - generic [ref=e69]:
        - link [ref=e71] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Fleece Jacket" [ref=e72]
        - generic [ref=e73]:
          - generic [ref=e74]:
            - link "Sauce Labs Fleece Jacket" [ref=e75] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e77]: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.
          - generic [ref=e78]:
            - generic [ref=e79]: $49.99
            - button "Add to cart" [ref=e80] [cursor=pointer]
      - generic [ref=e81]:
        - link [ref=e83] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Onesie" [ref=e84]
        - generic [ref=e85]:
          - generic [ref=e86]:
            - link "Sauce Labs Onesie" [ref=e87] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e89]: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.
          - generic [ref=e90]:
            - generic [ref=e91]: $7.99
            - button "Add to cart" [ref=e92] [cursor=pointer]
      - generic [ref=e93]:
        - link "Test.allTheThings() T-Shirt (Red)" [ref=e95] [cursor=pointer]:
          - /url: "#"
          - img "Test.allTheThings() T-Shirt (Red)"
        - generic [ref=e96]:
          - generic [ref=e97]:
            - link "Test.allTheThings() T-Shirt (Red)" [ref=e98] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e100]: This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.
          - generic [ref=e101]:
            - generic [ref=e102]: $15.99
            - button "Add to cart" [ref=e103] [cursor=pointer]
  - contentinfo [ref=e104]:
    - list [ref=e105]:
      - listitem [ref=e106]:
        - link "Twitter" [ref=e107] [cursor=pointer]:
          - /url: https://twitter.com/saucelabs
      - listitem [ref=e108]:
        - link "Facebook" [ref=e109] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e110]:
        - link "LinkedIn" [ref=e111] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e112]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
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