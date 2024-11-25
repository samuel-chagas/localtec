require('dotenv').config(); // Importa e configura dotenv
const { Sequelize } = require('sequelize');

// Use as variáveis de ambiente
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, 
  {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT, // Adicione esta linha
  logging: console.log, // Habilita logs do Sequelize
});

module.exports = sequelize;
