const express = require('express');
const { getAllCategories, addNewCategory } = require('../controllers/Category');

module.exports = () => {
  const router = express.Router();

  router.get('/', (req, res) => {
    getAllCategories();
    res.send('Hit');
  });

  router.get('/:id', (req, res) => {});

  router.post('/new', (req, res) => {
    addNewCategory(req.body);
    res.send('received');
  });

  return router;
};
