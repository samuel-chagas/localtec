const fs = require('fs');
const path = require('path');
const mysql = require('mysql');

// Configuração do banco de dados
const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '12345678',
  database: 'localtec'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Conectado ao banco de dados');
});

// Função para buscar produtos do banco de dados e atualizar o arquivo JSON
const updateProdutosJson = () => {
  const query = 'SELECT * FROM products';
  db.query(query, (err, results) => {
    if (err) throw err;

    const produtosPath = path.join(__dirname, '../../localtec/src/assets/Produtos/produtos.json');
    fs.writeFile(produtosPath, JSON.stringify(results, null, 2), (err) => {
      if (err) throw err;
      console.log('Arquivo produtos.json atualizado com sucesso');
    });
  });
};

updateProdutosJson();