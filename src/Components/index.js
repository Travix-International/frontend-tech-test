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
    addTodo: (titleValue, descriptionValue) => {
      const title = titleValue.trim();
      const description = !!descriptionValue.trim();
      if (!!title && !!description) {
        TaskClient.post(title, description).then((json) => {
          dispatch(addTodo(
            json.task
          ));
        });
      }
    },
    updateTodo: (index, id, titleValue, descriptionValue) => {
      const title = titleValue.trim();
      const description = !!descriptionValue.trim();
      if (!!title && !!description) {
        TaskClient.update(id, title, description).then((json) => {
          dispatch(updateTodo(
            index,
            json.task
          ));
        });
      }
    },
  }),
  (stateProps, dispatchProps, ownProps) => Object.assign(
    stateProps,
    dispatchProps,
    ownProps,
    {
      onAccept: ({ id, title, description }) => {
        if (stateProps.selectedTask) {
          console.info(stateProps.selectedTodoIndex,
            id, title, description);
          dispatchProps.updateTodo(
            stateProps.selectedTodoIndex,
            id, title, description
          );
        } else {
          dispatchProps.addTodo(title, description);
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
