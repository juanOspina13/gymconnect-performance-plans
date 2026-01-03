// file: src/api-client/models/global/GlobalApiClient.model.ts

import {
  httpClient,
  type IHttpRequestParams,
  HttpRequestType,
} from "../../../http-client";

import {
  type IGlobalApiClient,
  type IGlobalApiClientUrls,
  type IGlobalFetchInfoResponse,
} from "./GlobalApiClient.interface";

/**
 * @Name GlobalApiClientModel
 * @description
 * Implements the IGlobalApiClient interface
 */
export class GlobalApiClientModel implements IGlobalApiClient {
  private readonly urls!: IGlobalApiClientUrls;
  private readonly mockDelay: number = 0;

  constructor(options: { urls: IGlobalApiClientUrls; mockDelay?: number }) {
    this.urls = options.urls;
    if (options.mockDelay) {
      this.mockDelay = options.mockDelay;
    }
  }

  fetchInfo(): Promise<IGlobalFetchInfoResponse> {
    const requestParameters: IHttpRequestParams = {
      requestType: HttpRequestType.get,
      url: this.urls.fetchInfo,
      requiresToken: false, // this is before they login, no token required
    };

    //return httpClient.request<IGlobalFetchInfoResponse>(requestParameters)

    // if you want to keep simulating the artificial delay, use this
    if (!this.mockDelay) {
      return httpClient.request<IGlobalFetchInfoResponse>(requestParameters);
    } else {
      return new Promise<IGlobalFetchInfoResponse>((resolve) => {
        httpClient
          .request<IGlobalFetchInfoResponse>(requestParameters)
          .then((data) => {
            setTimeout(() => {
              resolve(data);
            }, this.mockDelay);
          });
      });
    }
  }
}
