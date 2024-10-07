
const express = require('express');
const app = express();
const users = require('../models');
require('dotenv').config();
const bcrypt = require('bcrypt');

const registerController = async (request, response) => {
    try {
        const hashedPassword = await bcrypt.hash(request.body.password, 10);
        const user = {
            username: request.body.username,
            cpf: request.body.cpf,
            email: request.body.email,
            phone: request.body.phone,
            password: hashedPassword,
            address: request.body.address,
            district: request.body.district,
            city: request.body.city,
            complemente: request.body.complemente
        };
        users.push(user);
        response.status(201).send('Usuário registrado com sucesso!');
    } catch {
        response.status(500).send('Erro ao registrar usuário.');
    }
};

module.exports = registerController;
