// file: src/api-client/models/items/ItemsApiClient.model.ts

import { httpClient, type IHttpRequestParams, HttpRequestType } from '../../../http-client';

import {type   IItemsApiClient, type IItemsApiClientUrls } from './ItemsApiClient.interface';

import {type  IItem } from '../../../models/items/Item.interface';

/**
 * @Name ItemsApiClientModel
 * @description
 * Implements the IItemsApiClient interface
 */
export class ItemsApiClientModel implements IItemsApiClient {
  private readonly urls!: IItemsApiClientUrls;
  private readonly mockDelay: number = 0;

  constructor(options: { urls: IItemsApiClientUrls; mockDelay?: number }) {
    this.urls = options.urls;
    if (options.mockDelay) {
      this.mockDelay = options.mockDelay;
    }
  }

  fetchItems(): Promise<IItem[]> {
    const requestParameters: IHttpRequestParams = {
      requestType: HttpRequestType.get,
      url: this.urls.fetchItems,
      requiresToken: false
    };

    //return httpClient.request<IItem[]>(requestParameters)

    // if you want to keep simulating the artificial delay, use this
    if (!this.mockDelay) {
      return httpClient.request<IItem[]>(requestParameters);
    } else {
      return new Promise<IItem[]>((resolve) => {
        httpClient.request<IItem[]>(requestParameters).then((data) => {
          setTimeout(() => {
            resolve(data);
          }, this.mockDelay);
        });
      });
    }
  }
}
