const axios = require('axios');

// GET /api/products - Get products from Fake Store API
const getProducts = async (req, res, next) => {
    try {
        const response = await axios.get("https://fakestoreapi.com/products?limit=8");
        const apiProducts = response.data.map(item => ({
            productId: item.id,
            name: item.title,
            price: item.price,
            image: item.image,
            tag: "StoreAPI"
        }));
        res.json(apiProducts);
    } catch (error) {
        next(error);
    }
};

module.exports = { getProducts };
