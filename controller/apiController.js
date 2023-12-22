const Task = require("../models/Task");

// Get All Tasks
const allTasks = async(req , res) => {
    try {
        let tasks = await Task.find();
        if(tasks) {
            res.json({
                message: "tasks retrieved",
                data: tasks
            });
        }
        else {
            res.json({
                message: "There are no tasks"
            });
        }
    }
    catch(err) {
        res.json({
            message: err.message
        });
    }
};

// Create New Task
const createTask = async(req , res) => {
    try {
        const { title, description } = req.body;
        if(title && description) {
            const newTask = new Task({ title, description });
            await newTask.save();
            res.json(newTask);
        }
        else {
            res.json({
                message: "Please Enter Title and Description"
            });
        }
    } 
    catch (err) {
        res.json({
            message: err.message
        });
    }
}

// Update Task
const updatedTask = async(req , res) => {
    try {
        let id = req.params.id;
        if(id) {
            const { title, description } = req.body;
            const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            { title, description },
            { new: true }
            );
            res.json(updatedTask);
        }
        else {
            res.json({
                message: "This task does not exist any more"
            })
        }
    } 
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Delete Task
const deletedTask = async(req , res) => {
    try {
        let id = req.params.id;
        if(id) {
            const deletedTask = await Task.findByIdAndDelete(req.params.id);
            res.json({
                message: "Task is deleted successfully",
                data: deletedTask
            });
        }
        else {
            res.json({
                message: "This task does not find"
            });
        }
    } 
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {updatedTask , allTasks , createTask , deletedTask};