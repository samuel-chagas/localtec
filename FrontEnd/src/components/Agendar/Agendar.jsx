import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Agendar.css';

const Agendar = () => {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  const [agendamentos, setAgendamentos] = useState([]);

  useEffect(() => {
    const fetchProduto = async () => {
      try {
        const response = await fetch(`http://localhost:5001/api/produtos/${id}`);
        const data = await response.json();
        setProduto(data);
      } catch (error) {
        console.error('Erro ao buscar produto:', error);
      }
    };

    const fetchAgendamentos = async () => {
      try {
        const response = await fetch(`http://localhost:5001/api/agendamentos/${id}`);
        if (!response.ok) {
          throw new Error('Erro ao buscar agendamentos');
        }
        const data = await response.json();
        setAgendamentos(data);
      } catch (error) {
        console.error('Erro ao buscar agendamentos:', error);
      }
    };

    fetchProduto();
    fetchAgendamentos();
  }, [id]);

  const handleAgendar = async () => {
    const agendamentoExistente = agendamentos.find(
      (agendamento) => agendamento.data === data && agendamento.hora === hora
    );

    if (agendamentoExistente) {
      alert('Este produto já está agendado para este horário.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5001/api/agendamentos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ produtoId: id, data, hora }),
      });

      if (response.ok) {
        alert('Agendamento realizado com sucesso!');
        setAgendamentos([...agendamentos, { data, hora }]);
      } else {
        alert('Erro ao realizar agendamento.');
      }
    } catch (error) {
      console.error('Erro ao realizar agendamento:', error);
    }
  };

  if (!produto) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="agendar-container">
      <div className="produto-info">
        <h2>{produto.name}</h2>
        <p>ID do Produto: {produto.id}</p>
        <p className="descricao">{produto.description}</p>
        <div className="disponibilidade">
          <p>Disponibilidade:</p>
          <span>{produto.stock > 0 ? 'Em estoque' : 'Indisponível'}</span>
        </div>
        <img src={produto.imageUrl} alt={produto.name} />
      </div>

      <div className="agendar-formulario">
        <label htmlFor="data">Escolha a data de agendamento:</label>
        <input type="date" id="data" name="data" value={data} onChange={(e) => setData(e.target.value)} />

        <label htmlFor="hora">Escolha o horário:</label>
        <select id="hora" name="hora" value={hora} onChange={(e) => setHora(e.target.value)}>
          <option value="">Selecione um horário</option>
          <option value="08:00 - 10:00">08:00 - 10:00</option>
          <option value="10:00 - 12:00">10:00 - 12:00</option>
          <option value="14:00 - 16:00">14:00 - 16:00</option>
          <option value="16:00 - 18:00">16:00 - 18:00</option>
        </select>

        <button className="agendar-button" onClick={handleAgendar}>Agendar</button>
      </div>

      <div className="produtos-relacionados">
        <h3>Produtos Relacionados</h3>
        <div className="produtos-lista">
          {/* Exemplo de produtos relacionados */}
          <div className="produto-relacionado">
            <img src="caminho_da_imagem_do_produto.jpg" alt="Produto Relacionado" />
            <p>Produto 1</p>
          </div>
          <div className="produto-relacionado">
            <img src="caminho_da_imagem_do_produto.jpg" alt="Produto Relacionado" />
            <p>Produto 2</p>
          </div>
          {/* Outros produtos relacionados... */}
        </div>
      </div>
    </div>
  );
};

export default Agendar;
