import { AuthMiddleware } from './auth-middleware';
import * as httpMocks from 'node-mocks-http';

describe('Authentication Middleware', () => {
  it('should return 401 if no token is passed', async () => {
    const middleware = new AuthMiddleware();
    const req = httpMocks.createRequest();

    const result = middleware.use(req, null, null);

    expect(result).rejects.toThrow('não autorizado');
  });
});
