import React from "react";
import './Contacto.css';

function Contacto(props) {
   
  function borrar() {
  props.borrarContacto();
  }
    return(
          <div class="diseño">
            <p>{props.nombre}</p>
            <p>{props.correo}</p>
            <p>{props.telefono}</p>
            <button onClick={borrar} id="borrar">Borrar</button>
          </div>

    )
}

export default Contacto;