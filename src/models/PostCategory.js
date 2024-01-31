const PostCategoryModel = (sequelize, DataTypes) => {
  // post_id, category_id
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
  }, {
    timestamps: false,
    tableName: 'categories',
    underscored: true,
  });

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategory,
      foreingKey: 'postId',
      otherKey: 'categoryId',
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'users',
      through: PostCategory,
      foreingKey: 'postId',
      otherKey: 'categoryId',
    });
  };

  return PostCategory;
};

module.exports = PostCategoryModel;