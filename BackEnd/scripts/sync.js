const sequelize = require('../db');
const Agendamento = require('../models/Agendamento');

const syncDatabase = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('Banco de dados sincronizado com sucesso');
  } catch (error) {
    console.error('Erro ao sincronizar o banco de dados:', error);
  } finally {
    await sequelize.close();
  }
};

syncDatabase();