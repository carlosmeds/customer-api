import { ForbiddenException, Injectable } from '@nestjs/common';
import { IAuthentication } from './protocols';

@Injectable()
export class AuthenticationUC implements IAuthentication {
  constructor(private readonly ssoRepository: any) {}

  async checkAuth(token: string): Promise<boolean | Error> {
    const isValid = this.ssoRepository.checkAuth(token);
    if (!isValid) {
      throw new ForbiddenException('não autorizado');
    }

    return isValid;
  }
}
