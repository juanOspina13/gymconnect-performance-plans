// file: src/api-client/models/items/ItemsApiClient.interface.ts

import { type IItem } from '../../../models/items/Item.interface';

/**
 * @Name IItemsApiClientUrls
 * @description
 * Interface for the Items urls used to avoid hard-coded strings
 */
export interface IItemsApiClientUrls {
  fetchItems: string;
}

/**
 * @Name IItemsApiClient
 * @description
 * Interface for the Items api client module
 */
export interface IItemsApiClient {
  fetchItems: () => Promise<IItem[]>;
}
