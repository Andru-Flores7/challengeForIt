import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import TaskList from "./components/TaskList";
import EditTaskForm from "./components/EditTaskForm";
import CreateTaskForm from './components/CreateTaskForm';
import "./assets/css/App.css";
function App() {
 

  return (
   
    <Routes>
      
      <Route path="/" element={<TaskList />} />
      <Route path="/create" element={<CreateTaskForm />} />  
      <Route path="/edit" element={<EditTaskForm />} />
    </Routes>
     
  )
}

export default App
