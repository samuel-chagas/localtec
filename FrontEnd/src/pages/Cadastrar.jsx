import Header from "../components/Header/Header";
import Cadastro from "../components/CadastroUsuarios/CadastroUsuarios";
import Footer from "../components/Footer/Footer";

const Cadastrar = ({ user }) => {
  return (
    <>
      <div>
        <Header user={user} />
        <Cadastro />
        <Footer />
      </div>
    </>
  );
}

export default Cadastrar;
