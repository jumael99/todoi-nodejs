import { TodayTask, CompletedTask, IncompletedTask } from '../models/todoModel.js';

export const addNewTask = async (req, res) => {
    try {
        const newTask = await TodayTask.create({
            taskHeading: req.body.taskHeading,
            completedNote: req.body.completedNote || ''
        });
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const moveToCompleted = async (req, res) => {
    try {
        const task = await TodayTask.findById(req.params.taskId);
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }

        const completedTask = await CompletedTask.create({
            taskHeading: task.taskHeading,
            completedNote: task.completedNote
        });

        await TodayTask.findByIdAndDelete(req.params.taskId);
        res.json(completedTask);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const moveToIncomplete = async (req, res) => {
    try {
        const task = await TodayTask.findById(req.params.taskId);
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }

        const incompleteTask = await IncompletedTask.create({
            taskHeading: task.taskHeading,
            completedNote: task.completedNote
        });

        await TodayTask.findByIdAndDelete(req.params.taskId);
        res.json(incompleteTask);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const fetchTodayHeadings = async (req, res) => {
    try {
        const tasks = await TodayTask.find({}, 'taskHeading');
        res.json(tasks.map(task => task.taskHeading));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const fetchTodayTasks = async (req, res) => {
    try {
        const tasks = await TodayTask.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const fetchIncompleteTasks = async (req, res) => {
    try {
        const tasks = await IncompletedTask.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const fetchCompletedTasks = async (req, res) => {
    try {
        const tasks = await CompletedTask.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const notePush = async (req, res) => {
    try {
        const task = await IncompletedTask.findById(req.params.taskId);
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }

        const completedTask = await CompletedTask.create({
            taskHeading: task.taskHeading,
            completedNote: task.completedNote
        });

        await IncompletedTask.findByIdAndDelete(req.params.taskId);
        res.json(completedTask);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};