import logo from './logo.svg';
import './App.css';
import { Testimonio } from "./componentes/testimonio.jsx";

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        <Testimonio 
  nombre="Shawn Wang"
  cargo="Software Engineer"
  pais="Singapore"
  empresa="Amazon"
  testimonio={
    <div dangerouslySetInnerHTML={{
      __html: `"It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. <strong>freeCodeCamp changed my life.</strong>"`
    }} />
  }
  imagen="Shawn"
/>

        <Testimonio 
        nombre="Sarah Chima"
        cargo="Software Engineer"
        pais="Nigeria"
        empresa="ChatDesk"
        testimonio="freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company."
        imagen="Sarah"
        />
        <Testimonio 
        nombre="Emma Bostian"
        cargo="Software Engineer"
        pais="Sweden"
        empresa="Spotify"
        testimonio="I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."
        imagen="Emma"
        />
      </div>
    </div>
  );
}

export default App;
