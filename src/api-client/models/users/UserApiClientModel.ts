import { httpClient, HttpRequestType, type IHttpRequestParams } from '../../../http-client';
import type { IPasswordPolicy } from './IPasswordPolicy';
import type { IPasswordPolicyResponse } from './IPasswordPolicyResponse';
import type { IUserApiClientModel } from './IUserApiClientModel';
import type { IUserApiClientModelUrls } from './IUserApiClientModelUrls';

/**
 * @Name UsersApiClientModel
 * @description
 * Implements the IUsersApiClientModel interface
 */
export class UserApiClientModel implements IUserApiClientModel {
  private readonly urls!: IUserApiClientModelUrls;
  private readonly mockDelay: number = 0;

  constructor(options: { urls: IUserApiClientModelUrls; mockDelay?: number }) {
    this.urls = options.urls;
    if (options.mockDelay) {
      this.mockDelay = options.mockDelay;
    }
  }

  createPasswordPolicy(passwordPolicy: IPasswordPolicy): Promise<IPasswordPolicyResponse> {
    const requestParameters: IHttpRequestParams = {
      requestType: HttpRequestType.post,
      url: this.urls.createPasswordPolicy,
      requiresToken: true,
      headers: {
      },
      payload: {
        name: passwordPolicy.name,
        pwdMaxAge: passwordPolicy.pwdMaxAge,
        pwdMinLength: passwordPolicy.pwdMinLength,
        characterSets: passwordPolicy.characterSets
      } as any
    };

    if (!this.mockDelay) {
      return httpClient.request<IPasswordPolicyResponse>(requestParameters);
    } else {
      return new Promise<IPasswordPolicyResponse>((resolve) => {
        httpClient.request<IPasswordPolicyResponse>(requestParameters).then((data: any) => {
          setTimeout(() => {
            resolve(data);
          }, this.mockDelay);
        });
      });
    }
  }
}
