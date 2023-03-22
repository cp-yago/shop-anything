import { z } from 'zod';
import { CheckoutFormData } from '../../../reducers/shopping/reducer';

const requiredErrorMessage = 'This field is required';

const checkoutFormDataSchema = z.object({
  zipCode: z.string({ required_error: requiredErrorMessage }),
  street: z.string({ required_error: requiredErrorMessage }),
  number: z.string({ required_error: requiredErrorMessage }),
  additionalInfo: z.string().optional(),
  neighborhood: z.string({ required_error: requiredErrorMessage }),
  city: z.string({ required_error: requiredErrorMessage }),
  state: z.string({ required_error: requiredErrorMessage }),
  paymentMethod: z.enum(['creditCard', 'debitCard', 'money'], { required_error: requiredErrorMessage }),
});

export const validateSchema = (checkoutFormData: CheckoutFormData): z.ZodIssue[] | 'ok' => {
  const validationResult = checkoutFormDataSchema.safeParse(checkoutFormData);
  if (!validationResult.success) return validationResult.error.issues;
  return 'ok';
};
