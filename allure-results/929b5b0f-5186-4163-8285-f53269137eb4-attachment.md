# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\Logout.spec.js >> TC08 - Logout Test
- Location: tests\Logout.spec.js:9:5

# Error details

```
ReferenceError: tes is not defined
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | import LoginPage from '../Pages/LoginPage.js';
  4  | import Logout from '../pages/Logout.js';
  5  | 
  6  | import LogoutData from '../testdata/logout.json';
  7  | 
  8  | 
  9  | test('TC08 - Logout Test', async ({ page }) => {
  10 | 
> 11 |   const login = new LoginPage(page);
     |                                    ^ ReferenceError: tes is not defined
  12 |   const logout = new Logout(page);
  13 | 
  14 | 
  15 |   // Login
  16 | 
  17 |   await login.goto();
  18 | 
  19 |   await login.login(
  20 |     LogoutData.username,
  21 |     LogoutData.password
  22 |   );
  23 | 
  24 | 
  25 |   // Logout
  26 | 
  27 |   await logout.logout();
  28 | 
  29 | 
  30 |   // Verify Login Button
  31 | 
  32 |   await expect(login.loginButton)
  33 |     .toBeVisible();
  34 | });
```