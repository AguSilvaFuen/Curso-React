import React from "react";
import "../estilos/botonclear.css";

export const BotonClear = (props) => (
    <div className="boton-clear"
    onClick={props.manejarClick}>
        {props.children}
    </div>
);