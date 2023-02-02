import React from "react";

function Testimonio(){
    return (
        <div className="contenedor-testimonio">
            <img className="imagen-testimonio" src={require("../imagenes/testimonio-kerios.png")} alt="Imagen de kerios"/>
            <div className="contenedor-testimonio">
                <p className="nombre">Lorem ipsum dolor</p>
                <p className="cargo">Lorem ipsum dolor</p>
                <p className="testimonio">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit pariatur nulla odio quae iste libero itaque porro, accusamus suscipit repudiandae ullam rem consequuntur sunt, consequatur et, quasi perferendis inventore maxime!</p>
            </div>
        </div>
    );
}

export default Testimonio;