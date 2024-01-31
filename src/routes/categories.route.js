const route = require('express').Router();
const express = require('express');
const { categoryController } = require('../controllers');
const { isValidToken } = require('../middlewares/validateJWT.middleware');

route.use(express.json());

route.post('/categories', isValidToken, categoryController.createCategory);

module.exports = route;