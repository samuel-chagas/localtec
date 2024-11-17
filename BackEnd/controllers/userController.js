const User = require('../models/User');

exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).send('Erro ao buscar usuários');
  };
}

exports.createUser = async (req, res) => {
const { nome, email, password, empresa } = req.body;
  
    try {
      const newUser = new User({ nome, email, password, empresa });
      await newUser.save();
      res.status(201).send('Usuário registrado com sucesso');
    } catch (error) {
      res.status(500).send('Erro ao registrar usuário');
    }
};