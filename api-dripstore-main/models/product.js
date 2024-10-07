
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
  },
  name: {
      type: DataTypes.STRING(100),
      allowNull: false,
  },
  slug: {
      type: DataTypes.STRING(100),
      allowNull: false,
  },
  use_in_menu: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
  },
  stock: {
      type: DataTypes.INTEGER,
      allowNull: true,
  },
  description: {
      type: DataTypes.STRING(200),
      allowNull: true,
  },
  price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
  },
  price_with_discount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
  },
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
