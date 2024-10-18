import Carrossel from "../Components/Carrossel1/Carrossel";
import Header from "../Components/header2.0/Header";
import Oferta from "../Components/Oferta/Oferta";
import Footer from "../Components/Footer/Footer";
// import Produtos from "../Components/Produtos1/Produtos"
// import Produtos from "../Components/Produtos/Produtos"
import Destaque from "../Components/Destaque2.0/ProdutoDistaque"



function HomePage() {
    return (
        <>
            <div>
                <Header/>
                <Carrossel />
                <Destaque/>
                <Oferta/>
                <Footer/>
            </div>
        </>
    )
}

export default HomePage;