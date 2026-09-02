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

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | import LoginPage from '../Pages/LoginPage.js';
  4   | import HomePage from '../Pages/HomePage.js';
  5   | import AddToCart from '../Pages/AddToCart.js';
  6   | import Checkout from '../Pages/Checkout.js';
  7   | import Logout from '../Pages/Logout.js';
  8   | 
  9   | import LoginData from '../testdata/LogintestData.json';
  10  | import HomeData from '../testdata/HomePage.json';
  11  | import CartData from '../testdata/AddToCart.json';
  12  | import CheckoutData from '../testdata/Checkout.json';
  13  | import LogoutData from '../testdata/logout.json';
  14  | 
  15  | 
  16  | test('SMOKE TEST - Complete Application Flow', async ({ page }) => {
  17  | 
  18  |   const login = new LoginPage(page);
  19  |   const home = new HomePage(page);
  20  |   const cart = new AddToCart(page);
  21  |   const checkout = new Checkout(page);
  22  |   const logout = new Logout(page);
  23  | 
  24  | 
  25  |   // ================= STEP 1: LOGIN =================
  26  | 
  27  |   await test.step('STEP 1: Open Login Page', async () => {
  28  | 
> 29  |     await login.goto();
      |                 ^ TypeError: login.goto is not a function
  30  | 
  31  |   });
  32  | 
  33  | 
  34  |   await test.step('STEP 2: Login with Valid User', async () => {
  35  | 
  36  |     await login.login(
  37  |       LoginData.validUser.username,
  38  |       LoginData.validUser.password
  39  |     );
  40  | 
  41  |   });
  42  | 
  43  | 
  44  |   // ================= STEP 2: HOME PAGE =================
  45  | 
  46  |   await test.step('STEP 3: Verify Products Title', async () => {
  47  | 
  48  |     await expect(home.productsTitle)
  49  |       .toHaveText(HomeData.expectedTitle);
  50  | 
  51  |   });
  52  | 
  53  | 
  54  |   await test.step('STEP 4: Verify Inventory Container', async () => {
  55  | 
  56  |     await expect(home.inventoryContainer)
  57  |       .toBeVisible();
  58  | 
  59  |   });
  60  | 
  61  | 
  62  |   // ================= STEP 3: ADD PRODUCTS =================
  63  | 
  64  |   await test.step('STEP 5: Add Multiple Products to Cart', async () => {
  65  | 
  66  |     await cart.addMultipleProducts(
  67  |       CartData.multipleProducts
  68  |     );
  69  | 
  70  |   });
  71  | 
  72  | 
  73  |   await test.step('STEP 6: Verify Cart Badge Count', async () => {
  74  | 
  75  |     await expect(cart.cartBadge)
  76  |       .toHaveText(
  77  |         String(CartData.multipleProducts.length)
  78  |       );
  79  | 
  80  |   });
  81  | 
  82  | 
  83  |   // ================= STEP 4: CART =================
  84  | 
  85  |   await test.step('STEP 7: Open Shopping Cart', async () => {
  86  | 
  87  |     await cart.openCart();
  88  | 
  89  |   });
  90  | 
  91  | 
  92  |   // ================= STEP 5: CHECKOUT =================
  93  | 
  94  |   await test.step('STEP 8: Click Checkout', async () => {
  95  | 
  96  |     await checkout.clickCheckout();
  97  | 
  98  |   });
  99  | 
  100 | 
  101 |   await test.step('STEP 9: Fill Checkout Information', async () => {
  102 | 
  103 |     await checkout.fillInformation(
  104 |       CheckoutData.firstName,
  105 |       CheckoutData.lastName,
  106 |       CheckoutData.postalCode
  107 |     );
  108 | 
  109 |   });
  110 | 
  111 | 
  112 |   await test.step('STEP 10: Continue Checkout', async () => {
  113 | 
  114 |     await checkout.continueCheckout();
  115 | 
  116 |   });
  117 | 
  118 | 
  119 |   await test.step('STEP 11: Finish Checkout', async () => {
  120 | 
  121 |     await checkout.finishCheckout();
  122 | 
  123 |   });
  124 | 
  125 | 
  126 |   // ================= STEP 6: ORDER VERIFICATION =================
  127 | 
  128 |   await test.step('STEP 12: Verify Order Completion', async () => {
  129 | 
```