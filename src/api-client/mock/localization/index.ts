// file: src/api-client/mock/localization/index.ts

// import a reference to the app config
import { appConfig } from '../../../app-config';

import { LocalizationApiClientModel } from '../../models';

// instantiate the LocalizationApiClient pointing at the url that returns static json mock data
const localizationApiClient = new LocalizationApiClientModel({
  urls: appConfig.localization.apiUrls,
  mockDelay: 125 // simulate a delay so we can see our loader
});

// export the instance
export { localizationApiClient };
