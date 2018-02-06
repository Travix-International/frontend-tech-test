import { connect } from 'react-redux';

import TodoBox from '../components/TodoBox';

const mapStateToProps = ({todo}) => {
  return {
    todos: todo.todoList,
    currPage: todo.currPage
  };
};

const TodoBoxContainer = connect(mapStateToProps)(TodoBox);

export default TodoBoxContainer;
