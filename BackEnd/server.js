const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const agendamentoRoutes = require('./routes/agendamentoRoutes'); // Adicione esta linha

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/produtos', productRoutes);
app.use('/api/agendamentos', agendamentoRoutes); // Adicione esta linha

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});