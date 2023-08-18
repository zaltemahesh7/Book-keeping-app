const express = require('express');
const User = require('../models/User');

const userRoutes = express.Router();

// User Routes
userRoutes.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await User.create({ name, email, password })
        console.log(user);
        res.send(user)
    } catch (error) {
        console.log(error);
    }
});

// Login
userRoutes.post('/login', (req, res) => {
    res.send('Login Routes')
});

// Update User
userRoutes.put('/update', (req, res) => {
    res.send('update Routes')
});
userRoutes.delete('/:id', (req, res) => {
    res.send('Delete Routes')
});

// Fetch Users
userRoutes.get('', (req, res) => {
    res.send('Fetch Users')
})

module.exports = userRoutes;