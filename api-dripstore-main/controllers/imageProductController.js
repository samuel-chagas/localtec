
const { ImageProduct } = require('../models');

const getAllImageProducts = async (request, response) => {
    try {
      const imagesProducts = await ImageProduct.findAll();
      response.status(200).json(imagesProducts);
    } catch (error) {
      response.status(500).json({ error: error.message });
    }
  };
  
  const getImageProductById = async (request, response) => {
    try {
      const { id } = request.params;
      const imageProduct = await ImageProduct.findByPk(id);
      if (imageProduct) {
        response.status(200).json(imageProduct);
      } else {
        response.status(404).json({ message: 'Imagem não encontrada' });
      }
    } catch (error) {
      response.status(500).json({ error: error.message });
    }
  };
  
  const createImageProduct = async (request, response) => {
    try {
      const imageProduct = await ImageProduct.create(request.body);
      response.status(201).json(imageProduct);
    } catch (error) {
      response.status(500).json({ error: error.message });
    }
  };
  
  const updateImageProduct = async (request, response) => {
    try {
      const { id } = request.params;
      const [updated] = await ImageProduct.update(request.body, {
        where: { id: id }
      });
      if (updated) {
        const updatedImageProduct = await ImageProduct.findByPk(id);
        response.status(200).json(updatedImageProduct);
      } else {
        response.status(404).json({ message: 'Imagem do produto não encontrada' });
      }
    } catch (error) {
      response.status(500).json({ error: error.message });
    }
  };
  
  const deleteImageProduct = async (request, response) => {
    try {
      const { id } = request.params;
      const deleted = await ImageProduct.destroy({
        where: { id: id }
      });
      if (deleted) {
        response.status(204).send();
      } else {
        response.status(404).json({ message: 'Imagem do produto não encontrada' });
      }
    } catch (error) {
      response.status(500).json({ error: error.message });
    }
  };
  
  module.exports = {
    getAllImageProducts,
    getImageProductById,
    createImageProduct,
    updateImageProduct,
    deleteImageProduct
  };
