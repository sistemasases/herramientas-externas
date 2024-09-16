import React, { useState } from 'react';
import '../css/body.css';
import academico from '../images/Botones dimensiones principales/Academico.svg';
import economico from '../images/Botones dimensiones principales/Economico.svg';
import familiar from '../images/Botones dimensiones principales/Familiar.svg';
import individual from '../images/Botones dimensiones principales/Individual.svg';
import vida_universitaria from '../images/Botones dimensiones principales/Vida_universitaria.svg';

const Body = () => {
  // Estado inicial con las imágenes en su orden correspondiente
  const [imagenesFila1, setImagenesFila1] = useState([
    { img: individual, nombre: 'Individual' },
    { img: familiar, nombre: 'Familiar' },
    { img: academico, nombre: 'Académico' }
  ]);

  const [imagenesFila2, setImagenesFila2] = useState([
    { img: economico, nombre: 'Económico' },
    { img: vida_universitaria, nombre: 'Vida Universitaria' }
  ]);

  const [animating, setAnimating] = useState(false);
  const [mensaje, setMensaje] = useState(''); // Mensaje oculto inicialmente
  const [mostrarMensaje, setMostrarMensaje] = useState(false); // Controla la visibilidad del mensaje
  const [primeraVez, setPrimeraVez] = useState(true); // Controla la visibilidad del mensaje

  // Función que maneja el movimiento de las imágenes
  const moverImagenes = (index, fila) => {


    // Mensaje basado en la imagen que fue presionada
    const nombreDimension = fila === 1 ? imagenesFila1[index].nombre : imagenesFila2[index].nombre;

    if (!animating && primeraVez) {
      setAnimating(true);
      setPrimeraVez(false);

      // Aplica la clase 'subiendo' temporalmente
      setTimeout(() => {
        // Mueve todas las imágenes de la fila 2 a la fila 1
        const nuevaFila1 = [...imagenesFila1, ...imagenesFila2];
        setImagenesFila1(nuevaFila1);
        setImagenesFila2([]); // Vaciar la fila 2
        setMensaje(`Has seleccionado la dimensión ${nombreDimension}`); // Actualizar el mensaje
        setMostrarMensaje(true); // Mostrar el mensaje
        setAnimating(false);
      }, 500); // Duración de la animación CSS
    }
    else {
      setMensaje(`Has seleccionado la dimensión ${nombreDimension}`); // Actualizar el mensaje
    }
  };

  return (
    <div className="body">
      <div className="dimensiones">
        {/* Fila 1 */}
        <div className='fila-dimensiones'>
          {imagenesFila1.map((item, index) => (
            <div key={index} onClick={() => moverImagenes(index, 1)}>
              <img 
                src={item.img} 
                alt={`Imagen ${item.nombre}`} 
                className={animating ? 'mostrando' : ''} // Añadir clase mostrando al terminar la animación
              />
            </div>
          ))}

        {/* Div con el mensaje, solo visible después de hacer clic */}
        {mostrarMensaje && (
          <div className="mensaje-dimension">
            {mensaje}
          </div>
        )}
        </div>

        {/* Fila 2 */}
        <div className='fila-dimensiones'>
          {imagenesFila2.map((item, index) => (
            <div key={index} onClick={() => moverImagenes(index, 2)}>
              <img 
                src={item.img} 
                alt={`Imagen ${item.nombre}`} 
                className={animating ? 'subiendo' : ''} // Añadir clase subiendo durante la animación
              />
            </div>
          ))}
        </div>
      </div>

      <div className="semaforo">
        {/* Semaforo */}
      </div>
    </div>
  );
};

export default Body;
