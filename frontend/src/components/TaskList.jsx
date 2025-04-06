// src/components/TaskList.js
import React from "react";
import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";
import "../assets/css/TaskList.css";

const TaskList = () => {
  return (
    <>
      <div  className="list">
        <h1>Lista de Tareas</h1>
      </div>
      <ul>
        <li>hola</li>
      </ul>

      <Link  className="d-grid gap-2"to="/create">
        <button className="btn btn-primary" type="button">Crear Nueva Tarea</button>
      </Link>
    </>
  );
};

export default TaskList;
