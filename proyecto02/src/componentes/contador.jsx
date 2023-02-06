import React from "react";
import "../estilos/contador.css";

export function Contador({clicks}) {
    return (
        <div className="contador">
            {clicks}
        </div>
    );

}