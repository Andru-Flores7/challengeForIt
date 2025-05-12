import React from "react";
import { useState } from "react";
import { Routes, Route , Link } from "react-router-dom";
import TaskList from "./components/TaskList";
import EditTaskForm from "./components/EditTaskForm";
import Home from "./pages/Home";
import CreateTaskForm from "./components/CreateTaskForm";
import "./assets/css/App.css";
function App() {
  const [tasksUpdated, setTasksUpdated] = useState(false);

  const handleTaskCreated = () => {
    setTasksUpdated(!tasksUpdated); 
  };
  return (
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<TaskList />} />
        <Route path="/create" element={<CreateTaskForm  onTaskCreated={handleTaskCreated} />} />
        <Route path="/edit/:id" element={<EditTaskForm />} />
      </Routes>
    
  );
}

export default App;
