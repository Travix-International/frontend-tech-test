import { connect } from 'react-redux';
import TaskClient from '../Utilities/TasksClient';
import TodoList, { Todo } from './TodoList';
import TodoForm from './TodoForm';
import { loadTasks, addTask, removeTask } from '../app.ducks';

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
    }
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

export {
  ConnectedTodoList,
  ConnectedTodoForm,
  TodoForm,
  Todo
};
