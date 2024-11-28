const Agendamento = require('../models/Agendamento');

exports.getAgendamentos = async (req, res) => {
  try {
    console.log('Buscando agendamentos para o produto ID:', req.params.produtoId); // Log do ID do produto
    const agendamentos = await Agendamento.findAll({ where: { produtoId: req.params.produtoId } });
    res.json(agendamentos);
  } catch (err) {
    console.error('Erro ao obter agendamentos:', err); // Log detalhado do erro
    res.status(500).json({ message: 'Erro ao obter agendamentos', error: err.message });
  }
};

exports.createAgendamento = async (req, res) => {
  const { produtoId, data, hora } = req.body;

  try {
    const newAgendamento = await Agendamento.create({ produtoId, data, hora });
    res.status(201).json(newAgendamento);
  } catch (err) {
    console.error('Erro ao criar agendamento:', err); // Log detalhado do erro
    res.status(500).json({ message: 'Erro ao criar agendamento', error: err.message });
  }
};