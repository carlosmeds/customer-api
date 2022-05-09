import { UnauthorizedException, Injectable } from '@nestjs/common';
import { IAuthentication } from './protocols';

@Injectable()
export class AuthenticationUC implements IAuthentication {
  constructor(private readonly ssoRepository: any) {}

  async checkAuth(token: string): Promise<boolean | Error> {
    const isValid = await this.ssoRepository.checkAuth(token);
    if (!isValid) {
      throw new UnauthorizedException('não autorizado');
    }

    return isValid;
  }
}
