const mapStatusHTTP = require('../utils/mapStatusHTTP');

const isValidDisplayName = (displayName) => {
  if (displayName.length < 8) {
    return {
      status: 'BAD_REQUEST',
      message: '"displayName" length must be at least 8 characters long',
    };
  }
};

const isValidEmail = (email) => {
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (!regex.test(email)) {
    return {
      status: 'BAD_REQUEST',
      message: '"email" must be a valid email',
    };
  }
};

const isValidPassword = (password) => {
  if (password.length < 6) {
    return {
      status: 'BAD_REQUEST',
      message: '"password" length must be at least 6 characters long',
    };
  }
};

const isValidCreateUser = (req, res, next) => {
  const { displayName, email, password } = req.body;

  const errors = [];
  let indexOfArray;

  errors.push(isValidDisplayName(displayName));
  errors.push(isValidEmail(email));
  errors.push(isValidPassword(password));

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
  isValidCreateUser,
};