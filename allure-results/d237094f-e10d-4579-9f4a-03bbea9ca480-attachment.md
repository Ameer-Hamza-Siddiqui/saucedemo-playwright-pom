# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\Logout.spec.js >> TC08 - Logout Test
- Location: tests\Logout.spec.js:8:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#react-burger-menu-btn')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - generic [ref=e5]:
    - generic [ref=e9]:
      - textbox "Username" [ref=e11]
      - textbox "Password" [ref=e13]
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
  2  | class Logout {
  3  |   constructor(page) {
  4  |     this.page = page;
  5  | 
  6  |     this.menuButton = page.locator('#react-burger-menu-btn');
  7  |     this.logoutButton = page.locator('#logout_sidebar_link');
  8  |   }
  9  | 
  10 |   async attachScreenshot(name){
  11 |   await test.info().attach(name,{
  12 |     body: await this.page.screenshot(),
  13 |     contentType:"image/png",
  14 |   });
  15 | }
  16 | 
  17 |   async logout() {
> 18 |     await this.menuButton.click();
     |                           ^ Error: locator.click: Test timeout of 30000ms exceeded.
  19 |     await this.attachScreenshot("05 After clicking menu button");
  20 |     await this.logoutButton.click();
  21 |     await this.attachScreenshot("06 After clicking logout");
  22 |   }
  23 | 
  24 | }
  25 | 
  26 | export default Logout;
```