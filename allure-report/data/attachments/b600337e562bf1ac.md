# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke\Smoke.spec.js >> SMOKE TEST - Complete Application Flow
- Location: smoke\Smoke.spec.js:20:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#logout_sidebar_link') to be visible
    45 × locator resolved to hidden <a href="#" id="logout_sidebar_link" class="bm-item menu-item" data-test="logout-sidebar-link">Logout</a>

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
      - img "Pony Express" [ref=e17]
      - heading "Thank you for your order!" [level=2] [ref=e18]
      - generic [ref=e19]: Your order has been dispatched, and will arrive just as fast as the pony can get there!
      - generic [ref=e20]:
        - button "Back Home" [ref=e21] [cursor=pointer]
        - button "Generate PDF order" [ref=e22] [cursor=pointer]
  - contentinfo [ref=e23]:
    - list [ref=e24]:
      - listitem [ref=e25]:
        - link "Twitter" [ref=e26]:
          - /url: https://twitter.com/saucelabs
      - listitem [ref=e27]:
        - link "Facebook" [ref=e28]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e29]:
        - link "LinkedIn" [ref=e30]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e31]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1  | // Pages/Logout.js
  2  | 
  3  | import {
  4  |   attachStepScreenshot
  5  | } from '../utils/screenshotUtil.js';
  6  | 
  7  | 
  8  | class Logout {
  9  | 
  10 |   constructor(page) {
  11 | 
  12 |     this.page = page;
  13 | 
  14 |     // Locators
  15 |     this.menuButton =
  16 |       page.locator('#react-burger-menu-btn');
  17 | 
  18 |     this.logoutButton =
  19 |       page.locator('#logout_sidebar_link');
  20 | 
  21 |   }
  22 | 
  23 | 
  24 |   // =====================================================
  25 |   // CLICK MENU
  26 |   // =====================================================
  27 | 
  28 |   async clickMenuButton(testInfo) {
  29 | 
  30 |     await this.menuButton.waitFor({
  31 |       state: 'visible'
  32 |     });
  33 | 
  34 |     await this.menuButton.click();
  35 | 
  36 |     await attachStepScreenshot(
  37 |       this.page,
  38 |       testInfo,
  39 |       '01 - After Clicking Menu Button'
  40 |     );
  41 | 
  42 |   }
  43 | 
  44 | 
  45 |   // =====================================================
  46 |   // CLICK LOGOUT
  47 |   // =====================================================
  48 | 
  49 |   async clickLogoutButton(testInfo) {
  50 | 
> 51 |     await this.logoutButton.waitFor({
     |                             ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
  52 |       state: 'visible'
  53 |     });
  54 | 
  55 |     await this.logoutButton.click();
  56 | 
  57 |     await attachStepScreenshot(
  58 |       this.page,
  59 |       testInfo,
  60 |       '02 - After Clicking Logout'
  61 |     );
  62 | 
  63 |   }
  64 | 
  65 | 
  66 |   // =====================================================
  67 |   // LOGOUT
  68 |   // =====================================================
  69 | 
  70 |   async logout(testInfo) {
  71 | 
  72 |     await this.clickMenuButton(testInfo);
  73 | 
  74 |     await this.clickLogoutButton(testInfo);
  75 | 
  76 |   }
  77 | 
  78 | }
  79 | 
  80 | 
  81 | export default Logout;
```