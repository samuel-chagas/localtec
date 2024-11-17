const { DataTypes } = require('sequelize');
const sequelize = require('../db');


const User = sequelize.define ('User', {
  nome: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
  empresa: { type: DataTypes.STRING, allowNull: false }
}, {
  tableName: 'users',
  timestamps: false,
});

module.exports = User;