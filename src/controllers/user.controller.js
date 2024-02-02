const { userService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

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
  const { status, data } = await userService.getAllUsers();
  return res.status(mapStatusHTTP(status)).json(data);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await userService.getUserById(id);
  return res.status(mapStatusHTTP(status)).json(data);
};

const deleteUser = async (req, res) => {
  const { userId } = req;

  const { status } = await userService.deleteAUserByID(userId);

  return res.status(mapStatusHTTP(status)).json();
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  deleteUser,
};