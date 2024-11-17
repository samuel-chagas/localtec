const express = require('express');
const router = express.Router();
const { getAgendamentos, createAgendamento } = require('../controllers/agendamentoController');

router.get('/:produtoId', getAgendamentos);
router.post('/', createAgendamento);

module.exports = router;