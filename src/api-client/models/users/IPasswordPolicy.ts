export interface IPasswordPolicy {
  id?: string;
  name: string;
  pwdInHistory?: number;
  pwdMaxAge: number;
  pwdMinLength: number;
  characterSets: string[];
}
