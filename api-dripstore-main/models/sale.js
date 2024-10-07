
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sale extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Sale.init({
    total: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
  },
    payment:{
      type: DataTypes.STRING(20),
      allowNull: false,
  },
    sale_date: {
      type: DataTypes.DATE,
      allowNull: false,
  },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
  },
  }, {
    sequelize,
    modelName: 'Sale',
  });
  return Sale;
};
