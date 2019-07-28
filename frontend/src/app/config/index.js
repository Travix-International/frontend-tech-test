import TaskList from '../components/TaskList';
import TaskView from '../components/TaskView';

// Default routes
export const routes = {
  tasks: {
    path: '/',
    component: TaskList,
    exact: true,
    description: 'Task List'
  },
  viewTask: {
    path: '/tasks/:id',
    component: TaskView,
    exact: true,
    description: 'View Task'
  },
  newTask: {
    path: '/tasks/add',
    component: TaskList,
    exact: false,
    description: 'New Task'
  },
  editTask: {
    path: '/tasks/:id/edit',
    component: TaskList,
    exact: false,
    description: 'Edit Task'
  },
  deleteTask: {
    path: '/tasks/:id/delete',
    component: TaskList,
    exact: false,
    description: 'Delete Task'
  }
};

// Extract api config from env file
export const api = {
  domain: process.env.REACT_APP_API_HOST,
  port: process.env.REACT_APP_API_PORT,
  version: process.env.REACT_APP_API_VERSION
};
