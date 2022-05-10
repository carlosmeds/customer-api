import { Customer } from '../../domain/customer';
import { inMemoryCustomerRepository } from '../../../test/doubles/in-memory-customer-repository';
import { UpdateCustomerUC } from './update-customer-uc';

describe('Update Customer Use Case', () => {
  it('should update customer', async () => {
    const customerRepository = new inMemoryCustomerRepository();
    const customerUC = new UpdateCustomerUC(customerRepository);
    const customerTest = new Customer('uuid', 123456789, 'John Doe');

    const addedCustomer = await customerUC.handle(customerTest);

    expect(addedCustomer.name).toBe(customerTest.name);
    expect(addedCustomer.document).toBe(customerTest.document);
  });
});
