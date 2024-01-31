const { Category } = require('../models');

const createCategory = async (name) => {
  await Category.create({ name });

  const category = await Category.findOne({ where: { name } });
  return ({ 
    status: 'CREATED', 
    data: category,
  });
};

module.exports = {
  createCategory,
};