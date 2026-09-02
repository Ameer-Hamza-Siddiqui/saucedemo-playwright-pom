// tests/Smoke.spec.js

import {
  test,
  expect
} from '../fixtures/testSetup.js';

import LoginPage from '../pages/LoginPage.js';
import HomePage from '../Pages/HomePage.js';
import AddToCart from '../Pages/AddToCart.js';
import Checkout from '../Pages/Checkout.js';
import Logout from '../Pages/Logout.js';

import LoginData from '../testdata/LogintestData.json';
import HomeData from '../testdata/HomePage.json';
import CartData from '../testdata/AddToCart.json';
import CheckoutData from '../testdata/Checkout.json';


test(
  'SMOKE TEST - Complete Application Flow',
  async ({ page }, testInfo) => {

    // =================================================
    // PAGE OBJECT INITIALIZATION
    // =================================================

    const login = new LoginPage(page);

    const home = new HomePage(page);

    const cart = new AddToCart(page);

    const checkout = new Checkout(page);

    const logout = new Logout(page);


    // =================================================
    // STEP 1 - VERIFY LOGIN PAGE
    // =================================================

    await test.step(
      'STEP 1: Verify Login Page',
      async () => {

        await expect(login.loginButton)
          .toBeVisible();

      }
    );


    // =================================================
    // STEP 2 - LOGIN
    // =================================================

    await test.step(
      'STEP 2: Login with Valid User',
      async () => {

        await login.login(
          LoginData.validUser.username,
          LoginData.validUser.password,
          testInfo
        );

      }
    );


    // =================================================
    // STEP 3 - VERIFY PRODUCTS TITLE
    // =================================================

    await test.step(
      'STEP 3: Verify Products Title',
      async () => {

        await expect(home.productsTitle)
          .toHaveText(
            HomeData.expectedTitle
          );

      }
    );


    // =================================================
    // STEP 4 - VERIFY INVENTORY
    // =================================================

    await test.step(
      'STEP 4: Verify Inventory Container',
      async () => {

        await expect(home.inventoryContainer)
          .toBeVisible();

      }
    );


    // =================================================
    // STEP 5 - ADD PRODUCTS
    // =================================================

    await test.step(
      'STEP 5: Add Multiple Products',
      async () => {

        await cart.addMultipleProducts(
          CartData.multipleProducts,
          testInfo
        );

      }
    );


    // =================================================
    // STEP 6 - VERIFY CART BADGE
    // =================================================

    await test.step(
      'STEP 6: Verify Cart Badge Count',
      async () => {

        await expect(cart.cartBadge)
          .toHaveText(
            String(
              CartData.multipleProducts.length
            )
          );

      }
    );


    // =================================================
    // STEP 7 - OPEN CART
    // =================================================

    await test.step(
      'STEP 7: Open Shopping Cart',
      async () => {

        await cart.openCart(testInfo);

      }
    );


    // =================================================
    // STEP 8 - CHECKOUT
    // =================================================

    await test.step(
      'STEP 8: Click Checkout',
      async () => {

        await checkout.clickCheckout(testInfo);

      }
    );


    // =================================================
    // STEP 9 - FILL INFORMATION
    // =================================================

    await test.step(
      'STEP 9: Fill Checkout Information',
      async () => {

        await checkout.fillInformation(
          CheckoutData.firstName,
          CheckoutData.lastName,
          CheckoutData.postalCode,
          testInfo
        );

      }
    );


    // =================================================
    // STEP 10 - CONTINUE
    // =================================================

    await test.step(
      'STEP 10: Continue Checkout',
      async () => {

        await checkout.continueCheckout(testInfo);

      }
    );


    // =================================================
    // STEP 11 - FINISH
    // =================================================

    await test.step(
      'STEP 11: Finish Checkout',
      async () => {

        await checkout.finishCheckout(testInfo);

      }
    );


    // =================================================
    // STEP 12 - VERIFY ORDER
    // =================================================

    await test.step(
      'STEP 12: Verify Order Completion',
      async () => {

        await expect(checkout.completeHeader)
          .toHaveText(
            'Thank you for your order!'
          );

      }
    );


    // =================================================
    // STEP 13 - LOGOUT
    // =================================================

    await test.step(
      'STEP 13: Logout',
      async () => {

        await logout.logout(testInfo);

      }
    );


    // =================================================
    // STEP 14 - VERIFY LOGOUT
    // =================================================

    await test.step(
      'STEP 14: Verify Login Page After Logout',
      async () => {

        await expect(login.loginButton)
          .toBeVisible();

      }
    );

  }
);