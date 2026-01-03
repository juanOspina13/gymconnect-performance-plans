export interface LoginUser {
  username: string;
  password: string;
}

export interface AuthenticationResponse {
  authId: string;
  callbacks: Callback[];
  issues: any[];
}

export interface Callback {
  type: string;
  output: NameValueData[];
  input: NameValueData[];
}

export interface NameValueData {
  name: string;
  value: any;
}

export interface ErrorResponse {
  issues: any[];
}

export interface Auth3Response {
  tokenId: string;
  passwordExpiration: number;
}

export interface AccessTokenResponse {
  access_token: string;
  refresh_token: string;
  scope: string;
  id_token: string;
  token_type: string;
  expires_in: number;
  nonce: string;
}

export interface LogoutRequestBody {
  token: string;
  client_id: string;
}
