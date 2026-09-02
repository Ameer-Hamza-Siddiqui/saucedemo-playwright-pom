// Pages/LoginPage.js

import {
  attachStepScreenshot
} from '../utils/screenshotUtil.js';


class LoginPage {

  constructor(page) {

    this.page = page;

    // Locators
    this.usernameInput = page.locator('#user-name');

    this.passwordInput = page.locator('#password');

    this.loginButton = page.locator('#login-button');

    this.errorMessage = page.locator('[data-test="error"]');

  }


  // =====================================================
  // ENTER USERNAME
  // =====================================================

  async enterUsername(username, testInfo) {

    await this.usernameInput.fill(username);

    await attachStepScreenshot(
      this.page,
      testInfo,
      '01 - After Entering Username'
    );

  }


  // =====================================================
  // ENTER PASSWORD
  // =====================================================

  async enterPassword(password, testInfo) {

    await this.passwordInput.fill(password);

    await attachStepScreenshot(
      this.page,
      testInfo,
      '02 - After Entering Password'
    );

  }


  // =====================================================
  // CLICK LOGIN
  // =====================================================

  async clickLogin(testInfo) {

    await this.loginButton.click();

    await attachStepScreenshot(
      this.page,
      testInfo,
      '03 - After Clicking Login'
    );

  }


  // =====================================================
  // LOGIN
  // =====================================================

  async login(username, password, testInfo) {

    await this.enterUsername(
      username,
      testInfo
    );

    await this.enterPassword(
      password,
      testInfo
    );

    await this.clickLogin(
      testInfo
    );

  }


  // =====================================================
  // GET ERROR MESSAGE
  // =====================================================

  async getErrorMessage() {

    return await this.errorMessage.textContent();

  }

}


export default LoginPage;