const BlogpostModel = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    // id, title, content, user_id, published, updated
    // belongsTo e hasMany associate
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.STRING,
    },
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    published: {
      type: DataTypes.DATE
    },
    updated: {
      type: DataTypes.DATE
    }
  },
  {
    timestamps: false,
    tableName: 'blog_posts',
    underscored: true
  })

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      as: 'users',
      foreingKey: 'userId',
    })
  }

  return BlogPost;
}

module.exports = BlogpostModel