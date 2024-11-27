const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Agendamento = sequelize.define('Agendamento', {
  produtoId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  data: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  hora: {
    type: DataTypes.TIME,
    allowNull: false,
  },
});

module.exports = Agendamento;