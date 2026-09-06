import { attachStepScreenshot } from '../utilities/screenshotUtil.js';
import BasePage from './BasePage.js';

class LoginPage extends BasePage {

  constructor(page) {
    super(page);

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
    await this.usernameInput.waitFor({ state: 'visible', timeout: 10000 });
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
    await this.passwordInput.waitFor({ state: 'visible', timeout: 10000 });
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
    await this.loginButton.waitFor({ state: 'visible', timeout: 10000 });
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
    await this.enterUsername(username, testInfo);
    await this.enterPassword(password, testInfo);
    await this.clickLogin(testInfo);
  }

  // =====================================================
  // GET ERROR MESSAGE
  // =====================================================
  async getErrorMessage() {
    await this.errorMessage.waitFor({ state: 'visible', timeout: 5000 });
    return await this.errorMessage.textContent();
  }

}

export default LoginPage;