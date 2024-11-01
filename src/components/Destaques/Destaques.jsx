import "./Destaques.css";
// import React from 'react';
//  import { Link } from "react-router-dom"
import Produto1 from "../../assets/Destaques/agitador_com_aqueciemnto.jpg";
import Produto2 from "../../assets/Destaques/balanca_semianalitica.jpg";
import Produto3 from "../../assets/Destaques/phmetro_portatil.jpg";
import Produto4 from "../../assets/Destaques/controlador_estatisticos_de_processos.jpg";

export function Destaques () {

    return (

<div className="global">
<h1>Produtos em Destaque</h1>
<div className= "Cards">
  
    <div className="Card1">
      <img src={Produto1} alt= "Equipamento1" className="Equipamento1" />
      <h2>Produto1</h2>
      <button>Alugar</button>
    </div>

    <div className="Card2">
      <img src={Produto2} alt= "Equipamento2" className="Equipamento2" />
      <h2>Produto2</h2>
      <button>Alugar</button>
    </div>

    <div className="Card3">
      <img src={Produto3} alt= "Equipamento3" className="Equipamento3" />
      <h2>Produto3</h2>
      <button>Alugar</button>
    </div>

    <div className="Card4">
      <img src={Produto4} alt= "Equipamento4" className="Equipamento4" />
      <h2>Produto4</h2>
      <button>Alugar</button>
    </div>

</div>
</div>


    )

}

export default Destaques


