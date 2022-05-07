import { Injectable } from '@nestjs/common';
import { IAuthentication } from './protocols';

@Injectable()
export class AuthenticationUC implements IAuthentication {
  constructor(private readonly ssoRepository: any) {}

  async checkAuth(token: string): Promise<boolean> {
    const result = this.ssoRepository.checkAuth(token);
    return result;
  }
}
