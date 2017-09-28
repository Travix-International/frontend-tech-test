import { connect } from 'react-redux';
import TaskClient from '../Utilities/TasksClient';
import TodoList, { Todo } from './TodoList';
import TaskDialog from './TaskDialog';
import NotificationSnackBar from './NotificationSnackBar';
import AddTodo from './AddTodo';
import {
  loadTodos,
  addTodo,
  updateTodo,
  removeTodo,
  selectTodoIndex,
  clearDeletedTodo,
  openAddDetail,
  clearOpenedDetail
} from '../app.ducks';

// Todo list
const ConnectedTodoList = connect(
  state => ({
    todos: state.todos,
  }),
  dispatch => ({
    loadTodos: () => {
      TaskClient.get().then((json) => {
        dispatch(loadTodos(json.tasks));
      });
    },
    removeTodo: (id, index) => {
      TaskClient.delete(id).then(() => {
        dispatch(removeTodo(
          index
        ));
      });
    },
    selectTodoIndex: (index) => {
      dispatch(selectTodoIndex(index));
      dispatch(openAddDetail);
    },
  })
)(TodoList);

// Task dialog
const ConnectedTaskDialog = connect(
  state => ({
    selectedTodoIndex: state.selectedTodoIndex,
    selectedTask: state.todos[state.selectedTodoIndex],
    open: state.todoDetail !== null
  }),
  dispatch => ({
    dispatch
  }),
  (stateProps, dispatchProps, ownProps) => Object.assign(
    stateProps,
    dispatchProps,
    ownProps,
    {
      onAccept: ({ id, title, description }) => {
        if (!!title || !!description) {
          if (stateProps.selectedTask) {
            TaskClient.update(id, title, description).then((json) => {
              dispatchProps.dispatch(updateTodo(
                stateProps.selectedTodoIndex,
                json.task
              ));
            });
          } else {
            TaskClient.post(title, description).then((json) => {
              dispatchProps.dispatch(addTodo(
                json.task
              ));
            });
          }
        }
        dispatchProps.dispatch(clearOpenedDetail);
      },
      onCancel: () => dispatchProps.dispatch(clearOpenedDetail)
    }
  )
)(TaskDialog);

// Notification Snack bar
const ConnectedNotificationSnackBar = connect(
  state => ({
    open: state.deletedTodoIndex !== null
  }),
  dispatch => ({
    onClose: () => dispatch(clearDeletedTodo)
  })
)(NotificationSnackBar);

// Add to do button
const ConnectedAddTodo = connect(
  null,
  dispatch => ({
    openAddTodo: () => dispatch(openAddDetail),
  })
)(AddTodo);

export {
  ConnectedAddTodo,
  ConnectedTodoList,
  ConnectedTaskDialog,
  ConnectedNotificationSnackBar,
  Todo
};
