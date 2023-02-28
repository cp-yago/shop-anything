import * as yup from 'yup';

export const addressInfoSchema = yup.object({
  zipCode: yup.string().required(),
  street: yup.string().required(),
  number: yup.number().positive().integer().required(),
  additionalInfo: yup.string().required(),
  neighborhood: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  paymentMethod: yup.string().oneOf(['creditCard', 'debitCard', 'money']).required(),
}).required();
