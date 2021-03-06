import React from "react";
import ModalImage from "react-modal-image";

import "./Agrupacion.css";

import ImgAgrupacion from "../../img/Agrupacion.jpg";

export default function Agrupacion(props) {
  return (
    <div>
      <h1 id="Titulo">
        <strong>AGRUPACIÓN TRIUNFO TATENGUE</strong>
      </h1>
      <div id="ImgAgrupacion">
        <ModalImage
          small={ImgAgrupacion}
          large={ImgAgrupacion}
          alt="Agrupacion triunfo tatengue"
        />
      </div>
      <br />
      <p id="Epigrafe">
        Somos la generacion que va a cambiar las reglas de juego de nuestra
        institucion.
      </p>
      <p>
        Somos un equipo donde nadie es imprescindible y todos cumplimos roles
        específicos en nuestra propuesta de Comisión directiva.
      </p>
      <p>No somos súbditos ni levantamanos del poder de turno.</p>
      <p>
        Somos la identidad tatengue y el sentimiento del hincha que pretende un
        Unión mucho más grande y no hablamos solamente de fútbol, el{" "}
        <strong>TRIUNFO TATENGUE</strong> se tiene que aplicar a todos los
        aspectos del club. Unión es el club social y deportivo más importante de
        la región y eso tiene que verse reflejado en masa societaria,
        infraestructura, actividades deportivas, actividades sociales,
        actividades culturales y en el club en sí mismo.
      </p>
      <p>
        Deseamos elevar la vara institucional y que el club gane en calidad
        institucional y deportiva.
      </p>
      <p>
        Queremos cambiar esa idea tan arraigada en el subconsciente colectivo
        del hincha tatengue: la idea de que para ser presidente o comisión
        directiva de Unión hay que ser multimillonario. Unión es un club enorme
        que genera ingresos fijos mensuales de millones en cuota societaria,
        ingresos de televisación y de sponsors. Lo que necesitamos son gestores,
        no una persona que ponga la billetera y se maneje como patrón de
        estancia rodeado de obsecuentes.
      </p>
      <p>
        Sin embargo, todos esos ingresos pueden parecer insignificantes
        comparados con los que se pueden generar con la generación y venta de
        jugadores del plantel profesional. Este es el eterno déficit de Unión y
        es lo que hay que cambiar. Parecemos acostumbrados a las malas y poco
        transparentes ventas, a ver a jugadores surgidos de nuestras inferiores
        boyando por categorías inferiores del ascenso, a “refuerzos” que se van
        a los 6 meses de haber llegado y prácticamente sin haber jugado.
        Queremos cambiar ese déficit.
      </p>
      <p>
        Por eso en las elecciones del 2019 apoyamos nuestro proyecto
        futbolístico en las figuras de Claudio Gugnali como Manager y de Lito
        Bottaniz como Coordinador de inferiores. Con esos pilares queremos
        transformar a Unión en una “fábrica de jugadores” formando la cadena de
        captación, formación, seguimiento y promoción de jugadores. Todos estos
        eslabones tienen que forjarse en un predio. UNIÓN es el único club de
        primera división que no cuenta con un predio propio. El plantel se
        encuentra entrenando en un predio convenientemente alquilado al
        presidente de turno. Nuestra Agrupación tenía en mente la adquisición de
        un predio dentro de la ciudad con las comodidades necesarias para el
        entrenamiento y alojamiento tanto del plantel profesional como de las
        inferiores.
      </p>
      <p>
        Entre otros proyectos teníamos la explotación del Estadio Ángel
        Malvicino para generar recursos mediante espectáculos culturales, la
        reactivación de la mutual del club para ayudar al socio, la generación
        de nuevos socios vitalicios y suplir ese faltante mensual en cuotas
        mediante una campaña agresiva de captación de nuevos socios.
      </p>
      <p>
        Somos la mixtura entre profesionalismo y pasión. Queremos transparencia.
        Queremos recuperar el prestigio perdido y volver a ser una institución
        ejemplar. Queremos transformar el club. Queremos contar con vos.
      </p>
    </div>
  );
}
