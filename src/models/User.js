const mongoose = require('mongoose');

const { Schema } = mongoose;

const UsersSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  recipes: {},
  followers: {},
  following: {},
  saved: {},
  likes: {}
});

module.exports = mongoose.model('users', UsersSchema);
