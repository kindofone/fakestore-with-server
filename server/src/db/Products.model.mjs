import mongoose from 'mongoose';
import {getUser} from '../users.service.mjs';
import autopopulate from 'mongoose-autopopulate';
import paginate from 'mongoose-paginate';
import {reviewSchema} from './Review.schema.mjs';

const productsSchema = new mongoose.Schema({
    title: String,
    price: {
        type: Number,
        min: 0,
    },
    description: String,
    category: {
        type: String,
        enum: ["mobile", "gadget", "tv"],
        get: v => `Category: ${v}`
    },
    image: String,
    store: {
        city: String,
        stree: String,
        quantity: {
            type: Number,
            min: 0,
            set: v => Math.floor(v),
        }
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        autopopulate: true,
        validate: {
            validator: async id => (await getUser(id)) ? true : false,
            message: id => 'Invalid User ID!',
        },
    },
    reviews: [reviewSchema],
});

productsSchema.plugin(autopopulate);
productsSchema.plugin(paginate);

export const Product = mongoose.model('Product', productsSchema);