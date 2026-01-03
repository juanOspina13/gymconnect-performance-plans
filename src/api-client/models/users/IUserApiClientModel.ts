import type { IPasswordPolicy } from './IPasswordPolicy';
import type { IPasswordPolicyResponse } from './IPasswordPolicyResponse';

export interface IUserApiClientModel {
  createPasswordPolicy: (passwordPolicy: IPasswordPolicy) => Promise<IPasswordPolicyResponse>;
}
