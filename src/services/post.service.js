/* eslint-disable max-lines-per-function */
const { BlogPost, User, Category } = require('../models');
const { removePasswordFromUser } = require('../utils/removePasswordFromUser');

const getAllPost = async () => {
  const result = await BlogPost.findAll({
    include: [{ model: User, as: 'user' }, {
      model: Category,
      as: 'categories',
      through: { attributes: [] },
    }],
  });

  // const allPosts = await BlogPost.findAll({
  //   include: [{ model: User, as: 'user' }, 
  //     { model: Category,
  //       as: 'categories', 
  //       through: { attributes: [] } }],
  // });

  const resultWithoutPassword = result.map((element) => 
    removePasswordFromUser(element.dataValues.user.dataValues));

  const result2 = result.map((element2, index) => {
    const result3 = element2;
    result3.dataValues.user.dataValues = resultWithoutPassword[index];
    return result3;
  });

  // console.log('ENTROU AKI', result2); 

  return ({ status: 'SUCCESSFUL', data: result2 });
};

// const getPostById = async (id) => {

// };

// const createPost = async () => {

// };

// const editAPost = async () => {

// };

module.exports = {
  getAllPost,
  // getPostById,
  // createPost,
  // editAPost,
};