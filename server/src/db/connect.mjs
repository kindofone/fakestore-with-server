import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/fakestore', {useNewUrlParser: true, useUnifiedTopology: true});