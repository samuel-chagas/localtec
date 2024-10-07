
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const imageController = require('../controllers/imageController');
const optionsProductController = require('../controllers/optionsProductController');
const productCategoryController = require('../controllers/productCategoryController');
const categoryController = require('../controllers/categoryController');
const orderController = require('../controllers/orderController');
const productController = require('../controllers/productController');
const imageProductController = require('../controllers/imageProductController')
const saleController = require('../controllers/saleController');
const authenticateController = require('../controllers/authenticateController');

/**
 * @swagger
 * tags:
 *   name: API DripStore
 *   description: Documentação de API para ecommerce.
 */

// Auth routes
/**
 * @swagger
 * /register:
 *   post:
 *     summary: Criar um novo usuário
 *     tags: [Autenticação]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: Usuário criado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Erro no servidor
 */
router.post('/register', authenticateController.register);
/**
 * @swagger
 * /login:
 *   post:
 *     summary: Realiza o login do usuário
 *     tags: [Autenticação]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Email do usuário
 *                 example: "usuario@example.com"
 *               password:
 *                 type: string
 *                 description: Senha do usuário
 *                 example: "senha123"
 *     responses:
 *       200:
 *         description: Login bem-sucedido
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: Token JWT para autenticação
 *       401:
 *         description: Credenciais inválidas
 */
router.post('/authenticate', authenticateController.authenticate);

// User routes
/**
 * @swagger
 * /users:
 *   get:
 *     summary: Buscar uma lista de usuários
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Lista de usuários
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
router.get('/users', userController.getAllUsers);
/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Buscar um único usuário
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do usuário
 *     responses:
 *       200:
 *         description: Um único usuário
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: Usuário não encontrado
 */
router.get('/users/:id', userController.getUserById);
/**
 * @swagger
 * /users:
 *   post:
 *     summary: Criar um novo usuário
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Requisição inválida
 *       500:
 *         description: Erro interno do servidor
 */
router.post('/users', userController.createUser);
/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Atualizar um usuário
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Usuário atualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Erro no servidor
 */
router.put('/users/:id', userController.updateUser);
/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Deletar um usuário
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do usuário
 *     responses:
 *       204:
 *         description: Sem corpo da resposta
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro no servidor
 */
router.delete('/users/:id', userController.deleteUser);

// Product routes
/**
 * @swagger
 * /products:
 *   get:
 *     summary: Buscar uma lista de produtos
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Lista de produtos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */
router.get('/products', productController.getAllProducts);
/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Buscar um único produto
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do produto
 *     responses:
 *       200:
 *         description: Um único produto
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Usuário não encontrado
 */
router.get('/products/:id', productController.getProductById);
/**
 * @swagger
 * /products:
 *   post:
 *     summary: Criar um novo produto
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       201:
 *         description: Produto criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       500:
 *         description: Erro interno do servidor
 */
router.post('/products', productController.createProduct);
/**
 * @swagger
 * /products/{id}:
 *   put:
 *     summary: Atualizar um produto
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do produto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: Produto atualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro no servidor
 */
router.put('/products/:id', productController.updateProduct);
/**
 * @swagger
 * /products/{id}:
 *   delete:
 *     summary: Deletar um produto
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do produto
 *     responses:
 *       204:
 *         description: Sem corpo da resposta
 *       404:
 *         description: Produto não encontrado
 *       500:
 *         description: Erro no servidor
 */
router.delete('/products/:id', productController.deleteProduct);

// // Category routes
/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Buscar uma lista de categoria
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: Lista de categoria
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Categories'
 */
router.get('/categories', categoryController.getAllCategories);
/**
 * @swagger
 * /categories/{id}:
 *   get:
 *     summary: Buscar uma única categoria
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da categoria
 *     responses:
 *       200:
 *         description: Uma única categoria
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       404:
 *         description: Categoria não encontrada
 */
