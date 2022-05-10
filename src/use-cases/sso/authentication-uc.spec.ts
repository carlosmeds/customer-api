import { UnauthorizedException } from '@nestjs/common';
import { AuthenticationUC } from './authentication-uc';

class inMemoryAuthRepository {
  async checkAuth(token: string): Promise<boolean> {
    if (token === 'valid_token') {
      return true;
    }
    throw new UnauthorizedException('não autorizado');
  }
}

describe('Authentication Use Case', () => {
  it('Should return true when valid token is passed', async () => {
    const authRepository = new inMemoryAuthRepository();
    const authUc = new AuthenticationUC(authRepository);

    const isValid = await authUc.checkAuth('valid_token');

    expect(isValid).toBe(true);
  });
  it('Should throw when invalid token is passed', async () => {
    const authRepository = new inMemoryAuthRepository();
    const authUc = new AuthenticationUC(authRepository);

    const isValid = authUc.checkAuth('invalid_token');
    expect(isValid).rejects.toThrow('não autorizado');
  });
});
