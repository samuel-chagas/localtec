
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();
const { User } = require('../models');
require('dotenv').config();

const register = async (request, response) => {
    try {
        if (await User.findOne({
            where: { email: request.body.email }
        })) return response.status(409).send('Email ja existente');

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

        const newUser = await User.create(user);
        response.status(201).send({ message: "Usuário registrado com sucesso!", user: newUser });
    } catch (error) {
        // Retorna um erro com status 500 em caso de falha
        response.status(500).json({ error: error });
    }
};

const authenticate = async (request, response) => {
    try {
        const user = await User.findOne({
            where: {
                email: request.body.email
            }
        });

        if (user == null) return response.status(404).send('Usuário não encontrado');

        const passwordIsEqual = await bcrypt.compare(request.body.password, user.password);
        if (!passwordIsEqual) return response.send('Senha incorreta.');

        let payload = { email: user.email, createdAt: user.createdAt }
        let secretKey = process.env.KEY_SECRET
        let options = { expiresIn: '1h' }

        const token = generateTokenJWT(payload, secretKey, options)
        response.json({ token });
    } catch {
        response.status(500).send('Erro ao fazer login.');
    }
};

const generateTokenJWT = (payload, secretKey, options) => jwt.sign(payload, secretKey, options);

module.exports = {
    register,
    authenticate
}
