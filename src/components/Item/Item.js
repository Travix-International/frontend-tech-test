import React from 'react'
import ButtonDelete from '../ButtonDelete/ButtonDelete'

const Item = ({id, title, description, deleteTask}) => (
  <li>
    <h3 className="task-title">
      {title}
      <ButtonDelete deleteTask={deleteTask} id={id}>Delete</ButtonDelete>
    </h3>

    <p className="task-description">{description}</p>
  </li>
)

export default Item
