const mapStatusHTTP = require('../utils/mapStatusHTTP');
const { postService } = require('../services');

const getAllPosts = async (__req, res) => {
  const { status, data } = await postService.getAllPost();

  return res.status(mapStatusHTTP(status)).json(data);
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await postService.getPostById(id);
  return res.status(mapStatusHTTP(status)).json(data);
};

const createPost = async (req, res) => {
  const { userId } = req; // vem do middleware de validação do token.
  const { title, content, categoryIds } = req.body;

  const { status, data } = await postService.createPost(title, content, categoryIds, userId);
  return res.status(mapStatusHTTP(status)).json(data);
};

const editAPost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const { userId } = req;

  const { status, data } = await postService.editAPost(id, userId, title, content);
  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  editAPost,
};