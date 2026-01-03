import type { INavigationInfo } from '../customers/IOrganizationsResponse';
import type { IRole } from './IRole';

export interface IRolesResponse {
  data: Array<IRole>;
  paging: INavigationInfo;
}
