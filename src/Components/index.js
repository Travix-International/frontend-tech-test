import { connect } from 'react-redux';
import TaskClient from '../Utilities/TasksClient';
import TodoList, { Todo } from './TodoList';
import { loadTasks } from '../app.ducks';

const LoadedTodoList = connect(
  state => ({
    todos: state.todos,
  }),
  dispatch => ({
    loadTasks() {
      TaskClient.get().then((json) => {
        dispatch(loadTasks(json.tasks));
      });
    }
  })
)(TodoList);

export {
  LoadedTodoList,
  Todo
};
