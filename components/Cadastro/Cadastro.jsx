import "./Cadastro.css";
import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

const Cadastro = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setnome] = useState("");
     const [usuario, setusuario] = useState("");
     const [cpf, setcpf] = useState("");
     
    return (
        <div className="container">
            
                <h1>cadastro</h1>
                
                <div className="input-field">
                    <input
                        type="text"
                        placeholder="nome"
                        required
                        value={name}
                        onChange={(e) => setnome(e.target.value)}
                    />
                    <FaUser className="icon" />
                </div>

                <div className="input-field">
                    <input
                        type="text"
                        placeholder="usuario"
                        required
                        value={usuario}
                        onChange={(e) => setusuario(e.target.value)}
                    />
                    <FaUser className="icon" />
                </div>

                <div className="input-field">
                    <input
                        type="text"
                        placeholder="cpf"
                        required
                        value={cpf}
                        onChange={(e) => setcpf(e.target.value)}
                    />
                    <FaUser className="icon" />
                </div>

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

                 <button type="submit">cadastrar</button>
                
           
        </div>
    );
};
    
export default Cadastro;
