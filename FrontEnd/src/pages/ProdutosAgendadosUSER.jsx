import Header from "../components/Header/Header";
import Pedidos from "../components/Pedidos/Pedidos";
import Footer from "../components/Footer/Footer";

const ProdutosAgendadosUSER = ({ user }) => {
  return (
    <>
      <div>
        <Header />
        <Pedidos user={user} />
        <Footer />
      </div>
    </>
  );
};

export default ProdutosAgendadosUSER;