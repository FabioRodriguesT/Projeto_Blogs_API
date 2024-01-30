// preciso dizer de onde importo o login model
const { User } = require('../models');

const { createToken } = require('../utils/auth');

const login = async (email, password) => {  
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

  const token = createToken({ userId: user.id });
  // const isValidToken = jwt.verify(token, secret);

  return ({ status: 'SUCCESSFUL', data: { token } }); 
};
module.exports = {
  login,
};