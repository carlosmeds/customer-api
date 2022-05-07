export interface IAuthentication {
  checkAuth(token: string): Promise<isValid>;
}

type isValid = boolean;
