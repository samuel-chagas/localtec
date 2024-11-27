// import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPrompt.css'; 

function LoginPrompt() {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/Login');
    };

    return (
        <div className="login-prompt">
            <h2>Você precisa estar logado para acessar esta página</h2>
            <p>Por favor, faça login para continuar.</p>
            <button onClick={handleLoginClick}>Login</button>
        </div>
    );
}

export default LoginPrompt;