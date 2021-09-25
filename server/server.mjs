import express from 'express';
import logger from 'morgan';

import 'express-async-errors';

import { productsRouter } from './src/products.routes.mjs';
import { usersRouter } from './src/users.routes.mjs';
import { categoriesRouter } from './src/categories.routes.mjs';

import './src/db/connect.mjs';

export const app = express();

app.use(logger('dev'));

app.use(express.json());

app.use('/api/products', productsRouter);
app.use('/api/users', usersRouter);
app.use('/api/categories', categoriesRouter);

app.use(express.static('../client/build/'));

app.listen(8080);


console.log("Server is listening on http://localhost:8080!");