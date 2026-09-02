
import {
  test,
  expect
} from '../fixtures/testSetup.js';

import LoginPage from '../pages/LoginPage.js';
import Logout from '../pages/Logout.js';

import LogoutData from '../testdata/logout.json';

test ('TC08 - Logout Test', async ({ page }, testInfo) => {

  const login = new LoginPage(page);
  const logout = new Logout(page);

  await test.step(
    'STEP 1: Login to Application',
    async () => {

      await login.login(
        LogoutData.username,
        LogoutData.password,
        testInfo
      );

    }
  );

  await test.step(
    'STEP 2: Logout from Application',
    async () => {

      await logout.logout(testInfo);

    }
  );

  await test.step(
    'STEP 3: Verify Login Button After Logout',
    async () => {

      await expect(login.loginButton)
        .toBeVisible();

    }
  );

});