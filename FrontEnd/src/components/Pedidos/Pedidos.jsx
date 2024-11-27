import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import "./Pedidos.css";
import LoginPrompt from '../LoginPrompt/LoginPrompt';
import ProdutosAgendadosUSER from '../../pages/ProdutosAgendadosUSER';

const Pedidos = ({ user }) => {
  const [agendamentos, setAgendamentos] = useState([]);

  useEffect(() => {
    const fetchAgendamentos = async () => {
      try {
        const response = await fetch('/api/agendamentos');
        const data = await response.json();
        setAgendamentos(data);
      } catch (error) {
        console.error('Erro ao buscar agendamentos:', error);
      }
    };

    if (user) {
      fetchAgendamentos();
    }
  }, [user]);

  if (!user) {
    return <LoginPrompt />;
  }

  return (
    <div>
      {/* Renderização dos agendamentos */}
      <ProdutosAgendadosUSER agendamentos={agendamentos} />
    </div>
  );
};

Pedidos.propTypes = {
  user: PropTypes.object
};

export default Pedidos;