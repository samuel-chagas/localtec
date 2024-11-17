const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('localtec', 'root', '12345678', {
  host: '127.0.0.1',
  dialect: 'mysql',
  logging: console.log, // Adicione esta linha para habilitar logs do Sequelize
});

module.exports = sequelize;