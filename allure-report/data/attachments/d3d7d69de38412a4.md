# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\Login.spec.js >> TC01 - Valid Login
- Location: tests\Login.spec.js:9:5

# Error details

```
ReferenceError: testInfo is not defined
```

# Test source

```ts
  1  | import { test, expect } from  '@playwright/test';
  2  | 
  3  | import LoginPage from '../Pages/LoginPage.js';
  4  | import HomePage from '../Pages/HomePage.js';
  5  | 
  6  | import LoginData from '../testdata/LogintestData.json';
  7  | 
  8  | 
  9  | test('TC01 - Valid Login', async ({ page }) => {
  10 | 
> 11 |   const login = new LoginPage(page,testInfo);
     |                                    ^ ReferenceError: testInfo is not defined
  12 |   const home = new HomePage(page,testInfo);
  13 | 
  14 |   await login.goto();
  15 | 
  16 |   await login.login(
  17 |     LoginData.validUser.username,
  18 |     LoginData.validUser.password
  19 |   );
  20 | 
  21 |   await expect(home.productsTitle)
  22 |     .toHaveText('Products');
  23 | });
  24 | 
  25 | 
  26 | test('TC02 - Locked Out User', async ({ page }) => {
  27 | 
  28 |   const login = new LoginPage(page);
  29 | 
  30 |   await login.goto();
  31 | 
  32 |   await login.login(
  33 |     LoginData.lockedUser.username,
  34 |     LoginData.lockedUser.password
  35 |   );
  36 | 
  37 |   await expect(login.errorMessage)
  38 |     .toContainText('Sorry, this user has been locked out');
  39 | });
  40 | 
  41 | 
  42 | test('TC03 - Invalid Login', async ({ page }) => {
  43 | 
  44 |   const login = new LoginPage(page);
  45 | 
  46 |   await login.goto();
  47 | 
  48 |   await login.login(
  49 |     LoginData.invalidUser.username,
  50 |     LoginData.invalidUser.password
  51 |   );
  52 | 
  53 |   await expect(login.errorMessage)
  54 |     .toContainText('Username and password do not match');
  55 | });
```