const express = require('express');
const mongoose = require('mongoose')
const app = express();
const connect = require('./config/connect')


// db Connection
connect()

// Routes
// User Routes
app.post('/api/users/register', (req, res) => {
    res.send('Register Routes')
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