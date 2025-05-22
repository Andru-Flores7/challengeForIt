import React, { useEffect } from "react";
import "../assets/css/ModalWarning.css";

const ModalWarning = ({ show, onConfirm, onCancel }) => {
  useEffect(() => {
    if (!show) return;
    const handleEsc = (e) => {
      if (e.key === "Escape") onCancel();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [show, onCancel]);
  if (!show) return null;
  return (
    <div className="modal-warning-bg">
      <div className="modal-warning">
        <h2>¿Estás seguro?</h2>
        <p>Esta acción eliminará la tarea de forma permanente.</p>
        <button className="btn btn-danger" onClick={onConfirm}>Eliminar</button>
        <button className="btn btn-secondary" onClick={onCancel}>Cancelar</button>
      </div>
    </div>
  );
};

export default ModalWarning;
