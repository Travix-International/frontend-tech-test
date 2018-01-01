import React from 'react';
import PropTypes from 'prop-types';
import Todo from '../todo';

import './styles.less';

const TodoList = (props) => {
    return (
        <div className="todo-list">
            {props.todos.map(todo => <Todo {...todo} key={todo.id} />)}
        </div>
    );
};

TodoList.propTypes = {
    todos: PropTypes.array,
};

TodoList.defaultProps = {
    todos: [],
};

export default TodoList;
