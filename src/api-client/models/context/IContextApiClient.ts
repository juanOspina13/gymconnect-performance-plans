import type { IContextResponse } from '../../../models/context/IContextResponse';

export interface IContextApiClient {
  getApplicationContext: (
    application: string
    //attributes: string[]
  ) => Promise<IContextResponse>;
}
