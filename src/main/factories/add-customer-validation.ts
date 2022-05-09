import { RequiredFieldValidation } from 'src/presentation/validation/required-field-validation';
import * as yup from 'yup';

export const makeAddCustomerValidation = (
  body: any,
): RequiredFieldValidation => {
  const schema = yup.object().shape({
    document: yup.number().required().positive().integer(),
    name: yup.string().required(),
  });

  const vd = new RequiredFieldValidation(body, schema);

  return vd;
};
