/**
 ****************************************************************************
 *                               API Typings                                *
 ****************************************************************************
 */
type User = {
  name: string;
  email: string;
  avatar: string;
};

type UserProfile = {
  message: string;
  code: number;
  data: User;
};

/* -------------------------------------------------------------------------- */
/*                                    Auth                                    */
/* -------------------------------------------------------------------------- */
type AuthResponse = {
  access_token: string;
  refresh_token: string;
  token_type: string;
  email: string;
  full_name: string;
  permissions: string[];
  // In seconds
  expiry_time: string;
};

type RefreshTokenResponse = {
  access_token: string;
  refresh_token: string;
  token_type: string;
  // In seconds
  expiry_time: string;
};
