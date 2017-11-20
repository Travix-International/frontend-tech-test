import React from 'react'
import './ButtonDelete.css'

const ButtonDelete = ({ id, children, deleteTask }) => (
  <span className="button-delete">
    <a className="button" onClick={() => deleteTask(id)}>{children}</a>
  </span>
)

export default ButtonDelete
