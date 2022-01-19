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

type UserSignup = {
  first_name: string;
  last_name: string;
  address: string;
  phone: string;
  note: string;
  email: string;
  password: string;
  proposed_organization_name: string;
};

type PersonMeta = {
  total: number;
  limit: number;
  offset: number;
};

type PersonOrganization = {
  name: string;
  status: number;
  id: number;
};

type Person = {
  id: number;
  full_name: string;
  email: string;
  phone: string;
};

interface UserResponse extends PersonMeta {
  items: Person[];
}

type UserGroupResponse = {
  id: number;
  name: string;
  description: string;
};

type CreatedBy = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
};

type UpdateBy = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
};
