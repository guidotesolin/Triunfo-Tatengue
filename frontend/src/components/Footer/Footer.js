import React from "react";

import "./Footer.css";

import Row from "react-bootstrap/Row";

import Logo from "../../img/Logo blanco.png";

export default function Footer(props) {
  return (
    <div id="RedesSociales">
      <Row id="Redes">
        <a
          class="IconoRedes"
          rel="noopener noreferrer"
          href="https://www.facebook.com/TriunfoTatengue"
          target="_blank"
        >
          <i class="fab fa-facebook-square"></i>
        </a>
      </Row>
      <Row id="Redes">
        <a
          class="IconoRedes"
          rel="noopener noreferrer"
          href="https://www.instagram.com/triunfotatengue"
          target="_blank"
        >
          <i class="fab fa-instagram"></i>
        </a>
      </Row>
      <Row id="Redes">
        <img
          src={Logo}
          width="60"
          className="d-inline-block align-top"
          alt="Logo TT"
        />
      </Row>
      <Row id="Redes">
        <a
          class="IconoRedes"
          rel="noopener noreferrer"
          href="https://www.twitter.com/TriunfoTatengue"
          target="_blank"
        >
          <i class="fab fa-twitter"></i>
        </a>
      </Row>
      <Row id="Redes">
        <a
          class="IconoRedes"
          rel="noopener noreferrer"
          href="https://www.youtube.com/channel/UC_3_g_ZA677mPetWdTTBhjA"
          target="_blank"
        >
          <i class="fab fa-youtube"></i>
        </a>
      </Row>
    </div>
  );
}
