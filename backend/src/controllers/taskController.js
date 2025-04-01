let task = []; // Array para almacenar tareas


// obtener las tareas 
const getTask = (req, res) => {
    res.jspn(task);
}

// crear una nueva tarea
const createTask = (req,res) => {
    const {title, description} = req.body;

    if (!title) {
        return res.estatus(400).json({ error: "el titulo es requerido"})    
    }

    const newTask = {
        id: Date.now(),title,description,completed: false,};
        tasks.push(newTask);
        task.push(newTask);
         res.json(newTask);
    }
    
