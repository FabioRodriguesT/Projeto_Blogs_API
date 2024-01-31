const { categoryService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const createCategory = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(mapStatusHTTP('BAD_REQUEST')).json({ message: '"name" is required' });
  }
  const { status, data } = await categoryService.createCategory(name);
  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  createCategory,
};