import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Slide.css';

import Ornament from "../../assets/photo-cientista/Ornament.png";
import Slide1 from "../../assets/slide/slide1.png";
import Slide2 from "../../assets/slide/slide2.png";
import Slide3 from "../../assets/slide/slide3.png";
import Slide4 from "../../assets/slide/slide4.png";


// import required modules
import { Pagination, Navigation } from 'swiper/modules';


export default function Slide() {
  return (
    <>
      <Swiper
       slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper">
       
        <SwiperSlide>

                      <div className="divCarrosselGeral">

              <div className="ofertasTexto">
                  <p className="paragrafoMOferta">produtos</p>
                  <h1 id="h1QueimaEstoque">microscópio</h1>
                  <p className="paragrafoDescricaoOferta">temos os modelos ópticos, eletrônicos ou digitais, <br /> amplamente utilizados em campos como medicina, <br /> pesquisa científica e indústrias.</p>
                  <Link to="/Podutos"><button className="botaoVendoOfertas">Ver Ofertas</button></Link>
              </div>

              <div className="divCarrosselImagens">
                  <div className="divImagensOferta">
                      <img id="imagemOrnament" src={Ornament} alt="" />
                  </div>
                  <img id="equipamentos em destaque" src={Slide1} alt="" />
              </div>
              </div>

        </SwiperSlide>
      
        <SwiperSlide>
                          <div className="divCarrosselGeral">

                <div className="ofertasTexto">
                    <p className="paragrafoMOferta">produtos</p>
                    <h1 id="h1QueimaEstoque">microscópio</h1>
                    <p className="paragrafoDescricaoOferta">temos os modelos ópticos, eletrônicos ou digitais, <br /> amplamente utilizados em campos como medicina, <br /> pesquisa científica e indústrias.</p>
                    <Link to="/Podutos"><button className="botaoVendoOfertas">Ver Ofertas</button></Link>
                </div>

                <div className="divCarrosselImagens">
                    <div className="divImagensOferta">
                        <img id="imagemOrnament" src={Ornament} alt="" />
                    </div>
                    <img id="equipamentos em destaque" src={Slide2} alt="" />
                </div>
                </div>
        </SwiperSlide>
       
        <SwiperSlide>

                    <div className="divCarrosselGeral">

            <div className="ofertasTexto">
                <p className="paragrafoMOferta">produtos</p>
                <h1 id="h1QueimaEstoque">microscópio</h1>
                <p className="paragrafoDescricaoOferta">temos os modelos ópticos, eletrônicos ou digitais, <br /> amplamente utilizados em campos como medicina, <br /> pesquisa científica e indústrias.</p>
                <Link to="/Podutos"><button className="botaoVendoOfertas">Ver Ofertas</button></Link>
            </div>

            <div className="divCarrosselImagens">
                <div className="divImagensOferta">
                    <img id="imagemOrnament" src={Ornament} alt="" />
                </div>
                <img id="equipamentos em destaque" src={Slide3} alt="" />
            </div>
            </div>

        </SwiperSlide>
       
        <SwiperSlide>

                          <div className="divCarrosselGeral">

                  <div className="ofertasTexto">
                      <p className="paragrafoMOferta">produtos</p>
                      <h1 id="h1QueimaEstoque">microscópio</h1>
                      <p className="paragrafoDescricaoOferta">temos os modelos ópticos, eletrônicos ou digitais, <br /> amplamente utilizados em campos como medicina, <br /> pesquisa científica e indústrias.</p>
                      <Link to="/Podutos"><button className="botaoVendoOfertas">Ver Ofertas</button></Link>
                  </div>

                  <div className="divCarrosselImagens">
                      <div className="divImagensOferta">
                          <img id="imagemOrnament" src={Ornament} alt="" />
                      </div>
                      <img id="equipamentos em destaque" src={Slide4} alt="" />
                  </div>
                  </div>

        </SwiperSlide>
        

      </Swiper>
    </>
  );
}


