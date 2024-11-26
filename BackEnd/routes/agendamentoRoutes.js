const express = require('express');
const router = express.Router();
const { getAgendamentos, createAgendamento, getAgendamentosByUser } = require('../controllers/agendamentoController');

router.get('/:produtoId', getAgendamentos);
router.post('/', createAgendamento);
router.get('/user/:userId', getAgendamentosByUser);

module.exports = router;