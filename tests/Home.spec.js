import { test, expect } from '@playwright/test';

import LoginPage from '../Pages/LoginPage.js';
import HomePage from '../Pages/HomePage.js';

import LoginData from '../testdata/LogintestData.json';
import HomeData from '../testdata/HomePage.json';


test('TC04 - Verify Products Home Page', async ({ page }) => {

  const login = new LoginPage(page);
  const home = new HomePage(page);

  await login.goto();

  await login.login(
    LoginData.validUser.username,
    LoginData.validUser.password
  );

  await expect(home.productsTitle)
    .toHaveText(HomeData.expectedTitle);

  await expect(home.inventoryContainer)
    .toBeVisible();
});