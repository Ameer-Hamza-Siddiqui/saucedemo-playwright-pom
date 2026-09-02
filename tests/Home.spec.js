// tests/HomePage.spec.js

import {
  test,
  expect
} from '../fixtures/testSetup.js';

import LoginPage from '../pages/LoginPage.js';
import HomePage from '../Pages/HomePage.js';

import LoginData from '../testdata/LogintestData.json';
import HomeData from '../testdata/HomePage.json';


test(
  'TC04 - Verify Products Home Page',
  async ({ page }, testInfo) => {

    const login = new LoginPage(page);

    const home = new HomePage(page);


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
    // STEP 2 - VERIFY PRODUCTS
    // =================================================

    await test.step(
      'STEP 2: Verify Products Page',
      async () => {

        await home.verifyProductsPage(testInfo);

      }
    );


    // =================================================
    // STEP 3 - VERIFY TITLE
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

  }
);