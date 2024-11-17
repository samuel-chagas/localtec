const express = require('express');
const Product = require('../models/Product'); // Importar o modelo Product

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll(); // Usar Sequelize para buscar todos os produtos
    res.json(products);
  } catch (error) {
    console.error('Erro ao buscar produtos:', error.message, error.stack);
    res.status(500).json({ message: 'Erro ao buscar produtos' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id); // Usar Sequelize para buscar produto por ID
    res.json(product);
  } catch (error) {
    console.error('Erro ao buscar produto:', error.message, error.stack);
    res.status(500).json({ message: 'Erro ao buscar produto' });
  }
});

module.exports = router;