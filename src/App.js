import './App.css';
import Boton from './components/button';
import Galeria from './components/galeria';
import TituloClase from './components/titulo';

function App() {
  return (
    <div className="App">
      <TituloClase></TituloClase>
      <Galeria></Galeria>
      <Boton></Boton>
    </div>
  );
}

export default App;
