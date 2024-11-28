import { useState } from 'react';
import './CadastroUsuarios.css';

const CadastroUsuarios = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [empresa, setEmpresa] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nome || !email || !password || !empresa) {
      alert('Todos os campos são obrigatórios');
      return;
    }

    try {
      const response = await fetch('http://localhost:5001/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome, email, password, empresa })
      });

      if (response.ok) {
        alert('Usuário registrado com sucesso');
      } else {
        try {
          const errorData = await response.json();
          alert(errorData.message || 'Erro ao registrar usuário');
        } catch {
          alert('Erro ao registrar usuário');
        }
      }
    } catch (error) {
      console.error(error);
      alert('Erro ao registrar usuário');
    }
  };

  return (
    <div className="cadastro-container">
      <h2>Cadastro de Usuários</h2>
      <form className="cadastro-form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            id="senha"
            name="senha"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="text"
            id="empresa"
            name="empresa"
            placeholder="Empresa"
            value={empresa}
            onChange={(e) => setEmpresa(e.target.value)}
            required
          />
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default CadastroUsuarios;