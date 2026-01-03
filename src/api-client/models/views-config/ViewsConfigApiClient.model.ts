// file: src/api-client/models/views-config/ViewsConfigApiClient.model.ts

import {
  httpClient,
  type IHttpRequestParams,
  HttpRequestType,
} from "../../../http-client";

import type {
  IViewsConfigApiClient,
  IViewsConfigApiClientUrls,
  IViewsConfigFetchParams,
  IViewsConfigFetchResponse,
} from "./ViewsConfigApiClient.interface";

/**
 * @Name ViewsConfigApiClientModel
 * @description
 * Implements the IViewsConfigApiClient interface
 */
export class ViewsConfigApiClientModel implements IViewsConfigApiClient {
  private readonly urls!: IViewsConfigApiClientUrls;
  //private mockDelay: number = 0;

  constructor(options: {
    urls: IViewsConfigApiClientUrls;
    mockDelay?: number;
  }) {
    this.urls = options.urls;
    if (options.mockDelay) {
      //this.mockDelay = options.mockDelay;
    }
  }

  fetchViewsConfig(
    params: IViewsConfigFetchParams
  ): Promise<IViewsConfigFetchResponse> {
    const requestParameters: IHttpRequestParams<typeof params> = {
      requestType: HttpRequestType.get,
      url: this.urls.fetchViewsConfig,
      requiresToken: true,
      payload: params,
    };

    return httpClient.request<IViewsConfigFetchResponse, typeof params>(
      requestParameters
    );
  }
}
