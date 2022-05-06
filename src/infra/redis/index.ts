import { Customer } from '../../domain/customer';
import { Cache } from './helper';

export class RedisCustomerRepository {
  async addCustomer(customer: Customer): Promise<Customer> {
    const cache = new Cache();
    await cache.set(customer.id, customer, 60);

    return customer;
  }

  async getCustomer(id: string): Promise<Customer> {
    const cache = new Cache();
    const customer = await cache.get(id);

    return customer;
  }
}
