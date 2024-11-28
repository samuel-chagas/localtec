import "./Destaques.css";
import Produto1 from "../../assets/Destaques/agitador_com_aqueciemnto.jpg";
import Produto2 from "../../assets/Destaques/balanca_semianalitica.jpg";
import Produto3 from "../../assets/Destaques/phmetro_portatil.jpg";
import Produto4 from "../../assets/Destaques/controlador_estatisticos_de_processos.jpg";

export function Destaques() {
  return (
    <div className="global">
      <h1>Produtos em Destaque</h1>
      <div className="Cards">
        <div className="Card1">
          <img src={Produto1} alt="agitador" className="Equipamento1" />
          <h2>agitador</h2>
          <button>Alugar</button>
        </div>

        <div className="Card2">
          <img src={Produto2} alt="balanca_semianalitica" className="Equipamento2" />
          <h2>balança</h2>
          <button>Alugar</button>
        </div>

        <div className="Card3">
          <img src={Produto3} alt="Equipamento3" className="Equipamento3" />
          <h2>controlador</h2>
          <button>Alugar</button>
        </div>

        <div className="Card4">
          <img src={Produto4} alt="Equipamento4" className="Equipamento4" />
          <h2>phmetro</h2>
          <button>Alugar</button>
        </div>
      </div>
    </div>
  );
}

export default Destaques;
