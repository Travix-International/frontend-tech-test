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
        //this.props.fetchData('/tasks');
    }

    render() {

        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the tasks</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }
        //debugger;

        return (
            <TodoList todos={this.props.todos} onTodoClick={this.props.toggleTodo}/>
        );
    }


}
const mapStateToProps = state => {

    const { todoStore } = state;

    return {
         hasErrored: todoStore.fetchingFailed,
         isLoading: todoStore.isLoading,
         todos:  getVisibleTodos(todoStore.todos, todoStore.visibilityFilter)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        toggleTodo: id => dispatch(toggleTodo(id)) ,
        fetchData: (url) => dispatch(fetchTasks(url))
    }
};

VisibleTodoList.propTypes = {
    fetchData: PropTypes.func.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired,
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
};

VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(VisibleTodoList);

export default VisibleTodoList