const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const users = await User.findAll(); 
    res.json(users);
  } catch (error) {
    console.error('Erro ao buscar usuários:', error.message, error.stack);
    res.status(500).json({ message: 'Erro ao buscar usuários' });
  }
});

router.post('/register', async (req, res) => {
  const { nome, email, password, empresa } = req.body;

  try {
    // Verificar se o usuário já existe
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).send({ message: 'Usuário já registrado' });
    }

    // Hash da senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Criar novo usuário
    const newUser = await User.create({ nome, email, password: hashedPassword, empresa });
    res.status(201).send({ message: 'Usuário registrado com sucesso' });
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    res.status(500).send({ message: 'Erro ao registrar usuário' });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(400).send({ message: 'Usuário não encontrado' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send({ message: 'Senha incorreta' });
    }

    const token = jwt.sign({ id: user.id }, 'seuSegredo', { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    res.status(500).send({ message: 'Erro ao fazer login' });
  }
});

router.get('/me', async (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  try {
    const decoded = jwt.verify(token, 'seuSegredo');
    const user = await User.findByPk(decoded.id, { attributes: ['nome'] });
    res.json({ username: user.nome });
  } catch (error) {
    console.error('Erro ao buscar usuário:', error);
    res.status(500).send({ message: 'Erro ao buscar usuário' });
  }
});

module.exports = router;