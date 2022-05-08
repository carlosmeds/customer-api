export interface IAuthentication {
  checkAuth(token: string): Promise<isValid | Error>;
}

type isValid = boolean;
