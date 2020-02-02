require('./DBSingleton')();
const express = require('express');
const cors = require('cors')();
const shoppingListRoutes = require('./routes/ShoppingList')();
const categoryRoutes = require('./routes/Category')();
const { SERVER_PORT } = require('./utils/Constants');

const app = express();

app.use(cors);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/shoppinglist', shoppingListRoutes);
app.use('/categories', categoryRoutes);

app.listen(SERVER_PORT, () =>
  console.log(`server running on port ${SERVER_PORT}`)
);
