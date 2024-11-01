const mapStatusHTTP = require('../utils/mapStatusHTTP');

const isValidEmail = (email) => {
  if (!email) {
    return {
      status: 'BAD_REQUEST',
      message: 'Some required fields are missing',
    };
  }  
};

const isValidPassword = (password) => {
  if (!password) {
    return {
      status: 'BAD_REQUEST',
      message: 'Some required fields are missing',
    };
  }  
};

const isValidLogin = (req, res, next) => {
  const { email, password } = req.body;
  const errors = [];

  errors.push(isValidEmail(email));
  errors.push(isValidPassword(password));

  let indexOfArray;
  
  if (errors.some((error, index) => {
    indexOfArray = index;
    return error !== undefined;
  })) {
    return res.status(mapStatusHTTP(errors[indexOfArray].status))
      .json({ message: errors[indexOfArray].message });
  }

  next();
};

module.exports = {
  isValidLogin,
};