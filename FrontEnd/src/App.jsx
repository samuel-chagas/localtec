import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/Login';
import Cadastrar from './pages/Cadastrar';
import Produtos from './pages/Produtos';
import Agendar from './pages/Agendar';
import ProdutosAgendadosUSER from './pages/ProdutosAgendadosUSER';
import Header from './components/Header/Header';

function App() {
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
}

export default App;
