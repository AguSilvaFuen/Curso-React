import React from "react";
import "../estilos/boton.css"

export function Boton ({ texto, esBotonDeClick, manejarClick}){
    return (
        <button 
        className={esBotonDeClick ? "boton-click" : "boton-reset"}
        onClick={manejarClick}>{texto}</button>
    );
}