import React from 'react';
import '../css/titulos.css'; 
import dimensiones from '../images/Titúlos dimensiones y semáforo/Dimensiones.svg'
import semaforo from '../images/Titúlos dimensiones y semáforo/semaforo.svg'

const Titulos = () => {
  return (
      <div className="titulo">
        <div className='column1'>
          <img id='imgDimensiones' src={dimensiones} alt="Logo" />
        </div>
         
         <div className='column2'>
          <img id='imgSemaforo' src={semaforo} alt="Logo" /> 
         </div>

      </div>
  );
};

export default Titulos;