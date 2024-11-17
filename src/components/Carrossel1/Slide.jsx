import './Slide.css'
import Ornament from "../../assets/Carrossel/Ornament11.svg"
import banner from "../../assets/photo-cientista/cientista-4.jpeg"
import { Link } from 'react-router-dom';

function Slides() {

    return (
        <>
            <section className="section-carrossel">
                <div className="divCarrosselGeral">

                    <div className="ofertasTexto">
                        <p className="paragrafoMOferta">Melhores ofertas personalizadas</p>
                        <h1 id="h1QueimaEstoque">microscópio</h1>
                        <p className="paragrafoDescricaoOferta">temos os modelos ópticos, eletrônicos ou digitais, <br /> amplamente utilizados em campos como medicina, <br /> pesquisa científica e indústrias.</p>
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

export default Slides;