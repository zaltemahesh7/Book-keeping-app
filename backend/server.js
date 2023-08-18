const express = require('express');
const mongoose = require('mongoose');
const app = express();
const connect = require('./config/connect');
const User = require('./models/User');
const userRoutes = require('./routes/userRoutes');


// db Connection
connect()

// Passing body data
app.use(express.json());

// Routes
app.use('/api/users', userRoutes)

// Server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is listening on Port ${PORT}`);
})

// Mahesh
// y39LKs2NWUuaJtDG