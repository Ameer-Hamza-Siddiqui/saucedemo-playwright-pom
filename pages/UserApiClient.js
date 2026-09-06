export default class UserApiClient {

  constructor(request) {
    this.request = request;

    this.BASE_URL =
      'https://api-testing-postman.vercel.app/api/v1';

    this.token = null;
  }

  async registerUser(data) {
    return await this.request.post(
      `${this.BASE_URL}/users/register`,
      {
        headers: {
          'Content-Type': 'application/json'
        },
        data
      }
    );
  }

  async loginUser(data) {

    const response = await this.request.post(
      `${this.BASE_URL}/users/login`,
      {
        headers: {
          'Content-Type': 'application/json'
        },
        data
      }
    );

    const body = await response.json();

    this.token =
      body.data?.accessToken ||
      body.data?.token ||
      body.accessToken ||
      body.token;

    return response;
  }

  async getCurrentUser() {
    return await this.request.get(
      `${this.BASE_URL}/users/current-user`,
      {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      }
    );
  }

  async getAllUsers() {
    return await this.request.get(
      `${this.BASE_URL}/users/all-users`
    );
  }

  async getUserByUsername(username) {
    return await this.request.get(
      `${this.BASE_URL}/users/user/${username}`
    );
  }

  async updateAccount(data) {
    return await this.request.patch(
      `${this.BASE_URL}/users/update-account`,
      {
        headers: {
          Authorization: `Bearer ${this.token}`,
          'Content-Type': 'application/json'
        },
        data
      }
    );
  }

  async replaceAccount(data) {
    return await this.request.put(
      `${this.BASE_URL}/users/replace-account`,
      {
        headers: {
          Authorization: `Bearer ${this.token}`,
          'Content-Type': 'application/json'
        },
        data
      }
    );
  }

  async changePassword(oldPassword, newPassword) {
    return await this.request.post(
      `${this.BASE_URL}/users/change-password`,
      {
        headers: {
          Authorization: `Bearer ${this.token}`,
          'Content-Type': 'application/json'
        },
        data: {
          oldPassword,
          newPassword
        }
      }
    );
  }

  async logoutUser() {
    return await this.request.post(
      `${this.BASE_URL}/users/logout`,
      {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      }
    );
  }

  async deleteAccount() {
    return await this.request.delete(
      `${this.BASE_URL}/users/delete-account`,
      {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      }
    );
  }
}