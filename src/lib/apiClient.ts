import HttpClient from './httpClient';
let signoutTriggered = false;

class ApiClient {
  private httpClient: HttpClient;

  constructor(baseUrl: string) {
    this.httpClient = new HttpClient(baseUrl);
  }

  setToken(token: string) {
    this.httpClient.addHeader('Authorization', `Bearer ${token}`);
    return this;
  }
  /* -------------------------------------------------------------------------- */
  /*                               Auth                                         */
  /* -------------------------------------------------------------------------- */
  async authenticate(email: string, password: string): Promise<AuthResponse> {
    return this.httpClient
      .post('/login', {
        data: { email, password },
      })
      .then((response) => {
        return response.data;
      });
  }

  async refreshToken(refresh_token: string): Promise<RefreshTokenResponse> {
    return this.httpClient
      .post('/refresh-token', { data: { refresh_token } })
      .then((response) => response.data);
  }

  /*User List Data fetch */

  async getUserList({
    limit,
    offset,
  }: {
    limit: number;
    offset: number;
  }): Promise<UserResponse> {
    return this.httpClient
      .get(`/users`, {
        params: { limit, offset },
      })
      .then((response) => response.data);
  }
}

export default ApiClient;
