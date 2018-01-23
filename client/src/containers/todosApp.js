import React, {Component} from 'react';
//import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import TasksList from '../components/TasksList';
import AddTaskInput from '../components/AddTaskInput';
import {getAllTasks, addNewTask, deleteTask, toggleTask} from '../actions/todoActions';


class todosApp extends Component {

    componentDidMount() {
        this.props.getAllTasks();
    }

    render() {
        return (
            <div className="wrapper">
                <header>
                    <div className="container">
                        <h1>Let's get some work done !</h1>
                        <AddTaskInput {...this.props} />
                    </div>
                </header>
                <div className="container">
                    <TasksList {...this.props} />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
   return state;
}

//function mapDispatchToProps(dispatch) {
//    return bindActionCreators({getAllTasks, addNewTask}, dispatch);
//}

const mapDispatchToProps = {getAllTasks, addNewTask, deleteTask, toggleTask};

export default connect(mapStateToProps, mapDispatchToProps)(todosApp);