const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const tralog = require('travix-logger');
const uuidv1 = require('uuid/v1');

const actionTypes = require('./actions');
const tasksContainer = require('./tasks.json');

const logger = new tralog.Logger({
  transports: [
    tralog.configureConsoleTransport(),
  ],
});

/**
 * title: string
 * description: string
 *
 * Add a new task to the array tasksContainer.tasks with the given title and description.
 * Return created task.
 */
const addTask = ({ title, description }) => {
  if (!title || !description) {
    throw new Error('Title or description is missing');
  } else {
    const task = {
      id: uuidv1(),
      completed: false,
      title,
      description,
    };
    tasksContainer.tasks.push(task);
    return task;
  }
};


/**
 * id: string
 *
 * Delete the task linked to the  given id.
 * Return deleted task's id
 */
const deleteTask = (id) => {
  if (!id) {
    throw new Error('Id is missing');
  } else {
    const taskIndex = tasksContainer.tasks.findIndex(task => task.id === id);
    if (taskIndex === -1) {
      throw new Error(`There is no task with this id: ${id}`);
    } else {
      tasksContainer.tasks.splice(taskIndex, 1);
      return id;
    }
  }
};

/**
 * id: string
 * completed: boolean
 * title: string
 * description: string
 *
 * Update the task with the given id.
 * Return updated task's
 */
const updateTask = ({ id, completed, title, description }) => {
  if (!id || !title || !description) {
    throw new Error('Id, title or description is missing');
  } else {
    const task = tasksContainer.tasks.find(item => item.id === id);
    if (!task) {
      throw new Error(`There is no task with this id: ${id}`);
    } else {
      task.title = title;
      task.description = description;
      task.completed = !!completed;
      return task;
    }
  }
};

io.on('connection', (socket) => {
  socket.on(actionTypes.GET_TASKS, () => {
    socket.emit(actionTypes.ALL_TASKS, tasksContainer.tasks);
  });

  socket.on(actionTypes.ADD_TASK, (data) => {
    try {
      socket.emit(actionTypes.TASK_ADDED, addTask(data));
      logger.info(actionTypes.TASK_ADDED, 'task added to container successfully', { data });
    } catch (error) {
      socket.emit(actionTypes.ERROR, error.message);
      logger.info(actionTypes.ERROR, error.message);
    }
  });

  socket.on(actionTypes.DELETE_TASK, (id) => {
    try {
      socket.emit(actionTypes.TASK_DELETED, deleteTask(id));
      logger.info(actionTypes.TASK_DELETED, 'task deleted from container successfully', { id });
    } catch (error) {
      socket.emit(actionTypes.ERROR, error.message);
      logger.info(actionTypes.ERROR, error.message);
    }
  });

  socket.on(actionTypes.UPDATE_TASK, (data) => {
    try {
      socket.emit(actionTypes.TASK_UPDATED, updateTask(data));
      logger.info(actionTypes.TASK_UPDATED, 'task updated successfully', { data });
    } catch (error) {
      socket.emit(actionTypes.ERROR, error.message);
      logger.info(actionTypes.ERROR, error.message);
    }
  });
});

server.listen(9001, () => {
  process.stdout.write('the server is available on http://localhost:9001/\n');
});
