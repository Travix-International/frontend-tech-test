import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { getOneTask }  from '../actions/todoActions';
import ToDoItem from '../components/ToDoItem';

const mapStateToProps = (state) => {
  return { 
    todos: state.todos
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getOneTask: getOneTask}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(ToDoItem);
