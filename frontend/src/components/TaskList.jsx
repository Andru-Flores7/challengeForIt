// src/components/TaskList.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import ModalWarning from "./ModalWarning";
import "../assets/css/TaskList.css";

const TaskList = ({ updated }) => {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
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
  // Función para eliminar tarea con confirmación
  const handleDeleteClick = (id) => {
    setTaskToDelete(id);
    setShowModal(true);
  };

  const handleConfirmDelete = async () => {
    if (!taskToDelete) return;
    try {
      await axios.delete(`http://localhost:3000/Tasks/${taskToDelete}`);
      setTasks(tasks.filter((task) => task.id !== taskToDelete));
    } catch (error) {
      console.log("Error al eliminar la tarea", error);
    }
    setShowModal(false);
    setTaskToDelete(null);
  };

  const handleCancelDelete = () => {
    setShowModal(false);
    setTaskToDelete(null);
  };

  return (
    <>
      <ModalWarning show={showModal} onConfirm={handleConfirmDelete} onCancel={handleCancelDelete} />
      <div className="list">
        <h1>Lista de Tareas</h1>
      </div>
      <ul className="list-group list-group-flush ">
        {tasks.map((task) => (
          <li className="list-group-item list-group-item-primary listli" key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <span style={{ fontWeight: 600, color: task.completed ? '#00e676' : '#ff1744' }}>
              Estado: {task.completed ? 'Completado' : 'Incompleto'}
            </span>
            <div className="btns">
              <button className="btn btn-danger" onClick={() => handleDeleteClick(task.id)}>Eliminar</button>
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
