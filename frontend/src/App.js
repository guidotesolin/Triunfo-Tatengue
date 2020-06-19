import React from "react";
import "./App.css";

//Componentes
import Header from "./components/Header/Header";
import Cuerpo from "./components/Cuerpo";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Cuerpo />
      <Footer />
    </div>
  );
}

export default App;
