import React from "react";
import '../estilos/testimonio.css';

export function Testimonio(props){
    return (
        <div className="contenedor-testimonio">
            <img className="imagen-testimonio" src={require(`../imagenes/${props.imagen}.png`)} alt={`Imagen de ${props.nombre}`} />
            <div className="contenedor-texto-testimonio">
                <p className="nombre"><strong>{props.nombre}</strong> in {props.pais}</p>
                <p className="cargo">{props.cargo} at <strong>{props.empresa}</strong></p>
                <p className="testimonio">{props.testimonio}</p>
            </div>
        </div>
    );
}