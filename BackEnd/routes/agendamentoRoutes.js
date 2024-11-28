const express = require('express');
const agendamentoController = require('../controllers/agendamentoController');

const router = express.Router();

router.get('/:produtoId', agendamentoController.getAgendamentos);
router.post('/', agendamentoController.createAgendamento);

module.exports = router;