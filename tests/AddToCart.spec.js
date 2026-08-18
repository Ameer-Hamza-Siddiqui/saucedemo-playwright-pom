import { test, expect } from '@playwright/test';

import LoginPage from '../Pages/LoginPage.js';
import AddToCart from '../Pages/AddtoCart.js';

import LoginData from '../testdata/LogintestData.json';
import CartData from '../testdata/AddToCart.json';


test('TC05 - Add Single Product', async ({ page }) => {

  const login = new LoginPage(page);
  const cart = new AddToCart(page);

  await login.goto();

  await login.login(
    LoginData.validUser.username,
    LoginData.validUser.password
  );

  await cart.addProduct(
    CartData.singleProduct
  );

  await expect(cart.cartBadge)
    .toHaveText('1');
});


test('TC06 - Add Multiple Products', async ({ page }) => {

  const login = new LoginPage(page);
  const cart = new AddToCart(page);

  await login.goto();

  await login.login(
    LoginData.validUser.username,
    LoginData.validUser.password
  );

  await cart.addMultipleProducts(
    CartData.multipleProducts
  );

  await expect(cart.cartBadge)
    .toHaveText(
      String(CartData.multipleProducts.length)
    );
});