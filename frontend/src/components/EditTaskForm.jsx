// src/components/TaskForm.js
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../assets/css/EditTaskForm.css";

const TaskForm = () => {
  return (
    <> 
      <div className="Edit">
        <h1>Formulario de Edicion</h1>
      </div>
      <div className="containerEditForm">
        <form>
          <div>
            <label>Tarea</label>
            <input
              type="text"
      
            />
          </div>
          <div>
            <label>Descripcion</label>
            <textarea type="password" />
          </div>

          <button type="submit" className="btn btn-primary">
            Guardar 
          </button>
        </form>
      </div>
    </>
  );
};

export default TaskForm;
