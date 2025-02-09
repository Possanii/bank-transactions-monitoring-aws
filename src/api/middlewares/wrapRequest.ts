import { type Request, type Response, type NextFunction } from 'express';

export function wrapRequest(handler: (req: Request, res: Response, next: NextFunction) => Promise<void>) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.info(
        `Request: \nmethod:${req.method}\noriginalURL:${req.originalUrl}\nBody:${JSON.stringify(req.body)}\nQuery:${JSON.stringify(req.query)}\nParams:${JSON.stringify(req.params)}\nHeaders:${JSON.stringify(req.headers)}`
      );
      await handler(req, res, next);
    } catch (err) {
      next(err);
    }
  };
}
