import express from 'express';
import loadJson from 'load-json-file';

let categories = loadJson.sync('./data/categories.json');
export const categoriesRouter = express.Router();


categoriesRouter.get('/', (req, res) => {
    res.send(categories);
});

categoriesRouter.post('/:category', (req, res) => {
    categories.push(req.params.category);
    res.send("OK");
});

categoriesRouter.delete('/:category', (req, res) => {
    categories = categories.filter(category => category != req.params.category);
    res.send("OK");
});
