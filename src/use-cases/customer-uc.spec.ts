import { Customer } from '../domain/customer';
import { CustomerUC } from './customer-uc';

class inMemoryCustomerRepository {
  async addCustomer(): Promise<Customer> {
    const customer = new Customer('uuid', 123456789, 'John Doe');
    return customer;
  }
}

describe('Customer Use Case', () => {
  it('should add customer', async () => {
    const customerRepository = new inMemoryCustomerRepository();
    const customerUC = new CustomerUC(customerRepository);
    const customerTest = new Customer('uuid', 123456789, 'John Doe');

    const addedCustomer = await customerUC.addCustomer();

    expect(addedCustomer.id).toBe(customerTest.id);
  });
});
