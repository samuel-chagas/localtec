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
    const newUser = new User({ nome, email, password: hashedPassword, empresa });
    await newUser.save();
    res.status(201).send('Usuário registrado com sucesso');
  } catch (error) {
    res.status(500).send('Erro ao registrar usuário');
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send('Email e senha são obrigatórios');
  }

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
    res.status(500).json({ message: 'Erro ao fazer login' });
  }
};