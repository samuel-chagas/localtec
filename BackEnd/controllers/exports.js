exports.getAgendamentos = async (req, res) => {
  try {
    const agendamentos = await Agendamento.findAll({ where: { produtoId: req.params.produtoId } });
      res.json(agendamentos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }};