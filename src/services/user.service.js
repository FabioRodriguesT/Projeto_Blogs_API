const { User } = require('../models');
const { createToken } = require('../utils/auth');

const createUser = async (
  displayName, 
  email,
  password, 
  image,
) => {
  const user = await User.findOne({ where: { email } });
  if (user) {
    return ({ status: 'CONFLICT', data: { message: 'User already registered' } });
  }
  await User.create({
    displayName,
    email,
    password,
    image,
  }, { fields: ['displayName', 'email', 'password', 'image'] }); 
  // create token
  const { id } = await User.findOne({ where: { email } });

  const token = createToken({ id });
  // fim create token
  return ({ status: 'CREATED', data: { token } });
};

module.exports = {
  createUser,
};