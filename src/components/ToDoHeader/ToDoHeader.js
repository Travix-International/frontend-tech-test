import React from 'react';

import './ToDoHeader.scss';

const toDoHeader = (props) => {
    return (
        <h1 className="appTitle">{props.title}</h1>
    )
}

export default toDoHeader;