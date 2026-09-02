// tests/Checkout.spec.js

import {
  test,
  expect
} from '../fixtures/testSetup.js';


import LoginPage from '../pages/LoginPage.js';
import AddToCart from '../pages/AddToCart.js';
import Checkout from '../pages/Checkout.js';

import LoginData from '../testdata/LogintestData.json';
import CheckoutData from '../testdata/Checkout.json';


test(
  'TC07 - Complete E2E Purchase Flow',
  async ({ page }, testInfo) => {

    const login = new LoginPage(page);

    const cart = new AddToCart(page);

    const checkout = new Checkout(page);


    // =================================================
    // STEP 1 - LOGIN
    // =================================================

    await test.step(
      'STEP 1: Login with Valid User',
      async () => {

        await login.login(
          LoginData.validUser.username,
          LoginData.validUser.password,
          testInfo
        );

      }
    );


    // =================================================
    // STEP 2 - ADD PRODUCT
    // =================================================

    await test.step(
      'STEP 2: Add Product to Cart',
      async () => {

        await cart.addProduct(
          'sauce-labs-backpack',
          testInfo
        );

      }
    );


    // =================================================
    // STEP 3 - VERIFY CART
    // =================================================

    await test.step(
      'STEP 3: Verify Cart Badge Count',
      async () => {

        await expect(cart.cartBadge)
          .toHaveText('1');

      }
    );


    // =================================================
    // STEP 4 - OPEN CART
    // =================================================

    await test.step(
      'STEP 4: Open Shopping Cart',
      async () => {

        await cart.openCart(testInfo);

      }
    );


    // =================================================
    // STEP 5 - CHECKOUT
    // =================================================

    await test.step(
      'STEP 5: Click Checkout',
      async () => {

        await checkout.clickCheckout(testInfo);

      }
    );


    // =================================================
    // STEP 6 - CUSTOMER INFORMATION
    // =================================================

    await test.step(
      'STEP 6: Fill Customer Information',
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
    // STEP 7 - CONTINUE
    // =================================================

    await test.step(
      'STEP 7: Continue Checkout',
      async () => {

        await checkout.continueCheckout(testInfo);

      }
    );


    // =================================================
    // STEP 8 - FINISH
    // =================================================

    await test.step(
      'STEP 8: Finish Checkout',
      async () => {

        await checkout.finishCheckout(testInfo);

      }
    );


    // =================================================
    // STEP 9 - VERIFY ORDER
    // =================================================

    await test.step(
      'STEP 9: Verify Order Confirmation',
      async () => {

        await expect(checkout.completeHeader)
          .toHaveText(
            'Thank you for your order!'
          );

      }
    );

  }
)