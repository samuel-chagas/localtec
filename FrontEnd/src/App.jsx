import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Cadastrar from './pages/Cadastrar';
import Produtos from './pages/Produtos';
import Agendar from './pages/Agendar';
import PedidosPage from './pages/PedidosPage';
import GerenciarUsuariosPage from './pages/GerenciarUsuariosPage'; // Importe a nova página

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Cadastrar" element={<Cadastrar />} />
      <Route path="/Produtos" element={<Produtos />} />
      <Route path="/Agendar/:id" element={<Agendar />} />
      <Route path="/Pedidos" element={<PedidosPage />} />
      <Route path="/MeusPedidos" element={<PedidosPage />} />
      <Route path="/GerenciarUsuarios" element={<GerenciarUsuariosPage />} /> {/* Adicione a nova rota */}
    </Routes>
  );
}

export default App;
