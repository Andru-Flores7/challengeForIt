let task = []; // Array para almacenar tareas

// obtener las tareas
const getTask = (req, res) => {
  res.jspn(task);
};

// crear una nueva tarea
const createTask = (req, res) => {
  const { title, description } = req.body;

  if (!title) {
    return res.estatus(400).json({ error: "el titulo es requerido" });
  }

  const newTask = {
    id: Date.now(),
    title,
    description,
    completed: false,
  };
  tasks.push(newTask);
  task.push(newTask);
  res.status(201).json(newTask);
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