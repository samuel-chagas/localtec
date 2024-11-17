import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Produtos.css';

const Produtos = () => {
  const [produtos, setProdutos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/produtos');
        const data = await response.json();
        setProdutos(data);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    fetchProdutos();
  }, []);

  const handleAgendar = (id) => {
    navigate(`/Agendar/${id}`);
  };

  return (
    <div className="produtos">
      {produtos.map((produto) => (
        <div key={produto.id} className="card">
          <img src={produto.imageUrl} alt={produto.name} />
          <h2>{produto.name}</h2>
         
          <button onClick={() => handleAgendar(produto.id)}>Agendar</button>
        </div>
      ))}
    </div>
  );
};

export default Produtos;