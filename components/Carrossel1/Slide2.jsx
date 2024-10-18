import './Slide2.css'
import Ornament from "../../assets/Carrossel/Ornament11.svg"
import banner from "../../assets/photo-cientista/laboratory -3.jpeg"
import { Link } from 'react-router-dom';

function Slide2() {

    return (
        <>
            <section className="section-carrossel">
                <div className="divCarrosselGeral">

                    <div className="ofertasTexto">
                        <p className="paragrafoMOferta">produtos em destaque</p>
                        <h1 id="h1QueimaEstoque">equipaamentos</h1>
                        <p className="paragrafoDescricaoOferta">pipetas e tubos de ensaio</p>
                        <Link to="/detalhesDoProduto"><button className="botaoVendoOfertas">Ver Ofertas</button></Link>
                    </div>

                    <div className="divCarrosselImagens">
                        <div className="divImagensOferta">
                            <img id="imagemOrnament" src={Ornament} alt="" />
                        </div>
                        <img id="ofertaNikeTenis" src={banner} alt="" />
                    </div>
                </div>
            </section>

        </>

    );
}

export default Slide2;