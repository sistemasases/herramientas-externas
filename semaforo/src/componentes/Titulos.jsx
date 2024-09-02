import React from 'react';
import '../css/titulos.css'; 
import dimensiones from '../images/Dimensiones.svg'
import semaforo from '../images/semaforo.svg'

const Titulos = () => {
  return (
      <div className="titulo">
        <div className='column'>
          <img id='imgDimensiones' src={dimensiones} alt="Logo" />
        </div>
         
         <div className='column'>
          <img id='imgSemaforo' src={semaforo} alt="Logo" /> 
         </div>

      </div>
  );
};

export default Titulos;
