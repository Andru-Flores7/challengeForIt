let task = [
  {
   id : 1,
   title : "Tarea 1",
   description : "Descripción de la tarea 1", 
   completed : false
  }
]; // Array para almacenar tareas

// obtener las tareas
const listTask = (req, res) => {
  res.json(task);
};

// crear una nueva tarea
const createTask = (req, res) => {
  try {
    console.log("Datos recibidos:", req.body);
    const { title, description } = req.body;

    if (!title || !description) {
      return res.status(400).json({ message: "Título y descripción son requeridos" });
    }

 
    const newTask = { id: Date.now(), title, description }; 
  // Guardarla en el array
  task.push(newTask);

    res.status(201).json({ message: "Tarea creada", task: newTask });
  } catch (error) {
    res.status(500).json({ message: "Error al crear la tarea", error });
  }
};


//Actualizar tarea
const updateTask = (req ,res) => {
    const { id } = req.params;
    const {title,description,completed} = req.body;

    const taskIndex = task.findIndex((task) => task.id == id);

    if (taskIndex === -1) {
        return res.status(404).json({ error: "Tarea no encontrada" });
    }
    task[taskIndex] = { ...task[taskIndex], title, description, completed };
    res.json(task[taskIndex]);
}
   
    const deleteTask = (req, res) => {
        const { id } = req.params;
        const taskIndex = task.findIndex((task) => task.id == id);
    
        if (taskIndex === -1) {
            return res.status(404).json({ error: "Tarea no encontrada" });
        }
        task.splice(taskIndex, 1);
        res.json({ message: "Tarea eliminada correctamente" });
    };  


module.exports = {
    listTask,
    createTask,     
    updateTask,
    deleteTask
};