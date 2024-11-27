import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Produtos from './pages/Produtos';
import Cadastrar from './pages/Cadastrar';
import LoginPage from './pages/Login';
import ProdutosAgendadosUSER from './pages/ProdutosAgendadosUSER';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/users/check-session", {
          method: "GET",
          credentials: "include",
        });
        if (response.ok) {
          const data = await response.json();
          setUser(data);
          localStorage.setItem("user", JSON.stringify(data));
        } else {
          setUser(null);
          localStorage.removeItem("user");
        }
      } catch (error) {
        console.error("Erro ao validar sessão:", error);
      }
    };
    checkSession();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Home" />} />
      <Route path="/Home" element={<Home user={user} />} />
      <Route path="/Produtos" element={<Produtos />} />
      <Route path="/Cadastrar" element={<Cadastrar />} />
      <Route path="/Login" element={<LoginPage setUser={setUser} />} />
      <Route path="/MeusAgendamentos" element={<ProdutosAgendadosUSER user={user} />} />
    </Routes>
  );
}

export default App;
