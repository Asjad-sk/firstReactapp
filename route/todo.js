const express = require("express");
const { createTodo, getTodo, getsingleTodo, updateTodo, deleteTodo, completeTodo } = require("../controller/todo");
const router = express.Router(); // Add parentheses to invoke express.Router()


router.post("/createtodo",createTodo )
.get("/alltodo",getTodo)
.get("/:id",getsingleTodo)
.put("/update/:id",updateTodo)
.delete("/delete/:id",deleteTodo)


module.exports = router;
