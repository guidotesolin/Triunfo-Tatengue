import React from "react";
import Image from "react-bootstrap/Image";

import "./Home.css";

import SedeClub from "../../img/Frente.jpg";

export default function Home(props) {
  return (
    <div>
      <br />
      <h1 id="Titulo">
        <strong>
          Puntos más importantes de la reforma de estatuto que proponemos
        </strong>
      </h1>
      <br />
      <div>
        <Image src={SedeClub} fluid alt="Sede del club" id="imgSede" />
      </div>
      <br />
      <ul>
        <p id="Epigrafe">Nuestros puntos principales a reformar:</p>
        <li>
          Establecer claramente identidad, simbología y sentido de pertenencia.
          Se definen dentro del estatuto imagen y escudo.
        </li>
        <li>
          Ordenar correctamente las categorías de asociados y se crean nuevas
          categorías acorde a los fines y objetivos del Club: Asociados
          Benefactores, Federados y Becados. A los efectos de darle oportunidad
          a todos de ser socios de Unión, el socio Becado será una categoría de
          socios para aquellos que por sus condiciones económicas no pueden
          pagar la cuota y “pensando en los desempleados a los que la vida le
          está jugando una mala pasada”.
        </li>
        <li>
          Fijar nuevas normas y proyectos de integración e inclusión social:
          Grupo Unión Social, reformulando el Grupo Familiar atento a las nuevas
          circunstancias de vida en el que transitan las familias unionistas. En
          este aspecto, se revalida y empodera el trabajo que viene realizando,
          por ejemplo, Sentimiento Tantegue con el proyecto Tate Fanático.
        </li>
        <li>
          Promover el acceso a la información plena, lo cual constituye una
          piedra basal de toda forma democrática de gobierno, “ya que la
          información y los documentos no pertenecen a los directivos, sino al
          club y a sus asociados y se consagra el deber de dar publicidad a
          todos los actos de gobierno”.
        </li>
        <li>
          Adecuar el estatuto a las nuevas normas jurídicas que rigen actualidad
          con parámetros formales que no están contemplados en el actual
          articulado. Se considera en lo pertinente el Código Penal vigente, la
          ley del deporte o derecho deportivo. Se crea un ordenamiento legal
          nuevo, moderno y eficaz.
        </li>
        <li>
          Regular estatutariamente las identidades y facultades de Filiales,
          Agrupaciones y Peñas.
        </li>
        <li>
          Modificar de raíz la estructura de gobierno del Club, dejando 4
          poderes bien claros y diferenciados: asamblea de socios, comisión
          directiva, comisión fiscalizadora y comisión de Etica y Disciplina.
        </li>
        <li>
          Establecer claramente los Departamentos fijos como contenido
          inamovible que debe tener el Club. El funcionamiento de las
          Subcomisiones quedará bajo el control de esos Departamentos. Se
          establece la persona de Gerente general del Club. Se crea el Tribunal
          de Honor y notables.
        </li>
        <li>
          Cambiar radicalmente el sistema eleccionario de autoridades para
          comisión directiva, con sólo 6 cargos por elegir: 1 Presidente, 3
          Vicepresidentes, 1 Síndico Titular, 1 Síndico Suplente, “dejando en
          claro que el Síndico es la figura que defiende al socio tatengue en
          todos los ámbitos”. El resto de los cargos son delegados por el
          presidente y habrá representación de las minorías en cada Subcomisión,
          se aclara.
        </li>
        <li>
          Modificar la estructura de la Comisión Directiva, eliminando suplentes
          y convirtiendo a los 12 vocales en titulares. Esto va de la mano con
          la reforma en el sistema electoral. La intención es que los Vocales
          elegidos por el presidente, tomen a cargo los Departamentos fijos del
          Club.
        </li>
        <li>
          Se creará institucionalmente la Escuela de Dirigentes pensando en las
          próximas generaciones con formación en derecho, economía, contabilidad
          y relaciones públicas, por dar algunos ejemplos.
        </li>
      </ul>
    </div>
  );
}
