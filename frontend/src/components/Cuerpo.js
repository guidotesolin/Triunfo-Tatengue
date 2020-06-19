import React from "react";
import Container from "react-bootstrap/Container";
import { HashRouter, Switch, Route } from "react-router-dom";

import Home from "./Home/Home";
import Agrupacion from "./Agrupacion/Agrupacion";
import Contacto from "./Contacto/Contacto";
import Prensa from "./Prensa/Prensa";
import NotFound from "./NotFound/404";

import "./Cuerpo.css";

export default function Cuerpo(props) {
  return (
    <Container id="DivCuerpo">
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/agrupacion" component={Agrupacion} />
          <Route path="/contacto" component={Contacto} />
          <Route path="/prensa" component={Prensa} />
          <Route component={NotFound} />
        </Switch>
      </HashRouter>
    </Container>
  );
}
