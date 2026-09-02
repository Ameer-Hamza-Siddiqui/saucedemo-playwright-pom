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
  - waiting for locator('#checkout')
    - locator resolved to <button id="checkout" name="checkout" data-test="checkout" class="btn btn_action btn_medium checkout_button ">Checkout</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling

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
        - generic [ref=e12]: "3"
      - generic [ref=e15]: Your Cart
    - generic [ref=e18]:
      - generic [ref=e19]:
        - generic [ref=e20]: QTY
        - generic [ref=e21]: Description
        - generic [ref=e22]:
          - generic [ref=e23]: "1"
          - generic [ref=e24]:
            - link "Sauce Labs Backpack" [ref=e25] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e27]: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.
            - generic [ref=e28]:
              - generic [ref=e29]: $29.99
              - button "Remove" [ref=e30] [cursor=pointer]
        - generic [ref=e31]:
          - generic [ref=e32]: "1"
          - generic [ref=e33]:
            - link "Sauce Labs Bike Light" [ref=e34] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e36]: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.
            - generic [ref=e37]:
              - generic [ref=e38]: $9.99
              - button "Remove" [ref=e39] [cursor=pointer]
        - generic [ref=e40]:
          - generic [ref=e41]: "1"
          - generic [ref=e42]:
            - link "Sauce Labs Bolt T-Shirt" [ref=e43] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e45]: Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.
            - generic [ref=e46]:
              - generic [ref=e47]: $15.99
              - button "Remove" [ref=e48] [cursor=pointer]
      - generic [ref=e49]:
        - button [ref=e50] [cursor=pointer]:
          - img "Go back" [ref=e51]
          - text: Continue Shopping
        - button "Checkout" [ref=e52] [cursor=pointer]
  - contentinfo [ref=e53]:
    - list [ref=e54]:
      - listitem [ref=e55]:
        - link "Twitter" [ref=e56] [cursor=pointer]:
          - /url: https://twitter.com/saucelabs
      - listitem [ref=e57]:
        - link "Facebook" [ref=e58] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e59]:
        - link "LinkedIn" [ref=e60] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e61]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1  | import { test } from "@playwright/test";
  2  | class Checkout {
  3  |   constructor(page) {
  4  |     this.page = page;
  5  | 
  6  |     this.checkoutButton = page.locator('#checkout');
  7  | 
  8  |     this.firstName = page.locator('#first-name');
  9  |     this.lastName = page.locator('#last-name');
  10 |     this.postalCode = page.locator('#postal-code');
  11 | 
  12 |     this.continueButton = page.locator('#continue');
  13 |     this.finishButton = page.locator('#finish');
  14 | 
  15 |     this.completeHeader = page.locator('.complete-header');
  16 |   }
  17 | 
  18 |   async clickCheckout() {
  19 |     await this.checkoutButton.waitFor({ state: 'visible' });
> 20 |     await this.checkoutButton.click();
     |                               ^ Error: locator.click: Test timeout of 30000ms exceeded.
  21 |   }
  22 | 
  23 |   async fillInformation(firstName, lastName, postalCode) {
  24 |     await this.firstName.fill(firstName);
  25 |     await this.lastName.fill(lastName);
  26 |     await this.postalCode.fill(postalCode);
  27 |     await this.attachScreenshot('Fill-information');
  28 |   }
  29 | 
  30 |   async continueCheckout() {
  31 |     await this.continueButton.waitFor({ state: 'visible' });
  32 |     await this.continueButton.click();
  33 |     await this.attachScreenshot('check-out');
  34 |   }
  35 | 
  36 |   async finishCheckout() {
  37 |     await this.finishButton.waitFor({ state: 'visible' });
  38 |     await this.finishButton.click();
  39 |     await this.attachScreenshot('finish-checkout');
  40 |   }
  41 | 
  42 |   async getConfirmationMessage() {
  43 |     return await this.completeHeader.textContent();
  44 |   }
  45 | 
  46 |   async attachScreenshot(name){
  47 |     await test.info().attach(name,{
  48 |         body: await this.page.screenshot(),
  49 |         contentType:"image/png",
  50 |       });
  51 |   }
  52 | }
  53 | 
  54 | export default Checkout;
```