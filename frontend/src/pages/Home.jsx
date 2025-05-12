import React from 'react'
import { Link } from 'react-router-dom'
import "../assets/css/Home.css"
const Home = () => {
  return (
    <div>
        <h1>Bienvenido a el gestor de tareas</h1>
        <p>Esta es una aplicacion para gestionar tareas</p>
        <p>Para empezar, dirijete a la pestaña de tareas</p>

       <Link to="/tasks"><button>Ir a tareas</button></Link> 

    </div>
  )
}

export default Home