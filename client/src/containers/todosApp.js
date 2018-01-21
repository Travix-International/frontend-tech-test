import React, {Component} from 'react';
import * as actions from '../actions/todoActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import TasksList from '../components/TasksList';
import AddTaskInput from '../components/AddTaskInput';

class todosApp extends Component {
    render() {
        return (
            <div className="container">
                <h1>Let's get some stuff done quickly</h1>
                <AddTaskInput {...this.props} />
                <TasksList {...this.props} />
            </div>
        )
    }
}

function mapStateToProps(state) {
   return state;
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(todosApp);