const express = require("express");
const router = express.Router();
const {
    getTask,
    createTask,
    updateTask,

} = require("../controllers/taskController");

router.get("/", getTask);
router.post("/", createTask);
router.put("/:id", updateTask);

module.exports = router;