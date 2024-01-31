const mapStatusHTTP = require('../utils/mapStatusHTTP');
const { postService } = require('../services');

const getAllPosts = async (__req, res) => {
  const { status, data } = await postService.getAllPost();

  return res.status(mapStatusHTTP(status)).json(data);
};
// const getPostById = async (req, res) => {
//   const { id } = req.params;
//   const { status, data } = await postService.getPostById(id);
//   return res.status(mapStatusHTTP(status)).json(data);
// };

// const createPost = async (req, res) => {
//   const { status, data } = await postService.createPost();
//   return res.status(mapStatusHTTP(status)).json(data);
// };
// const editAPost = async (req, res) => {
//   const { status, data } = await postService.editAPost();
//   return res.status(mapStatusHTTP(status)).json(data);
// };

module.exports = {
  getAllPosts,
  // getPostById,
  // createPost,
  // editAPost,
};