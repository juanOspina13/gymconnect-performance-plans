import { IContextResponse } from './IContextResponse';

export interface IContextApiClientModel {
  getApplicationContext: (application: string, attributes: string[]) => Promise<IContextResponse>;
}
