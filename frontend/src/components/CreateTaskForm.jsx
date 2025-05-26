import React from "react";
import axios from "axios";
import { useState } from "react";
import "../assets/css/CreateTaskForm.css";
import { useNavigate, Link } from "react-router-dom";
const CreateTaskForm = ({ onTaskCreated}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState(""); 
  const [completed, setCompleted] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/Tasks", {
        title,
        description,
        completed,
      });
    
      console.log("Tarea creada con exito" ,response.data);
      onTaskCreated && onTaskCreated();//actualizar la lista de tareas
      setTitle("");//limpiar los campos
      setDescription("");//limpiar los campos
      setCompleted(false);
      navigate("/tasks"); 
    } catch (error) {
      console.error ("Error al crear la tarea" , error); 
  }
    
  }
  return (
    <>
      <div className="create" style={{textDecoration: 'none' }}>
        <Link to="/tasks" style={{ textDecoration: 'none' }}>
          <h1 >Crear Nueva Tarea</h1>
        </Link>
      </div>
      <div className="containerCreateForm">
        <form className="unified-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Tarea</label>
            <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div>
            <label htmlFor="description">Descripcion</label>
            <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          </div>
          <div>
            <label htmlFor="completed">Estado</label>
            <select id="completed" value={completed ? "completado" : "incompleto"} onChange={e => setCompleted(e.target.value === "completado") }>
              <option value="incompleto">Incompleto</option>
              <option value="completado">Completado</option>
            </select>
          </div>
          <button className="btnCreate btn btn-primary" type="submit">
            Crear
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateTaskForm;
