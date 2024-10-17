import React from "react";
import "./styles.css";
import Header from "../../components/header";
import Footer from "../../components/footer/footer";

function Contato() {
  return (
    <>
      <Header />
      <div id="contato">
        <div class="pag-contact">
          <div class="bloco contact-1">
            <p>WhatsApp: (44) 99101-4090 </p>
            <p>Email: Douglasgqeduca@gmail.com </p>
          </div>
        </div>
      </div>
      <Footer />;
    </>
  );
}

export default Contato;
