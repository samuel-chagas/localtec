const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Agendamento = sequelize.define('Agendamento', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  produtoId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  data: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  hora: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'agendamentos',
  timestamps: false,
});

module.exports = Agendamento;