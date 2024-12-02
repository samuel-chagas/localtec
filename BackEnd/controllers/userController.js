const User = require('../models/User');
const Agendamento = require('../models/Agendamento');

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
  try {
    const newUser = new User({ nome, email, password, empresa });
    await newUser.save();
    res.status(201).send('Usuário registrado com sucesso');
  } catch (error) {
    res.status(500).send('Erro ao registrar usuário');
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).send('Usuário não encontrado');
    }

    // Excluir todos os agendamentos associados ao usuário
    await Agendamento.destroy({ where: { userId: req.params.id } });

    // Excluir o usuário
    await user.destroy();
    res.status(200).send('Usuário deletado com sucesso');
  } catch (error) {
    res.status(500).send('Erro ao deletar usuário');
  }
};

exports.updateUser = async (req, res) => {
  const { nome, email, empresa, password } = req.body;
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).send('Usuário não encontrado');
    }
    user.nome = nome;
    user.email = email;
    user.empresa = empresa;
    if (password) {
      user.password = password;
    }
    await user.save();
    res.status(200).send('Usuário atualizado com sucesso');
  } catch (error) {
    res.status(500).send('Erro ao atualizar usuário');
  }
};