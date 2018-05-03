import React from 'react';


const ToDoItem = ({ toDo, toggleToDO, deleteToDO }) => (
    <li>
        <div
            className="text"
            onClick={toggleToDO}
        >
            {toDo.title}
        </div>
        <button
            className="delete"
            onClick={deleteToDO}
        >x
        </button>
    </li>
);

export default ToDoItem;
