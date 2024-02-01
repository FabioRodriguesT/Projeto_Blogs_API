const { isValidFields } = require('./validateCreatePost.middleware');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const isValidPutPost = async (req, res, next) => {
  const { title, content } = req.body;
  const result = await isValidFields(title, content);

  if (result !== undefined) {
    return res.status(mapStatusHTTP(result.status))
      .json({ message: result.message });
  }

  next();
};

module.exports = {
  isValidPutPost,
};
