# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\AddToCart.spec.js >> TC06 - Add Multiple Products
- Location: tests\AddToCart.spec.js:31:5

# Error details

```
ReferenceError: test is not defined
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
        - generic [ref=e22]: "1"
      - generic [ref=e25]:
        - generic [ref=e26]: Products
        - generic [ref=e28] [cursor=pointer]:
          - generic [ref=e29]: Name (A to Z)
          - combobox [ref=e30]:
            - option "Name (A to Z)" [selected]
            - option "Name (Z to A)"
            - option "Price (low to high)"
            - option "Price (high to low)"
    - generic [ref=e34]:
      - generic [ref=e35]:
        - link [ref=e37] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Backpack" [ref=e38]
        - generic [ref=e39]:
          - generic [ref=e40]:
            - link "Sauce Labs Backpack" [ref=e41] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e43]: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.
          - generic [ref=e44]:
            - generic [ref=e45]: $29.99
            - button "Remove" [ref=e46] [cursor=pointer]
      - generic [ref=e47]:
        - link [ref=e49] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Bike Light" [ref=e50]
        - generic [ref=e51]:
          - generic [ref=e52]:
            - link "Sauce Labs Bike Light" [ref=e53] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e55]: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.
          - generic [ref=e56]:
            - generic [ref=e57]: $9.99
            - button "Add to cart" [ref=e58] [cursor=pointer]
      - generic [ref=e59]:
        - link [ref=e61] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Bolt T-Shirt" [ref=e62]
        - generic [ref=e63]:
          - generic [ref=e64]:
            - link "Sauce Labs Bolt T-Shirt" [ref=e65] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e67]: Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.
          - generic [ref=e68]:
            - generic [ref=e69]: $15.99
            - button "Add to cart" [ref=e70] [cursor=pointer]
      - generic [ref=e71]:
        - link [ref=e73] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Fleece Jacket" [ref=e74]
        - generic [ref=e75]:
          - generic [ref=e76]:
            - link "Sauce Labs Fleece Jacket" [ref=e77] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e79]: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.
          - generic [ref=e80]:
            - generic [ref=e81]: $49.99
            - button "Add to cart" [ref=e82] [cursor=pointer]
      - generic [ref=e83]:
        - link [ref=e85] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Onesie" [ref=e86]
        - generic [ref=e87]:
          - generic [ref=e88]:
            - link "Sauce Labs Onesie" [ref=e89] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e91]: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.
          - generic [ref=e92]:
            - generic [ref=e93]: $7.99
            - button "Add to cart" [ref=e94] [cursor=pointer]
      - generic [ref=e95]:
        - link [ref=e97] [cursor=pointer]:
          - /url: "#"
          - img "Test.allTheThings() T-Shirt (Red)" [ref=e98]
        - generic [ref=e99]:
          - generic [ref=e100]:
            - link "Test.allTheThings() T-Shirt (Red)" [ref=e101] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e103]: This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.
          - generic [ref=e104]:
            - generic [ref=e105]: $15.99
            - button "Add to cart" [ref=e106] [cursor=pointer]
  - contentinfo [ref=e107]:
    - list [ref=e108]:
      - listitem [ref=e109]:
        - link "Twitter" [ref=e110] [cursor=pointer]:
          - /url: https://twitter.com/saucelabs
      - listitem [ref=e111]:
        - link "Facebook" [ref=e112] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e113]:
        - link "LinkedIn" [ref=e114] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e115]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1  | class AddToCart {
  2  |   constructor(page) {
  3  |     this.page = page;
  4  | 
  5  |     this.cart = page.locator('.shopping_cart_link');
  6  |     this.cartBadge = page.locator('.shopping_cart_badge');
  7  |   }
  8  | 
  9  |   async addProduct(product) {
  10 |     await this.page
  11 |       .locator(`[data-test="add-to-cart-${product}"]`)
  12 |       .click();
  13 |       await this.attachScreenshot("add one [roduct] ")
  14 |   }
  15 | 
  16 |   async addMultipleProducts(products) {
  17 |     for (const product of products) {
  18 |       await this.addProduct(product);
  19 |       await this.attachScreenshot("add multiple product ")
  20 |     }
  21 |   }
  22 | 
  23 |   async getCartCount() {
  24 |     return await this.cartBadge.textContent();
  25 |     
  26 |   }
  27 | 
  28 |   async openCart() {
  29 |     await this.cart.click();
  30 |     await this.attachScreenshot("open cart")
  31 |   }
  32 | 
  33 |   async attachScreenshot(name){
> 34 |       await test.info().attach(name,{
     |       ^ ReferenceError: test is not defined
  35 |           body: await this.page.screenshot(),
  36 |           contentType:"image/png",
  37 |         });
  38 |     }
  39 | }
  40 | 
  41 | export default AddToCart;
```