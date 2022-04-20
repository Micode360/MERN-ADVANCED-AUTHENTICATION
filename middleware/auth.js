const jwt = require("jsonwebtoken");
const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse")


//Building the protected route

exports.protect = async (req, res, next) => {
    let token;

    //req.headers.authorization = "Bearer q32434kn535n3kj45n345n34k5n"
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        //startsWith() is a javascript function
        
        token = req.headers.authorization.split(" ")[1]
    }

    if(!token) {
        return next(new ErrorResponse("Not authorized to access this route", 401))
    }


    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.id);
        if(!user) {
            return next(new ErrorResponse("No user found with this id", 404))
        }

        req.user = user;
        
        next();
    } catch (error) {
        return next(new ErrorResponse("Not authorized to access this route", 401))
    }
}