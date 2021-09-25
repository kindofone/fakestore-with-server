import mongoose from 'mongoose';
import {getUser} from '../users.service.mjs';
import autopopulate from 'mongoose-autopopulate';

export const reviewSchema = new mongoose.Schema({
    body: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        autopopulate: true,
        validate: {
            validator: async id => (await getUser(id)) ? true : false,
            message: id => 'Invalid User ID!',
        },
    },
    creationTime: {
        type: Date,
        default: () => Date.now(),
    },
    score: {
        type: Number,
        required: true,
        min: 0,
        max: 5,
    }
});

reviewSchema.plugin(autopopulate);