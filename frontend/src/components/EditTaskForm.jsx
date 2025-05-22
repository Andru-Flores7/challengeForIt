// src/components/TaskForm.js
import React from "react";
import { useState, useEffect } from "react";
import { useParams , useNavigate } from "react-router-dom";
import axios from "axios";
import "../assets/css/EditTaskForm.css";

const EditTaskForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);  

  useEffect (()=> {
    axios
      .get(`http://localhost:3000/Tasks/${id}`)
      .then((response) => {
       const { title, description, completed } = response.data;
       setTitle(title);
       setDescription(description);
       setCompleted(completed);
      })

      .catch((error) => {
        console.log("Error al obtener la tarea", error);
      });
  } , [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/Tasks/${id}`, {
        title,
        description,
        completed,
      });
      console.log("Tarea actualizada");
      
      navigate("/");
    } catch (error) {
      console.log("Error al actualizar la tarea", error);
    }
  }
  return (
    <> 
      <div className="Edit">
        <h1>Formulario de Edición</h1>
      </div>
      <div className="containerEditForm">
        <form onSubmit={handleSubmit} className="editForm">
          <div>
            <label htmlFor="title">Tarea</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label>Descripcion</label>
            <textarea  id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)} />
          </div>
          <div>
            <label htmlFor="completed">Estado</label>
            <select id="completed" value={completed ? "completado" : "incompleto"} onChange={e => setCompleted(e.target.value === "completado") }>
              <option value="incompleto">Incompleto</option>
              <option value="completado">Completado</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Guardar 
          </button>
        </form>
      </div>
    </>
  );
};

export default EditTaskForm;
