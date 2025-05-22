const express = require("express");
const router = express.Router();
const {
    listTask,
    createTask,
    updateTask,
    deleteTask,
    getTaskById
} = require("../controllers/taskController");

router.get("/", listTask);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask); 
router.get("/:id", getTaskById);

module.exports = router;