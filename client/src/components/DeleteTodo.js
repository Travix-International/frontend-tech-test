import React from 'react';

const DeleteTodo = props => {
    return (
        <button className="btn" onClick={() => props.deleteTodo(props.id)}>
            <i className="fa fa-trash"></i>
        </button>
    );
};

export default DeleteTodo;


