import { connect } from 'react-redux';

import TodoBox from '../components/TodoBox';

const mapStateToProps = ({todo}) => {
  return {
    todos: todo.todoList
  };
};

const TodoBoxContainer = connect(mapStateToProps)(TodoBox);

export default TodoBoxContainer;
