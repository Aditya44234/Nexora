// models/Cart.js

const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
    productId: { type: String, required: true },
    name: String,
    price: Number,
    image: String,
    qty: { type: Number, default: 1 }
});

const cartSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [cartItemSchema],
    total: { type: Number, default: 0 }
});

module.exports = mongoose.model('Cart', cartSchema);
