import React, { Component } from 'react';


const ToDoItem = ({toDo, onClick}) => (
    <li>
        <div className="text" onClick={onClick}>
            {this.props.toDo.text}
        </div>
    </li>
);

export default ToDoItem;
