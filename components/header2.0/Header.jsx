import "./Header.css"
import Logo from "../../assets/Header/logo.png"
import { Link } from "react-router-dom"

export function Header() {

    return (
        <div id="section-header">
            <div className="header">
                <div className="    logo">
                <Link to='/'><img id="logo" src={Logo} alt="" /></Link>
                </div>
                <div>
                    <input type="text" id="pesquisa" placeholder="Pesquisar equipamentos..."></input>
                </div>
                <div className="cadastro">
                    <Link to='/cadastro' id="cadastro">Cadastre-se</Link>
                     <Link to='/produtos' id="produtos">Produtos</Link>
                    <Link to='/categorias' id="categorias">Categorias</Link>
                    <Link to='/MeusPedidos' id="meus-pedidos">Meus pedidos</Link>
                </div>

                <div>
                 <Link to="/login" className="button1"> Entrar</Link>
                </div>
                
            </div>
            </div>

    )
}

export default Header