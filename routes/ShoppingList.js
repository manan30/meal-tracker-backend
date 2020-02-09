const express = require('express');

function ShoppingListRoutes() {
  const router = express.Router();

  router.get('/', (req, res) => {
    res.send('ABCd');
  });

  return router;
}

module.exports = ShoppingListRoutes;
