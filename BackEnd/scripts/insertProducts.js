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
const equipamentosDir = path.join(__dirname, '..', '..', 'FrontEnd', 'src', 'assets', 'Equipamentos');

// Função para extrair o nome do produto a partir do nome do arquivo
const getProductName = (filename) => {
  const nameParts = filename.split('_');
  return nameParts.slice(0, nameParts.length - 1).join(' ');
};

// Função para inserir produtos no banco de dados
const insertProducts = () => {
  fs.access(equipamentosDir, fs.constants.F_OK, (err) => {
    if (err) {
      console.error(`Diretório não encontrado: ${equipamentosDir}`);
      return;
    }

    fs.readdir(equipamentosDir, (err, files) => {
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
  });
};

insertProducts();