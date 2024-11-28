const Agendamento = require('../models/Agendamento');

exports.getAgendamentos = async (req, res) => {
  try {
    const agendamentos = await Agendamento.findAll({ where: { produtoId: req.params.produtoId } });
    res.json(agendamentos);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao obter agendamentos' });
  }
};

exports.createAgendamento = async (req, res) => {
  const { produtoId, data, hora } = req.body;

  try {
    const newAgendamento = await Agendamento.create({ produtoId, data, hora });
    res.status(201).json(newAgendamento);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao criar agendamento' });
  }
};