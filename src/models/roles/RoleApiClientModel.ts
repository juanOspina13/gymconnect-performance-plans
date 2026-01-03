// file: src/api-client/models/localization/LocalizationApiClient.model.ts

import { IRole } from '../../api-client/models/roles/IRole';
import { IRolesResponse } from '../../api-client/models/roles/IRolesResponse';
import { httpClient, HttpRequestType, IHttpRequestParams } from '../../http-client';
import { IRoleApiClientModel } from './IRoleApiClientModel';
import { IRoleApiClientModelUrls } from './IRoleApiClientModelUrls';


/**
 * @Name RoleApiClientModel
 * @description
 * Implements the IRoleApiClientModel interface
 */
export class RoleApiClientModel implements IRoleApiClientModel {
  private readonly urls!: IRoleApiClientModelUrls;
  private readonly mockDelay: number = 0;

  constructor(options: { urls: IRoleApiClientModelUrls; mockDelay?: number }) {
    this.urls = options.urls;
    if (options.mockDelay) {
      this.mockDelay = options.mockDelay;
    }
  }

  getRoles(
    name: string,
    page: number,
    size: number /* , sort: string[] */
  ): Promise<IRolesResponse> {
    const params = new URLSearchParams({
      name: name,
      page: `${page}`,
      size: `${size}`
      // sort: JSON.stringify(sort)
    });
    const requestParameters: IHttpRequestParams = {
      requestType: HttpRequestType.get,
      url: this.urls.getRoles + '?' + params.toString(),
      requiresToken: true,
      headers: {
      },
      payload: {} as any
    };

    //return httpClient.request<IOrganizationsResponse>(requestParameters)

    // if you want to keep simulating the artificail delay, use this
    if (!this.mockDelay) {
      return httpClient.request<IRolesResponse>(requestParameters);
    } else {
      return new Promise<IRolesResponse>((resolve) => {
        httpClient.request<IRolesResponse>(requestParameters).then((data: any) => {
          setTimeout(() => {
            resolve(data);
          }, this.mockDelay);
        });
      });
    }
  }

  createRole(
    name: string,
    description: string,
    mfa: boolean | undefined,
    locationHeuristics: boolean | undefined,
    apiPermissions: string[]
  ): Promise<IRole> {
    const params = {
      name,
      description,
      mfa: mfa,
      locationHeuristics,
      apiPermissions: apiPermissions
    };

    const requestParameters: IHttpRequestParams = {
      requestType: HttpRequestType.post,
      url: this.urls.createRole,
      requiresToken: true,
      headers: {
      },
      payload: params as any
    };

    //return httpClient.request<IOrganizationsResponse>(requestParameters)

    // if you want to keep simulating the artificail delay, use this
    if (!this.mockDelay) {
      return httpClient.request<IRole>(requestParameters);
    } else {
      return new Promise<IRole>((resolve) => {
        httpClient.request<IRole>(requestParameters).then((data: any) => {
          setTimeout(() => {
            resolve(data);
          }, this.mockDelay);
        });
      });
    }
  }

  updateRole(
    id: string,
    name: string,
    description: string,
    mfa: boolean | undefined,
    locationHeuristics: boolean | undefined,
    apiPermissions: string[]
  ): Promise<IRole> {
    const params = {
      id,
      name,
      description,
      mfa,
      locationHeuristics,
      apiPermissions
    };

    const requestParameters: IHttpRequestParams = {
      requestType: HttpRequestType.put,
      url: this.urls.updateRole + '/' + id,
      requiresToken: true,
      headers: {
      },
      payload: params as any
    };

    //return httpClient.request<IOrganizationsResponse>(requestParameters)

    // if you want to keep simulating the artificail delay, use this
    if (!this.mockDelay) {
      return httpClient.request<IRole>(requestParameters);
    } else {
      return new Promise<IRole>((resolve) => {
        httpClient.request<IRole>(requestParameters).then((data: any) => {
          setTimeout(() => {
            resolve(data);
          }, this.mockDelay);
        });
      });
    }
  }

  getRole(roleId: string): Promise<IRole> {
    /*const params = new URLSearchParams({
    });*/
    const requestParameters: IHttpRequestParams = {
      requestType: HttpRequestType.get,
      url: this.urls.getRole + `/${roleId}`,
      requiresToken: true,
      headers: {
      },
      payload: {} as any
    };

    // if you want to keep simulating the artificail delay, use this
    if (!this.mockDelay) {
      return httpClient.request<IRole>(requestParameters);
    } else {
      return new Promise<IRole>((resolve) => {
        httpClient.request<IRole>(requestParameters).then((data: any) => {
          setTimeout(() => {
            resolve(data);
          }, this.mockDelay);
        });
      });
    }
  }
}
