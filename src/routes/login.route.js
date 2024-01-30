const route = require('express').Router();
const express = require('express');
const { isValidLogin } = require('../middlewares/validateLogin.middleware');

const { loginController } = require('../controllers'); 

route.use(express.json());

route.post('/login', isValidLogin, loginController.login);

module.exports = route;