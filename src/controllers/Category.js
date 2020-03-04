const CategoryModel = require('../models/Category');

const getAllCategories = (req, res) => {
  CategoryModel.find((err, response) => console.log({ err, response }));
};

const addNewCategory = docs => {
  CategoryModel.insertMany([docs]);
  console.log(docs);
};

module.exports = { getAllCategories, addNewCategory };
