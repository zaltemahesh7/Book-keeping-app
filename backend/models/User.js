const mongoose = require('mongoose');

// Schema

const UserSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
