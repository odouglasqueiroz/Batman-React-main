import React from "react";
import Header from "../../components/header";
import "./styles.css";
import Video from "../../assets/BATMAN  _ Trailer 2 Oficial Legendado _ DC FanDome 2021.mp4";
import Cards from "../../components/cards";
import Footer from "../../components/footer/footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Header />
      <div id="banner"></div>
      <div id="trailer-container">
        <div className="content">
          <video controls className="trailer">
            <source src={Video} />
            Seu navegador não possui suporte para Videos.
          </video>
          <div id="sinopse">
            <p className="description">
              Após dois anos espreitando as ruas como Batman, Bruce Wayne se
              encontra nas profundezas mais sombrias de Gotham City. Com poucos
              aliados confiáveis, o vigilante solitário se estabelece como a
              personificação da vingança para a população.
            </p>
            <Link to='/pagament' style={{textDecoration: 'none'}}>
            <button className="button">Compar Ingressos</button>
            </Link>
          </div>
        </div>
      </div>
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
