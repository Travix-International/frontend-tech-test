import React from 'react';

const Task = (props) => {
  return (
    <li onClick = {props.clickHandler}>
      <p>{props.todo.title}</p>
      <p>{props.todo.description}</p>
    </li>
  )
}

export default Task
