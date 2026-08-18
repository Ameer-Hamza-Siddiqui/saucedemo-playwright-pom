import { test, expect } from '@playwright/test';

import LoginPage from '../Pages/LoginPage.js';
import HomePage from '../Pages/HomePage.js';
import AddToCart from '../Pages/AddtoCart.js';
import Checkout from '../Pages/Checkout.js';
import Logout from '../Pages/logout.js';

import LoginData from '../testdata/LogintestData.json';
import HomeData from '../testdata/HomePage.json';
import CartData from '../testdata/AddToCart.json';
import CheckoutData from '../testdata/Checkout.json';
import LogoutData from '../testdata/logout.json';


test('SMOKE TEST - Complete Application Flow', async ({ page }) => {

  const login = new LoginPage(page);
  const home = new HomePage(page);
  const cart = new AddToCart(page);
  const checkout = new Checkout(page);
  const logout = new Logout(page);


  // ================= LOGIN =================

  await login.goto();

  await login.login(
    LoginData.validUser.username,
    LoginData.validUser.password
  );


  // ================= HOME PAGE =================

  await expect(home.productsTitle)
    .toHaveText(HomeData.expectedTitle);

  await expect(home.inventoryContainer)
    .toBeVisible();


  // ================= ADD PRODUCTS =================

  await cart.addMultipleProducts(
    CartData.multipleProducts
  );

  await expect(cart.cartBadge)
    .toHaveText(
      String(CartData.multipleProducts.length)
    );


  // ================= CART =================

  await cart.openCart();


  // ================= CHECKOUT =================

  await checkout.clickCheckout();

  await checkout.fillInformation(
    CheckoutData.firstName,
    CheckoutData.lastName,
    CheckoutData.postalCode
  );

  await checkout.continueCheckout();

  await checkout.finishCheckout();


  // ================= ORDER VERIFICATION =================

  await expect(checkout.completeHeader)
    .toHaveText('Thank you for your order!');


  // ================= LOGOUT =================

  await logout.logout();

  await expect(login.loginButton)
    .toBeVisible();
});