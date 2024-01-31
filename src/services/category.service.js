const { Category } = require('../models');

const createCategory = async (name) => {
  await Category.create({ name });

  const category = await Category.findOne({ where: { name } });
  return ({ 
    status: 'CREATED', 
    data: category,
  });
};

const getAllCategories = async () => {
  const result = await Category.findAll();

  return {
    status: 'SUCCESSFUL',
    data: result,
  };
};

module.exports = {
  createCategory,
  getAllCategories,
};