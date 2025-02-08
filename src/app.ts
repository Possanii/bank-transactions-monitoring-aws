import express, { Router, type Express } from 'express';
import cors from 'cors';

export async function configureApp(): Promise<Express> {
  const app = express();

  const router = Router();

  app.use(cors());
  app.use(express.json());

  router.get('/', (req, res) => {
    res.send('Hello, World!');
  });

  router.get('/api', (req, res) => {
    res.send('API is working!');
  });

  app.use('/', router);

  app.use('*', (req, res) => {
    res.send('Route not found!');
  });

  return app;
}
