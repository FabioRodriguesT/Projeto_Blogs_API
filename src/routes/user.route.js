const route = require('express').Router();
const express = require('express');
const { isValidCreateUser } = require('../middlewares/validateCreateUser.middleware');

const { userController } = require('../controllers'); 

route.use(express.json());

route.post('/user', isValidCreateUser, userController.createUser);

module.exports = route;