router.get('/categories/:id', categoryController.getCategoryById);
/**
 * @swagger
 * /categories:
 *   post:
 *     summary: Criar uma nova categoria
 *     tags: [Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       201:
 *         description: Categoria criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       400:
 *         description: Requisição inválida
 *       500:
 *         description: Erro interno do servidor
 */
router.post('/categories', categoryController.createCategory);
/**
 * @swagger
 * /categories/{id}:
 *   put:
 *     summary: Atualizar uma categoria
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da categoria
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       200:
 *         description: Categoria atualizada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       500:
 *         description: Erro no servidor
 */
router.put('/categories/:id', categoryController.updateCategory);
/**
 * @swagger
 * /categories/{id}:
 *   delete:
 *     summary: Deletar uma categoria
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da categoria
 *     responses:
 *       204:
 *         description: Sem corpo da resposta
 *       404:
 *         description: Categoria não encontrada
 *       500:
 *         description: Erro no servidor
 */
router.delete('/categories/:id', categoryController.deleteCategory);

// Order routes
/**
 * @swagger
 * /orders:
 *   get:
 *     summary: Buscar uma lista de pedidos
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: Lista de pedidos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 */
router.get('/orders', orderController.getAllOrders);
/**
 * @swagger
 * /orders/{id}:
 *   get:
 *     summary: Buscar um único pedido
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do pedido
 *     responses:
 *       200:
 *         description: Um único pedido
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       404:
 *         description: Pedido não encontrado
 */
router.get('/orders/:id', orderController.getOrderById);
/**
 * @swagger
 * /orders:
 *   post:
 *     summary: Criar um novo pedido
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Orders'
 *     responses:
 *       201:
 *         description: Pedido criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Orders'
 *       500:
 *         description: Erro interno do servidor
 */
router.post('/orders', orderController.createOrder);
/**
 * @swagger
 * /orders/{id}:
 *   put:
 *     summary: Atualizar um pedido
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do pedido
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Order'
 *     responses:
 *       200:
 *         description: Pedido atualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Orders'
 *       500:
 *         description: Erro no servidor
 */
router.put('/orders/:id', orderController.updateOrder);
/**
 * @swagger
 * /orders/{id}:
 *   delete:
 *     summary: Deletar um pedido
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do pedido
 *     responses:
 *       204:
 *         description: Sem corpo da resposta
 *       404:
 *         description: Pedido não encontrado
 *       500:
 *         description: Erro no servidor
 */
router.delete('/orders/:id', orderController.deleteOrder);

// ProductImages routes
/**
 * @swagger
 * /imageProduct:
 *   get:
 *     summary: Buscar uma lista de imagens
 *     tags: [ImageProduct]
 *     responses:
 *       200:
 *         description: Lista de imagens de produtos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ImageProduct'
 */
router.get('/imageProduct', imageProductController.getAllImageProducts);
/**
 * @swagger
 * /imageProduct/{id}:
 *   get:
 *     summary: Buscar uma única imagem
 *     tags: [ImageProduct]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da imagem do produto
 *     responses:
 *       200:
 *         description: Uma única imagem
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ImageProduct'
 *       404:
 *         description: Imagem não encontrada
 */
router.get('/imageProduct/:id', imageProductController.getImageProductById);
/**
 * @swagger
 * /imageProduct:
 *   post:
 *     summary: Criar uma nova imagem de um produto
 *     tags: [ImageProduct]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ImageProduct'
 *     responses:
 *       201:
 *         description: Imagem inserida com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ImageProduct'
 *       500:
 *         description: Erro interno do servidor
 */
router.post('/imageProduct', imageProductController.createImageProduct);
/**
 * @swagger
 * /imageProduct/{id}:
 *   put:
 *     summary: Atualizar uma imagem
 *     tags: [ImageProduct]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da imagem
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ImageProduct'
 *     responses:
 *       200:
 *         description: Imagem atualizada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ImageProduct'
 *       404:
 *         description: Imagem não encontrada
 *       500:
 *         description: Erro no servidor
 */
