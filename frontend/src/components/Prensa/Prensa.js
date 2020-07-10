import React, { Component } from "react";
import Media from "react-bootstrap/Media";
import "./Prensa.css";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";

class Prensa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Noticias: [],
      InfoCargada: false,
    };
  }
  AnadidaHace(FechaAgregado) {
    const MsPorDia = 1000 * 60 * 60 * 24;
    const FechaActual = new Date();
    FechaActual.setHours(0, 0, 0);
    const Agregado = Date.UTC(
      FechaAgregado.getFullYear(),
      FechaAgregado.getMonth(),
      FechaAgregado.getDate()
    );
    const DiferenciaEnDias = parseInt((FechaActual - Agregado) / MsPorDia);
    var TiempoTranscurrido;
    var UnidadTranscurrido;
    if (DiferenciaEnDias < 30) {
      TiempoTranscurrido = DiferenciaEnDias;
      if (DiferenciaEnDias === 1) {
        UnidadTranscurrido = "día";
      } else {
        UnidadTranscurrido = "días";
      }
    } else if (DiferenciaEnDias < 365) {
      TiempoTranscurrido = parseInt(DiferenciaEnDias / 30);
      if (DiferenciaEnDias < 60) {
        UnidadTranscurrido = "mes";
      } else {
        UnidadTranscurrido = "meses";
      }
    } else if (DiferenciaEnDias < 730) {
      TiempoTranscurrido = 1;
      UnidadTranscurrido = "año";
    } else {
      TiempoTranscurrido = parseInt(DiferenciaEnDias / 365);
      UnidadTranscurrido = "años";
    }

    return (
      <small>
        <i>
          Realizada hace {TiempoTranscurrido} {UnidadTranscurrido}
        </i>
      </small>
    );
  }

  componentDidMount() {
    axios
      .get("https://triunfotatengue.herokuapp.com/prensa/get")
      .then((res) => {
        const data = res.data.data;
        this.setState({ Noticias: data });
        this.setState({ InfoCargada: true });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  MostrarNoticias() {
    const ListaNoticias = this.state.Noticias;
    const Noticias = ListaNoticias.reverse(); // Mostrar primero los ultimos agregados
    return Noticias.map((Noticia) => (
      <div>
        <Media>
          <img
            width={125}
            className="align-self-start mr-3"
            src={Noticia.Imagen}
            alt={Noticia.Alt}
          />
          <Media.Body>
            <h4 id="TituloNoticia">{Noticia.Titulo}</h4>
            <p id="Epigrafe">{Noticia.Epigrafe}</p>
            <p id="TextoNoticia">{Noticia.Parrafo}</p>
            <button class="BotonPrensa BotonNota EfectoBoton">
              <a rel="noopener noreferrer" href={Noticia.Link} target="_blank">
                <span>Nota completa</span>
              </a>
            </button>
            {this.AnadidaHace(new Date(Noticia.Fecha))}
          </Media.Body>
        </Media>
        <hr />
        <br />
      </div>
    ));
  }
  render() {
    if (this.state.InfoCargada) {
      return (
        <div id="DivPrensa">
          <h1 id="Titulo">
            <strong>Prensa</strong>
          </h1>
          <hr />
          {this.MostrarNoticias()}
        </div>
      );
    } else {
      return (
        <div class="wrapper">
          <div class="hijo">
            <Spinner animation="border" variant="danger" role="status">
              <span className="sr-only">Cargando...</span>
            </Spinner>
          </div>
        </div>
      );
    }
  }
}

export default Prensa;
