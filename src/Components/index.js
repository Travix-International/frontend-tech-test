import { connect } from 'react-redux';
import TaskClient from '../Utilities/TasksClient';
import TodoList, { Todo } from './TodoList';
import TodoForm from './TodoForm';
import TaskDialog from './TaskDialog';
import NotificationSnackBar from './NotificationSnackBar';
import {
  loadTasks,
  addTask,
  removeTask,
  selectTaskIndex,
  unselectTaskIndex,
  clearDeltedTask
} from '../app.ducks';

const ConnectedTodoList = connect(
  state => ({
    todos: state.todos,
  }),
  dispatch => ({
    loadTasks: () => {
      TaskClient.get().then((json) => {
        dispatch(loadTasks(json.tasks));
      });
    },
    removeTask: (id, index) => {
      TaskClient.delete(id).then(() => {
        dispatch(removeTask(
          index
        ));
      });
    },
    selectTaskIndex: index => dispatch(selectTaskIndex(index)),
  })
)(TodoList);

const ConnectedTodoForm = connect(
  state => ({
    todos: state.todos,
  }),
  dispatch => ({
    addTask(titleValue, descriptionValue) {
      const title = titleValue.trim();
      const description = !!descriptionValue.trim();
      if (!!title && !!description) {
        TaskClient.post(title, description).then((json) => {
          dispatch(addTask(
            json.task
          ));
        });
      }
    }
  })
)(TodoForm);

const ConnectedTaskDialog = connect(
  state => ({
    selectedTask: state.todos[state.selectedTaskIndex],
    open: state.selectedTaskIndex !== null
  }),
  dispatch => ({
    onAccept: () => dispatch(unselectTaskIndex),
    onCancel: () => dispatch(unselectTaskIndex)
  })
)(TaskDialog);

const ConnectedNotificationSnackBar = connect(
  state => ({
    open: state.deletedTaskIndex !== null
  }),
  dispatch => ({
    onClose: () => dispatch(clearDeltedTask)
  })
)(NotificationSnackBar);

export {
  ConnectedTodoList,
  ConnectedTodoForm,
  ConnectedTaskDialog,
  ConnectedNotificationSnackBar,
  TodoForm,
  Todo
};
