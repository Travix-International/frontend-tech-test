import {connect} from 'react-redux';
import TaskForm, {TaskFormComponentStateProps} from './Tasks.form.component';
import {TasksReduxState, REDUCER_NAME__TASKS} from "./Tasks.reducer";

const mapStateToProps = (state: any): TaskFormComponentStateProps => {
    const currentState: TasksReduxState = state[REDUCER_NAME__TASKS];
    return { errorWrapper: currentState.error }
};

const mapDispatchToProps = {};
export default connect<TaskFormComponentStateProps, any, any>(mapStateToProps, mapDispatchToProps)(TaskForm)
