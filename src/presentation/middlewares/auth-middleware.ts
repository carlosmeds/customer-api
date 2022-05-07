import { ForbiddenException, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { AuthenticationRespository } from '../../infra/sso';
import { AuthenticationUC } from '../../use-cases/sso/authentication-uc';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    const authRepository = new AuthenticationRespository();

    const authUC = new AuthenticationUC(authRepository);

    const { authorization } = req.headers;
    const [, token] = authorization.split(' ');

    const isValid = await authUC.checkAuth(token);
    if (!isValid) {
      throw new ForbiddenException('não autorizado');
    }

    next();
  }
}
