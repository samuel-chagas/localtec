import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      {}
      <section className="banner" style={{ backgroundImage: "url('/images/banner.jpg')" }}>
        <div className="banner-text">
          <h1>Bem-vindo à Nossa Loja!</h1>
          <p>Encontre os melhores produtos com descontos incríveis.</p>
          <button className="shop-now-btn">Compre Agora</button>
        </div>
      </section>

      {}
      <section className="featured-products">
        <h2>Produtos em Destaque</h2>
        <div className="product-grid">
          {}
          <div className="product-card">
            <img src="https://images.tcdn.com.br/img/img_prod/813740/agitador_magnetico_com_aquecimento_fisher_isotemp_10x10hps_230v_941_1_dd0f829e4bd09332bda1be5d4464f61e.png" alt="Produto 1" />
            <h3>Produto 1</h3>
            <p>R$ 99,90</p>
            <button>Comprar</button>
          </div>
          <div className="product-card">
            <img src="https://images.tcdn.com.br/img/img_prod/813740/leitora_de_microplacas_de_elisa_kasuaki_dr_200bn_nm_bi_anvisa_1071_1_008fc9e32a9db54b57e880949f9db46b.png" alt="Produto 2" />
            <h3>Produto 2</h3>
            <p>R$ 79,90</p>
            <button>Comprar</button>
          </div>
          <div className="product-card">
            <img src="https://images.tcdn.com.br/img/img_prod/813740/balanca_determinadora_de_umidade_bel_i_thermo_g163l_com_display_touch_sreen_0_001g_160_g_220v_951_1_c15527adfbf1f923ead3472e11bd1271.jpg" alt="Produto 3" />
            <h3>Produto 3</h3>
            <p>R$ 59,90</p>
            <button>Comprar</button>
          </div>
        </div>
      </section>

      {}
      <section className="promotion">
        <h2>Promoções</h2>
        <div className="promotion-details">
          <p>Compre 2 e ganhe 1 grátis em todos os acessórios.</p>
          <button>Saiba Mais</button>
        </div>
      </section>

      {}
      <section className="about-section">
        <h2>Sobre Nós</h2>
        <p>Somos uma loja especializada em oferecer produtos de qualidade com preços acessíveis. Nossa missão é proporcionar a melhor experiência de compra para nossos clientes, com atendimento personalizado e entrega rápida.</p>
      </section>
    </div>
  );
}
