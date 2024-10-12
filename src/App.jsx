import './App.css';
import HomePage from "./Pages/HomePage";
import PaginaDeLogin from "./Pages/PaginaDeLogin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaDeProdutos from "./Pages/ProductList";
import Cadastro from './Pages/Cadastro';
import ProductDetail from './Pages/ProductDetail';
import ConfirmacaoDeCompra from "./Pages/ConfirmacaoDeCompra";
import MeuCarrinho from "./Pages/MeuCarrinho";
import PaginaDeOfertas from './Pages/PaginaDeOfertas';


function App() {
    return (
        <>

            <BrowserRouter>
                <Routes>
                    <Route index element={<HomePage />} />
                    <Route path="/login" element={<PaginaDeLogin />} />
                    <Route path="/produtos" element={<PaginaDeProdutos />}/>
                    <Route path="/cadastro" element={<Cadastro />}/>
                    <Route path="/detalhesDoProduto" element={<ProductDetail />}/>
                    <Route path="/ConfirmacaoDeCompra" element={<ConfirmacaoDeCompra />} />
                    <Route path="/MeuCarrinho" element={<MeuCarrinho />}/>
                    <Route path="/Ofertas" element={<PaginaDeOfertas />}/>

                    
                </Routes>
            </BrowserRouter >
        </>
    )
}
export default App;