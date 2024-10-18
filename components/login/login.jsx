import "./login.css";
import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Simulação de uma chamada de API para autenticação
        const response = await fakeAuthApi(username, password);

        if (response.success) {
            navigate("/dashboard");
        } else {
            setError("Credenciais inválidas. Tente novamente.");
        }
    };

    const fakeAuthApi = (username, password) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (username === "user" && password === "password") {
                    resolve({ success: true });
                } else {
                    resolve({ success: false });
                }
            }, 1000);
        });
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Acesse o sistema</h1>
                {error && <p className="error">{error}</p>}
                <div className="input-field">
                    <input
                        type="text"
                        placeholder="E-mail"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <FaUser className="icon" />
                </div>
                <div className="input-field">
                    <input
                        type="password"
                        placeholder="Senha"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <FaLock className="icon" />
                </div>

                <div className="recall-forget">
                    <label>
                        <input type="checkbox" />
                        Lembre de mim
                    </label>
                    <a href="#">Esqueceu sua senha?</a>
                </div>
                <button type="submit">Login</button>
                <div className="signup-link">
                    <p>
                        Não tem uma conta? <a href="/cadastro">Registar</a>{" "}
                        
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login;
