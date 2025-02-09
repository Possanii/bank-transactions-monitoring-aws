import z from 'zod';

export const accountSchema = z.object({
  name: z.string({
    required_error: 'Name is required'
  }),
  email: z.string({ required_error: 'E-mail is required' }).email('Invalid email. Please, provide a valid one.'),
  password: z.string().min(8, {
    message: 'Password must have at least 8 characters'
  })
});
