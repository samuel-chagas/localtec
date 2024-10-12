import Carrossel from "../Components/Carrossel1/Carrossel";
import Header from "../Components/Header/Header";
import Oferta from "../Components/Oferta/Oferta";
import Footer from "../Components/Footer/Footer";
// import Produtos from "../Components/Produtos1/Produtos"
// import Produtos from "../Components/Produtos/Produtos"
import Destaque from "../Components/Destaque1/Destaque"



function HomePage() {
    return (
        <>
            <div>
                <Header/>
                <Carrossel />
                <Destaque/>
                {/* <Produtos /> */}
                {/* <Produtos /> */}
                <Oferta/>
                <Footer/>
            </div>
        </>
    )
}

export default HomePage;