const User = require("../models/User")


const createUser = async (req, res, next) => {
    try {
        const { name, email } = req.body;

        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ message: "User already exists " })

        user = new User({ name, email });
        await user.save();

        res.status(201).json({
            message: 'User created Successfully',
            user: user
        });
    } catch (error) {
        next(error);
    };
};


const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: "User not found" });
        res.json({
            message: 'User fetcted Successfully',
            user: user
        });

    } catch (error) {
        next(error);
    }
};




module.exports = {
    createUser,
    getUser
}