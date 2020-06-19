import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";

import "./Header.css";

import Logo from "../../img/Logo blanco.png";

export default function Header(props) {
  return (
    <div id="DivNavbar">
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand>
          <img
            src={Logo}
            width="50"
            className="d-inline-block align-top"
            alt="Logo TT"
            id="BrandLogo"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link>
            <Link to="/" class="ElementoNavbar">
              Inicio
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/agrupacion" class="ElementoNavbar">
              Quienes somos
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/prensa" class="ElementoNavbar">
              Prensa
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/contacto" class="ElementoNavbar">
              Contacto
            </Link>
          </Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
