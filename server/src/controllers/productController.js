const axios = require('axios');
const products = require('../data/products');

const getProducts = async (req, res, next) => {
    try {
        if (process.env.NODE_ENV === 'production') {
            // Use mock products in production
            res.json(products);
        }
    } catch (error) {
        next(error);
    }
};

module.exports = { getProducts };
