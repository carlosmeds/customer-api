import { BadGatewayException } from '@nestjs/common';
import axios from 'axios';
import env from '../../main/env';

export class AuthenticationRespository {
  async checkAuth(token: string): Promise<boolean> {
    let result;
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

    try {
      result = await axios(options);
    } catch (err) {
      throw new BadGatewayException('sso indisponível');
    }

    return result?.data?.active;
  }
}
