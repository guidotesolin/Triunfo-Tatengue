import React from "react";
import Media from "react-bootstrap/Media";
import "./Prensa.css";

export default function Home(props) {
  return (
    <div id="DivPrensa">
      <h1 id="Titulo">
        <strong>Prensa</strong>
      </h1>
      <hr />
      <Media>
        <img
          width={125}
          className="align-self-start mr-3"
          src="http://enelarea.com.ar/wp-content/uploads/2019/12/WhatsApp-Image-2019-12-01-at-19.03.591-696x422.jpeg"
          alt="Leonardo Simonutti"
        />
        <Media.Body>
          <h4 id="TituloNoticia">
            Leonardo Simonutti a un año de las últimas elecciones rojiblancas
          </h4>
          <p id="Epigrafe">Nota realizada en Antología Radio.</p>
          <p>
            Leonardo Simonutti es el actual referente de la agrupación Triunfo
            Tatengue, que viene realizando una importante tarea en los últimos
            tiempos, ya que se transformó en la segunda fuerza política, con un
            claro cuestionamiento a la conducción de Luis Spahn en Unión y con
            un proyecto para reformar el estatuto del club.
          </p>
          <button class="BotonPrensa BotonNota EfectoBoton">
            <a
              rel="noopener noreferrer"
              href="http://antologiaradio.com/post/leonardo-simonutti-de-la-agrupacion-triunfo-tatengue-a-un-ano-de-las-ultimas-elecciones-rojiblancas"
              target="_blank"
            >
              <span>Nota completa</span>
            </a>
          </button>
        </Media.Body>
      </Media>
      <hr />
      <Media>
        <img
          width={125}
          className="align-self-start mr-3"
          src="http://enelarea.com.ar/wp-content/uploads/2020/04/0028136962.jpg"
          alt="Leonardo Simonutti"
        />
        <Media.Body>
          <h4 id="TituloNoticia">Entrevista en Radio Eme</h4>
          <p id="Epigrafe">
            Audio completo de la nota realizada el 1ro de junio.
          </p>
          <p>
            "Los jugadores que vendieron fueron los jugadores que nosotros
            teníamos en vista para vender. Se vendió casi 7 millones de dolares
            en cuotas o de contado, que no sabemos, y se invirtió alrededor de 3
            millones de dolares. No sabemos que pasó con esa diferencia de unos
            4 millones de dolares"
          </p>
          <button class="BotonPrensa BotonNota EfectoBoton">
            <a
              rel="noopener noreferrer"
              href="https://youtu.be/tmWM2VigGaw"
              target="_blank"
            >
              <span>Nota completa</span>
            </a>
          </button>
        </Media.Body>
      </Media>
      <hr />
      <Media>
        <img
          width={125}
          className="align-self-start mr-3"
          src="https://www.radioeme.com/wp-content/uploads/2020/06/248330_ti.jpg"
          alt="Leonardo Simonutti"
        />
        <Media.Body>
          <h4 id="TituloNoticia">“Pensamos en el futuro de Unión”</h4>
          <p id="Epigrafe">
            En exclusiva por Radio Eme deportivo hablamos con Leonardo
            Simonutti, representante de la agrupación Triunfo Tatengue
          </p>
          <p>
            En primer termino recordó que hace un año Luis Spahn fue reelecto en
            las ultimas elecciones en la institución Tatengue: “Hoy se cumplen
            un año de las elecciones seguimos con un proyecto firme”
          </p>
          <button class="BotonPrensa BotonNota EfectoBoton">
            <a
              rel="noopener noreferrer"
              href="https://www.radioeme.com/2020/06/leonardo-simonutti-de-triunfo-tatengue-pensamos-en-el-futuro-de-union/"
              target="_blank"
            >
              <span>Nota completa</span>
            </a>
          </button>
        </Media.Body>
      </Media>
      <hr />
      <Media>
        <img
          width={125}
          className="align-self-start mr-3"
          src="https://media.lacapital.com.ar/adjuntos/204/imagenes/028/340/0028340611.png"
          alt="Leonardo Simonutti"
        />
        <Media.Body>
          <h4 id="TituloNoticia">"Unión no mejoró, viene pasos para atrás"</h4>
          <p id="Epigrafe">
            Leonardo Simonutti, referente de Triunfo Tatengue junto a Rodrigo
            Villarreal, contó en qué consiste el nuevo estatuto que proponen
            para Unión.
          </p>
          <p>
            Leonardo Simonutti es el actual referente de la agrupación Triunfo
            Tatengue, que viene realizando una importante tarea en los últimos
            tiempos, ya que se transformó en la segunda fuerza política, con un
            claro cuestionamiento a la conducción de Luis Spahn en Unión y con
            un proyecto para reformar el estatuto del club.
          </p>

          <button class="BotonPrensa BotonNota EfectoBoton">
            <a
              rel="noopener noreferrer"
              href="https://www.unosantafe.com.ar/union/simonutti-union-no-mejoro-viene-pasos-atras-n2588140.html?fbclid=IwAR0Jat2rM9E02ldPK35W7m-M0JqDslNUmZZplhbOsWyBSbUf-Zr9fnVszG4"
              target="_blank"
            >
              <span>Nota completa</span>
            </a>
          </button>
        </Media.Body>
      </Media>
      <hr />
      <Media>
        <img
          width={125}
          className="align-self-start mr-3"
          src="https://static.ellitoral.com/um/fotos/304863_simonutti.jpg"
          alt="Leonardo Simonutti"
        />
        <Media.Body>
          <h4 id="TituloNoticia">"Pasó un año y estamos peor"</h4>
          <p id="Epigrafe">
            El titular del grupo opositor al actual presidente de Unión, Luis
            Spahn, anunció que presentará un proyecto para reformar el estatuto
            con innovaciones de fondo. También aprovechó para hacer críticas a
            la actual gestión.
          </p>
          <p>
            Triunfo Tatengue redobla la apuesta y a un año de las elecciones en
            las que resultó electo el actual presidente, Luis Spahn, formula
            críticas a la gestión y señala: “Pasó un año y estamos peor. Se
            vendió por mucho dinero, se desvalorizó el plantel, no se sabe si se
            achicó la deuda con los acreedores, especialmente con el presidente,
            no hubo obras y se fue la figura más importante que era nuestro
            técnico”, señala Leonardo Simonutti, el presidente de este grupo
            político que resultó segundo en las elecciones del 1 de junio
            pasado.
          </p>
          <button class="BotonPrensa BotonNota EfectoBoton">
            <a
              rel="noopener noreferrer"
              href="https://www.ellitoral.com/index.php/id_um/242119-paso-un-ano-y-estamos-peor-leonardo-simonutti-y-la-voz-de-triunfo-tatengue-a-365-dias-de-las-elecciones-actualidad-tatengue.html?fbclid=IwAR2aW7yDi_9Ra0eNptEDJ300WOkdKBKHVz8gcgO8n1wELcxiEHqr4HYrNXY"
              target="_blank"
            >
              <span>Nota completa</span>
            </a>
          </button>
        </Media.Body>
      </Media>
      <hr />
      <Media>
        <img
          width={125}
          className="align-self-start mr-3"
          src="http://enelarea.com.ar/wp-content/uploads/2020/04/0028136962.jpg"
          alt="Leonardo Simonutti"
        />
        <Media.Body>
          <h4 id="TituloNoticia">Leonardo Simonutti en Radio Gol 96.7</h4>
          <p id="Epigrafe">Entrevista radial del día 1 de junio</p>
          <p>
            A un año de las ultimas elecciones en UNIÓN contamos novedades sobre
            los proyectos en los cuales estamos trabajando, entre los cuales
            destaca la propuesta para reformar el estatuto de nuestro querido
            club.
          </p>
          <button class="BotonPrensa BotonNota EfectoBoton">
            <a
              rel="noopener noreferrer"
              href="https://www.youtube.com/watch?v=qDVk_40WtWw"
              target="_blank"
            >
              <span>Nota completa</span>
            </a>
          </button>
        </Media.Body>
      </Media>
      <hr />
      <Media>
        <img
          width={125}
          className="align-self-start mr-3"
          src="https://nexodiario.com/wp-content/uploads/2020/05/1650D3CC-9D7F-4E1D-9F59-F453B12A3E9B.jpeg"
          alt="Leonardo Simonutti"
        />
        <Media.Body>
          <h4 id="TituloNoticia">“Queremos lograr un Unión transparente”</h4>
          <p id="Epigrafe">
            El presidente de Triunfo Tatengue habló con Nexo Diario sobre los
            proyectos que desean llevar adelante en Unión. Además buscan
            modificar el estatuto.
          </p>
          <p>
            El próximo lunes 1 de junio se cumplirá un año de las ultimas
            elección en Unión. En los últimos comicios, Luis Spahn fue reelecto
            como presidente de la institución. A casi un año del acto electivo,
            Leonardo Simonutti, presidente de Triunfo Tatengue, charló con Nexo
            Diario sobre los proyectos que buscan realizar en el club.
          </p>
          <button class="BotonPrensa BotonNota EfectoBoton">
            <a
              rel="noopener noreferrer"
              href="https://nexodiario.com/leonardo-simonutti-queremos-lograr-un-union-transparente/?fbclid=IwAR0tN2qV0hY4_geXTNDwrOjzThEV_aE3rFDlMJSNyhA_IOc1KkEc-AO_mp0"
              target="_blank"
            >
              <span>Nota completa</span>
            </a>
          </button>
        </Media.Body>
      </Media>
      <hr />
    </div>
  );
}
