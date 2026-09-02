# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke\Smoke.spec.js >> SMOKE TEST - Complete Application Flow
- Location: smoke\Smoke.spec.js:16:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#logout_sidebar_link')
    - locator resolved to <a href="#" id="logout_sidebar_link" class="bm-item menu-item" data-test="logout-sidebar-link">Logout</a>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
      - waiting 100ms
    36 × waiting for element to be visible, enabled and stable
       - element is not visible
     - retrying click action
       - waiting 500ms
    - waiting for element to be visible, enabled and stable

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
  1  | import {test} from '@playwright/test'
  2  | class Logout {
  3  |   constructor(page) {
  4  |     this.page = page;
  5  | 
  6  |     this.menuButton = page.locator('#react-burger-menu-btn');
  7  |     this.logoutButton = page.locator('#logout_sidebar_link');
  8  |   }
  9  | 
  10 |   async attachScreenshot(name){
  11 |   await test.info().attach(name,{
  12 |     body: await this.page.screenshot(),
  13 |     contentType:"image/png",
  14 |   });
  15 | }
  16 | 
  17 |   async logout() {
  18 |     await this.menuButton.click();
  19 |     await this.attachScreenshot("05 After clicking menu button");
> 20 |     await this.logoutButton.click();
     |                             ^ Error: locator.click: Test timeout of 30000ms exceeded.
  21 |     await this.attachScreenshot("06 After clicking logout");
  22 |   }
  23 | 
  24 | }
  25 | 
  26 | export default Logout;
```