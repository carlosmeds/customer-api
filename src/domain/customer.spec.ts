import { Customer } from './customer';

describe('Customer tests', () => {
  it('should create a customer', () => {
    const customer = new Customer('uuid', 123456789, 'John Doe');
    expect(customer instanceof Customer).toBeTruthy();
  });
});
