import { AuthMiddleware } from './auth-middleware';
import * as httpMocks from 'node-mocks-http';

describe('Authentication Middleware', () => {
  it('should throws if no token is passed', async () => {
    const middleware = new AuthMiddleware();
    const req = httpMocks.createRequest();

    const result = middleware.use(req, null, null);

    expect(result).rejects.toThrow();
  });
});
