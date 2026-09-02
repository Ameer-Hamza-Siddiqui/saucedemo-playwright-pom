# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke\Smoke.spec.js >> SMOKE TEST - Complete Application Flow
- Location: smoke\Smoke.spec.js:16:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#login-button')
    - locator resolved to <input type="submit" value="Login" id="login-button" name="login-button" data-test="login-button" class="submit-button btn_action"/>
  - attempting click action
    - waiting for element to be visible, enabled and stable

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - generic [ref=e5]:
    - generic [ref=e9]:
      - textbox "Username" [ref=e11]: standard_user
      - textbox "Password" [active] [ref=e13]: secret_sauce
      - button "Login" [ref=e15] [cursor=pointer]
    - generic [ref=e17]:
      - generic [ref=e18]:
        - heading "Accepted usernames are:" [level=4] [ref=e19]
        - text: standard_userlocked_out_userproblem_userperformance_glitch_usererror_uservisual_user
      - generic [ref=e20]:
        - heading "Password for all users:" [level=4] [ref=e21]
        - text: secret_sauce
```

# Test source

```ts
  1  | import {test} from '@playwright/test'
  2  | 
  3  | class LoginPage {
  4  |   constructor(page) {
  5  |     this.page = page;
  6  | 
  7  |     this.usernameInput = page.locator('#user-name');
  8  |     this.passwordInput = page.locator('#password');
  9  |     this.loginButton = page.locator('#login-button');
  10 |     this.errorMessage = page.locator('[data-test="error"]');
  11 |   }
  12 | 
  13 |   async goto() {
  14 |     await this.page.goto('https://www.saucedemo.com/');
  15 |   }
  16 | 
  17 |   async login(username, password) {
  18 |     await this.usernameInput.fill(username);
  19 |     await this.passwordInput.fill(password);
  20 |     await this.loginButton.click();
  21 |   }
  22 | 
  23 |   async getErrorMessage() {
  24 |     return await this.errorMessage.textContent();
  25 |   }
  26 | 
  27 |   async attachScreenshot(name){
  28 |   await test.info().attach(name,{
  29 |     body: await this.page.screenshot(),
  30 |     contentType:"image/png",
  31 |   });
  32 |   }
  33 | 
  34 |    async gotoLoginPage(){
  35 |     await this.page.goto('https://www.saucedemo.com/');
  36 |     await this.attachScreenshot("01 login page opened")
  37 |   }
  38 | 
  39 |   async login(usernameInput,passwordInput){
  40 |     await this.usernameInput.fill(usernameInput),
  41 |     await this.attachScreenshot("02 After entering username ")
  42 | 
  43 |     await this.passwordInput.fill(passwordInput),
  44 |     await this.attachScreenshot("03 After entering password")
  45 | 
> 46 |     await this.loginButton.click(),
     |                            ^ Error: locator.click: Test timeout of 30000ms exceeded.
  47 |     await this.attachScreenshot("04 After clicking login")
  48 |   }
  49 | }
  50 |  
  51 | export default LoginPage;
```