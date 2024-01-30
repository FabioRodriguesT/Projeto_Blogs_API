const { loginServices } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const login = async (req, res) => {
  const { email, password } = req.body;

  const { status, data } = await loginServices.login(email, password);
  
  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  login,
};