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
    axios
      .get("http://localhost:3000/Tasks")
      .then((response) => {
        setTasks(response.data); //se guardan las tareeas
      })
      .catch((error) => {
        console.log("Error al obtener las tareas", error);
      });
  }, [updated]); //actualiza la lista de tareas
  return (
    <>
      <div className="list">
        <h1>Lista de Tareas</h1>
      </div>
      <ul className="list-group list-group-flush ">
        {tasks.map((task) => (
          <li className="list-group-item list-group-item-primary listli" key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <div className="btns">
            <button className="btn btn-danger">Eliminar</button>
            <Link to={`/edit/${task.id}`}>
              <button className="btn btn-success">Editar</button>
            </Link>
            </div>
          </li>
        ))}
      </ul>

      <Link className="d-grid gap-2" to="/create">
        <button className="btn btn-primary" type="button">
          Crear Nueva Tarea
        </button>
      </Link>
    </>
  );
};

export default TaskList;
