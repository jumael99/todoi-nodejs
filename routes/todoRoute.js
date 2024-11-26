import express from 'express';
import * as controllers from '../controller/todoController.js';

const router = express.Router();

// Task routes
router.post('/addnewTask', controllers.addNewTask);
router.post('/moveToCompleted/:taskId', controllers.moveToCompleted);
router.post('/moveToIncomplete/:taskId', controllers.moveToIncomplete);
router.get('/fetchtodayHeadings', controllers.fetchTodayHeadings);
router.get('/fetchtodayTask', controllers.fetchTodayTasks);
router.get('/fetchincompletetask', controllers.fetchIncompleteTasks);
router.get('/fetchcompletedtask', controllers.fetchCompletedTasks);
router.post('/notepush/:taskId', controllers.notePush);

export default router;