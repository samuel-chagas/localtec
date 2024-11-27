import PropTypes from "prop-types";
import Pedidos from "../components/Pedidos/Pedidos";
import Footer from "../components/Footer/Footer";

const ProdutosAgendadosUSER = ({ user }) => {
  return (
    <>
      <div>
<<<<<<< HEAD
        <Header user={user} />
=======
>>>>>>> 9590658e6abb814592da6e227a5ebe3a2637a748
        <Pedidos user={user} />
        <Footer />
      </div>
    </>
  );
};

ProdutosAgendadosUSER.propTypes = {
  user: PropTypes.object.isRequired,
};

export default ProdutosAgendadosUSER;