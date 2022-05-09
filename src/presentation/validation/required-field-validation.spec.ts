import { RequiredFieldValidation } from './required-field-validation';
import * as yup from 'yup';

describe('Validate fields', () => {
  it('should throw 400 if fields are invalid', async () => {
    const input = {
      name: 'name',
    };
    const schema = yup.object().shape({
      document: yup.number().required().positive().integer(),
      name: yup.string().required(),
    });
    const vd = new RequiredFieldValidation(input, schema);
    const validation = vd.validate();
    expect(validation).rejects.toThrow('Request inválida');
  });
});
