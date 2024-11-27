import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import './Login.css';

const Login = ({ setUser }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5001/api/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
                credentials: 'include'
            });

            if (response.ok) {
                const data = await response.json();
                setSuccess("Login bem-sucedido!");
                setError(""); // Limpa a mensagem de erro
                setUser(data);
                localStorage.setItem("user", JSON.stringify(data));
                navigate("/Home"); // Redireciona para a página inicial
            } else {
                const data = await response.json();
                setError(data.message || "Credenciais inválidas. Tente novamente.");
                setSuccess(""); // Limpa a mensagem de sucesso
            }
        } catch {
            setError("Ocorreu um erro. Tente novamente mais tarde.");
            setSuccess(""); // Limpa a mensagem de sucesso
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                {error && <p className="login-error">{error}</p>}
                {success && <p className="success">{success}</p>}
                <div className="login-input-field">
                    <input
                        type="email"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <FaUser className="icon" />
                </div>
                <div className="login-input-field">
                    <input
                        type="password"
                        placeholder="Senha"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <FaLock className="icon" />
                </div>
                <button className="login-button" type="submit">Entrar</button>
                <div className="login-ok">
                    <a href="/Cadastrar">Não tem uma conta? Cadastre-se</a>
                </div>
            </form>
        </div>
    );
};

Login.propTypes = {
    setUser: PropTypes.func.isRequired,
};

export default Login;
