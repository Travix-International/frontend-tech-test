import TaskList from './components/TaskList';
import TaskView from './components/TaskView';

// Default routes
const routes = {
  tasks: {
    path: '/',
    component: TaskList,
    exact: true,
    description: 'Task List'
  },
  newTask: {
    path: '/tasks/add',
    component: TaskList,
    exact: true,
    description: 'Add New Task'
  },
  viewTask: {
    path: '/tasks/:id',
    component: TaskView,
    exact: false,
    description: 'View Task'
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

export default routes;
