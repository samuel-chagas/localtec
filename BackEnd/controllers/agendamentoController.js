const Agendamento = require('../models/Agendamento');
const jwt = require('jsonwebtoken');

exports.getAgendamentos = async (req, res) => {
  try {
    const agendamentos = await Agendamento.findAll({ where: { produtoId: req.params.produtoId } });
    res.json(agendamentos);
  } catch (error) {
    console.error('Erro ao buscar agendamentos:', error.message, error.stack);
    res.status(500).json({ message: 'Erro ao buscar agendamentos' });
  }
};

exports.createAgendamento = async (req, res) => {
  const { produtoId, data, hora } = req.body;
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'Usuário não autenticado' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, 'seuSegredo');
    const userId = decoded.id;

    if (!produtoId || !data || !hora) {
      return res.status(400).json({ message: 'Parâmetros inválidos' });
    }

    console.log('Dados recebidos para agendamento:', { produtoId, data, hora, userId });
    await Agendamento.create({ produtoId, data, hora, userId });
    res.status(201).json({ message: 'Agendamento criado com sucesso' });
  } catch (error) {
    console.error('Erro ao criar agendamento:', error.message, error.stack);
    res.status(500).json({ message: 'Erro ao criar agendamento', error: error.message });
  }
};