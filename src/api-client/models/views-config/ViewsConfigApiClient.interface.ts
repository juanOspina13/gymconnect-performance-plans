// file: src/api-client/models/views-config/ViewsConfigApiClient.interface.ts

import type {
  IMenuConfig,
  IViewsConfig,
} from "../../../models/views-config";

/**
 * @Name IViewsConfigApiClientUrls
 * @description
 * Interface for the ViewsConfig urls used to avoid hard-coded strings
 */
export interface IViewsConfigApiClientUrls {
  fetchViewsConfig: string;
}

export interface IViewsConfigFetchParams {
  organizationId: string;
  // if we need additional params we'll add them here
}

export interface IViewsConfigFetchResponse {
  menuConfig: IMenuConfig;
  viewsConfig: IViewsConfig;
}

/**
 * @Name IViewsConfigApiClient
 * @description
 * Interface for the ViewsConfig api client module
 */
export interface IViewsConfigApiClient {
  fetchViewsConfig: (
    params: IViewsConfigFetchParams
  ) => Promise<IViewsConfigFetchResponse>;
}
