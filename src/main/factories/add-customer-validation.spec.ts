import { makeAddCustomerValidation } from './add-customer-validation';

describe('Validate fields', () => {
  it('should throw if a field is missing', async () => {
    const body = {
      name: 'name',
    };
    const vd = makeAddCustomerValidation(body);
    const validation = vd.validate();

    expect(validation).rejects.toThrow('Request inválida');
  });
  it('should throw if a field type is wrong', async () => {
    const body = {
      name: 'name',
      document: 'document',
    };
    const vd = makeAddCustomerValidation(body);
    const validation = vd.validate();

    expect(validation).rejects.toThrow('Request inválida');
  });
});
