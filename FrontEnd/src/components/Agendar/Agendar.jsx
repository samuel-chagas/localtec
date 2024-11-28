import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Agendar.css';

const Agendar = () => {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  const [agendamentos, setAgendamentos] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProduto = async () => {
      try {
        const response = await fetch(`http://localhost:5001/api/produtos/${id}`);
        const text = await response.text();
        console.log('Resposta do servidor:', text);
        const data = JSON.parse(text);
        setProduto(data);
      } catch (error) {
        console.error('Erro ao buscar produto:', error);
      }
    };

    const fetchAgendamentos = async () => {
      try {
        const response = await fetch(`http://localhost:5001/api/agendamentos/${id}`);
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Erro ao buscar agendamentos: ${response.status} - ${errorText}`);
        }
        const data = await response.json();
        setAgendamentos(data);
      } catch (error) {
        console.error('Erro ao buscar agendamentos:', error);
      }
    };

    const fetchUser = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/users/session', {
          credentials: 'include'
        });
        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error('Erro ao buscar usuário:', error);
        setUser(null);
      }
    };

    fetchProduto();
    fetchAgendamentos();
    fetchUser();
  }, [id]);

  const handleAgendar = async () => {
    if (!user) {
      alert('Você precisa estar logado para agendar um produto.');
      return;
    }

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
        credentials: 'include',
        body: JSON.stringify({ produtoId: id, data, hora, userId: user.id }), // Inclua o userId aqui
      });

      if (response.ok) {
        alert('Agendamento realizado com sucesso!');
        setAgendamentos([...agendamentos, { produtoId: id, data, hora, userId: user.id }]);
      } else {
        const errorData = await response.json();
        console.error('Erro ao realizar agendamento:', errorData);
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
        <label htmlFor="hora">Escolha a hora de agendamento:</label>
        <input type="time" id="hora" name="hora" value={hora} onChange={(e) => setHora(e.target.value)} />
        <button className="agendar-button" onClick={handleAgendar}>Agendar</button>
      </div>
    </div>
  );
};

export default Agendar;
