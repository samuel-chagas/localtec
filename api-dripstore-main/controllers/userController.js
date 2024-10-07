
const { User } = require('../models');

// Get all users
const getAllUsers = async (request, response) => {
    try {
        const users = await User.findAll();
        response.status(200).json(users);
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
};

// Get user by ID
const getUserById = async (request, response) => {
    try {
        const { id } = request.params;
        const user = await User.findByPk(id);
        if (user) {
            response.status(200).json(user);
        } else {
            response.status(404).json({ message: 'Usuário não encontrado' });
        }
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
};

const createUser = async (request, response) => {
    try {
        // Cria um novo usuário usando os dados enviados no corpo da requisição
        const newUser = await User.create(request.body);
        // Retorna o usuário criado com status 201
        response.status(201).json(newUser);
    } catch (error) {
        // Retorna um erro com status 500 em caso de falha
        response.status(500).json({ error: error.message });
    }
};

// Update a user by ID
const updateUser = async (request, response) => {
    try {
        const { id } = request.params;
        const [updated] = await User.update(request.body, {
            where: { id: id }
        });
        if (updated) {
            const updatedUser = await User.findByPk(id);
            res.status(200).json(updatedUser);
        } else {
            response.status(404).json({ message: 'Usuário não encontrado' });
        }
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
};

// Delete a user by ID
const deleteUser = async (request, response) => {
    try {
        const { id } = request.params;
        const deleted = await User.destroy({
            where: { id: id }
        });
        if (deleted) {
            response.status(204).send();
        } else {
            response.status(404).json({ message: 'Usuário não encontrado' });
        }
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};
