const express = require('express');
const cors = require('cors');
const session = require('express-session');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const agendamentoRoutes = require('./routes/agendamentoRoutes');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

// Configuração da sessão
app.use(session({
  secret: 'unifor2024', 
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true, // Evita acesso via JavaScript no navegador
    secure: process.env.NODE_ENV === 'production', // HTTPS apenas em produção
    maxAge: 1000 * 60 * 60 * 24, // 1 dia
  },
}));

app.use('/api/users', userRoutes);
app.use('/api/produtos', productRoutes);
app.use('/api/agendamentos', agendamentoRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});