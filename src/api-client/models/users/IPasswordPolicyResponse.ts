export interface IPasswordPolicyResponse {
  id: string;
  name: string;
  pwdInHistory: number;
  pwdMaxAge: number;
  pwdMinLength: number;
  characterSets: string[];
}
