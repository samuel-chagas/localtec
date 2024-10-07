
const { ProductCategory } = require('../models');

const getAllProductCategory = async (request, response) => {
    try {
        const products = await ProductCategory.finAll();
        response.status(200).json(products);
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
};

const getProductCategoryById = async (request, response) => {
    try {
        const { id } = request.params;
        const product = await ProductCategory.findByPk(id);
        if (product) {
            response.status(200).json(product);
        } else {
            response.status(404).json({ message: 'Categoria de produto com o id informado, não encontrada na base de dados.' })
        }
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
};

const createProductCategory = async (request, response) => {
    try {
        const newProductCategory = await ProductCategory.create(request.body);
        response.status(201).json(newProductCategory);
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
};

const updateProductCategory = async (request, response) => {
    try {
        const { id } = request.params;
        const [update] = await ProductCategory.update(request.body, {
            where: { id: id }
        });
        if (update) {
            const updateProductCategory = await ProductCategory.findByPk(id);
            response.status(200).json(updateProductCategory);
        } else {
            response.status(404).json({ message: 'Categoria de produto com o id informado, não foi encontrada na base de dados.' })
        }
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
};

const deleteProductCategory = async (request, response) => {
    try {
        const { id } = request.params;
        const deleted = await ProductCategory.destroy({
            where: { id: id }
        });
        if (deleted) {
            response.status(200).send();
        } else {
            response.status(404).json({ message: 'Categoria de produto com o id informado, não foi encontrada na base de dados.' })
        }
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllProductCategory,
    getProductCategoryById,
    createProductCategory,
    updateProductCategory,
    deleteProductCategory,
};
