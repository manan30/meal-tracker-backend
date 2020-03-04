const mongoose = require('mongoose');
const { DB_URL, DB_PORT, DATABASE } = require('./utils/Constants');

module.exports = async () => {
  try {
    await mongoose.connect(`mongodb://${DB_URL}:${DB_PORT}/${DATABASE}`, {
      useNewUrlParser: true,
      useCreateIndex: true,
      reconnectTries: Number.MAX_VALUE,
      reconnectInterval: 500,
      connectTimeoutMS: 10000
    });
    console.log('Database connection successful.');
  } catch (e) {
    console.log('Database connection failed.', e);
  }
};
