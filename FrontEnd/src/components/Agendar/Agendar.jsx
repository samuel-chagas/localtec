import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Agendar.css';
import { jwtDecode } from 'jwt-decode'; // Importação padrão

// Função para decodificar o token e obter o ID do usuário
const getUserIdFromToken = (token) => {
  try {
    const decodedToken = jwtDecode(token); // Decodifica o token JWT
    console.log('Decoded Token:', decodedToken); // Verifica os dados do token
    return decodedToken.id; // Certifique-se de que o token contém o campo 'id'
  } catch (error) {
    console.error('Erro ao decodificar o token:', error);
    return null;
  }
};

const Agendar = () => {
  const { id } = useParams(); // Obtém o ID do produto da URL
  const [produto, setProduto] = useState(null); // Estado para os detalhes do produto
  const [data, setData] = useState(''); // Estado para a data selecionada
  const [hora, setHora] = useState(''); // Estado para o horário selecionado
  const [agendamentos, setAgendamentos] = useState([]); // Estado para os agendamentos existentes

  // Efeito para buscar os detalhes do produto e agendamentos
  useEffect(() => {
    const fetchProduto = async () => {
      try {
        const response = await fetch(`http://localhost:5001/api/produtos/${id}`);
        if (response.ok) {
          const data = await response.json();
          setProduto(data);
        } else {
          console.error('Erro ao buscar produto:', response.statusText);
        }
      } catch (error) {
        console.error('Erro ao buscar produto:', error);
      }
    };

    const fetchAgendamentos = async () => {
      try {
        const response = await fetch(`http://localhost:5001/api/agendamentos/${id}`);
        if (response.ok) {
          const data = await response.json();
          setAgendamentos(data);
        } else {
          console.error('Erro ao buscar agendamentos:', response.statusText);
        }
      } catch (error) {
        console.error('Erro ao buscar agendamentos:', error);
      }
    };

    fetchProduto();
    fetchAgendamentos();
  }, [id]);

  // Função para realizar o agendamento
  const handleAgendar = async () => {
    // Verifica se os campos obrigatórios estão preenchidos
    if (!data || !hora) {
      alert('Preencha todos os campos para agendar.');
      return;
    }

    // Verifica se já existe um agendamento para a data e hora selecionadas
    const agendamentoExistente = agendamentos.find(
      (agendamento) => agendamento.data === data && agendamento.hora === hora
    );

    if (agendamentoExistente) {
      alert('Este produto já está agendado para este horário.');
      return;
    }

    try {
      const token = localStorage.getItem('token'); // Recupera o token do usuário
      if (!token) {
        alert('Você precisa estar logado para agendar um produto.');
        return;
      }

      const userId = getUserIdFromToken(token); // Obtém o ID do usuário a partir do token
      if (!userId) {
        alert('Erro ao obter o ID do usuário.');
        return;
      }

      // Dados para enviar ao backend
      const requestBody = { produtoId: id, data, hora, userId };
      console.log('Enviando JSON:', requestBody);

      // Requisição para criar o agendamento
      const response = await fetch('http://localhost:5001/api/agendamentos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        alert('Agendamento realizado com sucesso!');
        // Atualiza a lista de agendamentos após o sucesso
        setAgendamentos([...agendamentos, { produtoId: id, data, hora, userId }]);
      } else {
        alert('Erro ao realizar agendamento.');
      }
    } catch (error) {
      console.error('Erro ao agendar:', error);
    }
  };

  // Renderiza uma mensagem de carregamento enquanto o produto não é carregado
  if (!produto) {
    return <div>Carregando...</div>;
  }

  // Renderiza os detalhes do produto e o formulário de agendamento
  return (
    <div className="agendar-container">
      {/* Informações do Produto */}
      <div className="produto-info">
        <h2>{produto.name}</h2>
        {/* <p>ID do Produto: {produto.id}</p> */}
        <p className="descricao">{produto.description}</p>
        <div className="disponibilidade">
          {/* <p>Disponibilidade:</p> */}
          {/* <span>{produto.stock > 0 ? 'Em estoque' : 'Indisponível'}</span> */}
        </div>
        <img src={produto.imageUrl} alt={produto.name} />
      </div>

      {/* Formulário de Agendamento */}
      <div className="agendar-formulario">
        <label htmlFor="data">Escolha a data de agendamento:</label>
        <input
          type="date"
          id="data"
          name="data"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />

        <label htmlFor="hora">Escolha o horário:</label>
        <select
          id="hora"
          name="hora"
          value={hora}
          onChange={(e) => setHora(e.target.value)}
        >
          <option value="">Selecione um horário</option>
          <option value="08:00 - 10:00">08:00 - 10:00</option>
          <option value="10:00 - 12:00">10:00 - 12:00</option>
          <option value="14:00 - 16:00">14:00 - 16:00</option>
          <option value="16:00 - 18:00">16:00 - 18:00</option>
        </select>

        <button className="agendar-button" onClick={handleAgendar}>
          Agendar
        </button>
      </div>
    </div>
  );
};

export default Agendar;
