const express = require('express');
const { getUserData, createUser } = require('../controllers/User');

module.exports = () => {
  const router = express.Router();

  router.get('/', (req, res) => {
    const data = getUserData(req, res);
    // console.log({ req, res, data });
  });

  router.post('/create', async (req, res) => {
    try {
      const data = await createUser({ ...req.body });
      res.status(201).send({
        data: {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email
        },
        message: 'User created successfully'
      });
    } catch (e) {
      res.status(500).send({ data: e, message: 'Internal server error' });
    }
  });

  return router;
};
