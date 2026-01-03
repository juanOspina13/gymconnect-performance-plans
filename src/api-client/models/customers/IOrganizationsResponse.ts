import type { IOrganization } from '../../../models';

export interface INavigationInfo {
  page: number;
  size: number;
  first: string;
  next: string;
  previous: string;
}

export interface IOrganizationsResponse {
  data: Array<IOrganization>;
  paging: INavigationInfo;
}
