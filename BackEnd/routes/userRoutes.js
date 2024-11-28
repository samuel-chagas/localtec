const express = require('express');
const { createUser, getUsers } = require('../controllers/userController');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login); // Endpoint configurado para receber requisição POST

router.get('/', getUsers);

router.get('/session', (req, res) => {
  if (req.session.user) {
    res.json(req.session.user);
  } else {
    res.status(401).json({ message: 'Usuário não está logado' });
  }
});

module.exports = router;