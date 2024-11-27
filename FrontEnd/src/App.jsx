<<<<<<< HEAD
import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
=======
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/Login';
import Cadastrar from './pages/Cadastrar';
>>>>>>> 9590658e6abb814592da6e227a5ebe3a2637a748
import Produtos from './pages/Produtos';
import Cadastrar from './pages/Cadastrar';
import LoginPage from './pages/Login';
import ProdutosAgendadosUSER from './pages/ProdutosAgendadosUSER';
import Header from './components/Header/Header';

function App() {
<<<<<<< HEAD
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
=======
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch('http://localhost:5001/api/users/me', {
                    credentials: 'include'
                });
                if (response.ok) {
                    const data = await response.json();
                    setUser(data);
                }
            } catch (error) {
                console.error('Erro ao buscar usuário:', error);
            }
        };

        fetchUser();
    }, []);

    const handleLogout = async () => {
        try {
            await fetch('http://localhost:5001/api/users/logout', {
                method: 'POST',
                credentials: 'include'
            });
            setUser(null);
            navigate('/Login');
        } catch (error) {
            console.error('Erro ao fazer logout:', error);
        }
    };

    return (
        <>
            <Header user={user} handleLogout={handleLogout} />
            <Routes>
                <Route path="/" element={<Home user={user} />} />
                <Route path="/Home" element={<Home user={user} />} />
                <Route path="/Login" element={<LoginPage setUser={setUser} />} />
                <Route path="/Cadastrar" element={<Cadastrar />} />
                <Route path="/Produtos" element={<Produtos />} />
                <Route path="/Agendar/:id" element={<Agendar />} />
                <Route path="/MeusAgendamentos" element={<ProdutosAgendadosUSER user={user} />} />
            </Routes>
        </>
    );
>>>>>>> 9590658e6abb814592da6e227a5ebe3a2637a748
}

export default App;
