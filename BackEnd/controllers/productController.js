const Product = require('../models/Product');

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).send('Erro ao buscar produtos');
  }
};

exports.createProduct = async (req, res) => {
  const { name, price, imageUrl } = req.body;

  try {
    const newProduct = await Product.create({ name, price, imageUrl });
    res.status(201).send('Produto criado com sucesso');
  } catch (error) {
    res.status(500).send('Erro ao criar produto');
  }
};