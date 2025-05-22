import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="title-home">
        <h1 >Bienvenido a el gestor de tareas</h1>
      </div>
      <div className="description-home">
        <p>Esta es una aplicacion para gestionar tareas</p>
        <p>Para empezar, dirijete a la pestaña de tareas</p>
      </div>

      <Link to="/tasks">
        <button className="btn btn-outline-primary">Ir a tareas</button>
      </Link>
    </div>
  );
};

export default Home;
