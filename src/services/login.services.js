// preciso dizer de onde importo o login model
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const login = async (email, password) => {
  const jwtConfig = {
    algorithm: 'HS256',
  };

  const user = await User.findOne({ where: { email, password } });

  if (!user) {
    return ({ status: 'BAD_REQUEST', data: { message: 'Invalid fields' } }); 
  }
  // const user = await UserService.getByUsername(username);
  // header + payload + signature

  // payload: {
  //   email,
  //   password
  // }

  const token = jwt.sign({ data: { userId: user.id } }, secret, jwtConfig);
  // const isValidToken = jwt.verify(token, secret);

  return ({ status: 'SUCCESSFUL', data: { token } }); 
};
module.exports = {
  login,
};