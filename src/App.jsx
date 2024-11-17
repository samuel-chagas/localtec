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
import AluguelProduto from './pages/aluguelproduto';
import Testes from './pages/Testes'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/login" element={<PaginaDeLogin />} />
                <Route path="/produtos" element={<PaginaDeProdutos />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/detalhesDoProduto" element={<ProductDetail />} />
                <Route path="/confirmacaoDeCompra" element={<ConfirmacaoDeCompra />} />
                <Route path="/meuCarrinho" element={<MeuCarrinho />} />
                <Route path="/ofertas" element={<PaginaDeOfertas />} />
                <Route path="/aluguel/:id" element={<AluguelProduto />} />
                <Route path="testes/:id" element={<MeusProdutos />} />

                </Routes>
        </BrowserRouter>
    );
}

export default App;
