const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

// Rota para login do usuário
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(400).json({ message: 'Usuário não encontrado' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Senha incorreta' });
    }

    req.session.user = { id: user.id, nome: user.nome };
    res.json({ message: 'Login bem-sucedido', user: { id: user.id, nome: user.nome } });
  } catch (error) {
    console.error('Erro ao fazer login:', error.message, error.stack);
    res.status(500).json({ message: 'Erro ao fazer login' });
  }
});

// Rota para registrar um novo usuário
router.post('/register', async (req, res) => {
  const { nome, email, password, empresa } = req.body;

  try {
    const newUser = await User.create({ nome, email, password, empresa });
    res.status(201).send('Usuário registrado com sucesso');
  } catch (error) {
    console.error('Erro ao registrar usuário:', error.message, error.stack);
    res.status(500).send('Erro ao registrar usuário');
  }
});

module.exports = router;