import { BadGatewayException } from '@nestjs/common';
import { Customer } from '../../domain/customer';
import { Cache } from './helper';

export class RedisCustomerRepository {
  async addCustomer(customer: Customer): Promise<Customer> {
    const cache = new Cache();
    try {
      await cache.set(customer.id, customer, 3600);
    } catch (err) {
      throw new BadGatewayException('cache indisponível');
    } finally {
      await cache.disconnect();
    }

    return customer;
  }

  async getCustomer(id: string): Promise<Customer> {
    const cache = new Cache();
    let customer;
    try {
      customer = await cache.get(id);
    } catch (err) {
      throw new BadGatewayException('cache indisponível');
    } finally {
      await cache.disconnect();
    }

    return customer;
  }
}