router.put('/imageProduct/:id', imageProductController.updateImageProduct);
/**
 * @swagger
 * /imageProduct/{id}:
 *   delete:
 *     summary: Deletar uma imagem
 *     tags: [ImageProduct]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da imagem
 *     responses:
 *       204:
 *         description: Sem corpo da resposta
 *       404:
 *         description: Produto não encontrado
 *       500:
 *         description: Erro no servidor
 */
router.delete('/imageProduct/:id', imageProductController.deleteImageProduct)

// Image routes
/**
 * @swagger
 * /images:
 *   get:
 *     summary: Buscar uma lista de imagens
 *     tags: [Images]
 *     responses:
 *       200:
 *         description: Lista de imagens
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Image'
 */
router.get('/images', imageController.getAllImages);
/**
 * @swagger
 * /images/{id}:
 *   get:
 *     summary: Buscar uma única imagem
 *     tags: [Images]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da imagem
 *     responses:
 *       200:
 *         description: Uma única imagem
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Image'
 *       404:
 *         description: Imagem não encontrada
 */
router.get('/images/:id', imageController.getImageById);
/**
 * @swagger
 * /images:
 *   post:
 *     summary: Criar uma nova imagem
 *     tags: [Images]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Image'
 *     responses:
 *       201:
 *         description: Imagem criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Image'
 *       500:
 *         description: Erro interno do servidor
 */
router.post('/images', imageController.createImage);
/**
 * @swagger
 * /images/{id}:
 *   put:
 *     summary: Atualizar uma imagem
 *     tags: [Images]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da imagem
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Image'
 *     responses:
 *       200:
 *         description: Imagem atualizada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Image'
 *       404:
 *         description: Imagem não encontrada
 *       500:
 *         description: Erro no servidor
 */
router.put('/images/:id', imageController.updateImage);
/**
 * @swagger
 * /images/{id}:
 *   delete:
 *     summary: Deletar uma imagem
 *     tags: [Images]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da imagem
 *     responses:
 *       204:
 *         description: Sem corpo da resposta
 *       404:
 *         description: Imagem não encontrada
 *       500:
 *         description: Erro no servidor
 */
router.delete('/images/:id', imageController.deleteImage);

// OptionsProduct routes
/**
 * @swagger
 * /options:
 *   get:
 *     summary: Buscar uma lista de opções do produto
 *     tags: [OptionsProducts]
 *     responses:
 *       200:
 *         description: Lista de opções do produto
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/OptionsProduct'
 */
router.get('/options', optionsProductController.getAllOptionsProduct);
/**
 * @swagger
 * /options/{id}:
 *   get:
 *     summary: Buscar uma única opção de produto
 *     tags: [OptionsProducts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da opção de produto
 *     responses:
 *       200:
 *         description: Uma única opção
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/OptionsProduct'
 *       404:
 *         description: Opção não encontrada
 */
router.get('/options/:id', optionsProductController.getOptionById);
/**
 * @swagger
 * /options:
 *   post:
 *     summary: Criar uma nova opção
 *     tags: [OptionsProducts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/OptionsProduct'
 *     responses:
 *       201:
 *         description: Opção criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/OptionsProduct'
 *       500:
 *         description: Erro interno do servidor
 */
router.post('/options', optionsProductController.createOptionsProduct);
/**
 * @swagger
 * /options/{id}:
 *   put:
 *     summary: Atualizar uma opção do produto
 *     tags: [OptionsProducts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da opção
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/OptionsProduct'
 *     responses:
 *       200:
 *         description: Opção atualizada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/OptionsProduct'
 *       404:
 *         description: Opção não encontrada
 *       500:
 *         description: Erro no servidor
 */
router.put('/options/:id', optionsProductController.updateOption);
/**
 * @swagger
 * /options/{id}:
 *   delete:
 *     summary: Deletar uma opção do produto
 *     tags: [OptionsProducts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da opção
 *     responses:
 *       204:
 *         description: Sem corpo da resposta
 *       404:
 *         description: Opção não encontrada
 *       500:
 *         description: Erro no servidor
 */
