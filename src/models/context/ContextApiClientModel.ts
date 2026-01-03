import { httpClient, HttpRequestType, IHttpRequestParams } from '../../http-client';
import { IContextApiClientModel } from './IContextApiClientModel';
import { IContextResponse } from './IContextResponse';
import { IContextApiClientModelUrls } from './IContextApiClientModelUrls';

/**
 * @Name ContextApiClientModel
 * @description
 * Implements the IContextApiClientModel interface
 */
export class ContextApiClientModel implements IContextApiClientModel {
  private readonly urls!: IContextApiClientModelUrls;
  private readonly mockDelay: number = 0;

  constructor(options: { urls: IContextApiClientModelUrls; mockDelay?: number }) {
    this.urls = options.urls;
    if (options.mockDelay) {
      this.mockDelay = options.mockDelay;
    }
  }

  getApplicationContext(
    application: string
    // attributes: string[]
  ): Promise<IContextResponse> {
    // const params = new URLSearchParams({});
    const requestParameters: IHttpRequestParams = {
      requestType: HttpRequestType.get,
      url: this.urls.getApplicationContext + '/' + application,
      requiresToken: true,
      headers: {
      },
      payload: {} as any
    };

    //return httpClient.request<IOrganizationsResponse>(requestParameters)

    // if you want to keep simulating the artificail delay, use this
    if (!this.mockDelay) {
      return httpClient.request<IContextResponse>(requestParameters);
    } else {
      return new Promise<IContextResponse>((resolve) => {
        httpClient.request<IContextResponse>(requestParameters).then((data: any) => {
          setTimeout(() => {
            resolve(data);
          }, this.mockDelay);
        });
      });
    }
  }
}
