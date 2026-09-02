// tests/AddToCart.spec.js

import {
  test,
  expect
} from '../fixtures/testSetup.js';

import LoginPage from '../pages/LoginPage.js';
import AddToCart from '../pages/AddToCart.js';

import LoginData from '../testdata/LogintestData.json';
import CartData from '../testdata/AddToCart.json';


// =====================================================
// TC05 - ADD SINGLE PRODUCT
// =====================================================

test(
  'TC05 - Add Single Product',
  async ({ page }, testInfo) => {

    const login = new LoginPage(page);

    const cart = new AddToCart(page);


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


    await test.step(
      'STEP 2: Add Single Product',
      async () => {

        await cart.addProduct(
          CartData.singleProduct,
          testInfo
        );

      }
    );


    await test.step(
      'STEP 3: Verify Cart Badge Count is 1',
      async () => {

        await expect(cart.cartBadge)
          .toHaveText('1');

      }
    );

  }
);


// =====================================================
// TC06 - ADD MULTIPLE PRODUCTS
// =====================================================

test(
  'TC06 - Add Multiple Products',
  async ({ page }, testInfo) => {

    const login = new LoginPage(page);

    const cart = new AddToCart(page);


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


    await test.step(
      'STEP 2: Add Multiple Products',
      async () => {

        await cart.addMultipleProducts(
          CartData.multipleProducts,
          testInfo
        );

      }
    );


    await test.step(
      'STEP 3: Verify Cart Badge Count',
      async () => {

        await expect(cart.cartBadge)
          .toHaveText(
            String(
              CartData.multipleProducts.length
            )
          );

      }
    );

  }
);