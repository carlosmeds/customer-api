import { Customer } from '../../domain/customer';
import { CustomerUC } from './customer-uc';
import { ICustomer } from './protocols';
import { v4 as uuidv4 } from 'uuid';

class inMemoryCustomerRepository implements ICustomer {
  async addCustomer(document: number, name: string): Promise<Customer> {
    const customer = new Customer(uuidv4(), document, name);
    return customer;
  }
}

describe('Customer Use Case', () => {
  it('should add customer', async () => {
    const customerRepository = new inMemoryCustomerRepository();
    const customerUC = new CustomerUC(customerRepository);
    const customerTest = new Customer('uuid', 123456789, 'John Doe');

    const addedCustomer = await customerUC.addCustomer(123456789, 'John Doe');

    expect(addedCustomer.name).toBe(customerTest.name);
    expect(addedCustomer.document).toBe(customerTest.document);
  });
});
