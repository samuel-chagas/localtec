import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Produtos.css';

const Produtos = () => {
  const [produtos, setProdutos] = useState([]); // Inicializar como array vazio
  const [loading, setLoading] = useState(true); // Adicionar estado de carregamento
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/produtos');
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Erro ao buscar produtos: ${errorText}`);
        }
        const data = await response.json();
        setProdutos(data);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error.message);
      } finally {
        setLoading(false); // Definir carregamento como falso após a busca
      }
    };

    fetchProdutos();
  }, []);

  const handleAgendar = (id) => {
    navigate(`/Agendar/${id}`);
  };

  if (loading) {
    return <div>Carregando...</div>; // Mostrar mensagem de carregamento
  }

  return (
    <div className="produtos">
      {produtos.length === 0 ? (
        <div>Nenhum produto encontrado.</div>
      ) : (
        produtos.map((produto) => (
          <div key={produto.id} className="card">
            <img src={produto.imageUrl} alt={produto.name} />
            <h2>{produto.name}</h2>
            <button onClick={() => handleAgendar(produto.id)}>Agendar</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Produtos;