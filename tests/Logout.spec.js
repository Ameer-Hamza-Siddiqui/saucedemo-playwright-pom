import { test, expect } from '@playwright/test';

import LoginPage from '../Pages/LoginPage.js';
import Logout from '../Pages/logout.js';

import LogoutData from '../testdata/logout.json';


test('TC08 - Logout Test', async ({ page }) => {

  const login = new LoginPage(page);
  const logout = new Logout(page);


  // Login

  await login.goto();

  await login.login(
    LogoutData.username,
    LogoutData.password
  );


  // Logout

  await logout.logout();


  // Verify Login Button

  await expect(login.loginButton)
    .toBeVisible();
});