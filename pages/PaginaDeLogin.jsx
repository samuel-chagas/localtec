// import Carrossel from "../Components/Carrossel1/Carrossel";
// import Header from "../Components/Header/Header";
// import Oferta from "../Components/Oferta/Oferta";
// import Destaque from "../Components/Destaque1/Destaque"
import Login from "../components/login/login";
import HeaderSimples from "../components/header2.0/Header";
import Footer from "../components/Footer/Footer";


function PaginaDeLogin() {
    return (
        <>
            <div className="logar">
                <HeaderSimples/>
                <Login/>
                <Footer/>
            </div>
        </>
    )
}


export default PaginaDeLogin; 