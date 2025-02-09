import { BaseError } from './baseError';

export class InternalServerError extends BaseError {
  constructor(err: Error) {
    super(500, 'internal', 'It is not you. It is us. We are having some problems.');

    console.error({
      message: err.message,
      stackTrace: err.stack,
      level: 'fatal'
    });
  }
}
