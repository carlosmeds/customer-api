import { makeUpdateCustomerValidation } from './update-customer-validation';

describe('Validate fields', () => {
  it('should throw if fields are invalid', async () => {
    const body = {
      document: 344343,
    };
    const vd = makeUpdateCustomerValidation(body);
    const validation = vd.validate();

    expect(validation).rejects.toThrow('Request inválida');
  });
  it('should throw if a field type is wrong', async () => {
    const body = {
      name: true,
      document: 344343,
    };
    const vd = makeUpdateCustomerValidation(body);
    const validation = vd.validate();

    expect(validation).rejects.toThrow('Request inválida');
  });
});
