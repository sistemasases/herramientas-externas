import React from 'react';
import '../css/body.css';
import academico from '../images/Botones dimensiones principales/Academico.svg';
import economico from '../images/Botones dimensiones principales/Economico.svg';
import familiar from '../images/Botones dimensiones principales/Familiar.svg';
import individual from '../images/Botones dimensiones principales/Individual.svg';
import vida_universitaria from '../images/Botones dimensiones principales/Vida_universitaria.svg';

const Body = () => {
  return (
    <div className="body">
      <div><img src={individual} alt="Individual" /></div>
      <div><img src={familiar} alt="Familiar" /></div>
      <div><img src={academico} alt="Académico" /></div>
      <div><img src={economico} alt="Económico" /></div>
      <div><img src={vida_universitaria} alt="Vida Universitaria" /></div>
    </div>
  );
};

export default Body;
