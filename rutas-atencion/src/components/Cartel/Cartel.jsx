import React from 'react';
import './Cartel.css';
import cartelImage from '../../assets/cartel.svg'; // Assuming cartel image is common

function Cartel({ title, onClick }) {
  return (
    <div className="cartel-wrapper">
      <img
        className="cartel-item"
        src={cartelImage}
        alt={`Cartel: ${title}`} // More descriptive alt text
        onClick={onClick}
      />
      <span className="cartel-title">{title}</span> {/* Added span for better styling */}
    </div>
  );
}

export default Cartel;