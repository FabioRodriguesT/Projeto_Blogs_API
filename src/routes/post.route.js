const route = require('express').Router();
const express = require('express');
const { postController } = require('../controllers');
const { isValidToken, isValidCreatePost, isValidPutPost } = require('../middlewares');

route.use(express.json());

route.get('/post', isValidToken, postController.getAllPosts);
route.get('/post/:id', isValidToken, postController.getPostById);
route.post('/post', isValidToken, isValidCreatePost, postController.createPost);
route.put('/post/:id', isValidToken, isValidPutPost, postController.editAPost);

module.exports = route;