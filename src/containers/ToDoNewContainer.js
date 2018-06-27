import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { addTask }  from '../actions/todoActions';
import ToDoNew from '../components/ToDoNew';


const mapStateToProps = (state) => {
  return { 
    todos: state.todos
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({addTask: addTask}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(ToDoNew);
