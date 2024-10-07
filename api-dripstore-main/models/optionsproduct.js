
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OptionsProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OptionsProduct.init({
    product_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    shape: DataTypes.ENUM('square','circle'),
    radius: DataTypes.INTEGER,
    type: DataTypes.ENUM('text','color'),
    values: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'OptionsProduct',
  });
  return OptionsProduct;
};
