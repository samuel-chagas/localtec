require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Sequelize } = require('sequelize');
const routes = require('./routes');
const { swaggerUi, specs } = require('./config/swagger');
const { mysql } = require('./models');

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

const db = {mysql};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use('/api', routes);

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  sequelize.authenticate().then(() => {
    console.log('Database connected');
  }).catch(err => {
    console.log('Error: ' + err);
  });
});

module.exports = app;
module.exports = sequelize;

