const CategoryModel = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      name: DataTypes.STRING,
  },
      {
          timestamps: false,
          underscored: true,
      }
  );

  return Category;
}

module.exports = CategoryModel;

// const CategoryModel = (sequelize, DataTypes) => {
//   const Category = sequelize.define('Category', {
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true
//     },
//     name: DataTypes.STRING,
//   }, {
//     timestamps: false,
//     // tableName: 'categories',
//     underscored: true
//   })

//   return Category
// }

// module.exports = CategoryModel