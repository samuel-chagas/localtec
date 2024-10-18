import "./HeaderSimples.css"
import Logo from "../../assets/Header/logo.png"
import { Link } from "react-router-dom"

export function HeaderSimples() {

    return (
        <>
        <section id="section-header">
            <div className="header">
                <div className="logo">
                <Link to='/'><img id="logo" src={Logo} alt="" /></Link>
                </div>
                {/* <div>
                    <input type="text" id="pesquisa" placeholder="Pesquisar equipamentos..."></input>
                </div> */}
                
            </div>

            <section className="section-nav">
            <nav className="menu">
                <ul id="menu">
                <Link to='/' id="home"><li>Home</li></Link>
                <Link to='/produtos' id="produtos"><li>Produtos</li></Link>
                <Link to='/categorias' id="categorias"><li>Categorias</li></Link>
                <Link to='/MeusPedidos' id="meus-pedidos"><li>Meus pedidos</li></Link>
                </ul>
            </nav>
            </section>
            </section>
           
        </>
    )
}

export default HeaderSimples