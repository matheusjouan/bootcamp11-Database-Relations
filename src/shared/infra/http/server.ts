import 'reflect-metadata';
// Importação no inicio, após do reflect-metadata (typeORM)
import 'dotenv/config';

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';

import cors from 'cors';
import { errors } from 'celebrate';

import uploadConfig from '@config/upload';
import AppError from '@shared/errors/AppError';
import routes from '@shared/infra/http/routes';

import rateLimiter from '@shared/infra/http/middlewares/rateLimiter';

import '@shared/infra/typeorm';
import '@shared/container';

const app = express();

app.use(rateLimiter);
app.use(cors());
app.use(express.json());
app.use('/files', express.static(uploadConfig.uploadsFolder));
app.use(routes);

// ANTES do Handler Global
app.use(errors());

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    // Verifica se o erro é originado pela aplicação, "que conheço, previsto da app"
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: 'error',
        message: err.message,
      });
    }

    console.error(err);

    // Se o erro não for da aplicação, retorna um erro genérico
    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  },
);

app.listen(3333, () => {
  console.log('Server started on port 3333');
});
