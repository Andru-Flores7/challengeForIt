const express = require("express");
const router = express.Router();
const {
    listTask,
    createTask,
    updateTask,
    deleteTask
} = require("../controllers/taskController");

router.get("/", listTask);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask); 

module.exports = router;