const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).send('Erro ao buscar usuários');
  }
};

exports.createUser = async (req, res) => {
  const { nome, email, password, empresa } = req.body;

  if (!nome || !email || !password || !empresa) {
    return res.status(400).send('Todos os campos são obrigatórios');
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ nome, email, password: hashedPassword, empresa });
    res.status(201).send('Usuário registrado com sucesso');
  } catch (error) {
    res.status(500).send('Erro ao registrar usuário');
  }
};