import React, { useState } from 'react';
import '../css/body.css';
import academico from '../images/Botones dimensiones principales/Academico.svg';
import economico from '../images/Botones dimensiones principales/Economico.svg';
import familiar from '../images/Botones dimensiones principales/Familiar.svg';
import individual from '../images/Botones dimensiones principales/Individual.svg';
import vida_universitaria from '../images/Botones dimensiones principales/Vida_universitaria.svg';
import icon_academico from '../images/iconos_dimensiones/icono_academica.svg';
import icon_economico from '../images/iconos_dimensiones/icono_economico.svg';
import icon_familiar from '../images/iconos_dimensiones/icono_familiar.svg';
import icon_individual from '../images/iconos_dimensiones/icono_individual.svg';
import icon_vida_universitaria from '../images/iconos_dimensiones/icono_vida.svg';

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

  const iconos = [
    { img: icon_academico, nombre: 'Académico' }, // Corregido a 'Académico'
    { img: icon_economico, nombre: 'Económico' }, // Corregido a 'Económico'
    { img: icon_familiar, nombre: 'Familiar' },
    { img: icon_individual, nombre: 'Individual' },
    { img: icon_vida_universitaria, nombre: 'Vida Universitaria' }
  ];

  const [animating, setAnimating] = useState(false);
  const [mensaje, setMensaje] = useState(''); // Mensaje oculto inicialmente
  const [mostrarMensaje, setMostrarMensaje] = useState(false); // Controla la visibilidad del mensaje
  const [primeraVez, setPrimeraVez] = useState(true); // Controla la visibilidad del mensaje
  const [imagenMensaje, setImagenMensaje] = useState(''); // Imagen que aparece en el mensaje

  // Mensajes para cada dimensión
  const mensajesDimensiones = {
    'Individual': 'Corresponde a la información que refiere el/la estudiante respecto a los aspectos personales.',
    'Familiar': 'Corresponde a la descripción de la dinámica familiar y cómo esta dinámica es una barrera o un facilitador en la elección y la permanencia en el programa académico.',
    'Académico': 'Corresponde a la información que el/la estudiante le manifiesta al monitor en relación a su desempeño académico y el nivel de desarrollo de habilidades que se han identificado en las actividades académicas que desarrolla cada uno de los estudiantes.',
    'Económico': 'Información relacionada con la situación económica de los estudiantes y el manejo del dinero.',
    'Vida Universitaria': 'Corresponde a la información que refiere el/la estudiante respecto a la percepción que este tiene de su vida en la Universidad y la ciudad.'
  };

  // Función que maneja la selección de la dimensión
  const manejarSeleccionDimension = (index, fila) => {
    // Nombre de la dimensión seleccionada según la fila
    const nombreDimension = fila === 1 ? imagenesFila1[index].nombre : imagenesFila2[index].nombre;
    const imagenDimension = fila === 1 ? imagenesFila1[index].img : imagenesFila2[index].img;

    // Buscar el icono correspondiente
    const iconoEncontrado = iconos.find(icono => icono.nombre === nombreDimension);
    const iconoDimension = iconoEncontrado ? iconoEncontrado.img : null;

    // Solo permite animación si no está en proceso y es la primera vez
    if (!animating && primeraVez) {
      setAnimating(true);
      setPrimeraVez(false);

      // Simulación de la animación y reorganización de las imágenes
      setTimeout(() => {
        // Mover las imágenes de la fila 2 a la fila 1
        const nuevaFila1 = [...imagenesFila1, ...imagenesFila2];
        setImagenesFila1(nuevaFila1);
        setImagenesFila2([]); // Vaciar la fila 2

        // Actualizar el mensaje, imagen y mostrarlo
        setMensaje(mensajesDimensiones[nombreDimension]); // Asignar el mensaje correspondiente
        setImagenMensaje(iconoDimension); // Asignar la imagen correspondiente
        setMostrarMensaje(true);

        // Finaliza la animación
        setAnimating(false);
      }, 500); // Duración de la animación CSS
    } else {
      // Actualiza el mensaje e imagen sin cambiar la animación
      setMensaje(mensajesDimensiones[nombreDimension]); // Asignar el mensaje correspondiente
      setImagenMensaje(iconoDimension); // Asignar la imagen correspondiente
    }
  };

  return (
    <div className="body">
      <div className="dimensiones">
        {/* Fila 1 */}
        <div className='fila-dimensiones'>
          {imagenesFila1.map((item, index) => (
            <div key={index} onClick={() => manejarSeleccionDimension(index, 1)}>
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
              {imagenMensaje && (
                <img 
                  src={imagenMensaje} 
                  alt="Icono de la dimensión" 
                  className="imagen-mensaje" // Nueva clase para la imagen dentro del mensaje
                />
              )}
              <p>{mensaje}</p>
            </div>
          )}
        </div>

        {/* Fila 2 */}
        <div className='fila-dimensiones'>
          {imagenesFila2.map((item, index) => (
            <div key={index} onClick={() => manejarSeleccionDimension(index, 2)}>
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
