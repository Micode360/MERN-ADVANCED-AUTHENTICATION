const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide a username"]
    },
    email: {
        type: String,
        required: [true, "Please provide a username"],
        unique: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please provide a valid email"
        ],
        password: {
            type: "String",
            required: [true, "Please provide a password"],
            minLength: 6,
            select: false
        },
        resetPasswordToken: String,
        resetPasswordExpire: Date
    }
});


//this is a middleware for presaving or post saving of password
UserSchema.pre("save", async function(next){
    if(!this.isModified("password")) next();

    const salt = await bcrypt.genSalt(20); //create a salt 
    this.password = await bcrypt.hash(this.password, salt); //changing password
    next();
})

const User = mongoose.model("User",UserSchema);

module.exports = User;