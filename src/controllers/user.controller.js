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

module.exports = {
  createUser,
};