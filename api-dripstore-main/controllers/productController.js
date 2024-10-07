
const { Product } = require('../models');

const getAllProducts = async (request, response) => {
  try {
    const products = await Product.findAll();
    response.status(200).json(products);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

const getProductById = async (request, response) => {
  try {
    const { id } = request.params;
    const product = await Product.findByPk(id);
    if (product) {
      response.status(200).json(product);
    } else {
      response.status(404).json({ message: 'Produto não encontrado' });
    }
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

const createProduct = async (request, response) => {
  try {
    const product = await Product.create(request.body);
    response.status(201).json(product);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

const updateProduct = async (request, response) => {
  try {
    const { id } = request.params;
    const [updated] = await Product.update(req.body, {
      where: { id: id }
    });
    if (updated) {
      const updatedProduct = await Product.findByPk(id);
      response.status(200).json(updatedProduct);
    } else {
      response.status(404).json({ message: 'Produto não encontrado' });
    }
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

const deleteProduct = async (request, response) => {
  try {
    const { id } = request.params;
    const deleted = await Product.destroy({
      where: { id: id }
    });
    if (deleted) {
      response.status(204).send();
    } else {
      response.status(404).json({ message: 'Produto não encontrado' });
    }
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};
