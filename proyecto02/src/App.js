import { useState } from 'react';
import './App.css';
import { Boton } from './componentes/boton';
import { Contador } from './componentes/contador';
import  freecodecampLogo from './imagenes/freecodecamp-logo.png';
function App() {

  const [click, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(click +1);
  }

  const resetContandor = () => {
    setNumClicks(0);
  }
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
      <img className='freecodecamp-logo' src={freecodecampLogo} alt='logo-freecodecamp' />
      </div>
      <div className='contenedor-principal'>
        <Contador
        clicks={click}/>
        <Boton
        texto="click"
        esBotonDeClick={true}
        manejarClick={manejarClick}
        />
        <Boton
        texto="reset"
        esBotonDeClick={false}
        manejarClick={resetContandor}
        />
      </div>
    </div>
  );
}

export default App;
