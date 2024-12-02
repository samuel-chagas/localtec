import { useState, useEffect } from 'react';
import './GerenciarUsuarios.css';

const GerenciarUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [editandoUsuario, setEditandoUsuario] = useState(null);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/users');
        if (!response.ok) {
          throw new Error(`Erro ao buscar usuários: ${response.statusText}`);
        }
        const data = await response.json();
        setUsuarios(data);
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      }
    };

    fetchUsuarios();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5001/api/users/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(`Erro ao deletar usuário: ${response.statusText}`);
      }
      setUsuarios(usuarios.filter((usuario) => usuario.id !== id));
    } catch (error) {
      console.error('Erro ao deletar usuário:', error);
    }
  };

  const handleEdit = (usuario) => {
    setEditandoUsuario(usuario.id);
    setNome(usuario.nome);
    setEmail(usuario.email);
    setEmpresa(usuario.empresa);
    setPassword(''); // Não preenche a senha para segurança
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5001/api/users/${editandoUsuario}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, email, empresa, password }),
      });
      if (!response.ok) {
        throw new Error(`Erro ao atualizar usuário: ${response.statusText}`);
      }
      setUsuarios(
        usuarios.map((usuario) =>
          usuario.id === editandoUsuario ? { ...usuario, nome, email, empresa } : usuario
        )
      );
      setEditandoUsuario(null);
      setNome('');
      setEmail('');
      setEmpresa('');
      setPassword('');
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error);
    }
  };

  return (
    <div className="gerenciar-usuarios-container">
      <h2>Gerenciar Usuários</h2>
      <table className="usuarios-tabela">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Empresa</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.nome}</td>
              <td>{usuario.email}</td>
              <td>{usuario.empresa}</td>
              <td>
                <button onClick={() => handleEdit(usuario)}>Editar</button>
                <button onClick={() => handleDelete(usuario.id)}>Deletar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editandoUsuario && (
        <form className="editar-usuario-form" onSubmit={handleUpdate}>
          <h3>Editar Usuário</h3>
          <div>
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="empresa">Empresa:</label>
            <input
              type="text"
              id="empresa"
              value={empresa}
              onChange={(e) => setEmpresa(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Atualizar</button>
        </form>
      )}
    </div>
  );
};

export default GerenciarUsuarios;