import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../assets/css/EditTaskForm.css";

const CreateTaskForm = ({ onTaskCreated }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/Tasks", {
        title,
        description,
        completed,
      });
      onTaskCreated && onTaskCreated();
      setTitle("");
      setDescription("");
      setCompleted(false);
      navigate("/tasks");
    } catch (error) {
      console.error("Error al crear la tarea", error);
    }
  };

  return (
    <>
      <div className="Edit">
        <Link to="/tasks" style={{ textDecoration: 'none' }}>
          <h1>Crear Nueva Tarea</h1>
        </Link>
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
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="completed">Estado</label>
            <select
              id="completed"
              value={completed ? "completado" : "incompleto"}
              onChange={e => setCompleted(e.target.value === "completado")}
            >
              <option value="incompleto">Incompleto</option>
              <option value="completado">Completado</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Crear
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateTaskForm;
