import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { deleteTask }  from '../actions/todoActions';
import ToDoControls from '../components/ToDoControls';


const mapStateToProps = (state, ownProps) => {
  return { 
    todos: state.todos
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({deleteTask: deleteTask}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(ToDoControls);
