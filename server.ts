import * as app from 'express';
import * as cors from 'cors';
import * as SocketIO from 'socket.io'
interface ITask {
  title: string;
  description?: string;
  id: number;
}

interface ITaskContainer {
  tasks: Array<ITask>;
}

const ERROR_MESSAGES = Object.freeze({
  404: 'Not found.',
  400: 'Bad request.'
});

const SUCCESS_MESSAGES = Object.freeze({
  TASK_UPDATED: 'Todo Item Updated Successfully',
  TASK_CREATED: 'Todo Item Created Successfully',
  TASK_DELETED: 'Todo Item Deleted Successfully',
})

const ROUTES = Object.freeze({
  TASKLIST: '/tasks',
  TASK: '/task/:id',
  UPDATETASK: '/task/update/:id/:title/:description',
  CREATETASK: `/task/create/:title/:description`,
  DELETETASK: '/task/delete/:id'
})

const PORT = 9001;

const ADDRESS = `http://localhost`;

class Task {
  tasksContainer: ITaskContainer;
  _app: any;
  _io:any;
  _server:any;
  constructor() {
    this._app = app();
    this._app.use(cors())
    this._server = this._app.listen(PORT, () => {
      process.stdout.write(`the server is available on ${ADDRESS}:${PORT}/\n`);
    });
    this._io = SocketIO(this._server);

    this._io.on('connection', socket => {
      console.log('Socket connetced...')
      socket.on('itemsAltered', () => {
        console.log('Items Altered...')
        this._io.sockets.emit('itemsAltered', this.tasksContainer.tasks)
      })
    })

    // this.tasksContainer = { tasks: new Array() };
    this.tasksContainer = { tasks: new Array(100).fill({}).map((e,index)=>{return {title:'ahahaah'+Number(index+1),description:'dsdfsdfsdfsdfsdasdafsdf',id:index+1}}) };
    // const tasksContainer = require('./tasks.json');


    /**
     * GET /tasks
     * 
     * Return the list of tasks with status code 200.
     */
    this._app.get(ROUTES.TASKLIST, (req, res) => {
      console.log('tasklist:', this.tasksContainer.tasks)
      return res.status(200).json({...{status:200},...this.tasksContainer});
    });


    /**
     * Get /task/:id
     * 
     * id: Number
     * 
     * Return the task for the given id.
     * 
     * If found return status code 200 and the resource.
     * If not found return status code 404.
     * If id is not valid number return status code 400.
     */
    this._app.get(ROUTES.TASK, (req, res) => {
      const id = parseInt(req.params.id, 10);
      console.log('task:', req.params)
      if (!isNaN(id)) {
        const task = this.tasksContainer.tasks.find((item) => item.id === id);

        if (task !== null) {
          return res.status(200).json({
            task,
          });
        } else {
          return res.status(404).json({
            status:404,
            message: ERROR_MESSAGES[404],
          });
        }
      } else {
        return res.status(400).json({
          status:400,
          message: ERROR_MESSAGES[400],
        });
      }
    });

    /**
     * PUT /task/update/:id/:title/:description
     * 
     * id: Number
     * title: string
     * description: string
     * 
     * Update the task with the given id.
     * If the task is found and update as well, return a status code 204.
     * If the task is not found, return a status code 404.
     * If the provided id is not a valid number return a status code 400.
     */
    this._app.put(ROUTES.UPDATETASK, (req, res) => {
      console.log('task:', req.params)
      const id = parseInt(req.params.id, 10);

      if (!isNaN(id)) {
        const task = this.tasksContainer.tasks.find(item => item.id === id);

        if (task !== null) {
          task.title = req.params.title;
          task.description = req.params.description;
          return res.status(204).json({
            status:204,
            message: SUCCESS_MESSAGES.TASK_UPDATED
          });
        } else {
          return res.status(404).json({
            status:404,
            message: ERROR_MESSAGES[404],
          });
        }
      } else {
        return res.status(400).json({
          status:400,
          message: ERROR_MESSAGES[400],
        });
      }
    });

    /**
     * POST /task/create/:title/:description
     * 
     * title: string
     * description: string
     * 
     * Add a new task to the array tasksContainer.tasks with the given title and description.
     * Return status code 201.
     */
    this._app.post(ROUTES.CREATETASK, (req, res) => {
      console.log('task:', req.params)
      const task = {
        id: this.tasksContainer.tasks.length + 1,
        title: req.params.title,
        description: req.params.description,
      };

      this.tasksContainer.tasks = [...this.tasksContainer.tasks, ...[task]];
      return res.status(201).json({
        status:201,
        message: SUCCESS_MESSAGES.TASK_CREATED,
      });
    });

    /**
     * DELETE /task/delete/:id
     * 
     * id: Number
     * 
     * Delete the task linked to the  given id.
     * If the task is found and deleted as well, return a status code 204.
     * If the task is not found, return a status code 404.
     * If the provided id is not a valid number return a status code 400.
     */
    this._app.delete(ROUTES.DELETETASK, (req, res) => {
      let failedIds = [];
      const ids = req.params.id.split(',').map((id) => {
        // const id = parseInt(req.params.id, 10);

        if (!isNaN(id)) {
          const task = this.tasksContainer.tasks.find(item => item.id === Number(id));
          if (task !== null) {
            this.tasksContainer.tasks = this.tasksContainer.tasks.filter((_task) => _task.id !== task.id);
          } else {
            failedIds = [...failedIds, ...[id]]
          }
        } else {
          failedIds = [...failedIds, ...[id]]
        }
      });
      if (failedIds.length > 0) {
        return res.status(400).json({
          status:400,
          message: ERROR_MESSAGES[400],
        });
      } else {
        return res.status(200).json({
          status:200,
          message: SUCCESS_MESSAGES.TASK_DELETED,
        });
      }
    });
  }
}

const task = new Task();