const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const agendamentoRoutes = require('./routes/agendamentoRoutes'); 
const reviewRoutes = require('./routes/reviewRoutes');


const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/produtos', productRoutes);
app.use('/api/agendamentos', agendamentoRoutes); 
app.use('/api/reviews', reviewRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});