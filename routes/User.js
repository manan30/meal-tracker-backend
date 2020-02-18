const express = require('express');
const { getUserData, createUser } = require('../controllers/User');

module.exports = () => {
  const router = express.Router();

  router.get('/', (req, res) => {
    const data = getUserData(req, res);
    // console.log({ req, res, data });
  });

  router.post('/create', async (req, res) => {
    const status = await createUser({ ...req.body });
    console.log(status);
    if (status.name && status.name === 'MongoError') {
      res.send({ code: 500, data: 'Duplicate email address' });
    } else {
      res.send({ code: 201, data: 'User created successfully' });
    }
  });

  return router;
};
