const express = require('express');
const userRoutes = require('./routes/User')();

const app = express();

app.use('/user', userRoutes);
