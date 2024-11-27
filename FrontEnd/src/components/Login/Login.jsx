import { useState } from "react";
import PropTypes from "prop-types";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import './Login.css';

const Login = ({ setUser }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
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
                setUser(data);
                localStorage.setItem("login", JSON.stringify(data));
                navigate("/");
            } else {
                const data = await response.json();
                setError(data.message || "Credenciais inválidas. Tente novamente.");
            }
        } catch {
            setError("Ocorreu um erro. Tente novamente mais tarde.");
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                {error && <p className="login-error">{error}</p>}
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
