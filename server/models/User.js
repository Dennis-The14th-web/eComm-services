const mongoose = require('mongoose');
const { Schema } = mongoose;

const Order = require('./Order');

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minLength: 5
    },
    orders: [Order.schema]
});

//TODO
// Set up a pre-save middleware to create password
// Compare the incoming password with the hashed password

const User = mongoose.model('User', userSchema);

module.exports = User;