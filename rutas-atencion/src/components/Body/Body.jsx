import './Body.css';
import uvArdilla from '../../assets/uvArdilla.png'
import React from 'react';

function Body() {
  return (
    <main className="main-content">
        <img id="bgArbol" src={uvArdilla} alt="UvArdilla" />
        <img id="uvArdilla" src={uvArdilla} alt="UvArdilla" />
      <div className="columns-container">
        <div className='tooltip-column'>
          <h2>Tooltip</h2>
          <p>Tooltip description</p>
        </div>
        <div className="dimensions-column">
          <h2>Dimensions</h2>
        </div>
      </div>
    </main>
  );
}

export default Body;