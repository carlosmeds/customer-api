import { CustomerUC } from './customer-uc';

describe('Customer Use Case', () => {
  it('should add customer', async () => {
    const customer = new CustomerUC('teste');
    const teste = await customer.addCustomer();

    expect(teste).toBe('customer');
  });
});
