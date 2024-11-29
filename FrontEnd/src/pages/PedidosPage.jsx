// src/pages/PedidosPage.jsx
import { useEffect, useState } from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Pedidos from "../components/Pedidos/Pedidos";
import LoginPrompt from '../components/LoginPrompt/LoginPrompt';

function PedidosPage() {
  const [user, setUser] = useState(null);
  const [agendamentos, setAgendamentos] = useState([]);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    setUser(storedUser);

    if (storedUser) {
      fetchAgendamentos(storedUser.id);
    }
  }, []);

  const fetchAgendamentos = async (userId) => {
    try {
      const response = await fetch(`/api/agendamentos?userId=${userId}`);
      const data = await response.json();
      setAgendamentos(data);
    } catch (error) {
      console.error('Erro ao buscar agendamentos:', error);
    }
  };

  return (
    <>
      <div>
        <Header />
        {user ? (
          <Pedidos agendamentos={agendamentos} />
        ) : (
          <LoginPrompt />
        )}
        <Footer />
      </div>
    </>
  );
}

export default PedidosPage;