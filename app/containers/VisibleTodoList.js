/**
 * Created by NarsFam on 08.07.2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { toggleTodo , fetchTasks} from '../actions'
import TodoList from '../components/TodoList'
import visibilities from '../consts/visibilityTypes'
import PropTypes from 'prop-types'

const getVisibleTodos = (todos, filter) => {
    debugger;
    switch (filter) {
        case visibilities.ALL:
            return todos;
        case visibilities.DONE:
            return todos.filter(t => t.completed);
        case visibilities.LEFT:
            return todos.filter(t => !t.completed);
        default:
            return todos;
    }
};
class VisibleTodoList extends Component {
    componentDidMount() {
        this.props.fetchData('/tasks');
    }
    render() {
        debugger;

        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the tasks</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }

        return (
            <ul>
                <TodoList todos={this.props.todos} onTodoClick={id => dispatch(toggleTodo(id))}/>
            </ul>
        );
    }

}
const mapStateToProps = state => {
    return {
        hasErrored: state.fetchingFailed,
        isLoading: state.isLoading,
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => {
            dispatch(toggleTodo(id));

        },
        fetchData: (url) => dispatch(fetchTasks(url))

    }
};

VisibleTodoList.propTypes = {
    fetchData: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired,
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
};

VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(VisibleTodoList);

export default VisibleTodoList