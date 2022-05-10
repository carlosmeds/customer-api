import { Customer } from '../../domain/customer';
import { inMemoryCustomerRepository } from '../../../test/doubles/in-memory-customer-repository';
import { AddCustomerUC } from './add-customer-uc';

describe('Customer Use Case', () => {
  it('should add customer', async () => {
    const customerRepository = new inMemoryCustomerRepository();
    const customerUC = new AddCustomerUC(customerRepository);
    const customerTest = new Customer('uuid', 123456789, 'John Doe');

    const addedCustomer = await customerUC.handle(123456789, 'John Doe');

    expect(addedCustomer.name).toBe(customerTest.name);
    expect(addedCustomer.document).toBe(customerTest.document);
  });
});
