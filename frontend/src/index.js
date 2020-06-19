import React from "react";
import { render } from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

// Documentacion respecto a React-router:
// https://medium.com/@dvenegas/empezando-con-react-router-v4-2b8c31c7eb11
