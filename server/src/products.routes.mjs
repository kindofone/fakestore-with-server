import express from 'express';
import { getProducts } from './products.service.mjs';
import { addProduct } from './products.service.mjs';
import { getProduct } from './products.service.mjs';
import { editProduct } from './products.service.mjs';
import { deleteProduct } from './products.service.mjs';
import { addReview } from './products.service.mjs';

export const productsRouter = express.Router();

// Get products list
productsRouter.get('/', async (req, res) => {
    res.send(await getProducts(req.query));
});

// Create new product in the products list
productsRouter.post('/', async (req, res) => {
    try{
        res.send(await addProduct(req.body));
    } catch(e) {
        res.status(400);
        res.send(e.message);
    }
});

// Get single product from the list
productsRouter.get('/:id', async (req, res) => {
    res.send(await getProduct(req.params.id));
});

// Update single product from the list
productsRouter.put('/:id', async (req, res) => {
    res.send(await editProduct(req.params.id, req.body))
});

// Delete single product from the list
productsRouter.delete('/:id', async (req, res) => {
    res.send(await deleteProduct(req.params.id));
});

productsRouter.post('/:id/reviews', async (req, res) => {
    res.send(await addReview(req.params.id, req.body));
});

