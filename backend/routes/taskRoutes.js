import express from "express";
import { verifyToken } from "../middleware/authMiddleware.js";
import Task from "../models/Task.js";

const router = express.Router();

// ✅ Create Task
router.post("/", verifyToken, async (req, res) => {
  try {
    const { title, description } = req.body;
    const newTask = new Task({
      title,
      description,
      userId: req.user.id,
    });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error creating task", error: err.message });
  }
});

// ✅ Get all tasks for a user
router.get("/", verifyToken, async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.user.id });
    res.json(tasks);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching tasks", error: err.message });
  }
});

// ✅ Update a task
router.put("/:id", verifyToken, async (req, res) => {
  try {
    const updatedTask = await Task.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id },
      req.body,
      { new: true }
    );
    res.json(updatedTask);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error updating task", error: err.message });
  }
});

// ✅ Delete a task
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    await Task.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
    res.json({ message: "Task deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error deleting task", error: err.message });
  }
});

export default router;
