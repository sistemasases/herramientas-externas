import "./Body.css";
import uvArdilla from "../../assets/uvArdilla.png";
import bgArbol from "../../assets/bgArbol.svg";
import chica from "../../assets/chica.svg";
import cartel from "../../assets/cartel.svg";
import React from "react";

const info = [0, 0, 0, 0, 0, 0, 0, 0]; // Array with zeros as placeholder

function Body() {
  return (
    <div className="page-container">
      {/* Background container with absolute positioning */}
      <div className="background-container">
        <img src={bgArbol} alt="Background Tree" className="background-image" />
      </div>
      {/* Content area */}
      <main className="main-content">
        <div className="columns-container">
          <div className="tooltip-column">
            <div className="tooltip-img">
              <img id="chica" src={chica} alt="Chica" />
            </div>
          </div>
          <div className="dimensions-column">
            <div className="cartels-container">
              {info.map((_, index) => (
                <div className="cartel-wrapper" key={index}>
                  <img className="cartel-item" src={cartel} alt="Cartel" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      {/* Squirrel image positioned absolutely */}
      <img id="uvArdilla" src={uvArdilla} alt="UvArdilla" />
    </div>
  );
}

export default Body;