import './Task.css';
import { connect } from 'react-redux';
import * as Actions from '../../actions';
import Task from './TaskComponent';

const mapDispatchToProps = (dispatch) => {
    return {
        saveTask: (task) =>{
          if(task.isNew)
            dispatch(Actions.addTodo(task));
          else
            dispatch(Actions.updateTodo(task));
        },
        deleteTask: (task) => {
          if(task.isNew)
            dispatch(Actions.deleteTodoLocally(task.id));
          else
            dispatch(Actions.deleteTodo(task.id));
        }
    };
};


export default connect(null ,mapDispatchToProps)(Task);
