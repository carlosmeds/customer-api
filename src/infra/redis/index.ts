import { Customer } from '../../domain/customer';

export class RedisCustomerRepository {
  async addCustomer(): Promise<Customer> {
    console.log('addCustomer');
    const customer = new Customer('uuid', 123456789, 'John Doe');
    return customer;
  }
}
