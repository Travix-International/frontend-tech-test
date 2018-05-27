import { connect } from 'react-redux';
import * as Actions from '../../actions';
import './TodoList.css';
import 'react-toastify/dist/ReactToastify.css';
import TodoList from './TodoListComponent'

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTodos: () => {
          dispatch(Actions.fetchTodos());
        },
        createNewEmptyTodo: (tasks) =>{
          dispatch(Actions.newEmptyTodo(tasks));
        }
    };
};

const mapStateToProps = ( state ) => {
  return {
    tasks: state.todos.tasks,
    toastMessage:state.toastMessage
  }
};

export default connect(mapStateToProps ,mapDispatchToProps)(TodoList);
