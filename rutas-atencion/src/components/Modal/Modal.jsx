import React, { useEffect } from "react";
import "./Modal.css";
import close from "../../assets/close-circle.svg";

export default function Modal({
  isOpen,
  onClose,
  children,
  title = "Default Title", // Título opcional
}) {
  // Agrega o quita la clase 'active-modal' al body según la visibilidad
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }

    return () => document.body.classList.remove("active-modal");
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="overlay" onClick={onClose}></div>
      <div className="modal-content">
        <h2>{title}</h2>
        <div>{children}</div>
        <img
          src={close}
          alt="Cerrar"
          className="close-modal"
          onClick={onClose}
        />
      </div>
    </div>
  );
}
