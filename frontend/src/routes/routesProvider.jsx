import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import App from '../App'
const routesProvider = () => {
  return (
    <Router>  
    <App />
  </Router>
);
}



export default routesProvider