const { isValidCreatePost, isValidFields } = require('./validateCreatePost.middleware');
const { isValidCreateUser } = require('./validateCreateUser.middleware');
const { isValidToken } = require('./validateJWT.middleware');
const { isValidLogin } = require('./validateLogin.middleware');
const { isValidPutPost } = require('./validatePutPost.middleware');

module.exports = {
  isValidCreatePost,
  isValidCreateUser,
  isValidToken,
  isValidLogin,
  isValidFields,  
  isValidPutPost,
};