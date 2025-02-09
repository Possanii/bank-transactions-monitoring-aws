import { z, ZodError, ZodSchema } from 'zod';
import { ZodError as InvalidDataError } from '../errors/zodError';

export function handleZodValidation<T extends ZodSchema>(schema: T, data: Record<string, any>): z.infer<T> {
  try {
    return schema.parse(data);
  } catch (error) {
    if (error instanceof ZodError) {
      throw new InvalidDataError(error.errors);
    }

    throw new Error('An unexpected error occurred when validation the data');
  }
}
