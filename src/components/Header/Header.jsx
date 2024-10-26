import "./Header.css"
import Logo from "../../../public/logo.png"
import { Link } from "react-router-dom"

export function Header() {

    return (
        <div id="section-Header">
            <div className="header">
                <div className="logo">
                <Link to='/'><img id="logo" src={Logo} alt="" /></Link>
                </div>
                
                <div className="menu">
                    
                     <Link to='/produtos' id="produtos">Produtos</Link>
                    <Link to='/categorias' id="categorias">Categorias</Link>
                    <Link to='/MeusPedidos' id="meus-pedidos">Meus pedidos</Link>
                   
                </div>

                <div>
                    <Link to='/login' className="button1"><button className="button1">Entrar</button></Link>
                </div>
                
            </div>
            </div>

    )
}

export default Header