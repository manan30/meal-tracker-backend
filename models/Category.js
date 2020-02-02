const mongoose = require('mongoose');

const { Schema } = mongoose;

const categoriesSchema = new Schema({
  categoryName: { type: String, required: true, maxlength: 100, unique: true },
  categoryDescription: { type: String },
  categoryImage: { type: String }
});

module.exports = mongoose.model('categories', categoriesSchema);
