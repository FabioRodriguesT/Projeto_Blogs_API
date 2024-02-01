/* eslint-disable max-lines-per-function */
const { BlogPost, User, Category, PostCategory } = require('../models');
const { removePasswordFromUser } = require('../utils/removePasswordFromUser');

const getAllPost = async () => {
  const result = await BlogPost.findAll({
    include: [{ model: User, as: 'user' }, {
      model: Category,
      as: 'categories',
      through: { attributes: [] },
    }],
  });
 
  result.forEach((element) => {
    const { user } = element.dataValues; 
    user.dataValues = removePasswordFromUser(user.dataValues);
  });  

  return ({ status: 'SUCCESSFUL', data: result });
};

// const getPostById = async (id) => {

// };

const createPost = async (title, content, categoryIds, userId) => {
  const post = await BlogPost.create({ title, content, userId });

  const resultMap = categoryIds.map((categoryId) => ({
    postId: post.id,
    categoryId,
  }));
 
  await PostCategory.bulkCreate(resultMap);
  
  return ({ status: 'CREATED', data: post });
};

// const editAPost = async () => {

// };

module.exports = {
  getAllPost,
  // getPostById,
  createPost,
  // editAPost,
};