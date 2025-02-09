import { ZodIssue } from 'zod';
import { BaseError } from './baseError';

export class ZodError extends BaseError {
  constructor(errors: ZodIssue[]) {
    super(422, 'ZodError', 'Invalid request data', errors);
  }
}
