import React from 'react'

const ButtonDelete = ({ id, children, deleteTask }) => (
  <span className="button-delete">
    <button onClick={() => deleteTask(id)}>{children}</button>
  </span>
)

export default ButtonDelete
