require('dotenv').config({ path: '../.env' }); // Certifique-se de que o caminho para o .env está correto
const sequelize = require('../db'); // Ajuste o caminho para o arquivo db.js
const User = require('../models/User');
const Product = require('../models/Product');
const Agendamento = require('../models/Agendamento');

const syncDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso.');

    // Sincronizar todos os modelos
    await sequelize.sync({ force: true }); // Use { force: true } para recriar as tabelas
    console.log('Banco de dados sincronizado com sucesso.');

    // Fechar a conexão
    await sequelize.close();
    console.log('Conexão com o banco de dados fechada.');
  } catch (error) {
    console.error('Erro ao sincronizar o banco de dados:', error);
  }
};

syncDatabase();