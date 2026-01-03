// file: src/api-client/models/localization/LocalizationApiClient.interface.ts

/**
 * @Name ILocalizationApiClient
 * @description
 * Interface for the Localization api client module
 */
export interface ILocalizationApiClient {
  fetchTranslation: (namespace: string, key: string) => Promise<{ [key: string]: string }>;
}
