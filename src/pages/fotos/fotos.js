import React from "react";
import "./styles.css";
import Header from "../../components/header";
import Footer from "../../components/footer/footer";

function Fotos() {
  return (
    <>
      <Header />
      <div id="fotos">
        <div class="cards-actor">
          <div class="foto-actor">
            <div class="foto back-1">Batman</div>
            <div class="foto back-2">Batman</div>
            <div class="foto back-3">Batman</div>
            <div class="foto back-4">Mulher gato</div>
            <div class="foto back-5">Mulher gato</div>
            <div class="foto back-6">Mulher gato</div>
            <div class="foto back-7">Gordon</div>
            <div class="foto back-8">Gordon</div>
            <div class="foto back-9">Gordon</div>
          </div>
        </div>

      </div>

      <Footer />
    </>
  );
}

export default Fotos;
