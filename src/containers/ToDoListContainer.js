import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { getTodos }  from '../actions/todoActions';
import ToDoList from '../components/ToDoList';


const mapStateToProps = (state) => {
  return { 
    todos: state.todos
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getTodos: getTodos}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(ToDoList);
