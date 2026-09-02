# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\Logout.spec.js >> TC08 - Logout Test
- Location: tests\Logout.spec.js:9:5

# Error details

```
TypeError: Cannot read properties of undefined (reading 'attach')
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - generic [ref=e5]:
    - generic [ref=e9]:
      - textbox "Username" [active] [ref=e11]: standard_user
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
  1  | // utils/screenshotUtil.js
  2  | 
  3  | // =====================================================
  4  | // STEP SCREENSHOT
  5  | // =====================================================
  6  | 
  7  | export async function attachStepScreenshot(page, testInfo, name) {
  8  | 
> 9  |   await testInfo.attach(name, {
     |                  ^ TypeError: Cannot read properties of undefined (reading 'attach')
  10 | 
  11 |     body: await page.screenshot(),
  12 | 
  13 |     contentType: 'image/png',
  14 | 
  15 |   });
  16 | 
  17 | }
  18 | 
  19 | 
  20 | // =====================================================
  21 | // AFTER TEST SCREENSHOT
  22 | // =====================================================
  23 | 
  24 | export async function attachScreenshotAfterEach(page, testInfo) {
  25 | 
  26 |   // Final Screenshot
  27 |   await testInfo.attach('Final Screenshot', {
  28 | 
  29 |     body: await page.screenshot(),
  30 | 
  31 |     contentType: 'image/png',
  32 | 
  33 |   });
  34 | 
  35 | 
  36 |   // Failure Screenshot
  37 |   if (testInfo.status !== testInfo.expectedStatus) {
  38 | 
  39 |     await testInfo.attach('Failure Screenshot', {
  40 | 
  41 |       body: await page.screenshot(),
  42 | 
  43 |       contentType: 'image/png',
  44 | 
  45 |     });
  46 | 
  47 |   }
  48 | 
  49 | }
```