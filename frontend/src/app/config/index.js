import TaskList from '../components/TaskList';

// Default routes
export const routes = {
  tasks: {
    path: '/',
    component: TaskList,
    excat: true,
    description: 'Task List'
  },
  viewTask: {
    path: '/tasks/:id',
    component: TaskList,
    excat: false,
    description: 'View Task'
  },
  newTask: {
    path: '/tasks/add',
    component: TaskList,
    excat: false,
    description: 'New Task'
  },
  editTask: {
    path: '/tasks/:id/edit',
    component: TaskList,
    excat: false,
    description: 'Edit Task'
  },
  deleteTask: {
    path: '/tasks/:id/delete',
    component: TaskList,
    excat: false,
    description: 'Delete Task'
  }
};

// Extract api config from env file
export const api = {
  domain: process.env.REACT_APP_API_HOST,
  port: process.env.REACT_APP_API_PORT,
  version: process.env.REACT_APP_API_VERSION
};
