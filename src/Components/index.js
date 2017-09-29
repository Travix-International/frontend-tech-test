import { connect } from 'react-redux';
import TaskClient from '../Utilities/TasksClient';
import TodoList, { Todo } from './TodoList';
import TodoDialog from './TodoDialog';
import NotificationSnackBar from './NotificationSnackBar';
import AddTodo from './AddTodo';
import {
  loadTodos,
  finishLoadTodos,
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
    loading: state.loading,
  }),
  dispatch => ({
    loadTodos: () => {
      return TaskClient.getAll().then((json) => {
        dispatch(loadTodos(json.tasks));
      }).then(() => {
        dispatch(finishLoadTodos);
      }).catch(() => {
        dispatch(finishLoadTodos);
      });
    },
    removeTodo: (id, index) => {
      return TaskClient.delete(id).then(() => {
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
const ConnectedTodoDialog = connect(
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
)(TodoDialog);

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
  state => ({ loading: state.loading }),
  dispatch => ({
    openAddTodo: () => dispatch(openAddDetail),
  })
)(AddTodo);

export {
  ConnectedAddTodo,
  ConnectedTodoList,
  ConnectedTodoDialog,
  ConnectedNotificationSnackBar,
  Todo
};
