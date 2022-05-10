import { Customer } from '../../domain/customer';
import { inMemoryCustomerRepository } from '../../../test/doubles/in-memory-customer-repository';
import { GetCustomerUC } from './get-customer-uc';

describe('Customer Use Case', () => {
  it('should get customer', async () => {
    const customerRepository = new inMemoryCustomerRepository();
    const customerUC = new GetCustomerUC(customerRepository);
    const customerTest = new Customer('uuid', 123456789, 'John Doe');

    const addedCustomer = await customerUC.handle('uuid');

    expect(addedCustomer.name).toBe(customerTest.name);
    expect(addedCustomer.document).toBe(customerTest.document);
  });
});
