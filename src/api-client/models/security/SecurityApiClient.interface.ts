// file: src/api-client/models/security/SecurityApiClient.interface.ts

/**
 * @Name ISecurityApiClientUrls
 * @description
 * Interface for the Security urls used to avoid hard-coded strings
 */
export interface ISecurityApiClientUrls {
  authenticate: string;
  authorize: string;
  getCredentials: string;
  logoff: string;
  refreshToken: string;
}

// begin: Step 1
export interface IAuthenticateParameters {
  //(TODO: might need to pass additional params? Let's look at postman
  username: string;
  password: string;
  organizationId: string;
}

export interface IApiResponseIssueItem {
  severity: string; // i.e. 'error'
  code: string; // i.e. 'AS_AUTH_REQUIRED'
  details: string; // i.e. 'Warning: You will be locked out after 1 more failure(s).'
}

export interface IAuthenticateResponse {
  tokenId?: string;
  passwordExpiration?: number;
  issues?: IApiResponseIssueItem[];
}
// end: Step 1

// begin: Step 2
export interface IAuthorizeParameters {
  // pass values from authenticate response to step 2 (TODO: might need to pass additional params? Let's look at postman)
  tokenId: string;
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IAuthorizeResponse {
  // TODO: it seems there is no response when successful (postman shows an http code 302 only)
  // need to ask Benj team what is the definition of success from this reponse (so we can properly check if it failed or succeded in our store)
}
// end: Step 2

// begin: Step 3
export interface ICredentialParameters {
  userCode: string;
  // TODO: we might have to add more params here
}
export interface ICredentialResponse {
  access_token: string;
  refresh_token: string;
  scope: string;
  id_token: string;
  token_type: string;
  expires_in: number;
  nonce: string;
}
// end: Step 2

/**
 * @Name ISecurityApiClient
 * @description
 * Interface for the security api client module
 */
export interface ISecurityApiClient {
  // step 1
  authenticate(parameters: IAuthenticateParameters): Promise<IAuthenticateResponse>;
  // setp 2
  authorize(parameters: IAuthorizeParameters): Promise<IAuthorizeResponse>;
  // step 3 (submit user code and get jwt token/credentials)
  getCredentials(parameters: ICredentialParameters): Promise<ICredentialResponse>;
  // TODO: do we need a refreshToken method?
  //efreshToken(parameters: IRefreshTokenParameters): Promise<IRefreshTokenResponse>
  logoff(): Promise<void>;
}
