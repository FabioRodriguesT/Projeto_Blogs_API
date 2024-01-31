const { User } = require('../models');
const auth = require('../utils/auth');
const { removePasswordFromUser } = require('../utils/removePasswordFromUser');

const getAllUsers = async () => {
  const result = await User.findAll(); 
  const resultWithOutPassword = result.map(({ dataValues }) => removePasswordFromUser(dataValues));

  return ({ status: 'SUCCESSFUL', data: resultWithOutPassword });
};

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
  const token = auth.createToken({ id });
  // fim create token
  return ({ status: 'CREATED', data: { token } });
};

const getUserById = async (id) => {
  const result = await User.findOne({ where: { id } });
  if (!result) {
    return ({ status: 'NOT_FOUND', data: { message: 'User does not exist' } });
  }  
  const resultWithOutPassword = removePasswordFromUser(result.dataValues);

  return ({ status: 'SUCCESSFUL', data: resultWithOutPassword });
};

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
};