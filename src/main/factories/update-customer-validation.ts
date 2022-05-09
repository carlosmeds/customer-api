import { RequiredFieldValidation } from 'src/presentation/validation/required-field-validation';
import * as yup from 'yup';

export const makeUpdateCustomerValidation = (
  body: any,
): RequiredFieldValidation => {
  const schema = yup.object().shape({
    id: yup.string().required(),
    document: yup.number().required().positive().integer(),
    name: yup.string().required(),
  });

  const vd = new RequiredFieldValidation(body, schema);

  return vd;
};
