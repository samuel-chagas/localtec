const Product = require('../models/Product');

exports.getProducts = async (req, res) => {
  try {
    console.log('Buscando produtos...'); // Log para indicar que a busca começou
    const products = await Product.findAll();
    console.log('Produtos encontrados:', products); // Log para mostrar os produtos encontrados
    res.json(products);
  } catch (error) {
    console.error('Erro ao buscar produtos:', error); // Log do erro
    res.status(500).send('Erro ao buscar produtos');
  }
};

exports.createProduct = async (req, res) => {
  const { name, price, imageUrl } = req.body;

  try {
    console.log('Criando produto...'); // Log para indicar que a criação começou
    const newProduct = await Product.create({ name, price, imageUrl });
    console.log('Produto criado:', newProduct); // Log para mostrar o produto criado
    res.status(201).send('Produto criado com sucesso');
  } catch (error) {
    console.error('Erro ao criar produto:', error); // Log do erro
    res.status(500).send('Erro ao criar produto');
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }
    res.json(product);
  } catch (error) {
    console.error('Erro ao buscar produto:', error);
    res.status(500).json({ message: 'Erro ao buscar produto' });
  }
};