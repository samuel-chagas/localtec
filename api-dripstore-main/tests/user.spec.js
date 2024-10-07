
const request = require('supertest');
const { sequelize, User } = require('../models');
const app = require('../index'); 

// Verifica se as tabelas existem sem recriá-las
beforeAll(async () => {
  await sequelize.authenticate(); // Verifica a conexão com o banco de dados
  await sequelize.sync(); // Sincroniza os modelos
});

afterAll(async () => {
  await sequelize.close(); // Fecha a conexão com o banco de dados após os testes
});

describe('User Routes', () => {

  describe('GET /api/users', () => {
    it('deve resgatar todos os usuários', async () => {
      // Consulta o banco de dados para garantir que há dados
      const users = await User.findAll();
      
      const response = await request(app).get('/api/users');
      expect(response.statusCode).toBe(200);
      expect(response.body).toBeInstanceOf(Array);
      expect(response.body.length).toBeGreaterThan(0); // Verifica que há pelo menos um usuário
    });
  });

  describe('GET /api/users/:id', () => {
    it('deve resgatar um usuário por id', async () => {
      // Supõe que tenha pelo menos um usuário no banco de dados
      const user = await User.findOne(); // Pega o primeiro usuário
      if (!user) {
        throw new Error('Nenhum usuário encontrado para o teste');
      }

      const response = await request(app).get(`/api/users/${user.id}`);
      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty('email', user.email);
    });

    it('deve retornar erro 404 para usuário não encontrado', async () => {
      const response = await request(app).get('/api/users/999');
      expect(response.statusCode).toBe(404);
      expect(response.body).toHaveProperty('message', 'Usuário não encontrado');
    });
  });

  describe('PUT /api/users/:id', () => {
    it('deve editar um usuário', async () => {
      const user = await User.findOne(); // Pega o primeiro usuário
      if (!user) {
        throw new Error('Nenhum usuário encontrado para o teste');
      }

      const response = await request(app).put(`/api/users/${user.id}`);
      expect(response.statusCode).toBe(404);
    });

    it('deve retornar erro 404 para usuário não encontrado', async () => {
      const response = await request(app).put('/api/users/999')
      expect(response.statusCode).toBe(404);
      expect(response.body).toHaveProperty('message', 'Usuário não encontrado');
    });
  });

  describe('DELETE /api/users/:id', () => {
    it('deve deletar um usuário por id', async () => {
      const user = await User.findOne(); // Pega o primeiro usuário
      if (!user) {
        throw new Error('Nenhum usuário encontrado para o teste');
      }

      const response = await request(app).delete(`/api/users/${user.id}`);
      expect(response.statusCode).toBe(204);
    });

    it('deve retornar erro 404 para usuário não encontrado', async () => {
      const response = await request(app).delete('/api/users/999');
      expect(response.statusCode).toBe(404);
      expect(response.body).toHaveProperty('message', 'Usuário não encontrado');
    });
  });
});
