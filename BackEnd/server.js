require('dotenv').config();
const express = require('express');
const cors = require('cors');
const session = require('express-session');
const sequelize = require('./db'); // Corrigir o caminho para o arquivo db.js
const userRoutes = require('./routes/userRoutes'); // Corrigir o nome do arquivo de rotas
const agendamentoRoutes = require('./routes/agendamentoRoutes');
const productRoutes = require('./routes/productRoutes'); // Adicionar rotas de produtos

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

// Configuração da sessão
app.use(session({
  secret: 'seuSegredoAqui',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Defina como true se estiver usando HTTPS
}));

// Usando as rotas
app.use('/api/users', userRoutes);
app.use('/api/agendamentos', agendamentoRoutes);
app.use('/api/produtos', productRoutes); // Adicionar rota de produtos

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}).catch(err => {
  console.error('Erro ao conectar ao banco de dados:', err);
});