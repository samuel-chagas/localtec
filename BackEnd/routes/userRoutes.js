const express = require('express');
const { createUser, loginUser, getUsers } = require('../controllers/userController');

const router = express.Router();

router.post('/register', createUser);
router.post('/login', loginUser);
router.get('/', getUsers);

router.get('/session', (req, res) => {
  if (req.session.user) {
    res.json(req.session.user);
  } else {
    res.status(401).json({ message: 'Usuário não está logado' });
  }
});

module.exports = router;