import pistonImage from '../img/rayo.jpg';
import '../styles/galeria.css'

function Galeria() {
  return (
    <div>
      <img className='imagen' src={pistonImage} alt="Piston" />
    </div>
  );
}

export default Galeria;
