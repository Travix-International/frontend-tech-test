/**
 * Created by NarsFam on 08.07.2017.
 */
import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text }) => (
    <li
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}
    >
        {text}
        <button className="btn-xs  btn-success" onClick={onClick}> &#32;&#32;&#8744;	</button>
    </li>
);

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

export default Todo;