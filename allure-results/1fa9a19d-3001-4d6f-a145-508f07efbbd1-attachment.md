# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\Login.spec.js >> TC03 - Invalid Login
- Location: tests\Login.spec.js:78:5

# Error details

```
Error: locator.fill: Test ended.
Call log:
  - waiting for locator('#user-name')

```

# Test source

```ts
  1  | 
  2  | import {attachStepScreenshot } from '../utils/screenshotUtil.js';
  3  | 
  4  | 
  5  | class LoginPage {
  6  | 
  7  |   constructor(page) {
  8  | 
  9  |     this.page = page;
  10 | 
  11 |     this.usernameInput = page.locator('#user-name');
  12 |     this.passwordInput = page.locator('#password');
  13 |     this.loginButton = page.locator('#login-button');
  14 |     this.errorMessage = page.locator('[data-test="error"]');
  15 | 
  16 |   }
  17 | 
  18 | 
  19 |   // =================================================
  20 |   // LOGIN
  21 |   // =================================================
  22 | 
  23 |   async enterUsername(username) {
  24 | 
> 25 |     await this.usernameInput.fill(username);
     |                              ^ Error: locator.fill: Test ended.
  26 | 
  27 |     await attachStepScreenshot(
  28 |       this.page,
  29 |       '01 - After Entering Username'
  30 |     );
  31 | 
  32 |   }
  33 | 
  34 | 
  35 |   async enterPassword(password) {
  36 | 
  37 |     await this.passwordInput.fill(password);
  38 | 
  39 |     await attachStepScreenshot(
  40 |       this.page,
  41 |       '02 - After Entering Password'
  42 |     );
  43 | 
  44 |   }
  45 | 
  46 | 
  47 |   async clickLogin() {
  48 | 
  49 |     await this.loginButton.click();
  50 | 
  51 |     await attachStepScreenshot(
  52 |       this.page,
  53 |       '03 - After Clicking Login'
  54 |     );
  55 | 
  56 |   }
  57 | 
  58 | 
  59 |   async login(username, password) {
  60 | 
  61 |     await this.enterUsername(username);
  62 | 
  63 |     await this.enterPassword(password);
  64 | 
  65 |     await this.clickLogin();
  66 | 
  67 |   }
  68 | 
  69 | 
  70 |   // =================================================
  71 |   // GET ERROR MESSAGE
  72 |   // =================================================
  73 | 
  74 |   async getErrorMessage() {
  75 | 
  76 |     return await this.errorMessage.textContent();
  77 | 
  78 |   }
  79 | 
  80 | }
  81 | 
  82 | 
  83 | export default LoginPage;
  84 | 
  85 | 
```