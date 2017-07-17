/**
 * Created by NarsFam on 08.07.2017.
 */
import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, title, description }) => (
    <li
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}
    >
        <h3> {title}     <button className="btn-xs  btn-success" style={{marginLeft: "10px"}} onClick={onClick}> &#32;&#32;&#8744;	</button>
        </h3>

    </li>
);

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired
};

export default Todo;