import React, { Component } from "react";
import { loadReCaptcha } from "react-recaptcha-v3";
import axios from "axios";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Formulario.css";

class Formulario extends Component {
  componentDidMount() {
    loadReCaptcha("6Ldlb6YZAAAAAAYYPLKs4p6JImJzlGpGCH776Mqt");
  }

  handleSubmit(e) {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const mail = document.getElementById("mail").value;
    const telefono = document.getElementById("telefono").value;
    const mensaje = document.getElementById("mensaje").value;
    axios({
      method: "POST",
      //     url: "http://localhost:3000/send",
      url: "https://triunfotatengue.herokuapp.com/send",
      data: {
        name: nombre,
        email: mail,
        phone: telefono,
        message: mensaje,
      },
    }).then((response) => {
      if (response.data.msg === "success") {
        this.ResetearFormulario();
        this.MostrarMensaje();
      } else if (response.data.msg === "fail") {
        alert(
          "Error al enviar. Por favor contactese a triunfotatengue@gmail.com"
        );
      }
    });
  }
  ResetearFormulario() {
    document.getElementById("formularioContacto").reset();
  }
  MostrarMensaje() {
    document.getElementById("MensajeEnviado").style.display = "block";
  }

  render() {
    return (
      <div>
        <form
          id="formularioContacto"
          onSubmit={this.handleSubmit.bind(this)}
          method="POST"
        >
          <Row className="justify-content-md-center">
            <Col sm={4}>
              <Form.Group as={Col}>
                <Form.Control
                  type="text"
                  placeholder="Nombre"
                  required
                  id="nombre"
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  class="FormImput"
                  required
                  id="mail"
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Control
                  type="tel"
                  placeholder="Teléfono "
                  class="FormImput"
                  required
                  id="telefono"
                />
              </Form.Group>
            </Col>
            <Col sm={4}>
              <Form.Group>
                <Form.Control
                  as="textarea"
                  rows="5"
                  placeholder="Deje su consulta"
                  class="FormImput"
                  id="mensaje"
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <small class="form-text text-muted" style={{ textAlign: "center" }}>
            Todos los campos son requeridos
          </small>
          <br />
          <Row className="justify-content-md-center">
            <button id="BotonEnviar" type="submit" class="button">
              <div id="translate"></div>
              <label>Enviar consulta</label>
            </button>
          </Row>
        </form>
        <div
          id="MensajeEnviado"
          style={{ textAlign: "center", display: "none" }}
        >
          <br />
          <strong>
            ¡Gracias por ponerte en contacto con nuestra agrupación!
          </strong>
          <br />
          <p>
            Su consulta ha sido enviada. A la brevedad nos estaremos comunicando
            con usted.
          </p>
          <br />
        </div>
      </div>
    );
  }
}
export default Formulario;
