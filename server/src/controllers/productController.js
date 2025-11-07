const axios = require('axios');
const products = require('../data/products');

const getProducts = async (req, res, next) => {
    try {
        res.json(products);
    } catch (error) {
        next(error);
    }
};

module.exports = { getProducts };
