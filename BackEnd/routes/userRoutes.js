const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { createUser } = require('../controllers/userController');

const router = express.Router();

// Rota para login do usuário
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  console.log("Dados recebidos:", { email, password });

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      console.log("Usuário não encontrado");
      return res.status(400).json({ message: 'Usuário não encontrado' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("Senha incorreta");
      return res.status(400).json({ message: 'Senha incorreta' });
    }

    req.session.user = { id: user.id, nome: user.nome };
    res.json({ message: 'Login bem-sucedido', user: { id: user.id, nome: user.nome } });
  } catch (error) {
    console.error('Erro ao fazer login:', error.message, error.stack);
    res.status(500).json({ message: 'Erro ao fazer login' });
  }
});

router.post('/register', createUser);

module.exports = router;