# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke\Smoke.spec.js >> SMOKE TEST - Complete Application Flow
- Location: smoke\Smoke.spec.js:15:5

# Error details

```
TypeError: login.goto is not a function
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - generic [ref=e5]:
    - generic [ref=e9]:
      - textbox "Username" [ref=e11]
      - textbox "Password" [ref=e13]
      - button "Login" [ref=e15] [cursor=pointer]
    - generic [ref=e17]:
      - generic [ref=e18]:
        - heading "Accepted usernames are:" [level=4] [ref=e19]
        - text: standard_userlocked_out_userproblem_userperformance_glitch_usererror_uservisual_user
      - generic [ref=e20]:
        - heading "Password for all users:" [level=4] [ref=e21]
        - text: secret_sauce
```

# Test source

```ts
  1   | import { test, expect } from '../fixtures/testSetup.js';
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
  13  | 
  14  | 
  15  | test('SMOKE TEST - Complete Application Flow', async ({ page }) => {
  16  | 
  17  |   const login = new LoginPage(page);
  18  |   const home = new HomePage(page);
  19  |   const cart = new AddToCart(page);
  20  |   const checkout = new Checkout(page);
  21  |   const logout = new Logout(page);
  22  | 
  23  | 
  24  |   // ================= STEP 1: LOGIN =================
  25  | 
  26  |   await test.step('STEP 1: Open Login Page', async () => {
  27  | 
> 28  |     await login.goto();
      |                 ^ TypeError: login.goto is not a function
  29  | 
  30  |   });
  31  | 
  32  | 
  33  |   await test.step('STEP 2: Login with Valid User', async () => {
  34  | 
  35  |     await login.login(
  36  |       LoginData.validUser.username,
  37  |       LoginData.validUser.password
  38  |     );
  39  | 
  40  |   });
  41  | 
  42  | 
  43  |   // ================= STEP 2: HOME PAGE =================
  44  | 
  45  |   await test.step('STEP 3: Verify Products Title', async () => {
  46  | 
  47  |     await expect(home.productsTitle)
  48  |       .toHaveText(HomeData.expectedTitle);
  49  | 
  50  |   });
  51  | 
  52  | 
  53  |   await test.step('STEP 4: Verify Inventory Container', async () => {
  54  | 
  55  |     await expect(home.inventoryContainer)
  56  |       .toBeVisible();
  57  | 
  58  |   });
  59  | 
  60  | 
  61  |   // ================= STEP 3: ADD PRODUCTS =================
  62  | 
  63  |   await test.step('STEP 5: Add Multiple Products to Cart', async () => {
  64  | 
  65  |     await cart.addMultipleProducts(
  66  |       CartData.multipleProducts
  67  |     );
  68  | 
  69  |   });
  70  | 
  71  | 
  72  |   await test.step('STEP 6: Verify Cart Badge Count', async () => {
  73  | 
  74  |     await expect(cart.cartBadge)
  75  |       .toHaveText(
  76  |         String(CartData.multipleProducts.length)
  77  |       );
  78  | 
  79  |   });
  80  | 
  81  | 
  82  |   // ================= STEP 4: CART =================
  83  | 
  84  |   await test.step('STEP 7: Open Shopping Cart', async () => {
  85  | 
  86  |     await cart.openCart();
  87  | 
  88  |   });
  89  | 
  90  | 
  91  |   // ================= STEP 5: CHECKOUT =================
  92  | 
  93  |   await test.step('STEP 8: Click Checkout', async () => {
  94  | 
  95  |     await checkout.clickCheckout();
  96  | 
  97  |   });
  98  | 
  99  | 
  100 |   await test.step('STEP 9: Fill Checkout Information', async () => {
  101 | 
  102 |     await checkout.fillInformation(
  103 |       CheckoutData.firstName,
  104 |       CheckoutData.lastName,
  105 |       CheckoutData.postalCode
  106 |     );
  107 | 
  108 |   });
  109 | 
  110 | 
  111 |   await test.step('STEP 10: Continue Checkout', async () => {
  112 | 
  113 |     await checkout.continueCheckout();
  114 | 
  115 |   });
  116 | 
  117 | 
  118 |   await test.step('STEP 11: Finish Checkout', async () => {
  119 | 
  120 |     await checkout.finishCheckout();
  121 | 
  122 |   });
  123 | 
  124 | 
  125 |   // ================= STEP 6: ORDER VERIFICATION =================
  126 | 
  127 |   await test.step('STEP 12: Verify Order Completion', async () => {
  128 | 
```