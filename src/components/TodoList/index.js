import { connect } from 'react-redux';
import * as Actions from '../../actions';
import './TodoList.css';
import 'react-toastify/dist/ReactToastify.css';
import TodoList from './TodoListComponent'

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTodos: (len, offset) => {
          dispatch(Actions.fetchTodos(len, offset));
        },
        createNewEmptyTodo: (tasks) =>{
          dispatch(Actions.newEmptyTodo(tasks));
        },
        handleSocketMessage: (msg) => {
          dispatch(Actions.handleSocketMessage(msg));
        }
    };
};

const mapStateToProps = ( state ) => {
  return {
    tasks: state.todos.tasks
  }
};

export default connect(mapStateToProps ,mapDispatchToProps)(TodoList);
