// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface User {
    fullName: string;
    email: string;
    token: string;
    refreshToken: string;
    tokenType: string;
    permissions: string[];
    tokenExpiryTime: string;
  }

  interface Session {
    user?: {
      email: string;
      fullName: string;
      permissions: string[];
    };
    tokenExpiryTime: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    fullName: string;
    email: string;
    permissions: string[];
    token: string;
    refreshToken: string;
    tokenType: string;
    tokenExpiryTime: string;
  }
}
