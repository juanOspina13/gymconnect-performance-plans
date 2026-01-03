// file: src/api-client/models/localization/LocalizationApiClient.model.ts

import { httpClient, HttpRequestType, type IHttpRequestParams } from '../../../http-client';

import { type ILocalizationApiClientUrls } from './LocalizationApiClientUrls.interface';
import { type ILocalizationApiClient } from './LocalizationApiClient.interface';

/**
 * @Name LocalizationApiClientModel
 * @description
 * Implements the ILocalizationApiClient interface
 */
export class LocalizationApiClientModel implements ILocalizationApiClient {
  private readonly urls!: ILocalizationApiClientUrls;
  private readonly mockDelay: number = 0;

  constructor(options: { urls: ILocalizationApiClientUrls; mockDelay?: number }) {
    this.urls = options.urls;
    if (options.mockDelay) {
      this.mockDelay = options.mockDelay;
    }
  }

  fetchTranslation(namespace: string, key: string): Promise<{ [key: string]: string }> {
    const requestParameters: IHttpRequestParams = {
      requestType: HttpRequestType.get,
      url: this.urls.fetchTranslation,
      requiresToken: false,
      payload: {
        namespace,
        key
      } as any
    };

    //return httpClient.request<{ [key: string]: string }>(requestParameters)

    // if you want to keep simulating the artificail delay, use this
    if (!this.mockDelay) {
      return httpClient.request<{ [key: string]: string }>(requestParameters);
    } else {
      return new Promise<{ [key: string]: string }>((resolve) => {
        httpClient.request<{ [key: string]: string }>(requestParameters).then((data) => {
          setTimeout(() => {
            resolve(data);
          }, this.mockDelay);
        });
      });
    }
  }
}
