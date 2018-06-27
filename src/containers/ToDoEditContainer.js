import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { getOneTask, editTask }  from '../actions/todoActions';
import ToDoEdit from '../components/ToDoEdit';


const mapStateToProps = (state) => {
  return { 
    todos: state.todos
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getOneTask: getOneTask, editTask: editTask}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(ToDoEdit);
