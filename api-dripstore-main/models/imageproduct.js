
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ImageProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ImageProduct.init({
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
  },
     enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
  },
     image_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
  },
  }, {
    sequelize,
    modelName: 'ImageProduct',
  });
  return ImageProduct;
};
