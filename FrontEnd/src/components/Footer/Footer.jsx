import './Footer.css'
import Logo from "../../assets/logo/logo.png"
import IconFace from "../../assets/Footer/icon-face.svg"
import IconInsta from "../../assets/Footer/icon-insta.svg"
import IconTwitter from "../../assets/Footer/icon-twitter.svg"
import { Link } from "react-router-dom"

export default function Footer() {

  return (
    <>
      <section className="section-footer">
        <div className="footer">
          <div>
            <div className="footerDigital">
              <Link to="/"><img src={Logo} alt="" /></Link>

              <p id="paragrafoDigital"> empresa de locação <br/><br />redes sociais:</p>
              <div className='icones-redes'>
                <a href="#"><img id="icone1" src={IconFace} alt="logo do facebook" /></a>
                <a href="#"><img id="icone2" src={IconInsta} alt="logo do instagram" /></a>
                <a href="#"><img id="icone3" src={IconTwitter} alt="logo do twitter" /></a>
              </div>
            </div>

            <div className="divFinalFooter">
              <div className="divInfos">
                <h3 className="h3Footer">Páginas</h3>
                <Link to="/produtos" className="paragrafo1Footer">produtos</Link>
                <Link to="/meuspedidos" className="paragrafo1Footer">meus pedidos</Link>
                <Link to="/Cadastrar" className="paragrafo1Footer">cadastrar</Link>
              </div>
             
              <div className="divContato">
                <h3 className="h3Footer">Contato</h3>
                <a className="paragrafo1Footer" href="https://github.com/samuel-chagas/localtec.git" target="_blank">GitHub</a>

                <a className="paragrafo1Footer" href="https://github.com/samuel-chagas" target="_blank">Samuel Chagas</a>
                <a className="paragrafo1Footer" href="https://github.com/natashamilhomem" target="_blank">Natasha Milhomem</a>
                <a className="paragrafo1Footer" href="https://github.com/CarlossoaresnDev" target="_blank">Carlos Soares</a>
                <a className="paragrafo1Footer" href="https://github.com/AliceJDauphin" target="_blank">Alice Dauphin</a>
                <a className="paragrafo1Footer" href="https://github.com/oedos" target="_blank">Juan</a>


                
              </div>
            </div>
          </div>

          <hr />
          <p id="textoAno">&copy; 2024 - UNIFOR</p>
        </div>
      </section>
    </>

  );
}