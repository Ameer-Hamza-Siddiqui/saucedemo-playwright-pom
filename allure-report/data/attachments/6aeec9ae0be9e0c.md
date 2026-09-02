# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\Checkout.spec.js >> TC07 - Complete E2E Purchase Flow
- Location: tests\Checkout.spec.js:11:5

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://www.saucedemo.com/", waiting until "domcontentloaded"

```

# Test source

```ts
  1  | class BasePage {
  2  | 
  3  |   constructor(page) {
  4  |     this.page = page;
  5  |   }
  6  | 
  7  |   async navigate(url) {
  8  | 
> 9  |     await this.page.goto(url, {
     |                     ^ Error: page.goto: Test timeout of 30000ms exceeded.
  10 |       waitUntil: 'domcontentloaded'
  11 |     });
  12 | 
  13 |   }
  14 | 
  15 | }
  16 | 
  17 | export default BasePage;
```