# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\api.spec.js >> Create User API Test_3
- Location: tests\api.spec.js:55:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 201
Received: 406
```

# Test source

```ts
  1  | // import { test, expect } from '@playwright/test';
  2  | 
  3  | 
  4  | // test('Get All Books API Test', async ({ request }) => {
  5  | // const response = await request.get('https://demoqa.com/BookStore/v1/Books');
  6  | // console.log(await response.json());
  7  | // expect(response.status()).toBe(200);
  8  | // });
  9  | import { test, expect } from '@playwright/test';
  10 | 
  11 | test('Validate Book API Response', async ({ request }) => {
  12 | 
  13 | const response = await request.get('https://demoqa.com/BookStore/v1/Books');
  14 | 
  15 | const responseBody = await response.json();
  16 | 
  17 | expect(response.status()).toBe(200);
  18 | 
  19 | expect(responseBody.books[0].title).toBe('Git Pocket Guide');
  20 | });
  21 | 
  22 | 
  23 | 
  24 | 
  25 | test('Create User API Test', async ({ request }) => {
  26 | const response = await request.post(
  27 | 'https://demoqa.com/Account/v1/User',
  28 | {
  29 |   data: {
  30 |     userName: 'ameerhamzatester0111',
  31 |     password: 'ameerhamzatester0111'
  32 |   }
  33 | }
  34 | );
  35 | console.log(await response.json());
  36 | expect(response.status()).toBe(201);
  37 | });
  38 | 
  39 | 
  40 | test('Create User API Test_2', async ({ request }) => {
  41 | const response = await request.post(
  42 | 'https://demoqa.com/Account/v1/User',
  43 | {
  44 |   data: {
  45 |     userName: 'haristester01',
  46 |     password: 'Haris@12345'
  47 |   }
  48 | }
  49 | );
  50 | console.log(await response.json());
  51 | expect(response.status()).toBe(201);
  52 | });
  53 | 
  54 | 
  55 | test('Create User API Test_3', async ({ request }) => {
  56 | const response = await request.post(
  57 | 'https://demoqa.com/Account/v1/User',
  58 | {
  59 |   data: {
  60 |     userName: 'haristester01',
  61 |     password: 'Haris@12345'
  62 |   }
  63 | }
  64 | );
  65 | console.log(await response.json());
> 66 | expect(response.status()).toBe(201);
     |                           ^ Error: expect(received).toBe(expected) // Object.is equality
  67 | });
  68 | //npx playwright test tests/Api.spec.js -g "Validate Book API Response"
  69 | //npx playwright test tests/Api.spec.js -g "Create User API Test"
  70 | 
```