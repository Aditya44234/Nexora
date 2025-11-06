const express = require('express')


const router = express.Router();


const { getCart, addToCart, removeFromCart, checkout } = require('../controllers/cartController');

//  TO get all the cart items if present or and empty array is there are no items in the cart
router.get('/', getCart);


//  To add new items in teh cart
router.post('/', addToCart)


//  To delete a specific item from the cart
router.delete('/:id', removeFromCart)

//  To get a reciept od what wehave ordered from teh cart , then teh cart will be empty
router.post('/checkout', checkout)

module.exports = router;