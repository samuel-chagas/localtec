import "./Header.css";
import Logo from "../../assets/logo/logo.png";
import { Link } from "react-router-dom";

export function Header() {
    return (
        <div id="section-Header">
            <div className="header">
                <div className="logo">
                    <Link to='/Home'><img id="logo" src={Logo} alt="" /></Link>
                </div>
                
                <div className="menu">
                    <Link to='/Home' id="Home">Home</Link>
                    <Link to='/Produtos' id="Produtos">Produtos</Link>
                    <Link to='/MeusPedidos' id="MeusPedidos">Meus Pedidos</Link>
                    {/* <Link to='/Agendar' id="Agendar">Agendar</Link> */}
                </div>
                <div>
                    <Link to='/Login' className="button1">Login</Link>
                </div>
            </div>
        </div>
    );
}

export default Header;