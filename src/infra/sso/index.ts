import axios from 'axios';
import env from '../../main/env';

export class AuthenticationRespository {
  async checkAuth(token: string): Promise<boolean> {
    const params = {
      client_id: env.ssoClientId,
      client_secret: env.ssoClientSecret,
      token,
    };

    const data = Object.keys(params)
      .map((key) => `${key}=${encodeURIComponent(params[key])}`)
      .join('&');

    const options: any = {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data,
      url: env.ssoUrl,
    };

    const result = await axios(options);

    return result?.data?.active;
  }
}
