import express from 'express';
import { getUsers } from './users.service.mjs';
import { getUser } from './users.service.mjs';
import { addUser } from './users.service.mjs';
import { editUser } from './users.service.mjs';
import { deleteUser } from './users.service.mjs';
// import { getProductsByUserId } from './products.service.mjs';

export const usersRouter = express.Router();


usersRouter.get('/', async (req, res) => {
    res.send(await getUsers());
});

usersRouter.get('/:id', async (req, res) => {
    res.send(await getUser(req.params.id));
});

usersRouter.get('/:id/products', async (req, res) => {
    // res.send(await getProductsByUserId(req.params.id));
});

usersRouter.post('/', async (req, res) => {
    res.send(await addUser(req.body));
});

// Update single product from the list
usersRouter.put('/:id', async (req, res) => {
    res.send(await editUser(req.params.id, req.body))
});

// Delete single product from the list
usersRouter.delete('/:id', async (req, res) => {
    res.send(await deleteUser(req.params.id));
});
