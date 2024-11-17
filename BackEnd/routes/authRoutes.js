const jwt = require('jsonwebtoken');

// Middleware para verificar o token JWT
const authenticate = (req, res, next) => {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

  if (!token) {
    return res.status(401).send('Acesso negado. Token não fornecido.');
  }

  try {
    const decoded = jwt.verify(token, 'seuSegredo');
    req.userId = decoded.id; // Armazena o ID do usuário no objeto `req`
    next(); // Chama o próximo middleware ou rota
  } catch (error) {
    console.error('Erro ao verificar token:', error);
    return res.status(401).send('Token inválido.');
  }
};

module.exports = authenticate;
