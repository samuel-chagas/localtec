
const { OptionsProduct } = require('../models');

const getAllOptionsProduct = async (request, response) => {
    try {
        const options = await OptionsProduct.finAll();
        response.status(200).json(options);
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
};

const getOptionById = async (request, response) => {
    try {
        const { id } = request.params;
        const option = await OptionsProduct.findByPk(id);
        if (option) {
            response.status(200).json(option);
        } else {
            response.status(404).json({ message: 'Opção não encontrada na base de dados.' })
        }
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
};

const createOptionsProduct = async (request, response) => {
    try {
        const newOptionsProduct = await OptionsProduct.create(request.body);
        response.status(201).json(newOptionsProduct);
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
};

const updateOption = async (request, response) => {
    try {
        const { id } = request.params;
        const [update] = await OptionsProduct.update(request.body, {
            where: { id: id }
        });
        if (update) {
            const updateOption = await Option.findByPk(id);
            response.status(200).json(updateOption);
        } else {
            response.status(404).json({ message: 'Opção com o id informado, não foi encontrada na base de dados.' })
        }
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
};

const deleteOption = async (request, response) => {
    try {
        const { id } = request.params;
        const deleted = await OptionsProduct.destroy({
            where: { id: id }
        });
        if (deleted) {
            response.status(200).send();
        } else {
            response.status(404).json({ message: 'Opção com o id informado, não foi encontrada na base de dados.' })
        }
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllOptionsProduct,
    getOptionById,
    createOptionsProduct,
    updateOption,
    deleteOption,
};
