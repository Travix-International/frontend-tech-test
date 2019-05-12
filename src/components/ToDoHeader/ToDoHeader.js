import React from 'react';

import * as styles from './ToDoHeader.scss';

const toDoHeader = (props) => {
    return (
        <h1 className={styles.title}>{props.title}</h1>
    )
}

export default toDoHeader;