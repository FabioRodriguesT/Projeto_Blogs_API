const { isValidCreatePost } = require('./validateCreatePost.middleware');
const { isValidCreateUser } = require('./validateCreateUser.middleware');
const { isValidToken } = require('./validateJWT.middleware');
const { isValidLogin } = require('./validateLogin.middleware');

module.exports = {
  isValidCreatePost,
  isValidCreateUser,
  isValidToken,
  isValidLogin,
};