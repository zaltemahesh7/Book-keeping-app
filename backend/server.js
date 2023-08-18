const express = require('express');
const mongoose = require('mongoose');
const app = express();
const connect = require('./config/connect');
const User = require('./models/User');


// db Connection
connect()

// Passing body data
app.use(express.json());

// Routes
// User Routes
app.post('/api/users/register', async (req, res) => {
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
app.post('/api/users/login', (req, res) => {
    res.send('Login Routes')
});

// Update User
app.put('/api/users/update', (req, res) => {
    res.send('update Routes')
});
app.delete('/api/users/:id', (req, res) => {
    res.send('Delete Routes')
});

// Fetch Users
app.get('/api/users', (req, res) => {
    res.send('Fetch Users')
})


// Server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is listening on Port ${PORT}`);
})

// Mahesh
// y39LKs2NWUuaJtDG