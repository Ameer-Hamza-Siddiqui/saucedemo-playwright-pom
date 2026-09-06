import { test, expect } from '@playwright/test';
import UserApiClient from '../pages/UserApiClient.js';
import userData from '../testdata/UserData.json' with { type: 'json' };

test.describe.serial('Users API Testing', () => {

  let apiClient;

  const uniqueId = Date.now();

  const email = `ameer${uniqueId}@gmail.com`;
  const username = `ameer${uniqueId}`;

  test.beforeAll(async ({ playwright }) => {

    const request = await playwright.request.newContext();

    apiClient = new UserApiClient(request);
  });


  // ==========================================
  // 1. REGISTER
  // ==========================================
  test('POST - Register User', async () => {

    const response = await apiClient.registerUser({

      fullname: userData.fullname,
      email: email,
      username: username,
      password: userData.password

    });

    console.log('REGISTER STATUS:', response.status());
    console.log('REGISTER RESPONSE:', await response.text());

    expect(response.status()).toBe(201);
  });


  // ==========================================
  // 2. LOGIN
  // ==========================================
  test('POST - Login User', async () => {

    const response = await apiClient.loginUser({

      username: username,
      password: userData.password

    });

    console.log('LOGIN STATUS:', response.status());
    console.log('LOGIN RESPONSE:', await response.text());

    expect(response.status()).toBe(200);
    expect(apiClient.token).toBeTruthy();
  });


  // ==========================================
  // 3. CURRENT USER
  // ==========================================
  test('GET - Current User', async () => {

    const response =
      await apiClient.getCurrentUser();

    expect(response.status()).toBe(200);

  });


  // ==========================================
  // 4. ALL USERS
  // ==========================================
  test('GET - All Users', async () => {

    const response =
      await apiClient.getAllUsers();

    expect(response.status()).toBe(200);

  });


  // ==========================================
  // 5. USER BY USERNAME
  // ==========================================
  test('GET - User By Username', async () => {

    const response =
      await apiClient.getUserByUsername(username);

    expect(response.status()).toBe(200);

  });


  // ==========================================
  // 6. PATCH
  // ==========================================
  test('PATCH - Update Account', async () => {

    const response =
      await apiClient.updateAccount({

        fullname: 'Ameer Hamza Updated',
        email: email,
        username: username

      });

    expect(response.status()).toBe(200);

  });


  // ==========================================
  // 7. PUT
  // ==========================================
  test('PUT - Replace Account', async () => {

    const response =
      await apiClient.replaceAccount({

        fullname: userData.fullname,
        email: email,
        username: username

      });

    expect(response.status()).toBe(200);

  });


  // ==========================================
  // 8. CHANGE PASSWORD
  // ==========================================
  test('POST - Change Password', async () => {

    const response =
      await apiClient.changePassword(
        userData.password,
        userData.newPassword
      );

    expect(response.status()).toBe(200);

  });


  // ==========================================
  // 9. LOGOUT
  // ==========================================
  test('POST - Logout User', async () => {

    const response =
      await apiClient.logoutUser();

    expect(response.status()).toBe(200);

  });


  // ==========================================
  // 10. DELETE
  // ==========================================
  test('DELETE - Delete Account', async () => {

    const response =
      await apiClient.deleteAccount();

    expect(response.status()).toBe(200);

  });

});