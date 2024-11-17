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

// Função para deletar todos os produtos
const deleteAllProducts = () => {
  const query = 'DELETE FROM products';
  db.query(query, (err, result) => {
    if (err) throw err;
    console.log('Todos os produtos foram deletados com sucesso');
    db.end();
  });
};

deleteAllProducts();