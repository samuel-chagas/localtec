import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Cadastrar from './pages/Cadastrar';
import Produtos from './pages/Produtos';
import Agendar from './pages/Agendar';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Cadastrar" element={<Cadastrar />} />
      <Route path="/Produtos" element={<Produtos />} />
      <Route path="/Agendar/:id" element={<Agendar />} />
    </Routes>
  );
}

export default App;
