import { test, expect } from '@playwright/test';

import LoginPage from '../Pages/LoginPage.js';
import AddToCart from '../Pages/AddtoCart.js';
import Checkout from '../Pages/Checkout.js';

import LoginData from '../testdata/LogintestData.json';
import CheckoutData from '../testdata/Checkout.json';


test('TC07 - Complete E2E Purchase Flow', async ({ page }) => {

  const login = new LoginPage(page);
  const cart = new AddToCart(page);
  const checkout = new Checkout(page);


  // Login

  await login.goto();

  await login.login(
    LoginData.validUser.username,
    LoginData.validUser.password
  );


  // Add Product

  await cart.addProduct(
    'sauce-labs-backpack'
  );

  await expect(cart.cartBadge)
    .toHaveText('1');


  // Open Cart

  await cart.openCart();


  // Checkout

  await checkout.clickCheckout();


  // Customer Information

  await checkout.fillInformation(
    CheckoutData.firstName,
    CheckoutData.lastName,
    CheckoutData.postalCode
  );


  // Continue

  await checkout.continueCheckout();


  // Finish

  await checkout.finishCheckout();


  // Verify Order

  await expect(checkout.completeHeader)
    .toHaveText('Thank you for your order!');
});