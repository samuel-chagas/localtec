
const { Category } = require('../models');

const getAllCategories = async (request, response) => {
  try {
    const categories = await Category.findAll();
    response.status(200).json(categories);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

const getCategoryById = async (request, response) => {
  try {
    const { id } = request.params;
    const category = await Category.findByPk(id);
    if (category) {
      response.status(200).json(category);
    } else {
      response.status(404).json({ message: 'Categoria não encontrada' });
    }
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

const createCategory = async (request, response) => {
  try {
    const category = await Category.create(request.body);
    response.status(201).json(category);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

const updateCategory = async (request, response) => {
  try {
    const { id } = request.params;
    const [updated] = await Category.update(request.body, {
      where: { id: id }
    });
    if (updated) {
      const updatedCategory = await Category.findByPk(id);
      response.status(200).json(updatedCategory);
    } else {
      response.status(404).json({ message: 'Categoria não encontrada' });
    }
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

const deleteCategory = async (request, response) => {
  try {
    const { id } = request.params;
    const deleted = await Category.destroy({
      where: { id: id }
    });
    if (deleted) {
      response.status(204).send();
    } else {
      response.status(404).json({ message: 'Categoria não encontrada' });
    }
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory
};
