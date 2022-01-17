import { signOut } from 'next-auth/client';
import HttpClient from './httpClient';
let signoutTriggered = false;
class ApiClient {
  private httpClient: HttpClient;

  constructor(baseUrl: string) {
    this.httpClient = new HttpClient(baseUrl);
    this.httpClient.addResponseInterceptor(
      (response) => response,
      (err) => {
        if (err?.response?.status === 401 && !signoutTriggered) {
          signoutTriggered = true;
          signOut({
            callbackUrl: `${window.location.origin}/auth/login?reason=session_expired`,
          });
        }

        return Promise.reject(err);
      }
    );
  }

  setToken(token: string) {
    this.httpClient.addHeader('Authorization', `Bearer ${token}`);
    return this;
  }

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
}

export default ApiClient;
