const UsersModel = require('../models/User');
const { encrypt } = require('../utils/PasswordUtils');

const getUserData = (req, res) => {
  UsersModel.find((err, response) => {
    console.log({ err, response });
    return response;
  });
};

const createUser = async body => {
  const encryptedPassword = await encrypt(body.password);

  const data = await UsersModel.create({
    ...body,
    password: encryptedPassword
  });

  return data;
};

module.exports = { getUserData, createUser };
