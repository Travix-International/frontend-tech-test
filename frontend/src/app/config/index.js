import List from '../components/List';

// Default routes
export const routes = {
  tasks: {
    path: '/',
    component: List,
    excat: true,
    description: 'Task List'
  },
  viewTask: {
    path: '/task/:id',
    component: List,
    excat: false,
    description: 'View Task'
  },
  newTask: {
    path: '/tasks/add',
    component: List,
    excat: false,
    description: 'New Task'
  },
  editTask: {
    path: '/tasks/:id/edit',
    component: List,
    excat: false,
    description: 'Edit Task'
  },
  deleteTask: {
    path: '/tasks/:id/delete',
    component: List,
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
