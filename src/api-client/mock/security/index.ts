// file: src/api-client/mock/security/index.ts

// import a reference to the app config
import { appConfig } from '../../../app-config';

import type {
  ISecurityApiClient,
  IAuthenticateParameters,
  IAuthenticateResponse,
  IAuthorizeParameters,
  IAuthorizeResponse,
  ICredentialParameters,
  ICredentialResponse
} from '../../models/';
import { httpClient, type IHttpRequestParams, HttpRequestType } from '../../../http-client';

const urls = appConfig.security.apiUrls;

const securityApiClient: ISecurityApiClient = {
  // step 1 of authentication (we submit username and password)
  authenticate(parameters: IAuthenticateParameters): Promise<IAuthenticateResponse> {
    const requestParameters: IHttpRequestParams<typeof parameters> = {
      requestType: HttpRequestType.get,
      url: urls.authenticate,
      requiresToken: false
    };

    // here we simulate an artificial delay
    return new Promise<IAuthenticateResponse>((resolve) => {
      httpClient
        .request<IAuthenticateResponse, typeof parameters>(requestParameters)
        .then((data) => {
          setTimeout(() => {
            resolve(data);
          }, 500);
        });
    });
  },

  // step 2 of authentication (submit what we got from step 1 response)
  authorize(parameters: IAuthorizeParameters): Promise<IAuthorizeResponse> {
    const requestParameters: IHttpRequestParams<any> = {
      requestType: HttpRequestType.get,
      url: urls.authorize,
      requiresToken: false
    };

    // here we simulate an artificial delay
    return new Promise<IAuthorizeResponse>((resolve) => {
      httpClient.request<IAuthorizeResponse, typeof parameters>(requestParameters).then((data) => {
        setTimeout(() => {
          resolve(data);
        }, 500);
      });
    });
  },

  // step 3 of authentication (final: the user submit the code received by email and get jwt token back)
  getCredentials(parameters: ICredentialParameters): Promise<ICredentialResponse> {
    const requestParameters: IHttpRequestParams<typeof parameters> = {
      requestType: HttpRequestType.get,
      url: urls.getCredentials,
      requiresToken: false
    };

    //return httpClient.request<ICredentialResponse>(requestParameters)

    // here we simulate an artificial delay
    return new Promise<ICredentialResponse>((resolve) => {
      httpClient.request<ICredentialResponse, typeof parameters>(requestParameters).then((data) => {
        setTimeout(() => {
          resolve(data);
        }, 500);
      });
    });
  },

  logoff(): Promise<void> {
    return new Promise<void>((resolve) => {
      // here we simulate an artificial delay
      setTimeout(() => {
        resolve();
      }, 500);
    });
  }
};

// export our instance
export { securityApiClient };
