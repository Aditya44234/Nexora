const Cart = require("../models/Cart");

// Helper: Get or create cart for a specific user
const getOrCreateCart = async (userId) => {
    let cart = await Cart.findOne({ user: userId });
    if (!cart) cart = new Cart({ user: userId, items: [], total: 0 });
    return cart;
};

// GET /api/cart?userId=
const getCart = async (req, res, next) => {
    try {
        const userId = req.query.userId;
        if (!userId) return res.status(400).json({ message: "Missing userId" });

        const cart = await getOrCreateCart(userId);
        res.status(201).json({
            message: 'Fetched teh cart items successfully',
            cart: cart
        });
    } catch (error) {
        next(error);
    }
};

// POST /api/cart
const addToCart = async (req, res, next) => {
    try {
        const { userId, productId, name, price, image, qty } = req.body;
        if (!userId) return res.status(400).json({ message: "Missing userId" });

        let cart = await getOrCreateCart(userId);
        let existing = cart.items.find(item => item.productId === productId);

        if (existing) {
            existing.qty += qty;
        } else {
            cart.items.push({ productId, name, price, image, qty });
        }

        cart.total = cart.items.reduce((sum, item) => sum + item.price * item.qty, 0);
        await cart.save();

        res.status(201).json({
            message: 'Added an item to cart successfully',
            cart: cart
        });
    } catch (error) {
        next(error);
    }
};

// DELETE /api/cart/:id 
const removeFromCart = async (req, res, next) => {
    try {
        const { id } = req.params;
        const userId = req.query.userId || req.body.userId; // Accept from query or body
        if (!userId) return res.status(400).json({ message: "Missing userId" });

        let cart = await getOrCreateCart(userId);
        cart.items = cart.items.filter(item => item.productId !== id);

        cart.total = cart.items.reduce((sum, item) => sum + item.price * item.qty, 0);
        await cart.save();
        res.status(201).json({
            message: 'Removed item from the  cart successfully',
            cart: cart
        });
    } catch (error) {
        next(error);
    }
};

// POST /api/cart/checkout
const checkout = async (req, res, next) => {
    try {
        const { userId } = req.body;
        if (!userId) return res.status(400).json({ message: "Missing userId" });

        let cart = await getOrCreateCart(userId);
        const receipt = {
            total: cart.total,
            timestamp: new Date().toISOString(),
            items: cart.items,
        };
        // Clear cart after checkout
        cart.items = [];
        cart.total = 0;
        await cart.save();
        res.json({
            message: 'Receipt received successfully',
            receipt: receipt
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getCart,
    addToCart,
    removeFromCart,
    checkout
};
