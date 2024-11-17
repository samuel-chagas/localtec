const Agendamento = require('../models/Agendamento');

exports.getAgendamentos = async (req, res) => {
  try {
    const agendamentos = await Agendamento.findAll({ where: { produtoId: req.params.produtoId } });
    res.json(agendamentos);
  } catch (error) {
    console.error('Erro ao buscar agendamentos:', error.message, error.stack);
    res.status(500).send('Erro ao buscar agendamentos');
  }
};

exports.createAgendamento = async (req, res) => {
  const { produtoId, data, hora } = req.body;
  try {
    console.log('Dados recebidos para agendamento:', { produtoId, data, hora });
    await Agendamento.create({ produtoId, data, hora });
    res.status(201).send('Agendamento criado com sucesso');
  } catch (error) {
    console.error('Erro ao criar agendamento:', error.message, error.stack);
    res.status(500).send('Erro ao criar agendamento');
  }
};