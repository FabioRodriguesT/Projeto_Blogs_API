const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const JWT_CONFIG = {
  algorithm: 'HS256',  
};

const createToken = (payload) => 
  jwt.sign(payload, secret, JWT_CONFIG);

const verify = (token) =>
  jwt.verify(token, secret);

module.exports = {
  createToken,
  verify,
};