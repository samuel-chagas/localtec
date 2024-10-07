
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Documentation',
            version: '1.0.0',
            description: 'API Documentation for My API',
        },
        servers: [
            {
                url: 'http://localhost:10000/api',
            },
        ],
        components: {
            schemas: {
                User: {
                    type: 'object',
                    properties: {
                        username: {
                            type: 'string',
                            description: 'Nome do usuário',
                        },
                        cpf: {
                            type: 'string',
                            description: 'CPF do usuário',
                        },
                        email: {
                            type: 'string',
                            description: 'Email do usuário',
                        },
                        phone: {
                            type: 'string',
                            description: 'Telefone do usuário',
                        },
                        password: {
                            type: 'string',
                            description: 'Senha do usuário',
                        },
                        address: {
                            type: 'string',
                            description: 'Endereço do usuário',
                        },
                        district: {
                            type: 'string',
                            description: 'Bairro do usuário',
                        },
                        city: {
                            type: 'string',
                            description: 'Cidade do usuário',
                        },
                        complemente: {
                            type: 'string',
                            description: 'Complemento do usuário',
                        },
                    },
                    required: ['username', 'cpf', 'email', 'phone', 'password', 'address', 'district', 'city',],
                },
                Category: {
                    type: 'object',
                    properties: {
                        name: {
                            type: 'string',
                            description: 'Nome da categoria',
                        },
                        slug: {
                            type: 'string',
                            description: 'Slug da categoria',
                        },
                        use_in_menu: {
                            type: 'boolean',
                            description: '',
                        },
                    },
                    required: ['name', 'slug', 'use_in_menu',],
                },
                Product: {
                    type: 'object',
                    properties: {
                        enabled: {
                            type: 'boolean',
                            description: 'Produto habilitado',
                        },
                        name: {
                            type: 'string',
                            description: 'Nome do produto',
                        },
                        slug: {
                            type: 'string',
                            description: '',
                        },
                        use_in_menu: {
                            type: 'boolean',
                            description: '',
                        },
                        stock: {
                            type: 'integer',
                            description: 'Produto em estoque',
                        },
                        description: {
                            type: 'string',
                            description: 'Descrição do produto',
                        },
                        price: {
                            type: 'decimal',
                            description: 'Preço do produto',
                        },
                        price_with_discount: {
                            type: 'decimal',
                            description: 'Desconto do produto',
                        },
                    },
                    required: ['enabled', 'name', 'slug', 'use_in_menu', 'stock', 'description', 'price', 'price_with_discount',],
                },
                Image: {
                    type: 'object',
                    properties: {
                        name: {
                            type: 'string',
                            description: 'Nome da imagem',
                        },
                        url: {
                            type: 'string',
                            description: 'Caminho/URL da imagem',
                        },
                    },
                    required: ['name', 'url',],
                },
                ImageProduct: {
                    type: 'object',
                    properties: {
                        product_id: {
                            type: 'integer',
                            description: 'ID de produtos',
                        },
                        enabled: {
                            type: 'boolean',
                            description: 'Imagem de produto habilitado/desabilitado',
                        },
                        image_id: {
                            type: 'integer',
                            description: 'ID de imagens',
                        },
                    },
                    required: ['product_id', 'enabled', 'image_id',],
                },
                ProductyCategory: {
                    type: 'object',
                    properties: {
                        product_id: {
                            type: 'integer',
                            description: '',
                        },
                        category_id: {
                            type: 'integer',
                            description: ''
                        },
                    },
                    required: ['product_id', 'category_id',],
                },
                OptionsProduct: {
                    type: 'object',
                    properties: {
                        product_id: {
                            type: 'integer',
                            description: '',
                        },
                        title: {
                            type: 'string',
                            description: 'Título de opções de produto',
                        },
                        shape: {
                            type: 'enum',
                            description: 'Forma da imagem do produto',
                        },
                        radius: {
                            type: 'integer',
                            description: 'Borda da imagem do produto'
                        },
                        type: {
                            type: 'enum',
                            description: '',
                        },
                        values: {
                            type: 'string',
                            description: '',
                        }
                    },
                    required: ['product_id', 'title', 'shape', 'radius', 'type', 'values', ],
                },
                Sale: {
                    type: 'object',
                    properties: {
                        total: {
                            type: 'decimal',
                            description: 'Total da compra',
                        },
                        payment: {
                            type: 'string',
                            description: 'Pagamento da compra',
                        },
                        sale_date: {
                            type: 'date',
                            description: 'Data da compra',
                        },
                        user_id: {
                            type: 'integer',
                            description: 'ID que conecta a tabela usuário'
                        }
                    },
                    required: ['total', 'payment', 'sale_date', 'user_id',],
                },
                Order: {
                    type: 'object',
                    properties: {
                        sale_id: {
                            type: 'integer',
                            description: 'ID que conecta à tabela compra',
                        },
                        products_id: {
                            type: 'integer',
                            description: 'ID que conecta à tabela produtos',
                        },
                    },
                    required: ['sale_id', 'products_id',],
                },
            },
        },
  },
    apis: ['./routes/*.js'], // Caminho para os arquivos de rotas onde você vai documentar as rotas
};

const specs = swaggerJsdoc(options);

module.exports = {
    swaggerUi,
    specs,
};
