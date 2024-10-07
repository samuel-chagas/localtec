
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init({
    sale_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
  },
  products_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
  },
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
