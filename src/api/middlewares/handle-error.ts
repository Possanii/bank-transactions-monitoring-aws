import { type Request, type Response, type NextFunction } from 'express';
import { BaseError } from '../errors/baseError';
import { InternalServerError } from '../errors/InternalServerError';

const normalizeError = (err: Error) => {
  if (err instanceof BaseError) {
    return err;
  }

  return new InternalServerError(err);
};

export function handleError(err: Error, req: Request, res: Response, next: NextFunction) {
  if (res.headersSent) {
    return next(err);
  }

  console.error(err);

  const error = normalizeError(err);

  res.status(error.getStatusCode()).json({
    reason: error.getReason(),
    message: error.message,
    errors: error.getErrors()
  });
}
