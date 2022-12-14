import React from "react";
import './Busqueda.css';

function Busqueda(props) {

    function onBusquedaChange(event){
        props.setTextoBusqueda(event.target.value);
    }

    return(
        <React.Fragment>
        <input class="busqueda" onChange={onBusquedaChange}></input>
        </React.Fragment>
    );
} 

export default Busqueda;