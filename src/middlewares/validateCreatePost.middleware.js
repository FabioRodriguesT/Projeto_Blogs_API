const mapStatusHTTP = require('../utils/mapStatusHTTP');
const { Category } = require('../models');

const isValidFields = (title, content) => {
  if (!title || !content) {
    return {
      status: 'BAD_REQUEST',
      message: 'Some required fields are missing',
    };
  }
};

const isValidCategory = async (categoryIds) => {
  // categoryIds é um array
  if (!categoryIds || categoryIds.length === 0) {
    return { 
      status: 'BAD_REQUEST', 
      message: 'Some required fields are missing', 
    }; 
  }
 
  const resultMap = categoryIds.map((element) => Category.findOne({ where: { id: element } }));

  const resultPromises = await Promise.all(resultMap);

  if (resultPromises.some((element) => element === null)) {
    return {
      status: 'BAD_REQUEST',
      message: 'one or more "categoryIds" not found',
    };
  }
};

const isValidCreatePost = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;

  const errors = [];
  let indexOfarray;

  errors.push(isValidFields(title, content));
  errors.push(await isValidCategory(categoryIds));

  if (errors.some((error, index) => {
    indexOfarray = index;
    return error !== undefined;
  })) {
    return res.status(mapStatusHTTP(errors[indexOfarray].status))
      .json({ message: errors[indexOfarray].message });
  }

  next();
};

module.exports = {
  isValidCreatePost,
  isValidFields,
  isValidCategory,
};