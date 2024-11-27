import PropTypes from 'prop-types';
import "./Header.css";
import Logo from "../../assets/logo/logo.png";
import { Link } from "react-router-dom";

export function Header({ user }) {
    return (
        <div id="section-Header">
            <div className="header">
                <div className="logo">
                    <Link to='/Home'><img id="logo" src={Logo} alt="" /></Link>
                </div>
                
                <div className="menu">
                    <Link to='/Home' id="Home">Home</Link>
                    <Link to='/Produtos' id="Produtos">Produtos</Link>
                    <Link to='/MeusAgendamentos' id="MeusPedidos">Agendamentos</Link>
                </div>
                <div>
                    {user ? (
                        <span>Bem-vindo, {user.nome}</span>
                    ) : (
                        <Link to='/Login' className="button1">Login</Link>
                    )}
                </div>
            </div>
        </div>
    );
}

Header.propTypes = {
    user: PropTypes.shape({
        nome: PropTypes.string.isRequired,
    }),
};

export default Header;