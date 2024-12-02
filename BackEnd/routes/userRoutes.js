const express = require('express');
const router = express.Router();
const { getUsers, createUser, deleteUser, updateUser } = require('../controllers/userController');

router.get('/', getUsers);
router.post('/register', createUser);
router.delete('/:id', deleteUser); // Adicione esta linha para deletar um usuário
router.put('/:id', updateUser); // Adicione esta linha para atualizar um usuário

module.exports = router;