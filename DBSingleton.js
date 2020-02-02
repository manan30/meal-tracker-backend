const mongoose = require('mongoose');
const { DB_URL, DB_PORT, DATABASE } = require('./utils/Constants');

module.exports = async () => {
  try {
    await mongoose.connect(`mongodb://${DB_URL}:${DB_PORT}/${DATABASE}`, {
      useNewUrlParser: true
    });
    console.log('Database connection successful.');
  } catch (e) {
    console.log('Database connection failed.', e);
  }
};
