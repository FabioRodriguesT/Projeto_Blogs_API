const { Op } = require('sequelize'); 
const { BlogPost, User, Category, PostCategory } = require('../models');

const getAllPost = async () => {
  const result = await BlogPost.findAll({
    include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } }, {
      model: Category, as: 'categories', through: { attributes: [] } }],
  }); 
  return ({ status: 'SUCCESSFUL', data: result });
};

const getPostById = async (id) => {  
  const post = await BlogPost.findOne({ where: { id } });
  if (!post) { return { status: 'NOT_FOUND', data: { message: 'Post does not exist' } }; }
  const post2 = await BlogPost.findOne({ where: { id },
    include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } }, {
      model: Category, as: 'categories', through: { attributes: [] } }],
  });
  return ({ status: 'SUCCESSFUL', data: post2 });
};

const createPost = async (title, content, categoryIds, userId) => {
  const post = await BlogPost.create({ title, content, userId });
  const resultMap = categoryIds.map((categoryId) => ({ postId: post.id, categoryId })); 
  await PostCategory.bulkCreate(resultMap);  
  return ({ status: 'CREATED', data: post });
};

const editAPost = async (id, userId, title, content) => {
  const result = await BlogPost.findOne({ where: { id } });
  if (result.userId !== userId) {
    return { status: 'UNAUTHORIZED', data: { message: 'Unauthorized user' } }; 
  } 
  await result.update({ title, content });
  await result.save();
  const resultPost = await getPostById(id);
  return { status: 'SUCCESSFUL', data: resultPost.data };
};

const deletaAPost = async (postId, userId) => {
  const result = await getPostById(postId);
  if (result.status === 'NOT_FOUND') { return result; }
  if (result.data.dataValues.userId !== userId) {
    return { status: 'UNAUTHORIZED', data: { message: 'Unauthorized user' } };
  }
  await BlogPost.destroy({ where: { id: postId } });
  return { status: 'NO_CONTENT', data: null };
};

const searchPost = async (searchTerm) => {
  const result = await BlogPost.findAll({
    where: { [Op.or]: [{ title: { [Op.substring]: searchTerm } },
      { content: { [Op.substring]: searchTerm } }] },
    include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } }, {
      model: Category, as: 'categories', through: { attributes: [] } }],
  });
  return ({ status: 'SUCCESSFUL', data: result });
};

module.exports = { getAllPost, getPostById, createPost, editAPost, deletaAPost, searchPost };
