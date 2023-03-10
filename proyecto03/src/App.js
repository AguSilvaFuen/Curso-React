import './App.css';
import freeCodeCampLogo from "./imagenes/freecodecamp-logo.png"
import {Boton} from "./componentes/boton.jsx"
import {Pantalla} from "./componentes/pantalla.jsx"
import {BotonClear} from "./componentes/botonclear.jsx"
import {useState} from "react";
import {evaluate} from "mathjs";

function App() {

  const [input, setInput] = useState("");

  const agregarInput = val =>{
    setInput(input+val);
  };

  const calcularResultado = () => {
    if (input){
      setInput(evaluate(input));
    }
    else
      alert("ingresar valores validos");
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img src={freeCodeCampLogo} className='freecodecamp-logo' alt='Logo'/>
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
        <BotonClear manejarClick={() => setInput ('')}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
