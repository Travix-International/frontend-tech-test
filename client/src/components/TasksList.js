import React, {Component} from 'react';

const TasksList = ({tasks}) => {
    return (
       <ul>
           {tasks.map((v,k) => <li key={k}>{v.title}</li>)}
       </ul>
    )
}

export default TasksList;