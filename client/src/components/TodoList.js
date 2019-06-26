import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchTodoList, deleteTodo } from '../actions';
import DeleteTodo from './DeleteTodo';

export class TodoList extends Component {
    componentWillMount() {
        this.props.fetchTodoList();
    }

    handleDelete = id => {
        this.props.deleteTodo(id);
    }

    //generate todo list
    createList = getTodoList => {
        return getTodoList.map(todo => {
            return (
                <div className="item" key={todo.id}>
                    <div className="details">
                        <div className="title">
                            {todo.title}
                        </div>
                        <div className="description">
                            {todo.description}
                        </div>
                    </div>
                    <div className="actions">
                        <div className="edit">
                            <Link className="btn" to={`/edit/${todo.id}`}>
                                <i className="fa fa-pencil" aria-hidden="true"></i>
                            </Link>
                        </div>
                        <div className="delete">
                            <DeleteTodo id={todo.id} deleteTodo={this.handleDelete} />
                        </div>
                    </div>
                </div>
            )
        })
    }
    /* show alert when no tasks are created/found */
    showEmptyMessage = () => {
        return (
            <p className="alert alert-primary custom-alert" role="alert">No tasks found! Please create a new task</p>
        )
    }

    renderList = () => {
        if (this.props.getTodoList.length !== 0) {
            return this.createList(this.props.getTodoList);
        }
        return this.showEmptyMessage();
    }

    render() {
        return (
            <Fragment>
                {this.renderList()}
                <div className="actions create">
                    <Link className="btn" to='/create'>
                        <i className="fa fa-plus" aria-hidden="true"></i>
                    </Link>
                </div>
            </Fragment>
        );
    }
}

TodoList.propTypes = {
    fetchTodoList: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    getTodoList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        description: PropTypes.string
    }))
};

const mapStateToProps = (state) => {
    return {
        getTodoList: state.getTodoList.tasks
    };
}

export default connect(mapStateToProps, { fetchTodoList, deleteTodo })(TodoList);