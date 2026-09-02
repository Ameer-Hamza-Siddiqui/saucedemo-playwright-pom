import { test, expect } from '@playwright/test';

test.describe.serial('Users API Testing', () => {

  let token;

  // ==========================================
  // BASE URL
  // ==========================================
  const BASE_URL =
    'https://api-testing-postman.vercel.app/api/v1';

  // ==========================================
  // TEST DATA
  // ==========================================
  const uniqueId = Date.now();

  const fullname = 'Ameer Hamza';
  const email = `ameer${uniqueId}@gmail.com`;
  const username = `ameer${uniqueId}`;
  const password = 'Test@12345';
  const newPassword = 'NewTest@12345';

  // ==========================================
  // 1. REGISTER USER
  // ==========================================
  test('POST - Register User', async ({ request }) => {

    const response = await request.post(
      `${BASE_URL}/users/register`,
      {
        headers: {
          'Content-Type': 'application/json'
        },

        data: {
          fullname,
          email,
          username,
          password
        }
      }
    );

    const responseBody = await response.text();

    console.log('REGISTER URL:', response.url());
    console.log('REGISTER STATUS:', response.status());
    console.log('REGISTER RESPONSE:', responseBody);

    expect(response.status()).toBe(201);
  });

  // ==========================================
  // 2. LOGIN USER
  // ==========================================
  test('POST - Login User', async ({ request }) => {

    const response = await request.post(
      `${BASE_URL}/users/login`,
      {
        headers: {
          'Content-Type': 'application/json'
        },

        data: {
          username,
          password
        }
      }
    );

    const body = await response.json();

    console.log('LOGIN STATUS:', response.status());
    console.log('LOGIN RESPONSE:', body);

    expect(response.status()).toBe(200);

    token =
      body.data?.accessToken ||
      body.data?.token ||
      body.accessToken ||
      body.token;

    expect(token).toBeTruthy();

    console.log('TOKEN RECEIVED');
  });

  // ==========================================
  // 3. GET CURRENT USER
  // ==========================================
  test('GET - Current User', async ({ request }) => {

    const response = await request.get(
      `${BASE_URL}/users/current-user`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    console.log('CURRENT USER STATUS:', response.status());
    console.log(
      'CURRENT USER RESPONSE:',
      await response.text()
    );

    expect(response.status()).toBe(200);
  });

  // ==========================================
  // 4. GET ALL USERS
  // ==========================================
  test('GET - All Users', async ({ request }) => {

    const response = await request.get(
      `${BASE_URL}/users/all-users`
    );

    console.log('ALL USERS STATUS:', response.status());
    console.log(
      'ALL USERS RESPONSE:',
      await response.text()
    );

    expect(response.status()).toBe(200);
  });

  // ==========================================
  // 5. GET USER BY USERNAME
  // ==========================================
  test('GET - User By Username', async ({ request }) => {

    const response = await request.get(
      `${BASE_URL}/users/user/${username}`
    );

    console.log('USER STATUS:', response.status());
    console.log(
      'USER RESPONSE:',
      await response.text()
    );

    expect(response.status()).toBe(200);
  });

  // ==========================================
  // 6. PATCH - UPDATE ACCOUNT
  // ==========================================
  test('PATCH - Update Account', async ({ request }) => {

    const response = await request.patch(
      `${BASE_URL}/users/update-account`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },

        data: {
          fullname: 'Ameer Hamza Updated',
          email,
          username
        }
      }
    );

    const responseBody = await response.text();

    console.log('PATCH STATUS:', response.status());
    console.log('PATCH RESPONSE:', responseBody);

    expect(response.status()).toBe(200);
  });

  // ==========================================
  // 7. PUT - REPLACE ACCOUNT
  // ==========================================
  test('PUT - Replace Account', async ({ request }) => {

    const response = await request.put(
      `${BASE_URL}/users/replace-account`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },

        data: {
          fullname,
          email,
          username
        }
      }
    );

    const responseBody = await response.text();

    console.log('PUT STATUS:', response.status());
    console.log('PUT RESPONSE:', responseBody);

    expect(response.status()).toBe(200);
  });

  // ==========================================
  // 8. CHANGE PASSWORD
  // ==========================================
  test('POST - Change Password', async ({ request }) => {

    const response = await request.post(
      `${BASE_URL}/users/change-password`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },

        data: {
          oldPassword: password,
          newPassword
        }
      }
    );

    const responseBody = await response.text();

    console.log(
      'CHANGE PASSWORD STATUS:',
      response.status()
    );

    console.log(
      'CHANGE PASSWORD RESPONSE:',
      responseBody
    );

    expect(response.status()).toBe(200);
  });

  // ==========================================
  // 9. LOGOUT
  // ==========================================
  test('POST - Logout User', async ({ request }) => {

    const response = await request.post(
      `${BASE_URL}/users/logout`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    const responseBody = await response.text();

    console.log('LOGOUT STATUS:', response.status());
    console.log('LOGOUT RESPONSE:', responseBody);

    expect(response.status()).toBe(200);
  });

  // ==========================================
  // 10. DELETE ACCOUNT
  // ==========================================
  test('DELETE - Delete Account', async ({ request }) => {

    const response = await request.delete(
      `${BASE_URL}/users/delete-account`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    const responseBody = await response.text();

    console.log('DELETE STATUS:', response.status());
    console.log('DELETE RESPONSE:', responseBody);

    expect(response.status()).toBe(200);
  });

});