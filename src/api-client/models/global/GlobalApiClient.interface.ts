// file: src/api-client/models/global/GlobalApiClient.interface.ts

/**
 * @Name IGlobalApiClientUrls
 * @description
 * Interface for loading global configuration settings before the user is authenticated
 */
export interface IGlobalApiClientUrls {
  fetchInfo: string;
}

// preliminary
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IGlobalFetchInfoParams {
  // TODO: should we pass the current app url to identify the org?
}

export interface IGlobalFetchInfoResponse {
  success: boolean;
  message: string;
  solutionOrganization: {
    id: string;
    name: string;
  };
}

/**
 * @Name IGlobalApiClient
 * @description
 * Interface for the global api client module
 */
export interface IGlobalApiClient {
  fetchInfo: (params: IGlobalFetchInfoParams) => Promise<IGlobalFetchInfoResponse>;
}
