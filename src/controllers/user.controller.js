const { userService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');
const auth = require('../utils/auth');
// const { User } = require('../models');

const createUser = async (req, res) => {
  const {
    displayName,
    email,
    password,
    image,
  } = req.body;

  const { status, data } = await userService.createUser(
    displayName,
    email,
    password,
    image,
  );

  return res.status(mapStatusHTTP(status)).json(data);
};

const getUsers = async (req, res) => {
  const bearerToken = req.header('Authorization');
  const token = bearerToken.split(' ')[1];
  if (!bearerToken) {
    return res.status(mapStatusHTTP('UNAUTHORIZED')).json({ message: 'Token not found' });
  }
  try {
    auth.verify(token);
    // const decoded = auth.verify(token);  
    // const user = await User.findOne({ where: { id: decoded.userId } });    
    // if (!user) {
    //   return res.status(401).json({ message: 'Erro ao procurar usuário do token.' });
    // }
    const { status, data } = await userService.getAllUsers();
    return res.status(mapStatusHTTP(status)).json(data);
  } catch (error) {
    return res.status(mapStatusHTTP('UNAUTHORIZED')).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  createUser,
  getUsers,
};