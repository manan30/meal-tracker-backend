const bcrypt = require('bcrypt');

const saltRounds = 10;

async function encrypt(password = '') {
  const encryptedPassword = await bcrypt.hash(password, saltRounds);
  return encryptedPassword;
}

function decrypt(password = '') {
  return password;
}

module.exports = { encrypt, decrypt };
