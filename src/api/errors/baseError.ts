export class BaseError extends Error {
  private statusCode: number;
  private reason: string;
  private errors: unknown;

  constructor(statusCode: number, reason: string, message: string, errors?: unknown) {
    super(message);
    this.statusCode = statusCode;
    this.reason = reason;
    this.name = this.constructor.name;
    this.errors = errors;
  }

  getStatusCode() {
    return this.statusCode;
  }

  getReason() {
    return this.reason;
  }

  getErrors() {
    return this.errors;
  }
}
