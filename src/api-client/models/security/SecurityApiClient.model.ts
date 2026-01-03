/* eslint-disable no-console */
// file: src/api-client/models/security/SecurityApiClient.model.ts

import type {
  IAuthorizeParameters,
  IAuthorizeResponse,
  ICredentialParameters,
  ICredentialResponse,
  ISecurityApiClient,
  ISecurityApiClientUrls,
  IAuthenticateParameters,
  IAuthenticateResponse
} from './SecurityApiClient.interface';
import { httpClient, type IHttpRequestParams, HttpRequestType } from '../../../http-client';
import { appConfig } from '../../../app-config';

/**
 * @Name SecurityApiClientModel
 * @description
 * Implements the ISecurityApiClient interface
 */
export class SecurityApiClientModel implements ISecurityApiClient {
  private readonly urls!: ISecurityApiClientUrls;
  private readonly mockDelay: number = 0;

  constructor(options: { urls: ISecurityApiClientUrls; mockDelay?: number }) {
    this.urls = options.urls;
    if (options.mockDelay) {
      this.mockDelay = options.mockDelay;
    }
  }

  // step 1 of authentication (we submit username and password)
  authenticate(parameters: IAuthenticateParameters): Promise<IAuthenticateResponse> {
    const requestParameters: IHttpRequestParams<typeof parameters> = {
      requestType: HttpRequestType.post,
      url: this.urls.authenticate,
      requiresToken: false,
      headers: {
        'X-Username': parameters.username,
        'X-Password': parameters.password,
        'X-Organization': parameters.organizationId,
        apikey: appConfig.apiClient.apikey
      }
    };

    console.log('parameters.username', parameters.username);
    console.log('parameters.organizationId', parameters.organizationId);
    console.log('appConfig.apiClient.apikey', appConfig.apiClient.apikey);

    return httpClient.request<IAuthenticateResponse, typeof parameters>(requestParameters);

    // // if you want to keep simulating the artificial delay, use this
    // if (!this.mockDelay) {
    //   return httpClient.request<IAuthenticateResponse, typeof parameters>(requestParameters)
    // } else {
    //   return new Promise<IAuthenticateResponse>((resolve) => {
    //     httpClient.request<IAuthenticateResponse, typeof parameters>(requestParameters).then((data) => {
    //       setTimeout(() => {
    //         resolve(data)
    //       }, this.mockDelay)
    //     })
    //   })
    // }
  }

  // step 2 of authentication (submit what we got from step 1 response)
  authorize(parameters: IAuthorizeParameters): Promise<IAuthorizeResponse> {
    const requestParameters: IHttpRequestParams<any> = {
      requestType: HttpRequestType.post,
      url: this.urls.authorize,
      requiresToken: false,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        apikey: appConfig.apiClient.apikey
      },
      payload: {
        redirect_uri: 'http://localhost:3000',
        client_id: 'oidc_pkce',
        scope: 'openid biOrg biUserId biRoles',
        response_type: 'code',
        state: 'abc12345',
        csrf: parameters.tokenId, // this gets tokenId from authenticateResponse
        decision: 'allow',
        code_challenge: 'lKrE7FUKpExIuGLo25Ab2K1t_5e3QKiYKt8M3Oedn0s',
        code_challenge_method: 'S256',
        nonce: '12345abc'
      }
    };

    return httpClient.request<IAuthorizeResponse, typeof parameters>(requestParameters);

    // if you want to keep simulating the artificial delay, use this
    // if (!this.mockDelay) {
    //   return httpClient.request<IAuthorizeResponse, typeof parameters>(requestParameters)
    // } else {
    //   return new Promise<IAuthorizeResponse>((resolve) => {
    //     httpClient.request<IAuthorizeResponse, typeof parameters>(requestParameters).then((data) => {
    //       setTimeout(() => {
    //         resolve(data)
    //       }, this.mockDelay)
    //     })
    //   })
    // }
  }

  // step 3 of authentication (final: the user submit the code received by email and get jwt token back)
  getCredentials(parameters: ICredentialParameters): Promise<ICredentialResponse> {
    const requestParameters: IHttpRequestParams<typeof parameters> = {
      requestType: HttpRequestType.post,
      url: this.urls.getCredentials,
      requiresToken: false,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        apikey: appConfig.apiClient.apikey
      },
      payload: {
        code: parameters.userCode,
        redirect_uri: '',
        grant_type: 'authorization_code',
        client_id: 'oidc_pkce',
        code_verifier:
          'FvIEu~XM3E_raXS49o.jXR4sbOLxVL2eyZptGhWvWpVjLUU-UK.LC-JcgVPH-ajn2tHgysmOcVB8ApTzFGc98t~ttjd.l.oQ.JfWce_YCwQCfie4A0ROGda02-l_mHxn'
      } as any
    };

    //return httpClient.request<ICredentialResponse>(requestParameters)

    // if you want to keep simulating the artificial delay, use this
    if (!this.mockDelay) {
      return httpClient.request<ICredentialResponse, typeof parameters>(requestParameters);
    } else {
      return new Promise<ICredentialResponse>((resolve) => {
        httpClient
          .request<ICredentialResponse, typeof parameters>(requestParameters)
          .then((data) => {
            setTimeout(() => {
              resolve(data);
            }, this.mockDelay);
          });
      });
    }
  }

  logoff(): Promise<void> {
    return new Promise<void>((resolve) => {
      // TODO: call the logo API end-point in here
      resolve();
    });
  }
}
