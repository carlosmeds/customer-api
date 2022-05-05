import { Customer } from '../../domain/customer';
import { v4 as uuidv4 } from 'uuid';
import { Cache } from './helper';

export class RedisCustomerRepository {
  async addCustomer(): Promise<Customer> {
    const cache = new Cache();
    await cache.set(
      'jd',
      { id: uuidv4(), document: 4343, name: 'John Doeteste' },
      60,
    );
    const result = await cache.get('jd');

    return result;
  }
}
