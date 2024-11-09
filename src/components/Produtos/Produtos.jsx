import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Atualize para useNavigate
import './Produtos.css';

const Produtos = () => {
  const [produtos, setProdutos] = useState([]);
  const navigate = useNavigate(); // Atualize para useNavigate

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/produtos');
        if (!response.ok) {
          throw new Error('Erro ao buscar produtos');
        }
        const data = await response.json();
        setProdutos(data);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    fetchProdutos();
  }, []);

  const handleRedirect = (id) => {
    navigate(`/produto/${id}`); // Atualize para useNavigate
  };

  return (
    <div className="produtos">
      {produtos.map((produto) => (
        <div key={produto.id} className="card" onClick={() => handleRedirect(produto.id)}>
          <h2>{produto.name}</h2>
          <p>Preço: R${produto.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Produtos;