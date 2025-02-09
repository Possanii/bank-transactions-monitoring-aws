import { Router } from 'express';
import { IAccountController } from '../modules/adapters/account.controller';
import { wrapRequest } from './middlewares/wrapRequest';

export function accountRouter(controller: IAccountController): Router {
  const router = Router();

  router.post('', wrapRequest(controller.createAccount.bind(controller)));

  return router;
}
