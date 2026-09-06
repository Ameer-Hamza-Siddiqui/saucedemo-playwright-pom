import { test, expect } from '../fixtures/testSetup.js';

import LoginPage from '../pages/LoginPage.js';
import AddToCart from '../pages/AddToCart.js';
import Checkout from '../pages/Checkout.js';

import LoginData from '../testdata/LogintestData.json';
import CheckoutData from '../testdata/Checkout.json';

test('TC07 - Complete E2E Purchase Flow', async ({ page }, testInfo) => {

  const login = new LoginPage(page);
  const cart = new AddToCart(page);
  const checkout = new Checkout(page);

  // LOGIN
  await login.login(
    LoginData.validUser.username,
    LoginData.validUser.password,
    testInfo
  );

  // ADD PRODUCT
  await cart.addProduct('sauce-labs-backpack', testInfo);

  // VERIFY CART
  await expect(cart.cartBadge).toHaveText('1');

  // OPEN CART
  await cart.openCart(testInfo);

  // CHECKOUT
  await checkout.clickCheckout(testInfo);

  // CUSTOMER INFORMATION
  await checkout.fillInformation(
    CheckoutData.firstName,
    CheckoutData.lastName,
    CheckoutData.postalCode,
    testInfo
  );

  // CONTINUE
  await checkout.continueCheckout(testInfo);

  // FINISH
  await checkout.finishCheckout(testInfo);

  // VERIFY ORDER
  await expect(checkout.completeHeader).toHaveText(
    'Thank you for your order!'
  );

});