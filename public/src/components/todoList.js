import React from 'react';
import ActionCreator from '../actions/actionCreator';
import { FILTERS } from '../utils/enums';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TaskItem  from './taskItem';

class TodoList extends React.Component {
    render() {
        let filteredTasks = this.getFilteredTasks();
        return(
            <ul className="todo-list">
                {filteredTasks.map(task =>
                <TaskItem key={task.id} task={task} />
                )}
            </ul>
        );
    }

    getFilteredTasks() {
        switch (this.props.filter) {
            case FILTERS.SHOW_ALL:
                return this.props.tasklist;
            case FILTERS.ACTIVE:
                return this.props.tasklist.filter(task => !task.completed);
            case FILTERS.COMPELTED:
                return this.props.tasklist.filter(task => task.completed);
            default:
                return this.props.tasklist;
        }
    }
}
const mapStateToProps = (state) => {
    return {
        filter: state.visibilityFilter,
        tasklist: state.tasklist
    }
}

export default connect(mapStateToProps)(TodoList);