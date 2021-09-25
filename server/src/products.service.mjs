import Mongo from 'mongodb';
import {Product} from './db/Products.model.mjs';
import { getUser } from './users.service.mjs';

const {ObjectId} = Mongo;

export function getProducts(filter = {}) {

    const query = {};

    if(filter.title) {
        query.title = new RegExp(filter.title, 'i');
    }

    if(filter.maxPrice || filter.minPrice) {
        query.price = {};
        
        if(filter.maxPrice)
            query.price.$lt = parseInt(filter.maxPrice);

        if(filter.minPrice)
            query.price.$gt = parseInt(filter.minPrice)
    }

    let page = 1;
    let limit = 10;

    if(filter.page) page = parseInt(filter.page);
    if(filter.limit) limit = parseInt(filter.limit);

    return Product
        .paginate(query, { page, limit });
}

export async function getProduct(id, autopopulate = true) {
    return Product
        .findOne(
            { _id: ObjectId(id) },
            null,
            { autopopulate }
        );
}

export async function addProduct(product) {
    const newProduct = new Product(product);
    return newProduct.save();
}

export function deleteProduct(id) {
    return Product.findOneAndDelete({ _id: ObjectId(id) });
}

export function editProduct(id, newProduct) {
    return Product.findOneAndUpdate(
            { _id: ObjectId(id) },
            { $set: newProduct }
        );
}

export function getProductsByUserId(userId) {
    return Product
        .find({seller: userId});
}

export async function addReview(productId, review) {
    const product = await getProduct(productId, false);
    product.reviews.push(review);
    return product.save();
}