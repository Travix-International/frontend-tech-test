import React from 'react';
import {
    fetchTasks
} from '../actions';
import { connect } from 'react-redux';

/**
 * This HOC component can be used to render any type of todo list
 * Currently used to fetch all types of todo list.
 * @param {*} Component 
 */
export const withList = (Component) => {
    class WithList extends React.Component {
        state = {
            tasks: []
        };

        componentDidMount() {
            this.props.fetchTasks(this.props.type);
        }
        render() {
            return (
                <Component
                    tasks={this.props.todoItems}
                    {...this.props}
                />
            );
        }
    }

    const mapStateToProps = (state, props) => {
        const todos = state.todos;
        return {
            todoItems: (todos && todos[props.type]) || {},
            fetchInProgress: todos.fetchInProgress
        };
    };

    const mapDispatchToProps = (dispatch) => {
        return {
            fetchTasks: (todoType) => dispatch(fetchTasks(todoType))
        };
    }

    return connect(mapStateToProps, mapDispatchToProps)(WithList);
};
