const route = require('express').Router();
const express = require('express');
const { isValidCreateUser } = require('../middlewares/validateCreateUser.middleware');

const { userController } = require('../controllers'); 
const { isValidToken } = require('../middlewares/validateJWT.middleware');

route.use(express.json());

route.get('/user', isValidToken, userController.getUsers);
route.get('/user/:id', isValidToken, userController.getUserById);
route.post('/user', isValidCreateUser, userController.createUser);

module.exports = route;