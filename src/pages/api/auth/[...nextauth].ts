import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

import logger from 'lib/server/logger';
import ApiClient from 'lib/apiClient';

const MAX_AGE = parseInt(process.env.NEXTAUTH_SESSION_DURATION || '0', 10);

export default NextAuth({
  callbacks: {
    async jwt(token, user) {
      // Initial sign in
      if (user) {
        return {
          ...token,
          ...user,
        };
      }

      // Return previous token if the access token has not expired yet
      if (Date.now() < new Date(token.tokenExpiryTime).getTime()) {
        return token;
      }

      // Access token has expired, try to update it
      logger.info(
        '[next-auth] Access token expired, trying to get new one using refresh token...'
      );

      try {
        const apiService = new ApiClient(process.env.API_BASE_URL!);
        const response = await apiService.refreshToken(token.refreshToken);

        return {
          ...token,
          token: response.access_token,
          refreshToken: response.refresh_token,
          tokenExpiryTime: calculateTokenExpiryTime(response.expiry_time),
        };
      } catch (err: any) {
        logger.error(
          `[next-auth] refresh token api [${err?.status}] ${JSON.stringify(
            err?.data
          )}`
        );

        // Either refresh token expired or already used
        throw new Error('RefreshTokenError');
      }
    },
    async session(session, token) {
      return {
        ...session,
        user: {
          email: token.email,
          permissions: token.permissions,
          fullName: token.fullName,
        },
        tokenExpiryTime: token.tokenExpiryTime,
      };
    },
  },
  debug: process.env.NODE_ENV === 'development',
  events: {},
  jwt: {
    maxAge: MAX_AGE,
  },
  logger: {
    error(code, ...message) {
      logger.error(`[next-auth] ${code} ${message.join(', ')}`);
    },
    warn(code, ...message) {
      logger.warn(`[next-auth] ${code} ${message.join(', ')}`);
    },
    debug(code, ...message) {
      logger.debug(`[next-auth] ${code} ${message.join(', ')}`);
    },
  },
  pages: {
    signIn: '/auth/login',
    error: '/auth/login',
  },
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(
        credentials: Record<'email' | 'password' | 'callbackUrl', string>
      ) {
        const { email, password, callbackUrl } = credentials;

        try {
          const apiService = new ApiClient(process.env.API_BASE_URL!);
          const response = await apiService.authenticate(email, password);

          return {
            fullName: response.full_name,
            email: response.email,
            permissions: response.permissions,
            token: response.access_token,
            refreshToken: response.refresh_token,
            tokenType: response.token_type,
            tokenExpiryTime: calculateTokenExpiryTime(response.expiry_time),
          };
        } catch (err: any) {
          logger.error(
            `signin api [${err?.status}] ${JSON.stringify(err?.data)}`
          );

          // eslint-disable-next-line no-throw-literal
          throw `/auth/login?callbackUrl=${encodeURIComponent(
            callbackUrl
          )}&error=CredentialsSignin`;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    jwt: true,
    maxAge: MAX_AGE,
  },
});

function calculateTokenExpiryTime(originalExpiryTime: string) {
  const currentTimeInMs = Date.now();
  const expiryTimeInMs = new Date(
    parseInt(originalExpiryTime, 10) * 1000
  ).getTime();

  /**
   * Set token expiry time to 95% of the original time so that
   * we can refresh token early, before it expires.
   */
  const expiryThresholdInMs = Math.floor(
    (expiryTimeInMs - currentTimeInMs) * 0.95
  );

  return new Date(currentTimeInMs + expiryThresholdInMs).toISOString();
}
