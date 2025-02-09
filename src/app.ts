import express, { Router, type Express } from 'express';
import cors from 'cors';
import { handleError } from './api/middlewares/handle-error';
import { accountRouter } from './api/account.router';
import { AccountRepository } from './modules/repositories/account.repository';
import { AccountService } from './modules/useCases/account.service';
import { AccountController } from './modules/adapters/account.controller';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  log: ['warn', 'error']
});

const accountRepository = new AccountRepository(prisma);
const accountService = new AccountService(accountRepository);
const accountController = new AccountController(accountService);

export async function configureApp(): Promise<Express> {
  const app = express();

  const router = Router();

  app.use(cors());
  app.use(express.json());

  router.get('/api', (req, res) => {
    res.send('API is working!');
  });

  app.use('/', router);

  app.use('/account', accountRouter(accountController));

  app.use('*', (req, res) => {
    res.send('Route not found!');
  });

  app.use(handleError);

  return app;
}
