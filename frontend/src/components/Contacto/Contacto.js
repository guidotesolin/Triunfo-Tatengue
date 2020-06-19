import React from "react";

import Formulario from "./Formulario";
import "./Contacto.css";

export default function Contacto(props) {
  return (
    <div id="DivContacto">
      <h1 id="Titulo">
        <strong>CONTACTO</strong>
      </h1>
      <p>Somos la nueva generación que va a cambiar el club. </p>
      <p> ¿Querés sumarte?</p>
      <p>¿Tenés alguna duda respecto a nuestro proyecto? </p>
      <p>¿Querés acercarnos alguna idea o propuesta?</p>
      <br />
      <h4>
        <strong>
          ¡Todas las opiniones son bienvenidas, llegó el momento de escuchar al
          socio!
        </strong>
      </h4>
      <br />
      <p>Contactaté con nuestra agrupación mediante el siguiente formulario:</p>
      <br />
      <Formulario />
    </div>
  );
}
