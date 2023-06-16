const { Router } = require("express");
const express = require("express");
const route = express.Router();
const Todo = require("../models/Todo");

Router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

router.post("/", async (req, res) => {
  const { title } = req.body;
  try {
    const todo = new Todo({ title });
    await todo.save();
    res.status(201).json(todo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
