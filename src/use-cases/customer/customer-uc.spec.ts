import { Customer } from '../../domain/customer';
import { CustomerUC } from './customer-uc';

class inMemoryCustomerRepository {
  async addCustomer(customer: Customer): Promise<Customer> {
    return customer;
  }
}

describe('Customer Use Case', () => {
  it('should add customer', async () => {
    const customerRepository = new inMemoryCustomerRepository();
    const customerUC = new CustomerUC(customerRepository);
    const customerTest = new Customer('uuid', 123456789, 'John Doe');

    const addedCustomer = await customerUC.addCustomer(123456789, 'John Doe');
    console.log(addedCustomer);

    expect(addedCustomer.name).toBe(customerTest.name);
    expect(addedCustomer.document).toBe(customerTest.document);
  });
});
