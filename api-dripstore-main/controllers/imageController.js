
const { Image } = require('../models');

const getAllImages = async (request, response) => {
    try {
        const images = await Image.findAll();
        response.status(200).json(images);
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
};

const getImageById = async (request, response) => {
    try {
        const { id } = request.params;
        const image = await Image.findByPk(id);
        if (image) {
            response.status(200).json(image);
        } else {
            response.status(404).json({ message: 'Imagem não encontrada na base de dados.' })
        }
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
};

const createImage = async (request, response) => {
    try {
        const newImage = await Image.create(request.body);
        response.status(201).json(newImage);
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
};

const updateImage = async (request, response) => {
    try {
        const { id } = request.params;
        const [update] = await Image.update(request.body, {
            where: { id: id }
        });
        if (update) {
            const updateImage = await Image.findByPk(id);
            response.status(200).json(updateImage);
        } else {
            response.status(404).json({ message: 'Imagem com o id informado, não foi encontrada na base de dados.' })
        }
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
};

const deleteImage = async (request, response) => {
    try {
        const { id } = request.params;
        const deleted = await Image.destroy({
            where: { id: id }
        });
        if (deleted) {
            response.status(200).send();
        } else {
            response.status(404).json({ message: 'Imagem com o id informado, não foi encontrada na base de dados.' })
        }
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllImages,
    getImageById,
    createImage,
    updateImage,
    deleteImage,
};
