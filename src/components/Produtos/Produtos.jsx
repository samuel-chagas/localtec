// import './Produtos.css'
import Line from "../../assets/Produtos/Line.svg"
import Preco from "../../assets/Produtos/preco.png"
import cardTenis from "../../assets/Produtos/tenis.png"

export default function Produtos () {
    return (
        <section className="produtos">
            <div className="divGeralProdutos">
                <div className="div1Produtos">
                    <h3>Produtos em alta</h3>
                    <a href="#"><p>Ver todos <img src={Line} alt="" /></p></a>
                </div>
                <div className="div2Produtos">
                    <div className="cardProduto">
                        <div className="cardCard">
                            <div className="desconto">
                                <p>30% OFF</p>
                            </div>
                            <div className="tenisTenis">
                                <img src={cardTenis} alt="" />
                            </div>
                        </div>
                        <p className="pTenis">Tênis</p>
                        <h4 className="h4Tenis">K-Swiss V8 - Masculino</h4>
                        <div className="precoTenis">
                            <img src={Preco} alt="" />
                            <p>$100</p>
                        </div>
                    </div>
                    <div className="cardProduto">
                        <div className="cardCard">
                            <div className="desconto">
                                <p>30% OFF</p>
                            </div>
                            <div className="tenisTenis">
                                <img src={cardTenis} alt="" />
                            </div>
                        </div>
                        <p className="pTenis">Tênis</p>
                        <h4 className="h4Tenis">K-Swiss V8 - Masculino</h4>
                        <div className="precoTenis">
                            <img src={Preco} alt="" />
                            <p>$100</p>
                        </div>
                    </div>
                    <div className="cardProduto">
                        <div className="cardCard">
                            <div className="desconto">
                                <p>30% OFF</p>
                            </div>
                            <div className="tenisTenis">
                                <img src={cardTenis} alt="" />
                            </div>
                        </div>
                        <p className="pTenis">Tênis</p>
                        <h4 className="h4Tenis">K-Swiss V8 - Masculino</h4>
                        <div className="precoTenis">
                            <img src={Preco} alt="" />
                            <p>$100</p>
                        </div>
                    </div>
                    <div className="cardProduto">
                        <div className="cardCard">
                            <div className="desconto">
                                <p>30% OFF</p>
                            </div>
                            <div className="tenisTenis">
                                <img src={cardTenis} alt="" />
                            </div>
                        </div>
                        <p className="pTenis">Tênis</p>
                        <h4 className="h4Tenis">K-Swiss V8 - Masculino</h4>
                        <div className="precoTenis">
                            <img src={Preco} alt="" />
                            <p>$100</p>
                        </div>
                    </div>
                    <div className="cardProduto">
                        <div className="cardCard">
                            <div className="desconto">
                                <p>30% OFF</p>
                            </div>
                            <div className="tenisTenis">
                                <img src={cardTenis} alt="" />
                            </div>
                        </div>
                        <p className="pTenis">Tênis</p>
                        <h4 className="h4Tenis">K-Swiss V8 - Masculino</h4>
                        <div className="precoTenis">
                            <img src={Preco} alt="" />
                            <p>$100</p>
                        </div>
                    </div>
                    <div className="cardProduto">
                        <div className="cardCard">
                            <div className="desconto">
                                <p>30% OFF</p>
                            </div>
                            <div className="tenisTenis">
                                <img src={cardTenis} alt="" />
                            </div>
                        </div>
                        <p className="pTenis">Tênis</p>
                        <h4 className="h4Tenis">K-Swiss V8 - Masculino</h4>
                        <div className="precoTenis">
                            <img src={Preco} alt="" />
                            <p>$100</p>
                        </div>
                    </div>
                    <div className="cardProduto">
                        <div className="cardCard">
                            <div className="desconto">
                                <p>30% OFF</p>
                            </div>
                            <div className="tenisTenis">
                                <img src={cardTenis} alt="" />
                            </div>
                        </div>
                        <p className="pTenis">Tênis</p>
                        <h4 className="h4Tenis">K-Swiss V8 - Masculino</h4>
                        <div className="precoTenis">
                            <img src={Preco} alt="" />
                            <p>$100</p>
                        </div>
                    </div>
                    <div className="cardProduto">
                        <div className="cardCard">
                            <div className="desconto">
                                <p>30% OFF</p>
                            </div>
                            <div className="tenisTenis">
                                <img src={cardTenis} alt="" />
                            </div>
                        </div>
                        <p className="pTenis">Tênis</p>
                        <h4 className="h4Tenis">K-Swiss V8 - Masculino</h4>
                        <div className="precoTenis">
                            <img src={Preco} alt="" />
                            <p>$100</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}