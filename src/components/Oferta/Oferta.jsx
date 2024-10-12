import './Oferta.css'


function Oferta() {

    return (

    <div className="home-container">
      {}
      

      {}
      <section className="featured-products">
        <div className="product-grid">
          {}
          <div className="product-card">
            <img src="https://images.tcdn.com.br/img/img_prod/813740/agitador_magnetico_com_aquecimento_fisher_isotemp_10x10hps_230v_941_1_dd0f829e4bd09332bda1be5d4464f61e.png" alt="Produto 1" />
            <h3>Produto 1</h3>
            <p>R$ 99,90</p>
            <button>alugar</button>
          </div>
          <div className="product-card">
            <img src="https://images.tcdn.com.br/img/img_prod/813740/leitora_de_microplacas_de_elisa_kasuaki_dr_200bn_nm_bi_anvisa_1071_1_008fc9e32a9db54b57e880949f9db46b.png" alt="Produto 2" />
            <h3>Produto 2</h3>
            <p>R$ 79,90</p>         
            <button>alugar</button>
          </div>
          <div className="product-card">
            <img src="https://images.tcdn.com.br/img/img_prod/813740/balanca_determinadora_de_umidade_bel_i_thermo_g163l_com_display_touch_sreen_0_001g_160_g_220v_951_1_c15527adfbf1f923ead3472e11bd1271.jpg" alt="Produto 3" />
            <h3>Produto 3</h3>
            <p>R$ 59,90</p>
            <button>alugar</button>
          </div>
        </div>
      </section>

    </div>
  );
}


export default Oferta;