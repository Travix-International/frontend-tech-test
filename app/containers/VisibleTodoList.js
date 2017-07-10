/**
 * Created by NarsFam on 08.07.2017.
 */
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import visibilities from '../consts/visibilityTypes'

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

const mapStateToProps = state => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => {
            dispatch(toggleTodo(id));
        }
    }
};

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList