import React from "react";
import axios from "axios";
import { useState } from "react";
import "../assets/css/CreateTaskForm.css";
import { useNavigate } from "react-router-dom";
const CreateTaskForm = ({ onTaskCreated}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState(""); 
  const navigate = useNavigate();
  const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/Tasks", {
        title,
        description,
        completed: false,
       
      });
    
      console.log("Tarea creada con exito" ,response.data);
      onTaskCreated();//actualizar la lista de tareas
      setTitle("");//limpiar los campos
      setDescription("");//limpiar los campos
      navigate("/"); 
    } catch (error) {
      console.error ("Error al crear la tarea" , error); 
  }
    
  }
  return (
    <>
      <div className="create">
        <h1>Crear Nueva Tarea</h1>
      </div>
      <div className="containerCreateForm">
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <label htmlFor="title">Tarea</label>
              <input type="text" id= "title" value = {title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
              <label htmlFor="description"   >Descripcion</label>
              <textarea id = "description" value = {description} onChange={(e) => setDescription(e.target.value)}></textarea>
            </div>
          </div>
          <button  className="btnCreate btn btn-primary" type="submit">
            Crear
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateTaskForm;
