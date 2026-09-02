# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\Login.spec.js >> TC01 - Valid Login
- Location: tests\Login.spec.js:13:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#user-name')

```

# Test source

```ts
  1  | import { test } from '../fixtures/testSetup.js';
  2  | 
  3  | import {attachStepScreenshot} from '../utils/screenshotUtil.js';
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
  23 |   async login(username, password) {
  24 | 
  25 | 
  26 |     // STEP 1: Enter Username
  27 |     await test.step('STEP 1: Enter Username', async () => {
  28 | 
> 29 |       await this.usernameInput.fill(username);
     |                                ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  30 | 
  31 |       await attachStepScreenshot(
  32 |         this.page,
  33 |         '01 - After Entering Username'
  34 |       );
  35 | 
  36 |     });
  37 | 
  38 | 
  39 |     // STEP 2: Enter Password
  40 |     await test.step('STEP 2: Enter Password', async () => {
  41 | 
  42 |       await this.passwordInput.fill(password);
  43 | 
  44 |       await attachStepScreenshot(
  45 |         this.page,
  46 |         '02 - After Entering Password'
  47 |       );
  48 | 
  49 |     });
  50 | 
  51 | 
  52 |     // STEP 3: Click Login
  53 |     await test.step('STEP 3: Click Login Button', async () => {
  54 | 
  55 |       await this.loginButton.click();
  56 | 
  57 |       await attachStepScreenshot(
  58 |         this.page,
  59 |         '03 - After Clicking Login'
  60 |       );
  61 | 
  62 |     });
  63 | 
  64 |   }
  65 | 
  66 | 
  67 |   // =================================================
  68 |   // GET ERROR MESSAGE
  69 |   // =================================================
  70 | 
  71 |   async getErrorMessage() {
  72 | 
  73 |     return await this.errorMessage.textContent();
  74 | 
  75 |   }
  76 | 
  77 | }
  78 | 
  79 | 
  80 | export default LoginPage;
```