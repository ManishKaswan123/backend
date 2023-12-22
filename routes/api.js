const express = require('express');
const apiRouter = express.Router();
const { createTask, allTasks, updatedTask, deletedTask } = require('../controller/apiController');


apiRouter
  .route('/tasks')
  .post(createTask)
  .get(allTasks);

apiRouter
  .route('/tasks/:id')
  .put(updatedTask)
  .delete(deletedTask);

module.exports = apiRouter;

