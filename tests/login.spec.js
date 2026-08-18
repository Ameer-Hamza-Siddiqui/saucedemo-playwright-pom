import { test, expect } from '@playwright/test';

import LoginPage from '../Pages/LoginPage.js';
import HomePage from '../Pages/HomePage.js';

import LoginData from '../testdata/LogintestData.json';


test('TC01 - Valid Login', async ({ page }) => {

  const login = new LoginPage(page);
  const home = new HomePage(page);

  await login.goto();

  await login.login(
    LoginData.validUser.username,
    LoginData.validUser.password
  );

  await expect(home.productsTitle)
    .toHaveText('Products');
});


test('TC02 - Locked Out User', async ({ page }) => {

  const login = new LoginPage(page);

  await login.goto();

  await login.login(
    LoginData.lockedUser.username,
    LoginData.lockedUser.password
  );

  await expect(login.errorMessage)
    .toContainText('Sorry, this user has been locked out');
});


test('TC03 - Invalid Login', async ({ page }) => {

  const login = new LoginPage(page);

  await login.goto();

  await login.login(
    LoginData.invalidUser.username,
    LoginData.invalidUser.password
  );

  await expect(login.errorMessage)
    .toContainText('Username and password do not match');
});