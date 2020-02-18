const UsersModel = require('../models/User');
const { encrypt } = require('../utils/PasswordUtils');

const getUserData = (req, res) => {
  UsersModel.find((err, response) => {
    console.log({ err, response });
    return response;
  });
};

const createUser = async body => {
  let data;
  const encryptedPassword = await encrypt(body.password);
  try {
    data = await UsersModel.create({ ...body, password: encryptedPassword });
  } catch (e) {
    data = e;
  }
  return data;
};

module.exports = { getUserData, createUser };
