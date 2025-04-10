// src/components/TaskList.js
import React from "react";
import { Link } from "react-router-dom";
 import { useState, useEffect } from "react";
 import axios from "axios";
import "../assets/css/TaskList.css";

const TaskList = ({ updated }) => {
  const [tasks, setTasks] = useState([]);
  //ESto se ejecuta una vez al montar el elemento
  useEffect(() => {
  //Llamada al back
  axios.get("http://localhost:3000/Tasks")
  .then((response) => {
    setTasks(response.data)//se guardan las tareeas

  })
  .catch ((error) => {
    console.log("Error al obtener las tareas" , error);
  });
  }, [updated]);//actualiza la lista de tareas
  return (
    <>
      <div  className="list">
        <h1>Lista de Tareas</h1>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <button>Eliminar</button>
            <button>Editar</button>
          </li>
        ))}
        
      </ul>

      <Link  className="d-grid gap-2"to="/create">
        <button className="btn btn-primary" type="button">Crear Nueva Tarea</button>
      </Link>
    </>
  );
};

export default TaskList;
