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

    // Verificar se todos os campos estão presentes
    if (!produtoId || !data || !hora) {
      return res.status(400).send({ message: 'Todos os campos são obrigatórios' });
    }

    // Criar o agendamento
    const novoAgendamento = await Agendamento.create({ produtoId, data, hora });
    console.log('Agendamento criado:', novoAgendamento);
    res.status(201).send('Agendamento criado com sucesso');
  } catch (error) {
    console.error('Erro ao criar agendamento:', error.message, error.stack);
    res.status(500).send({ message: 'Erro ao criar agendamento', error: error.message });
  }
};

exports.getAgendamentosByUser = async (req, res) => {
  try {
    const agendamentos = await Agendamento.findAll({ where: { userId: req.params.userId } });
    res.json(agendamentos);
  } catch (error) {
    console.error('Erro ao buscar agendamentos:', error.message, error.stack);
    res.status(500).send('Erro ao buscar agendamentos');
  }
};