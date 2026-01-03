// file: src/api-client/models/localization/LocalizationApiClient.model.ts

import type { IOrganizationsResponse } from '../../api-client/models/customers/IOrganizationsResponse';
import { httpClient, HttpRequestType, type IHttpRequestParams } from '../../http-client';
import type { IOrganizationApiClientModel } from './IOrganizationApiClientModel';
import type { IOrganizationApiClientModelUrls } from './IOrganizationApiClientModelUrls';
import type { IOrganizationAdminInviteResponse } from './IOrganizationInviteResponse';


/**
 * @Name OrganizationApiClientModel
 * @description
 * Implements the IOrganizationApiClientModel interface
 */
export class OrganizationApiClientModel implements IOrganizationApiClientModel {
  private readonly urls!: IOrganizationApiClientModelUrls;
  private readonly mockDelay: number = 0;

  constructor(options: { urls: IOrganizationApiClientModelUrls; mockDelay?: number }) {
    this.urls = options.urls;
    if (options.mockDelay) {
      this.mockDelay = options.mockDelay;
    }
  }

  getCustomers(name: string, page: number, size: number): Promise<IOrganizationsResponse> {
    const params = new URLSearchParams({
      name: name,
      page: `${page}`,
      size: `${size}`
      // sort: JSON.stringify(sort)
    });
    const requestParameters: IHttpRequestParams = {
      requestType: HttpRequestType.get,
      url: this.urls.getCustomers + '?' + params.toString(),
      requiresToken: true,
      headers: {
      },
      payload: {} as any
    };

    //return httpClient.request<IOrganizationsResponse>(requestParameters)

    // if you want to keep simulating the artificail delay, use this
    if (!this.mockDelay) {
      return httpClient.request<IOrganizationsResponse>(requestParameters);
    } else {
      return new Promise<IOrganizationsResponse>((resolve) => {
        httpClient.request<IOrganizationsResponse>(requestParameters).then((data: any) => {
          setTimeout(() => {
            resolve(data);
          }, this.mockDelay);
        });
      });
    }
  }

  inviteAdmin(
    template: string,
    roleName: string,
    orgId: string,
    email: string
  ): Promise<IOrganizationAdminInviteResponse> {
    const params = {
      template,
      roleName,
      orgId,
      email
    };
    const requestParameters: IHttpRequestParams = {
      requestType: HttpRequestType.post,
      url: this.urls.inviteAdmin,
      requiresToken: true,
      headers: {
      },
      payload: params as any
    };

    //return httpClient.request<IOrganizationAdminInviteResponse>(requestParameters)

    // if you want to keep simulating the artificail delay, use this
    if (!this.mockDelay) {
      return httpClient.request<IOrganizationAdminInviteResponse>(requestParameters);
    } else {
      return new Promise<IOrganizationAdminInviteResponse>((resolve) => {
        httpClient
          .request<IOrganizationAdminInviteResponse>(requestParameters)
          .then((data: any) => {
            setTimeout(() => {
              resolve(data);
            }, this.mockDelay);
          });
      });
    }
  }

  getChildOrganizations(orgId: string | undefined): Promise<IOrganizationsResponse> {
    const requestParameters: IHttpRequestParams = {
      requestType: HttpRequestType.get,
      url: this.urls.getCustomers + '/' + orgId + '/children?size=1000',
      requiresToken: true,
      headers: {
      },
      payload: {} as any
    };

    //return httpClient.request<IOrganizationsResponse>(requestParameters)

    // if you want to keep simulating the artificail delay, use this
    if (!this.mockDelay) {
      return httpClient.request<IOrganizationsResponse>(requestParameters);
    } else {
      return new Promise<IOrganizationsResponse>((resolve) => {
        httpClient.request<IOrganizationsResponse>(requestParameters).then((data: any) => {
          setTimeout(() => {
            resolve(data);
          }, this.mockDelay);
        });
      });
    }
  }
}
