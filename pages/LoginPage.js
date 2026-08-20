import {test} from '@playwright/test'

class LoginPage {
  constructor(page) {
    this.page = page;

    this.usernameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
    this.errorMessage = page.locator('[data-test="error"]');
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async getErrorMessage() {
    return await this.errorMessage.textContent();
  }

  async attachScreenshot(name){
  await test.info().attach(name,{
    body: await this.page.screenshot(),
    contentType:"image/png",
  });
  }

   async gotoLoginPage(){
    await this.page.goto('https://www.saucedemo.com/');
    await this.attachScreenshot("01 login page opened")
  }

  async login(usernameInput,passwordInput){
    await this.usernameInput.fill(usernameInput),
    await this.attachScreenshot("02 After entering username ")

    await this.passwordInput.fill(passwordInput),
    await this.attachScreenshot("03 After entering password")

    await this.loginButton.click(),
    await this.attachScreenshot("04 After clicking login")
  }
}
 
export default LoginPage;