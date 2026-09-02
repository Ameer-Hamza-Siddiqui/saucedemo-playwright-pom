// tests/Login.spec.js

import {
  test,
  expect
} from '../fixtures/testSetup.js';

import LoginPage from '../pages/LoginPage.js';
import HomePage from '../Pages/HomePage.js';

import LoginData from '../testdata/LogintestData.json';


// =====================================================
// TC01 - VALID LOGIN
// =====================================================

test('TC01 - Valid Login', async ({
  page
}, testInfo) => {

  const login = new LoginPage(page);

  const home = new HomePage(page);


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
    'STEP 2: Verify Products Page',
    async () => {

      await expect(home.productsTitle)
        .toHaveText('Products');

    }
  );

});


// =====================================================
// TC02 - LOCKED USER
// =====================================================

test('TC02 - Locked Out User', async ({
  page
}, testInfo) => {

  const login = new LoginPage(page);


  await test.step(
    'STEP 1: Login with Locked Out User',
    async () => {

      await login.login(
        LoginData.lockedUser.username,
        LoginData.lockedUser.password,
        testInfo
      );

    }
  );


  await test.step(
    'STEP 2: Verify Error Message',
    async () => {

      await expect(login.errorMessage)
        .toContainText(
          'Sorry, this user has been locked out'
        );

    }
  );

});


// =====================================================
// TC03 - INVALID LOGIN
// =====================================================

test('TC03 - Invalid Login', async ({
  page
}, testInfo) => {

  const login = new LoginPage(page);


  await test.step(
    'STEP 1: Login with Invalid User',
    async () => {

      await login.login(
        LoginData.invalidUser.username,
        LoginData.invalidUser.password,
        testInfo
      );

    }
  );


  await test.step(
    'STEP 2: Verify Error Message',
    async () => {

      await expect(login.errorMessage)
        .toContainText(
          'Username and password do not match'
        );

    }
  );

});