import PropTypes from "prop-types";
import Pedidos from "../components/Pedidos/Pedidos";
import Footer from "../components/Footer/Footer";

const ProdutosAgendadosUSER = ({ user = {} }) => {
  return (
    <>
      <div>
        <Pedidos user={user} />
        <Footer />
      </div>
    </>
  );
};

ProdutosAgendadosUSER.propTypes = {
  user: PropTypes.object,
};

export default ProdutosAgendadosUSER;