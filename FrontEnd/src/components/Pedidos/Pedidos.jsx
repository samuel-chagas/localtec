import PropTypes from 'prop-types';
import "./Pedidos.css";

const Pedidos = ({ agendamentos }) => {
  return (
    <div className="pedidos-container">
      <h2>Meus Pedidos</h2>
      <ul>
        {agendamentos.map((agendamento) => (
          <li key={agendamento.id} className="pedido-card">
            <h3>{agendamento.produtoName}</h3>
            <p>Data: {agendamento.data}</p>
            <p>Hora: {agendamento.hora}</p>
            <p>Status: {agendamento.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

Pedidos.propTypes = {
  agendamentos: PropTypes.array.isRequired,
};

export default Pedidos;