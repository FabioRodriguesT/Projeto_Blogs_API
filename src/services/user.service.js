const { User } = require('../models');
const auth = require('../utils/auth');

const getAllUsers = async () => {
  const result = await User.findAll();

  const resultWithOutPassword = result.map((element) => {
    const newObject = {
      id: element.dataValues.id,
      displayName: element.dataValues.displayName,
      email: element.dataValues.email,
      image: element.dataValues.image,
    };
    return newObject;
  });

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

module.exports = {
  getAllUsers,
  createUser,
};