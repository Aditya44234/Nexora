const axios = require('axios');
const products = require('../data/products');

const getProducts = async (req, res, next) => {
    try {
        if (process.env.NODE_ENV === 'production') {
            // Use mock products in production
            res.json(products);
        } else {
            // Use Fake Store API in development
            const response = await axios.get("https://fakestoreapi.com/products?limit=8");
            const apiProducts = response.data.map(item => ({
                productId: item.id,
                name: item.title,
                price: item.price,
                image: item.image,
                tag: "StoreAPI"
            }));
            res.json(apiProducts);
        }
    } catch (error) {
        next(error);
    }
};

module.exports = { getProducts };
