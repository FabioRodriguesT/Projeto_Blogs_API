const route = require('express').Router();
const express = require('express');
const { postController } = require('../controllers');
const { isValidToken } = require('../middlewares/validateJWT.middleware');

route.use(express.json());

route.get('/post', isValidToken, postController.getAllPosts);
// route.get('/post/:id', isValidToken, postController.getPostById);
// route.post('/post', isValidToken, postController.createPost);
// route.put('/post/:id', isValidToken, postController.editAPost);

module.exports = route;