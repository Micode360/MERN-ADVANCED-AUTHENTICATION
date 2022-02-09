const User = require('../models/User');

exports.register = async (req, res, next) => {
    const { username, email, password } = req.body;

    console.log({ username, email, password })

    try {
        const user = await User.create({
            username,
            email,
            password
        })

        res.status(201).json({
            success: true,
            user,
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        })
    }

    res.send("Register Route");
}

exports.login = (req, res, next) => {
    res.send("Login Route")
}

exports.forgotPassword = (req, res, next) => {
    res.send("Forgot Password Route")
}

exports.resetPassword = (req, res, next) => {
    res.send("Reset Password Route")
}