router.delete('/options/:id', optionsProductController.deleteOption);

// ProductCategory routes
/**
 * @swagger
 * /optionscategory:
 *   get:
 *     summary: Buscar uma lista de opções de categoria do produtos
 *     tags: [OptionsCategory]
 *     responses:
 *       200:
 *         description: Lista de opções de categoria do produto
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/OptionsCategory'
 */
router.get('/optionscategory', productCategoryController.getAllProductCategory);
/**
 * @swagger
 * /optionscategory/{id}:
 *   get:
 *     summary: Buscar uma única opção de categoria do produto
 *     tags: [OptionsCategory]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da opção de categoria do produto
 *     responses:
 *       200:
 *         description: Uma única opção de categoria
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/OptionsCategory'
 *       404:
 *         description: Opção não encontrada
 */
router.get('/optionscategory/:id', productCategoryController.getProductCategoryById);
/**
 * @swagger
 * /optionsctegory:
 *   post:
 *     summary: Criar uma nova opção de categoria
 *     tags: [OptionsCategory]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/OptionsCategory'
 *     responses:
 *       201:
 *         description: Opção de categoria criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/OptionsCategory'
 *       500:
 *         description: Erro interno do servidor
 */
router.post('/optionscategory', productCategoryController.createProductCategory);
/**
 * @swagger
 * /optionscategory/{id}:
 *   put:
 *     summary: Atualizar uma opção de categoria do produto
 *     tags: [OptionsCategory]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da opção de categoria
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/OptionsCategory'
 *     responses:
 *       200:
 *         description: Opção de categoria atualizada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/OptionsCategory'
 *       404:
 *         description: Opção de categoria não encontrada
 *       500:
 *         description: Erro no servidor
 */
router.put('/optionscategory/:id', productCategoryController.updateProductCategory);
/**
 * @swagger
 * /optionscategory/{id}:
 *   delete:
 *     summary: Deletar uma opção de categoria do produto
 *     tags: [OptionsCategory]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da opção de categoria
 *     responses:
 *       204:
 *         description: Sem corpo da resposta
 *       404:
 *         description: Opção de categoria não encontrada
 *       500:
 *         description: Erro no servidor
 */
router.delete('/optionscategory/:id', productCategoryController.deleteProductCategory);

// // Sale routes
/**
 * @swagger
 * /sales:
 *   get:
 *     summary: Buscar uma lista de vendas
 *     tags: [Sales]
 *     responses:
 *       200:
 *         description: Lista de vendas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Sale'
 */
router.get('/sales', saleController.getAllSales);
/**
 * @swagger
 * /sales/{id}:
 *   get:
 *     summary: Buscar uma venda
 *     tags: [Sales]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da venda
 *     responses:
 *       200:
 *         description: Uma única venda
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Sale'
 *       404:
 *         description: Venda não encontrada
 */
router.get('/sales/:id', saleController.getSaleById);
/**
 * @swagger
 * /sales:
 *   post:
 *     summary: Criar uma nova venda
 *     tags: [Sales]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Sale'
 *     responses:
 *       201:
 *         description: Venda criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Sale'
 *       500:
 *         description: Erro interno do servidor
 */
router.post('/sales', saleController.createSale);
/**
 * @swagger
 * /sales/{id}:
 *   put:
 *     summary: Atualizar uma venda
 *     tags: [Sales]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da venda
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Sale'
 *     responses:
 *       200:
 *         description: Imagem atualizada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Sale'
 *       404:
 *         description: Venda não encontrada
 *       500:
 *         description: Erro no servidor
 */
router.put('/sales/:id', saleController.updateSale);
/**
 * @swagger
 * /sales/{id}:
 *   delete:
 *     summary: Deletar uma venda
 *     tags: [Sales]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da venda
 *     responses:
 *       204:
 *         description: Sem corpo da resposta
 *       404:
 *         description: Venda não encontrado
 *       500:
 *         description: Erro no servidor
 */
router.delete('/sales/:id', saleController.deleteSale);

module.exports = router;
