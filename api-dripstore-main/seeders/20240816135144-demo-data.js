'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Users', [
      { username: 'Ana Paula', cpf: '12345678901', email: 'ana.paula@example.com', phone: '(11) 91234-5678', password: 'senhaSegura1', address: 'Rua das Flores, 123', district: 'Centro', city: 'São Paulo', complemente: 'Apto 45', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },

      { username: 'Bruno Henrique', cpf: '23456789012', email: 'bruno.henrique@example.com', phone: '(21) 99876-5432', password: 'senhaSegura2', address: 'Avenida Brasil, 456', district: 'Copacabana', city: 'Rio de Janeiro', complemente: 'Casa 1', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },

      { username: 'Carla Silva', cpf: '34567890123', email: 'carla.silva@example.com', phone: '(31) 98765-4321', password: 'senhaSegura3', address: 'Rua Minas Gerais, 789', district: 'Savassi', city: 'Belo Horizonte', complemente: 'Apto 101', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },

      { username: 'Diego Souza', cpf: '45678901234', email: 'diego.souza@example.com', phone: '(41) 97654-3210', password: 'senhaSegura4', address: 'Rua Curitiba, 101', district: 'Centro Cívico', city: 'Curitiba', complemente: 'Bloco B, Sala 12', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },

      { username: 'Fernanda Costa', cpf: '56789012345', email: 'fernanda.costa@example.com', phone: '(51) 96543-2109', password: 'senhaSegura5', address: 'Avenida Ipiranga, 202', district: 'Centro Histórico', city: 'Porto Alegre', complemente: 'Cobertura 5', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },

      { username: 'Carlos Eduardo', cpf: '98765432100', email: 'carlos.eduardo@example.com', phone: '(21) 98765-4321', password: 'senhaSegura2', address: 'Av. Brasil, 456', district: 'Copacabana', city: 'Rio de Janeiro', complemente: 'Casa 2', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },

      { username: 'Juliana Oliveira', cpf: '32165498712', email: 'juliana.oliveira@example.com', phone: '(31) 99876-5432', password: 'senhaSegura3', address: 'Rua da Paz, 789', district: 'Savassi', city: 'Belo Horizonte', complemente: 'Bloco B, Apto 301', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },

      { username: 'Pedro Henrique', cpf: '45678912334', email: 'pedro.henrique@example.com', phone: '(41) 91234-5678', password: 'senhaSegura4', address: 'Av. Paraná, 101', district: 'Centro Cívico', city: 'Curitiba', complemente: 'Cobertura 2', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },

      { username: 'Mariana Silva', cpf: '78912345656', email: 'mariana.silva@example.com', phone: '(51) 98765-4321', password: 'senhaSegura5', address: 'Rua das Palmeiras, 303', district: 'Moinhos de Vento', city: 'Porto Alegre', complemente: 'Apto 104', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },

      { username: 'Fernando Souza', cpf: '15975385268', email: 'fernando.souza@example.com', phone: '(61) 99876-5432', password: 'senhaSegura6', address: 'Quadra 7, Bloco 12', district: 'Asa Norte', city: 'Brasília', complemente: 'Apto 302', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },

      { username: 'Bianca Rocha', cpf: '85295175379', email: 'bianca.rocha@example.com', phone: '(71) 91234-5678', password: 'senhaSegura7', address: 'Rua das Laranjeiras, 56', district: 'Pituba', city: 'Salvador', complemente: 'Casa 1', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },


    ], {});

    await queryInterface.bulkInsert('Products', [
      { enabled: true, name: "Tênis Corrida Pro", slug: "tenis-corrida-pro", use_in_menu: true, stock: 50, description: "Tênis leve e confortável, ideal para corridas de longa distância.", price: 299.99, price_with_discount: 249.99, createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },

      { enabled: true, name: "Camiseta Esportiva Tech", slug: "camiseta-esportiva-tech", use_in_menu: true, stock: 100, description: "Camiseta de alta performance com tecnologia de absorção de suor.", price: 89.90, price_with_discount: 79.90, createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },

      { enabled: false, name: "Mochila Academia Fit", slug: "mochila-academia-fit", use_in_menu: false, stock: 0, description: "Mochila resistente e espaçosa, ideal para levar equipamentos de academia.", price: 149.90, price_with_discount: 129.90, createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },

      { enabled: true, name: "Bola de Futebol Campo Pro", slug: "bola-futebol-campo-pro", use_in_menu: true, stock: 200, description: "Bola de futebol oficial, aprovada pelas federações internacionais.", price: 99.99, price_with_discount: 79.99, createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },

      { enabled: false, name: "Bermuda Esportiva Running", slug: "bermuda-esportiva-running", use_in_menu: false, stock: 0, description: "Bermuda leve e confortável, ideal para corridas e treinos.", price: 59.90, price_with_discount: 49.90, createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },

      { enabled: true, name: "Jaqueta Corta Vento", slug: "jaqueta-corta-vento", use_in_menu: true, stock: 75, description: "Jaqueta resistente ao vento e à água, perfeita para esportes ao ar livre.", price: 199.90, price_with_discount: 179.90, createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },

      { enabled: true, name: "Luvas de Boxe Pro", slug: "luvas-boxe-pro", use_in_menu: true, stock: 30, description: "Luvas de boxe profissionais, com excelente absorção de impacto.", price: 249.99, price_with_discount: 229.99, createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },

      { enabled: true, name: "Meia Compressão Running", slug: "meia-compressao-running", use_in_menu: false, stock: 150, description: "Meia de compressão para melhor desempenho e recuperação em corridas.", price: 39.90, price_with_discount: 29.90, createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },

      { enabled: false, name: "Garrafa Térmica 1L", slug: "garrafa-termica-1l", use_in_menu: true, stock: 0, description: "Garrafa térmica de 1 litro, mantém a temperatura por até 12 horas.", price: 89.90, price_with_discount: 69.90, createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },

      { enabled: true, name: "Boné Esportivo UV", slug: "bone-esportivo-uv", use_in_menu: true, stock: 120, description: "Boné esportivo com proteção UV, leve e ajustável.", price: 49.90, price_with_discount: 39.90, createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },

    ], {});

    await queryInterface.bulkInsert('Categories', [
      { name: 'Tênis de Corrida', slug: 'tenis-de-corrida', use_in_menu: true, createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },

      { name: 'Roupas de Treino', slug: 'roupas-de-treino', use_in_menu: true, createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },

      { name: 'Acessórios Esportivos', slug: 'acessorios-esportivos', use_in_menu: true, createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },

      { name: 'Equipamentos de Academia', slug: 'equipamentos-de-academia', use_in_menu: false, createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },

      { name: 'Moda Casual', slug: 'moda-casual', use_in_menu: false, createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },

      { name: 'Suplementos Alimentares', slug: 'suplementos-alimentares', use_in_menu: true, createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },

    ], {});

    await queryInterface.bulkInsert('Images', [
      { name: 'Tênis Corrida Adidas', url: '../assets/tenis-catalogo.png', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },

      { name: 'Tênis Esportivo Tech Adidas', url: '../assets/tenis-catalogo.png', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },

      { name: 'Tênis Academia Fit Puma', url: '../assets/tenis-catalogo.png', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },

      { name: 'Tênis mola dupla Nike', url: '../assets/tenis-catalogo.png', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },

      { name: 'Tênis casual Fila', url: '../assets/tenis-catalogo.png', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },

      { name: 'Tênis caminhada Puma', url: '../assets/tenis-catalogo.png', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },

    ])
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('Products', null, {});
    await queryInterface.bulkDelete('Categories', null, {});
    await queryInterface.bulkDelete('Image', null, {});

  }
};
