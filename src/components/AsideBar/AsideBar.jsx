
import "./AsideBar.css";

function Filtro() {

    return (
        <section className="section-aside">
            <div className="div1Aside">
                <div className="filtro">
                    <h4>Filtrar por</h4>
                    <hr />
                    <div className="box-filtro-categorias">
                        <div className="filtro-categorias">
                            <p>Marca</p>
                            <div className="options-categorias">
                                <input className="check-input-filtro" type="checkbox" name="" id="" />
                                <p>Dev boys</p>
                            </div>
                            <div className="options-categorias">
                                <input className="check-input-filtro" type="checkbox" name="" id="" />
                                <p>Dev Girls</p>
                            </div>
                        </div>

                        <div className="filtro-categorias">
                            <p>Categorias</p>
                            <div className="options-categorias">
                                <input className="check-input-filtro" type="checkbox" name="" id="" />
                                <p>Casual</p>
                            </div>
                            <div className="options-categorias">
                                <input className="check-input-filtro" type="checkbox" name="" id="" />
                                <p>Esporte</p>
                            </div>
                        </div>

                        <div className="filtro-categorias">
                            <p>Gênero</p>
                            <div className="options-categorias">
                                <input className="check-input-filtro" type="checkbox" name="" id="" />
                                <p>Masculino</p>
                            </div>
                            <div className="options-categorias">
                                <input className="check-input-filtro" type="checkbox" name="" id="" />
                                <p>Feminino</p>
                            </div>
                            <div className="options-categorias">
                                <input className="check-input-filtro" type="checkbox" name="" id="" />
                                <p>Unisex</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Filtro;