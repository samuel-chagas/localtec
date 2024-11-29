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

// Caminho para a pasta de equipamentos
const directoryPath = path.join('D:', 'OneDrive', 'Documentos', 'unifor', 'PA WEB', 'sos', 'localtec', 'FrontEnd', 'src', 'assets', 'Equipamentos');

// Função para extrair o nome do produto a partir do nome do arquivo
const getProductName = (filename) => {
  const name = path.parse(filename).name;
  return name.split('_')[0];
};

// Função para inserir produtos no banco de dados
const insertProducts = () => {
  fs.readdir(directoryPath, (err, files) => {
    if (err) throw err;

    files.forEach((file) => {
      const productName = getProductName(file);
      const imageUrl = `/src/assets/Equipamentos/${file}`;
      const price = 100;

      const query = 'INSERT INTO products (name, price, imageUrl) VALUES (?, ?, ?)';
      db.query(query, [productName, price, imageUrl], (err, result) => {
        if (err) throw err;
        console.log(`Produto ${productName} inserido com sucesso`);
      });
    });
  });
};

insertProducts();